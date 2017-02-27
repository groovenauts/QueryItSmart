var express = require('express');
var router = express.Router();
var _ = require("lodash");
var QUERY_TEMPLATES = require("../config/queries.json");

router.post('/', function(req, res) {
  sql = _.template(QUERY_TEMPLATES[req.body.queryType])(req.body.queryParams)
  options = req.body.options
  options.query = sql
  bigQuery.startQuery(req.body.options)
    .then((results) => {
      job = results[0];
      return job.promise();
    })
    .then(() => {
      return job.getQueryResults();
    })
    .then((results) => {
      res.status(200).send(results);
    })
    .catch(function(err) {
      res.status(500).send(err);
    });
});

module.exports = router;
