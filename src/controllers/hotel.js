'use strict'
const log4js = require('koa-log4')
const logger = log4js.getLogger('app')
const URLConfig = require('../config/config')
const RequestUtil = require('../utils/requestUtil')
const IService = require('../service/index')

exports.create = async(ctx, next) => {
	let apply = ctx.params.apply;
	var url = URLConfig.url.trip.create + apply;  
	var content = ctx.request.body;
	logger.info("酒店订单创建req："+url+",请求JSON："+JSON.stringify(content));
	var responseData = await RequestUtil.POST(ctx,url,content); // 这里调用要在 async 函数里
	logger.info("酒店订单创建res："+JSON.stringify(responseData))
	if(responseData.status == 1001){//生单成功
		let orderNumber = responseData.data.result.OrderId;
		var payUrl = URLConfig.url.hotel.notifySubHotelOrderNumber;
		var req = {"businessTripHotelId":content.AffiliateConfirmationId,
					"hotelOrderNumber":orderNumber
					}
		logger.info("更新酒店订单号url:"+payUrl);
		var response = await RequestUtil.POST(ctx,payUrl,req); // 这里调用要在 async 函数里
		logger.info("更新酒店订单号res:"+JSON.stringify(response));
	}
	ctx.response.body = responseData;  
}

exports.search = async(ctx, next) => {
	var url = URLConfig.url.hotel.search;  
	var content = ctx.request.body;
	logger.info("酒店查询req："+url+",请求JSON："+JSON.stringify(content));
	var responseData = await RequestUtil.POST(ctx,url,content); // 这里调用要在 async 函数里
	logger.info("酒店查询res："+JSON.stringify(responseData))
	ctx.response.body = responseData;  
}
 
exports.detail = async(ctx, next) => {
	var url = URLConfig.url.hotel.detail;  
	var content = ctx.request.body;
	logger.info("酒店详情req："+url+",请求JSON："+JSON.stringify(content));
	var responseData = await RequestUtil.POST(ctx,url,content); // 这里调用要在 async 函数里
	logger.info("酒店详情res："+JSON.stringify(responseData))
	if(content.applyUser){
		let listMyRule =  URLConfig.url.rule.listMyRule + content.applyUser;
		logger.info("查询我的规则listMyRule url:"+listMyRule);  
		var listMyRuleData = await RequestUtil.GET(ctx,listMyRule,{}); // 这里调用要在 async 函数里
		logger.info("查询我的规则res:"+ JSON.stringify(listMyRuleData)); 
		responseData = await IService.ShoppingService.groupHotelRule(responseData,listMyRuleData);
	}
	
	ctx.response.body = responseData;  
}

exports.orderList = async(ctx, next) => {
	var url = URLConfig.url.hotel.orderList;  
	var content = ctx.request.body;
	logger.info("酒店订单列表req："+url+",请求JSON："+JSON.stringify(content));
	var responseData = await RequestUtil.POST(ctx,url,content); // 这里调用要在 async 函数里
	logger.info("酒店订单列表res："+JSON.stringify(responseData))
	ctx.response.body = responseData;  
}
 
exports.orderNew = async(ctx, next) => {
	var url = URLConfig.url.hotel.orderNew;  
	var content = ctx.request.body;
	logger.info("酒店订单创建req："+url+",请求JSON："+JSON.stringify(content));
	var responseData = await RequestUtil.POST(ctx,url,content); // 这里调用要在 async 函数里
	logger.info("酒店订单创建res："+JSON.stringify(responseData))
	ctx.response.body = responseData;  
}
 
exports.orderPay = async(ctx, next) => {
	var url = URLConfig.url.hotel.orderPay;  
	var content = ctx.request.body;
	logger.info("酒店订单支付req："+url+",请求JSON："+JSON.stringify(content));
	var responseData = await RequestUtil.POST(ctx,url,content); // 这里调用要在 async 函数里
	logger.info("酒店订单支付res："+JSON.stringify(responseData))
	ctx.response.body = responseData;  
}
 
exports.orderDetail = async(ctx, next) => {
	var url = URLConfig.url.hotel.orderDetail;  
	var content = ctx.request.body;
	logger.info("酒店订单详情req："+url+",请求JSON："+JSON.stringify(content));
	var responseData = await RequestUtil.POST(ctx,url,content); // 这里调用要在 async 函数里
	logger.info("酒店订单详情res："+JSON.stringify(responseData))
	ctx.response.body = responseData;  
}
 
exports.orderCancel = async(ctx, next) => {
	var url = URLConfig.url.hotel.orderCancel;  
	var content = ctx.request.body;
	logger.info("酒店订单取消req："+url+",请求JSON："+JSON.stringify(content));
	var responseData = await RequestUtil.POST(ctx,url,content); // 这里调用要在 async 函数里
	logger.info("酒店订单取消res："+JSON.stringify(responseData))
	ctx.response.body = responseData;  
}
 