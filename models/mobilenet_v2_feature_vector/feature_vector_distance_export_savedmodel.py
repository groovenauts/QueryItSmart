import os.path
import shutil
import tensorflow as tf
import tensorflow_hub as hub

graph = tf.Graph()

with graph.as_default():
    a = tf.placeholder(shape=[None, 1280], dtype=tf.float64, name="a")
    b = tf.placeholder(shape=[None, 1280], dtype=tf.float32, name="a")
    d = (tf.cast(b, tf.float64) - a)
    d *= 2
    dist = tf.math.reduce_sum(d, 1)
    tmp_savedmodel_dir = "distance_savedmodel"
    if (os.path.exists(tmp_savedmodel_dir)):
        shutil.rmtree(tmp_savedmodel_dir)
    with tf.Session(graph=graph) as sess:
        sess.run(tf.global_variables_initializer())
        tf.saved_model.simple_save(sess, tmp_savedmodel_dir, inputs={"a":a, "b": b}, outputs={"distance": dist})

