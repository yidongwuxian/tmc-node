'use strict'

const path = require('path')
//引入包用的工具类
const requireTools = require('./src/utils/requireTools') 
const babel = require('babel-register')
let SystemConfiy = require('./config/dev.env.config') 
if( process.env.NODE_ENV === 'development' ) {
  SystemConfiy = require('./config/dev.env.config') 
} else if( process.env.NODE_ENV === 'test' ) {
  SystemConfiy = require('./config/test.env.config')
} else if( process.env.NODE_ENV === 'production' ) {
  SystemConfiy = require('./config/prod.env.config')
}
const Koa = require('koa')
//日志记录
const log4js = require('koa-log4')
//session信息
const session = require("koa-session2")
const bodyParser = require('koa-bodyparser')
//暂时没用到
// const co = require('co') 
//挂载目录
const mount = require('koa-mount')
const server = require('koa-static')
const nunjucksViews = require('koa-nunjucks-promise')
//引入redis存储session
const RedisStore = require('./src/config/redis')
//连接mongodb数据库
const mongoose = require('./src/config/mongodb')
const refreshToken = require('./src/token/refreshToken')
//加载model模块
requireTools(path.join(__dirname, './src/models'))

const app = new Koa()
const isProduction = process.env.NODE_ENV === 'production';

app.keys = [SystemConfiy.System.KEY]
//----------------------------
//引入（运行）日志配置文件， 生产日志目录及相应文件
require('./src/config/log')  
//将当前文件日志命名为 app 
const logger = log4js.getLogger('app') 
logger.info('--------项目启动中-------------' + process.env.NODE_ENV)
//----------------------------
app.use(nunjucksViews(`${__dirname}/views`, {  //配置模板文件路径，
    ext: 'html',   //渲染文件后缀为 html
    noCache: !isProduction, //开发环境下不设置缓存
    watch: !isProduction,  //开发环境下观察模板文件的变化并更新
    filters: {  //过滤器  
        json: function(str) {
          return JSON.stringify(str, null, 2)
        }
    },
    globals: {  //设置对于nunjucks的全局变量
        // staticPath: '//static'
    }
}))
//设置静态文件路径
app.use(mount('/public', server(`${__dirname}/public`)))  
logger.info('--------加载静态文件-------------')
logger.info('--------加载vue页面-------------')
app.use(mount('/static', server(`${__dirname}/dist/static`)))
app.use(mount('/vue', server(`${__dirname}/dist`)))
// app.use(mount('/mstatic', server(`${__dirname}/operate/static`)))
// app.use(mount('/manage', server(`${__dirname}/operate`)))


//记录所有http请求
app.use(log4js.koaLogger(log4js.getLogger('http'), { level: 'auto' }))
logger.info('--------加载日志模块-------------')
//session配置信息
// app.use(session({
//     key: SystemConfiy.System.Session_Key,   //default "koa:sess"
//     store: new RedisStore(),  //添加 store 配置项 保存到redis
//     maxAge: SystemConfiy.System.Session_MaxAge  //设置session超时时间 单位ms 
// }))
// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// response拦截器 检测jwt是否需要刷新
app.use(async (ctx, next) => {
  await next()
  const response = ctx.response
  if (!!ctx.request.header['authorization']) {
    const newToken = refreshToken(ctx.request.header['authorization'])
    if (newToken) ctx.set('X-REFRESH-TOKEN', newToken)
  }
})

logger.info('--------加载session信息模块----------')
app.use(bodyParser());
const cors = require('koa2-cors');
app.use(cors());  
//使用路由转发请求
const router = require('./src/router/index')
app.use(router.routes())
   .use(router.allowedMethods());
logger.info('--------加载路由模块-----------------')
//设置监听端口
app.listen(SystemConfiy.System.Listen_port, () => logger.info('server started at port '+SystemConfiy.System.Listen_port))
module.exports = app