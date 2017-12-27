'use strict'
const log4js = require('koa-log4')
const logger = log4js.getLogger('app')
const URLConfig = require('../config/config')
const RequestUtil = require('../utils/requestUtil')
const fs=require('fs'); 
const path = require('path') 
var HashMap = require('hashmap');
//订单查询接口
exports.query = async(ctx, next) => {
	const querystring = require("querystring");
	//page=1&rows=50&type=phone
	let params = querystring.stringify(ctx.query);
	logger.info("params:"+params);
	var url = URLConfig.url.order.query+"?"+params;
	logger.info("订单查询接口url:"+url);   
	var responseData = await RequestUtil.GET(ctx,url,{}); // 这里调用要在 async 函数里
	logger.info("订单查询接口res:"+JSON.stringify(responseData));
	//优化
	var result=JSON.parse(fs.readFileSync(path.join(__dirname, "../json/aircompany.json")));
	var map = new HashMap();
	for(let j = 0; j < result.length;j++){
		let cityCn = result[j].cityCn;
		let airportCode = result[j].airportCode;
		map.set(airportCode, cityCn);
	}
	for(let i = 0; i < responseData.rows.length;i++){ 
		responseData.rows[i].fromCityCn = map.get(responseData.rows[i].toStartAirportCode);
		responseData.rows[i].toCityCn = map.get(responseData.rows[i].toEndAirportCode);
		for(let m = 0; m < responseData.rows[i].list.length;m++){
			responseData.rows[i].list[m].fromCityCn = map.get(responseData.rows[i].list[m].deptCode);
			responseData.rows[i].list[m].toCityCn = map.get(responseData.rows[i].list[m].arrCode);
		}
	}
	ctx.response.body = responseData; 
}

exports.create = async(ctx, next) => {
	var content = ctx.request.body;
	logger.info("单程生单:"+URLConfig.url.order.create+","+JSON.stringify(content));
	var url = URLConfig.url.order.create;  
	var responseData = await RequestUtil.POST(ctx,url,content); // 这里调用要在 async 函数里
	logger.info("单程生单res:"+JSON.stringify(responseData)); 
	if(responseData.success){//生单成功
		let orderNumber = responseData.obj;
		var payUrl = URLConfig.url.trip.notifySubRouteOrderNumber;
		var req = {"businessTripRouteId":content.pltmOrder.callbackId,
					"routeOrderNumber":orderNumber
					}
		logger.info("更新机票订单号url:"+payUrl+",req:"+JSON.stringify(req));
		var response = await RequestUtil.POST(ctx,payUrl,req); // 这里调用要在 async 函数里
		logger.info("更新机票订单号res:"+JSON.stringify(response));
	}
	ctx.response.body = responseData; 
}

exports.createRT = async(ctx, next) => {
	logger.info("往返生单:"+URLConfig.url.order.createRT);
	var content = ctx.request.body;
	var url = URLConfig.url.order.createRT;  
	var responseData = await RequestUtil.POST(ctx,url,content); // 这里调用要在 async 函数里
	logger.info("往返生单反馈："+JSON.stringify(responseData))
	ctx.response.body = responseData; 
}

exports.cancel = async(ctx, next) =>{
	let orderno = ctx.params.orderno;
	let url = URLConfig.url.order.cancel + "/" + orderno;
	logger.info("订单取消req:"+url);
	var responseData = await RequestUtil.GET(ctx,url,{}); // 这里调用要在 async 函数里
	logger.info("订单取消res:"+JSON.stringify(responseData))
	ctx.response.body = responseData; 
}


exports.detail = async(ctx, next) =>{
	let orderno = ctx.params.orderno;
	let url = URLConfig.url.order.detail + "/" + orderno;
	logger.info("订单详情req:"+url);
	var responseData = await RequestUtil.GET(ctx,url,{}); // 这里调用要在 async 函数里
	logger.info("订单详情res:"+JSON.stringify(responseData))
	ctx.response.body = responseData; 
}

exports.queryPassenger = async(ctx, next) =>{
	let orderno = ctx.params.orderno;
	let url = URLConfig.url.order.queryPassenger + "/" + orderno;
	logger.info("订单乘客详情req:"+url);
	var responseData = await RequestUtil.GET(ctx,url,{}); // 这里调用要在 async 函数里
	logger.info("订单乘客详情res:"+JSON.stringify(responseData))
	ctx.response.body = responseData; 
}
exports.orderLogAndRemark = async(ctx, next) =>{
	let orderno = ctx.params.orderno;
	let url = URLConfig.url.order.orderLogAndRemark + "/" + orderno;
	logger.info("订单日志req:"+url);
	var responseData = await RequestUtil.GET(ctx,url,{}); // 这里调用要在 async 函数里
	logger.info("订单日志res:"+JSON.stringify(responseData))
	ctx.response.body = responseData; 
}


/**
 * 运营端机票订单列表
 * @param {*} ctx 
 * @param {*} next 
 */
exports.getBuyerList = async(ctx, next) => {
	const querystring = require("querystring");
	let params = querystring.stringify(ctx.query);
	logger.info("params:"+params);
	var url = URLConfig.url.order.getBuyerList+"?"+params;
	logger.info("查询订单列表:"+url);
	var content = {};  
	var responseData = await RequestUtil.GET(ctx,url,content); // 这里调用要在 async 函数里
	logger.info("查询订单列表"+JSON.stringify(responseData))
	ctx.response.body = responseData; 
}