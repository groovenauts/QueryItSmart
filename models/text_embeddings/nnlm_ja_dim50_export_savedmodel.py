import os.path
import shutil
import re

import tensorflow as tf
import tensorflow_hub as hub

import tf_graph_util

graph = tf.Graph()

with graph.as_default():
    embed = hub.Module("https://tfhub.dev/google/nnlm-ja-dim50-with-normalization/1")

    pl = tf.placeholder(shape=[None], dtype=tf.string)

    vector = tf.identity(embed(pl), name="OUTPUT")

    savedmodel_dir = "nnlm_ja_dim50_savedmodel"
    tmp_savedmodel_dir = savedmodel_dir + "_tmp"
    if (os.path.exists(tmp_savedmodel_dir)):
        shutil.rmtree(tmp_savedmodel_dir)
    with tf.Session(graph=graph) as sess:
        sess.run([tf.global_variables_initializer(), tf.tables_initializer()])
        tf.saved_model.simple_save(sess, tmp_savedmodel_dir, inputs={"text":pl}, outputs={"vector": vector})

def freeze_graph(input_saved_model_dir, output_saved_model_dir, node_names):
    with tf.Session() as sess:
        meta_graph_def = tf.saved_model.loader.load(sess, [tf.saved_model.tag_constants.SERVING], input_saved_model_dir)
        node_names = node_names + [n for n in meta_graph_def.collection_def["table_initializer"].node_list.value]
        node_names = node_names + [re.sub(r':\d$', "", n) for n in meta_graph_def.collection_def["asset_filepaths"].node_list.value]
        #frozen_graph_def = tf.graph_util.convert_variables_to_constants(sess, meta_graph_def.graph_def, node_names)
        frozen_graph_def = tf_graph_util.convert_variables_to_constants(sess, meta_graph_def.graph_def, node_names)

    if tf.gfile.IsDirectory(output_saved_model_dir):
        tf.gfile.DeleteRecursively(output_saved_model_dir)
    with tf.Graph().as_default() as graph:
        tf.import_graph_def(frozen_graph_def, name="")
        if len(meta_graph_def.collection_def["table_initializer"].node_list.value) > 0:
            main_op = graph.get_operation_by_name(meta_graph_def.collection_def["table_initializer"].node_list.value[0])
        else:
            main_op = None
        assets = meta_graph_def.collection_def["asset_filepaths"].node_list.value
        assets = [graph.get_tensor_by_name(n) for n in assets]
        with tf.Session() as sess:
            builder = tf.saved_model.builder.SavedModelBuilder(output_saved_model_dir)
            builder.add_meta_graph_and_variables(
                    sess, [tf.saved_model.tag_constants.SERVING],
                    signature_def_map=meta_graph_def.signature_def,
                    assets_collection=assets,
                    main_op=main_op)
            builder.save()

freeze_graph(tmp_savedmodel_dir, savedmodel_dir, ["OUTPUT"])
shutil.rmtree(tmp_savedmodel_dir)
