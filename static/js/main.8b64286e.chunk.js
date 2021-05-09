(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{220:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(23),s=a.n(r),o=(a(93),a(32)),i=a(11),j=a(18),l=a(19),b=a.n(l),u="https://thingproxy.freeboard.io/fetch/https://jobs.github.com/positions.json";function d(e,t){switch(t.type){case h.MAKE_REQUEST:return{loading:!0,jobs:[]};case h.GET_DATA:return Object(i.a)(Object(i.a)({},e),{},{loading:!1,jobs:t.payload.jobs});case h.ERROR:return Object(i.a)(Object(i.a)({},e),{},{loading:!1,error:t.payload.error,jobs:[]});case h.UPDATE_HAS_NEXT_PAGE:return Object(i.a)(Object(i.a)({},e),{},{hasNextPage:t.payload.hasNextPage});default:return e}}var h={MAKE_REQUEST:"make-request",GET_DATA:"get-data",ERROR:"error",UPDATE_HAS_NEXT_PAGE:"update-has-next-page"};var O=a(224),x=a(227),p=a(222),m=a(223),g=a(225),f=a(44),y=a.n(f),E=a(2);function v(e){var t=e.job,a=Object(n.useState)(!1),c=Object(j.a)(a,2),r=c[0],s=c[1];return Object(E.jsx)(x.a,{children:Object(E.jsxs)(x.a.Body,{children:[Object(E.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(E.jsxs)("div",{children:[Object(E.jsxs)(x.a.Title,{children:[t.title," - ",Object(E.jsx)("span",{className:"text-muted font-weight-light",children:t.company})]}),Object(E.jsx)(x.a.Subtitle,{className:"text-muted mb-2",children:new Date(t.created_at).toLocaleDateString()}),Object(E.jsx)(p.a,{variant:"secondary",className:"mr-2",children:t.type}),Object(E.jsx)(p.a,{variant:"secondary",children:t.location}),Object(E.jsx)("div",{style:{wordBreak:"break-all"},children:Object(E.jsx)(y.a,{source:t.how_to_apply})})]}),Object(E.jsx)("img",{className:"d-none d-md-block",height:"50",alt:t.company,src:t.company_logo})]}),Object(E.jsx)(x.a.Text,{children:Object(E.jsx)(m.a,{onClick:function(){return s((function(e){return!e}))},variant:"primary",children:r?"Hide Details":"View Details"})}),Object(E.jsx)(g.a,{in:r,children:Object(E.jsx)("div",{className:"mt-4",children:Object(E.jsx)(y.a,{source:t.description})})})]})})}var T=a(228);function k(e){var t=e.page,a=e.setPage,n=e.hasNextPage;function c(e){a((function(t){return t+e}))}return Object(E.jsxs)(T.a,{children:[1!==t&&Object(E.jsx)(T.a.Prev,{onClick:function(){return c(-1)}}),1!==t&&Object(E.jsx)(T.a.Item,{onClick:function(){return a(1)},children:"1"}),t>2&&Object(E.jsx)(T.a.Ellipsis,{}),t>2&&Object(E.jsx)(T.a.Item,{onClick:function(){return c(-1)},children:t-1}),Object(E.jsx)(T.a.Item,{active:!0,children:t}),n&&Object(E.jsx)(T.a.Item,{onClick:function(){return c(1)},children:t+1}),n&&Object(E.jsx)(T.a.Next,{onClick:function(){return c(1)}})]})}var N=a(226),C=a(87);function P(e){var t=e.params,a=e.onParamChange;return Object(E.jsxs)(N.a,{className:"mb-4",children:[Object(E.jsx)(N.a.Row,{}),Object(E.jsxs)(N.a.Group,{as:C.a,children:[Object(E.jsx)(N.a.Label,{children:"Descripion"}),Object(E.jsx)(N.a.Control,{onChange:a,value:t.description,name:"description",type:"text"})]}),Object(E.jsxs)(N.a.Group,{as:C.a,children:[Object(E.jsx)(N.a.Label,{children:"Location"}),Object(E.jsx)(N.a.Control,{onChange:a,value:t.location,name:"location",type:"text"})]}),Object(E.jsx)(N.a.Group,{as:C.a,xs:"auto",className:"ml-2",children:Object(E.jsx)(N.a.Check,{onChange:a,value:t.full_time,name:"full_time",id:"full-time",label:"Only Full-Time Jobs",type:"checkbox",className:"mb-2"})})]})}var _=function(){var e=Object(n.useState)({}),t=Object(j.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(1),s=Object(j.a)(r,2),l=s[0],x=s[1],p=function(e,t){var a=Object(n.useReducer)(d,{jobs:[],loading:!0}),c=Object(j.a)(a,2),r=c[0],s=c[1];return Object(n.useEffect)((function(){var a=b.a.CancelToken.source();s({type:h.MAKE_REQUEST}),b.a.get(u,{cancelToken:a.token,params:Object(i.a)({markdown:!0,page:t},e)}).then((function(e){s({type:h.GET_DATA,payload:{jobs:e.data}})})).catch((function(e){b.a.isCancel(e)||s({type:h.ERROR,payload:{error:e}})}));var n=b.a.CancelToken.source();return b.a.get(u,{cancelToken:n.token,params:Object(i.a)({markdown:!0,page:t+1},e)}).then((function(e){s({type:h.UPDATE_HAS_NEXT_PAGE,payload:{hasNextPage:0!==e.data.length}})})).catch((function(e){b.a.isCancel(e)||s({type:h.ERROR,payload:{error:e}})})),function(){a.cancel(),n.cancel()}}),[e,t]),r}(a,l),m=p.jobs,g=p.loading,f=p.error,y=p.hasNextPage;return Object(E.jsxs)(O.a,{className:"my-4",children:[Object(E.jsx)("h1",{className:"mb-4",children:"Github Jobs"}),Object(E.jsx)(P,{params:a,onParamChange:function(e){var t=e.target.name,a=e.target.value;x(1),c((function(e){return Object(i.a)(Object(i.a)({},e),{},Object(o.a)({},t,a))}))}}),Object(E.jsx)(k,{page:l,setPage:x,hasNextPage:y}),g&&Object(E.jsx)("h1",{children:"Loading..."}),f&&Object(E.jsx)("h1",{children:"Error. Try Refreshing."}),m.map((function(e){return Object(E.jsx)(v,{job:e},e.id)})),Object(E.jsx)(k,{page:l,setPage:x,hasNextPage:y})]})},A=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,229)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};s.a.render(Object(E.jsx)(c.a.StrictMode,{children:Object(E.jsx)(_,{})}),document.getElementById("root")),A()},93:function(e,t,a){}},[[220,1,2]]]);
//# sourceMappingURL=main.8b64286e.chunk.js.map