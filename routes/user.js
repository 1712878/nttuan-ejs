var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('user/pages/home/index',{pageTitle: 'Trang chủ'});
});
router.get('/activity', function(req, res, next) {
  res.render('user/pages/activity/index',{pageTitle: 'Lịch sử giao hàng'});
});
router.get('/catalog-page', function(req, res, next) {
  res.render('user/pages/catalog-page/index',{pageTitle: 'Danh mục sản phẩm'});
});
router.get('/delivery-info', function(req, res, next) {
  res.render('user/pages/delivery-info/index',{pageTitle: 'Thông tin vận chuyển'});
});
router.get('/forgot-password', function(req, res, next) {
  res.render('user/pages/forgot-password/index',{pageTitle: 'Quên mật khẩu'});
});
router.get('/login', function(req, res, next) {
  res.render('user/pages/login/index',{pageTitle: 'Đăng nhập'});
});
router.get('/product-page', function(req, res, next) {
  res.render('user/pages/product-page/index',{pageTitle: 'Thông tin chi tiết'});
});
router.get('/registration', function(req, res, next) {
  res.render('user/pages/registration/index',{pageTitle: 'Đăng kí'});
});
router.get('/shopping-cart', function(req, res, next) {
  res.render('user/pages/shopping-cart/index',{pageTitle: 'Giỏ hàng'});
});
router.get('/update-profile', function(req, res, next) {
  res.render('user/pages/update-profile/index',{pageTitle: 'Cập nhật thông tin'});
});
module.exports = router;
