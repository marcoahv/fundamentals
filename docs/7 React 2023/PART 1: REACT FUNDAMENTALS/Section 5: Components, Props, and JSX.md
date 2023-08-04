---
sidebar_position: 4
---

---

## - Section Overview

### Core Concepts of Building React Apps

In this section, we will explore three core concepts of building React apps.

### Components

- Components are the building blocks of React applications.

- They serve as the foundation for creating UI elements.

- Components can be reused and combined to create complex UI structures.

### Props

- Props allow data to be passed from a parent component to a child component.

- They provide a way to customize and configure components.

- Props are read-only and should not be modified within the child component.

### JSX Syntax

- JSX is a syntax extension for JavaScript that allows writing HTML-like code in JavaScript files.

- It simplifies the process of creating and rendering components.

- JSX elements can be used to define the structure and appearance of UI components.

### Sharing Data between Components

- Components can communicate and share data with each other using props.

- Props enable the transfer of information from a parent component to its child components.

- This allows for dynamic and interactive rendering of data within the app.

### Rendering Lists and Conditional Rendering

- React provides methods for rendering lists of items dynamically.

- Conditional rendering allows components to display different content based on certain conditions.

- These techniques enhance the flexibility and versatility of React applications.

### Building a Developer Profile Card

- Throughout this section, we will build a developer profile card as a practical project.

- This project will serve as a hands-on exercise to apply the core concepts we learn.

- By building the profile card, you will gain experience in creating components, using props, and implementing JSX syntax.

- This project will provide a solid foundation for further React development.

## **- Rendering the Root Component and Strict Mode**

### Building the Pizza Menu Project

In this section, we will build the Pizza Menu project from scratch.

- Let's start by `deleting all files in the src folder`.

- Create a new file called `index.js` in the src folder, as the entry point for our project.

### Importing React and ReactDOM

In the index.js file, we need to import React and ReactDOM.

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
```

### Creating the App Component

Next, we will create the App component.

- Define a function called App.

- Return the JSX code `<h1>Hello React!</h1>` .

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'

function App() {
  return <h1>Hello React!!</h1>
}
```

### Rendering the App Component

To render our app component, we need to select the root element and render the app inside it.

- Use the `document.getElementById` method to select the root element with the id "root".

- Use the `ReactDOM.createRoot` method to create a root element.

- Render the app component inside the root element using the `root.render` method.

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'

