'use strict'
const log4js = require('koa-log4')
const logger = log4js.getLogger('app')
const URLConfig = require('../config/config')
const RequestUtil = require('../utils/requestUtil')
const IService = require('../service/index')
//航班查询接口
exports.query = async(ctx, next) => {
	// var params = {
	// 	"deptCity": ctx.query.deptCity,
	// 	"arrCity": ctx.query.arrCity,
	// 	"deptStartDate": ctx.query.deptStartDate,
	// 	"deptEndDate": ctx.query.deptEndDate,
	// 	"seatClass": ctx.query.seatClass,
	// 	"routingType": ctx.query.routingType,
	// 	"adtCnt": ctx.query.adtCnt,
	// 	"chdCnt": ctx.query.chdCnt,
	// 	"infCnt": ctx.query.infCnt,
	// 	"sortType": "price_asc"
	// } 
	// logger.info("Shopping请求：" +URLConfig.url.shopping.query);
	// logger.info(JSON.stringify(params));
	// var url = URLConfig.url.shopping.query;
	// var responseData = await RequestUtil.POST(url,params); // 这里调用要在 async 函数里
	// logger.info("Shopping返回：" +responseData);
	// ctx.response.body = responseData;
	var params = {
		"deptCity":ctx.query.deptCity,
		"arrCity":ctx.query.arrCity,
		"deptStartDate":ctx.query.deptStartDate,
		"deptEndDate":ctx.query.deptEndDate,
		"seatClass":ctx.query.seatClass,
		"routingType":ctx.query.routingType,
		"adtCnt":ctx.query.adtCnt,
		"chdCnt":ctx.query.chdCnt,
		"infCnt":ctx.query.infCnt,
		"sortType":"price_asc"
	}
	var vo = { 
		"flightRangeType": params.routingType,
		"cabinRank": params.seatClass, 
		"adultNum": params.adtCnt,
		"childNum": params.chdCnt,
		"flightRange": [],
		"deptCity": ctx.query.deptCity,
		"arrCity": ctx.query.arrCity,
		"deptStartDate": ctx.query.deptStartDate,
		"deptEndDate": ctx.query.deptEndDate,
		"seatClass": ctx.query.seatClass,
		"routingType": ctx.query.routingType,
		"adtCnt": ctx.query.adtCnt,
		"chdCnt": ctx.query.chdCnt,
		"infCnt": ctx.query.infCnt,
		"sortType": "price_asc"
	} 
	if(params.routingType == 'OW'){
		var range =  {
				"fromCity": params.deptCity,
				"toCity": params.arrCity,
				"airlineCompany": "",
				"fromDate": params.deptStartDate 
			}
		vo.flightRange.push(range);
	}else if(params.routingType == "RT"){
		var range =  {
				"fromCity": params.deptCity,
				"toCity": params.arrCity,
				"airlineCompany": "",
				"fromDate": params.deptStartDate
			}
		vo.flightRange.push(range);
		 range =  {
				"fromCity": params.arrCity,
				"toCity": params.deptCity,
				"airlineCompany": "",
				"fromDate": params.deptEndDate
			}
		vo.flightRange.push(range);
	}
	logger.info("Shopping请求：" +URLConfig.url.shopping.query);
	logger.info(JSON.stringify(vo)); 
	var url = URLConfig.url.shopping.query;  
	var responseData = await RequestUtil.POST(ctx,url,vo); // 这里调用要在 async 函数里
	logger.info("Shopping返回：" + JSON.stringify(responseData));
	if(ctx.query.applyUser){
		let listMyRule =  URLConfig.url.rule.listMyRule + ctx.query.applyUser;
		logger.info("查询我的规则listMyRule url:"+listMyRule);  
		var listMyRuleData = await RequestUtil.GET(ctx,listMyRule,{}); // 这里调用要在 async 函数里
		logger.info("查询我的规则res:"+ JSON.stringify(listMyRuleData)); 
		responseData = await IService.ShoppingService.groupTicketRule(responseData,listMyRuleData);
	}

	//let isInter = IService.AircompanyService.isInter(ctx.query.deptCity,ctx.query.arrCity);
	
	
	//logger.info("isInter:"+isInter);
	// logger.info("Shopping返回：" +JSON.stringify(newData));
	// logger.info("Shopping返回：" +newData);
	ctx.response.body = responseData;
}
//订单验价接口
exports.orderConfirm = async(ctx, next) => {
	logger.info("orderConfirm请求："+URLConfig.url.shopping.confirm);
	var content = ctx.request.body;
	logger.info(JSON.stringify(content));
	var url = URLConfig.url.shopping.confirm;  
	var responseData = await RequestUtil.POST(ctx,url,content); // 这里调用要在 async 函数里
	logger.info("orderConfirm返回：" +JSON.stringify(responseData));
	ctx.response.body = responseData; 
}