---
sidebar_position: 1
---

# React 18

### **=>** What is react?

#### react is an open source javascript library for building user interfaces

there are two key points in this definition

the first one is that react is a javascript library, it is not a framework it is a library

it is focused on doing one thing and doing that one thing really well
and that is the second part building user interfaces

so react does not focus on the other aspects of your application like routing or http requests it is responsible only for building rich user interfaces

however there is no need to worry as react has a rich ecosystem and plays really well with other libraries and is more than capable of building enterprise scale web applications

### **=>** Why learn React?

#### it is one of the most popular ui libraries

well the first reason is a practical one `it is one of the most popular ui libraries` and is well known in the job market, learn react and you could land that front-end developer job you've always wanted

second reason is that `react has a great community behind it`, you will be able to find tons of articles and stack overflow solutions to most of the problems that you will encounter when learning react

#### the technical aspects of react and why it is a good choice

- `react has a component based architecture`

this lets you break down your application into small encapsulated parts which can then be composed to make more complex user interfaces

components also make it possible to write reusable code

for enterprise applications the ability to reuse code is a huge plus point

- `another key point is that react is declarative`

now what does that mean?

well basically you just have to tell react what you want through code and react with its react dom library will build the actual ui

react will abstract away the difficult parts and make it painless for you to create complex uis

the bottom line is that react will be a great addition to your skill set

### **=>** Setting up our development environment

#### for react we need three things, a browser, node.js and a code editor.

for browser i am going to be using `chrome`

for node.js head over to nodejs.org you will need to download and install `the latest stable release`

to write code i am going to be using `vscode`

and make sure to `install the prettier extension` which will help with formatting

i have created `a folder` called `react 18 crash course` and i've opened vs code inside the folder

### **=>** Create a new react app

#### to create a new react app we will be making use of `create react app`

create react app is a command line interface tool that allows you to quickly create and run react
applications with no configuration

so open the integrated terminal and run the command npx create-react-app followed by the name of the project let's call it react-demo

```css
npx create-react-app react-demo
```

the command takes a few seconds and once it completes you should have a new folder called react-demo

this folder contains our react application

#### `to run this application` first navigate inside the project folder cd react-demo now run the command npm start

```css
npm start
```

the command will open the browser on localhost port 3000 with your react demo application up and running and you can see the instruction edit source app.js and save to reload

- let's go back to vs code expand the source folder and edit app.js

- i will change the text to hello world and save the file

- when the changes are saved the browser automatically refreshes and
  you should see hello world displayed in the browser

### **=>** The applications folder structure and files

#### package.json

this file contains the `dependencies` and the `scripts` required for the project

you can see that we are using react and react dom version 18 and they are listed as dependencies

both the libraries are necessary to create react applications

we also have a few scripts to `start` the application, `build` the application or even run `tests`

we then have `the configuration for eslint` which is a tool to highlight possible errors in the code

finally we have the compatible browser list

#### package-lock.json file

next based on whether you have npm or yarn as a package manager you're going to see your unlock or package log files

this file ensures consistent installation of your dependencies and you don't really have to worry about it

#### .gitignore file

we also have a git ignore file to ignore files and folders from version control

#### README.md file

and a standard readme file

#### node_modules folder

next let's talk about the folders the first one is node underscore modules

this is the folder in which all the dependencies are installed

it is generated when you run the create react app command or when you run npm install

#### public folder

the next folder is the public folder

this folder contains six files

out of the six `manifest.json` along with the `favicon` and the `two logos` are concerned with progressive web apps which is out of scope for our discussion

we have the `robots.txt` file which is needed for search engines and is nothing react specific

#### the index.html file

so as a beginner you only have to concentrate on the index.html file

the index.html file is the only html file you're going to have in your application

we are building single page applications and this is it

the ui might dynamically change in the browser but it is this html file that gets served up

typically you're not going to add any code in this file maybe some changes in the head section but definitely not in the body tag

#### we have one div tag with id is equal to root

you want react to control the ui and for that purpose we have one div tag with id is equal to root

at runtime the react application takes over this div tag and is ultimately responsible for the ui

please make a note of this div tag as we will come back to it shortly

#### the source folder

the next folder is the source folder which is the folder we will be working with the most during development

#### index.js file

the starting point of our react application is index.js

```js
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
```

in index.js we specify the root component which is App component and the dom element which will be controlled by react

the dom element in our example is an element with id is equal to root and if you can recollect this is the element in our index.html file

we call this div element as a `root dom node` because everything inside it will be managed by react

for the hello world application the app component is rendered inside the root dom node

#### App.js file

that brings us to the app component which is present in app.js

this is also the file we edited a minute ago and is responsible for the html displayed in the browser

in other words `the app component represents the view which we see in the browser`

#### App.css file

with app.js create react app also generates a css file for styling. the css file contains classes which are applied in the app component

#### App.test.js file

and a test.js file for unit tests. the test file contains a simple test case

#### index.css file

we also have an index.css file which applies styles to the body tag and is referenced in index.js

#### logo.svg

we have the logo svg which is referenced in the app component

#### reportWebVitals.js

and finally report web vitals for performance and analytics tracking

#### setupTests.js

and setup tests which is again related to testing

these two files can be ignored as a beginner

so that is the folder structure of a react application created using create
react app

#### when you run the command npm start...

index.html file is served in the browser

index.html contains the root dom node

next the control enters index.js

react dom library renders the app component onto the root dom node

the app component contains the html which is ultimately displayed in the
browser

### **=>** React 17 vs React 18

#### there is a small update needed in index.js

at the moment create react app installs version 18 as a dependency but the root api still uses version 17 of react

let's fix it before proceeding

at the top comment out the import `statement for react` dom and instead add import create root from react dom client

next comment out the react dom render method and instead add const container is equal to document.getElementById root const root is equal to the create root function which we have imported passing in container and finally root dot render the app component

doing this will enable you to use react 18 features

if you are watching this video a few weeks or months after the video has been published you might not have to do this as create react app might be updated by then but for now make this small change to render the app component

```js
import React from 'react'
// import ReactDOM from 'react-dom'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// )

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
```

now i have mentioned the word component `several` times already but what exactly is a component?
let's understand that next

### **=>** What is a component?

#### in react a component represents a part of the user interface

for example a traditional website can be broken down into header site nav main content and footer

each section is represented by a component in react

- `composition`

all the components when composed in the right way make up the entire website

- `Root (App) component`

we also have a component that contains all the four components it is called as root component and is usually named as app component

- `components are also reusable`

the same component can be used with different properties to display different information

for example the site nav component can be the left side nav as well as the right side nav

the ui can remain the same but the content can change

#### component code

- `now how does a component translate to code in our application?`

a component code is usually placed in a javascript file

for example AppComponent is placed in App.js

all right so a component is basically the code inside a dot js file
but

- `what does that code look like?`

that depends on the type of the component

we have two types function components and class components

### **=>** Function Components

in the year 2022 function components are pretty much what you need to learn and our focus is going to be just that

#### class components

  - `class components are not necessary from a beginner's point of view`

  but i will let you know where to learn about them at the end of this video

#### function component

  - `function components are literally javascript functions`

  they may accept some input properties and return html which describes the ui

#### let's examine the App component

  the first thing to notice is `the file extension`, .js
  so it is a javascript file

  ```js App.js
  import logo from './logo.svg'
  import './App.css'

  function App() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>Hello World!</p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
        </header>
      </div>
    )
  }

  export default App
  ```

  if we take a look at the code you can clearly see
  that `this is a javascript function` called app which returns some html

  the html contains a wrapping div tag, the header tag,
  an image, a paragraph and a link

  the component is exported from the file as the default export
  this allows us to import the same in index dot js

  - create react app generates a simple react application and hence we have just the one component which is app component

  in the real world application you can
  have tens hundreds or even thousands of components

  facebook which uses react supposedly has
  more than thirty thousand components

  more complex the application more the
  number of components


### **=>** Create a function component

#### create a function component ourselves

**-** to keep things simple in the app component i am going to `remove all the html except the outer div tag,`
remove the logo import as well at the top

```js App.js
import './App.css'

function App() {
  return <div className='App'></div>
}

export default App
```

**-** now let's create our first component which will simply output the message `hello Vishwas`

now a component is nothing but a
javascript file let's start with that

1. first within the source folder i'm going
   to create a new folder called components

   ```js
   src/
     components/
   ```

2. and within the folder i'm going to create a new file called Greet.js

```js
src / components / Greet.js
```

now within the file define a new function

function Greet we return an h1 tag that says hello vishwas

```js Greet.js
// Greet.js

function Greet() {
  return <h1>Hello Vishwas</h1>
}
```

and that is pretty much it you have created your first function component

#### Exporting the function

but as it stands now the html hello vishwas is not going to be rendered in
the browser, `the great component is in no way connected with the rest of our application`

1. so what we have to do is export the greet function from greet.js

so export default greet

```js Greet.js
function Greet() {
  return <h1>Hello Vishwas</h1>
}

export default Greet
```

4. import it in app.js

`import` greet from dot slash components slash greed
(we are allowed to omit the dot js file extension)

```js App.js
import './App.css'
import Greet from './components/Greet'

function App() {
  return <div className='App'></div>
}

export default App
```

5. and then include it in the app component

now to include the grid component in app component we simply specify the component as a
custom html tag

so within the outer div tag
include the greet component as an html tag

if there is no content between the
opening and closing tags you can simply change it into a self-closing tag

```js
import './App.css'
import Greet from './components/Greet'

function App() {
  return (
    <div className='App'>
      <Greet />
    </div>
  )
}

export default App
```

now if we save all the files and take a look at the browser
you should be able to see hello vishwas
your first function component is up and running

#### using an arrow function to create a function component

let's rewrite the code

const greet is equal to an arrow function
which returns hello vishwas

```js
const Greet = () => {
  return <h1>Hello Vishwas</h1>
}

export default Greet
```

if you're new to arrow functions
please pause the video and try to get a basic understanding of how they work
as we will be using them a lot throughout the series

take a look at the browser and we still see hello vishwas

### **=>** Default export vs named export

#### export default

is what allows us to import the component with any name

all right before we proceed i would like to highlight a point about exporting and importing components

please note here that we are exporting greet component as a default export from
greet.js

```js
const Greet = () => {
  return <h1>Hello Vishwas</h1>
}

export default Greet
```

is what allows us to import the component with any name

i can change greet to myComponent, change the tag to myComponent

```js
import './App.css'
import myComponent from './components/Greet'

function App() {
  return (
    <div className='App'>
      <myComponent />
    </div>
  )
}

export default App
```

head back to the browser and you can see that it still works as expected

#### named exports

but in certain articles or videos you might also find `named exports`

let me comment the default export

and prepend the constant with the export keyword

so export const greet

```js
export const Greet = () => {
  return <h1>Hello Vishwas</h1>
}

// export default Greet
```

this is what is termed as a named export

`in this situation you have to import the component with the exact same name`

