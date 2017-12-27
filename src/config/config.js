//判断当前环境类型
const isProdEnv = process.env.NODE_ENV === 'production'
//开发环境下的配置参数 
        //develop
// let HOST = "http://192.168.1.249:8091/tmc-service-1.0-SNAPSHOT/";
let TMC_HOST = "http://192.168.1.249:8091/tmc-service-1.0-SNAPSHOT/";
let HOST = "http://192.168.1.249:8888/platform-single-1.0-SNAPSHOT/";
// let HOST = "http://192.168.1.178:8080/platform-single-1.0-SNAPSHOT/";
let SHOPPING_HOST = "http://192.168.1.249:8888/agg-shopping-service-1.0-SNAPSHOT/";
let REFUND_HOST = "http://192.168.1.249:8888/agg-rerouting-service-1.0-SNAPSHOT/";
let HOTEL_HOST = "http://192.168.1.249:8888/agg-hotel-service-1.0-SNAPSHOT/";
let TRAIN_HOST = "http://192.168.1.249:8888/agg-train-service-1.0-SNAPSHOT/";

        //develop2
// let HOST = "http://localhost:8080/agg-order-service-1.0-SNAPSHOT/";
// let SHOPPING_HOST = "http://192.168.1.249:8888/agg-shopping-service-1.0-SNAPSHOT/";
// let REFUND_HOST = "http://192.168.1.249:8888/agg-rerouting-service-1.0-SNAPSHOT/";
//登录用到的token
let XTOKEN = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI0NDAwMDQzNDAzIiwiY3JlYXRlZCI6MTUwMTgxMDg0MDY3OH0.F-UhefPjia67vgphD_k9tbSITrXKJdRUVRhV_Uy8jv4oc7mP55Pob-KlWDj0WUsPu_rNtvMB1muWjyLDmMmEQw";

