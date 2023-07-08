"use strict";(self.webpackChunkfundamentals=self.webpackChunkfundamentals||[]).push([[5877],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var l=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,i=function(e,t){if(null==e)return{};var n,l,i={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=l.createContext({}),d=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=d(e.components);return l.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},h=l.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=d(n),h=i,u=p["".concat(s,".").concat(h)]||p[h]||m[h]||r;return n?l.createElement(u,a(a({ref:t},c),{},{components:n})):l.createElement(u,a({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:i,a[1]=o;for(var d=2;d<r;d++)a[d]=n[d];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4063:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var l=n(7462),i=(n(7294),n(3905));const r={sidebar_position:5},a="Traversing The DOM - Elements",o={unversionedId:"3 Javascript/document-object-model-docs/traversing-the-dom-elements",id:"3 Javascript/document-object-model-docs/traversing-the-dom-elements",title:"Traversing The DOM - Elements",description:"Now we know how to select elements from the DOM, but many times, we need to select elements within elements or a sibling of an element, so it is important to know how relationships work so that we can traverse or move up and down the DOM.",source:"@site/docs/3 Javascript/06-document-object-model-docs/05-traversing-the-dom-elements.md",sourceDirName:"3 Javascript/06-document-object-model-docs",slug:"/3 Javascript/document-object-model-docs/traversing-the-dom-elements",permalink:"/fundamentals/3 Javascript/document-object-model-docs/traversing-the-dom-elements",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"DOM Selectors - Multiple Elements",permalink:"/fundamentals/3 Javascript/document-object-model-docs/dom-selectors-multiple-elements"},next:{title:"Traversing The DOM - Nodes",permalink:"/fundamentals/3 Javascript/document-object-model-docs/traversing-the-dom-nodes"}},s={},d=[{value:"Element Relationships",id:"element-relationships",level:3},{value:"Selecting Related Elements",id:"selecting-related-elements",level:3},{value:"Child Elements",id:"child-elements",level:3},{value:"children",id:"children",level:3},{value:"firstElementChild and lastElementChild",id:"firstelementchild-and-lastelementchild",level:3},{value:"Parent Element",id:"parent-element",level:3},{value:"parentElement",id:"parentelement",level:3},{value:"Sibling Elements",id:"sibling-elements",level:3},{value:"nextElementSibling and previousElementSibling",id:"nextelementsibling-and-previouselementsibling",level:3}],c={toc:d},p="wrapper";function m(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,l.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"traversing-the-dom---elements"},"Traversing The DOM - Elements"),(0,i.kt)("p",null,"Now we know how to select elements from the DOM, but many times, we need to select elements within elements or a sibling of an element, so it is important to know how relationships work so that we can traverse or move up and down the DOM."),(0,i.kt)("p",null,"There are also different types of ",(0,i.kt)("inlineCode",{parentName:"p"},"nodes")," in the DOM. The type we will deal with the most are ",(0,i.kt)("inlineCode",{parentName:"p"},"Elements"),". Any HTML tag on the page is an element. There are specific properties for working with elements and there are properties that will allow us to work with other types of nodes, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"Text")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Comment")," nodes. In this video, we will strictly be working with ",(0,i.kt)("inlineCode",{parentName:"p"},"Elements")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Element Nodes")," and in the next video, we will look at other types of nodes."),(0,i.kt)("h3",{id:"element-relationships"},"Element Relationships"),(0,i.kt)("p",null,"To really understand how to traverse and manipulate the DOM, you need to understand relationships between elements along with some properties that allow you to select elements based on their relationship to other elements."),(0,i.kt)("p",null,"For this video, I'm not going to use the shopping list example. Instead, I'm going to use a simple HTML document with a few nested elements. This is so you can better understand what I'm doing."),(0,i.kt)("p",null,"Let's look at the following HTML"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<div class="parent">\n  \x3c!-- Children --\x3e\n  <div class="child">Child 1</div>\n  <div class="child">Child 2</div>\n  <div class="child">Child 3</div>\n</div>\n')),(0,i.kt)("p",null,"If we are looking strictly at ",(0,i.kt)("inlineCode",{parentName:"p"},"element nodes"),", it's pretty simple. We have a ",(0,i.kt)("inlineCode",{parentName:"p"},"div")," that is the ",(0,i.kt)("em",{parentName:"p"},"parent")," of 3 ",(0,i.kt)("em",{parentName:"p"},"child")," ",(0,i.kt)("inlineCode",{parentName:"p"},"divs"),". The 3 ",(0,i.kt)("em",{parentName:"p"},"child")," ",(0,i.kt)("inlineCode",{parentName:"p"},"divs")," are ",(0,i.kt)("em",{parentName:"p"},"siblings")," to each other."),(0,i.kt)("h3",{id:"selecting-related-elements"},"Selecting Related Elements"),(0,i.kt)("p",null,"We have many properties available to select related elements. This diagram shows the properties and a visual example of how they work."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(1645).Z,width:"1040",height:"620"})),(0,i.kt)("h3",{id:"child-elements"},"Child Elements"),(0,i.kt)("h3",{id:"children"},"children"),(0,i.kt)("p",null,"All of an elements children can be accessed by the ",(0,i.kt)("inlineCode",{parentName:"p"},"children")," property."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const parent = document.querySelector('.parent')\n\nconsole.log(parent.children)\n// HTMLCollection [div.child, div.child, div.child]\n")),(0,i.kt)("p",null,"This gives us an ",(0,i.kt)("inlineCode",{parentName:"p"},"HTMLCollection")," of the children. We can access each individual element by index."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"console.log(parent.children[1])\n// <div class=\"child\">Child 2</div>\n\n// Get individual child properties\nconsole.log(parent.children[1].nodeName)\n// 'DIV'\nconsole.log(parent.children[1].className)\n// 'child'\n\n// Get the HTML & Text inside the element\nconsole.log(parent.children[1].innerHTML)\n// 'Child 2'\n\n// Get the HTML & Text of the entire element\nconsole.log(parent.children[1].outerHTML)\n// '<div class=\"child\">Child 2</div>'\n")),(0,i.kt)("p",null,"We can loop through an HTMLCollection using a for loop or we can convert it to an array and use a forEach loop."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"for (let i = 0; i < parent.children.length; i++) {\n  console.log(parent.children[i].innerHTML)\n}\n")),(0,i.kt)("p",null,"We can change attributes, styles and the content of the children of an element"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// Change the text of the second child\nparent.children[1].textContent = 'Child Two'\n\n// Change the color of the third child\nparent.children[2].style.color = 'red'\n")),(0,i.kt)("h3",{id:"firstelementchild-and-lastelementchild"},"firstElementChild and lastElementChild"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"firstElementChild")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"lastElementChild")," are useful for selecting the first or last child of an element."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"console.log(parent.firstElementChild)\n// <div class=\"child\">Child 1</div>\n\nconsole.log(parent.lastElementChild)\n// <div class=\"child\">Child 3</div>\n\n// Change the text of both first and last child\nparent.firstElementChild.innerText = 'Child One'\nparent.lastElementChild.innerText = 'Child Three'\n")),(0,i.kt)("h3",{id:"parent-element"},"Parent Element"),(0,i.kt)("h3",{id:"parentelement"},"parentElement"),(0,i.kt)("p",null,"We can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"parentElement")," property to get the parent element of an element."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const child = document.querySelector('.child')\n\nconsole.log(child.parentElement)\n// <div class=\"parent\">\n")),(0,i.kt)("p",null,"We can edit the parent element"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// Give the parent a border and padding\nchild.parentElement.style.border = '1px solid #ccc'\nchild.parentElement.style.padding = '10px'\n")),(0,i.kt)("h3",{id:"sibling-elements"},"Sibling Elements"),(0,i.kt)("h3",{id:"nextelementsibling-and-previouselementsibling"},"nextElementSibling and previousElementSibling"),(0,i.kt)("p",null,"These are the main properties for selecting sibling elements."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const secondItem = document.querySelector('.child:nth-child(2)')\n\nsecondItem.nextElementSibling.style.color = 'green'\nsecondItem.previousElementSibling.style.color = 'orange'\n")),(0,i.kt)("p",null,"As you can see, working with related elements is not that difficult because we have access to these useful properties. In the next video, we will look at properties to work with other types of nodes."))}m.isMDXComponent=!0},1645:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/dom-relationships-ebf7f9ef9f1cfd13339fb0580ada1bab.png"}}]);