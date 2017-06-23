# QueryIt Smart

QueryIt Smart is the demonstration application where it combines [BigQuery](http://cloud.google.com/bigquery) for
large scale data analytics and [Cloud Machine Learning Engine](http://cloud.google.com/ml) for scalable machine
learning analytics. See [What is it?](whatisit.md) page for details of the technology.

## Preparation

### Service Account JSON key
You need to have a Google Cloud Platform project and get service account's JSON key.
Pleace it to `config/service_account.json`.

### API Key

For Map API used in demand forecast, you should generate API key from Google Cloud Developers Console.

## Build Docker Image

[NOTE] Service account's JSON key is included in the container. If you do not want to include it, docker build by removing config/service_account.json.

```
docker build -t queryit-smart:latest .
```

## Run

At the top directory of this project, run the following command.
Please replace `MY_API_KEY` with your API Key generated in Setup section.
Replace `MY_USER` and `MY_PASS` with your user/password for HTTP basic authentication.

```
docker run -d -v $PWD/config:/usr/app/config -p 8080:8080 -e BASIC_USER=MY_USER -e BASIC_PASSWORD=MY_PASS -e API_KEY=MY_API_KEY queryit-smart:latest
```

Open `http://localhost:8080` (if you use Virtual Machine or CCE to run docker container, replace `localhost` with your VM address) in browser.

## Modify datasets

See [models/README.md](models/README.md) to know how to customize datasets for Image search and Document search.
