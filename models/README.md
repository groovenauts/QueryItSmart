# QueryIt Smart models

## VGG16 vectorize

The module `vgg16_vectorize` convert 224x224 cropped JPEG images info 1000 dimension vectors.

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

