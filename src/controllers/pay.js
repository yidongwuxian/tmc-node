'use strict'
const log4js = require('koa-log4')
const logger = log4js.getLogger('app')
const URLConfig = require('../config/config')
const RequestUtil = require('../utils/requestUtil')
//乘客查询接口
exports.pre = async(ctx, next) => {
	logger.info("支付接口:"+URLConfig.url.pay.pre);  
	var url = URLConfig.url.pay.pre;
	var requestData = ctx.request.body;
	var responseData = await RequestUtil.POST(ctx,url,requestData); // 这里调用要在 async 函数里
	ctx.response.body = responseData;
	logger.info("支付接口返回：" +JSON.stringify(responseData));
}
 
exports.endorsePre = async(ctx, next) => {
	logger.info("改签支付接口:"+URLConfig.url.pay.endorsePre);  
	var url = URLConfig.url.pay.endorsePre;
	var requestData = ctx.request.body;
	var responseData = await RequestUtil.POST(ctx,url,requestData); // 这里调用要在 async 函数里
	ctx.response.body = responseData;
	logger.info("改签支付接口返回：" +JSON.stringify(responseData));
}

exports.tmcPay = async(ctx, next) => {
	var requestData = ctx.request.body;  
	var payUrl = URLConfig.url.pay.tmcPay+requestData.orderNumber;
	logger.info("发起支付请求url:"+payUrl);
	var responsePay = await RequestUtil.GET(ctx,payUrl,{}); // 这里调用要在 async 函数里
	logger.info("发起支付请求反馈:"+JSON.stringify(responsePay));
	if(responsePay.success){//支付成功
		let callbackId = requestData.id;
		var passurl = URLConfig.url.trip.passSub + callbackId;   
		logger.info("审批req："+passurl);
		var responseAudit = await RequestUtil.POST(ctx,passurl,{}); // 这里调用要在 async 函数里
		logger.info("审批res："+JSON.stringify(responseAudit))
		ctx.response.body = responseAudit;  
	}
	ctx.response.body = responsePay;  
}

exports.hotelPay = async(ctx, next) => {
	var requestData = ctx.request.body;  
	var payUrl = URLConfig.url.hotel.orderPay;
	logger.info("发起酒店支付请求url:"+payUrl);
	var responsePay = await RequestUtil.POST(ctx,payUrl,requestData); // 这里调用要在 async 函数里
	logger.info("发起酒店支付请求反馈:"+JSON.stringify(responsePay));
	if(responsePay.status==1001){//支付成功
		let callbackId = requestData.id;
		var passurl = URLConfig.url.hotel.passSub + callbackId;   
		logger.info("审批酒店流程req："+passurl);
		var responseAudit = await RequestUtil.POST(ctx,passurl,{}); // 这里调用要在 async 函数里
		logger.info("审批酒店流程res："+JSON.stringify(responseAudit))
		ctx.response.body = responseAudit;  
	}
	ctx.response.body = responsePay;  
}