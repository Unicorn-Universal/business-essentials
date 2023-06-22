"use strict";(self.webpackChunk_minimal_minimal_kit_react=self.webpackChunk_minimal_minimal_kit_react||[]).push([[3815],{63815:function(e,t,r){r.r(t),r.d(t,{default:function(){return Ze}});var i=r(65964),n=r(19860),a=r(70178),l=r(9019),s=r(69904),o=r(50152),c=r(1413),d=r(93433),h=r(29439),u=r(45987),x=r(73428),Z=r(54641),p=r(35898),m=r(83929),f=r(44758),j=r(47131),v=r(51405),g=r(19536),b=r(47313),y=r(8730),C=r(22608),w=r(46417),k=["title","subheader","list"];function S(e){var t=e.title,r=e.subheader,i=e.list,n=(0,u.Z)(e,k),a=(0,b.useState)(["2"]),l=(0,h.Z)(a,2),s=l[0],o=l[1];return(0,w.jsxs)(x.Z,(0,c.Z)((0,c.Z)({},n),{},{children:[(0,w.jsx)(Z.Z,{title:t,subheader:r}),i.map((function(e){return(0,w.jsx)(P,{task:e,checked:s.includes(e.id),onChange:function(){return function(e){var t=s.includes(e)?s.filter((function(t){return t!==e})):[].concat((0,d.Z)(s),[e]);o(t)}(e.id)}},e.id)}))]}))}function P(e){var t=e.task,r=e.checked,i=e.onChange,n=(0,b.useState)(null),a=(0,h.Z)(n,2),l=a[0],s=a[1],o=function(){s(null)};return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(p.Z,{direction:"row",sx:(0,c.Z)({px:2,py:.75},r&&{color:"text.disabled",textDecoration:"line-through"}),children:[(0,w.jsx)(m.Z,{control:(0,w.jsx)(f.Z,{checked:r,onChange:i}),label:t.label,sx:{flexGrow:1,m:0}}),(0,w.jsx)(j.Z,{size:"large",color:l?"inherit":"default",onClick:function(e){s(e.currentTarget)},children:(0,w.jsx)(y.Z,{icon:"eva:more-vertical-fill"})})]}),(0,w.jsxs)(C.Z,{open:l,onClose:o,arrow:"right-top",children:[(0,w.jsxs)(v.Z,{onClick:function(){o(),console.log("MARK COMPLETE",t.id)},children:[(0,w.jsx)(y.Z,{icon:"eva:checkmark-circle-2-fill"}),"Mark Complete"]}),(0,w.jsxs)(v.Z,{onClick:function(){o(),console.log("EDIT",t.id)},children:[(0,w.jsx)(y.Z,{icon:"eva:edit-fill"}),"Edit"]}),(0,w.jsxs)(v.Z,{onClick:function(){o(),console.log("SHARE",t.id)},children:[(0,w.jsx)(y.Z,{icon:"eva:share-fill"}),"Share"]}),(0,w.jsx)(g.Z,{sx:{borderStyle:"dashed"}}),(0,w.jsxs)(v.Z,{onClick:function(){o(),console.log("DELETE",t.id)},sx:{color:"error.main"},children:[(0,w.jsx)(y.Z,{icon:"eva:trash-2-outline"}),"Delete"]})]})]})}var A=r(57829),T=r(24193),M=r(90891),E=r(61113),R=r(14322),F=r(59063),O=r(53261),N=["title","subheader","list"];function _(e){var t=e.title,r=e.subheader,i=e.list,n=(0,u.Z)(e,N);return(0,w.jsxs)(x.Z,(0,c.Z)((0,c.Z)({},n),{},{children:[(0,w.jsx)(Z.Z,{title:t,subheader:r}),(0,w.jsx)(O.Z,{children:(0,w.jsx)(p.Z,{spacing:3,sx:{p:3,pr:0},children:i.map((function(e){return(0,w.jsx)(W,{news:e},e.id)}))})}),(0,w.jsx)(g.Z,{}),(0,w.jsx)(A.Z,{sx:{p:2,textAlign:"right"},children:(0,w.jsx)(T.Z,{size:"small",color:"inherit",endIcon:(0,w.jsx)(y.Z,{icon:"eva:arrow-ios-forward-fill"}),children:"View all"})})]}))}function W(e){var t=e.news,r=t.image,i=t.title,n=t.description,a=t.postedAt;return(0,w.jsxs)(p.Z,{direction:"row",alignItems:"center",spacing:2,children:[(0,w.jsx)(F.Z,{alt:i,src:r,sx:{width:48,height:48,borderRadius:1.5,flexShrink:0}}),(0,w.jsxs)(A.Z,{sx:{minWidth:240},children:[(0,w.jsx)(M.Z,{color:"inherit",variant:"subtitle2",noWrap:!0,children:i}),(0,w.jsx)(E.Z,{variant:"body2",sx:{color:"text.secondary"},noWrap:!0,children:n})]}),(0,w.jsx)(E.Z,{variant:"caption",sx:{pr:3,flexShrink:0,color:"text.secondary"},children:(0,R.DY)(a)})]})}var z=r(17592),D=r(76221),I=r(47284),K=["title","subheader","chart"],L=(0,z.ZP)("div")((function(e){var t=e.theme;return{height:400,marginTop:t.spacing(5),"& .apexcharts-canvas svg":{height:400},"& .apexcharts-canvas svg,.apexcharts-canvas foreignObject":{overflow:"visible"},"& .apexcharts-legend":{height:72,alignContent:"center",position:"relative !important",borderTop:"solid 1px ".concat(t.palette.divider),top:"calc(".concat(328,"px) !important")}}}));function q(e){var t=e.title,r=e.subheader,i=e.chart,a=(0,u.Z)(e,K),l=(0,n.Z)(),s=i.colors,o=i.series,d=i.options,h=o.map((function(e){return e.value})),p=(0,I.Q8)((0,c.Z)({chart:{sparkline:{enabled:!0}},colors:s,labels:o.map((function(e){return e.label})),stroke:{colors:[l.palette.background.paper]},legend:{floating:!0,horizontalAlign:"center"},dataLabels:{enabled:!0,dropShadow:{enabled:!1}},tooltip:{fillSeriesColor:!1,y:{formatter:function(e){return(0,D.FK)(e)},title:{formatter:function(e){return"".concat(e)}}}},plotOptions:{pie:{donut:{labels:{show:!1}}}}},d));return(0,w.jsxs)(x.Z,(0,c.Z)((0,c.Z)({},a),{},{children:[(0,w.jsx)(Z.Z,{title:t,subheader:r}),(0,w.jsx)(L,{dir:"ltr",children:(0,w.jsx)(I.ZP,{type:"pie",series:h,options:p,height:280})})]}))}var B=r(93405),G=r(48571),H=r(25234),Q=r(83922),U=r(61414),V=r(17945),J=r(88221),$=["title","subheader","list"];function Y(e){var t=e.title,r=e.subheader,i=e.list,n=(0,u.Z)(e,$);return(0,w.jsxs)(x.Z,(0,c.Z)((0,c.Z)({},n),{},{children:[(0,w.jsx)(Z.Z,{title:t,subheader:r}),(0,w.jsx)(B.Z,{sx:{"& .MuiTimelineItem-missingOppositeContent:before":{display:"none"}},children:(0,w.jsx)(G.Z,{children:i.map((function(e,t){return(0,w.jsx)(X,{item:e,isLast:t===i.length-1},e.id)}))})})]}))}function X(e){var t=e.item,r=e.isLast,i=t.type,n=t.title,a=t.time;return(0,w.jsxs)(H.Z,{children:[(0,w.jsxs)(Q.Z,{children:[(0,w.jsx)(U.Z,{color:("order1"===i?"primary":"order2"===i&&"success")||"order3"===i&&"info"||"order4"===i&&"warning"||"error"}),r?null:(0,w.jsx)(V.Z,{})]}),(0,w.jsxs)(J.Z,{children:[(0,w.jsx)(E.Z,{variant:"subtitle2",children:n}),(0,w.jsx)(E.Z,{variant:"caption",sx:{color:"text.secondary"},children:(0,R.zM)(a)})]})]})}var ee=r(70501),te=["title","subheader","list"];function re(e){var t=e.title,r=e.subheader,i=e.list,n=(0,u.Z)(e,te);return(0,w.jsxs)(x.Z,(0,c.Z)((0,c.Z)({},n),{},{children:[(0,w.jsx)(Z.Z,{title:t,subheader:r}),(0,w.jsx)(B.Z,{children:(0,w.jsx)(A.Z,{display:"grid",gap:2,gridTemplateColumns:"repeat(2, 1fr)",children:i.map((function(e){return(0,w.jsxs)(ee.Z,{variant:"outlined",sx:{py:2.5,textAlign:"center"},children:["facebook"===e.value&&(0,w.jsx)(y.Z,{icon:"eva:facebook-fill",color:"#1877F2",width:32})||"google"===e.value&&(0,w.jsx)(y.Z,{icon:"eva:google-fill",color:"#DF3E30",width:32})||"linkedin"===e.value&&(0,w.jsx)(y.Z,{icon:"eva:linkedin-fill",color:"#006097",width:32})||(0,w.jsx)(y.Z,{icon:"eva:twitter-fill",color:"#1C9CEA",width:32}),(0,w.jsx)(E.Z,{variant:"h6",sx:{mt:.5},children:(0,D.v1)(e.total)}),(0,w.jsx)(E.Z,{variant:"body2",sx:{color:"text.secondary"},children:e.label})]},e.label)}))})})]}))}var ie=["title","subheader","chart"];function ne(e){var t=e.title,r=e.subheader,i=e.chart,n=(0,u.Z)(e,ie),a=i.labels,l=i.colors,s=i.series,o=i.options,d=(0,I.Q8)((0,c.Z)({colors:l,plotOptions:{bar:{columnWidth:"16%"}},fill:{type:s.map((function(e){return e.fill}))},labels:a,xaxis:{type:"datetime"},tooltip:{shared:!0,intersect:!1,y:{formatter:function(e){return"undefined"!==typeof e?"".concat(e.toFixed(0)," visits"):e}}}},o));return(0,w.jsxs)(x.Z,(0,c.Z)((0,c.Z)({},n),{},{children:[(0,w.jsx)(Z.Z,{title:t,subheader:r}),(0,w.jsx)(A.Z,{sx:{p:3,pb:1},dir:"ltr",children:(0,w.jsx)(I.ZP,{type:"line",series:s,options:d,height:364})})]}))}var ae=r(17551),le=r(50769),se=["title","total","icon","color","sx"];function oe(e){var t=e.title,r=e.total,i=e.icon,a=e.color,l=void 0===a?"primary":a,s=e.sx,o=(0,u.Z)(e,se),d=(0,n.Z)();return(0,w.jsxs)(x.Z,(0,c.Z)((0,c.Z)({sx:(0,c.Z)({py:5,boxShadow:0,textAlign:"center",color:d.palette[l].darker,bgcolor:d.palette[l].lighter},s)},o),{},{children:[(0,w.jsx)(y.Z,{icon:i,sx:(0,c.Z)({mb:3,p:2.5,width:64,height:64,borderRadius:"50%",color:d.palette[l].dark},(0,le.v3)({direction:"135deg",startColor:"".concat((0,ae.Fq)(d.palette[l].dark,0)," 0%"),endColor:"".concat((0,ae.Fq)(d.palette[l].dark,.24)," 100%")}))}),(0,w.jsx)(E.Z,{variant:"h3",children:(0,D.v1)(r)}),(0,w.jsx)(E.Z,{variant:"subtitle2",sx:{opacity:.64},children:t})]}))}var ce=["title","subheader","chart"],de=(0,z.ZP)("div")((function(e){var t=e.theme;return{height:400,marginTop:t.spacing(5),"& .apexcharts-canvas svg":{height:400},"& .apexcharts-canvas svg,.apexcharts-canvas foreignObject":{overflow:"visible"},"& .apexcharts-legend":{height:72,alignContent:"center",position:"relative !important",borderTop:"solid 1px ".concat(t.palette.divider),top:"calc(".concat(328,"px) !important")}}}));function he(e){var t=e.title,r=e.subheader,i=e.chart,a=(0,u.Z)(e,ce),l=(0,n.Z)(),s=i.series,o=i.colors,h=i.categories,p=i.options,m=(0,I.Q8)((0,c.Z)({colors:o,stroke:{width:2},fill:{opacity:.48},legend:{floating:!0,horizontalAlign:"center"},xaxis:{categories:h,labels:{style:{colors:(0,d.Z)(Array(6)).map((function(){return l.palette.text.secondary}))}}}},p));return(0,w.jsxs)(x.Z,(0,c.Z)((0,c.Z)({},a),{},{children:[(0,w.jsx)(Z.Z,{title:t,subheader:r}),(0,w.jsx)(de,{dir:"ltr",children:(0,w.jsx)(I.ZP,{type:"radar",series:s,options:m,height:340})})]}))}var ue=["title","subheader","chart"];function xe(e){var t=e.title,r=e.subheader,i=e.chart,n=(0,u.Z)(e,ue),a=i.colors,l=i.series,s=i.options,o=l.map((function(e){return e.value})),d=(0,I.Q8)((0,c.Z)({colors:a,tooltip:{marker:{show:!1},y:{formatter:function(e){return(0,D.FK)(e)},title:{formatter:function(){return""}}}},plotOptions:{bar:{horizontal:!0,barHeight:"28%",borderRadius:2}},xaxis:{categories:l.map((function(e){return e.label}))}},s));return(0,w.jsxs)(x.Z,(0,c.Z)((0,c.Z)({},n),{},{children:[(0,w.jsx)(Z.Z,{title:t,subheader:r}),(0,w.jsx)(A.Z,{sx:{mx:3},dir:"ltr",children:(0,w.jsx)(I.ZP,{type:"bar",series:[{data:o}],options:d,height:364})})]}))}function Ze(){var e=(0,n.Z)(),t=(0,o.K$)().themeStretch;return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(i.ql,{children:(0,w.jsx)("title",{children:" General: Analytics | Business Essentials "})}),(0,w.jsx)(a.Z,{maxWidth:!t&&"xl",children:(0,w.jsxs)(l.ZP,{container:!0,spacing:3,children:[(0,w.jsx)(l.ZP,{item:!0,xs:12,sm:6,md:3,children:(0,w.jsx)(oe,{title:"Weekly Sales",total:714e3,icon:"ant-design:android-filled"})}),(0,w.jsx)(l.ZP,{item:!0,xs:12,sm:6,md:3,children:(0,w.jsx)(oe,{title:"New Users",total:1352831,color:"info",icon:"ant-design:apple-filled"})}),(0,w.jsx)(l.ZP,{item:!0,xs:12,sm:6,md:3,children:(0,w.jsx)(oe,{title:"Item Orders",total:1723315,color:"warning",icon:"ant-design:windows-filled"})}),(0,w.jsx)(l.ZP,{item:!0,xs:12,sm:6,md:3,children:(0,w.jsx)(oe,{title:"Bug Reports",total:234,color:"error",icon:"ant-design:bug-filled"})}),(0,w.jsx)(l.ZP,{item:!0,xs:12,md:6,lg:8,children:(0,w.jsx)(ne,{title:"Website Visits",subheader:"(+43%) than last year",chart:{labels:["01/01/2003","02/01/2003","03/01/2003","04/01/2003","05/01/2003","06/01/2003","07/01/2003","08/01/2003","09/01/2003","10/01/2003","11/01/2003"],series:[{name:"Team A",type:"column",fill:"solid",data:[23,11,22,27,13,22,37,21,44,22,30]},{name:"Team B",type:"area",fill:"gradient",data:[44,55,41,67,22,43,21,41,56,27,43]},{name:"Team C",type:"line",fill:"solid",data:[30,25,36,30,45,35,64,52,59,36,39]}]}})}),(0,w.jsx)(l.ZP,{item:!0,xs:12,md:6,lg:4,children:(0,w.jsx)(q,{title:"Current Visits",chart:{series:[{label:"America",value:4344},{label:"Asia",value:5435},{label:"Europe",value:1443},{label:"Africa",value:4443}],colors:[e.palette.primary.main,e.palette.info.main,e.palette.error.main,e.palette.warning.main]}})}),(0,w.jsx)(l.ZP,{item:!0,xs:12,md:6,lg:8,children:(0,w.jsx)(xe,{title:"Conversion Rates",subheader:"(+43%) than last year",chart:{series:[{label:"Italy",value:400},{label:"Japan",value:430},{label:"China",value:448},{label:"Canada",value:470},{label:"France",value:540},{label:"Germany",value:580},{label:"South Korea",value:690},{label:"Netherlands",value:1100},{label:"United States",value:1200},{label:"United Kingdom",value:1380}]}})}),(0,w.jsx)(l.ZP,{item:!0,xs:12,md:6,lg:4,children:(0,w.jsx)(he,{title:"Current Subject",chart:{categories:["English","History","Physics","Geography","Chinese","Math"],series:[{name:"Series 1",data:[80,50,30,40,100,20]},{name:"Series 2",data:[20,30,40,80,20,80]},{name:"Series 3",data:[44,76,78,13,43,10]}]}})}),(0,w.jsx)(l.ZP,{item:!0,xs:12,md:6,lg:8,children:(0,w.jsx)(_,{title:"News Update",list:s.SH})}),(0,w.jsx)(l.ZP,{item:!0,xs:12,md:6,lg:4,children:(0,w.jsx)(Y,{title:"Order Timeline",list:s.ZP})}),(0,w.jsx)(l.ZP,{item:!0,xs:12,md:6,lg:4,children:(0,w.jsx)(re,{title:"Traffic by Site",list:s.$O})}),(0,w.jsx)(l.ZP,{item:!0,xs:12,md:6,lg:8,children:(0,w.jsx)(S,{title:"Tasks",list:[{id:"1",label:"Create FireStone Logo"},{id:"2",label:"Add SCSS and JS files if required"},{id:"3",label:"Stakeholder Meeting"},{id:"4",label:"Scoping & Estimations"},{id:"5",label:"Sprint Showcase"}]})})]})})]})}},73428:function(e,t,r){r.d(t,{Z:function(){return f}});var i=r(87462),n=r(63366),a=r(47313),l=r(83061),s=r(21921),o=r(17592),c=r(77342),d=r(70501),h=r(77430),u=r(32298);function x(e){return(0,u.Z)("MuiCard",e)}(0,h.Z)("MuiCard",["root"]);var Z=r(46417),p=["className","raised"],m=(0,o.ZP)(d.Z,{name:"MuiCard",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(){return{overflow:"hidden"}})),f=a.forwardRef((function(e,t){var r=(0,c.Z)({props:e,name:"MuiCard"}),a=r.className,o=r.raised,d=void 0!==o&&o,h=(0,n.Z)(r,p),u=(0,i.Z)({},r,{raised:d}),f=function(e){var t=e.classes;return(0,s.Z)({root:["root"]},x,t)}(u);return(0,Z.jsx)(m,(0,i.Z)({className:(0,l.Z)(f.root,a),elevation:d?8:void 0,ref:t,ownerState:u},h))}))},93405:function(e,t,r){r.d(t,{Z:function(){return m}});var i=r(87462),n=r(63366),a=r(47313),l=r(83061),s=r(21921),o=r(17592),c=r(77342),d=r(77430),h=r(32298);function u(e){return(0,h.Z)("MuiCardContent",e)}(0,d.Z)("MuiCardContent",["root"]);var x=r(46417),Z=["className","component"],p=(0,o.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}})),m=a.forwardRef((function(e,t){var r=(0,c.Z)({props:e,name:"MuiCardContent"}),a=r.className,o=r.component,d=void 0===o?"div":o,h=(0,n.Z)(r,Z),m=(0,i.Z)({},r,{component:d}),f=function(e){var t=e.classes;return(0,s.Z)({root:["root"]},u,t)}(m);return(0,x.jsx)(p,(0,i.Z)({as:d,className:(0,l.Z)(f.root,a),ownerState:m,ref:t},h))}))}}]);