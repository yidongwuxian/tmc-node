'use strict'
const Router = require('koa-router')
const Train = require('../controllers/train')
const App = require('../controllers/app')
const createToken = require('../token/createToken')
const RedisStore = require('../config/redis')

const router = Router({
  prefix: '/train'
}); 
router.post('/search',Train.search) 
router.post('/checkTicket',Train.checkTicket) 
router.post('/create',Train.create) 
router.post('/pay',Train.pay) 

router.post('/orderList',Train.orderList) 
router.get('/orderDetail',Train.orderDetail) 

// for require auto in index.js
module.exports = router;