"use strict";(self.webpackChunkfundamentals=self.webpackChunkfundamentals||[]).push([[8396],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,d=u["".concat(s,".").concat(m)]||u[m]||g[m]||o;return n?a.createElement(d,l(l({ref:t},c),{},{components:n})):a.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6899:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:6},l="Create Pages",i={unversionedId:"5 Next.js 13/6 Create Pages",id:"5 Next.js 13/6 Create Pages",title:"Create Pages",description:"it's time to start creating the routes",source:"@site/docs/5 Next.js 13/6 Create Pages.md",sourceDirName:"5 Next.js 13",slug:"/5 Next.js 13/6 Create Pages",permalink:"/fundamentals/5 Next.js 13/6 Create Pages",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Pages",permalink:"/fundamentals/5 Next.js 13/5 Pages"},next:{title:"Linking and Navigation",permalink:"/fundamentals/5 Next.js 13/7 Linking and Navigation"}},s={},p=[{value:"it&#39;s time to start creating the routes",id:"its-time-to-start-creating-the-routes",level:3},{value:"Create Folders inside app folder",id:"create-folders-inside-app-folder",level:3},{value:"Create page.js files",id:"create-pagejs-files",level:3},{value:"Create subfolders",id:"create-subfolders",level:3},{value:"Check URLs",id:"check-urls",level:3}],c={toc:p},u="wrapper";function g(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create-pages"},"Create Pages"),(0,r.kt)("h3",{id:"its-time-to-start-creating-the-routes"},"it's time to start creating the routes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"All right, now let's go ahead and create some pages within our Globomantics app based on the route structure that we just saw.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"We're back to the VS Code editor.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Now within our app folder, it's time to start creating the routes."))),(0,r.kt)("h3",{id:"create-folders-inside-app-folder"},"Create Folders inside app folder"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"First, I'm going to create a folder called ",(0,r.kt)("inlineCode",{parentName:"p"},"home"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Then I'm going to create a folder for the ",(0,r.kt)("inlineCode",{parentName:"p"},"settings"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The next folder we're going to create is one for the ",(0,r.kt)("inlineCode",{parentName:"p"},"conference"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Finally, we create a folder for the ",(0,r.kt)("inlineCode",{parentName:"p"},"blog"),"."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," app/\n   home/\n   settings/\n   conference/\n   blog/\n")),(0,r.kt)("h3",{id:"create-pagejs-files"},"Create page.js files"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The next step is to create a ",(0,r.kt)("inlineCode",{parentName:"p"},"page.js")," file within each of these folders.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"So I'm going to go ahead and paste what we had in the page.js file from the app directory and tweak that a little bit.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"We could have a generic message that says Welcome to ",(0,r.kt)("inlineCode",{parentName:"p"},"Settings Page"),"."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"app/settings/page.jsx","app/settings/page.jsx":!0},"export default function Page() {\n  return (\n    <>\n      <h1>Welcome to Settings Page</h1>\n    </>\n  )\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"And I'm going to start creating the rest of the pages on each folder.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"We're going to have a Welcome to Home Page message rendered for the ",(0,r.kt)("inlineCode",{parentName:"p"},"home page")," route"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"app/home/page.jsx","app/home/page.jsx":!0},"export default function Page() {\n  return (\n    <>\n      <h1>Welcome to Home Page</h1>\n    </>\n  )\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"and one for the ",(0,r.kt)("inlineCode",{parentName:"li"},"blog page")," , and it's going to say Welcome to Blog.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"app/blog/page.jsx","app/blog/page.jsx":!0},"export default function Page() {\n  return (\n    <>\n      <h1>Welcome to blog</h1>\n    </>\n  )\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We still have to wire up a page for the ",(0,r.kt)("inlineCode",{parentName:"li"},"conference")," folder.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"app/conference/page.jsx","app/conference/page.jsx":!0},"export default function Page() {\n  return (\n    <>\n      <h1>Welcome to Globomantics conference</h1>\n    </>\n  )\n}\n")),(0,r.kt)("h3",{id:"create-subfolders"},"Create subfolders"),(0,r.kt)("p",null,"Recall that we want to create subfolders within the conference folder, one for the ",(0,r.kt)("inlineCode",{parentName:"p"},"speakers")," and another folder for the ",(0,r.kt)("inlineCode",{parentName:"p"},"sessions"),"."),(0,r.kt)("p",null,"So let's go ahead and create these subfolders."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  app/\n    home/\n    settings/\n    conference/\n      speakers/\n      sessions/\n    blog/\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"And when you create subfolders, the subfolders also need to have a page.js file because it's going to be its own unique route.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"So I'm going to go ahead and create a page.js for both the Sessions page, as well as the Speakers page")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"and have a generic welcome message that says Welcome to Globomantics ",(0,r.kt)("inlineCode",{parentName:"p"},"Sessions")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"app/conference/sessions/page.jsx","app/conference/sessions/page.jsx":!0},"export default function Page() {\n  return (\n    <>\n      <h1>Welcome to Globomantics Sessions</h1>\n    </>\n  )\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"and Welcome to Globomantics ",(0,r.kt)("inlineCode",{parentName:"li"},"Speakers"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"app/conference/speakers/page.jsx","app/conference/speakers/page.jsx":!0},"export default function Page() {\n  return (\n    <>\n      <h1>Welcome to Globomantics Speakers</h1>\n    </>\n  )\n}\n")),(0,r.kt)("h3",{id:"check-urls"},"Check URLs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"So now we have set up all the pages that we want, and they're going to automatically follow this file\u2011based routing, and you'll see how that looks in action.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Localhost 3000 is going to render our root page."))),(0,r.kt)("p",null,"Now if I change the URL to include ",(0,r.kt)("inlineCode",{parentName:"p"},"/home"),", you see the Welcome to Home Page being rendered."),(0,r.kt)("p",null,"Now you see the blog being rendered with the URL changes to",(0,r.kt)("inlineCode",{parentName:"p"}," blog/")),(0,r.kt)("p",null,"If you change that to ",(0,r.kt)("inlineCode",{parentName:"p"},"/settings"),", you're going to see the Welcome to Settings message."),(0,r.kt)("p",null,"Let's go ahead and try the conference page.\nSo you would do ",(0,r.kt)("inlineCode",{parentName:"p"},"/conference"),", and there you go. You see the Welcome to Globomantics Conference."),(0,r.kt)("p",null,"And now, you can append the URL with ",(0,r.kt)("inlineCode",{parentName:"p"},"conference/speakers"),", and you'll now see the new route for the speakers being created."),(0,r.kt)("p",null,"And you can also try out the ",(0,r.kt)("inlineCode",{parentName:"p"},"conference/sessions"),", and you'll see the sessions page being rendered."),(0,r.kt)("p",null,"And with that, we've set up all the pages for our Globomantics app, and all of the URLs are following the file\u2011based routing correctly."))}g.isMDXComponent=!0}}]);