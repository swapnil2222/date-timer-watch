(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{203:function(t,e,n){"use strict";n.r(e);var l={data:function(){return{weekList:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],activeDay:0,textClass:""}},created:function(){var t=(new Date).getDay();this.activeDay=t},mounted:function(){var t=this;this.$root.$on("changed-text-class",(function(e){t.textClass=e}))}},c=n(24),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"week-day flex flex-row"},t._l(t.weekList,(function(e,l){return n("div",{key:l,staticClass:"flex text-3xl mr-4"},[n("span",{class:t.activeDay==l?"text-"+t.textClass+" font-bold":"text-"+t.textClass},[t._v(t._s(e)+"\n    ")])])})),0)}),[],!1,null,null,null);e.default=component.exports}}]);