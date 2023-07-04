"use strict";(self.webpackChunkfundamentals=self.webpackChunkfundamentals||[]).push([[602],{3905:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>h});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=n.createContext({}),c=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},u=function(e){var a=c(e.components);return n.createElement(i.Provider,{value:a},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(t),m=r,h=p["".concat(i,".").concat(m)]||p[m]||d[m]||s;return t?n.createElement(h,l(l({ref:a},u),{},{components:t})):n.createElement(h,l({ref:a},u))}));function h(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var s=t.length,l=new Array(s);l[0]=m;var o={};for(var i in a)hasOwnProperty.call(a,i)&&(o[i]=a[i]);o.originalType=e,o[p]="string"==typeof e?e:r,l[1]=o;for(var c=2;c<s;c++)l[c]=t[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4219:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var n=t(7462),r=(t(7294),t(3905));const s={sidebar_position:3},l="Variables",o={unversionedId:"3 Javascript/variables-data-types-docs/variables",id:"3 Javascript/variables-data-types-docs/variables",title:"Variables",description:"Variables are containers for pieces of data. That data can be one of many different data types. It's important to know and understand those data types and we will go over them in the next lesson, but right now, we are just going to look at the syntax for creating and re-assigning variables as well as the differences between how we declare them.",source:"@site/docs/3 Javascript/01-variables-data-types-docs/03-variables.md",sourceDirName:"3 Javascript/01-variables-data-types-docs",slug:"/3 Javascript/variables-data-types-docs/variables",permalink:"/fundamentals/3 Javascript/variables-data-types-docs/variables",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Comments & Shortcuts",permalink:"/fundamentals/3 Javascript/variables-data-types-docs/comments-shortcuts"},next:{title:"Data Types",permalink:"/fundamentals/3 Javascript/variables-data-types-docs/data-types"}},i={},c=[{value:"Declaring a Variable",id:"declaring-a-variable",level:3},{value:"Variable Naming Conventions",id:"variable-naming-conventions",level:3},{value:"Multi-Word Variables",id:"multi-word-variables",level:3},{value:"Reassigning Values",id:"reassigning-values",level:3},{value:"Constants",id:"constants",level:3},{value:"Declaring multiple values at once",id:"declaring-multiple-values-at-once",level:3},{value:"Let or Const - Which to Use?",id:"let-or-const---which-to-use",level:3}],u={toc:c},p="wrapper";function d(e){let{components:a,...t}=e;return(0,r.kt)(p,(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"variables"},"Variables"),(0,r.kt)("p",null,"Variables are containers for pieces of data. That data can be one of many different data types. It's important to know and understand those data types and we will go over them in the next lesson, but right now, we are just going to look at the syntax for creating and re-assigning variables as well as the differences between how we declare them."),(0,r.kt)("h3",{id:"declaring-a-variable"},"Declaring a Variable"),(0,r.kt)("p",null,"In JavScript, we need to first declare a variable with one of three keywords"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"var"),(0,r.kt)("li",{parentName:"ul"},"let"),(0,r.kt)("li",{parentName:"ul"},"const")),(0,r.kt)("p",null,"In modern JavaScript, you probably won't see ",(0,r.kt)("inlineCode",{parentName:"p"},"var")," very much. ",(0,r.kt)("inlineCode",{parentName:"p"},"var")," was the original declaration, but in ",(0,r.kt)("inlineCode",{parentName:"p"},"ES2015")," also known as ",(0,r.kt)("inlineCode",{parentName:"p"},"ES6"),", which was a huge update to the language, they introduced ",(0,r.kt)("inlineCode",{parentName:"p"},"let")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"const"),". One of the reasons for this is because of ",(0,r.kt)("inlineCode",{parentName:"p"},"block scoping"),". Now, I'm not going to talk about things like scope right now, because we haven't gotten to functions or anything, so if I talk about scope it'll go right over a lot of people's heads. I just want to focus on how we declare and assign variables and also work with constants. Just know that on the ",(0,r.kt)("inlineCode",{parentName:"p"},"global scope"),", meaning not inside of a function or any kind of control structure, ",(0,r.kt)("inlineCode",{parentName:"p"},"var")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"let")," work in a very similar same way. ",(0,r.kt)("inlineCode",{parentName:"p"},"const")," is a bit different. I'll be using let and const throughout the course, unless there is a specific reason for me to use var."),(0,r.kt)("p",null,"So let's say that we want a variable called firstName and lastName. Remember that ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," data types need to be wraped in either single or double quotes. You can also use backticks. Backticks (","`",") have a special use which I'll talk about later."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let firstName = 'John'\nlet lastName = 'Doe'\n\n// We can do a console.log to show the value\nconsole.log(firstName, lastName)\n")),(0,r.kt)("p",null,"We can store other data types such as numbers:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let age = 30\n\nconsole.log(age)\n")),(0,r.kt)("h3",{id:"variable-naming-conventions"},"Variable Naming Conventions"),(0,r.kt)("p",null,"So different languages have different rules and conventions when it comes to naming things. There are some rules that you have to follow when it comes to the formatting of your variable names."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Only letters, numbers, underscores and dollar signs"),(0,r.kt)("li",{parentName:"ul"},"Can not start with a number")),(0,r.kt)("p",null,"I wouldn't suggest starting your variable names with a dollar sign or an underscore either."),(0,r.kt)("h3",{id:"multi-word-variables"},"Multi-Word Variables"),(0,r.kt)("p",null,"When it comes to variables as well as functions and classes with multiple words, it's really up to you on how you format the case. What you'll typically see in JavaScript and what I usually do is ",(0,r.kt)("inlineCode",{parentName:"p"},"camelCase"),". This where we start with a lowercase letter but every word after that starts with an uppercase letter."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let firstName = 'John'\n")),(0,r.kt)("p",null,"You may also see underscores like this"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let first_name = 'Sara'\n")),(0,r.kt)("p",null,"There's also pascal case, where the first word is also capitalized. You typically see this for class names in object oriented programming."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let FirstName = 'Tom'\n")),(0,r.kt)("p",null,"You might also see all lowercase, which I wouldn't recommend"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let firtstname = 'Bob'\n")),(0,r.kt)("h3",{id:"reassigning-values"},"Reassigning Values"),(0,r.kt)("p",null,"Alright, so if we want to reassign a value we can do that here since we're using var. When it comes to directly reassigning a primitive type like a number, you can't use ",(0,r.kt)("inlineCode",{parentName:"p"},"const"),". Const stands for ",(0,r.kt)("strong",{parentName:"p"},"constant"),". So you have to use ",(0,r.kt)("inlineCode",{parentName:"p"},"var")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"let")," if you want to re-assign a variable value. Again, you're not going to see ",(0,r.kt)("inlineCode",{parentName:"p"},"var")," very much, so I will use ",(0,r.kt)("inlineCode",{parentName:"p"},"let")," for this."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let x = 100\n")),(0,r.kt)("p",null,"Let's reassign x to 200"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"x = 200\n")),(0,r.kt)("p",null,"Now, in some cases, you may want to simply declare a variable and not assign a value to it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let score\n")),(0,r.kt)("p",null,"In this case, score would be equal to ",(0,r.kt)("strong",{parentName:"p"},"undefined"),", which is actually one of the seven primitive data types that we're gonna talk about in the next video."),(0,r.kt)("p",null,"If I want to assign a value to it at any time, I can."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"score = 1\n")),(0,r.kt)("p",null,"One reason you might do this is because you have a conditional that says if score equals one thing, do this, if another, then do something else. Here is an example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let score\n\nif (userScores) {\n  score += 1\n} else {\n  score -= 0\n}\n")),(0,r.kt)("h3",{id:"constants"},"Constants"),(0,r.kt)("p",null,"Alright, let's look at ",(0,r.kt)("inlineCode",{parentName:"p"},"const"),", which works a bit differently than ",(0,r.kt)("inlineCode",{parentName:"p"},"let")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"var"),". So if I declare a name like this..."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const x = 100\n")),(0,r.kt)("p",null,"and then I try and re-assign that value"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"x = 200 // Results in error\n")),(0,r.kt)("p",null,"I get an error. You can't directly re-assign a value to a constant. You also can't initialize a constant as undefined."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const score1; // Results in error\n")),(0,r.kt)("p",null,"That will also throw an error. It has to be declared with a value."),(0,r.kt)("p",null,"Now where this can be a little confusing is when we use ",(0,r.kt)("inlineCode",{parentName:"p"},"const")," with values that are not primitive like objects or reference types such as ",(0,r.kt)("inlineCode",{parentName:"p"},"arrays")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"object literals"),". In that case we can't directly re-assign, but we can change them."),(0,r.kt)("p",null,"So let's say that we have an array"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const arr = [1, 2, 3, 4]\n")),(0,r.kt)("p",null,"What I can't do is re-assign"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"arr = [1, 2, 3, 4, 5] // Results in error\n")),(0,r.kt)("p",null,"But I can for instance, add to that array with the push method. I can even take a specific index of the array and change the value that way."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"arr.push(5) // [1, 2, 3, 4, 5]\narr[0] = 200 // [200, 2, 3, 4, 5]\n")),(0,r.kt)("p",null,"We can do the same type of thing with object literals. Now I know some of you have no clue what an object literal is, we'll get to that, but I just want to show you that the object itself can be manipulated, even with const."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const person = {\n  name: 'Brad',\n}\n\nperson.name = 'John'\nperson.email = 'john@gmail.com'\n\nconsole.log(person)\n\n/*\nResults in...\n{\n  name: 'John',\n  email: 'john@gmail.com'\n}\n*/\n")),(0,r.kt)("h3",{id:"declaring-multiple-values-at-once"},"Declaring multiple values at once"),(0,r.kt)("p",null,"We don't have to declare variables line by line, we are able to declare multiple values at once. With let, we can initialize, with const, we have to assign a value."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let a, b, c\nconst d = 10,\n  e = 20,\n  f = 30\n")),(0,r.kt)("h3",{id:"let-or-const---which-to-use"},"Let or Const - Which to Use?"),(0,r.kt)("p",null,"So how do we figure out which to use when it comes to let and const or even var? We'll it comes down to preference. What I like to do is always use ",(0,r.kt)("inlineCode",{parentName:"p"},"const")," unless it's a primitive value that I think I may need to re-assign at some point. The score example above is a good example. That score number will be re-assigned throughout the game. So I would use let. You'll find in most cases that you don't need to explicitly re-assign values. We're usually dealing objects where we manipulate them but don't re-assign them."),(0,r.kt)("p",null,"Some people do the opposite and always use ",(0,r.kt)("inlineCode",{parentName:"p"},"let")," no matter what. Which is fine, but I think using ",(0,r.kt)("inlineCode",{parentName:"p"},"const")," is a bit more robust because you know your values can't be re-assigned my mistake. So, I would suggest ",(0,r.kt)("inlineCode",{parentName:"p"},"const")," unless you know you need to either initialize as undefined or re-assign. It's all preference though."))}d.isMDXComponent=!0}}]);