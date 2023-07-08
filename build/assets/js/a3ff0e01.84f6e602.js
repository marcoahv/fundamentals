"use strict";(self.webpackChunkfundamentals=self.webpackChunkfundamentals||[]).push([[6159],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=d(n),u=o,f=m["".concat(s,".").concat(u)]||m[u]||p[u]||a;return n?i.createElement(f,r(r({ref:t},c),{},{components:n})):i.createElement(f,r({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:o,r[1]=l;for(var d=2;d<a;d++)r[d]=n[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5720:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var i=n(7462),o=(n(7294),n(3905));const a={sidebar_position:10},r="Set Edit Mode",l={unversionedId:"3 Javascript/shopping-list-project-docs/set-edit-mode",id:"3 Javascript/shopping-list-project-docs/set-edit-mode",title:"Set Edit Mode",description:"In this section, we will add the ability to click on an item and enable edit mode which will put that item text into the input. We will also make that item in the list a lighter color and change the button from 'Add' to 'Edit'.",source:"@site/docs/3 Javascript/08-shopping-list-project-docs/10-set-edit-mode.md",sourceDirName:"3 Javascript/08-shopping-list-project-docs",slug:"/3 Javascript/shopping-list-project-docs/set-edit-mode",permalink:"/fundamentals/3 Javascript/shopping-list-project-docs/set-edit-mode",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Remove Items From Local Storage",permalink:"/fundamentals/3 Javascript/shopping-list-project-docs/remove-items-from-localstorage"},next:{title:"Update Item & Reset State",permalink:"/fundamentals/3 Javascript/shopping-list-project-docs/update-item-reset-state"}},s={},d=[{value:"Let&#39;s start by adding a global variable for the edit state.",id:"lets-start-by-adding-a-global-variable-for-the-edit-state",level:3},{value:"Let&#39;s go into the <code>onClickItem()</code> function and add an else,",id:"lets-go-into-the-onclickitem-function-and-add-an-else",level:3},{value:"Now, let&#39;s create the <code>setItemToEdit()</code> function.",id:"now-lets-create-the-setitemtoedit-function",level:3},{value:"removing the class from all items before we add it to the new item.",id:"removing-the-class-from-all-items-before-we-add-it-to-the-new-item",level:3}],c={toc:d},m="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"set-edit-mode"},"Set Edit Mode"),(0,o.kt)("p",null,"In this section, we will add the ability to click on an item and enable edit mode which will put that item text into the input. We will also make that item in the list a lighter color and change the button from 'Add' to 'Edit'."),(0,o.kt)("h3",{id:"lets-start-by-adding-a-global-variable-for-the-edit-state"},"Let's start by adding a global variable for the edit state."),(0,o.kt)("p",null,"We will set it to false."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"let isEditMode = false\n")),(0,o.kt)("h3",{id:"lets-go-into-the-onclickitem-function-and-add-an-else"},"Let's go into the ",(0,o.kt)("inlineCode",{parentName:"h3"},"onClickItem()")," function and add an else,"),(0,o.kt)("p",null,"which will run if we are clicking in the item, but not on the delete icon. If that is true, then we will call a function called ",(0,o.kt)("inlineCode",{parentName:"p"},"setItemToEdit()")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function onClickItem(e) {\n  if (e.target.parentElement.classList.contains('remove-item')) {\n    removeItem(e.target.parentElement.parentElement)\n  } else {\n    setItemToEdit(e.target)\n  }\n}\n")),(0,o.kt)("h3",{id:"now-lets-create-the-setitemtoedit-function"},"Now, let's create the ",(0,o.kt)("inlineCode",{parentName:"h3"},"setItemToEdit()")," function."),(0,o.kt)("p",null,"This function will take in the item element and do the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Set the edit state to true"),(0,o.kt)("li",{parentName:"ul"},"Add the ",(0,o.kt)("inlineCode",{parentName:"li"},"edit-mode")," class to the item element"),(0,o.kt)("li",{parentName:"ul"},"Change the button text, icon and color"),(0,o.kt)("li",{parentName:"ul"},"Set the input value to the item text")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function setItemToEdit(item) {\n  isEditMode = true\n  item.classList.add('edit-mode')\n  formBtn.innerHTML = '<i class=\"fa-solid fa-pen\"></i>   Update Item'\n  formBtn.style.backgroundColor = '#228B22'\n  itemInput.value = item.textContent\n}\n")),(0,o.kt)("h3",{id:"removing-the-class-from-all-items-before-we-add-it-to-the-new-item"},"removing the class from all items before we add it to the new item."),(0,o.kt)("p",null,"Now when we click on an item, it does all of those things, but if you click on another item, the 'edit-mode' class is not removed from the previous item. Let's fix that by removing the class from all items before we add it to the new item."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function setItemToEdit(item) {\n  isEditMode = true\n\n  itemList.querySelectorAll('li').forEach((i) => i.classList.remove('edit-mode'))\n\n  item.classList.add('edit-mode')\n  formBtn.innerHTML = '<i class=\"fa-solid fa-pen\"></i>   Update Item'\n  formBtn.style.backgroundColor = '#228B22'\n  itemInput.value = item.textContent\n}\n")))}p.isMDXComponent=!0}}]);