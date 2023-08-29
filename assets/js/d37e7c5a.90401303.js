"use strict";(self.webpackChunkfundamentals=self.webpackChunkfundamentals||[]).push([[200],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),s=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return i.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||a;return n?i.createElement(f,o(o({ref:t},d),{},{components:n})):i.createElement(f,o({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:r,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6490:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var i=n(7462),r=(n(7294),n(3905));const a={sidebar_position:5},o=void 0,c={unversionedId:"7 React 2023/PART 3: ADVANCED REACT + REDUX/Section 19: Performance Optimization and Advanced useEffect",id:"7 React 2023/PART 3: ADVANCED REACT + REDUX/Section 19: Performance Optimization and Advanced useEffect",title:"Section 19: Performance Optimization and Advanced useEffect",description:"\ud83d\udfe3 Section Overview",source:"@site/docs/7 React 2023/PART 3: ADVANCED REACT + REDUX/Section 19: Performance Optimization and Advanced useEffect.md",sourceDirName:"7 React 2023/PART 3: ADVANCED REACT + REDUX",slug:"/7 React 2023/PART 3: ADVANCED REACT + REDUX/Section 19: Performance Optimization and Advanced useEffect",permalink:"/fundamentals/7 React 2023/PART 3: ADVANCED REACT + REDUX/Section 19: Performance Optimization and Advanced useEffect",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Section 18: Advanced State Management: The Context API",permalink:"/fundamentals/7 React 2023/PART 3: ADVANCED REACT + REDUX/Section 18: Advanced State Management: The Context API"},next:{title:"Section 20: Redux and Modern Redux Toolkit",permalink:"/fundamentals/7 React 2023/PART 3: ADVANCED REACT + REDUX/Section 20: Redux and Modern Redux Toolkit"}},l={},s=[{value:"\ud83d\udfe3 Section Overview",id:"-section-overview",level:2},{value:"\ud83d\udfe3 Performance Optimization and Wasted Renders",id:"-performance-optimization-and-wasted-renders",level:2},{value:"\ud83d\udfe3 The Profiler Developer Tool",id:"-the-profiler-developer-tool",level:2},{value:"\ud83d\udfe3 A Surprising Optimization Trick With children",id:"-a-surprising-optimization-trick-with-children",level:2},{value:"\ud83d\udfe3 Understanding memo",id:"-understanding-memo",level:2},{value:"\ud83d\udfe3 memo in Practice",id:"-memo-in-practice",level:2},{value:"\ud83d\udfe3 Understanding useMemo and useCallback",id:"-understanding-usememo-and-usecallback",level:2},{value:"\ud83d\udfe3 useMemo in Practice",id:"-usememo-in-practice",level:2},{value:"\ud83d\udfe3 useCallback in Practice",id:"-usecallback-in-practice",level:2},{value:"\ud83d\udfe3 Optimizing Context Re-Renders",id:"-optimizing-context-re-renders",level:2},{value:"\ud83d\udfe3 Back to The &quot;WorldWise&quot; App",id:"-back-to-the-worldwise-app",level:2},{value:"\ud83d\udfe3 Optimizing Bundle Size With Code Splitting",id:"-optimizing-bundle-size-with-code-splitting",level:2},{value:"\ud83d\udfe3 Don&#39;t Optimize Prematurely!",id:"-dont-optimize-prematurely",level:2},{value:"\ud83d\udfe3 useEffect Rules and Best Practices",id:"-useeffect-rules-and-best-practices",level:2},{value:"\ud83d\udfe3 CHALLENGE #1: Fix Performance Issues in &quot;Workout Timer&quot;",id:"-challenge-1-fix-performance-issues-in-workout-timer",level:2},{value:"\ud83d\udfe3 Setting State Based on Other State Updates",id:"-setting-state-based-on-other-state-updates",level:2},{value:"\ud83d\udfe3 Using Helper Functions In Effects",id:"-using-helper-functions-in-effects",level:2},{value:"\ud83d\udfe3 Closures in Effects",id:"-closures-in-effects",level:2}],d={toc:s},u="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"-section-overview"},"\ud83d\udfe3 Section Overview"),(0,r.kt)("h2",{id:"-performance-optimization-and-wasted-renders"},"\ud83d\udfe3 Performance Optimization and Wasted Renders"),(0,r.kt)("h2",{id:"-the-profiler-developer-tool"},"\ud83d\udfe3 The Profiler Developer Tool"),(0,r.kt)("h2",{id:"-a-surprising-optimization-trick-with-children"},"\ud83d\udfe3 A Surprising Optimization Trick With children"),(0,r.kt)("h2",{id:"-understanding-memo"},"\ud83d\udfe3 Understanding memo"),(0,r.kt)("h2",{id:"-memo-in-practice"},"\ud83d\udfe3 memo in Practice"),(0,r.kt)("h2",{id:"-understanding-usememo-and-usecallback"},"\ud83d\udfe3 Understanding useMemo and useCallback"),(0,r.kt)("h2",{id:"-usememo-in-practice"},"\ud83d\udfe3 useMemo in Practice"),(0,r.kt)("h2",{id:"-usecallback-in-practice"},"\ud83d\udfe3 useCallback in Practice"),(0,r.kt)("h2",{id:"-optimizing-context-re-renders"},"\ud83d\udfe3 Optimizing Context Re-Renders"),(0,r.kt)("h2",{id:"-back-to-the-worldwise-app"},'\ud83d\udfe3 Back to The "WorldWise" App'),(0,r.kt)("h2",{id:"-optimizing-bundle-size-with-code-splitting"},"\ud83d\udfe3 Optimizing Bundle Size With Code Splitting"),(0,r.kt)("h2",{id:"-dont-optimize-prematurely"},"\ud83d\udfe3 Don't Optimize Prematurely!"),(0,r.kt)("h2",{id:"-useeffect-rules-and-best-practices"},"\ud83d\udfe3 useEffect Rules and Best Practices"),(0,r.kt)("h2",{id:"-challenge-1-fix-performance-issues-in-workout-timer"},'\ud83d\udfe3 CHALLENGE #1: Fix Performance Issues in "Workout Timer"'),(0,r.kt)("h2",{id:"-setting-state-based-on-other-state-updates"},"\ud83d\udfe3 Setting State Based on Other State Updates"),(0,r.kt)("h2",{id:"-using-helper-functions-in-effects"},"\ud83d\udfe3 Using Helper Functions In Effects"),(0,r.kt)("h2",{id:"-closures-in-effects"},"\ud83d\udfe3 Closures in Effects"))}p.isMDXComponent=!0}}]);