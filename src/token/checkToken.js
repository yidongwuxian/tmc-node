const jwt = require('jsonwebtoken')
const config = require('../config/config')
const log4js = require('koa-log4')
const logger = log4js.getLogger('app')

module.exports = async (ctx, next) => {
  //拿到token
  if (ctx.request.header['authorization']) {
    let token = ctx.request.header['authorization'].split(' ')[0]

    logger.info("token:"+token);
    try {
      var decoded = jwt.verify(token, config.url.secret)
      return next()
    } catch (err) {
      if (err.name === 'TokenExpiredError') {
        ctx.body = {
          code: 403,
          msg: '授权过期，请重新登录'
        }
      } else {
        ctx.body = {
          code: 403,
          msg: '非法授权'
        }
      }
    }

  } else {
    ctx.body = {
      code: 401,
      message: '没有token'
    }
  }
}
