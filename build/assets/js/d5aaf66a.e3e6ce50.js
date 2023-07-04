"use strict";(self.webpackChunkfundamentals=self.webpackChunkfundamentals||[]).push([[4416],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(i,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(f,p(p({ref:t},u),{},{components:n})):r.createElement(f,p({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[m]="string"==typeof e?e:a,p[1]=l;for(var s=2;s<o;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1842:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:10},p="Default export vs named export",l={unversionedId:"4 React 18/10 default and named exports",id:"4 React 18/10 default and named exports",title:"Default export vs named export",description:"export default is what allows us to import the component with any name",source:"@site/docs/4 React 18/10 default and named exports.md",sourceDirName:"4 React 18",slug:"/4 React 18/10 default and named exports",permalink:"/fundamentals/4 React 18/10 default and named exports",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Create a function component",permalink:"/fundamentals/4 React 18/9 creating a new component"},next:{title:"JSX",permalink:"/fundamentals/4 React 18/11 JSX"}},i={},s=[{value:"export default is what allows us to import the component with any name",id:"export-default-is-what-allows-us-to-import-the-component-with-any-name",level:3},{value:"named exports",id:"named-exports",level:3}],u={toc:s},m="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"default-export-vs-named-export"},"Default export vs named export"),(0,a.kt)("h3",{id:"export-default-is-what-allows-us-to-import-the-component-with-any-name"},"export default is what allows us to import the component with any name"),(0,a.kt)("p",null,"  all right before we proceed i would like to highlight a point about exporting and importing components"),(0,a.kt)("p",null,"  please note here that we are exporting greet component as a default export from\ngreet.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const Greet = () => {\n  return <h1>Hello Vishwas</h1>\n}\n\nexport default Greet\n")),(0,a.kt)("p",null,"  is what allows us to import the component with any name"),(0,a.kt)("p",null,"  i can change greet to myComponent, change the tag to myComponent"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import './App.css'\nimport myComponent from './components/Greet'\n\nfunction App() {\n  return (\n    <div className='App'>\n      <myComponent />\n    </div>\n  )\n}\n\nexport default App\n")),(0,a.kt)("p",null,"  head back to the browser and you can see that it still works as expected"),(0,a.kt)("h3",{id:"named-exports"},"named exports"),(0,a.kt)("p",null,"  but in certain articles or videos you might also find ",(0,a.kt)("inlineCode",{parentName:"p"},"named exports")),(0,a.kt)("p",null,"  let me comment the default export"),(0,a.kt)("p",null,"  and prepend the constant with the export keyword"),(0,a.kt)("p",null,"  so export const greet"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"export const Greet = () => {\n  return <h1>Hello Vishwas</h1>\n}\n\n// export default Greet\n")),(0,a.kt)("p",null,"  this is what is termed as a named export"),(0,a.kt)("p",null,"  ",(0,a.kt)("inlineCode",{parentName:"p"},"in this situation you have to import the component with the exact same name")),(0,a.kt)("p",null,"  if i save the file\nyou can straight away see we have an error"),(0,a.kt)("p",null,"  (export default imported as my component was not found in components gree)t"),(0,a.kt)("p",null,"  so you have to change the import statement to import the greet function"),(0,a.kt)("p",null,"  ",(0,a.kt)("inlineCode",{parentName:"p"},"for named exports we use curly braces and then the export")),(0,a.kt)("p",null,"  so import greet from dot slash components slash greet"),(0,a.kt)("p",null,"  and use the same tag"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import './App.css'\nimport { Greet } from './components/Greet'\n\nfunction App() {\n  return (\n    <div className='App'>\n      <Greet />\n    </div>\n  )\n}\n\nexport default App\n")),(0,a.kt)("p",null,"  if we take a look at the browser our app is working once again"),(0,a.kt)("p",null,"  ",(0,a.kt)("inlineCode",{parentName:"p"},"now i am going to be using named exports for the most part but make sure you understand the difference between default and named exports")))}c.isMDXComponent=!0}}]);