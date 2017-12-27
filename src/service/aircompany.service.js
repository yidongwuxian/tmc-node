const log4js = require('koa-log4')
const logger = log4js.getLogger('app')
// const fetch = require('node-fetch');
const fs=require('fs'); 
const path = require('path')
var HashMap = require('hashmap'); 
exports.isInter = (deptCode,arrCode) => {
	logger.info(deptCode+arrCode);
	logger.info("path:"+path.join(__dirname, "../json/aircompany.json"));
	var result=JSON.parse(fs.readFileSync(path.join(__dirname, "../json/aircompany.json")));
	var map = new HashMap();
	for(let j = 0; j < result.length;j++){
		let cityCode = result[j].cityCode;
		let countryEn = result[j].countryEn;
		map.set(cityCode, countryEn);
	}
	let flag = false;  
	if(map.get(deptCode) == 'CHINA'){
		flag = false;
	}else{
		flag = true;
	} 
	if(!flag){
		if(map.get(arrCode) == 'CHINA'){
			flag = false;
		}else{
			flag = true;
		}
	}
	return flag;
	//logger.info(result);
}

 