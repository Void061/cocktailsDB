(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[980],{5911:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/category/[categoryId]",function(){return r(8958)}])},1516:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,r,n){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5569:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(2648).Z,l=r(7273).Z,o=n(r(7294)),a=r(4532),s=r(3353),i=r(1410),u=r(9064),c=r(370),f=r(9955),d=r(4224),p=r(508),x=r(1516),h=r(4266);let g=new Set;function m(e,t,r,n,l){if(l||s.isLocalURL(t)){if(!n.bypassPrefetchedCheck){let l=void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0,o=t+"%"+r+"%"+l;if(g.has(o))return;g.add(o)}Promise.resolve(e.prefetch(t,r,n)).catch(e=>{})}}function y(e){return"string"==typeof e?e:i.formatUrl(e)}let v=o.default.forwardRef(function(e,t){let r,n;let{href:i,as:g,children:v,prefetch:C,passHref:j,replace:b,shallow:_,scroll:w,locale:k,onClick:N,onMouseEnter:M,onTouchStart:E,legacyBehavior:P=!1}=e,O=l(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);r=v,P&&("string"==typeof r||"number"==typeof r)&&(r=o.default.createElement("a",null,r));let L=!1!==C,T=o.default.useContext(f.RouterContext),S=o.default.useContext(d.AppRouterContext),I=null!=T?T:S,R=!T,{href:D,as:U}=o.default.useMemo(()=>{if(!T){let e=y(i);return{href:e,as:g?y(g):e}}let[e,t]=a.resolveHref(T,i,!0);return{href:e,as:g?a.resolveHref(T,g):t||e}},[T,i,g]),z=o.default.useRef(D),A=o.default.useRef(U);P&&(n=o.default.Children.only(r));let K=P?n&&"object"==typeof n&&n.ref:t,[Z,B,H]=p.useIntersection({rootMargin:"200px"}),X=o.default.useCallback(e=>{(A.current!==U||z.current!==D)&&(H(),A.current=U,z.current=D),Z(e),K&&("function"==typeof K?K(e):"object"==typeof K&&(K.current=e))},[U,K,D,H,Z]);o.default.useEffect(()=>{I&&B&&L&&m(I,D,U,{locale:k},R)},[U,D,B,k,L,null==T?void 0:T.locale,I,R]);let q={ref:X,onClick(e){P||"function"!=typeof N||N(e),P&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),I&&!e.defaultPrevented&&function(e,t,r,n,l,a,i,u,c,f){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let t=e.currentTarget,r=t.getAttribute("target");return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!s.isLocalURL(r)))return;e.preventDefault();let x=()=>{"beforePopState"in t?t[l?"replace":"push"](r,n,{shallow:a,locale:u,scroll:i}):t[l?"replace":"push"](n||r,{forceOptimisticNavigation:!f})};c?o.default.startTransition(x):x()}(e,I,D,U,b,_,w,k,R,L)},onMouseEnter(e){P||"function"!=typeof M||M(e),P&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),I&&(L||!R)&&m(I,D,U,{locale:k,priority:!0,bypassPrefetchedCheck:!0},R)},onTouchStart(e){P||"function"!=typeof E||E(e),P&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),I&&(L||!R)&&m(I,D,U,{locale:k,priority:!0,bypassPrefetchedCheck:!0},R)}};if(u.isAbsoluteUrl(U))q.href=U;else if(!P||j||"a"===n.type&&!("href"in n.props)){let e=void 0!==k?k:null==T?void 0:T.locale,t=(null==T?void 0:T.isLocaleDomain)&&x.getDomainLocale(U,e,null==T?void 0:T.locales,null==T?void 0:T.domainLocales);q.href=t||h.addBasePath(c.addLocale(U,e,null==T?void 0:T.defaultLocale))}return P?o.default.cloneElement(n,q):o.default.createElement("a",Object.assign({},O,q),r)});t.default=v,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},508:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:r,disabled:i}=e,u=i||!o,[c,f]=n.useState(!1),d=n.useRef(null),p=n.useCallback(e=>{d.current=e},[]);n.useEffect(()=>{if(o){if(u||c)return;let e=d.current;if(e&&e.tagName){let n=function(e,t,r){let{id:n,observer:l,elements:o}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=s.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=a.get(n)))return t;let l=new Map,o=new IntersectionObserver(e=>{e.forEach(e=>{let t=l.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e);return t={id:r,observer:o,elements:l},s.push(r),a.set(r,t),t}(r);return o.set(e,t),l.observe(e),function(){if(o.delete(e),l.unobserve(e),0===o.size){l.disconnect(),a.delete(n);let e=s.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&s.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:r});return n}}else if(!c){let e=l.requestIdleCallback(()=>f(!0));return()=>l.cancelIdleCallback(e)}},[u,r,t,c,d.current]);let x=n.useCallback(()=>{f(!1)},[]);return[p,c,x]};var n=r(7294),l=r(29);let o="function"==typeof IntersectionObserver,a=new Map,s=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8958:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return p},default:function(){return x}});var n=r(5893),l=r(1664),o=r.n(l);function a(e){return e.replace("/","%2F")}let s=e=>{let{loading:t,currentCat:r}=e;return t?(0,n.jsx)("div",{className:"",children:(0,n.jsx)("ul",{className:"flex justify-center flex-wrap gap-4",children:e.categories.map((e,t)=>(0,n.jsx)("li",{className:"transition-all text-[20px] font-semibold px-6 cursor-pointer rounded-[25px] text-secondary bg-secondary animate-pulse delay-100",children:"Cocktail cat"},t))})}):(0,n.jsx)("div",{className:"",children:(0,n.jsx)("ul",{className:"flex justify-center flex-wrap gap-4",children:e.categories.map((t,l)=>r!=t.strCategory?(0,n.jsx)(o(),{onClick:()=>{var r;return r=a(t.strCategory),void(e.setLoading(!0),e.setCurrentCat(r),setTimeout(()=>{e.setLoading(!1)},800))},href:"/category/"+a(t.strCategory),scroll:!1,children:(0,n.jsx)("li",{className:"transition-all hover:bg-primary hover:text-secondary text-[20px] font-semibold px-6 cursor-pointer rounded-[25px] text-primary bg-secondary",children:t.strCategory})},l):(0,n.jsx)("li",{className:"transition-all text-[20px] font-semibold px-6 cursor-pointer rounded-[25px] text-secondary bg-primary",children:t.strCategory},l))})})},i=e=>{let{children:t}=e;return(0,n.jsx)("div",{className:"max-w-[1200px] mx-auto px-4 py-8",children:t})},u=e=>{let{name:t,image:r}=e;return e.loading?(0,n.jsx)("div",{className:" animate-pulse  delay-100 bg-primary relative p-8 rounded-[10px] min-h-[300px] flex w-[300px] h-[300px]"}):(0,n.jsxs)("div",{style:{backgroundImage:"url("+r+")",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"},className:" relative p-8 rounded-[10px] min-h-[300px] flex w-[300px] h-[300px]",children:[(0,n.jsx)("div",{className:"absolute top-0 left-0 bottom-0 right-0 bg-[#201e1e82] rounded-[10px]"}),(0,n.jsxs)("div",{className:"w-full flex justify-between",children:[(0,n.jsx)("p",{className:"max-w-[130px] z-[9] text-[white] font-bold",children:t}),(0,n.jsx)("div",{className:"z-[9] ",children:(0,n.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"scale-[1.2]",children:(0,n.jsx)("path",{d:"M20.1098 5.0965C18.8628 3.5835 17.1298 2.75049 15.2278 2.75049C14.0838 2.75049 12.9778 3.02847 11.9998 3.55847C11.0228 3.02847 9.9168 2.75049 8.7718 2.75049C6.8698 2.75049 5.13581 3.5835 3.88981 5.0965C2.53381 6.7425 1.97181 8.9905 2.38481 11.1095C3.35981 16.1055 8.4478 19.5955 10.5908 20.8635C11.0258 21.1205 11.5128 21.2495 11.9998 21.2495C12.4868 21.2495 12.9748 21.1215 13.4098 20.8635C15.5518 19.5945 20.6408 16.1055 21.6158 11.1095C22.0278 8.9905 21.4658 6.7425 20.1098 5.0965ZM20.1428 10.8225C19.2848 15.2215 14.6138 18.4075 12.6448 19.5725C12.2478 19.8085 11.7518 19.8075 11.3548 19.5725C9.38581 18.4075 4.71479 15.2215 3.85679 10.8225C3.52779 9.13851 3.9738 7.35448 5.0468 6.05048C6.0038 4.88948 7.3258 4.25049 8.7718 4.25049C9.7898 4.25049 10.7658 4.53049 11.5958 5.06049C11.8418 5.21749 12.1578 5.21749 12.4038 5.06049C13.2338 4.53049 14.2098 4.25049 15.2278 4.25049C16.6728 4.25049 17.9958 4.88948 18.9528 6.05048C20.0258 7.35448 20.4708 9.13751 20.1428 10.8225Z",fill:"white"})})})]})]})},c=e=>{let{cocktails:t}=e;return(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:e.loading?"flex-wrap gap-12 hidden justify-center":"flex-wrap gap-12 flex justify-center",children:t.map((e,t)=>(0,n.jsx)(u,{image:e.strDrinkThumb,name:e.strDrink},t))}),e.loading?(0,n.jsx)("div",{className:"flex-wrap gap-12 flex justify-center",children:t.map((t,r)=>(0,n.jsx)(u,{loading:e.loading,image:t.strDrinkThumb,name:t.strDrink},r))}):null]})};var f=r(7294);let d=e=>{let[t,r]=(0,f.useState)(e.loading),[l,o]=(0,f.useState)();return((0,f.useEffect)(()=>{e.currentCat&&!l&&setTimeout(()=>{o(e.currentCat)},500)},[l]),e.categorie&&0!==e.categorie.length&&l)?(0,n.jsxs)("div",{children:[(0,n.jsx)(i,{children:(0,n.jsx)(s,{setCurrentCat:o,currentCat:l,setLoading:r,categories:e.categorie})}),(0,n.jsx)(i,{children:(0,n.jsx)(c,{loading:t,cocktails:e.cocktails})})]}):(0,n.jsxs)("div",{children:[(0,n.jsx)(i,{children:(0,n.jsx)(s,{setCurrentCat:o,currentCat:l,setLoading:r,loading:!0,categories:[1,2,3,4,5,6,7,8,9,10,11]})}),(0,n.jsx)(i,{children:(0,n.jsx)(c,{loading:!0,cocktails:[1,2,3,4,5,6,7,8,9,10,11,12,13]})})]})};var p=!0,x=d},1664:function(e,t,r){e.exports=r(5569)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5911)}),_N_E=e.O()}]);