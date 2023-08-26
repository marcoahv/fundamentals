"use strict";(self.webpackChunkfundamentals=self.webpackChunkfundamentals||[]).push([[3812],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>v});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),d=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,v=p["".concat(c,".").concat(m)]||p[m]||s[m]||o;return n?a.createElement(v,i(i({ref:t},u),{},{components:n})):a.createElement(v,i({ref:t},u))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},818:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:8},i=void 0,l={unversionedId:"7 React 2023/PART 4: PROFESSIONAL REACT DEVELOPMENT/Section 28: Advanced React Patterns",id:"7 React 2023/PART 4: PROFESSIONAL REACT DEVELOPMENT/Section 28: Advanced React Patterns",title:"Section 28: Advanced React Patterns",description:"\ud83d\udfe3 Section Overview",source:"@site/docs/7 React 2023/PART 4: PROFESSIONAL REACT DEVELOPMENT/Section 28: Advanced React Patterns.md",sourceDirName:"7 React 2023/PART 4: PROFESSIONAL REACT DEVELOPMENT",slug:"/7 React 2023/PART 4: PROFESSIONAL REACT DEVELOPMENT/Section 28: Advanced React Patterns",permalink:"/fundamentals/7 React 2023/PART 4: PROFESSIONAL REACT DEVELOPMENT/Section 28: Advanced React Patterns",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Section 27: React Query: Managing Remote State",permalink:"/fundamentals/7 React 2023/PART 4: PROFESSIONAL REACT DEVELOPMENT/Section 27: React Query: Managing Remote State"},next:{title:"Section 29: Implementing More Features Authentication Dark Mode Dashboard",permalink:"/fundamentals/7 React 2023/PART 4: PROFESSIONAL REACT DEVELOPMENT/Section 29: Implementing More Features Authentication Dark Mode Dashboard"}},c={},d=[{value:"\ud83d\udfe3 Section Overview",id:"-section-overview",level:2},{value:"\ud83d\udfe3 An Overview of Reusability in React",id:"-an-overview-of-reusability-in-react",level:2},{value:"\ud83d\udfe3 Setting Up an Example",id:"-setting-up-an-example",level:2},{value:"\ud83d\udfe3 The Render Props Pattern",id:"-the-render-props-pattern",level:2},{value:"\ud83d\udfe3 A Look at Higher-Order Components (HOC)",id:"-a-look-at-higher-order-components-hoc",level:2},{value:"\ud83d\udfe3 The Compound Component Pattern",id:"-the-compound-component-pattern",level:2},{value:"\ud83d\udfe3 Building a Modal Window Using a React Portal",id:"-building-a-modal-window-using-a-react-portal",level:2},{value:"\ud83d\udfe3 Converting the Modal to a Compound Component",id:"-converting-the-modal-to-a-compound-component",level:2},{value:"\ud83d\udfe3 Detecting a Click Outside the Modal",id:"-detecting-a-click-outside-the-modal",level:2},{value:"\ud83d\udfe3 Confirming Cabin Deletions",id:"-confirming-cabin-deletions",level:2},{value:"\ud83d\udfe3 Building a Reusable Table",id:"-building-a-reusable-table",level:2},{value:"\ud83d\udfe3 Applying the Render Props Pattern",id:"-applying-the-render-props-pattern",level:2},{value:"\ud83d\udfe3 Building a Reusable Context Menu",id:"-building-a-reusable-context-menu",level:2}],u={toc:d},p="wrapper";function s(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"-section-overview"},"\ud83d\udfe3 Section Overview"),(0,r.kt)("h2",{id:"-an-overview-of-reusability-in-react"},"\ud83d\udfe3 An Overview of Reusability in React"),(0,r.kt)("h2",{id:"-setting-up-an-example"},"\ud83d\udfe3 Setting Up an Example"),(0,r.kt)("h2",{id:"-the-render-props-pattern"},"\ud83d\udfe3 The Render Props Pattern"),(0,r.kt)("h2",{id:"-a-look-at-higher-order-components-hoc"},"\ud83d\udfe3 A Look at Higher-Order Components (HOC)"),(0,r.kt)("h2",{id:"-the-compound-component-pattern"},"\ud83d\udfe3 The Compound Component Pattern"),(0,r.kt)("h2",{id:"-building-a-modal-window-using-a-react-portal"},"\ud83d\udfe3 Building a Modal Window Using a React Portal"),(0,r.kt)("h2",{id:"-converting-the-modal-to-a-compound-component"},"\ud83d\udfe3 Converting the Modal to a Compound Component"),(0,r.kt)("h2",{id:"-detecting-a-click-outside-the-modal"},"\ud83d\udfe3 Detecting a Click Outside the Modal"),(0,r.kt)("h2",{id:"-confirming-cabin-deletions"},"\ud83d\udfe3 Confirming Cabin Deletions"),(0,r.kt)("h2",{id:"-building-a-reusable-table"},"\ud83d\udfe3 Building a Reusable Table"),(0,r.kt)("h2",{id:"-applying-the-render-props-pattern"},"\ud83d\udfe3 Applying the Render Props Pattern"),(0,r.kt)("h2",{id:"-building-a-reusable-context-menu"},"\ud83d\udfe3 Building a Reusable Context Menu"))}s.isMDXComponent=!0}}]);