const jwt = require('jsonwebtoken')
const config = require('../config/config')
const RedisStore = require('../config/redis')
const log4js = require('koa-log4')
const logger = log4js.getLogger('app')


module.exports = function (authorization) {
  const token = authorization.split(' ')[0]
  logger.info("检查是否刷新token,原："+token);
  const decoded = jwt.decode(token)
  // logger.info("decoded.exp:"+decoded.exp);
  // logger.info("decoded.iat:"+decoded.iat);
  // logger.info("decoded.id:"+decoded.id);
  // logger.info("decoded.username:"+decoded.username);
  // logger.info(decoded.exp - new Date() / 1000 < 60 * 30);
  // 若jwt有效期少于30分钟 则刷新
  if (decoded.exp - new Date() / 1000 < 60 * 30) {
    // if(false){
    let redis = new RedisStore();
    redis.destroy(token);
    logger.info("刷新token,删除原token："+token);

    const userInfo = {
      id: decoded.id,
      loginname:decoded.loginname,
      name: decoded.name,
      mobile:decoded.mobile
    }
    console.log(decoded.exp - new Date() / 1000)
    const newToken = jwt.sign(userInfo, config.url.secret, { expiresIn: config.url.TOKEN_EXP })
    redis.set(userInfo,newToken);  
    logger.info("刷新后新token："+newToken+",用户信息："+JSON.stringify(userInfo)); 
    return newToken
  } else {
    return false
  }
}
