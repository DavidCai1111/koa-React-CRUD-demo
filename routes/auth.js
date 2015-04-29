var userService = require('../services/user');

exports.showSignUpPage = function *() {
  var username = yield userService.insertUser('test');

  yield this.render('signUp',{
    title: '注册koa weibo',
    name : username.username
  });
};
