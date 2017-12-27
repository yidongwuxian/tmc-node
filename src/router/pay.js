'use strict'

const Router = require('koa-router')
const Pay = require('../controllers/pay') 
const checkToken = require('../token/checkToken')

const router = Router({
  prefix: '/pay'
});
router.post('/pre',Pay.pre) 
router.post('/endorsePre',Pay.endorsePre) 
router.post('/tmcPay',Pay.tmcPay) 
router.post('/hotelPay',Pay.hotelPay) 
// for require auto in index.js
module.exports = router;