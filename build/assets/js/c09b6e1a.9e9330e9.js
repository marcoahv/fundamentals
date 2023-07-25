"use strict";(self.webpackChunkfundamentals=self.webpackChunkfundamentals||[]).push([[7417],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>v});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=i,v=u["".concat(p,".").concat(m)]||u[m]||d[m]||r;return n?o.createElement(v,a(a({ref:t},c),{},{components:n})):o.createElement(v,a({ref:t},c))}));function v(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:i,a[1]=l;for(var s=2;s<r;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9914:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var o=n(7462),i=(n(7294),n(3905));const r={sidebar_position:2},a=void 0,l={unversionedId:"7 React 2023/PART 2: INTERMEDIATE REACT/Section 10: Thinking In React: Components, Composition, and Reusability",id:"7 React 2023/PART 2: INTERMEDIATE REACT/Section 10: Thinking In React: Components, Composition, and Reusability",title:"Section 10: Thinking In React: Components, Composition, and Reusability",description:"- Section Overview",source:"@site/docs/7 React 2023/PART 2: INTERMEDIATE REACT/Section 10: Thinking In React: Components, Composition, and Reusability.md",sourceDirName:"7 React 2023/PART 2: INTERMEDIATE REACT",slug:"/7 React 2023/PART 2: INTERMEDIATE REACT/Section 10: Thinking In React: Components, Composition, and Reusability",permalink:"/fundamentals/7 React 2023/PART 2: INTERMEDIATE REACT/Section 10: Thinking In React: Components, Composition, and Reusability",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Section 9: Intro",permalink:"/fundamentals/7 React 2023/PART 2: INTERMEDIATE REACT/Section 9: Intro"},next:{title:"Section 11: How React Works Behind the Scenes",permalink:"/fundamentals/7 React 2023/PART 2: INTERMEDIATE REACT/Section 11: How React Works Behind the Scenes"}},p={},s=[{value:"- Section Overview",id:"--section-overview",level:2},{value:"- Setting Up the &quot;usePopcorn&quot; Project",id:"--setting-up-the-usepopcorn-project",level:2},{value:"- How to Split a UI Into Components",id:"--how-to-split-a-ui-into-components",level:2},{value:"- Splitting Components in Practice",id:"--splitting-components-in-practice",level:2},{value:"- Component Categories",id:"--component-categories",level:2},{value:"- Prop Drilling",id:"--prop-drilling",level:2},{value:"- Component Composition",id:"--component-composition",level:2},{value:"- Fixing Prop Drilling With Composition (And Building a Layout)",id:"--fixing-prop-drilling-with-composition-and-building-a-layout",level:2},{value:"- Using Composition to Make a Reusable Box",id:"--using-composition-to-make-a-reusable-box",level:2},{value:"- Passing Elements as Props (Alternative to children)",id:"--passing-elements-as-props-alternative-to-children",level:2},{value:"- Building a Reusable Star Rating Component",id:"--building-a-reusable-star-rating-component",level:2},{value:"- Creating the Stars",id:"--creating-the-stars",level:2},{value:"- Handling Hover Events",id:"--handling-hover-events",level:2},{value:"- Props as a Component API",id:"--props-as-a-component-api",level:2},{value:"- Improving Reusability With Props",id:"--improving-reusability-with-props",level:2},{value:"- PropTypes",id:"--proptypes",level:2},{value:"- CHALLENGE #1: Text Expander Component",id:"--challenge-1-text-expander-component",level:2}],c={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"--section-overview"},"- Section Overview"),(0,i.kt)("h2",{id:"--setting-up-the-usepopcorn-project"},'- Setting Up the "usePopcorn" Project'),(0,i.kt)("h2",{id:"--how-to-split-a-ui-into-components"},"- How to Split a UI Into Components"),(0,i.kt)("h2",{id:"--splitting-components-in-practice"},"- Splitting Components in Practice"),(0,i.kt)("h2",{id:"--component-categories"},"- Component Categories"),(0,i.kt)("h2",{id:"--prop-drilling"},"- Prop Drilling"),(0,i.kt)("h2",{id:"--component-composition"},"- Component Composition"),(0,i.kt)("h2",{id:"--fixing-prop-drilling-with-composition-and-building-a-layout"},"- Fixing Prop Drilling With Composition (And Building a Layout)"),(0,i.kt)("h2",{id:"--using-composition-to-make-a-reusable-box"},"- Using Composition to Make a Reusable Box"),(0,i.kt)("h2",{id:"--passing-elements-as-props-alternative-to-children"},"- Passing Elements as Props (Alternative to children)"),(0,i.kt)("h2",{id:"--building-a-reusable-star-rating-component"},"- Building a Reusable Star Rating Component"),(0,i.kt)("h2",{id:"--creating-the-stars"},"- Creating the Stars"),(0,i.kt)("h2",{id:"--handling-hover-events"},"- Handling Hover Events"),(0,i.kt)("h2",{id:"--props-as-a-component-api"},"- Props as a Component API"),(0,i.kt)("h2",{id:"--improving-reusability-with-props"},"- Improving Reusability With Props"),(0,i.kt)("h2",{id:"--proptypes"},"- PropTypes"),(0,i.kt)("h2",{id:"--challenge-1-text-expander-component"},"- CHALLENGE #1: Text Expander Component"))}d.isMDXComponent=!0}}]);