"use strict";(self.webpackChunkfundamentals=self.webpackChunkfundamentals||[]).push([[4721],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||s;return a?n.createElement(g,i(i({ref:t},c),{},{components:a})):n.createElement(g,i({ref:t},c))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<s;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9359:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const s={sidebar_position:14},i="Working With Dates",o={unversionedId:"3 Javascript/variables-data-types-docs/dates-and-times",id:"3 Javascript/variables-data-types-docs/dates-and-times",title:"Working With Dates",description:"Dates and times are very important in any programming language. JavaScript has a Date object that represents a point in time and let's you do some basic operations on it.",source:"@site/docs/3 Javascript/01-variables-data-types-docs/14-dates-and-times.md",sourceDirName:"3 Javascript/01-variables-data-types-docs",slug:"/3 Javascript/variables-data-types-docs/dates-and-times",permalink:"/fundamentals/3 Javascript/variables-data-types-docs/dates-and-times",draft:!1,tags:[],version:"current",sidebarPosition:14,frontMatter:{sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"Number Challenge",permalink:"/fundamentals/3 Javascript/variables-data-types-docs/number-challenge"},next:{title:"Date Methods",permalink:"/fundamentals/3 Javascript/variables-data-types-docs/date-methods"}},l={},p=[{value:"Converting to a string",id:"converting-to-a-string",level:3},{value:"Specific dates",id:"specific-dates",level:3},{value:"Timestamps",id:"timestamps",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"working-with-dates"},"Working With Dates"),(0,r.kt)("p",null,"Dates and times are very important in any programming language. JavaScript has a ",(0,r.kt)("inlineCode",{parentName:"p"},"Date")," object that represents a point in time and let's you do some basic operations on it."),(0,r.kt)("p",null,"We can instantiate a ",(0,r.kt)("inlineCode",{parentName:"p"},"Date")," object with the ",(0,r.kt)("inlineCode",{parentName:"p"},"new")," keyword."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let d\nd = new Date() // Fri Jul 22 2022 08:35:10 GMT-0400\n")),(0,r.kt)("p",null,"If do not include any arguments, the Date object will be set to the current date and time and you will also get the timezone information. Sometimes you will need to specify the timezone because it can cause some weird issues."),(0,r.kt)("h3",{id:"converting-to-a-string"},"Converting to a string"),(0,r.kt)("p",null,"If we look at the type of the variable, it will show ",(0,r.kt)("strong",{parentName:"p"},"object"),". You can always convert it to a string using the ",(0,r.kt)("inlineCode",{parentName:"p"},"toString()")," method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'console.log(typeof d) // object\n\nd.toString() // "Fri Jul 22 2022 08:35:10 GMT-0400"\n\nconsole.log(typeof d) // string\n')),(0,r.kt)("h3",{id:"specific-dates"},"Specific dates"),(0,r.kt)("p",null,"If you want a specific date and time, you can pass in the year, month, day, hour, minute, second, and millisecond."),(0,r.kt)("p",null,"One caveat is that the month is 0-indexed, so January is 0 and December is 11."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"d = new Date(2022, 6, 10) // Fri Jul 10 2022 00:00:00 GMT-0400\n")),(0,r.kt)("p",null,"If you want to add a time, you can. Let's make it 12:30:00."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"d = new Date(2022, 6, 10, 12, 30, 0) // Fri Jul 10 2022 12:30:00 GMT-0400\n")),(0,r.kt)("p",null,"You can also pass in different date/time strings. You would use the actual month number here."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"d = new Date('2022-07-10T12:30:00') // July 10, 2022 12:30:00\nd = new Date('07/10/2022 12:30:00') // July 10, 2022 12:30:00\nd = new Date('2022-07-10 12:30:00') // July 10, 2022 12:30:00\n")),(0,r.kt)("p",null,"You can pass a date without time as well."),(0,r.kt)("p",null,"Note that if you use the ",(0,r.kt)("strong",{parentName:"p"},"YYYY-MM-DD")," format with hyphens, it may be one day off due to timezones."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"d = new Date('2022-07-10') // May be July 09, 2022\n")),(0,r.kt)("p",null,"If you use the ",(0,r.kt)("strong",{parentName:"p"},"MM-DD-YYYY")," format, it should not have this issue."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"d = new Date('07-10-2022') // July 10, 2022\n\n// Backslashes will also work\nd = new Date('07/10/2022') // July 10, 2022\n")),(0,r.kt)("h3",{id:"timestamps"},"Timestamps"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"UNIX timestamp")," is a system for describing a point in time. It is an integer that represents the number of seconds elapsed since January 1 1970 (An arbitrary date)."),(0,r.kt)("p",null,"The timestamp in JavaScript is expressed in milliseconds."),(0,r.kt)("p",null,"You can get the current timestamp using:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"Date.now() // 1658497991311\n")),(0,r.kt)("p",null,"To get the timestamp of a specific date, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"getTime()")," or the ",(0,r.kt)("inlineCode",{parentName:"p"},"valueOf")," method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"d = new Date('07/22/2022') // July 10, 2022\nd.getTime() // 1658497991311\nd.valueOf() // 1658497991311\n")),(0,r.kt)("p",null,"You can also create date objects from a timestamp."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"d = new Date(1658497991311) // Fri Jul 22 2022 08:35:10 GMT-0400\n")),(0,r.kt)("p",null,"The JavaScript timestamp is expressed in milliseconds. To convert it to seconds:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"Math.floor(Date.now() / 1000) // 1658498058\n")))}d.isMDXComponent=!0}}]);