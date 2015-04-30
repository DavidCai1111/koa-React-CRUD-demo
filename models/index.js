var mongoose = require('mongoose');
var config = require('../config');

mongoose.connect(config.db.url, function (err) {
  if (err) {
    console.error('connect to %s err , info : %s', config.db.url, err.message);
    process.exit(1);
  }
});

exports.User = require('./user');
