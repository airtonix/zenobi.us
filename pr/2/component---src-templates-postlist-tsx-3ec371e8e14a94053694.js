(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"3H7G":function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n=r("q1tI"),a=r.n(n),c=r("TSYQ"),o=r.n(c),s=(r("c/hv"),r("NO4K")),i=r("n57c");const l=e=>{let{className:t,tags:r}=e;return a.a.createElement(s.a,{joined:!1,direction:s.b.Row,separators:s.c.Space,className:o()("tag-list",t)},r.map(e=>a.a.createElement(i.a,{size:i.d.Normal,style:i.e.Primary,shape:i.c.Circular},e)))},u=e=>{let{className:t,title:r,date:n,tags:c}=e;return a.a.createElement("header",{className:o()("page-header",t)},a.a.createElement("h1",{className:"page-header__title"},r),c&&a.a.createElement(l,{className:"page-header__tags",tags:c}),n&&a.a.createElement("small",{className:"page-header__date"},n))}},"A2+M":function(e,t,r){const n=r("X8hv");e.exports={MDXRenderer:n}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,r){var n=r("WkPL");e.exports=function(e){if(Array.isArray(e))return n(e)}},"NqE+":function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n=r("q1tI"),a=r.n(n),c=r("TSYQ"),o=r.n(c),s=r("grGP"),i=r("Ff2n");r("QP3I");const l=e=>{let{className:t,onClick:r,isOpen:c,size:s}=e,l=Object(i.a)(e,["className","onClick","isOpen","size"]);const[u,p]=function(e){const{0:t,1:r}=Object(n.useState)(e);return Object(n.useEffect)(()=>r(e),[e]),[t,r]}(c);return a.a.createElement("div",Object.assign({role:"button",tabIndex:0,className:o()("hamburger",u&&"hamburger--is-open",s&&"hamburger--size-"+s,t),onClick:()=>{p(!u),r()},onKeyPress:e=>{"enter"===e.key&&r()}},l),a.a.createElement("div",{className:"hamburger__symbol"}))};l.defaultProps={size:"big"};r("qKS/");const u=e=>{let{className:t,asideSlot:r,children:c}=e;const{0:i,1:u}=Object(n.useState)(!1);return a.a.createElement(s.a,{as:"article",className:o()("page",i&&"page--is-open",t)},r&&a.a.createElement(l,{className:"page__hamburger",onClick:()=>{u(!i)}}),r&&a.a.createElement("aside",{className:"page__aside"},r),a.a.createElement("div",{className:"page__content"},c))}},QILm:function(e,t,r){var n=r("8OQS");e.exports=function(e,t){if(null==e)return{};var r,a,c=n(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}},QP3I:function(e,t,r){},RIqP:function(e,t,r){var n=r("Ijbi"),a=r("EbDI"),c=r("ZhPi"),o=r("Bnag");e.exports=function(e){return n(e)||a(e)||c(e)||o()}},SksO:function(e,t){function r(t,n){return e.exports=r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},r(t,n)}e.exports=r},Tadz:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r("Wbzz");function a(e){return e.map(e=>{let{id:t,path:r,context:{title:a,navs:c}}=e;return{id:t,label:a,groups:c,onClick:()=>Object(n.c)(r)}})}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}},X8hv:function(e,t,r){var n=r("sXyB"),a=r("RIqP"),c=r("lSNA"),o=r("QILm");function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const l=r("q1tI"),{mdx:u}=r("7ljp"),{useMDXScope:p}=r("BfwJ");e.exports=function(e){let{scope:t,children:r}=e,c=o(e,["scope","children"]);const s=p(t),m=l.useMemo(()=>{if(!r)return null;const e=i({React:l,mdx:u},s),t=Object.keys(e),c=t.map(t=>e[t]);return n(Function,["_fn"].concat(a(t),[""+r])).apply(void 0,[{}].concat(a(c)))},[r,t]);return l.createElement(m,i({},c))}},ZhPi:function(e,t,r){var n=r("WkPL");e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}},b48C:function(e,t){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}},"c/hv":function(e,t,r){},cIO5:function(e,t,r){},lSNA:function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},"qKS/":function(e,t,r){},sXyB:function(e,t,r){var n=r("SksO"),a=r("b48C");function c(t,r,o){return a()?e.exports=c=Reflect.construct:e.exports=c=function(e,t,r){var a=[null];a.push.apply(a,t);var c=new(Function.bind.apply(e,a));return r&&n(c,r.prototype),c},c.apply(null,arguments)}e.exports=c},x4BZ:function(e,t,r){"use strict";r.r(t),r.d(t,"PostListPage",(function(){return E})),r.d(t,"query",(function(){return P}));var n=r("rePB"),a=r("KQm4"),c=r("q1tI"),o=r.n(c),s=r("Wbzz"),i=r("A2+M"),l=r("TSYQ"),u=r.n(l),p=r("3H7G"),m=(r("cIO5"),r("n57c"));const f=e=>{let{title:t,summary:r,tags:n,date:a,className:c,link:s}=e;return o.a.createElement("div",{className:u()("post-summary",c)},o.a.createElement("header",{className:"post-summary__header"},!s&&o.a.createElement(s,{className:"post-summary__title"},t),a&&o.a.createElement("div",{className:"post-summary__date"},a)),r&&o.a.createElement("div",{className:"post-summary__sumary"},r),n&&o.a.createElement("div",{className:"post-summary__tags"},n.map(e=>o.a.createElement(m.a,{className:"post-summary__tag",size:m.d.Small},e))))};f.defaultProps={tags:[]};var b=r("NqE+"),d=r("gn0f");const y=e=>{let{className:t,title:r,posts:n,postLink:a,branding:c=d.a,children:s}=e;return o.a.createElement(b.a,{className:u()("article-list-page",t),asideSlot:o.a.createElement(c,{style:d.b.Badge})},o.a.createElement(p.a,{title:r}),s,o.a.createElement("div",{className:"article-list-page__content"},n.map(e=>o.a.createElement(f,Object.assign({link:a},e)))))};var g=r("Tadz"),O=r("3ffe"),j=r("3XiO");function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const E=e=>{const{data:{allSitePage:{nodes:t},mdx:{body:r=""}={},allMdx:{nodes:n=[]}={}}={}}=e,c=n.reduce((e,t)=>[].concat(Object(a.a)(e),[v(v(v({},t),t.frontmatter),{},{url:t.slug,tags:(t.frontmatter.tags||"").split(",").map(e=>e.trim())})]),[]),l=Object(g.a)(t);return o.a.createElement(O.b,{value:l},o.a.createElement(y,{title:"Thoughts",posts:c,postLink:s.a,branding:j.b},o.a.createElement(i.MDXRenderer,null,r)))};t.default=E;const P="2790277671"}}]);
//# sourceMappingURL=component---src-templates-postlist-tsx-3ec371e8e14a94053694.js.map