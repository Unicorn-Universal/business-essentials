"use strict";(self.webpackChunk_minimal_minimal_kit_react=self.webpackChunk_minimal_minimal_kit_react||[]).push([[8100],{38875:function(e,n,i){i.d(n,{Z:function(){return p}});var r=i(1413),t=i(45987),o=i(57829),s=i(35898),l=i(61113),a=i(3404),c=i(90891),d=i(2135),u=i(46417);function x(e){var n=e.link,i=e.activeLast,t=e.disabled,s=n.name,l=n.href,a=n.icon,x=(0,r.Z)({typography:"body2",alignItems:"center",color:"text.primary",display:"inline-flex"},t&&!i&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}),h=(0,u.jsxs)(u.Fragment,{children:[a&&(0,u.jsx)(o.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:a}),s]});return l?(0,u.jsx)(c.Z,{component:d.rU,to:l,sx:x,children:h}):(0,u.jsxs)(o.Z,{sx:x,children:[" ",h," "]})}var h=["links","action","heading","moreLink","activeLast","sx"];function p(e){var n=e.links,i=e.action,d=e.heading,p=e.moreLink,f=e.activeLast,Z=e.sx,j=(0,t.Z)(e,h),v=n[n.length-1].name;return(0,u.jsxs)(o.Z,{sx:(0,r.Z)({mb:5},Z),children:[(0,u.jsxs)(s.Z,{direction:"row",alignItems:"center",children:[(0,u.jsxs)(o.Z,{sx:{flexGrow:1},children:[d&&(0,u.jsx)(l.Z,{variant:"h4",gutterBottom:!0,children:d}),!!n.length&&(0,u.jsx)(a.Z,(0,r.Z)((0,r.Z)({separator:(0,u.jsx)(m,{})},j),{},{children:n.map((function(e){return(0,u.jsx)(x,{link:e,activeLast:f,disabled:e.name===v},e.name||"")}))}))]}),i&&(0,u.jsxs)(o.Z,{sx:{flexShrink:0},children:[" ",i," "]})]}),!!p&&(0,u.jsx)(o.Z,{sx:{mt:2},children:p.map((function(e){return(0,u.jsx)(c.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}function m(){return(0,u.jsx)(o.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},49372:function(e,n,i){i.d(n,{fY:function(){return a},yM:function(){return d},hN:function(){return b}});var r=i(1413),t=i(17592),o=i(17551),s=i(24631),l=i(46417),a=(0,t.ZP)((function(e){return(0,l.jsx)(s.Z,(0,r.Z)({select:!0,SelectProps:{native:!0}},e))}))((function(e){var n=e.theme;return{"& fieldset":{display:"none"},"& select":(0,r.Z)((0,r.Z)({},n.typography.subtitle2),{},{padding:n.spacing(.5,0,.5,1),paddingRight:"28px !important"}),"& .MuiOutlinedInput-root":{borderRadius:.75*Number(n.shape.borderRadius),backgroundColor:(0,o.Fq)(n.palette.grey[500],.08)}}})),c=i(4942),d=(0,t.ZP)(s.Z,{shouldForwardProp:function(e){return"width"!==e}})((function(e){var n=e.width,i=e.theme;return{"& fieldset":{display:"none"},"& .MuiOutlinedInput-root":{width:n,border:"solid 1px ".concat((0,o.Fq)(i.palette.grey[500],.32)),transition:i.transitions.create(["box-shadow","width"],{duration:i.transitions.duration.shorter}),"&.Mui-focused":(0,r.Z)({boxShadow:i.customShadows.z20},n&&(0,c.Z)({},i.breakpoints.up("sm"),{width:n+60}))}}})),u=i(45987),x=i(75192),h=i.n(x),p=i(47313),m=i(35898),f=i(47131),Z=i(8730),j=["quantity","onIncrease","onDecrease","disabledIncrease","disabledDecrease","sx"],v=(0,p.forwardRef)((function(e,n){var i=e.quantity,t=e.onIncrease,s=e.onDecrease,a=e.disabledIncrease,c=e.disabledDecrease,d=e.sx,x=(0,u.Z)(e,j);return(0,l.jsxs)(m.Z,(0,r.Z)((0,r.Z)({ref:n,flexShrink:0,direction:"row",alignItems:"center",justifyContent:"space-between",sx:(0,r.Z)({mb:.5,py:.5,px:.75,width:96,borderRadius:1,border:function(e){return"solid 1px ".concat((0,o.Fq)(e.palette.grey[500],.32))}},d)},x),{},{children:[(0,l.jsx)(f.Z,{size:"small",color:"inherit",onClick:s,disabled:c,sx:{color:"text.secondary"},children:(0,l.jsx)(Z.Z,{icon:"eva:minus-fill",width:16})}),i,(0,l.jsx)(f.Z,{size:"small",color:"inherit",onClick:t,disabled:a,sx:{color:"text.secondary"},children:(0,l.jsx)(Z.Z,{icon:"eva:plus-fill",width:16})})]}))}));v.propTypes={sx:h().object,onDecrease:h().func,onIncrease:h().func,quantity:h().number,disabledDecrease:h().bool,disabledIncrease:h().bool};var b=v},91512:function(e,n,i){i.d(n,{Z:function(){return y}});var r=i(1413),t=i(45987),o=i(72749),s=i(31745),l=i(80484),a=i(71595),c=i(7784),d=i(13083),u=i(48933),x=i(26160),h=i(61113),p=i(8730),m=i(19860),f=i(17551),Z=i(70499),j=i(46417);function v(){var e=(0,m.Z)();return(0,j.jsx)(Z.Z,{styles:{".yarl__root":{"--yarl__thumbnails_thumbnail_padding":0,"--yarl__thumbnails_thumbnail_border":"transparent","--yarl__color_backdrop":(0,f.Fq)(e.palette.grey[900],.9),"--yarl__slide_captions_container_background":(0,f.Fq)(e.palette.grey[900],.48)},".yarl__slide_title":{fontSize:e.typography.h5.fontSize,fontWeight:e.typography.h5.fontWeight,lineHeight:e.typography.h5.lineHeight},".yarl__slide_description":{fontSize:e.typography.body2.fontSize,fontWeight:e.typography.body2.fontWeight,lineHeight:e.typography.body2.lineHeight},".yarl__button":{filter:"unset"},".yarl__thumbnails_thumbnail":{opacity:.48,"&.yarl__thumbnails_thumbnail_active":{opacity:1}},".yarl__thumbnails_vignette":{"--yarl__thumbnails_vignette_size":0},".yarl__video_container":{backgroundColor:e.palette.common.black}}})}var b=["slides","disabledZoom","disabledVideo","disabledTotal","disabledCaptions","disabledSlideshow","disabledThumbnails","disabledFullscreen","onGetCurrentIndex"],g=24;function y(e){var n=e.slides,i=e.disabledZoom,s=e.disabledVideo,l=e.disabledTotal,a=e.disabledCaptions,c=e.disabledSlideshow,d=e.disabledThumbnails,u=e.disabledFullscreen,x=e.onGetCurrentIndex,h=(0,t.Z)(e,b),m=n?n.length:0;return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(v,{}),(0,j.jsx)(o.Z,(0,r.Z)({slides:n,animation:{swipe:240},carousel:{finite:m<5},controller:{closeOnBackdropClick:!0},plugins:w({disabledZoom:i,disabledVideo:s,disabledCaptions:a,disabledSlideshow:c,disabledThumbnails:d,disabledFullscreen:u}),on:{view:function(e){x&&x(e)}},toolbar:{buttons:[(0,j.jsx)(k,{totalItems:m,disabledTotal:l,disabledCaptions:a},0),"close"]},render:{iconClose:function(){return(0,j.jsx)(p.Z,{width:g,icon:"carbon:close"})},iconZoomIn:function(){return(0,j.jsx)(p.Z,{width:g,icon:"carbon:zoom-in"})},iconZoomOut:function(){return(0,j.jsx)(p.Z,{width:g,icon:"carbon:zoom-out"})},iconSlideshowPlay:function(){return(0,j.jsx)(p.Z,{width:g,icon:"carbon:play"})},iconSlideshowPause:function(){return(0,j.jsx)(p.Z,{width:g,icon:"carbon:pause"})},iconPrev:function(){return(0,j.jsx)(p.Z,{width:g+8,icon:"carbon:chevron-left"})},iconNext:function(){return(0,j.jsx)(p.Z,{width:g+8,icon:"carbon:chevron-right"})},iconExitFullscreen:function(){return(0,j.jsx)(p.Z,{width:g,icon:"carbon:center-to-fit"})},iconEnterFullscreen:function(){return(0,j.jsx)(p.Z,{width:g,icon:"carbon:fit-to-screen"})}}},h))]})}function w(e){var n=e.disabledZoom,i=e.disabledVideo,r=e.disabledCaptions,t=e.disabledSlideshow,o=e.disabledThumbnails,x=e.disabledFullscreen,h=[a.Z,d.Z,c.Z,u.Z,l.Z,s.ZP];return o&&(h=h.filter((function(e){return e!==u.Z}))),r&&(h=h.filter((function(e){return e!==a.Z}))),x&&(h=h.filter((function(e){return e!==d.Z}))),t&&(h=h.filter((function(e){return e!==c.Z}))),n&&(h=h.filter((function(e){return e!==s.ZP}))),i&&(h=h.filter((function(e){return e!==l.Z}))),h}function k(e){var n=e.totalItems,i=e.disabledTotal,t=e.disabledCaptions,o=(0,x.o)().state.currentIndex;return i?null:(0,j.jsxs)(h.Z,{className:"yarl__button",sx:(0,r.Z)({pl:3,left:0,position:"fixed",typography:"body2"},!t&&{px:"unset",minWidth:64,position:"unset",textAlign:"center"}),children:[(0,j.jsxs)("strong",{children:[" ",o+1," "]})," / ",n]})}},88100:function(e,n,i){i.r(n),i.d(n,{default:function(){return de}});var r=i(29439),t=i(65964),o=i(47313),s=i(70178),l=i(73428),a=i(5297),c=i(65280),d=i(57829),u=i(48175),x=i(12865),h=i(69904),p=i(8730),m=i(38875),f=i(50152),Z=i(9019),j=i(35898),v=i(17592),b=i(54641),g=i(61113),y=i(90891),w=i(46417),k=(0,v.ZP)(p.Z)((function(e){return{width:20,height:20,marginTop:1,flexShrink:0,marginRight:e.theme.spacing(2)}}));function _(e){var n=e.quote,i=e.country,r=e.email,t=e.role,o=e.company,s=e.school;return(0,w.jsxs)(l.Z,{children:[(0,w.jsx)(b.Z,{title:"About"}),(0,w.jsxs)(j.Z,{spacing:2,sx:{p:3},children:[(0,w.jsx)(g.Z,{variant:"body2",children:n}),(0,w.jsxs)(j.Z,{direction:"row",children:[(0,w.jsx)(k,{icon:"eva:pin-fill"}),(0,w.jsxs)(g.Z,{variant:"body2",children:["Live at \xa0",(0,w.jsx)(y.Z,{component:"span",variant:"subtitle2",color:"text.primary",children:i})]})]}),(0,w.jsxs)(j.Z,{direction:"row",children:[(0,w.jsx)(k,{icon:"eva:email-fill"}),(0,w.jsx)(g.Z,{variant:"body2",children:r})]}),(0,w.jsxs)(j.Z,{direction:"row",children:[(0,w.jsx)(k,{icon:"ic:round-business-center"}),(0,w.jsxs)(g.Z,{variant:"body2",children:[t," at \xa0",(0,w.jsx)(y.Z,{component:"span",variant:"subtitle2",color:"text.primary",children:o})]})]}),(0,w.jsxs)(j.Z,{direction:"row",children:[(0,w.jsx)(k,{icon:"ic:round-business-center"}),(0,w.jsxs)(g.Z,{variant:"body2",children:["Studied at \xa0",(0,w.jsx)(y.Z,{component:"span",variant:"subtitle2",color:"text.primary",children:s})]})]})]})]})}var C=i(17551),I=i(47131),F=i(83929),S=i(44758),L=i(70501),z=i(54882),P=i(41727),T=i(14322),q=i(76221),E=i(59063),R=i(14913);function U(e){var n=e.post,i=(0,x.E)().user,t=(0,o.useRef)(null),s=(0,o.useRef)(null),a=(0,o.useState)(n.isLiked),c=(0,r.Z)(a,2),u=c[0],h=c[1],m=(0,o.useState)(n.personLikes.length),f=(0,r.Z)(m,2),Z=f[0],v=f[1],k=(0,o.useState)(""),_=(0,r.Z)(k,2),U=_[0],W=_[1],N=n.comments.length>0;return(0,w.jsxs)(l.Z,{children:[(0,w.jsx)(b.Z,{disableTypography:!0,avatar:(0,w.jsx)(R.z,{src:null===i||void 0===i?void 0:i.photoURL,alt:null===i||void 0===i?void 0:i.displayName,name:null===i||void 0===i?void 0:i.displayName}),title:(0,w.jsx)(y.Z,{color:"inherit",variant:"subtitle2",children:null===i||void 0===i?void 0:i.displayName}),subheader:(0,w.jsx)(g.Z,{variant:"caption",component:"div",sx:{color:"text.secondary"},children:(0,T.Mu)(n.createdAt)}),action:(0,w.jsx)(I.Z,{children:(0,w.jsx)(p.Z,{icon:"eva:more-vertical-fill"})})}),(0,w.jsx)(g.Z,{sx:{p:function(e){return e.spacing(3,3,2,3)}},children:n.message}),(0,w.jsx)(d.Z,{sx:{p:1},children:(0,w.jsx)(E.Z,{alt:"post media",src:n.media,ratio:"16/9",sx:{borderRadius:1}})}),(0,w.jsxs)(j.Z,{direction:"row",alignItems:"center",sx:{p:function(e){return e.spacing(2,3,3,3)}},children:[(0,w.jsx)(F.Z,{control:(0,w.jsx)(S.Z,{color:"error",checked:u,icon:(0,w.jsx)(p.Z,{icon:"eva:heart-fill"}),checkedIcon:(0,w.jsx)(p.Z,{icon:"eva:heart-fill"}),onChange:u?function(){h(!1),v((function(e){return e-1}))}:function(){h(!0),v((function(e){return e+1}))}}),label:(0,q.v1)(Z)}),(0,w.jsx)(R._,{children:n.personLikes.map((function(e){return(0,w.jsx)(R.z,{alt:e.name,src:e.avatarUrl},e.name)}))}),(0,w.jsx)(d.Z,{sx:{flexGrow:1}}),(0,w.jsx)(I.Z,{onClick:function(){var e=t.current;e&&e.focus()},children:(0,w.jsx)(p.Z,{icon:"eva:message-square-fill"})}),(0,w.jsx)(I.Z,{children:(0,w.jsx)(p.Z,{icon:"eva:share-fill"})})]}),N&&(0,w.jsx)(j.Z,{spacing:1.5,sx:{px:3,pb:2},children:n.comments.map((function(e){return(0,w.jsxs)(j.Z,{direction:"row",spacing:2,children:[(0,w.jsx)(R.z,{alt:e.author.name,src:e.author.avatarUrl}),(0,w.jsxs)(L.Z,{sx:{p:1.5,flexGrow:1,bgcolor:"background.neutral"},children:[(0,w.jsxs)(j.Z,{justifyContent:"space-between",direction:{xs:"column",sm:"row"},alignItems:{sm:"center"},sx:{mb:.5},children:[(0,w.jsx)(g.Z,{variant:"subtitle2",children:e.author.name}),(0,w.jsx)(g.Z,{variant:"caption",sx:{color:"text.disabled"},children:(0,T.Mu)(e.createdAt)})]}),(0,w.jsx)(g.Z,{variant:"body2",sx:{color:"text.secondary"},children:e.message})]})]},e.id)}))}),(0,w.jsxs)(j.Z,{spacing:2,direction:"row",alignItems:"center",sx:{p:function(e){return e.spacing(0,3,3,3)}},children:[(0,w.jsx)(R.z,{src:null===i||void 0===i?void 0:i.photoURL,alt:null===i||void 0===i?void 0:i.displayName,name:null===i||void 0===i?void 0:i.displayName}),(0,w.jsx)(z.ZP,{fullWidth:!0,value:U,inputRef:t,placeholder:"Write a comment\u2026",onChange:function(e){return n=e.target.value,void W(n);var n},endAdornment:(0,w.jsxs)(P.Z,{position:"end",sx:{mr:1},children:[(0,w.jsx)(I.Z,{size:"small",onClick:function(){var e=s.current;e&&e.click()},children:(0,w.jsx)(p.Z,{icon:"ic:round-add-photo-alternate"})}),(0,w.jsx)(I.Z,{size:"small",children:(0,w.jsx)(p.Z,{icon:"eva:smiling-face-fill"})})]}),sx:{pl:1.5,height:40,borderRadius:1,border:function(e){return"solid 1px ".concat((0,C.Fq)(e.palette.grey[500],.32))}}}),(0,w.jsx)("input",{type:"file",ref:s,style:{display:"none"}})]})]})}var W=i(42420),N=i(24193);function D(){var e=(0,o.useRef)(null);return(0,w.jsxs)(l.Z,{sx:{p:3},children:[(0,w.jsx)(z.ZP,{multiline:!0,fullWidth:!0,rows:4,placeholder:"Share what you are thinking here...",sx:{p:2,mb:3,borderRadius:1,border:function(e){return"solid 1px ".concat((0,C.Fq)(e.palette.grey[500],.32))}}}),(0,w.jsxs)(j.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[(0,w.jsxs)(j.Z,{direction:"row",spacing:1,alignItems:"center",sx:{color:"text.secondary"},children:[(0,w.jsxs)(W.Z,{size:"small",color:"inherit",variant:"softExtended",onClick:function(){var n;null===(n=e.current)||void 0===n||n.click()},children:[(0,w.jsx)(p.Z,{icon:"ic:round-perm-media",width:24,sx:{color:"success.main"}}),"Image/Video"]}),(0,w.jsxs)(W.Z,{size:"small",color:"inherit",variant:"softExtended",children:[(0,w.jsx)(p.Z,{icon:"eva:video-fill",width:24,sx:{color:"error.main"}}),"Streaming"]})]}),(0,w.jsx)(N.Z,{variant:"contained",children:"Post"})]}),(0,w.jsx)("input",{ref:e,type:"file",style:{display:"none"}})]})}var A=i(19536);function G(e){var n=e.follower,i=e.following;return(0,w.jsx)(l.Z,{sx:{py:3},children:(0,w.jsxs)(j.Z,{direction:"row",divider:(0,w.jsx)(A.Z,{orientation:"vertical",flexItem:!0}),children:[(0,w.jsxs)(j.Z,{width:1,textAlign:"center",children:[(0,w.jsx)(g.Z,{variant:"h4",children:(0,q.FK)(n)}),(0,w.jsx)(g.Z,{variant:"body2",sx:{color:"text.secondary"},children:"Follower"})]}),(0,w.jsxs)(j.Z,{width:1,textAlign:"center",children:[(0,w.jsx)(g.Z,{variant:"h4",children:(0,q.FK)(i)}),(0,w.jsx)(g.Z,{variant:"body2",sx:{color:"text.secondary"},children:"Following"})]})]})})}function M(e){var n=e.socialLinks,i=n.facebookLink,r=n.instagramLink,t=n.linkedinLink,o=n.twitterLink;return(0,w.jsxs)(l.Z,{children:[(0,w.jsx)(b.Z,{title:"Social"}),(0,w.jsx)(j.Z,{spacing:2,sx:{p:3},children:h._I.map((function(e){return(0,w.jsxs)(j.Z,{direction:"row",sx:{wordBreak:"break-all"},children:[(0,w.jsx)(p.Z,{icon:e.icon,sx:{mr:2,flexShrink:0,color:e.color}}),(0,w.jsx)(y.Z,{component:"span",variant:"body2",color:"text.primary",children:"facebook"===e.value&&i||"instagram"===e.value&&r||"linkedin"===e.value&&t||o})]},e.name)}))})]})}function B(e){var n=e.info,i=e.posts;return(0,w.jsxs)(Z.ZP,{container:!0,spacing:3,children:[(0,w.jsx)(Z.ZP,{item:!0,xs:12,md:4,children:(0,w.jsxs)(j.Z,{spacing:3,children:[(0,w.jsx)(G,{follower:n.follower,following:n.following}),(0,w.jsx)(_,{quote:n.quote,country:n.country,email:n.email,role:n.role,company:n.company,school:n.school}),(0,w.jsx)(M,{socialLinks:n.socialLinks})]})}),(0,w.jsx)(Z.ZP,{item:!0,xs:12,md:8,children:(0,w.jsxs)(j.Z,{spacing:3,children:[(0,w.jsx)(D,{}),i.map((function(e){return(0,w.jsx)(U,{post:e},e.id)}))]})})]})}var O=i(4942),V=i(1413),H=i(50769),K=(0,v.ZP)("div")((function(e){var n=e.theme;return{"&:before":(0,V.Z)((0,V.Z)({},(0,H.Ls)({color:n.palette.primary.darker})),{},{top:0,zIndex:9,content:"''",width:"100%",height:"100%",position:"absolute"})}})),Y=(0,v.ZP)("div")((function(e){var n=e.theme;return(0,O.Z)({left:0,right:0,zIndex:99,position:"absolute",marginTop:n.spacing(5)},n.breakpoints.up("md"),{right:"auto",display:"flex",alignItems:"center",left:n.spacing(3),bottom:n.spacing(3)})}));function $(e){var n=e.name,i=e.role,r=e.cover,t=(0,x.E)().user;return(0,w.jsxs)(K,{children:[(0,w.jsxs)(Y,{children:[(0,w.jsx)(R.z,{src:null===t||void 0===t?void 0:t.photoURL,alt:null===t||void 0===t?void 0:t.displayName,name:null===t||void 0===t?void 0:t.displayName,sx:{mx:"auto",borderWidth:2,borderStyle:"solid",borderColor:"common.white",width:{xs:80,md:128},height:{xs:80,md:128}}}),(0,w.jsxs)(d.Z,{sx:{ml:{md:3},mt:{xs:1,md:0},color:"common.white",textAlign:{xs:"center",md:"left"}},children:[(0,w.jsx)(g.Z,{variant:"h4",children:n}),(0,w.jsx)(g.Z,{sx:{opacity:.72},children:i})]})]}),(0,w.jsx)(E.Z,{alt:"cover",src:r,sx:{top:0,left:0,right:0,bottom:0,position:"absolute"}})]})}var J=i(63585),Q=i(51405),X=i(22608),ee=i(49372),ne=i(80216);function ie(e){var n=e.friends,i=e.searchFriends,r=e.onSearchFriends,t=function(e,n){if(n)return e.filter((function(e){return-1!==e.name.toLowerCase().indexOf(n.toLowerCase())}));return e}(n,i),o=!t.length&&!!i;return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(j.Z,{spacing:3,justifyContent:"space-between",direction:{xs:"column",sm:"row"},sx:{my:5},children:[(0,w.jsx)(g.Z,{variant:"h4",children:"Friends"}),(0,w.jsx)(ee.yM,{width:220,size:"small",value:i,onChange:r,placeholder:"Search friends...",InputProps:{startAdornment:(0,w.jsx)(P.Z,{position:"start",children:(0,w.jsx)(p.Z,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}})]}),o?(0,w.jsx)(ne.Z,{query:i,sx:{mt:10}}):(0,w.jsx)(d.Z,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(3, 1fr)"},children:t.map((function(e){return(0,w.jsx)(re,{friend:e},e.id)}))})]})}function re(e){var n=e.friend,i=n.name,t=n.role,s=n.avatarUrl,a=(0,o.useState)(null),c=(0,r.Z)(a,2),d=c[0],u=c[1],x=function(){u(null)};return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(l.Z,{sx:{py:5,display:"flex",position:"relative",alignItems:"center",flexDirection:"column"},children:[(0,w.jsx)(J.Z,{alt:i,src:s,sx:{width:64,height:64,mb:3}}),(0,w.jsx)(y.Z,{variant:"subtitle1",color:"text.primary",children:i}),(0,w.jsx)(g.Z,{variant:"body2",sx:{color:"text.secondary",mb:1,mt:.5},children:t}),(0,w.jsx)(j.Z,{alignItems:"center",justifyContent:"center",direction:"row",children:h._I.map((function(e){return(0,w.jsx)(I.Z,{sx:{color:e.color,"&:hover":{bgcolor:(0,C.Fq)(e.color,.08)}},children:(0,w.jsx)(p.Z,{icon:e.icon})},e.name)}))}),(0,w.jsx)(I.Z,{color:d?"inherit":"default",onClick:function(e){u(e.currentTarget)},sx:{top:8,right:8,position:"absolute"},children:(0,w.jsx)(p.Z,{icon:"eva:more-vertical-fill"})})]}),(0,w.jsxs)(X.Z,{open:d,onClose:x,arrow:"right-top",children:[(0,w.jsxs)(Q.Z,{onClick:function(){x(),console.log("DELETE",i)},sx:{color:"error.main"},children:[(0,w.jsx)(p.Z,{icon:"eva:trash-2-outline"}),"Delete"]}),(0,w.jsxs)(Q.Z,{onClick:function(){x(),console.log("EDIT",i)},children:[(0,w.jsx)(p.Z,{icon:"eva:edit-fill"}),"Edit"]})]})]})}var te=i(19860),oe=i(91512);function se(e){var n=e.gallery,i=(0,o.useState)(-1),t=(0,r.Z)(i,2),s=t[0],l=t[1],a=n.map((function(e){return{src:e.imageUrl}}));return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(g.Z,{variant:"h4",sx:{my:5},children:"Gallery"}),(0,w.jsx)(d.Z,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(3, 1fr)"},children:n.map((function(e){return(0,w.jsx)(le,{image:e,onOpenLightbox:function(){return function(e){var n=a.findIndex((function(n){return n.src===e}));l(n)}(e.imageUrl)}},e.id)}))}),(0,w.jsx)(oe.Z,{index:s,slides:a,open:s>=0,close:function(){l(-1)}})]})}function le(e){var n=e.image,i=e.onOpenLightbox,r=(0,te.Z)(),t=n.imageUrl,o=n.title,s=n.postAt;return(0,w.jsxs)(l.Z,{sx:{cursor:"pointer",position:"relative"},children:[(0,w.jsx)(E.Z,{alt:"gallery",ratio:"1/1",src:t,onClick:function(){return i(t)}}),(0,w.jsxs)(j.Z,{spacing:2,direction:"row",alignItems:"center",sx:(0,V.Z)((0,V.Z)({},(0,H.Ls)({color:r.palette.grey[900]})),{},{width:1,left:0,bottom:0,position:"absolute",color:"common.white",p:r.spacing(3,1,3,3)}),children:[(0,w.jsxs)(j.Z,{flexGrow:1,spacing:1,children:[(0,w.jsx)(g.Z,{variant:"subtitle1",children:o}),(0,w.jsx)(g.Z,{variant:"body2",sx:{opacity:.72},children:(0,T.Mu)(s)})]}),(0,w.jsx)(I.Z,{color:"inherit",children:(0,w.jsx)(p.Z,{icon:"eva:more-vertical-fill"})})]})]})}function ae(e){var n=e.followers;return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(g.Z,{variant:"h4",sx:{my:5},children:"Followers"}),(0,w.jsx)(d.Z,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(3, 1fr)"},children:n.map((function(e){return(0,w.jsx)(ce,{follower:e},e.id)}))})]})}function ce(e){var n=e.follower,i=n.name,t=n.country,s=n.avatarUrl,a=n.isFollowed,c=(0,o.useState)(a),u=(0,r.Z)(c,2),x=u[0],h=u[1];return(0,w.jsxs)(l.Z,{sx:{p:3,display:"flex",alignItems:"center"},children:[(0,w.jsx)(J.Z,{alt:i,src:s,sx:{width:48,height:48}}),(0,w.jsxs)(d.Z,{sx:{pl:2,pr:1,flexGrow:1,minWidth:0},children:[(0,w.jsx)(g.Z,{variant:"subtitle2",noWrap:!0,children:i}),(0,w.jsxs)(j.Z,{spacing:.5,direction:"row",alignItems:"center",sx:{color:"text.secondary"},children:[(0,w.jsx)(p.Z,{icon:"eva:pin-fill",width:16,sx:{flexShrink:0}}),(0,w.jsx)(g.Z,{variant:"body2",component:"span",noWrap:!0,children:t})]})]}),(0,w.jsx)(N.Z,{size:"small",onClick:function(){return h(!x)},variant:x?"text":"outlined",color:x?"primary":"inherit",startIcon:x&&(0,w.jsx)(p.Z,{icon:"eva:checkmark-fill"}),sx:{flexShrink:0},children:x?"Followed":"Follow"})]})}function de(){var e=(0,f.K$)().themeStretch,n=(0,x.E)().user,i=(0,o.useState)(""),Z=(0,r.Z)(i,2),j=Z[0],v=Z[1],b=(0,o.useState)("profile"),g=(0,r.Z)(b,2),y=g[0],k=g[1],_=[{value:"profile",label:"Profile",icon:(0,w.jsx)(p.Z,{icon:"ic:round-account-box"}),component:(0,w.jsx)(B,{info:h.oE,posts:h.c8})},{value:"followers",label:"Followers",icon:(0,w.jsx)(p.Z,{icon:"eva:heart-fill"}),component:(0,w.jsx)(ae,{followers:h.gY})},{value:"friends",label:"Friends",icon:(0,w.jsx)(p.Z,{icon:"eva:people-fill"}),component:(0,w.jsx)(ie,{friends:h.fw,searchFriends:j,onSearchFriends:function(e){return v(e.target.value)}})},{value:"gallery",label:"Gallery",icon:(0,w.jsx)(p.Z,{icon:"ic:round-perm-media"}),component:(0,w.jsx)(se,{gallery:h.BU})}];return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(t.ql,{children:(0,w.jsx)("title",{children:" User: Profile | Business Essentials "})}),(0,w.jsxs)(s.Z,{maxWidth:!e&&"lg",children:[(0,w.jsx)(m.Z,{heading:"Profile",links:[{name:"Dashboard",href:u.vB.root},{name:"User",href:u.vB.user.root},{name:null===n||void 0===n?void 0:n.displayName}]}),(0,w.jsxs)(l.Z,{sx:{mb:3,height:280,position:"relative"},children:[(0,w.jsx)($,{name:null===n||void 0===n?void 0:n.displayName,role:h.oE.role,cover:h.oE.cover}),(0,w.jsx)(a.Z,{value:y,onChange:function(e,n){return k(n)},sx:{width:1,bottom:0,zIndex:9,position:"absolute",bgcolor:"background.paper","& .MuiTabs-flexContainer":{pr:{md:3},justifyContent:{sm:"center",md:"flex-end"}}},children:_.map((function(e){return(0,w.jsx)(c.Z,{value:e.value,icon:e.icon,label:e.label},e.value)}))})]}),_.map((function(e){return e.value===y&&(0,w.jsxs)(d.Z,{children:[" ",e.component," "]},e.value)}))]})]})}}}]);