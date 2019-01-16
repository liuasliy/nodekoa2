const router = require('koa-router')()
var natural_man_controller = require('../controllers/black/natural_man_controller')


router.get('/', async(ctx, next) => {
    await ctx.render('index', {
        title: 'Hello Koa 2!'
    })
})

router.get('/api/string', natural_man_controller.getNaturalMan)

router.get('/json', async(ctx, next) => {
    ctx.body = {
        title: 'koa2 json'
    }
})

module.exports = router