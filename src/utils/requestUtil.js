const log4js = require('koa-log4')
const logger = log4js.getLogger('app')
var request = require('request');
const URLConfig = require('../config/config')
/**
 * GET请求
 * @param {*文档} ctx 
 * @param {*路径} url 
 * @param {*请求参数} requestData 
 */
exports.GET = function (ctx,url,requestData) {
	let token = "";
	if (ctx.request.header['authorization']) {
		token = ctx.request.header['authorization'].split(' ')[0]
	}
	logger.info("requestData"+JSON.stringify(requestData));
    return new Promise(function (resolve, reject) {
        request({
			url: url,
			method: "GET",
			json: true,
			headers: {
				"content-type": "application/json",
				'X-Auth-Token': token
			},
			qs:requestData
		}, function (error, response, body) {
            if (error) return reject(error);
            resolve(body);
        })
    });
};

exports.POST = function (ctx,url,requestData) {
	logger.info("requestData:"+JSON.stringify(requestData));
	let token = "";
	if (ctx.request.header['authorization']) {
		token = ctx.request.header['authorization'].split(' ')[0]
	}
    return new Promise(function (resolve, reject) {
		request({
			url: url,
			method: "POST",
			json: true,
			headers: {
				"content-type": "application/json",
				"X-Auth-Token": token
			},
			body: requestData
		}, function(error, response, body) {
			if (error) return reject(error);
            resolve(body);
		});
    });
};
