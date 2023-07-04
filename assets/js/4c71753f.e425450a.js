"use strict";(self.webpackChunkfundamentals=self.webpackChunkfundamentals||[]).push([[6926],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(n),h=r,k=u["".concat(p,".").concat(h)]||u[h]||m[h]||l;return n?a.createElement(k,o(o({ref:t},c),{},{components:n})):a.createElement(k,o({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=h;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2532:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const l={},o="11. links",i={unversionedId:"1 HTML/Section-3/Links",id:"1 HTML/Section-3/Links",title:"11. links",description:"the anchor tag",source:"@site/docs/1 HTML/Section-3/11-Links.md",sourceDirName:"1 HTML/Section-3",slug:"/1 HTML/Section-3/Links",permalink:"/fundamentals/1 HTML/Section-3/Links",draft:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"10. Images",permalink:"/fundamentals/1 HTML/Section-3/images"},next:{title:"4 LIST, TABLES AND FORMS",permalink:"/fundamentals/category/4-list-tables-and-forms"}},p={},s=[{value:"the anchor tag",id:"the-anchor-tag",level:3},{value:"we could link between two pages in our own folder",id:"we-could-link-between-two-pages-in-our-own-folder",level:3},{value:"the target attribute",id:"the-target-attribute",level:3}],c={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"11-links"},"11. links"),(0,r.kt)("h3",{id:"the-anchor-tag"},"the anchor tag"),(0,r.kt)("p",null,"all right the second element we should learn about when learning html attributes is the anchor tag denoted by ",(0,r.kt)("inlineCode",{parentName:"p"},"<a></a>")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"this tag is used to create hyperlinks to other pages")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"it is also probably the element you're already familiar with having navigated thousands of websites"))),(0,r.kt)("p",null,"the syntax is as follows"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"in between the tags we specify the text to display in the\nbrowser let's say ",(0,r.kt)("inlineCode",{parentName:"p"},"Google"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"now on the opening tag\nwe specify an attribute called ",(0,r.kt)("inlineCode",{parentName:"p"},"href"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"to this attribute we specify the address\nwhere we need to navigate to, in our case ",(0,r.kt)("inlineCode",{parentName:"p"},"https colon slash slash google.com")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'   \x3c!-- Attributes --\x3e\n    <Google href="https://google.com">Google</a>\n')),(0,r.kt)("p",null,"now head back to the browser refresh\nyou can see we have a link that says google"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"the styling is a little different")," to the\nother text elements we have seen so far")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"the cursor also changes to a pointer\nwhen we hover over the text")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"click on the link and we are directed to google home page")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"this is the basic working of an anchor tag"))),(0,r.kt)("h3",{id:"we-could-link-between-two-pages-in-our-own-folder"},"we could link between two pages in our own folder"),(0,r.kt)("p",null,"of course the linking doesn't have to be\nto other pages on the internet we could link between two pages in our\nown folder"),(0,r.kt)("p",null,"so back in vs code let me create a new file ",(0,r.kt)("inlineCode",{parentName:"p"},"contact.html")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"type exclamation and tab\nthis will populate a sample html document")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"in the body tag ",(0,r.kt)("inlineCode",{parentName:"p"},"add another anchor tag"),"\nthe text is going to be ",(0,r.kt)("inlineCode",{parentName:"p"},"Home")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"href")," is going to be index.html"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <meta http-equiv="X-UA-Compatible" content="IE=edge" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>Document</title>\n  </head>\n  <body>\n    <a href="index.html">Home</a>\n  </body>\n</html>\n')),(0,r.kt)("p",null,"similarly ",(0,r.kt)("inlineCode",{parentName:"p"},"in index.html")," we're going to ",(0,r.kt)("inlineCode",{parentName:"p"},"add another anchor tag"),"\nwhere the text is contact and href is going to be contact.html"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Attributes --\x3e\n<a href="https://google.com" target="_blank">Google</a>\n<a href="contact.html">Contact</a>\n')),(0,r.kt)("p",null,"if we head back to the browser refresh"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"we can click on contact\nwe go to contact.html which is the contacts page")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"click on home\nand we are back at the home page")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"so we can navigate back and forth within\nour own website")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"we have two pages which are linked together"))),(0,r.kt)("h3",{id:"the-target-attribute"},"the target attribute"),(0,r.kt)("p",null,"now one attribute that is commonly used with anchor element is the target\nattribute"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"you can set target is equal to underscore blank")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Attributes --\x3e\n<a href="https://google.com" target="_blank">Google</a>\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"and what this does is open the link in a new tab instead of the same tab")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"refresh click on google and it opens in a new tab")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"so target is equal to blank is pretty useful when you're directing users away\nfrom your web page")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"both image and anchor elements are\nessential when building websites so make sure you're clear on these topics"))))}m.isMDXComponent=!0}}]);