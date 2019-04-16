var express = require('express');
var router = express.Router();

var products = require('../constants/products');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Sevilla' });
});

router.get('/news', function(req, res, next) {
  res.render('news', { title: 'Sevilla' });
});

router.get('/promotions', function(req, res, next) {
  res.render('promotions', { title: 'Sevilla' });
});

router.get('/promotion', function(req, res, next) {
  res.render('promotion', { title: 'Sevilla' });
});

router.get('/products', function(req, res, next) {
  res.render('products', { title: 'Sevilla', products: JSON.stringify(products) });
});

router.get('/product', function(req, res, next) {
  const img = `../assets/image/${req.query.id}-info.jpg`;

  const product = products.find(o => o.id == req.query.id)
  res.render('product', { title: 'Sevilla', product: JSON.stringify(product), img });
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
