(function(t){function e(e){for(var r,s,i=e[0],u=e[1],l=e[2],c=0,p=[];c<i.length;c++)s=i[c],a[s]&&p.push(a[s][0]),a[s]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);f&&f(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,s=1;s<n.length;s++){var u=n[s];0!==a[u]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},o=[];function s(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"e08a0344"}[t]+".js"}function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n=a[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise(function(e,r){n=a[t]=[e,r]});e.push(n[2]=r);var o,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=s(t),o=function(e){u.onerror=u.onload=null,clearTimeout(l);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src,s=new Error("Loading chunk "+t+" failed.\n("+r+": "+o+")");s.type=r,s.request=o,n[1](s)}a[t]=void 0}};var l=setTimeout(function(){o({type:"timeout",target:u})},12e4);u.onerror=u.onload=o,document.head.appendChild(u)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var c=0;c<u.length;c++)e(u[c]);var f=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"31f2":function(t,e,n){"use strict";var r=n("e39b"),a=n.n(r);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),a=n("bb71");n("da64");r["a"].use(a["a"],{iconfont:"md"});var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("VApp",[n("VToolbar",{attrs:{app:""}},[n("VToolbarTitle",{staticClass:"headline text-uppercase"},[n("span",[t._v("Vuetify")]),n("span",{staticClass:"font-weight-light"},[t._v("\n        MATERIAL DESIGN\n      ")])]),n("VSpacer"),n("VBtn",{attrs:{flat:"",href:"https://github.com/vuetifyjs/vuetify/releases/latest",target:"_blank"}},[n("span",{staticClass:"mr-2"},[t._v("\n        Latest Release\n      ")]),n("VIcon",[t._v("open_in_new")])],1)],1),n("VContent",[n("RouterView")],1)],1)},s=[],i={name:"App",data:function(){return{}}},u=i,l=n("2877"),c=n("6544"),f=n.n(c),p=n("7496"),h=n("8336"),m=n("549c"),d=n("132d"),v=n("9910"),b=n("71d9"),y=n("2a7f"),g=Object(l["a"])(u,o,s,!1,null,null,null);g.options.__file="App.vue";var x=g.exports;f()(g,{VApp:p["a"],VBtn:h["a"],VContent:m["a"],VIcon:d["a"],VSpacer:v["a"],VToolbar:b["a"],VToolbarTitle:y["a"]});var _=n("8c4f"),V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("HelloWorld")},w=[],j=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("VContainer",[r("VLayout",{attrs:{"text-xs-center":"",wrap:""}},[r("VFlex",{attrs:{xs12:""}},[r("VImg",{staticClass:"my-3",attrs:{src:n("9b19"),contain:"",height:"200"}})],1),r("VFlex",{attrs:{"mb-4":""}},[r("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v("\n        Welcome to Vuetify\n      ")]),r("p",{staticClass:"subheading font-weight-regular"},[t._v("\n        For help and collaboration with other Vuetify developers,\n        "),r("br"),t._v("please join our online\n        "),r("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v("\n          Discord Community\n        ")])])]),r("VFlex",{attrs:{"mb-5":"",xs12:""}},[r("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("\n        What's next?\n      ")]),r("VLayout",{attrs:{"justify-center":""}},t._l(t.whatsNext,function(e,n){return r("a",{key:n,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v("\n          "+t._s(e.text)+"\n        ")])}),0)],1),r("VFlex",{attrs:{xs12:"","mb-5":""}},[r("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("\n        Important Links\n      ")]),r("VLayout",{attrs:{"justify-center":""}},t._l(t.importantLinks,function(e,n){return r("a",{key:n,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v("\n          "+t._s(e.text)+"\n        ")])}),0)],1),r("VFlex",{attrs:{xs12:"","mb-5":""}},[r("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("\n        Ecosystem\n      ")]),r("VLayout",{attrs:{"justify-center":""}},t._l(t.ecosystem,function(e,n){return r("a",{key:n,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v("\n          "+t._s(e.text)+"\n        ")])}),0)],1)],1)],1)},C=[],k={data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuetifyjs.com"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/layout/pre-defined"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}},T=k,O=(n("31f2"),n("a523")),L=n("0e8f"),S=n("adda"),A=n("a722"),E=Object(l["a"])(T,j,C,!1,null,null,null);E.options.__file="HelloWorld.vue";var F=E.exports;f()(E,{VContainer:O["a"],VFlex:L["a"],VImg:S["a"],VLayout:A["a"]});var P={components:{HelloWorld:F}},I=P,M=Object(l["a"])(I,V,w,!1,null,null,null);M.options.__file="Home.vue";var W=M.exports;r["a"].use(_["a"]);var q=new _["a"]({routes:[{path:"/",name:"home",component:W},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]}),H=n("2f62");r["a"].use(H["a"]);var $=new H["a"].Store({state:{},mutations:{},actions:{}});r["a"].config.productionTip=!1,new r["a"]({router:q,store:$,render:function(t){return t(x)}}).$mount("#app")},"9b19":function(t,e,n){t.exports=n.p+"img/logo.63a7d78d.svg"},e39b:function(t,e,n){}});
//# sourceMappingURL=app.63d56206.js.map