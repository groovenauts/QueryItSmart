import os.path
import shutil
import tensorflow as tf
import tensorflow_hub as hub

graph = tf.Graph()

with graph.as_default():
    embed = hub.Module("https://tfhub.dev/google/nnlm-en-dim50-with-normalization/1")

    pl = tf.placeholder(shape=[None], dtype=tf.string)

    vector = tf.identity(embed(pl), name="OUTPUT")

    savedmodel_dir = "nnlm_en_dim50_savedmodel"
    if (os.path.exists(savedmodel_dir)):
        shutil.rmtree(savedmodel_dir)
    with tf.Session(graph=graph) as sess:
        sess.run([tf.global_variables_initializer(), tf.tables_initializer()])
        tf.saved_model.simple_save(sess, savedmodel_dir, inputs={"text":pl}, outputs={"vector": vector})

