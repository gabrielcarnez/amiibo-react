(this["webpackJsonpamiibo-react"]=this["webpackJsonpamiibo-react"]||[]).push([[0],{44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(1),r=a.n(c),i=a(16),s=a.n(i),o=a(3),l=a(21),d=a.n(l),j=a(34),u=a(15),b=(a(44),function(e){var t=e.list,a=e.title;return Object(n.jsxs)("div",{className:"LinkList","data-testid":"LinkList",children:[a&&Object(n.jsx)("h3",{children:a}),t&&t.map((function(e,t){return Object(n.jsxs)(r.a.Fragment,{children:[Object(n.jsx)("a",{href:e.link,target:"_blank",className:"w3-large",rel:"noopener noreferrer",children:e.text}),Object(n.jsx)("br",{})]},"link-".concat(t))}))]})});b.defaultProps={title:""};var f=b,O=(a(45),function(e){var t=e.madeWith,a=e.personal,c=e.description,r=e.name;return Object(n.jsx)("footer",{className:"Footer w3-container w3-padding-32 w3-dark-grey",children:Object(n.jsxs)("div",{className:"w3-row-padding",children:[Object(n.jsxs)("div",{className:"w3-third",children:[Object(n.jsx)("h3",{children:r}),Object(n.jsx)("small",{dangerouslySetInnerHTML:{__html:c}})]}),Object(n.jsx)("div",{className:"w3-third",children:Object(n.jsx)(f,{title:"Made with...",list:t})}),Object(n.jsx)("div",{className:"w3-third",children:Object(n.jsx)(f,{title:"Contact:",list:a})})]})})});O.defaultProps={};var p=O,h=(a(46),a(47),a(48),function(e){var t=e.event,a=e.value;return Object(n.jsx)("input",{onChange:t,type:"text",name:"input-search",className:"input-search",placeholder:"Mario",value:a})});h.defaultProps={};var m=h,v=(a(49),function(e){var t=e.event,a=e.checked;return Object(n.jsx)("input",{onChange:t,type:"checkbox",name:"input-search",checked:a,className:"input-search",placeholder:"Mario"})});v.defaultProps={};var x=v,g=a(5),w="INPUT_SEARCH",N="FAVORITE",y="SET_PAGE",S=function(e){return{type:y,payload:e}},P=function(){var e=Object(g.c)(),t=Object(g.d)((function(e){return e.page})).page,a=Object(g.d)((function(e){return e.filters})),c=a.text,r=a.favorites;return Object(n.jsxs)("div",{className:"w3-row",children:[Object(n.jsx)("div",{className:"w3-col w3-center"}),Object(n.jsxs)("div",{className:"w3-col w3-center",children:[Object(n.jsx)("small",{className:"header-search",children:Object(n.jsx)(m,{event:function(a){e(function(e){return{type:w,payload:e}}(a.target.value)),1!==t&&e(S(1))},value:c})}),Object(n.jsxs)("small",{className:"header-search input-filter",children:[Object(n.jsx)("label",{className:"input-filter",children:"My favorites"}),Object(n.jsx)(x,{event:function(a){var n;e((n=a.target.checked,{type:N,payload:n})),1!==t&&e(S(1))},checked:r})]})]}),Object(n.jsx)("div",{className:"w3-col w3-center"})]})},k=a(13),C=a(4),A=function(e){var t=e.match,a=e.name,c=e.subTitle,r=t.isExact;return Object(n.jsx)("header",{className:"Header",id:"portfolio",children:Object(n.jsxs)("div",{className:"w3-container",children:[Object(n.jsxs)("h1",{children:[Object(n.jsx)("b",{children:a}),Object(n.jsx)("br",{}),Object(n.jsx)("small",{className:"description-header",children:c})]}),Object(n.jsx)("div",{className:"w3-section w3-bottombar w3-padding-16 w3-bottombar-header"}),r&&Object(n.jsx)(P,{}),!r&&Object(n.jsx)("p",{className:" w3-center",children:Object(n.jsxs)(k.b,{className:"w3-container",to:"/",children:[Object(n.jsx)("i",{className:"fa fa-arrow-left"})," Back"]})})]})})};A.defaultProps={};var I=Object(C.f)(A),E=a(10),T=function(e){return localStorage.getItem(e)||!1},L=function(e){return T(e)?JSON.parse(localStorage.getItem(e)):[]},F=function(e,t){var a=[];T(e)&&(a=JSON.parse(localStorage.getItem(e))),a.push(t),localStorage.setItem(e,JSON.stringify(a))},_=function(e){var t=[];return T(e)&&(t=JSON.parse(localStorage.getItem(e))),localStorage.setItem(e,JSON.stringify(t)),t},M=function(e,t){return L(e).find((function(e){return JSON.stringify(t)===JSON.stringify(e)}))},J=a(18),B=a.n(J),R="FETCH_AMIIBO_REQUEST",H="FETCH_AMIIBO_SUCCESS",U="FETCH_AMIIBO_FAILURE",W="SET_FAVORITE",D=function(){return function(e){e({type:R}),B.a.get("https://amiiboapi.com/api/amiibo/").then((function(t){_("amiibo-favorites");var a=t.data.amiibo.map((function(e,t){var a=!!M("amiibo-favorites",e);return Object(o.a)(Object(o.a)({},e),{},{favorite:a,index:t})}));e({type:H,payload:a})})).catch((function(t){e(function(e){return{type:U,payload:e}}(":( an error ocurrent, please try again"))}))}},V={loading:!1,data:[],error:null},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R:return Object(o.a)(Object(o.a)({},e),{},{loading:!0});case H:return Object(o.a)(Object(o.a)({},e),{},{data:t.payload,loading:!1,error:null});case U:return Object(o.a)(Object(o.a)({},e),{},{error:t.payload,loading:!1,data:[]});case W:var a=e.data[t.payload].favorite;e.data[t.payload].favorite=!a;var n=Object.assign({},e.data[t.payload]);return delete n.favorite,delete n.index,F("amiibo-favorites",n),e;default:return e}},G={page:1},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object(o.a)(Object(o.a)({},e),{},{page:t.payload});default:return e}},q={text:"",favorites:!1},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(o.a)(Object(o.a)({},e),{},{text:t.payload});case N:return Object(o.a)(Object(o.a)({},e),{},{favorites:t.payload});default:return e}},X=Object(E.combineReducers)({amiibo:z,page:Q,filters:K}),Y=a(36),Z=a(37),$=Object(E.createStore)(X,Object(Y.composeWithDevTools)(Object(E.applyMiddleware)(Z.a))),ee=(a(73),a(74),a(75),a(76),function(e){var t=e.data,a=(e.position,t.image),c=t.name,r=t.favorite,i=t.index;return Object(n.jsx)(k.b,{to:"detail/".concat(i),children:Object(n.jsxs)("div",{className:"w3-third w3-container w3-margin-bottom content-card",children:[r&&Object(n.jsx)("i",{className:"fa fa-star"}),Object(n.jsx)("img",{loading:"lazy",src:a,alt:"Norway",className:"w3-hover-opacity img-style"}),Object(n.jsx)("div",{className:"w3-container w3-white",children:Object(n.jsx)("p",{className:"text-card",children:Object(n.jsx)("b",{children:c})})})]})})});ee.defaultProps={};var te=ee,ae=function(e){var t=e.elements,a=e.active,c=e.index;return Object(n.jsx)("div",{style:{display:a?"":"none"},className:"Page","data-testid":"Page",children:t&&t.map((function(e,t){return Object(n.jsx)(te,{data:e,position:10*c+t},"card-".concat(t))}))})};ae.defaultProps={};var ne=ae,ce=(a(77),function(e){for(var t=e.pageNumber,a=e.setPage,c=e.pageActive,r=[],i=function(e){var t;r.push(Object(n.jsx)("span",{onClick:function(){a(e)},className:(t=c===e,t?"link-page w3-bar-item w3-red w3-button":"link-page w3-bar-item w3-button w3-hover-red"),children:e},"pagination-".concat(e)))},s=1;s<=t;s++)i(s);return r}),re=function(e){var t=e.pageNumber,a=e.setPage,c=e.pageActive;return Object(n.jsx)("div",{className:"w3-row-padding w3-center w3-padding-32",children:Object(n.jsx)("div",{className:"w3-bar",children:ce({pageNumber:t,setPage:a,pageActive:c})})})};re.defaultProps={};var ie=re,se=(a(78),function(e){var t=e.error,a=e.children;return Object(n.jsxs)("div",{className:"w3-container w3-center",children:[Object(n.jsx)("h1",{children:t}),a]})});se.defaultProps={};var oe=se,le=(a(79),function(){return Object(n.jsx)("div",{className:"loader",children:"Loading..."})}),de=(a(80),function(){return Object(n.jsxs)("div",{className:"w3-panel w3-pale-yellow w3-display-container w3-border",children:[Object(n.jsx)("h3",{children:":("}),Object(n.jsx)("p",{children:"No result."})]})}),je=(a(81),function(e){var t=e.onClick,a=e.color,c=e.text;return Object(n.jsx)("button",{onClick:function(){return t()},className:"w3-button w3-".concat(a),children:c})});je.defaultProps={onClick:function(){},color:"black"};var ue=je,be=function(e){var t=e.setPage,a=e.fetchAmiboos,c=(Object(g.c)(),Object(g.d)((function(e){return e.amiibo}))),r=Object(g.d)((function(e){return e.page})),i=Object(g.d)((function(e){return e.filters})),s=i.text,o=i.favorites,l=c.loading,d=c.error,j=c.data,u=!l&&j.length&&!d;o&&(j=j.filter((function(e){return e.favorite}))),s.length&&(j=j.filter((function(e){return-1!==JSON.stringify(e).toLocaleLowerCase().indexOf(s.toLocaleLowerCase())})));var b=u&&function(e,t){var a=0,n=[];for(a=0;a<e.length;a+=t){var c=e.slice(a,a+t);n.push(c)}return n}(j,10);return Object(n.jsxs)("div",{className:"page-content row w3-row-padding",children:[l&&Object(n.jsx)(le,{}),d&&!l&&Object(n.jsx)(oe,{error:d,children:Object(n.jsx)(ue,{text:"Reload",color:"red",onClick:a})}),u&&b.map((function(e,t){return Object(n.jsx)(ne,{active:t+1===r.page,elements:e,index:t},'"page-"'.concat(t))})),u&&b.length>1&&Object(n.jsx)(ie,{setPage:t,pageActive:r.page,pageNumber:b.length}),u&&!b.length&&Object(n.jsx)(de,{})]})};be.defaultProps={};var fe=Object(g.b)(null,(function(e){return Object(E.bindActionCreators)({setPage:S,fetchAmiboos:D},e)}))(be),Oe=function(e){var t=e.fetchAmiboos,a=Object(g.d)((function(e){return e.amiibo})),c=a.data,r=a.error,i=a.loading;return c.length||r||i||t(),Object(n.jsx)(fe,{})};Oe.defaultProps={};var pe=Object(g.b)(null,(function(e){return Object(E.bindActionCreators)({fetchAmiboos:D},e)}))(Oe),he=(a(82),a(83),a(84),function(e){var t=Object(g.c)(),a=e.favorite,r=e.amiiboSeries,i=e.character,s=e.gameSeries,o=e.name,l=e.release,d=e.position,j=Object(c.useState)(a),b=Object(u.a)(j,2),f=b[0],O=b[1];return Object(n.jsxs)("div",{className:"w3-container w3-padding-large",style:{marginBottom:"32px"},children:[Object(n.jsxs)("h2",{onClick:function(){t({type:W,payload:d}),O(!f)},children:[Object(n.jsx)("i",{className:f?"icon-fav fa fa-star":"icon-fav fa fa-star-o"})," ",Object(n.jsxs)("b",{children:[o,"-",a]})]}),Object(n.jsxs)("ul",{children:[Object(n.jsxs)("li",{children:["Amiibo Series: ",r]}),Object(n.jsxs)("li",{children:["character: ",i]}),Object(n.jsxs)("li",{children:["gameSeries: ",s]}),Object(n.jsxs)("li",{children:["Pelease:",Object(n.jsx)("ul",{children:l&&Object.entries(l).map((function(e,t){var a=Object(u.a)(e,2),c=a[0],r=a[1];return Object(n.jsxs)("li",{children:[c,": ",r||"--"]},"release-".concat(t))}))})]})]})]})});he.defaultProps={};var me=he,ve=function(e){var t=e.data,a=t.image,c=t.amiiboSeries,r=t.character,i=t.gameSeries,s=t.name,l=t.release,d=t.type,j=t.position,u=t.favorite;return Object(n.jsxs)("div",{className:"w3-row-padding w3-padding-16",id:"about",children:[Object(n.jsx)("div",{className:"w3-col m6",children:Object(n.jsx)("img",{src:a,alt:"Me",className:"img-style-detail"})}),Object(n.jsx)("div",{className:"w3-col m6",children:Object(n.jsx)(me,Object(o.a)({},{amiiboSeries:c,character:r,gameSeries:i,name:s,release:l,type:d,position:j,favorite:u}))})]})};ve.defaultProps={};var xe=ve,ge=function(e){var t=e.amiibo,a=e.position;return Object(n.jsx)("div",{children:Object(n.jsx)(xe,{data:Object(o.a)(Object(o.a)({},t),{},{position:a})})})};ge.defaultProps={};var we=Object(g.b)((function(e,t){return{amiibo:e.amiibo.data.find((function(e){return e.index==t.match.params.id})),position:parseInt(t.match.params.id)}}))(ge);var Ne=function(){var e=Object(c.useState)(null),t=Object(u.a)(e,2),a=t[0],r=t[1];Object(c.useEffect)((function(){function e(){return(e=Object(j.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.a.get("./text-data.json");case 2:t=e.sent,a=t.data,r(a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var i=a||{},s=i.madeWith,l=i.personal,b=i.description,f=i.name,O=i.subTitle;return Object(n.jsx)(g.a,{store:$,children:Object(n.jsx)(k.a,{basename:"/amiibo-react",children:Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(I,Object(o.a)({},{name:f,subTitle:O})),Object(n.jsxs)(C.c,{children:[Object(n.jsx)(C.a,{exact:!0,path:"/",children:Object(n.jsx)(pe,{})}),Object(n.jsx)(C.a,{exact:!0,path:"/detail/:id",component:we})]}),Object(n.jsx)(p,Object(o.a)({},{madeWith:s,personal:l,description:b,name:f}))]})})})},ye=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,86)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),r(e),i(e)}))};s.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(Ne,{})}),document.getElementById("root")),ye()}},[[85,1,2]]]);
//# sourceMappingURL=main.a476298f.chunk.js.map