if i save the file
you can straight away see we have an error

(export default imported as my component was not found in components gree)t

so you have to change the import statement to import the greet function

`for named exports we use curly braces and then the export`

so import greet from dot slash components slash greet

and use the same tag

```js
import './App.css'
import { Greet } from './components/Greet'

function App() {
  return (
    <div className='App'>
      <Greet />
    </div>
  )
}

export default App
```

if we take a look at the browser our app is working once again

`now i am going to be using named exports for the most part but make sure you understand the difference between default and named exports`

### **=>** JSX

#### JSX is a syntax extension to javascript

  for our next topic we're going to
  quickly take a look at jsx

  jsx is probably the word you're going to
  see and hear a lot in the world of react

  so it's really important that you at least know what jsx is from a beginner's
  point of view

  if we take a look at our greet component we see html being returned

  however this is not html it is called jsx and `is a syntax extension to javascript`

  in react jsx is what describes how the
  ui should look like

  in this case it should be an h1 element

#### Javascript expressions in JSX

  jsx comes with the full power of javascript

  for example if we have to evaluate an expression, `within a pair of curly braces` let's specify two plus two

  ```js Greet.js
  export const Greet = () => {
    return <h1>Hello Vishwas {2 + 2}</h1>
  }

  // export default Greet
  ```

  save and we see four in the browser

  - `we can also run conditional code, map over a list, etc`

  you will slowly get used to what jsx
  is capable of as we progress through this course

#### javascript reserved words in JSX

  however at this point in time let me
  point out some of the differences you're going to see in jsx compared to regular
  html

  the first one which is already present in app.js is `class` being replaced by `className`

  in app.js you can see className is equal to app
  and app is a class defined in app.css

  ```js App.js
  import './App.css'
  import { Greet } from './components/Greet'

  function App() {
    return (
      <div className='App'>
        <Greet />
      </div>
    )
  }

  export default App
  ```

  similarly we also have the `for` attribute being replaced by `htmlFor`

  since it is a keyword in javascript

#### camelCase property naming convention in JSX

  you're also going to see camelCase property naming convention instead of html attribute names

  for example `onclick` and `tabIndex` will become `onClick` and `tabIndex` with an upper case C and I

  we will see these differences as we progress through the course so don't worry about having to memorize them

