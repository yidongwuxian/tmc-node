'use strict'
const Router = require('koa-router')
const Hotel = require('../controllers/hotel')
const App = require('../controllers/app')
const createToken = require('../token/createToken')
const RedisStore = require('../config/redis')

const router = Router({
  prefix: '/hotel'
}); 
router.post('/search',Hotel.search) 
router.post('/detail',Hotel.detail) 

router.post('/orderList',Hotel.orderList)
router.post('/orderNew',Hotel.orderNew) 
router.post('/orderPay',Hotel.orderPay) 
router.post('/orderDetail',Hotel.orderDetail) 
router.post('/orderCancel',Hotel.orderCancel) 

// for require auto in index.js
module.exports = router;