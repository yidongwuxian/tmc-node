webpackJsonp([11],{fQjX:function(e,t,i){(e.exports=i("xCkK")(!0)).push([e.i,"\n#hotelOrderDetail > div {\n  padding-bottom: 20px;\n}\n#hotelOrderDetail > div header {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    font-size: 12px;\n    height: 80px;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    border-bottom: 1px solid #e4e4e6;\n}\n#hotelOrderDetail > div header b {\n      margin-right: 36px;\n}\n#hotelOrderDetail > div .payMess, #hotelOrderDetail > div .hotelMess, #hotelOrderDetail > div .guestMess, #hotelOrderDetail > div .connectMess, #hotelOrderDetail > div .logMess {\n    border: 1px solid #e4e4e4;\n}\n#hotelOrderDetail > div .payMess table, #hotelOrderDetail > div .hotelMess table, #hotelOrderDetail > div .guestMess table, #hotelOrderDetail > div .connectMess table, #hotelOrderDetail > div .logMess table {\n      width: 100%;\n      border-collapse: collapse;\n      font-size: 12px;\n}\n#hotelOrderDetail > div .payMess th, #hotelOrderDetail > div .hotelMess th, #hotelOrderDetail > div .guestMess th, #hotelOrderDetail > div .connectMess th, #hotelOrderDetail > div .logMess th {\n      background: #eff4f7;\n      height: 36px;\n      font-weight: normal;\n      text-align: left;\n      padding-left: 20px;\n}\n#hotelOrderDetail > div .payMess td, #hotelOrderDetail > div .hotelMess td, #hotelOrderDetail > div .guestMess td, #hotelOrderDetail > div .connectMess td, #hotelOrderDetail > div .logMess td {\n      height: 54px;\n      padding-left: 20px;\n}\n#hotelOrderDetail > div .payMess {\n    height: 158px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    font-size: 14px;\n}\n#hotelOrderDetail > div .payMess p {\n      margin-bottom: 5px;\n}\n#hotelOrderDetail > div .payMess .smallFont {\n      font-size: 12px;\n}\n#hotelOrderDetail > div .payMess .money {\n      font-size: 18px;\n      color: #f5595a;\n}\n","",{version:3,sources:["E:/码云开源项目/tmcrun-vue/src/pages/orderDetail/hotel/hotelOrderDetail.vue"],names:[],mappings:";AACA;EACE,qBAAqB;CACtB;AACD;IACI,qBAAqB;IACrB,qBAAqB;IACrB,cAAc;IACd,gBAAgB;IAChB,aAAa;IACb,0BAA0B;QACtB,uBAAuB;YACnB,oBAAoB;IAC5B,iCAAiC;CACpC;AACD;MACM,mBAAmB;CACxB;AACD;IACI,0BAA0B;CAC7B;AACD;MACM,YAAY;MACZ,0BAA0B;MAC1B,gBAAgB;CACrB;AACD;MACM,oBAAoB;MACpB,aAAa;MACb,oBAAoB;MACpB,iBAAiB;MACjB,mBAAmB;CACxB;AACD;MACM,aAAa;MACb,mBAAmB;CACxB;AACD;IACI,cAAc;IACd,qBAAqB;IACrB,qBAAqB;IACrB,cAAc;IACd,6BAA6B;IAC7B,8BAA8B;QAC1B,2BAA2B;YACvB,uBAAuB;IAC/B,yBAAyB;QACrB,sBAAsB;YAClB,wBAAwB;IAChC,0BAA0B;QACtB,uBAAuB;YACnB,oBAAoB;IAC5B,gBAAgB;CACnB;AACD;MACM,mBAAmB;CACxB;AACD;MACM,gBAAgB;CACrB;AACD;MACM,gBAAgB;MAChB,eAAe;CACpB",file:"hotelOrderDetail.vue",sourcesContent:["\n#hotelOrderDetail > div {\n  padding-bottom: 20px;\n}\n#hotelOrderDetail > div header {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    font-size: 12px;\n    height: 80px;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    border-bottom: 1px solid #e4e4e6;\n}\n#hotelOrderDetail > div header b {\n      margin-right: 36px;\n}\n#hotelOrderDetail > div .payMess, #hotelOrderDetail > div .hotelMess, #hotelOrderDetail > div .guestMess, #hotelOrderDetail > div .connectMess, #hotelOrderDetail > div .logMess {\n    border: 1px solid #e4e4e4;\n}\n#hotelOrderDetail > div .payMess table, #hotelOrderDetail > div .hotelMess table, #hotelOrderDetail > div .guestMess table, #hotelOrderDetail > div .connectMess table, #hotelOrderDetail > div .logMess table {\n      width: 100%;\n      border-collapse: collapse;\n      font-size: 12px;\n}\n#hotelOrderDetail > div .payMess th, #hotelOrderDetail > div .hotelMess th, #hotelOrderDetail > div .guestMess th, #hotelOrderDetail > div .connectMess th, #hotelOrderDetail > div .logMess th {\n      background: #eff4f7;\n      height: 36px;\n      font-weight: normal;\n      text-align: left;\n      padding-left: 20px;\n}\n#hotelOrderDetail > div .payMess td, #hotelOrderDetail > div .hotelMess td, #hotelOrderDetail > div .guestMess td, #hotelOrderDetail > div .connectMess td, #hotelOrderDetail > div .logMess td {\n      height: 54px;\n      padding-left: 20px;\n}\n#hotelOrderDetail > div .payMess {\n    height: 158px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    font-size: 14px;\n}\n#hotelOrderDetail > div .payMess p {\n      margin-bottom: 5px;\n}\n#hotelOrderDetail > div .payMess .smallFont {\n      font-size: 12px;\n}\n#hotelOrderDetail > div .payMess .money {\n      font-size: 18px;\n      color: #f5595a;\n}\n"],sourceRoot:""}])},gWoD:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i("B2YR"),s=i.n(n),a=i("/+Ed"),l=(i("oFuF"),{data:function(){return{data:{}}},computed:{},watch:{},methods:{getData:function(){var e=this,t=this.$route.query.OrderId;this.$http.post("/hotel/orderDetail",{OrderId:t}).then(function(t){1001!=t.data.status?e.$notify.error({title:"请求失败",message:t.data.message,duration:3e3}):e.data=t.data.data.result})}},components:{Title:a.a},created:function(){this.getData()}}),r=s()({},l),o={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"hotelOrderDetail"}},[i("div",[i("header",[i("p",[i("span",[e._v("订单号：")]),e._v(" "),i("b",[e._v(e._s(e.data.OrderId))])]),e._v(" "),i("p",[i("span",[e._v("外部订单号：")]),e._v(" "),i("b",[e._v(e._s(e.data.ElongCardNo))])]),e._v(" "),e._m(0,!1,!1),e._v(" "),i("p",[i("span",[e._v("订单状态：")]),e._v(" "),i("b",[e._v(e._s(e._f("hotelStatus")(e.data.Status)))])])]),e._v(" "),i("div",[i("Title",{attrs:{text:"支付信息"}}),e._v(" "),i("div",{staticClass:"payMess"},[i("p",[i("b",{staticClass:"money"},[e._v("￥"+e._s(e.data.TotalPrice))])]),e._v(" "),e._m(1,!1,!1),e._v(" "),i("p",[i("span",[e._v("支付方式：")]),e._v(" "),i("b",[e._v(e._s(e.data.PaymentType))])]),e._v(" "),e._m(2,!1,!1)]),e._v(" "),i("Title",{attrs:{text:"酒店详情"}}),e._v(" "),i("div",{staticClass:"hotelMess"},[i("table",[e._m(3,!1,!1),e._v(" "),i("tr",[i("td",[e._v(e._s(e.data.HotelName))]),e._v(" "),i("td",[e._v(e._s(e.data.RoomTypeName))]),e._v(" "),i("td",[e._v(e._s(e.data.ArrivalDate))]),e._v(" "),i("td",[e._v(e._s(e.data.DepartureDate))]),e._v(" "),i("td",[e._v(e._s(e.data.NumberOfRooms))]),e._v(" "),i("td",[e._v(e._s(e.data.CustomerPrice))]),e._v(" "),i("td",[e._v(e._s(e.data.PaymentType))]),e._v(" "),i("td",[e._v(e._s(e._f("hotelStatus")(e.data.Status)))])])])]),e._v(" "),i("Title",{attrs:{text:"入住人"}}),e._v(" "),i("div",{staticClass:"guestMess"},[i("table",[e._m(4,!1,!1),e._v(" "),e._l(e.data.OrderRooms,function(t){return i("tbody",e._l(t.Customers,function(n){return i("tr",[i("td",[e._v(e._s(t.RoomNo))]),e._v(" "),i("td",[e._v(e._s(n.Name))]),e._v(" "),i("td",[e._v(e._s(e._f("gender")(n.Gender)))]),e._v(" "),i("td",[e._v(e._s(n.Mobile))])])}))})],2)]),e._v(" "),i("Title",{attrs:{text:"联系人"}}),e._v(" "),i("div",{staticClass:"connectMess"},[i("table",[e._m(5,!1,!1),e._v(" "),i("tr",[i("td",[e._v(e._s(e.data.Contact.Name))]),e._v(" "),i("td",[e._v(e._s(e.data.Contact.Mobile))])])])])],1)])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("span",[this._v("供应商：")]),this._v(" "),t("b",[this._v("艺龙  待定。。。。。")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",{staticClass:"smallFont"},[t("span",[this._v("订单总价")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",{staticClass:"smallFont"},[t("span",[this._v("支付流水号：")]),this._v(" "),t("span",[this._v("待定。。。。")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("tr",[t("th",[this._v("酒店名")]),this._v(" "),t("th",[this._v("房型")]),this._v(" "),t("th",[this._v("入住日期")]),this._v(" "),t("th",[this._v("离店日期")]),this._v(" "),t("th",[this._v("房间数")]),this._v(" "),t("th",[this._v("单价")]),this._v(" "),t("th",[this._v("付款类型")]),this._v(" "),t("th",[this._v("状态")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("tr",[t("th",[this._v("room")]),this._v(" "),t("th",[this._v("姓名")]),this._v(" "),t("th",[this._v("性别")]),this._v(" "),t("th",[this._v("电话")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("tr",[t("th",[this._v("姓名")]),this._v(" "),t("th",[this._v("电话")])])}]},d=i("kgPM")(r,o,!1,function(e){i("kaQy")},null,null);t.default=d.exports},kaQy:function(e,t,i){var n=i("fQjX");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i("MO7y")("88059c8a",n,!0)}});
//# sourceMappingURL=11.e7cf864b7f9cb3eb4241.js.map