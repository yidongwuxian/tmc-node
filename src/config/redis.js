'use strict'
let SystemConfiy = require('../../config/dev.env.config') 
if( process.env.NODE_ENV === 'development' ) {
  SystemConfiy = require('../../config/dev.env.config') 
} else if( process.env.NODE_ENV === 'test' ) {
  SystemConfiy = require('../../config/test.env.config')
} else if( process.env.NODE_ENV === 'production' ) {
  SystemConfiy = require('../../config/prod.env.config')
}
const Redis = require('ioredis')
const uid = require('uid-safe')
class RedisStore {
   constructor() { 
      this.redis = new Redis(
        {
            port: SystemConfiy.Redis.port,          // Redis port
            host: SystemConfiy.Redis.host,   // Redis host
            family: SystemConfiy.Redis.family,           // 4 (IPv4) or 6 (IPv6)
            password: SystemConfiy.Redis.password,
            db: SystemConfiy.Redis.db
        }
      )   //默认 127.0.0.1 6379端口
    }
    getId(length) {
        return uid.sync(length)  //生成id
    }
    get(jwtToken) {  //实现get方法
        return this.redis.get(`PS_TOKEN_${jwtToken}`).then((resp) => {
            this.redis.disconnect();
            try { //如果返回结果不是json字符串，返回空
                return Promise.resolve(JSON.parse(resp)) 
            } catch(e) {
                return Promise.resolve({})
            }
       })
    }
    set(user, jwtToken) {  //实现set方法
        // if(!opts.sid) {
        //     opts.sid = this.getId(24)
        // }
        //存入redis要将对象转成JSON字符串
        //存入redis的key为： session-uid
        return this.redis.set(`PS_TOKEN_${jwtToken}`, JSON.stringify(user)).then(() => {
            this.redis.disconnect();
            return Promise.resolve(jwtToken)
        })
    }
    destroy(jwtToken) {  //实现distroy方法
        return this.redis.del(`PS_TOKEN_${jwtToken}`)
    }
    quit(){
        this.redis.quit();
    }
    disconnect(){ 
        this.redis.disconnect();
    }
}
module.exports = RedisStore