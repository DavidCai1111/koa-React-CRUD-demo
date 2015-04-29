exports.showSignUpPage = function *() {
  yield this.render('signUp',{
    title: '注册koa weibo'
  });
};
