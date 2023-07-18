"use strict";(self.webpackChunkfundamentals=self.webpackChunkfundamentals||[]).push([[4023],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>f});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),l=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},s=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(a),m=n,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return a?r.createElement(f,c(c({ref:t},s),{},{components:a})):r.createElement(f,c({ref:t},s))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[u]="string"==typeof e?e:n,c[1]=p;for(var l=2;l<o;l++)c[l]=a[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5446:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var r=a(7462),n=(a(7294),a(3905));const o={sidebar_position:4},c="Create a new react app",p={unversionedId:"4 React 18/4 create a new react app",id:"4 React 18/4 create a new react app",title:"Create a new react app",description:"to create a new react app we will be making use of create react app ->",source:"@site/docs/4 React 18/4 create a new react app.md",sourceDirName:"4 React 18",slug:"/4 React 18/4 create a new react app",permalink:"/fundamentals/4 React 18/4 create a new react app",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Setting up our development environment",permalink:"/fundamentals/4 React 18/3 Setup"},next:{title:"The applications folder structure and files",permalink:"/fundamentals/4 React 18/5 folder structure and files"}},i={},l=[{value:"to create a new react app we will be making use of <code>create react app</code> <strong>-&gt;</strong>",id:"to-create-a-new-react-app-we-will-be-making-use-of-create-react-app--",level:3},{value:"<code>to run this application</code> first navigate inside the project folder cd react-demo now run the command npm start <strong>-&gt;</strong>",id:"to-run-this-application-first-navigate-inside-the-project-folder-cd-react-demo-now-run-the-command-npm-start--",level:3}],s={toc:l},u="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"create-a-new-react-app"},"Create a new react app"),(0,n.kt)("h3",{id:"to-create-a-new-react-app-we-will-be-making-use-of-create-react-app--"},"to create a new react app we will be making use of ",(0,n.kt)("inlineCode",{parentName:"h3"},"create react app")," ",(0,n.kt)("strong",{parentName:"h3"},"->")),(0,n.kt)("p",null,"create react app is a command line interface tool that allows you to quickly create and run react\napplications with no configuration"),(0,n.kt)("p",null,"so open the integrated terminal and run the command npx create-react-app followed by the name of the project let's call it react-demo"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-css"},"npx create-react-app react-demo\n")),(0,n.kt)("p",null,"the command takes a few seconds and once it completes you should have a new folder called react-demo"),(0,n.kt)("p",null,"this folder contains our react application"),(0,n.kt)("h3",{id:"to-run-this-application-first-navigate-inside-the-project-folder-cd-react-demo-now-run-the-command-npm-start--"},(0,n.kt)("inlineCode",{parentName:"h3"},"to run this application")," first navigate inside the project folder cd react-demo now run the command npm start ",(0,n.kt)("strong",{parentName:"h3"},"->")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-css"},"npm start\n")),(0,n.kt)("p",null,"the command will open the browser on localhost port 3000 with your react demo application up and running and you can see the instruction edit source app.js and save to reload"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"let's go back to vs code expand the source folder and edit app.js")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"i will change the text to hello world and save the file")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"when the changes are saved the browser automatically refreshes and\nyou should see hello world displayed in the browser"))))}d.isMDXComponent=!0}}]);