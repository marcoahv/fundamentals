"use strict";(self.webpackChunkfundamentals=self.webpackChunkfundamentals||[]).push([[551],{3905:(e,i,t)=>{t.d(i,{Zo:()=>d,kt:()=>h});var n=t(7294);function a(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}function r(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);i&&(n=n.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?r(Object(t),!0).forEach((function(i){a(e,i,t[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}))}return e}function l(e,i){if(null==e)return{};var t,n,a=function(e,i){if(null==e)return{};var t,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],i.indexOf(t)>=0||(a[t]=e[t]);return a}(e,i);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],i.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),g=function(e){var i=n.useContext(s),t=i;return e&&(t="function"==typeof e?e(i):o(o({},i),e)),t},d=function(e){var i=g(e.components);return n.createElement(s.Provider,{value:i},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var i=e.children;return n.createElement(n.Fragment,{},i)}},p=n.forwardRef((function(e,i){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=g(t),p=a,h=u["".concat(s,".").concat(p)]||u[p]||c[p]||r;return t?n.createElement(h,o(o({ref:i},d),{},{components:t})):n.createElement(h,o({ref:i},d))}));function h(e,i){var t=arguments,a=i&&i.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=p;var l={};for(var s in i)hasOwnProperty.call(i,s)&&(l[s]=i[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var g=2;g<r;g++)o[g]=t[g];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},4929:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>g});var n=t(7462),a=(t(7294),t(3905));const r={sidebar_position:9},o=void 0,l={unversionedId:"7 React 2023/PART 4: PROFESSIONAL REACT DEVELOPMENT/Section 29: Implementing More Features Authentication Dark Mode Dashboard",id:"7 React 2023/PART 4: PROFESSIONAL REACT DEVELOPMENT/Section 29: Implementing More Features Authentication Dark Mode Dashboard",title:"Section 29: Implementing More Features Authentication Dark Mode Dashboard",description:"\ud83d\udfe3 Section Overview",source:"@site/docs/7 React 2023/PART 4: PROFESSIONAL REACT DEVELOPMENT/Section 29: Implementing More Features Authentication Dark Mode Dashboard.md",sourceDirName:"7 React 2023/PART 4: PROFESSIONAL REACT DEVELOPMENT",slug:"/7 React 2023/PART 4: PROFESSIONAL REACT DEVELOPMENT/Section 29: Implementing More Features Authentication Dark Mode Dashboard",permalink:"/fundamentals/7 React 2023/PART 4: PROFESSIONAL REACT DEVELOPMENT/Section 29: Implementing More Features Authentication Dark Mode Dashboard",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Section 28: Advanced React Patterns",permalink:"/fundamentals/7 React 2023/PART 4: PROFESSIONAL REACT DEVELOPMENT/Section 28: Advanced React Patterns"},next:{title:"Section 30: Deployment With Netlify and Vercel",permalink:"/fundamentals/7 React 2023/PART 4: PROFESSIONAL REACT DEVELOPMENT/Section 30: Deployment With Netlify and Vercel"}},s={},g=[{value:"\ud83d\udfe3 Section Overview",id:"-section-overview",level:2},{value:"\ud83d\udfe3 Client-Side Filtering: Filtering Cabins",id:"-client-side-filtering-filtering-cabins",level:2},{value:"\ud83d\udfe3 Client-Side Sorting: Sorting Cabins",id:"-client-side-sorting-sorting-cabins",level:2},{value:"\ud83d\udfe3 Building the Bookings Table",id:"-building-the-bookings-table",level:2},{value:"\ud83d\udfe3 Uploading Sample Data",id:"-uploading-sample-data",level:2},{value:"\ud83d\udfe3 API-Side Filtering: Filtering Bookings",id:"-api-side-filtering-filtering-bookings",level:2},{value:"\ud83d\udfe3 API-Side Sorting: Sorting Bookings",id:"-api-side-sorting-sorting-bookings",level:2},{value:"\ud83d\udfe3 Building a Reusable Pagination Component",id:"-building-a-reusable-pagination-component",level:2},{value:"\ud83d\udfe3 API-Side Pagination: Paginating Bookings",id:"-api-side-pagination-paginating-bookings",level:2},{value:"\ud83d\udfe3 Prefetching With React Query",id:"-prefetching-with-react-query",level:2},{value:"\ud83d\udfe3 Building the Single Booking Page",id:"-building-the-single-booking-page",level:2},{value:"\ud83d\udfe3 Checking In a Booking",id:"-checking-in-a-booking",level:2},{value:"\ud83d\udfe3 Adding Optional Breakfast",id:"-adding-optional-breakfast",level:2},{value:"\ud83d\udfe3 Checking Out a Booking (+ Fixing a Small Bug)",id:"-checking-out-a-booking--fixing-a-small-bug",level:2},{value:"\ud83d\udfe3 Deleting a Booking",id:"-deleting-a-booking",level:2},{value:"\ud83d\udfe3 Authentication: User Login With Supabase",id:"-authentication-user-login-with-supabase",level:2},{value:"\ud83d\udfe3 Authorization: Protecting Routes",id:"-authorization-protecting-routes",level:2},{value:"\ud83d\udfe3 User Logout",id:"-user-logout",level:2},{value:"\ud83d\udfe3 Fixing an Important Bug",id:"-fixing-an-important-bug",level:2},{value:"\ud83d\udfe3 Building the Sign Up Form",id:"-building-the-sign-up-form",level:2},{value:"\ud83d\udfe3 User Sign Up",id:"-user-sign-up",level:2},{value:"\ud83d\udfe3 Authorization on Supabase: Protecting Database (RLS)",id:"-authorization-on-supabase-protecting-database-rls",level:2},{value:"\ud83d\udfe3 Building The App Header",id:"-building-the-app-header",level:2},{value:"\ud83d\udfe3 Updating User Data and Password",id:"-updating-user-data-and-password",level:2},{value:"\ud83d\udfe3 Implementing Dark Mode With CSS Variables",id:"-implementing-dark-mode-with-css-variables",level:2},{value:"\ud83d\udfe3 Building the Dashboard Layout",id:"-building-the-dashboard-layout",level:2},{value:"\ud83d\udfe3 Computing Recent Bookings and Stays",id:"-computing-recent-bookings-and-stays",level:2},{value:"\ud83d\udfe3 Displaying Statistics",id:"-displaying-statistics",level:2},{value:"\ud83d\udfe3 Displaying a Line Chart With the Recharts Library",id:"-displaying-a-line-chart-with-the-recharts-library",level:2},{value:"\ud83d\udfe3 Displaying a Pie Chart",id:"-displaying-a-pie-chart",level:2},{value:"\ud83d\udfe3 Displaying Stays for Current Day",id:"-displaying-stays-for-current-day",level:2},{value:"\ud83d\udfe3 Error Boundaries",id:"-error-boundaries",level:2},{value:"\ud83d\udfe3 Final Touches + Fixing Bugs",id:"-final-touches--fixing-bugs",level:2}],d={toc:g},u="wrapper";function c(e){let{components:i,...t}=e;return(0,a.kt)(u,(0,n.Z)({},d,t,{components:i,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"-section-overview"},"\ud83d\udfe3 Section Overview"),(0,a.kt)("h2",{id:"-client-side-filtering-filtering-cabins"},"\ud83d\udfe3 Client-Side Filtering: Filtering Cabins"),(0,a.kt)("h2",{id:"-client-side-sorting-sorting-cabins"},"\ud83d\udfe3 Client-Side Sorting: Sorting Cabins"),(0,a.kt)("h2",{id:"-building-the-bookings-table"},"\ud83d\udfe3 Building the Bookings Table"),(0,a.kt)("h2",{id:"-uploading-sample-data"},"\ud83d\udfe3 Uploading Sample Data"),(0,a.kt)("h2",{id:"-api-side-filtering-filtering-bookings"},"\ud83d\udfe3 API-Side Filtering: Filtering Bookings"),(0,a.kt)("h2",{id:"-api-side-sorting-sorting-bookings"},"\ud83d\udfe3 API-Side Sorting: Sorting Bookings"),(0,a.kt)("h2",{id:"-building-a-reusable-pagination-component"},"\ud83d\udfe3 Building a Reusable Pagination Component"),(0,a.kt)("h2",{id:"-api-side-pagination-paginating-bookings"},"\ud83d\udfe3 API-Side Pagination: Paginating Bookings"),(0,a.kt)("h2",{id:"-prefetching-with-react-query"},"\ud83d\udfe3 Prefetching With React Query"),(0,a.kt)("h2",{id:"-building-the-single-booking-page"},"\ud83d\udfe3 Building the Single Booking Page"),(0,a.kt)("h2",{id:"-checking-in-a-booking"},"\ud83d\udfe3 Checking In a Booking"),(0,a.kt)("h2",{id:"-adding-optional-breakfast"},"\ud83d\udfe3 Adding Optional Breakfast"),(0,a.kt)("h2",{id:"-checking-out-a-booking--fixing-a-small-bug"},"\ud83d\udfe3 Checking Out a Booking (+ Fixing a Small Bug)"),(0,a.kt)("h2",{id:"-deleting-a-booking"},"\ud83d\udfe3 Deleting a Booking"),(0,a.kt)("h2",{id:"-authentication-user-login-with-supabase"},"\ud83d\udfe3 Authentication: User Login With Supabase"),(0,a.kt)("h2",{id:"-authorization-protecting-routes"},"\ud83d\udfe3 Authorization: Protecting Routes"),(0,a.kt)("h2",{id:"-user-logout"},"\ud83d\udfe3 User Logout"),(0,a.kt)("h2",{id:"-fixing-an-important-bug"},"\ud83d\udfe3 Fixing an Important Bug"),(0,a.kt)("h2",{id:"-building-the-sign-up-form"},"\ud83d\udfe3 Building the Sign Up Form"),(0,a.kt)("h2",{id:"-user-sign-up"},"\ud83d\udfe3 User Sign Up"),(0,a.kt)("h2",{id:"-authorization-on-supabase-protecting-database-rls"},"\ud83d\udfe3 Authorization on Supabase: Protecting Database (RLS)"),(0,a.kt)("h2",{id:"-building-the-app-header"},"\ud83d\udfe3 Building The App Header"),(0,a.kt)("h2",{id:"-updating-user-data-and-password"},"\ud83d\udfe3 Updating User Data and Password"),(0,a.kt)("h2",{id:"-implementing-dark-mode-with-css-variables"},"\ud83d\udfe3 Implementing Dark Mode With CSS Variables"),(0,a.kt)("h2",{id:"-building-the-dashboard-layout"},"\ud83d\udfe3 Building the Dashboard Layout"),(0,a.kt)("h2",{id:"-computing-recent-bookings-and-stays"},"\ud83d\udfe3 Computing Recent Bookings and Stays"),(0,a.kt)("h2",{id:"-displaying-statistics"},"\ud83d\udfe3 Displaying Statistics"),(0,a.kt)("h2",{id:"-displaying-a-line-chart-with-the-recharts-library"},"\ud83d\udfe3 Displaying a Line Chart With the Recharts Library"),(0,a.kt)("h2",{id:"-displaying-a-pie-chart"},"\ud83d\udfe3 Displaying a Pie Chart"),(0,a.kt)("h2",{id:"-displaying-stays-for-current-day"},"\ud83d\udfe3 Displaying Stays for Current Day"),(0,a.kt)("h2",{id:"-error-boundaries"},"\ud83d\udfe3 Error Boundaries"),(0,a.kt)("h2",{id:"-final-touches--fixing-bugs"},"\ud83d\udfe3 Final Touches + Fixing Bugs"))}c.isMDXComponent=!0}}]);