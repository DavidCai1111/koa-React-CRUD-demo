var mongoose = require('mongoose');
var moment = require('moment');

var WeiboSchema = new mongoose.Schema({
  author: String,
  content: String,
  createAt: {
    type: Date,
    default: Date.now
  }
});

WeiboSchema.virtual('time').get(function () {
  return moment(this.createAt).format('YYYY年MM月DD日 hh:mm:ss');
});

WeiboSchema.set('toJson', {virtuals: true});

module.exports = mongoose.model('Weibo', WeiboSchema);
