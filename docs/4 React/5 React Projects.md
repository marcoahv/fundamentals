---
sidebar_position: 1
---

# React Projects

## Section 1: Introduction

>

### **=>** Introduction

Hello, friends. I'm extremely happy to announce that my three React project scores is out today.
As the title specifies, this is a project-based course that focuses on sharpening your skills as a web developer.
This course will do the following:

- Create modern web applications using the React JavaScript framework and its large MPM library.

- Teach you the most powerful and commonly used hooks like `useState` , `useEffect` , `useRef` , `useContext` , and many more.

- Help you create powerful reusable components that you can use in your own projects.

#### Who is this course for?

This course is for beginner to intermediate web developers who want to:

- Fill their portfolios with modern web applications ranging from simple to more complex ones.

- Understand project structure, use cases for different react hooks, and creation of powerful components.

#### What will you learn in this course?

By taking this course, you will learn:

- Multiple use cases for the most powerful react hooks like `useEffect` , `useState` , `useContext` , and `useRef` .

- How to process data from local databases and servers.

- How to use react icons, react style components, and the React routing system.

- How to install third-party packages using NPM and much more.

#### Why bother with React?

Here are some reasons why React is worth considering:

- React saves you time and money on development because it is component-based.

- You can break your UI into reusable components, allowing you to build dynamic user interfaces.

- React is declarative, making app development much easier.

- The React community is amazing.

- React is used by huge organizations.

- React is SEO friendly.

- React fully embraces JavaScript and TypeScript.

- React has a fast and efficient learning curve.

#### So there we go.

Eight reasons.
Come on, learn React.
So please come with me on this journey.
Let's create some awesome applications.
See you in the course.

### **=>** How to get the most out of this course

Hi, as a content creator I am constantly working on finding ways to bring the best information in the most efficient way to you, the content consumer.

I am perfectly aware of the fact that not all of us have a multi-screen, high-resolution 30" monitor setup at our disposal, and it can be extremely frustrating to tab between video and code editor.
Here are my suggestions:

#### Setup:

- For PC (Windows or Mac):

  - Dual monitor setup with the second monitor being the cheapest you can find. Coding does not require high refresh rate or color precision.

  - 1 Monitor + Tablet as a second screen. Most tablets are large enough to follow along with the videos and code on the main monitor.

- Laptop (Windows or Mac):

- Second monitor. Again, as mentioned before, the cheapest you can find.

- Tablet:

#### Breaks:

- Take regular 5-15 minute breaks after each project.

- Drink sufficient water and not too much coffee :P

#### Projects:

- Review each project after you finish it and ask yourself the question, "How would you do this differently?"

- I am not perfect and I am extremely open to constructive criticisms and suggestions.

### **=>** Course Resources and Useful Links

#### Course Resources

- The `App.css` file is the main CSS file for all of the projects and it is necessary for this course.

- Please download the `App.css` and replace it with your file or simply copy over the content.

#### Useful Links:

- React Icons - Here you can find all of the Free Icons libraries available for the React framework. It includes popular icons that you can easily include in your React projects using `react-icons` , which utilizes ES6 imports that allow you to include only the icons that your project is using.

  - Install React Icons by using `npm install react-icons --save` .

- Styled Components - `styled-components` are used to enhance CSS for styling React component systems. By focusing on a single use case, we have managed to optimize the experience for developers as well as the output for end users.

- Installing `styled-components` only takes a single command and you're ready to roll: - With npm:

```bash
npm install --save styled-components
```

- With yarn:

```bash
yarn add styled-components
```

- JSON Placeholder - JSON Placeholder is a free fake API for testing and prototyping. We will make requests to the server and get data from it in some of our projects.

- Avatars - DiceBear is an avatar library for designers and developers. You can choose between simple identicons and lovely designed characters. And best of all, they provide a simple and free HTTP API that you can use right away!

#### Resources for this Lecture

App.css file

## Section 2: Optional Env Setup

>

### **=>** Getting Started

- Set up an environment for the projects

#### Setting Up the Code Editor

- Use Visual Studio Code as the code editor
- Download Visual Studio Code if not already installed

#### Using NPM and Node.js

- Use NPM and Node.js for the projects
- Do not use yarn
- Install Visual Studio Code and create a folder for the project

#### Installing Extensions

- Install the following extensions:
- ES7 React Redux style Component snippets
- ES7 React Redux GraphQL React Native snippets

#### Creating a React App

- Create the React app only once
- Use the command `npx create-react-app project-sandbox`

#### Why a Sandbox?

- Create a sandbox to store the projects
- Install React App within the sandbox
- Create separate folders for each project

#### Cleaning Up

- In App.js:

```jsx
import './App.css'

function App() {
  return (
    <div className='App'>
      <h1>Project</h1>
    </div>
  )
}

export default App
```

- Remove unnecessary files and folders:

  - rm logo.svg

  - rm App.test.js

  - rm index.css

  - rm reportWebVitals.js

  - rm setupTests.js

