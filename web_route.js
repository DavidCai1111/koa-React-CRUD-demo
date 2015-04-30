var router = require('koa-router')();
var indexRoute = require('./routes/index');
var authRoute = require('./routes/auth');
var authService = require('./services/auth');
var weiboRoute = require('./routes/weibo');

//主页
router.get('/', indexRoute.showIndexPage);
//进入注册页
router.get('/signUp', authService.checkNotLogin, authRoute.showSignUpPage);
//注册
router.post('/signUp', authService.checkNotLogin, authRoute.doSignUp);
//进入登陆页
router.get('/login', authService.checkNotLogin, authRoute.showLoginPage);
//登陆
router.post('/login', authService.checkNotLogin, authRoute.doLogin);
//登出
router.get('/logout', authService.checkLogin, authRoute.doLogout);
//新增一条微博
router.post('/weibo/add', authService.checkLogin, weiboRoute.addNewWeibo);
//删除一条微博
router.get('/weibo/delete/:id', authService.checkLogin ,weiboRoute.deleteOneWeibo);

module.exports = router;