#### react elements

  (What Are React Elements? https://youtu.be/nI1ey-u5VeQ)

  the last point you have to know as a beginner and something you can dig into after the
  course is about react elements

  we write jsx which appears to be similar to html since it is the easiest way to write what the component should render in the ui

  - `under the hood jsx produces what are called react elements` which are in turn converted to
    objects that are used to construct the dom

  the topic might be overwhelming as a beginner so for now just keep in mind:

  - a react component returns jsx

  - and jsx is simply a syntax extension to javascript

  we will be writing a lot of jsx throughout this course so you will get used to it even if it hasn't made much sense so far

  ### **=>** Props

#### components are reusable

alright our next topic of discussion is an important one it is about `props`

- earlier in the video i mentioned that `components are reusable`

so you can create a component that returns any jsx you want to and include
it in any part of your application

for example let's say we need to reuse
the greet component

- all you have to do is include the greet
  tag as many times as you want

if i duplicate it twice

```js
import './App.css'
import { Greet } from './components/Greet'

function App() {
  return (
    <div className='App'>
      <Greet />
      <Greet />
      <Greet />
    </div>
  )
}

export default App
```

save the file and take a look at the browser you can see hello vishwas displayed three times

#### props allows the component content to be dynamic.

now all this is great given what we return from the component
this isn't really helpful is it

- what would be great is if we could pass in the name of the person we want to greet,that way reusing the same component we could greet three different people instead of greeting vishwas three times

that is where props come into picture

`props short for properties is the optional input that any component can accept, it allows the component content to be dynamic.`

#### let's understand how props work 

- our intention here is to pass a name from the app component to the greet component and render that name in the browser

to specify props for a component we specify them as attributes

1. to specify a name prop we simply add a `name` attribute

```js
import './App.css'
import { Greet } from './components/Greet'

function App() {
  return (
    <div className='App'>
      <Greet name />
      <Greet />
      <Greet />
    </div>
  )
}

export default App
```

it could be any word like username for example but i've decided to go with just name

- to the attribute we assign the value let's go with the string bruce

- similarly let's add the attribute to the other two components as well, name is equal to clark and name is equal to diana

```js
import './App.css'
import { Greet } from './components/Greet'

function App() {
  return (
    <div className='App'>
      <Greet name='Bruce' />
      <Greet name='Clark' />
      <Greet name='Diana' />
    </div>
  )
}

export default App
```

okay so we are now sending some information or some property to the greed component

but how do we

2. `retrieve the value` in the grid component

- that is a quick two-step process

- the first step `add a parameter to the function component`, we are going to call it props

```js
export const Greet = (props) => {
  return <h1>Hello Vishwas</h1>
}
```

you can actually name this anything you want to but the convention is to name it props and i highly recommend you don't deviate from this

- the second step is to `use this parameter in the function body`

`now props is an object on which you access the different properties you've passed in`

so if you want to display the name that has been passed to the component
we need to use props.name (so hello props.name)

```js
export const Greet = (props) => {
  return <h1>Hello props.name</h1>
}
```

#### jsx expressions

if we take a look at the browser the output is not quite what we want it
to be, and that is because props dot name is being treated as text

we need to instead ask react to evaluate the jsx expression
and we do that `by wrapping the expression with curly braces`

```js
export const Greet = (props) => {
  return <h1>Hello {props.name}</h1>
}
```

if we now take a look at the browser you should be able to see hello bruce
hello clark and diana

the reusability of components makes much more sense now that we understand props

we can have a template (Greet.js) and pass in the data we want the component to use (in App.js, were we use the component)

#### let's add another prop 

- let's add another prop to make sure we get a good understanding of how it works
- i'm going to add a second attribute `heroName` and assign the appropriate
  values, `batman`, `superman`, `wonder woman`

```js
// App.js

import './App.css'
import { Greet } from './components/Greet'

function App() {
  return (
    <div className='App'>
      <Greet name='Bruce' heroName='Batman' />
      <Greet name='Clark' heroName='Superman' />
      <Greet name='Diana' heroName='Wonder Woman' />
    </div>
  )
}

export default App
```

- and in Greet component hello props dot name followed by also known as `props.heroName`

```js
// Greet.js

export const Greet = (props) => {
  return (
    <h1>
      Hello {props.name}, a.k.a. {props.heroName}
    </h1>
  )
}
```

now if you take a look at the browser you can see the output is what we expect it to be

#### using the reserved children prop 

- sometimes it is also possible that you might not have an idea as to what content is being passed in but we still want the component to render that unknown content

- we can do that by specifying the content between the opening and closing tag of the component and retrieving it using the reserved children property in the props object

- `let's understand better with an example`

1. on the greet tag component instead of the self closing tag i will split it into opening and closing tags and i'll do this only for the last component

```js
import './App.css'
import { Greet } from './components/Greet'

function App() {
  return (
    <div className='App'>
      <Greet name='Bruce' heroName='Batman' />
      <Greet name='Clark' heroName='Superman' />
      <Greet name='Diana' heroName='Wonder Woman'></Greet>
    </div>
  )
}

export default App
```

2. in between the tags i will specify a simple paragraph tag "This is children props"

```js
import './App.css'
import { Greet } from './components/Greet'

function App() {
  return (
    <div className='App'>
      <Greet name='Bruce' heroName='Batman' />
      <Greet name='Clark' heroName='Superman' />
      <Greet name='Diana' heroName='Wonder Woman'>
        <p>This is children props</p>
      </Greet>
    </div>
  )
}
```

4. now in greed component we can render that paragraph using props dot children

below the h1 tag i'm going to add {props.children}

```js
export const Greet = (props) => {
  return (
    <h1>
      Hello {props.name} a.k.a {props.heroName}
    </h1>
    {props.children}
  )
}


```

if i save the file and take a look at the browser you can see we have an error, this is because the jsx returned by a component should contain only one wrapper element

5. so we wrap h1 tag and props.children with a div tag

so within the outermost html element you can nest as many html elements you want
to but the component should return only one element

```js
export const Greet = (props) => {
  return (
    <div>
      <h1>
        Hello {props.name} a.k.a {props.heroName}
      </h1>
      {props.children}
    </div>
  )
}

// export default Greet
```

if we now take a look at the browser you can see that only for wonder woman
we have the additional content being rendered "this is children props"

- this paragraph corresponds to the inner html of the greet tag component

#### Adding a Child button 

so if i were to add a button to the second greet component
with text action

```js
import './App.css'
import { Greet } from './components/Greet'

function App() {
  return (
    <div className='App'>
      <Greet name='Bruce' heroName='Batman' />
      <Greet name='Clark' heroName='Superman'>
        <button>Action</button>
      </Greet>
      <Greet name='Diana' heroName='Wonder Woman'>
        <p>This is children props</p>
      </Greet>
    </div>
  )
}

export default App
```

- and take a look at the browser the button should be rendered for superman

 for the properties you know for sure are going to be passed you can pass them as attributes
`name and heroName`

 if you have no clue what is going to be passed as props or if you have to pass in dynamic html content `pass it in between the component tags`

and in the component definition render the content using `{props.children}`

if at all something is specified it is rendered in the browser and if nothing is passed props or children simply renders nothing

- the children props is very useful when you have to compose new components from
  existing components

#### the basic idea behind props 

- when specifying the component you can include additional attributes

- react is going to bundle all such attributes into an object which we by convention call as props

- in the component definition we can access any attribute we want to and render dynamic content

#### props are immutable

now there is one strict rule though when it comes to props and that is props are
immutable or in simpler words `their value cannot be changed`

in our example if i try to assign a value to props dot name
is equal to vishwas save

```js
export const Greet = (props) => {
  props.name = 'Vishwas'

  return (
    <div>
      <h1>
        Hello {props.name} a.k.a {props.heroName}
      </h1>
      {props.children}
    </div>
  )
}

// export default Greet
```

and take a look at the browser you can see the application breaks

take a look at the console and the error message is `cannot assign to read only property name of object`

- react components have to act like pure functions with respect to their props
  parameter,

- you're not allowed to change it under any circumstance

nevertheless props is a great feature in react and any practical react
application will definitely make use of props

but if props are immutable how do we maintain component data that might change over time

well to answer that question let's head to the next topic
which is state

### **=>** State

#### props vs state

now we have seen that every react
component returns jsx which describes the user interface

and a minute ago we have seen that it is possible to influence what is rendered
on the screen using props

- as it turns out there is a second way to influence what is rendered on the screen and that is the state of the component

let's quickly review what we have learned about props and make a comparison by learning about state

after that let's dive into an example to get a better understanding of how state
works in react components

let's take a look at the comparison

1. the first one is that `props get passed to the component` whereas `state is managed within the component`

- analogy for this would be `function parameters` against `variables declared within the function body`

2. because a parent usually passes down the props to the child component `props are immutable`, the parent owns the props and cannot be changed by the children components

- state on the other hand is managed within the component and hence `the component has full control to change the state`

#### useState hook

1. now props are accessed using the `props parameter` on the function component, however state is managed a little different, the simplest way to manage state is using a function that the react library provides which is the useState function also referred to as `useState hook`

#### let's look at an example of how state works in the component **->**

1. within the components folder i'm going to create a new file called `Message.js`

```jsx
src / components / Message.js
```

2. within the file i'm going to create a function component

- let me copy paste the code from Greet.js and make the necessary modifications

- i'm going to change the function name to Message

- the jsx we return the text `Greet visitor`

```jsx
// Message.js

export const Message = props => {
  return <h1>Welcome Visitor</h1>
}
```

3. let me import the component in App.js

```jsx
App.js

import './App.css'
import { Greet } from './components/Greet'
import { Message } from './components/Message'

function App() {
  return (
    <div className='App'>
      <Greet
        name='Bruce'
        heroName='Batman'
      />
      <Greet
        name='Clark'
        heroName='Superman'>
        <button>Action</button>
      </Greet>
      <Greet
        name='Diana'
        heroName='Wonder Woman'>
        <p>This is children props</p>
      </Greet>
    </div>
  )
}

export default App
```

4. comment out rest of the components and include the message component

```jsx
import './App.css'
// import { Greet } from './components/Greet'
import { Message } from './components/Message'

function App() {
  return (
    <div className='App'>
      {/* <Greet name='Bruce' heroName='Batman' />
      <Greet name='Clark' heroName='Superman'>
        <button>Action</button>
      </Greet>
      <Greet name='Diana' heroName='Wonder Woman'>
        <p>This is children props</p>
      </Greet> */}
      <Message />
    </div>
  )
}

export default App
```

if we take a look at the browser you should see the text welcome visitor

#### now here is our new requirement **->**

- we need to have a subscribe button right below the text

- when we click on the button the text being displayed should change from welcome visitor to thank you for subscribing

- now if the text message were to be sent from app.js as a prop it would not work as props are immutable, once the message is set to welcome visitor it can never be changed from the message component

-`so the solution is to use component state`

- let's see what are the steps involved

1. step one is to `import the use state function` from react,

- so at the top import use state from react

```jsx
// Message.js

import { useState } from 'react'

export const Message = props => {
  return <h1>Welcome Visitor</h1>
}
```

2. step two invoke useState within the component,

- so `useState()` with parentheses

```jsx
// Message.js

import { useState } from 'react'

export const Message = props => {
  useState()
  return <h1>Welcome Visitor</h1>
}
```

- now this function `returns two values` which we can store in two constants of an array

- const array message comma set message

```jsx
// Message.js

import { useState } from 'react'

export const Message = props => {
  const [message, setMessage] = useState()
  return <h1>Welcome Visitor</h1>
}
```

- the syntax is called `array destructuring` in case you want to look it up for better understanding

here `message is a simple variable` we can call it anything but message
makes sense in this example

`setMessage is a function that can be used to update the message variable`

- . now useState also accepts an initial value as its argument this is going to be `welcome visitor` to begin with

3. step 3, instead of `<h1>welcome visitor</h1>` we bind the state value in the jsx, `<h1>{message}</h1>`

```jsx
// Message.js

import { useState } from 'react'

export const Message = props => {
  const [message, setMessage] = useState('Welcome visitor')
  return <h1>{message}</h1>
}
```

if we take a look at the browser we see no change in the ui

however since we are using state to render the message we now have the ability to change the message so

#### `let's create a button and on click of that button change the message`

1. for step 4 add an html button element

before we do that `create an enclosing div tag` and then below the h1 tag `add a button` with text subscribe

```jsx
import { useState } from 'react'

export const Message = props => {
  const [message, setMessage] = useState('Welcome Visitor')
  return (
    <div>
      <h1>{message}</h1>
      <button>Subscribe</button>
    </div>
  )
}
```

let's quickly take a look at the browser and see if it works

the button is now placed right below the message

5. the fifth and final step is to listen to the click event on this button and change the message

(we will take a detailed look at event handling in a few minutes but this will be a glimpse into how a click event on an element is handled)

- on the button we add the `onClick` attribute

(very important that it is camel cased)

- to this event we assign a handler and this again is going to be within `curly braces`

```jsx
import { useState } from 'react'

export const Message = (props) => {
  const [message, setMessage] = useState('Welcome Visitor')
  return (
    <div>
      <h1>{message}</h1>
      <button onClick={}>Subscribe</button>
    </div>
  )
}

```

- here we're going to have `an arrow function` in the function body we `call the setMessage function` returned from useState

```jsx
import { useState } from 'react'

export const Message = props => {
  const [message, setMessage] = useState('Welcome Visitor')
  return (
    <div>
      <h1>{message}</h1>
      <button onClick={() => setMessage()}>Subscribe</button>
    </div>
  )
}
```

to this setMessage function `we can pass in a value` and react will update the message variable with that value let's pass in thank you for subscribing

```jsx
import { useState } from 'react'

export const Message = props => {
  const [message, setMessage] = useState('Welcome Visitor')
  return (
    <div>
      <h1>{message}</h1>
      <button onClick={() => setMessage('Thank you for subscribing!')}>Subscribe</button>
    </div>
  )
}
```

if we save the file and take a look at the browser you should see the text "welcome visitor" and when i click on the subscribe button the text changes to "thank you for subscribing"

#### this example demonstrates what exactly state is in react

- a state is nothing but a variable that is maintained inside a component

- unlike props state can be changed within the component

- whenever the state changes react will automatically update the ui to reflect the updated state value

i hope you now have a slightly better understanding of props state and how they're used in react

### **=>** Hooks at a glance

#### a hook is a special function that lets you hook into react features

now before we proceed i want to take a minute to explain the word hooks, it is something that you will hear a lot in react so i want to make sure you're familiar with what it is

a hook is a special function that lets you hook into react features

- for example useState is a hook that lets you add react state to function components

similarly there are other hooks that let you hook into other features

You have:

- `useReducer`, for more complex state management,

- `useEffect`

- `useContext`

- `useRef`

- `useMemo`

- `useCallback`

and the more recent additions to react 18 namely

- `useTransition`

and

- `useDeferredValue`

as a beginner not every hook is important in this fundamentals crash course apart from `useState`, we will later on look at `useEffect` and `useTransition`

as for the remaining hooks they are slightly more advanced so i will point you to the right resource at the end of this video

### **=>** Event handling

#### let's see how to handle events in react

- any application you build typically tends to have user interaction

- when the user interacts with your app events are fired for example mouse clicks, mouse over, key press, change event, etc

- let's see how to handle events in react

#### The click event

we will focus on just the `click event` but the concept holds good for other events as well

in fact we've already had a look at the click event a few minutes ago but let's look at it in a bit more detail

1. `let's begin by creating a new component`

so in the components folder new file called `ClickHandler.js`

here define a new component, export const click handler and this is going to be equal to an arrow function

```jsx
// ClickHandler.js

export const ClickHandler = () => {}
```

in the jsx i'm going to add a div tag and a button within the div tag, click

```jsx
// ClickHandler.js

export const ClickHandler = () => {
  return (
    <div>
      <button>Click</button>
    </div>
  )
}
```

when the user clicks on this button a click event is fired,

- `our goal is to capture that click event and execute some basic code`

- the first point you have to make note of is react events are named using camel case rather than lowercase

in plain html and vanilla javascript you would specify on click that is lowercase but in react it has to be `camel cased`

```jsx
export const ClickHandler = () => {
  return (
    <div>
      <button onClick>Click</button>
    </div>
  )
}
```

- the second point is with jsx you pass a function as the event handler rather than a string

2. so instead of a string click handler with parentheses we're going to have click handler `within curly braces`

```jsx
export const ClickHandler = () => {
  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  )
}
```

3. now let's define this `ClickHandler function`

remember in javascript it is very much possible to define a function within a function

so inside the function component we can define our click handler

const click handler is equal to an arrow function and within the function body we simply log to the console button clicked

```jsx
export const ClickHandler = () => {
  const clickHandler = () => {
    console.log('Button clicked')
  }
  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  )
}
```

let's save

this included in App component and import the component at the top

```jsx
// App.js

import './App.css'
import { ClickHandler } from './components/ClickHandler'
// import { Greet } from './components/Greet'
// import { Message } from './components/Message'

function App() {
  return (
    <div className='App'>
      {/* <Greet name='Bruce' heroName='Batman' />
      <Greet name='Clark' heroName='Superman'>
        <button>Action</button>
      </Greet>
      <Greet name='Diana' heroName='Wonder Woman'>
        <p>This is children props</p>
      </Greet> */}
      {/* <Message /> */}
      <ClickHandler />
    </div>
  )
}

export default App
```

and head back to the browser to test this out in the browse

you can see the click button if i open the developer tools console and click on the button you should see the message button clicked in the console

our click event handling works as expected

- when assigning an event handler make sure you don't add parentheses, if you do the function gets called when the component renders and that is not what we want

#### the event object

- what you should also know is that the event handler automatically receives the event assets argument

so we can specify event as a parameter to click handler and log it to the console

```jsx
export const ClickHandler = () => {
  const clickHandler = event => {
    console.log('Button clicked', event)
  }
  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  )
}
```

in the browser click, and we see all the details about the event

#### using a unanimous arrow function

- it is also possible to pass additional arguments if necessary

for example i can add another button, so copy paste, that says click 5

```jsx
export const ClickHandler = () => {
  const clickHandler = event => {
    console.log('Button clicked', event)
  }
  return (
    <div>
      <button onClick={clickHandler}>Click</button>
      <button onClick={clickHandler}>Click 5</button>
    </div>
  )
}
```

but this time the on click handler will be an arrow function, this function receives the event as an argument

```jsx
export const ClickHandler = () => {
  const clickHandler = event => {
    console.log('Button clicked', event)
  }
  return (
    <div>
      <button onClick={clickHandler}>Click</button>
      <button onClick={event => clickHandler}>Click 5</button>
    </div>
  )
}
```

we then call click handler, so parentheses, passing in the same event, but also a second argument, let's pass in a value of five

```jsx
export const ClickHandler = () => {
  const clickHandler = event => {
    console.log('Button clicked', event)
  }
  return (
    <div>
      <button onClick={clickHandler}>Click</button>
      <button onClick={event => clickHandler(event, 5)}>Click 5</button>
    </div>
  )
}
```

in the click handler definition we can add a new parameter that says count and we set a default value of one, and log count to the console

```jsx
export const ClickHandler = () => {
  const clickHandler = (event, count = 1) => {
    console.log('Button clicked', count, event)
  }
  return (
    <div>
      <button onClick={clickHandler}>Click</button>
      <button onClick={event => clickHandler(event, 5)}>Click 5</button>
    </div>
  )
}
```

if we now head to the browser, click on the first button we see a value of 1 and the mouse click event

click 5 we see the value 5 and the same mouse click event

this is pretty much how you handle events in a function component

### **=>** Parent and child component communication

#### what if a child component wanted to communicate with the parent component

let's now move on to the next topic which is parent and child component communication

earlier we have seen how a parent component can pass down props to its children components

any data in the parent component when passed as props is available in the children components

- now what if a child component wanted to communicate with the parent component

#### strangely we still use props but this time we pass in a reference to a function as props to the child component

let me help you understand better with an example

- i'm going to create a new file called `ParentComponent.js`

within the file i'm going to define a new function component:

```js
export const ParentComponent = () => {}
```

within the component i'm going to define a function greetParent which simply alerts "hello parent"

so const greet parent is equal to a function where we alert hello parent i'm going to leave the jsx empty for now

```js
export const ParentComponent = () => {
  const greetParent = () => {
    alert('Hello parent')
  }
}
```

next i will create another file called `ChildComponent.js`

and for the jsx i will add a button that says greet parent

```js
export const ChildComponent = () => {
  return (
    <div>
      <button>Greet Parent</button>
    </div>
  )
}
```

now back in the parent component i will include the child component in the jsx, so return child component

```js
import { ChildComponent } from './ChildComponent'

export const ParentComponent = () => {
  const greetParent = () => {
    alert('Hello parent')
  }

  return <ChildComponent />
}
```

make sure you import child component from dot slash child component

back in `App.js component` i will include the parent component in the jsx, so import parent component from dot slash components slash parent component

and add it in the jsx

```js
import './App.css'
import { ParentComponent } from './components/ParentComponent'
// import { ClickHandler } from './components/ClickHandler'
// import { Greet } from './components/Greet'
// import { Message } from './components/Message'

function App() {
  return (
    <div className='App'>
      {/* <Greet name='Bruce' heroName='Batman' />
      <Greet name='Clark' heroName='Superman'>
        <button>Action</button>
      </Greet>
      <Greet name='Diana' heroName='Wonder Woman'>
        <p>This is children props</p>
      </Greet> */}
      {/* <Message /> */}
      {/* <ClickHandler /> */}
      <ParentComponent />
    </div>
  )
}

export default App
```

if i click on the button though nothing happens right now

#### Execute the function defined in the parent component

- but what i want is when we click on the button, in the child component, i want to execute the function defined in the parent component
- 
- basically the child component calls a parent components function

as i mentioned already this is achieved using props

the only difference this time is we pass the function itself as a prop to the child component

so on the child component let's add a prop called greet handler and this is going to be equal to the greet parent function

so we are passing a reference to the great parent function

```js
import { ChildComponent } from './ChildComponent'

export const ParentComponent = () => {
  const greetParent = () => {
    alert('Hello parent')
  }

  return <ChildComponent greetHandler={greetParent} />
}
```

make note of the absence of the parentheses

we can now grab hold of this function in our child component, specify props parameter, and on click of the button we call props dot greet handler

```js
export const ChildComponent = (props) => {
  return (
    <div>
      <button onClick={props.greetHandler}>Greet Parent</button>
    </div>
  )
}
```

let's save the file and see if this works

i'm going to go back to the browser, click on the button and you can see the alert hello parent

- so we have successfully called a function in the parent component from a button in the child component by passing the function as props to the child component

- this is something you're going to do quite often in your applications so please make a note of it

#### how to pass a parameter when calling the parent component function from the child component

now let's see how to pass a parameter when calling the parent component function from the child component

and this is where an arrow function in the return statement is really useful

arrow function syntax is the simplest way to pass parameters from the child component to the parent component

let me convert the onClick handler into an arrow function

props.greetHandler with parentheses

```js
export const ChildComponent = (props) => {
  return (
    <div>
      <button onClick={() => props.greetHandler()}>Greet Parent</button>
    </div>
  )
}
```

now we can pass in any number of parameters to the greet handler

to keep this simple let's pass one argument which is the string child

```js
export const ChildComponent = (props) => {
  return (
    <div>
      <button onClick={() => props.greetHandler('child')}>Greet Parent</button>
    </div>
  )
}
```

let's incorporate this argument in the greet parent function secret parent and we specify child name as a parameter

```js
import { ChildComponent } from './ChildComponent'

export const ParentComponent = () => {
  const greetParent = (childName) => {
    alert('Hello parent')
  }

  return <ChildComponent greetHandler={greetParent} />
}
```

and in the alert statement
template literal syntax
from es6 and we interpolate child name parameter

```js
import { ChildComponent } from './ChildComponent'

export const ParentComponent = () => {
  const greetParent = (childName) => {
    alert(`Hello parent ${childName}`)
  }

  return <ChildComponent greetHandler={greetParent} />
}
```

if we save the files, head to the browser, click on the greet parent button
you should see the alert hello parent child

child here is the argument from the
child component

we have successfully passed a value from the child component to the parent
component

so this is pretty much how you pass functions as props in react components
and handle the parent and child communication

let's now move on to the next important
topic which is conditional rendering

### **=>** Conditional rendering

#### two common ways to conditionally render in react

let's now move on to the next important
topic which is two common ways to conditionally render in react

when you're building react applications
you may often need to show or hide some html based on a certain condition

luckily conditional rendering in react works the same way conditions work in
javascript

let's look at two common ways to conditionally render in react

- in the components folder i'm going to create a new file called `UserGreeting.js`

within the file i'm going to create a
simple component

and within the component i'm going to define a new constant
const isLoggedIn is equal to false

for the jsx i'm going to add a message
that says welcome

```js
export const UserGreeting = () => {
  const isLoggedIn = false
  return <div>Welcome</div>
}
```

- now what i want is for the message to be conditionally rendered
  based on the value of isLoggedIn

if i am logged in the message welcome vishwas should be displayed

and if i am not logged in the message welcome guest
should be displayed

#### using the ternary operator

the first way to achieve that is using the ternary operator

so after welcome we add a pair of curly braces to evaluate the javascript expression

the expression is to check if is logged in is true or false

if it is true append vishwas

else append guest

let's save this file

```js
export const UserGreeting = () => {
  const isLoggedIn = false
  return <div>Welcome {isLoggedIn ? 'Vishwas' : 'Guest'}</div>
}
```

include it in app component, so user greeting
import it at the top

```js
import './App.css'
import { UserGreeting } from './components/UserGreeting'
// import { ParentComponent } from './components/ParentComponent'
// import { ClickHandler } from './components/ClickHandler'
// import { Greet } from './components/Greet'
// import { Message } from './components/Message'

function App() {
  return (
    <div className='App'>
      {/* <Greet name='Bruce' heroName='Batman' />
      <Greet name='Clark' heroName='Superman'>
        <button>Action</button>
      </Greet>
      <Greet name='Diana' heroName='Wonder Woman'>
        <p>This is children props</p>
      </Greet> */}
      {/* <Message /> */}
      {/* <ClickHandler /> */}
      {/* <ParentComponent /> */}
      <UserGreeting />
    </div>
  )
}

export default App
```

and head back to the browser
you can see that the message welcome guest is displayed and that is because he's logged in is set to false

change it to true

```js
export const UserGreeting = () => {
  const isLoggedIn = true
  return <div>Welcome {isLoggedIn ? 'Vishwas' : 'Guest'}</div>
}
```

and the message welcome vishwas is
displayed

#### using the short circuit operator approach

all right the final approach is `the short circuit operator approach`

and this approach is just a specific case of the ternary operator approach

`when you want to render either something or nothing you make use of the short circuit operator`

for example right now we return either welcome vishwas or welcome guest based
on the value of is logged in

- now let's say if the user is logged in i want to display welcome vishwas and if the user is not logged in i want to render just welcome on the screen

so based on is logged in render either
welcome vishwas or nothing

to do that, within curly braces we write is logged in ampersand ampersand
vishwas

```js
export const UserGreeting = () => {
  const isLoggedIn = true
  return <div>Welcome {isLoggedIn && 'Vishwas'}</div>
}
```

so what happens here is the expression evaluates the left hand side of the
operator, is logged in

if it is true it also evaluates the
right hand side which in our case is jsx that will be rendered in the browser

however if at all the left hand side evaluates to false the right hand side
will never be evaluated as it doesn't affect the final value of the whole expression

so if is logged in is set to true you can see in the browser welcome
vishwas is displayed

i change it to false

```js
export const UserGreeting = () => {
  const isLoggedIn = false
  return <div>Welcome {isLoggedIn && 'Vishwas'}</div>
}
```

only welcome is displayed as you can see if you know javascript
conditional rendering is pretty straightforward

### **=>** List rendering

#### in react we use the javascript map method to repeat some html for each item in the list

all right for our next topic let's look
at another common scenario that we come across when building web applications

and that is displaying a list of items

for example a list of names a list of
products a list of courses etc

what we have to do is repeat some html
for each item in the list

in react we use the javascript map method to achieve that

- i'm going to create a new file in the
  components folder called `NameList.js`

- within the file i'm going to create a new function component

and this is equal to an arrow function

within the component i'm going to create an array of names, const names is equal to an array bruce clark and diana

let's return a div tag and within the div tag we use the map method on the array

since that is a javascript expression we start with curly braces array.map is the syntax

so names dot map

```js
export const NameList = () => {
  const names = ['Bruce', 'Clark', 'Diana']
  return <div>{names.map()}</div>
}
```

the map method takes in a function as an argument we will be using an arrow function

the function receives an argument which i am going to call as `name`

```js
export const NameList = () => {
  const names = ['Bruce', 'Clark', 'Diana']
  return <div>{names.map((name) => {})}</div>
}
```

you can name it anything you want to but i recommend naming it something relevant to the array you're iterating over

now the fat arrow symbol is next followed by the function body which will
be the transformation

what we want to do is for every name return an h2 tag with the name as the inner html

so return an h2 tag with name as the inner html

once you start writing html you need to reuse curly braces so we need another pair for the name argument

```js
export const NameList = () => {
  const names = ['Bruce', 'Clark', 'Diana']
  return (
    <div>
      {names.map((name) => {
        return <h2>{name}</h2>
      })}
    </div>
  )
}
```

and that is pretty much it

if you now save the file

include it in app component name list

and import it at the top

```js
import './App.css'
import { NameList } from './components/NameList'
// import { UserGreeting } from './components/UserGreeting'
// import { ParentComponent } from './components/ParentComponent'
// import { ClickHandler } from './components/ClickHandler'
// import { Greet } from './components/Greet'
// import { Message } from './components/Message'

function App() {
  return (
    <div className='App'>
      {/* <Greet name='Bruce' heroName='Batman' />
      <Greet name='Clark' heroName='Superman'>
        <button>Action</button>
      </Greet>
      <Greet name='Diana' heroName='Wonder Woman'>
        <p>This is children props</p>
      </Greet> */}
      {/* <Message /> */}
      {/* <ClickHandler /> */}
      {/* <ParentComponent /> */}
      {/* <UserGreeting /> */}
      <NameList />
    </div>
  )
}

export default App
```

head back to the browser we should be able to see the list of
names being rendered, bruce clark and diana

now although this works fine if we take a look at the devtools console
we see a warning

#### each child in a list should have a unique key prob

to fix this on the item returned from map method
which is the h2 element we add a key prop and assign a unique value

since each of the names are unique in the array we can assign the same to the key prop

```js
export const NameList = () => {
  const names = ['Bruce', 'Clark', 'Diana']
  return (
    <div>
      {names.map((name) => {
        return <h2 key={name}>{name}</h2>
      })}
    </div>
  )
}
```

if we take a look at the browser refresh
you can see the warning has disappeared

now the key prop doesn't represent anything in the user interface

however `it is internally used by react to construct the list of elements in the dom in a more efficient way`

the key prop also helps prevents bugs when you're dealing with lists that involve sorting or filtering

but from a beginner's point of view you just have to remember to specify the key prop and assign a unique value to it

if you are iterating over an array of objects you typically tend to have an id
property that is unique and can be used as the key prop value

but this is pretty much how you render a list of items in react using the map method

if you're unsure as to what the map method is please do google array.map in
javascript

and get a basic understanding of how it works

once you understand that you can come back to the code we have written in our component

### **=>** Styling

#### there are a couple of options to style react components

all right next we're going to learn the basics of styling and css when it comes
to react

there are a couple of options to style react components

- the first one is regular css style sheets

- the second one is inline styling

- third we have css modules

- fourth we can use css in js libraries which work really well with react

in this crash course we're going to cover the first three approaches

learning a css in js library is a separate series in itself and i'll point you in the right direction towards the end of this video

#### using regular css style sheets

all right let's start with the first approach using regular css style sheets

back in vs code within the components folder

- i'm going to create a new file called `Stylesheet.js`

within the file i'm going to create a function component

and this is equal to an arrow function

in the jsx i'm going to return an h1 tag
that says stylesheets

```js
export const Stylesheet = () => {
  return <h1>Stylesheets</h1>
}
```

- i will also include the file in app
  component

- and make sure to import it from dot slash components slash style sheet

```js
import './App.css'
// import { NameList } from './components/NameList'
// import { UserGreeting } from './components/UserGreeting'
// import { ParentComponent } from './components/ParentComponent'
// import { ClickHandler } from './components/ClickHandler'
// import { Greet } from './components/Greet'
// import { Message } from './components/Message'
import { Stylesheet } from './components/Stylesheet'

function App() {
  return (
    <div className='App'>
      {/* <Greet name='Bruce' heroName='Batman' />
      <Greet name='Clark' heroName='Superman'>
        <button>Action</button>
      </Greet>
      <Greet name='Diana' heroName='Wonder Woman'>
        <p>This is children props</p>
      </Greet> */}
      {/* <Message /> */}
      {/* <ClickHandler /> */}
      {/* <ParentComponent /> */}
      {/* <UserGreeting /> */}
      {/* <NameList /> */}
      <Stylesheet />
    </div>
  )
}

export default App
```

- now to specify the css for this component i'm going to create a new file
  called `myStyles.css`

- i'm going to add it within the components folder

- within the file i'm going to create a class primary
  where color is set to orange

```css
.primary {
  color: orange;
}
```

now to be able to use this class in our
component we have to import it so at the top

```js
import './myStyles.css'

export const Stylesheet = () => {
  return <h1>Stylesheets</h1>
}
```

now on the h1 tag we can specify the class using the class
name attribute

class name is equal to primary

```js
import './myStyles.css'

export const Stylesheet = () => {
  return <h1 className='primary'>Stylesheets</h1>
}
```

if we save the file and take a look at
the browser the text should appear in orange

so this is the regular css stylesheets approach to styling a react component

#### inline styling

next we have inline styling

- i'm going to create a new file called `Inline.js`

- and create a new function component

- within the return statement i will add a new heading that says inline

```js
export const Inline = () => {
  return <h1>Inline</h1>
}
```

now let's style this heading

in react inline styles are not specified as a string instead they are specified with an object whose key is the camel cased version of the style name

- for example i can create a new object called heading

and add a property

font size 72 pixels

color blue

```js
export const Inline = () => {
  const heading = {
    fontSize: '72px',
    color: 'blue',
  }

  return <h1>Inline</h1>
}
```

the key is the css property name but as you can notice it has to be camel cased

the value is specified as a string

if you want to specify additional css properties add a comma and then list the next property

now to apply this style we make use of the style attribute

to the style attribute we assign heading

```js
export const Inline = () => {
  const heading = {
    fontSize: '72px',
    color: 'blue',
  }

  return <h1 style={heading}>Inline</h1>
}
```

if we include this component in app component
making sure we import the component at the top

```js
import './App.css'
// import { NameList } from './components/NameList'
// import { UserGreeting } from './components/UserGreeting'
// import { ParentComponent } from './components/ParentComponent'
// import { ClickHandler } from './components/ClickHandler'
// import { Greet } from './components/Greet'
// import { Message } from './components/Message'
// import { Stylesheet } from './components/Stylesheet'
import { Inline } from './components/Inline'

function App() {
  return (
    <div className='App'>
      {/* <Greet name='Bruce' heroName='Batman' />
      <Greet name='Clark' heroName='Superman'>
        <button>Action</button>
      </Greet>
      <Greet name='Diana' heroName='Wonder Woman'>
        <p>This is children props</p>
      </Greet> */}
      {/* <Message /> */}
      {/* <ClickHandler /> */}
      {/* <ParentComponent /> */}
      {/* <UserGreeting /> */}
      {/* <NameList /> */}
      {/* <Stylesheet /> */}
      <Inline />
    </div>
  )
}

export default App
```

and head back to the browser

you should see the text in line with the styling applied

so create an object and apply it to the style attribute

inline styling as you can see is pretty
straightforward

#### css modules

finally let's talk about the third
approach which is css modules

for css modules there is a file naming
convention with create react app

the file name must be suffixed with .module.css

for example let me create two style
sheets `in the source folder`

if `appStyles.css` is a regular style sheet `appStyles.module.css` is a css module style sheet

in the regular style sheet i'm going to add a class error with color set to red

```css
.error {
  color: red;
}
```

in the module style sheet i'm going to add a class success
color set to green

```css
.success {
  color: green;
}
```

in the app component i'm going to import both the files

```js
import './App.css'
import '/appStyles.css'
import styles from './appStyles.module.css'
import { Inline } from './components/Inline'
// import { NameList } from './components/NameList'
// import { UserGreeting } from './components/UserGreeting'
// import { ParentComponent } from './components/ParentComponent'
// import { ClickHandler } from './components/ClickHandler'
// import { Greet } from './components/Greet'
// import { Message } from './components/Message'
// import { Stylesheet } from './components/Stylesheet'

function App() {
  return (
    <div className='App'>
      {/* <Greet name='Bruce' heroName='Batman' />
      <Greet name='Clark' heroName='Superman'>
        <button>Action</button>
      </Greet>
      <Greet name='Diana' heroName='Wonder Woman'>
        <p>This is children props</p>
      </Greet> */}
      {/* <Message /> */}
      {/* <ClickHandler /> */}
      {/* <ParentComponent /> */}
      {/* <UserGreeting /> */}
      {/* <NameList /> */}
      {/* <Stylesheet /> */}
      <Inline />
    </div>
  )
}

export default App
```

you can see there is a difference in how we import a module style sheet

now to use the error class from the regular style sheet i can add an h1 tag
that says error with the class name attribute set to
error

```js
import './App.css'
import '/appStyles.css'
import Styles from './appStyles.module.css'
import { Inline } from './components/Inline'
// import { NameList } from './components/NameList'
// import { UserGreeting } from './components/UserGreeting'
// import { ParentComponent } from './components/ParentComponent'
// import { ClickHandler } from './components/ClickHandler'
// import { Greet } from './components/Greet'
// import { Message } from './components/Message'
// import { Stylesheet } from './components/Stylesheet'

function App() {
  return (
    <div className='App'>
      {/* <Greet name='Bruce' heroName='Batman' />
      <Greet name='Clark' heroName='Superman'>
        <button>Action</button>
      </Greet>
      <Greet name='Diana' heroName='Wonder Woman'>
        <p>This is children props</p>
      </Greet> */}
      {/* <Message /> */}
      {/* <ClickHandler /> */}
      {/* <ParentComponent /> */}
      {/* <UserGreeting /> */}
      {/* <NameList /> */}
      {/* <Stylesheet /> */}
      <Inline />
      <h1 className='error'>Error</h1>
    </div>
  )
}

export default App
```

to use the class from the module style sheet
we still use the class name attribute but this is going to be equal to styles
dot success

```js
import './App.css'
import './appStyles.css'
import Styles from './appStyles.module.css'
import { Inline } from './components/Inline'
// import { NameList } from './components/NameList'
// import { UserGreeting } from './components/UserGreeting'
// import { ParentComponent } from './components/ParentComponent'
// import { ClickHandler } from './components/ClickHandler'
// import { Greet } from './components/Greet'
// import { Message } from './components/Message'
// import { Stylesheet } from './components/Stylesheet'

function App() {
  return (
    <div className='App'>
      {/* <Greet name='Bruce' heroName='Batman' />
      <Greet name='Clark' heroName='Superman'>
        <button>Action</button>
      </Greet>
      <Greet name='Diana' heroName='Wonder Woman'>
        <p>This is children props</p>
      </Greet> */}
      {/* <Message /> */}
      {/* <ClickHandler /> */}
      {/* <ParentComponent /> */}
      {/* <UserGreeting /> */}
      {/* <NameList /> */}
      {/* <Stylesheet /> */}
      <Inline />
      <h1 className='error'>Error</h1>
      <h1 className={Styles.success}>Success</h1>
    </div>
  )
}

export default App
```

so we access the class using the import statement variable name

if you now take a look at the browser
you should see both the classes being applied

#### one advantage of using css modules is that the classes are locally scoped by default

for example if i copy the error heading into the inline component

```js
export const Inline = () => {
  const heading = {
    fontSize: '72px',
    color: 'blue',
  }

  return <h1 className='error'>Error</h1>
}
```

you can see that it still works so the css kind of applies to every
child component as well

this might lead to css conflicts

css modules on the other hand because you reference the class name
using the styles variable they cannot be used in the children component

if i copy the success heading and paste it in the inline component

```js
export const Inline = () => {
  const heading = {
    fontSize: '72px',
    color: 'blue',
  }

  return <h1 className={Styles.success}>Success</h1>
}
```

you can see that the application does not compile it doesn't know what styles is

you can't accidentally use a class that is defined for some other component

but this is pretty much the basics of styling react components

### **=>** Forms

#### create a form like regular html

all right for our next topic we are going to learn the basics of working with forms in react

we will see how to capture input from an input html element and have the data
available for form submission

- i'm going to begin by creating a new file in the components folder, `Form.js`

within the file create a function
component export const form is equal to an arrow function

for the jsx let's start with a form element
so return the form tag

within the form tag add a div tag to group together a label and input

the label is going to be username and we add a corresponding input, type is equal to text

```js
export const Form = () => {
  return (
    <form>
      <div>
        <label>Username</label>
        <input type='text' />
      </div>
    </form>
  )
}
```

if we include this component in app component

- import the component at the top

```js
import './App.css'
import './appStyles.css'
// import Styles from './appStyles.module.css'
// import { Inline } from './components/Inline'
// import { NameList } from './components/NameList'
// import { UserGreeting } from './components/UserGreeting'
// import { ParentComponent } from './components/ParentComponent'
// import { ClickHandler } from './components/ClickHandler'
// import { Greet } from './components/Greet'
// import { Message } from './components/Message'
// import { Stylesheet } from './components/Stylesheet'
import { Form } from './components/Form'

function App() {
  return (
    <div className='App'>
      {/* <Greet name='Bruce' heroName='Batman' />
      <Greet name='Clark' heroName='Superman'>
        <button>Action</button>
      </Greet>
      <Greet name='Diana' heroName='Wonder Woman'>
        <p>This is children props</p>
      </Greet> */}
      {/* <Message /> */}
      {/* <ClickHandler /> */}
      {/* <ParentComponent /> */}
      {/* <UserGreeting /> */}
      {/* <NameList /> */}
      {/* <Stylesheet /> */}
      {/* <Inline />
      <h1 className='error'>Error</h1>
      <h1 className={Styles.success}>Success</h1> */}
      <Form />
    </div>
  )
}

export default App
```

save the file and take a look at the browser

you should be able to see the label and the input field

#### manage the form with react

right now though the form is regular html

we want to manage it with react

- to do that the first step is to `create a state variable to handle the value` and change in value of this input element

so in Form.js, at the top import useState from react

```js
import { useState } from 'react'

export const Form = () => {
  return (
    <form>
      <div>
        <label>Username</label>
        <input type='text' />
      </div>
    </form>
  )
}
```

within the component
let's create a state variable name

the setter function is set user name

this is going to be equal to the use
state function with an initial value of empty string

```js
import { useState } from 'react'

export const Form = () => {
  const [username, setUsername] = useState(' ')
  return (
    <form>
      <div>
        <label>Username</label>
        <input type='text' />
      </div>
    </form>
  )
}
```

now for the second step on the input element we assign username
to the value attribute so value is equal to username state
variable

```js
import { useState } from 'react'

export const Form = () => {
  const [username, setUsername] = useState(' ')
  return (
    <form>
      <div>
        <label>Username</label>
        <input type='text' value={username} />
      </div>
    </form>
  )
}
```

now if you save the file and go back to the browser
try type in a username

#### handling the onChange event

you're going to find out that the input
doesn't reflect the changes which brings us to the third step

handling the onChange event on the input element let's listen to the
onchange event

and to this we assign an arrow function

the function automatically receives the change event as an argument

```js
import { useState } from 'react'

export const Form = () => {
  const [username, setUsername] = useState(' ')
  return (
    <form>
      <div>
        <label>Username</label>
        <input type='text' value={username} onChange={(event) =>}/>
      </div>
    </form>
  )
}
```

we can use that event to update the username state variable

so call set user name
passing in event dot target dot value

```js
import { useState } from 'react'

export const Form = () => {
  const [username, setUsername] = useState(' ')
  return (
    <form>
      <div>
        <label>Username</label>
        <input type='text' value={username} onChange={(event) => setUsername(event.target.value)} />
      </div>
    </form>
  )
}
```

`this is nothing but the input elements value`

if we now head back to the browser
and type in vishwas you can see it works

#### how to submit the form data

all right we are able to keep track of the change in username

next let's see how to submit this form
data

in the jsx within the form tag i'm going
to add a submit button

type is equal to submit and the text is also submit

```js
import { useState } from 'react'

export const Form = () => {
  const [username, setUsername] = useState(' ')
  return (
    <form>
      <div>
        <label>Username</label>
        <input type='text' value={username} onChange={(event) => setUsername(event.target.value)} />
      </div>
      <button type='submit'>Submit</button>
    </form>
  )
}
```

if you go back to the browser click on the submit button
you see that the page refreshes

so right now the form has the default
html form behavior of browsing to a new page when the submit button is clicked

#### execute a javascript function that handles the submission

a common approach however is to execute a javascript function that handles the
submission of the form

and that form will also have access to the data that the user entered into the
form

so on the form tag we are going to assign a handler
to the on submit event

let's call it handle submit

```js
import { useState } from 'react'

export const Form = () => {
  const [username, setUsername] = useState(' ')
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username</label>
        <input type='text' value={username} onChange={(event) => setUsername(event.target.value)} />
      </div>
      <button type='submit'>Submit</button>
    </form>
  )
}
```

let's now define this handler, const handle submit is going to be equal to an arrow function

this function automatically receives the
submit event as an argument

```js
import { useState } from 'react'

export const Form = () => {
  const [username, setUsername] = useState(' ')

  const handleSubmit = (event) => {}

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username</label>
        <input type='text' value={username} onChange={(event) => setUsername(event.target.value)} />
      </div>
      <button type='submit'>Submit</button>
    </form>
  )
}
```

to prevent the page refresh we call
event dot prevent default

```js
import { useState } from 'react'

export const Form = () => {
  const [username, setUsername] = useState(' ')

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username</label>
        <input type='text' value={username} onChange={(event) => setUsername(event.target.value)} />
      </div>
      <button type='submit'>Submit</button>
    </form>
  )
}
```

and then in the next line we simply
alert the user name so alert, backticks,

form data is dollar curly braces username

```js
import { useState } from 'react'

export const Form = () => {
  const [username, setUsername] = useState(' ')

  const handleSubmit = (event) => {
    event.preventDefault()
    alert(`Form data is ${username}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username</label>
        <input type='text' value={username} onChange={(event) => setUsername(event.target.value)} />
      </div>
      <button type='submit'>Submit</button>
    </form>
  )
}
```

if you now save the file and go back to the browser

fill in the username

and click on submit you should be able to see the text from
data is vishwas

the page also does not refresh

this is pretty much the basics of working with forms in react

now as a quick exercise i suggest you handle two more form controls

- create a text area element for description

- and a select drop down element to capture a country

- handle the value and they're on change events and ensure you have the data for submission

let me know in the comments section if
you were able to achieve that

### **=>** HTTP GET & POST request

#### how to make a get request

all right for the penultimate topic in
this crash course we are going to learn how react works with http

we're going to understand with an example how to make a get request and how to make a post request

let's start with get requests

to fetch the data we need to have an api
endpoint

- for that i will be making use of json placeholder (https://jsonplaceholder.typicode.com/)

as you can see here it is basically a free fake api for testing and
prototyping

i want to focus on fetching data in our react application and not on creating an api

now if you scroll down to the `Routes section` you can see the possible http requests
you can make

- for this video i will be making a Get request to slash posts which will fetch
  an array of posts to display in the ui

let's get started

- i'm going to go back to vs code and create a new file` PostList.js`

and within the file i'm going to create a function component

- `export const` post list and this is going to be equal to an arrow function

```js
export const PostList = () => {}
```

- now to fetch data we need two hooks useState, which we had previously seen and a new hook called useEffect

so at the top
import use state comma use effect
from react

```js
import { useState, useEffect } from 'react'

