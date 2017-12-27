const fs = require('fs')
const path = require('path') 
const Router = require('koa-router')
const log4js = require('koa-log4')//日志记录
const logger = log4js.getLogger('router') //将当前文件日志命名为 app 
var router = new Router()
const basename = path.basename(module.filename) 
 
fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js')
  })
  .forEach(function(file) {
    let route = require(path.join(__dirname, file))
    logger.info("-----加载路由文件：" + file+"-----")
    router.use(route.routes(), route.allowedMethods())
  })

module.exports = router
