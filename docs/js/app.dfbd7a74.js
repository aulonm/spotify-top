(function(t){function e(e){for(var r,i,s=e[0],c=e[1],u=e[2],l=0,f=[];l<s.length;l++)i=s[l],o[i]&&f.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);p&&p(e);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(r=!1)}r&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},o={app:0},a=[];function i(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"e08a0344"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise(function(e,r){n=o[t]=[e,r]});e.push(n[2]=r);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(t),a=function(e){c.onerror=c.onload=null,clearTimeout(u);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+r+": "+a+")");i.type=r,i.request=a,n[1](i)}o[t]=void 0}};var u=setTimeout(function(){a({type:"timeout",target:c})},12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/spotify-top/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var p=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"202d":function(t,e,n){},3226:function(t,e,n){"use strict";var r=n("202d"),o=n.n(r);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),o=n("bb71");n("da64");r["a"].use(o["a"],{iconfont:"md"});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("VApp",[n("VToolbar",{attrs:{app:""}},[n("VToolbarTitle",{staticClass:"headline text-uppercase"},[n("span",[t._v("SPOTIFY TOP INFORMATION")])]),n("VSpacer"),n("VBtn",{attrs:{flat:"",to:{path:t.tracksLink()}}},[n("span",{staticClass:"mr-2"},[t._v("\n        Tracks\n      ")])]),n("VBtn",{attrs:{flat:"",to:{path:t.artistsLink()}}},[n("span",{staticClass:"mr-2"},[t._v("\n        Artists\n      ")])])],1),n("VContent",[n("RouterView")],1)],1)},i=[],s=(n("28a5"),n("ac6a"),n("f3e2"),n("bc3a")),c=n.n(s),u={get apiUrl(){return"https://aulonm.github.io/spotify-top/"}},l=n("8c4f"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("VContainer",{attrs:{fluid:""}},[n("h1",[t._v("Add information here")])])},f=[],d={name:"Home"},m=d,T=n("2877"),h=n("6544"),v=n.n(h),_=n("a523"),b=Object(T["a"])(m,p,f,!1,null,null,null);b.options.__file="Home.vue";var V=b.exports;v()(b,{VContainer:_["a"]});var g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("VLayout",{attrs:{row:""}},[n("VFlex",{attrs:{xs12:"",sm8:"","offset-sm2":""}},[n("VCard",[n("VToolbar",{attrs:{dark:""}},[n("VToolbarTitle",[t._v("Top artists")])],1),n("VList",t._l(t.topArtists.items,function(e){return n("VListTile",{key:e.id,attrs:{avatar:""},on:{click:function(e){t.getArtist(t.topArtists)}}},[n("VListTileContent",[n("VListTileTitle",{domProps:{textContent:t._s(e.name)}})],1),n("VListTileAvatar",[n("img",{attrs:{src:e.images[2].url}})])],1)}),1)],1)],1)],1)},k=[],A=n("2f62"),y={name:"Artists",computed:Object(A["b"])(["topArtists"]),methods:{getArtist:function(t){console.log(t)}}},L=y,S=(n("3226"),n("b0af")),O=n("0e8f"),w=n("a722"),E=n("8860"),P=n("ba95"),j=n("c954"),C=n("5d23"),x=n("71d9"),I=n("2a7f"),R=Object(T["a"])(L,g,k,!1,null,"2a4aa3ea",null);R.options.__file="Artists.vue";var F=R.exports;v()(R,{VCard:S["a"],VFlex:O["a"],VLayout:w["a"],VList:E["a"],VListTile:P["a"],VListTileAvatar:j["a"],VListTileContent:C["a"],VListTileTitle:C["b"],VToolbar:x["a"],VToolbarTitle:I["a"]});var G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("VLayout",{attrs:{row:""}},[n("VFlex",{attrs:{xs12:"",sm8:"","offset-sm2":""}},[n("VCard",[n("VToolbar",{attrs:{dark:""}},[n("VToolbarTitle",[t._v("Top tracks")])],1),n("VList",t._l(t.topTracks.items,function(e){return n("VListTile",{key:e.id,attrs:{avatar:""},on:{click:function(n){t.getTrack(e)}}},[n("VListTileContent",[n("VListTileTitle",{domProps:{textContent:t._s(t.compileArtistTracks(e))}})],1),n("VListTileAvatar",[n("img",{attrs:{src:e.album.images[2].url}})])],1)}),1)],1)],1)],1)},$=[],B=(n("7f7f"),{name:"Tracks",computed:Object(A["b"])(["topTracks"]),methods:{compileArtistTracks:function(t){var e="".concat(t.artists[0].name);return t.artists.length>1&&t.artists.forEach(function(t,n){0!==n&&(e="".concat(e,", ").concat(t.name))}),"".concat(e," - ").concat(t.album.name)},getTrack:function(t){console.log(t)}}}),M=B,K=(n("e34c"),Object(T["a"])(M,G,$,!1,null,"4090eb46",null));K.options.__file="Tracks.vue";var z=K.exports;v()(K,{VCard:S["a"],VFlex:O["a"],VLayout:w["a"],VList:E["a"],VListTile:P["a"],VListTileAvatar:j["a"],VListTileContent:C["a"],VListTileTitle:C["b"],VToolbar:x["a"],VToolbarTitle:I["a"]}),r["a"].use(l["a"]);var H=new l["a"]({routes:[{path:"/",name:"home",component:V},{path:"/tracks",name:"tracks",component:z},{path:"/artists",name:"artists",component:F},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]}),J=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e="864189e74c304594a7116130f8627506",n="https://accounts.spotify.com/authorize",r=u.apiUrl,o=["user-top-read"];!0===t&&(window.location="".concat(n,"?client_id=").concat(e,"&scope=").concat(o.join("%20"),"&response_type=token&redirect_uri=").concat(r)),window.location.hash.substring(2).split("&").forEach(function(t){if(t){var e=t.split("=");localStorage.setItem(e[0],e[1])}}),window.location.hash="",localStorage.access_token?H.push({name:"home"}):window.location="".concat(n,"?client_id=").concat(e,"&scope=").concat(o.join("%20"),"&response_type=token&redirect_uri=").concat(r)},N=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:20,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"medium_term",r="https://api.spotify.com/v1/me/top/tracks?limit=".concat(t,"&offset=").concat(e,"&time_range=").concat(n);return c()({method:"get",url:r,headers:{Authorization:"Bearer ".concat(localStorage.access_token)}}).then(function(t){return t.data}).catch(function(t){return 401===t.response.data.error.status&&J(!0),Promise.reject(t.response.data.error)})},U=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:20,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"medium_term",r="https://api.spotify.com/v1/me/top/artists?limit=".concat(t,"&offset=").concat(e,"&time_range=").concat(n);return c()({method:"get",url:r,headers:{Authorization:"Bearer ".concat(localStorage.access_token)}}).then(function(t){return t.data}).catch(function(t){return 401===t.response.data.error.status&&J(!0),Promise.reject(t.response.data.error)})},q={name:"App",mounted:function(){J()},methods:{tracksLink:function(){return this.$store.dispatch("GET_TOP_TRACKS"),"/tracks"},artistsLink:function(){return this.$store.dispatch("GET_TOP_ARTISTS"),"/artists"}}},D=q,Y=n("7496"),Q=n("8336"),W=n("549c"),X=n("9910"),Z=Object(T["a"])(D,a,i,!1,null,null,null);Z.options.__file="App.vue";var tt=Z.exports;v()(Z,{VApp:Y["a"],VBtn:Q["a"],VContent:W["a"],VSpacer:X["a"],VToolbar:x["a"],VToolbarTitle:I["a"]}),r["a"].use(A["a"]);var et=!1,nt=new A["a"].Store({state:{topTracks:{},error:{}},debug:et,mutations:{SET_TOP_TRACKS:function(t,e){var n=e.tracks,r=t;r.topTracks=n},SET_TOP_ARTISTS:function(t,e){var n=e.artists,r=t;r.topArtists=n},GET_FAILED:function(t,e){var n=e.error,r=t;r.error=n}},actions:{GET_TOP_TRACKS:function(t){var e=t.commit;N().then(function(t){e("SET_TOP_TRACKS",{tracks:t})}).catch(function(t){e("GET_FAILED",{error:t})})},GET_TOP_ARTISTS:function(t){var e=t.commit;U().then(function(t){e("SET_TOP_ARTISTS",{artists:t})}).catch(function(t){e("GET_FAILED",{error:t})})}}});r["a"].config.productionTip=!1,new r["a"]({router:H,store:nt,render:function(t){return t(tt)}}).$mount("#app")},7333:function(t,e,n){},e34c:function(t,e,n){"use strict";var r=n("7333"),o=n.n(r);o.a}});
//# sourceMappingURL=app.dfbd7a74.js.map