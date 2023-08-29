"use strict";(self.webpackChunkfundamentals=self.webpackChunkfundamentals||[]).push([[4651],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=o,g=m["".concat(s,".").concat(u)]||m[u]||p[u]||r;return n?a.createElement(g,i(i({ref:t},d),{},{components:n})):a.createElement(g,i({ref:t},d))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9799:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_position:7},i="Add Items To LocalStorage",l={unversionedId:"3 Javascript/shopping-list-project-docs/add-items-to-localstorage",id:"3 Javascript/shopping-list-project-docs/add-items-to-localstorage",title:"Add Items To LocalStorage",description:"Now that we have add, remove, clear and filter working in the DOM, we need to be able to persist the items to localStorage in the browser.",source:"@site/docs/3 Javascript/08-shopping-list-project-docs/07-add-items-to-localstorage.md",sourceDirName:"3 Javascript/08-shopping-list-project-docs",slug:"/3 Javascript/shopping-list-project-docs/add-items-to-localstorage",permalink:"/fundamentals/3 Javascript/shopping-list-project-docs/add-items-to-localstorage",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Local Storage Crash Course",permalink:"/fundamentals/3 Javascript/shopping-list-project-docs/localstorage-crash-course"},next:{title:"Display Items From Local Storage",permalink:"/fundamentals/3 Javascript/shopping-list-project-docs/display-items-from-localstorage"}},s={},c=[{value:"I am going to refactor the code a bit to make it easier to work with.",id:"i-am-going-to-refactor-the-code-a-bit-to-make-it-easier-to-work-with",level:3},{value:"Adding items to localStorage",id:"adding-items-to-localstorage",level:3}],d={toc:c},m="wrapper";function p(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"add-items-to-localstorage"},"Add Items To LocalStorage"),(0,o.kt)("p",null,"Now that we have add, remove, clear and filter working in the DOM, we need to be able to persist the items to localStorage in the browser."),(0,o.kt)("h3",{id:"i-am-going-to-refactor-the-code-a-bit-to-make-it-easier-to-work-with"},"I am going to refactor the code a bit to make it easier to work with."),(0,o.kt)("p",null,"Instead of having the submit event call a function called ",(0,o.kt)("inlineCode",{parentName:"p"},"addItem"),", I am going to change the name of that function to ",(0,o.kt)("inlineCode",{parentName:"p"},"onAddItemSubmit()")," and then call that function from the submit event."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"itemForm.addEventListener('submit', onAddItemSubmit)\n")),(0,o.kt)("p",null,"The part of the function where we add the item to the DOM, I am going to remove and put in it's own function called ",(0,o.kt)("inlineCode",{parentName:"p"},"addItemToDOM()"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function onAddItemSubmit(e) {\n  e.preventDefault()\n\n  const newItem = itemInput.value\n\n  // Validate Input\n  if (newItem === '') {\n    alert('Please add an item')\n    return\n  }\n\n  // Create item DOM element\n  addItemToDOM(newItem)\n\n  checkUI()\n\n  itemInput.value = ''\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function addItemToDOM(item) {\n  // Create list item\n  const li = document.createElement('li')\n  li.appendChild(document.createTextNode(item))\n\n  const button = createButton('remove-item btn-link text-red')\n  li.appendChild(button)\n\n  // Add li to the DOM\n  itemList.appendChild(li)\n}\n")),(0,o.kt)("h3",{id:"adding-items-to-localstorage"},"Adding items to localStorage"),(0,o.kt)("p",null,"Now we will create a function to add the items to localStorage. We will call it right after we add the item to the DOM."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function addItemToStorage(item) {\n  let itemsFromStorage\n\n  if (localStorage.getItem('items') === null) {\n    itemsFromStorage = []\n  } else {\n    itemsFromStorage = JSON.parse(localStorage.getItem('items'))\n  }\n\n  // Add new item to array\n  itemsFromStorage.push(item)\n\n  // Convert to JSON string and set to local storage\n  localStorage.setItem('items', JSON.stringify(itemsFromStorage))\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function onAddItemSubmit(e) {\n  // ...\n\n  // Create item DOM element\n  addItemToDOM(newItem)\n\n  // Add item to local storage\n  addItemToStorage(newItem)\n}\n")),(0,o.kt)("p",null,"Now, when you add an item, it will get added to ",(0,o.kt)("inlineCode",{parentName:"p"},"items")," in localStorage. You can check this by going to your application tab in the dev tools and clicking on the ",(0,o.kt)("inlineCode",{parentName:"p"},"Local Storage")," tab."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(9949).Z,width:"1050",height:"895"})))}p.isMDXComponent=!0},9949:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/application-tab-eec27e0af2aaeddf9157fe0dc1cc508f.png"}}]);