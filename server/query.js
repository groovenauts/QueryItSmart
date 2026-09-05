var express = require('express');
var router = express.Router();
var _ = require("lodash");
var QUERY_TEMPLATES = require("../data/queries.json");

router.post('/', function(req, res) {
  if (!_.has(QUERY_TEMPLATES, req.body.queryType)) {
    return res.status(400).send('Invalid query type');
  }
  // Use BigQuery named query parameters instead of interpolating
  // user-supplied values into the SQL text, preventing SQL injection.
  options = req.body.options
  options.query = QUERY_TEMPLATES[req.body.queryType]
  options.params = req.body.queryParams
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
