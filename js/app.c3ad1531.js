(function(t){function e(e){for(var a,r,s=e[0],u=e[1],c=e[2],l=0,h=[];l<s.length;l++)r=s[l],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&h.push(i[r][0]),i[r]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);p&&p(e);while(h.length)h.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,r=1;r<n.length;r++){var s=n[r];0!==i[s]&&(a=!1)}a&&(o.splice(e--,1),t=u(u.s=n[0]))}return t}var a={},r={app:0},i={app:0},o=[];function s(t){return u.p+"js/"+({about:"about"}[t]||t)+"."+{about:"d0304e80"}[t]+".js"}function u(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={about:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var a="css/"+({about:"about"}[t]||t)+"."+{about:"cc369096"}[t]+".css",i=u.p+a,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var c=o[s],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===a||l===i))return e()}var h=document.getElementsByTagName("style");for(s=0;s<h.length;s++){c=h[s],l=c.getAttribute("data-href");if(l===a||l===i)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var a=e&&e.target&&e.target.src||i,o=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete r[t],p.parentNode.removeChild(p),n(o)},p.href=i;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){r[t]=0})));var a=i[t];if(0!==a)if(a)e.push(a[2]);else{var o=new Promise((function(e,n){a=i[t]=[e,n]}));e.push(a[2]=o);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=s(t);var h=new Error;c=function(e){l.onerror=l.onload=null,clearTimeout(p);var n=i[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;h.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",h.name="ChunkLoadError",h.type=a,h.request=r,n[1](h)}i[t]=void 0}};var p=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(e)},u.m=t,u.c=a,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)u.d(n,a,function(e){return t[e]}.bind(null,a));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/",u.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var h=0;h<c.length;h++)e(c[h]);var p=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("85ec"),r=n.n(a);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("92c6");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("nav",{staticClass:"navbar",attrs:{role:"navigation","aria-label":"main navigation"}},[t._m(0),n("div",{staticClass:"navbar-menu",attrs:{id:"navbarBasicExample"}},[n("div",{staticClass:"navbar-start"},[n("a",{staticClass:"navbar-item",on:{click:function(e){return t.$router.push({path:"/assets"})}}},[t._v(" Telstra Box Office ")])]),n("div",{staticClass:"navbar-end"},[n("div",{staticClass:"navbar-item"},[n("div",{staticClass:"buttons"},[t.authenticated?n("div",[n("a",{staticClass:"button is-primary",on:{click:function(e){return t.logOut()}}},[n("strong",[t._v("Log Out")])])]):n("div",[n("a",{staticClass:"button is-primary",on:{click:function(e){return t.$router.push("login")}}},[n("strong",[t._v("Log in")])])])])])])])]),n("router-view")],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"navbar-brand"},[a("a",{staticClass:"navbar-item",attrs:{href:"https://liferaft.dataviz.life"}},[a("img",{attrs:{src:n("cf05")}})]),a("a",{staticClass:"navbar-burger burger",attrs:{role:"button","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"}},[a("span",{attrs:{"aria-hidden":"true"}}),a("span",{attrs:{"aria-hidden":"true"}}),a("span",{attrs:{"aria-hidden":"true"}})])])}],o=(n("ac1f"),n("5319"),{name:"App",data:function(){return{authenticated:!1,basicAuth:"dHR2cGx1c19hbmRyb2lkOm1lQkZMTXNkS0dWZWo3Q3E=",raaAuth:"TEhPS2czNmF2NEhvMHc5ZmRJbVVHNXI0V0cxYlJWQXY6NWI1b0s1WEtMYTVBVFRPSA==",clPlayerLicense:"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1cmxzIjpbImh0dHBzOi8vbGlmZXJhZnQuZGF0YXZpei5saWZlIl0sInR5cGUiOiJXZWIiLCJraWQiOjI2MzYsImlsdiI6ZmFsc2V9.MuMtZdb8fIgrE4BYcevZAY-afzRrtoOq13LiENgXA_uauL52UfAvGOpiop6kp7LE7ypKXWoAPtkBmjbgbBurH2qd8xYR-3QL75BfBtGM5RDywMdivyu5gphV_i7a05XqzSuMTTsxXZx-VZsQgbQWnKdFDRW8JhJh4pO4kF6g-ojetbKCxAVUOuctYTV2SO7ESBy63aWJIh04DAuTs5w1Dyx3ziEexYosiMuXi0jd_UatCG4OSGilLjdrQl20S7GzMYsC5wIlFsYxhx72pQa6Is0GSKSIG4TmIhI52KfBEFhXXhTzgYK8a4NDoNsmaHHjdO7aeRpF2hMgPgzuNk8A7w",authData:{}}},mounted:function(){localStorage.authData?(this.authData=JSON.parse(localStorage.getItem("authData")),this.authenticated=!0):this.$router.replace({name:"Login"})},methods:{setAuthenticated:function(t){this.authenticated=t},logOut:function(){this.authenticated=!1,localStorage.setItem("authData",""),this.$router.replace({name:"Login"})}}}),s=o,u=(n("034f"),n("2877")),c=Object(u["a"])(s,r,i,!1,null,null,null),l=c.exports,h=(n("d3b7"),n("2f62")),p=n("8c4f");a["a"].use(h["a"]),a["a"].use(p["a"]);var d=[{path:"/login",name:"Login",meta:{requiresAuth:!1},component:function(){return n.e("about").then(n.bind(null,"a55b"))}},{path:"/watch/:embedCode",name:"Watch",meta:{requiresAuth:!0},component:function(){return n.e("about").then(n.bind(null,"4eb8"))}},{path:"/assets",name:"Assets",component:function(){return n.e("about").then(n.bind(null,"4d60"))},children:[{path:":assetId",component:function(){return n.e("about").then(n.bind(null,"a965"))},props:!0,meta:{showModal:!0,requiresAuth:!0}}]}],f=new p["a"]({mode:"history",base:"/",routes:d}),m=f,v=(n("96cf"),n("1da1")),b={wishlist:{},movieRentals:[]},g={getWishList:function(t){return t.wishlist},getMovieRentals:function(t){return t.movieRentals}},y={fetchWishList:function(t,e){return Object(v["a"])(regeneratorRuntime.mark((function n(){var a,r,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=t.commit,r=e.authData,n.next=4,new Promise((function(t,e){var n=new Headers;n.append("Authorization","Bearer ".concat(r.access_token)),n.append("Content-Type","application/json");var a={method:"GET",headers:n,redirect:"follow"};fetch("https://hfozhlnmfh.execute-api.ap-southeast-2.amazonaws.com/v1/ttvbo/users/".concat(r.uuid,"/wishlist/assets?deviceType=telstratv"),a).then((function(t){return t.json()})).then((function(e){return t(e)})).catch((function(t){return e(t)}))}));case 4:i=n.sent,a("setWishList",i);case 6:case"end":return n.stop()}}),n)})))()},fetchMovieRentals:function(t,e){return Object(v["a"])(regeneratorRuntime.mark((function n(){var a,r,i,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=t.commit,r=e.authData,i=[],localStorage.movieRentals&&(i=JSON.parse(localStorage.movieRentals),a("setMovieRentals",i)),n.next=6,new Promise((function(t,e){var n=new Headers;n.append("Authorization","Bearer ".concat(r.access_token)),n.append("Content-Type","application/json");var a={method:"GET",headers:n,redirect:"follow"};fetch("https://hfozhlnmfh.execute-api.ap-southeast-2.amazonaws.com/v1/ttvbo/users/".concat(r.uuid,"/library?attributes=id,images,displayTitle,type,availability,videos"),a).then((function(t){return t.json()})).then((function(e){return t(e)})).catch((function(t){return e(t)}))}));case 6:o=n.sent,i=o.movies.rentals,localStorage.movieRentals=JSON.stringify(i),a("setMovieRentals",i);case 10:case"end":return n.stop()}}),n)})))()}},w={setWishList:function(t,e){return t.wishlist=e},setMovieRentals:function(t,e){return t.movieRentals=e}},O={state:b,getters:g,actions:y,mutations:w};a["a"].use(h["a"]);var x=new h["a"].Store({modules:{wishlist:O}});a["a"].config.productionTip=!1,new a["a"]({store:x,router:m,render:function(t){return t(l)}}).$mount("#app")},"85ec":function(t,e,n){},cf05:function(t,e,n){t.exports=n.p+"img/logo.49b0eef3.png"}});
//# sourceMappingURL=app.c3ad1531.js.map