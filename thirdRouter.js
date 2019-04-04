const Router = require('koa-router');

const router = new Router();

router.get('/test', async ctx => (ctx.body = {test: 'very good'}));
router.get('/test2', async ctx => (ctx.body = {res: 'very good2'}));
router.get('/test3', async ctx => (ctx.body = {res: 'very good3'}));

module.exports = router;
