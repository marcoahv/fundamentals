"use strict";(self.webpackChunkfundamentals=self.webpackChunkfundamentals||[]).push([[4174],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>f});var i=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,i,a=function(t,e){if(null==t)return{};var n,i,a={},o=Object.keys(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=i.createContext({}),c=function(t){var e=i.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},d=function(t){var e=c(t.components);return i.createElement(l.Provider,{value:e},t.children)},p="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},m=i.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,l=t.parentName,d=s(t,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return n?i.createElement(f,r(r({ref:e},d),{},{components:n})):i.createElement(f,r({ref:e},d))}));function f(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,r=new Array(o);r[0]=m;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[p]="string"==typeof t?t:a,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5053:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=n(7462),a=(n(7294),n(3905));const o={sidebar_position:1},r="Add Items To List",s={unversionedId:"3 Javascript/shopping-list-project-docs/add-items-to-list",id:"3 Javascript/shopping-list-project-docs/add-items-to-list",title:"Add Items To List",description:"The first piece of functionality we want to add is the ability to add items to the list. We already have the HTML and CSS in place, so let's jump right into the JavaScript.",source:"@site/docs/3 Javascript/08-shopping-list-project-docs/01-add-items-to-list.md",sourceDirName:"3 Javascript/08-shopping-list-project-docs",slug:"/3 Javascript/shopping-list-project-docs/add-items-to-list",permalink:"/fundamentals/3 Javascript/shopping-list-project-docs/add-items-to-list",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Shopping List Project Intro",permalink:"/fundamentals/3 Javascript/shopping-list-project-docs/project-intro"},next:{title:"Setting Up Git & GitHub",permalink:"/fundamentals/3 Javascript/shopping-list-project-docs/setting-up-git"}},l={},c=[{value:"First, let&#39;s bring in the elements from the DOM that we want to work with.",id:"first-lets-bring-in-the-elements-from-the-dom-that-we-want-to-work-with",level:3},{value:"Let&#39;s add and event listener to the form and an <code>addItem()</code> function.",id:"lets-add-and-event-listener-to-the-form-and-an-additem-function",level:3},{value:"Now, we want to create a new list item and add it to the list.",id:"now-we-want-to-create-a-new-list-item-and-add-it-to-the-list",level:3}],d={toc:c},p="wrapper";function u(t){let{components:e,...n}=t;return(0,a.kt)(p,(0,i.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"add-items-to-list"},"Add Items To List"),(0,a.kt)("p",null,"The first piece of functionality we want to add is the ability to add items to the list. We already have the HTML and CSS in place, so let's jump right into the JavaScript."),(0,a.kt)("p",null,"There will be parts of this project that I refactor as we go along."),(0,a.kt)("h3",{id:"first-lets-bring-in-the-elements-from-the-dom-that-we-want-to-work-with"},"First, let's bring in the elements from the DOM that we want to work with."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const itemForm = document.getElementById('item-form')\nconst itemInput = document.getElementById('item-input')\nconst itemList = document.getElementById('item-list')\n")),(0,a.kt)("h3",{id:"lets-add-and-event-listener-to-the-form-and-an-additem-function"},"Let's add and event listener to the form and an ",(0,a.kt)("inlineCode",{parentName:"h3"},"addItem()")," function."),(0,a.kt)("p",null,"We want to listen for the ",(0,a.kt)("inlineCode",{parentName:"p"},"submit")," event. We will also do some basic validation to make sure the user has entered something in the input field."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function addItem(e) {\n  e.preventDefault()\n\n  // Validate input\n  if (itemInput.value === '') {\n    alert('Please enter an item')\n    return\n  }\n\n  console.log('Success')\n}\n\nitemForm.addEventListener('submit', addItem)\n")),(0,a.kt)("h3",{id:"now-we-want-to-create-a-new-list-item-and-add-it-to-the-list"},"Now, we want to create a new list item and add it to the list."),(0,a.kt)("p",null,"The list item will include a button with a font-awesome icon inside of it."),(0,a.kt)("p",null,"I am going to create a separate functions for creating the button and the icon. This is just preference. You could do it all in one function if you wanted."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function addItem(e) {\n  e.preventDefault()\n\n  const newItem = itemInput.value\n\n  // Validate Input\n  if (newItem === '') {\n    alert('Please add an item')\n    return\n  }\n\n  // Create list item\n  const li = document.createElement('li')\n  li.appendChild(document.createTextNode(newItem))\n\n  const button = createButton('remove-item btn-link text-red')\n  li.appendChild(button)\n\n  itemList.appendChild(li)\n\n  itemInput.value = ''\n}\n\nfunction createButton(classes) {\n  const button = document.createElement('button')\n  button.className = classes\n  const icon = createIcon('fa-solid fa-xmark')\n  button.appendChild(icon)\n  return button\n}\n\nfunction createIcon(classes) {\n  const icon = document.createElement('i')\n  icon.className = classes\n  return icon\n}\n")))}u.isMDXComponent=!0}}]);