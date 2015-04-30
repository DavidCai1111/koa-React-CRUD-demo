var router = require('koa-route');
var indexRoute = require('./routes/index');
var authRoute = require('./routes/auth');
var passport = require('koa-passport');

module.exports = function (app) {
  //主页
  app.use(router.get('/', indexRoute.showIndexPage));
  //进入注册页
  app.use(router.get('/signUp', authRoute.showSignUpPage));
  //注册
  app.use(router.post('/signUp', authRoute.doSignUp));
  //进入登陆页
  app.use(router.get('/login', authRoute.showLoginPage));
  //登陆
  app.use(router.post('/login', authRoute.doLogin));
};
