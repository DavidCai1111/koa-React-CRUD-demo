# koa-React-CRUD-demo 
[![Build Status](https://travis-ci.org/DavidCai1993/koa-React-CRUD-demo.svg?branch=master)](https://travis-ci.org/DavidCai1993/koa-React-CRUD-demo)

简单小微博，koa + React 实现CRUD操作的单页面应用。

PS：当看到了形如：
```js
exports.deleteOneWeibo = function *() {

  var nRemoved = yield weiboService.deleteOneById(this.params.id);

  yield this.body = {result : (nRemoved !== 0)}
};
//or
exports.getAll = function *() {

  return yield Weibo.find({}).exec();
};
```
的代码，妈妈再也不用担心我的回调了。。
