(function(e){function t(t){for(var a,o,s=t[0],c=t[1],l=t[2],u=0,d=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);h&&h(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,o=1;o<n.length;o++){var s=n[o];0!==r[s]&&(a=!1)}a&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},o={app:0},r={app:0},i=[];function s(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-17bbd880":"7aca9f41","chunk-1febc2da":"c1f6433f","chunk-21fc9d92":"22ac9fe5","chunk-2d0b1dc7":"6d3f5c10","chunk-2d21a3d2":"a67cf004","chunk-2d224ab5":"5b517c37","chunk-2d22c341":"f48c8e61","chunk-2d22d957":"520a0608","chunk-32fa970a":"4fcdfa96","chunk-44cdc844":"c1435020","chunk-488535cb":"5abc45dc","chunk-59c47205":"9c01cc35","chunk-6e65a875":"02daca36","chunk-74c3d32c":"3910b1c6","chunk-7a1395ca":"ce4ece87","chunk-d81aaf22":"1dccb438"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-488535cb":1,"chunk-6e65a875":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-17bbd880":"31d6cfe0","chunk-1febc2da":"31d6cfe0","chunk-21fc9d92":"31d6cfe0","chunk-2d0b1dc7":"31d6cfe0","chunk-2d21a3d2":"31d6cfe0","chunk-2d224ab5":"31d6cfe0","chunk-2d22c341":"31d6cfe0","chunk-2d22d957":"31d6cfe0","chunk-32fa970a":"31d6cfe0","chunk-44cdc844":"31d6cfe0","chunk-488535cb":"63a864ca","chunk-59c47205":"31d6cfe0","chunk-6e65a875":"3a1a8796","chunk-74c3d32c":"31d6cfe0","chunk-7a1395ca":"31d6cfe0","chunk-d81aaf22":"31d6cfe0"}[e]+".css",r=c.p+a,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var l=i[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===r))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],u=l.getAttribute("data-href");if(u===a||u===r)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var a=t&&t.target&&t.target.src||r,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete o[e],h.parentNode.removeChild(h),n(i)},h.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(h)})).then((function(){o[e]=0})));var a=r[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(h);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",d.name="ChunkLoadError",d.type=a,d.request=o,n[1](d)}r[e]=void 0}};var h=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var h=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1dff":function(e,t,n){"use strict";var a=n("2b0e"),o=n("fb9a"),r=n.n(o),i={primary:"#7367F0",success:"#28C76F",danger:"#EA5455",warning:"#FF9F43",dark:"#1E1E1E"};a["default"].use(r.a,{theme:{colors:i}});var s={theme:"light",sidebarCollapsed:!1,navbarColor:"#fff",navbarType:"floating",footerType:"static",routerTransition:"zoom-fade",disableCustomizer:!1};t["a"]=s},"3a10":function(e,t,n){},5002:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("551c");var a,o,r=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},s=[],c=(n("4917"),n("1dff")),l={watch:{"$store.state.theme":function(e){this.toggleClassInBody(e)}},methods:{toggleClassInBody:function(e){"dark"==e?(document.body.className.match("theme-semi-dark")&&document.body.classList.remove("theme-semi-dark"),document.body.classList.add("theme-dark")):"semi-dark"==e?(document.body.className.match("theme-dark")&&document.body.classList.remove("theme-dark"),document.body.classList.add("theme-semi-dark")):(document.body.className.match("theme-dark")&&document.body.classList.remove("theme-dark"),document.body.className.match("theme-semi-dark")&&document.body.classList.remove("theme-semi-dark"))}},mounted:function(){this.toggleClassInBody(c["a"].theme)}},u=l,d=n("2877"),h=Object(d["a"])(u,i,s,!1,null,null,null),p=h.exports,m=n("fb9a"),g=n.n(m),f=(n("c789"),n("04f2"),n("7f7f"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"convstooltip",staticClass:"con-vs-tooltip",on:{mouseout:e.mouseoutx,mouseover:e.mouseoverx}},[n("transition",{attrs:{name:"tooltip-fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.active,expression:"active"}],ref:"vstooltip",staticClass:"vs-tooltip",class:["vs-tooltip-"+(e.positionx||e.position),"vs-tooltip-"+e.color,{"after-none":e.noneAfter}],style:e.style},[e.title?n("h4",[e._v(e._s(e.title))]):e._e(),e._v("\n      "+e._s(e.text)+"\n    ")])]),e._t("default")],2)}),b=[],v=(n("0b21"),n("c5f6"),{insertBody:function(e){document.body.insertBefore(e,document.body.firstChild)},removeBody:function(e){var t=document.body;t.removeChild(e)},changePosition:function(e,t,n){var a=0,o=0,r=0,i=window.pageYOffset||document.documentElement.scrollTop;e.getBoundingClientRect().top+300>=window.innerHeight?setTimeout((function(){a=n?e.getBoundingClientRect().top-t.clientHeight+i:e.getBoundingClientRect().top-t.clientHeight+e.clientHeight+i}),1):a=n?e.getBoundingClientRect().top+e.clientHeight+i+5:e.getBoundingClientRect().top+i,o=e.getBoundingClientRect().left,r=e.offsetWidth;var s={left:"".concat(o,"px"),top:"".concat(a,"px"),width:"".concat(r,"px")};return s}}),C=(n("6762"),n("a481"),n("386d"),n("28a5"),{darken:function(e,t){var n=e.split(","),a=t<0?0:255,o=t<0?-1*t:t,r=parseInt(n[0].slice(4)),i=parseInt(n[1]),s=parseInt(n[2]);return"rgb("+(Math.round((a-r)*o)+r)+","+(Math.round((a-i)*o)+i)+","+(Math.round((a-s)*o)+s)+")"},getColor:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(/^[#]/.test(e)){var a=this.hexToRgb(e);e=1==t?"rgb(".concat(a.r,",").concat(a.g,",").concat(a.b,")"):"rgba(".concat(a.r,",").concat(a.g,",").concat(a.b,",").concat(t,")")}else/^rgba/.test(e)?-1!=e.search(/.([0-9]\))$/)||n||(e=e.replace(/.?([0-9]\))$/,"".concat(t,")"))):/^(rgb)/.test(e)&&1!=t&&(e=e.replace(/^(rgb)/,"rgba"),e=e.replace(/\)$/,",".concat(t,")")));return e},isColor:function(e){var t=["primary","secondary","success","danger","warning","dark","light"];return t.includes(e)},RandomColor:function(){function e(e,t){return Math.floor(Math.random()*(t-e))+e}return"rgb(".concat(e(0,255),",").concat(e(0,255),",").concat(e(0,255),")")},rColor:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if(/^[#]/.test(e)){var n=this.hexToRgb(e);e="rgba(".concat(n.r,",").concat(n.g,",").concat(n.b,",").concat(t,")")}else if(/^[rgb]/.test(e)){var a=e.split(")")[0];/^[rgba]/.test(e)?a+=")":(a.replace("rgb","rgba"),a+=",".concat(t,")")),e=a}var o=["primary","success","danger","warning","dark"];return e?/[#()]/.test(e)?e:o.includes(e)?"rgba(var(--".concat(e,"),").concat(t,")"):"rgba(var(--primary),".concat(t,")"):"rgba(var(--primary),".concat(t,")")},contrastColor:function(e){var t=e;if(/[#]/g.test(e)){var n=this.hexToRgb(e);t="rgb(".concat(n.r,",").concat(n.g,",").concat(n.b,")")}var a=t.replace(/^(rgb|rgba)\(/,"").replace(/\)$/,"").replace(/\s/g,"").split(","),o=(299*a[0]+587*a[1]+114*a[2])/1e3;return o>=128},setCssVariable:function(e,t){"undefined"!==typeof window&&document.documentElement.style.setProperty(e,t)},hexToRgb:function(e){var t=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;e=e.replace(t,(function(e,t,n,a){return t+t+n+n+a+a}));var n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return n?{r:parseInt(n[1],16),g:parseInt(n[2],16),b:parseInt(n[3],16)}:null},getVariable:function(e,t){return String(e.getPropertyValue(t)).trim()},changeColor:function(e){var t,n=["primary","success","danger","warning","dark"];if(n.includes(e)){var a=getComputedStyle(document.documentElement);t=this.getVariable(a,"--"+e)}else if(/[rgb()]/g.test(e))t=e.replace(/[rgb()]/g,"");else if(/[#]/g.test(e)){var o=this.hexToRgb(e);t="".concat(o.r,",").concat(o.g,",").concat(o.b)}else t="--"+e;return t}}),A={name:"vx-tooltip",props:{title:{default:null,type:[String,Number]},text:{default:null,type:[String,Number]},color:{default:null,type:String},position:{default:"top",type:String},delay:{default:"0s",type:[Number,String]}},data:function(){return{cords:{},active:!1,widthx:"auto",positionx:null,noneAfter:!1}},computed:{style:function(){return{left:this.cords.left,top:this.cords.top,transitionDelay:this.active?this.delay:"0s",background:C.getColor(this.color,1),width:this.widthx}}},methods:{mouseoverx:function(){var e=this;this.active=!0,this.$nextTick((function(){v.insertBody(e.$refs.vstooltip),e.changePosition(e.$refs.convstooltip,e.$refs.vstooltip)}))},mouseoutx:function(){this.active=!1},changePosition:function(e,t){this.noneAfter=!1,this.positionx=null;var n=e.closest(".con-vs-tooltip"),a=window.pageYOffset||document.documentElement.scrollTop,o=n.getBoundingClientRect().top+a-t.clientHeight-4,r=n.getBoundingClientRect().left-t.clientWidth/2+n.clientWidth/2,i=n.clientWidth;"bottom"==this.position?o=n.getBoundingClientRect().top+a+n.clientHeight+4:"left"==this.position?(r=n.getBoundingClientRect().left-t.clientWidth-4,o=n.getBoundingClientRect().top+a+n.clientHeight/2-t.clientHeight/2,-1==Math.sign(r)&&(r=n.getBoundingClientRect().left,o=n.getBoundingClientRect().top+a+n.clientHeight+4,this.positionx="bottom",this.noneAfter=!0)):"right"==this.position&&(r=n.getBoundingClientRect().left+n.clientWidth+4,o=n.getBoundingClientRect().top+a+n.clientHeight/2-t.clientHeight/2,window.innerWidth-(r+t.clientWidth)<=20&&(r=n.getBoundingClientRect().left-t.clientWidth/2-10,o=n.getBoundingClientRect().top+a+n.clientHeight+4,this.positionx="bottom",this.noneAfter=!0)),this.cords={left:"".concat(r,"px"),top:"".concat(o,"px"),width:"".concat(i,"px")}}}},x=A,S=Object(d["a"])(x,f,b,!1,null,null,null),k=S.exports,w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"card",staticClass:"vx-card",class:[{"overflow-hidden":e.tempHidden},{"no-shadow":e.noShadow},{"rounded-none":e.noRadius},{"card-border":e.cardBorder}],style:e.cardStyles},[e.hasHeader?n("div",{staticClass:"vx-card__header"},[n("div",{staticClass:"vx-card__title"},[this.$props.title?n("h4",[e._v(e._s(e.title))]):e._e(),this.$props.subtitle?n("h6",{staticClass:"text-grey"},[e._v(e._s(e.subtitle))]):e._e()]),e.hasAction?n("div",{staticClass:"vx-card__actions"},[e._t("actions",[(e.actionButtons||e.collapseAction||e.refreshContentAction||e.removeCardAction)&&!e.codeToggler?n("div",{staticClass:"vx-card__action-buttons"},[e.actionButtons||e.collapseAction?n("feather-icon",{staticClass:"ml-4",class:{rotate180:!e.isContentCollapsed},attrs:{icon:"ChevronUpIcon"},on:{click:e.toggleContent}}):e._e(),e.actionButtons||e.refreshContentAction?n("feather-icon",{staticClass:"ml-4",attrs:{icon:"RotateCwIcon"},on:{click:e.refreshcard}}):e._e(),e.actionButtons||e.removeCardAction?n("feather-icon",{staticClass:"ml-4",attrs:{icon:"XIcon"},on:{click:e.removeCard}}):e._e()],1):e._e(),e.codeToggler&&!e.actionButtons?n("div",{staticClass:"vx-card__code-toggler sm:block hidden"},[n("feather-icon",{class:{"border border-solid border-primary border-t-0 border-r-0 border-l-0":e.showCode},attrs:{icon:"CodeIcon"},on:{click:e.toggleCode}})],1):e._e()])],2):e._e()]):e._e(),n("div",{ref:"content",staticClass:"vx-card__collapsible-content vs-con-loading__container",class:[{collapsed:e.isContentCollapsed},{"overflow-hidden":e.tempHidden}],style:e.StyleItems},[e._t("no-body"),this.$slots.default?n("div",{staticClass:"vx-card__body"},[e._t("default")],2):e._e(),e._t("no-body-bottom"),this.$slots.footer?n("div",{staticClass:"vx-card__footer"},[e._t("footer")],2):e._e()],2),n("div",{directives:[{name:"show",rawName:"v-show",value:this.$slots.codeContainer,expression:"this.$slots.codeContainer"}],ref:"codeContainer",staticClass:"vx-card__code-container",class:{collapsed:!e.showCode},style:e.codeContainerStyles},[n("div",{staticClass:"code-content"},[n("prism",{attrs:{language:e.codeLanguage}},[e._t("codeContainer")],2)],1)])])},y=[],E=n("8d51"),T=n.n(E),_={name:"vx-card",props:{title:String,subtitle:String,actionButtons:{type:Boolean,default:!1},actionButtonsColor:{type:String,default:"success"},codeToggler:{type:Boolean,default:!1},noShadow:{default:!1,type:Boolean},noRadius:{default:!1,type:Boolean},cardBorder:{default:!1,type:Boolean},codeLanguage:{default:"markup",type:String},collapseAction:{default:!1,type:Boolean},refreshContentAction:{default:!1,type:Boolean},removeCardAction:{default:!1,type:Boolean}},data:function(){return{isContentCollapsed:!1,showCode:!1,maxHeight:null,cardMaxHeight:null,codeContainerMaxHeight:"0px",tempHidden:!1}},computed:{hasAction:function(){return this.$slots.actions||this.actionButtons||this.collapseAction||this.refreshContentAction||this.removeCardAction||this.codeToggler},hasHeader:function(){return this.hasAction||this.title||this.subtitle},StyleItems:function(){return{maxHeight:this.maxHeight}},cardStyles:function(){return{maxHeight:this.cardMaxHeight}},codeContainerStyles:function(){return{maxHeight:this.codeContainerMaxHeight}}},methods:{toggleContent:function(){var e=this;this.$refs.content.style.overflow="hidden";var t=this.$refs.content.scrollHeight;"1.5rem"==this.maxHeight?(this.maxHeight="".concat(t,"px"),setTimeout((function(){e.maxHeight="none",e.$refs.content.style.overflow="hidden"}),300)):(this.maxHeight="".concat(t,"px"),setTimeout((function(){e.maxHeight="1.5rem",e.$refs.content.style.overflow="hidden"}),50)),this.isContentCollapsed=!this.isContentCollapsed},refreshcard:function(){var e=this;this.tempHidden=!0,this.$vs.loading({container:this.$refs.content,scale:.5}),setTimeout((function(){e.$vs.loading.close(e.$refs.content),e.tempHidden=!1}),3e3)},removeCard:function(){var e=this,t=this.$refs.card.scrollHeight;this.cardMaxHeight="".concat(t,"px"),this.$el.style.overflow="hidden",setTimeout((function(){e.cardMaxHeight="0px"}),50)},toggleCode:function(){var e=this;this.tempHidden=!0,this.showCode=!this.showCode;var t=this.$refs.codeContainer.scrollHeight;"0px"==this.codeContainerMaxHeight?(this.codeContainerMaxHeight="".concat(t,"px"),setTimeout((function(){e.codeContainerMaxHeight="none",e.tempHidden=!1}),300)):(this.codeContainerMaxHeight="".concat(t,"px"),setTimeout((function(){e.codeContainerMaxHeight="0px",e.tempHidden=!1}),150))}},components:{Prism:T.a}},P=_,D=(n("89b8"),Object(d["a"])(P,w,y,!1,null,null,null)),L=D.exports,M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"list"},e._l(e.list,(function(t,a){return n("li",{key:a,staticClass:"list__item"},[n("feather-icon",{staticClass:"w-5 h-5 mr-1",attrs:{icon:e.icon}}),n("span",{domProps:{innerHTML:e._s(t)}})],1)})),0)},B=[],I={name:"vx-list",props:{list:{type:Array,required:!0},icon:{type:String,default:"ChevronsRightIcon"}}},R=I,F=(n("dca1"),Object(d["a"])(R,M,B,!1,null,null,null)),N=F.exports,H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vx-breadcrumb"},[n("ul",{staticClass:"flex flex-wrap items-center"},[n("li",{staticClass:"inline-flex items-end"},[n("router-link",{attrs:{to:"/"}},[n("feather-icon",{attrs:{icon:"HomeIcon",svgClasses:"h-5 w-5 mb-1 stroke-current text-primary"}})],1),n("span",{staticClass:"breadcrumb-separator mx-2"},[n("feather-icon",{attrs:{icon:"ChevronsRightIcon",svgClasses:"w-4 h-4"}})],1)],1),e._l(e.$route.meta.breadcrumb.slice(1,-1),(function(t,a){return n("li",{key:a,staticClass:"inline-flex items-center"},[t.url?n("router-link",{attrs:{to:t.url}},[e._v(e._s(t.title))]):n("span",{staticClass:"text-primary cursor-default"},[e._v(e._s(t.title))]),n("span",{staticClass:"breadcrumb-separator mx-2 flex items-start"},[n("feather-icon",{attrs:{icon:"ChevronsRightIcon",svgClasses:"w-4 h-4"}})],1)],1)})),n("li",{staticClass:"inline-flex"},[e.$route.meta.breadcrumb.slice(-1)[0].active?n("span",{staticClass:"cursor-default"},[e._v(e._s(e.$route.meta.breadcrumb.slice(-1)[0].title))]):e._e()])],2)])},O=[],V={name:"vx-breadcrumb"},j=V,$=Object(d["a"])(j,H,O,!1,null,null,null),G=$.exports,U=n("0a35"),z={name:"feather-icon",props:{icon:{type:String,required:!0},svgClasses:{type:[String,Object,Array],default:""},badge:{}},render:function(e){var t=e(U[this.icon],{class:this.svgClasses}),n=e("span",{class:"feather-icon-badge bg-primary text-white absolute px-2 py-1 rounded-full text-xs",style:"top: -9px; right: -7px"},[this.badge]),a={class:["feather-icon select-none relative"],on:{click:this.clickFeather,mouseover:this.mouseoverFeather,mouseout:this.mouseoutFeather}},o=[t];return this.badge&&o.push(n),e("span",a,o)},methods:{clickFeather:function(e){this.$emit("click",e)},mouseoverFeather:function(e){this.$emit("mouseover",e)},mouseoutFeather:function(e){this.$emit("mouseout",e)}}},W=z,q=(n("70d7"),Object(d["a"])(W,a,o,!1,null,null,null)),K=q.exports;r["default"].component(k.name,k),r["default"].component(L.name,L),r["default"].component(N.name,N),r["default"].component(G.name,G),r["default"].component(K.name,K);n("c1c3"),n("5aea");var Q=n("8c4f");r["default"].use(Q["a"]);var J=new Q["a"]({mode:"history",base:"/",scrollBehavior:function(){return{x:0,y:0}},routes:[{path:"",component:function(){return n.e("chunk-6e65a875").then(n.bind(null,"f135"))},children:[{path:"/",name:"home",component:function(){return n.e("chunk-2d21a3d2").then(n.bind(null,"bb51"))}},{path:"/page2",name:"page2",component:function(){return n.e("chunk-2d0b1dc7").then(n.bind(null,"223d"))}},{path:"/page3",name:"page3",component:function(){return n.e("chunk-2d224ab5").then(n.bind(null,"e0b6"))}},{path:"/page4",name:"page4",component:function(){return n.e("chunk-2d22d957").then(n.bind(null,"f7b2"))}}]},{path:"",component:function(){return n.e("chunk-2d22c341").then(n.bind(null,"f1dd"))},children:[{path:"/pages/login",name:"pageLogin",component:function(){return n.e("chunk-488535cb").then(n.bind(null,"8b48"))}},{path:"/pages/register",name:"pageRegister",component:function(){return n.e("chunk-74c3d32c").then(n.bind(null,"aaf8"))}},{path:"/pages/forgot-password",name:"pageForgotPassword",component:function(){return n.e("chunk-32fa970a").then(n.bind(null,"737a"))}},{path:"/pages/reset-password",name:"pageResetPassword",component:function(){return n.e("chunk-21fc9d92").then(n.bind(null,"5553"))}},{path:"/pages/lock-screen",name:"pageLockScreen",component:function(){return n.e("chunk-1febc2da").then(n.bind(null,"4073"))}},{path:"/pages/comingsoon",name:"pageComingSoon",component:function(){return n.e("chunk-17bbd880").then(n.bind(null,"da76"))}},{path:"/pages/error-404",name:"pageError404",component:function(){return n.e("chunk-59c47205").then(n.bind(null,"c0ba"))}},{path:"/pages/error-500",name:"pageError500",component:function(){return n.e("chunk-44cdc844").then(n.bind(null,"c04d"))}},{path:"/pages/not-authorized",name:"pageNotAuthorized",component:function(){return n.e("chunk-d81aaf22").then(n.bind(null,"1331"))}},{path:"/pages/maintenance",name:"pageMaintenance",component:function(){return n.e("chunk-7a1395ca").then(n.bind(null,"3339"))}}]},{path:"*",redirect:"/pages/error-404"}]});J.afterEach((function(){var e=document.getElementById("loading-bg");e&&(e.style.display="none")})),J.beforeEach((function(e,t,n){var a=["/pages/login","/pages/register"],o=!a.includes(e.path),r=localStorage.getItem("user");o&&!r?J.push({path:"/pages/login",query:{to:e.path}}):n()}));var Z=J,Y=n("2f62"),X={actionIcon:"StarIcon",highlightColor:"warning",data:[{index:0,label:"Home",url:"/",labelIcon:"HomeIcon",highlightAction:!1},{index:1,label:"Page 2",url:"/page2",labelIcon:"CalendarIcon",highlightAction:!1}]},ee=JSON.parse(localStorage.getItem("user")),te=ee?{status:{loggedIn:!0},user:ee}:{status:{loggedIn:!1},user:null},ne={isSidebarActive:!0,breakpoint:null,sidebarWidth:"default",reduceButton:c["a"].sidebarCollapsed,bodyOverlay:!1,sidebarItemsMin:!1,theme:c["a"].theme||"light",navbarSearchAndPinList:X,AppActiveUser:{id:0,name:"John Doe",about:"Dessert chocolate cake lemon drops jujubes. Biscuit cupcake ice cream bear claw brownie brownie marshmallow.",img:"avatar-s-11.png",status:"online"},themePrimaryColor:c["a"].primary,starredPages:X.data.filter((function(e){return e.highlightAction})),initialState:te},ae=ne,oe={},re=oe,ie=(n("20d6"),{UPDATE_SIDEBAR_WIDTH:function(e,t){e.sidebarWidth=t},UPDATE_SIDEBAR_ITEMS_MIN:function(e,t){e.sidebarItemsMin=t},TOGGLE_REDUCE_BUTTON:function(e,t){e.reduceButton=t},TOGGLE_CONTENT_OVERLAY:function(e,t){e.bodyOverlay=t},TOGGLE_IS_SIDEBAR_ACTIVE:function(e,t){e.isSidebarActive=t},UPDATE_THEME:function(e,t){e.theme=t},UPDATE_WINDOW_BREAKPOINT:function(e,t){e.breakpoint=t},UPDATE_PRIMARY_COLOR:function(e,t){e.themePrimaryColor=t},UPDATE_STATUS_CHAT:function(e,t){e.AppActiveUser.status=t},UPDATE_STARRED_PAGE:function(e,t){var n=e.navbarSearchAndPinList.data.findIndex((function(e){return e.index==t.index}));if(e.navbarSearchAndPinList.data[n].highlightAction=t.val,t.val)e.starredPages.push(e.navbarSearchAndPinList.data[n]);else{var a=e.starredPages.findIndex((function(e){return e.index==t.index}));e.starredPages.splice(a,1)}},ARRANGE_STARRED_PAGES_LIMITED:function(e,t){var n=e.starredPages.slice(10);e.starredPages=t.concat(n)},ARRANGE_STARRED_PAGES_MORE:function(e,t){var n=!1,a=e.starredPages[10],o=e.starredPages.slice(0,10);e.starredPages=o.concat(t),e.starredPages.slice(0,10).map((function(e){t.indexOf(e)>-1&&(n=!0)})),n||e.starredPages.splice(10,0,a)},loginSuccess:function(e,t){e.initialState.status.loggedIn=!0,e.initialState.user=t},loginFailure:function(e){e.initialState.status.loggedIn=!1,e.initialState.user=null},logout:function(e){e.initialState.status.loggedIn=!1,e.initialState.user=null},registerSuccess:function(e){e.initialState.status.loggedIn=!1},registerFailure:function(e){e.initialState.status.loggedIn=!1}}),se=ie,ce=n("c665"),le=n("aa9a"),ue=n("bc3a"),de=n.n(ue),he="http://localhost:8080/api/auth/",pe=function(){function e(){Object(ce["a"])(this,e)}return Object(le["a"])(e,[{key:"login",value:function(e){return de.a.post(he+"signin",{username:e.username,password:e.password}).then((function(e){return e.data.accessToken&&localStorage.setItem("user",JSON.stringify(e.data)),e.data}))}},{key:"logout",value:function(){localStorage.removeItem("user")}},{key:"register",value:function(e){return de.a.post(he+"signup",{username:e.username,email:e.email,password:e.password,last_name:e.last_name,first_name:e.first_name,phone:e.phone,gender:e.gender,language:e.language})}}]),e}(),me=new pe,ge={updateSidebarWidth:function(e,t){var n=e.commit;n("UPDATE_SIDEBAR_WIDTH",t)},updateI18nLocale:function(e,t){var n=e.commit;n("UPDATE_I18N_LOCALE",t)},toggleContentOverlay:function(e){var t=e.commit;t("TOGGLE_CONTENT_OVERLAY")},updateTheme:function(e,t){var n=e.commit;n("UPDATE_THEME",t)},updateStarredPage:function(e,t){var n=e.commit;n("UPDATE_STARRED_PAGE",t)},arrangeStarredPagesLimited:function(e,t){var n=e.commit;n("ARRANGE_STARRED_PAGES_LIMITED",t)},arrangeStarredPagesMore:function(e,t){var n=e.commit;n("ARRANGE_STARRED_PAGES_MORE",t)},login:function(e,t){var n=e.commit;return me.login(t).then((function(e){return n("loginSuccess",e),Promise.resolve(e)}),(function(e){return n("loginFailure"),Promise.reject(e)}))},logout:function(e){var t=e.commit;me.logout(),t("logout")},register:function(e,t){var n=e.commit;return me.register(t).then((function(e){return n("registerSuccess"),Promise.resolve(e.data)}),(function(e){return n("registerFailure"),Promise.reject(e)}))}},fe=ge;r["default"].use(Y["a"]);var be=new Y["a"].Store({getters:re,mutations:se,state:ae,actions:fe,strict:!1}),ve=n("a925"),Ce={en:{Dashboard:"Dashboard",eCommerce:"eCommerce",Apps:"Apps",Todo:"Todo",Chat:"Chat",Email:"Email",Calendar:"Calendar",Shop:"Shop",Cart:"Cart",WishList:"Wish List",Checkout:"Checkout",UIElements:"UI Elements",DataList:"Data List",ListView:"List View",ThumbView:"Thumb View",Grid:"Grid",Vuesax:"Vuesax",Tailwind:"Tailwind",Colors:"Colors",Card:"Card",Basic:"Basic",Statistics:"Statistics",Analytics:"Analytics",CardActions:"Card Actions",Table:"Table",Components:"Components",Alert:"Alert",Avatar:"Avatar",Badge:"Badge",Breadcrumb:"Breadcrumb",Button:"Button",Chip:"Chip",Collapse:"Collapse",Dialogs:"Dialogs",Divider:"Divider",DropDown:"DropDown",List:"List",Loading:"Loading",Navbar:"Navbar",Notifications:"Notifications",Pagination:"Pagination",Popup:"Popup",Progress:"Progress",Sidebar:"Sidebar",Slider:"Slider",Tabs:"Tabs",Tooltip:"Tooltip",Upload:"Upload",Forms:"Forms",FormElements:"Form Elements",Select:"Select",Switch:"Switch",Checkbox:"Checkbox",Radio:"Radio",Input:"Input",NumberInput:"Number Input",Textarea:"Textarea",FormLayouts:"Form Layouts",FormWizard:"Form Wizard",FormValidation:"Form Validation",Pages:"Pages",Authentication:"Authentication",Login:"Login",Register:"Register",ForgotPassword:"Forgot Password",ResetPassword:"Reset Password",LockScreen:"Lock Screen",ComingSoon:"Coming Soon",Error:"Error",404:"404",500:"500",NotAuthorized:"Not Authorized",Maintenance:"Maintenance",Profile:"Profile",Invoice:"Invoice",FAQ:"FAQ",Search:"Search",KnowledgeBase:"Knowledge Base",ChartsAndMaps:"Charts & Maps",Charts:"Charts",ApexCharts:"Apex Charts",chartjs:"chartjs",echarts:"echarts",chartist:"chartist",GoogleMap:"Google Map",Extensions:"Extensions",QuillEditor:"Quill Editor",DragAndDrop:"Drag & Drop",Datepicker:"Datepicker",AccessControl:"Access Control",EditorView:"Editor View",AdminView:"Admin View",I18n:"I18n",Carousel:"Carousel",Clipboard:"Clipboard",ContextMenu:"Context Menu",Others:"Others",MenuLevels:"Menu Levels",MenuLevel2p1:"Menu Level 2.1",MenuLevel2p2:"Menu Level 2.2",MenuLevel3p1:"Menu Level 3.1",MenuLevel3p2:"Menu Level 3.2",DisabledMenu:"Disabled Menu",Support:"Support",Documentation:"Documentation",RaiseSupport:"Raise Support",demoTitle:"Card Title",demoText:"Cake sesame snaps cupcake gingerbread danish I love gingerbread. Apple pie pie jujubes chupa chups muffin halvah lollipop. Chocolate cake oat cake tiramisu marzipan sugar plum. Donut sweet pie oat cake dragée fruitcake cotton candy lemon drops."},de:{Dashboard:"Instrumententafel",eCommerce:"eCommerce",Apps:"Apps",Todo:"Machen",Chat:"Plaudern",Email:"Email",Calendar:"Kalender",Shop:"Geschäft",Cart:"Wagen",WishList:"Wunschzettel",Checkout:"Auschecken",UIElements:"Elemente der Benutzeroberfläche",DataList:"Datenliste",ListView:"Listenansicht",ThumbView:"Daumenansicht",Grid:"Gitter",Vuesax:"Vuesax",Tailwind:"Tailwind",Colors:"Farben",Card:"Karte",Basic:"Basic",Statistics:"Statistiken",Analytics:"Analytics",CardActions:"Kartenaktionen",Table:"Tabelle",Components:"Komponenten",Alert:"Warnen",Avatar:"Benutzerbild",Badge:"Abzeichen",Breadcrumb:"Breadcrumb",Button:"Taste",Chip:"Chip",Collapse:"Zusammenbruch",Dialogs:"Dialoge",Divider:"Teiler",DropDown:"Dropdown-Liste",List:"Liste",Loading:"Wird geladen",Navbar:"Navbar",Notifications:"Benachrichtigungen",Pagination:"Seitennummerierung",Popup:"Pop-up",Progress:"Fortschritt",Sidebar:"Seitenleiste",Slider:"Schieberegler",Tabs:"Tabs",Tooltip:"QuickInfo",Upload:"Hochladen",Forms:"Formen",FormElements:"Formularelemente",Select:"Wählen",Switch:"Schalter",Checkbox:"Ankreuzfeld",Radio:"Radio",Input:"Eingang",NumberInput:"Nummer eingeben",Textarea:"Textbereich",FormLayouts:"Formularlayouts",FormWizard:"Formzauberer",FormValidation:"Formularvalidierung",Pages:"Seiten",Authentication:"Authentifizierung",Login:"Anmeldung",Register:"Registrieren",ForgotPassword:"Passwort vergessen",ResetPassword:"Passwort zurücksetzen",LockScreen:"Bildschirm sperren",ComingSoon:"Demnächst",Error:"Error",404:"404",500:"500",NotAuthorized:"Nicht berechtigt",Maintenance:"Instandhaltung",Profile:"Profil",Invoice:"Rechnung",FAQ:"FAQ",Search:"Suche",KnowledgeBase:"Wissensbasis",ChartsAndMaps:"Diagramme und Karten",Charts:"Diagramme",ApexCharts:"Apex Charts",chartjs:"chartjs",echarts:"echarts",chartist:"chartist",GoogleMap:"Google Karte",Extensions:"Erweiterungen",QuillEditor:"Quill-Editor",DragAndDrop:"Ziehen und loslassen",Datepicker:"Datumsauswahl",AccessControl:"Zugangskontrolle",EditorView:"Editoransicht",AdminView:"Admin View",I18n:"I18n",Carousel:"Karussell",Clipboard:"Zwischenablage",ContextMenu:"Kontextmenü",Others:"Andere",MenuLevels:"Menüebenen",MenuLevel2p1:"Menüebene 2.1",MenuLevel2p2:"Menüebene 2.2",MenuLevel3p1:"Menüebene 3.1",MenuLevel3p2:"Menüebene 3.2",DisabledMenu:"Deaktiviertes Menü",Support:"Unterstützung",Documentation:"Dokumentation",RaiseSupport:"Unterstützung erheben",demoTitle:"Kartentitel",demoText:"Kuchen Sesam Schnaps Cupcake Lebkuchen Dänisch Ich liebe Lebkuchen. Apfelkuchen-Torte-Jujuben chupa chups muffin halvah Lutscher. Schokoladenkuchenhaferkuchen Tiramisu-Marzipanzuckerpflaume. Donut süße Kuchen Hafer Kuchen Dragée Obstkuchen Zuckerwatte Zitrone Tropfen."},fr:{Dashboard:"Tableau de bord",eCommerce:"commerce électronique",Apps:"APPLICATIONS",Todo:"Faire",Chat:"Bavarder",Email:"Email",Calendar:"Calendrier",Shop:"Boutique",Cart:"Chariot",WishList:"Liste de souhaits",Checkout:"Check-out",UIElements:"ELEMENTS D'UI",DataList:"Liste de données",ListView:"Voir la liste",ThumbView:"Thumb View",Grid:"la grille",Vuesax:"Vuesax",Tailwind:"Tailwind",Colors:"Couleurs",Card:"Carte",Basic:"De base",Statistics:"Statistiques",Analytics:"Analytique",CardActions:"Actions de carte",Table:"Table",Components:"Composants",Alert:"Alerte",Avatar:"Avatar",Badge:"Badge",Breadcrumb:"Breadcrumb",Button:"Bouton",Chip:"Puce",Collapse:"Effondrer",Dialogs:"Dialogues",Divider:"Diviseur",DropDown:"Menu déroulant",List:"liste",Loading:"Chargement",Navbar:"Barre de navigation",Notifications:"Les notifications",Pagination:"Pagination",Popup:"Apparaitre",Progress:"Le progrès",Sidebar:"Barre latérale",Slider:"Curseur",Tabs:"Onglets",Tooltip:"Info-bulle",Upload:"Télécharger",Forms:"Formes",FormElements:"Éléments de formulaire",Select:"Sélectionner",Switch:"Commutateur",Checkbox:"Case à cocher",Radio:"Radio",Input:"Contribution",NumberInput:"Nombre d'entrée",Textarea:"Textarea",FormLayouts:"Dispositions de formulaire",FormWizard:"Assistant de formulaire",FormValidation:"Validation du formulaire",Pages:"Pages",Authentication:"Authentification",Login:"S'identifier",Register:"registre",ForgotPassword:"Mot de passe oublié",ResetPassword:"réinitialiser le mot de passe",LockScreen:"Écran verrouillé",ComingSoon:"Arrive bientôt",Error:"Erreur",404:"404",500:"500",NotAuthorized:"Pas autorisé",Maintenance:"Entretien",Profile:"Profil",Invoice:"Facture d'achat",FAQ:"FAQ",Search:"Chercher",KnowledgeBase:"Base de connaissances",ChartsAndMaps:"Graphiques Et Cartes",Charts:"Graphiques",ApexCharts:"Apex Charts",chartjs:"chartjs",echarts:"echarts",chartist:"chartist",GoogleMap:"Google Carte",Extensions:"Extensions",QuillEditor:"Éditeur de piquants",DragAndDrop:"Drag & Drop",Datepicker:"Sélecteur de date",AccessControl:"Contrôle d'accès",EditorView:"Vue de l'éditeur",AdminView:"Vue administrateur",I18n:"I18n",Carousel:"Carrousel",Clipboard:"Presse-papiers",ContextMenu:"Menu contextuel",Others:"Autre",MenuLevels:"Niveaux de menu",MenuLevel2p1:"Niveau de menu 2.1",MenuLevel2p2:"Niveau de menu 2.2",MenuLevel3p1:"Niveau de menu 3.1",MenuLevel3p2:"Niveau de menu 3.2",DisabledMenu:"Menu désactivé",Support:"Soutien",Documentation:"Documentation",RaiseSupport:"Augmenter le soutien",demoTitle:"Titre de la carte",demoText:"Le gâteau au sésame s'enclenche au petit pain au pain d'épices danois J'adore le pain d'épices. Tarte aux pommes et jujubes chupa chups muffin halvah sucette. Tiramisu gâteau au chocolat gâteau d'avoine tiramisu prune sucre. Donut tarte sucrée gâteau à l'avoine dragée gouttes de fruits gâteau au citron en barbe à papa."},pt:{Dashboard:"painel de controle",eCommerce:"comércio eletrônico",Apps:"APPS",Todo:"Façam",Chat:"Bate-papo",Email:"O email",Calendar:"Calendário",Shop:"fazer compras",Cart:"Carrinho",WishList:"Lista de Desejos",Checkout:"Confira",UIElements:"UI Elementos",DataList:"Lista de dados",ListView:"Exibição de lista",ThumbView:"Thumb View",Grid:"Grade",Vuesax:"Vuesax",Tailwind:"Tailwind",Colors:"Cores",Card:"Cartão",Basic:"Basic",Statistics:"Estatisticas",Analytics:"Analytics",CardActions:"Ações do Cartão",Table:"Mesa",Components:"Componentes",Alert:"Alerta",Avatar:"Avatar",Badge:"Crachá",Breadcrumb:"Breadcrumb",Button:"Botão",Chip:"Lasca",Collapse:"Colapso",Dialogs:"Diálogos",Divider:"Divisor",DropDown:"Suspenso",List:"Lista",Loading:"Carregando",Navbar:"Navbar",Notifications:"Notificações",Pagination:"Paginação",Popup:"Aparecer",Progress:"Progresso",Sidebar:"Barra Lateral",Slider:"Controle Deslizante",Tabs:"Guias",Tooltip:"dica de ferramenta",Upload:"Envio",Forms:"Formulários",FormElements:"Elementos do formulário",Select:"Selecione",Switch:"Interruptor",Checkbox:"Caixa de seleção",Radio:"Rádio",Input:"Entrada",NumberInput:"Entrada numérica",Textarea:"Textarea",FormLayouts:"Layouts de formulário",FormWizard:"Assistente de Formulário",FormValidation:"Validação de Formulário",Pages:"PÁGINAS",Authentication:"Autenticação",Login:"Entrar",Register:"Registo",ForgotPassword:"Esqueceu A Senha",ResetPassword:"Redefinir Senha",LockScreen:"Tela de bloqueio",ComingSoon:"Em breve",Error:"Erro",404:"404",500:"500",NotAuthorized:"Não autorizado",Maintenance:"Manutenção",Profile:"Perfil",Invoice:"Fatura",FAQ:"Perguntas frequentes",Search:"Procurar",KnowledgeBase:"Base de Conhecimento",ChartsAndMaps:"Gráficos E Mapas",Charts:"Gráficos",ApexCharts:"Apex Charts",chartjs:"chartjs",echarts:"echarts",chartist:"chartist",GoogleMap:"Google Mapa",Extensions:"Extensão",QuillEditor:"Quill-Editor",DragAndDrop:"Arraste e solte",Datepicker:"Datepicker",AccessControl:"Controle de acesso",EditorView:"Editor View",AdminView:"Vista de administração",I18n:"I18n",Carousel:"Carrossel",Clipboard:"Prancheta",ContextMenu:"Menu contextual",Others:"Outras",MenuLevels:"Níveis de Menu",MenuLevel2p1:"Nível de menu 2.1",MenuLevel2p2:"Nível de menu 2.2",MenuLevel3p1:"Nível de menu 3.1",MenuLevel3p2:"Nível de menu 3.2",DisabledMenu:"Menu desativado",Support:"Apoio, suporte",Documentation:"Documentação",RaiseSupport:"Levantar Suporte",demoTitle:"Título do cartão",demoText:"O sésamo do bolo agarra dinamarquês do pão-de-espécie do queque eu amo o pão-de-espécie. Torta de torta de maçã jujuba chupa chups muffin halvah pirulito. Ameixa do açúcar do maçapão do tiramisu do bolo da aveia do bolo de chocolate. Bolo de aveia de torta doce rosquinha dragée fruitcake algodão doce gotas de limão."}};r["default"].use(ve["a"]);var Ae=new ve["a"]({locale:"en",messages:Ce});n("ac6a"),n("6b54");r["default"].filter("capitalize",(function(e){if(!e)return"";e=e.toString();var t=e.split(" "),n=[];return t.forEach((function(e){var t=e.charAt(0).toUpperCase()+e.slice(1);n.push(t)})),n.join(" ")})),r["default"].filter("truncate",(function(e,t){return e.substring(0,t)})),r["default"].filter("tailing",(function(e,t){return e+t})),r["default"].filter("time",(function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(e){var n=new Date(Date.parse(e)),a=n.getHours(),o=(n.getMinutes()<10?"0":"")+n.getMinutes();if(!t){var r=a>12?"AM":"PM";return a=a%12||12,a+":"+o+" "+r}return a+":"+o}})),r["default"].filter("date",(function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e=String(e);var n=e.slice(8,10).trim(),a=e.slice(4,7).trim(),o=e.slice(11,15);return t?n+" "+a+" "+o:n+" "+a})),r["default"].filter("csv",(function(e){return e.join(", ")})),r["default"].filter("filter_tags",(function(e){return e.replace(/<\/?[^>]+(>|$)/g,"")})),r["default"].filter("k_formatter",(function(e){return e>999?(e/1e3).toFixed(1)+"k":e}));var xe=n("7bb1");n("c197"),n("84bf");r["default"].use(g.a),r["default"].use(xe["a"]),n("3a10"),r["default"].config.productionTip=!1,new r["default"]({router:Z,store:be,i18n:Ae,render:function(e){return e(p)}}).$mount("#app")},"5aea":function(e,t,n){},"6bf0":function(e,t,n){},"70d7":function(e,t,n){"use strict";var a=n("5002"),o=n.n(a);o.a},"89b8":function(e,t,n){"use strict";var a=n("6bf0"),o=n.n(a);o.a},c1c3:function(e,t,n){},dca1:function(e,t,n){"use strict";var a=n("e5fc"),o=n.n(a);o.a},e5fc:function(e,t,n){}});
//# sourceMappingURL=app.a8cdf6e7.js.map