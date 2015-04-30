var weiboService = require('../services/weibo');

exports.addNewWeibo = function *() {
  var _weibo = {
    author : this.session.user.username,
    content : this.request.body.weiboConent
  };

  yield weiboService.addOne(_weibo);

  this.response.redirect('/');
};

exports.deleteOneWeibo = function *() {

  yield weiboService.deleteOneById(this.params.id);

  this.response.redirect('/');
};
