var app = require('../app');
var request = require('co-supertest')(app);
var should = require('should');
var User = require('../models').User;

describe('用户相关', function () {

  describe('页面', function () {
    it('主页', function *() {
      yield request
        .get('/')
        .expect(200)
        .end();
    });

    it('进入注册页面', function *() {
      yield request
        .get('/signUp')
        .expect(200)
        .end();
    });

    it('进入登陆页面', function *() {
      yield request
        .get('/login')
        .expect(200)
        .end();
    });
  });

  describe('业务逻辑', function () {
    before(function *() {
      yield User.remove({username: 'mocha_test', password: 'mocha_test'});
    });

    after(function *() {
      yield User.remove({username: 'mocha_test', password: 'mocha_test'});
    });

    it('添加用户', function *() {
      yield request
      .post('/signUp')
      .send({
          username : 'mocha_test',
          password : 'mocha_test'
        })
      .expect(302)
      .end();
    });

    it('添加已存在用户时拒绝添加', function *() {
      yield request
        .post('/signUp')
        .sign({
          username : 'mocha_test',
          password : 'mocha_test'
        })
        .expect(302, function (err, res) {
          res.text.should.containEql('用户名已被占用');
        })
        .end();
    });

    it('登陆', function *() {
      yield request
        .post('/login')
        .send({
          username : 'mocha_test',
          password : 'mocha_test'
        })
        .expect(302)
        .end();
    });
  });
});
