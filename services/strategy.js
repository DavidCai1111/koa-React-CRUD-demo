var co = require('co');
var userService = require('./user');

exports.localStrategy = function (username, password, done) {
  var user = undefined;

  co(function *() {
    user = yield userService.findUser(username,password);

    return user;
  }).then(function (user) {
    if(user){
      return done(null, user);
    }else{
      return done(null, false);
    }
  }).catch(function (err) {
    console.error(err);
  });

};
