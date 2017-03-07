# QueryIt Smart models

## Image Search

### Vectorized Public Domain images

The Public Domain images from Wikimedia Commons are stored in Google Cloud Storage (GCS) and accessible via the following URL.

```
https://storage.googleapis.com/queryit_smart/wikimedia/images/(key).jpg
```

The `(key)` was identified by the `key` column of BigQuery table `queryit-smart:wikimedia.pd_image_vectors`.

### VGG16 vectorize

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

## Document Search

### Vectorized Stack Overflow posts

The posts from Stack Overflow are stored in BigQuery table `[queryit-smart:stackoverflow.top3M_posts]`.

### TF-IDF vectorize

The instruction to vectorize arbitrary documents is shown in the following Jupyter notebook.

https://github.com/kazunori279/cloudml-demo/blob/master/Similarity+search+on+Stack+Overflow.ipynb

At first you should create word dictionaries about the documents, and convert it to UDF (JavaScript) to create document vectors table.

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
