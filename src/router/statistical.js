'use strict'
const Router = require('koa-router')
const Statistical = require('../controllers/statistical')
const App = require('../controllers/app')
const createToken = require('../token/createToken')
const RedisStore = require('../config/redis')

const router = Router({
  prefix: '/statistical'
}); 
router.post('/tmcCategory',Statistical.tmcCategory)  

// for require auto in index.js
module.exports = router;