'use strict'
const Router = require('koa-router')
const Trip = require('../controllers/trip')
const App = require('../controllers/app')
const createToken = require('../token/createToken')
const RedisStore = require('../config/redis')

const router = Router({
  prefix: '/trip'
});
router.post('/create/:apply',Trip.create)
router.get('/query',Trip.query)
router.get('/listMyApply',Trip.listMyApply)
router.get('/listActingAll/:type',Trip.listActingAll)
router.get('/listSubActingAll',Trip.listSubActingAll)
router.get('/applyDetail/:id',Trip.applyDetail)
router.post('/audit/:passType',Trip.audit)

// for require auto in index.js
module.exports = router;