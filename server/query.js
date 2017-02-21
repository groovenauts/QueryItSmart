var express = require('express');
var router = express.Router();

router.post('/', function(req, res) {
  bigQuery.query(req.body.options)
    .then((results) => {
      res.status(200).send(results[0]);
    })
    .catch(function(err) {
      console.log("Error", err)
      res.status(500).send(err);
    });
});

module.exports = router;
