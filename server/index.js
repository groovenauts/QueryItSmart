var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('template', {
    apiKey: process.env.API_KEY
  });
});

module.exports = router;
