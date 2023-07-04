"use strict";(self.webpackChunkfundamentals=self.webpackChunkfundamentals||[]).push([[4862],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var i=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),c=p(n),h=l,f=c["".concat(s,".").concat(h)]||c[h]||u[h]||o;return n?i.createElement(f,a(a({ref:t},d),{},{components:n})):i.createElement(f,a({ref:t},d))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,a=new Array(o);a[0]=h;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[c]="string"==typeof e?e:l,a[1]=r;for(var p=2;p<o;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7677:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var i=n(7462),l=(n(7294),n(3905));const o={sidebar_position:5},a="The applications folder structure and files",r={unversionedId:"4 React 18/5 folder structure and files",id:"4 React 18/5 folder structure and files",title:"The applications folder structure and files",description:"package.json",source:"@site/docs/4 React 18/5 folder structure and files.md",sourceDirName:"4 React 18",slug:"/4 React 18/5 folder structure and files",permalink:"/fundamentals/4 React 18/5 folder structure and files",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Create a new react app",permalink:"/fundamentals/4 React 18/4 create a new react app"},next:{title:"React 17 vs React 18",permalink:"/fundamentals/4 React 18/6 updating to react 18"}},s={},p=[{value:"package.json",id:"packagejson",level:3},{value:"package-lock.json file",id:"package-lockjson-file",level:3},{value:".gitignore file",id:"gitignore-file",level:3},{value:"README.md file",id:"readmemd-file",level:3},{value:"node_modules folder",id:"node_modules-folder",level:3},{value:"public folder",id:"public-folder",level:3},{value:"the index.html file",id:"the-indexhtml-file",level:3},{value:"we have one div tag with id is equal to root",id:"we-have-one-div-tag-with-id-is-equal-to-root",level:3},{value:"the source folder",id:"the-source-folder",level:3},{value:"index.js file",id:"indexjs-file",level:3},{value:"App.js file",id:"appjs-file",level:3},{value:"App.css file",id:"appcss-file",level:3},{value:"App.test.js file",id:"apptestjs-file",level:3},{value:"index.css file",id:"indexcss-file",level:3},{value:"logo.svg",id:"logosvg",level:3},{value:"reportWebVitals.js",id:"reportwebvitalsjs",level:3},{value:"setupTests.js",id:"setuptestsjs",level:3},{value:"when you run the command npm start...",id:"when-you-run-the-command-npm-start",level:3}],d={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,l.kt)(c,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"the-applications-folder-structure-and-files"},"The applications folder structure and files"),(0,l.kt)("h3",{id:"packagejson"},"package.json"),(0,l.kt)("p",null,"  this file contains the ",(0,l.kt)("inlineCode",{parentName:"p"},"dependencies")," and the ",(0,l.kt)("inlineCode",{parentName:"p"},"scripts")," required for the project"),(0,l.kt)("p",null,"  you can see that we are using react and react dom version 18 and they are listed as dependencies"),(0,l.kt)("p",null,"  both the libraries are necessary to create react applications"),(0,l.kt)("p",null,"  we also have a few scripts to ",(0,l.kt)("inlineCode",{parentName:"p"},"start")," the application, ",(0,l.kt)("inlineCode",{parentName:"p"},"build")," the application or even run ",(0,l.kt)("inlineCode",{parentName:"p"},"tests")),(0,l.kt)("p",null,"  we then have ",(0,l.kt)("inlineCode",{parentName:"p"},"the configuration for eslint")," which is a tool to highlight possible errors in the code"),(0,l.kt)("p",null,"  finally we have the compatible browser list"),(0,l.kt)("h3",{id:"package-lockjson-file"},"package-lock.json file"),(0,l.kt)("p",null,"  next based on whether you have npm or yarn as a package manager you're going to see your unlock or package log files"),(0,l.kt)("p",null,"  this file ensures consistent installation of your dependencies and you don't really have to worry about it"),(0,l.kt)("h3",{id:"gitignore-file"},".gitignore file"),(0,l.kt)("p",null,"  we also have a git ignore file to ignore files and folders from version control"),(0,l.kt)("h3",{id:"readmemd-file"},"README.md file"),(0,l.kt)("p",null,"  and a standard readme file"),(0,l.kt)("h3",{id:"node_modules-folder"},"node_modules folder"),(0,l.kt)("p",null,"  next let's talk about the folders the first one is node underscore modules"),(0,l.kt)("p",null,"  this is the folder in which all the dependencies are installed"),(0,l.kt)("p",null,"  it is generated when you run the create react app command or when you run npm install"),(0,l.kt)("h3",{id:"public-folder"},"public folder"),(0,l.kt)("p",null,"  the next folder is the public folder"),(0,l.kt)("p",null,"  this folder contains six files"),(0,l.kt)("p",null,"  out of the six ",(0,l.kt)("inlineCode",{parentName:"p"},"manifest.json")," along with the ",(0,l.kt)("inlineCode",{parentName:"p"},"favicon")," and the ",(0,l.kt)("inlineCode",{parentName:"p"},"two logos")," are concerned with progressive web apps which is out of scope for our discussion"),(0,l.kt)("p",null,"  we have the ",(0,l.kt)("inlineCode",{parentName:"p"},"robots.txt")," file which is needed for search engines and is nothing react specific"),(0,l.kt)("h3",{id:"the-indexhtml-file"},"the index.html file"),(0,l.kt)("p",null,"  so as a beginner you only have to concentrate on the index.html file"),(0,l.kt)("p",null,"  the index.html file is the only html file you're going to have in your application"),(0,l.kt)("p",null,"  we are building single page applications and this is it"),(0,l.kt)("p",null,"  the ui might dynamically change in the browser but it is this html file that gets served up"),(0,l.kt)("p",null,"  typically you're not going to add any code in this file maybe some changes in the head section but definitely not in the body tag"),(0,l.kt)("h3",{id:"we-have-one-div-tag-with-id-is-equal-to-root"},"we have one div tag with id is equal to root"),(0,l.kt)("p",null,"  you want react to control the ui and for that purpose we have one div tag with id is equal to root"),(0,l.kt)("p",null,"  at runtime the react application takes over this div tag and is ultimately responsible for the ui"),(0,l.kt)("p",null,"  please make a note of this div tag as we will come back to it shortly"),(0,l.kt)("h3",{id:"the-source-folder"},"the source folder"),(0,l.kt)("p",null,"  the next folder is the source folder which is the folder we will be working with the most during development"),(0,l.kt)("h3",{id:"indexjs-file"},"index.js file"),(0,l.kt)("p",null,"  the starting point of our react application is index.js"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import React from 'react'\nimport ReactDOM from 'react-dom/client'\nimport './index.css'\nimport App from './App'\nimport reportWebVitals from './reportWebVitals'\n\nconst root = ReactDOM.createRoot(document.getElementById('root'))\nroot.render(\n  <React.StrictMode>\n    <App />\n  </React.StrictMode>\n)\n\n// If you want to start measuring performance in your app, pass a function\n// to log results (for example: reportWebVitals(console.log))\n// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals\nreportWebVitals()\n")),(0,l.kt)("p",null,"  in index.js we specify the root component which is app component and the dom element which will be controlled by react"),(0,l.kt)("p",null,"  the dom element in our example is an element with id is equal to root and if you can recollect this is the element in our index.html file"),(0,l.kt)("p",null,"  we call this div element as a ",(0,l.kt)("inlineCode",{parentName:"p"},"root dom node")," because everything inside it will be managed by react"),(0,l.kt)("p",null,"  for the hello world application the app component is rendered inside the root dom node"),(0,l.kt)("h3",{id:"appjs-file"},"App.js file"),(0,l.kt)("p",null,"  that brings us to the app component which is present in app.js"),(0,l.kt)("p",null,"  this is also the file we edited a minute ago and is responsible for the html displayed in the browser"),(0,l.kt)("p",null,"  in other words ",(0,l.kt)("inlineCode",{parentName:"p"},"the app component represents the view which we see in the browser")),(0,l.kt)("h3",{id:"appcss-file"},"App.css file"),(0,l.kt)("p",null,"  with app.js create react app also generates a css file for styling. the css file contains classes which are applied in the app component"),(0,l.kt)("h3",{id:"apptestjs-file"},"App.test.js file"),(0,l.kt)("p",null,"  and a test.js file for unit tests. the test file contains a simple test case"),(0,l.kt)("h3",{id:"indexcss-file"},"index.css file"),(0,l.kt)("p",null,"  we also have an index.css file which applies styles to the body tag and is referenced in index.js"),(0,l.kt)("h3",{id:"logosvg"},"logo.svg"),(0,l.kt)("p",null,"  we have the logo svg which is referenced in the app component"),(0,l.kt)("h3",{id:"reportwebvitalsjs"},"reportWebVitals.js"),(0,l.kt)("p",null,"  and finally report web vitals for performance and analytics tracking"),(0,l.kt)("h3",{id:"setuptestsjs"},"setupTests.js"),(0,l.kt)("p",null,"  and setup tests which is again related to testing"),(0,l.kt)("p",null,"  these two files can be ignored as a beginner"),(0,l.kt)("p",null,"  so that is the folder structure of a react application created using create\nreact app"),(0,l.kt)("h3",{id:"when-you-run-the-command-npm-start"},"when you run the command npm start..."),(0,l.kt)("p",null,"  index.html file is served in the browser"),(0,l.kt)("p",null,"  index.html contains the root dom node"),(0,l.kt)("p",null,"  next the control enters index.js"),(0,l.kt)("p",null,"  react dom library renders the app component onto the root dom node"),(0,l.kt)("p",null,"  the app component contains the html which is ultimately displayed in the\nbrowser"))}u.isMDXComponent=!0}}]);