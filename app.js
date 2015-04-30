var koa = require('koa');
var app = koa();
var path = require('path');
var config = require('./config');
var logger = require('koa-logger');
var session = require('koa-generic-session');
var mongoStore = require('koa-generic-session-mongo');
var views = require('koa-views');
var bodyParser = require('koa-bodyparser');
var passport = require('koa-passport');
var LocalStrategy = require('passport-local').Strategy;
var StrategyService = require('./services/strategy');

app.keys = [config.appName];

app.use(session({
  store: new mongoStore({
    db: config.db.name
  })
}));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function (user, done) {
  done(null, user);
});
passport.deserializeUser(function (user, done) {
  done(null, user);
});
passport.use(new LocalStrategy(StrategyService.localStrategy));

app.use(bodyParser());
app.use(logger());
app.use(require('koa-static')(path.join(__dirname, 'public')));
app.use(views(path.join(__dirname, 'views'), {
  map: {html: 'swig'}
}));

//路由
require('./web_route')(app);

app.listen(config.port);

console.log('listening on port %s , god bless %s...', config.port, config.appName);
