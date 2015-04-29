var koa = require('koa');
var path = require('path');

var app = koa();
var logger = require('koa-logger');
var session = require('koa-session');
var views = require('koa-views');
var mongoose = require('mongoose');

app.keys = ['koa simple weibo'];
app.use(session(app));
//日志记录，开发信息打印
app.use(logger());
//静态文件目录
app.use(require('koa-static')(path.join(__dirname, 'public')));
//视图模板渲染
app.use(views(path.join(__dirname, 'views'), {
  map: {html: 'swig'}
}));

//路由
require('./web_route')(app);

app.listen(3000);

console.log('listening on port 3000 , god bless koa...');
