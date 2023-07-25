"use strict";(self.webpackChunkfundamentals=self.webpackChunkfundamentals||[]).push([[2105],{3905:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>v});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),p=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},u=function(e){var a=p(e.components);return n.createElement(s.Provider,{value:a},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(t),m=r,v=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return t?n.createElement(v,l(l({ref:a},u),{},{components:t})):n.createElement(v,l({ref:a},u))}));function v(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=m;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4537:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=t(7462),r=(t(7294),t(3905));const i={sidebar_position:15},l="- Performing Operations",o={unversionedId:"8 Max JS/Section 11: Understanding the JavaScript Basics/Performing Operations",id:"8 Max JS/Section 11: Understanding the JavaScript Basics/Performing Operations",title:"- Performing Operations",description:"Performing Operations with JavaScript Values",source:"@site/docs/8 Max JS/Section 11: Understanding the JavaScript Basics/231. Performing Operations.md",sourceDirName:"8 Max JS/Section 11: Understanding the JavaScript Basics",slug:"/8 Max JS/Section 11: Understanding the JavaScript Basics/Performing Operations",permalink:"/fundamentals/8 Max JS/Section 11: Understanding the JavaScript Basics/Performing Operations",draft:!1,tags:[],version:"current",sidebarPosition:15,frontMatter:{sidebar_position:15},sidebar:"tutorialSidebar",previous:{title:"- Accessing Object Properties",permalink:"/fundamentals/8 Max JS/Section 11: Understanding the JavaScript Basics/Accessing Object Properties"},next:{title:"- Onwards To Custom Commands! (functions)",permalink:"/fundamentals/8 Max JS/Section 11: Understanding the JavaScript Basics/Onwards To Custom Commands"}},s={},p=[{value:"Performing Operations with JavaScript Values",id:"performing-operations-with-javascript-values",level:3},{value:"Working with Values in JavaScript",id:"working-with-values-in-javascript",level:3},{value:"Creating a Variable to Store Calculation Results",id:"creating-a-variable-to-store-calculation-results",level:3},{value:"Performing Calculations Dynamically",id:"performing-calculations-dynamically",level:3},{value:"Displaying the Result of the Calculation",id:"displaying-the-result-of-the-calculation",level:3},{value:"Working with Variables in JavaScript",id:"working-with-variables-in-javascript",level:3},{value:"Reassigning Values to Variables",id:"reassigning-values-to-variables",level:3},{value:"Order of Operations in JavaScript",id:"order-of-operations-in-javascript",level:3},{value:"Exploring JavaScript Features",id:"exploring-javascript-features",level:3}],u={toc:p},c="wrapper";function d(e){let{components:a,...t}=e;return(0,r.kt)(c,(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"--performing-operations"},"- Performing Operations"),(0,r.kt)("h3",{id:"performing-operations-with-javascript-values"},"Performing Operations with JavaScript Values"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Numbers, strings, arrays, and objects are important types of values frequently used in JavaScript programming.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Often, you will need to perform calculations or transformations on these data types."))),(0,r.kt)("h3",{id:"working-with-values-in-javascript"},"Working with Values in JavaScript"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"To perform operations on these values, we can use various JavaScript operators.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For example, we can derive how many years a user has been an adult by subtracting 18 from their age."))),(0,r.kt)("h3",{id:"creating-a-variable-to-store-calculation-results"},"Creating a Variable to Store Calculation Results"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We can create a new variable, such as ",(0,r.kt)("inlineCode",{parentName:"li"},"adultYears")," , to store the result of our calculation.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let age = 32\nlet userName = 'Max'\nlet hobbies = ['Sports', 'Cooking', 'Reading']\nlet job = {\ntitle: 'developer',\nplace: 'New York',\nsalary: 50000,\n}\nlet adultYears =\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The variable name should convey the meaning of the value it stores.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In this case, ",(0,r.kt)("inlineCode",{parentName:"p"},"adultYears")," will store the number of years the user has been an adult."))),(0,r.kt)("h3",{id:"performing-calculations-dynamically"},"Performing Calculations Dynamically"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Instead of hardcoding values, we can perform calculations dynamically.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For example, we can subtract 18 from the ",(0,r.kt)("inlineCode",{parentName:"p"},"age")," variable to calculate ",(0,r.kt)("inlineCode",{parentName:"p"},"adultYears")," .")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"JavaScript supports all basic math operations, including addition, subtraction, multiplication, and division."))),(0,r.kt)("h3",{id:"displaying-the-result-of-the-calculation"},"Displaying the Result of the Calculation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We can use the ",(0,r.kt)("inlineCode",{parentName:"li"},"alert")," function to display the result of our calculation.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let age = 32\nlet userName = 'Max'\nlet hobbies = ['Sports', 'Cooking', 'Reading']\nlet job = {\n  title: 'developer',\n  place: 'New York',\n  salary: 50000,\n}\nlet adultYears = age - 18\n\nalert(adultYears)\n")),(0,r.kt)("h3",{id:"working-with-variables-in-javascript"},"Working with Variables in JavaScript"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Variables are used to store values that can be used and manipulated in your code.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'The values stored in variables can change, hence the name "variable".')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You can reassign values to variables as needed."))),(0,r.kt)("h3",{id:"reassigning-values-to-variables"},"Reassigning Values to Variables"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If a variable's value changes, you can reassign the variable to the new value.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When reassigning a value, do not use the ",(0,r.kt)("inlineCode",{parentName:"p"},"let")," keyword again.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"let")," keyword is only used when first creating the variable."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let age = 32\nlet userName = 'Max'\nlet hobbies = ['Sports', 'Cooking', 'Reading']\nlet job = {\n  title: 'developer',\n  place: 'New York',\n  salary: 50000,\n}\n\nage = 45\nlet adultYears = age - 18\nalert(adultYears)\n")),(0,r.kt)("h3",{id:"order-of-operations-in-javascript"},"Order of Operations in JavaScript"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"JavaScript executes instructions step by step, line by line.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Therefore, if a variable's value changes before it is used in a calculation, the new value will be used, not the old value."))),(0,r.kt)("h3",{id:"exploring-javascript-features"},"Exploring JavaScript Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Playing around with different features of JavaScript can help you understand what you can do with the language.")))}d.isMDXComponent=!0}}]);