export const PostList = () => {}
```

- next we're going to create a new state variable within the component

const, post, the setter function is called setPosts and this is going to be equal to use
state with an initial value of empty array

```js
import { useState, useEffect } from 'react'

export const PostList = () => {
  const [posts, setPosts] = useState([])
}
```

- next we're going to use the use effect hook to make the get request

the syntax is as follows use effect invoke use effect within the component the hook takes in a function as argument

so let's add an arrow function within the function body we make the get
request using the built-in fetch api so fetch

and we pass in the api endpoint this is the url from jsonplaceholder.com

copy and paste it

```js
import { useState, useEffect } from 'react'

export const PostList = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
  })
}
```

the fetch api returns a promise which we
need to resolve

so dot then block and convert the response to json
and chain another then block and with the data retrieved
update the posts state variable

so set post passing in data

```js
import { useState, useEffect } from 'react'

export const PostList = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data))
  })
}
```

let's also add a catch block and log the error to the console if there is any

```js
import { useState, useEffect } from 'react'

export const PostList = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((err) => {
        console.log(err)
      })
  })
}
```

now the effect we have defined here runs every time the component renders

however we want this to run only once when the component first renders

to do that we pass in an empty array as the second argument to use effect

```js
import { useState, useEffect } from 'react'

export const PostList = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((err) => {
        console.log(err)
      })
  }, [])
}
```

the array is a list of dependencies on which this effect depends on

since we want the api call to happen only once it has no dependencies

- the final step is to render the list of posts in the browser

so return a div tag a ul tag and then curly braces
posts dot map

```js
import { useState, useEffect } from 'react'

