# QueryItSmart

QueryIt Smart is the demonstration application for BigQuery & Cloud Machine Learning.

## Preparation

### Service Account JSON key
You need to have a Google Cloud Platform project and get service account's JSON key.
Pleace it to `config/service_account.json`.

### API Key

For Map API used in demand forecast, you should generate API key from Google Cloud Developers Console.

## Build Docker Image

```
docker build -t image_name_you_like .
```

## Run

At the top directory of this project, run the following command.
Please replace `MY_API_KEY` with your API Key generated in Setup section.
Replace `MY_USER` and `MY_PASS` with your user/password for HTTP basic authentication.

```
docker run -d -v $PWD/config:/usr/app/config -p8080:8080 -e BASIC_USER=MY_USER -e BASIC_PASSWORD=MY_PASS -e API_KEY=MY_API_KEY chikanaga/queryit-smart-app:latest
```

Open `http://localhost:8080` (if you use Virtual Machine or CCE to run docker container, replace `localhost` with your VM address) in browser.

## Modify datasets

See [models/README.md] to know how to customize datasets for Image search and Document search.
