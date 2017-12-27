'use strict'

const Router = require('koa-router')
const RefundEndorse = require('../controllers/refundEndorse') 
const checkToken = require('../token/checkToken')

const router = Router({
  prefix: '/refundEndorse'
});
router.post('/rule',RefundEndorse.rule) 
// for require auto in index.js
module.exports = router;