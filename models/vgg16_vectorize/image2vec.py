import os
os.environ["PROTOCOL_BUFFERS_PYTHON_IMPLEMENTATION"] = "python"
import tensorflow as tf
import json
from tensorflow.python.platform import gfile
import os.path
from datetime import datetime
import sys

flags = tf.app.flags
flags.DEFINE_string("output_json", None, "specify output json file path")
flags.DEFINE_string("jpeg_pattern", None, "specify target jpeg file pattern")
FLAGS = tf.app.flags.FLAGS

output_json = FLAGS.output_json
target_jpeg = FLAGS.jpeg_pattern
tf.logging.set_verbosity(tf.logging.INFO)
tf.logging.info("TensorFlow version = {}".format(tf.__version__))
tf.logging.info("output_json={}".format(output_json))
tf.logging.info("target_jpeg={}".format(target_jpeg))

model_file = os.path.join(os.path.dirname(__file__), "vgg16.tfmodel")
graph_def = tf.GraphDef()
if os.path.exists(model_file):
    with open(model_file, mode='rb') as f:
        graph_def.ParseFromString(f.read())
else:
    tf.logging.info("Donwloading VGG16 tfmodel.")
    graph_def.ParseFromString(tf.gfile.GFile("gs://queryit-smart-ml/vgg16.tfmodel").read())
    tf.logging.info("done.")

tf.import_graph_def(graph_def, name='vgg16')
graph = tf.get_default_graph()

x = graph.get_tensor_by_name("vgg16/images:0")
row = graph.get_tensor_by_name("vgg16/fc8:0")
prob = graph.get_tensor_by_name("vgg16/prob:0")

# image loader
jpeg = tf.placeholder(tf.string, shape=(), name="JPEG")
img = tf.cast(tf.image.decode_jpeg(tf.read_file(jpeg), channels=3), tf.float64) / 255.0

tmp_json = "/tmp/output.json"
with open(tmp_json, "w") as jfile:
    with tf.Session() as sess:
        files = gfile.Glob(target_jpeg)
        group_by = 100
        groups = [files[i:i + group_by] for i in range(0, len(files), group_by)]
        for fs in groups:
            imgs = []
            for f in fs:
                imgs.append(sess.run(img, feed_dict={jpeg: f}))

            tf.logging.info("VGG-16 models for {} images".format(group_by))
            tf.logging.info(datetime.now().strftime("%H:%M:%S"))
            st = int(datetime.now().strftime("%s"))
            v1, v2 = sess.run([row, prob], feed_dict={ x: imgs, 'vgg16/dropout_1/random_uniform:0': [[1.0]*4096], 'vgg16/dropout/random_uniform:0': [[1.0]*4096]})
            for i in range(len(fs)):
              jobj = {
                "key": os.path.splitext(os.path.basename(fs[i]))[0],
                "vector": v1[i].tolist(),
                "prob": v2[i].tolist()
              }
              jfile.write(json.dumps(jobj) + "\n")
              jfile.flush()
            ed = int(datetime.now().strftime("%s"))
            tf.logging.info("duration: {} sec. files: {} - {}".format(ed - st, os.path.basename(fs[0]), os.path.basename(fs[-1])))

gfile.Copy(tmp_json, output_json)
