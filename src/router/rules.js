'use strict'

const Router = require('koa-router')
const Rule = require('../controllers/rules') 
const checkToken = require('../token/checkToken')

const router = Router({
  prefix: '/rule'
});
router.get('/listMyRule/:userId',Rule.listMyRule) 

router.get('/domesticTicketRule/list',Rule.domesticTicketRulelist) 
router.post('/domesticTicketRule/save',Rule.domesticTicketRulesave) 
router.post('/domesticTicketRule/remove/:id',Rule.domesticTicketRuleremove) 
router.post('/domesticTicketRule/enable/:id/:status',Rule.domesticTicketRuleenable) 

router.get('/hotelRule/list',Rule.hotelRulelist) 
router.post('/hotelRule/save',Rule.hotelRulesave) 
router.post('/hotelRule/remove/:id',Rule.hotelRuleremove) 
router.post('/hotelRule/enable/:id/:status',Rule.hotelRuleenable) 
 
router.get('/trainTicketRule/list',Rule.trainTicketRulelist) 
router.post('/trainTicketRule/save',Rule.trainTicketRulesave) 
router.post('/trainTicketRule/remove/:id',Rule.trainTicketRuleremove) 
router.post('/trainTicketRule/enable/:id/:status',Rule.trainTicketRuleenable)

// for require auto in index.js
module.exports = router;