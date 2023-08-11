"use strict";(self.webpackChunkfundamentals=self.webpackChunkfundamentals||[]).push([[140],{3905:(e,t,l)=>{l.d(t,{Zo:()=>m,kt:()=>p});var n=l(7294);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function o(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function s(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?o(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):o(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function r(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)l=o[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)l=o[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),l=t;return e&&(l="function"==typeof e?e(t):s(s({},t),e)),l},m=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var l=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),u=c(l),d=a,p=u["".concat(i,".").concat(d)]||u[d]||h[d]||o;return l?n.createElement(p,s(s({ref:t},m),{},{components:l})):n.createElement(p,s({ref:t},m))}));function p(e,t){var l=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=l.length,s=new Array(o);s[0]=d;var r={};for(var i in t)hasOwnProperty.call(t,i)&&(r[i]=t[i]);r.originalType=e,r[u]="string"==typeof e?e:a,s[1]=r;for(var c=2;c<o;c++)s[c]=l[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,l)}d.displayName="MDXCreateElement"},1787:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var n=l(7462),a=(l(7294),l(3905));const o={sidebar_position:4},s="DOM Selectors - Multiple Elements",r={unversionedId:"3 Javascript/document-object-model-docs/dom-selectors-multiple-elements",id:"3 Javascript/document-object-model-docs/dom-selectors-multiple-elements",title:"DOM Selectors - Multiple Elements",description:"So we looked at getElementById and querySelector, which will select on element from the DOM so that we can do whatever we want with it. But what if we want to select multiple elements, such as all of the list items in our shopping list? We have a few methods that we can use for this.",source:"@site/docs/3 Javascript/06-document-object-model-docs/04-dom-selectors-multiple-elements.md",sourceDirName:"3 Javascript/06-document-object-model-docs",slug:"/3 Javascript/document-object-model-docs/dom-selectors-multiple-elements",permalink:"/fundamentals/3 Javascript/document-object-model-docs/dom-selectors-multiple-elements",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"DOM Selectors - Single Elements",permalink:"/fundamentals/3 Javascript/document-object-model-docs/dom-selectors-single-elements"},next:{title:"Traversing The DOM - Elements",permalink:"/fundamentals/3 Javascript/document-object-model-docs/traversing-the-dom-elements"}},i={},c=[{value:"querySelectorAll()",id:"queryselectorall",level:3},{value:"NodeList vs HTMLCollection",id:"nodelist-vs-htmlcollection",level:3},{value:"getElementsByClassName()",id:"getelementsbyclassname",level:3},{value:"getElementsByTagName()",id:"getelementsbytagname",level:3}],m={toc:c},u="wrapper";function h(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"dom-selectors---multiple-elements"},"DOM Selectors - Multiple Elements"),(0,a.kt)("p",null,"So we looked at ",(0,a.kt)("inlineCode",{parentName:"p"},"getElementById")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"querySelector"),", which will select on element from the DOM so that we can do whatever we want with it. But what if we want to select multiple elements, such as all of the list items in our shopping list? We have a few methods that we can use for this."),(0,a.kt)("h3",{id:"queryselectorall"},"querySelectorAll()"),(0,a.kt)("p",null,"So I'm going to start off with the one that you'll use the most, which is ",(0,a.kt)("inlineCode",{parentName:"p"},"document.querySelectorAll()"),". This method takes a string as an argument and returns a NodeList of all the elements that match the selector. If no elements are found, it returns an empty NodeList."),(0,a.kt)("h3",{id:"nodelist-vs-htmlcollection"},"NodeList vs HTMLCollection"),(0,a.kt)("p",null,"So what is a NodeList? Well, it's very similar to an HTMLCollection, which we have already looked at. It's a list of elements that is formatted like an array. The main difference is that a NodeList is not a live collection. This means that if we add or remove elements from the DOM, the NodeList will not update."),(0,a.kt)("p",null,"Another difference is that we can use methods like ",(0,a.kt)("inlineCode",{parentName:"p"},"forEach()")," on a NodeList, but not on an HTMLCollection. This really comes in handy."),(0,a.kt)("p",null,"So let's select all of the list items in our shopping list."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"console.log(document.querySelectorAll('li'))\n")),(0,a.kt)("p",null,"We can pass in absolutely any CSS selector to this method. It could be a tag, id, class, etc. That part works just like ",(0,a.kt)("inlineCode",{parentName:"p"},"querySelector()"),". The difference is instead of getting just one element, it will get all of the elements on the page that match that selector. Even if there is only one item on the page that matches, it will still be returned as a NodeList."),(0,a.kt)("p",null,"If we select the h1 on the page, let's see what happens."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"console.log(document.querySelectorAll('h1'))\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"dom7",src:l(712).Z,width:"405",height:"54"})),(0,a.kt)("p",null,"Instead of the element itself, it gives us a NodeList with that 1 element in it."),(0,a.kt)("p",null,"Now, let's say that we want to make all of the items in the list the color red. Your first thought, may be to do something like this."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const items = document.querySelectorAll('li')\n\n// This will not work\nitems.style.color = 'red'\n")),(0,a.kt)("p",null,"This won't work because we can't assign a color to a NodeList."),(0,a.kt)("p",null,"We can access a specific item using it's index, just like an array. We can also manipulate it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"console.log(items[0])\nitems[0].style.color = 'blue'\n")),(0,a.kt)("p",null,"However, if we want to apply something to all of the elements, we need to loop through the NodeList and apply to all."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"items.forEach(function (item) {\n  item.style.color = 'red'\n})\n")),(0,a.kt)("p",null,"We can shorten it up a little bit by using an arrow function."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"items.forEach((item) => (item.style.color = 'red'))\n")),(0,a.kt)("h3",{id:"getelementsbyclassname"},"getElementsByClassName()"),(0,a.kt)("p",null,"The next selector is an older one that you probably won't see very much. As the name implies, it selects elements by their class name. It takes a string as an argument and returns an HTMLCollection of all the elements that match the class name. If no elements are found, it returns an empty HTMLCollection."),(0,a.kt)("p",null,"The limitations to this method are that it only selects elements by class name and instead of a NodeList, it returns an HTMLCollection, which you can't use methods like ",(0,a.kt)("inlineCode",{parentName:"p"},"forEach()")," on. You would have to first, turn the HTMLCollection into an Array and then loop through it."),(0,a.kt)("p",null,"Let's look at an example. I put a class of ",(0,a.kt)("inlineCode",{parentName:"p"},"item")," on all of the list items in our shopping list. Let's select them all."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"console.log(document.getElementsByClassName('item'))\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"dom8",src:l(5171).Z,width:"402",height:"70"})),(0,a.kt)("p",null,"As you can see, it returns an HTMLCollection of all of the list items as opposed to a NodeList."),(0,a.kt)("p",null,"If we want to turn all of the items blue, we have to first turn the HTMLCollection into an array. Then we can use array methods like ",(0,a.kt)("inlineCode",{parentName:"p"},"forEach()"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const items = document.getElementsByClassName('item')\n\n// Covert into an array\nconst list = Array.from(items)\n\nlist.forEach((item) => (item.style.color = 'green'))\n")),(0,a.kt)("h3",{id:"getelementsbytagname"},"getElementsByTagName()"),(0,a.kt)("p",null,"This method is basically the same thing as ",(0,a.kt)("inlineCode",{parentName:"p"},"getElementsByClassName()"),", except it selects elements by their tag name. It takes a string as an argument and returns an HTMLCollection of all the elements that match the tag name. If no elements are found, it returns an empty HTMLCollection."),(0,a.kt)("p",null,"Let's select all of the list items in our shopping list."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"console.log(document.getElementsByTagName('li'))\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"dom8",src:l(5171).Z,width:"402",height:"70"})),(0,a.kt)("p",null,"We get the same result as ",(0,a.kt)("inlineCode",{parentName:"p"},"getElementsByClassName('item')"),"."),(0,a.kt)("p",null,"There really isn't much else to be said on this method, because you can do the same stuff as ",(0,a.kt)("inlineCode",{parentName:"p"},"getElementsByClassName()"),"."),(0,a.kt)("p",null,"I would say 99.9% of the time, you will be using ",(0,a.kt)("inlineCode",{parentName:"p"},"querySelectorAll()")," to select multiple elements. The only time you would use ",(0,a.kt)("inlineCode",{parentName:"p"},"getElementsByClassName()")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"getElementsByTagName()")," is if you are working with an older codebase that uses those methods."))}h.isMDXComponent=!0},712:(e,t,l)=>{l.d(t,{Z:()=>n});const n="data:image/png;base64,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"},5171:(e,t,l)=>{l.d(t,{Z:()=>n});const n="data:image/png;base64,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"}}]);