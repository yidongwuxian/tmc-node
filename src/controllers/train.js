'use strict'
const log4js = require('koa-log4')
const logger = log4js.getLogger('app')
const URLConfig = require('../config/config')
const RequestUtil = require('../utils/requestUtil')
const IService = require('../service/index')

exports.create = async(ctx, next) => { 
	var url = URLConfig.url.train.create;  
	var content = ctx.request.body;
	logger.info("火车订单创建req："+url+",请求JSON："+JSON.stringify(content));
	var responseData = await RequestUtil.POST(ctx,url,content); // 这里调用要在 async 函数里
	logger.info("火车订单创建res："+JSON.stringify(responseData))
	if(responseData.status == 1001){//生单成功 
		let orderNumber = responseData.data.merchant_order_id;
		var updateUrl = URLConfig.url.trip.notifySubRouteOrderNumber;
		var req = {"businessTripRouteId":content.callbackId,
					"routeOrderNumber":orderNumber
					}
		logger.info("更新火车票订单号url:"+updateUrl+",req:"+JSON.stringify(req));
		var response = await RequestUtil.POST(ctx,updateUrl,req); // 这里调用要在 async 函数里
		logger.info("更新火车票订单号res:"+JSON.stringify(response));
	}
	ctx.response.body = responseData;  
}

exports.search = async(ctx, next) => {
	var url = URLConfig.url.train.search;  
	var content = ctx.request.body;
	logger.info("火车查询req："+url+",请求JSON："+JSON.stringify(content));
	var responseData = await RequestUtil.POST(ctx,url,content); // 这里调用要在 async 函数里
	logger.info("火车查询res："+JSON.stringify(responseData))
	ctx.response.body = responseData;  
}
 
exports.checkTicket = async(ctx, next) => {
	var url = URLConfig.url.train.checkTicket;  
	var content = ctx.request.body;
	logger.info("火车详情req："+url+",请求JSON："+JSON.stringify(content));
	var responseData = await RequestUtil.POST(ctx,url,content); // 这里调用要在 async 函数里
	logger.info("火车详情res："+JSON.stringify(responseData))
	 
	ctx.response.body = responseData;  
}

exports.pay = async(ctx, next) => {
	var url = URLConfig.url.train.pay;  
	var content = ctx.request.body;
	logger.info("火车订单支付req："+url+",请求JSON："+JSON.stringify(content));
	var responseData = await RequestUtil.POST(ctx,url,content); // 这里调用要在 async 函数里
	logger.info("火车订单支付res："+JSON.stringify(responseData))
	ctx.response.body = responseData;  
}
  
exports.orderList = async(ctx, next) => {
	// const querystring = require("querystring");
	// let params = querystring.stringify(ctx.query); 
	var url = URLConfig.url.train.orderList;  
	var content = ctx.request.body;
	logger.info("火车订单列表req："+url+",请求JSON："+JSON.stringify(content));
	var responseData = await RequestUtil.POST(ctx,url,content); // 这里调用要在 async 函数里
	logger.info("火车订单列表res："+JSON.stringify(responseData))
	ctx.response.body = responseData;  
}
exports.orderDetail = async(ctx, next) => {
	const querystring = require("querystring");
	let params = querystring.stringify(ctx.query); 
	var url = URLConfig.url.train.orderDetail+"?"+params;  
	var content = {};
	logger.info("火车订单列表req："+url+",请求JSON："+JSON.stringify(content));
	var responseData = await RequestUtil.GET(ctx,url,content); // 这里调用要在 async 函数里
	logger.info("火车订单列表res："+JSON.stringify(responseData))
	ctx.response.body = responseData;  
}
  