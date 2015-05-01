var router = require('koa-router')();
var dr = require('dir-requirer')(__dirname);
var routes = dr('./routes');
var services = dr('./services');


//主页
router.get('/', routes.index.showIndexPage);
//进入注册页
router.get('/signUp', services.auth.checkNotLogin, routes.auth.showSignUpPage);
//注册
router.post('/signUp', services.auth.checkNotLogin, routes.auth.doSignUp);
//进入登陆页
router.get('/login', services.auth.checkNotLogin, routes.auth.showLoginPage);
//登陆
router.post('/login', services.auth.checkNotLogin, routes.auth.doLogin);
//登出
router.get('/logout', services.auth.checkLogin, routes.auth.doLogout);
//新增一条微博
router.post('/weibo/add', services.auth.checkLogin, routes.weibo.addNewWeibo);
//删除一条微博
router.get('/weibo/delete/:id', services.auth.checkLogin ,routes.weibo.deleteOneWeibo);

module.exports = router;


