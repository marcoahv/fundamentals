"use strict";(self.webpackChunkfundamentals=self.webpackChunkfundamentals||[]).push([[5896],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},p=Object.keys(e);for(i=0;i<p.length;i++)n=p[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(i=0;i<p.length;i++)n=p[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),s=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=s(e.components);return i.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=s(n),u=a,h=c["".concat(l,".").concat(u)]||c[u]||d[u]||p;return n?i.createElement(h,r(r({ref:t},m),{},{components:n})):i.createElement(h,r({ref:t},m))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,r=new Array(p);r[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:a,r[1]=o;for(var s=2;s<p;s++)r[s]=n[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2047:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>p,metadata:()=>o,toc:()=>s});var i=n(7462),a=(n(7294),n(3905));const p={sidebar_position:5},r="Split-screen component improvements",o={unversionedId:"10 React Design Patterns/5 Split-screen component improvements",id:"10 React Design Patterns/5 Split-screen component improvements",title:"Split-screen component improvements",description:"Adding weight to components",source:"@site/docs/10 React Design Patterns/5 Split-screen component improvements.md",sourceDirName:"10 React Design Patterns",slug:"/10 React Design Patterns/5 Split-screen component improvements",permalink:"/fundamentals/10 React Design Patterns/5 Split-screen component improvements",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Split-screen components",permalink:"/fundamentals/10 React Design Patterns/4 Split-screen components"},next:{title:"Lists and list items",permalink:"/fundamentals/10 React Design Patterns/6 Lists and list items"}},l={},s=[{value:"Adding weight to components",id:"adding-weight-to-components",level:3},{value:"Applying weight to components",id:"applying-weight-to-components",level:3},{value:"Usage in app.js",id:"usage-in-appjs",level:3},{value:"Displaying components as children",id:"displaying-components-as-children",level:3},{value:"Implementation in split screen component",id:"implementation-in-split-screen-component",level:3},{value:"Passing props to components",id:"passing-props-to-components",level:3}],m={toc:s},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"split-screen-component-improvements"},"Split-screen component improvements"),(0,a.kt)("h3",{id:"adding-weight-to-components"},"Adding weight to components"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"To make the left component take up less space and the right component take up more space, we can add two more props to the split screen component:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"leftWeight")," with a default value of 1")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"rightWeight")," with a default value of 1"))))),(0,a.kt)("h3",{id:"applying-weight-to-components"},"Applying weight to components"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Pass the ",(0,a.kt)("inlineCode",{parentName:"p"},"leftWeight")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"rightWeight")," props to their respective pane components.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Modify the Flex property in the pane component using the passed weight props."))),(0,a.kt)("h3",{id:"usage-in-appjs"},"Usage in app.js"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Add the ",(0,a.kt)("inlineCode",{parentName:"p"},"leftWeight")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"rightWeight")," props to the split screen component in app.js.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Example: ",(0,a.kt)("inlineCode",{parentName:"p"},"leftWeight=1")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"rightWeight=3")," to make the left side one-third as wide as the right side."))),(0,a.kt)("h3",{id:"displaying-components-as-children"},"Displaying components as children"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Instead of passing the left and right components as props, put them inside the split screen component as children.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Example: ",(0,a.kt)("inlineCode",{parentName:"p"},"leftHandComponent")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"rightHandComponent")," as children."))),(0,a.kt)("h3",{id:"implementation-in-split-screen-component"},"Implementation in split screen component"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Remove the left and right props.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Replace them with the children prop.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Assign the children prop to ",(0,a.kt)("inlineCode",{parentName:"p"},"left")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"right")," variables.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Display the ",(0,a.kt)("inlineCode",{parentName:"p"},"left")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"right")," components using curly braces."))),(0,a.kt)("h3",{id:"passing-props-to-components"},"Passing props to components"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"If the left and right components require props, pass them directly as props to the components.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Example: ",(0,a.kt)("inlineCode",{parentName:"p"},'name="Sean" ')," for the left component and ",(0,a.kt)("inlineCode",{parentName:"p"},' message="hello"')," for the right component."))))}d.isMDXComponent=!0}}]);