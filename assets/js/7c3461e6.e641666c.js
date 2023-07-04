"use strict";(self.webpackChunkfundamentals=self.webpackChunkfundamentals||[]).push([[2686],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),f=a,d=u["".concat(l,".").concat(f)]||u[f]||m[f]||r;return n?o.createElement(d,i(i({ref:t},c),{},{components:n})):o.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=f;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:a,i[1]=p;for(var s=2;s<r;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3819:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var o=n(7462),a=(n(7294),n(3905));const r={sidebar_position:9},i="Create a function component",p={unversionedId:"4 React 18/9 creating a new component",id:"4 React 18/9 creating a new component",title:"Create a function component",description:"to get a better hang of components let's now create a function component ourselves",source:"@site/docs/4 React 18/9 creating a new component.md",sourceDirName:"4 React 18",slug:"/4 React 18/9 creating a new component",permalink:"/fundamentals/4 React 18/9 creating a new component",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Function Components",permalink:"/fundamentals/4 React 18/8 Function Components"},next:{title:"Default export vs named export",permalink:"/fundamentals/4 React 18/10 default and named exports"}},l={},s=[{value:"to get a better hang of components let&#39;s now create a function component ourselves",id:"to-get-a-better-hang-of-components-lets-now-create-a-function-component-ourselves",level:3},{value:"it&#39;s also possible to use an arrow function to create a function component",id:"its-also-possible-to-use-an-arrow-function-to-create-a-function-component",level:3}],c={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"create-a-function-component"},"Create a function component"),(0,a.kt)("h3",{id:"to-get-a-better-hang-of-components-lets-now-create-a-function-component-ourselves"},"to get a better hang of components let's now create a function component ourselves"),(0,a.kt)("p",null,"  to keep things simple in the app\ncomponent i am going to ",(0,a.kt)("inlineCode",{parentName:"p"},"remove all the html except the outer div tag,"),"\nremove the logo import as well at the top"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"App.js","App.js":!0},"import './App.css'\n\nfunction App() {\n  return <div className='App'></div>\n}\n\nexport default App\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"now let's create our first component\nwhich will simply output the message ",(0,a.kt)("inlineCode",{parentName:"p"},"hello Vishwas")),(0,a.kt)("p",{parentName:"li"},"now a component is nothing but a\njavascript file let's start with that"))),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"first within the source folder i'm going\nto create a new folder called components ",(0,a.kt)("inlineCode",{parentName:"p"},"src/components"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"and within the folder i'm going to create a new file called Greet.js"),(0,a.kt)("p",{parentName:"li"},"now within the file define a new function"),(0,a.kt)("p",{parentName:"li"},"function Greet we return an h1 tag that says hello vishwas"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"Greet.js","Greet.js":!0},"function Greet() {\n  return <h1>Hello Vishwas</h1>\n}\n")),(0,a.kt)("p",{parentName:"li"},"and that is pretty much it you have created your first function component"),(0,a.kt)("p",{parentName:"li"},"but as it stands now the html hello vishwas is not going to be rendered in\nthe browser, ",(0,a.kt)("inlineCode",{parentName:"p"},"the great component is in no way connected with the rest of our application"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"so what we have to do is export the greet function from greet.js"),(0,a.kt)("p",{parentName:"li"},"so export default greet"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"Greet.js","Greet.js":!0},"function Greet() {\n  return <h1>Hello Vishwas</h1>\n}\n\nexport default Greet\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"import it in app.js"),(0,a.kt)("p",{parentName:"li"},"import greet from dot slash components slash greed\n(we are allowed to omit the dot js file extension)"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"App.js","App.js":!0},"import './App.css'\nimport Greet from './components/Greet'\n\nfunction App() {\n  return <div className='App'></div>\n}\n\nexport default App\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"and then include it in the app component"),(0,a.kt)("p",{parentName:"li"},"now to include the grid component in app component we simply specify the component as a\ncustom html tag"),(0,a.kt)("p",{parentName:"li"},"so within the outer div tag\ninclude the greet component as an html tag"),(0,a.kt)("p",{parentName:"li"},"if there is no content between the\nopening and closing tags you can simply change it into a self-closing tag"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import './App.css'\nimport Greet from './components/Greet'\n\nfunction App() {\n  return (\n    <div className='App'>\n      <Greet />\n    </div>\n  )\n}\n\nexport default App\n")),(0,a.kt)("p",{parentName:"li"},"now if we save all the files and take a look at the browser\nyou should be able to see hello vishwas\nyour first function component is up and running"))),(0,a.kt)("h3",{id:"its-also-possible-to-use-an-arrow-function-to-create-a-function-component"},"it's also possible to use an arrow function to create a function component"),(0,a.kt)("p",null,"  let's rewrite the code"),(0,a.kt)("p",null,"  const greet is equal to an arrow function\nwhich returns hello vishwas"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const Greet = () => {\n  return <h1>Hello Vishwas</h1>\n}\n\nexport default Greet\n")),(0,a.kt)("p",null,"  if you're new to arrow functions\nplease pause the video and try to get a basic understanding of how they work\nas we will be using them a lot throughout the series"),(0,a.kt)("p",null,"  take a look at the browser and we still see hello vishwas"))}m.isMDXComponent=!0}}]);