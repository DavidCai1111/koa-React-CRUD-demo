var config = require('../config');
var weiboService = require('../services/weibo');

exports.showIndexPage = function *() {
  var weibos = yield weiboService.getAll();

  yield this.render('index', {
    title: config.appName,
    user: this.session.user ? this.session.user : null,
    info : this.flash.info,
    weibos : weibos
  });

};
