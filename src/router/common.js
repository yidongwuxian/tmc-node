'use strict'
const Router = require('koa-router')
const Common = require('../controllers/common') 

const router = Router({
  prefix: '/common'
}); 
router.get('/hotelcity',Common.hotelcity) 
router.get('/hotelcitydistrict/:code',Common.hotelcitydistrict) 

// for require auto in index.js
module.exports = router;