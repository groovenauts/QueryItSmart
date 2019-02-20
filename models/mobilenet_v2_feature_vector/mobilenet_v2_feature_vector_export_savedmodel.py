import os.path
import shutil
import tensorflow as tf
import tensorflow_hub as hub

graph = tf.Graph()

with graph.as_default():
    mobilenet = hub.Module("https://tfhub.dev/google/imagenet/mobilenet_v2_100_224/feature_vector/2")
    height, width = hub.get_expected_image_size(mobilenet)

    pl = tf.placeholder(shape=[None], dtype=tf.string)

    def decode(tensor):
        image = tf.image.decode_image(tf.io.decode_base64(tensor), channels=3)
        return tf.reshape(tf.image.resize_bilinear([image], [height, width]), (height, width, 3))

    img = tf.map_fn(decode, pl, dtype=tf.float32, back_prop=False)
    img = (img - 128.0) / 128.0

    vector = mobilenet(img)

    tmp_savedmodel_dir = "mobilenet_v2_100_224_savedmodel_tmp"
    if (os.path.exists(tmp_savedmodel_dir)):
        shutil.rmtree(tmp_savedmodel_dir)
    with tf.Session(graph=graph) as sess:
        sess.run(tf.global_variables_initializer())
        tf.saved_model.simple_save(sess, tmp_savedmodel_dir, inputs={"image":pl}, outputs={"vector": vector})

def freeze_graph(input_saved_model_dir, output_saved_model_dir, node_names):
    with tf.Session() as sess:
        meta_graph_def = tf.saved_model.loader.load(sess, [tf.saved_model.tag_constants.SERVING], input_saved_model_dir)
        node_names = node_names + [n for n in meta_graph_def.collection_def["saved_model_main_op"].node_list.value]
        frozen_graph_def = tf.graph_util.convert_variables_to_constants(sess, meta_graph_def.graph_def, node_names)

    if tf.gfile.IsDirectory(output_saved_model_dir):
        tf.gfile.DeleteRecursively(output_saved_model_dir)
    with tf.Graph().as_default() as graph:
        tf.import_graph_def(frozen_graph_def, name="")
        if len(meta_graph_def.collection_def["saved_model_main_op"].node_list.value) > 0:
            main_op = graph.get_operation_by_name(meta_graph_def.collection_def["saved_model_main_op"].node_list.value[0])
        else:
            main_op = None
        with tf.Session() as sess:
            builder = tf.saved_model.builder.SavedModelBuilder(output_saved_model_dir)
            builder.add_meta_graph_and_variables(
                    sess, [tf.saved_model.tag_constants.SERVING],
                    signature_def_map=meta_graph_def.signature_def,
                    assets_collection=tf.get_collection(tf.GraphKeys.ASSET_FILEPATHS),
                    main_op=main_op)
            builder.save()

savedmodel_dir = "mobilenet_v2_100_224_savedmodel"
freeze_graph(tmp_savedmodel_dir, savedmodel_dir, ["module_apply_default/hub_output/feature_vector/SpatialSqueeze"])
shutil.rmtree(tmp_savedmodel_dir)
