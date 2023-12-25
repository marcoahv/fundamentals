---
sidebar_position: 9
---

# The Freelance Stack

**Build a Blog with Next.js and a Headless CMS (Strapi)**https://youtu.be/NNWX2flw5mg?si=4_v41nWnSyGZMy6l

<!-- This is part of the transcript of a video tutorial on web development.

help me do the following:

Write this text in its entirety, word by word, using markdown format, adding sub-headings for all its parts in h4 tags, starting every sentence with a bullet point, and using backticks for code terminology. -->

<!-- This markdown document is part of a transcript for a course on Next.js 14.

Help me do the following:

write this text as documentation with instructions to follow, maintaining the same structure.
Keep the same markdown h3 and h4 headings.
Use bullet points in the same way as the document. -->

<!-- This is part of the transcript of a video tutorial next.js 14.

help me do the following:

Write this text in its entirety as instructions to follow using markdown format, adding sub-headings for all its parts in h4 tags, starting every sentence with a bullet point, and using backticks for code terminology.  -->

>

## Section 1: Introduction

>

### **=>** 1. Course Intro

- Are you aspiring to become a freelance developer with prior experience in `React`? This course is tailor-made for you!

#### Course Overview

- This unique course guides you through the various stages of freelance development, starting from the initial design to delivering a fully customizable, full-stack application to your clients.

#### Development Stack

- Experience a journey from an initial `Figma` design file to a complete `Next.js` website integrated with a `Strapi` backend.
- This stack, utilized for three years in freelancing, combines an excellent developer experience with full flexibility, empowering your clients to update and modify the site easily, akin to platforms like `WordPress`, `Squarespace`, or `Wix`.

#### Course Structure

- Begin with a rapid crash course on the necessary tools, emphasizing the new features of `Next.js 13`.
- Dive into the main project, creating a surf camp website featuring a fully customizable blog and signup functionality for different surf camps.
- Each section introduces new concepts without overwhelming complexity, ensuring a smooth and enjoyable learning experience.
- By the course's end, you'll possess the skills to create any website using this newly acquired freelance stack.

#### Instructor's Background

- Beyond freelancing, the instructor brings a background in education, having taught coding to numerous students at boot camps like `General Assembly` and `Master school`.
- This course reflects years of teaching experience, aiming to deliver the ideal learning experience the instructor sought when embarking on their freelance journey.

#### Course Purpose

- Address common questions faced by freelancers, such as delivering a coded website to non-technical clients.
- The course offers insights into effectively delivering projects to individuals unfamiliar with coding and much more.

#### Feedback and Updates

- Your input matters! Feel free to share any suggestions for improvement or additions to the course.
- Connect on Twitter or Udemy to provide feedback, and rest assured that the course will be kept up to date with your valuable input.

#### Conclusion

- With that, there's only one thing left to say—enjoy the course! See you in the first video lecture.

## **=>** 2. What is the Freelance Stack?

- The Freelance Stack is a comprehensive solution for building websites that allows clients to easily update and manage their content without constant developer intervention. It comprises two main components:

### Front End Setup

- The front end of our project is built using `Next.js`.
- This front end is seamlessly connected to the back end, powered by the headless CMS `Strapi`.
- `Strapi` serves as the admin panel for clients, enabling them to update, integrate, and manage various data on their website efficiently.

### Why "Freelance Stack"?

- The term "Freelance Stack" is coined based on its ability to fulfill the common requirements observed in freelance web development projects over the past three years.
- The primary goal is to empower clients to continuously update their websites without the need for constant developer involvement.
- Key requirements include:
  - **Continuous Updates:** Clients can update their website content without frequent code changes.

### Strapi and Front End Integration

- `Strapi` provides a comprehensive admin panel for clients to manage website content.
- The front end, built with `Next.js`, efficiently consumes data from `Strapi` through APIs.
- `Next.js` combines the strengths of `React.js` and server-side rendering for optimal performance.
- Further details on this integration will be covered in the `Next.js` crash course.

### Project Showcase

- The end result of this Freelance Stack is a hosted website with features like a customizable blog.
- The website operates as a single-page application, offering seamless transitions between sections.
- `Strapi` is responsible for publishing blog articles, which are then fetched and displayed dynamically by the `Next.js` front end.

### Excalidraw Overview

- A visual representation using `Excalidraw` showcases the simplicity of the Freelance Stack.
- The front end and back end, along with the admin panel, are neatly integrated, simplifying the overall architecture.
- `Strapi` automatically creates API endpoints based on content types, streamlining data retrieval.

### Design Integration

- Design is a crucial aspect, and the Freelance Workflow involves transitioning from a `Figma` design file to the `Next.js` front end.
- The process includes understanding stylings, margins, and other design elements provided in the `Figma` file.
- The data from `Strapi` is then seamlessly integrated into this design.

### Comparison Without Strapi

- A brief comparison is drawn to highlight the additional effort required without using `Strapi`.
- Building a custom admin panel, backend, and API would necessitate a separate application.
- Data input from the admin panel would require a dedicated user interface, resulting in a more complex development process.

### Conclusion

- The Freelance Stack simplifies the development process by providing a cohesive solution for both front-end and back-end requirements.
- `Strapi` serves as a user-friendly content management system, while `Next.js` delivers high-speed, flexible frontend development.
- Understanding the underlying principles of this stack empowers developers to adapt it to different frameworks and CMS solutions.
- This course will cover the essential concepts and skills needed to leverage the Freelance Stack effectively.

### **=>** 3. How to go through this course

- I just wanted to do a quick note on how to actually go through this course.

#### Styling Focus

- The styling is not the primary focus of this course.
- The focus of this course is `Next.js` and `Strapi`.

#### Styling Approach

- On the front end, `Next.js` will be used with `Sass` for styling.
- `Sass` is essentially CSS on steroids.
- Reasons for choosing `Sass`:
  - Universal Familiarity:
    - Everyone knows how to write CSS, making it accessible for all.
    - No need to introduce additional frameworks like material UI or tailwind.
  - Modularization:
    - Allows for the modularization of CSS files.
    - CSS files will be provided in an assets folder, separate from JavaScript.
    - Users can choose to download these files and integrate them into their projects to skip styling.
    - Styling videos will be clearly marked, enabling users to skip them if desired.

#### Course Structure Recommendation

- It is recommended to follow the course in a chronological order.
- Begin with the crash courses.
- Proceed to the main project for each.
- Chronological order makes sense, especially for the crash courses.
- Users familiar with `Figma` or `Next.js 13` can skip relevant sections and jump to the main project.
- For those not already familiar, going through the course step by step is advised.

### **=>** 4. Materials to go through the course

- In this note, you will find everything you need to go through the whole course!

#### Design & Assets

- **Figma Design File**
  - Access the design file containing all assets, designs, margins, etc.
  - For the best experience, export files directly from Figma, following the correct workflow.
  - Note: The attached assets folder includes the final public folder within the frontend repository.

#### A Word on Styling

- **Styling Videos**
  - If you're primarily focused on learning Next.js and Strapi, you have the option to skip the styling videos.
  - Zipped SASS folder for the final project is attached.
  - Ensure correct spelling of class names and import the `main.scss` file into your `layout.js` file at the beginning of the Next.js setup.

#### The Source Code

