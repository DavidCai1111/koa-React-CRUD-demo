var app = require('../app');
var request = require('co-supertest')(app);
var should = require('should');
var Weibo = require('../models').Weibo;

describe('微博相关', function () {

  describe('微博相关逻辑' , function () {

    before(function *() {
      yield Weibo.findOneAndRemove({author: 'mocha_test' , content : 'mocha_test'});
    });

    after(function *() {
      yield Weibo.findOneAndRemove({author: 'mocha_test' , content : 'mocha_test'});
    });

    it('插入微博' , function *() {
      yield request
        .post('/weibo/add')
        .send({
          author : 'mocha_test',
          content : 'mocha_test'
        })
        .expect(302)
        .end();
    });


    it('删除微博', function *() {
      var _weibo = yield Weibo.findOne({author : 'mocha_test' , content :'mocha_test'});

      yield request
        .post('weibo/delete/' + _weibo._id)
        .expect(302)
        .end();
    })
  })
});
