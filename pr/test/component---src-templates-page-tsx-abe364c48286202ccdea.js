(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"/dP6":function(e,t,n){"use strict";n.r(t),n.d(t,"query",(function(){return d}));var r=n("q1tI"),a=n.n(r),c=n("A2+M"),o=n("TSYQ"),s=n.n(o),i=n("3H7G"),l=n("gn0f"),u=n("NqE+");const p=e=>{let{className:t,title:n,branding:r=l.a,children:c}=e;return a.a.createElement(u.a,{className:s()("simple-page",t),asideSlot:a.a.createElement(r,{style:l.b.Badge})},a.a.createElement(i.a,{title:n}),a.a.createElement("div",{className:"article-page__content"},c))};var f=n("Tadz"),m=n("3ffe"),b=n("3XiO");const d="3022182610";t.default=e=>{const{data:{allSitePage:{nodes:t},mdx:{body:n,frontmatter:{title:r}}}={}}=e,o=Object(f.a)(t);return a.a.createElement(m.b,{value:o},a.a.createElement(p,{title:r,branding:b.b},a.a.createElement(c.MDXRenderer,null,n)))}},"3H7G":function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("q1tI"),a=n.n(r),c=n("TSYQ"),o=n.n(c),s=(n("c/hv"),n("NO4K")),i=n("n57c");const l=e=>{let{className:t,tags:n}=e;return a.a.createElement(s.a,{joined:!1,direction:s.b.Row,separators:s.c.Space,className:o()("tag-list",t)},n.map(e=>a.a.createElement(i.a,{size:i.d.Normal,style:i.e.Primary,shape:i.c.Circular},e)))},u=e=>{let{className:t,title:n,date:r,tags:c}=e;return a.a.createElement("header",{className:o()("page-header",t)},a.a.createElement("h1",{className:"page-header__title"},n),c&&a.a.createElement(l,{className:"page-header__tags",tags:c}),r&&a.a.createElement("small",{className:"page-header__date"},r))}},"A2+M":function(e,t,n){const r=n("X8hv");e.exports={MDXRenderer:r}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},"NqE+":function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("q1tI"),a=n.n(r),c=n("TSYQ"),o=n.n(c),s=n("grGP"),i=n("Ff2n");n("QP3I");const l=e=>{let{className:t,onClick:n,isOpen:c,size:s}=e,l=Object(i.a)(e,["className","onClick","isOpen","size"]);const[u,p]=function(e){const{0:t,1:n}=Object(r.useState)(e);return Object(r.useEffect)(()=>n(e),[e]),[t,n]}(c);return a.a.createElement("div",Object.assign({role:"button",tabIndex:0,className:o()("hamburger",u&&"hamburger--is-open",s&&"hamburger--size-"+s,t),onClick:()=>{p(!u),n()},onKeyPress:e=>{"enter"===e.key&&n()}},l),a.a.createElement("div",{className:"hamburger__symbol"}))};l.defaultProps={size:"big"};n("qKS/");const u=e=>{let{className:t,asideSlot:n,children:c}=e;const{0:i,1:u}=Object(r.useState)(!1);return a.a.createElement(s.a,{as:"article",className:o()("page",i&&"page--is-open",t)},n&&a.a.createElement(l,{className:"page__hamburger",onClick:()=>{u(!i)}}),n&&a.a.createElement("aside",{className:"page__aside"},n),a.a.createElement("div",{className:"page__content"},c))}},QILm:function(e,t,n){var r=n("8OQS");e.exports=function(e,t){if(null==e)return{};var n,a,c=r(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}},QP3I:function(e,t,n){},RIqP:function(e,t,n){var r=n("Ijbi"),a=n("EbDI"),c=n("ZhPi"),o=n("Bnag");e.exports=function(e){return r(e)||a(e)||c(e)||o()}},SksO:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},Tadz:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("Wbzz");function a(e){return e.map(e=>{let{id:t,path:n,context:{title:a,navs:c}}=e;return{id:t,label:a,groups:c,onClick:()=>Object(r.c)(n)}})}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},X8hv:function(e,t,n){var r=n("sXyB"),a=n("RIqP"),c=n("lSNA"),o=n("QILm");function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const l=n("q1tI"),{mdx:u}=n("7ljp"),{useMDXScope:p}=n("BfwJ");e.exports=function(e){let{scope:t,children:n}=e,c=o(e,["scope","children"]);const s=p(t),f=l.useMemo(()=>{if(!n)return null;const e=i({React:l,mdx:u},s),t=Object.keys(e),c=t.map(t=>e[t]);return r(Function,["_fn"].concat(a(t),[""+n])).apply(void 0,[{}].concat(a(c)))},[n,t]);return l.createElement(f,i({},c))}},ZhPi:function(e,t,n){var r=n("WkPL");e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},b48C:function(e,t){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}},"c/hv":function(e,t,n){},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},"qKS/":function(e,t,n){},sXyB:function(e,t,n){var r=n("SksO"),a=n("b48C");function c(t,n,o){return a()?e.exports=c=Reflect.construct:e.exports=c=function(e,t,n){var a=[null];a.push.apply(a,t);var c=new(Function.bind.apply(e,a));return n&&r(c,n.prototype),c},c.apply(null,arguments)}e.exports=c}}]);
//# sourceMappingURL=component---src-templates-page-tsx-abe364c48286202ccdea.js.map