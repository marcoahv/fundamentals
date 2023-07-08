"use strict";(self.webpackChunkfundamentals=self.webpackChunkfundamentals||[]).push([[3903],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),f=r,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||o;return n?a.createElement(m,i(i({ref:t},l),{},{components:n})):a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5704:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:1},i="Function Basics",s={unversionedId:"3 Javascript/functions-scope-docs/function-basics",id:"3 Javascript/functions-scope-docs/function-basics",title:"Function Basics",description:"Functions are a way to group code together. They make code more readable and easier to understand. Let's look at some of the basics.",source:"@site/docs/3 Javascript/03-functions-scope-docs/01-function-basics.md",sourceDirName:"3 Javascript/03-functions-scope-docs",slug:"/3 Javascript/functions-scope-docs/function-basics",permalink:"/fundamentals/3 Javascript/functions-scope-docs/function-basics",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Section 3: Functions, Scope & Execution Context",permalink:"/fundamentals/category/section-3-functions-scope--execution-context"},next:{title:"More on Params & Arguments",permalink:"/fundamentals/3 Javascript/functions-scope-docs/function-arguments"}},c={},u=[{value:"Creating a function",id:"creating-a-function",level:3},{value:"Function Parameters",id:"function-parameters",level:3},{value:"Parameters vs. Arguments",id:"parameters-vs-arguments",level:3},{value:"Returning a value",id:"returning-a-value",level:3}],l={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"function-basics"},"Function Basics"),(0,r.kt)("p",null,"Functions are a way to group code together. They make code more readable and easier to understand. Let's look at some of the basics."),(0,r.kt)("h3",{id:"creating-a-function"},"Creating a function"),(0,r.kt)("p",null,"Creating or defining a function is simple. We use the function keyword, followed by the name of the function, followed by parentheses. Then we create the function body wrapped in curly braces."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function sayHello() {\n  console.log('Hello World')\n}\n")),(0,r.kt)("p",null,"When we create a function, we don't add a semi-colon at the end of the curly braces."),(0,r.kt)("p",null,'Just creating the function does not execute any code. We need to "call" or "invoke" the function to execute the code within it.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"sayHello() // Hello World\n")),(0,r.kt)("h3",{id:"function-parameters"},"Function Parameters"),(0,r.kt)("p",null,"You can define parameters for functions to allow the user to input specific data when calling the function."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function add(x, y) {\n  console.log(x + y)\n}\n\nadd(5, 5) // 10\n")),(0,r.kt)("h3",{id:"parameters-vs-arguments"},"Parameters vs. Arguments"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Parameters are the names of the variables that are used to pass data into a function."),(0,r.kt)("li",{parentName:"ul"},"Arguments are the values that are passed into the function")),(0,r.kt)("h3",{id:"returning-a-value"},"Returning a value"),(0,r.kt)("p",null,"The function that we created just console logs a message. In the real world, you'll usually want to return a value from a function."),(0,r.kt)("p",null,"Anything that you put after the return will not get executed because you are essentially ending the function and returning to the parent scope."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function subtract(x, y) {\n  return x - y\n\n  // This code will not execute\n  console.log('After the return')\n}\n\n// This will not output anything\nsubtract(10, 5)\n\n// You could log the value like This\nconsole.log(subtract(10, 5)) // 5\n\n// Usually we do something with the return value, like store it in a variable\n\nconst result = subtract(10, 5)\n")),(0,r.kt)("p",null,"You can also return without a value. This is useful for functions that don't return anything. You may have a function to update or delete some data on a server, but don't have a need to return anything."))}d.isMDXComponent=!0}}]);