import{r as ie,a as s,u as ce,b as ue,c as U,d as de,e as fe,f as he,g as A,h as pe,i as B,j as me,k as u}from"./index-CI29nY7s.js";const ve="Error preloading route! ☝️";var ye=ie();function ge(a,y){const r=ce(),[d,g]=s.useState(!1),v=s.useRef(!1),l=ue(y),{activeProps:x=()=>({className:"active"}),inactiveProps:O=()=>({}),activeOptions:o,to:T,preload:M,preloadDelay:V,hashScrollIntoView:W,replace:Q,startTransition:$,resetScroll:G,viewTransition:J,children:C,target:h,disabled:n,style:b,className:P,onClick:S,onFocus:k,onMouseEnter:_,onMouseLeave:E,onTouchStart:R,ignoreBlocker:X,...Y}=a,{params:Se,search:ke,hash:_e,state:Ee,mask:Re,reloadDocument:we,...I}=Y,F=s.useMemo(()=>{try{return new URL(`${T}`),"external"}catch{}return"internal"},[T]),Z=U({select:e=>e.location.search,structuralSharing:!0}),N=de({select:e=>{var t;return a.from??((t=e[e.length-1])==null?void 0:t.fullPath)}}),i=s.useMemo(()=>({...a,from:N}),[a,N]),c=s.useMemo(()=>r.buildLocation(i),[r,i,Z]),p=s.useMemo(()=>i.reloadDocument?!1:M??r.options.defaultPreload,[r.options.defaultPreload,M,i.reloadDocument]),ee=V??r.options.defaultPreloadDelay??0,w=U({select:e=>{if(o!=null&&o.exact){if(!pe(e.location.pathname,c.pathname,r.basepath))return!1}else{const t=B(e.location.pathname,r.basepath).split("/");if(!B(c.pathname,r.basepath).split("/").every((se,le)=>se===t[le]))return!1}return((o==null?void 0:o.includeSearch)??!0)&&!me(e.location.search,c.search,{partial:!(o!=null&&o.exact),ignoreUndefined:!(o!=null&&o.explicitUndefined)})?!1:o!=null&&o.includeHash?e.location.hash===c.hash:!0}}),f=s.useCallback(()=>{r.preloadRoute(i).catch(e=>{console.warn(e),console.warn(ve)})},[i,r]),te=s.useCallback(e=>{e!=null&&e.isIntersecting&&f()},[f]);if(fe(l,te,{rootMargin:"100px"},{disabled:!!n||p!=="viewport"}),he(()=>{v.current||!n&&p==="render"&&(f(),v.current=!0)},[n,f,p]),F==="external")return{...I,ref:l,type:F,href:T,...C&&{children:C},...h&&{target:h},...n&&{disabled:n},...b&&{style:b},...P&&{className:P},...S&&{onClick:S},...k&&{onFocus:k},..._&&{onMouseEnter:_},...E&&{onMouseLeave:E},...R&&{onTouchStart:R}};const re=e=>{if(!n&&!Te(e)&&!e.defaultPrevented&&(!h||h==="_self")&&e.button===0){e.preventDefault(),ye.flushSync(()=>{g(!0)});const t=r.subscribe("onResolved",()=>{t(),g(!1)});return r.navigate({...i,replace:Q,resetScroll:G,hashScrollIntoView:W,startTransition:$,viewTransition:J,ignoreBlocker:X})}},q=e=>{n||p&&f()},ae=q,ne=e=>{if(n)return;const t=e.target||{};if(p){if(t.preloadTimeout)return;t.preloadTimeout=setTimeout(()=>{t.preloadTimeout=null,f()},ee)}},oe=e=>{if(n)return;const t=e.target||{};t.preloadTimeout&&(clearTimeout(t.preloadTimeout),t.preloadTimeout=null)},m=e=>t=>{var L;(L=t.persist)==null||L.call(t),e.filter(Boolean).forEach(K=>{t.defaultPrevented||K(t)})},j=w?A(x,{})??{}:{},D=w?{}:A(O,{}),z=[P,j.className,D.className].filter(Boolean).join(" "),H={...b,...j.style,...D.style};return{...I,...j,...D,href:n?void 0:c.maskedLocation?r.history.createHref(c.maskedLocation.href):r.history.createHref(c.href),ref:l,onClick:m([S,re]),onFocus:m([k,q]),onMouseEnter:m([_,ne]),onMouseLeave:m([E,oe]),onTouchStart:m([R,ae]),disabled:!!n,target:h,...Object.keys(H).length&&{style:H},...z&&{className:z},...n&&{role:"link","aria-disabled":!0},...w&&{"data-status":"active","aria-current":"page"},...d&&{"data-transitioning":"transitioning"}}}const xe=s.forwardRef((a,y)=>{const{_asChild:r,...d}=a,{type:g,ref:v,...l}=ge(d,y),x=typeof d.children=="function"?d.children({isActive:l["data-status"]==="active"}):d.children;return typeof r>"u"&&delete l.disabled,s.createElement(r||"a",{...l,ref:v},x)});function Te(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}const be="_container_ozp5w_1",Pe={container:be},De=function(){return u.jsxs("div",{className:Pe.container,children:[u.jsx("h1",{children:"Welcome visitor!"}),u.jsxs("p",{children:["List of challenges provided by"," ",u.jsx("a",{href:"https://www.frontendmentor.io?ref=challenge",target:"_blank",children:"Frontend Mentor"}),"."]}),u.jsx("ol",{children:u.jsx("li",{children:u.jsx(xe,{to:"/qr-code-component",children:"QR code component"})})})]})};export{De as component};
