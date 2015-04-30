var passport = require('koa-passport');
var config = require('../config');
var userService = require('../services/user');

exports.showSignUpPage = function *() {

  yield this.render('signUp', {
    title: '注册 ' + config.appName
  });

};

exports.doSignUp = function *() {
  var _user = this.request.body;

  yield userService.insertUser(_user);

  yield this.response.redirect('/');
};

exports.showLoginPage = function *() {

  yield  this.render('login', {
    title: '登陆 ' + config.appName
  })
};

exports.doLogin = function *() {
  var ctx = this;

  yield passport.authenticate('local', function *(err, user) {
    if (err) console.error(err);
    ctx.session.username = user.username;

    if (user) {
      ctx.response.redirect('/');
    } else {
      ctx.response.redirect('/signUp');
    }
  }).call(this);
};
