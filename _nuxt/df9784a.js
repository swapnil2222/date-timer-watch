(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{204:function(t,n,e){"use strict";e.r(n);e(40);var l={data:function(){return{hours:"",minutes:"",isBlink:!1,textClass:""}},computed:{blinkStyle:function(){return this.isBlink?{}:{visibility:"hidden"}}},created:function(){var t=this;setInterval((function(){t.getTime()}),1e3),setInterval((function(){t.isBlink=!t.isBlink}),500)},mounted:function(){var t=this;this.$root.$on("changed-text-class",(function(n){t.textClass=n}))},methods:{getTime:function(){var t=new Date;this.hours=t.getHours()<10?"0"+t.getHours():t.getHours(),this.minutes=t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes()}}},o=e(24),component=Object(o.a)(l,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[t.hours&&t.minutes?e("div",{staticClass:"font-bold text-9xl",class:"text-"+t.textClass},[t._v("\n    "+t._s(t.hours)+"\n    "),e("span",{style:[t.blinkStyle]},[t._v(":")]),t._v("\n    "+t._s(t.minutes)+"\n    "),e("span",{staticClass:"text-5xl"},[t._v(t._s(t.hours>12?"PM":"AM"))])]):e("div",{staticClass:"loading",class:"text-"+t.textClass},[t._v("loading....")])])}),[],!1,null,null,null);n.default=component.exports}}]);