(function(){"use strict";var e={381:function(e,t,i){var n=i(471),r=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"wrapper",class:this.$store.getters.isDarkMode?"dark":""},[t("Aside"),t("main",[t("router-view")],1)],1)},s=[],a=i(635),l=i(603),o=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"aside",class:e.asidehide?"hide":""},[t("router-link",{staticClass:"aside__logo",attrs:{to:"/"}},[e._v(" Do­Jobs")]),t("User"),t("nav",{staticClass:"aside__nav",class:e.burger?"open":""},[t("router-link",{attrs:{to:"/"}},[t("i",{staticClass:"fa-solid fa-table-columns"}),t("span",[e._v("Dashboard")])]),t("div",{staticClass:"aside__item",class:e.item1?"open":""},[t("p",{on:{click:e.item1Toggle}},[e._m(0),t("i",{staticClass:"fa-solid fa-chevron-down"})]),t("ul",[t("li",[t("router-link",{attrs:{to:"/message1"}},[t("i",{staticClass:"fa-solid fa-list"}),t("span",[e._v("Пункт 1")])])],1),t("li",[t("router-link",{attrs:{to:"/message2"}},[t("i",{staticClass:"fa-solid fa-ruler"}),t("span",[e._v("Пункт 2")])])],1)])]),t("router-link",{attrs:{to:"/settings"}},[t("i",{staticClass:"fa-solid fa-sliders"}),t("span",[e._v(" Settings ")])]),t("router-link",{attrs:{to:"/user"}},[t("i",{staticClass:"fa-solid fa-user"}),t("span",[e._v("User")])]),t("div",{staticClass:"aside__bottom"},[t("div",{staticClass:"aside__descr"},[t("p",[e._v(" Color Scheme ")]),t("div",{staticClass:"aside__info",class:e.info?"open":""},[t("i",{staticClass:"fa-solid fa-circle-info",on:{click:e.infoToggle}}),t("p",[e._v(" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima laudantium facilis. ")])])]),t("div",{staticClass:"aside__scheme",class:e.isDarkMode?"dark":""},[t("button",{on:{click:e.lightMode}},[t("i",{staticClass:"fa-solid fa-sun"}),t("span",[e._v(" Light ")])]),t("button",{on:{click:e.darkMode}},[t("i",{staticClass:"fa-solid fa-moon"}),t("span",[e._v(" Dark ")])])])])],1),t("div",{staticClass:"aside__toggle",on:{click:e.asideToggle}},[t("i",{staticClass:"fa-solid fa-chevron-left"})]),t("div",{staticClass:"aside__burger",on:{click:e.burgerToggle}},[t("div",{staticClass:"aside__burger-wrapper",class:e.burger?"active":""},[t("span")])])],1)},u=[function(){var e=this,t=e._self._c;e._self._setupProxy;return t("span",[t("i",{staticClass:"fa-solid fa-message"}),t("b",[e._v("Message")])])}],c=i(353),p=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("router-link",{staticClass:"user",attrs:{to:"/user"}},[t("div",{staticClass:"user__image"},[t("i",{staticClass:"fa-solid fa-user"})]),t("div",{staticClass:"user__right"},[t("div",{staticClass:"user__name"},[e._v(" John Doe ")]),t("div",{staticClass:"user__mail"},[e._v(" johndoe@gmail.com ")])])])},d=[],f=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return(0,a.C6)(t,e),t=(0,a.Cg)([l.uA],t),t}(l.lD),_=f,v=_,g=i(656),b=(0,g.A)(v,p,d,!1,null,"b019f920",null),h=b.exports,m=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return Object.defineProperty(t,"asidehide",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(t,"burger",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(t,"item1",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(t,"info",{enumerable:!0,configurable:!0,writable:!0,value:!1}),t}return(0,a.C6)(t,e),Object.defineProperty(t.prototype,"burgerToggle",{enumerable:!1,configurable:!0,writable:!0,value:function(){this.burger=!this.burger}}),Object.defineProperty(t.prototype,"asideToggle",{enumerable:!1,configurable:!0,writable:!0,value:function(){this.asidehide=!this.asidehide}}),Object.defineProperty(t.prototype,"item1Toggle",{enumerable:!1,configurable:!0,writable:!0,value:function(){this.item1=!this.item1}}),Object.defineProperty(t.prototype,"infoToggle",{enumerable:!1,configurable:!0,writable:!0,value:function(){this.info=!this.info}}),Object.defineProperty(t.prototype,"onRouteChange",{enumerable:!1,configurable:!0,writable:!0,value:function(){this.burger=!1}}),(0,a.Cg)([(0,l.ox)("$route")],t.prototype,"onRouteChange",null),t=(0,a.Cg)([(0,l.uA)({components:{User:h},methods:(0,a.Cl)((0,a.Cl)({},(0,c.i0)(["darkMode"])),(0,c.i0)(["lightMode"])),computed:(0,a.Cl)({},(0,c.L8)(["isDarkMode"]))})],t),t}(l.lD),C=m,y=C,A=(0,g.A)(y,o,u,!1,null,"7617e343",null),P=A.exports,k=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return(0,a.C6)(t,e),t=(0,a.Cg)([(0,l.uA)({components:{Aside:P}})],t),t}(l.lD),D=k,w=D,x=(0,g.A)(w,r,s,!1,null,null,null),O=x.exports,j=i(173),M=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("Home")},T=[],S=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"home"},[t("div",{staticClass:"cards"},[e._l(e.stats,(function(e){return t("Card",{key:e.id,staticClass:"item",attrs:{stat:e}})})),t("div",{staticClass:"item"},[t("div",{staticClass:"item__sbtw"},[t("ul",{staticClass:"item__name"},e._l(e.stats,(function(i){return t("li",{key:i.id,class:i.color},[e._v(" "+e._s(i.name)+" ")])})),0),t("div",{staticClass:"item__percent"},[t("b",[e._v(" "+e._s(e.totalPercent)+"% ")]),t("div",{staticClass:"item__progress"},[t("p",e._l(e.stats,(function(e){return t("span",{key:e.id,class:e.color,style:{width:e.percent+"%"}})})),0)])])])])],2),t("div",{staticClass:"grid"},[t("div",{staticClass:"item"},[t("div",{staticClass:"distances"},e._l(e.distance,(function(e){return t("DistanceCard",{key:e.id,attrs:{distance:e}})})),1)]),t("div",{staticClass:"item"},[t("p",{staticClass:"item__title"},[e._v("Job Details")]),t("Series",{attrs:{series:e.series}})],1)]),t("div",{staticClass:"grid"},e._l(e.graph,(function(i){return t("div",{key:i.id,staticClass:"item"},[t("p",{staticClass:"item__title"},[e._v("Statistic Graph")]),t("Graph",{attrs:{graph:i}})],1)})),0)])},E=[],G=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return Object.defineProperty(t,"graph",{enumerable:!0,configurable:!0,writable:!0,value:[{id:1,content:["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus laudantium deserunt ducimus magni voluptate deleniti eligendi beatae alias harum? Expedita sed rem amet illum pariatur, ratione nihil hic aliquid reprehenderit!","Accusamus laudantium deserunt ducimus magni voluptate deleniti eligendi beatae alias harum? Expedita sed rem amet illum pariatur"]},{id:2,content:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxsYVJLf86IJTsmRkTOK-TtWbBMrxd-xierw&s","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuH5rc3mnhwUYTII11cJX5fpYfGAjBKrnhUA&s"]}]}),t}return(0,a.C6)(t,e),t=(0,a.Cg)([l.uA],t),t}(l.lD),I=G,J=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return Object.defineProperty(t,"series",{enumerable:!0,configurable:!0,writable:!0,value:[{id:1,series:"Series-1",point:21,percent1:1.21,percent2:6.22},{id:2,series:"Series-2",point:34,percent1:2.34,percent2:5.71},{id:3,series:"Series-3",point:45,percent1:1.47,percent2:4.35},{id:4,series:"Series-4",point:66,percent1:2.17,percent2:7.11},{id:5,series:"Series-5",point:72,percent1:3.66,percent2:4.25}]}),t}return(0,a.C6)(t,e),t=(0,a.Cg)([l.uA],t),t}(l.lD),U=J,L=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return Object.defineProperty(t,"stats",{enumerable:!0,configurable:!0,writable:!0,value:[{id:1,count:2559,name:"Job Applicant",percent:42,icon:"fa-solid fa-briefcase",color:"purple"},{id:2,count:217,name:"Conform Employee",percent:28,icon:"fa-solid fa-check-to-slot",color:"green"},{id:3,count:72,name:"Job Pending",percent:16,icon:"fa-solid fa-hourglass-end",color:"yellow"}]}),t}return(0,a.C6)(t,e),t=(0,a.Cg)([l.uA],t),t}(l.lD),q=L,H=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return Object.defineProperty(t,"distance",{enumerable:!0,configurable:!0,writable:!0,value:[{id:1,count:1650,percent:80,color:"purple"},{id:2,count:1239,percent:70,color:"green"},{id:3,count:850,percent:66,color:"yellow"},{id:4,count:1129,percent:50,color:"blue"}]}),t}return(0,a.C6)(t,e),t=(0,a.Cg)([l.uA],t),t}(l.lD),R=H,K=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return(0,a.C6)(t,e),t=(0,a.Cg)([l.uA],t),t}((0,l.Xe)(I,U,q,R)),X=K,Y=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"card"},[t("div",{staticClass:"card__icon",class:e.stat.color},[t("i",{class:e.stat.icon})]),t("div",{staticClass:"card__count"},[e._v(e._s(e.stat.count)+"+")]),t("div",{staticClass:"card__title"},[e._v(e._s(e.stat.name))]),t("div",{staticClass:"card__percent",class:e.stat.color},[t("b",[e._v(" "+e._s(e.stat.percent)+"% ")]),t("p",[t("span",{style:"width:"+e.stat.percent+"%"})])])])},$=[],B=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return Object.defineProperty(t,"stat",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),t}return(0,a.C6)(t,e),(0,a.Cg)([(0,l.kv)({required:!0})],t.prototype,"stat",void 0),t=(0,a.Cg)([l.uA],t),t}(l.lD),N=B,W=N,F=(0,g.A)(W,Y,$,!1,null,"b098cf1c",null),Q=F.exports,V=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"distance-card",class:e.distance.color},[t("div",{staticClass:"distance-card__count"},[e._v(e._s(e.distance.count))]),t("div",{staticClass:"distance-card__title"},[e._v("Total Distance")]),t("div",{staticClass:"distance-card__percent"},[t("span",{style:"height:"+e.distance.percent+"%"},[t("b",[e._v(" "+e._s(e.distance.percent)+"% ")])])])])},z=[],Z=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return Object.defineProperty(t,"distance",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),t}return(0,a.C6)(t,e),(0,a.Cg)([(0,l.kv)({required:!0})],t.prototype,"distance",void 0),t=(0,a.Cg)([l.uA],t),t}(l.lD),ee=Z,te=ee,ie=(0,g.A)(te,V,z,!1,null,"39d6af85",null),ne=ie.exports,re=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"series"},[t("table",[e._m(0),t("tbody",e._l(e.series,(function(i){return t("tr",{key:i.id},[t("td",[e._v(e._s(i.series))]),t("td",[e._v(e._s(i.point))]),t("td",[e._v(e._s(i.percent1))]),t("td",[e._v(e._s(i.percent2))])])})),0)])])},se=[function(){var e=this,t=e._self._c;e._self._setupProxy;return t("thead",[t("tr",[t("th",[e._v("Series")]),t("th",[e._v("Point")]),t("th",[e._v("%")]),t("th",[e._v("%")])])])}],ae=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return Object.defineProperty(t,"series",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),t}return(0,a.C6)(t,e),(0,a.Cg)([(0,l.kv)()],t.prototype,"series",void 0),t=(0,a.Cg)([l.uA],t),t}(l.lD),le=ae,oe=le,ue=(0,g.A)(oe,re,se,!1,null,"5b0c2edb",null),ce=ue.exports,pe=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"graph"},[t("div",{staticClass:"graph__nav"},e._l(e.tabs,(function(i,n){return t("p",{key:n,class:{active:e.activeTab===n},on:{click:function(t){return e.changeTab(n)}}},[e._v(" "+e._s(i.label)+" ")])})),0),t("div",{staticClass:"graph__content"},[0===e.activeTab?t("div",[e.isUrl(e.graph.content[0])?t("img",{attrs:{src:e.graph.content[0],alt:""}}):t("p",[e._v(" "+e._s(e.graph.content[0])+" ")])]):e._e(),1===e.activeTab?t("div",[e.isUrl(e.graph.content[1])?t("img",{attrs:{src:e.graph.content[1],alt:""}}):t("p",[e._v(" "+e._s(e.graph.content[1])+" ")])]):e._e()])])},de=[],fe=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return Object.defineProperty(t,"graph",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(t,"tabs",{enumerable:!0,configurable:!0,writable:!0,value:[{label:"All Statistic"},{label:"All Chart"}]}),Object.defineProperty(t,"activeTab",{enumerable:!0,configurable:!0,writable:!0,value:0}),t}return(0,a.C6)(t,e),Object.defineProperty(t.prototype,"changeTab",{enumerable:!1,configurable:!0,writable:!0,value:function(e){this.activeTab=e}}),Object.defineProperty(t.prototype,"isUrl",{enumerable:!1,configurable:!0,writable:!0,value:function(e){return e.startsWith("http")}}),(0,a.Cg)([(0,l.kv)()],t.prototype,"graph",void 0),t=(0,a.Cg)([l.uA],t),t}(l.lD),_e=fe,ve=_e,ge=(0,g.A)(ve,pe,de,!1,null,"63da33ec",null),be=ge.exports,he=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return(0,a.C6)(t,e),Object.defineProperty(t.prototype,"totalPercent",{get:function(){return this.stats.reduce((function(e,t){return e+t.percent}),0)},enumerable:!1,configurable:!0}),t=(0,a.Cg)([(0,l.uA)({components:{Card:Q,DistanceCard:ne,Series:ce,Graph:be}})],t),t}((0,l.Xe)(X)),me=he,Ce=me,ye=(0,g.A)(Ce,S,E,!1,null,"a60464ee",null),Ae=ye.exports,Pe=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return(0,a.C6)(t,e),t=(0,a.Cg)([(0,l.uA)({components:{Home:Ae}})],t),t}(l.lD),ke=Pe,De=ke,we=(0,g.A)(De,M,T,!1,null,null,null),xe=we.exports,Oe=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("DefaultPage",[e._v(" Страница пользователя ")])},je=[],Me=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"default"},[e._t("default")],2)},Te=[],Se=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return(0,a.C6)(t,e),t=(0,a.Cg)([l.uA],t),t}(l.lD),Ee=Se,Ge=Ee,Ie=(0,g.A)(Ge,Me,Te,!1,null,"9060e69c",null),Je=Ie.exports,Ue=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return(0,a.C6)(t,e),t=(0,a.Cg)([(0,l.uA)({components:{DefaultPage:Je}})],t),t}(l.lD),Le=Ue,qe=Le,He=(0,g.A)(qe,Oe,je,!1,null,null,null),Re=He.exports,Ke=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("DefaultPage",[e._v(" Страница параметров ")])},Xe=[],Ye=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return(0,a.C6)(t,e),t=(0,a.Cg)([(0,l.uA)({components:{DefaultPage:Je}})],t),t}(l.lD),$e=Ye,Be=$e,Ne=(0,g.A)(Be,Ke,Xe,!1,null,null,null),We=Ne.exports,Fe=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("DefaultPage",[e._v(" Страница Сообщений - Первая ")])},Qe=[],Ve=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return(0,a.C6)(t,e),t=(0,a.Cg)([(0,l.uA)({components:{DefaultPage:Je}})],t),t}(l.lD),ze=Ve,Ze=ze,et=(0,g.A)(Ze,Fe,Qe,!1,null,null,null),tt=et.exports,it=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("DefaultPage",[e._v(" Страница Сообщений - Вторая ")])},nt=[],rt=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return(0,a.C6)(t,e),t=(0,a.Cg)([(0,l.uA)({components:{DefaultPage:Je}})],t),t}(l.lD),st=rt,at=st,lt=(0,g.A)(at,it,nt,!1,null,null,null),ot=lt.exports;n.Ay.use(j.Ay);var ut=[{path:"/",name:"home",component:xe},{path:"/user",name:"user",component:Re},{path:"/settings",name:"settings",component:We},{path:"/message1",name:"message1",component:tt},{path:"/message2",name:"message2",component:ot}],ct=new j.Ay({routes:ut}),pt=ct;n.Ay.use(c.Ay);var dt=localStorage.getItem("darkMode"),ft="true"==dt,_t=new c.Ay.Store({state:{isDarkMode:ft},mutations:{DARK_MODE:function(e){e.isDarkMode=!0,localStorage.setItem("darkMode",e.isDarkMode.toString())},LIGHT_MODE:function(e){e.isDarkMode=!1,localStorage.setItem("darkMode",e.isDarkMode.toString())}},actions:{darkMode:function(e){var t=e.commit;t("DARK_MODE")},lightMode:function(e){var t=e.commit;t("LIGHT_MODE")}},getters:{isDarkMode:function(e){return e.isDarkMode}}});n.Ay.config.productionTip=!1,new n.Ay({router:pt,store:_t,render:function(e){return e(O)}}).$mount("#app")}},t={};function i(n){var r=t[n];if(void 0!==r)return r.exports;var s=t[n]={exports:{}};return e[n](s,s.exports,i),s.exports}i.m=e,function(){var e=[];i.O=function(t,n,r,s){if(!n){var a=1/0;for(c=0;c<e.length;c++){n=e[c][0],r=e[c][1],s=e[c][2];for(var l=!0,o=0;o<n.length;o++)(!1&s||a>=s)&&Object.keys(i.O).every((function(e){return i.O[e](n[o])}))?n.splice(o--,1):(l=!1,s<a&&(a=s));if(l){e.splice(c--,1);var u=r();void 0!==u&&(t=u)}}return t}s=s||0;for(var c=e.length;c>0&&e[c-1][2]>s;c--)e[c]=e[c-1];e[c]=[n,r,s]}}(),function(){i.d=function(e,t){for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};i.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,s,a=n[0],l=n[1],o=n[2],u=0;if(a.some((function(t){return 0!==e[t]}))){for(r in l)i.o(l,r)&&(i.m[r]=l[r]);if(o)var c=o(i)}for(t&&t(n);u<a.length;u++)s=a[u],i.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return i.O(c)},n=self["webpackChunknew_vue"]=self["webpackChunknew_vue"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=i.O(void 0,[504],(function(){return i(381)}));n=i.O(n)})();
//# sourceMappingURL=app.f8db8197.js.map