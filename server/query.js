var express = require('express');
var router = express.Router();
var _ = require("lodash");
var QUERY_TEMPLATES = require("../data/queries.json");

router.post('/', function(req, res) {
  sql = _.template(QUERY_TEMPLATES[req.body.queryType])(req.body.queryParams)
  options = req.body.options
  options.query = sql
  bigQuery.query(options)
    .then((results) => {
      res.status(200).send(results);
    })
    .catch(function(err) {
      console.log("Error", err)
      res.status(500).send(err);
    });
});

module.exports = router;
