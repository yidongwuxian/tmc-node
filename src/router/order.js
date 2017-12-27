'use strict'

const Router = require('koa-router')
const Order = require('../controllers/order') 
const checkToken = require('../token/checkToken')

const router = Router({
  prefix: '/order'
});
router.get('/query', Order.query) 
router.post('/create',Order.create) 
router.post('/createRT',Order.createRT) 
router.get('/cancel/:orderno',Order.cancel) 
router.get('/orderDetail/:orderno',Order.detail) 
router.get('/queryPassenger/:orderno',Order.queryPassenger) 
router.get('/orderLogAndRemark/:orderno',Order.orderLogAndRemark) 

//运营端接口
router.get('/getBuyerList', Order.getBuyerList) 

// for require auto in index.js
module.exports = router;