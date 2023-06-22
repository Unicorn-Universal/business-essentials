"use strict";(self.webpackChunk_minimal_minimal_kit_react=self.webpackChunk_minimal_minimal_kit_react||[]).push([[7853],{38875:function(e,r,n){n.d(r,{Z:function(){return h}});var t=n(1413),a=n(45987),i=n(57829),s=n(35898),o=n(61113),l=n(3404),c=n(90891),u=n(2135),d=n(46417);function m(e){var r=e.link,n=e.activeLast,a=e.disabled,s=r.name,o=r.href,l=r.icon,m=(0,t.Z)({typography:"body2",alignItems:"center",color:"text.primary",display:"inline-flex"},a&&!n&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}),p=(0,d.jsxs)(d.Fragment,{children:[l&&(0,d.jsx)(i.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:l}),s]});return o?(0,d.jsx)(c.Z,{component:u.rU,to:o,sx:m,children:p}):(0,d.jsxs)(i.Z,{sx:m,children:[" ",p," "]})}var p=["links","action","heading","moreLink","activeLast","sx"];function h(e){var r=e.links,n=e.action,u=e.heading,h=e.moreLink,g=e.activeLast,v=e.sx,f=(0,a.Z)(e,p),Z=r[r.length-1].name;return(0,d.jsxs)(i.Z,{sx:(0,t.Z)({mb:5},v),children:[(0,d.jsxs)(s.Z,{direction:"row",alignItems:"center",children:[(0,d.jsxs)(i.Z,{sx:{flexGrow:1},children:[u&&(0,d.jsx)(o.Z,{variant:"h4",gutterBottom:!0,children:u}),!!r.length&&(0,d.jsx)(l.Z,(0,t.Z)((0,t.Z)({separator:(0,d.jsx)(x,{})},f),{},{children:r.map((function(e){return(0,d.jsx)(m,{link:e,activeLast:g,disabled:e.name===Z},e.name||"")}))}))]}),n&&(0,d.jsxs)(i.Z,{sx:{flexShrink:0},children:[" ",n," "]})]}),!!h&&(0,d.jsx)(i.Z,{sx:{mt:2},children:h.map((function(e){return(0,d.jsx)(c.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}function x(){return(0,d.jsx)(i.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},76516:function(e,r,n){n.d(r,{Z:function(){return C}});var t=n(93433),a=n(74165),i=n(15861),s=n(21933),o=n(47313),l=n(58467),c=n(75627),u=n(62563),d=n(32703),m=n(9019),p=n(73428),h=n(35898),x=n(61113),g=n(41727),v=n(57829),f=n(48175),Z=n(41034),b=n(50734),j=n(46417),y=[{label:"Men",value:"Men"},{label:"Women",value:"Women"},{label:"Kids",value:"Kids"}],S=[{group:"Clothing",classify:["Shirts","T-shirts","Jeans","Leather"]},{group:"Tailored",classify:["Suits","Blazers","Trousers","Waistcoats"]},{group:"Accessories",classify:["Shoes","Backpacks and bags","Bracelets","Face masks"]}],k=["Toy Story 3","Logan","Full Metal Jacket","Dangal","The Sting","2001: A Space Odyssey","Singin' in the Rain","Toy Story","Bicycle Thieves","The Kid","Inglourious Basterds","Snatch","3 Idiots"];function C(e){var r=e.isEdit,n=e.currentProduct,C=(0,l.s0)(),w=(0,Z.Ds)().enqueueSnackbar,P=s.Ry().shape({name:s.Z_().required("Name is required"),images:s.IX().min(1,"Images is required"),tags:s.IX().min(2,"Must have at least 2 tags"),price:s.Rx().moreThan(0,"Price should not be $0.00"),description:s.Z_().required("Description is required")}),R=(0,o.useMemo)((function(){return{name:(null===n||void 0===n?void 0:n.name)||"",description:(null===n||void 0===n?void 0:n.description)||"",images:(null===n||void 0===n?void 0:n.images)||[],code:(null===n||void 0===n?void 0:n.code)||"",sku:(null===n||void 0===n?void 0:n.sku)||"",price:(null===n||void 0===n?void 0:n.price)||0,priceSale:(null===n||void 0===n?void 0:n.priceSale)||0,tags:(null===n||void 0===n?void 0:n.tags)||[k[0]],inStock:!0,taxes:!0,gender:(null===n||void 0===n?void 0:n.gender)||y[2].value,category:(null===n||void 0===n?void 0:n.category)||S[0].classify[1]}}),[n]),I=(0,c.cI)({resolver:(0,u.X)(P),defaultValues:R}),M=I.reset,B=I.watch,L=I.setValue,T=I.handleSubmit,_=I.formState.isSubmitting,N=B();(0,o.useEffect)((function(){r&&n&&M(R),r||M(R)}),[r,n]);var A=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(n){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,new Promise((function(e){return setTimeout(e,500)}));case 3:M(),w(r?"Update success!":"Create success!"),C(f.vB.eCommerce.list),console.log("DATA",n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(r){return e.apply(this,arguments)}}(),z=(0,o.useCallback)((function(e){var r=N.images||[],n=e.map((function(e){return Object.assign(e,{preview:URL.createObjectURL(e)})}));L("images",[].concat((0,t.Z)(r),(0,t.Z)(n)),{shouldValidate:!0})}),[L,N.images]);return(0,j.jsx)(b.ZP,{methods:I,onSubmit:T(A),children:(0,j.jsxs)(m.ZP,{container:!0,spacing:3,children:[(0,j.jsx)(m.ZP,{item:!0,xs:12,md:8,children:(0,j.jsx)(p.Z,{sx:{p:3},children:(0,j.jsxs)(h.Z,{spacing:3,children:[(0,j.jsx)(b.au,{name:"name",label:"Product Name"}),(0,j.jsxs)(h.Z,{spacing:1,children:[(0,j.jsx)(x.Z,{variant:"subtitle2",sx:{color:"text.secondary"},children:"Description"}),(0,j.jsx)(b.LM,{simple:!0,name:"description"})]}),(0,j.jsxs)(h.Z,{spacing:1,children:[(0,j.jsx)(x.Z,{variant:"subtitle2",sx:{color:"text.secondary"},children:"Images"}),(0,j.jsx)(b.rd,{multiple:!0,thumbnail:!0,name:"images",maxSize:3145728,onDrop:z,onRemove:function(e){var r,n=N.images&&(null===(r=N.images)||void 0===r?void 0:r.filter((function(r){return r!==e})));L("images",n)},onRemoveAll:function(){L("images",[])},onUpload:function(){return console.log("ON UPLOAD")}})]})]})})}),(0,j.jsx)(m.ZP,{item:!0,xs:12,md:4,children:(0,j.jsxs)(h.Z,{spacing:3,children:[(0,j.jsxs)(p.Z,{sx:{p:3},children:[(0,j.jsx)(b._e,{name:"inStock",label:"In stock"}),(0,j.jsxs)(h.Z,{spacing:3,mt:2,children:[(0,j.jsx)(b.au,{name:"code",label:"Product Code"}),(0,j.jsx)(b.au,{name:"sku",label:"Product SKU"}),(0,j.jsxs)(h.Z,{spacing:1,children:[(0,j.jsx)(x.Z,{variant:"subtitle2",sx:{color:"text.secondary"},children:"Gender"}),(0,j.jsx)(b.km,{row:!0,spacing:4,name:"gender",options:y})]}),(0,j.jsxs)(b.Cc,{native:!0,name:"category",label:"Category",children:[(0,j.jsx)("option",{value:""}),S.map((function(e){return(0,j.jsx)("optgroup",{label:e.group,children:e.classify.map((function(e){return(0,j.jsx)("option",{value:e,children:e},e)}))},e.group)}))]}),(0,j.jsx)(b.Fl,{name:"tags",label:"Tags",multiple:!0,freeSolo:!0,options:k.map((function(e){return e})),ChipProps:{size:"small"}})]})]}),(0,j.jsxs)(p.Z,{sx:{p:3},children:[(0,j.jsxs)(h.Z,{spacing:3,mb:2,children:[(0,j.jsx)(b.au,{name:"price",label:"Regular Price",placeholder:"0.00",onChange:function(e){return L("price",Number(e.target.value),{shouldValidate:!0})},InputLabelProps:{shrink:!0},InputProps:{startAdornment:(0,j.jsx)(g.Z,{position:"start",children:(0,j.jsx)(v.Z,{component:"span",sx:{color:"text.disabled"},children:"$"})}),type:"number"}}),(0,j.jsx)(b.au,{name:"priceSale",label:"Sale Price",placeholder:"0.00",onChange:function(e){return L("priceSale",Number(e.target.value))},InputLabelProps:{shrink:!0},InputProps:{startAdornment:(0,j.jsx)(g.Z,{position:"start",children:(0,j.jsx)(v.Z,{component:"span",sx:{color:"text.disabled"},children:"$"})}),type:"number"}})]}),(0,j.jsx)(b._e,{name:"taxes",label:"Price includes taxes"})]}),(0,j.jsx)(d.Z,{type:"submit",variant:"contained",size:"large",loading:_,children:r?"Save Changes":"Create Product"})]})})]})})}},3404:function(e,r,n){n.d(r,{Z:function(){return B}});var t=n(93433),a=n(29439),i=n(4942),s=n(87462),o=n(63366),l=n(47313),c=(n(96214),n(83061)),u=n(21921),d=n(17592),m=n(77342),p=n(61113),h=n(17551),x=n(54750),g=n(46417),v=(0,x.Z)((0,g.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),f=n(38743),Z=(0,d.ZP)(f.Z)((function(e){var r=e.theme;return(0,s.Z)({display:"flex",marginLeft:"calc(".concat(r.spacing(1)," * 0.5)"),marginRight:"calc(".concat(r.spacing(1)," * 0.5)")},"light"===r.palette.mode?{backgroundColor:r.palette.grey[100],color:r.palette.grey[700]}:{backgroundColor:r.palette.grey[700],color:r.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,s.Z)({},"light"===r.palette.mode?{backgroundColor:r.palette.grey[200]}:{backgroundColor:r.palette.grey[600]}),"&:active":(0,s.Z)({boxShadow:r.shadows[0]},"light"===r.palette.mode?{backgroundColor:(0,h._4)(r.palette.grey[200],.12)}:{backgroundColor:(0,h._4)(r.palette.grey[600],.12)})})})),b=(0,d.ZP)(v)({width:24,height:16});var j=function(e){var r=e;return(0,g.jsx)("li",{children:(0,g.jsx)(Z,(0,s.Z)({focusRipple:!0},e,{ownerState:r,children:(0,g.jsx)(b,{ownerState:r})}))})},y=n(77430),S=n(32298);function k(e){return(0,S.Z)("MuiBreadcrumbs",e)}var C=(0,y.Z)("MuiBreadcrumbs",["root","ol","li","separator"]),w=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],P=(0,d.ZP)(p.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:function(e,r){return[(0,i.Z)({},"& .".concat(C.li),r.li),r.root]}})({}),R=(0,d.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:function(e,r){return r.ol}})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),I=(0,d.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:function(e,r){return r.separator}})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function M(e,r,n,t){return e.reduce((function(a,i,s){return s<e.length-1?a=a.concat(i,(0,g.jsx)(I,{"aria-hidden":!0,className:r,ownerState:t,children:n},"separator-".concat(s))):a.push(i),a}),[])}var B=l.forwardRef((function(e,r){var n=(0,m.Z)({props:e,name:"MuiBreadcrumbs"}),i=n.children,d=n.className,p=n.component,h=void 0===p?"nav":p,x=n.expandText,v=void 0===x?"Show path":x,f=n.itemsAfterCollapse,Z=void 0===f?1:f,b=n.itemsBeforeCollapse,y=void 0===b?1:b,S=n.maxItems,C=void 0===S?8:S,I=n.separator,B=void 0===I?"/":I,L=(0,o.Z)(n,w),T=l.useState(!1),_=(0,a.Z)(T,2),N=_[0],A=_[1],z=(0,s.Z)({},n,{component:h,expanded:N,expandText:v,itemsAfterCollapse:Z,itemsBeforeCollapse:y,maxItems:C,separator:B}),q=function(e){var r=e.classes;return(0,u.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},k,r)}(z),D=l.useRef(null),U=l.Children.toArray(i).filter((function(e){return l.isValidElement(e)})).map((function(e,r){return(0,g.jsx)("li",{className:q.li,children:e},"child-".concat(r))}));return(0,g.jsx)(P,(0,s.Z)({ref:r,component:h,color:"text.secondary",className:(0,c.Z)(q.root,d),ownerState:z},L,{children:(0,g.jsx)(R,{className:q.ol,ref:D,ownerState:z,children:M(N||C&&U.length<=C?U:function(e){return y+Z>=e.length?e:[].concat((0,t.Z)(e.slice(0,y)),[(0,g.jsx)(j,{"aria-label":v,onClick:function(){A(!0);var e=D.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis")],(0,t.Z)(e.slice(e.length-Z,e.length)))}(U),q.separator,B,z)})}))}))},73428:function(e,r,n){n.d(r,{Z:function(){return v}});var t=n(87462),a=n(63366),i=n(47313),s=n(83061),o=n(21921),l=n(17592),c=n(77342),u=n(70501),d=n(77430),m=n(32298);function p(e){return(0,m.Z)("MuiCard",e)}(0,d.Z)("MuiCard",["root"]);var h=n(46417),x=["className","raised"],g=(0,l.ZP)(u.Z,{name:"MuiCard",slot:"Root",overridesResolver:function(e,r){return r.root}})((function(){return{overflow:"hidden"}})),v=i.forwardRef((function(e,r){var n=(0,c.Z)({props:e,name:"MuiCard"}),i=n.className,l=n.raised,u=void 0!==l&&l,d=(0,a.Z)(n,x),m=(0,t.Z)({},n,{raised:u}),v=function(e){var r=e.classes;return(0,o.Z)({root:["root"]},p,r)}(m);return(0,h.jsx)(g,(0,t.Z)({className:(0,s.Z)(v.root,i),elevation:u?8:void 0,ref:r,ownerState:m},d))}))}}]);