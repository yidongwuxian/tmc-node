'use strict'
const log4js = require('koa-log4')
const logger = log4js.getLogger('app')
const URLConfig = require('../config/config')
const RequestUtil = require('../utils/requestUtil')
const IDao= require('../dao/index')
//乘客查询接口
exports.listMyRule = async(ctx, next) => {
	let userId = ctx.params.userId;
	let url =  URLConfig.url.rule.listMyRule+userId;
	logger.info("查询我的规则url:"+url);  
	var responseData = await RequestUtil.GET(ctx,url,{}); // 这里调用要在 async 函数里
	logger.info("查询我的规则res:"+ JSON.stringify(responseData));
	ctx.response.body = responseData
}
exports.domesticTicketRulelist = async(ctx, next) => {
	let url =  URLConfig.url.rule.domesticTicketRulelist;
	logger.info("查询所有的国内机票规则url:"+url);  
	var responseData = await RequestUtil.GET(ctx,url,{}); // 这里调用要在 async 函数里
	logger.info("查询所有的规则res:"+ JSON.stringify(responseData));
	ctx.response.body = responseData
}

exports.domesticTicketRulesave = async(ctx, next) => {
	var content = ctx.request.body;
	var url = URLConfig.url.rule.domesticTicketRulesave;  
	logger.info("查询国内机票规则保存:"+url);
	var responseData = await RequestUtil.POST(ctx,url,content); // 这里调用要在 async 函数里
	ctx.response.body = responseData;  
}
exports.domesticTicketRuleremove = async(ctx, next) => {
	var id = ctx.params.id;
	var url = URLConfig.url.rule.domesticTicketRuleremove+id;  
	logger.info("国内机票规则删除:"+url);
	var content = {}; 
	var responseData = await RequestUtil.POST(ctx,url,content); // 这里调用要在 async 函数里
	ctx.response.body = responseData;  
}
exports.domesticTicketRuleenable = async(ctx, next) => {
	var id = ctx.params.id;
	var status = ctx.params.status;
	var url = URLConfig.url.rule.domesticTicketRuleenable+id+"/"+status;  
	logger.info("国内机票规则启用:"+url);
	var content = {};  
	var responseData = await RequestUtil.POST(ctx,url,content); // 这里调用要在 async 函数里
	ctx.response.body = responseData;  
}
 


exports.hotelRulelist = async(ctx, next) => {
	let url =  URLConfig.url.rule.hotelRulelist;
	logger.info("查询所有的酒店规则url:"+url);  
	var responseData = await RequestUtil.GET(ctx,url,{}); // 这里调用要在 async 函数里
	logger.info("查询所有的酒店规则res:"+ JSON.stringify(responseData));
	ctx.response.body = responseData
}

exports.hotelRulesave = async(ctx, next) => {
	var content = ctx.request.body;
	var url = URLConfig.url.rule.hotelRulesave;  
	logger.info("查询酒店规则保存:"+url);
	var responseData = await RequestUtil.POST(ctx,url,content); // 这里调用要在 async 函数里
	ctx.response.body = responseData;  
}
exports.hotelRuleremove = async(ctx, next) => {
	var id = ctx.params.id;
	var url = URLConfig.url.rule.hotelRuleremove+id;  
	logger.info("酒店规则删除:"+url);
	var content = {}; 
	var responseData = await RequestUtil.POST(ctx,url,content); // 这里调用要在 async 函数里
	ctx.response.body = responseData;  
}
exports.hotelRuleenable = async(ctx, next) => {
	var id = ctx.params.id;
	var status = ctx.params.status;
	var url = URLConfig.url.rule.hotelRuleenable+id+"/"+status;  
	logger.info("酒店规则启用:"+url);
	var content = {};  
	var responseData = await RequestUtil.POST(ctx,url,content); // 这里调用要在 async 函数里
	ctx.response.body = responseData;  
}


exports.trainTicketRulelist = async(ctx, next) => {
	let url =  URLConfig.url.rule.trainTicketRulelist;
	logger.info("查询所有的火车规则url:"+url);  
	var responseData = await RequestUtil.GET(ctx,url,{}); // 这里调用要在 async 函数里
	logger.info("查询所有的火车规则res:"+ JSON.stringify(responseData));
	ctx.response.body = responseData
}

exports.trainTicketRulesave = async(ctx, next) => {
	var content = ctx.request.body;
	var url = URLConfig.url.rule.trainTicketRulesave;  
	logger.info("查询火车规则保存:"+url);
	var responseData = await RequestUtil.POST(ctx,url,content); // 这里调用要在 async 函数里
	ctx.response.body = responseData;  
}
exports.trainTicketRuleremove = async(ctx, next) => {
	var id = ctx.params.id;
	var url = URLConfig.url.rule.trainTicketRuleremove+id;  
	logger.info("火车规则删除:"+url);
	var content = {}; 
	var responseData = await RequestUtil.POST(ctx,url,content); // 这里调用要在 async 函数里
	ctx.response.body = responseData;  
}
exports.trainTicketRuleenable = async(ctx, next) => {
	var id = ctx.params.id;
	var status = ctx.params.status;
	var url = URLConfig.url.rule.trainTicketRuleenable+id+"/"+status;  
	logger.info("火车规则启用:"+url);
	var content = {};  
	var responseData = await RequestUtil.POST(ctx,url,content); // 这里调用要在 async 函数里
	ctx.response.body = responseData;  
}