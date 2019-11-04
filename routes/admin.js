var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('admin/pages/home/index');
});
router.get('/change-user-info', function(req, res, next) {
  res.render('admin/pages/change-user-info/index');
});
router.get('/forgot-password', function(req, res, next) {
  res.render('admin/pages/forgot-password/index');
});
router.get('/login', function(req, res, next) {
  res.render('admin/pages/login/index');
});
router.get('/manager-order', function(req, res, next) {
  res.render('admin/pages/manager-order/index');
});
router.get('/manager-product', function(req, res, next) {
  res.render('admin/pages/manager-product/index');
});
router.get('/manager-stall', function(req, res, next) {
  res.render('admin/pages/manager-stall/index');
});
router.get('/manager-users', function(req, res, next) {
  res.render('admin/pages/manager-users/index');
});
router.get('/sales-detail', function(req, res, next) {
  res.render('admin/pages/sales-detail/index');
});
router.get('/top10-detail', function(req, res, next) {
  res.render('admin/pages/top10-detail/index');
});
module.exports = router;
