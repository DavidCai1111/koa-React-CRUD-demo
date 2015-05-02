var weiboService = require('../services/weibo');

exports.addNewWeibo = function *() {
  var _weibo = {
    author: this.session.user.username,
    content: this.request.body.weiboConent
  };

  var nAdded = yield weiboService.addOne(_weibo);

  yield this.body = {result : (nAdded !== 0)}
};

exports.deleteOneWeibo = function *() {

  var nRemoved = yield weiboService.deleteOneById(this.params.id);

  yield this.body = {result : (nRemoved !== 0)}
};

exports.getAll = function *() {
  var _weibos = yield weiboService.getAll();
  var weibos = [];

  _weibos.map(function (weibo) {
    weibos.push(weibo.toJSON({virtuals: true}));
  });

  yield this.body = {weibos: weibos};
};
