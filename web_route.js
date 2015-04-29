var router = require('koa-route');
var indexRoute = require('./routes/index');
var authRoute = require('./routes/auth');

module.exports = function (app) {
  //登陆主页
  app.use(router.get('/', indexRoute.showIndexPage));
  //进入注册页
  app.use(router.get('/signUp', authRoute.showSignUpPage));

};
