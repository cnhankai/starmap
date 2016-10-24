var express = require('express');
var router = express.Router();

/* GET home page. */
var getHomePage = function(req, res, next) {
  res.render('ott/home', {
    title: 'YNMDTV DTMB+OTT Project Big Data Map'
  });
};

router.get('/', getHomePage);
router.get('/home', getHomePage);

module.exports = router;