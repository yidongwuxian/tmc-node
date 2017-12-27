let SystemConfiy = require('../../config/dev.env.config') 
if( process.env.NODE_ENV === 'development' ) {
  SystemConfiy = require('../../config/dev.env.config') 
} else if( process.env.NODE_ENV === 'test' ) {
  SystemConfiy = require('../../config/test.env.config')
} else if( process.env.NODE_ENV === 'production' ) {
  SystemConfiy = require('../../config/prod.env.config')
}
const mongoose = require('mongoose');
const log4js = require('koa-log4')
const logger = log4js.getLogger('mongoose')
const Schema = mongoose.Schema;
// mongoose.connect('mongodb://192.168.13.68:27017/koa');
mongoose.Promise = require('bluebird')
mongoose.connect('mongodb://'+SystemConfiy.Mongodb.host+':'+SystemConfiy.Mongodb.port+'/'+SystemConfiy.Mongodb.database,{useMongoClient:true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => {
	logger.info('connection success...'); 
});

module.exports = mongoose