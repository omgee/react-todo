(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{105:function(e,t,a){e.exports=a(124)},124:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(9),c=a.n(l),o=a(42),i=a(12),u=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function s(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var d=a(93),m=a(35),E=a(177),p=a(28),f=a(46),h=a(160),v=a(15),b=a(166),O=a(167),g=a(165),y=a(181),_=a(163),L=a(95),D=a(73),k=a.n(D),A=a(90),S=a.n(A),w=a(91),C=a.n(w),T=a(72),j=a.n(T),M=a(92),I=a.n(M),R=Object(h.a)(function(e){return{grow:{flexGrow:1,position:"sticky",top:"0",zIndex:"2"},menuButton:{marginRight:e.spacing(2)},title:Object(f.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(f.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(v.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(v.b)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{width:e.spacing(7),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(f.a)({padding:e.spacing(1,1,1,7),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:200}),sectionDesktop:Object(f.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(f.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}});function N(e){var t=e.match.params.id,a=Object(i.b)(),l=R(),c=r.a.useState(null),o=Object(p.a)(c,2),u=o[0],s=o[1],d=r.a.useState(null),m=Object(p.a)(d,2),E=m[0],f=m[1],h=Boolean(u),v=Object(n.useState)(!1),D=Object(p.a)(v,2),A=D[0],w=D[1],T=function(){var e=Object(n.useState)(""),t=Object(p.a)(e,2),r=t[0],l=t[1];return{value:r,onChange:function(e){l(e.target.value),a({type:"SET_SEARCH",value:r})}}}();function M(){w(!1)}function N(){s(null),M()}var K=r.a.createElement(L.a,{anchorEl:u,anchorOrigin:{vertical:"top",horizontal:"right"},id:"primary-search-account-menu",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:h,onClose:N},r.a.createElement(_.a,{onClick:N},"Profile"),r.a.createElement(_.a,{onClick:N},"My account")),P=r.a.createElement(L.a,{anchorEl:E,anchorOrigin:{vertical:"top",horizontal:"right"},id:"primary-search-account-menu-mobile",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:A,onClose:M,onClick:M},r.a.createElement(_.a,{onClick:function(){return a({type:"OPEN_ADD_TASK_MODAL",value:t})}},r.a.createElement(g.a,{"aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u0434\u0430\u0447\u0443",color:"inherit"},r.a.createElement(j.a,null)),r.a.createElement("p",null,"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u0434\u0430\u0447\u0443")),r.a.createElement(_.a,{onClick:function(){return a({type:"OPEN_ADD_LIST_MODAL"})}},r.a.createElement(g.a,{"aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0441\u043f\u0438\u0441\u043e\u043a",color:"inherit"},r.a.createElement(k.a,null)),r.a.createElement("p",null,"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0441\u043f\u0438\u0441\u043e\u043a")));return r.a.createElement("div",{className:l.grow},r.a.createElement(b.a,{position:"static",className:l.appbar},r.a.createElement(O.a,null,r.a.createElement(g.a,{onClick:function(){return a({type:"TOGGLE_DRAWER"})},edge:"start",className:l.menuButton,color:"inherit","aria-label":"Open drawer"},r.a.createElement(S.a,null)),r.a.createElement("div",{className:l.search},r.a.createElement("div",{className:l.searchIcon},r.a.createElement(C.a,null)),r.a.createElement(y.a,Object.assign({placeholder:"\u041f\u043e\u0438\u0441\u043a\u2026",classes:{root:l.inputRoot,input:l.inputInput},inputProps:{"aria-label":"Search"}},T))),r.a.createElement("div",{className:l.grow}),r.a.createElement("div",{className:l.sectionDesktop},r.a.createElement(g.a,{onClick:function(){return a({type:"OPEN_ADD_TASK_MODAL",value:t})},"aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u0434\u0430\u0447\u0443",color:"inherit"},r.a.createElement(j.a,null)),r.a.createElement(g.a,{onClick:function(){return a({type:"OPEN_ADD_LIST_MODAL"})},"aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0441\u043f\u0438\u0441\u043e\u043a",color:"inherit"},r.a.createElement(k.a,null))),r.a.createElement("div",{className:l.sectionMobile},r.a.createElement(g.a,{"aria-label":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435","aria-controls":"primary-search-account-menu-mobile","aria-haspopup":"true",onClick:function(e){f(e.currentTarget),w(!0)},color:"inherit"},r.a.createElement(I.a,null))))),P,K)}var K=a(180),P=a(162),x=a(125),W=a(168),G=a(169),z=a(61),B=a.n(z),F=Object(h.a)({list:{width:250},fullList:{width:"auto"}});function J(e){var t=e.history,a=e.match.params.id,n=Object(i.c)(function(e){return e.drawer}),l=Object(i.c)(function(e){return e.lists}),c=Object(i.b)();a||t.push("/react-todo/".concat(l[0].id));var o=F(),u=function(e){(!e||"keydown"!==e.type||"Tab"!==e.key&&"Shift"!==e.key)&&c({type:"TOGGLE_DRAWER"})};return r.a.createElement("div",null,r.a.createElement(K.a,{open:n,onClose:u,onOpen:u},r.a.createElement("div",{className:o.list,role:"presentation",onKeyDown:u,onClick:u},r.a.createElement(P.a,null,l.map(function(e){return r.a.createElement(x.a,{selected:e.id===a,onClick:function(){return t.push("/react-todo/".concat(e.id))},button:!0,key:e.id},r.a.createElement(W.a,{primary:e.name}),r.a.createElement(G.a,null,r.a.createElement(g.a,{onClick:function(){return t=e.id,void c({type:"OPEN_DELETE_LIST_MODAL",value:t});var t},edge:"end","aria-label":"Comments"},r.a.createElement(B.a,null))))})))))}var V=a(175),U=a(170),H=a(174),$=a(172),q=a(173),Q=a(171);function X(){var e=Object(i.c)(function(e){return e.deleteTaskModal}),t=Object(i.b)();function a(){t({type:"CLOSE_DELETE_TASK_MODAL"})}return r.a.createElement("div",null,r.a.createElement(U.a,{open:e,onClose:function(){return a()},"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement(Q.a,{id:"alert-dialog-title"},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u044d\u0442\u0443 \u0437\u0430\u0434\u0430\u0447\u0430?"),r.a.createElement($.a,null,r.a.createElement(q.a,{id:"alert-dialog-description"},"\u0412\u044b \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u044d\u0442\u0443 \u0437\u0430\u0434\u0430\u0447\u0443?")),r.a.createElement(H.a,null,r.a.createElement(V.a,{onClick:function(){return a()},color:"primary"},"\u041e\u0442\u043c\u0435\u043d\u0430"),r.a.createElement(V.a,{onClick:function(){return t({type:"CLOSE_DELETE_TASK_MODAL"}),void t({type:"REMOVE_TASK",value:e})},color:"secondary",autoFocus:!0},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"))))}var Y=a(178);function Z(){var e=Object(i.c)(function(e){return e.addTaskModal}),t=Object(i.b)(),a=Object(n.useRef)(""),l=function(){var e=Object(n.useState)(null),t=Object(p.a)(e,2),a=t[0],r=t[1];return{value:a,onChange:function(e){return r(e.target.value)}}}();function c(){t({type:"CLOSE_ADD_TASK_MODAL"})}return r.a.createElement("div",null,r.a.createElement(U.a,{open:e,onClose:c,"aria-labelledby":"form-dialog-title"},r.a.createElement(Q.a,{id:"form-dialog-title"},"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0437\u0430\u0434\u0430\u0447\u0438"),r.a.createElement($.a,null,r.a.createElement(q.a,null,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f \u0437\u0430\u0434\u0430\u0447\u0438"),r.a.createElement(Y.a,Object.assign({ref:a},l,{autoFocus:!0,margin:"dense",label:"\u0418\u043c\u044f \u0437\u0430\u0434\u0430\u0447\u0438...",type:"text",fullWidth:!0}))),r.a.createElement(H.a,null,r.a.createElement(V.a,{onClick:c,color:"primary"},"\u041e\u0442\u043c\u0435\u043d\u0430"),r.a.createElement(V.a,{onClick:function(){t({type:"CLOSE_ADD_TASK_MODAL"}),t({type:"ADD_TASK",value:{listId:e,id:"".concat(1e6*Math.random()&1048575),name:l.value,checked:!1}}),l.onChange({target:{value:""}})},color:"primary"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"))))}function ee(){var e=Object(i.c)(function(e){return e.addListModal}),t=Object(i.b)(),a=Object(n.useRef)(""),l=function(){var e=Object(n.useState)(null),t=Object(p.a)(e,2),a=t[0],r=t[1];return{value:a,onChange:function(e){return r(e.target.value)}}}();function c(){t({type:"CLOSE_ADD_LIST_MODAL"})}return r.a.createElement("div",null,r.a.createElement(U.a,{open:e,onClose:c,"aria-labelledby":"form-dialog-title"},r.a.createElement(Q.a,{id:"form-dialog-title"},"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0441\u043f\u0438\u0441\u043a\u0430"),r.a.createElement($.a,null,r.a.createElement(q.a,null,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f \u0441\u043f\u0438\u0441\u043a\u0430"),r.a.createElement(Y.a,Object.assign({ref:a},l,{autoFocus:!0,margin:"dense",label:"\u0418\u043c\u044f \u0441\u043f\u0438\u0441\u043a\u0430...",type:"text",fullWidth:!0}))),r.a.createElement(H.a,null,r.a.createElement(V.a,{onClick:c,color:"primary"},"\u041e\u0442\u043c\u0435\u043d\u0430"),r.a.createElement(V.a,{onClick:function(){t({type:"CLOSE_ADD_LIST_MODAL"}),t({type:"ADD_LIST",value:{id:"".concat(1e6*Math.random()&1048575),name:l.value}}),l.onChange({target:{value:""}})},color:"primary"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"))))}function te(){var e=Object(i.c)(function(e){return e.deleteListModal}),t=Object(i.b)();function a(){t({type:"CLOSE_DELETE_LIST_MODAL"})}return r.a.createElement("div",null,r.a.createElement(U.a,{open:e,onClose:function(){return a()},"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement(Q.a,{id:"alert-dialog-title"},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u044d\u0442\u043e\u0442 \u0441\u043f\u0438\u0441\u043e\u043a?"),r.a.createElement($.a,null,r.a.createElement(q.a,{id:"alert-dialog-description"},"\u0412\u044b \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u044d\u0442\u043e\u0442 \u0441\u043f\u0438\u0441\u043e\u043a?")),r.a.createElement(H.a,null,r.a.createElement(V.a,{onClick:function(){return a()},color:"primary"},"\u041e\u0442\u043c\u0435\u043d\u0430"),r.a.createElement(V.a,{onClick:function(){return t({type:"CLOSE_DELETE_LIST_MODAL"}),void t({type:"REMOVE_LIST",value:e})},color:"secondary",autoFocus:!0},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"))))}var ae=a(176),ne=a(179),re=Object(h.a)(function(e){return{root:{width:"100%",backgroundColor:e.palette.background.paper}}});function le(e){var t=e.match,a=Object(i.b)(),n=t.params.id,l=Object(i.c)(function(e){return e.tasks}),c=Object(i.c)(function(e){return e.search}),o=re();return r.a.createElement(P.a,{className:o.root},l.filter(function(e){return e.listId===n}).filter(function(e){return new RegExp(c,"i").test(e.name)}).map(function(e){return r.a.createElement(x.a,{key:e.taskId,role:void 0,dense:!0,button:!0,onClick:function(){return t=e.id,void a({type:"TOGGLE_TASK",value:t});var t}},r.a.createElement(ae.a,null,r.a.createElement(ne.a,{edge:"start",checked:e.checked,tabIndex:-1,disableRipple:!0,inputProps:{"aria-labelledby":e.checked}})),r.a.createElement(W.a,{id:e.checked,primary:e.name}),r.a.createElement(G.a,null,r.a.createElement(g.a,{onClick:function(){return t=e.id,void a({type:"OPEN_DELETE_TASK_MODAL",value:t});var t},edge:"end","aria-label":"Comments"},r.a.createElement(B.a,null))))}))}var ce=function(){return r.a.createElement(d.a,null,r.a.createElement(m.a,{path:"/:id?",component:N}),r.a.createElement(m.a,{path:"/:id?",component:J}),r.a.createElement(X,null),r.a.createElement(te,null),r.a.createElement(Z,null),r.a.createElement(ee,null),r.a.createElement(E.a,{fixed:!0,style:{position:"relative"}},r.a.createElement(m.a,{exact:!0,path:"/:id?",render:function(e){return r.a.createElement(le,Object.assign({key:e.match.params.id},e))}})))},oe=a(76),ie=[{id:"".concat(1e6*Math.random()&1048575),name:"\u0422\u0435\u0441\u0442\u043e\u0432\u044b\u0439 \u043b\u0438\u0441\u0442"}],ue=Object(o.b)({drawer:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];switch((arguments.length>1?arguments[1]:void 0).type){case"TOGGLE_DRAWER":return!e;default:return e}},lists:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.value;switch(a){case"ADD_LIST":return[].concat(Object(oe.a)(e),[n]);case"REMOVE_LIST":return e.filter(function(e){return e.id!==n});default:return e}},tasks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.value;switch(a){case"ADD_TASK":return[].concat(Object(oe.a)(e),[n]);case"REMOVE_TASK":return e.filter(function(e){return e.id!==n});case"TOGGLE_TASK":return e.map(function(e){return e.id===n?Object.assign({},e,{checked:!e.checked}):e});default:return e}},deleteTaskModal:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.value;switch(a){case"OPEN_DELETE_TASK_MODAL":return n;case"CLOSE_DELETE_TASK_MODAL":return!1;default:return e}},addTaskModal:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.value;switch(a){case"OPEN_ADD_TASK_MODAL":return n;case"CLOSE_ADD_TASK_MODAL":return!1;default:return e}},addListModal:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];switch((arguments.length>1?arguments[1]:void 0).type){case"OPEN_ADD_LIST_MODAL":return!0;case"CLOSE_ADD_LIST_MODAL":return!1;default:return e}},deleteListModal:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.value;switch(a){case"OPEN_DELETE_LIST_MODAL":return n;case"CLOSE_DELETE_LIST_MODAL":return!1;default:return e}},search:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.value;switch(a){case"SET_SEARCH":return n;default:return e}}}),se=function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(t){return}}(),de=Object(o.c)(ue,se);de.subscribe(function(){!function(e){try{var t=JSON.stringify(e);localStorage.setItem("state",t)}catch(a){}}(de.getState())}),c.a.render(r.a.createElement(i.a,{store:de},r.a.createElement(ce,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/react-todo",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/react-todo","/service-worker.js");u?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):s(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):s(t,e)})}}()}},[[105,1,2]]]);
//# sourceMappingURL=main.a106599f.chunk.js.map