"use strict";(self.webpackChunkfundamentals=self.webpackChunkfundamentals||[]).push([[3563],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>d});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=o.createContext({}),c=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=c(e.components);return o.createElement(p.Provider,{value:n},e.children)},h="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),h=c(t),u=a,d=h["".concat(p,".").concat(u)]||h[u]||m[u]||r;return t?o.createElement(d,l(l({ref:n},s),{},{components:t})):o.createElement(d,l({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=u;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[h]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<r;c++)l[c]=t[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4013:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var o=t(7462),a=(t(7294),t(3905));const r={sidebar_position:16},l="Parent and child component communication",i={unversionedId:"4 React 18/16 parent and child  communication",id:"4 React 18/16 parent and child  communication",title:"Parent and child component communication",description:"what if a child component wanted to communicate with the parent component",source:"@site/docs/4 React 18/16 parent and child  communication.md",sourceDirName:"4 React 18",slug:"/4 React 18/16 parent and child  communication",permalink:"/fundamentals/4 React 18/16 parent and child  communication",draft:!1,tags:[],version:"current",sidebarPosition:16,frontMatter:{sidebar_position:16},sidebar:"tutorialSidebar",previous:{title:"Event handling",permalink:"/fundamentals/4 React 18/15 event handling"},next:{title:"Conditional rendering",permalink:"/fundamentals/4 React 18/17 conditional rendering"}},p={},c=[{value:"what if a child component wanted to communicate with the parent component",id:"what-if-a-child-component-wanted-to-communicate-with-the-parent-component",level:3},{value:"strangely we still use props but this time we pass in a reference to a function as props to the child component",id:"strangely-we-still-use-props-but-this-time-we-pass-in-a-reference-to-a-function-as-props-to-the-child-component",level:3},{value:"but what i want is when we click on the button, in the child component, i want to execute the function defined in the parent component",id:"but-what-i-want-is-when-we-click-on-the-button-in-the-child-component-i-want-to-execute-the-function-defined-in-the-parent-component",level:3},{value:"how to pass a parameter when calling the parent component function from the child component",id:"how-to-pass-a-parameter-when-calling-the-parent-component-function-from-the-child-component",level:3}],s={toc:c},h="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(h,(0,o.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"parent-and-child-component-communication"},"Parent and child component communication"),(0,a.kt)("h3",{id:"what-if-a-child-component-wanted-to-communicate-with-the-parent-component"},"what if a child component wanted to communicate with the parent component"),(0,a.kt)("p",null,"let's now move on to the next topic which is parent and child component communication"),(0,a.kt)("p",null,"earlier we have seen how a parent component can pass down props to its children components"),(0,a.kt)("p",null,"any data in the parent component when passed as props is available in the children components"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"now what if a child component wanted to communicate with the parent component")),(0,a.kt)("h3",{id:"strangely-we-still-use-props-but-this-time-we-pass-in-a-reference-to-a-function-as-props-to-the-child-component"},"strangely we still use props but this time we pass in a reference to a function as props to the child component"),(0,a.kt)("p",null,"let me help you understand better with an example"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"i'm going to create a new file called parentComponent.js")),(0,a.kt)("p",null,"within the file i'm going to define a new function component"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"export const parent component is equal to an arrow function")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"export const ParentComponent = () => {}\n")),(0,a.kt)("p",null,'within the component i\'m going to define a function greetParent which simply alerts "hello parent"'),(0,a.kt)("p",null,"so const greet parent is equal to a function where we alert hello parent i'm going to leave the jsx empty for now"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"export const ParentComponent = () => {\n  const greetParent = () => {\n    alert('Hello parent')\n  }\n}\n")),(0,a.kt)("p",null,"next i will create another file called childComponent.js"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"export const child component, and for the jsx i will add a button that says greet parent")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"export const ChildComponent = () => {\n  return (\n    <div>\n      <button>Greet Parent</button>\n    </div>\n  )\n}\n")),(0,a.kt)("p",null,"now back in the parent component i will include the child component in the jsx, so return child component"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { ChildComponent } from './ChildComponent'\n\nexport const ParentComponent = () => {\n  const greetParent = () => {\n    alert('Hello parent')\n  }\n\n  return <ChildComponent />\n}\n")),(0,a.kt)("p",null,"now for me i have a vs code plugin which automatically imports the child component"),(0,a.kt)("p",null,"if that doesn't work for you make sure you import child component from dot slash child component"),(0,a.kt)("p",null,"back in app component i will include the parent component in the jsx, so import parent component from dot slash components slash parent component"),(0,a.kt)("p",null,"and add it in the jsx"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"")),(0,a.kt)("p",null,"now if i save all the files and take a look at the browser"),(0,a.kt)("p",null,"if i zoom in a bit you should be able to see the button greet parent"),(0,a.kt)("p",null,"if i click on the button though nothing happens right now"),(0,a.kt)("h3",{id:"but-what-i-want-is-when-we-click-on-the-button-in-the-child-component-i-want-to-execute-the-function-defined-in-the-parent-component"},"but what i want is when we click on the button, in the child component, i want to execute the function defined in the parent component"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"basically the child component calls a parent components function")),(0,a.kt)("p",null,"as i mentioned already this is achieved using props"),(0,a.kt)("p",null,"the only difference this time is we pass the function itself as a prop to the child component"),(0,a.kt)("p",null,"so on the child component let's add a prop called greet handler and this is going to be equal to the greet parent function"),(0,a.kt)("p",null,"so we are passing a reference to the great parent function"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { ChildComponent } from './ChildComponent'\n\nexport const ParentComponent = () => {\n  const greetParent = () => {\n    alert('Hello parent')\n  }\n\n  return <ChildComponent greetHandler={greetParent} />\n}\n")),(0,a.kt)("p",null,"make note of the absence of the parentheses"),(0,a.kt)("p",null,"we can now grab hold of this function in our child component, specify props parameter, and on click of the button we call props dot greet handler"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"export const ChildComponent = (props) => {\n  return (\n    <div>\n      <button onClick={props.greetHandler}>Greet Parent</button>\n    </div>\n  )\n}\n")),(0,a.kt)("p",null,"let's save the file and see if this works"),(0,a.kt)("p",null,"i'm going to go back to the browser, click on the button and you can see the alert hello parent"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"so we have successfully called a function in the parent component from a button in the child component by passing the function as props to the child component")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"this is something you're going to do quite often in your applications so please make a note of it"))),(0,a.kt)("h3",{id:"how-to-pass-a-parameter-when-calling-the-parent-component-function-from-the-child-component"},"how to pass a parameter when calling the parent component function from the child component"),(0,a.kt)("p",null,"now let's see how to pass a parameter when calling the parent component function from the child component"),(0,a.kt)("p",null,"and this is where an arrow function in the return statement is really useful"),(0,a.kt)("p",null,"arrow function syntax is the simplest way to pass parameters from the child component to the parent component"),(0,a.kt)("p",null,"let me convert the onClick handler into an arrow function"),(0,a.kt)("p",null,"props.greetHandler with parentheses"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"export const ChildComponent = (props) => {\n  return (\n    <div>\n      <button onClick={() => props.greetHandler()}>Greet Parent</button>\n    </div>\n  )\n}\n")),(0,a.kt)("p",null,"now we can pass in any number of parameters to the greet handler"),(0,a.kt)("p",null,"to keep this simple let's pass one argument which is the string child"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"export const ChildComponent = (props) => {\n  return (\n    <div>\n      <button onClick={() => props.greetHandler('child')}>Greet Parent</button>\n    </div>\n  )\n}\n")),(0,a.kt)("p",null,"let's incorporate this argument in the greet parent function secret parent and we specify child name as a parameter"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { ChildComponent } from './ChildComponent'\n\nexport const ParentComponent = () => {\n  const greetParent = (childName) => {\n    alert('Hello parent')\n  }\n\n  return <ChildComponent greetHandler={greetParent} />\n}\n")),(0,a.kt)("p",null,"and in the alert statement\ntemplate literal syntax\nfrom es6 and we interpolate child name parameter"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { ChildComponent } from './ChildComponent'\n\nexport const ParentComponent = () => {\n  const greetParent = (childName) => {\n    alert(`Hello parent ${childName}`)\n  }\n\n  return <ChildComponent greetHandler={greetParent} />\n}\n")),(0,a.kt)("p",null,"if we save the files, head to the browser, click on the greet parent button\nyou should see the alert hello parent child"),(0,a.kt)("p",null,"child here is the argument from the\nchild component"),(0,a.kt)("p",null,"we have successfully passed a value from the child component to the parent\ncomponent"),(0,a.kt)("p",null,"so this is pretty much how you pass functions as props in react components\nand handle the parent and child communication"),(0,a.kt)("p",null,"let's now move on to the next important\ntopic which is conditional rendering"))}m.isMDXComponent=!0}}]);