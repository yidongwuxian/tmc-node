'use strict'

const Router = require('koa-router')
const fs = require('fs');
const path = require('path');
const router = Router({
  prefix: '/tmc'
});
router.get('/m/login.html',async (ctx, next) => {
	var search = ctx.search;
	// const html = fs.readFileSync(path.resolve(__dirname, '../../dist/index.html'), 'utf-8')
	// ctx.response.body=html;
	console.log('/vue/index.html'+search);
	ctx.response.redirect('/vue/index.html'+search);
})
// for require auto in index.js
module.exports = router;