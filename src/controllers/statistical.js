'use strict'
const log4js = require('koa-log4')
const logger = log4js.getLogger('app')
const URLConfig = require('../config/config')
const RequestUtil = require('../utils/requestUtil')
const IService = require('../service/index')
 
exports.tmcCategory = async(ctx, next) => {
	var url = URLConfig.url.statistical.tmcCategory;  
	var content = ctx.request.body;
	logger.info("统计查询req："+url+",请求JSON："+JSON.stringify(content));
	var responseData = await RequestUtil.POST(ctx,url,content); // 这里调用要在 async 函数里
	logger.info("统计查询res："+JSON.stringify(responseData))
	ctx.response.body = responseData;  
}
  