"use strict";(self.webpackChunkfundamentals=self.webpackChunkfundamentals||[]).push([[7162],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),c=r,y=d["".concat(s,".").concat(c)]||d[c]||h[c]||o;return n?a.createElement(y,l(l({ref:t},p),{},{components:n})):a.createElement(y,l({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2647:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:8},l="Layout",i={unversionedId:"5 Next.js 13/8 Layout",id:"5 Next.js 13/8 Layout",title:"Layout",description:"Layout is basically a UI that is shared between pages.",source:"@site/docs/5 Next.js 13/8 Layout.md",sourceDirName:"5 Next.js 13",slug:"/5 Next.js 13/8 Layout",permalink:"/fundamentals/5 Next.js 13/8 Layout",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Linking and Navigation",permalink:"/fundamentals/5 Next.js 13/7 Linking and Navigation"},next:{title:"Working with Images, Fonts, and Styling Your App",permalink:"/fundamentals/5 Next.js 13/9 Working with Images, Fonts, and Styling"}},s={},u=[{value:"Layout is basically a UI that is shared between pages.",id:"layout-is-basically-a-ui-that-is-shared-between-pages",level:3},{value:"When you set up your Next.js app, a root layout file is required.",id:"when-you-set-up-your-nextjs-app-a-root-layout-file-is-required",level:3},{value:"adding a layout for conference page",id:"adding-a-layout-for-conference-page",level:3},{value:"add some basic styling to our header",id:"add-some-basic-styling-to-our-header",level:3},{value:"testing in the browser",id:"testing-in-the-browser",level:3},{value:"this piece of UI does not rerender",id:"this-piece-of-ui-does-not-rerender",level:3}],p={toc:u},d="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"layout"},"Layout"),(0,r.kt)("h3",{id:"layout-is-basically-a-ui-that-is-shared-between-pages"},"Layout is basically a UI that is shared between pages."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You may have headers, footers, navigation bars, and so on that are common across several pages within your web application.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Rendering these components could be part of your layout.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"What's cool about layouts is that on navigation from one page to another, layouts preserve the state and remain interactive.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"This means they do not rerender, and your page transitions seem even quicker."))),(0,r.kt)("h3",{id:"when-you-set-up-your-nextjs-app-a-root-layout-file-is-required"},"When you set up your Next.js app, a root layout file is required."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"This will be within the app folder, and this layout will be shared across all the pages in the app.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A layout can simply be defined by default exporting a React component from a layout.js file.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The component should accept ",(0,r.kt)("inlineCode",{parentName:"p"},"a children prop"),", which will be populated within a page or other nested layouts."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"export default function RootLayout({ children }) {\n  return (\n    <html lang='en'>\n      <head />\n      <body>{children}</body>\n    </html>\n  )\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Let's take a look at the app structure.")),(0,r.kt)("p",null,"In our case, one of the sub-routes is the /conference route."),(0,r.kt)("p",null,"Conference is a folder within the app folder,"),(0,r.kt)("p",null,"and conference has its own sub-routes, speakers and sessions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"app/\n  page.js\n  layout.js\n    conference/\n      page.js\n      layout.js\n      speakers/\n        page.js\n      sessions/\n        page.js\n\n")),(0,r.kt)("p",null,"We already learned that page.js file is required for the route to be publicly accessible for each route and sub-route."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"The only required layout.js file is the one for the root layout within the app folder.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The other layout files are optional depending on how you plan to design your web application.")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Layouts defined inside a folder apply to specific route segments and render within those segments when they're active.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For instance, here the conference route has its own layout file.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"app/\n  page.js\n  layout.js\n    conference/\n      page.js\n      layout.js\n      speakers/\n        page.js\n      sessions/\n        page.js\n\n")),(0,r.kt)("p",null,"This will be rendered when the user navigates to the conference page, and this layout will be shared by both the sub-route's Sessions page and the Speakers page. Isn't that neat?"),(0,r.kt)("h3",{id:"adding-a-layout-for-conference-page"},"adding a layout for conference page"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Let's take a look at a demo on how we can set up layout for our conference page and how it's really shared between the sub-routes as well.")),(0,r.kt)("p",null,"Here's our app's root layout file within the app folder. It should contain the html and body tags. Now this file is a parent layout to the whole application."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"export default function RootLayout({ children }) {\n  return (\n    <html lang='en'>\n      <head />\n      <body>{children}</body>\n    </html>\n  )\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Let's now go ahead and create a layout file just for our conference folder. So ",(0,r.kt)("inlineCode",{parentName:"p"},"within our conference folder here, we create a layout.js file"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In here, let's create a React component and call it ",(0,r.kt)("inlineCode",{parentName:"p"},"ConferenceLayout"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"This component is going to take in the children props as well and return some HTML.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"What I'm going to do is simply add a header for our Globomantics conference pages, and the header text is going to be GLOBOMANTICS MANIACALLY TAKING TECH TO THE GLOBE.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Now we can wrap the header tag, and the rest of the items will be rendered within the section tag."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"export default function ConferenceLayout({ children }) {\n  return (\n    <>\n      <header>\n        <h1>GLOBOMANTICS MANIACALLY TAKING TECH TO THE GLOBE</h1>\n      </header>\n      <section>{children}</section>\n    </>\n  )\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Now keep in mind that this layout is going to be used when the conference page is rendered, and we should also see ",(0,r.kt)("inlineCode",{parentName:"li"},"the same layout being used for the Sessions page, as well as the Speakers page"),".")),(0,r.kt)("h3",{id:"add-some-basic-styling-to-our-header"},"add some basic styling to our header"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"One last step here is to add some basic styling to our header.")),(0,r.kt)("p",null,"I've already create a ",(0,r.kt)("inlineCode",{parentName:"p"},"style.css")," file within the conference folder that you can see here."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css",metastring:"conference/styles.css","conference/styles.css":!0},"header {\n  width: 100%;\n  padding: 50px 0px 50px;\n  background: #212121;\n  color: #fff;\n  text-align: center;\n  justify-content: center;\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"It contains some basic styling for the header.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Let's go back to our layout.js file and import the style here"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import style from './styles.css'\n\nexport default function ConferenceLayout({ children }) {\n  return (\n    <>\n      <header>\n        <h1>GLOBOMANTICS MANIACALLY TAKING TECH TO THE GLOBE</h1>\n      </header>\n      <section>{children}</section>\n    </>\n  )\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"and pass it to the header."),(0,r.kt)("li",{parentName:"ul"},"We're going to pass styles.header to the style property within our header tag.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import style from './styles.css'\n\nexport default function ConferenceLayout({ children }) {\n  return (\n    <>\n      <header style={style.header}>\n        <h1>GLOBOMANTICS MANIACALLY TAKING TECH TO THE GLOBE</h1>\n      </header>\n      <section>{children}</section>\n    </>\n  )\n}\n")),(0,r.kt)("h3",{id:"testing-in-the-browser"},"testing in the browser"),(0,r.kt)("p",null,"And with that, our ConferenceLayout component is ready, and let's go ahead and see how it looks."),(0,r.kt)("p",null,"As you can see, we are within our localhost 3000, which is the home page, and this page will not render the layout that we have within the conference page."),(0,r.kt)("p",null,"We then navigate to the home, which also does not display that layout."),(0,r.kt)("p",null,"We're now going to get into the conference page, and there you see it."),(0,r.kt)("p",null,"You see this black header, and it has the white heading text, which says GLOBOMANTICS MANIACALLY TAKING TECH TO THE GLOBE."),(0,r.kt)("p",null,"Now this is the header for a conference page that is being rendered from the layout."),(0,r.kt)("h3",{id:"this-piece-of-ui-does-not-rerender"},"this piece of UI does not rerender"),(0,r.kt)("p",null,"Now what's interesting is if you click on the Speakers page and navigate to it, you still see that header."),(0,r.kt)("p",null,"And if you click on the Sessions page, you're still going to see that header."),(0,r.kt)("p",null,"But take a look closely that it's really not rerendering the header."),(0,r.kt)("p",null,"So that piece of the layout that you're seeing is already available and cached."),(0,r.kt)("p",null,"So when you navigate back and forth between the Sessions, Speakers, and Conference pages, this piece of UI does not rerender."),(0,r.kt)("p",null,"It's pretty cool because now you can see how you can tap into this layout by having navigation bars, footers, headers, and so on, which don't necessarily rerender per page."),(0,r.kt)("p",null,"Instead, they rerender based on the route that the layout is set up for."))}h.isMDXComponent=!0}}]);