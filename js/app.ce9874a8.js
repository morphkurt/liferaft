(function(t){function e(e){for(var n,r,u=e[0],s=e[1],c=e[2],l=0,d=[];l<u.length;l++)r=u[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);f&&f(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,r=1;r<a.length;r++){var u=a[r];0!==o[u]&&(n=!1)}n&&(i.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},r={app:0},o={app:0},i=[];function u(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"f9128a19"}[t]+".js"}function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(t){var e=[],a={about:1};r[t]?e.push(r[t]):0!==r[t]&&a[t]&&e.push(r[t]=new Promise((function(e,a){for(var n="css/"+({about:"about"}[t]||t)+"."+{about:"e22581ec"}[t]+".css",o=s.p+n,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var c=i[u],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===n||l===o))return e()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){c=d[u],l=c.getAttribute("data-href");if(l===n||l===o)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var n=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete r[t],f.parentNode.removeChild(f),a(i)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){r[t]=0})));var n=o[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise((function(e,a){n=o[t]=[e,a]}));e.push(n[2]=i);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=u(t);var d=new Error;c=function(e){l.onerror=l.onload=null,clearTimeout(f);var a=o[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",d.name="ChunkLoadError",d.type=n,d.request=r,a[1](d)}o[t]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var f=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("85ec"),r=a.n(n);r.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("92c6");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("nav",{staticClass:"navbar",attrs:{role:"navigation","aria-label":"main navigation"}},[t._m(0),a("div",{staticClass:"navbar-menu",attrs:{id:"navbarBasicExample"}},[t._m(1),a("div",{staticClass:"navbar-end"},[a("div",{staticClass:"navbar-item"},[a("div",{staticClass:"buttons"},[t.authenticated?a("div",[a("a",{staticClass:"button is-primary",on:{click:function(e){return t.logOut()}}},[a("strong",[t._v("Log Out")])])]):a("div",[a("a",{staticClass:"button is-primary",on:{click:function(e){return t.$router.push("login")}}},[a("strong",[t._v("Log in")])])])])])])])]),a("router-view")],1)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navbar-brand"},[n("a",{staticClass:"navbar-item",attrs:{href:"https://ttvbo.dataviz.life"}},[n("img",{attrs:{src:a("cf05")}})]),n("a",{staticClass:"navbar-burger burger",attrs:{role:"button","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"}},[n("span",{attrs:{"aria-hidden":"true"}}),n("span",{attrs:{"aria-hidden":"true"}}),n("span",{attrs:{"aria-hidden":"true"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"navbar-start"},[a("a",{staticClass:"navbar-item"},[t._v(" Telstra Box Office ")])])}],i=(a("ac1f"),a("5319"),{name:"App",data:function(){return{authenticated:!1,basicAuth:"dHR2cGx1c19hbmRyb2lkOm1lQkZMTXNkS0dWZWo3Q3E=",raaAuth:"TEhPS2czNmF2NEhvMHc5ZmRJbVVHNXI0V0cxYlJWQXY6NWI1b0s1WEtMYTVBVFRPSA==",clPlayerLicense:"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1cmxzIjpbImh0dHBzOi8vc2FuZHBpdC5kYXRhdml6LmxpZmUiXSwidHlwZSI6IldlYiIsImtpZCI6MjU0NCwiaWx2IjpmYWxzZX0.rihrwke9f54ww9r4LxIpR7sAVo_GfJsTRw1c6GWOYN2pJ-CiPZkfm1ualyBrNJJdiwTFTck4XRP0U1OcwtNTy8NL8OpRt2B57Qm7Fl7UtjiOv6agJ2zIpx8CQnnUcODFyU8QxZQ2HO-v4GvojfTcYryj7w4JQGP3AJtFWkLsnmSyBI5A6Z027h2PBu2Jm5-HIOU1LLI1AYPK91GeaTeoF5Da_Q1bfBIRnwSCeukuX7WKHONiRuaIE65MUVdEM6vAxaySIZ6xIUFnFsESQCNn4TIv2YF3sRW_tlt7wJwyfJl6tsR7ZzRFoTlLHCddCdDCMufYJMVXftzsBiALLUeKdg",authData:{}}},mounted:function(){localStorage.authData?(this.authData=JSON.parse(localStorage.getItem("authData")),this.authenticated=!0):this.$router.replace({name:"Login"})},methods:{setAuthenticated:function(t){this.authenticated=t},logOut:function(){this.authenticated=!1,localStorage.setItem("authData",""),this.$router.replace({name:"Login"})}}}),u=i,s=(a("034f"),a("2877")),c=Object(s["a"])(u,r,o,!1,null,null,null),l=c.exports,d=(a("d3b7"),a("8c4f"));n["a"].use(d["a"]);var f=[{path:"/login",name:"Login",meta:{requiresAuth:!1},component:function(){return a.e("about").then(a.bind(null,"a55b"))}},{path:"/watch/:embedCode",name:"Watch",meta:{requiresAuth:!0},component:function(){return a.e("about").then(a.bind(null,"4eb8"))}},{path:"/assets",name:"Assets",component:function(){return a.e("about").then(a.bind(null,"4d60"))},children:[{path:":assetId",component:function(){return a.e("about").then(a.bind(null,"a965"))},props:!0,meta:{showModal:!0,requiresAuth:!0}}]}],p=new d["a"]({mode:"history",base:"/",routes:f}),h=p;n["a"].config.productionTip=!1,new n["a"]({router:h,render:function(t){return t(l)}}).$mount("#app")},"85ec":function(t,e,a){},cf05:function(t,e,a){t.exports=a.p+"img/logo.49b0eef3.png"}});
//# sourceMappingURL=app.ce9874a8.js.map