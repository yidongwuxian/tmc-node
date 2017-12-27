'use strict'

var mongoose =  require('mongoose') 
const { ActivityModel } = require('../models/index')
/**
 * 查找所用用户
 * @return {[type]} [description]
 */
exports.findAllActivity = async () => {
	var query = ActivityModel.find({});
	var res = []
	res = await query.exec(function(err, result) {
		if(err) {
			res = []
		}else {
			res = result;
		}
	})
	return res
}

/**
 * 增加活动
 * @param  {[Activity]} activity [mongoose.model('User')]
 * @return {[type]}      [description]
 */
exports.addActivity = async (content) => { 
	var flag = false
	var activity = ActivityModel(content)
	activity = await activity.save(err => {
		if(err) {
			flag = false
			// return false
		}else{
			flag = true
		}
	  }) 
	  return flag
}

exports.deleteAll = async () => { 
	var flag = false
	console.log('flag==========>'+flag)
	await ActivityModel.remove({}, function(err) {
		if(err) {
			flag = false
			// return false
		}else{
			flag = true
		}
		
	})
	console.log('flag=====await=====>'+flag)
	return flag
}

 
