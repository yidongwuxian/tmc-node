'use strict'

const Router = require('koa-router')
const fs = require('fs');
const path = require('path');
const router = Router({
  prefix: '/m'
});
router.get('/login.html',async (ctx, next) => {
	var search = ctx.search;
	// console.log('/vue/index.html'+search);
	// ctx.response.redirect('/vue/index.html'+search);
	return ctx.render('upgrade'); 
})
// for require auto in index.js
module.exports = router;