export const PostList = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div>
      <ul>{posts.map()}</ul>
    </div>
  )
}
```

we have already seen how to render a list of items so let me go over this
fairly quick

for each post we return the li tag
and each post has a title that we can display

we should also specify a unique value
for the key prob which is going to be post dot id

```js
import { useState, useEffect } from 'react'

export const PostList = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div>
      <ul>
        {posts.map((post) => {
          return <li key={post.id}>{post.title}</li>
        })}
      </ul>
    </div>
  )
}
```

you can see here that each object in the array has an id and a title

all right let's include this component in app.js and test it out

post list and if that doesn't auto import for you
make sure to import the component at the top host list from dot slash components
slash post list

```js
import './App.css'
// import './appStyles.css'
// import Styles from './appStyles.module.css'
// import { Inline } from './components/Inline'
// import { NameList } from './components/NameList'
// import { UserGreeting } from './components/UserGreeting'
// import { ParentComponent } from './components/ParentComponent'
// import { ClickHandler } from './components/ClickHandler'
// import { Greet } from './components/Greet'
// import { Message } from './components/Message'
// import { Stylesheet } from './components/Stylesheet'
// import { Form } from './components/Form'
import { PostList } from './components/PostList'

function App() {
  return (
    <div className='App'>
      {/* <Greet name='Bruce' heroName='Batman' />
      <Greet name='Clark' heroName='Superman'>
        <button>Action</button>
      </Greet>
      <Greet name='Diana' heroName='Wonder Woman'>
        <p>This is children props</p>
      </Greet> */}
      {/* <Message /> */}
      {/* <ClickHandler /> */}
      {/* <ParentComponent /> */}
      {/* <UserGreeting /> */}
      {/* <NameList /> */}
      {/* <Stylesheet /> */}
      {/* <Inline />
      <h1 className='error'>Error</h1>
      <h1 className={Styles.success}>Success</h1> */}
      {/* <Form /> */}
      <PostList />
    </div>
  )
}

