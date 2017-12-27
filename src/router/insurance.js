'use strict'

const Router = require('koa-router')
const Insurance = require('../controllers/insurance') 
const checkToken = require('../token/checkToken')

const router = Router({
  prefix: '/insurance'
});
router.get('/query',Insurance.query) 
router.get('/detail/:id',Insurance.detail) 
router.get('/insureOrders/:id',Insurance.insureOrders) 
// for require auto in index.js
module.exports = router;