'use strict'
const log4js = require('koa-log4')
const logger = log4js.getLogger('app')
const URLConfig = require('../config/config')
const RequestUtil = require('../utils/requestUtil')
//乘客查询接口
exports.rule = async(ctx, next) => {
	var url = URLConfig.url.refundendorse.rule; 
	var content = ctx.request.body;
	logger.info("退改签规则查询接口:"+url);  
	var responseData = await RequestUtil.POST(ctx,url,content); // 这里调用要在 async 函数里
	logger.info("退改签规则查询返回："+JSON.stringify(responseData));
	ctx.response.body = responseData;
}
 