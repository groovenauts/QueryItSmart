import re
import math
import json
import numpy as np
import tensorflow as tf
from tensorflow.python.platform import gfile

tf.logging.set_verbosity(tf.logging.INFO)

flags = tf.app.flags
flags.DEFINE_string("training_csv", "gs://queryit-smart-us-east1/citibike/training_data.csv", "File path or GCS URL of training data csv.")
flags.DEFINE_string("weights_json", "gs://queryit-smart-us-east1/citibike/weights.json", "File path or GCS URL of output JSON file.")
flags.DEFINE_integer("max_steps", 10000000, "Maximum steps for training.")
FLAGS = tf.app.flags.FLAGS

def normalize_geolocation(lat, lng):
     return (float(lat) - 40.7276)*10.0, (float(lng) + 73.9839)*10.0

def read_training_datasets(filepath):
    x = []
    y = []
    with tf.gfile.GFile(FLAGS.training_csv) as f:
        line = f.readline()
        while line and len(line) > 0:
            try:
                month, wday, hour, stid, lat, lng, temp, weather, usage = line.split(",")
                lat, lng = normalize_geolocation(lat, lng)
                vec = np.zeros((12 + 7 + 24 + 1 + 1 + 1 + 3,))
                vec[int(month)-1] = 1.0
                vec[12+int(wday)-1] = 1.0
                vec[12+7+int(hour)] = 1.0
                vec[12+7+24] = float(lat)
                vec[12+7+24+1] = float(lng)
                vec[12+7+24+1+1] = float(temp)
                vec[12+7+24+1+1+1+int(weather)] = 1.0
                x.append(vec)
                label = float(usage)
                y.append([label])
                line = f.readline()
            except ValueError:
                print("ValueError for line {}".format(line))
                raise
    return np.array(x), np.array(y)

X, Y = read_training_datasets(FLAGS.training_csv)
total_data_size = X.shape[0]

tf.logging.info("Loading training data done.")
tf.logging.info("X = {}. Y = {}".format(X.shape, Y.shape))

shuffle_idx = np.random.permutation(total_data_size)
X = X[shuffle_idx]
Y = Y[shuffle_idx]

def generate_batch_data(x, y, batch_size, offset_index):
    if offset_index + batch_size < total_data_size:
        batch_x = x[offset_index:offset_index+batch_size]
        batch_y = y[offset_index:offset_index+batch_size]
        offset_index += batch_size
    else:
        overlay = batch_size - (total_data_size - offset_index)
        batch_x = np.vstack([x[offset_index:], x[:overlay]])
        batch_y = np.vstack([y[offset_index:], y[:overlay]])
        offset_index = overlay
    return batch_x, batch_y, offset_index


# Build model graph

graph = tf.Graph()
batch_size = 512
feature_size = X.shape[1]
hidden_unit_nums = [300, 150, 150, 150]
variables = {}

def dump_weights(variables, filepath):
    with open(".weights.json", "w") as f:
        data = { key: variables[key].tolist() for key in variables}
        f.write(json.dumps(data))
    gfile.Copy(".weights.json", filepath)


with graph.as_default():
    with tf.name_scope("placeholders"):
        features = tf.placeholder(tf.float32, shape=(batch_size, feature_size))
        labels = tf.placeholder(tf.float32, shape=(batch_size, 1))

    prev_unit_num = feature_size
    prev_layer = features
    for layer_index, unit_num in enumerate(hidden_unit_nums):
        with tf.variable_scope("hidden%d" % (layer_index+1,)):
            w = tf.get_variable("weights", dtype=tf.float32, initializer=tf.random_normal((prev_unit_num, unit_num), stddev=0.01))
            b = tf.get_variable("bias", dtype=tf.float32, initializer=tf.random_normal((unit_num,), stddev=0.01))
            variables["weights%d" % (layer_index+1,)] = w
            variables["biases%d" % (layer_index+1,)] = b
            prev_layer = tf.nn.relu(tf.matmul(prev_layer, w) + b)
            prev_unit_num = unit_num

    with tf.variable_scope("output"):
        w = tf.get_variable("weights", dtype=tf.float32, initializer=tf.random_normal((prev_unit_num, 1), stddev=0.01))
        b = tf.get_variable("bias", dtype=tf.float32, initializer=[0.0])
        variables["weights%d" % (len(hidden_unit_nums)+1)] = w
        variables["biases%d" % (len(hidden_unit_nums)+1)] = b
        output = tf.nn.relu(tf.matmul(prev_layer, w) + b)

    loss = tf.reduce_sum(tf.pow(labels - output, 2))

    optimizer = tf.train.AdamOptimizer(learning_rate=0.001).minimize(loss)

    init = tf.initialize_all_variables()

    tf.logging.info("Building model done.")

    with tf.Session() as sess:
        sess.run(init)
        max_steps = FLAGS.max_steps
        log_each_step = 1000
        dump_each_step = max_steps / 100
        batch_index = 0
        avg_loss = 0.0
        avg_step = 0
        for step in range(max_steps):
            batch_x, batch_y, batch_index = generate_batch_data(X, Y, batch_size, batch_index)
            _, l = sess.run([optimizer, loss], feed_dict={ features: batch_x, labels: batch_y })

            avg_loss += l
            avg_step += 1

            if step % log_each_step == 0:
                tf.logging.info("steps: {} Avg RSME = {}".format(step, math.sqrt(avg_loss / avg_step / batch_size)))
                avg_loss = 0.0
                avg_step = 0

            if step > 0 and step % dump_each_step == 0:
                weights_list = sess.run(variables.values())
                variables_dict = {}
                for (key, var) in zip(variables.keys(), weights_list):
                    variables_dict[key] = var
                dump_weights(variables_dict, "%s_%08d.json" % (FLAGS.weights_json.replace(".json", ""), step))

        weights_list = sess.run(variables.values())

variables_dict = {}
for (key, var) in zip(variables.keys(), weights_list):
    variables_dict[key] = var

dump_weights(variables_dict, FLAGS.weights_json)

