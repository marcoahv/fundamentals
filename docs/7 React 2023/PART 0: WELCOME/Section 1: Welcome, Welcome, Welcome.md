---
sidebar_position: 1
---

---

## 🟣 Course Road map and Projects

### Introduction to the Ultimate React Course

- Hello and welcome to the Ultimate React Course.

- I'm so thrilled to welcome you here and to guide you on your journey of becoming a complete React developer.

- Learning React is a great choice as it enables you to build any application you can imagine.

- Skilled React developers are in high demand, and this course will help you become one.

### Course Organization and Projects Overview

- The course is divided into four parts.

- Part One: Building small projects to grasp React fundamentals such as components, JSX, props, state, and forms. Includes challenges and exercises.

- Part Two: Building upon the foundations to learn intermediate concepts like data fetching, the use effect hook, and custom hooks. Includes a special section on understanding how React works behind the scenes.

- Part Three: Advancing React skills with topics like reducers, performance optimization, React Router, Redux, and modern Redux Toolkit.

- Part Four: Applying learned skills to real-world projects using industry-standard libraries and tools like Redux, Tailwind, React Query, Supabase, and more.

### Course Benefits and Conclusion

- The course covers everything you need to know about modern front-end development with React.

- It will be an exciting journey, and you'll have fun building all the projects.

- This course will take your web development career to the next level.

- Let's jump right in and get started!

---

## 🟣 Building Our First React App!

### Building the First React App

- Before learning anything about React or setting up our development environment, let's build our first small React app.

- We can write our first React app in an online code editor called `codesandbox.io`

- Go to codesandbox.io and write react.new to create a brand-new CodeSandbox with the React starter template.

  https://codesandbox.io/s/react-first-app-advice-52879f

### Understanding the Code Editor and Files

- On the left side, you have some files.

- In the middle, you have a code editor, where you can open these files.

- On the right, you have your output and console.

- Delete the styles.css and open up app.js to start from scratch.

### Building the First React Component

- Start by building the first React component, which is essentially a piece of the user interface.

- Write a function and call the main component the App component.

- These functions in React can return something called JSX, which is a syntax that looks like HTML.

### Fetching Data from an API

- Write a new function called getAdvice inside App to fetch data from an API.

- Use the setAdvice function to update the state after receiving the data.

- Use the advice variable in the JSX to display the data on the interface.

### Updating the State with a Button Click

- Create a new state with useState and start off with an empty string.

- Use setAdvice to update the state after receiving the data.

- Whenever the state is updated, the user interface will also be updated.

### Displaying the Number of Pieces of Advice Read

- Create another state to keep track of the number of pieces of advice read.

- Display this count in the user interface.

- Use useEffect to automatically get the first piece of advice when the app is first opened.

### Creating a New Component for the Message

- Create a new component for the message that displays the number of pieces of advice read.

- Pass the count value to the Message component using props.