- **Github Repository**

  - Explore the code at the end of the project in the general repository.
  - For a breakdown by video, refer to past commits.

  [Github Repository](https://github.com/your-username/your-repository)

- **Github Commits**

  - Commits align closely with each video lecture.

  [Github Commits](https://github.com/your-username/your-repository/commits)

#### Still Stuck?

- If you encounter difficulties:
  - Comment on the video.
  - Directly message the instructor on the platform or via Twitter.

## Section 2: NextJS Crash Course

### **=>** 5. Why are we using Next.js?

- Welcome to the Next.js Crash Course! In this section, we'll explore the reasons behind choosing Next.js for our main project.

#### Why Use Next.js?

- The fundamental question we'll address first is: Why do we use `Next.js`?
  - If you are new to it, this section will provide insights into the nature of this framework.
  - If you already have experience with React, your learning curve will be smooth.
  - `Next.js` is a meta framework built on top of `React`, aiming to eliminate some of the disadvantages associated with `Reactjs`.
  - Unlike `React`, which is purely client-side, `Next.js` is server-side first, offering a combination of the best features from both worlds.
  - Subsequent videos will delve into how it achieves this and how to leverage its full potential.

#### Disadvantages of Reactjs

- Before we explore how `Next.js` addresses the limitations of `Reactjs`, let's understand the drawbacks of `Reactjs`.
  - `React` operates as a client-side library, delivering a sizable JavaScript bundle to be rendered within the browser.
  - While this approach provides a smooth single-page application experience, it comes with downsides:
    - Initial load times can be slower due to the large JavaScript bundle.
    - Search engine optimization is challenging as search engines struggle to interpret JavaScript-rendered content.
  - `Next.js` resolves these issues, making it particularly crucial for freelancers and developers working on projects requiring high search engine rankings.

#### Importance of Next.js for Freelancers

- Freelancers, in particular, stand to benefit from learning `Next.js`.
  - Clients often prioritize high search engine rankings, a challenge with traditional `React` applications.
  - `Next.js` addresses this challenge and offers:
    - Server-side rendering for improved search engine optimization.
    - Performance enhancements through smaller JavaScript bundles.
  - These benefits come without sacrificing the smooth single-page application experience.
  - With integrated API routes and a full-stack framework, `Next.js` is a versatile choice that aligns with modern development practices.

#### Conclusion and Further Information

- In summary, the key advantages of using `Next.js` include:
  - Easier search engine optimization.
  - Performance improvements with smaller JavaScript bundles.
- This framework is particularly valuable when working with content management systems like `Strapi`.
  - `Next.js` facilitates easy data revalidation from the backend (in this case, `Strapi`) to maintain a fast and continuously updated website.
  - Clients can effortlessly update or import data within `Strapi`, ensuring a positive experience for both users and content managers.

For more information on using `Next.js` and its application in the freelance stack, refer to the relevant sections in the course materials.

### **=>** 6. Setting up a NextJS Project

- To initiate a `Next.js` project, follow these steps:
  1. Open your terminal.
  2. Execute the command `npx create-next-app@latest`.

```bash
npx create-next-app@latest
```

3. The above command will install the latest stable version of `Next.js`.
4. Refer to the official `Next.js` documentation for detailed information on installation. [Next.js documentation](https://nextjs.org/docs)
5. Navigate to the installation section to find the recommended command.
6. Optionally, specify the version number during project creation, e.g., `npx create next app@13.5.5`.
7. For this course, it's suggested to use version `13.5.5` to ensure compatibility.

#### Project Setup

- After running the installation command, the setup prompts will include:

  1. Enter your project name (e.g., "Crash Course").
  2. Choose whether to use TypeScript.
  3. Indicate your preference for ESLint.
  4. Opt-out of Tailwind CSS.
  5. Choose the app router with the app directory.
  6. Skip the source directory.
  7. Opt-out of customized imports.

![](images3/1.png)

- Additional notes:
  - The `Next.js` documentation is a valuable resource for understanding the framework.
  - Consider referring to the documentation for in-depth information on server components, client components, and other concepts.

#### Project Initialization

- Upon completing the setup, follow these steps:

  1. Navigate to the project folder (e.g., `cd next-crash-course`).
  2. Run the command `npm run dev` in the terminal to start the `Next.js` server.

  ```bash
  cd next-crash-course

  npm run dev
  ```

  1. Access the server at `localhost:3000` in your browser.
  2. Explore the project documentation for further guidance.

#### Initial Project Structure

- **File Exploration:**

  - Inside the project, explore the files and folders.
  - Access the `app` folder and open the `page.js` file.

- **Update Content:**
  - Edit the `page.js` file, leaving only an H1 tag with the text "hello world."

```jsx
import styles from './page.module.css'

export default function Home() {
  return <main className={styles.main}></main>
}
```

- Verify the changes by refreshing the browser.
- Confirm that the project is set up correctly before moving on to routing.

### **=>** 7. Simple Routing in NextJS

- Routing in Next.js has undergone significant updates since version 12.
- Whether you're new to Next.js or transitioning from version 12, this section will guide you through all the changes.

#### File-Based Routing System

- Next.js now employs a file-based routing system, revolutionizing how routes are defined within your application.
- Within the app directory, routes are determined based on the folders and files present.

- Visualizing the structure:

- the app folder is at the top, and specific routes are created using folders, such as 'blog'.
- Dynamic routing will be covered later in the crash course.
- In the main project, the 'page.js' and 'layout.js' files in the app folder serve as the components for a specific route.
- The 'layout.js' file acts as a wrapper, displaying the content of the folder within the outer layout.
- Focus on the 'page.js' file for now.

#### Creating a New Route

- To create a new route, such as a `blog` page, follow these steps:

  1. Inside the app directory, create a new folder named `blog`
  2. Within the blog folder, create a `page.jsx` file, specifying the content for this route.
  3. Consider using code snippets or plugins for efficiency, such as the 'Next.js 13 power snippet' for Visual Studio Code.
  4. Add the desired content to 'page.jsx' for example, `H1 blog`.

  ![](images3/2.png)

  5. Upon saving, the new route is accessible at `localhost/3000/blog`.

#### Styling Considerations and Conclusion

- Routing between different pages is established by creating folders and 'page.js' files.
- Note that the styling may need adjustments, but the focus here is on the core functionality of Next.js.
- While more advanced dynamic routing will be covered later, creating a new route involves adding a folder within the app directory and a corresponding 'page.js' file inside it.

### **=>** 8. Layouting in NextJS

- In the context of Next.js, as our routes become more complex with dynamic parameters, it's essential to implement a consistent layout for our pages.

- The logic involves creating a centralized layout that can be applied to multiple pages, preventing the need to import components individually into each page.

#### Page Layout

- **Objective:**

  - Develop a consistent layout for pages to avoid redundancy.

- **Creating Components Folder:**
  - Generate a new folder named `_components`.
  - Prefix with an underscore for easy access at top.
  - Create a `header.jsx` file within the `_components` folder.

![](images3/3.png)

#### Header Component

- **Content:**

  - In `header.jsx`, add an H3 tag for the header.
  - Delete the global CSS file for simplicity.

![](images3/4.png)

#### Adding Header to Pages

- Import the header component into the `layout.js` file.

- Ensure the import is placed within the body of the layout file, avoiding placement outside of the body.

- Incorrect placement might lead to errors such as `hydration failed`.

- This ensures that the layout is applied consistently across different pages.

![](images3/5.png)

![](images3/6.png)

![](images3/7.png)

#### Custom Layouts for Specific Pages

- Next.js allows the creation of custom layouts for specific pages or subtrees.

- For example, you can create a `layout.js` file within a specific page or subtree, defining a layout specific to that section.

- This flexibility enables customization of the layout for different parts of the website.

- Each `layout.js` file defines the structure for its subtree, allowing for unique styling or content arrangements.

- Example:
  - Create a new `layout.js` for the blog page.
  - Customize the layout for the blog page with a distinct H5 tag.

![](images3/8.png)

![](images3/9.png)

- Understand that layouts in `layout.js` affect all child elements or subsections of a route.
- Blue lines in the project visually represent the applied layout.

![](images3/10.png)

#### Navigating Between Pages

- To navigate between pages, we'll explore the process in the next video.

By following these steps, you can effectively manage the layout of your Next.js application, maintaining consistency while allowing for customization where needed.

### **=>** 9. Linking from Page to Page

- In this section, we will explore how to link between different pages in your Next.js application.

- We have previously built various routes, including the blog page and the main page.

- Now, our goal is to create links that seamlessly navigate between these pages.

#### Linking in Next.js

- Linking in Next.js is straightforward in terms of code implementation, but it is crucial to grasp the conceptual understanding of it.

- The objective is to achieve a single-page application experience, where clicking on links results in instant navigation without any noticeable load time.

- This is made possible by pre-rendering, where all necessary content is loaded in advance, ensuring a fast and smooth user experience.

#### Concept of Pre-rendering

- To illustrate the concept of pre-rendering, consider an already launched website.

- Clicking on links, such as "Read more" on the blog page, demonstrates the absence of load time.

- The transition is immediate because the content is preloaded, eliminating the need for additional server requests.

- This approach significantly contributes to the overall speed and efficiency of the application.

#### Linking Between Pages

- Let's implement linking between our blog and home pages.

- Open the `header.jsx` component file and remove the `layout.js` import.

- Now, within the header component, we want to add links to both the main page and the blog page.

- Utilize the `Link` component from Next.js to ensure seamless navigation.

- Avoid using a standard `A` tag, as it would introduce unnecessary page refreshes.

![](images3/11.png)

- By utilizing the `Link` component, we ensure a smooth transition without additional server requests.

- Test the links by clicking on them; you should observe direct navigation without page refreshes.

- Repeat the process for linking to the home page.

![](images3/12.png)

- Now, your header contains functional links between the blog and home pages.

#### Moving on to the Core

- With the linking functionality in place, we can now proceed to the core aspects of our application, focusing on server and client components.

### **=>** 10. Server and Client Components Overview

- In Next.js 14, understanding the concepts of server and client-side components is crucial.
- This section delves into the core concepts of Next.js components, differentiating between server-side and client-side components.

- If you're familiar with React and have been away for a while, you might be more acquainted with client-side components.
- However, Next.js default behavior is server-first, making components server-side unless specified otherwise.

#### Server Side Components vs. Client Side Components

![](images3/13.png)

- **Server-Side Components:**
  - Built and rendered entirely on the server.
  - Arrive ready on the client, requiring no additional input or JavaScript.
- **Client-Side Components:**
  - HTML is built on the server, but interactivity (e.g., forms, inputs) is hydrated on the client.
  - Used when specific client-side interactivity is needed.
  - Conversion from server-side to client-side is straightforward when required.

#### Why Differentiate Between Server and Client Side?

- The distinction exists for performance reasons:

  - Server-side components are faster and more performant.
  - They allow for sending less JavaScript, resulting in smaller bundles.
  - Ideal for prefetching data, enhancing overall performance.

- **Note:** While client-side components are still fast, server-side components are preferable when interactivity is unnecessary.

#### Displaying Components in Next.js

- In Next.js after version 13, pages can consist of both server-side and client-side components.

- `Components can be nested`, allowing for component-specific data and optimized rendering.

![](images3/14.png)

- Example:
  - A search bar as a client component for user input tracking.
  - A nav bar as a server component for fetching and displaying information.

#### Working with Server Side and Client Side Components

- To work with server-side and client-side components:

  - By default, components are server-side unless specified.
  - Conversion to a client-side component requires using the `'use client'` tag.

  - Example: Converting a server-side header to include a client-side search bar.

```jsx
'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [search, setSearch] = useState()
  return (
    <header>
      <h3>Header</h3>
      <Link href='/'>Home Page</Link>
      <Link href='blog'>Blog</Link>
      <input
        type='text'
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
    </header>
  )
}
```

- **Note:** Server-side components need JavaScript for rendering, but specific functionalities may be hydrated on the client side.

#### Create separate components for server and client functionality

- Example: Extracting a search bar as a client component and leaving the rest of the nav bar as a server component.

```jsx
import Link from 'next/link'
import SearchBar from './SearchBar'

export default function Header() {
  return (
    <header>
      <h3>Header</h3>
      <Link hrefLang='/'>Homepage</Link>
      <Link hrefLang='/blog'>Blog</Link>
      <SearchBar />
    </header>
  )
}
```

```jsx
'use client'
import { useState } from 'react'

export default function SearchBar() {
  const [search, setSearch] = useState()
  return (
    <>
      <p>{search}</p>
      <input
        type='text'
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
    </>
  )
}
```

#### Conclusion

- Optimize components based on their purpose:

  - Create separate components for server and client functionality.
  - Achieve a balance between server-side rendering and client-side interactivity for optimal performance.

### **=>** 11. Data Fetching

- In this section, we will explore the process of data fetching in Next.js, taking advantage of the capabilities provided by server components.

- The ability to associate data directly with a component simplifies the process of fetching data without the need for creating separate API routes.

- Server components enable seamless data fetching, even when utilizing API keys or other sensitive information.

- The integration of server components offers significant advantages in terms of data retrieval.

- For the practical demonstration, we will consider a blog page where we aim to display articles sourced from an API.

- A free open API will be used for demonstration purposes, but the principles apply to other APIs, including your custom Strappy API.

- The API used in this example provides 100 posts that can be accessed via a specific URL.

![](images3/17.png)

#### Fetching Data in the Blog Page

1. To initiate data fetching on the blog page, follow these steps:

   - Create a `response` variable, awaiting the result of the `fetch` function.

   - Utilize the built-in `fetch` function, which can be later replaced with Axios if preferred.

   - The URL of the API should be provided as part of the fetch operation.

```jsx
export default function Page() {
  const response = await fetch ("https://jsonplaceholder.typicode.com/posts")
  return (
    <main>
      <h1>Blog</h1>
    </main>
  )
}
```

2. To handle asynchronous behavior, ensure that the component is declared as an asynchronous function.

```jsx
export default async function Page() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  return (
    <main>
      <h1>Blog</h1>
    </main>
  )
}
```

3. Log the response to verify the data retrieval.

```jsx
export default async function Page() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  console.log(response)
  return (
    <main>
      <h1>Blog</h1>
    </main>
  )
}
```

1. The data fetched at this stage is currently on the server.

![](images3/18.png)

- Convert the response to JSON for further use.

```jsx
export default async function Page() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await response.json()
  console.log(data)
  return (
    <main>
      <h1>Blog</h1>
    </main>
  )
}
```

![](images3/19.png)

- Implement basic rendering of post titles using the fetched data.

```jsx
export default async function Page() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await response.json()
  console.log(data)
  return (
    <main>
      <h1>Blog</h1>
      {data.map(post => (
        <p>{post.title}</p>
      ))}
    </main>
  )
}
```

![](images3/20.png)

#### Continuous Data Updating

- The network activity can be observed in the network tab. However, by default, the data is static and won't be revalidated.

![](images3/21.png)

1. Enable continuous data updates using the `revalidate` option.

- Explore the option to set a specific revalidation time (e.g., every 30 seconds).

```jsx
export default async function Page() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 30,
    },
  })
  const data = await response.json()
  console.log(data)
  return (
    <main>
      <h1>Blog</h1>
      {data.map(post => (
        <p>{post.title}</p>
      ))}
    </main>
  )
}
```

Here, the data will be revalidated every 30 seconds.

2. Alternatively, when using Axios, you can achieve the same effect with the following code:
3.

```jsx
export default async function Page() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await response.json()
  console.log(data)
  return (
    <main>
      <h1>Blog</h1>
      {data.map(post => (
        <p>{post.title}</p>
      ))}
    </main>
  )
}

export const revalidate = 30
```

3. With this setup, the data will be continuously updated or revalidated based on the specified interval.

- It's noteworthy that server-side data fetching is the default behavior, providing a convenient and efficient way to handle data without the need for complex state management.

- The ease of integrating data into components showcases a significant improvement compared to traditional approaches.

- The process involves reading the data directly within the component, allowing for straightforward integration with the React elements.

- This approach contrasts with older methodologies that required setting state and subsequent rendering, simplifying the overall data handling process.

### **=>** 12. Dynamic Routing

In this section, we will explore dynamic routing in Next.js 14, allowing us to fetch and display data for various pages with different slugs.

#### Dynamic Routing Basics

- Dynamic routing involves fetching data for pages with different slugs.
- (When using revalidation, be cautious about multiple requests within the same component, as the lowest revalidate number takes precedence.)

- (Requests across components are deduplicated, optimizing performance by preventing unnecessary duplicate requests.)

#### Creating Dynamic Pages

- Create a new folder named `[id]` to represent dynamic routing based on the post IDs.

- For each new route, create a `page.jsx` file to display the data for that route.

![](images3/22.png)

- Utilize the `params` prop to access the dynamic values, such as the id.

```jsx
export default function Page({ params }) {
  const { id } = params
  return (
    <main>
      <h1>Individual page : {id}</h1>
    </main>
  )
}
```

![](images3/23.png)

- let's do it now in our blog, pulling the post title as well.

```jsx
export default async function Page({ params }) {
  const { id } = params
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 30,
    },
  })
  const data = await response.json()
  return (
    <main>
      <h1>Individual page : {id}</h1>
      <p>{data.title}</p>
    </main>
  )
}
```

![](images3/24.png)

- dynamic pages are generated at runtime when a request is made.
- but we can improve the performance by Pre-generating the Pages.

#### Pre-generating Dynamic Pages

- To improve performance and provide data at runtime, pre-generate dynamic pages using the `getStaticParams` function.

  - pre-generating pages for improved performance.
  - Use the `getStaticParams` function to achieve pre-rendering based on post IDs.
  - Fetch post data for each ID and return an array of objects with ID values.
  - Demonstrate the use of the `fetch` function to retrieve post data.
  - Convert the ID to a string to ensure compatibility with the data array.
  - Confirm the successful pre-rendering of pages by refreshing and checking individual pages.

```jsx
export default async function Page({ params }) {
  const { id } = params
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 30,
    },
  })
  const data = await response.json()
  return (
    <main>
      <h1>Individual page : {id}</h1>
      <p>{data.title}</p>
    </main>
  )
}

export async function generateStaticParams() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await response.json()
  return data.map(post => ({
    id: String(post.id),
  }))
}
```

![](images3/25.png)

![](images3/26.png)

#### Handling Errors and Fallbacks

- **404 Page Handling:**

- Set dynamic params to `false` if you want to ensure all parameters are known beforehand, preventing 404 errors for unknown IDs.

- Implement a fallback mechanism to handle scenarios where the API is unavailable or data fetching fails.

```jsx
export default async function Page({ params }) {
  const { id } = params
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 30,
    },
  })
  const data = await response.json()
  return (
    <main>
      <h1>Individual page : {id}</h1>
      <p>{data.title}</p>
    </main>
  )
}

export async function generateStaticParams() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await response.json()
  return data.map(post => ({
    id: String(post.id),
  }))
}

export const dynamicParams = false
```

![](images3/27.png)

#### Fallbacks for Data Fetching

- Ensure proper error handling to provide a fallback for scenarios like API unavailability.

  - Create a separate function (`fetchPosts`) for data fetching, making it easier to handle errors and implement fallbacks.
  - Implement a try-catch block to handle errors during data fetching.
  - Utilize the `notFound` function from Next.js to redirect users to a 404 page when errors occur.

```jsx
import { notFound } from 'next/navigation'

async function fetchPost(id) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      next: {
        revalidate: 30,
      },
    })
    const data = await response.json()
    return data
  } catch (err) {
    notFound()
  }
}

export default async function Page({ params }) {
  const { id } = params

  const data = await fetchPost(id)

  return (
    <main>
      <h1>Individual page : {id}</h1>
      <p>{data.title}</p>
    </main>
  )
}

export async function generateStaticParams() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await response.json()
  return data.map(post => ({
    id: String(post.id),
  }))
}

export const dynamicParams = false
```

- **Demonstration:**

  - Display the proper 404 page for IDs outside the defined range or API-related issues.
  - Showcase the seamless fallback mechanism for handling errors during data fetching.

![](images3/28.png)

- **Conclusion:**
  - Dynamic routing in Next.js, combined with pre-generation and fallback strategies, ensures efficient handling of various scenarios.
  - Explore the versatility of dynamic pages and their robust error-handling capabilities for a smoother user experience.

### **=>** 13. Not Found Pages

- Now we have it set up that if we put in an `ID` here that doesn't exist, we see this full, full page here, right?
- Because we said we only want to display anything for the kind of parameters that are coming in here.

#### Creating a Custom 404 Page

- Now, the thing is, we can also create our own 404 page.
- So if I go into my `app` directory here and I just add a `not-found.js` right here, and I say this is a new page and I'm just saying sorry in an `H3`, sorry we couldn't find what you're looking for like this.
- Now if I go back, there we go. Sorry we couldn't find what you're looking for.

#### Route-Specific 404 Pages

- That would be happening on every route. That is just wrong, right?
- If we go to the home page, it wouldn't appear. But then on any route that we haven't actually defined, we will show this page.
- It could be, though, that you actually want to have a situation in which you want to have for specific route segments, different not found pages.
- For example, for the dashboard, you might want to have a different not found page than for the general website.
- So how can we do that?

#### Implementing Route-Specific 404 Pages

- Well, I could go in here and I could say for each one of my `IDs`, right.
- If there's some other root I want to have another not found page here. This would be basically for any blog article that can't be found.
- And now this not found page is only responsible for anything that basically happens after the blog page.
- You could also put it in the blog folder. It doesn't really matter in this case because we don't have any more folders.
- If I go in here and I just say, well, let me say sorry. The blog article you were looking for can't be found. Okay, and we're also going to make that an `H3` like this.
- Now if we go back, we're going to see that this actually hasn't worked.
- So let's go for a route that doesn't exist. We still get sorry couldn't find what you're looking for.

#### Handling Route-Specific 404 Page Rendering

- It's not working as it was with the layout. It's not working here for the for the page. Why is that?
- Because right here, when we're saying we don't expect any dynamic parameters, we're right now saying, okay, just lead it back to the root page to the root for for page if there's anything wrong.
- If I set this to `false` and we look at it again, we have the problem again that it tries to render the page.
- The problem here is that yes, we're catching the error and we're sending it to not found. But actually here because of the API that we're using, we're actually getting back we're getting back `200`.
- So it's telling us, hey, this everything has worked out perfectly.
- Just to show you that in Strapi it's going to be a lot nicer because it would return a full `404` and we would get an error and everything would already be working.
- Here I can now say, if `data.title` does not exist, right? We want to also call the not found function not found function like this.
- Now if we go back to our page we see sorry. The blog article you were looking for can't be found.
- In a normal scenario, our API would find an error here, right? We can't fetch the data, so we're going to bring it to the not found section.
- And that's why here we just have to remember to set this to `true`.
- But again this is only if you want to have a route specific for for page. If you have the normal use case where you're okay with one for for page, what we had before already worked, right? Sorry we couldn't find what you're looking for.

#### Conclusion

- You already went through a lot and pretty much the most important features in all the features actually, that you're going to be needing for the project we're going to be building.
- Which is, you understand, routing in Next.js, you understand data fetching, you understand server components, client and components, all of that.
- Which means we can actually start looking into the project, which we're going to be doing by first looking at Figma and the Figma file itself.
- And then we'll get started with our Next.js app that we're going to be using for the project.
- In terms of Strapi, we're going to have the introduction to Strapi, what Strapi is, how it works, and so on.
- When we're actually starting to build our Strapi backend for our website.
- So basically. Oops. So basically Strapi you're going to be seeing while we're using it.
- We're going to be learning by doing that.
- But in terms of Next.js you're in a perfect position.
- And so now let's look at Figma.

## Section 3: Developer Intro To Figma

### **=>** 14. What is Figma and how to use it

- When I introduced the freelance stack, I mentioned the two main technologies for building this app: `Next.js` and `Strapi`.
- Our focus will be on these technologies.

#### Design Tool Overview

- Take a few minutes to discuss the design tool we'll be using, which is `Figma`.
- While the choice of design tool is not crucial, `Figma` has gained popularity in the design community.
- Previously, designers used tools like `Adobe XD` and `Sketch`, but `Figma` is now widely adopted.

#### Working with Figma

- Explore key aspects for developers to efficiently use `Figma` in the development process.
- Simulate the workflow closely to that of a freelancer.
- Discuss the structure of the shared `Figma` file with icons, logos, and individual pages.
- Emphasize inspecting and extracting values from `Figma` for use in `Next.js` or `CSS` code.
- Highlight collaboration features such as comments and multiple contributors.

#### Using Figma as a Development Tool

- Share the `Figma` file for participants to view.
- Discuss the structure of the file, including images, icons, logos, and individual pages.
- Explain how to inspect elements for information like width, font family, font size, and line height.
- Emphasize the benefits of using `Figma` in development, including copying elements and extracting colors and styles.
- Stress the importance of entering development mode to gather information efficiently.
- Encourage participants to utilize the collaborative features of `Figma` for smoother communication.

#### Utilizing Figma Features

- Demonstrate how to leverage `Figma` features for efficient development.
- Discuss measuring distances between elements and using the option key for additional information.
- Emphasize the simplicity of `Figma` and its role in reducing communication with designers.
- Guide participants on exporting images from `Figma` with different quality and size options.

#### Conclusion and Next Steps

- Summarize the role of `Figma` as the starting point for creating designs.
- Highlight the transition to the main project, starting with setting up the `Next.js` frontend.
- Mention the plan to code up all components of the home page based on the `Figma` design.

## Section 4: Initial Project Setup NextJS, Strapi and Sass

### **=>** 15. NextJS Base Setup

- **Project Introduction**
  - Begin setting up the main project for our course, the `Surf Camp`.
  - Initial focus: Configuring the `Next.js` front end.

#### Next.js Front End Setup

- Project Folder Organization

  - Choose a location for your project (e.g., a dedicated folder within your project directory).
  - Create a new folder named `surfcamp` or any preferred name for your project.

- Creating Next.js App

  - Execute the command: `npx create-next-app@latest surfcamp_frontend`.
  - Suggest using a specific version, e.g., `13.5.5`, for consistency.

  ```bash
  npx create-next-app@latest surfcamp_frontend
  ```

  - Answer default questions during the installation process.

  ![](images4/1.png)

- Base Setup Steps

  - Navigate to the newly created project folder.
  - Ensure successful installation by running `npm run dev` and accessing the provided link.

  ```bash
  npm run dev
  ```

#### File Cleanup for Starting Fresh

- Clean the `layout.js` file:

```jsx
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
```

- Delete the `global.css` file

- Delete the `page.modules.css` file

- Clean the `page.js` file:

```jsx
export default function Home() {
  return (
    <main>
      <h1>SurfCamp</h1>
    </main>
  )
}
```

- Verify the setup by checking the browser for any errors.

#### Conclusion

- Cleanup ensures a clean starting point for the `Next.js` front end.
- Subsequent videos will cover additional setups, such as the introduction to `Sass` styling.
- For those not interested in styling, simply add the `sass` folder to your project.
- Those interested in styling can proceed to the next video for detailed `Sass` setup and styling patterns.

### **=>** 16. Reminder on Styling

Follow these steps for a quick reminder on styling if you choose not to code along.

1. **Bring in the Sass Folder:**

   - If you haven't done so already, download the Sass folder.
   - If you have downloaded it before, ensure you have the latest version by reattaching the folder provided with this note.

2. **Integration with `layout.js`:**

   - Import the `main.scss` file into your `layout.js` file.

3. **Dependency Check:**
   - Verify that Sass is installed as a dependency.
   - If not, install Sass using the appropriate package manager.

Now, you're all set with the styling reminder!

### **=>** 17. Styling Video: Sass Setup

Follow these steps to set up and organize your `sass` styles in your Next.js 14 project:

#### Set up the sass folder

- Create the `sass` folder in the project directory.
- Name the folder anything you prefer, for example, "styling" or simply "sass."

#### Creating the base Folder

- Inside the sass folder:
  - Create a sub-folder named `base`
  - (The purpose of the base folder is to reset default stylings in the browser.)

#### Adding base.css File

- Inside the "base" folder:

  - Create a file named `_base.scss`.

  ![](images4/2.png)

  - The underscore indicates that this is a partial file.
  - Copy and paste the provided code from the assets folder into this file.

```scss
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}

body {
  background-color: beige;
}

main {
  min-height: calc(100vh - 13rem);
}

a {
  color: inherit;
  text-decoration: none;

  &:hover,
  &:focus {
    text-decoration: none;
  }
}

a.btn {
  display: inline-block;
}

button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  font-weight: 400;
}

html {
  font-family: 'Open Sans', sans-serif;
  font-weight: normal;
  font-style: normal;
}

// html {
//   font-size: 62.5%; // 1rem = 10px; 10px/16px = 62.5%

//   @include respond(tab-land) {
//     // width < 900?
//     font-size: 55%; // 1 rem = 9px, 9/16 = 56.25%
//   }

//   @include respond(phone) {
//     // width < 600?
//     font-size: 50%; // 1 rem = 8px, 8/16 = 50%
//   }

//   @include respond(big-desktop) {
//     font-size: 75%; // 1 rem = 12px, 12/16 = 75%
//   }
// }

.bold {
  font-weight: bold;
}
```

- This code resets various styling options, including margins, paddings, and hover effects on links.

#### Importing Styles into Main File

- Create a new main sas file, for example, `main.scss`.
  - In this file, import the partial files from the "base" folder.

```scss
@import 'base/base';
```

- The main.scss file will eventually be compiled, combining all partial files.

#### Connecting Styles to Layout JS

- In the JavaScript file responsible for rendering (e.g., `layout.js`):
  - Link the main SASS file.
  - Ensure the path is correct, such as `../sass/main.scss`.

```javascript
import '../sass/main.scss'
```

- The styles will now be applied to the project, and any additional styles can be added similarly.

#### Adding More Styles

- To add new styles:
  - Create additional SASS files.
  - Consider organizing styles in a "components" folder.
  - Import these new files into the main SASS file for them to be applied to the project.
  - The layout JS will automatically incorporate the styles, displaying them properly on the screen.

### **=>** 18. Styling Video: Variables and Typography

- This section covers styling aspects, focusing on variables for colors and typography.
- Recent updates involve adjustments to the background color and font in the project.

#### Setting Up Variables for Styling

- For consistency in color usage, establish variables for colors.
- Follow these steps:

  1. Open Figma to identify recurring colors in the project.
  2. Copy the color codes from Figma.
  3. Create a `_variables.scss` file in the `base` folder.

  4. Define variables (e.g., `$turquoise` and `$light_beige`) for consistent color application.

![](images4/3.png)

- Use $light-beige as background color

![](images4/4.png) 5. Ensure correct import order in the `main.scss` file to prevent undefined variable errors.

```css
@import 'base/variables';
@import 'base/base';
```

#### Adding More Color Variables

- Expand the color palette by incorporating additional colors from Figma.
- To achieve this, follow these steps:

  1. Identify and extract more colors from Figma (e.g., `$light_brown` and `$brown`).

```css
$turquoise: #14a998;
$light-beige: #fff8f4;
$light-brown: #f1e8d9;
$brown: #d7c094;
```

2. Use these variables in styling files to maintain a cohesive color theme.

#### Typography and Fonts

- Address font-related styling by creating a `_typography.scss` file.
- Execute the following steps:

  1. Create a `_typography.scss` file in the `base` folder

![](images4/5.png)

- and import it into the `main.scss` file.

![](images4/6.png)

2. Import the desired font from Google Fonts using the provided link.

![](images4/7.png)

1. we will be using `Open Sans` font for paragraphs and `DM Serif Display` for headlines.
2. Define REM units for flexible font and margin adjustments, adapting to various screen sizes. (this css is included in the resources)

```css
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Open+Sans:wght@300;400;500&display=swap');

h1,
h2,
h3,
h4 {
  font-family: 'DM Serif Display', serif;
}

h1 {
  font-size: 10rem;
  line-height: 12rem;
  font-weight: 500;
}

h2 {
  font-size: 8rem;
}

h3 {
  font-size: 6rem;
  line-height: 7rem;
}

h4 {
  font-size: 4rem;
  line-height: 4.7rem;
}

h5 {
  font-size: 3rem;
}

.copy {
  font-size: 2rem;
}

.copy-small {
  font-size: 15px;
}
```

#### Implementing Mixins for Responsive Design

- Integrate mixins to facilitate responsive design adjustments.
- Follow these steps:

1. Create a `_mixins.scss` file in the base folder to specify breakpoints for different screen sizes.(do not forget to import it into the `main.scss` file)
2. Apply these mixins in styling files to dynamically adjust styling based on the screen size.

```css
/* MEDIA QUERY MANAGER */
/*
0 - 900px:     Phone
900 - 1200px:  Tablet landscape
1200 - 1800px: Desktop
1800px+:       Big desktop

$breakpoint argument choices:
- phone
- tab-land
- big-desktop

1em = 16px
*/
@mixin respond($breakpoint) {
  @if $breakpoint == phone {
    @media (max-width: 56.25em) {
      @content;
    } // 900px;
  }
  @if $breakpoint == tab-land {
    @media (max-width: 75em) {
      @content;
    } // 1200px
  }
  @if $breakpoint == big-desktop {
    @media (min-width: 112.5em) {
      @content;
    } // 1800px
  }
}
```

3. Acknowledge the importance of responsive design, but emphasize the course's focus on Next.js, Strapi data, and other project aspects.

### **=>** 19. Overview of our setup (and why we set it up this way)

- Setting up our project initially may seem like a lot, but this groundwork will significantly speed up our coding process.
- The key benefit is that, as we progress with coding, we can easily reference our established conventions, such as font sizes and styles, streamlining our development.

#### Font Size and Typography

- The typography file serves as a reference for font sizes. For instance:
  - An 80-pixel size corresponds to an H2 tag, as we use eight rem, translating to 80 pixels.
  - Importantly, the font size automatically scales down as the screen size decreases, aligning with our design approach based on a 1440-pixel width.

#### Font Styles and Google Fonts

- Integration of Google Fonts is another aspect of our setup. To verify its functionality:
  - Access your Next.js app in the browser.
  - Observe the distinct appearance.
  - Inspect the font family, confirming the use of the intended font, such as DM serif display.

#### Font Size Adjustment

- Addressing font size anomalies:
  - Despite being an H1 tag, a font size of 88 pixels might seem unusual.
  - Our mixins dynamically adjust font size based on screen size, explaining the variation.
  - For example, on a 1440-pixel width, the H1 tag should be 100 pixels, but it adjusts to 88 pixels.

#### Font Hierarchy and Sizing

- The typography file establishes a consistent font hierarchy:
  - Work with your designer to create a hierarchy, ensuring uniformity in font sizes across different text elements.
  - Each font size aligns with a specific purpose, contributing to a cohesive design.
  - Consistent sizing ensures design elements are visually harmonious.

#### Design Consistency

- Observe the design consistency in font sizes across different pages:
  - Headlines, body text, and specific classes maintain uniform sizing.
  - Tailor font sizes to the content's importance while considering readability on various screen sizes.
  - Use pixel values for specific cases, like small text, to maintain readability across screen sizes.

#### Conclusion

- In summary, this setup enables us to focus on coding specific components without worrying about styling intricacies. The groundwork laid in this video ensures a streamlined development process, allowing us to code efficiently and maintain design consistency.

### **=>** 20. Strapi Installation and Overview

- In the previous section, we configured the front end, focusing on styling aspects.
- With that completed, we are now prepared to initiate the coding process.

#### Setting Up Strapi

- The next phase involves establishing the back end using Strapi, serving as a headless CMS.
- **=>** Follow these steps:

  1. Navigate to the `Surfcam` folder (parent directory of Surfcam_front end).

  2. Use the following command to install Strapi:

     ```bash
     npx create-strapi-app@latest surfcamp_strapi
     ```

  3. You can opt for the latest stable version or use version 4.13.7 for consistency.
  4. Confirm the installation by pressing 'Y'.
  5. Choose the "quick start" installation type.

#### Quick Start Installation

- While the quick start is convenient for learning purposes, consider alternative deployment options for production projects. Refer to the deployment section for more information.

#### Data Structures in Strapi

- Strapi will be utilized to allow clients to modify specific content on the website. Here's what we'll store in Strapi:

  - Blog articles: Editable by clients.
  - Info blocks: Information that can be updated.
  - Camps and events: Allowing easy modification without code changes.
  - Pricing details: Adjustable without code intervention.

- The process involves creating these data structures in Strapi gradually.

- After installation, Strapi will start locally, and you'll be prompted to register. Enter the required details and remember the password for future logins.

#### Exploring Strapi Dashboard

- The Strapi dashboard provides essential tools for content management:

  - Content Manager: Create and manage content types.
  - Content Type Builder: Define the structure of content types.
  - Media Library: Store and manage media assets.

![](images4/8.png)

#### Quick demonstration

- For a quick demonstration, we'll create a data type named "Beginners Bootcamp" as an example.

![](images4/9.png)

1. Create the different content types.

   - Click on `Content-Type Builder`
   - Under COLLECTION TYPES click on `Create a new collection type`
   - Enter a `Display name` like `camp`

![](images4/10.png)

(You're automatically going to see that this will expose some API that we can that we can query the data from later on)

- click on continue, we'll see that there's different fields that we can now fill out for this type.

![](images4/11.png)

#### creating the fields for your collection type

1. For the name of the camp select `Text`

- And that text field needs to have a name. So I'm just going to say this is the camp `name`

![](images4/12.png)

- ADVANCED SETTINGS:

In the advanced settings we're going to play around quite a lot later on

you can set things like:

- it has to be a required field.

(We'll talk about why that is or why you would need a required field.)

- We can give it a maximum length.

- We can also say that it's unique.

(There shouldn't be another camp named like that.)

- We can also give it a default value

(in case nothing is put in.)

But for now, we're just going to stay with it and say, okay, this needs to be required.

![](images4/13.png)

2. For the description first click on `+ add another field`

- select `Rich text` and name it `description`

- And again we'll make it `required`

3. So if I click on `finish` and `save` now, I now have a camp content type, which is nothing else than basically a schema.

![](images4/14.png)

- we're defining how should a camp generally look like
- it's the blueprint for all of the camps we're going to be creating.

#### Creating a new entry

- click on `Content Manager` and then `+ Create new entry`

- and now we can paste the content for the Beginners Bootcamp from figma and save it

![](images4/15.png)

(That's it for now. This is how easy it is for me to create a new content type.)

- Don't forget to publish it, otherwise we can't access it.

#### Exposing Data through API

- The data stored in Strapi is accessible through APIs. Here's how you can expose and access the data:

1. The client interacts with the content manager to input data.
2. The API, accessed via the endpoint `/api`, exposes the data.

#### Ensure public access to the data by adjusting roles in Strapi

1. Access settings, navigate to roles under `USERS & PERMISSIONS PLUGIN`, and select the `public role`
2. Specify which operations should be publicly available for each content type.
   (in our case find and findOne)
   and save

![](images4/16.png)

- This process allows for easy integration with the front end, enabling dynamic data retrieval.

- Further details on data exposure and management will be explored as we proceed with different content types in Strapi.

- With the Strapi setup complete, our focus now shifts back to the front end.
- The next section will guide you through creating the home page.
- Subsequently, we'll revisit Strapi to incorporate information into the front end.

## Section 5: Landing Page & Experience Page with Layout Components

### **=>** 21. Header JSX Structure

- The following instructions guide you through the process of setting up the Header JSX structure for your Next.js 14 application.

#### Structure of Layout and Page Files

- Be aware that layout and page files can exist in both the root and child folders.
- Understand that components placed in the layout are displayed throughout the application.
- Acknowledge the necessity of having the header present on every page.

(this is the header we are gonna have in every page)

![](images4/17.png)

#### Component Building Approach (what we are gonna do for every component)

- Begin by writing JSX and basic HTML for the header component.
- JavaScript implementation will follow in subsequent steps.
- Styling for the component will be covered in a separate video tutorial.

#### Setting Up Header Component

- create a `_components` folder in the app folder

1. Create a new `Header.jsx` file within the components folder.
2. Implement a functional component for the header.

```jsx
const Header = () => {
  return <h1>Header</h1>
}

export default Header
```

#### Importing and Rendering Header

1. Import the newly created header component into the layout file.
2. Ensure the header is placed within the body tag for proper rendering.

```jsx
import '../sass/main.scss'
import Header from './_components/Header'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
```

#### Structuring Header Content

- Define the structure of the header, including a logo, links, and a button.

![](images4/17.png)

1. Utilize a regular image tag for the logo, avoiding the Next.js image component. (I am actually using the image component here)
2. inside the public folder, create a new folder `assets`, that will hold all of the assets we're going to be using.
3. include the svg for the logo in the `assets` folder
4. Import an SVG logo, and integrate it within the header.

```jsx
import Image from 'next/image'

const Header = () => {
  return (
    <header>
      <Image
        src={`/assets/logo.svg`}
        alt='logo'
        width={100}
        height={100}
      />
    </header>
  )
}

export default Header
```

#### Creating Navigation Links

1. Create an array containing `navItems` with display names and slugs.
2. Utilize the map function to generate links dynamically based on the array.
3. Add unique key props to each dynamically generated link to avoid React warnings.
4. Add the css classes to all elements

```jsx
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  const navItems = [
    {
      display: 'the camp.',
      slug: '/',
    },
    {
      display: 'the experience.',
      slug: '/experience',
    },
    {
      display: 'the blog.',
      slug: '/blog',
    },
  ]

  return (
    <header className='header'>
      <Image
        className='header__logo'
        src={`/assets/logo.svg`}
        alt='logo'
        width={100}
        height={100}
      />
      <ul className='header__nav'>
        {navItems.map(item => (
          <li key={item.slug}>
            <Link href={item.slug}>
              <h5>{item.display}</h5>
            </Link>
          </li>
        ))}
      </ul>
    </header>
  )
}

export default Header
```

#### Adding Book Now Button

1. Establish a link for the "Book Now" button within the header.
2. Ensure the button links to the "/events" page as required.
3. Apply styles to the button in accordance with the specified requirements.

```jsx
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  const navItems = [
    {
      display: 'the camp.',
      slug: '/',
    },
    {
      display: 'the experience.',
      slug: '/experience',
    },
    {
      display: 'the blog.',
      slug: '/blog',
    },
  ]

  return (
    <header className='header'>
      <Image
        className='header__logo'
        src={`/assets/logo.svg`}
        alt='logo'
        width={100}
        height={100}
      />
      <ul className='header__nav'>
        {navItems.map(item => (
          <li key={item.slug}>
            <Link href={item.slug}>
              <h5>{item.display}</h5>
            </Link>
          </li>
        ))}
      </ul>
      <Link href='/events'>
        <button className='btn btn--black btn--small'>BOOK NOW</button>
      </Link>
    </header>
  )
}

export default Header
```

#### Finalizing Header Component

1. Test each link in the header to verify its functionality.
2. Confirm that the header component code is complete and functioning as intended.

#### Conclusion and Next Steps

- Subsequent videos will cover the styling of the header and the development of the footer.
- Considerations for dynamic styling based on page content will be addressed in future lessons.

### **=>** 22. Styling: Header

- The layout of the page needs adjustment as it currently appears in a column, but we want it to be displayed as a row.

#### Creating the Sass Folder and Header Component

- To achieve this, follow these steps:

1. Create a new folder within the `sass` folder.
2. Inside the `components` folder, create a new file called `_header.scss`.
3. Import the `_header.scss` styles into the main.scss file to apply them to your project.

```css
@import 'base/mixins';
@import 'base/variables';
@import 'base/base';
@import 'base/typography';

@import 'components/header';
```

4. Open and set the parent element (main element within the header) with the class `header` to be a flex container.

5. To enhance the appearance, adjust the `justify-content` property to be `space-between` for even spacing between elements. and align-items : center;

6. Additionally, add padding to the header for a better visual appeal.

```css
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 4.8rem;
}
```

#### Styling the Logo

- Update the styling for the logo with the class `__logo` in the `header.css` file.
  - Use nested CSS to set the width and height of the logo to `5 REM`

```css
.header {
  display: flex;
  justify-content: space-between;
  padding: 2rem 4.8rem;

  &__logo {
    width: 5rem;
  }
}
```

#### Styling the Nav Container

- Identify the class name of the nav container (e.g., `__nav`) and set it as a flex container in the `header.css` file.
  - Add `list-style: none` to remove default list styling.
  - Adjust margin-right for each list item (except the last one) to achieve even spacing.

#### Advanced CSS for Nav Container

- Apply advanced CSS to create margin-right for all list items in the nav container (except the last one) in the `header.css` file.
  - This ensures even spacing between elements.

```css
.header {
  display: flex;
  justify-content: space-between;
  padding: 2rem 4.8rem;

  &__logo {
    width: 5rem;
  }

  &__nav {
    display: flex;
    list-style: none;

    & li:not(:last-of-type) {
      margin-right: 4.6rem;
    }
  }
}
```

#### Styling the Button

- Create a separate component file named `button.css` for the button styling.
- Import `button.css` into the main CSS file.

#### Styling the Button Component

- Set the styling for the button in a new `_button.scss` file in the components folder. (import it in the main.scss file)
  - Define the font size, background color, text color, and padding.
  - Use modifiers for variations, such as black background with white text.
  - Adjust `border-radius` for rounded edges.

```css
.btn {
  font-size: 2.5rem;

  &--small {
    padding: 1rem 1.8rem;
    border-radius: 2.5rem;
  }

  &--black {
    background-color: black;
    color: white;
  }
}
```

With these steps, your Next.js 14 header styling should be complete. Verify the changes in your website to ensure the desired layout and appearance.

### **=>** 23. Footer JSX Structure

- In this section, we will focus on creating the JSX structure for the footer.

#### Restructuring the Layout

- Move the Header.jsx into a new dedicated `layout` folder within the components folder.
- Ensure that Visual Studio Code automatically updates the file import.

#### Creating the Footer JSX

- Open the header file and keep it open, as we will create the footer in a similar way.
- create a `Footer.jsx` file inside the Layout folder
- In the footer file, return a footer with a class name `footer` and an H1 tag for testing.
- Export the footer component.

```jsx
const Footer = () => {
  return (
    <footer className='footer'>
      <h1>Footer</h1>
    </footer>
  )
}

export default Footer
```

#### Integrating Footer into Layout

- Import the footer component in the layout page.
- Display the footer component in the layout where needed.

```jsx
import '../sass/main.scss'
import Footer from './_components/Layout/Footer'
import Header from './_components/Layout/Header'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
```

#### Styling the Footer

- Ensure the footer appears at the bottom with appropriate spacing.
- (the white space from the header to the footer comes from our base styles for the main element)
- Proceed to the next step for writing the code for the footer.

#### Mapping Through Footer Nav Items

- Utilize an array to map through navigation items in the footer.
- Create list items for each nav item with appropriate links.
- Wrap the list items in an unordered list with a class name `footer-links`.

#### JSX for Footer Nav

- Create the first row in JSX for the footer navigation.
- Include the logo and links, we will be updating the logo color to white using CSS.
- Import the necessary `Link` component from Next.js.

```jsx
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  const navItems = [
    {
      display: 'the camp.',
      slug: '/',
    },
    {
      display: 'the experience.',
      slug: '/experience',
    },
    {
      display: 'the blog.',
      slug: '/blog',
    },
    {
      display: 'the events.',
      slug: '/events',
    },
  ]
  return (
    <footer className='footer'>
      <nav className='footer__nav'>
        <Image
          className='footer__logo'
          src={`/assets/logo.svg`}
          alt='logo'
          width={100}
          height={100}
        />
        <ul className='footer__links'>
          {navItems.map(Item => (
            <li key={Item.slug}>
              <Link href={Item.slug}>
                <h5>{Item.display}</h5>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  )
}

export default Footer
```

#### JSX for Footer Policies

- Create a div with a class name `footer-policies` for the second row.
- Define an array of policy items (imprint, terms and conditions, data protection).
- Map through the array, creating list items with paragraph elements for each policy.
- Wrap the list items in an unordered list with a class name `footer-policies-nav`.

```jsx
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  const navItems = [
    {
      display: 'the camp.',
      slug: '/',
    },
    {
      display: 'the experience.',
      slug: '/experience',
    },
    {
      display: 'the blog.',
      slug: '/blog',
    },
    {
      display: 'the events.',
      slug: '/events',
    },
  ]

  const policies = [
    {
      display: 'Imprint',
      slug: '/imprint',
    },
    {
      display: 'Terms and Conditions',
      slug: '/terms-conditions',
    },
    {
      display: 'Data Protection',
      slug: '/data-protection',
    },
  ]
  return (
    <footer className='footer'>
      <nav className='footer__nav'>
        <Image
          className='footer__logo'
          src={`/assets/logo.svg`}
          alt='logo'
          width={100}
          height={100}
        />
        <ul className='footer__links'>
          {navItems.map(Item => (
            <li key={Item.slug}>
              <Link href={Item.slug}>
                <h5>{Item.display}</h5>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className='footer__policies'>
        <ul className='footer__policies-nav'>
          {policies.map(policy => (
            <li key={policy.slug}>
              <p className='copy'>{policy.display}</p>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}

export default Footer
```

#### JSX for Copyright

- Create a paragraph with a class name `copy` for displaying the copyright information.

```jsx
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  const navItems = [
    {
      display: 'the camp.',
      slug: '/',
    },
    {
      display: 'the experience.',
      slug: '/experience',
    },
    {
      display: 'the blog.',
      slug: '/blog',
    },
    {
      display: 'the events.',
      slug: '/events',
    },
  ]

  const policies = [
    {
      display: 'Imprint',
      slug: '/imprint',
    },
    {
      display: 'Terms and Conditions',
      slug: '/terms-conditions',
    },
    {
      display: 'Data Protection',
      slug: '/data-protection',
    },
  ]
  return (
    <footer className='footer'>
      <nav className='footer__nav'>
        <Image
          className='footer__logo'
          src={`/assets/logo.svg`}
          alt='logo'
          width={100}
          height={100}
        />
        <ul className='footer__links'>
          {navItems.map(Item => (
            <li key={Item.slug}>
              <Link href={Item.slug}>
                <h5>{Item.display}</h5>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className='footer__policies'>
        <ul className='footer__policies-nav'>
          {policies.map(policy => (
            <li key={policy.slug}>
              <p className='copy'>{policy.display}</p>
            </li>
          ))}
        </ul>
        <p className='copy'>© Sam’s Surfcamp - all rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer
```

### Conclusion

- Ensure the JSX structure is set up correctly for further styling in CSS.
- The next step is to style the footer using CSS, as outlined in the upcoming video.

### **=>** 24. Filter to give SVGs any colour you want

- In the next video, you'll see me use the `filter` CSS property to give my logo any color I want.

- I'm referencing this CodePen right here:
  [CodePen - Filter Property](https://codepen.io/sosuke/pen/Pjoqqp)

- In which you can input any target color, and it will compute the correct filter values for you.

- If you don't want to go through all that, here's the code to turn your logo white:

  ```css
  filter: invert(81%) sepia(53%) saturate(0%) hue-rotate(226deg) brightness(114%) contrast(100%);
  ```

### **=>** 25. Styling: Footer

Follow these steps to style the footer of your Next.js 14 project. Ensure that you maintain the structure outlined below:

#### Adding Footer CSS

1. create a new file `_footer.scss` inside the components folder

#### Including Footer in Main CSS File

1. Don't forget to include the footer styles in your main CSS file.
2. This ensures that the styles are applied to your footer component.

#### Main Styling

1. Set the main styling for the footer:
   - Background color: black
   - Font color: white

#### Structuring the Footer

1. Configure the structure of your footer, adhering to the design:
   - Top padding: 6 REM
   - Bottom padding: 4.5 REM
   - Side padding: 4.8 REM on either side

```css
.footer {
  background-color: black;
  color: white;
  padding: 6rem 4.8rem 4.5rem;
}
```

#### Logo Styling

1. Adjust the styling for the logo in the footer:

   - Apply a filter to make the logo white.
   - Set the filter property to `invert(99%) brightness(100%)`.

2. Set the logo dimensions:
   - Width: 8 REM

```css
.footer {
  background-color: black;
  color: white;
  padding: 6rem 4.8rem 4.5rem;

  &__logo {
    width: 8rem;
    filter: invert(81%) sepia(53%) saturate(0%) hue-rotate(226deg) brightness(114%) contrast(100%);
  }
}
```

#### Styling Footer Links

1. Style the unordered list (footer links) as follows:

   - Display as a flex container.
   - Set `list-style` to none.
   - Add margin to the right of each list item, except the last one.

```css
.footer {
  background-color: black;
  color: white;
  padding: 6rem 4.8rem 4.5rem;

  &__logo {
    width: 8rem;
    filter: invert(81%) sepia(53%) saturate(0%) hue-rotate(226deg) brightness(114%) contrast(100%);
  }

  &__links {
    display: flex;
    list-style: none;

    & li:not(:last-of-type) {
      margin-right: 7rem;
    }
  }
```

2. Ensure the image and the footer are displayed side by side:
   - Make the navigation (`nav`) a flex container.
   - Set `justify-content` to space between.
   - Center items along the vertical axis.
   - Add padding to the right of the navigation (6 REM).

```css
.footer {
  background-color: black;
  color: white;
  padding: 6rem 4.8rem 4.5rem;

  &__nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 6rem;
    border: 2px solid red;
  }

  &__logo {
    width: 8rem;
    filter: invert(81%) sepia(53%) saturate(0%) hue-rotate(226deg) brightness(114%) contrast(100%);
  }

  &__links {
    display: flex;
    list-style: none;

    & li:not(:last-of-type) {
      margin-right: 7rem;
    }
  }
}
```

#### Styling Footer Policies

1. Style the second row (footer policies):

   - Make the entire row a flex container.
   - Set `justify-content` to space between.

2. Style the policies navigation:

   - Make it a flex container.
   - Set `list-style` to none.
   - Add margin to the right of each list item, except the last one.
   - Add margin-bottom of 3.5 REM below the first row.

3. Review the design and adjust the spacing between elements as needed.

Now your Next.js 14 footer should be stylish and aligned with the specified design.

### **=>** 26. Hero Section JSX Structure

Follow these steps to create the Hero Section JSX structure for your Next.js 14 application:

#### Hero Section

1. Begin by considering the overall design of your application, including the footer and header, which have already been implemented.
2. Focus on the main page of your application, specifically the hero section, which is a key component of the design.

#### Creating the Hero Section Component

3. Open Visual Studio Code and navigate to the components folder (not the layout folder) in your project's directory.

   - Create a new file named `hero-section.js` within the components folder.
   - Consider making all visual components use the `.jsx` extension for clarity.

4. Define the basic structure of the `hero-section` component:

   ```jsx
   import React from 'react'

   const HeroSection = () => {
     return <div className='hero'>{/* Content will be added here */}</div>
   }

   export default HeroSection
   ```

5. In your main page component, import and use the `hero-section` component.

#### Handling Background Image

6. In the `hero-section.js` file, focus on handling the background image for the hero section.

   - Create a new `div` called `Hero Background`.
   - Inside this div, include an `img` tag with a class name of `hero`.
   - Ensure that the image source is dynamically passed as a prop.

7. Obtain the image you want to use in your hero section from your headless CMS (e.g., Strapi).

8. Save the image within your project's `assets` folder (e.g., `assets/hero-home/HeroHome.png`).

9. Import the image into your `hero-section.js` file.

10. Test that the image is displayed correctly in your browser.

#### Adding Text and Button

11. Within the `hero-section.js` file, create a container for the tagline, headline, or strap line.

- Use a `div` with a class name of `hero-headline`.
- Pass the text content dynamically as a prop.

12. Add a button to your hero section.

- Use a `button` element with class names such as `button` and `button-medium`.
- Dynamically set the button color based on the theme passed as a prop.
- Link the button to the desired page, such as the 'events' page.

13. Ensure that the hero section in your main page component now includes the tagline, headline, and button.

#### Making the Hero Section Flexible

14. To make the hero section more flexible, pass props for the theme color, headline, and background image.

- Set default values for these props to ensure proper rendering even if not explicitly provided.

15. Allow the theme color to determine the text color of the headline.

- Apply a modifier to the `hero-headline` class based on the theme.

16. Ensure that the hero section can handle variations in text, button color, and background image based on the page calling it.

17. Consider adding fallbacks for missing props to enhance code robustness.

18. Review and test the hero section on different pages of your application, adjusting the props as needed.

19. If applicable, handle additional components within the hero section, such as a logo, and make them theme-aware by adding appropriate modifiers.

20. Regularly revisit and optimize your code for usability and flexibility based on the design and requirements of your application.

### **=>** 27. Styling: Hero Section

- In this section, we'll focus on styling the hero section of our Next.js 14 application.

#### Setting Hero Section Width

- The initial step is to set the width of our hero section to `830 pixels`.
  - Open your project and create a new file for the styles. Let's name it `hero section.css`.
  - In the CSS file, define the `.hero-section` class with a width of `83rem` and a height of `100%`.

```css
.hero-section {
  width: 83rem;
  height: 100%;
}
```

#### Setting Background Image

- Now, let's address the background image.
  - Inside the hero section CSS file, set the background to cover the entire container.

```css
.hero-section {
  width: 83rem;
  height: 100%;
  background: url('path/to/your/image.jpg') center bottom / cover no-repeat;
  position: relative;
}
```

- Make sure to set the parent element's position to `relative` for proper positioning.

#### Styling the Background Image

- Ensure the image within the background spans the entire container.
  - Add styles to your hero section CSS file.

```css
.hero-section {
  width: 83rem;
  height: 100%;
  background: url('path/to/your/image.jpg') center bottom / cover no-repeat;
  position: relative;
}

.hero-section img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center bottom;
  z-index: -1;
}
```

#### Adjusting Header Position

- Adjust the header position to accommodate the hero section.
  - Update the header CSS file.

```css
.header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}
```

- Optionally, you can add padding to the hero section for better alignment.

```css
.hero-section {
  width: 83rem;
  height: 100%;
  background: url('path/to/your/image.jpg') center bottom / cover no-repeat;
  position: relative;
  padding: 22rem 4.8rem; /* Adjust values as needed */
}
```

#### Styling the Button and Logo

- Style the "Book Now" button and position the logo.
  - Update the button CSS file.

```css
.button {
  background-color: turquoise;
  padding: 1.6rem 3.2rem;
  border-radius: 3.2rem;
  color: white;
}

/* For the orange theme */
.button.orange {
  background-color: #CEHCE822f;
  color: white;
}
```

- Update the hero section CSS file for logo positioning.

```css
.hero-section {
  width: 83rem;
  height: 100%;
  background: url('path/to/your/image.jpg') center bottom / cover no-repeat;
  position: relative;
  padding: 22rem 4.8rem;
}

.logo {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
}
```

#### Additional Styling

- Add additional styling for a polished look.
  - Update the hero section CSS file.

```css
.hero-section {
  width: 83rem;
  height: 100%;
  background: url('path/to/your/image.jpg') center bottom / cover no-repeat;
  position: relative;
  padding: 22rem 4.8rem;
  border-radius: 0 0 3.2rem 3.2rem; /* Adjust values based on design */
}

.hero-section img {
  border-radius: 0 0 3.2rem 3.2rem; /* Same as above */
}

.headline {
  margin-bottom: 6.5rem; /* Adjust as needed */
}
```

#### Adding a Different Color Theme

- Optionally, you can add a different color theme.
  - Update the hero section CSS file.

```css
/* For the orange theme */
.hero-section.orange {
  background: url('path/to/your/image.jpg') center bottom / cover no-repeat;
}

.hero-section.orange img {
  filter: brightness(0) invert(1);
}
```

- Update the button and headline CSS files for the orange theme.

```css
.button.orange {
  background-color: #CEHCE822f;
  color: white;
}

.headline.orange {
  color: #CEHCE822f;
}
```

- Apply the orange theme to your hero section when needed.

```html
<div class="hero-section orange">
  <!-- Content goes here -->
</div>
```

Now, you've successfully styled the hero section of your Next.js 14 application, with options for different color themes. Adjust values as needed based on your design.

### **=>** 28. InfoBlocks JSX Structure Documentation

This documentation guides you through the process of creating the JSX structure for InfoBlocks in your project.

#### Building the Main Page

1. The next step is to build the rest of the home page or the main page.
2. For this purpose, we will create different blocks.

#### Asset Preparation

- To prepare assets for InfoBlocks:
  - Obtain a rectangular image.
  - Export the image (e.g., as `rectangle.png`).
  - Move the image to a new folder (e.g., `Info Blocks`).

#### Creating Info Block Component

1. Create the Info Block component:

   - Navigate to the `components` folder.
   - Create a new file called `infoBlock.js`.
   - Define the basic structure of the Info Block component.

     ```jsx
     // infoBlock.js
     const InfoBlock = () => {
       return (
         <div className='info-block'>
           {/* Image Section */}
           <img
             src='info blocks/rectangle.png'
             alt=''
             className='info-image'
           />

           {/* Text Section */}
           <div className='info-text'>
             <h2>Headline</h2>
             <p className='copy'>Experience Text</p>
             <button className='button medium'>Book Now</button>
           </div>
         </div>
       )
     }
     ```

2. Integrate the Info Block into the main page:
   - Import the Info Block component in the main page file.
   - Place the Info Block component in the desired location on the page.

#### Data Passing and Rendering

1. Prepare for data passing:

   - Define an object, `infoBlockData`, containing:
     - Headline
     - Text (Paragraph)
     - Button (Class name and styling)
   - Add an optional boolean flag, `isReversed`, for styling adjustments.

2. Pass data to the Info Block component:

   - In the main page, create an instance of `infoBlockData`.
   - Pass the data to the Info Block component.

   ```jsx
   // mainPage.js
   const infoBlockData = {
     headline: 'Experience',
     text: 'Your paragraph text here...',
     button: { className: 'button turquoise', text: 'Book Now' },
     isReversed: true,
   }

   // ...

   ;<InfoBlock data={infoBlockData} />
   ```

#### Styling Adjustment

1. Update the Info Block component to handle reversed styling:

   - Add conditional class names based on the `isReversed` boolean flag.

   ```jsx
   // infoBlock.js
   const InfoBlock = ({ data }) => {
     const { isReversed } = data
     return (
       <div className={`info-block ${isReversed ? 'info-reversed' : ''}`}>
         {/* Image Section */}
         <img
           src='info blocks/rectangle.png'
           alt=''
           className='info-image'
         />

         {/* Text Section */}
         <div className='info-text'>
           <h2>{data.headline}</h2>
           <p className='copy'>{data.text}</p>
           <button className={data.button.className}>{data.button.text}</button>
         </div>
       </div>
     )
   }
   ```

2. Apply styling in the main page:
   - Pass the `isReversed` flag based on the specific block's requirements.
   ```jsx
   // mainPage.js
   <InfoBlock data={infoBlockData} />
   ```

Now, you have successfully set up the JSX structure for InfoBlocks, allowing for dynamic data rendering and styling adjustments.

## **=>** Next.js 14 Styling: InfoBlocks Documentation

### 29. Styling InfoBlocks

- Follow these steps to style the InfoBlocks in your Next.js 14 project:

#### 1. Create InfoBlock CSS File

- Start by creating a Sass file for your InfoBlocks within the components folder.
- Name the file "info-block.css" to maintain consistency.

#### 2. Define the Info Class

- Inside the "info-block.css" file, create the `.info` class.
- Set `display: flex` to ensure the image and container are in one row.
- Apply spacing and padding to position them at the far corners of the info block.

#### 3. Handle Reversed Layout

- Account for reversed layouts by adjusting padding based on the "reverse" condition.
- Specify `padding-right` as `4.8rem` for normal layout.
- For reversed layout, set `flex-direction` to `row reverse` and adjust padding accordingly.

#### 4. Style Image and Text Components

- Set both image and text components within the parent component to `49%` width.
- Determine the `border-radius` for the image to achieve the desired cut-off effect.
- Use nested Sass to apply different `border-radius` values for the reverse layout.

#### 5. Set Margins

- Create appropriate margins for spacing within the blocks.
- Apply a `margin-top` of `4rem` and `margin-bottom` of `3rem` to the headline.

#### 6. Style the Button

- Ensure the button within the InfoBlock has a `margin-top` of `3rem`.
- If needed, add the `button medium` class to style the button appropriately.

#### 7. Final Adjustments

- Check and adjust the overall margin to the top of the container, if necessary.
- Confirm that the styling aligns with the design specifications.

Following these steps should result in the proper styling of InfoBlocks in your Next.js 14 project.

### **=>** 30. Experience Page: Reuse Hero Section and InfoBlocks

- Follow these instructions to create the second page in your Next.js 14 project, incorporating the hero section and info blocks.

#### Building the Second Page

1. Create a new page for the experience section using file-based routing.

   - Route: `/experience`
   - Filename: `page.js`

2. Copy the structure of the initial route page and paste it into the new page (`experience/page.js`).
   - Focus on replicating the hero section and info blocks setup.

#### Styling the Hero Section

3. Adjust the theme of the hero section for the experience page.

   - Set the theme to `orange` by updating the `image source` and background image accordingly.

4. Add the hero image (`hero-experience.png`) to the public assets folder.

   - Set the image source in the hero section to `assets/hero-experience.png`.

5. Address styling issues with the header.
   - Ensure the header has the appropriate `z index` to avoid overlay issues.
   - Implement logic to change the header theme based on the page path.
   - Use the `usePathName` hook to determine the current page path.
   - Note: This might require converting the header component into a client component to use `usePathName`.

#### Adding Info Blocks

6. Add info blocks to the experience page.

   - Copy the info block components from the initial route page and paste them into the experience page.
   - Adjust the content of the info blocks as needed.

7. Verify that the page structure is now set up to receive data from Strapi.

8. In the upcoming video, focus on finalizing the styling of the header.

Following these steps will ensure that your Next.js 14 project's experience page incorporates the hero section, info blocks, and the necessary styling adjustments for a seamless user experience.

### **=>** 31. Styling: Adjust Header Color per Path

- Follow these instructions to adjust the header color based on the page path in your Next.js 14 project.

#### JavaScript Implementation

1. Implement the necessary JavaScript logic for changing the header color based on the page path.
   - Ensure that the logic is written to dynamically set a class (`header-light`) on the header when the path is `/experience`.

#### Header CSS Modifications

2. Open the CSS file for the header component.

3. Update the styling to accommodate the light version of the header.
   - Set the color to white for the light version.
   - Ensure that the changes apply to the entire header, fixing any color inconsistencies.

#### Z Index Adjustment

4. Add a `z index` to the header to resolve any overlay issues.
   - Adjust the `z index` to ensure the header appears above other elements when hovered.

#### Fixing Logo Styling

5. Address the logo styling in the light version of the header.
   - Copy the filter code used in the footer for the logo (if available) or use the following filter:
     ```css
     .header-light .header-logo {
       filter: brightness(0) invert(1);
     }
     ```
   - This filter ensures the logo appears white in the light version of the header.

#### Next Steps: Fetching Data from Strapi

6. With the header styling complete, the next steps involve fetching data from Strapi for the info blocks.
   - In the upcoming section, learn how to retrieve and display the right data in the info blocks.

By following these instructions, you will successfully adapt the header color and styling based on the page path in your Next.js 14 project.

## Section 6: Connecting our Frontend to Strapi

### **=>** 32. Creating InfoBlock Content Type on Strapi

### **=>** 33. Use Single Content Type in Strapi to create InfoBlocks per page

### **=>** 34. Fetch InfoBlock Data on Strapi

### **=>** 35. Fetch Data from Strapi and process it

### **=>** 36. Render InfoBlocks on page

### **=>** 37. Create Button from InfoBlock Strapi Data on page

### **=>** 38. Render InfoBlocks on Experience page

## Section 7: Main Page of the Blog

### **=>** 39. Highlight Article JSX Structure

### **=>** 40. Styling: Highlight Article

### **=>** 41. Subscribe To Newsletter JSX Structure

### **=>** 42. Styling: Subscribe to Newsletter Component

### **=>** 43. Functionality Subscribe to Newsletter Component

### **=>** 44. Featured Items Component JSX Structure

### **=>** 45. Styling Featured Items Component

## Section 8: Implement Blog on frontend through Strapi and NextJS

### **=>** 46. Create blog article type on Strapi

### **=>** 47. Input blog article data on Strapi

### **=>** 48. Render articles from Strapi data on main page of the blog

### **=>** 49. Create dynamic routes for all blog articles

## Section 9: Create fully customisable blog article

### **=>** 50. Create dynamic zone in Strapi for customisable blog content

### **=>** 51. Creating data for highlight article

### **=>** 52. Article Hero Section JSX

### **=>** 53. Styling: Article Hero Section

### **=>** 54. Article Intro Component JSX

### **=>** 55. Styling: Article Intro Component

### **=>** 56. Generic Article Component to render different component depending on strapi data

### **=>** 57. Article Headline JSX

### **=>** 58. Styling: Article Headline

### **=>** 59. Text with Image Component JSX

### **=>** 60. Styling: Text with Image Component

### **=>** 61. Article Paragraph JSX

### **=>** 62. Styling: Article Paragraph

### **=>** 63. Image Component JSX

### **=>** 64. Styling: Image Component

### **=>** 65. Other Articles Section on Individual Blog Page

### **=>** 66. Blog Section Homepage JSX

### **=>** 67. Styling: Blog Section Homepage

### **=>** 68. Fix Article Item for Featured Items on Homepage

## Section 10: Events Section - Create Signup Functionality for offered Surfcamps & Events

### **=>** 69. Post Requests in Strapi with the Newsletter Signup

### **=>** 70. Hook up Frontend to Signup Component in Strapi

### **=>** 71. Strapi Participant and Event Content Type

### **=>** 72. Feeding Data into Strapi for all events

### **=>** 73. Signup Form JSX

### **=>** 74. Styling: Signup Form

### **=>** 75. Signup Form Functionality: Sending data to Strapi from main events page

### **=>** 76. Pregenerate individual event pages

### **=>** 77. Event Data Processing

### **=>** 78. Render individual event page based off strapi data

### **=>** 79. Sign up for specific event

### **=>** 80. Fetch and filter upcoming events with a string query from Strapi

### **=>** 81. Adjust featured items component for individual event page

### **=>** 82. Styling: FeaturedItem Component adjusted for event

### **=>** 83. Fetch more events on individual event page & THANK YOU
