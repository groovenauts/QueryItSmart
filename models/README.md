# QueryIt Smart models

## Image Search

### Vectorized Public Domain images

The Public Domain images from Wikimedia Commons are stored in Google Cloud Storage (GCS) and accessible via the following URL.

```
https://storage.googleapis.com/queryit_smart/wikimedia/images/(key).jpg
```

The `(key)` was identified by the `key` column of BigQuery table `queryit-smart:wikimedia.pd_image_mobilenet_vectors`.
This table also contains feature vectors of the image derived from MobileNet V2 model.

### Getting MobileNet V2 feature vectors

You can export MobileNet V2 model into SavedModel format by executing the script
`models/mobilenet_v2_feature_vector/mobilenet_v2_feature_vector_export_savedmodel.py`.

#### Requirement

- Python (2.7.x or 3.5.x)

The following modules are required.

- tensorflow
- tensorflow_hub

#### Exporting to SavedModel

```
$ cd models/mobilenet_v2_feature_vector
$ mobilenet_v2_feature_vector_export_savedmodel.py
```

The model is exported into the directory `mobilenet_v2_100_224_savedmodel/`.

Once you get SavedModel, you can create BigQuery Model via `CREATE MODEL` SQL.

### Change image directory URL

To change the images' base URL, you can specify environment variable `IMAGE_BASE_URL` in the App Engine.
See `app.yaml` in project root.

## Document Search

### Vectorized Stack Overflow posts

The posts from Stack Overflow are stored in BigQuery table `[queryit-smart:stackoverflow.top3M_posts]`.

### TF-IDF vectorize

The instruction to vectorize arbitrary documents is shown in the following Jupyter notebook.

https://github.com/kazunori279/cloudml-demo/blob/master/Next17%20Similarity%20Search%20on%20Stack%20Overflow.ipynb

At first you should create word dictionaries about the documents, and convert it to UDF (JavaScript) to create document vectors table.

## Demand Forecast

### Pretrained model

The trained model for Citibike demand forecast SavedModel is placed here.

`gs://queryit-smart-ml/citibike_prediction_savedmodel/`

The file is public readable and you canalso download a file via HTTPS.

`https://storage.googleapis.com/queryit-smart-ml/citibike_prediction_savedmodel/saved_model.pb`

### Train model

TBD

# Deprecated models

The sections below are deprecated models.

## Image Search

### Vectorize with VGG-16

#### Vectorized images with VGG-16

The feature vectors of Public Domain images from Wikimedia Commons with VGG-16 was stored in BigQuery table `queryit-smart:wikimedia.pd_image_vectors`.

#### Vectorize your own images with VGG-16

You can use python module `vgg16_vectorize` on Cloud ML to obtain image vector.
The images should be stored in GCS and should fillfull the following conditions.

- JPEG Format
- Resized/Cropped into 224x224 pixels size

Submit job to Google Cloud Machine Learning:

```
$ JOB_ID=vgg16_vectrize_$(date +%Y%m%d_%H%M%S)
$ gcloud beta ml jobs submit training ${JOB_ID} \
  --scale-tier=BASIC_GPU \
  --package-path=vgg16_vectorize \
  --module-name=vgg16_vectorize.image2vec \
  --staging-bucket=gs://queryit-smart-ml \
  --region=us-central1 \
  -- \
  --output_json gs://${BUCKET}/vgg16_vector.json \
  --jpeg_pattern "gs://${BUCKET}/images/"'*.jpg'
```

After the job finished, you will get newline-delimited json file contains key and vector attribute for each image.
You can load load the newline-delimited json file into BigQuery to use image search.

## Demand Forecast

## UDFs

The UDF files are on GCS and can be read public.

```
gs://queryit_smart/citibike/udf/tensor.js
gs://queryit_smart/citibike/udf/weights1.js
gs://queryit_smart/citibike/udf/biases1.js
...
```

You can obtain the weights#.js and biases#.js from the training job run on Cloud ML.

```
→ gcloud --project=queryit-smart beta ml jobs submit training citibike_train_$(date +%Y%m%d_%H%M%S) --scale-tier=BASIC_GPU --async --package-path=citibike --module-name=citibike.trainer --staging-bucket=gs://queryit-smart-ml --region=us-central1
$ JOB_ID=demand_forecast_$(date +%Y%m%d_%H%M%S)
$ gcloud beta ml jobs submit training ${JOB_ID} \
  --scale-tier=BASIC_GPU \
  --package-path=citibike \
  --module-name=citibyke.trainer \
  --staging-bucket=gs://${MY_BUCKET} \
  --region=us-central1 \
  -- \
  --training_csv gs://${MYBUCKET}/training.com \
  --weights_json gs://${MYBUCKET}/weights.json
```
