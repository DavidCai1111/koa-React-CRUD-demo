var models = require('../models/index');
var Weibo = models.Weibo;

exports.getAll = function *() {

  return yield Weibo.find({}).exec();
};

exports.addOne = function *(weibo) {

  return yield Weibo.create(weibo);
};

exports.deleteOneById = function *(id) {

  return yield Weibo.findByIdAndRemove(id).exec();
};