export default App
```

if you now head to the browser
you should see the list of post titles being displayed

this is pretty much how you fetch data
with use effect and display the data with you state

use effect is a hook that you can use to make side effects in your components

the side effect in this example is an api request

the first argument to use effect is a
function and the second argument is a dependency array which is used to
determine when to rerun the effect

since we have an empty array the effect
is run only once when the component first mounts

#### how to make a post request to send data from our react application

now on similar lines let's see how to
make a post request to send data from our react application

if we go back to jsonplaceholder, under routes we have a small node
seed guide for usage examples

here if you scroll down you can see we have the code necessary
to make a post request

however the data it needs
which is title body and user id are hard coded

let's instead capture user inputs and make the first request using the data

- back in vs code i'm going to create a new file called `PostForm.js`

within the file i'm going to create a function component

- export const post form is equal to an
  arrow function

now for the jsx we need a form with
three input fields

return a form tag
a div tag type is equal to text

and placeholder is user id

the second input placeholder is title

and the third input placeholder is body

```js
export const PostForm = () => {
  return (
    <form>
      <div>
        <input type='text' placeholder='User ID' />
      </div>
      <div>
        <input type='text' placeholder='Title' />
      </div>
      <div>
        <input type='text' placeholder='Body' />
      </div>
    </form>
  )
}
```

- next let's create state variables for the three fields and link them to the input elements

at the top import use state from react

and within the component call use state three times for each of the three inputs

```js
import { useState } from 'react'

