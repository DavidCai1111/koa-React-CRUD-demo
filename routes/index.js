var config = require('../config');

exports.showIndexPage = function *() {

  yield this.render('index', {
    title: config.appName,
    user: this.session.user ? this.session.user : null,
    info : this.flash.info
  });

};