let PURCHASE = "1001";
let secret = 'yixiangyunda2017';
// ms('2 days')  // 172800000
// ms('1d')      // 86400000
// ms('10h')     // 36000000
// ms('2.5 hrs') // 9000000
// ms('2h')      // 7200000
// ms('1m')      // 60000
// ms('5s')      // 5000
// ms('1y')      // 31557600000
// ms('100')     // 100
let TOKEN_EXP = '2h';//30m  2h 
//shopping URL Config 
let user = {
    logintest: TMC_HOST + "login",
    login: TMC_HOST + "login",
    list: TMC_HOST + "user/list",
    save: TMC_HOST + "user/save",
    update: TMC_HOST + "user/update/",
    remove: TMC_HOST + "user/remove/",
    detail: TMC_HOST + "user/detail/",
}
let trip = {
    create: TMC_HOST + "trip/apply/",
    query: TMC_HOST + "trip/listClaimAll",
    listMyApply: TMC_HOST + "trip/listMyApply",
    listActingAll: TMC_HOST + "trip/listAct/",
    listSubActingAll: TMC_HOST + "trip/listSubActingAll",
    audit: TMC_HOST + "trip/pass/",
    applyDetail: TMC_HOST + "trip/applyDetail/",
    passSub: TMC_HOST + "trip/passSubRoute/",
    notifySubRoute: TMC_HOST + "trip/notifySubRoute",
    notifySubRouteOrderNumber: TMC_HOST + "trip/notifySubRouteOrderNumber",
}
let train = {
    create: TRAIN_HOST + "train/create",
    search: TRAIN_HOST + "train/search", 
    checkTicket: TRAIN_HOST + "train/checkTicket",
    pay: TRAIN_HOST + "train/pay",
    orderList: TRAIN_HOST + "train/order/list",
    orderDetail: TRAIN_HOST + "train/order/detail"
}
let hotel = {
    search: HOTEL_HOST + "hotel/search",
    detail: HOTEL_HOST + "hotel/detail",
    orderList: HOTEL_HOST + "order/list/local",
    orderNew: HOTEL_HOST + "order/new",
    orderPay: HOTEL_HOST + "order/pay",
    orderDetail: HOTEL_HOST + "order/detail",
    orderCancel: HOTEL_HOST + "order/cancel" ,
    passSub: TMC_HOST + "trip/passSubHotel/",
    notifySubHotel: TMC_HOST + "trip/notifySubHotel",
    notifySubHotelOrderNumber: TMC_HOST + "trip/notifySubHotelOrderNumber"
}
let rule = {
    listMyRule: TMC_HOST + "rule/listMyRule/",
    domesticTicketRulelist: TMC_HOST + "domesticTicketRule/list",
    domesticTicketRulesave: TMC_HOST + "domesticTicketRule/save",
    domesticTicketRuleremove: TMC_HOST + "domesticTicketRule/remove/",
    domesticTicketRuleenable: TMC_HOST + "domesticTicketRule/enable/",
    hotelRulelist: TMC_HOST + "hotelRule/list",
    hotelRulesave: TMC_HOST + "hotelRule/save",
    hotelRuleremove: TMC_HOST + "hotelRule/remove/",
    hotelRuleenable: TMC_HOST + "hotelRule/enable/",
    trainTicketRulelist: TMC_HOST + "trainTicketRule/list",
    trainTicketRulesave: TMC_HOST + "trainTicketRule/save",
    trainTicketRuleremove: TMC_HOST + "trainTicketRule/remove/",
    trainTicketRuleenable: TMC_HOST + "trainTicketRule/enable/"
}
let statistical = {
    tmcCategory: HOST + "statistical/tmcCategory"
}
let shopping = {
    query: SHOPPING_HOST + "flight/search",
    confirm: SHOPPING_HOST + 'flight/price'
}
let passenger = {
    query: HOST + "commonPass/page",
    create: HOST + "commonPass/create",
    update: HOST + "commonPass/update"
}
let insurance = {
    query: HOST + "insurantConf/list",
    detail: HOST + "insurantConf/detail/",
    insureOrders: HOST + "order/queryInsureOrders/"
}
let order = {
    query: HOST + "search/bigList",
    create: HOST + "order/create",
    createRT: HOST + "order/createRT",
    cancel: HOST + "order/appcancel",
    detail: HOST + "order/orderDetail/",
    getBuyerList: HOST + "search/getBuyerList",
    queryPassenger: HOST + "order/queryPassenger/",
    orderLogAndRemark: HOST + "order/orderLogAndRemark/",
}
let pay = {
    pre: HOST + "pay/pre",
    endorsePre: HOST + "pay/endorsePre",
    tmcPay: HOST + "pay/tmcPay/"
}
let activity = {
    query: HOST + "activity/page",
    create: HOST + "activity/create",
    update: HOST + "activity/update",
}
let refundendorse = {
    rule: REFUND_HOST + "orderChangeBack/endorsementSearch"
}
//生产环境下的配置参数
if (isProdEnv) { //覆盖开发环境的参数 
    HOST = "http://100.114.245.166:8060/agg-order-service-1.0-SNAPSHOT/";
    SHOPPING_HOST = "http://100.114.245.166:8060/agg-shopping-service-1.0-SNAPSHOT/";
    REFUND_HOST = "http://100.114.245.166:8060/agg-rerouting-service-1.0-SNAPSHOT/";
    XTOKEN = "";
    user = {
        logintest: HOST + "admin/test",
        login: HOST + "lkl/index"
    }
    trip = {
        create: HOST + "/trip/apply/"
    }
    shopping = {
        query: SHOPPING_HOST + "flight/search",
        confirm: SHOPPING_HOST + 'flight/price'
    }
    passenger = {
        query: HOST + "commonPass/page",
        create: HOST + "commonPass/create",
        update: HOST + "commonPass/update",
    }
    insurance = {
        query: HOST + "insurantConf/list",
        detail: HOST + "insurantConf/detail/",
        insureOrders: HOST + "order/queryInsureOrders/"
    }
    order = {
        query: HOST + "search/bigList",
        create: HOST + "order/create",
        createRT: HOST + "order/createRT",
        cancel: HOST + "order/appcancel"
    }
    pay = {
        pre: HOST + "pay/pre",
        endorsePre: HOST + "pay/endorsePre"
    }
    activity = {
        query: HOST + "activity/page",
        create: HOST + "activity/create",
        update: HOST + "activity/update",
    }
    refundendorse = {
        rule: REFUND_HOST + "orderChangeBack/endorsementSearch"
    }
}
//模块导出 
export let url = {
    token:XTOKEN,
    purchse:PURCHASE,
    secret:secret,
    TOKEN_EXP:TOKEN_EXP,
    user: user,
    shopping: shopping,
    passenger: passenger,
    insurance: insurance,
    refundendorse: refundendorse,
    order: order,
    pay: pay,
    activity: activity,
    trip: trip,
    hotel: hotel,
    train: train,
    statistical: statistical,
    rule: rule
};