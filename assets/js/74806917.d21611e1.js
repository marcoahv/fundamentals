"use strict";(self.webpackChunkfundamentals=self.webpackChunkfundamentals||[]).push([[1262],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>h});var r=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=r.createContext({}),c=function(e){var a=r.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},p=function(e){var a=c(e.components);return r.createElement(i.Provider,{value:a},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},y=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(t),y=n,h=u["".concat(i,".").concat(y)]||u[y]||d[y]||s;return t?r.createElement(h,l(l({ref:a},p),{},{components:t})):r.createElement(h,l({ref:a},p))}));function h(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var s=t.length,l=new Array(s);l[0]=y;var o={};for(var i in a)hasOwnProperty.call(a,i)&&(o[i]=a[i]);o.originalType=e,o[u]="string"==typeof e?e:n,l[1]=o;for(var c=2;c<s;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},7066:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=t(7462),n=(t(7294),t(3905));const s={sidebar_position:1},l="Array Basics",o={unversionedId:"3 Javascript/arrays-and-objects-docs/array-basics",id:"3 Javascript/arrays-and-objects-docs/array-basics",title:"Array Basics",description:"Arrays are a special type of object in JavaScript. Arrays are also what we call a data structure, which is just that, a way of structuring data. Lets look at a basic Array",source:"@site/docs/3 Javascript/02-arrays-and-objects-docs/01-array-basics.md",sourceDirName:"3 Javascript/02-arrays-and-objects-docs",slug:"/3 Javascript/arrays-and-objects-docs/array-basics",permalink:"/fundamentals/3 Javascript/arrays-and-objects-docs/array-basics",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Section 2: Arrays & Objects",permalink:"/fundamentals/category/section-2-arrays--objects"},next:{title:"Array Methods",permalink:"/fundamentals/3 Javascript/arrays-and-objects-docs/array-methods"}},i={},c=[{value:"Array Constructor",id:"array-constructor",level:3},{value:"Getting values by index",id:"getting-values-by-index",level:3},{value:"Array length",id:"array-length",level:3},{value:"Mutating arrays",id:"mutating-arrays",level:3}],p={toc:c},u="wrapper";function d(e){let{components:a,...s}=e;return(0,n.kt)(u,(0,r.Z)({},p,s,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"array-basics"},"Array Basics"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Arrays")," are a special type of ",(0,n.kt)("inlineCode",{parentName:"p"},"object")," in JavaScript. Arrays are also what we call a ",(0,n.kt)("inlineCode",{parentName:"p"},"data structure"),", which is just that, a way of structuring data. Lets look at a basic Array"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"array",src:t(1282).Z,width:"1107",height:"476"})),(0,n.kt)("p",null,"We create a variable and set it to some brackets with some values inside. The values could be of any type. In this case, we have an array of numbers."),(0,n.kt)("p",null,"The values in an array are called ",(0,n.kt)("inlineCode",{parentName:"p"},"elements"),". Each element has an ",(0,n.kt)("inlineCode",{parentName:"p"},"index"),". The index is the position of the element in the array. The first element in an array has an index of 0. The second element has an index of 1, and so on. In just about every language, arrays are zero-based."),(0,n.kt)("p",null,"Let's create this same array in our code"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"const arr = [374, 755, 398, 118, 289]\n")),(0,n.kt)("p",null,"If we log the array in the console, we'll see that like other types of objects, it has a prototype property. These are all kinds of properties and methods that can be used with arrays. We'll get more into those in a little bit."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"console.log(arr)\n")),(0,n.kt)("h3",{id:"array-constructor"},"Array Constructor"),(0,n.kt)("p",null,"There is a second way to create an array that is less common. The one that we have already used is called an ",(0,n.kt)("inlineCode",{parentName:"p"},"array literal"),". The second is by using the ",(0,n.kt)("inlineCode",{parentName:"p"},"Array constructor")," with the ",(0,n.kt)("inlineCode",{parentName:"p"},"new")," keyword"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const arr2 = new Array(1, 2, 3, 4, 5)\n")),(0,n.kt)("p",null,"You can use either one to create an array. They both create an array object."),(0,n.kt)("h3",{id:"getting-values-by-index"},"Getting values by index"),(0,n.kt)("p",null,"So to get one of these values, we can use the index of the element we want to get. To get the first one"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"arr[0]\n")),(0,n.kt)("p",null,"If we wanted to use an array value in an expression, we could"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"arr[0] + arr[3] //492\n")),(0,n.kt)("p",null,"Arrays can have any type of data within it. In this case, we have an array of numbers, but we could create an array of strings"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"const fruit = ['apples', 'oranges', 'pears']\n")),(0,n.kt)("p",null,"We can even mix types of data within an array and even have an array within an array"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"const mixed = [1, 'string', true, null, undefined, [1, 2, 3]]\n")),(0,n.kt)("h3",{id:"array-length"},"Array length"),(0,n.kt)("p",null,"We can get the length of an array using the ",(0,n.kt)("inlineCode",{parentName:"p"},".length")," property, which is very useful"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"console.log(arr.length) // 5\n")),(0,n.kt)("h3",{id:"mutating-arrays"},"Mutating arrays"),(0,n.kt)("p",null,"Arrays are mutable, meaning we can add, change and remove elements. There are many methods that we can use and I'll get into those in a little bit, but lets say we want to add a new element to the end without using any kind of method."),(0,n.kt)("p",null,"We know that the ",(0,n.kt)("inlineCode",{parentName:"p"},"length")," property gives us the total count of elements and since the array is 0-based, we can simply add the length as the index of the new element"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-JavaScript"},"fruit[fruit.length] = 'Peaches'; // ['apples', 'oranges', 'pears', 'peaches']\n")),(0,n.kt)("p",null,"In the code above, ",(0,n.kt)("inlineCode",{parentName:"p"},"fruit.length")," was ",(0,n.kt)("inlineCode",{parentName:"p"},"3")," so we set the value of ",(0,n.kt)("inlineCode",{parentName:"p"},"fruit[3]"),", which was the next index."),(0,n.kt)("p",null,"If we want to target a specific index and change the value, we can do that easily"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"fruit[1] = 'mangos'\n")),(0,n.kt)("p",null,"We can also set the array length to a new value, which will shorten the array"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javaScript"},"fruit.length = 2;\n")),(0,n.kt)("p",null,"Now the array would look like this"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},";['apples', 'oranges']\n")))}d.isMDXComponent=!0},1282:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/array-88540b722e66891a08a1bb300e803f84.png"}}]);