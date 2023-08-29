"use strict";(self.webpackChunkfundamentals=self.webpackChunkfundamentals||[]).push([[6949],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>h});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var c=a.createContext({}),s=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(c.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},k=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,o=e.originalType,c=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),p=s(t),k=l,h=p["".concat(c,".").concat(k)]||p[k]||d[k]||o;return t?a.createElement(h,i(i({ref:n},u),{},{components:t})):a.createElement(h,i({ref:n},u))}));function h(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=t.length,i=new Array(o);i[0]=k;var r={};for(var c in n)hasOwnProperty.call(n,c)&&(r[c]=n[c]);r.originalType=e,r[p]="string"==typeof e?e:l,i[1]=r;for(var s=2;s<o;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}k.displayName="MDXCreateElement"},221:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>s});var a=t(7462),l=(t(7294),t(3905));const o={sidebar_position:15},i="Event handling",r={unversionedId:"4 React 18/15 event handling",id:"4 React 18/15 event handling",title:"Event handling",description:"let's see how to handle events in react",source:"@site/docs/4 React 18/15 event handling.md",sourceDirName:"4 React 18",slug:"/4 React 18/15 event handling",permalink:"/fundamentals/4 React 18/15 event handling",draft:!1,tags:[],version:"current",sidebarPosition:15,frontMatter:{sidebar_position:15},sidebar:"tutorialSidebar",previous:{title:"Hooks at a glance",permalink:"/fundamentals/4 React 18/14 Hooks at a glance"},next:{title:"Parent and child component communication",permalink:"/fundamentals/4 React 18/16 parent and child  communication"}},c={},s=[{value:"let&#39;s see how to handle events in react",id:"lets-see-how-to-handle-events-in-react",level:3},{value:"The click event",id:"the-click-event",level:3},{value:"the event object",id:"the-event-object",level:3},{value:"using a unanimous arrow function",id:"using-a-unanimous-arrow-function",level:3}],u={toc:s},p="wrapper";function d(e){let{components:n,...t}=e;return(0,l.kt)(p,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"event-handling"},"Event handling"),(0,l.kt)("h3",{id:"lets-see-how-to-handle-events-in-react"},"let's see how to handle events in react"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"any application you build typically tends to have user interaction")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"when the user interacts with your app events are fired for example mouse clicks, mouse over, key press, change event, etc")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"let's see how to handle events in react"))),(0,l.kt)("h3",{id:"the-click-event"},"The click event"),(0,l.kt)("p",null,"we will focus on just the ",(0,l.kt)("inlineCode",{parentName:"p"},"click event")," but the concept holds good for other events as well"),(0,l.kt)("p",null,"in fact we've already had a look at the click event a few minutes ago but let's look at it in a bit more detail"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"let's begin by creating a new component"))),(0,l.kt)("p",null,"so in the components folder new file called ",(0,l.kt)("inlineCode",{parentName:"p"},"ClickHandler.js")),(0,l.kt)("p",null,"here define a new component, export const click handler and this is going to be equal to an arrow function"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"// ClickHandler.js\n\nexport const ClickHandler = () => {}\n")),(0,l.kt)("p",null,"in the jsx i'm going to add a div tag and a button within the div tag, click"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"// ClickHandler.js\n\nexport const ClickHandler = () => {\n  return (\n    <div>\n      <button>Click</button>\n    </div>\n  )\n}\n")),(0,l.kt)("p",null,"when the user clicks on this button a click event is fired,"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"our goal is to capture that click event and execute some basic code"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"the first point you have to make note of is react events are named using camel case rather than lowercase"))),(0,l.kt)("p",null,"in plain html and vanilla javascript you would specify on click that is lowercase but in react it has to be ",(0,l.kt)("inlineCode",{parentName:"p"},"camel cased")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"export const ClickHandler = () => {\n  return (\n    <div>\n      <button onClick>Click</button>\n    </div>\n  )\n}\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"the second point is with jsx you pass a function as the event handler rather than a string")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"so instead of a string click handler with parentheses we're going to have click handler ",(0,l.kt)("inlineCode",{parentName:"li"},"within curly braces"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"export const ClickHandler = () => {\n  return (\n    <div>\n      <button onClick={clickHandler}>Click</button>\n    </div>\n  )\n}\n")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"now let's define this ",(0,l.kt)("inlineCode",{parentName:"li"},"ClickHandler function"))),(0,l.kt)("p",null,"remember in javascript it is very much possible to define a function within a function"),(0,l.kt)("p",null,"so inside the function component we can define our click handler"),(0,l.kt)("p",null,"const click handler is equal to an arrow function and within the function body we simply log to the console button clicked"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"export const ClickHandler = () => {\n  const clickHandler = () => {\n    console.log('Button clicked')\n  }\n  return (\n    <div>\n      <button onClick={clickHandler}>Click</button>\n    </div>\n  )\n}\n")),(0,l.kt)("p",null,"let's save"),(0,l.kt)("p",null,"this included in App component and import the component at the top"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"// App.js\n\nimport './App.css'\nimport { ClickHandler } from './components/ClickHandler'\n// import { Greet } from './components/Greet'\n// import { Message } from './components/Message'\n\nfunction App() {\n  return (\n    <div className='App'>\n      {/* <Greet name='Bruce' heroName='Batman' />\n      <Greet name='Clark' heroName='Superman'>\n        <button>Action</button>\n      </Greet>\n      <Greet name='Diana' heroName='Wonder Woman'>\n        <p>This is children props</p>\n      </Greet> */}\n      {/* <Message /> */}\n      <ClickHandler />\n    </div>\n  )\n}\n\nexport default App\n")),(0,l.kt)("p",null,"and head back to the browser to test this out in the browse"),(0,l.kt)("p",null,"you can see the click button if i open the developer tools console and click on the button you should see the message button clicked in the console"),(0,l.kt)("p",null,"our click event handling works as expected"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"when assigning an event handler make sure you don't add parentheses, if you do the function gets called when the component renders and that is not what we want")),(0,l.kt)("h3",{id:"the-event-object"},"the event object"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"what you should also know is that the event handler automatically receives the event assets argument")),(0,l.kt)("p",null,"so we can specify event as a parameter to click handler and log it to the console"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"export const ClickHandler = () => {\n  const clickHandler = event => {\n    console.log('Button clicked', event)\n  }\n  return (\n    <div>\n      <button onClick={clickHandler}>Click</button>\n    </div>\n  )\n}\n")),(0,l.kt)("p",null,"in the browser click, and we see all the details about the event"),(0,l.kt)("h3",{id:"using-a-unanimous-arrow-function"},"using a unanimous arrow function"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"it is also possible to pass additional arguments if necessary")),(0,l.kt)("p",null,"for example i can add another button, so copy paste, that says click 5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"export const ClickHandler = () => {\n  const clickHandler = event => {\n    console.log('Button clicked', event)\n  }\n  return (\n    <div>\n      <button onClick={clickHandler}>Click</button>\n      <button onClick={clickHandler}>Click 5</button>\n    </div>\n  )\n}\n")),(0,l.kt)("p",null,"but this time the on click handler will be an arrow function, this function receives the event as an argument"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"export const ClickHandler = () => {\n  const clickHandler = event => {\n    console.log('Button clicked', event)\n  }\n  return (\n    <div>\n      <button onClick={clickHandler}>Click</button>\n      <button onClick={event => clickHandler}>Click 5</button>\n    </div>\n  )\n}\n")),(0,l.kt)("p",null,"we then call click handler, so parentheses, passing in the same event, but also a second argument, let's pass in a value of five"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"export const ClickHandler = () => {\n  const clickHandler = event => {\n    console.log('Button clicked', event)\n  }\n  return (\n    <div>\n      <button onClick={clickHandler}>Click</button>\n      <button onClick={event => clickHandler(event, 5)}>Click 5</button>\n    </div>\n  )\n}\n")),(0,l.kt)("p",null,"in the click handler definition we can add a new parameter that says count and we set a default value of one, and log count to the console"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"export const ClickHandler = () => {\n  const clickHandler = (event, count = 1) => {\n    console.log('Button clicked', count, event)\n  }\n  return (\n    <div>\n      <button onClick={clickHandler}>Click</button>\n      <button onClick={event => clickHandler(event, 5)}>Click 5</button>\n    </div>\n  )\n}\n")),(0,l.kt)("p",null,"if we now head to the browser, click on the first button we see a value of 1 and the mouse click event"),(0,l.kt)("p",null,"click 5 we see the value 5 and the same mouse click event"),(0,l.kt)("p",null,"this is pretty much how you handle events in a function component"))}d.isMDXComponent=!0}}]);