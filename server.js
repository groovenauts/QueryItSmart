var express = require('express');
var basicAuth = require('basic-auth-connect');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var swig = require('swig');
var routes = require('./server/index');
var query = require('./server/query');
var startQuery = require('./server/startQuery');

const SERVICE_ACCOUNT = "./config/service_account.json";
const BASIC_USER = process.env.BASIC_USER || "nextdemo";
const BASIC_PASSWORD = process.env.BASIC_PASSWORD || "201703";

global.bigQuery = require('@google-cloud/bigquery')({
  projectId: require(SERVICE_ACCOUNT).projectId,
  keyFilename: SERVICE_ACCOUNT
});

var app = express();
app.engine('html', swig.renderFile);
app.set('views', path.join(__dirname, '/assets'));
app.set('view engine', 'html');
app.use(logger('dev'));

if (process.env.NODE_ENV !== "development") {
  app.use(basicAuth(BASIC_USER, BASIC_PASSWORD));
}

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
