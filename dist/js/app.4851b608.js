(function(e){function t(t){for(var r,a,i=t[0],u=t[1],s=t[2],l=0,f=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&f.push(c[a][0]),c[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);d&&d(t);while(f.length)f.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==c[i]&&(r=!1)}r&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},c={app:0},o=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-232e5978":"dbda0720","chunk-35b6e80c":"4ce8fb74","chunk-4d256048":"9801322c","chunk-ab41729c":"bb3ebc1c","chunk-e10abf54":"4416d10e","chunk-7ea2296c":"ef5858f4","chunk-2d0c4643":"6e629f60"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-232e5978":1,"chunk-35b6e80c":1,"chunk-4d256048":1,"chunk-ab41729c":1,"chunk-e10abf54":1,"chunk-7ea2296c":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-232e5978":"0ef56915","chunk-35b6e80c":"34f75d61","chunk-4d256048":"35fc1ba2","chunk-ab41729c":"d8ab4701","chunk-e10abf54":"3b112c4f","chunk-7ea2296c":"312debc6","chunk-2d0c4643":"31d6cfe0"}[e]+".css",c=u.p+r,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var s=o[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===c))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){s=f[i],l=s.getAttribute("data-href");if(l===r||l===c)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||c,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[e],d.parentNode.removeChild(d),n(o)},d.href=c;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){a[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=o);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(e);var f=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}c[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var d=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"03bd":function(e,t,n){},"06e9":function(e,t,n){"use strict";n("299c")},"21fc":function(e,t,n){"use strict";n("b99f")},"299c":function(e,t,n){},3698:function(e,t,n){"use strict";n("b4a4")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("keep-alive",{attrs:{exclude:"Detail"}},[n("router-view")],1),n("main-tab-bar-item")],1)},c=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("tab-bar",[n("tab-bar-item",{attrs:{path:"/home"},scopedSlots:e._u([{key:"item-icon",fn:function(){return[n("div",[n("div",{staticClass:"fonts item-one"}),n("div",[e._v("首页")])])]},proxy:!0}])}),n("tab-bar-item",{attrs:{path:"/category"},scopedSlots:e._u([{key:"item-icon",fn:function(){return[n("div",[n("div",{staticClass:"fonts item-two"}),n("div",[e._v("分类")])])]},proxy:!0}])}),n("tab-bar-item",{attrs:{path:"/cart"},scopedSlots:e._u([{key:"item-icon",fn:function(){return[n("div",[n("div",{staticClass:"fonts item-three"}),n("div",[e._v("购物车")])])]},proxy:!0}])}),n("tab-bar-item",{attrs:{path:"/profile"},scopedSlots:e._u([{key:"item-icon",fn:function(){return[n("div",[n("div",{staticClass:"fonts item-four"}),n("div",[e._v("我的")])])]},proxy:!0}])})],1)},i=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"tab-bar"}},[e._t("default")],2)},s=[],l={name:"TabBar"},f=l,d=(n("06e9"),n("2877")),h=Object(d["a"])(f,u,s,!1,null,"26f14b3d",null),p=h.exports,b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tab-bar-item",style:e.activeStyle,on:{click:e.itemClick}},[e._t("item-icon")],2)},m=[],v=(n("c975"),n("ac1f"),n("5319"),{name:"TabBarItem",props:{path:String,activeColor:{type:String,default:"red"}},computed:{isActive:function(){return-1!==this.$route.path.indexOf(this.path)},activeStyle:function(){return this.isActive?{color:this.activeColor}:{}}},data:function(){return{}},methods:{itemClick:function(){this.$router.replace(this.path)}}}),k=v,y=(n("3698"),Object(d["a"])(k,b,m,!1,null,"3f69df89",null)),g=y.exports,_={name:"MainTabBarItem",components:{TabBar:p,TabBarItem:g}},w=_,S=Object(d["a"])(w,o,i,!1,null,"64a58d6e",null),x=S.exports,O={name:"App",components:{MainTabBarItem:x}},C=O,j=(n("21fc"),Object(d["a"])(C,a,c,!1,null,"d8ba34f8",null)),T=j.exports,E=(n("d3b7"),n("8c4f")),P=function(){return Promise.all([n.e("chunk-232e5978"),n.e("chunk-35b6e80c"),n.e("chunk-ab41729c")]).then(n.bind(null,"b3d7"))},L=function(){return Promise.all([n.e("chunk-232e5978"),n.e("chunk-7ea2296c")]).then(n.bind(null,"c228"))},$=function(){return n.e("chunk-2d0c4643").then(n.bind(null,"3b42"))},A=function(){return Promise.all([n.e("chunk-232e5978"),n.e("chunk-35b6e80c"),n.e("chunk-e10abf54")]).then(n.bind(null,"bb51"))},B=function(){return Promise.all([n.e("chunk-232e5978"),n.e("chunk-35b6e80c"),n.e("chunk-4d256048")]).then(n.bind(null,"6ab7"))};r["a"].use(E["a"]);var M=[{path:"",redirect:"/home"},{path:"/home",component:P},{path:"/cart",component:L},{path:"/profile",component:$},{path:"/category",component:A},{path:"/detail/:iid",component:B}],N=new E["a"]({routes:M}),I=E["a"].prototype.push;E["a"].prototype.push=function(e){return I.call(this,e).catch((function(e){return e}))};var D,q=N,J=n("2f62"),F=n("ade3"),H="add_counter",K="add_to_cart",U=(D={},Object(F["a"])(D,H,(function(e,t){t.count++})),Object(F["a"])(D,K,(function(e,t){t.checked=!0,e.cartList.push(t)})),D),z=(n("7db0"),{addCart:function(e,t){return new Promise((function(n){var r=e.state.cartList.find((function(e){return e.iid===t.iid}));r?(e.commit(H,r),n("当前商品数量加1")):(t.count=1,e.commit(K,t),n("成功添加到购物车"))}))}}),G={cartLength:function(e){return e.cartList.length},cartList:function(e){return e.cartList}};r["a"].use(J["a"]);var Q={cartList:[]},R=new J["a"].Store({state:Q,mutations:U,actions:z,getters:G}),V=R,W=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:e.isShow,expression:"isShow"}],staticClass:"toast"},[n("div",[e._v(e._s(e.message))])])},X=[],Y={name:"Toast",data:function(){return{isShow:!1,message:""}},components:{},methods:{show:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2e3;this.isShow=!0,this.message=e,setTimeout((function(){t.isShow=!1,t.message=""}),n)}}},Z=Y,ee=(n("5fd6"),Object(d["a"])(Z,W,X,!1,null,"999efd1e",null)),te=ee.exports,ne={install:function(e){var t=e.extend(te),n=new t;n.$mount(document.createElement("div")),document.body.appendChild(n.$el),e.prototype.$toast=n}},re=ne,ae=n("fe3c"),ce=n.n(ae),oe=n("caf9");r["a"].config.productionTip=!1,r["a"].prototype.$bus=new r["a"],r["a"].use(re),r["a"].use(oe["a"],{loading:n("b949")}),ce.a.attach(document.body),new r["a"]({router:q,render:function(e){return e(T)},store:V}).$mount("#app")},"5fd6":function(e,t,n){"use strict";n("03bd")},b4a4:function(e,t,n){},b949:function(e,t,n){e.exports=n.p+"img/ganyu.bc4f2159.png"},b99f:function(e,t,n){}});
//# sourceMappingURL=app.4851b608.js.map