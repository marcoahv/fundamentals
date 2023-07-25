---
sidebar_position: 2
---

---

## - Section Overview

>

### Introduction

- Welcome to our first section.

### Overview of React

- In this section, we'll take a very first look at React.

- We'll discuss why we need something like React in the first place.

- We'll explore what exactly React is.

- We'll compare React to vanilla JavaScript.

### Setting up a React Application

- We'll discuss different options for setting up a new React application.

- We'll use a tool called Create-React-App to build our very first React project.

### Conclusion

- Are you ready? Let's get started.

---

## - Why Do Front-End Frameworks Exist?

### Introduction

- Before we start learning about React, let's ask an important question.

- Why do front-end frameworks like React exist?

- Why not use Vanilla JavaScript to build our apps?

### Evolution of Website Development

- In the past, websites were rendered on the server using `server-side rendering.`

- Server-side rendering involved assembling the website on the backend based on data and templates.

- The resulting HTML, CSS, and JavaScript code was sent to the client-side (web browser) that requested the page.

- The browser would then paint the code onto the screen.

- Examples of server-side rendered websites include those built with WordPress.

### Rise of Single Page Applications

- Over time, developers started writing more JavaScript code to be executed by the browser.

- This led to the emergence of single page applications (SPAs).

- `SPAs are webpages that are rendered on the client-side, not on the server.`

- In client-side rendering, the work of rendering a webpage is shifted from the server to the client.

- SPAs feel like native desktop or phone applications, allowing users to interact without page reloads.

- Data for SPAs usually comes from the backend in the form of an API.

### Challenges with Vanilla JavaScript

- Vanilla JavaScript has limitations when building large-scale applications.

- Direct DOM traversing and manipulation become complex and hard to manage.

- State is often stored directly in the DOM, leading to entangled code and bugs.

- Building a framework from scratch to solve these problems is not recommended.

### Purpose of Front-end Frameworks

- Front-end frameworks like React exist to solve the challenges of syncing data with the user interface.

- Frameworks like Angular, React, and Vue simplify the process of keeping UI and data in sync.

- They provide a structured approach to writing code and enforcing conventions.

- Frameworks offer a consistent way of building web applications, ensuring a cohesive code base.

- Modern web development is centered around JavaScript frameworks.

---

## - React vs. Vanilla JavaScript

### Comparison of React and Vanilla JavaScript Implementation

- `React Implementation`:

- HTML is written inside of JavaScript using JSX.

- JavaScript is responsible for the entire application.

- Automatically keeps the user interface in sync with state.

- Uses event listeners defined in JSX using attributes like `on-click` .

- Updates the user interface automatically when state is changed.

```jsx
import { useEffect, useState } from 'react'

export default function App() {
  const [advice, setAdvice] = useState('')
  const [count, setCount] = useState(0)

  async function getAdvice() {
    const res = await fetch('https://api.adviceslip.com/advice')
    const data = await res.json()
    setAdvice(data.slip.advice)
    setCount((c) => c + 1)
  }

  useEffect(function () {
    getAdvice()
  }, [])

  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get advice</button>
      <Message count={count} />
    </div>
  )
}

function Message(props) {
  return (
    <p>
      You have read <strong>{props.count}</strong> pieces of advice
    </p>
  )
}
```

- `Vanilla JavaScript Implementation`:

- HTML is in charge.

- JavaScript is included in the HTML file.

- Requires manual selection of DOM elements.

- Manually updates the DOM when data is changed.

- Requires extra code to keep data in sync with the user interface.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Vanilla JS Advice</title>
  </head>
  <body>
    <h1 class="advice"></h1>
    <button class="btn">Get advice</button>
    <p>
      You have read
      <strong class="count"></strong>
      pieces of advice
    </p>

    <script>
      // Manually selecting DOM elements (which require a class or ID in markup)
      const adviceEl = document.querySelector('.advice')
      const btnEl = document.querySelector('.btn')
      const countEl = document.querySelector('.count')

      const getAdvice = async function () {
        const res = await fetch('https://api.adviceslip.com/advice')
        const data = await res.json()

        // Updating values
        advice = data.slip.advice
        count = count + 1

        // Manually updating DOM elements
        countEl.textContent = count
        adviceEl.textContent = advice
      }

      // Setting initial values
      let count = 0
      let advice
      getAdvice()

      // Attaching an event listener
      btnEl.addEventListener('click', getAdvice)
    </script>
  </body>
