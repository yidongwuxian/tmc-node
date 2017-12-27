'use strict'
const Router = require('koa-router')
const User = require('../controllers/user')
const App = require('../controllers/app')
const createToken = require('../token/createToken')
const RedisStore = require('../config/redis')

const router = Router({
  prefix: '/user'
});
router.post('/logintest',User.signupTest)
router.post('/login',User.signup)
router.get('/index',User.users) 
// user
router.post('/u/signup', App.hasBody, User.signup)
router.post('/u/update', App.hasBody, App.hasToken, User.update)
 
router.post('/list',User.list)
router.post('/save',User.save)
router.post('/update/:id',User.update)
router.post('/remove/:id',User.remove)
router.get('/detail/:id',User.detail)

// for require auto in index.js
module.exports = router;