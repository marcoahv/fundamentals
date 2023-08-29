"use strict";(self.webpackChunkfundamentals=self.webpackChunkfundamentals||[]).push([[9758],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),h=o,k=m["".concat(l,".").concat(h)]||m[h]||c[h]||s;return n?a.createElement(k,r(r({ref:t},u),{},{components:n})):a.createElement(k,r({ref:t},u))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,r=new Array(s);r[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:o,r[1]=i;for(var p=2;p<s;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3958:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const s={sidebar_position:13},r="State",i={unversionedId:"4 React 18/13 state",id:"4 React 18/13 state",title:"State",description:"props vs state",source:"@site/docs/4 React 18/13 state.md",sourceDirName:"4 React 18",slug:"/4 React 18/13 state",permalink:"/fundamentals/4 React 18/13 state",draft:!1,tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13},sidebar:"tutorialSidebar",previous:{title:"Props",permalink:"/fundamentals/4 React 18/12 props"},next:{title:"Hooks at a glance",permalink:"/fundamentals/4 React 18/14 Hooks at a glance"}},l={},p=[{value:"props vs state",id:"props-vs-state",level:3},{value:"useState hook",id:"usestate-hook",level:3},{value:"let&#39;s look at an example of how state works in the component <strong>-&gt;</strong>",id:"lets-look-at-an-example-of-how-state-works-in-the-component--",level:3},{value:"now here is our new requirement <strong>-&gt;</strong>",id:"now-here-is-our-new-requirement--",level:3},{value:"<code>let&#39;s create a button and on click of that button change the message</code>",id:"lets-create-a-button-and-on-click-of-that-button-change-the-message",level:3},{value:"this example demonstrates what exactly state is in react <strong>-&gt;</strong>",id:"this-example-demonstrates-what-exactly-state-is-in-react--",level:3}],u={toc:p},m="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"state"},"State"),(0,o.kt)("h3",{id:"props-vs-state"},"props vs state"),(0,o.kt)("p",null,"now we have seen that every react\ncomponent returns jsx which describes the user interface"),(0,o.kt)("p",null,"and a minute ago we have seen that it is possible to influence what is rendered\non the screen using props"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"as it turns out there is a second way to influence what is rendered on the screen and that is the state of the component")),(0,o.kt)("p",null,"let's quickly review what we have learned about props and make a comparison by learning about state"),(0,o.kt)("p",null,"after that let's dive into an example to get a better understanding of how state\nworks in react components"),(0,o.kt)("p",null,"let's take a look at the comparison"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"the first one is that ",(0,o.kt)("inlineCode",{parentName:"li"},"props get passed to the component")," whereas ",(0,o.kt)("inlineCode",{parentName:"li"},"state is managed within the component"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"analogy for this would be ",(0,o.kt)("inlineCode",{parentName:"li"},"function parameters")," against ",(0,o.kt)("inlineCode",{parentName:"li"},"variables declared within the function body"))),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"because a parent usually passes down the props to the child component ",(0,o.kt)("inlineCode",{parentName:"li"},"props are immutable"),", the parent owns the props and cannot be changed by the children components")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"state on the other hand is managed within the component and hence ",(0,o.kt)("inlineCode",{parentName:"li"},"the component has full control to change the state"))),(0,o.kt)("h3",{id:"usestate-hook"},"useState hook"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"now props are accessed using the ",(0,o.kt)("inlineCode",{parentName:"li"},"props parameter")," on the function component, however state is managed a little different, the simplest way to manage state is using a function that the react library provides which is the useState function also referred to as ",(0,o.kt)("inlineCode",{parentName:"li"},"useState hook"))),(0,o.kt)("h3",{id:"lets-look-at-an-example-of-how-state-works-in-the-component--"},"let's look at an example of how state works in the component ",(0,o.kt)("strong",{parentName:"h3"},"->")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"within the components folder i'm going to create a new file called ",(0,o.kt)("inlineCode",{parentName:"li"},"Message.js"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"src / components / Message.js\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"within the file i'm going to create a function component")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"let me copy paste the code from Greet.js and make the necessary modifications")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"i'm going to change the function name to Message")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"the jsx we return the text ",(0,o.kt)("inlineCode",{parentName:"p"},"Greet visitor")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"// Message.js\n\nexport const Message = props => {\n  return <h1>Welcome Visitor</h1>\n}\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"let me import the component in App.js")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"App.js\n\nimport './App.css'\nimport { Greet } from './components/Greet'\nimport { Message } from './components/Message'\n\nfunction App() {\n  return (\n    <div className='App'>\n      <Greet\n        name='Bruce'\n        heroName='Batman'\n      />\n      <Greet\n        name='Clark'\n        heroName='Superman'>\n        <button>Action</button>\n      </Greet>\n      <Greet\n        name='Diana'\n        heroName='Wonder Woman'>\n        <p>This is children props</p>\n      </Greet>\n    </div>\n  )\n}\n\nexport default App\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"comment out rest of the components and include the message component")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import './App.css'\n// import { Greet } from './components/Greet'\nimport { Message } from './components/Message'\n\nfunction App() {\n  return (\n    <div className='App'>\n      {/* <Greet name='Bruce' heroName='Batman' />\n      <Greet name='Clark' heroName='Superman'>\n        <button>Action</button>\n      </Greet>\n      <Greet name='Diana' heroName='Wonder Woman'>\n        <p>This is children props</p>\n      </Greet> */}\n      <Message />\n    </div>\n  )\n}\n\nexport default App\n")),(0,o.kt)("p",null,"if we take a look at the browser you should see the text welcome visitor"),(0,o.kt)("h3",{id:"now-here-is-our-new-requirement--"},"now here is our new requirement ",(0,o.kt)("strong",{parentName:"h3"},"->")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"we need to have a subscribe button right below the text")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"when we click on the button the text being displayed should change from welcome visitor to thank you for subscribing")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"now if the text message were to be sent from app.js as a prop it would not work as props are immutable, once the message is set to welcome visitor it can never be changed from the message component"))),(0,o.kt)("p",null,"-",(0,o.kt)("inlineCode",{parentName:"p"},"so the solution is to use component state")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"let's see what are the steps involved")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"step one is to ",(0,o.kt)("inlineCode",{parentName:"li"},"import the use state function")," from react,")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"so at the top import use state from react")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"// Message.js\n\nimport { useState } from 'react'\n\nexport const Message = props => {\n  return <h1>Welcome Visitor</h1>\n}\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"step two invoke useState within the component,")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"so ",(0,o.kt)("inlineCode",{parentName:"li"},"useState()")," with parentheses")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"// Message.js\n\nimport { useState } from 'react'\n\nexport const Message = props => {\n  useState()\n  return <h1>Welcome Visitor</h1>\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"now this function ",(0,o.kt)("inlineCode",{parentName:"p"},"returns two values")," which we can store in two constants of an array")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"const array message comma set message"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"// Message.js\n\nimport { useState } from 'react'\n\nexport const Message = props => {\n  const [message, setMessage] = useState()\n  return <h1>Welcome Visitor</h1>\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the syntax is called ",(0,o.kt)("inlineCode",{parentName:"li"},"array destructuring")," in case you want to look it up for better understanding")),(0,o.kt)("p",null,"here ",(0,o.kt)("inlineCode",{parentName:"p"},"message is a simple variable")," we can call it anything but message\nmakes sense in this example"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"setMessage is a function that can be used to update the message variable")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},". now useState also accepts an initial value as its argument this is going to be ",(0,o.kt)("inlineCode",{parentName:"li"},"welcome visitor")," to begin with")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"step 3, instead of ",(0,o.kt)("inlineCode",{parentName:"li"},"<h1>welcome visitor</h1>")," we bind the state value in the jsx, ",(0,o.kt)("inlineCode",{parentName:"li"},"<h1>{message}</h1>"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"// Message.js\n\nimport { useState } from 'react'\n\nexport const Message = props => {\n  const [message, setMessage] = useState('Welcome visitor')\n  return <h1>{message}</h1>\n}\n")),(0,o.kt)("p",null,"if we take a look at the browser we see no change in the ui"),(0,o.kt)("p",null,"however since we are using state to render the message we now have the ability to change the message so"),(0,o.kt)("h3",{id:"lets-create-a-button-and-on-click-of-that-button-change-the-message"},(0,o.kt)("inlineCode",{parentName:"h3"},"let's create a button and on click of that button change the message")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"for step 4 add an html button element")),(0,o.kt)("p",null,"before we do that ",(0,o.kt)("inlineCode",{parentName:"p"},"create an enclosing div tag")," and then below the h1 tag ",(0,o.kt)("inlineCode",{parentName:"p"},"add a button")," with text subscribe"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useState } from 'react'\n\nexport const Message = props => {\n  const [message, setMessage] = useState('Welcome Visitor')\n  return (\n    <div>\n      <h1>{message}</h1>\n      <button>Subscribe</button>\n    </div>\n  )\n}\n")),(0,o.kt)("p",null,"let's quickly take a look at the browser and see if it works"),(0,o.kt)("p",null,"the button is now placed right below the message"),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"the fifth and final step is to listen to the click event on this button and change the message")),(0,o.kt)("p",null,"(we will take a detailed look at event handling in a few minutes but this will be a glimpse into how a click event on an element is handled)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"on the button we add the ",(0,o.kt)("inlineCode",{parentName:"li"},"onClick")," attribute")),(0,o.kt)("p",null,"(very important that it is camel cased)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"to this event we assign a handler and this again is going to be within ",(0,o.kt)("inlineCode",{parentName:"li"},"curly braces"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useState } from 'react'\n\nexport const Message = (props) => {\n  const [message, setMessage] = useState('Welcome Visitor')\n  return (\n    <div>\n      <h1>{message}</h1>\n      <button onClick={}>Subscribe</button>\n    </div>\n  )\n}\n\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"here we're going to have ",(0,o.kt)("inlineCode",{parentName:"li"},"an arrow function")," in the function body we ",(0,o.kt)("inlineCode",{parentName:"li"},"call the setMessage function")," returned from useState")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useState } from 'react'\n\nexport const Message = props => {\n  const [message, setMessage] = useState('Welcome Visitor')\n  return (\n    <div>\n      <h1>{message}</h1>\n      <button onClick={() => setMessage()}>Subscribe</button>\n    </div>\n  )\n}\n")),(0,o.kt)("p",null,"to this setMessage function ",(0,o.kt)("inlineCode",{parentName:"p"},"we can pass in a value")," and react will update the message variable with that value let's pass in thank you for subscribing"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useState } from 'react'\n\nexport const Message = props => {\n  const [message, setMessage] = useState('Welcome Visitor')\n  return (\n    <div>\n      <h1>{message}</h1>\n      <button onClick={() => setMessage('Thank you for subscribing!')}>Subscribe</button>\n    </div>\n  )\n}\n")),(0,o.kt)("p",null,'if we save the file and take a look at the browser you should see the text "welcome visitor" and when i click on the subscribe button the text changes to "thank you for subscribing"'),(0,o.kt)("h3",{id:"this-example-demonstrates-what-exactly-state-is-in-react--"},"this example demonstrates what exactly state is in react ",(0,o.kt)("strong",{parentName:"h3"},"->")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"a state is nothing but a variable that is maintained inside a component")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"unlike props state can be changed within the component")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"whenever the state changes react will automatically update the ui to reflect the updated state value"))),(0,o.kt)("p",null,"i hope you now have a slightly better understanding of props state and how they're used in react"))}c.isMDXComponent=!0}}]);