</html>
```

### Comparison of React and Vanilla JavaScript Philosophies

- React:

- Automatically keeps the data in sync with the user interface.

- Less manual code required.

- Suitable for larger applications.

- Vanilla JavaScript:

- Requires manual management of data and user interface synchronization.

- More manual code required.

- Suitable for smaller and simpler applications.

### Understanding React in Detail

- React is a front-end framework.

- Automatically keeps the data in sync with the user interface.

- Reduces the amount of manual code required.

- Allows for efficient development of larger applications.

  Note: Take a few minutes to analyze and compare the differences between the React and Vanilla JavaScript implementations to understand the two different philosophies at work.

---

## - What is React?

>

### Introduction to React

- React is an extremely popular, declarative, component-based, state-driven, JavaScript library for building user interfaces.

- It was created by Facebook.

### Component-Based Design in React

- Components are the building blocks of user interfaces in React.

- Complex UIs in React are built by combining multiple components.

- Components can be reused multiple times.

- Each component has all the information about what it looks like and how it works.

### Declarative Syntax: JSX

- JSX is a special declarative syntax used to describe what each component looks like and how it works.

- JSX combines parts of HTML, CSS, and JavaScript and allows us to reference other React components.

### Concept of State in React

- State is the data that React keeps in sync with the UI.

- React renders a user interface based on the current state.

- When the state changes, React automatically re-renders the user interface to reflect the latest state.

### React: Library or Framework?

- React is technically a library, even though it is often referred to as a framework.

- React only provides the view layer; for a complete application, multiple external libraries need to be added.

- There are frameworks built on top of React that include all the functionalities that React lacks out of the box, like Next.js and Remix.

### Popularity of React

- React is the most used framework according to weekly download numbers from npm.

- Many large companies have adopted React, creating a high demand for qualified React developers.

- React has a large and active developer community, resulting in a large number of tutorials, Stack Overflow questions and answers, and third-party libraries.

### Creation of React

- React was created in 2011 by Jordan Walke, an engineer at Facebook.

- It was first used on Facebook's newsfeed and chat app, and then spread to the entire Facebook and Instagram applications.

- React was open-sourced in 2013.

### Summary

- React excels at rendering components on a webpage as a user interface based on their current state and keeping the user interface in sync with state by re-rendering when the state of a component changes.

- React employs techniques like a virtual DOM, a Fiber tree, and one-way data flow, which will be studied throughout this course.

---

## - Setting Up Our Development Environment

### Setting Up the Development Environment

- Before starting with React, it is important to set up the development environment.

- This includes installing a code editor, a web browser, and Node.js.

### Code Editor: Visual Studio Code

- It is recommended to use Visual Studio Code (VS Code) as the code editor.

- VS Code can be customized to make it easier to follow along with the course.

### Web Browser: Google Chrome

- Google Chrome is recommended as the web browser for running the applications built in the course.

### Node.js

- Node.js is needed because all the tools used in the course run on Node.js.

- It is important to use at least Node version 18.

### Configuring VS Code

- After installing the necessary tools, VS Code needs to be configured.

- This includes installing essential extensions, such as ESLint and Prettier.

- The color theme and file icon theme can also be customized.

### Setting Up VS Code Extensions

- `ESLint` is a code linter that automatically finds errors in the code or finds best practices that are being violated.

- `Prettier` is a code formatter that automatically formats the code to make it look cleaner and easier to read.

### Setting Up VS Code Settings

- The auto-save setting should be set to onFocusChange to ensure that the code gets saved each time a different tab or window is accessed.

- The Prettier extension should be set as the default formatter.

- The format on save setting should be turned on.

- The ESLint run setting should be set to onSave.

### Checking Node.js Installation

- To check if Node.js is installed, open a new terminal and type `node -v` .

- Make sure that the Node version is at least version 18.

### Setting Up Snippets in VS Code

- Snippets are pieces of predefined code that can be used to speed up development.

- A file with three snippets that will be used frequently in the course is provided in the setup folder of the starter files downloaded from GitHub.

- The snippets can be copied and pasted into a new or existing snippets file in VS Code.

---

## - Pure React

### How we can write React code without any modern tooling

- No build step is required.

- The code can be written directly inside a regular HTML file.

### Pure React

- This method is what I call pure React.

- It will show you why the tools we will talk about next are so helpful.

### Creating the First Project Folder

- Start by creating the project folder.

- This can be done anywhere you want.

- For example, the folder can be named "`01-pure-React`".

### Opening the Project Folder in VS Code

- Open the folder as a project folder in VS Code.

- This can be done by drag and drop onto the VS Code icon.

- Alternatively, open the project folder from the menu.

### Creating an Empty HTML Structure

- Start by creating an `index.HTML` file.

- Scaffold an empty HTML structure in VS Code.

- Give the file a title, "Hello React!".

- In the body, create a div with the ID of "root".

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Hello React!</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

### Adding React to the File

- Add React to the file by including the React library as a script.

- The URL of these scripts can be found in React's official documentation.

- Paste the scripts into the HTML file.

- This includes the React library into the project.

```html
<!DOCTYPE html>
<html>
  <head>
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <title>Hello React!</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

