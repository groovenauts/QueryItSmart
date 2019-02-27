var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var routes = require('./server/index');
var query = require('./server/query');
var startQuery = require('./server/startQuery');

const SERVICE_ACCOUNT = "./config/service_account.json";
const { BigQuery } = require('@google-cloud/bigquery');
global.bigQuery = new BigQuery({
  projectId: require(SERVICE_ACCOUNT).project_id,
  keyFilename: SERVICE_ACCOUNT
});

var app = express();
app.set('views', path.join(__dirname, '/assets'));
app.set('view engine', 'ejs');
app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.resolve(path.join(__dirname, '/assets'))));

// routing setup
app.use('/', routes);
app.use('/query', query);
app.use('/startQuery', startQuery);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
