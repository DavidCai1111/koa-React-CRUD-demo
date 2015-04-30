var config = require('../config');
var userService = require('../services/user');

exports.showSignUpPage = function *() {

  yield this.render('signUp', {
    title: '注册 ' + config.appName,
    info: this.flash.info
  });

};

exports.doSignUp = function *() {
  var _user = this.request.body;

  if (yield userService.validateUsername(_user.username)) {
    this.flash = {info: '用户名已被占用'};
    this.response.redirect('/signUp');
  } else {
    yield userService.insertUser(_user);
    this.session.user = {
      username: _user.username
    };
    this.response.redirect('/');
  }
};

exports.showLoginPage = function *() {

  yield this.render('login', {
    title: '登陆 ' + config.appName,
    info: this.flash.info
  })
};

exports.doLogin = function *() {
  var _user = this.request.body;

  var user = yield userService.findUser(_user.username, _user.password);

  if (user) {
    this.session.user = {
      username: user.username
    };
    this.response.redirect('/');
  } else {
    this.flash = {info: '用户名或密码错误'};
    this.response.redirect('/login');
  }
};

exports.doLogout = function *() {
  this.session.user = null;

  this.response.redirect('/');
};
