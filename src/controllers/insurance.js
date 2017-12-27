'use strict'
const log4js = require('koa-log4')
const logger = log4js.getLogger('app')
const URLConfig = require('../config/config')
const RequestUtil = require('../utils/requestUtil')
//乘客查询接口
exports.query = async(ctx, next) => {
	logger.info("保险查询接口:"+URLConfig.url.insurance.query);  
	var url = URLConfig.url.insurance.query; 
	var responseData = await RequestUtil.GET(ctx,url,{}); // 这里调用要在 async 函数里
	logger.info("保险查询返回："+JSON.stringify(responseData));
	ctx.response.body = responseData;
}

exports.detail = async(ctx, next) =>{
	let id = ctx.params.id;
	let url = URLConfig.url.insurance.detail + id;
	logger.info("保险详情req:"+url);
	var responseData = await RequestUtil.GET(ctx,url,{}); // 这里调用要在 async 函数里
	logger.info("保险详情res:"+JSON.stringify(responseData))
	ctx.response.body = responseData; 
}

exports.insureOrders = async(ctx, next) =>{
	let id = ctx.params.id;
	let url = URLConfig.url.insurance.insureOrders + id;
	logger.info("订单中保险详情req:"+url);
	var responseData = await RequestUtil.GET(ctx,url,{}); // 这里调用要在 async 函数里
	logger.info("订单中保险详情res:"+JSON.stringify(responseData))
	ctx.response.body = responseData; 
}
 