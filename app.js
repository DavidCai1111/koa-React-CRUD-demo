var koa = require('koa');
var app = koa();
var path = require('path');
var config = require('./config');
var logger = require('koa-logger');
var session = require('koa-generic-session');
var mongoStore = require('koa-generic-session-mongo');
var views = require('koa-views');
var bodyParser = require('koa-bodyparser');
var flash = require('koa-flash');
var gzip = require('koa-gzip');
var error = require('koa-error');
var staticCache = require('koa-static-cache');

app.keys = [config.appName];

app.use(session({
  store: new mongoStore({
    db: config.db.name
  })
}));
app.use(error({
  template: './views/error.html'
}));
app.use(bodyParser());
app.use(flash());
app.use(logger());
app.use(staticCache(path.join(__dirname,'public'),{
  maxAge : 60 * 60 * 31
}));
app.use(require('koa-static')(path.join(__dirname, 'public')));
app.use(views(path.join(__dirname, 'views'), {
  map: {html: 'swig'}
}));
app.use(gzip());
app.use(require('./web_route').routes());

app.listen(config.port);

console.log('listening on port %d , god bless %s...', config.port, config.appName);

module.exports = app;
