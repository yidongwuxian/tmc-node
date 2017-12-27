'use strict'

const Router = require('koa-router')
const router = Router({
  prefix: '/'
});
router.get('tmc',async (ctx, next) => {
// if(ctx.session.view === undefined) { //统计访问次数
//         ctx.session.view = 0;
//     } else {
//         ctx.session.view += 1;
//     }
    // console.log('viewNum', ctx.session.view) //log 输出 
    // ctx.render('index', {
    //     title: 'Welcome'
    // });
var search = ctx.search;
console.log('/vue/index.html'+search);
ctx.response.redirect('/vue/index.html'+search);
// return ctx.render('upgrade'); 
})

router.get('manage',async (ctx, next) => {
  var search = ctx.search;
  console.log('/vue/manage.html'+search);
  ctx.response.redirect('/vue/manage.html'+search); 
  })
  
// for require auto in index.js
module.exports = router;