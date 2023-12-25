"use strict";(self.webpackChunkfundamentals=self.webpackChunkfundamentals||[]).push([[326],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),c=p(n),h=i,m=c["".concat(s,".").concat(h)]||c[h]||d[h]||o;return n?a.createElement(m,l(l({ref:t},u),{},{components:n})):a.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=h;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[c]="string"==typeof e?e:i,l[1]=r;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9143:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const o={sidebar_position:5},l="React Projects",r={unversionedId:"4 React/5 React Projects",id:"4 React/5 React Projects",title:"React Projects",description:"Section 1: Introduction",source:"@site/docs/4 React/5 React Projects.md",sourceDirName:"4 React",slug:"/4 React/5 React Projects",permalink:"/fundamentals/4 React/5 React Projects",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Typescript in React",permalink:"/fundamentals/4 React/4 Typescript in React"},next:{title:"React Crash Course",permalink:"/fundamentals/4 React/6 React Crash Course"}},s={},p=[{value:"Section 1: Introduction",id:"section-1-introduction",level:2},{value:"<strong>=&gt;</strong> Introduction",id:"-introduction",level:3},{value:"Who is this course for?",id:"who-is-this-course-for",level:4},{value:"What will you learn in this course?",id:"what-will-you-learn-in-this-course",level:4},{value:"Why bother with React?",id:"why-bother-with-react",level:4},{value:"So there we go.",id:"so-there-we-go",level:4},{value:"<strong>=&gt;</strong> How to get the most out of this course",id:"-how-to-get-the-most-out-of-this-course",level:3},{value:"Setup:",id:"setup",level:4},{value:"Breaks:",id:"breaks",level:4},{value:"Projects:",id:"projects",level:4},{value:"<strong>=&gt;</strong> Course Resources and Useful Links",id:"-course-resources-and-useful-links",level:3},{value:"Course Resources",id:"course-resources",level:4},{value:"Useful Links:",id:"useful-links",level:4},{value:"Resources for this Lecture",id:"resources-for-this-lecture",level:4},{value:"Section 2: Optional Env Setup",id:"section-2-optional-env-setup",level:2},{value:"<strong>=&gt;</strong> Getting Started",id:"-getting-started",level:3},{value:"Setting Up the Code Editor",id:"setting-up-the-code-editor",level:4},{value:"Using NPM and Node.js",id:"using-npm-and-nodejs",level:4},{value:"Installing Extensions",id:"installing-extensions",level:4},{value:"Creating a React App",id:"creating-a-react-app",level:4},{value:"Why a Sandbox?",id:"why-a-sandbox",level:4},{value:"Cleaning Up",id:"cleaning-up",level:4},{value:"Starting the Project",id:"starting-the-project",level:4},{value:"CSS Styling",id:"css-styling",level:4},{value:"Conclusion",id:"conclusion",level:4},{value:"<strong>=&gt;</strong> Node.js and npm resources",id:"-nodejs-and-npm-resources",level:3},{value:"Section 3: P01 E-signature-App",id:"section-3-p01-e-signature-app",level:2},{value:"<strong>=&gt;</strong> Welcome to the very first project.",id:"-welcome-to-the-very-first-project",level:3},{value:"Project Description",id:"project-description",level:4},{value:"Project Details",id:"project-details",level:4},{value:"Project Overview",id:"project-overview",level:4},{value:"Modifying the Name and Date",id:"modifying-the-name-and-date",level:4},{value:"Creating the Signature Function",id:"creating-the-signature-function",level:4},{value:"Creating the Container",id:"creating-the-container",level:4},{value:"Creating the First Component",id:"creating-the-first-component",level:4},{value:"Creating the Title Component",id:"creating-the-title-component",level:4},{value:"Importing the Title Component",id:"importing-the-title-component",level:4},{value:"Importing the Project into the Application",id:"importing-the-project-into-the-application",level:4},{value:"Creating Conditions for the Title Component",id:"creating-conditions-for-the-title-component",level:4},{value:"Adding Conditions for the Class in the Title Component",id:"adding-conditions-for-the-class-in-the-title-component",level:4},{value:"Creating the Signature Application",id:"creating-the-signature-application",level:4},{value:"Styling the Input",id:"styling-the-input",level:4},{value:"Changing the Background Color",id:"changing-the-background-color",level:4},{value:"Wrapping the Input Tags in a Footer Tag",id:"wrapping-the-input-tags-in-a-footer-tag",level:4},{value:"Using State",id:"using-state",level:4},{value:"<strong>=&gt;</strong> Using State in React",id:"-using-state-in-react",level:3},{value:"Assigning State to a Variable",id:"assigning-state-to-a-variable",level:4},{value:"Using State in the Component",id:"using-state-in-the-component",level:4},{value:"Creating the Event Handler",id:"creating-the-event-handler",level:4},{value:"Displaying the State Value",id:"displaying-the-state-value",level:4},{value:"Changing the State",id:"changing-the-state",level:4},{value:"Creating Additional State Variables",id:"creating-additional-state-variables",level:4},{value:"Conditional Rendering",id:"conditional-rendering",level:4},{value:"<strong>=&gt;</strong> Finished project files",id:"-finished-project-files",level:3}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"react-projects"},"React Projects"),(0,i.kt)("h2",{id:"section-1-introduction"},"Section 1: Introduction"),(0,i.kt)("blockquote",null),(0,i.kt)("h3",{id:"-introduction"},(0,i.kt)("strong",{parentName:"h3"},"=>")," Introduction"),(0,i.kt)("p",null,"Hello, friends. I'm extremely happy to announce that my three React project scores is out today.\nAs the title specifies, this is a project-based course that focuses on sharpening your skills as a web developer.\nThis course will do the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Create modern web applications using the React JavaScript framework and its large MPM library.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Teach you the most powerful and commonly used hooks like ",(0,i.kt)("inlineCode",{parentName:"p"},"useState")," , ",(0,i.kt)("inlineCode",{parentName:"p"},"useEffect")," , ",(0,i.kt)("inlineCode",{parentName:"p"},"useRef")," , ",(0,i.kt)("inlineCode",{parentName:"p"},"useContext")," , and many more.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Help you create powerful reusable components that you can use in your own projects."))),(0,i.kt)("h4",{id:"who-is-this-course-for"},"Who is this course for?"),(0,i.kt)("p",null,"This course is for beginner to intermediate web developers who want to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Fill their portfolios with modern web applications ranging from simple to more complex ones.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Understand project structure, use cases for different react hooks, and creation of powerful components."))),(0,i.kt)("h4",{id:"what-will-you-learn-in-this-course"},"What will you learn in this course?"),(0,i.kt)("p",null,"By taking this course, you will learn:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Multiple use cases for the most powerful react hooks like ",(0,i.kt)("inlineCode",{parentName:"p"},"useEffect")," , ",(0,i.kt)("inlineCode",{parentName:"p"},"useState")," , ",(0,i.kt)("inlineCode",{parentName:"p"},"useContext")," , and ",(0,i.kt)("inlineCode",{parentName:"p"},"useRef")," .")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"How to process data from local databases and servers.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"How to use react icons, react style components, and the React routing system.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"How to install third-party packages using NPM and much more."))),(0,i.kt)("h4",{id:"why-bother-with-react"},"Why bother with React?"),(0,i.kt)("p",null,"Here are some reasons why React is worth considering:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"React saves you time and money on development because it is component-based.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"You can break your UI into reusable components, allowing you to build dynamic user interfaces.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"React is declarative, making app development much easier.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The React community is amazing.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"React is used by huge organizations.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"React is SEO friendly.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"React fully embraces JavaScript and TypeScript.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"React has a fast and efficient learning curve."))),(0,i.kt)("h4",{id:"so-there-we-go"},"So there we go."),(0,i.kt)("p",null,"Eight reasons.\nCome on, learn React.\nSo please come with me on this journey.\nLet's create some awesome applications.\nSee you in the course."),(0,i.kt)("h3",{id:"-how-to-get-the-most-out-of-this-course"},(0,i.kt)("strong",{parentName:"h3"},"=>")," How to get the most out of this course"),(0,i.kt)("p",null,"Hi, as a content creator I am constantly working on finding ways to bring the best information in the most efficient way to you, the content consumer."),(0,i.kt)("p",null,'I am perfectly aware of the fact that not all of us have a multi-screen, high-resolution 30" monitor setup at our disposal, and it can be extremely frustrating to tab between video and code editor.\nHere are my suggestions:'),(0,i.kt)("h4",{id:"setup"},"Setup:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"For PC (Windows or Mac):"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Dual monitor setup with the second monitor being the cheapest you can find. Coding does not require high refresh rate or color precision.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"1 Monitor + Tablet as a second screen. Most tablets are large enough to follow along with the videos and code on the main monitor.")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Laptop (Windows or Mac):")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Second monitor. Again, as mentioned before, the cheapest you can find.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Tablet:"))),(0,i.kt)("h4",{id:"breaks"},"Breaks:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Take regular 5-15 minute breaks after each project.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Drink sufficient water and not too much coffee :P"))),(0,i.kt)("h4",{id:"projects"},"Projects:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'Review each project after you finish it and ask yourself the question, "How would you do this differently?"')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"I am not perfect and I am extremely open to constructive criticisms and suggestions."))),(0,i.kt)("h3",{id:"-course-resources-and-useful-links"},(0,i.kt)("strong",{parentName:"h3"},"=>")," Course Resources and Useful Links"),(0,i.kt)("h4",{id:"course-resources"},"Course Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"App.css")," file is the main CSS file for all of the projects and it is necessary for this course.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Please download the ",(0,i.kt)("inlineCode",{parentName:"p"},"App.css")," and replace it with your file or simply copy over the content."))),(0,i.kt)("h4",{id:"useful-links"},"Useful Links:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"React Icons - Here you can find all of the Free Icons libraries available for the React framework. It includes popular icons that you can easily include in your React projects using ",(0,i.kt)("inlineCode",{parentName:"p"},"react-icons")," , which utilizes ES6 imports that allow you to include only the icons that your project is using."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Install React Icons by using ",(0,i.kt)("inlineCode",{parentName:"li"},"npm install react-icons --save")," ."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Styled Components - ",(0,i.kt)("inlineCode",{parentName:"p"},"styled-components")," are used to enhance CSS for styling React component systems. By focusing on a single use case, we have managed to optimize the experience for developers as well as the output for end users.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Installing ",(0,i.kt)("inlineCode",{parentName:"p"},"styled-components")," only takes a single command and you're ready to roll: - With npm:"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save styled-components\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"With yarn:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add styled-components\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"JSON Placeholder - JSON Placeholder is a free fake API for testing and prototyping. We will make requests to the server and get data from it in some of our projects.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Avatars - DiceBear is an avatar library for designers and developers. You can choose between simple identicons and lovely designed characters. And best of all, they provide a simple and free HTTP API that you can use right away!"))),(0,i.kt)("h4",{id:"resources-for-this-lecture"},"Resources for this Lecture"),(0,i.kt)("p",null,"App.css file"),(0,i.kt)("h2",{id:"section-2-optional-env-setup"},"Section 2: Optional Env Setup"),(0,i.kt)("blockquote",null),(0,i.kt)("h3",{id:"-getting-started"},(0,i.kt)("strong",{parentName:"h3"},"=>")," Getting Started"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Set up an environment for the projects")),(0,i.kt)("h4",{id:"setting-up-the-code-editor"},"Setting Up the Code Editor"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use Visual Studio Code as the code editor"),(0,i.kt)("li",{parentName:"ul"},"Download Visual Studio Code if not already installed")),(0,i.kt)("h4",{id:"using-npm-and-nodejs"},"Using NPM and Node.js"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use NPM and Node.js for the projects"),(0,i.kt)("li",{parentName:"ul"},"Do not use yarn"),(0,i.kt)("li",{parentName:"ul"},"Install Visual Studio Code and create a folder for the project")),(0,i.kt)("h4",{id:"installing-extensions"},"Installing Extensions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Install the following extensions:"),(0,i.kt)("li",{parentName:"ul"},"ES7 React Redux style Component snippets"),(0,i.kt)("li",{parentName:"ul"},"ES7 React Redux GraphQL React Native snippets")),(0,i.kt)("h4",{id:"creating-a-react-app"},"Creating a React App"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create the React app only once"),(0,i.kt)("li",{parentName:"ul"},"Use the command ",(0,i.kt)("inlineCode",{parentName:"li"},"npx create-react-app project-sandbox"))),(0,i.kt)("h4",{id:"why-a-sandbox"},"Why a Sandbox?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create a sandbox to store the projects"),(0,i.kt)("li",{parentName:"ul"},"Install React App within the sandbox"),(0,i.kt)("li",{parentName:"ul"},"Create separate folders for each project")),(0,i.kt)("h4",{id:"cleaning-up"},"Cleaning Up"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"In App.js:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import './App.css'\n\nfunction App() {\n  return (\n    <div className='App'>\n      <h1>Project</h1>\n    </div>\n  )\n}\n\nexport default App\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Remove unnecessary files and folders:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"rm logo.svg")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"rm App.test.js")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"rm index.css")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"rm reportWebVitals.js")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"rm setupTests.js")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"In the index.js"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react'\nimport ReactDOM from 'react-dom/client'\nimport App from './App'\n\nconst root = ReactDOM.createRoot(document.getElementById('root'))\nroot.render(\n  <React.StrictMode>\n    <App />\n  </React.StrictMode>\n)\n")),(0,i.kt)("h4",{id:"starting-the-project"},"Starting the Project"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Start the React server by running ",(0,i.kt)("inlineCode",{parentName:"li"},"npm start"))),(0,i.kt)("h4",{id:"css-styling"},"CSS Styling"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Use custom CSS for styling instead of frameworks like Bootstrap or Tailwind CSS")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Delete the App.css file in the project")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Paste the ",(0,i.kt)("inlineCode",{parentName:"p"},"App.css file provided in the course")))),(0,i.kt)("h4",{id:"conclusion"},"Conclusion"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Verify that the source folder contains only ",(0,i.kt)("inlineCode",{parentName:"p"},"App.js")," , ",(0,i.kt)("inlineCode",{parentName:"p"},"index.js")," , and ",(0,i.kt)("inlineCode",{parentName:"p"},"App.css"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Create a new folder called ",(0,i.kt)("inlineCode",{parentName:"p"},"projects")," in the src folder to start the first project"))),(0,i.kt)("h3",{id:"-nodejs-and-npm-resources"},(0,i.kt)("strong",{parentName:"h3"},"=>")," Node.js and npm resources"),(0,i.kt)("p",null,"Node.js and npm"),(0,i.kt)("p",null,"Video tutorial\n",(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=yM92Iuh35JY"},"https://www.youtube.com/watch?v=yM92Iuh35JY")),(0,i.kt)("p",null,"node.js and npm official website\n",(0,i.kt)("a",{parentName:"p",href:"https://nodejs.org/en"},"https://nodejs.org/en")),(0,i.kt)("h2",{id:"section-3-p01-e-signature-app"},"Section 3: P01 E-signature-App"),(0,i.kt)("h3",{id:"-welcome-to-the-very-first-project"},(0,i.kt)("strong",{parentName:"h3"},"=>")," Welcome to the very first project."),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"project-description"},"Project Description"),(0,i.kt)("p",null,"In this project, we're going to create a simple signature application that records the user's name and the date. The order of the name and date can vary depending on user input."),(0,i.kt)("h4",{id:"project-details"},"Project Details"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We will be using State, a React hook, in this project."),(0,i.kt)("li",{parentName:"ul"},"Our first task is to create a component."),(0,i.kt)("li",{parentName:"ul"},"We will explore inline styles and learn how to use variables and functions in JSX.")),(0,i.kt)("h4",{id:"project-overview"},"Project Overview"),(0,i.kt)("p",null,"Let me also show you how the project works.\nIt's a pretty simple project, but that's also the idea here.\nWe're going to start simple and again, we're going to go into more complex projects."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Choose a date down here, say today 19 of November."),(0,i.kt)("li",{parentName:"ul"},"Type in your name, for example, Norbert."),(0,i.kt)("li",{parentName:"ul"},"Hit enter and there we go.")),(0,i.kt)("h4",{id:"modifying-the-name-and-date"},"Modifying the Name and Date"),(0,i.kt)("p",null,"There's a name you want to change something here and typing."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'If you type "Laura", it\'s going to change it up.')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"This also capital letters.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"We could also change it up to lowercase or the first letter to be uppercase, and then everything has to be lowercase.\nAnd there's your date right here.\nSo simple application, but a lot to run.\nLet's get started with this project."),(0,i.kt)("h3",{parentName:"li",id:"-getting-started-with-the-project"},(0,i.kt)("strong",{parentName:"h3"},"=>")," Getting Started with the Project"))),(0,i.kt)("p",null,"In this project, we begin by creating a new folder within the projects directory. It's advisable to adhere to the naming conventions used here, which is ",(0,i.kt)("inlineCode",{parentName:"p"},"01-e-signature-app")," . Within this folder, we create a file called ",(0,i.kt)("inlineCode",{parentName:"p"},"e-signature-app.js")," ."),(0,i.kt)("h4",{id:"creating-the-signature-function"},"Creating the Signature Function"),(0,i.kt)("p",null,"In this file, we implement a self-exporting function using the ",(0,i.kt)("inlineCode",{parentName:"p"},"RFC")," (React Functional Component) syntax. The function is then exported using the ",(0,i.kt)("inlineCode",{parentName:"p"},"export default function")," syntax. Note that we are using function-based components, not class-based components."),(0,i.kt)("h4",{id:"creating-the-container"},"Creating the Container"),(0,i.kt)("p",null,"Next, we export a ",(0,i.kt)("inlineCode",{parentName:"p"},"div")," with a class of ",(0,i.kt)("inlineCode",{parentName:"p"},"container")," . We also use a text-center style for alignment."),(0,i.kt)("h4",{id:"creating-the-first-component"},"Creating the First Component"),(0,i.kt)("p",null,"Our next step is to create our very first component. We do this in a new folder outside of the projects directory. This new folder is named ",(0,i.kt)("inlineCode",{parentName:"p"},"components")," and it's where all our components will live."),(0,i.kt)("h4",{id:"creating-the-title-component"},"Creating the Title Component"),(0,i.kt)("p",null,"Within the ",(0,i.kt)("inlineCode",{parentName:"p"},"components")," folder, we create our first component, the ",(0,i.kt)("inlineCode",{parentName:"p"},"Title")," component. The ",(0,i.kt)("inlineCode",{parentName:"p"},"Title")," component will consist of an ",(0,i.kt)("inlineCode",{parentName:"p"},"H1")," tag. We replace the ",(0,i.kt)("inlineCode",{parentName:"p"},"div")," with an ",(0,i.kt)("inlineCode",{parentName:"p"},"H1")," and give it a class name of ",(0,i.kt)("inlineCode",{parentName:"p"},"title")," . We also add a text-center style for alignment."),(0,i.kt)("h4",{id:"importing-the-title-component"},"Importing the Title Component"),(0,i.kt)("p",null,"After creating the ",(0,i.kt)("inlineCode",{parentName:"p"},"Title")," component, we import it so we can see what it looks like. If everything is set up correctly, the title component should be recognized and displayed."),(0,i.kt)("h4",{id:"importing-the-project-into-the-application"},"Importing the Project into the Application"),(0,i.kt)("p",null,"Next, we import our project into our application. This is done by importing our first project, the E signature application. Once imported, the title should be displayed because it's included in our component and our application."),(0,i.kt)("h4",{id:"creating-conditions-for-the-title-component"},"Creating Conditions for the Title Component"),(0,i.kt)("p",null,"In the title component, we create a condition that checks if a title or text is passed in. If there is no text passed in, then the text of the title is used. If there is text passed in, then that text is used."),(0,i.kt)("h4",{id:"adding-conditions-for-the-class-in-the-title-component"},"Adding Conditions for the Class in the Title Component"),(0,i.kt)("p",null,"We also add a condition for the class in the title component. If a class or multiple classes are passed in, then those classes are used. If no classes are passed in, then the default classes are used."),(0,i.kt)("h4",{id:"creating-the-signature-application"},"Creating the Signature Application"),(0,i.kt)("p",null,"In our signature application, we have our title component which we import from the components. We then go back to the component because we still need to add a few things."),(0,i.kt)("h4",{id:"styling-the-input"},"Styling the Input"),(0,i.kt)("p",null,"We add two input tags for the date and signature status. For styling, we create a concept called input style which is assigned to an object. This object includes styles for border, outline, and padding."),(0,i.kt)("h4",{id:"changing-the-background-color"},"Changing the Background Color"),(0,i.kt)("p",null,"If you want to change the background color of the entire document, you can select the document and change the background color."),(0,i.kt)("h4",{id:"wrapping-the-input-tags-in-a-footer-tag"},"Wrapping the Input Tags in a Footer Tag"),(0,i.kt)("p",null,"The input tags are then wrapped in a footer tag. This is because they are almost in a footer. We use a few classes and some inline styles to position them."),(0,i.kt)("h4",{id:"using-state"},"Using State"),(0,i.kt)("p",null,"Finally, we use the ",(0,i.kt)("inlineCode",{parentName:"p"},"useState")," hook in React to manage the state of our application. This allows us to make our input tags functional."),(0,i.kt)("h3",{id:"-using-state-in-react"},(0,i.kt)("strong",{parentName:"h3"},"=>")," Using State in React"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"To use state, it must be imported from React. This can be done as follows:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react'\n")))),(0,i.kt)("h4",{id:"assigning-state-to-a-variable"},"Assigning State to a Variable"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"After importing state, it should be assigned to a variable. This is typically done using the ",(0,i.kt)("inlineCode",{parentName:"p"},"const")," keyword."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"const [name, setName] = useState('')\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The above code creates a state variable called ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," and a function to update it called ",(0,i.kt)("inlineCode",{parentName:"p"},"setName")," . The initial value of ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," is an empty string."))),(0,i.kt)("h4",{id:"using-state-in-the-component"},"Using State in the Component"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The state variable can now be used within the component. For instance, it can be used as the value of an input field."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"<input\n  type='text'\n  value={name}\n  onChange={handleNameChange}\n/>\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"onChange")," event listener is used to handle changes to the input field."))),(0,i.kt)("h4",{id:"creating-the-event-handler"},"Creating the Event Handler"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"An event handler function called ",(0,i.kt)("inlineCode",{parentName:"p"},"handleNameChange")," is needed to update the state when the input field changes."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"const handleNameChange = event => {\n  setName(event.target.value)\n}\n")))),(0,i.kt)("h4",{id:"displaying-the-state-value"},"Displaying the State Value"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The state value can be displayed in the UI by using it within the JSX code.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"<h3>{name}</h3>\n")),(0,i.kt)("h4",{id:"changing-the-state"},"Changing the State"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"setName")," function is used to change the state. This function is called within the event handler with the new value passed as an argument.")),(0,i.kt)("h4",{id:"creating-additional-state-variables"},"Creating Additional State Variables"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Multiple state variables can be created in a component. For instance, a ",(0,i.kt)("inlineCode",{parentName:"p"},"date")," state variable can be created as follows:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"const [date, setDate] = useState('')\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"This new state variable can be used in a similar manner to the ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," state variable."))),(0,i.kt)("h4",{id:"conditional-rendering"},"Conditional Rendering"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Conditional rendering can be used to display different UI based on the state. For example, if the ",(0,i.kt)("inlineCode",{parentName:"p"},"date")," state is empty, a default value can be displayed."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"{\n  date ? date : 'DOB'\n}\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The above code will display the value of ",(0,i.kt)("inlineCode",{parentName:"p"},"date"),' if it is not empty. Otherwise, it will display "DOB".'))),(0,i.kt)("h3",{id:"-finished-project-files"},(0,i.kt)("strong",{parentName:"h3"},"=>")," Finished project files"),(0,i.kt)("p",null,"Download and compare the finished project files in case of errors!\nTo avoid copy and pasting code instead of learning your projects and I would suggest that you only make use of this files if you don't manage with my course explanations."))}d.isMDXComponent=!0}}]);