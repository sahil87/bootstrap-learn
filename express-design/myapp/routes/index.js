var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/scorer', function(req, res, next) {
  res.render('scorer', {layout: 'defaultLayout'});
});

module.exports = router;