### Creating the First Component

- Create the first component inside a script.

- The component can be a function named "App".

- The function can return whatever you want to see on the UI.

- Use the create element function to return the HTML element.

### Rendering the Component

- Render the component onto the page by placing it into the dom.

- Create a root using the React-dom library.

- Select the div element to become the root of the application.

- Render a new element out of the App component.

### Updating the Component

- Update the component by creating a string of the current time.

- Use JavaScript's new Date function to get the current time.

- Update the time every second using the setInterval function.

- This makes the function act as a clock.

### Conclusion

- This method is very bare bones and not how React is used in the real world.

- There are no modules, no way of converting JSX, no HTTP server, etc.

- Despite this, it is useful to explore pure React.

- However, it's time to move on to a more robust and real-world setup.

---

## - A Quick Look at React's Official Documentation

- The official React documentation is located at react.dev.
  https://react.dev/

- You can visit their landing page for a nice introduction to React.

### Sections of Interest

- The Learn section provides information on getting started and installation.

- The Reference section explains every method and function in React.

### Learn Section

- The Learn section covers the fundamentals of React.

- The Escape Hatches section within Learn contains advanced topics.

### Recommended Pages

- Two recommended pages within the Escape Hatches section are great resources for learning about effects.

### Reference Section

- The Reference section explains every single method and function in React.

### useState Hook

- The first React hook covered in-depth is useState.

- Visit the corresponding page in the documentation for more information and examples.

### useLayoutEffect Function

- The useLayoutEffect function will not be covered extensively in the course.

- Click on its corresponding page in the documentation to learn more.

### Keeping the Documentation Open

- It is advised to keep the React documentation open while learning.

- Good developers always know where to find the information they need.

---

## - Setting Up a New React Project: The Options

### Setting Up a React Project

- In the real world, we don't just write React apps in a single JavaScript file without any tooling.

- Let's learn about the options we have to set up a brand new React project.

### Create-React-App

- Create-React-App is a complete starter kit for React applications.

- It provides pre-configured common development tools out of the box.

- It includes a development server, webpack for module bundling, and important developer tools like ESLint, Prettier, Jest, and Fable.

### Limitations of Create-React-App

- Create-React-App was developed many years ago and uses outdated technologies like the webpack bundler.

- The team behind Create-React-App has stopped innovating, making it unsuitable for real-world projects.

- However, it is still a good choice for quick experiments, tutorials, and learning projects.

### Vite

- Vite is a modern build tool and starter template for React applications.

- It offers fast automatic page refresh and bundling.

- However, it requires manual setup of important developer tools like ESLint and testing libraries.

### React Frameworks

- React frameworks like Next.js and Remix provide additional solutions for routing, data fetching, and server-side rendering.

- These frameworks make it easier to build applications on top of React.

- While they have their benefits, they are not always necessary and vanilla React apps still have an important place.

### Recommendation for Learning React

- For this course, we will primarily use Create-React-App for small projects and switch to Vite for larger, more real-world projects.

- The recommendation to use React frameworks like Next.js is more applicable to production-ready projects, not for learning React.

- It is important to learn React itself before diving into frameworks.

### Conclusion

- Don't worry about using React frameworks for now.

- Let's focus on learning React and setting up projects with Create-React-App and Vite.

- Now, let's create our very first real React application.

## **- Setting Up a Project With Create-React-App**

- We are now ready to set up our first project using Create-React-App.

### Using the Terminal

- Create-React-App is a command-line interface tool, so we need a terminal or command prompt.

- In the terminal, we navigate to the folder where we want to create the new project.

### Setting Up the Project

- Once in the desired folder, type `npx create-react-app@5 pizza-menu` to set up the project.

- This command uses Create-React-App version 5 to create a project called "pizza-menu".

### Exploring the Project Structure

- The project structure contains a `package.json` file and a `node_modules` folder, which are standard in all modern JavaScript projects.

- Most of the development work will happen inside the `src` (source) folder.

- The `public` folder contains assets like images and the `index.html` file.

### The index.html File

- The `index.html` file contains a div with the id of "root", which is the root of our app.

- The `index.js` file selects the root element and renders the app into it.

### Starting the App

- To start the app, we use the integrated terminal in VS Code and run the command `npm start` .

- This command starts the app and opens a new browser tab at localhost port 3000.

### Modifying the App

- We can modify the app by changing the `App` component in the `App` file.

```jsx
import './App.css'

function App() {
  return <h1>Hello React!</h1>
}

export default App
```

- The app automatically updates when we save changes.

### Conclusion

- Congratulations, you've created your first Create-React-App application!

- In the next section, we'll review essential JavaScript for React and start building the pizza menu project.