export const PostForm = () => {
  useState()
  useState()
  useState()
  return (
    <form>
      <div>
        <input type='text' placeholder='User ID' />
      </div>
      <div>
        <input type='text' placeholder='Title' />
      </div>
      <div>
        <input type='text' placeholder='Body' />
      </div>
    </form>
  )
}
```

the first one const user id comma set user id
and the initial value is an empty string

similarly
const title comma set title and the initial value is an empty string

finally const body comma set body and the initial value is an empty
string

```js
import { useState } from 'react'

export const PostForm = () => {
  const [userId, setUserId] = useState('')
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  return (
    <form>
      <div>
        <input type='text' placeholder='User ID' />
      </div>
      <div>
        <input type='text' placeholder='Title' />
      </div>
      <div>
        <input type='text' placeholder='Body' />
      </div>
    </form>
  )
}
```

on the inputs let's assign the
appropriate variable to the value attribute

value is equal to user id

value is equal to title

and value is equal to body

```js
import { useState } from 'react'

export const PostForm = () => {
  const [userId, setUserId] = useState('')
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  return (
    <form>
      <div>
        <input type='text' placeholder='User ID' value={userId} />
      </div>
      <div>
        <input type='text' placeholder='Title' value={title} />
      </div>
      <div>
        <input type='text' placeholder='Body' value={body} />
      </div>
    </form>
  )
}
```

also handle the onchange event

you get access to the event and on the first input we call set user
id passing in event dot target dot value

similarly on change event
set title event dot target dot value

and on change event set body
event.target.value

```js
import { useState } from 'react'

export const PostForm = () => {
  const [userId, setUserId] = useState('')
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  return (
    <form>
      <div>
        <input
          type='text'
          placeholder='User ID'
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
      </div>
      <div>
        <input
          type='text'
          placeholder='Title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <input
          type='text'
          placeholder='Body'
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </div>
    </form>
  )
}
```

- the last thing we need is the submit handler

i'm going to add a button
of type submit

and then on the form tag we listen to the on submit event and assign a handler
submit handler

```js
import { useState } from 'react'

export const PostForm = () => {
  const [userId, setUserId] = useState('')
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  return (
    <form onSubmit={subHandler}>
      <div>
        <input
          type='text'
          placeholder='User ID'
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
      </div>
      <div>
        <input
          type='text'
          placeholder='Title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <input
          type='text'
          placeholder='Body'
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </div>
      <button type='submit'>Submit</button>
    </form>
  )
}
```

let's define this handler

const submit handler is going to be equal to a function
which receives the submit event and within the function body we call event dot prevent default
to prevent the form submission and page refreshing

```js
import { useState } from 'react'

export const PostForm = () => {
  const [userId, setUserId] = useState('')
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const submitHandler = (event) => {
    event.preventDefault()
  }
  return (
    <form onSubmit={submitHandler}>
      <div>
        <input
          type='text'
          placeholder='User ID'
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
      </div>
      <div>
        <input
          type='text'
          placeholder='Title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <input
          type='text'
          placeholder='Body'
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </div>
      <button type='submit'>Submit</button>
    </form>
  )
}
```

finally to make the post request
copy the code from jsonplaceholder and paste it

```js
import { useState } from 'react'