- In the index.js

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
```

#### Starting the Project

- Start the React server by running `npm start`

#### CSS Styling

- Use custom CSS for styling instead of frameworks like Bootstrap or Tailwind CSS

- Delete the App.css file in the project
- Paste the `App.css file provided in the course`

#### Conclusion

- Verify that the source folder contains only `App.js` , `index.js` , and `App.css`

- Create a new folder called `projects` in the src folder to start the first project

### **=>** Node.js and npm resources

Node.js and npm

Video tutorial
https://www.youtube.com/watch?v=yM92Iuh35JY

node.js and npm official website
https://nodejs.org/en

## Section 3: P01 E-signature-App

### **=>** Welcome to the very first project.

>

#### Project Description

In this project, we're going to create a simple signature application that records the user's name and the date. The order of the name and date can vary depending on user input.

#### Project Details

- We will be using State, a React hook, in this project.
- Our first task is to create a component.
- We will explore inline styles and learn how to use variables and functions in JSX.

#### Project Overview

Let me also show you how the project works.
It's a pretty simple project, but that's also the idea here.
We're going to start simple and again, we're going to go into more complex projects.

- Choose a date down here, say today 19 of November.
- Type in your name, for example, Norbert.
- Hit enter and there we go.

#### Modifying the Name and Date

There's a name you want to change something here and typing.

- If you type "Laura", it's going to change it up.
- This also capital letters.
- We could also change it up to lowercase or the first letter to be uppercase, and then everything has to be lowercase.
  And there's your date right here.
  So simple application, but a lot to run.
  Let's get started with this project.

  ### **=>** Getting Started with the Project

In this project, we begin by creating a new folder within the projects directory. It's advisable to adhere to the naming conventions used here, which is `01-e-signature-app` . Within this folder, we create a file called `e-signature-app.js` .

#### Creating the Signature Function

In this file, we implement a self-exporting function using the `RFC` (React Functional Component) syntax. The function is then exported using the `export default function` syntax. Note that we are using function-based components, not class-based components.

#### Creating the Container

Next, we export a `div` with a class of `container` . We also use a text-center style for alignment.

#### Creating the First Component

Our next step is to create our very first component. We do this in a new folder outside of the projects directory. This new folder is named `components` and it's where all our components will live.

#### Creating the Title Component

Within the `components` folder, we create our first component, the `Title` component. The `Title` component will consist of an `H1` tag. We replace the `div` with an `H1` and give it a class name of `title` . We also add a text-center style for alignment.

#### Importing the Title Component

After creating the `Title` component, we import it so we can see what it looks like. If everything is set up correctly, the title component should be recognized and displayed.

#### Importing the Project into the Application

Next, we import our project into our application. This is done by importing our first project, the E signature application. Once imported, the title should be displayed because it's included in our component and our application.

#### Creating Conditions for the Title Component

In the title component, we create a condition that checks if a title or text is passed in. If there is no text passed in, then the text of the title is used. If there is text passed in, then that text is used.

#### Adding Conditions for the Class in the Title Component

We also add a condition for the class in the title component. If a class or multiple classes are passed in, then those classes are used. If no classes are passed in, then the default classes are used.

#### Creating the Signature Application

In our signature application, we have our title component which we import from the components. We then go back to the component because we still need to add a few things.

#### Styling the Input

We add two input tags for the date and signature status. For styling, we create a concept called input style which is assigned to an object. This object includes styles for border, outline, and padding.

#### Changing the Background Color

If you want to change the background color of the entire document, you can select the document and change the background color.

#### Wrapping the Input Tags in a Footer Tag

The input tags are then wrapped in a footer tag. This is because they are almost in a footer. We use a few classes and some inline styles to position them.

#### Using State

Finally, we use the `useState` hook in React to manage the state of our application. This allows us to make our input tags functional.

### **=>** Using State in React

- To use state, it must be imported from React. This can be done as follows:

  ```jsx
  import React, { useState } from 'react'
  ```

#### Assigning State to a Variable

- After importing state, it should be assigned to a variable. This is typically done using the `const` keyword.

  ```jsx
  const [name, setName] = useState('')
  ```

- The above code creates a state variable called `name` and a function to update it called `setName` . The initial value of `name` is an empty string.

#### Using State in the Component

- The state variable can now be used within the component. For instance, it can be used as the value of an input field.

  ```jsx
  <input
    type='text'
    value={name}
    onChange={handleNameChange}
  />
  ```

- The `onChange` event listener is used to handle changes to the input field.

#### Creating the Event Handler

- An event handler function called `handleNameChange` is needed to update the state when the input field changes.

  ```jsx
  const handleNameChange = event => {
    setName(event.target.value)
  }
  ```

#### Displaying the State Value

- The state value can be displayed in the UI by using it within the JSX code.

```jsx
<h3>{name}</h3>
```

#### Changing the State

- The `setName` function is used to change the state. This function is called within the event handler with the new value passed as an argument.

#### Creating Additional State Variables

- Multiple state variables can be created in a component. For instance, a `date` state variable can be created as follows:

  ```jsx
  const [date, setDate] = useState('')
  ```

- This new state variable can be used in a similar manner to the `name` state variable.

#### Conditional Rendering

- Conditional rendering can be used to display different UI based on the state. For example, if the `date` state is empty, a default value can be displayed.

  ```jsx
  {
    date ? date : 'DOB'
  }
  ```

- The above code will display the value of `date` if it is not empty. Otherwise, it will display "DOB".

### **=>** Finished project files

Download and compare the finished project files in case of errors!
To avoid copy and pasting code instead of learning your projects and I would suggest that you only make use of this files if you don't manage with my course explanations.
