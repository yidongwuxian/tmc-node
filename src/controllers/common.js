'use strict'
const log4js = require('koa-log4')
const logger = log4js.getLogger('app')
const URLConfig = require('../config/config')
const RequestUtil = require('../utils/requestUtil')
const fs=require('fs'); 
const path = require('path')

exports.hotelcity = async(ctx, next) => {
	logger.info("path:"+path.join(__dirname, "../json/hotelcity.json"));
	var responseData=JSON.parse(fs.readFileSync(path.join(__dirname, "../json/hotelcity.json")));
	 
	ctx.response.body = responseData;  
} 
exports.hotelcitydistrict = async(ctx, next) => {
	var code = ctx.params.code;
	logger.info("path:"+path.join(__dirname, "../json/hotelcitydistrict.json"));
	var responseData=JSON.parse(fs.readFileSync(path.join(__dirname, "../json/hotelcitydistrict.json")));
	var resultData = [];
	for(var i=0; i<responseData.length; i++){
		var jsonObj = responseData[i];
		if(jsonObj.CityCode == code){
			resultData.push(jsonObj);
		}
	}
	ctx.response.body = resultData;  
} 