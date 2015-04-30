var models = require('../models');
var User = models.User;

exports.insertUser = function (userToInsert) {

  return new Promise(function (resolve, reject) {
    User.create(userToInsert, function (err, user) {
      if (err) return reject(err);

      resolve(user);
    });
  });
};

exports.findUser = function (username, password) {

  return new Promise(function (resolve, reject) {
    User.findOne({username: username, password: password}, function (err, user) {
      if (err) return reject(err);

      resolve(user);
    });
  });
};
