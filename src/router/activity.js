'use strict'

const Router = require('koa-router')
const Activity = require('../controllers/activity') 
const checkToken = require('../token/checkToken')

const router = Router({
  prefix: '/activity'
});
router.get('/query',Activity.query) 
router.post('/create',Activity.create) 
router.post('/update',Activity.update) 
// router.get('/detail/:id',Passenger.detail) 
router.post('/sync',Activity.sync)


router.get('/on',async (ctx, next) => { 
  return ctx.render('activity'); 
})
// for require auto in index.js
module.exports = router;