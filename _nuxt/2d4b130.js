(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{198:function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},199:function(t,e,n){var r=n(209);t.exports=function(source,t){if(null==source)return{};var e,i,n=r(source,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(source);for(i=0;i<o.length;i++)e=o[i],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(source,e)&&(n[e]=source[e])}return n}},200:function(t,e,n){var content=n(205);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(35).default)("c41ce258",content,!0,{sourceMap:!1})},201:function(t,e,n){var content=n(207);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(35).default)("1b7833da",content,!0,{sourceMap:!1})},202:function(t,e,n){var content=n(213);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(35).default)("d877b91a",content,!0,{sourceMap:!1})},203:function(t,e,n){"use strict";n.r(e);n(65);var r={"sky-blue":"#1e81b0","light-gray":"#eeeee4","light-sky-blue":"#76b5c5","light-brick":"#e28743","light-black":"#21130d","dark-brick":"#873e23","dark-blue":"#154c79"},o={data:function(){return{colorObj:r,activeColorId:0}},mounted:function(){this.changeColor(0,Object.keys(r)[0])},methods:{changeColor:function(t,e){this.activeColorId=t,this.$root.$emit("changed-text-class",e)}}},c=(n(204),n(28)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-row"},t._l(t.colorObj,(function(e,r,o){return n("span",{key:o,staticClass:"flex items-center justify-center w-12 h-12 mr-4 rounded-full",class:t.activeColorId===o?"active":"",style:{background:e},on:{click:function(e){return t.changeColor(o,r)}}})})),0)}),[],!1,null,null,null);e.default=component.exports},204:function(t,e,n){"use strict";n(200)},205:function(t,e,n){(e=n(34)(!1)).push([t.i,".active{border:5px solid #000}",""]),t.exports=e},206:function(t,e,n){"use strict";n(201)},207:function(t,e,n){(e=n(34)(!1)).push([t.i,'.container{margin:0 auto;min-height:100vh;display:flex;justify-content:center;align-items:center;text-align:center}.title{font-family:"Quicksand","Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:block;font-weight:300;font-size:100px;color:#35495e;letter-spacing:1px}.subtitle{font-weight:300;font-size:42px;color:#526488;word-spacing:5px;padding-bottom:15px}.links{padding-top:15px}.disable-select{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}',""]),t.exports=e},208:function(t,e,n){n(64);var r=n(198),o=n(199);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}t.exports={functional:!0,render:function(t,e){var n=e._c,data=(e._v,e.data),l=e.children,f=void 0===l?[]:l,d=data.class,h=data.staticClass,style=data.style,x=data.staticStyle,v=data.attrs,y=void 0===v?{}:v,m=o(data,["class","staticClass","style","staticStyle","attrs"]);return n("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){r(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:["feather feather-sun",d,h],style:[style,x],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},y)},m),f.concat([n("circle",{attrs:{cx:"12",cy:"12",r:"5"}}),n("line",{attrs:{x1:"12",y1:"1",x2:"12",y2:"3"}}),n("line",{attrs:{x1:"12",y1:"21",x2:"12",y2:"23"}}),n("line",{attrs:{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}}),n("line",{attrs:{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}}),n("line",{attrs:{x1:"1",y1:"12",x2:"3",y2:"12"}}),n("line",{attrs:{x1:"21",y1:"12",x2:"23",y2:"12"}}),n("line",{attrs:{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}}),n("line",{attrs:{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"}})]))}}},209:function(t,e){t.exports=function(source,t){if(null==source)return{};var e,i,n={},r=Object.keys(source);for(i=0;i<r.length;i++)e=r[i],t.indexOf(e)>=0||(n[e]=source[e]);return n}},210:function(t,e,n){n(64);var r=n(198),o=n(199);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}t.exports={functional:!0,render:function(t,e){var n=e._c,data=(e._v,e.data),l=e.children,f=void 0===l?[]:l,d=data.class,h=data.staticClass,style=data.style,x=data.staticStyle,v=data.attrs,y=void 0===v?{}:v,m=o(data,["class","staticClass","style","staticStyle","attrs"]);return n("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){r(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:["feather feather-coffee",d,h],style:[style,x],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},y)},m),f.concat([n("path",{attrs:{d:"M18 8h1a4 4 0 0 1 0 8h-1"}}),n("path",{attrs:{d:"M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"}}),n("line",{attrs:{x1:"6",y1:"1",x2:"6",y2:"4"}}),n("line",{attrs:{x1:"10",y1:"1",x2:"10",y2:"4"}}),n("line",{attrs:{x1:"14",y1:"1",x2:"14",y2:"4"}})]))}}},211:function(t,e,n){n(64);var r=n(198),o=n(199);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}t.exports={functional:!0,render:function(t,e){var n=e._c,data=(e._v,e.data),l=e.children,f=void 0===l?[]:l,d=data.class,h=data.staticClass,style=data.style,x=data.staticStyle,v=data.attrs,y=void 0===v?{}:v,m=o(data,["class","staticClass","style","staticStyle","attrs"]);return n("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){r(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:["feather feather-moon",d,h],style:[style,x],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},y)},m),f.concat([n("path",{attrs:{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"}})]))}}},212:function(t,e,n){"use strict";n(202)},213:function(t,e,n){(e=n(34)(!1)).push([t.i,".feather[data-v-0df03023]{position:relative;top:0;cursor:pointer;padding:2px;background-color:var(--bg-secondary);border:2px solid var(--border-color);margin:0;border-radius:5px;transition:all .1s ease}.feather[data-v-0df03023]:hover{top:-3px}.feather.preferred[data-v-0df03023]{border-color:var(--color-primary);top:-3px}.feather.selected[data-v-0df03023]{color:var(--color-primary)}",""]),t.exports=e},214:function(t,e,n){"use strict";n.r(e);var r=n(208),o=n.n(r),c=n(210),l=n.n(c),f=n(211),d=n.n(f),h={components:{IconLight:o.a,IconSepia:l.a,IconDark:d.a},data:function(){return{colors:["dark","light","sepia"]}},methods:{getClasses:function(t){return this.$colorMode.unknown?{}:{preferred:t===this.$colorMode.preference,selected:t===this.$colorMode.value}}}},x=(n(212),n(28)),component=Object(x.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ul",{staticClass:"flex flex-row justify-end"},t._l(t.colors,(function(e,r){return n("li",{key:r,staticClass:"flex pt-2 mr-2"},[n("icon-"+e,{tag:"component",class:t.getClasses(e),on:{click:function(n){t.$colorMode.preference=e}}})],1)})),0)])}),[],!1,null,"0df03023",null);e.default=component.exports},215:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{date:(new Date).toLocaleDateString("en-Us",{year:"numeric",month:"long",day:"numeric"}),textClass:""}},computed:{textClassName:function(){return"text-".concat(this.textClass)}},mounted:function(){var t=this;this.$root.$on("changed-text-class",(function(e){t.textClass=e}))}},o=n(28),component=Object(o.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"text-3xl",class:this.textClassName},[this._v("\n  "+this._s(this.date)+"\n")])}),[],!1,null,null,null);e.default=component.exports},216:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{weekList:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],activeDay:0,textClass:""}},created:function(){var t=(new Date).getDay();this.activeDay=t},mounted:function(){var t=this;this.$root.$on("changed-text-class",(function(e){t.textClass=e}))}},o=n(28),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"week-day flex flex-row"},t._l(t.weekList,(function(e,r){return n("div",{key:r,staticClass:"flex text-3xl mr-4"},[n("span",{class:t.activeDay==r?"text-"+t.textClass+" font-bold":"text-"+t.textClass},[t._v(t._s(e)+"\n    ")])])})),0)}),[],!1,null,null,null);e.default=component.exports},217:function(t,e,n){"use strict";n.r(e);n(50);var r={data:function(){return{hours:"",minutes:"",isBlink:!1,textClass:""}},computed:{blinkStyle:function(){return this.isBlink?{}:{visibility:"hidden"}}},created:function(){var t=this;setInterval((function(){t.getTime()}),1e3),setInterval((function(){t.isBlink=!t.isBlink}),500)},mounted:function(){var t=this;this.$root.$on("changed-text-class",(function(e){t.textClass=e}))},methods:{getTime:function(){var t=new Date;this.hours=t.getHours()<10?"0"+t.getHours():t.getHours(),this.minutes=t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes()}}},o=n(28),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.hours&&t.minutes?n("div",{staticClass:"font-bold text-9xl",class:"text-"+t.textClass},[t._v("\n    "+t._s(t.hours)+"\n    "),n("span",{style:[t.blinkStyle]},[t._v(":")]),t._v("\n    "+t._s(t.minutes)+"\n    "),n("span",{staticClass:"text-5xl"},[t._v(t._s(t.hours>12?"PM":"AM"))])]):n("div",{staticClass:"loading",class:"text-"+t.textClass},[t._v("loading....")])])}),[],!1,null,null,null);e.default=component.exports},218:function(t,e,n){"use strict";n.r(e);n(15),n(36);var r=n(7),o={data:function(){return{quoteObj:{},textClass:""}},created:function(){this.getQuote()},mounted:function(){var t=this;this.$root.$on("changed-text-class",(function(e){t.textClass=e}))},methods:{getQuote:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.quotable.io/random?maxLength=90");case 2:return n=e.sent,e.next=5,n.json();case 5:data=e.sent,t.quoteObj=data;case 7:case"end":return e.stop()}}),e)})))()}}},c=n(28),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.quoteObj.content&&t.quoteObj.author?n("div",{staticClass:"quote"},[n("span",{staticClass:"text-2xl italic font-bold content",class:"text-"+t.textClass},[t._v('\n    "'+t._s(t.quoteObj.content)+'"\n  ')]),t._v(" "),n("span",{staticClass:"text-xl font-bold author",class:"text-"+t.textClass},[t._v("\n    - "+t._s(t.quoteObj.author)+"\n  ")])]):t._e()}),[],!1,null,null,null);e.default=component.exports},219:function(t,e,n){"use strict";n.r(e);var r=n(1),o=n(203),c=r.a.extend({components:{ColorPicker:o.default}}),l=(n(206),n(28)),component=Object(l.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex flex-col disable-select"},[e("theme-picker"),this._v(" "),e("div",{staticClass:"flex mx-auto"},[e("date")],1),this._v(" "),e("div",{staticClass:"flex mx-auto mt-2"},[e("week-day")],1),this._v(" "),e("div",{staticClass:"flex mx-auto mt-24"},[e("timer")],1),this._v(" "),e("div",{staticClass:"flex mx-auto mt-24"},[e("quote")],1),this._v(" "),e("div",{staticClass:"flex mx-auto mt-24"},[e("ColorPicker")],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ThemePicker:n(214).default,Date:n(215).default,WeekDay:n(216).default,Timer:n(217).default,Quote:n(218).default,ColorPicker:n(203).default})}}]);