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

## - ## Before We Start Coding: Debugging

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

## - ## Components as Building Blocks

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

- Breaking a design into components is a crucial skill in React development.

- A component tree shows the hierarchy and relationships between components.

- Parent and child components are terms used in React to describe relationships.

- A component tree helps understand how components are nested and relate to each other.

### Putting Concepts into Practice

Now that we have learned about components, let's start applying these concepts in practice.

## - Creating And Reusing a Component

## - What is JSX?

## - Creating More Components

## - JavaScript Logic in Components

## - Separation of Concerns

## - Styling React Applications

## - Passing and Receiving Props

## - Props, Immutability, and One-Way Data Flow

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
