var ht=Object.defineProperty;var vt=(e,s,a)=>s in e?ht(e,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[s]=a;var P=(e,s,a)=>vt(e,typeof s!="symbol"?s+"":s,a);import{b2 as bt,b3 as he,b4 as Ne,m as Te,r as T,q as w,G as se,o as K,b5 as ze,R as gt,t as _,Q as ie,ao as pt,z as yt,ai as wt,w as Tt,f as _e,b6 as _t,a8 as Ct,E as re,I as qe,T as ve,U as Ee,F as U,ab as Mt,ac as We,B as kt,b7 as St,ap as At,aq as It,ar as le,e as M,at as ye,c as q,ay as ce,az as Ce,aY as xt,b as B,d as $t,aC as H,_ as Rt,aB as we,ax as Bt,aD as Q,aW as qt,aH as De,aP as Le,aG as Oe,b0 as Et,b8 as je,b9 as oe,aJ as Ue,aZ as ne,ba as ae,bb as Ge,bc as be,bd as Dt,be as Lt,bf as ge,bg as Ot,aN as Pt,bh as Ht}from"./index-DLNx2Q6-.js";import{t as Pe}from"./appTxt-BEeGUqaA.js";let Vt=0;const Ft=["click","keydown"],Nt={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${Vt++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function zt(e,s,a,o){const t=bt(Ne,he);if(t===he)return console.error("QTab/QRouteTab component needs to be child of QTabs"),he;const{proxy:v}=Te(),c=T(null),f=T(null),r=T(null),m=w(()=>e.disable===!0||e.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},e.ripple===!0?{}:e.ripple)),p=w(()=>t.currentModel.value===e.name),A=w(()=>"q-tab relative-position self-stretch flex flex-center text-center"+(p.value===!0?" q-tab--active"+(t.tabProps.value.activeClass?" "+t.tabProps.value.activeClass:"")+(t.tabProps.value.activeColor?` text-${t.tabProps.value.activeColor}`:"")+(t.tabProps.value.activeBgColor?` bg-${t.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&t.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(e.noCaps===!0||t.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(e.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")),E=w(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(t.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(e.contentClass!==void 0?` ${e.contentClass}`:"")),k=w(()=>e.disable===!0||t.hasFocus.value===!0||p.value===!1&&t.hasActiveTab.value===!0?-1:e.tabindex||0);function I(u,C){var S;if(C!==!0&&(u==null?void 0:u.qAvoidFocus)!==!0&&((S=c.value)==null||S.focus()),e.disable!==!0){t.updateModel({name:e.name}),a("click",u);return}}function D(u){yt(u,[13,32])?I(u,!0):wt(u)!==!0&&u.keyCode>=35&&u.keyCode<=40&&u.altKey!==!0&&u.metaKey!==!0&&t.onKbdNavigate(u.keyCode,v.$el)===!0&&Tt(u),a("keydown",u)}function W(){const u=t.tabProps.value.narrowIndicator,C=[],S=_("div",{ref:r,class:["q-tab__indicator",t.tabProps.value.indicatorClass]});e.icon!==void 0&&C.push(_(ie,{class:"q-tab__icon",name:e.icon})),e.label!==void 0&&C.push(_("div",{class:"q-tab__label"},e.label)),e.alert!==!1&&C.push(e.alertIcon!==void 0?_(ie,{class:"q-tab__alert-icon",color:e.alert!==!0?e.alert:void 0,name:e.alertIcon}):_("div",{class:"q-tab__alert"+(e.alert!==!0?` text-${e.alert}`:"")})),u===!0&&C.push(S);const x=[_("div",{class:"q-focus-helper",tabindex:-1,ref:c}),_("div",{class:E.value},pt(s.default,C))];return u===!1&&x.push(S),x}const V={name:w(()=>e.name),rootRef:f,tabIndicatorRef:r,routeData:o};se(()=>{t.unregisterTab(V)}),K(()=>{t.registerTab(V)});function X(u,C){const S={ref:f,class:A.value,tabindex:k.value,role:"tab","aria-selected":p.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:I,onKeydown:D,...C};return ze(_(u,S,W()),[[gt,m.value]])}return{renderTab:X,$tabs:t}}const Wt=_e({name:"QTab",props:Nt,emits:Ft,setup(e,{slots:s,emit:a}){const{renderTab:o}=zt(e,s,a);return()=>o("div")}});function jt(){const e=T(!_t.value);return e.value===!1&&K(()=>{e.value=!0}),{isHydrated:e}}const Qe=typeof ResizeObserver<"u",He=Qe===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"},Ut=_e({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:s}){let a=null,o,t={width:-1,height:-1};function v(r){r===!0||e.debounce===0||e.debounce==="0"?c():a===null&&(a=setTimeout(c,e.debounce))}function c(){if(a!==null&&(clearTimeout(a),a=null),o){const{offsetWidth:r,offsetHeight:m}=o;(r!==t.width||m!==t.height)&&(t={width:r,height:m},s("resize",t))}}const{proxy:f}=Te();if(f.trigger=v,Qe===!0){let r;const m=p=>{o=f.$el.parentNode,o?(r=new ResizeObserver(v),r.observe(o),c()):p!==!0&&re(()=>{m(!0)})};return K(()=>{m()}),se(()=>{a!==null&&clearTimeout(a),r!==void 0&&(r.disconnect!==void 0?r.disconnect():o&&r.unobserve(o))}),Ct}else{let r=function(){a!==null&&(clearTimeout(a),a=null),A!==void 0&&(A.removeEventListener!==void 0&&A.removeEventListener("resize",v,qe.passive),A=void 0)},m=function(){r(),o!=null&&o.contentDocument&&(A=o.contentDocument.defaultView,A.addEventListener("resize",v,qe.passive),c())};const{isHydrated:p}=jt();let A;return K(()=>{re(()=>{o=f.$el,o&&m()})}),se(r),()=>{if(p.value===!0)return _("object",{class:"q--avoid-card-border",style:He.style,tabindex:-1,type:"text/html",data:He.url,"aria-hidden":"true",onLoad:m})}}}});let Ke=!1;{const e=document.createElement("div");e.setAttribute("dir","rtl"),Object.assign(e.style,{width:"1px",height:"1px",overflow:"auto"});const s=document.createElement("div");Object.assign(s.style,{width:"1000px",height:"1px"}),document.body.appendChild(e),e.appendChild(s),e.scrollLeft=-1e3,Ke=e.scrollLeft>=0,e.remove()}function Gt(e,s,a){const o=a===!0?["left","right"]:["top","bottom"];return`absolute-${s===!0?o[0]:o[1]}${e?` text-${e}`:""}`}const Qt=["left","center","right","justify"],Kt=_e({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>Qt.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(e,{slots:s,emit:a}){const{proxy:o}=Te(),{$q:t}=o,{registerTick:v}=ve(),{registerTick:c}=ve(),{registerTick:f}=ve(),{registerTimeout:r,removeTimeout:m}=Ee(),{registerTimeout:p,removeTimeout:A}=Ee(),E=T(null),k=T(null),I=T(e.modelValue),D=T(!1),W=T(!0),V=T(!1),X=T(!1),u=[],C=T(0),S=T(!1);let x=null,F=null,$;const Je=w(()=>({activeClass:e.activeClass,activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:Gt(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps})),Ze=w(()=>{const n=C.value,i=I.value;for(let l=0;l<n;l++)if(u[l].name.value===i)return!0;return!1}),et=w(()=>`q-tabs__content--align-${D.value===!0?"left":X.value===!0?"justify":e.align}`),tt=w(()=>`q-tabs row no-wrap items-center q-tabs--${D.value===!0?"":"not-"}scrollable q-tabs--${e.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${e.outsideArrows===!0?"outside":"inside"} q-tabs--mobile-with${e.mobileArrows===!0?"":"out"}-arrows`+(e.dense===!0?" q-tabs--dense":"")+(e.shrink===!0?" col-shrink":"")+(e.stretch===!0?" self-stretch":"")),nt=w(()=>"q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position "+et.value+(e.contentClass!==void 0?` ${e.contentClass}`:"")),J=w(()=>e.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),Z=w(()=>e.vertical!==!0&&t.lang.rtl===!0),ue=w(()=>Ke===!1&&Z.value===!0);U(Z,z),U(()=>e.modelValue,n=>{de({name:n,setCurrent:!0,skipEmit:!0})}),U(()=>e.outsideArrows,ee);function de({name:n,setCurrent:i,skipEmit:l}){I.value!==n&&(l!==!0&&e["onUpdate:modelValue"]!==void 0&&a("update:modelValue",n),(i===!0||e["onUpdate:modelValue"]===void 0)&&(at(I.value,n),I.value=n))}function ee(){v(()=>{E.value&&Me({width:E.value.offsetWidth,height:E.value.offsetHeight})})}function Me(n){if(J.value===void 0||k.value===null)return;const i=n[J.value.container],l=Math.min(k.value[J.value.scroll],Array.prototype.reduce.call(k.value.children,(g,h)=>g+(h[J.value.content]||0),0)),b=i>0&&l>i;D.value=b,b===!0&&c(z),X.value=i<parseInt(e.breakpoint,10)}function at(n,i){const l=n!=null&&n!==""?u.find(g=>g.name.value===n):null,b=i!=null&&i!==""?u.find(g=>g.name.value===i):null;if(te===!0)te=!1;else if(l&&b){const g=l.tabIndicatorRef.value,h=b.tabIndicatorRef.value;x!==null&&(clearTimeout(x),x=null),g.style.transition="none",g.style.transform="none",h.style.transition="none",h.style.transform="none";const d=g.getBoundingClientRect(),y=h.getBoundingClientRect();h.style.transform=e.vertical===!0?`translate3d(0,${d.top-y.top}px,0) scale3d(1,${y.height?d.height/y.height:1},1)`:`translate3d(${d.left-y.left}px,0,0) scale3d(${y.width?d.width/y.width:1},1,1)`,f(()=>{x=setTimeout(()=>{x=null,h.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",h.style.transform="none"},70)})}b&&D.value===!0&&N(b.rootRef.value)}function N(n){const{left:i,width:l,top:b,height:g}=k.value.getBoundingClientRect(),h=n.getBoundingClientRect();let d=e.vertical===!0?h.top-b:h.left-i;if(d<0){k.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor(d),z();return}d+=e.vertical===!0?h.height-g:h.width-l,d>0&&(k.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil(d),z())}function z(){const n=k.value;if(n===null)return;const i=n.getBoundingClientRect(),l=e.vertical===!0?n.scrollTop:Math.abs(n.scrollLeft);Z.value===!0?(W.value=Math.ceil(l+i.width)<n.scrollWidth-1,V.value=l>0):(W.value=l>0,V.value=e.vertical===!0?Math.ceil(l+i.height)<n.scrollHeight:Math.ceil(l+i.width)<n.scrollWidth)}function ke(n){F!==null&&clearInterval(F),F=setInterval(()=>{it(n)===!0&&L()},5)}function Se(){ke(ue.value===!0?Number.MAX_SAFE_INTEGER:0)}function Ae(){ke(ue.value===!0?0:Number.MAX_SAFE_INTEGER)}function L(){F!==null&&(clearInterval(F),F=null)}function ot(n,i){const l=Array.prototype.filter.call(k.value.children,y=>y===i||y.matches&&y.matches(".q-tab.q-focusable")===!0),b=l.length;if(b===0)return;if(n===36)return N(l[0]),l[0].focus(),!0;if(n===35)return N(l[b-1]),l[b-1].focus(),!0;const g=n===(e.vertical===!0?38:37),h=n===(e.vertical===!0?40:39),d=g===!0?-1:h===!0?1:void 0;if(d!==void 0){const y=Z.value===!0?-1:1,R=l.indexOf(i)+d*y;return R>=0&&R<b&&(N(l[R]),l[R].focus({preventScroll:!0})),!0}}const st=w(()=>ue.value===!0?{get:n=>Math.abs(n.scrollLeft),set:(n,i)=>{n.scrollLeft=-i}}:e.vertical===!0?{get:n=>n.scrollTop,set:(n,i)=>{n.scrollTop=i}}:{get:n=>n.scrollLeft,set:(n,i)=>{n.scrollLeft=i}});function it(n){const i=k.value,{get:l,set:b}=st.value;let g=!1,h=l(i);const d=n<h?-1:1;return h+=d*5,h<0?(g=!0,h=0):(d===-1&&h<=n||d===1&&h>=n)&&(g=!0,h=n),b(i,h),z(),g}function Ie(n,i){for(const l in n)if(n[l]!==i[l])return!1;return!0}function rt(){let n=null,i={matchedLen:0,queryDiff:9999,hrefLen:0};const l=u.filter(d=>{var y;return((y=d.routeData)==null?void 0:y.hasRouterLink.value)===!0}),{hash:b,query:g}=o.$route,h=Object.keys(g).length;for(const d of l){const y=d.routeData.exact.value===!0;if(d.routeData[y===!0?"linkIsExactActive":"linkIsActive"].value!==!0)continue;const{hash:R,query:fe,matched:ft,href:mt}=d.routeData.resolvedLink.value,me=Object.keys(fe).length;if(y===!0){if(R!==b||me!==h||Ie(g,fe)===!1)continue;n=d.name.value;break}if(R!==""&&R!==b||me!==0&&Ie(fe,g)===!1)continue;const O={matchedLen:ft.length,queryDiff:h-me,hrefLen:mt.length-R.length};if(O.matchedLen>i.matchedLen){n=d.name.value,i=O;continue}else if(O.matchedLen!==i.matchedLen)continue;if(O.queryDiff<i.queryDiff)n=d.name.value,i=O;else if(O.queryDiff!==i.queryDiff)continue;O.hrefLen>i.hrefLen&&(n=d.name.value,i=O)}if(n===null&&u.some(d=>d.routeData===void 0&&d.name.value===I.value)===!0){te=!1;return}de({name:n,setCurrent:!0})}function lt(n){if(m(),S.value!==!0&&E.value!==null&&n.target&&typeof n.target.closest=="function"){const i=n.target.closest(".q-tab");i&&E.value.contains(i)===!0&&(S.value=!0,D.value===!0&&N(i))}}function ct(){r(()=>{S.value=!1},30)}function j(){$e.avoidRouteWatcher===!1?p(rt):A()}function xe(){if($===void 0){const n=U(()=>o.$route.fullPath,j);$=()=>{n(),$=void 0}}}function ut(n){u.push(n),C.value++,ee(),n.routeData===void 0||o.$route===void 0?p(()=>{if(D.value===!0){const i=I.value,l=i!=null&&i!==""?u.find(b=>b.name.value===i):null;l&&N(l.rootRef.value)}}):(xe(),n.routeData.hasRouterLink.value===!0&&j())}function dt(n){u.splice(u.indexOf(n),1),C.value--,ee(),$!==void 0&&n.routeData!==void 0&&(u.every(i=>i.routeData===void 0)===!0&&$(),j())}const $e={currentModel:I,tabProps:Je,hasFocus:S,hasActiveTab:Ze,registerTab:ut,unregisterTab:dt,verifyRouteModel:j,updateModel:de,onKbdNavigate:ot,avoidRouteWatcher:!1};St(Ne,$e);function Re(){x!==null&&clearTimeout(x),L(),$==null||$()}let Be,te;return se(Re),Mt(()=>{Be=$!==void 0,Re()}),We(()=>{Be===!0&&(xe(),te=!0,j()),ee()}),()=>_("div",{ref:E,class:tt.value,role:"tablist",onFocusin:lt,onFocusout:ct},[_(Ut,{onResize:Me}),_("div",{ref:k,class:nt.value,onScroll:z},kt(s.default)),_(ie,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(W.value===!0?"":" q-tabs__arrow--faded"),name:e.leftIcon||t.iconSet.tabs[e.vertical===!0?"up":"left"],onMousedownPassive:Se,onTouchstartPassive:Se,onMouseupPassive:L,onMouseleavePassive:L,onTouchendPassive:L}),_(ie,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(V.value===!0?"":" q-tabs__arrow--faded"),name:e.rightIcon||t.iconSet.tabs[e.vertical===!0?"down":"right"],onMousedownPassive:Ae,onTouchstartPassive:Ae,onMouseupPassive:L,onMouseleavePassive:L,onTouchendPassive:L})])}}),bn={__name:"MyTabs",props:At(["tabs","line"],{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const s=It(e,"modelValue");return(a,o)=>(M(),le(Kt,{modelValue:s.value,"onUpdate:modelValue":o[0]||(o[0]=t=>s.value=t),dense:"","no-caps":"","inline-label":e.line},{default:ye(()=>[(M(!0),q(ce,null,Ce(e.tabs,(t,v)=>(M(),le(Wt,{key:v,name:t.name,icon:t.icon,label:t.name,class:xt(s.value==t.name?"text-blue":"text-teal")},null,8,["name","icon","label","class"]))),128))]),_:1},8,["modelValue","inline-label"]))}},Yt=["src"],Xt={class:"txt5 ctr1"},Jt={class:"row unset m10 around"},Zt=["src"],en={class:"txt3"},gn={__name:"MyItem1B",props:["x"],setup(e){return(s,a)=>(M(),q(ce,null,[B("img",{class:"logo",src:e.x.logo},null,8,Yt),B("div",Xt,H(e.x.name),1),$t(Rt,{class:"m5 scroll",md:e.x.info},null,8,["md"]),B("div",Jt,[(M(!0),q(ce,null,Ce(e.x._team,o=>(M(),q("div",{key:o.role,class:"ctr1"},[B("img",{class:"logo3",src:o.photo||o.img},null,8,Zt),B("div",en,H(o.role),1),B("div",{style:Bt(Q(qt)(o))},H(o.name),5),a[0]||(a[0]=B("div",{class:"f1"},null,-1)),o.uid?we("",!0):(M(),le(Oe,{key:0,c:"grey",onClick:t=>e.x._join(o)},{default:ye(()=>[De(H(Q(Le).claim),1)]),_:2},1032,["onClick"])),e.x._getRole()==o.role?(M(),le(Oe,{key:1,onClick:t=>e.x._join(o)},{default:ye(()=>[De(H(Q(Le).leave),1)]),_:2},1032,["onClick"])):we("",!0)]))),128))])],64))}},pe=20,pn={__name:"MyList",props:["chat"],emits:["top","bottom"],setup(e,{emit:s}){const a=e,o=s,t=T();let v=0;const c=Et.throttle(()=>{const r=t.value;if(!r)return;v=r.scrollTop;const[m,p]=[r.scrollTop+r.clientHeight,r.scrollHeight];r.scrollTop<pe&&o("top"),m>=p-pe&&o("bottom")},200);We(()=>t.value.scrollTop=v);const f=(r="auto")=>{const m=t.value;m&&setTimeout(()=>{m.scrollTo({top:m.scrollHeight,behavior:r})},100)};return K(()=>{a.chat&&re(()=>f())}),U(()=>{var r;return(r=t.value)==null?void 0:r.scrollHeight},async(r,m)=>{const p=t.value;if(!a.chat||!m||!p)return;p.scrollTop+p.clientHeight>=m-pe&&re(()=>f("smooth"))}),(r,m)=>(M(),q("div",{ref_key:"div",ref:t,class:"col scroll",onScroll:m[0]||(m[0]=(...p)=>Q(c)&&Q(c)(...p))},[je(r.$slots,"default")],544))}},tn={uid:"AI",name:"AI",sex:"F",photo:"/imgsTSG/TSG.png"},nn={"Richard.webp":"M","Monica.webp":"F","Erlich.webp":"M","Carla.webp":"F","Bighead.webp":"M"},Y=Object.entries(nn).map(([e,s])=>{const a=e.split(".")[0];return{uid:a,name:a,sex:s,photo:`/imgsTSG/demo/${e}`}}),G=Y[0],Ve=[{name:"Context",info:`
An **AI-native office suite** (docs, slides, sheets) with a 
local-first, privacy-preserving design.
**Why it stands out:** Focus on security + on-device workflows 
for enterprises that can't ship data to the cloud; deep product 
POV on “automating knowledge work” rather than adding a chatbot.
**How they raised:** Closed an **$11M seed** led by **Lux Capital** 
with **Qualcomm Ventures** and **General Catalyst** after showing 
early enterprise pilots and a roadmap to automate “$25T hours” of 
knowledge work. Clear thesis + top-tier backers signaled credibility 
to follow-on investors.
    `},{name:"Endex",info:`
An **Excel-native AI agent** that becomes a “digital analyst” inside 
spreadsheets for finance teams.
**Why it stands out:** Works *where analysts live* (Excel), pairs 
reasoning models with spreadsheet structure to reduce copy-paste 
and manual modeling.
**How they raised:** Won an **$14M seed** **led by the OpenAI 
Startup Fund** after a year of close collaboration and product demos 
publicly shared by the founder. The “distribution through Excel” 
story + visible founder-market fit made the round competitive.
    `},{name:"OpenRouter",info:`
The **one API** to access/rout to **400+ AI models** across **60+ 
providers** with unified billing and guardrails.
**Why it stands out:** Model-agnostic layer becomes “picks & shovels” 
infra as models fragment; loved by 2.5M+ devs for fast switching, 
cost control, and evals.
**How they raised:** Announced a **$40M combined Seed + 
Series A** led by **a16z** and **Menlo**, with **Sequoia** 
participating—sealed by developer traction metrics and the 
platform's role as neutral infra.
    `},{name:"FriendliAI",info:`
A **cloud-agnostic inference platform** to run large models fast and 
cheap in production.
**Why it stands out:** Focused *only* on inference economics and 
latency (not training), with customers moving from experiments to 
scale.
**How they raised:** Landed a **$20M seed extension** 
(led by **Capstone Partners** with **Sierra Ventures**, 
**Alumni Ventures**, **KDB**, **KB Securities**) after showcasing 
enterprise workloads with big latency/cost wins.
    `},{name:"Applied Computing",info:`
Builds **foundation models for oil, gas, and petrochemicals** to 
optimize planning, safety, and emissions.
**Why it stands out:** Vertical AI in a huge, under-digitized 
industry with proprietary data loops and domain constraints where 
general LLMs fail.
**How they raised:** Closed a **~£9m/€10.7m seed** led by 
**Stride.VC** (with Repeat.vc) on a de-risked GTM: pilots with 
energy majors + clear ROI stories (downtime, throughput, compliance).
    `},{name:"Memories.ai",info:`
A **long-context video intelligence engine** (“Large Visual Memory 
Model”) that makes hours of footage **searchable, analyzable, and 
recallable**.
**Why it stands out:** Treats video as persistent memory 
(not single frames), unlocking compliance review, media search, 
and enterprise knowledge retrieval.
**How they raised:** Secured an **$8M seed** (reportedly led by 
Susa Ventures with Samsung Next, Fusion Fund, others) after 
shipping on-device prototypes and enterprise POCs in media/security.
    `},{name:"Samphire Neuroscience",info:`
Makers of **Nettle**, a CE-marked **tDCS headband** for menstrual 
pain and mood—**non-hormonal, wearable neurotherapy**.
**Why it stands out:** Women's neuro-wellness with clinical 
pathway + regulatory progress; daily 20-min sessions, 
consumer-friendly industrial design.
**How they raised:** Announced a **$5M seed** (co-led by 
**Inventure VC** and **Fortify Ventures**) leveraging CE 
certification, early sales signals, and a clear expansion plan.
    `},{name:"NeuroBionics",info:`
Develops **endovascular neuromodulation**—placing neural interfaces 
via **blood vessels** (no open brain surgery).
**Why it stands out:** Minimally invasive access to deep brain 
targets opens new indications and lowers cost/risk vs. surgical 
implants.
**How they raised:** Closed an **oversubscribed $5M seed** 
(Jan 2025) by pairing MIT-origin tech with a staged clinical 
strategy and partnerships, convincing med-tech investors on 
time-to-clinic.
    `},{name:"Grey Matter Neurosciences",info:`
Building a **focused-ultrasound headset** to treat Alzheimer's 
symptoms (drug-device approach).
**Why it stands out:** Licensed **Sunnybrook** world-leading FUS IP; 
noninvasive modality with strong translational backing and support 
from **Ontario Brain Institute**.
**How they raised:** Secured a **$14M seed** to fund device 
development and clinical assessment—investors leaned in due to 
exclusive IP licenses + clear trial plan with leading institutes.
    `},{name:"Subsense",info:`
A **non-surgical, nanoparticle-based bidirectional BCI** aiming for 
high-bandwidth brain-device links without implants.
**Why it stands out:** Novel materials approach for BCIs with 
partnerships across top neuro labs; potential to unlock new 
therapeutic + assistive categories.
**How they raised:** Emerged from stealth with a **$17M seed** 
(Feb 2025), attracting health/med-tech VCs on the strength of the 
core science, early in-vivo roadmap, and cross-institution 
collaborations.
    `},{name:"Builder.ai",info:`
An app-development platform touted as “AI-powered,” promising to 
let users build apps without code (allegedly by using AI).
**Stand-out pitch:** Backed by Microsoft, QIA, touted as a unicorn 
worth >$1B, and raised ~$230M in funding after 2023.
**How it failed:** It collapsed into bankruptcy in 2025 after it was 
revealed that “AI-powered” meant hundreds of engineers manually 
coding. A lender seized most of its cash, and investigations 
uncovered inflated metrics and misrepresented tech.
    `},{name:"Rain AI",info:`
A chip-making startup developing compute-in-memory silicon aimed 
at accelerating AI workloads.
**Stand-out pitch:** Backed by Sam Altman, raised a $25M seed, 
planned a $150M Series B.
**How it failed:** The Series B collapsed in 2025 amid leadership 
changes—CEO stepped down—and manufacturing delays. The company 
resorted to a $3M bridge loan and began exploring a sale to stay 
afloat.
    `},{name:"BeyondMinds",info:`
An AI-as-a-service platform delivering tailored ML model pipelines 
to enterprises.
**Stand-out pitch:** Strong early traction and enterprise interest 
underlined early momentum.
**How it failed:** The company shut down after failing to raise 
follow-on funding or find a buyer in a tough market. Co-founders 
split and some moved on to start anew. 
    `},{name:"DeepGlint",info:`
A Chinese AI/vision startup focused on in-store consumer behavior 
analytics using computer vision.
**Stand-out pitch:** Early praise, IPO on Shanghai's STAR Market, 
even dubbed “very cool” by Bill Gates.
**How it failed:** Lost focus on product-market fit as China shifted 
to e-commerce; only one major client accounted for 80% revenue. 
Founder stepped down amid rising losses. 
    `},{name:"Prophesee",info:`
A neuromorphic vision hardware startup building event-based sensors 
mimicking human eye behavior.
**Stand-out pitch:** Raised ~€126M on high-tech visual sensing 
promise.
**How it failed:** Funding round delays proved fatal. The company 
entered insolvency and judicial administration. 
    `},{name:"Forward Healthcare",info:`
A tech-first “doctor's office of the future” with AI-powered 
CarePods for automated health checks.
**Stand-out pitch:** Raised huge capital (~$650M); ambitious rollout 
of CarePods in shopping malls, aimed to scale rapidly.
**How it failed:** Automated blood draws frequently failed, patients 
got stuck in pods, rollout went from planned 3,200 to only 2 
locations. Abrupt shutdown followed. 
    `}],Ye=(e,s="Mine")=>{e=parseInt(e);const a=Ve[e%Ve.length],o=Y[e%Y.length],t=Ue({id:e,logo:`/imgsTSG/demo/${a.name}.jpeg`,name:a.name,info:a.info,public:!0,password:"888",_team:[{role:"CEO",...o},{role:"CTO"},{role:"CPO"},{role:"CMO"}],_msgs:oe(100).map(c=>Fe(c,"msg")),_cmts:oe(100).map(c=>Fe(c,"cmt")),_metricsHist:{ts:oe(200).map(c=>Date.now()+c*Ge),VAL:ae.grow(1e6),MRR:ae.grow(1e3),DAU:ae.grow(1e4)},_star:["Mine","Stars"].includes(s),_nStar:ne(ae.uni(1e3,1e5))});t._team.forEach(c=>c.img=`/icons/${c.role}.png`),t._getRole=function(){var c;return(c=this._team.find(f=>f.uid==G.uid))==null?void 0:c.role},t._join=function(c){const f=this._team.find(r=>r.uid==G.uid);f&&Object.keys(G).forEach(r=>delete f[r]),(f==null?void 0:f.role)!=c.role&&Object.assign(c,G)},t._msgEdit={};const v=t._metricsHist;t._metrics={VAL:"$"+ne(be(v.VAL)),MRR:"$"+ne(be(v.MRR)),DAU:ne(be(v.DAU))},t._link=`/startup?id=${t.id}`,t._onStar=()=>t._star=!t._star,s=="Mine"&&(t._edit=()=>Xe.cudStartup(t));for(let c of["_msgs","_cmts"])t[c].forEach(f=>{f.my&&f.type!="action"&&(f._edit=()=>t._msgEdit=Dt(f))});return t},an=(e,s=0,a=10)=>oe(a,s).map(o=>Ye(o,e)),on=[{type:"scenario",md:`DEMO SCENARIO: Your startup just secured a small angel check of $50k. 
But now comes the real test: users love your concept, but churn is at 40%. 
Your DAU has dipped from 1,200 to 800 in a week. Investors are circling back 
and asking: *Are you building a product people can't live without?* 
Core Metrics: Valuation $1.2M → $900k, MRR $500 → $350, DAU 800.`},{type:"action",md:`DEMO ACTION (CEO): I'm pushing us to double down on retention. 
I'll personally reach out to our top 20 active users, listen to their pain points, 
and turn that into our next sprint priorities.`},{type:"discussion",md:`DEMO DISCUSSION (CTO): I get the urgency, but if we pivot our entire roadmap 
every time users complain, we'll never stabilize. I'd rather ship one solid 
integration this week to prove we're adding real value.`},{type:"discussion",md:`DEMO DISCUSSION (CMO): I disagree—momentum matters. If we stop talking growth, 
investors will think we're stalling. We need a marketing stunt *now*, even if 
the product isn't perfect.`},{files:[{url:"/docs/pitch.pdf"},{url:"/docs/audio.webm"}]}],sn=[{type:"comment",md:`DEMO COMMENT (Investor Viewer): From my perspective, your numbers are red flags. 
If you can't fix retention within 2 months, no one will fund your next round.`},{type:"comment",md:`DEMO COMMENT (Random Founder): Honestly, this reminds me of my first startup. 
We obsessed over marketing before fixing churn—and it killed us. 
Don't make the same mistake.`},{type:"comment",md:`DEMO COMMENT (Skeptical Onlooker): Sounds like another overhyped tool. 
Why should anyone believe you'll succeed where 10 others failed?`},{type:"comment",md:`DEMO COMMENT (Supportive Peer Founder): Respect for putting yourselves out there. 
Every startup hits this wall. If you survive it, you'll come out stronger.`},{files:[{url:"/docs/audio.webm"}]}],Fe=(e,s)=>{const a=s=="msg"?on:sn,o=a[e%a.length],t=o.type=="scenario"?tn:Y[e%Y.length],v=Date.now()+e*Ge/3,c={id:e,ts:v,user:t,...o};return c.my=t.uid==G.uid,c};class rn{constructor(){P(this,"tab",Pe.tabs[0].name);P(this,"rooms",{});P(this,"roomTabs",["Mine","Stars","Explore"]);P(this,"map",{});P(this,"sortBy",Pe.sortItems[0]);P(this,"query","")}cudStartup(s={public:!0}){Lt({logo:{im:"/icons/logo.jpg"},name:{ph:"Startup Name"},info:{ph:"Idea Description (Markdown supported)"},public:{lb:"Public"},password:{ph:"Password",if:t=>!t.public}},s,(t,v)=>console.log(t,v))}async cudMsg(s,a){console.log(s,a)}async loadData(s){const{rooms:a,roomTabs:o,tab:t,map:v}=this;if(ge.value&&!s)return;ge.value=!0;const c=s?o:[t];for(let f of c){await Ot(200);const r=a[f]||[];a[f]=r.concat(an(f,r.length)),a[f].forEach(m=>v[m.id]=m)}ge.value=!1}async search(){const{sortBy:s,query:a}=this;console.log([s,a])}getStartup(s){const{map:a}=this;return a[s]||(a[s]=Ye(s)),a[s]}}const Xe=Ue(new rn);Xe.loadData(!0);const ln={key:0,class:"gh10"},cn={class:"key"},un={class:"val"},dn={__name:"MyDict",props:["dic"],setup(e){return(s,a)=>e.dic?(M(),q("div",ln,[(M(!0),q(ce,null,Ce(e.dic,(o,t)=>(M(),q("div",{key:t},[B("span",cn,H(t)+":",1),B("span",un,H(o),1)]))),128))])):we("",!0)}},yn=Pt(dn,[["__scopeId","data-v-1da06de9"]]),fn={class:"tab"},wn={__name:"MyTab",props:["show"],setup(e){return(s,a)=>ze((M(),q("div",fn,[je(s.$slots,"default")],512)),[[Ht,e.show]])}};export{yn as M,pn as _,wn as a,bn as b,gn as c,Ke as r,Xe as t};
