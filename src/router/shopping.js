'use strict'

const Router = require('koa-router')
const Shopping = require('../controllers/shopping') 
const checkToken = require('../token/checkToken')

const router = Router({
  prefix: '/shopping'
});
router.get('/query',Shopping.query) 
router.post('/orderConfirm',Shopping.orderConfirm)  
// for require auto in index.js
module.exports = router;