const Router = require('koa-router');
const thirdRouter = require('./thirdRouter.js');

const router = new Router();

router.use(thirdRouter.routes(), thirdRouter.allowedMethods());

module.exports = router;
