webpackJsonp([12],{"5PlU":function(e,t,n){var i=n("RY/4"),a=n("dSzd")("iterator"),s=n("/bQp");e.exports=n("FeBl").isIterable=function(e){var t=Object(e);return void 0!==t[a]||"@@iterator"in t||s.hasOwnProperty(i(t))}},Wtx3:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"navigation",class:["navigation--"+e.shade]},[n("div",{staticClass:"navigation__container"},[n("div",{staticClass:"navigation__group navigation__group--onscreen"},[n("nuxt-link",{directives:[{name:"hide-if-excluded",rawName:"v-hide-if-excluded",value:e.exclude,expression:"exclude"}],staticClass:"navigation__link",attrs:{to:"/"}},[n("span",{staticClass:"navigation-item__label"}),n("span",{staticClass:"navigation-item__icon material-icons"},[e._v("gesture")])]),n("intersect",{attrs:{threshold:[0,1]},on:{change:e.changed}},[n("nuxt-link",{directives:[{name:"hide-if-excluded",rawName:"v-hide-if-excluded",value:e.exclude,expression:"exclude"}],staticClass:"navigation__link",attrs:{to:"/resume"}},[n("span",{staticClass:"navigation-item__label"},[e._v("resume")])])],1),n("intersect",{attrs:{threshold:[1]},on:{change:e.changed}},[n("nuxt-link",{directives:[{name:"hide-if-excluded",rawName:"v-hide-if-excluded",value:e.exclude,expression:"exclude"}],staticClass:"navigation__link",attrs:{to:"/posts"}},[n("span",{staticClass:"navigation-item__label"},[e._v("posts")])])],1)],1),n("div",{staticClass:"navigation__group navigation__group--offscreen"},[e.offscreen.length?n("div",{staticClass:"navigation__group-toggle"},[n("span",{staticClass:"material-icons"},[e._v("menu")])]):e._e(),n("div",{staticClass:"navigation__group-items"}),e.debug?n("div",{staticClass:"navigation__badge navigation__badge--count"},[e._v(e._s(e.offscreen.length)+" offcanvas items")]):e._e()])])])};i._withStripped=!0;var a={render:i,staticRenderFns:[]};t.a=a},Xd32:function(e,t,n){n("+tPU"),n("zQR9"),e.exports=n("5PlU")},YTSv:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("jzFM"),a=n("Wtx3"),s=n("VU/8")(i.a,a.a,!1,null,null,null);s.options.__file="project/nuxt/components/navigation/component.vue",t.default=s.exports},d7EF:function(e,t,n){"use strict";t.__esModule=!0;var i=s(n("us/S")),a=s(n("BO1k"));function s(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return function(e,t){if(Array.isArray(e))return e;if((0,i.default)(Object(e)))return function(e,t){var n=[],i=!0,s=!1,r=void 0;try{for(var o,c=(0,a.default)(e);!(i=(o=c.next()).done)&&(n.push(o.value),!t||n.length!==t);i=!0);}catch(e){s=!0,r=e}finally{try{!i&&c.return&&c.return()}finally{if(s)throw r}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},jzFM:function(e,t,n){"use strict";var i=n("d7EF"),a=n.n(i),s=(n("/5sW"),n("Fy0/")),r=n.n(s)()("components/navigation");t.a={components:{intersect:function(){return n.e(10).then(n.bind(null,"qgp0"))}},directives:{"hide-if-excluded":{bind:function(e,t,n){var i=n.componentInstance.to;t.value.includes(i)&&(r("directive.hide-if-excluded",{el:e,to:i}),e.classList.add("navigation__link--hide"))}}},props:{debug:{type:Boolean,default:function(){return!1}},exclude:{type:Array,default:function(){return[]}},shade:{type:String,default:function(){return"dark"}},arranged:{type:String,default:function(){return"left"}}},data:function(){return{offscreen:[]}},methods:{changed:function(e){var t=a()(e,1)[0],n=t.intersectionRatio<1,i=this.offscreen.includes(t.target);if(r("changed",t.target,i),n&&!i&&(r("changed.obscured",t),this.offscreen.push(t.target),t.target.classList.add("navigation__link--intersects")),!n){r("changed.unObscured",t);var s=this.offscreen.findIndex(function(e){return e===t.target});s>=0&&this.offscreen.splice(s,1),t.target.classList.remove("navigation__link--intersects")}}}}},"us/S":function(e,t,n){e.exports={default:n("Xd32"),__esModule:!0}}});