export const PostForm = () => {
  const [userId, setUserId] = useState('')
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const submitHandler = (event) => {
    event.preventDefault()
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'PUT',
      body: JSON.stringify({
        id: 1,
        title: 'foo',
        body: 'bar',
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
  }
  return (
    <form onSubmit={submitHandler}>
      <div>
        <input
          type='text'
          placeholder='User ID'
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
      </div>
      <div>
        <input
          type='text'
          placeholder='Title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <input
          type='text'
          placeholder='Body'
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </div>
      <button type='submit'>Submit</button>
    </form>
  )
}
```

however change the hard-coded values
title body and user id

```js
import { useState } from 'react'

export const PostForm = () => {
  const [userId, setUserId] = useState('')
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const submitHandler = (event) => {
    event.preventDefault()
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'PUT',
      body: JSON.stringify({
        id: 1,
        title: 'title',
        body: 'body',
        userId: userId,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
  }
  return (
    <form onSubmit={submitHandler}>
      <div>
        <input
          type='text'
          placeholder='User ID'
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
      </div>
      <div>
        <input
          type='text'
          placeholder='Title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <input
          type='text'
          placeholder='Body'
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </div>
      <button type='submit'>Submit</button>
    </form>
  )
}
```

the other noticeable difference with the built-in fetch method as we now have method set to post
and headers

with the response we simply convert it into json and log it to the console

now let's include this component in app component

- import the component at the top

```js
import './App.css'
// import './appStyles.css'
// import Styles from './appStyles.module.css'
// import { Inline } from './components/Inline'
// import { NameList } from './components/NameList'
// import { UserGreeting } from './components/UserGreeting'
// import { ParentComponent } from './components/ParentComponent'
// import { ClickHandler } from './components/ClickHandler'
// import { Greet } from './components/Greet'
// import { Message } from './components/Message'
// import { Stylesheet } from './components/Stylesheet'
// import { Form } from './components/Form'
import { PostForm } from './components/PostForm'
import { PostList } from './components/PostList'

function App() {
  return (
    <div className='App'>
      {/* <Greet name='Bruce' heroName='Batman' />
      <Greet name='Clark' heroName='Superman'>
        <button>Action</button>
      </Greet>
      <Greet name='Diana' heroName='Wonder Woman'>
        <p>This is children props</p>
      </Greet> */}
      {/* <Message /> */}
      {/* <ClickHandler /> */}
      {/* <ParentComponent /> */}
      {/* <UserGreeting /> */}
      {/* <NameList /> */}
      {/* <Stylesheet /> */}
      {/* <Inline />
      <h1 className='error'>Error</h1>
      <h1 className={Styles.success}>Success</h1> */}
      {/* <Form /> */}
      <PostForm />
      <PostList />
    </div>
  )
}

export default App
```

save the file and head back to the browser
i fill in user id title
body and click on submit

in the console you should now be able to see the response

if you expand the object you pretty much get back the same object you posted but this time with the unique id

this object can be used for any necessary changes in the ui

for example you can add this object to
the end of the post list which might be displayed in the browser

so there you go making a post request in your react application

create the input fields type the values to the state object and make a post request in the submit handler

#### making put or delete requests

once you get the hang of get and post requests making put or delete requests
is pretty much the same so i will leave that for you to experiment with

### **=>** UseTransition hook

#### unlike use state and use effect use transition is a hook that is more concerned with performance rather than supporting a core functionality

the use transition hook which was introduced in react 18.

the best way to understand use transition is with an example so let's
dive into the code straight away

for this example we need a large list of
items

- i'm going to create a new file called `data.json` and copy paste an array of 1000 names

i have used mackaroo.com to generate this json data

each object in the array contains a unique id first name and last name

#### now that we have our list let's render it in the app component

at the top begin by importing the names json so import
names from dot slash components
slash data dot json

```js
import './App.css'
import NAMES from './components/data.json'

function App() {
  return <div className='App'></div>
}

export default App
```

next in the jsx
we render the list of names using the map method

very similar to list rendering that we
have learnt earlier

so curly braces
names dot map

map accepts a function as argument

this function receives each object in the array as an argument let's call it item

```js
import './App.css'
import NAMES from './components/data.json'

function App() {
  return <div className='App'>
  {
    NAMES.map((item)=> (

    ))
  }
  </div>
}

export default App
```

for each item we render a paragraph that displays the first name and last name
item dot first name followed by
item dot last name

make sure to also include the key prop
with a unique value when rendering a list of elements

key is going to be equal to item dot id

```js
import './App.css'
import NAMES from './components/data.json'

function App() {
  return (
    <div className='App'>
      {NAMES.map((item) => (
        <p key={item.id}>
          {item.first_name} {item.last_name}
        </p>
      ))}
    </div>
  )
}

export default App
```

if we save the file and take a look at the browser

we should be able to see the list of
1000 names being displayed

#### now what we want to do is allow the user to enter a filter text and filter the list of names based on that text

- let's begin by adding the input field

at the top
import you state from react

```js
import './App.css'
import NAMES from './components/data.json'
import { useState } from 'react'

function App() {
  return (
    <div className='App'>
      {NAMES.map((item) => (
        <p key={item.id}>
          {item.first_name} {item.last_name}
        </p>
      ))}
    </div>
  )
}

export default App
```

- within the component create a state variable to manage the text field value

so const query comma set query

and this is going to be equal to use
state with an initial value of empty string

```js
import './App.css'
import NAMES from './components/data.json'
import { useState } from 'react'

function App() {
  const [query, setQuery] = useState('')
  return (
    <div className='App'>
      {NAMES.map((item) => (
        <p key={item.id}>
          {item.first_name} {item.last_name}
        </p>
      ))}
    </div>
  )
}

export default App
```

- in the jsx add an input field

type is equal to text

value is equal to query

on change is equal to change handler

```js
import './App.css'
import NAMES from './components/data.json'
import { useState } from 'react'

function App() {
  const [query, setQuery] = useState('')
  return (
    <div className='App'>
      <input type='text' value={query} onChange={changeHandler} />
      {NAMES.map((item) => (
        <p key={item.id}>
          {item.first_name} {item.last_name}
        </p>
      ))}
    </div>
  )
}

export default App
```

- let's define the handler

const change handler
is equal to an arrow function

this receives an event
and within the function body we call set query passing in event dot target dot
value

```js
function App() {
  const [query, setQuery] = useState('')
  const changeHandler = (event) => {
    setQuery(event.target.value)
  }
  return (
    <div className='App'>
      <input type='text' value={query} onChange={changeHandler} />
      {NAMES.map((item) => (
        <p key={item.id}>
          {item.first_name} {item.last_name}
        </p>
      ))}
    </div>
  )
}

export default App
```

- now let's filter the names with this query text

const filtered names
is equal to names dot filter

and for each item
we return either item dot first name includes the query
text or item dot last name includes the query text

```js
import './App.css'
import NAMES from './components/data.json'
import { useState } from 'react'

function App() {
  const [query, setQuery] = useState('')
  const changeHandler = (event) => {
    setQuery(event.target.value)
    const filteredNames = NAMES.filter((item) => {
      return item.filter_name.includes(query) || item.last_name.includes(query)
    })
  }
  return (
    <div className='App'>
      <input type='text' value={query} onChange={changeHandler} />
      {NAMES.map((item) => (
        <p key={item.id}>
          {item.first_name} {item.last_name}
        </p>
      ))}
    </div>
  )
}

export default App
```

finally instead of mapping over names map over filtered names

```js
import './App.css'
import NAMES from './components/data.json'
import { useState } from 'react'

function App() {
  const [query, setQuery] = useState('')
  const changeHandler = (event) => {
    setQuery(event.target.value)
    const filteredNames = NAMES.filter((item) => {
      return item.filter_name.includes(query) || item.last_name.includes(query)
    })
  }
  return (
    <div className='App'>
      <input type='text' value={query} onChange={changeHandler} />
      {filteredNames.map((item) => (
        <p key={item.id}>
          {item.first_name} {item.last_name}
        </p>
      ))}
    </div>
  )
}

export default App
```

if we now save the file and head to the browser we have our input and the list of names

in the input field type bin and we see the filtered list of names

#### everything works well but that is dependent on the machine you're running the application on

i have decent specifications on my machine but not everyone might have that

so let's open the dev tools
head over to the performance tab and throttle cpu

6x slow down

we are basically asking our react app to
be run on a computer that is six times slower

i want you to now observe what happens
when i select the full text and hit backspace
three two one and backspace

you can see there was a lag for almost a second before the ui updated

and this is because the filtered list of names had to be recalculated

if i type in bin again it feels slow as well

it might not be visible to you but i can also sense the lag when typing

what i want you to observe is that when i clear the text it is not cleared out right away
instead it waits for the filtered list to be recalculated and both the input
field and the list of names then update at the same time

backspace and you can see both happen at the same time

this is because by default all updates in react are considered
urgent

which as you might see can create a problem when quick updates like updating
the input field text is slowed down by heavy updates like recalculating the
filtered list

#### to solve this problem what we need is a way to tell react some updates are not urgent that would help react process the urgent updates first and then the not so urgent updates

- this is where the use transition hook comes into picture

#### the useTransition hook allows us to mark some updates as interruptable and non-urgent

or in other words we can mark them as transitions

react will process urgent updates first and then transitions to improve the
perceived performance

let's see how it works

- first import use transition from react

```js
import './App.css'
import NAMES from './components/data.json'
import { useState, useTransition } from 'react'

function App() {
  const [query, setQuery] = useState('')
  const changeHandler = (event) => {
    setQuery(event.target.value)
    const filteredNames = NAMES.filter((item) => {
      return item.filter_name.includes(query) || item.last_name.includes(query)
    })
  }
  return (
    <div className='App'>
      <input type='text' value={query} onChange={changeHandler} />
      {filteredNames.map((item) => (
        <p key={item.id}>
          {item.first_name} {item.last_name}
        </p>
      ))}
    </div>
  )
}

export default App
```

- next invoke it within the component

```js
import './App.css'
import NAMES from './components/data.json'
import { useState, useTransition } from 'react'

function App() {
  const [query, setQuery] = useState('')
  useTransition()
  const changeHandler = (event) => {
    setQuery(event.target.value)
    const filteredNames = NAMES.filter((item) => {
      return item.filter_name.includes(query) || item.last_name.includes(query)
    })
  }
  return (
    <div className='App'>
      <input type='text' value={query} onChange={changeHandler} />
      {filteredNames.map((item) => (
        <p key={item.id}>
          {item.first_name} {item.last_name}
        </p>
      ))}
    </div>
  )
}

export default App
```

the hook returns two values
is pending which is a boolean value indicating whether the transition is in progress

and a start transition function
which is used to mark heavy updates as transitions

```js
import './App.css'
import NAMES from './components/data.json'
import { useState, useTransition } from 'react'

function App() {
  const [query, setQuery] = useState('')
  const [isPending, startTransition] = useTransition()
  const changeHandler = (event) => {
    setQuery(event.target.value)
    const filteredNames = NAMES.filter((item) => {
      return item.filter_name.includes(query) || item.last_name.includes(query)
    })
  }
  return (
    <div className='App'>
      <input type='text' value={query} onChange={changeHandler} />
      {filteredNames.map((item) => (
        <p key={item.id}>
          {item.first_name} {item.last_name}
        </p>
      ))}
    </div>
  )
}

export default App
```

- next we're going to create another state variable to manage the input text value separately

so const input value
comma set input value is going to be equal to u state with an
empty string as the initial value

```js
import './App.css'
import NAMES from './components/data.json'
import { useState, useTransition } from 'react'

function App() {
  const [query, setQuery] = useState('')
  const [inputValue, setInputValue] = useState('')
  const [isPending, startTransition] = useTransition()
  const changeHandler = (event) => {
    setQuery(event.target.value)
    const filteredNames = NAMES.filter((item) => {
      return item.filter_name.includes(query) || item.last_name.includes(query)
    })
  }
  return (
    <div className='App'>
      <input type='text' value={query} onChange={changeHandler} />
      {filteredNames.map((item) => (
        <p key={item.id}>
          {item.first_name} {item.last_name}
        </p>
      ))}
    </div>
  )
}

export default App
```

but now we update the value prop
to input value

```js
import './App.css'
import NAMES from './components/data.json'
import { useState, useTransition } from 'react'

function App() {
  const [query, setQuery] = useState('')
  const [inputValue, setInputValue] = useState('')
  const [isPending, startTransition] = useTransition()
  const changeHandler = (event) => {
    setQuery(event.target.value)
    const filteredNames = NAMES.filter((item) => {
      return item.filter_name.includes(query) || item.last_name.includes(query)
    })
  }
  return (
    <div className='App'>
      <input type='text' value={inputValue} onChange={changeHandler} />
      {filteredNames.map((item) => (
        <p key={item.id}>
          {item.first_name} {item.last_name}
        </p>
      ))}
    </div>
  )
}

export default App
```

and in the change handler
call set input value

```js
import './App.css'
import NAMES from './components/data.json'
import { useState, useTransition } from 'react'

function App() {
  const [query, setQuery] = useState('')
  const [inputValue, setInputValue] = useState('')
  const [isPending, startTransition] = useTransition()
  const changeHandler = (event) => {
    setInputValue(event.target.value)
    const filteredNames = NAMES.filter((item) => {
      return item.filter_name.includes(query) || item.last_name.includes(query)
    })
  }
  return (
    <div className='App'>
      <input type='text' value={inputValue} onChange={changeHandler} />
      {filteredNames.map((item) => (
        <p key={item.id}>
          {item.first_name} {item.last_name}
        </p>
      ))}
    </div>
  )
}

export default App
```

set query though we will still update
with the input value but as a transition

so within change handler
invoke start transition function which accepts a callback
so pass in another function and here we call set query passing in
the same input value

so start transition accepts a function where we make the state change that causes a heavy update

```js
import './App.css'
import NAMES from './components/data.json'
import { useState, useTransition } from 'react'

function App() {
  const [query, setQuery] = useState('')
  const [inputValue, setInputValue] = useState('')
  const [isPending, startTransition] = useTransition()

  const changeHandler = (event) => {
    setInputValue(event.target.value)
    startTransition(() => setQuery(event.target.value))

    const filteredNames = NAMES.filter((item) => {
      return item.filter_name.includes(query) || item.last_name.includes(query)
    })
  }
  return (
    <div className='App'>
      <input type='text' value={inputValue} onChange={changeHandler} />
      {filteredNames.map((item) => (
        <p key={item.id}>
          {item.first_name} {item.last_name}
        </p>
      ))}
    </div>
  )
}

export default App
```

query is used in the filter function which is the heavier operation

in the jsx let's use the ease pending flag to
render some text and indicate that the transition is still pending

so below the input curly braces
is pending and a paragraph tag that says updating list ...

```js
import './App.css'
import NAMES from './components/data.json'
import { useState, useTransition } from 'react'

function App() {
  const [query, setQuery] = useState('')
  const [inputValue, setInputValue] = useState('')
  const [isPending, startTransition] = useTransition()

  const changeHandler = (event) => {
    setInputValue(event.target.value)
    startTransition(() => setQuery(event.target.value))
  }
  const filteredNames = NAMES.filter((item) => {
    return item.filter_name.includes(query) || item.last_name.includes(query)
  })
  return (
    <div className='App'>
      <input type='text' value={inputValue} onChange={changeHandler} />
      {isPending && <p>Updating list...</p>}
      {filteredNames.map((item) => (
        <p key={item.id}>
          {item.first_name} {item.last_name}
        </p>
      ))}
    </div>
  )
}

export default App
```

if we now head back to the browser
type bin we see the filter list

but when i clear out the text i want you to observe that the input field text updates first and then the
filtered list updates after a small delay we will also see the updating list text
below the input since the transition would be in progress
three two one backspace
we can see input is now cleared we see the text updating list
and finally the list updates so we are able to separate the urgent
updates from the non-urgent updates this gives you a small improvement in
the performance or at least the perceived performance
that is how they use transition hook functions now as a beginner
this is the only new feature from react 18 that you need to be concerned about
other features include automatic batching which is out of the box and you don't have to write any additional code
and a few other features related to suspense and server-side rendering which are again advanced
topics


### **=>** Further learning

with that we come to the end of this crash course on the fundamentals of
react

from here i would like to suggest the next steps that you can take to continue
down the react path

- first go through my video on the react
  roadmap for 2022

this will give you a big picture of react and its ecosystem

- after that start with my react playlist

it covers pretty much every concept you
need to know about react class components the advanced concepts

advanced hooks how react components re-render

the optimization techniques
and how to use react with typescript

- you can then start on some libraries

that help build large scale react apps

react query for all api requests
material ui chakra ui or mantine to work with readily available ui components

formic or react hook form for complex form management

and finally nexgs which is a react framework for production

over the past few years i've tried my best to make this channel a one-stop shop for everything related to react
so you will find a lot more playlists on libraries that i haven't mentioned as well for example react router browse
through the channel and learn something that is of interest to you i guarantee you'll not regret it
if you have enjoyed the video please do leave a like and subscribe to the channel for more content on web development