```jsx
jsx
import { useEffect, useState } from 'react'

export default function App() {
  const [advice, setAdvice] = useState('') // State variable to store the fetched advice
  const [count, setCount] = useState(0) // State variable to keep track of the number of times advice is fetched

  async function getAdvice() {
    const res = await fetch('https://api.adviceslip.com/advice') // Fetch advice from API
    const data = await res.json() // Parse the response as JSON
    setAdvice(data.slip.advice) // Update the advice state variable with the fetched advice
    setCount(c => c + 1) // Increment the count state variable by 1
  }

  useEffect(function () {
    getAdvice() // Call the getAdvice function when the component is mounted
  }, [])

  return (
    <div>
      <h1>{advice}</h1> {/* Display the current advice */}
      <button onClick={getAdvice}>Get advice</button> {/* Button to fetch new advice */}
      <Message count={count} /> {/* Render the Message component and pass the count as a prop */}
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

### Conclusion

- This small application already has a lot of the React ingredients that real-world React applications will have, such as state, effects, props, JSX, and multiple components.

- After this small introduction, it's now time to set up our system and start learning about what React actually is and why it exists.

---

## 🟣 Watch Before You Start!

### Quick Considerations for Taking the Course

- **Types of Students**: This course is designed for students with varying levels of experience in React. Whether you are a beginner or looking to advance your React skills, this course is for you. Everyone is welcome.

- **Customizing the Course**: To make the course perfect for you, you have the flexibility to rewatch lectures, jump to specific sections, adjust the playback speed, and ask questions in the Q and A section. Take advantage of these options to tailor the course to your needs.

- **Don't Judge Too Quickly**: If you find the course too easy or too hard, or if the pace doesn't suit you, please give it some time before forming a negative opinion. Explore multiple sections to get a comprehensive understanding of the course content.

- **Skipping Sections**: You don't need to watch the entire course to learn React. Some sections, especially in the big projects, focus on practicing what you have already learned in different contexts. If you are short on time, you can skip sections or parts of sections to reduce the course length.

### Tips for Taking the Course

- **Code Along**: To learn React effectively, it is crucial to code along with the instructor. Simply watching the videos without actively writing code will not help you develop React skills. Even typing the same code as shown in the video is beneficial because it reinforces your learning.

- **Focus on Making Things Work**: In the initial sections of the course, prioritize making things work rather than understanding the intricacies of React or following best practices. As you progress, you will delve into these topics in more detail.

- **Problem Solving Skills**: When encountering issues or questions, try to solve them on your own before seeking help. This problem-solving approach is essential for your growth as a developer. Check the Q and A section for existing solutions, and if needed, ask a new question with a concise description and your code on codesandbox.io.

- **Understanding Each Section**: Many sections in the course build upon each other. Before moving on, ensure that you fully comprehend the concepts covered in a section. Take breaks, review the code and notes, explore the projects, and practice writing code independently.

- **Compatibility with Different Operating Systems**: The course was recorded on a Mac, but it is designed to work the same way on Windows or Linux. If you encounter issues, it is unlikely due to your operating system. Look for other potential causes.

- **Have Fun**: Learning React and building applications can be an enjoyable and rewarding experience. If you feel frustrated, take a break and come back later. Always approach coding with a sense of fun and enjoyment.

  Now that we have covered these considerations and tips, let's dive into the world of React and get started with the course!

---

## 🟣 Read Before You Start!

1️⃣ Download starter code
Before starting the course, please download the starter files and final code from the GitHub repo below

🚨 Please read the FAQ on GitHub! Believe me, you will ask some of these questions eventually 😉

👉 Starter and final code and FAQs on GitHub

2️⃣ Download course slides
You can also download the course slide from the end of this lecture (theory-slides.pdf) 👇
They will be helpful to review all important React concepts.

3️⃣ Community & resources
👉 We have a very friendly student community on Discord with 75,000+ students. This is where you learn together with other students just like you, and get updates on new courses. Join by clicking here!

👉 Also check out my resources page (it contains design and development assets, tools, and resources)

👋 Pro tip: Don't use lecture numbers when taking notes, because they will change each time I update something in the course.

And now, have a ton of fun with the course! 😁

Resources for this lecture:

https://github.com/jonasschmedtmann/ultimate-react-course

---

## 🟣 Downloading Course Material

### Downloading the Course Starter Code and Final Project Files

- To begin, you need to download the course starter code and final project files from GitHub.

- The code repository for this course is located on GitHub with the following URL.

- Access the GitHub page by clicking on the URL provided in the resources of this lecture.

- To download the entire code, click on the green button labeled "Download" as a ZIP file.

- If the green button is not visible, an alternative download link is provided below.

- Wait for the download to complete.

- Once downloaded, locate the ZIP file and extract it.

- On macOS, double-click the ZIP file to extract its contents.

- On Windows, right-click the ZIP file and choose the option to extract all files.

- Inside the extracted folder, you will find separate folders for each project in the course.

- Each project folder contains a starter folder and a final folder.

- The starter folder contains the initial code for the project.

- The final folder contains the code as it should look at the end of the project.

- Use the final code as a reference to compare with your own code if you encounter any issues or bugs.

- In the code repository, there is an "updates-and-fixes" branch for important bug fixes in the future.

- However, the main branch is the one that matters for this course.

- Make sure to read the frequently asked questions section before starting the course.

- You can also find the final versions of all the main course projects in the repository.

- With these steps completed, you are now ready to proceed to part one of the course.
