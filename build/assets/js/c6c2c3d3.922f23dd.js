"use strict";(self.webpackChunkfundamentals=self.webpackChunkfundamentals||[]).push([[4528],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=o,g=d["".concat(s,".").concat(h)]||d[h]||u[h]||a;return n?i.createElement(g,r(r({ref:t},p),{},{components:n})):i.createElement(g,r({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,r[1]=l;for(var c=2;c<a;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1627:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var i=n(7462),o=(n(7294),n(3905));const a={sidebar_position:2},r="Getting Started with the Project",l={unversionedId:"11 React Projects/Section 3: P01 E-signature-App/Create Title component and general styling in React",id:"11 React Projects/Section 3: P01 E-signature-App/Create Title component and general styling in React",title:"Getting Started with the Project",description:"In this project, we begin by creating a new folder within the projects directory. It's advisable to adhere to the naming conventions used here, which is 01-e-signature-app . Within this folder, we create a file called e-signature-app.js .",source:"@site/docs/11 React Projects/Section 3: P01 E-signature-App/8. Create Title component and general styling in React.md",sourceDirName:"11 React Projects/Section 3: P01 E-signature-App",slug:"/11 React Projects/Section 3: P01 E-signature-App/Create Title component and general styling in React",permalink:"/fundamentals/11 React Projects/Section 3: P01 E-signature-App/Create Title component and general styling in React",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Welcome to the very first project.",permalink:"/fundamentals/11 React Projects/Section 3: P01 E-signature-App/Project overview"},next:{title:"Using State in React",permalink:"/fundamentals/11 React Projects/Section 3: P01 E-signature-App/Learn how useState works and manipulate name and date"}},s={},c=[{value:"Creating the Signature Function",id:"creating-the-signature-function",level:3},{value:"Creating the Container",id:"creating-the-container",level:3},{value:"Creating the First Component",id:"creating-the-first-component",level:3},{value:"Creating the Title Component",id:"creating-the-title-component",level:3},{value:"Importing the Title Component",id:"importing-the-title-component",level:3},{value:"Importing the Project into the Application",id:"importing-the-project-into-the-application",level:3},{value:"Creating Conditions for the Title Component",id:"creating-conditions-for-the-title-component",level:3},{value:"Adding Conditions for the Class in the Title Component",id:"adding-conditions-for-the-class-in-the-title-component",level:3},{value:"Creating the Signature Application",id:"creating-the-signature-application",level:3},{value:"Styling the Input",id:"styling-the-input",level:3},{value:"Changing the Background Color",id:"changing-the-background-color",level:3},{value:"Wrapping the Input Tags in a Footer Tag",id:"wrapping-the-input-tags-in-a-footer-tag",level:3},{value:"Using State",id:"using-state",level:3}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started-with-the-project"},"Getting Started with the Project"),(0,o.kt)("p",null,"In this project, we begin by creating a new folder within the projects directory. It's advisable to adhere to the naming conventions used here, which is ",(0,o.kt)("inlineCode",{parentName:"p"},"01-e-signature-app")," . Within this folder, we create a file called ",(0,o.kt)("inlineCode",{parentName:"p"},"e-signature-app.js")," ."),(0,o.kt)("h3",{id:"creating-the-signature-function"},"Creating the Signature Function"),(0,o.kt)("p",null,"In this file, we implement a self-exporting function using the ",(0,o.kt)("inlineCode",{parentName:"p"},"RFC")," (React Functional Component) syntax. The function is then exported using the ",(0,o.kt)("inlineCode",{parentName:"p"},"export default function")," syntax. Note that we are using function-based components, not class-based components."),(0,o.kt)("h3",{id:"creating-the-container"},"Creating the Container"),(0,o.kt)("p",null,"Next, we export a ",(0,o.kt)("inlineCode",{parentName:"p"},"div")," with a class of ",(0,o.kt)("inlineCode",{parentName:"p"},"container")," . We also use a text-center style for alignment."),(0,o.kt)("h3",{id:"creating-the-first-component"},"Creating the First Component"),(0,o.kt)("p",null,"Our next step is to create our very first component. We do this in a new folder outside of the projects directory. This new folder is named ",(0,o.kt)("inlineCode",{parentName:"p"},"components")," and it's where all our components will live."),(0,o.kt)("h3",{id:"creating-the-title-component"},"Creating the Title Component"),(0,o.kt)("p",null,"Within the ",(0,o.kt)("inlineCode",{parentName:"p"},"components")," folder, we create our first component, the ",(0,o.kt)("inlineCode",{parentName:"p"},"Title")," component. The ",(0,o.kt)("inlineCode",{parentName:"p"},"Title")," component will consist of an ",(0,o.kt)("inlineCode",{parentName:"p"},"H1")," tag. We replace the ",(0,o.kt)("inlineCode",{parentName:"p"},"div")," with an ",(0,o.kt)("inlineCode",{parentName:"p"},"H1")," and give it a class name of ",(0,o.kt)("inlineCode",{parentName:"p"},"title")," . We also add a text-center style for alignment."),(0,o.kt)("h3",{id:"importing-the-title-component"},"Importing the Title Component"),(0,o.kt)("p",null,"After creating the ",(0,o.kt)("inlineCode",{parentName:"p"},"Title")," component, we import it so we can see what it looks like. If everything is set up correctly, the title component should be recognized and displayed."),(0,o.kt)("h3",{id:"importing-the-project-into-the-application"},"Importing the Project into the Application"),(0,o.kt)("p",null,"Next, we import our project into our application. This is done by importing our first project, the E signature application. Once imported, the title should be displayed because it's included in our component and our application."),(0,o.kt)("h3",{id:"creating-conditions-for-the-title-component"},"Creating Conditions for the Title Component"),(0,o.kt)("p",null,"In the title component, we create a condition that checks if a title or text is passed in. If there is no text passed in, then the text of the title is used. If there is text passed in, then that text is used."),(0,o.kt)("h3",{id:"adding-conditions-for-the-class-in-the-title-component"},"Adding Conditions for the Class in the Title Component"),(0,o.kt)("p",null,"We also add a condition for the class in the title component. If a class or multiple classes are passed in, then those classes are used. If no classes are passed in, then the default classes are used."),(0,o.kt)("h3",{id:"creating-the-signature-application"},"Creating the Signature Application"),(0,o.kt)("p",null,"In our signature application, we have our title component which we import from the components. We then go back to the component because we still need to add a few things."),(0,o.kt)("h3",{id:"styling-the-input"},"Styling the Input"),(0,o.kt)("p",null,"We add two input tags for the date and signature status. For styling, we create a concept called input style which is assigned to an object. This object includes styles for border, outline, and padding."),(0,o.kt)("h3",{id:"changing-the-background-color"},"Changing the Background Color"),(0,o.kt)("p",null,"If you want to change the background color of the entire document, you can select the document and change the background color."),(0,o.kt)("h3",{id:"wrapping-the-input-tags-in-a-footer-tag"},"Wrapping the Input Tags in a Footer Tag"),(0,o.kt)("p",null,"The input tags are then wrapped in a footer tag. This is because they are almost in a footer. We use a few classes and some inline styles to position them."),(0,o.kt)("h3",{id:"using-state"},"Using State"),(0,o.kt)("p",null,"Finally, we use the ",(0,o.kt)("inlineCode",{parentName:"p"},"useState")," hook in React to manage the state of our application. This allows us to make our input tags functional."))}u.isMDXComponent=!0}}]);