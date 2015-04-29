exports.showIndexPage = function *() {
  this.session.info = 'ahaha';
  yield this.render('index', {
    title: 'koa weibo'
  });
};
