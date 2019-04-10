var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Sevilla' });
});

router.get('/products', function(req, res, next) {
  res.render('products', { title: 'Sevilla' });
});

router.get('/product', function(req, res, next) {
  const img = `../assets/image/Untitled-2-0${req.query.id}.jpg`;
  res.render('product', { title: 'Sevilla', img });
});


router.get('/contacts', function(req, res, next) {
  res.render('contacts', { title: 'Sevilla' });
});

router.get('/news', function(req, res, next) {
  res.render('news', { title: 'Sevilla' });
});

router.get('/description', function(req, res, next) {
  res.render('description', { title: 'Sevilla' });
});

module.exports = router;
