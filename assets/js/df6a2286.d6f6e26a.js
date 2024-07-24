"use strict";(self.webpackChunkfundamentals=self.webpackChunkfundamentals||[]).push([[7578],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>k});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var s=r.createContext({}),c=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=c(t.components);return r.createElement(s.Provider,{value:e},t.children)},u="mdxType",g={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),u=c(n),d=o,k=u["".concat(s,".").concat(d)]||u[d]||g[d]||a;return n?r.createElement(k,i(i({ref:e},p),{},{components:n})):r.createElement(k,i({ref:e},p))}));function k(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[u]="string"==typeof t?t:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9439:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:6},i="TypeScript",l={unversionedId:"3 JavaScript/6 TypeScript",id:"3 JavaScript/6 TypeScript",title:"TypeScript",description:"https://youtu.be/30LWjhZzg50?si=iKabjDVTurEyJbaQ",source:"@site/docs/3 JavaScript/6 TypeScript.md",sourceDirName:"3 JavaScript",slug:"/3 JavaScript/6 TypeScript",permalink:"/fundamentals/3 JavaScript/6 TypeScript",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"JavaScript Tools",permalink:"/fundamentals/3 JavaScript/5 JavaScript Tools"},next:{title:"REACT",permalink:"/fundamentals/category/react"}},s={},c=[{value:"<strong>=&gt;</strong> Why to learn TypeScript",id:"-why-to-learn-typescript",level:3},{value:"<strong>=&gt;</strong> TypeScript is not what you think",id:"-typescript-is-not-what-you-think",level:3},{value:"<strong>=&gt;</strong> How to install TypeScript",id:"-how-to-install-typescript",level:3},{value:"<strong>=&gt;</strong> Your first intro to TypeScript docs",id:"-your-first-intro-to-typescript-docs",level:3},{value:"<strong>=&gt;</strong> Number, boolean, and type inference",id:"-number-boolean-and-type-inference",level:3},{value:"<strong>=&gt;</strong> Number, boolean, and type inference",id:"-number-boolean-and-type-inference-1",level:3},{value:"<strong>=&gt;</strong> Don&#39;t use ANY",id:"-dont-use-any",level:3},{value:"<strong>=&gt;</strong> Do you really know functions",id:"-do-you-really-know-functions",level:3},{value:"<strong>=&gt;</strong> A better way to write function",id:"-a-better-way-to-write-function",level:3},{value:"<strong>=&gt;</strong> Bad behavior of objects",id:"-bad-behavior-of-objects",level:3},{value:"<strong>=&gt;</strong> Type Aliases",id:"-type-aliases",level:3},{value:"<strong>=&gt;</strong> READONLY and optional",id:"-readonly-and-optional",level:3},{value:"<strong>=&gt;</strong> Array",id:"-array",level:3},{value:"<strong>=&gt;</strong> Union Types in TS",id:"-union-types-in-ts",level:3},{value:"<strong>=&gt;</strong> Tuples",id:"-tuples",level:3},{value:"<strong>=&gt;</strong> Enums",id:"-enums",level:3},{value:"<strong>=&gt;</strong> interface",id:"-interface",level:3},{value:"<strong>=&gt;</strong> Interface vs Type",id:"-interface-vs-type",level:3},{value:"<strong>=&gt;</strong> How to setup Typescript for real projects",id:"-how-to-setup-typescript-for-real-projects",level:3},{value:"<strong>=&gt;</strong> Classes",id:"-classes",level:3},{value:"<strong>=&gt;</strong> Private Public",id:"-private-public",level:3},{value:"<strong>=&gt;</strong> Getters and Setters",id:"-getters-and-setters",level:3},{value:"<strong>=&gt;</strong> Protected",id:"-protected",level:3},{value:"<strong>=&gt;</strong> Why Interface is important",id:"-why-interface-is-important",level:3},{value:"<strong>=&gt;</strong> Abstract class",id:"-abstract-class",level:3},{value:"<strong>=&gt;</strong> Generics",id:"-generics",level:3},{value:"<strong>=&gt;</strong> Generics in Array and Arrow functions",id:"-generics-in-array-and-arrow-functions",level:3},{value:"<strong>=&gt;</strong> Generic Classes",id:"-generic-classes",level:3},{value:"<strong>=&gt;</strong> Type Narrowing",id:"-type-narrowing",level:3},{value:"<strong>=&gt;</strong> The in operator narrowing",id:"-the-in-operator-narrowing",level:3},{value:"<strong>=&gt;</strong> Instanceof and Type Predicates",id:"-instanceof-and-type-predicates",level:3},{value:"<strong>=&gt;</strong> Discriminated Union and Exhaustiveness Checking with never",id:"-discriminated-union-and-exhaustiveness-checking-with-never",level:3},{value:"<strong>=&gt;</strong> TypeScript End",id:"-typescript-end",level:3}],p={toc:c},u="wrapper";function g(t){let{components:e,...n}=t;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"typescript"},"TypeScript"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://youtu.be/30LWjhZzg50?si=iKabjDVTurEyJbaQ"},"https://youtu.be/30LWjhZzg50?si=iKabjDVTurEyJbaQ")),(0,o.kt)("p",null,"\u2b50\ufe0f Contents \u2b50\ufe0f"),(0,o.kt)("h3",{id:"-why-to-learn-typescript"},(0,o.kt)("strong",{parentName:"h3"},"=>")," Why to learn TypeScript"),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"-typescript-is-not-what-you-think"},(0,o.kt)("strong",{parentName:"h3"},"=>")," TypeScript is not what you think"),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"-how-to-install-typescript"},(0,o.kt)("strong",{parentName:"h3"},"=>")," How to install TypeScript"),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"-your-first-intro-to-typescript-docs"},(0,o.kt)("strong",{parentName:"h3"},"=>")," Your first intro to TypeScript docs"),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"-number-boolean-and-type-inference"},(0,o.kt)("strong",{parentName:"h3"},"=>")," Number, boolean, and type inference"),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"-number-boolean-and-type-inference-1"},(0,o.kt)("strong",{parentName:"h3"},"=>")," Number, boolean, and type inference"),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"-dont-use-any"},(0,o.kt)("strong",{parentName:"h3"},"=>")," Don't use ANY"),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"-do-you-really-know-functions"},(0,o.kt)("strong",{parentName:"h3"},"=>")," Do you really know functions"),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"-a-better-way-to-write-function"},(0,o.kt)("strong",{parentName:"h3"},"=>")," A better way to write function"),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"-bad-behavior-of-objects"},(0,o.kt)("strong",{parentName:"h3"},"=>")," Bad behavior of objects"),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"-type-aliases"},(0,o.kt)("strong",{parentName:"h3"},"=>")," Type Aliases"),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"-readonly-and-optional"},(0,o.kt)("strong",{parentName:"h3"},"=>")," READONLY and optional"),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"-array"},(0,o.kt)("strong",{parentName:"h3"},"=>")," Array"),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"-union-types-in-ts"},(0,o.kt)("strong",{parentName:"h3"},"=>")," Union Types in TS"),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"-tuples"},(0,o.kt)("strong",{parentName:"h3"},"=>")," Tuples"),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"-enums"},(0,o.kt)("strong",{parentName:"h3"},"=>")," Enums"),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"-interface"},(0,o.kt)("strong",{parentName:"h3"},"=>")," interface"),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"-interface-vs-type"},(0,o.kt)("strong",{parentName:"h3"},"=>")," Interface vs Type"),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"-how-to-setup-typescript-for-real-projects"},(0,o.kt)("strong",{parentName:"h3"},"=>")," How to setup Typescript for real projects"),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"-classes"},(0,o.kt)("strong",{parentName:"h3"},"=>")," Classes"),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"-private-public"},(0,o.kt)("strong",{parentName:"h3"},"=>")," Private Public"),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"-getters-and-setters"},(0,o.kt)("strong",{parentName:"h3"},"=>")," Getters and Setters"),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"-protected"},(0,o.kt)("strong",{parentName:"h3"},"=>")," Protected"),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"-why-interface-is-important"},(0,o.kt)("strong",{parentName:"h3"},"=>")," Why Interface is important"),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"-abstract-class"},(0,o.kt)("strong",{parentName:"h3"},"=>")," Abstract class"),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"-generics"},(0,o.kt)("strong",{parentName:"h3"},"=>")," Generics"),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"-generics-in-array-and-arrow-functions"},(0,o.kt)("strong",{parentName:"h3"},"=>")," Generics in Array and Arrow functions"),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"-generic-classes"},(0,o.kt)("strong",{parentName:"h3"},"=>")," Generic Classes"),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"-type-narrowing"},(0,o.kt)("strong",{parentName:"h3"},"=>")," Type Narrowing"),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"-the-in-operator-narrowing"},(0,o.kt)("strong",{parentName:"h3"},"=>")," The in operator narrowing"),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"-instanceof-and-type-predicates"},(0,o.kt)("strong",{parentName:"h3"},"=>")," Instanceof and Type Predicates"),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"-discriminated-union-and-exhaustiveness-checking-with-never"},(0,o.kt)("strong",{parentName:"h3"},"=>")," Discriminated Union and Exhaustiveness Checking with never"),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"-typescript-end"},(0,o.kt)("strong",{parentName:"h3"},"=>")," TypeScript End"),(0,o.kt)("blockquote",null))}g.isMDXComponent=!0}}]);