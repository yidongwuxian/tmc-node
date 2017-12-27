'use strict'

const Router = require('koa-router')
const Passenger = require('../controllers/passenger') 
const checkToken = require('../token/checkToken')

const router = Router({
  prefix: '/passenger'
});
router.get('/query',Passenger.query) 
router.post('/create',Passenger.create) 
router.post('/update',Passenger.update) 
// router.get('/detail/:id',Passenger.detail) 
// for require auto in index.js
module.exports = router;