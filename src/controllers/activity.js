'use strict'
const log4js = require('koa-log4')
const logger = log4js.getLogger('app')
const URLConfig = require('../config/config')
const RequestUtil = require('../utils/requestUtil')
const IDao= require('../dao/index')
//乘客查询接口
exports.query = async(ctx, next) => {
	// var url = URLConfig.url.activity.query;  
	// var responseData = await RequestUtil.GET(ctx,url); // 这里调用要在 async 函数里
	// ctx.response.body = responseData; 
	logger.info("查询所有的活动");
	var responseData = await IDao.ActivitDao.findAllActivity()
	logger.info("查询所有的活动res:"+ JSON.stringify(responseData));
	ctx.response.body = responseData
}

exports.create = async(ctx, next) => {
	logger.info(URLConfig.url.activity.create);
	var content = ctx.request.body;
	var url = URLConfig.url.activity.create;  
	var responseData = await RequestUtil.POST(ctx,url,content); // 这里调用要在 async 函数里
	ctx.response.body = responseData;  
}
exports.update = async(ctx, next) => {
	logger.info(URLConfig.url.activity.update);
	var content = ctx.request.body;
	var url = URLConfig.url.activity.update;  
	var responseData = await RequestUtil.POST(ctx,url,content); // 这里调用要在 async 函数里
	ctx.response.body = responseData;  
}
exports.sync = async(ctx, next) => {
	var content = ctx.request.body;
	// var activity = ActivityModel(content)
	try {
		logger.info("删除原有的活动");
		await IDao.ActivitDao.deleteAll();
		logger.info("保存活动:"+ JSON.stringify(content));
		for (var i = 0; i < content.length; i++) {
			await IDao.ActivitDao.addActivity(content[i]); 
		}
		logger.info("保存成功");
		ctx.response.body = {success:true}
	} catch (err) {
		//can not catch it
		logger.info("保存失败");
		ctx.response.body = {success:false}
	}
}