var express = require('express');
var router = express.Router();
var recaptcha = require('express-recaptcha');

// node env
const API_KEY = process.env.API_KEY;
const IMAGE_BASE_URL = process.env.IMAGE_BASE_URL;
const SITE_KEY = process.env.RECAPTCHA_SITE_KEY;
const SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;
const GA_TRACKING_ID = process.env.GA_TRACKING_ID;

const hasAuthentication = SITE_KEY && SECRET_KEY
if (hasAuthentication) {
  recaptcha.init(process.env.RECAPTCHA_SITE_KEY, process.env.RECAPTCHA_SECRET_KEY);
}
const templateOption = {
  apiKey: API_KEY,
  imageBaseUrl: IMAGE_BASE_URL,
  gaTrackingId: GA_TRACKING_ID,
  siteKey: hasAuthentication ? SITE_KEY : '',
};

router.get('/', function(req, res) {
  res.render('template', templateOption);
});

router.post('/', function(req, res) {
  if (hasAuthentication) {
    recaptcha.verify(req, function(error) {
      if (error) {
        res.status(500).send({success: false});
      } else {
        res.status(200).send({success: true});
      }
    });
  }
});

module.exports = router;
