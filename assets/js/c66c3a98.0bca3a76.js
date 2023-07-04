"use strict";(self.webpackChunkfundamentals=self.webpackChunkfundamentals||[]).push([[6350],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},h="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=u(n),p=r,g=h["".concat(s,".").concat(p)]||h[p]||m[p]||a;return n?i.createElement(g,o(o({ref:t},c),{},{components:n})):i.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[h]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},797:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var i=n(7462),r=(n(7294),n(3905));const a={},o="10. Images",l={unversionedId:"1 HTML/Section-3/images",id:"1 HTML/Section-3/images",title:"10. Images",description:"two elements where the attributes sort of define the element itself",source:"@site/docs/1 HTML/Section-3/10-images.md",sourceDirName:"1 HTML/Section-3",slug:"/1 HTML/Section-3/images",permalink:"/fundamentals/1 HTML/Section-3/images",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"9. html attributes",permalink:"/fundamentals/1 HTML/Section-3/html attributes"},next:{title:"11. links",permalink:"/fundamentals/1 HTML/Section-3/Links"}},s={},u=[{value:"image html element",id:"image-html-element",level:3},{value:"the source attribute",id:"the-source-attribute",level:3},{value:"the width and height attributes",id:"the-width-and-height-attributes",level:3},{value:"the alt attribute",id:"the-alt-attribute",level:3}],c={toc:u},h="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(h,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"10-images"},"10. Images"),(0,r.kt)("p",null,"two elements where the attributes sort of define the element itself"),(0,r.kt)("h3",{id:"image-html-element"},"image html element"),(0,r.kt)("p",null,"the first one is the image html element which is used to embed an image in the web page"),(0,r.kt)("p",null,"the image tag also doesn't need a closing tag so img self closing"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"\x3c!-- Attributes --\x3e\n<img />\n")),(0,r.kt)("p",null,"now this image tag needs to know which image to display"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"for that i'm going to ",(0,r.kt)("inlineCode",{parentName:"li"},"add an image into the same folder as our html file"))),(0,r.kt)("p",null,"the file name is logo.jpg and is the logo of code evolution"),(0,r.kt)("p",null,"if i open the explorer in visual studio code you can see logo.jpg"),(0,r.kt)("h3",{id:"the-source-attribute"},"the source attribute"),(0,r.kt)("p",null,"now to connect the logo file with the image element we need to add the source\nattribute"),(0,r.kt)("p",null,"src for short, to this we assign the path to the file and this is going to be logo.jpg as it is in the same folder as index.html"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Attributes --\x3e\n<img src="logo.jpg" />\n')),(0,r.kt)("h3",{id:"the-width-and-height-attributes"},"the width and height attributes"),(0,r.kt)("p",null,"if we now save and refresh the browser we should see a very large image"),(0,r.kt)("p",null,"and this is because the image dimensions are huge"),(0,r.kt)("p",null,"so what we can do is specify two more attributes that restrict the dimensions one is width which we can set to 200"),(0,r.kt)("p",null,"and the other is height which we can set to 200 again"),(0,r.kt)("p",null,"the default unit for these attributes is pixels"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Attributes --\x3e\n<img src="logo.jpg" width="200px" height="200px" />\n')),(0,r.kt)("p",null,"refresh the browser again and we see a much smaller image"),(0,r.kt)("h3",{id:"the-alt-attribute"},"the alt attribute"),(0,r.kt)("p",null,"one more important attribute we should specify on the image tag is the alt attribute"),(0,r.kt)("p",null,"i'm going to set its value to the text code evolution logo"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Attributes --\x3e\n<img src="logo.jpg" width="200px" height="200px" alt="Codevolution logo" />\n')),(0,r.kt)("p",null,"this attribute is picked up by screen readers and is used to describe the image to visually impaired people"),(0,r.kt)("p",null,"so this is pretty much how you embed an image in your web page using the image tag and the mandatory source attribute"))}m.isMDXComponent=!0}}]);