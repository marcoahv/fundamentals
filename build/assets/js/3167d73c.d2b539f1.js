"use strict";(self.webpackChunkfundamentals=self.webpackChunkfundamentals||[]).push([[7959],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),i=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=i(e.components);return a.createElement(u.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=i(n),h=r,f=p["".concat(u,".").concat(h)]||p[h]||c[h]||o;return n?a.createElement(f,l(l({ref:t},m),{},{components:n})):a.createElement(f,l({ref:t},m))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=h;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:r,l[1]=s;for(var i=2;i<o;i++)l[i]=n[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3071:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:20},l="Forms",s={unversionedId:"4 React 18/20 forms",id:"4 React 18/20 forms",title:"Forms",description:"create a form with regular html",source:"@site/docs/4 React 18/20 forms.md",sourceDirName:"4 React 18",slug:"/4 React 18/20 forms",permalink:"/fundamentals/4 React 18/20 forms",draft:!1,tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Styling",permalink:"/fundamentals/4 React 18/19 styling"},next:{title:"HTTP GET & POST request",permalink:"/fundamentals/4 React 18/21 HTTP GET & POST request"}},u={},i=[{value:"create a form with regular html",id:"create-a-form-with-regular-html",level:3},{value:"manage the form with react",id:"manage-the-form-with-react",level:3},{value:"handling the onChange event",id:"handling-the-onchange-event",level:3},{value:"how to submit the form data",id:"how-to-submit-the-form-data",level:3},{value:"execute a javascript function that handles the submission",id:"execute-a-javascript-function-that-handles-the-submission",level:3}],m={toc:i},p="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"forms"},"Forms"),(0,r.kt)("h3",{id:"create-a-form-with-regular-html"},"create a form with regular html"),(0,r.kt)("p",null,"all right for our next topic we are going to learn the basics of working with forms in react"),(0,r.kt)("p",null,"we will see how to capture input from an input html element and have the data\navailable for form submission"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"i'm going to begin by creating a new file in the components folder, ",(0,r.kt)("inlineCode",{parentName:"li"},"Form.js"))),(0,r.kt)("p",null,"within the file create a function\ncomponent export const form is equal to an arrow function"),(0,r.kt)("p",null,"for the jsx let's start with a form element\nso return the form tag"),(0,r.kt)("p",null,"within the form tag add a div tag to group together a label and input"),(0,r.kt)("p",null,"the label is going to be username and we add a corresponding input, type is equal to text"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"export const Form = () => {\n  return (\n    <form>\n      <div>\n        <label>Username</label>\n        <input type='text' />\n      </div>\n    </form>\n  )\n}\n")),(0,r.kt)("p",null,"if we include this component in app component"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"import the component at the top")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"")),(0,r.kt)("p",null,"save the file and take a look at the browser"),(0,r.kt)("p",null,"you should be able to see the label and the input field"),(0,r.kt)("h3",{id:"manage-the-form-with-react"},"manage the form with react"),(0,r.kt)("p",null,"right now though the form is regular html"),(0,r.kt)("p",null,"we want to manage it with react"),(0,r.kt)("p",null,"to do that the first step is to create a state variable to handle the value and change in value of this input element"),(0,r.kt)("p",null,"so in form.js, at the top import useState from react"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { useState } from 'react'\n\nexport const Form = () => {\n  return (\n    <form>\n      <div>\n        <label>Username</label>\n        <input type='text' />\n      </div>\n    </form>\n  )\n}\n")),(0,r.kt)("p",null,"within the component\nlet's create a state variable name"),(0,r.kt)("p",null,"the setter function is set user name"),(0,r.kt)("p",null,"this is going to be equal to the use\nstate function with an initial value of empty string"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { useState } from 'react'\n\nexport const Form = () => {\n  const [username, setUsername] = useState(' ')\n  return (\n    <form>\n      <div>\n        <label>Username</label>\n        <input type='text' />\n      </div>\n    </form>\n  )\n}\n")),(0,r.kt)("p",null,"now for the second step on the input element we assign username\nto the value attribute so value is equal to username state\nvariable"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { useState } from 'react'\n\nexport const Form = () => {\n  const [username, setUsername] = useState(' ')\n  return (\n    <form>\n      <div>\n        <label>Username</label>\n        <input type='text' value={username} />\n      </div>\n    </form>\n  )\n}\n")),(0,r.kt)("p",null,"now if you save the file and go back to the browser\ntry type in a username"),(0,r.kt)("h3",{id:"handling-the-onchange-event"},"handling the onChange event"),(0,r.kt)("p",null,"you're going to find out that the input\ndoesn't reflect the changes which brings us to the third step"),(0,r.kt)("p",null,"handling the onChange event on the input element let's listen to the\nonchange event"),(0,r.kt)("p",null,"and to this we assign an arrow function"),(0,r.kt)("p",null,"the function automatically receives the change event as an argument"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { useState } from 'react'\n\nexport const Form = () => {\n  const [username, setUsername] = useState(' ')\n  return (\n    <form>\n      <div>\n        <label>Username</label>\n        <input type='text' value={username} onChange={(event) =>}/>\n      </div>\n    </form>\n  )\n}\n")),(0,r.kt)("p",null,"we can use that event to update the username state variable"),(0,r.kt)("p",null,"so call set user name\npassing in event dot target dot value"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { useState } from 'react'\n\nexport const Form = () => {\n  const [username, setUsername] = useState(' ')\n  return (\n    <form>\n      <div>\n        <label>Username</label>\n        <input type='text' value={username} onChange={(event) => setUsername(event.target.value)} />\n      </div>\n    </form>\n  )\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"this is nothing but the input elements value")),(0,r.kt)("p",null,"if we now head back to the browser\nand type in vishwas you can see it works"),(0,r.kt)("h3",{id:"how-to-submit-the-form-data"},"how to submit the form data"),(0,r.kt)("p",null,"all right we are able to keep track of the change in username"),(0,r.kt)("p",null,"next let's see how to submit this form\ndata"),(0,r.kt)("p",null,"in the jsx within the form tag i'm going\nto add a submit button"),(0,r.kt)("p",null,"type is equal to submit and the text is also submit"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { useState } from 'react'\n\nexport const Form = () => {\n  const [username, setUsername] = useState(' ')\n  return (\n    <form>\n      <div>\n        <label>Username</label>\n        <input type='text' value={username} onChange={(event) => setUsername(event.target.value)} />\n      </div>\n      <button type='submit'>Submit</button>\n    </form>\n  )\n}\n")),(0,r.kt)("p",null,"if you go back to the browser click on the submit button\nyou see that the page refreshes"),(0,r.kt)("p",null,"so right now the form has the default\nhtml form behavior of browsing to a new page when the submit button is clicked"),(0,r.kt)("h3",{id:"execute-a-javascript-function-that-handles-the-submission"},"execute a javascript function that handles the submission"),(0,r.kt)("p",null,"a common approach however is to execute a javascript function that handles the\nsubmission of the form"),(0,r.kt)("p",null,"and that form will also have access to the data that the user entered into the\nform"),(0,r.kt)("p",null,"so on the form tag we are going to assign a handler\nto the on submit event"),(0,r.kt)("p",null,"let's call it handle submit"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { useState } from 'react'\n\nexport const Form = () => {\n  const [username, setUsername] = useState(' ')\n  return (\n    <form onSubmit={handleSubmit}>\n      <div>\n        <label>Username</label>\n        <input type='text' value={username} onChange={(event) => setUsername(event.target.value)} />\n      </div>\n      <button type='submit'>Submit</button>\n    </form>\n  )\n}\n")),(0,r.kt)("p",null,"let's now define this handler, const handle submit is going to be equal to an arrow function"),(0,r.kt)("p",null,"this function automatically receives the\nsubmit event as an argument"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { useState } from 'react'\n\nexport const Form = () => {\n  const [username, setUsername] = useState(' ')\n\n  const handlerSubmit = (event) => {}\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <div>\n        <label>Username</label>\n        <input type='text' value={username} onChange={(event) => setUsername(event.target.value)} />\n      </div>\n      <button type='submit'>Submit</button>\n    </form>\n  )\n}\n")),(0,r.kt)("p",null,"to prevent the page refresh we call\nevent dot prevent default"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { useState } from 'react'\n\nexport const Form = () => {\n  const [username, setUsername] = useState(' ')\n\n  const handlerSubmit = (event) => {\n    event.preventDefault()\n  }\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <div>\n        <label>Username</label>\n        <input type='text' value={username} onChange={(event) => setUsername(event.target.value)} />\n      </div>\n      <button type='submit'>Submit</button>\n    </form>\n  )\n}\n")),(0,r.kt)("p",null,"and then in the next line we simply\nalert the user name so alert, backticks,"),(0,r.kt)("p",null,"form data is dollar curly braces username"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { useState } from 'react'\n\nexport const Form = () => {\n  const [username, setUsername] = useState(' ')\n\n  const handlerSubmit = (event) => {\n    event.preventDefault()\n    alert(`Form data is ${username}`)\n  }\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <div>\n        <label>Username</label>\n        <input type='text' value={username} onChange={(event) => setUsername(event.target.value)} />\n      </div>\n      <button type='submit'>Submit</button>\n    </form>\n  )\n}\n")),(0,r.kt)("p",null,"if you now save the file and go back to the browser"),(0,r.kt)("p",null,"fill in the username"),(0,r.kt)("p",null,"and click on submit you should be able to see the text from\ndata is vishwas"),(0,r.kt)("p",null,"the page also does not refresh"),(0,r.kt)("p",null,"this is pretty much the basics of working with forms in react"),(0,r.kt)("p",null,"now as a quick exercise i suggest you handle two more form controls"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"create a text area element for description")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"and a select drop down element to capture a country")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"handle the value and they're on change events and ensure you have the data for submission"))),(0,r.kt)("p",null,"let me know in the comments section if\nyou were able to achieve that"))}c.isMDXComponent=!0}}]);