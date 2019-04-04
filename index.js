const Koa = require('koa');
const Router = require('koa-router');
const secondRouter = require('./secondRouter');

function createApp() {
  const firstRouter = new Router();

  firstRouter.use('/routes', secondRouter.routes(), secondRouter.allowedMethods());

  const app = new Koa();

  app.use(firstRouter.routes());
  app.use(firstRouter.allowedMethods());

  return app;
}
module.exports = createApp;
