"use strict";(self.webpackChunkfundamentals=self.webpackChunkfundamentals||[]).push([[1432],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(n),h=r,d=c["".concat(l,".").concat(h)]||c[h]||u[h]||i;return n?a.createElement(d,o(o({ref:t},m),{},{components:n})):a.createElement(d,o({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2814:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:18},o="List rendering",s={unversionedId:"4 React 18/18 list rendering",id:"4 React 18/18 list rendering",title:"List rendering",description:"in react we use the javascript map method to repeat some html for each item in the list",source:"@site/docs/4 React 18/18 list rendering.md",sourceDirName:"4 React 18",slug:"/4 React 18/18 list rendering",permalink:"/fundamentals/4 React 18/18 list rendering",draft:!1,tags:[],version:"current",sidebarPosition:18,frontMatter:{sidebar_position:18},sidebar:"tutorialSidebar",previous:{title:"Conditional rendering",permalink:"/fundamentals/4 React 18/17 conditional rendering"},next:{title:"Styling",permalink:"/fundamentals/4 React 18/19 styling"}},l={},p=[{value:"in react we use the javascript map method to repeat some html for each item in the list",id:"in-react-we-use-the-javascript-map-method-to-repeat-some-html-for-each-item-in-the-list",level:3},{value:"each child in a list should have a unique key prob",id:"each-child-in-a-list-should-have-a-unique-key-prob",level:3}],m={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"list-rendering"},"List rendering"),(0,r.kt)("h3",{id:"in-react-we-use-the-javascript-map-method-to-repeat-some-html-for-each-item-in-the-list"},"in react we use the javascript map method to repeat some html for each item in the list"),(0,r.kt)("p",null,"  all right for our next topic let's look\nat another common scenario that we come across when building web applications"),(0,r.kt)("p",null,"  and that is displaying a list of items"),(0,r.kt)("p",null,"  for example a list of names a list of\nproducts a list of courses etc"),(0,r.kt)("p",null,"  what we have to do is repeat some html\nfor each item in the list"),(0,r.kt)("p",null,"  in react we use the javascript map method to achieve that"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"i'm going to create a new file in the\ncomponents folder called ",(0,r.kt)("inlineCode",{parentName:"p"},"NameList.js"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"within the file i'm going to create a new function component"),(0,r.kt)("p",{parentName:"li"},"export const name list and this is equal to an arrow function"),(0,r.kt)("p",{parentName:"li"},"within the component i'm going to create an array of names, const names is equal to an array bruce clark and diana"),(0,r.kt)("p",{parentName:"li"},"let's return a div tag and within the div tag we use the map method on the array"),(0,r.kt)("p",{parentName:"li"},"since that is a javascript expression we start with curly braces array.map is the syntax"),(0,r.kt)("p",{parentName:"li"},"so names dot map"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"export const NameList = () => {\n  const names = ['Bruce', 'Clark', 'Diana']\n  return <div>{names.map()}</div>\n}\n")),(0,r.kt)("p",{parentName:"li"},"the map method takes in a function as an argument we will be using an arrow function"),(0,r.kt)("p",{parentName:"li"},"the function receives an argument which i am going to call as ",(0,r.kt)("inlineCode",{parentName:"p"},"name")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"export const NameList = () => {\n  const names = ['Bruce', 'Clark', 'Diana']\n  return <div>{names.map((name) => {})}</div>\n}\n")),(0,r.kt)("p",{parentName:"li"},"you can name it anything you want to but i recommend naming it something relevant to the array you're iterating over"),(0,r.kt)("p",{parentName:"li"},"now the fat arrow symbol is next followed by the function body which will\nbe the transformation"),(0,r.kt)("p",{parentName:"li"},"what we want to do is for every name return an h2 tag with the name as the inner html"),(0,r.kt)("p",{parentName:"li"},"so return an h2 tag with name as the inner html"),(0,r.kt)("p",{parentName:"li"},"once you start writing html you need to reuse curly braces so we need another pair for the name argument"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"export const NameList = () => {\n  const names = ['Bruce', 'Clark', 'Diana']\n  return (\n    <div>\n      {names.map((name) => {\n        return <h2>{name}</h2>\n      })}\n    </div>\n  )\n}\n")),(0,r.kt)("p",{parentName:"li"},"and that is pretty much it"),(0,r.kt)("p",{parentName:"li"},"if you now save the file"),(0,r.kt)("p",{parentName:"li"},"include it in app component name list"),(0,r.kt)("p",{parentName:"li"},"and import it at the top"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"")),(0,r.kt)("p",{parentName:"li"},"head back to the browser we should be able to see the list of\nnames being rendered, bruce clark and diana"),(0,r.kt)("p",{parentName:"li"},"now although this works fine if we take a look at the devtools console\nwe see a warning"))),(0,r.kt)("h3",{id:"each-child-in-a-list-should-have-a-unique-key-prob"},"each child in a list should have a unique key prob"),(0,r.kt)("p",null,"  to fix this on the item returned from map method\nwhich is the h2 element we add a key prop and assign a unique value"),(0,r.kt)("p",null,"  since each of the names are unique in the array we can assign the same to the key prop"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"export const NameList = () => {\n  const names = ['Bruce', 'Clark', 'Diana']\n  return (\n    <div>\n      {names.map((name) => {\n        return <h2 key={name}>{name}</h2>\n      })}\n    </div>\n  )\n}\n")),(0,r.kt)("p",null,"  if we take a look at the browser refresh\nyou can see the warning has disappeared"),(0,r.kt)("p",null,"  now the key prop doesn't represent anything in the user interface"),(0,r.kt)("p",null,"  however ",(0,r.kt)("inlineCode",{parentName:"p"},"it is internally used by react to construct the list of elements in the dom in a more efficient way")),(0,r.kt)("p",null,"  the key prop also helps prevents bugs when you're dealing with lists that involve sorting or filtering"),(0,r.kt)("p",null,"  but from a beginner's point of view you just have to remember to specify the key prop and assign a unique value to it"),(0,r.kt)("p",null,"  if you are iterating over an array of objects you typically tend to have an id\nproperty that is unique and can be used as the key prop value"),(0,r.kt)("p",null,"  but this is pretty much how you render a list of items in react using the map method"),(0,r.kt)("p",null,"  if you're unsure as to what the map method is please do google array.map in\njavascript"),(0,r.kt)("p",null,"  and get a basic understanding of how it works"),(0,r.kt)("p",null,"  once you understand that you can come back to the code we have written in our component"))}u.isMDXComponent=!0}}]);