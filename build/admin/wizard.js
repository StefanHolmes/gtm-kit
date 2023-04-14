!function(){"use strict";var t={n:function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,{a:n}),n},d:function(e,n){for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},o:function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}},e=window.wp.element,n=window.wp.components,a=window.lodash,r=window.wp.apiFetch,i=t.n(r);i().use(i().createNonceMiddleware(window.gtmkitWizardBuild.nonce)),i().use(i().createRootURLMiddleware(window.gtmkitWizardBuild.root));var o=window.wp.i18n,l=(t,e)=>{let n=Object.assign({},t);switch(e.type){case"FETCH_SETTINGS":n.fetchedSettings=e.payload.fetchedSettings,n.stateSettings=e.payload.stateSettings,n.siteData=e.payload.siteData,n.isPending=!1,n.canSave=!1,void 0!==e.payload.fetchedSettings.gtm_kit_settings_fetch_settings_errors&&(n.notice=(0,o.__)("An error occurred.","gtm-kit"),n.hasError=!0);break;case"UPDATE_SETTINGS_BEFORE":n.isPending=e.payload.isPending;break;case"UPDATE_SETTINGS":n.fetchedSettings=e.payload.fetchedSettings,n.stateSettings=e.payload.stateSettings,n.isPending=!1;let t=!1,a=(0,o.__)("Saved Successfully.","gtm-kit"),r=!1;void 0!==e.payload.fetchedSettings.gtm_kit_settings_update_settings_errors&&(t=!0,a=(0,o.__)("An error occurred.","gtm-kit"),r=!0),n.canSave=t,n.notice=a,n.hasError=r;break;case"UPDATE_STATE":e.payload.fetchedSettings&&(n.fetchedSettings=e.payload.fetchedSettings),e.payload.stateSettings&&(n.stateSettings=e.payload.stateSettings),void 0!==e.payload.isPending&&(n.isPending=e.payload.isPending),void 0!==e.payload.notice&&(n.notice=e.payload.notice),void 0!==e.payload.hasError&&(n.hasError=e.payload.hasError),void 0!==e.payload.canSave&&(n.canSave=e.payload.canSave)}return n};const s=(0,e.createContext)();var c,m=t=>{const[n,r]=(0,e.useReducer)(l,{fetchedSettings:{},stateSettings:{},isPending:!0,notice:"",hasError:"",canSave:!1}),o=async()=>{const t=await(async()=>{let t={};try{t=await i()({path:"gtmkit/v1/get-options",method:"POST"})}catch(t){return console.log("fetchSettings Errors:",t),{gtm_kit_settings_fetch_settings_errors:!0}}return!0===t.success?t.data:t})(),e=await(async()=>{let t={};try{t=await i()({path:"gtmkit/v1/get-site-data",method:"POST"})}catch(t){return console.log("fetchSiteData Errors:",t),{gtm_kit_settings_fetch_site_data_errors:!0}}return!0===t.success?t.data:t})();r({type:"FETCH_SETTINGS",payload:{fetchedSettings:t,stateSettings:t,siteData:e}})},c=async t=>{r({type:"UPDATE_STATE",payload:t})};(0,e.useEffect)((()=>{o()}),[]);let m={useDispatch:t=>{r(t)},useUpdateSettings:async()=>{r({type:"UPDATE_SETTINGS_BEFORE",payload:{isPending:!0}});const t=await(async t=>{let e={};try{e=await i()({path:"gtmkit/v1/set-options",method:"POST",data:t})}catch(t){return console.log("updateSettings Errors:",t),{gtm_kit_settings_update_settings_errors:!0}}return!0===e.success?e.data:e})(n.stateSettings);r({type:"UPDATE_SETTINGS",payload:{fetchedSettings:t,stateSettings:t}})},useFetchSettings:o,useUpdateState:c,useUpdateStateSettings:async(t,e,r)=>{let i,o=JSON.parse(JSON.stringify(n.stateSettings));o[t][e]=r,i=!(0,a.isEqual)(o,n.fetchedSettings),c({stateSettings:o,canSave:i})},useSettings:n.stateSettings,useIsPending:n.isPending,useNotice:n.notice,useHasError:n.hasError,useCanSave:n.canSave,useSiteData:n.siteData};return(0,e.createElement)(s.Provider,{value:m},t.children)};function u(){return u=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},u.apply(this,arguments)}!function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"}(c||(c={}));const g="popstate";function d(t,e){if(!1===t||null==t)throw new Error(e)}function p(t,e){if(!t){"undefined"!=typeof console&&console.warn(e);try{throw new Error(e)}catch(t){}}}function h(t,e){return{usr:t.state,key:t.key,idx:e}}function k(t,e,n,a){return void 0===n&&(n=null),u({pathname:"string"==typeof t?t:t.pathname,search:"",hash:""},"string"==typeof e?y(e):e,{state:n,key:e&&e.key||a||Math.random().toString(36).substr(2,8)})}function f(t){let{pathname:e="/",search:n="",hash:a=""}=t;return n&&"?"!==n&&(e+="?"===n.charAt(0)?n:"?"+n),a&&"#"!==a&&(e+="#"===a.charAt(0)?a:"#"+a),e}function y(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let a=t.indexOf("?");a>=0&&(e.search=t.substr(a),t=t.substr(0,a)),t&&(e.pathname=t)}return e}var E;function M(t,e,n){void 0===n&&(n="/");let a=O(("string"==typeof e?y(e):e).pathname||"/",n);if(null==a)return null;let r=x(t);!function(t){t.sort(((t,e)=>t.score!==e.score?e.score-t.score:function(t,e){return t.length===e.length&&t.slice(0,-1).every(((t,n)=>t===e[n]))?t[t.length-1]-e[e.length-1]:0}(t.routesMeta.map((t=>t.childrenIndex)),e.routesMeta.map((t=>t.childrenIndex)))))}(r);let i=null;for(let t=0;null==i&&t<r.length;++t)i=I(r[t],D(a));return i}function x(t,e,n,a){void 0===e&&(e=[]),void 0===n&&(n=[]),void 0===a&&(a="");let r=(t,r,i)=>{let o={relativePath:void 0===i?t.path||"":i,caseSensitive:!0===t.caseSensitive,childrenIndex:r,route:t};o.relativePath.startsWith("/")&&(d(o.relativePath.startsWith(a),'Absolute route path "'+o.relativePath+'" nested under path "'+a+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),o.relativePath=o.relativePath.slice(a.length));let l=A([a,o.relativePath]),s=n.concat(o);t.children&&t.children.length>0&&(d(!0!==t.index,'Index routes must not have child routes. Please remove all child routes from route path "'+l+'".'),x(t.children,e,s,l)),(null!=t.path||t.index)&&e.push({path:l,score:_(l,t.index),routesMeta:s})};return t.forEach(((t,e)=>{var n;if(""!==t.path&&null!=(n=t.path)&&n.includes("?"))for(let n of N(t.path))r(t,e,n);else r(t,e)})),e}function N(t){let e=t.split("/");if(0===e.length)return[];let[n,...a]=e,r=n.endsWith("?"),i=n.replace(/\?$/,"");if(0===a.length)return r?[i,""]:[i];let o=N(a.join("/")),l=[];return l.push(...o.map((t=>""===t?i:[i,t].join("/")))),r&&l.push(...o),l.map((e=>t.startsWith("/")&&""===e?"/":e))}!function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"}(E||(E={})),new Set(["lazy","caseSensitive","path","id","index","children"]);const v=/^:\w+$/,S=3,w=2,j=1,b=10,L=-2,T=t=>"*"===t;function _(t,e){let n=t.split("/"),a=n.length;return n.some(T)&&(a+=L),e&&(a+=w),n.filter((t=>!T(t))).reduce(((t,e)=>t+(v.test(e)?S:""===e?j:b)),a)}function I(t,e){let{routesMeta:n}=t,a={},r="/",i=[];for(let t=0;t<n.length;++t){let o=n[t],l=t===n.length-1,s="/"===r?e:e.slice(r.length)||"/",c=C({path:o.relativePath,caseSensitive:o.caseSensitive,end:l},s);if(!c)return null;Object.assign(a,c.params);let m=o.route;i.push({params:a,pathname:A([r,c.pathname]),pathnameBase:P(A([r,c.pathnameBase])),route:m}),"/"!==c.pathnameBase&&(r=A([r,c.pathnameBase]))}return i}function C(t,e){"string"==typeof t&&(t={path:t,caseSensitive:!1,end:!0});let[n,a]=function(t,e,n){void 0===e&&(e=!1),void 0===n&&(n=!0),p("*"===t||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were "'+t.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+t.replace(/\*$/,"/*")+'".');let a=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,((t,e)=>(a.push(e),"/([^\\/]+)")));return t.endsWith("*")?(a.push("*"),r+="*"===t||"/*"===t?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":""!==t&&"/"!==t&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),a]}(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let i=r[0],o=i.replace(/(.)\/+$/,"$1"),l=r.slice(1);return{params:a.reduce(((t,e,n)=>{if("*"===e){let t=l[n]||"";o=i.slice(0,i.length-t.length).replace(/(.)\/+$/,"$1")}return t[e]=function(t,e){try{return decodeURIComponent(t)}catch(n){return p(!1,'The value for the URL param "'+e+'" will not be decoded because the string "'+t+'" is a malformed URL segment. This is probably due to a bad percent encoding ('+n+")."),t}}(l[n]||"",e),t}),{}),pathname:i,pathnameBase:o,pattern:t}}function D(t){try{return decodeURI(t)}catch(e){return p(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+e+")."),t}}function O(t,e){if("/"===e)return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,a=t.charAt(n);return a&&"/"!==a?null:t.slice(n)||"/"}function z(t,e,n,a){return"Cannot include a '"+t+"' character in a manually specified `to."+e+"` field ["+JSON.stringify(a)+"].  Please separate it out to the `to."+n+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}const A=t=>t.join("/").replace(/\/\/+/g,"/"),P=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),U=t=>t&&"?"!==t?t.startsWith("?")?t:"?"+t:"",R=t=>t&&"#"!==t?t.startsWith("#")?t:"#"+t:"";class B extends Error{}const G=["post","put","patch","delete"],W=(new Set(G),["get",...G]);new Set(W),new Set([301,302,303,307,308]),new Set([307,308]),"undefined"!=typeof window&&void 0!==window.document&&window.document.createElement,Symbol("deferred");var Y=window.React;const Q="function"==typeof Object.is?Object.is:function(t,e){return t===e&&(0!==t||1/t==1/e)||t!=t&&e!=e},{useState:F,useEffect:H,useLayoutEffect:J,useDebugValue:$}=Y;function Z(t){const e=t.getSnapshot,n=t.value;try{const t=e();return!Q(n,t)}catch(t){return!0}}"undefined"==typeof window||void 0===window.document||window.document.createElement;"useSyncExternalStore"in Y&&Y.useSyncExternalStore;const K=Y.createContext(null),V=Y.createContext(null),X=Y.createContext(null),q=Y.createContext(null),tt=Y.createContext({outlet:null,matches:[]}),et=Y.createContext(null);function nt(){return nt=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},nt.apply(this,arguments)}function at(){return null!=Y.useContext(q)}function rt(){return at()||d(!1),Y.useContext(q).location}function it(){at()||d(!1);let{basename:t,navigator:e}=Y.useContext(X),{matches:n}=Y.useContext(tt),{pathname:a}=rt(),r=JSON.stringify(function(t){return t.filter(((t,e)=>0===e||t.route.path&&t.route.path.length>0))}(n).map((t=>t.pathnameBase))),i=Y.useRef(!1);return Y.useEffect((()=>{i.current=!0})),Y.useCallback((function(n,o){if(void 0===o&&(o={}),!i.current)return;if("number"==typeof n)return void e.go(n);let l=function(t,e,n,a){let r;void 0===a&&(a=!1),"string"==typeof t?r=y(t):(r=u({},t),d(!r.pathname||!r.pathname.includes("?"),z("?","pathname","search",r)),d(!r.pathname||!r.pathname.includes("#"),z("#","pathname","hash",r)),d(!r.search||!r.search.includes("#"),z("#","search","hash",r)));let i,o=""===t||""===r.pathname,l=o?"/":r.pathname;if(a||null==l)i=n;else{let t=e.length-1;if(l.startsWith("..")){let e=l.split("/");for(;".."===e[0];)e.shift(),t-=1;r.pathname=e.join("/")}i=t>=0?e[t]:"/"}let s=function(t,e){void 0===e&&(e="/");let{pathname:n,search:a="",hash:r=""}="string"==typeof t?y(t):t,i=n?n.startsWith("/")?n:function(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach((t=>{".."===t?n.length>1&&n.pop():"."!==t&&n.push(t)})),n.length>1?n.join("/"):"/"}(n,e):e;return{pathname:i,search:U(a),hash:R(r)}}(r,i),c=l&&"/"!==l&&l.endsWith("/"),m=(o||"."===l)&&n.endsWith("/");return s.pathname.endsWith("/")||!c&&!m||(s.pathname+="/"),s}(n,JSON.parse(r),a,"path"===o.relative);"/"!==t&&(l.pathname="/"===l.pathname?t:A([t,l.pathname])),(o.replace?e.replace:e.push)(l,o.state,o)}),[t,e,r,a])}function ot(){let t=function(){var t;let e=Y.useContext(et),n=function(t){let e=Y.useContext(V);return e||d(!1),e}(mt.UseRouteError),a=function(t){let e=function(t){let e=Y.useContext(tt);return e||d(!1),e}(),n=e.matches[e.matches.length-1];return n.route.id||d(!1),n.route.id}(mt.UseRouteError);return e||(null==(t=n.errors)?void 0:t[a])}(),e=function(t){return null!=t&&"number"==typeof t.status&&"string"==typeof t.statusText&&"boolean"==typeof t.internal&&"data"in t}(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return Y.createElement(Y.Fragment,null,Y.createElement("h2",null,"Unexpected Application Error!"),Y.createElement("h3",{style:{fontStyle:"italic"}},e),n?Y.createElement("pre",{style:a},n):null,null)}class lt extends Y.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,e){return e.location!==t.location?{error:t.error,location:t.location}:{error:t.error||e.error,location:e.location}}componentDidCatch(t,e){console.error("React Router caught the following error during render",t,e)}render(){return this.state.error?Y.createElement(tt.Provider,{value:this.props.routeContext},Y.createElement(et.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function st(t){let{routeContext:e,match:n,children:a}=t,r=Y.useContext(K);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),Y.createElement(tt.Provider,{value:e},a)}var ct,mt,ut,gt,dt;function pt(t){let{to:e,replace:n,state:a,relative:r}=t;at()||d(!1);let i=Y.useContext(V),o=it();return Y.useEffect((()=>{i&&"idle"!==i.navigation.state||o(e,{replace:n,state:a,relative:r})})),null}function ht(t){d(!1)}function kt(t){let{basename:e="/",children:n=null,location:a,navigationType:r=c.Pop,navigator:i,static:o=!1}=t;at()&&d(!1);let l=e.replace(/^\/*/,"/"),s=Y.useMemo((()=>({basename:l,navigator:i,static:o})),[l,i,o]);"string"==typeof a&&(a=y(a));let{pathname:m="/",search:u="",hash:g="",state:p=null,key:h="default"}=a,k=Y.useMemo((()=>{let t=O(m,l);return null==t?null:{location:{pathname:t,search:u,hash:g,state:p,key:h},navigationType:r}}),[l,m,u,g,p,h,r]);return null==k?null:Y.createElement(X.Provider,{value:s},Y.createElement(q.Provider,{children:n,value:k}))}function ft(t){let{children:e,location:n}=t,a=Y.useContext(K);return function(t,e){at()||d(!1);let{navigator:n}=Y.useContext(X),a=Y.useContext(V),{matches:r}=Y.useContext(tt),i=r[r.length-1],o=i?i.params:{},l=(i&&i.pathname,i?i.pathnameBase:"/");i&&i.route;let s,m=rt();if(e){var u;let t="string"==typeof e?y(e):e;"/"===l||(null==(u=t.pathname)?void 0:u.startsWith(l))||d(!1),s=t}else s=m;let g=s.pathname||"/",p=M(t,{pathname:"/"===l?g:g.slice(l.length)||"/"}),h=function(t,e,n){if(void 0===e&&(e=[]),null==t){if(null==n||!n.errors)return null;t=n.matches}let a=t,r=null==n?void 0:n.errors;if(null!=r){let t=a.findIndex((t=>t.route.id&&(null==r?void 0:r[t.route.id])));t>=0||d(!1),a=a.slice(0,Math.min(a.length,t+1))}return a.reduceRight(((t,i,o)=>{let l=i.route.id?null==r?void 0:r[i.route.id]:null,s=null;n&&(s=i.route.ErrorBoundary?Y.createElement(i.route.ErrorBoundary,null):i.route.errorElement?i.route.errorElement:Y.createElement(ot,null));let c=e.concat(a.slice(0,o+1)),m=()=>{let e=t;return l?e=s:i.route.Component?e=Y.createElement(i.route.Component,null):i.route.element&&(e=i.route.element),Y.createElement(st,{match:i,routeContext:{outlet:t,matches:c},children:e})};return n&&(i.route.ErrorBoundary||i.route.errorElement||0===o)?Y.createElement(lt,{location:n.location,component:s,error:l,children:m(),routeContext:{outlet:null,matches:c}}):m()}),null)}(p&&p.map((t=>Object.assign({},t,{params:Object.assign({},o,t.params),pathname:A([l,n.encodeLocation?n.encodeLocation(t.pathname).pathname:t.pathname]),pathnameBase:"/"===t.pathnameBase?l:A([l,n.encodeLocation?n.encodeLocation(t.pathnameBase).pathname:t.pathnameBase])}))),r,a||void 0);return e&&h?Y.createElement(q.Provider,{value:{location:nt({pathname:"/",search:"",hash:"",state:null,key:"default"},s),navigationType:c.Pop}},h):h}(a&&!e?a.router.routes:Et(e),n)}!function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator"}(ct||(ct={})),function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator"}(mt||(mt={})),function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"}(ut||(ut={})),new Promise((()=>{}));class yt extends Y.Component{constructor(t){super(t),this.state={error:null}}static getDerivedStateFromError(t){return{error:t}}componentDidCatch(t,e){console.error("<Await> caught the following error during render",t,e)}render(){let{children:t,errorElement:e,resolve:n}=this.props,a=null,r=ut.pending;if(n instanceof Promise)if(this.state.error){ut.error;let t=this.state.error;Promise.reject().catch((()=>{})),Object.defineProperty(a,"_tracked",{get:()=>!0}),Object.defineProperty(a,"_error",{get:()=>t})}else n._tracked?void 0!==a._error?ut.error:void 0!==a._data?ut.success:ut.pending:(ut.pending,Object.defineProperty(n,"_tracked",{get:()=>!0}),n.then((t=>Object.defineProperty(n,"_data",{get:()=>t})),(t=>Object.defineProperty(n,"_error",{get:()=>t}))));else ut.success,Promise.resolve(),Object.defineProperty(a,"_tracked",{get:()=>!0}),Object.defineProperty(a,"_data",{get:()=>n});if(r===ut.error&&a._error instanceof AbortedDeferredError)throw neverSettledPromise;if(r===ut.error&&!e)throw a._error;if(r===ut.error)return React.createElement(AwaitContext.Provider,{value:a,children:e});if(r===ut.success)return React.createElement(AwaitContext.Provider,{value:a,children:t});throw a}}function Et(t,e){void 0===e&&(e=[]);let n=[];return Y.Children.forEach(t,((t,a)=>{if(!Y.isValidElement(t))return;let r=[...e,a];if(t.type===Y.Fragment)return void n.push.apply(n,Et(t.props.children,r));t.type!==ht&&d(!1),t.props.index&&t.props.children&&d(!1);let i={id:t.props.id||r.join("-"),caseSensitive:t.props.caseSensitive,element:t.props.element,Component:t.props.Component,index:t.props.index,path:t.props.path,loader:t.props.loader,action:t.props.action,errorElement:t.props.errorElement,ErrorBoundary:t.props.ErrorBoundary,hasErrorBoundary:null!=t.props.ErrorBoundary||null!=t.props.errorElement,shouldRevalidate:t.props.shouldRevalidate,handle:t.props.handle,lazy:t.props.lazy};t.props.children&&(i.children=Et(t.props.children,r)),n.push(i)})),n}function Mt(t){let{basename:e,children:n,window:a}=t,r=Y.useRef();var i;null==r.current&&(r.current=(void 0===(i={window:a,v5Compat:!0})&&(i={}),function(t,e,n,a){void 0===a&&(a={});let{window:r=document.defaultView,v5Compat:i=!1}=a,o=r.history,l=c.Pop,s=null,m=p();function p(){return(o.state||{idx:null}).idx}function y(){l=c.Pop;let t=p(),e=null==t?null:t-m;m=t,s&&s({action:l,location:M.location,delta:e})}function E(t){let e="null"!==r.location.origin?r.location.origin:r.location.href,n="string"==typeof t?t:f(t);return d(e,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,e)}null==m&&(m=0,o.replaceState(u({},o.state,{idx:m}),""));let M={get action(){return l},get location(){return t(r,o)},listen(t){if(s)throw new Error("A history only accepts one active listener");return r.addEventListener(g,y),s=t,()=>{r.removeEventListener(g,y),s=null}},createHref(t){return e(r,t)},createURL:E,encodeLocation(t){let e=E(t);return{pathname:e.pathname,search:e.search,hash:e.hash}},push:function(t,e){l=c.Push;let a=k(M.location,t,e);n&&n(a,t),m=p()+1;let u=h(a,m),g=M.createHref(a);try{o.pushState(u,"",g)}catch(t){r.location.assign(g)}i&&s&&s({action:l,location:M.location,delta:1})},replace:function(t,e){l=c.Replace;let a=k(M.location,t,e);n&&n(a,t),m=p();let r=h(a,m),u=M.createHref(a);o.replaceState(r,"",u),i&&s&&s({action:l,location:M.location,delta:0})},go(t){return o.go(t)}};return M}((function(t,e){let{pathname:n="/",search:a="",hash:r=""}=y(t.location.hash.substr(1));return k("",{pathname:n,search:a,hash:r},e.state&&e.state.usr||null,e.state&&e.state.key||"default")}),(function(t,e){let n=t.document.querySelector("base"),a="";if(n&&n.getAttribute("href")){let e=t.location.href,n=e.indexOf("#");a=-1===n?e:e.slice(0,n)}return a+"#"+("string"==typeof e?e:f(e))}),(function(t,e){p("/"===t.pathname.charAt(0),"relative pathnames are not supported in hash history.push("+JSON.stringify(e)+")")}),i)));let o=r.current,[l,s]=Y.useState({action:o.action,location:o.location});return Y.useLayoutEffect((()=>o.listen(s)),[o]),Y.createElement(kt,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o})}"undefined"!=typeof window&&void 0!==window.document&&window.document.createElement,function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"}(gt||(gt={})),function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"}(dt||(dt={}));var xt=()=>{const{useSettings:t,useUpdateStateSettings:a,useCanSave:r,useUpdateSettings:i,useIsPending:l}=(0,e.useContext)(s),c=it();return(0,e.createElement)("div",{className:"gtmkit-text-center"},(0,e.createElement)("h1",{className:"gtmkit-text-4xl gtmkit-font-medium gtmkit-mb-8 gtmkit-text-color-heading"},(0,o.__)("You've successfully installed GTM Kit!","gtm-kit")),(0,e.createElement)("div",{className:"gtmkit-max-w-lg gtmkit-mx-auto"},(0,e.createElement)("p",{className:"gtmkit-text-base gtmkit-mb-4 gtmkit-text-color-grey"},(0,o.__)("To start collecting data with Google Tag manager you must register the Container ID of your Google Tag Manager container.","gtm-kit"))),(0,e.createElement)("div",{className:"md:gtmkit-grid gtmkit-grid-cols-5 gtmkit-gap-8 gtmkit-mb-20"},(0,e.createElement)("div",{className:"gtmkit-col-span-3"},(0,e.createElement)("div",{className:"gtm-kit-settings-field-wrap gtmkit-max-w-max !gtmkit-px-8 gtmkit-mx-auto "},(0,e.createElement)(n.TextControl,{label:(0,o.__)("Container ID","gtm-kit"),placeholder:(0,o.__)("Enter Container ID","gtm-kit"),value:t&&t.general.gtm_id,className:"gtmkit-text-center",onChange:t=>a("general","gtm_id",t)})),(0,e.createElement)("div",{className:"gtmkit-flex gtmkit-mt-12"},(0,e.createElement)(n.Button,{variant:"primary",className:"gtmkit-mx-auto gtmkit-rounded-md !gtmkit-py-6 !gtmkit-px-8 gtmkit-text-base disabled:!gtmkit-bg-color-button-disabled disabled:!gtmkit-text-color-grey",onClick:()=>{i(),c("/share-anonymous-data",{replace:!0})},disabled:l||!t.general.gtm_id.includes("-")},(0,o.__)("Save and continue","gtm-kit"),l?(0,e.createElement)(n.Spinner,null):""))),(0,e.createElement)("div",{className:"gtmkit-col-span-2 gtmkit-mt-8 gtmkit-border gtmkit-p-6 gtmkit-text-left gtmkit-text-color-grey gtmkit-text-center"},(0,e.createElement)("h2",{className:"gtmkit-font-bold gtmkit-text-base gtmkit-mb-4"},"Need help?"),(0,e.createElement)("p",{className:"gtmkit-mb-6"},(0,o.__)("Find your GTM container ID on","gtm-kit"),(0,e.createElement)("a",{className:"gtmkit-ml-2 gtmkit-text-color-primary gtmkit-underline",href:"https://tagmanager.google.com/",target:"_blank"},"Google Tag Manager")),(0,e.createElement)("p",null,(0,o.__)("It should look something like this:","gtm-kit")," GTM-12ZM7SF4"))),(0,e.createElement)("div",{className:"gtmkit-mt-3 md:gtmkit-mt-10 gtmkit-text-color-grey gtmkit-text-base"},(0,e.createElement)("span",{className:"gtmkit-block"},(0,o.__)("No thanks. I know what I'm doing.","gtm-kit")),(0,e.createElement)("a",{className:"gtmkit-underline gtmkit-ml-4",href:window.gtmkitWizardBuild.dashboard_url},(0,o.__)("Go to the dashboard.","gtm-kit"))))},Nt=()=>{const{useSettings:t,useUpdateStateSettings:a,useUpdateSettings:r,useIsPending:i,useSiteData:l}=(0,e.useContext)(s),c=it();return(0,e.createElement)(e.Fragment,null,(0,e.createElement)("h1",{className:"gtmkit-text-3xl gtmkit-font-medium gtmkit-mb-8 gtmkit-text-color-heading gtmkit-text-center"},(0,o.__)("Help improve GTM Kit","gtm-kit")),(0,e.createElement)("p",{className:"gtmkit-text-sm gtmkit-mb-4 gtmkit-text-color-grey"},(0,o.__)("GTM Kit is used together with a wide variety of server configurations and plugins. It is very helpful for us to know what some of these configurations are so we can test the most common configurations.","gtm-kit")),(0,e.createElement)("p",{className:"gtmkit-text-sm gtmkit-mb-8 gtmkit-text-color-grey"},(0,o.__)("You can help by sharing anonymous data with us. Below is a detailed view of all data GTM Kit will collect if granted permission:","gtm-kit")),(0,e.createElement)("table",{className:"gtmkit-border-2 gtmkit-table-fixed gtmkit-w-full gtmkit-text-sm"},(0,e.createElement)("tbody",null,(0,e.createElement)("tr",{className:""},(0,e.createElement)("td",{className:"gtmkit-font-bold gtmkit-px-2 gtmkit-py-1"},(0,e.createElement)("strong",null,"Server type:")),(0,e.createElement)("td",{className:"gtmkit-px-2 gtmkit-py-1"},(0,e.createElement)("code",{className:"gtmkit-text-sm"},l.web_server))),(0,e.createElement)("tr",null,(0,e.createElement)("td",{className:"gtmkit-font-bold gtmkit-px-2 gtmkit-py-1"},(0,e.createElement)("strong",null,"PHP version number:")),(0,e.createElement)("td",{className:"gtmkit-px-2 gtmkit-py-1"},(0,e.createElement)("code",{className:"gtmkit-text-sm"},l.php_version))),(0,e.createElement)("tr",null,(0,e.createElement)("td",{className:"gtmkit-font-bold gtmkit-px-2 gtmkit-py-1"},(0,e.createElement)("strong",null,"WordPress version number:")),(0,e.createElement)("td",{className:"gtmkit-px-2 gtmkit-py-1"},(0,e.createElement)("code",{className:"gtmkit-text-sm"},l.wordpress_version))),(0,e.createElement)("tr",null,(0,e.createElement)("td",{className:"gtmkit-font-bold gtmkit-px-2 gtmkit-py-1"},(0,e.createElement)("strong",null,"WordPress multisite:")),(0,e.createElement)("td",{className:"gtmkit-px-2 gtmkit-py-1"},(0,e.createElement)("code",{className:"gtmkit-text-sm"},l.multisite?(0,o.__)("Yes","gtm-kit"):(0,o.__)("No","gtm-kit")))),(0,e.createElement)("tr",null,(0,e.createElement)("td",{className:"gtmkit-font-bold gtmkit-px-2 gtmkit-py-1"},(0,e.createElement)("strong",null,"Current theme:")),(0,e.createElement)("td",{className:"gtmkit-px-2 gtmkit-py-1"},(0,e.createElement)("code",{className:"gtmkit-text-sm"},l.current_theme))),(0,e.createElement)("tr",null,(0,e.createElement)("td",{className:"gtmkit-font-bold gtmkit-px-2 gtmkit-py-1"},(0,e.createElement)("strong",null,"Current site language:")),(0,e.createElement)("td",{className:"gtmkit-px-2 gtmkit-py-1"},(0,e.createElement)("code",{className:"gtmkit-text-sm"},l.locale))),(0,e.createElement)("tr",null,(0,e.createElement)("td",{className:"gtmkit-font-bold gtmkit-px-2 gtmkit-py-1"},(0,e.createElement)("strong",null,"Active plugins:")),(0,e.createElement)("td",{className:"gtmkit-px-2 gtmkit-py-1"},(0,e.createElement)("em",null,"Plugin names of all active plugins"))),(0,e.createElement)("tr",null,(0,e.createElement)("td",{className:"gtmkit-font-bold gtmkit-px-2 gtmkit-py-1"},(0,e.createElement)("strong",null,"Anonymized GTM Kit settings:")),(0,e.createElement)("td",{className:"gtmkit-px-2 gtmkit-py-1"},(0,e.createElement)("em",null,"Which GTM Kit settings are active"))))),(0,e.createElement)("div",{className:"gtm-kit-settings-field-wrap gtmkit-max-w-max !gtmkit-px-8 gtmkit-mx-auto "},(0,e.createElement)(n.BaseControl,{label:(0,o.__)("Share anonymous data","gtm-kit")},(0,e.createElement)(n.ToggleControl,{label:(0,o.__)("I agree to share anonymous data with the development team to help improve GTM Kit. ","gtm-kit"),checked:t&&t.general.analytics_active,onChange:()=>{a("general","analytics_active",!(t&&t.general.analytics_active))}}))),(0,e.createElement)("div",{className:"gtmkit-flex gtmkit-mt-12"},(0,e.createElement)(n.Button,{variant:"primary",className:"gtmkit-mx-auto gtmkit-rounded-md !gtmkit-py-6 !gtmkit-px-8 gtmkit-text-base disabled:!gtmkit-bg-color-button-disabled disabled:!gtmkit-text-color-grey",onClick:()=>{r(),c("/getting-started",{replace:!0})},disabled:i},(0,o.__)("Save and continue","gtm-kit"),i?(0,e.createElement)(n.Spinner,null):"")))};const vt=[{step:1,path:"/welcome",element:"Welcome",title:(0,o.__)("Welcome","gtm-kit")},{step:2,path:"/share-anonymous-data",element:"ShareAnonymousData",title:(0,o.__)("Help improve GTM Kit","gtm-kit")},{step:3,path:"/getting-started",element:"GettingStarted",title:(0,o.__)("Getting Started","gtm-kit")}];var St=({step:t,currentStep:n,totalSteps:a})=>{if(t===a)return;let r="gtmkit-h-0.5 gtmkit-w-full";return r+=t<n?" gtmkit-bg-color-primary":" gtmkit-bg-color-border",(0,e.createElement)("div",{className:r})},wt=({step:t,currentStep:n,totalSteps:a})=>t<n?(0,e.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",className:"gtmkit-w-5 gtmkit-h-5 gtmkit-text-white"},(0,e.createElement)("path",{"fill-rule":"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z","clip-rule":"evenodd"})):t===n?(0,e.createElement)("span",{className:"gtmkit-h-2.5 gtmkit-w-2.5 gtmkit-rounded-full gtmkit-bg-color-primary"}):void 0,jt=({step:t,currentStep:n,totalSteps:a})=>{if(0===t)return;let r="gtmkit-transition-opacity gtmkit-duration-500 gtmkit-absolute gtmkit-inset-0 gtmkit-border-2 gtmkit-flex gtmkit-items-center gtmkit-justify-center gtmkit-rounded-full gtmkit-opacity-100";return r+=t<n?" gtmkit-bg-color-primary":" gtmkit-bg-white",r+=t>n?" gtmkit-border-color-border":" gtmkit-border-color-primary",(0,e.createElement)(e.Fragment,null,(0,e.createElement)("span",{className:"gtmkit-relative gtmkit-shrink-0 gtmkit-z-10 gtmkit-w-8 gtmkit-h-8 gtmkit-rounded-full"},(0,e.createElement)("span",{className:r},(0,e.createElement)(wt,{step:t,currentStep:n,totalSteps:a}))),(0,e.createElement)(St,{step:t,currentStep:n,totalSteps:a}))},bt=()=>{const t=vt.length-1+vt[0].step;let n=((t,e)=>{let n=Object.keys(e);return t.filter((function(t){for(let a=0;a<n.length;a++)if(!t.hasOwnProperty(n[a])||t[n[a]]!==e[n[a]])return!1;return!0}))})(vt,{path:rt().pathname});return n=n.length?n[0].step:0,0===n?(0,e.createElement)("div",{className:"gtmkit-my-16"}):(0,e.createElement)("div",{className:"gtmkit-mt-6 gtmkit-inset-0 gtmkit-mx-auto gtmkit-my-6 gtmkit-flex gtmkit-items-center gtmkit-max-w-xl","aria-hidden":"true"},vt.map((function(a){return(0,e.createElement)(jt,{step:a.step,currentStep:n,totalSteps:t})})))},Lt=()=>{const{useSettings:t,useUpdateStateSettings:a}=(0,e.useContext)(s);return(0,e.createElement)(e.Fragment,null,(0,e.createElement)("h1",{className:"gtmkit-text-3xl gtmkit-font-medium gtmkit-mb-8 gtmkit-text-color-heading gtmkit-text-center"},(0,o.__)("Your are ready to use GTM Kit!","gtm-kit")),(0,e.createElement)("p",{className:"gtmkit-text-base gtmkit-mb-4 gtmkit-text-color-grey gtmkit-text-center"},"Your Google Tag Manager Container is now sending data to Google Tag Manager."),(0,e.createElement)("p",{className:"gtmkit-text-base gtmkit-mb-12 gtmkit-text-color-grey gtmkit-text-center"},"GTM Kit is an advanced plugins with a lot of settings. You don't need to know them all but we do recommend that you take a look at our tutorials."),(0,e.createElement)("div",{className:"gtmkit-border-2 gtmkit-max-w-md gtmkit-mx-auto"},(0,e.createElement)("h3",{className:"gtmkit-p-3 gtmkit-font-bold gtmkit-text-xl gtmkit-border-b-2"},"Tutorials"),(0,e.createElement)("ul",{className:"gtmkit-text-color-primary gtmkit-p-3"},(0,e.createElement)("li",null,(0,e.createElement)("a",{href:"https://gtmkit.com/documentation/getting-started-with-gtm-kit/#utm_source=gtmkit-plugin&utm_medium=software&utm_term=getting-started&utm_content=help-tutorials",target:"_blank"},"Getting started with GTM Kit")),(0,e.createElement)("li",null,(0,e.createElement)("a",{href:"https://gtmkit.com/documentation/woocommerce/#utm_source=gtmkit-plugin&utm_medium=software&utm_term=woocommerce&utm_content=help-tutorials",target:"_blank"},"WooCommerce Integration")),(0,e.createElement)("li",null,(0,e.createElement)("a",{href:"https://gtmkit.com/documentation/advanced-gtm-container-implementation/#utm_source=gtmkit-plugin&utm_medium=software&utm_term=advanced-container-implementation&utm_content=help-tutorials",target:"_blank"},"Advanced GTM container implementation")),(0,e.createElement)("li",null,(0,e.createElement)("a",{href:"https://gtmkit.com/documentation/settings-actions-and-filters-for-developers/#utm_source=gtmkit-plugin&utm_medium=software&utm_term=settings-actions-and-filters-for-developers&utm_content=help-tutorials",target:"_blank"},"Settings, actions and filters for developers")))),(0,e.createElement)("div",{className:"gtmkit-flex gtmkit-mt-12"},(0,e.createElement)(n.Button,{variant:"primary",className:"gtmkit-mx-auto gtmkit-rounded-md !gtmkit-py-6 !gtmkit-px-8 gtmkit-text-base disabled:!gtmkit-bg-color-button-disabled disabled:!gtmkit-text-color-grey",onClick:()=>{window.location.href=window.gtmkitWizardBuild.dashboard_url}},(0,o.__)("Go to the dashboard","gtm-kit"))))},Tt=()=>{const{useIsPending:t,useNotice:n}=(0,e.useContext)(s);return(0,e.createElement)(e.Fragment,null,(0,e.createElement)("header",{className:"gtmkit-text-center gtmkit-px-3"},(0,e.createElement)("h1",{className:"gtmkit-mt-3 md:gtmkit-mt-8 gtmkit-mb-4 gtmkit-w-[225px] gtmkit-inline-block"},(0,e.createElement)("img",{src:"data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNDY3LjEgMTU4Ni40IiBoZWlnaHQ9IjU0IiB2aWV3Qm94PSIwIDAgMTYwIDU0IiB3aWR0aD0iMTYwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IGZpbGw9IiM4ODgiIGhlaWdodD0iNTQiIHJ4PSI0LjI2NSIgd2lkdGg9IjE2MCIvPjxwYXRoIGQ9Im04OC42NTkgNy4wMDJoLTQ5LjI2NmMtMi45MTUgMC01LjM3OC0uMTg0LTkuMjMgMi41OTZsLTE4Ljc0MyAxMi43NTJjLTQuNTQ5IDMuMjkyLTQuNTcxIDYuMDAxIDAgOS4zMDJsMTguNzQzIDEyLjc1MWMzLjY1MiAyLjY0NiA2LjI5OSAyLjU5NyA5LjIzIDIuNTk3aDE1LjY4NiAzMy41OGMyLjkzMS0uMDU3IDUuMzk0LTEuNzg0IDUuMzQtMy45MjN2LTMyLjIxYy0uMDEyLTIuMTM0LTIuNDA5LTMuODY1LTUuMzQtMy44NjV6IiBmaWxsPSIjMzk2OWJiIiB0cmFuc2Zvcm09Im1hdHJpeCgtMSAwIDAgLTEgMTAxLjk5OTg2NyA1My45OTk1NDcpIi8+PGcgZmlsbD0iI2ZmZiIgdHJhbnNmb3JtPSJtYXRyaXgoMS40NjUyMDIgMCAwIDEuNDY1MjAyIC00LjU4MjQzNiAtNy41NTMxMjYpIj48cGF0aCBkPSJtMTguMzE2IDIzLjA4Nmg0LjYzMnY2LjA1MmMtLjc1LjI0NS0xLjQ1OS40MTUtMi4xMjEuNTE0LS42NjMuMDk4LTEuMzQxLjE0OC0yLjAzMy4xNDgtMS43NjQgMC0zLjEwNi0uNTE3LTQuMDM1LTEuNTU0LS45MjktMS4wMzQtMS4zOTUtMi41MTktMS4zOTUtNC40NTcgMC0xLjg4Ni41MzgtMy4zNTYgMS42MTctNC40MSAxLjA3OC0xLjA1NCAyLjU3My0xLjU3OSA0LjQ4MS0xLjU3OSAxLjIgMCAyLjM1Ny4yMzkgMy40NjkuNzE4bC0uODIzIDEuOTc5Yy0uODUtLjQyNS0xLjczNy0uNjM3LTIuNjU3LS42MzctMS4wNzEgMC0xLjkzMi4zNTgtMi41NzIgMS4wNzctLjY0NS43MTgtLjk2OCAxLjY4NS0uOTY4IDIuODk5IDAgMS4yNjcuMjYgMi4yMzMuNzggMi45MDQuNTE2LjY2NyAxLjI3MS45OTkgMi4yNjIuOTk5LjUxNyAwIDEuMDQxLS4wNTIgMS41NzItLjE1OHYtMi40MzVoLTIuMjA5em0xMS45MTIgNi41NTVoLTIuNDc0di05LjYxNGgtMy4xNzN2LTIuMDZoOC44MTZ2Mi4wNmgtMy4xNjl6bTkuOTA4IDAtMi44MTEtOS4xNThoLS4wNzJjLjEwMyAxLjg2My4xNTQgMy4xMDUuMTU0IDMuNzI4djUuNDNoLTIuMjEzdi0xMS42NzRoMy4zNjhsMi43NjQgOC45MjdoLjA0OGwyLjkzNC04LjkyN2gzLjM2OXYxMS42NzRoLTIuMzA4di01LjUyNWMwLS4yNjEgMC0uNTYxLjAwOS0uOTAzLjAwOS0uMzQxLjA0OC0xLjI0Ni4xMTItMi43MTZoLS4wNzRsLTMuMDExIDkuMTQ0eiIvPjxwYXRoIGQ9Im04OC44ODMgMzEuODk4aC0zLjgxMWwtNC4xNDctNi42Ny0xLjQxNyAxLjAxOHY1LjY1MmgtMy4zNTd2LTE1LjgzaDMuMzU3djcuMjQybDEuMzE4LTEuODYxIDQuMjkzLTUuMzgxaDMuNzI0bC01LjUyMyA3LjAwNnptMS41ODktMTUuMjMzYzAtMS4wNzUuNi0xLjYxNCAxLjgtMS42MTQgMS4xOTkgMCAxLjc5OC41MzkgMS43OTggMS42MTQgMCAuNTEyLS4xNDguOTEtLjQ1IDEuMTk2LS4yOTcuMjg0LS43NDkuNDI5LTEuMzQ4LjQyOS0xLjIgMC0xLjgtLjU0My0xLjgtMS42MjV6bTMuNDQ5IDE1LjIzM2gtMy4zMDJ2LTEyLjEwNGgzLjMwMnptOC41NjMtMi40MTNjLjU3OCAwIDEuMjcxLS4xMjggMi4wNzctLjM4djIuNDU2Yy0uODIuMzctMS44MzEuNTUyLTMuMDMxLjU1Mi0xLjMyNCAwLTIuMjgtLjMzMy0yLjg4NS0xLjAwMS0uNjAyLS42NjctLjkwMi0xLjY2OC0uOTAyLTMuMDAzdi01LjgzNWgtMS41ODV2LTEuMzk5bDEuODIzLTEuMTAzLjk0OS0yLjU1N2gyLjExNXYyLjU3OWgzLjM4OHYyLjQ4aC0zLjM4OHY1LjgzNWMwIC40NjcuMTI5LjgxNS4zOTMgMS4wNDEuMjY0LjIyMi42MTQuMzM1IDEuMDQ2LjMzNXoiLz48L2c+PC9zdmc+",alt:(0,o.__)("GTM Kit","gtm-kit"),className:"gtmkit-w-full"}))),(0,e.createElement)(bt,null))},_t=()=>(0,e.createElement)(e.Fragment,null,(0,e.createElement)("footer",{className:"gtm-kit-settings-footer gtmkit-my-8 gtmkit-text-color-grey"},(0,e.createElement)("p",{className:"gtmkit-mx-auto gtmkit-max-w-max"},(0,e.createElement)("a",{className:"gtmkit-underline",href:window.gtmkitWizardBuild.dashboard_url},(0,o.__)("Go to the dashboard.","gtm-kit")))));const It=()=>{const{useSettings:t}=(0,e.useContext)(s);return Object.keys(t).length?(0,e.createElement)(e.Fragment,null,(0,e.createElement)(Tt,null),(0,e.createElement)("main",{className:"gtmkit-max-w-3xl gtmkit-bg-white gtmkit-border-1 gtmkit-border-color-border gtmkit-rounded-md gtmkit-mx-auto gtmkit-py-12 gtmkit-px-16 gtmkit-text-base"},(0,e.createElement)(ft,null,(0,e.createElement)(ht,{exact:!0,path:"/welcome",element:(0,e.createElement)(xt,null)}),(0,e.createElement)(ht,{exact:!0,path:"/share-anonymous-data",element:(0,e.createElement)(Nt,null)}),(0,e.createElement)(ht,{exact:!0,path:"/getting-started",element:(0,e.createElement)(Lt,null)}),(0,e.createElement)(ht,{path:"/",element:(0,e.createElement)(pt,{replace:!0,to:"/welcome"})}))),(0,e.createElement)(_t,null)):(0,e.createElement)(n.Spinner,{className:"gtm-kit-settings-page-loader"})},Ct=()=>(0,e.createElement)(Mt,{basename:"/"},(0,e.createElement)(m,null,(0,e.createElement)(It,null)));document.addEventListener("DOMContentLoaded",(()=>{void 0!==document.getElementById(gtmkitWizardBuild.root_id)&&null!==document.getElementById(gtmkitWizardBuild.root_id)&&(0,e.render)((0,e.createElement)(Ct,null),document.getElementById(gtmkitWizardBuild.root_id))}))}();