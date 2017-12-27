'use strict'
const log4js = require('koa-log4')
const logger = log4js.getLogger('app')
const URLConfig = require('../config/config')
const RequestUtil = require('../utils/requestUtil')
const IDao= require('../dao/index')

exports.create = async(ctx, next) => {
	let apply = ctx.params.apply;
	var url = URLConfig.url.trip.create + apply;  
	var content = ctx.request.body;
	logger.info("出差申请创建req："+url+",请求JSON："+JSON.stringify(content));
	var responseData = await RequestUtil.POST(ctx,url,content); // 这里调用要在 async 函数里
	logger.info("出差申请创建res："+JSON.stringify(responseData))
	ctx.response.body = responseData;  
}

exports.query = async(ctx, next) => {
	var url = URLConfig.url.trip.query;  
	var content = {};
	logger.info("出差申请创建req："+url+",请求JSON："+JSON.stringify(content));
	var responseData = await RequestUtil.GET(ctx,url,content); // 这里调用要在 async 函数里
	logger.info("出差申请创建res："+JSON.stringify(responseData))
	ctx.response.body = responseData;  
}
exports.listMyApply = async(ctx, next) => {
	const querystring = require("querystring");
	let params = querystring.stringify(ctx.query); 
	var url = URLConfig.url.trip.listMyApply+"?"+params;  
	var content = {};
	logger.info("我的申请req："+url+",请求JSON："+JSON.stringify(content));
	var responseData = await RequestUtil.GET(ctx,url,content); // 这里调用要在 async 函数里
	logger.info("我的申请res："+JSON.stringify(responseData))
	ctx.response.body = responseData;  
}
exports.listActingAll = async(ctx, next) => {
	var type =  ctx.params.type;
	if(!type){type = 0;}
	var url = URLConfig.url.trip.listActingAll+type;  
	var content = {};
	logger.info("我的审批req："+url+",请求JSON："+JSON.stringify(content));
	var responseData = await RequestUtil.GET(ctx,url,content); // 这里调用要在 async 函数里
	logger.info("我的审批res："+JSON.stringify(responseData))
	ctx.response.body = responseData;  
}
exports.listSubActingAll = async(ctx, next) => {
	const querystring = require("querystring");
	let params = querystring.stringify(ctx.query); 
	var url = URLConfig.url.trip.listSubActingAll+"?"+params;  
	var content = {};
	logger.info("我的子流程审批req："+url+",请求JSON："+JSON.stringify(content));
	var responseData = await RequestUtil.GET(ctx,url,content); // 这里调用要在 async 函数里
	logger.info("我的子流程审批res："+JSON.stringify(responseData))
	ctx.response.body = responseData;  
}
exports.audit = async(ctx, next) => {
	let passType = ctx.params.passType;
	var url = URLConfig.url.trip.audit + passType;  
	var content = ctx.request.body;
	logger.info("审批req："+url+",请求JSON："+JSON.stringify(content));
	var responseData = await RequestUtil.POST(ctx,url,content); // 这里调用要在 async 函数里
	logger.info("审批res："+JSON.stringify(responseData))
	ctx.response.body = responseData;  
}
exports.applyDetail = async(ctx, next) => { 
	let id = ctx.params.id;
	var url = URLConfig.url.trip.applyDetail + id;  
	var content = {};
	logger.info("详情req："+url+",请求JSON："+JSON.stringify(content));
	var responseData = await RequestUtil.GET(ctx,url,content); // 这里调用要在 async 函数里
	logger.info("详情res："+JSON.stringify(responseData))
	ctx.response.body = responseData;  
}