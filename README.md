# QueryIt Smart

QueryIt Smart is the demonstration application where it combines [BigQuery](http://cloud.google.com/bigquery) for
large scale data analytics and [Cloud Machine Learning Engine](https://cloud.google.com/ml-engine/) for scalable
machine learning analytics. See [What is it?](whatisit.md) page for details of the technology.

## Preparation

### Service Account JSON key
You need to have a Google Cloud Platform project with enabled billing account and get the service account's JSON key.
The service account JSON key have to be placed as `config/service_account.json`.

### API Key

For Map API used in demand forecast, you should generate API key from Google Cloud Developers Console.

### reCAPTCHA API keys

If you want to enable the reCAPTCHA authentication, regiter Site key and Secret key from [Get reCAPTCHA](https://www.google.com/recaptcha/admin).
This step is optional.

## Run Demo Application

Running on the Google App Engine.

### 1. Configurations

Change the following setting values in app.yaml.

```
API_KEY: 'YOUR_API_KEY' // Required: Map API Key
RECAPTCHA_SITE_KEY: 'YOUR_RECAPTCHA_SITE_KEY' // Optional: Site Key of reCAPTCHA
RECAPTCHA_SECRET_KEY: 'YOUR_RECAPTCHA_SECRET_KEY' // Optional: Secret Key of reCAPTCHA
```

### 2. Deploy

Perform the following gcloud command to deploy App Engine application in your GCP project.

```
gcloud --project YOUR-PROJECT-ID app deploy
```

### 3. Browse your application

After you deployed to App Engine, you can run the following command to launch your browser and view the app at https://[YOUR-PROJECT-ID].appspot.com:

```
gcloud app browse
```

## Modify datasets

See [models/README.md](models/README.md) to know how to customize datasets for Image search etc.
