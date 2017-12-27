'use strict'

const log4js = require('koa-log4')
const logger = log4js.getLogger('app')
const URLConfig = require('../config/config')
const RequestUtil = require('../utils/requestUtil')
const createToken = require('../token/createToken')
const RedisStore = require('../config/redis')
exports.signupTest = async (ctx, next) => { 
	var content = ctx.request.body;
  var url = URLConfig.url.user.logintest;  
  logger.info("用户登录："+url+",request:"+JSON.stringify(content));
  var responseData = await RequestUtil.POST(ctx,url,content); // 这里调用要在 async 函数里
  logger.info("用户登录response："+JSON.stringify(responseData));
  // ctx.response.body = responseData;  
  let user = responseData;
  if(user.success){
    const userInfo = {
      id: user.obj.id,
      loginname: user.obj.loginname,
      name: user.obj.name,
      mobile:user.obj.mobile
    }
    const token = createToken(userInfo)
    let redis = new RedisStore();
    redis.set(userInfo,token); 
    ctx.response.body = {
      code: 200,
      token: token,
      name: user.obj.name,
      mobile:user.obj.mobile,
      msg: 'success'
    }
  }else{
    ctx.response.body = {
      code: 200,
      msg: 'false'
    }
  }
}
/**
 * 注册新用户
 * @param {Function} next          [description]
 * @yield {[type]}   [description]
 */
exports.signup = async (ctx, next) => { 
  var content = ctx.request.body;
  var url = URLConfig.url.user.login;  
  logger.info("用户登录："+url+",request:"+JSON.stringify(content));
  var responseData = await RequestUtil.POST(ctx,url,content); // 这里调用要在 async 函数里
  logger.info("用户登录response："+JSON.stringify(responseData));
  // ctx.response.body = responseData;  
  let user = responseData;
  if(user.success){
    const userInfo = {
      id: user.data.id,
      loginname: user.data.username,
      name: user.data.nickname,
      mobile:user.data.phoneNumber,
      purchase:URLConfig.url.purchse
    }
    const token = createToken(userInfo)
    let redis = new RedisStore();
    redis.set(userInfo,token); 
    ctx.response.body = {
      code: 200,
      token: token,
      name: user.data.nickname,
      mobile:user.data.phoneNumber,
      msg: 'success'
    }
  }else{
    ctx.response.body = {
      code: 200,
      msg: 'false'
    }
  }
}

/**
 * 更新用户信息操作
 * @param  {[type]}   ctx  [description]
 * @param  {Function} next [description]
 * @return {[type]}        [description]
 */
exports.update = async (ctx, next) => {
   
}



/**
 * 数据库接口测试
 * @param  {[type]}   ctx  [description]
 * @param  {Function} next [description]
 * @return {[type]}        [description]
 */
exports.users = async (ctx, next) => {
  
}
exports.list = async (ctx, next) => {
	var content = ctx.request.body;
  var url = URLConfig.url.user.list;  
  logger.info("获取用户列表req:"+url+",参数："+JSON.stringify(content));
	var responseData = await RequestUtil.POST(ctx,url,content); // 这里调用要在 async 函数里
	logger.info("获取用户列表res:"+JSON.stringify(responseData))
	ctx.response.body = responseData; 
}
exports.save = async (ctx, next) => {
  var content = ctx.request.body;
  var url = URLConfig.url.user.save;  
  logger.info("新增用户req:"+url+",参数："+JSON.stringify(content));
	var responseData = await RequestUtil.POST(ctx,url,content); // 这里调用要在 async 函数里
	logger.info("新增用户res:"+JSON.stringify(responseData))
	ctx.response.body = responseData; 
}

exports.update = async (ctx, next) => {
  var id = ctx.params.id;
  var content = ctx.request.body;
  var url = URLConfig.url.user.update+id;  
  logger.info("修改用户req:"+url+",参数："+JSON.stringify(content));
	var responseData = await RequestUtil.POST(ctx,url,content); // 这里调用要在 async 函数里
	logger.info("修改用户res:"+JSON.stringify(responseData))
	ctx.response.body = responseData; 
}

exports.remove = async (ctx, next) => {
  var id = ctx.params.id; 
  var url = URLConfig.url.user.remove+id;  
  var content = {};
  logger.info("删除用户req:"+url+",参数："+JSON.stringify(content));
	var responseData = await RequestUtil.POST(ctx,url,content); // 这里调用要在 async 函数里
	logger.info("删除用户res:"+JSON.stringify(responseData))
	ctx.response.body = responseData; 
}
exports.detail = async (ctx, next) => {
  var id = ctx.params.id; 
  var url = URLConfig.url.user.detail+id;  
  var content = {};
  logger.info("用户详情req:"+url+",参数："+JSON.stringify(content));
	var responseData = await RequestUtil.GET(ctx,url,content); // 这里调用要在 async 函数里
	logger.info("用户详情res:"+JSON.stringify(responseData))
	ctx.response.body = responseData; 
}