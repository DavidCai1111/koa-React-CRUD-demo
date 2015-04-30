exports.checkLogin = function *(next) {
  if (this.session.user) {
    yield next;
  } else {
    this.flash = {info: '请先登录'};
    this.response.redirect('/');
  }
};

exports.checkNotLogin = function *(next) {
  if (!this.session.user) {
    yield next;
  } else {
    this.flash = {info: '已经登录'};
    this.response.redirect('/');
  }
};
