(function(t){function e(e){for(var r,i,l=e[0],c=e[1],s=e[2],p=0,d=[];p<l.length;p++)i=l[p],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&d.push(n[i][0]),n[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(d.length)d.shift()();return o.push.apply(o,s||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],r=!0,l=1;l<a.length;l++){var c=a[l];0!==n[c]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var r={},n={app:0},o=[];function i(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=r,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(a,r,function(e){return t[e]}.bind(null,r));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var s=0;s<l.length;s++)e(l[s]);var u=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=a("5c96"),o=a.n(n),i=(a("0fae"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[t.isDev?a("ParkingTest"):a("Parking")],1)}),l=[],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"parking"}},[t.loading?a("div",[a("h1",[t._v("loading...")])]):t._e(),a("el-select",{model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},t._l(t.modes,(function(e,r){return a("el-option",{key:r,attrs:{value:e}},[t._v(t._s(e))])})),1),t.loading?t._e():a("div",{staticClass:"vue-leaflet"},[a("l-map",{staticClass:"map",attrs:{zoom:t.zoom,center:t.center}},[a("v-geosearch",{attrs:{options:t.geosearchOptions}}),t._v(" "),a("l-tile-layer",{attrs:{url:t.url,attribution:t.attribution}}),a("v-marker-cluster",{ref:"clusterRef"},t._l(t.Parkings,(function(e,r){return a("div",{key:r},["全部停車場"===t.selected?a("l-marker",{attrs:{"lat-lng":e.經緯度.split("，")}},[a("l-popup",{attrs:{content:t.ParkingNews(r)}})],1):t._e(),e.停車場型態===t.selected?a("l-marker",{attrs:{"lat-lng":e.經緯度.split("，")}},[a("l-popup",{attrs:{content:t.ParkingNews(r)}})],1):t._e()],1)})),0)],1)],1)],1)},s=[],u=(a("99af"),a("96cf"),a("1da1")),p=a("e11e"),d=a("ac00"),f=a("cc2b"),g={components:{VGeosearch:f["a"]},name:"Parking",data:function(){return{loading:!0,PublicFree:[],PublicCharge:[],Private:[],RoadsideCharges:[],AllData:[],modes:["全部停車場","路邊停車格收費路段","民營停車場","公有收費停車場","公有免費停車場"],selected:"全部停車場",zoom:14,center:[22.9977989,120.2611459],url:"http://{s}.tile.osm.org/{z}/{x}/{y}.png",attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',geosearchOptions:{provider:new d["a"]}}},computed:{Parkings:function(){return this.AllData}},methods:{ParkingNews:function(t){return"\n    ".concat(this.Parkings[t].停車場型態,"<br>\n    ").concat(this.Parkings[t].停車場名稱,"\n    ")},findMe:function(){var t=this;navigator.geolocation.getCurrentPosition((function(e){var a=e.coords.latitude,r=e.coords.longitude;t.center.push(a),t.center.push(r)}))}},mounted:function(){var t=this,e="/api?verCode=5177E3481D&type=1&ftype=1&exportTo=2",a="/api?verCode=5177E3481D&type=2&ftype=1&exportTo=2",r="/api?verCode=5177E3481D&type=3&ftype=1&exportTo=2",n="/api?verCode=5177E3481D&type=4&ftype=1&exportTo=2";this.findMe();var o=function(){var o=Object(u["a"])(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return o.prev=0,t.PublicFree=t.$http.get("".concat(e)),t.PublicCharge=t.$http.get("".concat(a)),t.Private=t.$http.get("".concat(r)),t.RoadsideCharges=t.$http.get("".concat(n)),o.next=7,t.PublicFree;case 7:return t.PublicFree=o.sent,o.next=10,t.PublicCharge;case 10:return t.PublicCharge=o.sent,o.next=13,t.Private;case 13:return t.Private=o.sent,o.next=16,t.RoadsideCharges;case 16:t.RoadsideCharges=o.sent,t.AllData=t.AllData.concat(t.PublicFree.data).concat(t.PublicCharge.data).concat(t.Private.data).concat(t.RoadsideCharges.data),t.loading=!1,o.next=24;break;case 21:o.prev=21,o.t0=o["catch"](0),console.log(o.t0);case 24:case"end":return o.stop()}}),o,null,[[0,21]])})));return function(){return o.apply(this,arguments)}}();o()}};delete p["Icon"].Default.prototype._getIconUrl,p["Icon"].Default.mergeOptions({iconRetinaUrl:a("584d"),iconUrl:a("6397"),shadowUrl:a("e2b9")});var h=g,v=a("2877"),m=Object(v["a"])(h,c,s,!1,null,null,null),b=m.exports,y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"map"}},[a("l-map",{staticStyle:{height:"100%",width:"100%"},attrs:{zoom:t.zoom,center:t.center,options:t.mapOptions}},[a("l-tile-layer",{attrs:{url:t.url,attribution:t.attribution}}),a("l-control-zoom",{attrs:{position:"bottomright"}}),a("v-marker-cluster",{ref:"clusterRef"},t._l(t.displayData,(function(e,r){return a("l-marker",{key:"marker-"+r,attrs:{"lat-lng":e.經緯度.split("，")}},[a("l-popup",{attrs:{content:t.ParkingNews(r)}})],1)})),1)],1),a("el-card",{staticClass:"info-box"},[a("div",{staticClass:"info-box-title"},[t._v("停車場類別")]),a("div",[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"請選擇"},on:{change:t.changeCategory},model:{value:t.category,callback:function(e){t.category=e},expression:"category"}},t._l(t.modes,(function(t){return a("el-option",{key:t,attrs:{label:t,value:t}})})),1)],1)])],1)},k=[],P=(a("4de4"),a("4160"),a("b0c0"),a("b64b"),a("d3b7"),a("159b"),a("2909")),D={data:function(){return{isDev:!1,url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",zoom:16,center:[22.9977989,120.2611459],attribution:'&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',mapOptions:{zoomControl:!1},apiUrl:"https://citypark.tainan.gov.tw/App/parking.ashx?",apiParams:[{name:"publicFreePark",params:"verCode=5177E3481D&type=1&ftype=1&exportTo=2"},{name:"publicChargePark",params:"verCode=5177E3481D&type=2&ftype=1&exportTo=2"},{name:"privatePark",params:"verCode=5177E3481D&type=3&ftype=1&exportTo=2"},{name:"roadsideChargesPark",params:"verCode=5177E3481D&type=4&ftype=1&exportTo=2"}],displayData:[],allData:[],loadingStatus:{},getDataStatus:{publicFreePark:!1,publicChargePark:!1,privatePark:!1,roadsideChargesPark:!1},modes:["全部停車場","路邊停車格收費路段","民營停車場","公有收費停車場","公有免費停車場"],category:"全部停車場"}},watch:{getDataStatus:{handler:function(t){var e=this,a=0;Object.keys(t).forEach((function(t){!0===e.getDataStatus[t]&&a++,4===a&&e.loadingStatus.close()}))},deep:!0}},methods:{getParkInfo:function(){var t,e=this;t=this.isDev?"/api?":this.apiUrl,this.apiParams.forEach((function(a){e.$http.get(t+a.params).then((function(t){e.allData=[].concat(Object(P["a"])(e.allData),Object(P["a"])(t.data)),e.Category()})).catch((function(t){return console.log(t)})).finally((function(){e.getDataStatus[a.name]=!0}))}))},Category:function(){var t=this;"全部停車場"!==this.category?this.displayData=this.allData=this.allData.filter((function(e){return e.停車場型態===t.category})):this.displayData=this.allData},changeCategory:function(t){this.displayData="全部停車場"!==t?this.allData.filter((function(e){return e.停車場型態===t})):this.allData},ParkingNews:function(t){return"\n    ".concat(this.displayData[t].停車場型態,"<br>\n    ").concat(this.displayData[t].停車場名稱,"\n    ")},findMe:function(){var t=this;navigator.geolocation.getCurrentPosition((function(e){var a=e.coords.latitude,r=e.coords.longitude;t.center=[a,r]}))}},mounted:function(){this.loadingStatus=this.$loading({lock:!0,text:"資料載入中，請稍後...",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"}),this.getParkInfo(),this.findMe()}},C=D,x=Object(v["a"])(C,y,k,!1,null,null,null),_=x.exports,w={name:"App",components:{Parking:b,ParkingTest:_},data:function(){return{isDev:!0}}},O=w,j=Object(v["a"])(O,i,l,!1,null,null,null),S=j.exports,E=a("bc3a"),T=a.n(E),z=a("a7fe"),M=a.n(z),R=a("2699"),$=a("a40a"),F=a("4e2b"),A=a("f60f"),U=a("c8b6"),I=a("ca9f"),N=a.n(I);a("6cc5"),a("7046");r["default"].component("l-map",R["a"]),r["default"].component("l-tile-layer",$["a"]),r["default"].component("l-marker",F["a"]),r["default"].component("l-popup",A["a"]),r["default"].component("v-marker-cluster",N.a),r["default"].component("l-control-zoom",U["a"]),r["default"].use(M.a,T.a),r["default"].config.productionTip=!1,r["default"].use(o.a),new r["default"]({render:function(t){return t(S)}}).$mount("#app")},7046:function(t,e,a){}});
//# sourceMappingURL=app.f45d1fe0.js.map