function App() {
  return <h1>Hello React!!</h1>
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
```

### Rendering in Older Versions of React

If you are working with an older codebase before React v18, rendering works differently.

- Use the `React.render` method to render the app component.

- Make sure to import `react-dom/client` for this method to work.

### Activating Strict Mode

We can activate strict mode by wrapping the app component with the `React.StrictMode` component.

- Use the `React.StrictMode` component to wrap the app component.

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'

function App() {
  return <h1>Hello React!!</h1>
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
```

- Strict mode helps catch bugs and outdated API usage during development.

- It renders all components twice to identify potential issues.

- It's a good practice to always activate strict mode when developing React applications.

## - Before We Start Coding: Debugging

- Techniques for dealing with errors and problems

### Checking if the Application is Running

- Making sure the application is actually running

- Restarting the application if it's not updating

### Hard Reloading the Browser

- Sometimes a hard reload is necessary to fix issues

- Clicking the reloading button in the browser

### Keeping the Terminal and Dev Tools Open

- Keeping the terminal and dev tools open at all times

- Monitoring for unexpected errors in the console

### Understanding Error Messages

- React's error messages and error overlays

- Using error messages to identify and fix issues

- Googling error messages for solutions

### Working with ESLint

- Using ESLint to catch potential issues

- Working with ESLint warnings and errors

- Checking the Problems tab for ESLint issues

### Troubleshooting Extensions

- Issues with the Prettier and ESLint extensions

- Checking the Output tab for extension errors

### Comparing Code for Bugs

- Comparing code with the final project code

- Identifying and fixing bugs in your code

### Handling Legacy Code

- Handling older versions of React

- Making necessary adjustments for older code bases

### Conclusion

- Tips for dealing with problems in React applications

- Importance of debugging skills in the coding process

## - Components as Building Blocks

- React is all about components.

- Components are the most fundamental concept in React.

- React applications are made entirely out of components.

- Components are the building blocks of any user interface in React.

- React renders a view for each component, which makes up the user interface.

- Each component has its own data, JavaScript logic, and appearance.

- Components describe how they work and what they look like.

- Complex UIs in React are built by combining multiple components.

- Components can be nested inside each other.

- Nesting components and component reusability are key aspects of using components in React.

- Components can be easily reused by passing different data using props.

- `Breaking a design into components is a crucial skill in React development`.

- A component tree shows the hierarchy and relationships between components.

- Parent and child components are terms used in React to describe relationships.

- A component tree helps understand how components are nested and relate to each other.

## - Creating And Reusing a Component

Let's continue building our application by creating a brand new component and by taking a first look at reusability.

### Getting Starter Files

First, let's get the starter files for this project from the files that we downloaded from GitHub.

https://github.com/jonasschmedtmann/ultimate-react-course/tree/main/03-pizza-menu/starter

- In the starter folder, take these three files , `index.css, data.js, pizzas folder`, copy and then go into your project folder.

- Copy them for now into the `public` folder.

### Creating a New Component

- In React we write new components using functions.

- Create a function called Pizza because it will contain some data about a pizza.

- For now, we have no parameters to this function and then the function body.

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'

function App() {
  return <h1>Hello React!!</h1>
}

function Pizza() {
  return <h2>Pizza</h2>
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
```

### React Component Rules

In React, there are two important rules when we write components as functions.

- First, the function name `needs to start with an uppercase letter`.

- Second, the function needs to return some markup, usually in the form of JSX.

### Including the New Component

Nothing will appear in the user interface because we're not including this new component anywhere.

- We can use our component just like this.

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'

function App() {
  return <h1>Hello React!!</h1><Pizza/>
}

function Pizza() {
  return <h2>Pizza</h2>
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
```

### Handling Errors

This however will give us an error because each component can only return exactly one element, not two elements as we have here.

- Wrap this into a div.

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'

function App() {
  return (
    <div>
      <h1>Hello React!!</h1>
      <Pizza />
    </div>
  )
}

function Pizza() {
  return <h2>Pizza</h2>
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
```

- Now we get our pizza in the UI because we now nested this pizza component inside this app component.

### Nesting vs Declaring

By nesting, we mean that we basically used or called this component here inside app.

- What's very important to notice is that by nesting, we do not mean that we write a function inside this other function.

- When we say nesting components, what we mean is that we call, so we include one component into another.

### Making Component More Interesting

Let's now make this pizza component here just a little bit more interesting by using our starter data.

- Open up data.js and select everything, then copy it and paste it here.

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'

function App() {
  return (
    <div>
      <h1>Hello React!!</h1>
      <Pizza />
    </div>
  )
}

function Pizza() {
  return <h2>Pizza</h2>
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
```

### Reusing Components

We have this component here and now let's talk about the idea of reusing this component.

- `To reuse this component, we basically use it several times`.

- That now this piece of UI, which is the pizza component, will be included three times.

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'

function App() {
  return (
    <div>
      <h1>Hello React!!</h1>
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
  )
}

function Pizza() {
  return (
    <div>
      <img src='pizzas/spinaci.jpg' alt='Pizza spinaci' />
      <h2>Pizza Spinaci</h2>
      <p>Tomato, mozarella, spinach, and ricotta cheese</p>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
)
```

- The data here in all of them is now the same because we didn't customize that data yet, but we will do that later.

## - What is JSX?

### JSX and its Importance in React

- JSX is a declarative syntax used in React to describe the appearance and behavior of components based on their data and logic.

- JSX allows us to combine HTML, CSS, and JavaScript into one block of code.

- JSX is an extension of JavaScript and can be converted to JavaScript using tools like Babel.

- Browsers do not understand JSX, so it needs to be converted to nested `React.createElement` function calls, which create the HTML elements.

- React can be used without JSX, but JSX makes the code more readable and easier to understand.

- JSX follows a declarative approach, where we describe what the UI should look like based on the current data (props and state) in the component.

- In the declarative approach, we use JSX to describe the UI without manipulating the DOM directly.

- React automatically synchronizes the UI with the data, eliminating the need for manual DOM manipulation.

- The declarative approach has advantages over the imperative approach, such as easier code maintenance and better scalability.

### JSX Conversion and React's Abstraction from the DOM

- JSX is converted to nested `React.createElement` function calls to create the HTML elements.

- React acts as a huge abstraction layer between developers and the DOM, allowing us to work with the UI as a reflection of the current data.

- The declarative approach in React allows us to focus on describing the UI based on the data, without specifying step-by-step instructions for DOM manipulation.

- React automatically handles the synchronization between the UI and the data, providing many advantages in terms of code simplicity and maintainability.

## - ## Creating More Components

- We will now create additional components to further build our application using JSX.

- We will create components for the `header`, `menu`, and `footer`.

### The header component

- The header component will display the name of the pizzeria.

```jsx
function Header() {
  return <h1>Fast React Pizza Co.</h1>
}
```

### The menu component

- The menu component will include the menu items, specifically the pizzas.

```jsx
function Menu() {
  return (
    <div>
      <h2>Menu</h2>
      <Pizza />
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
  )
}
```

### The footer component

- The footer component will indicate that the restaurant is currently open.

```jsx
function Footer() {
  return <footer>{new Date().toLocaleTimeString()}. We're currently open!</footer>
}
```

### We can use these components as if they were HTML elements, thanks to JSX.

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  )
}

function Header() {
  return <h1>Fast React Pizza Co.</h1>
}

function Menu() {
  return (
    <div>
      <h2>Menu</h2>
      <Pizza />
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
  )
}

function Footer() {
  return <footer>{new Date().toLocaleTimeString()}. We're currently open!</footer>
}

function Pizza() {
  return (
    <div>
      <img src='pizzas/spinaci.jpg' alt='Pizza spinaci' />
      <h2>Pizza Spinaci</h2>
      <p>Tomato, mozarella, spinach, and ricotta cheese</p>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
```

- We can nest components within each other to create complex user interfaces.

- The app component is the main component that contains the header, menu, and footer components.

- The pizza component will be reused multiple times within the menu component to display each pizza.

- By combining small components into bigger ones, we can build complex user interfaces.

- We can also use JavaScript within JSX to dynamically display content, such as the current time in the footer component.

- JSX allows us to write code that combines HTML, CSS, and JavaScript in a single block.

## - JavaScript Logic in Components

- Components in React are JavaScript functions, allowing us to write any JavaScript logic inside them.

- The logic is executed as soon as the component is initialized.

### Example

- We can create variables and perform operations within the component.

- For example, we can use the `getHours` method of the `Date` object to retrieve the current hour.

- The console can be used to log the value of variables, providing visibility into the logic.

```jsx
function Footer() {
  const hour = new Date().getHours()
  console.log(hour)

  return <footer>{new Date().toLocaleTimeString()}. We're currently open!</footer>
}
```

- We can use conditional statements, such as an `if-else` statement, to execute different code based on certain conditions.

- The `alert` function can be used to display messages to the user.

```jsx
function Footer() {
  const hour = new Date().getHours()
  const openHour = 12
  const closeHour = 20

  if (hour >= openHour && hour <= closeHour) alert('We are currently open!')
  else alert('Sorry we are closed')

  return <footer>{new Date().toLocaleTimeString()}. We're currently open!</footer>
}
```

- It is important to note that the `alert` function blocks JavaScript execution until the user interacts with the alert.

- While this demonstration shows the usage of JavaScript logic in components, it is not recommended to use blocking functions like `alert` in real applications.

- We can create variables to store boolean values based on certain conditions, allowing us to determine if something is true or false.

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  )
}

function Header() {
  return <h1>Fast React Pizza Co.</h1>
}

function Menu() {
  return (
    <div>
      <h2>Menu</h2>
      <Pizza />
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
  )
}

function Footer() {
  const hour = new Date().getHours()
  const openHour = 12
  const closeHour = 20

  const isOpen = hour >= openHour && hour <= closeHour

  console.log(isOpen)

  // if () alert('We are currently open!')
  // else alert('Sorry we are closed')

  return <footer>{new Date().toLocaleTimeString()}. We're currently open!</footer>
}

function Pizza() {
  return (
    <div>
      <img src='pizzas/spinaci.jpg' alt='Pizza spinaci' />
      <h2>Pizza Spinaci</h2>
      <p>Tomato, mozarella, spinach, and ricotta cheese</p>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
```

- The console can be used to verify the value of the `isOpen` variable.

- By using JavaScript logic in components, we can incorporate dynamic behavior and make our components more interactive.

## - Separation of Concerns

- At this point, we have used JSX to describe the appearance of some components and have also used JavaScript inside them.

- React combines HTML, CSS, and JavaScript into one single block of code, which might raise the question of why React introduced this concept.

### Understanding the reason behind React's design around components is crucial.

- Let's delve into this topic from the beginning, starting with the rise of interactive single-page applications.

- In the past, we had separate files for HTML, JavaScript, and CSS, following the traditional separation of concerns with one technology per file.

- However, as pages became more interactive and transformed into single-page applications, JavaScript started to play a significant role in determining the user interface and content.

- `JavaScript became more responsible for the HTML`, resulting in tight coupling between JavaScript logic and HTML presentation.

- `In modern web applications, React components and JSX emerged as a solution to address this tight coupling between logic and UI`.

- React components encapsulate the data, logic, and appearance of a specific UI element, aligning with the tight coupling between logic and UI.

- This fundamental reason is why React revolves around components, a concept shared by most modern front-end frameworks.

- Within a React component, JavaScript and HTML markup coexist seamlessly.

- Components contain JavaScript logic, JSX, and even more JavaScript within JSX, demonstrating how content and logic are closely intertwined.

- Despite initial resistance to JSX and the departure from traditional separation of concerns, React does have separation of concerns.

- React's separation of concerns is different from the traditional approach, focusing on one concern per component rather than per file.

- Each component is dedicated to one piece of the UI, while HTML, CSS, and JavaScript remain intertwined within the component.

- React's approach, although initially unfamiliar, has proven to be highly effective by consolidating all the information about a component in one place.

- In conclusion, React's separation of concerns is achieved through components, with each component dedicated to one aspect of the UI.

- This lecture aimed to provide additional fundamental React knowledge, enhancing the understanding of React's separation of concerns.

## - Styling React Applications

- React components can include CSS styles to define their appearance.

- React does not impose any specific way of styling components and allows developers to choose from various options.

- Some of the popular styling options in React include inline styling, external CSS files, CSS modules, styled components, and frameworks like Tailwind CSS.

- This lecture will focus on inline styling and external CSS files, but other options will be covered later.

### Inline styling

- Inline styling in JSX is done using a JavaScript object, where `the style attribute contains the object`.

- So if we need to write a JavaScript object we first need to enter JavaScript mode. So that's what the curly braces are for.

- But then we need another set of curly braces. And so that is again, to now create an object.

```jsx
function Header() {
  return <h1 style={{ color: 'red' }}>Fast React Pizza Co.</h1>
}
```

- `CSS property names in JSX follow the camel case notation` instead of hyphen-separated format used in regular CSS.

- Inline styles are defined using JavaScript objects, and `the values are typically strings`.

```jsx
function Header() {
  return (
    <h1 style={{ color: 'red', fontSize: '48px', textTransform: 'Uppercase' }}>
      Fast React Pizza Co.
    </h1>
  )
}
```

- Because again, this is in the end just a JavaScript object and you could even extract this out here.

```jsx
function Header() {
  const style = {
    color: 'red',
    fontSize: '48px',
    textTransform: 'Uppercase',
  }

  return <h1 style={style}>Fast React Pizza Co.</h1>
}
```

### External CSS

- External CSS files can be imported into React components using the import statement.

- Webpack takes care of injecting the styles from the CSS file into the application.

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
```

- Class names from the CSS file can be added to JSX elements using the `className` attribute instead of the regular `class` attribute.

- The `className` attribute is used to avoid conflicts with the reserved keyword `class` in JavaScript.

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

function App() {
  return (
    <div className='container'>
      <Header />
      <Menu />
      <Footer />
    </div>
  )
}

function Header() {
  // const style = {
  //   color: 'red',
  //   fontSize: '48px',
  //   textTransform: 'Uppercase',
  // }
  const style = {}

  return (
    <header className='header'>
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  )
}

function Menu() {
  return (
    <main className='menu'>
      <h2>Our Menu</h2>
      <Pizza />
      <Pizza />
      <Pizza />
      <Pizza />
    </main>
  )
}

function Footer() {
  const hour = new Date().getHours()
  const openHour = 12
  const closeHour = 20
  const isOpen = hour >= openHour && hour <= closeHour

  console.log(isOpen)

  // if () alert('We are currently open!')
  // else alert('Sorry we are closed')

  return (
    <footer className='footer'>{new Date().toLocaleTimeString()}. We're currently open!</footer>
  )
}

function Pizza() {
  return (
    <div>
      <img src='pizzas/spinaci.jpg' alt='Pizza spinaci' />
      <h3>Pizza Spinaci</h3>
      <p>Tomato, mozarella, spinach, and ricotta cheese</p>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
```

- `External CSS styles` are applied globally, affecting all components in the application.

- Global styles can be overridden by adding specific class names to JSX elements.

- It is important to note that global styles can result in conflicts and unintended styling effects.

### CSS modules or styled components

- For more scoped styling, other techniques like CSS modules or styled components can be used.

- `CSS modules` allow for local scoping of styles by generating unique class names for each component.

- `Styled components` provide a way to write CSS directly in JavaScript, making it easier to manage component-specific styles.

### In conclusion

- React provides flexibility in choosing how to style components, including options like inline styling and external CSS files.

- Global styles can be imported and applied to components, but conflicts and unintended effects should be considered.

- More advanced techniques like CSS modules and styled components offer scoped styling options for better code organization.

## - Passing and Receiving Props

- Props are a fundamental React concept for passing data between components.

- Props act as a communication channel between parent component, (in this case `Menu`) and child components (`Pizza`).

### Customizing pizza components

- We will customize each pizza component by passing different data using props.

- Step 1: Pass props into the component as normal attributes. (`from the parent to the child`)

```jsx
function Menu() {
  return (
    <main className='menu'>
      <h2>Our Menu</h2>
      <Pizza
        name='Pizza Spinaci'
        ingredients='Tomato, mozarella, spinach, and ricotta cheese'
        photoName='pizzas/spinaci.jpg'
      />
    </main>
  )
}

function Pizza() {
  return (
    <div>
      <img src='pizzas/spinaci.jpg' alt='Pizza spinaci' />
      <h3>Pizza Spinaci</h3>
      <p>Tomato, mozarella, spinach, and ricotta cheese</p>
    </div>
  )
}
```

- Step 2: Receive `props`

- in the child component by accepting a props parameter. (`function Pizza(props)`)

```jsx
function Menu() {
  return (
    <main className='menu'>
      <h2>Our Menu</h2>
      <Pizza
        name='Pizza Spinaci'
        ingredients='Tomato, mozarella, spinach, and ricotta cheese'
        photoName='pizzas/spinaci.jpg'
        price='10'
      />
    </main>
  )
}

function Pizza(props) {
  return (
    <div>
      <img src='pizzas/spinaci.jpg' alt='Pizza spinaci' />
      <h3>Pizza Spinaci</h3>
      <p>Tomato, mozarella, spinach, and ricotta cheese</p>
    </div>
  )
}
```

- Step 3: Utilizing props

- Replace values in the component with props values using JavaScript mode. (`<img src={props.photoName} alt={props.name} />` etc)

```jsx
function Menu() {
  return (
    <main className='menu'>
      <h2>Our Menu</h2>
      <Pizza
        name='Pizza Spinaci'
        ingredients='Tomato, mozarella, spinach, and ricotta cheese'
        photoName='pizzas/spinaci.jpg'
        price='10'
      />
    </main>
  )
}

function Pizza(props) {
  return (
    <div>
      <img src={props.photoName} alt={props.name} />
      <h3>{props.name}</h3>
      <p>{props.ingredients}</p>
    </div>
  )
}
```

- step 4: Reusing and configuring components

- We can reuse and configure components to display unique data. (`Second Pizza component`)

```jsx
function Menu() {
  return (
    <main className='menu'>
      <h2>Our Menu</h2>
      <Pizza
        name='Pizza Spinaci'
        ingredients='Tomato, mozarella, spinach, and ricotta cheese'
        photoName='pizzas/spinaci.jpg'
        price='10'
      />
      <Pizza
        name='Pizza Funghi'
        ingredients='Tomato, mushroom, onion'
        photoName='pizzas/funghi.jpg'
        price='12'
      />
    </main>
  )
}

function Pizza(props) {
  return (
    <div>
      <img src={props.photoName} alt={props.name} />
      <h3>{props.name}</h3>
      <p>{props.ingredients}</p>
    </div>
  )
}
```

- Step 5: Improving the pizza component

- Add className (`<div className='pizza'>`) , div (for h3,p and span), and span (`<span>{props.price}</span>`) to enhance the component's appearance.

```jsx
function Menu() {
  return (
    <main className='menu'>
      <h2>Our Menu</h2>
      <Pizza
        name='Pizza Spinaci'
        ingredients='Tomato, mozarella, spinach, and ricotta cheese'
        photoName='pizzas/spinaci.jpg'
        price='10'
      />
      <Pizza
        name='Pizza Funghi'
        ingredients='Tomato, mushroom, onion'
        photoName='pizzas/funghi.jpg'
        price='12'
      />
    </main>
  )
}

function Pizza(props) {
  return (
    <div className='pizza'>
      <img src={props.photoName} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.price}</span>
      </div>
    </div>
  )
}
```

- Step 6:Handling non-string props

- Use JavaScript mode to pass non-string values as props.(`price={12}`)

```jsx
function Menu() {
  return (
    <main className='menu'>
      <h2>Our Menu</h2>
      <Pizza
        name='Pizza Spinaci'
        ingredients='Tomato, mozarella, spinach, and ricotta cheese'
        photoName='pizzas/spinaci.jpg'
        price={10}
      />
      <Pizza
        name='Pizza Funghi'
        ingredients='Tomato, mushroom, onion'
        photoName='pizzas/funghi.jpg'
        price={12}
      />
    </main>
  )
}

function Pizza(props) {
  return (
    <div className='pizza'>
      <img src={props.photoName} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.price + 3}</span>
      </div>
    </div>
  )
}
```

### The Power of props:

- Props can be anything, not just strings or numbers. They `can include arrays, objects, or even other React components`.

- So props is really really powerful and really one of the most fundamental things in React

## - Props, Immutability, and One-Way Data Flow

### Props in React

- Used to pass data from parent components to child components.
- Facilitate communication between parent and child components.
- Essential for configuring and customizing components.
- Similar to arguments passed to JavaScript functions.
- Can pass any type of value as a prop.

### Understanding Data in React

- React uses data from props and state to render components.
- State: Internal component data that can be updated by the component.
- Props: Data coming from the parent component, read-only and immutable.
- React enforces immutability to optimize the application and avoid bugs.

### One-Way Data Flow

- React follows a one-way data flow.
- Data can only be passed from parent to child components using props.
- Data flows from top to bottom in the component tree.
- Provides predictability, easier understanding, and debugging.
- Two-way data binding (used in other frameworks) is less efficient.

### Passing Data to Parent Components

- There is a clever way to pass data from child to parent components.
- Will be covered in the next section.
- Learning React involves multiple concepts, but everything will fall into place with time.

## - CHALLENGE ##1: Profile Card (v1)

## - The Rules of JSX

## - Rendering Lists

## - Conditional Rendering With &&

## - Conditional Rendering With Ternaries

## - Conditional Rendering With Multiple Returns

## - Extracting JSX Into a New Component

## - Destructuring Props

## - React Fragments

## - Setting Classes and Text Conditionally

## - Section Summary

## - CHALLENGE ##2: Profile Card (v2)
