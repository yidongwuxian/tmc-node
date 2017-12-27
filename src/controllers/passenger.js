'use strict'
const log4js = require('koa-log4')
const logger = log4js.getLogger('app')
const URLConfig = require('../config/config')
const RequestUtil = require('../utils/requestUtil')
//乘客查询接口
exports.query = async(ctx, next) => {
	var flightType = ctx.query.flightType;
	logger.info("获取乘客列表："+URLConfig.url.passenger.query + "?flightType="+flightType); 
	var url = URLConfig.url.passenger.query + "?flightType="+flightType;  
	var responseData = await RequestUtil.GET(ctx,url,{}); // 这里调用要在 async 函数里
	logger.info("获取乘客列表返回：" +JSON.stringify(responseData));
	ctx.response.body = responseData; 
}

exports.create = async(ctx, next) => {
	var content = ctx.request.body;
	var url = URLConfig.url.passenger.create;  
	logger.info("添加乘客："+URLConfig.url.passenger.create+",参数："+JSON.stringify(content)); 
	var responseData = await RequestUtil.POST(ctx,url,content); // 这里调用要在 async 函数里
	ctx.response.body = responseData;  
	logger.info("添加乘客反馈："+JSON.stringify(responseData)); 
}
exports.update = async(ctx, next) => {
	logger.info(URLConfig.url.passenger.update);
	var content = ctx.request.body;
	var url = URLConfig.url.passenger.update;  
	logger.info("修改乘客："+URLConfig.url.passenger.update+",参数："+JSON.stringify(content)); 
	var responseData = await RequestUtil.POST(ctx,url,content); // 这里调用要在 async 函数里
	ctx.response.body = responseData;  
	logger.info("修改乘客反馈："+JSON.stringify(responseData)); 
}