'use strict'

// 系统配置
export let System = {
  KEY : 'yixiang',
  Listen_port:7020,//系统监听端口
  API_server_url: 'http://', // API服务器协议类型,包含"http://"或"https://"
  HTTP_server_url: 'http://', // HTTP服务器协议类型,包含"http://"或"https://"
  Session_Key: 'SESSIONID', // 生产环境务必随机设置一个值
  Session_MaxAge:50000   //毫秒为单位
}

export let Redis = {
	port: 6379,          // Redis port
	host: '10.26.240.64',   // Redis host
	family: 4,           // 4 (IPv4) or 6 (IPv6)
	password: '',		//密码
	db: 0	//数据库
}

export let Mongodb = {
	port: 27017,          // Redis port
	host: '10.174.8.122',   // Redis host
	password: '',		//密码
	database: 'test'	//数据库
}

export let Mysql = {
  host: 'localhost', // 服务器地址
  port: 3306, // 数据库端口号
  username: 'admin', // 数据库用户名
  password: 'admin888', // 数据库密码
  database: 'development' // 数据库名称
}

export let SendEmail = {
  service: 'smtp.abcd.com', // SMTP服务提供商域名
  username: 'postmaster%40abcd.com', // 用户名/用户邮箱
  password: 'password', // 邮箱密码
  sender_address: '"XX平台'
}
