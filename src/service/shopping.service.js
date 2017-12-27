const log4js = require('koa-log4')
const logger = log4js.getLogger('app')
const IDao= require('../dao/index')
var moment = require('moment');

exports.groupActivity = async (shopping,isInter) => {
	// var url = URLConfig.url.activity.query;  
	// var responseData = await RequestUtil.GET(ctx,url); // 这里调用要在 async 函数里
	// ctx.response.body = responseData; 
	// logger.info("shopping:"+shopping);
	var activityData = await IDao.ActivitDao.findAllActivity();
	moment().format();
	let activity = {};
	let forSupplier = "0";//供应商
	let forSource = "0";//国际国内
	//查询有效的活动
	activityData.forEach(function(element) {
		var startTime = moment(element.startTime);
		var endTime = moment(element.endTime);
		var now = moment();
		if(now > startTime && now < endTime && element.status == 1){
			activity = element;
			forSupplier = element.forSupplier;
			forSource = element.forSource;
			// activityStr = element.forSupplier+element.forSource;
		} 
		// logger.info("date："+element.startTime+"element:"+day); 
	}, this);
	logger.info("当前有效的活动："+JSON.stringify(activity));
	//检索活动对应的航班信息
	// logger.info(JSON.stringify(shopping.data));
	if(shopping && shopping.data){
		for(let i = 0; i < shopping.data.length;i++){
			let data = shopping.data[i];
			var supplierId = data.prices[0].supplierId;  
			let sourceFlag = false;
			let supplierFlag = false;
			if(forSource == '0'){//国际国内都有优惠
				sourceFlag = true;
			}else if(forSource == "1"){//国内
				if(isInter){
					sourceFlag = false;
				}else{
					sourceFlag = true;
				}
			}else if(forSource == "2"){//国际
				if(isInter){
					sourceFlag = true;
				}else{
					sourceFlag = false;
				}
			}
			if(forSupplier == '0'){//所有供应商有优惠
				supplierFlag = true;
			}else if(forSupplier == "1"){//天地行
				if(supplierId == "TDXD" || supplierId == "TDXI"){
					supplierFlag = true;
				}else{
					supplierFlag = false;
				}
			}else if(forSupplier == "2"){
				if(supplierId == "TDXD" || supplierId == "TDXI"){
					supplierFlag = false;
				}else{
					supplierFlag = true;
				}
			}
			if(sourceFlag && supplierFlag){
				var act = {
					id: activity.id,
					actContent: activity.actContent,
					actImage: activity.actImage,
					actModel: activity.actModel,
					actMoney: activity.actMoney,
					actType: activity.actType, 
					forPeople: activity.forPeople,
					forSource: activity.forSource,
					forSupplier: activity.forSupplier,
					name: activity.name,
					passengerType: activity.passengerType,
					remarks: activity.remarks
				  }
				shopping.data[i].activity=act;
			}
		}
	}
	// logger.info("有效的:"+JSON.stringify(shopping));
	return shopping
}

exports.groupTicketRule = async (shopping,rule) => {
	 
	logger.info("当前有效的规则："+JSON.stringify(rule));
	if(rule.success && rule.data.domesticTicketRules.length == 0){
		return shopping;
	}
	let domesticTicketRules = rule.data.domesticTicketRules[0];
	let discount_start = domesticTicketRules.discountStart;
	let discount_end = domesticTicketRules.discountEnd;
	//检索活动对应的航班信息
	// logger.info(JSON.stringify(shopping.data));
	if(shopping && shopping.data){
		for(let i = 0; i < shopping.data.length;i++){
			let data = shopping.data[i];
			var prices = data.prices;
			for(let j = 0;j < prices.length;j++){
				var cabinList = prices[j].cabinList;
				for(let k = 0;k < cabinList.length;k++){
					var discount = cabinList[k].discount;
					// logger.info("discount:"+discount+",discount_start:"+discount_start+",discount_end:"+discount_end);
					if(discount >= discount_start && discount <= discount_end){ 
						shopping.data[i].prices[j].cabinList[k].rule="inrule";
					}else{
						shopping.data[i].prices[j].cabinList[k].rule="notinrule";
					}
				}
			} 
		}
	}
	// logger.info("有效的:"+JSON.stringify(shopping));
	return shopping
}


exports.groupHotelRule = async (hotel,rule) => {
	
   logger.info("当前有效的规则："+JSON.stringify(rule));
   if(rule.success && rule.data.hotelRules.length == 0){
	   return hotel;
   }
   let hotelRules = rule.data.hotelRules[0];
   let defaultLevelCityPrice = hotelRules.defaultLevelCityPrice; 
   //检索活动对应的航班信息
   // logger.info(JSON.stringify(shopping.data));
   if(hotel && hotel.data){
	var Hotels = hotel.data.Hotels;
	for(let i = 0; i < Hotels.length;i++){
		let Rooms =  Hotels[i].Rooms; 
		for(let j = 0;j < Rooms.length;j++){
			var RatePlans = Rooms[j].RatePlans;
			for(let k = 0;k < RatePlans.length;k++){
				var TotalRate = RatePlans[k].TotalRate;
				// logger.info("discount:"+discount+",discount_start:"+discount_start+",discount_end:"+discount_end);
				if(defaultLevelCityPrice>=TotalRate){ 
					hotel.data.Hotels[i].Rooms[j].RatePlans[k].rule="inrule";
				}else{
					hotel.data.Hotels[i].Rooms[j].RatePlans[k].rule="notinrule";
				}
			}
		} 
	}
   }
   // logger.info("有效的:"+JSON.stringify(shopping));
   return hotel
}
