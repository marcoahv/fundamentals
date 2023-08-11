"use strict";(self.webpackChunkfundamentals=self.webpackChunkfundamentals||[]).push([[2485],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,f=c["".concat(u,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4649:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:13},l="Number Challenge",i={unversionedId:"3 Javascript/variables-data-types-docs/number-challenge",id:"3 Javascript/variables-data-types-docs/number-challenge",title:"Number Challenge",description:"Instructions:",source:"@site/docs/3 Javascript/01-variables-data-types-docs/13-number-challenge.md",sourceDirName:"3 Javascript/01-variables-data-types-docs",slug:"/3 Javascript/variables-data-types-docs/number-challenge",permalink:"/fundamentals/3 Javascript/variables-data-types-docs/number-challenge",draft:!1,tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13},sidebar:"tutorialSidebar",previous:{title:"Math Object",permalink:"/fundamentals/3 Javascript/variables-data-types-docs/math-object"},next:{title:"Working With Dates",permalink:"/fundamentals/3 Javascript/variables-data-types-docs/dates-and-times"}},u={},s=[],p={toc:s},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"number-challenge"},"Number Challenge"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Instructions:")),(0,a.kt)("p",null,"Create a variable called ",(0,a.kt)("inlineCode",{parentName:"p"},"x")," that is a random number between 1 and 100 along with a variable called ",(0,a.kt)("inlineCode",{parentName:"p"},"y")," that is a random number between 1 and 50."),(0,a.kt)("p",null,"Create a variable for the sum, difference, product, quotient and remainder of ",(0,a.kt)("inlineCode",{parentName:"p"},"x")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"y"),". Log the output in a string that shows the two numbers of ",(0,a.kt)("inlineCode",{parentName:"p"},"x")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"y")," along with the operator and result."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You can log the output string directly or put them in separate variables and log them like below."),(0,a.kt)("li",{parentName:"ul"},"You can use string concatenation or template literals for the output.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Expected Result:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"console.log(sumOutput) // 31 + 15 = 46\nconsole.log(differenceOutput) // 31 - 15 = 16\nconsole.log(productOutput) // 31 * 15 = 465\nconsole.log(quotientOutput) // 31 / 15 = 2.066666666666667\nconsole.log(rmOutput) // 31 % 15 = 1\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Hints:")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Math.random()")," function returns a floating-point, pseudo-random number in the range 0 to less than 1")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Math.floor()")," function will round a number down to the nearest integer"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Click For Solution"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"x = Math.floor(Math.random() * 100) + 1;\ny = Math.floor(Math.random() * 50) + 1;\n\n// Get the sum\nconst sum = x + y;\nconst sumOutput = `${x} + ${y} = ${sum}`;\nconsole.log(sumOutput);\n\n// Get the difference\nconst difference = x - y;\nconst differenceOutput = `${x} - ${y} = ${difference}`;\nconsole.log(differenceOutput);\n\n// Get the product\nconst product = x _ y;\nconst productOutput = `${x} _ ${y} = ${product}`;\nconsole.log(productOutput);\n\n// Get the quotient\nconst quotient = x / y;\nconst quotientOutput = `${x} / ${y} = ${quotient}`;\nconsole.log(quotientOutput);\n\n// Get the remainder\nconst rm = x % y;\nconst rmOutput = `${x} % ${y} = ${rm}`;\nconsole.log(rmOutput);\n\n"))))}d.isMDXComponent=!0}}]);