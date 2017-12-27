'use strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema;

const ActivitySchema = new Schema({
  id: { type: String,unique: true, required: true },
  actContent: { type: String,  required: true },
  actImage: { type: String, required: false },
  actModel: { type: String, required: true },
  actMoney: { type: String, required: true },
  actType: { type: String, required: true },
  createTime: { type: Date, required: false },
  createUser: { type: String, required: false },
  createUserName: { type: String, required: false },
  endTime: { type: Date, required: true },
  forPeople: { type: String, required: true },
  forSource: { type: String, required: true },
  forSupplier: { type: String, required: true },
  lastmodifyTime: { type: Date, required: false },
  lastmodifyUser: { type: String, required: false },
  lastmodifyUserName: { type: String, required: false },
  name: { type: String, required: true },
  passengerType: { type: String, required: true },
  remarks: { type: String, required: false },
  startTime: { type: Date, required: true },
  status: { type: String, required: true }
})


var Activity = mongoose.model('Activity', ActivitySchema)
module.exports = Activity
  