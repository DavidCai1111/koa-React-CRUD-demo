var models = require('../models');
var User = models.User;
var co = require('co');

exports.insertUser = function (username) {

  return new Promise(function (resovle,reject) {
    User.create({username: username, password: 'test'}, function (err, user) {
      if(err) return reject(err);

      resovle(user);
    });
  });

};

