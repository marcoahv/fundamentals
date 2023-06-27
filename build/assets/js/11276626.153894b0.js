"use strict";(self.webpackChunkfundamentals=self.webpackChunkfundamentals||[]).push([[866],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),h=a,d=u["".concat(s,".").concat(h)]||u[h]||m[h]||o;return n?r.createElement(d,l(l({ref:t},c),{},{components:n})):r.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5875:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:3},l="3 what is html?",i={unversionedId:"HTML Crash Course/3 What is HTML",id:"HTML Crash Course/3 What is HTML",title:"3 what is html?",description:"html stands for",source:"@site/docs/HTML Crash Course/3 What is HTML.md",sourceDirName:"HTML Crash Course",slug:"/HTML Crash Course/3 What is HTML",permalink:"/fundamentals/HTML Crash Course/3 What is HTML",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"2 Setup",permalink:"/fundamentals/HTML Crash Course/2 Setup"},next:{title:"4 the html elements",permalink:"/fundamentals/HTML Crash Course/4 HTML Element"}},s={},p=[{value:"html stands for",id:"html-stands-for",level:3},{value:"html file",id:"html-file",level:3}],c={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"3-what-is-html"},"3 what is html?"),(0,a.kt)("h3",{id:"html-stands-for"},"html stands for"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"hyper text markup language")),(0,a.kt)("p",{parentName:"li"},"and is the language for creating web pages"),(0,a.kt)("p",{parentName:"li"},"now the expansion itself isn't very important as everyone refers to it as just html"),(0,a.kt)("p",{parentName:"li"},"but what is important is to keep in mind that ",(0,a.kt)("inlineCode",{parentName:"p"},"it is a markup language")," and not a programming language"),(0,a.kt)("p",{parentName:"li"},"so we simply mark certain things in the code we write which tells the browser how to structure the web page"),(0,a.kt)("p",{parentName:"li"},"it ",(0,a.kt)("inlineCode",{parentName:"p"},"does not contain any logic")," like conditionals or branching"),(0,a.kt)("p",{parentName:"li"},"html consists of a series of elements and each element tells the browser how to display the content"),(0,a.kt)("p",{parentName:"li"},"all we have to do is learn about these individual elements and we would have effectively learned html"))),(0,a.kt)("h3",{id:"html-file"},"html file"),(0,a.kt)("p",null,"first we need to create a file which will contain all our html code"),(0,a.kt)("p",null,"such a file is called an html file and has the extension dot html"),(0,a.kt)("p",null,"so click on the new file icon and create a file called ",(0,a.kt)("inlineCode",{parentName:"p"},"index.html")),(0,a.kt)("p",null,"now the file name can be hello dot html or test.html or any name of your liking but\n",(0,a.kt)("inlineCode",{parentName:"p"},"index.html is sort of the convention")," and i would recommend you follow the same"),(0,a.kt)("p",null,"within the file we can ",(0,a.kt)("inlineCode",{parentName:"p"},"type welcome to html")," and save the file using control s\nor command s on your keyboard"),(0,a.kt)("p",null,"we can now go back to the html crash course folder which contains index.html"),(0,a.kt)("p",null,"and simply double click on the file this will open the file in your default browser an you should be able to see the text welcome to html"),(0,a.kt)("p",null,"as you can see you're now able to get some content on to the web browser"))}m.isMDXComponent=!0}}]);