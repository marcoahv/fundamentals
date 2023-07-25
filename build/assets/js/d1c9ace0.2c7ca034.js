"use strict";(self.webpackChunkfundamentals=self.webpackChunkfundamentals||[]).push([[6547],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=n.createContext({}),s=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=s(a),d=i,k=c["".concat(o,".").concat(d)]||c[d]||u[d]||r;return a?n.createElement(k,p(p({ref:t},m),{},{components:a})):n.createElement(k,p({ref:t},m))}));function k(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,p=new Array(r);p[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[c]="string"==typeof e?e:i,p[1]=l;for(var s=2;s<r;s++)p[s]=a[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8982:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var n=a(7462),i=(a(7294),a(3905));const r={sidebar_position:6},p="Implementing Logic & Functionality",l={unversionedId:"9 Locofy/6 Implementing Logic & Functionality",id:"9 Locofy/6 Implementing Logic & Functionality",title:"Implementing Logic & Functionality",description:"Getting Started with Super Bass",source:"@site/docs/9 Locofy/6 Implementing Logic & Functionality.md",sourceDirName:"9 Locofy",slug:"/9 Locofy/6 Implementing Logic & Functionality",permalink:"/fundamentals/9 Locofy/6 Implementing Logic & Functionality",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Fixing the code",permalink:"/fundamentals/9 Locofy/5 Fixing the code a bit"},next:{title:"Design & code in sync",permalink:"/fundamentals/9 Locofy/7 Design & code in sync"}},o={},s=[{value:"Getting Started with Super Bass",id:"getting-started-with-super-bass",level:3},{value:"Creating the Database",id:"creating-the-database",level:3},{value:"Importing Real Estate Properties",id:"importing-real-estate-properties",level:3},{value:"Installing Super Bass",id:"installing-super-bass",level:3},{value:"Fetching the Properties",id:"fetching-the-properties",level:3},{value:"Using the Properties in Our Application",id:"using-the-properties-in-our-application",level:3},{value:"Modifying the Card to Show the Data",id:"modifying-the-card-to-show-the-data",level:3},{value:"Keeping Your Design and Code in Sync",id:"keeping-your-design-and-code-in-sync",level:3}],m={toc:s},c="wrapper";function u(e){let{components:t,...a}=e;return(0,i.kt)(c,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"implementing-logic--functionality"},"Implementing Logic & Functionality"),(0,i.kt)("h3",{id:"getting-started-with-super-bass"},"Getting Started with Super Bass"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Visit superbass.com and sign up or sign in.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'Click "Start your project".')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'Create a new project, such as "Lockify Real Estate".')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Choose a database password and remember it.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Select the region and stay on the free pricing plan.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'Click "Create your new project".'))),(0,i.kt)("h3",{id:"creating-the-database"},"Creating the Database"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'Go to "Table Editor" and create a new table named "Properties".')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Disable RLS security for easier access.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Add new columns: ID, created, name (text), image (text), and price (INT 8).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Save the changes."))),(0,i.kt)("h3",{id:"importing-real-estate-properties"},"Importing Real Estate Properties"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'Go to "Insert" and click "Import data from CSV".')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Find the CSV file containing demo properties.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Copy and paste the file to import seven properties.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'Click "Import data" to add the properties to our table.'))),(0,i.kt)("h3",{id:"installing-super-bass"},"Installing Super Bass"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Stop the terminal by pressing Ctrl+C and then Y.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Clear the terminal and run ",(0,i.kt)("inlineCode",{parentName:"p"},"npm install add Super Bass forward slash Super Bass Dash JS")," .")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Wait for the installation to complete."))),(0,i.kt)("h3",{id:"fetching-the-properties"},"Fetching the Properties"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Import ",(0,i.kt)("inlineCode",{parentName:"p"},"create client")," from ",(0,i.kt)("inlineCode",{parentName:"p"},"at Super Bass forward slash Superbass Dash JS")," .")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Use ",(0,i.kt)("inlineCode",{parentName:"p"},"const client = create client")," and pass the super base URL and key.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Create a new ",(0,i.kt)("inlineCode",{parentName:"p"},"use effect")," hook to fetch the properties.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Define an async function called ",(0,i.kt)("inlineCode",{parentName:"p"},"const Fetch properties")," .")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Use ",(0,i.kt)("inlineCode",{parentName:"p"},"const result = await client Dot from properties")," and then ",(0,i.kt)("inlineCode",{parentName:"p"},"dot select")," to fetch everything.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Create a ",(0,i.kt)("inlineCode",{parentName:"p"},"use State")," field called ",(0,i.kt)("inlineCode",{parentName:"p"},"properties")," and set it to an empty array.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Set ",(0,i.kt)("inlineCode",{parentName:"p"},"properties")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"result dot data")," .")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Call ",(0,i.kt)("inlineCode",{parentName:"p"},"fetch properties")," within the ",(0,i.kt)("inlineCode",{parentName:"p"},"use effect")," ."))),(0,i.kt)("h3",{id:"using-the-properties-in-our-application"},"Using the Properties in Our Application"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Import ",(0,i.kt)("inlineCode",{parentName:"p"},"use effect")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"use State")," from React.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Modify the ",(0,i.kt)("inlineCode",{parentName:"p"},"properties grid container")," to use the real data.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Map through all the properties and delete the repetitive card components.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Return a ",(0,i.kt)("inlineCode",{parentName:"p"},"property card")," component with the key, image URL, name, and price."))),(0,i.kt)("h3",{id:"modifying-the-card-to-show-the-data"},"Modifying the Card to Show the Data"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Remove the ",(0,i.kt)("inlineCode",{parentName:"p"},"use memo")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"card 1")," style.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Replace the price with the price from props.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Replace the address with the name from props."))),(0,i.kt)("h3",{id:"keeping-your-design-and-code-in-sync"},"Keeping Your Design and Code in Sync"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Lockify can keep your design and code in sync.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Make changes in Figma and easily update your code.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"This feature saves time and ensures design and code consistency."))))}u.isMDXComponent=!0}}]);