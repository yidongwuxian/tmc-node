const jwt = require('jsonwebtoken')
const config = require('../config/config')
const log4js = require('koa-log4')
const logger = log4js.getLogger('app')


module.exports = function (userInfo) {
  const token = jwt.sign(userInfo, config.url.secret, { expiresIn: config.url.TOKEN_EXP })
  logger.info("创建token："+token+",用户信息："+JSON.stringify(userInfo));
  return token
}
