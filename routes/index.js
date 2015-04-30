var config = require('../config');

exports.showIndexPage = function *() {

  yield this.render('index', {
    title: config.appName,
    user: this.session.username ? this.session.username : undefined
  });

};
