(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{211:function(t,e,n){"use strict";n.r(e);n(13),n(36);var o=n(7),r={data:function(){return{quoteObj:{},textClass:""}},created:function(){this.getQuote()},mounted:function(){var t=this;this.$root.$on("changed-text-class",(function(e){t.textClass=e}))},methods:{getQuote:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.quotable.io/random?maxLength=90");case 2:return n=e.sent,e.next=5,n.json();case 5:data=e.sent,t.quoteObj=data;case 7:case"end":return e.stop()}}),e)})))()}}},c=n(28),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.quoteObj.content&&t.quoteObj.author?n("div",{staticClass:"quote"},[n("span",{staticClass:"text-2xl italic font-bold content",class:"text-"+t.textClass},[t._v('\n    "'+t._s(t.quoteObj.content)+'"\n  ')]),t._v(" "),n("span",{staticClass:"text-xl font-bold author",class:"text-"+t.textClass},[t._v("\n    - "+t._s(t.quoteObj.author)+"\n  ")])]):t._e()}),[],!1,null,null,null);e.default=component.exports}}]);