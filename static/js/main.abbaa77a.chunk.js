(this["webpackJsonpbinary-digit"]=this["webpackJsonpbinary-digit"]||[]).push([[0],{88:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(9),i=n.n(r),l=n(135),s=n(134),j=n(133),o=n(92),u=n(137),b=n(123),x=n(139),m=n(125),d=n(127),O=n(5),h=Object(b.a)((function(e){return Object(x.a)({root:{flexGrow:1},title:{flexGrow:1}})}));function v(){var e=h();return Object(O.jsx)("div",{className:e.root,children:Object(O.jsx)(m.a,{position:"static",children:Object(O.jsx)(d.a,{children:Object(O.jsx)(o.a,{variant:"h6",className:e.title,children:"Tools"})})})})}var f=n(62),g=n(11),p=n(46),k=n.n(p),y=n(61),C=n(43),w=n(91),N=n(128),B=n(129),S=n(130),F=n(131),D=n(136),I=[{name:"\u5468\u4e00",value:64},{name:"\u5468\u4e8c",value:32},{name:"\u5468\u4e09",value:16},{name:"\u5468\u56db",value:8},{name:"\u5468\u4e94",value:4},{name:"\u5468\u516d",value:2},{name:"\u5468\u4e03",value:1}],M=[{name:"\u5468\u4e03",value:64},{name:"\u5468\u516d",value:32},{name:"\u5468\u4e94",value:16},{name:"\u5468\u56db",value:8},{name:"\u5468\u4e09",value:4},{name:"\u5468\u4e8c",value:2},{name:"\u5468\u4e00",value:1}],T=n(138),A=n(132),G=n(47),P=n.n(G),E=Object(b.a)((function(e){return Object(x.a)({root:{flexGrow:1},control:{padding:e.spacing(2)},itemButton:{width:"8rem",height:"8rem",border:".1rem solid"},itemBox:{width:"100%",height:"100%"},utilButton:{border:".1rem solid"}})})),J=function(e){var t=E(),n=e.name,a=e.value,c=e.toggled,r=e.clickCallback;return Object(O.jsx)(N.a,{item:!0,children:Object(O.jsx)(B.a,{type:"button",className:t.itemButton,onClick:function(e){e.preventDefault(),r&&r(a)},children:Object(O.jsxs)(u.a,{className:t.itemBox,children:[Object(O.jsx)(o.a,{variant:"h6",children:n}),Object(O.jsx)(S.a,{}),Object(O.jsx)(u.a,{mt:1,children:Object(O.jsx)(o.a,{variant:"h3",children:c?1:0})})]})})})};function L(){var e=127,t=Object(a.useRef)(null),n=E(),c=Object(a.useState)(0),r=Object(C.a)(c,2),i=r[0],l=r[1],s=Object(a.useState)(!1),j=Object(C.a)(s,2),o=j[0],u=j[1],b=Object(a.useState)(!1),x=Object(C.a)(b,2),m=x[0],d=x[1],h=function(){var e=Object(y.a)(k.a.mark((function e(t){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.clipboard.writeText(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(e,t){l(e),t&&h(e.toString()).then()},f=function(e){v(i^e,m)},g=function(e,t){var n=0,a=P.a.cloneDeep(t?M:I);return P.a.reverse(a),(t?I:M).forEach((function(t,c){n+=0!==(e&t.value)?a[c].value:0})),n};return Object(O.jsx)("div",{className:n.root,children:Object(O.jsx)(w.a,{className:n.control,children:Object(O.jsxs)(N.a,{container:!0,spacing:3,children:[Object(O.jsx)(N.a,{item:!0,xs:12,children:Object(O.jsx)(F.a,{children:"Switch for Day"})}),Object(O.jsx)(N.a,{item:!0,xs:12,children:Object(O.jsx)(A.a,{control:Object(O.jsx)(T.a,{checked:o,onChange:function(e){var t=!o;u(t),v(g(i,t),m)}}),label:"\u53cd\u8f49"})}),Object(O.jsx)(N.a,{item:!0,xs:12,children:Object(O.jsx)(A.a,{control:Object(O.jsx)(T.a,{checked:m,onChange:function(e){d(!m)}}),label:"\u81ea\u52d5\u8907\u88fd\u5230\u526a\u8cbc\u7c3f"})}),Object(O.jsxs)(N.a,{container:!0,item:!0,xs:12,spacing:1,children:[Object(O.jsx)(N.a,{item:!0,xs:!0}),Object(O.jsx)(J,{name:"-",value:0,toggled:!1,clickCallback:null},-1),(o?M:I).map((function(e,t){var n=0!==(i&e.value);return Object(O.jsx)(J,{name:e.name,value:e.value,toggled:n,clickCallback:f},t)})),Object(O.jsx)(N.a,{item:!0,xs:!0})]}),Object(O.jsxs)(N.a,{container:!0,item:!0,xs:12,justify:"center",alignContent:"center",alignItems:"center",spacing:3,children:[Object(O.jsx)(N.a,{item:!0,children:Object(O.jsx)(B.a,{className:n.utilButton,onClick:function(){v(0,m)},children:"MIN"})}),Object(O.jsx)(N.a,{item:!0,children:Object(O.jsx)(D.a,{ref:t,value:i,onChange:function(t){var n=t.target.value,a=parseInt(n);Number.isFinite(a)&&(a<0&&(a=0),a>e&&(a=e),v(a,m))},onFocus:function(e){e.target.select()},type:"number",inputProps:{inputMode:"numeric",pattern:"[0-9]*",style:{textAlign:"center"},min:0,max:e}})}),Object(O.jsx)(N.a,{item:!0,children:Object(O.jsx)(B.a,{className:n.utilButton,onClick:function(){v(e,m)},children:"MAX"})})]})]})})})}function R(){return Object(O.jsx)("main",{children:Object(O.jsx)(u.a,{mt:2,mb:2,children:Object(O.jsx)(f.a,{children:Object(O.jsx)(g.c,{children:Object(O.jsx)(g.a,{path:"/",component:L})})})})})}function X(){return Object(O.jsxs)(o.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ","Sean Mars"," ",(new Date).getFullYear()]})}var Y=function(){return Object(O.jsx)(j.a,{children:Object(O.jsxs)(u.a,{children:[Object(O.jsx)(v,{}),Object(O.jsx)(R,{}),Object(O.jsx)(X,{})]})})},q=n(42),z=n(63),H=Object(z.a)({palette:{primary:{main:"#556cd6"},secondary:{main:"#19857b"},error:{main:q.a.A400},background:{default:"#fff"}}}),K=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,141)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};i.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsxs)(s.a,{theme:H,children:[Object(O.jsx)(l.a,{}),Object(O.jsx)(Y,{})]})}),document.getElementById("root")),K()}},[[88,1,2]]]);
//# sourceMappingURL=main.abbaa77a.chunk.js.map