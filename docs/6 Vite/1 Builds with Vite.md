---
sidebar_position: 1
---

# Builds with Vite

>

https://youtu.be/QPgNLEOJJFI?si=rV6kQwpNc1e4A9mD

### **=>** Installing Vite

#### Introduction

- This course is about the front-end bundler of the new generation called **Vite**.
- Vite provides a much faster developer experience compared to traditional front-end bundlers like Webpack.
- In this course, we'll review most of Vite's features step by step to understand how it works and use it efficiently.
- Let's start by installing Vite locally using the npm package manager.

#### Installation

- Use the following npm command to install Vite locally.
  ```
  npm init
  ```
- It will prompt you to enter the project name and choose the framework you'd like to use. We'll use vanilla JavaScript for this course.
- You'll also be asked if you want to use TypeScript, but most of this course will use vanilla JavaScript.
- After the prompts, run three sequential npm commands to start the server.
- Access your project in the browser using the provided address.
- Open your project in an editor; for example, Visual Studio Code.
- Install the "Vite" plugin called "vite-plugin-inspect" to inspect resource file transformations.

#### Vite Plugin Installation

- Install the "vite-plugin-inspect" plugin using npm.
  ```
  npm install vite-plugin-inspect --save-dev
  ```
- Add instructions for the plugin in your Vite configuration file.

#### Accessing the Inspector

- After adding the plugin instructions, you can access the inspector in the browser.
- Restart the Vite server to make the inspector accessible.
- The inspector will show how Vite transforms your source files at each step.

#### File Loading

- When you access the root of your Vite server, the loaded file is called `index.html`, located in the project root.
- This page includes the main JavaScript file, which is loaded as a native ECMAScript module.
- Vite transforms CSS and asset imports to work seamlessly in browsers.
- It processes CSS imports by injecting styles into the page.
- For asset imports, like SVG images, Vite exports them as JavaScript variables, allowing you to use them in your code.
- Assets in the `public` folder are not processed and are served to the browser as-is.

#### Main JavaScript File

- Open the main JavaScript file to see what's happening inside.
- Notice unusual imports, including CSS and SVG files.
- These imports are handled by Vite and are essential to understanding Vite's workings.
- Vite transforms CSS imports to apply styles to the page.
- Asset imports from the `public` folder are treated as static assets.
- Regular ECMAScript module imports are also supported.

#### Starting Fresh

- Clear the contents of the main.js file.
- Remove the counter.js module and default styles in style.css.
- We'll start exploring Vite's features step by step in the upcoming lessons.

#### Conclusion

- With Vite installed and set up, we are ready to dive into its features and explore how it can streamline front-end development.
- In the next lessons, we'll take a closer look at Vite's capabilities.

### **=>** Resolving NPM dependencies

>

#### Introduction

- When we install a Vite project, there are three pre-configured commands inside of `package.json`.
- These commands are essential for local development, building for production, and previewing your project.
- Let's explore these commands and how they utilize Vite's capabilities.

#### Development Server

- The first command starts the local development server, which we've used previously with `npm run dev`.
- This command is crucial for developing and testing your application.

#### Building for Production

- The second script, `build`, is used to build your project for production.
- It applies necessary optimizations to improve performance.
- Building for production ensures your app is ready to be deployed.

#### Preview Server

- The `preview` script starts a basic static web server.
- It serves your built application to simulate a production-like environment.
- This helps you assess how your app behaves in such an environment.

#### Vite Binary

- All these scripts utilize the Vite binary, which is included when you install the `vite` npm package.
- The Vite binary is contained within the `bin` folder inside the `node_modules` folder.

#### Starting Development Server

- To begin, start the development server by running the command:
  ```
  npm run dev
  ```
- This command initializes your project for development.
- If you have cleared your main JavaScript file, you'll see a blank page in the browser.

#### HTML Modification

- Open the `index.html` file and make changes to the content.
- Any changes are immediately reflected in the browser without manual refresh.
- Since the main script is an ECMAScript module (`type="module"`), you can use `import` and `export` keywords.

#### Importing NPM Packages

- To demonstrate importing an npm package, let's use the "collect.js" library.
- Install the library with:
  ```
  npm install collect.js
  ```
- Add an `import` statement for the library in your main script.
- Use the library's functionality and display the result in the console.

#### Transformations

- When importing an npm package, Vite performs transformations.
- It generates a dynamic folder within `node_modules` to serve the imported library's source code.
- This optimization enables libraries to be imported directly from the `node_modules` folder and used in browsers.

#### Organizing Source Files

- Create a new folder named `src` in your project root to store source files.
- Move the module `a.js` into this folder.
- Adjust the import statement in your `main.js` to reflect the new location.
- Reorganize code by moving the lines that use the "collect.js" library into a separate file.

#### Browser Behavior

- When the browser requests `main.js`, it fetches the content.
- If an `import` statement refers to a module in the `node_modules` folder, Vite performs necessary transformations.
- The transformed import statement allows direct use of libraries from `node_modules`.
- This ability to import libraries directly from `node_modules` is a significant advantage of Vite over basic static servers.

#### Conclusion

- Vite simplifies the development process by providing pre-configured scripts for development, production, and preview.
- It optimizes your project for performance and enables seamless import of npm packages directly from the `node_modules` folder.
- Understanding how Vite transforms your source files is essential for efficient development and optimization.

### **=>** CSS imports

>

#### Introduction

- In this lesson, we'll explore how to work with CSS files in Vite projects.
- Currently, there are no styles applied to our page, so let's see how we can import and use CSS files.

#### Importing a CSS File

- To apply styles to our page, let's import a CSS file.
- We'll create a new file named `3.css` and place it inside the `src/assets` folder.
- In this CSS file, we'll add some basic styles, such as setting the background color of the body to dark gray and the text color to white.

#### Automatic Styling

- When we import a CSS file, Vite processes it and generates a valid ECMAScript module.
- The generated code includes instructions to inject the CSS code onto the page.
- Styles from the CSS file are assigned to a constant, typically named `rawCSS`, as a formatted string.
- This string is added to the `<style>` tag inside the `<head>` element.

#### Transformation of CSS Files

- Vite transforms CSS code into a valid ECMAScript module when the browser requests the CSS file.
- This transformation allows us to directly import CSS files as valid ECMAScript modules.
- The generated code contains the CSS styles as a string, and this string is exported as the default export of the module.

#### Inline Query Parameter

- Another way to import CSS files is by using the `inline` query parameter.
- Adding `?inline` to the import statement retrieves the content of the CSS file as a string.
- This content is stored in a variable, such as `styles`, and can be manipulated in JavaScript code.

#### Manipulating Styles

- We can manipulate the imported styles in JavaScript code.
- For example, we can create a new `<style>` element, assign the styles to its `innerText` property, and append it to the `<head>` element.
- This manually injects the styles into the page.

#### Conclusion

- Vite processes CSS files and generates valid ECMAScript modules that can be directly imported.
- By using the `inline` query parameter, we can access the CSS content as a string.
- This flexibility allows us to efficiently manage and apply styles in Vite projects.

### **=>** CSS modules

>

#### Introduction

- In this lesson, we'll explore how to work with CSS module specifications in Vite projects.

#### Importing CSS Files

- To work with CSS modules in Vite, we'll first import a couple of CSS files into our main script.
- We'll create arbitrary CSS files and place them in the `src` folder.

#### Creating CSS Rules

- Within these CSS files, we'll define CSS rules. For example, we'll create a `.heading` class that sets the text color to orange in one CSS file.
- In another CSS file, we'll use the same `.heading` selector but apply a different style, setting the font size to 30 pixels.

#### Applying CSS Rules

- When we apply the `.heading` class to an HTML element, both sets of CSS rules will be applied.
- The text color will become orange, and the font size will be set to 30 pixels.

#### CSS Transformation

- Vite converts CSS imports into valid ECMAScript modules.
- These modules include the styles as separate `style` elements inside the `head` of the HTML document.

#### Using `module` Word

- By adding the `module` keyword to CSS imports, we can instruct Vite to treat them as CSS modules.
- Vite will transform these CSS modules into valid ECMAScript modules with unique class names for each module.

#### Unique Class Names

- Each CSS module is assigned a unique hash that is appended to class names.
- This ensures that class names are unique across different CSS modules.

#### Applying CSS Classes

- When applying CSS classes, we reference the original class names or their aliases.
- We can manually assign these classes to HTML elements.

#### Transformation of CSS Modules

- Vite applies transformations to CSS modules, converting the original CSS code into valid ECMAScript modules.
- Each module exports an object where the keys are the original class names, and the values are the converted unique class names.

#### Importing Specific Styles

- When importing CSS modules, we can selectively import only the styles we need.
- This allows us to use unique aliases for specific class names and avoid naming collisions.

#### Conclusion

- Vite allows us to work with CSS modules, providing a seamless way to import and use CSS files in our JavaScript code.
- The use of unique class names ensures that styles are correctly applied, even when multiple CSS modules are imported and used in the same project.

### **=>** PostCSS plugins (TailwindCSS installation)

>

#### Introduction

- In this lesson, we'll learn how Vite allows us to apply CSS transformations to CSS inputs using CSS plugins.
- We'll specifically explore the integration of the popular PostCSS plugin with the Tailwind CSS framework in Vite projects.

#### Importing Tailwind CSS

- We've previously seen how to import CSS files into JavaScript modules.
- In this lesson, we'll focus on working with CSS modules, including Tailwind CSS.

#### Installing Tailwind CSS

- To use Tailwind CSS in a Vite project, we first need to install the required packages.
- The installation includes Tailwind CSS, PostCSS, and Autoprefixer.

#### Configuration Files

- After installation, Vite generates two configuration files: `tailwind.config.js` for Tailwind CSS and a PostCSS configuration file.
- The PostCSS configuration file already contains the necessary plugins for Tailwind CSS support.

#### Specifying CSS Files

- We specify the CSS files that include Tailwind CSS classes using the `content` property in the `tailwind.config.js` file.
- In this case, we only include `index.html` as we plan to use Tailwind CSS classes in that file.

#### Adding Tailwind CSS Directives

- We add the Tailwind CSS directives to our main CSS file, such as `5.css`.
- These directives configure how Tailwind CSS styles are generated and applied.

#### Restarting the Server

- To apply the changes, we need to restart the development server using `npm run Dev`.

#### Using Tailwind CSS Classes

- After the server restarts, we can start using Tailwind CSS classes in our source files.

#### Applying Tailwind CSS

- We can apply Tailwind CSS classes directly to elements in our HTML.
- Vite converts the CSS file on-the-fly into a valid ECMAScript module and injects the styles into the page.

#### Hot Module Replacement

- Vite's hot module replacement feature allows us to see changes instantly without needing to manually refresh the page.

#### CSS Transformations

- Tailwind CSS directives are first transformed into a complete Tailwind CSS stylesheet by the Tailwind CSS plugin.
- Vite then applies additional transformations to turn the stylesheet into a valid ECMAScript module.
- This module is what gets run in the browser, applying the styles to the page.

#### Conclusion

- Vite simplifies the process of working with CSS transformations and plugins.
- The integration of Tailwind CSS and PostCSS in Vite projects makes it easy to apply and use CSS frameworks and plugins efficiently.

### **=>** CSS pre-processors (Sass)

>

#### Introduction

- In this lesson, we'll explore how to use CSS preprocessors, focusing on the use of SASS in Vite projects.

#### Importing SASS

- We'll begin by demonstrating how to use SASS in a Vite project.
- To do this, open the main JavaScript file and import a new SASS stylesheet named `6.css`.

#### Creating a SASS File

- Create the `6.css` file in the `assets` folder, specifying it as a SASS file.

#### Updating the File Extension

- Change the file extension in the `main.js` file from `.css` to `.scss` to indicate that it's a SASS file.

#### Adding Arbitrary SASS Rule

- Add an arbitrary CSS rule in the SASS file, demonstrating the use of SASS syntax.

#### Removing Tailwind CSS Classes

- In the `index.html` file, remove any Tailwind CSS classes that were previously applied.

#### Vite's CSS Preprocessor Support

- Vite provides built-in support for various CSS preprocessors such as SASS, LESS, and Stylus.
- To use a specific CSS preprocessor, you need to install the corresponding CSS compiler.

#### Installing SASS

- In this case, we're installing a SASS compiler using the provided command.

#### Restarting the Development Server

- After installing the SASS compiler, restart the development server using `npm run Dev`.

#### Applying SASS Styles

- The styles specified within the SASS file are successfully compiled by SASS.
- Vite serves the compiled CSS as a string, which is assigned to the `withCSS` constant.
- The generated ECMAScript module applies the CSS styles to the page.

#### CSS Transformations

- Vite transforms the source SASS file into valid CSS syntax.
- The CSS code is further transformed into a valid ECMAScript module for injection into the page.

#### Using CSS Modules with SASS

- You can also use CSS modules alongside CSS preprocessors.
- Ensure the file has the `module` keyword in its name to indicate a CSS module.

#### Working with CSS Modules

- Demonstrates how to work with CSS modules alongside a CSS preprocessor.
- The unique class names generated by the module system are shown in the console.

#### Manually Assigning CSS Classes

- Manually assign a generated class to an HTML element in the JavaScript code.
- The applied styles are reflected in the browser.

#### Conclusion

- Vite simplifies working with CSS preprocessors like SASS by providing built-in support.
- By using CSS modules and preprocessors together, you can create modular and efficient styles in your Vite projects with ease.

### **=>** JSON imports

>

#### Introduction

- Vite simplifies working with JSON files by allowing easy import as native ECMAScript modules.

#### Importing JSON Files

- To use a JSON file in a JavaScript file, simply import it like a native ECMAScript module.

#### Demonstrating JSON Import

- Example of importing a JSON file is provided.
- The JSON data is stored in the `data` variable.

#### Creating a Basic JSON File

- Create a basic JSON file with fields such as `name` and `age` to describe a person.

#### Printing JSON Data

- Demonstration of printing the imported JSON data to the console.

#### Browser Behavior

- Explanation of what happens in the browser when encountering a JSON import.
- Vite processes the JSON file into a valid ECMAScript module for the browser.

#### JSON Transformations

- Vite's transformation process converts JSON syntax into ECMAScript syntax.
- This transformation enables JSON files to be imported seamlessly as ECMAScript modules.

#### Using Imported JSON

- Since the default export is a JavaScript object, you can easily destructure and extract specific fields, such as `name` and `age`.

#### Conclusion

- Vite makes working with JSON files in projects effortless, allowing JSON imports as native ECMAScript modules, simplifying data handling in JavaScript.

### **=>** Static assets

>

#### Introduction

- This lesson explores how to import static assets into a Vite project.

#### Creating Asset Directory

- Create a new directory in the project, named `Source/assets/IMG`.
- Move the `javascript.svg` image into this directory.

#### Importing an Image

- Add an import statement in the main JavaScript file to import the `javascript.svg` image.
- Print the value of the `imageURL` variable in the console to observe how Vite handles the image import.

#### Image Import Handling

- Explanation of how Vite transforms the image import.
- The import query parameter is added to the import path.
- Browser request for the image is transformed into a valid ECMAScript module.

#### Displaying the Image

- Create an HTML element `<img>` in the HTML file with an ID of `image`.
- In JavaScript, obtain the image element using `getElementById`.
- Assign the `imageURL` to the `src` attribute of the image element to display the image on the page.

#### Importing Other File Types

- Mention that other file types, like JSON files, can also be imported.
- Demonstrate importing a JSON file with the `url` query parameter.

#### URL Query Parameter

- Explanation of how the `url` query parameter transforms the JSON file import.
- The imported JSON file is transformed into a valid ECMAScript module with a default export pointing to the imported file.

#### Raw Query Parameter

- Introduction of the `raw` query parameter.
- Usage of the `raw` query parameter while importing images to receive the content of the image instead of just the path.

#### Content of Imported Image

- Demonstration of using the `raw` query parameter with the image import.
- Printing the content of the image in the console.

#### Transformations in Image Import

- Explanation of the transformations applied by Vite to the image import.
- The image's path is transformed into a valid ECMAScript module where the default export contains the image's content.

#### Conclusion

- This lesson covered importing static assets like images and demonstrated the use of query parameters such as `url` and `raw` while importing assets in Vite projects.

### **=>** Public directory

>

#### Introduction

- This lesson discusses the role of the `public` folder in a Vite project for storing static assets and the restrictions on referencing files from this folder within source code.

#### Using the `public` Folder

- The `public` folder is a special directory in the Vite project for storing static assets.
- It allows the inclusion of static files like images, fonts, and others.

#### Limitations of the `public` Folder

- Static files within the `public` folder cannot be directly imported or referenced in source code using JavaScript modules.
- Demonstrates importing an image directly from the `public` folder in HTML without using JavaScript.

#### Request Handling

- Explains how the browser handles requests for assets located in the `public` folder.
- Requests for files in the `public` folder are treated as normal static file requests.

#### Alternative to `public` Folder

- Introduces the concept of configuring a different folder name for static assets using the `publicDir` option in the `vite.config.js` file.
- Demonstrates renaming the `public` folder to `build`.

#### Building the Project

- Running the build command (`npm run build`) to generate the production build.
- Shows that the image file in the `public` folder is not transformed, but instead, it's copied to the build folder (`dist`) during the build process.

#### Using `publicDir` Option

- Demonstrates adding the `publicDir` option to the `vite.config.js` file and renaming the folder containing static assets back to `public`.
- Running the build command again to ensure that the project builds successfully.

#### Running a Static Server

- Introduces the `npm run preview` command for running a simple static server.
- This server serves the files from the build folder, providing a production-like environment to test the project.

#### Previewing the Production Build

- Running the `npm run preview` command to start the static server.
- Explains that the project appears the same but emphasizes the change in request handling.

#### Development Server

- Switching back to the development server using `npm run Dev`.

#### Cleaning Up

- Removing the build folder (`dist`) as it's no longer needed.
- Conclusion of the lesson.

#### Next Lesson

- Preview of the next lesson topic: "Glob Imports."

### **=>** Glob imports

>

#### Introduction

- This lesson covers the use of the `glob` function in Vite, which allows the import of multiple modules from the file system.

#### Preparing the Environment

- Clears the JavaScript file and removes an HTML element from `index.html` to set up for demonstrating the `glob` function.

#### Using the `glob` Function

- Introduces the `glob` function and assigns it to a constant named `modules`.
- Explains that this function will be called on the `import.meta` object to specify the paths of modules to be imported.
- Mention of using "Glob syntax" for specifying paths.

#### Creating Modules

- Describes creating three modules (a.js, b.js, c.js) within a folder named "10" inside the "src" directory.
- Each module contains a simple `console.log` statement.
- Demonstrates how the console log statements will be displayed when the modules are imported.

#### Object Received from `glob`

- When using `glob`, an object is received where each key corresponds to a module path.
- The value for each key is a function used to dynamically load a particular module.

#### Transformation of the `main.js` File

- Reveals the transformation of the `main.js` file by the browser.
- Shows how the `glob` function call is transformed into an object containing module paths and import functions.

#### Dynamically Importing Modules

- Explains how to iterate over the keys of the `modules` object and use the import functions to dynamically load the modules.
- Emphasizes that these dynamic imports happen on the initial page load.

#### Exporting Data from Modules

- Shows how to export data from the modules, including a default export from module "a.js" and a named export from module "b.js."

#### Delayed Loading of Modules

- Demonstrates how to change the code to load modules only after a document click event occurs.

#### Configurations for `glob`

- Discusses the `eager` configuration option for the `glob` function.
- Explains that setting `eager` to `true` makes modules load instantly on the initial page load.

#### Effects of Eager Loading

- Shows the result of using `eager: true` by demonstrating that modules load immediately upon the initial page load.
- Explains that the resulting object contains exported data from modules.

#### Transformation with `eager` Option

- Reveals the transformation of the code when using `eager: true`.
- Describes how it converts the `glob` function into import statements and immediately loads the modules.

#### Conclusion and Preview

- Summarizes the use of the `glob` function in Vite for importing multiple modules.
- Teases the next lesson topic: "Additional Details About the `glob` Function."

### **=>** Named glob imports

>

#### Introduction

- Continuing the review of the `glob` function in Vite for importing multiple modules.

#### Using Configuration Options

- Mentioning the `eager` configuration option reviewed in the previous lesson.
- Introducing other configuration options in this lesson.

#### The `as` Configuration Option

- Explaining the use of the `as` configuration option in the `glob` function.
- When specifying `as: 'row'`, the resulting object contains module content instead of import functions.
- When specifying `as: 'URL'`, the resulting object contains absolute paths to the modules.

#### Modifying Modules

- Demonstrating the addition of an exported constant `name` to every module.
- Adding default exports to each module.

#### Using the `import` Configuration Option

- Introducing the `import` configuration option in the `glob` function.
- Explaining that it allows specifying the named export to import when using the `glob` function.
- Using the `name` parameter in the imported modules.

#### Different Import Options

- Showing examples of different import options, such as importing the default export.
- Demonstrating how to specify a particular named export.
- Printing the imported values in the console.

#### Combination of Configuration Options

- Combining the `eager` and `import` configuration options.
- Disabling dynamic imports and specifying a named export to import.
- Displaying the imported values in the console.

#### Transformation of `glob` Function Call

- Revealing the transformation applied to the `glob` function call.
- Explaining how it results in multiple static import statements.
- Gathering the imported data into one object assigned to the `modules` constant.

#### Conclusion

- Highlighting the power and flexibility of the `glob` function in Vite for importing multiple modules in various ways.

### **=>** JSX

>

#### Introduction

- Exploring the use of JSX specification in Vite projects.
- Implementing a custom JSX specification.

#### Clearing `main.js` File

- Clearing the `main.js` file to prepare for JSX implementation.

#### Creating a JSX File

- Creating a new JSX file named `12.jsx` within the Source folder.
- Adding arbitrary JSX code to the file as an example.
- Creating a CSS file named `12.css` and importing it.

#### Importing JSX in `main.js`

- Importing the `12.jsx` file in `main.js`.
- Demonstrating the use of JSX syntax to create components.
- Adding a `console.log` statement to view the content.

#### Enabling JSX Support

- Discussing the need to enable JSX support.
- Configuring ES Build in the `vite.config.js` file to define a custom JSX specification.
- Explaining how ES Build processes JSX.

#### Creating a Custom JSX Factory Function

- Creating a custom JSX factory function named `create` in the `12.jsx` file.
- Examining the parameters passed to the `create` function.
- Printing the parameters to understand their values.

#### Handling JSX Elements

- Using the `create` function to create DOM elements based on JSX.
- Explaining the purpose of the `create` function.
- Creating DOM nodes and setting attributes.

#### Printing the DOM Structure

- Printing the DOM structure to the console using `console.log`.
- Viewing the string representation of the JSX markup.
- Checking the browser's console to see the generated DOM structure.

#### Appending JSX Markup to the Page

- Creating a `div` element with the id of "app" in `index.html`.
- Appending the generated JSX markup to the "app" element using JavaScript.
- Modifying the style to make the text visible.

#### Extracting the JSX Factory Function

- Moving the `create` function to a new module named `12-create.js`.
- Exporting the `create` function from the module.
- Updating the import statement in `12.jsx`.

#### Automating the Import of JSX Factory Function

- Demonstrating the need to import the `create` function manually.
- Configuring the `jsxInject` option in the `vite.config.js` file.
- Automatically injecting the import statement for the `create` function in JSX files.

#### Conclusion

- Summarizing the lesson on working with JSX in Vite projects and implementing a custom JSX specification for processing JSX elements.

### **=>** TypeScript

>

#### Let's Talk About TypeScript Support

- Indeed, we're going to use a very basic example just for demonstration purposes.
- How to integrate TypeScript into Wheat project.
- So, I'm going to create a new file with an extension TS, let's call it `main.ds`.
- And in here, we're going to declare a function `sum` which basically is going to sum up two numbers.
- It will accept two arguments of type `number` A and B and is supposed to calculate the sum of these numbers and eventually return `number`.
- So in here, let's just sum up two arguments `a` plus `b`.
- And down here, we're gonna add a `console.log` statement to print out the result of calling this function `sum` with arguments 1 (which is a number) and the second argument will be 2, but this time it will be a string.

#### Including TypeScript in HTML

- Before checking it out in the browser, we, of course, have to include this file to our page.
- And by the way, Vite allows us to include TypeScript files directly within HTML files like so.
- So once it's done, let's switch over to the browser.
- And presently, we don't see any errors in a console.
- As a result, in a console, we have `number 12`, which is the result of executing that `sum` function.
- So as we can see after the browser loads our file `main.ts`, it receives the content where all types have been stripped.
- That means it has applied transformation to this file to remove everything related to TypeScript and leave only valid JavaScript code that can be run in a browser.
- So that means that Vite hasn't done any static type checks and instead only converted the TypeScript syntax into JavaScript syntax.
- And which is why as a result of executing this function, we got `12` because instead of summing up two numbers, JavaScript has concatenated them.
- And there is actually a reason Vite doesn't do any static type checking when converting TypeScript files into JavaScript files.
- And this reason is speed because to do full static type checking will actually drastically delay the whole build process.
- So what we'd recommend instead if we want to run static type checking is to separately install TypeScript compiler.
- We're going to do it right now.

#### Installing TypeScript Compiler

- So in a terminal, let's run `npm install typescript`.
- And then we're going to use this compiler to separately analyze our TypeScript files and apply type checking.
- So in our `package.json`, we're going to add one more script within the script section with the name `DSC`.
- And what this script will do is basically run TypeScript compiler.
- But in our case, we don't need to transform any TypeScript files into JavaScript files.
- Instead, we want only to run static type checking.
- So in here, for TypeScript, create compiler, we're going to use an option called `NoEmit`, which is not going to produce any JavaScript files.
- And instead will only run static type checking.

#### Running TypeScript Compiler

- And now if I try to go ahead and run that script by running `npm run DSC`, we're going to see the following error.
- And to fix it, we have to add TypeScript configuration file within the root of the project with the name `tsconfig.js`.
- And in here, the only option that we have to specify is to actually show TypeScript compiler where our source files are stored.
- So let's add a `rootDir` option with the value `.` which is kind of a pointer to the root directory of our project.
- So right now if we run the same command again `npm run DSC`, this time we're going to get a different error.
- And this is actually the error that we expect that we have some type mismatches in our TypeScript file.
- So right now our TypeScript compiler works properly and gives us hints whenever we have type mismatches like this one.
- But actually, running TypeScript compiler like this is not going to rerun it every time we're going to make a change to our source file.
- So to make TypeScript compiler watch our source file for changes, we're going to run the same command `npm run DSC`, but this time we will also add flag `watch`.
- And from now on, anytime we're going to make a change to our source files, for example, let's go ahead and switch over to `main.ds` and make a change by fixing this type error.
- And now that we don't have any type errors within this file, if we take a look at the TypeScript output, we can see the TypeScript compiler was rerun, and this time there are no errors and warnings been reported.
- So when it comes to running TypeScript in Vite projects, this is one of the Vite recommendations to run TypeScript type checking in a separate process to prevent different main event build process.
- But if we actually want to fully integrate TypeScript type checking process within Vite build process, there is a special plugin for it called `@vite/plugin-checker`.
- And this plugin allows us to fully integrate TypeScript type checking into Vite build process.
- And after that, all TypeScript-related errors and warnings will be shown directly in the browser.

#### Installing @vite/plugin-checker

- And if we wish to use this plugin, the first thing we need to do, of course, is to install it by running the following command.
- So let's switch over to the terminal, paste here that installation command, and wait until the installation process is finished.
- And after installation is finished, next we have to configure this plugin by adding some instructions into our Vite configuration file.

#### Configuring @vite/plugin-checker

- So first of all, let's add this import statement. I'm going to switch over to `myvit.config.js` and right below the `import` statement, I'm going to paste a new import statement for `@vite/plugin-checker`.
- And one more thing to do to configure this plugin is to actually copy this function call and paste it into the `plugins` section down below like this.
- And this is actually all that's required to fully integrate TypeScript type checking within Vite build process.
- So right now, we're going to go ahead and get back that type checking error by converting this argument to string.
- This time during Vite build process, we're going to see that the TypeScript error was appeared within the browser.
- So as we can see, from now on, every TypeScript error will be shown directly in the browser.
- And of course, if we go ahead and fix this error and check the result in a browser, we no longer see any TypeScript errors.
- And now within such setup, we no longer need to run TypeScript compiler within a separate process.
- So let's stop the previous process that we have previously run in a console by pressing `Ctrl+C` because TypeScript will notify us about any type-related errors directly in the browser.

### **=>** ESLint

>

#### Intro

- Now that we know how to integrate TypeScript with the NVid project in this lesson, we're going to see how to integrate ESLint, which is a static analysis tool for JavaScript. So let's get started.

#### Adding an ESLint Violation

- In our `main.ts` file, we're gonna add one ESLint violation. Let's add a semicolon after this function declaration.

#### Installing ESLint Plugin for TypeScript

- Since we're going to have ESLint analyze TypeScript files, there is a special plugin for it that we can use called `typescript-eslint`. This tool basically enables ESLint support for TypeScript.
- First, we have to install all necessary dependencies. Copy and run this command in your terminal.

#### Creating ESLint Configuration File

- Next, we will have to create a configuration file for ESLint with the name `.eslintrc.js` and paste the following content in it.

#### Running ESLint

- To execute ESLint, we need to run `npx eslint` with the folder where ESLint should be executed specified as an argument. In our case, it's fine to specify the root folder of our project, so we'll use `.`.

#### Ignoring JavaScript Files

- As a result, there are a lot more errors than we initially expected. Among these errors, we can see the one we intentionally added by adding a semicolon to the end of the function declaration.
- The rest of the errors are coming from analyzing JavaScript files. To ignore all JavaScript files and run ESLint only within TypeScript files, we can create a special file for ESLint called `.eslintignore` and list the files that should be ignored. Use the following notation to ignore all JavaScript files: `*.js`.

#### Integrating ESLint with the Build Process

- To run ESLint checks in sync with the project build, we need to start a separate ESLint process alongside our main build process. This is also recommended to prevent deferring the main build process.
- If you don't want to do this and prefer to run ESLint during the build process, you can achieve it by installing the `plugin-checker`.

#### Installing ESLint Executable

- Before running ESLint, install the ESLint executable on your system.

#### Configuring ESLint to Use ESLint Executable

- In your reviewed configuration file, specify the command which will be used to run ESLint and update the paths ESLint should scan.

- Now, if you open your browser again, you'll see ESLint errors.

#### Verification

- Just to see if this error disappears, switch over to `main.ts` and remove the semicolon from here.

- Going back to the browser, you won't see any ESLint errors, and a message saying that no errors were found appears in the logs.

- This is how easy it is to integrate ESLint with projects.

### **=>** Path aliases

>

#### Vite and Path Aliases

- Vite offers a handy feature called **path aliases**. Let's see how it can be useful for us.
- I'm going to clear out our main JavaScript file `main.js`.

#### Importing CSS and Image

- Import the CSS file into our `main.js` file.
- Import the image, specifying the full path to the image located inside the `IMG` folder.
- Inside `index.html`, add an `img` tag to display the image using JavaScript.

```javascript
document.getElementById('image').src = 'URL_OF_IMAGE'
```

- Before switching to the browser, change the extension of our main JavaScript file from `.js` to `.mjs`.

#### Viewing in the Browser

- In the browser, the imported CSS file is inserted onto the page in a `style` tag.
- The JavaScript image is also displayed on the right side.

#### Using Path Aliases

- To avoid always mentioning the full path when importing modules, we can define **path aliases**.
- Use the `@` sign as an alias for the `src` folder.
- In your Vite configuration file, add a `resolver` configuration to define path aliases.

```javascript
resolve: {
  alias: {
    '@': path.resolve(__dirname, 'src')
  }
}
```

- To test the alias, import the `@` module and print the resolved path using `console.log`.
- Restart the development server to see the resolved path.

```javascript
import path from 'path'
console.log(path.resolve(__dirname, '@/assets'))
```

- In the browser, there should be no changes.

#### Successfully Configured Alias

- The styles have been applied correctly, and the image is displayed.
- Our custom alias was properly configured.

#### Leveraging Path Aliases

- By using path aliases, we can avoid long paths when importing modules.

This is how we can leverage path aliases to simplify module imports.

### **=>** Environment variables

>

#### Environment Variables in Vite

- In this lesson, let's talk about environment variables and how to work with them in Vite projects.

#### Accessing Environment Variables

- Start with removing everything from our main JavaScript file.
- To access environment variables, Vite exposes them to client code under a special object stored inside the `import.meta` object.

```javascript
console.log(import.meta.env)
```

- The object contains default environment variables, including `mode`, which indicates the current mode (development or production).
- When building the project with `npm run build` and previewing it with `npm run preview`, you'll notice the `mode` variable changes to `production`.

#### Defining Custom Environment Variables

- To define custom environment variables, create a file named `.env`.
- List the variables you need in this file, using a prefix.
- Use the format `PREFIX_VARIABLE_NAME=variable_value`.

```shell
VITE_APP_API_URL=https://example.com
VITE_APP_ANOTHER_VAR=random_value
```

- Variables must start with a special prefix (default is `_`) to be included in the client code.

#### Overriding the Prefix

- The prefix can be overridden in the configuration file, `vite.config.js`.
- Use the `envPrefix` option to specify a different prefix.

```javascript
module.exports = {
  // ...
  build: {
    rollupOptions: {
      output: {
        // ...
      },
    },
  },
  envPrefix: 'NEW_PREFIX',
}
```

- Update variable names accordingly in `.env`.

#### Using Custom Environment Variables

- Custom environment variables can be accessed in the client code.

```javascript
console.log(import.meta.env.VITE_APP_API_URL)
```

- They are also accessible in HTML files using the format `%VITE_APP_VARIABLE_NAME%`.

```html
<p>API URL: %VITE_APP_API_URL%</p>
```

- Values depend on the current mode (development or production).

#### Multiple Environment Files

- Create multiple environment files for different modes.
- For example, use `.env.production` for production-specific variables.
- Custom modes can also be defined, each with its own environment file (e.g., `.env.staging`).

#### Custom Modes

- To build the project for a custom mode (e.g., `staging`), use the `--mode` flag.

```shell
npm run build -- --mode staging
npm run preview
```

- Variables from the mode-specific environment file will be used.

#### Specifying Environment Variables in Commands

- You can specify environment variables in commands.
- They will override values in environment files.
- For example, start the development server with a specific API URL:

```shell
VITE_APP_API_URL=https://custom-api.com npm run dev
```

- The variable's value will be taken from the command, overriding any values from `.env` files.

- This is how we can work with environment variables in Vite projects.

### **=>** Multi-page app

>

#### Generating Multiple Bundles in Vite

- Besides generating bundles for single-page applications, Vite allows us to generate multiple bundles for several pages, one bundle per page.

#### Preparing Multiple Pages

- Start with preparing multiple pages.
- In the `main` `index.html` file, add a heading called "index" and a link to redirect to a second page called "login."
- Create a new folder called `login` in the project root.
- In the `login` folder, add a new JavaScript file (`login.js`) and an HTML file for the login page.
- Modify the HTML content for the login page.

#### Independent Pages

- The project now contains two separate pages (index and login) that are independent of each other.
- When navigating between these pages, the browser makes full page refreshes.

#### Building for Production

- When building the project for production using `npm run build`, it generates only one page (`index.html`).

#### Configuration for Multiple Pages

- To generate pages for multiple pages, add configurations to the Vite configuration file.
- Define an object with options such as `rollupOptions` and `input`.
- Specify the available pages and their corresponding HTML files.

```javascript
build: {
  rollupOptions: {
    input: {
      main: path.resolve(__dirname, 'index.html'),
      login: path.resolve(__dirname, 'login/index.html'),
    },
  },
}
```

- Use the `path` module to generate absolute paths.

#### Importing `resolve` Function

- Import the `resolve` function from the `path` module.

```javascript
import { resolve } from 'path'
```

#### Rebuild the Project

- Rebuild the project by running `npm run build` and then open it in the browser.
- Now, both the main page and the login page are generated.

#### JavaScript Bundles for Pages

- By default, JavaScript bundles are not generated for these pages, as the JavaScript files are empty.
- Add arbitrary JavaScript statements to both `main.js` and `login.js`.

```javascript
console.log('Main Page')
```

- Rebuild the project, and JavaScript bundles are generated for each HTML page.

#### Using SAS Styles

- Create SAS (Sass) stylesheets for both pages (e.g., `main.sass` and `login.sass`) to demonstrate the use of styles.
- Include the styles in the JavaScript files using `import`.

#### Install the SAS Compiler

- Install the SAS preprocessor using npm.

```shell
npm install sass
```

#### Rebuild with Styles

- Rebuild the project to compile the SAS files.
- In the browser, the styles are properly applied to each page.

#### JavaScript Bundles for Styles

- By default, JavaScript bundles are not generated for the stylesheets.
- Add arbitrary JavaScript code to both `main.js` and `login.js` to trigger bundle generation.

#### Rebuild the Project

- Rebuild the project and check the JavaScript bundles.
- Now, the project has separate JavaScript bundles for each HTML page.

- This is how we can generate several JavaScript bundles for multiple pages in Vite when building a multi-page app. The key is to provide proper configurations in the Vite configuration file to map each page to its HTML template file.

### **=>** Library mode

>

#### Creating npm Packages with Vite

- Vite provides a mode for creating libraries.
- In this lesson, we will explore the tools Vite offers to create npm packages.

#### Initial Preparation

- Begin with some preparation steps.
- Create an empty folder named 'lib'.
- Navigate to this folder in your terminal.
- We will create two Vite projects: one for the client application and the other for the library.

#### Creating the Client Application

- Create the first project for the client application.
- Run `npm create vite@latest` to scaffold a default Vite project.
- Choose options: Vanilla JS without TypeScript.
- This application will import the custom package we're about to create.

#### Creating the Library

- Create the second project for the library.
- Use the same command to create a Vite project called 'lib'.
- Select the same options: Vanilla JS without TypeScript.
- Open folders with these projects in separate terminal tabs.

#### Creating the Library Functionality

- Open the main JavaScript file of the library project.
- Remove existing code and install all npm dependencies.
- Run `npm install` to ensure the application can run in a browser.
- Create a JavaScript file (`index.js`) in the 'src' folder to contain the library's functionality.
- Define a utility function called 'pluck' that accepts an array of objects and a key to extract.
- Implement the 'pluck' function to create an array of values extracted from the objects.

#### Testing the Library Functionality

- Create an array of objects, such as an array of users, with name and age properties.
- Execute the 'pluck' function to extract and display an array of user names.
- Run the script in a browser.

#### Building the Library

- Configure the library to be built as an npm package.
- Create a 'vite.config.js' configuration file in the library's root.
- Specify the 'lib' option under the 'build' object to inform Vite that this project is a package.
- Define the entry point, name, and file name options in the 'lib' configuration object.

```javascript
build: {
  lib: {
    entry: resolve(__dirname, 'src/index.js'),
    name: 'pluck',
    fileName: 'pluck',
  },
}
```

- Import the 'resolve' function from the 'path' module.

```javascript
import { resolve } from 'path'
```

#### Building the Library

- Build the library by running `npm run build`.

#### Examining the Generated Files

- Vite generates two assets for the library: one for ESM and one for CommonJS.

#### Updating `package.json` for the Library

- Edit the `package.json` file for the library.
- Change the name to 'pluck' and specify the 'main' and 'module' options.
- The 'main' option points to the CommonJS bundle (`lib/pluck.js`), and the 'module' option points to the ESM bundle (`lib/pluck.mjs`).

#### Globally Making the Library Available

- To test the library in the client application, make the library globally available.
- Execute `npm link` in the library's root.
- Link to the library in the client application using `npm link pluck` in the client's root.

#### Testing the Library in the Client Application

- Open the client application's main JavaScript file.
- Import the 'pluck' function from the 'pluck' library.
- Use the 'pluck' function in the client application to test the library's functionality.
- Run the client application in a browser.

- These are the fundamental steps for developing JavaScript packages using Vite. In future lessons, we'll delve deeper into this process.

### **=>** Multiple library entry points

>

#### Overview

- In the previous lesson, we developed the package using Viet Library mode.
- We included that package in our client application, which had only one entry point.

#### Need for Multiple Entry Points

- What if we want to create a package with multiple entry points?
- This means importing different functionality from sub-paths.

#### Exposing Functionality

- Recall the functionality our package exposes in the `index.js` file.
- Initially, we had to modify the `package.json` file to specify the key called `module` for importing the main library file.

#### Creating a New File

- Create a new file called `log.js` inside the source folder of our package.
- In this file, create a function named `log` as a wrapper around `console.log`.

#### Configuration

- We need to configure our package to support multiple entry points.
- Modify `vid.configure.js` to generate two different bundles for each JavaScript file.
- This allows importing the `log` function from the sub-paths in the client application.

#### Testing

- Use the `log` function to print an array of users for testing in the client application.

#### Customizing File Names

- Customize the file names generated during the bundle creation.
- Use a condition to set the appropriate file name format for ECMAScript 6 and CommonJS modules.

#### Importing Submodules

- Execute `npm run build` to generate bundles.
- Check if you can import functionality from the sub-module of the package.

#### Additional Steps

- Instead of publishing the package to the npm registry, use `npm link` to make the package available globally.
- Add a link to the package in the client application's `node_modules` folder using `npm link`.

#### Testing Import Functionality

- Run the development server in the client application to test importing functionality from the sub-module (`log`).
- Verify that you can use the imported function to print a list of users.

#### Conclusion

- Review the process of building a library with multiple entry points.

Let me know if you need further assistance or modifications!

### **=>** Importing library using require

>

#### Overview

- `Alright`, so far we have created the library with multiple entry points, and then in our client application, we have importing the functionality from those two entry points right here from the main entry point `plug` and from submodule `log`.

#### Code Organization

- Just as a reminder, the way we have organized the code in our library is as follows:
  - Here we have a couple of JavaScript files inside the `source` folder.
  - Each of those files contains only one function.
  - To tell `node.js` which modules have to be imported whenever the client application will import functionality from our library by using either the main entry point or sub-entry point, which in our case is called `lock`.

#### File Paths

- We have provided the path in here for every build file, which corresponds to every entry point of our library.
- Whether the client-side application is going to use Native Weapons grid modules to import functionality from our package or CommonJS modules, in both of these cases, imports from our library are going to you work fine.

#### Testing with ECMAScript Modules

- So far we have only tested importing functionality from our library by using native ECMAScript modules.

#### Node.js Module Resolution

- In this case, Node while importing these modules looks into the key `import` of the `package.json` file of our library in order to find the file which it should import.
- Each of these paths specified in these `package.json` file points to build files of our library that we have generated during the build process, and it placed all these build files inside this folder by default.

#### Testing with CommonJS Syntax

- Now let's see if it is going to work if in our client application instead of using native ES6 Imports we're going to use CommonJS syntax by using functional `require`.
- I'm going to convert both of these imports to use `require` like this, and I'm doing this inside the main JavaScript file of our main client application which imports functionality from the library.

#### Running the Script

- Now instead of checking the result in the browser, we're going to run this script `main.js` by using `node`.
- In the terminal, I'm going to run `node main.js`.
- And as we can see, we got an error saying that `require` is not defined in the ES module scope.

#### Fixing the Issue

- In order to fix this issue, we have to rename an extension of this script to `.cjs` so that `node.js` will treat this module as CommonJS module.
- But we are going to do it a bit differently.
- Instead of renaming the current file, I'm going to make a copy of this file with an extension of `.cjs` like so.

#### Reverting Changes

- Then let's just revert all the changes we have previously made to the `main.js` file and leave the file with an extension `.cjs` as is.
- This file still uses syntax of CommonJS modules with `require` function calls.
- Now again, let's execute `main.cjs` script in the Node environment.

#### Successful Execution

- In this case, as we can see, everything works fine.
- We got the result, and as a reminder, this script just extracts usernames from the array of user objects and then it prints out the new array, which consists only of usernames.
- So that's what we are seeing in here.

#### Library Usage

- As you can see, it is possible to use our library in both cases.
- Whenever the client application uses native ECMAScript import syntax or the syntax of CommonJS modules by using `require` function to import functionality from the library.
- This is possible because while building our library, it has generated two versions of our library.
- The first set of files is intended to be used with Native ECMAScript Imports, and the second set of files provides support whenever users are going to import functionality from our library by using `require` function.

#### Removing CommonJS Support

- If I'm gonna go back to the source code of our library, and in here I'm going to remove versions of `.cjs` builds (those are the files responsible for providing support to import our library as CommonJS modules).
- Then after removal both of these files from the `list` folder, `index.cjs` and `log.cjs`, if we'll try to execute our `main.cjs` script from the client application, which still uses CommonJS syntax to import modules from our library.
- In this case, we're gonna get the following error, obviously because we have just removed those files that were previously providing support to import functionality from our package by using CommonJS syntax.

#### Conclusion

- As we can see, it's very good that while building our library it generates two sets of the build files.
- The first set of files is intended to be imported as normal ECMAScript modules, and the second set of files provides support whenever users are going to import functionality from our library by using the `require` function.
- So let's continue a review and possibilities of building libraries in the next lesson.

### **=>** External dependencies

>

so by now we have already created npm package and use this package in the client application let's start development server by running npm run Dev to start our application in the browser and the result of using our custom package is shown in a console it basically have extracted user names from the initial array of the user objects and although that has been implemented in previous lessons so let's just recall how that works in the main script of our client application we are importing functionality from our package but not only from the main module of our package also from the sub module log and currently the project which contains our package has two JavaScript files index.js and log.js and each of these files experts one function and these two functions we are actually importing in our client application from different sum modules but as we can see currently our package is pretty simple it doesn't anyone use any third-party libraries so in this lesson we're going to review how to integrate third party library in our custom package so in this file index.js we're going to invert third-party Library called collect.js which basically has lots of utilities to work with array of objects and we're going to leverage this function inside of our plug function but firstly let's just rename this function on plug and lock and then we'll basically do the same which is extract a key from each object of the collection but this time we're gonna use black method on our collection and we'll basically do the same here but by using method black which Library collect.js provides us with like so and then besides returning this result we're also going to look the result in this function and right after we return this result so besides the main purpose of this function we're also logging the result in a console right away and then let's see what is going to happen if we'll try to build this Library so in the terminal let's run npm run build and we are receiving the following error that the collect.js library cannot be imported since this Library does not exist in our package so what we need to do is to actually install this Library by running npm install collect.js and now once I'm gonna start the build process once again this time it worked we still see for build files but this time we can notice that the sizes of some files drastically increased for example the size of the main file index.js is now almost 60 kilobytes and that is because when we were importing library collect.js in our script vid has actually taken the whole source code of third party library and put it in the build and which is why the resulting file of our library has much bigger size now but before we'll solve this problem let's just import our new function plug and lock in the client application and see if it's gonna work so now we don't need to additionally call the log function in order to print results in a console because the new function black and lock is going to extract keys from every object of the array as well as print the result in a console and in the console as we can see we are seeing expected result with the difference that our result is contained within items property of the wrapper object that's how the library collect.js works it returns us not only the resulting array but in object which wraps our collection but this is not the most optimal solution of building our libraries because anytime we're going to import third-party Library the file size of our library will be drastically increased so let's see what we can do about it and what do it has to offer in this regard so moving on let's open up configuration file vid.config.js and in here we're gonna add another option which is called roll up options which will be an object with the key external and this is where we have to specify Library names which we don't need to be bundled along with the core of our library and since by now we're using only one third-party Library called collect.js I'm going to include only one name in this array like so and then let's watch the size of the bundlet file index.js so currently the size of index.js file is around 60 kilobytes but after I rerun the build process by executing npm run build this time we see that the file size was drastically dropped and if we're gonna take a look at the content of the build file index.js we're seeing only our code in here and the input of the library collect.js but the source code of this library is absent and which is why we don't even need to install the library collect.js in our project so let's remove this dependency by running npm uninstall and dependency name and let's just rerun the build process of our package once again by executing npm run build so now if we'll go to the browser and check the result in our client application again we're supposed to get an error since our package relies on the third party library collect.js but that library was not included in the build version of our package but surprisingly as we can see we didn't receive any errors so it worked and the reason it worked is that previously when we started development server vid has gone ahead and cached some dependencies in the folder.vit which is inside of node modules and this folder has cached version of the library collect.js so let's just go back to the editor open up node modules folder of our Clan application and remove the folder we sketched dependency is called dot vid so now let's restart development server in the client application and we are receiving an error that dependency client.js cannot be imported since it is missing from our Clan application as well as from the build file of our library and the first thing that comes to mind is actually install this Library into our client application so let's do just that I'm gonna execute npm install and specify Library name collect.js and then after running npm run Dev again we're receiving a different error similar but this time it could not resolve Imports of our own package block because the link to our package which we have previously added to the node modules folder of the client application by executing npm link is gone for some reason so let's just add the link to our package inside node modules folder One More Time by running npm link and our package name I am not going to explain in detail what this command is doing since we were talking about it in one of the previous lessons so now that we have added back link block which points to our package inside node modules folder we can try to start development server once again and again the previous error is back that it cannot resolve dependency collect JS so we're going to solve this problem in the next lesson when we will publish our package to the npm registry and then instead of using npm link to make our package available to the client application we're going to install our package as any other third-party dependency by running npm install

### **=>** Publishing NPM package

>

it's finally time to actually go ahead and publish our package into npm registry and as a reminder we are already importing functionality from our package in the main.js file of our client application and the way we made it possible is by linking our local folder with a package to node modulus folder of our client application by running the following command npm link and the name of the package wouldd like to link to our client application and then as we can see inside node modules for we have the new link called plug which points directly to the folder with our library and now instead of linking our local library we're actually going to go ahead and publish our package to npm registry so first of all what we have to do is to login let's run npm login in the rout of our library and we will be presented with a couple of prompts here we need to type in the username as well as the password that we have used to register on the npm website and yes side note we need to be registered up front in order to log to npm then we also have to enter our email address and right after we will receive the code on our email so let's enter this code in here and as soon as we're going to see this message that means we were successfully authenticated so I'll switch over to my browser and right here as we can see I don't have any libraries in my npm account yet so let's start the pro of publishing our library to npm first of all let's go and open up file package Json of our library and here the first thing that I'm going to do is rename the value start under the key name besides the name of our library I'm also going to use namespace this namespace should match username of the loged in user and what this will do is it will basically make sure that we are not going to get any naming collisions because there is a high chance that the package with the name plugged already exists on npm and now in the terminal to publish the package we have to run npm publish this time we get an error saying that our library is considered to be private and the reason is that in the package Json file we have the key private with devel through so let's remove this key run npm publish again and it looks like publishing private packages is actually paid feature so when running npm publish we have to specify one flag called access with access modifier in this case I'm going to use public so this way our library will be publicly visible and finally the common has finished with no errors and if I'll switch over to the browser in here I can see that my library was published next let's go back to the editor inside the client application let's open up package.json and here let's remove the only dependency collect JS we're also going to remove the folder with this dependency from node modules folder as well as special folder. vit that V generates to store cached dependencies and now in order to install the library I have just published we can use npm install and the full Library name the full name is stored in here under the name key of the package Json of our library project so let's see what is going to happen when we run npm install and our library name as we can see the library was successfully installed and now I can run development server by running npm Rand Del and here I see the following error saying that some of the dependencies were not resolved and those dependencies are from our library and the reason is that currently our client application inside main.js file references old pass to import functionality from our library so we have to properly update this import pass by specifying full Library name in here next let's start development server again this time we got a new error and to understand what's going on in here let's open up the folder with our package inside node modulus folder of our client application and here we can see that there is no folder dist with the built assets of our library but in fact inside the package.json file we are referencing these files from the dist folder cuz those are the files that have to be imported when users are going to import functionality from our library so we actually have to do one more thing before publishing our package to npm let's go back to the package Json file of our library and in here we have to specify the key files where we can list all the files and folders that have to be published in our case we are we only need to publish folder with the build assets which is this so I'm going to specify one folder name in here and then once we do any change to our library I'm also going to have to republish this library but with a different version number we could update this version manually or we could use npm command called npm version so we also have to specify which version number we'd like to update either the first one second one or this third one in this case it's not really important which one we're going to update so I'm going to update the third one and the word responsible for updating the thir number is patch let's run this comment as we can see our version number was updated and also this number was updated inside package Json and to grab the new version of this library in the client application we have to reinstall it and before installing the new version of this library in the client application let's go inside node modulus folder of our client application and manually remove the folder of our library from here and right after that we are ready to install a new version let's run npm install and our library name and now if we take a look at the content of the library inside non modules folder we can see here that this time only one folder is present which is this this is that folder we have previously specified under the key files inside package Json of the library and which is why only this folder has been published to npm let's run development server once again and this time we also got an error but the error message is different so it cannot install the library collect GS but in fact we reference this library from the source code of our package right here inside index. GS but in fact we have not installed this library in the client application as well as in our package so this dependency is nowhere to be found and the reason why this library was not included in the build file of our library is because inside V.C config.js we have manually specified that V should not include this external dependency into final build of our library so to fix this issue we have to go inside of package Json of our library and in here let's specify one more key called Pure dependencies and these are the dependencies that our library depends on but it doesn't include those dependencies so actually client applications will be the ones who will be responsible to install this library in order to use our package so let's specify here one pure dependency collect. JS this way we are saying that our library depends on this third party library and then of course I'm going to have to republish our new version of the package let's first update the version of our package by running the corresponding command and then let's go back inside the folder with our client application let's remove our previous version of the library from node modules folder and reinstall it by running nbm install so what actually happened this time is this besides installing our library we can see that inside node modules folder there is collect JS folder which means dependency collect JS was automatically installed along with our package and the reason it was installed automatically is because we have previously specified this dependency under pure dependencies key inside of our library so from now on when any client application is going to install our library the dependency collect. JS will be automatically installed and finally if we're going to run development server inside of our client application eventually it worked and in the browser we can see an expect Ed result in a console and also let's see if production build is also going to work I'm going to run npm run build to build this client application the build has finished without errors so that's good and now let's run this build in the browser by running npm run preview and then by opening up this URL we see the same result as in development mode so we were able to successfully publish our package to npm registry and additionally our package contains external dependency collect JS which is not bundled with our library so all client applications that are going to use our library once they're going to install our library all third party libraries which our library depends upon which in this case is only one dependency collect GS they are going to be automatically installed so that's about it for this lesson let's continue learning with in the next one

### **=>** Image optimization

>

in this lesson let's review how we can optimize images by using vid and for that I already prepared default with project let's open it up in the browser and start so at the beginning as always let's just do a little preparation let's switch over to index.html file and here I'm going to add an image and in order for this image to not exceed the available widths of the browser let's assign weights 100 percent and then what we're gonna do inside main.js firstly let's clear everything from here an import an example image which I'm going to add in this project in a bit so then once we get the pass to this image inside the image variable let's just select Dom element of that image we have just added and assigned the pairs of the image to the source attribute like so let me just quickly add an image to this project here it is this is how our image we're going to optimize looks like and then in order to easily see the size of any file within vs code we can use the following extension I already have this installed and the way this extension works is it just shows the size of an active file in the status bar at the bottom right corner I currently have my status bar hidden so let me just enable it and right here I can see the original size of this image as we can see this image is quite big and the size exceeds one megabyte and now before proceeding further let's switch over to the browser and make sure that this image shows up and everything looks good we can continue so in order to optimize images if it has several plugins and one of them we're gonna use in this lesson I'm going to use plugin called with plugin image Optimizer so this plugin relies on two other libraries sharp.js and svgo for image optimizations so here first things first let's just install this plugin by running the following npm command I'm gonna copy over this command and run it in my terminal and then since this plugin relies onto other libraries those libraries have to be manually installed so one by one I'm going to copy these commands to install these two libraries firstly let's install sharp and right after that let's also install another Library svgo and once the installation process is finished we have to configure this plugin and the way we do this is by inserting this configuration into our review configuration file currently I do not have this file so let me create it and paste in here all that configuration there is nothing special about this configuration and the most important thing here is that we import and include our new image optimization plugin and add it to David pipeline actually this plugin allows us to configure a lot of things but we're not going to review any possible configuration option and instead let's just see how to optimize an image with an extension.gpg so let me copy over this configuration option and paste it into myvit.config.js and by using this option quality we can configure how much we want all gpg images to be optimized so as an example let's specify 80 and by the way image optimization only happens when building the project for production so I'm gonna have to run the build by using npm run build and right here we can see the new output this is the result of that image optimization plugin and right away we can see in here the two images were optimized the first image is the image we just added to the project and another one vid.spg is a default one which resides inside public folder by default so as you can see the size of the first image was reduced by around 300 kilobytes and now they see the result in the browser I'm gonna have to run npm run preview to open up build project in the browser and by following the address localhost 4173 we can see in the browser build project and there we go we got here an optimized image but the size here is a little bit different than the one we have just in in the terminal anyway our image optimization is worked so now let's just change the value of the quality configuration option for example let's specify 4D and then rerun the build by running npm run build and this time the image size was reduced even more and of course if I'll open up this build in a browser we can see in here the newly optimized image with the size of 392 kilobytes so let's review in the editor let's open up original image with the name image.gpg and as we can see the original size of this image was over one megabyte but then when building the project for production the size of this image was dropped to 344 kilobytes and actually the point of this lesson was not to show you how the particular plugin works but how to include any plugin into it because the installation process as well as configuration will be pretty similar and of course there is not the only plugin which allows you to optimize images there are also other choices so we just have to pick that plugin which satisfies our needs and then follow simple steps to install and configure this plugin and then we'll be good to go let's keep exploring capabilities of it in the next lesson

### **=>** Plugin creation

>

in this lesson let's explore how we can create our own bit plugins so I have already created default with project let's run development server and just to make things a little bit easier while developing our plugin let's use another plugin called Vivid plugin inspect and what this plugin will allow us to do is it will provide us with such inspector view where we can see all the Transformations that are going to be applied to our modules by all plugins including our own so let's quickly install this plugin by using npm and run this command in the terminal and then let's copy over this code to include this plugin let's create configuration file with configure.js and paste in here that code and now we'll have to restart my development server by running npm Rand Dev and in here besides our app URL we can also see inspector URL and by opening up this URL in the browser we can access our inspector so if we see this page that means our inspector was installed successfully we can continue so we're going to create our own plugin which is going to allow us to import CSV modules and to transform CSV code into valid JavaScript arrays we're going to use node.js Library called node CSV and since this library has several libraries in it the one that we need is called CSV parse so let's install this Library by running the following npm command in our terminal and then before actually get into writing our plugin let's do a little preparation by adding an empty pre-tech in our HTML file and then let's switch over to main.js and remove everything from here we're gonna start from scratch so what we're going to do in here is try to import the CSV file we're going to create soon and then all the content of the CSV file we're going to assign to that pre-tech specifically to a text content property like so but since products will be the array firstly we have to strongify this array and which is why we're calling message stringify to turn this array into a string and of course this statement should import CSV file so let's change this extension on dot CSV and then we'll add this products.csv file in the root of this project and here I'm going to insert some random data we're gonna work with products and their quantities the first line will contain names of The Columns of the CSV file and on other lines will contain the data for every column like so and of course by default vid does not support importing CSV modules so when we switch over to the browser we'll actually get an error because as soon as our browser tries to make a request to products.csv file our server responds with the raw content of the CSV file which is not the valedict must create module hence this import didn't work so before actually importing CSV modules we have to apply custom transformation which would transform CSV code into valid JavaScript array so it can be imported as other ecmascript modules so our transform JavaScript array could be assigned to the products variable in here and now we're gonna get to the main part of this lesson which is creating the vid plugin so David plugin is basically an object which we should add to plugins array in our read configuration file so in here let's create a new object firstly we'll have to specify the name for our plugin I'm gonna use vit column CSV and then most importantly we have to provide a special function cook called transform which in our case will be a synchronous and this function will be called automatically by wheat whenever we're gonna import any modules inside JavaScript files the first parameter of this hook will be the content of the imported module and the second parameter will be the pass to this module I'm gonna call these parameters source and ID so once we have fetched the content of the CSV module we need to transform this CSV code into JavaScript array which we can do by using function called parse and these function is going to be imported from that CSV parse module that we have installed at the beginning of this lesson also to this function I'm gonna pass configuration object with only one option columns that will tell this parse function that our CSV code contains name of columns as the first line in our CSS SV file so it can properly transform our CSV code and then let's go up and in here add an import for the parse function from the CSV Dash parse package and the sync submodule like so and then by following conventions of it the transform function has to return an object which should have a key called code and in here we have to provide valid ecmascript code which is supposed to be exported when people are going to import CSV modules in JavaScript files and now very important thing to note is that this hook transform is going to be called anytime we're going to import any module inside JavaScript files not only CSV files so we actually have to restrict execution of this hook to only CSV modules and we can do this by adding conditional and wrapping All The Code by this conditional so here we're going to use a regular expression and check if the currently imported module is indeed CSV module only then we're gonna run this transformation otherwise our plugin is not gonna do anything when importing other modules so just for clarity let's also print some variable values in here for example Source ID as well as the records and then in a browser we can see the result of our plugin so there is no error anymore while importing.csv modules and what we got instead is actually transformed CSV code into JavaScript array on the page let's just make this output a little bit prettier by adding style white space with the value of pre-wrap to place the content on multiple lines and if we select the request which was supposed to fetch CSV module from the server in the response we can see that the response was turned into valid ecmascript module which experts an array of objects and apparently it contains objects for every line from the CSV file and then this variable was stringified and assigned to text contain property of the pre-tag which is why we're seeing this array in the stringified form on the page and now in a server console let's see the result of these variables so if I will refresh the page these variables are supposed to be printed in the server console cell and there we go so this value corresponds to the variable source which contains all content from the CSV file in the other output which is the path to the CSV file corresponds to an ID variable and finally after executing this whole thing we got the transformed CSV into constant called records which was later transformed into valid ecmascript module string and this is actually the result of outputting that variable in the server console so one more time while importing.csv module in our Javascript file we got transformed CSV code into JavaScript array and this JavaScript array was assigned to the products variable which later was stringified and assigned two text content property of the pre-tech and now let's take a look at the transformation of our custom plugin that was applied to CSV module so let's open up an inspector click on our module products.csv and right here we see the following transformation which corresponds to the name of our plugin with colon CSV so our plugin has read the content of the CSV file and transformed this code into valid ecmascript module and that's about it we have successfully implemented our custom vid plugin which allows us to import CSV modules in JavaScript files linked to the source code will be in the video description

### **=>** Plugin options

>

in the previous lesson we have implemented the plugin which allows us to import CSV files inside of ecmascript modules and the way it works is as follows whenever we import CSV file the CSV synex gets transformed into JavaScript array of objects but currently our plugin is kind of in lined inside of vid configuration but usually plugins are extracted into separate JavaScript modules in the form of factory function so let's try to move it into a separate file just like it is done for the inspect plugin here we're just importing this plugin and then colon it inside this plugins array so we're going to do the same with our CSV plugin let's just cut this whole object create a new file for this plugin in the road of our project let's call it vid plugin CSV and this module is going to expert one function which will be a factory function for our plugin here we're going to paste that whole object with plugin definition let's also move that import that we need in this plugin of the function parse and since this function parse gets imported from the sync subm module there is no need to make our transform hooka synchros so we can remove this as innc keyword from here let's also rename this plugin on simply CSV and then let's get back to our vid configuration and include this plugin by firstly important in Factory function from V plugin CSV file and then just like it is done for inspect plugin right next to it we're going to call our Factory function CSV and this way we have just included our own plugin and please know that there is no difference between including plugins in line in the form of JavaScript objects or by moving them into Factory functions and then calling those functions right here in this plugins array so just to make sure that our plugin works as expected and we got the same result as before let's run development server and take a look in the browser as we can see we get the same data that means our plugin works as before and now a couple of words about existing plugins that exist in V ecosystem so first of all there is a list of official plugins provided on the official documentation page right here and then since V internally uses another bundle called rup to build projects for production there are a bunch of RAB plugins that are compatible with VD projects and the list of herab plugins compatible with VD projects can be found on this page and of course besides official rup and VD plugins there are countless of plugins built by the community for example there is aome rup repository which has collection of resources specifically for rup and this page also includes list of community plugins and similar page also exists for V this repo is called awesome vit here we also can find a bunch of links to everything related to V projects as well as plugins developed by the community now let's go back to our plug-in configuration and consider a couple more options that we can use for our plugin so an important option is called apply and this option allows us to specify which environment our plugin should be included into for example if we'd like to use this plugin only during development we can specify Val serve for this option and this way plugin will only be activated while we are running development server and by using another keyword called build allows us to include this plugin only in production builds in other words when we are running commment npm run build to build the project for production so let's see for example I'm going to specify value serve which means the plugin should be included only in development mode and then if I run production build by running npm run build right away I get an error because our plugin which lets us import CSC modules was not actually included in the production environment and then if I'll go ahead and change this value unbuilt then while running development server by executing npm run Dev in the browser we're going to get the following error since our UT of the CSV file didn't work and besides specifying predefined vales for this Supply option we can also specify a closure which gives us more fine grain control disclosure accepts a couple of parameters first of which will be a configuration object and another parameter will also be an object with a couple of useful properties such as commment and mode and then let's just print out each of those variables to see what they contain and by looking in the console we can see that the first parameter based basically printed the whole configuration object command variable stores Val serve and mode variable stores Val development since currently we are running it in the development mode and based on these values we can do an extra checks and if we're going to return value true from disclosure that means the plug-in should be included so for example if I'd like to include this plug-in only during development I'm going to compare variable mode with the development word and this way this plug-in will be included only while running development server and of course if I'll go ahead and try to build the project for production I'm going to get the corresponding error saying that CSV module cannot be imported since there is no plugin which recognizes such Imports also there may be situations where we need to access configuration object in other hooks for example in this transform hook so how do I get access to to this configuration object from other Hooks and there is actually another hook that we provides as way called config resolved this hook will be called automatically before transform hook and it receives configuration object which will then can store in a variable so it will be accessible to other hooks so I'm going to declare here variable called config before returning configuration for this plugin and then inside config resolved hook I'm going to assign resolved configuration object to this variable config so then it's accessible from other Hooks and then based on configuration values we can easily do extra checks in this transform hook for example let's compare value serve with the value stored in common variable and based on that we're going to specify this value as the value for for option columns for the parse function so now let's take a look at the difference firstly let's run our development server and check the result how our CSV code was transformed as we can see we got an array of objects where every key corresponds to the field from the CSV file and every such object corresponds to individual line from the CSV file and for example if I'm going to run development build in this case we're supposed to get different result so let's just run this production build in the browser by running preview server and as we can see the output is different in this case the first element of this array is another array which consists only of column values from the CSV file and all other elements store values from Individual rows or the CSV file and now let's review one more useful hook which basically allows us to transform HTML content and this Hook is called transform index HTML which is about to receive the whole content of the HTML file so in here we can do all necessary Transformations with the content of HTML file so let's replace the closing body Tech with the following I'm going to put basic script at the end of the body element which will open up a dialogue with the word hello like so and it is very important to position all the hooks on the same level so the transform hook as well as transform index HTML hook should be included on the same level like this so now after running the development server in the browser we can see that firstly we got an alert with the word hello so our transformation of the HTML file was successful and at the end of the body element we get that script which opens up the dialog so in this lesson we have only reviewed a couple of hooks that we can leverage in our plugins but in fact there are a lot more of such Hooks and documentation about those can be found in the official vid documentation but even only using these hooks we get a lot of flexibility and we can transform imported modules in whatever way we like let's continue learning about V in the next lesson

### **=>** Server options

>

let's consider several options which allows us to configure development server so when we start development server by running npm Randle it starts with using Port 5173 but then if we're gonna go ahead and run another copy of this server the port will be changed dynamically because the previous Port 5173 was already taken by the previous copy of the development server and of course this port is configurable and just like other configurations we can override the port in bit configuration file so let's create an empty with configuration file and in here we're going to specify an object under the server key where we can configure several aspects of the vid development server so for example I want the port to be 3333 and now after running npm Randle we can notice that the port we just specified was used for a development server but still if we're going to launch another copy of this server the port will be changed and this is a pretty convenient Behavior but in case we'd like this command to serve an error if the specified Port was already taken we can specify another configuration option called restrict port with the value true and now if we're gonna launch one instance of the development server and then we'll try to launch another instance in this case instead of picking up Port which is available it will throw an error because Port 33333 is already in use another option called headers allows us to specify custom headers for with responses as an example let's specify one header with a name a and there will be and then in the browser it will inspect the request for fetch in the current page in here under the response headers we are noticing our custom header a and this header will be added not only in the response for fetching the current page but also for fetching other assets such as JavaScript files another interesting option is called proxy and what this will allow us to do is to provide custom URLs which will be accessible from our Dev server for example I want to use URL slash products to fetch list of dummy products during development and we can achieve this by specifying custom option proxy this option holds an object where keys are addresses that would like to be accessible and the values for those keys will be addresses that do it is going to redirect those requests so for this particular example I'm going to use third-party servers called damage.json which provides us with dummy API it basically gives us set of dummy endpoints which we can use during our local development so in this case I have used the first endpoint products and now while accessing these endpoint products from our local Dev server I am supposed to get list of fetched products received from damages on API that's exactly what we're seeing but also besides specifying only addresses for keys inside a proxy object we can also provide more detailed configuration in the form of object so for example I want to have an API wrote in my development server which is going to redirect me to that same damages on service but while redirected me to these servers I don't want to include API segment in the address so I'm basically going to modify the final URL which is going to be used to make a request to damages on API by completely removing API segment from the URL like so and this configuration is going to allow me to do the following type of requests for example if I'm going to refer to slash API slash products since API segment will be removed the resulting URL will be as follows so only products segment will be added to the end of the dummy json.com domain so now let's try to call this URL in the browser slash API slash products this time I'm receiving an error with an error code of 500 this error has something to do with different Origins so without getting too far of the topic with documentation suggest us to use another option change origin with the valid rule to avoid errors related to different Origins so now if I'm going to make that same request on API slash products I'm receiving the list of products but this time we can do even more for example let's use different URL let's try to fetch list of posts by using post URL and to do this I simply have to change this segment on posts like so as we can see it has worked and we got a list of posts in the response so for now we will only specifying all configurations for the server under the server key in the configuration file but we can also assign separate configurations for the preview server so let's build this project for production by running npm run build and then run preview server by executing npm run preview as we can see the default Port of the preview server is 4173 let's just try to overwrite some configurations for the previous server for that I'm going to copy over this object paste it down here and rename name option server on preview and this configuration will only be applicable for the preview server let's change something in this configuration for example let's use different port remove this header's object and add another option called open here we can specify which address should be open in a browser by default after starting preview server I'm going to specify our custom URL API slash products and just because we have previously configured proxy a request was made to the following URL API slash products and we get the list of products on the page and this is how we can override configurations for the previous server as well as for the development server in fact there are many more configurations for configuring servers and all of them are described in details in the official with documentation

### **=>** Hot Module Replacement (HMR)

>

in one of the previous lessons we have implemented the custom with plugin which allows us to import CSV files inside JavaScript modules inside of our main Javascript file we are importing the file products.csv and enter of content of the CSV file will be transformed by our plugin and turned into array audio script objects and from the code point of view it looks like this inside of bit configuration file we are including this plugin by calling Factory function CSV which we are importing from with plugin CSV file let's open up this file and take a look at the implementation so here we're basically using the hook called transform which will be called by wheat anytime we are going to import CSV files in ecmascript modules and then we're basically converting the raw content of the CSV file into valid JavaScript array of objects by using this function parts and at the end we are returning valid script module to the client which contains the data from the CSV file in the form of array of joscript objects and here is how our products.csv file currently looks like that we are importing in our main Javascript file right here and then we're basically injecting the content that we have received after importing that CSV file into the pre-tech and which is why we're seeing the content of the CSV file on this page but the thing is that now if we're going to update the content of the CSV file it will cause the full page refresh of the browser and just to see it in action let's create arbitrary constant plugin and see if this plugin constant will still be available after we're gonna modify CSV file let's just go ahead and make any modification to the content of the products.csv file I'm basically going to add another row in here and then in the browser let's see if the plugin constant is still available so first of all we're seeing here that the new line that was added in the CSV file was appeared on this page but the plugin constant is undefined because browser has made full page refresh in order to update the content on the page so now we're going to implement support of so-called hot module replacement for our plugin and this technique basically allows us to update modules that are modified without doing the full page refresh in the browser it's called HMR which stands for hot module replacement and in order to implement hot module replacement for our plugin we need to use another hook provided by evit called handle hot update this Hook is going to do a synchronous operation so let's mark this function as an async function and as a first parameter into this function with willpass context object so this function will be called anytime we're going going to modify any module that we are currently importing in our JavaScript files but we don't need to listen for all updates but only for updates that happened to CSV files so let's use the same condition we have used in the transform hook and check if modification has been done to the CSV file only then we're gonna run this logic inside this if conditional but here in order to access the file name which was updated we need to reference property file and this context object and the way we're going to implement hot module replacement is by leveraging websocket connection and firing custom event to the client by using method send on the websocket object like this and then we also have to specify custom configuration for this event let's specify the type which will be a custom the event name will be CSV Dash update here we can use any kind of name we like later we're gonna listen to this event in the client code and then we also have to specify the data key and this key will basically store the content which we're going to send to the client for now let's just read the content of the updated CSV file by colon method read on the context object and since this method is in a synchronous we have to await the response and then assign it to the data property like so and right after that just to tell it that we are going to take care about hot module replacement ourselves we need to notify a bit about it by simply returning an empty array from this method like this so now let's try it out one more time and check if the constant that we're going to declare in here will be available even after we're gonna modify.csv file so I'm going to remove the last line of the CSV file and check if the plugin constant is still available so so as we can see it is still defined that means the browser hasn't reloaded the page but we also haven't seen any changes to the content on the page because we are currently not listening to the custom event that we are firing from the server so this was the first part of implementing the hot module replacement which is firing anyone from the server to the client the next part is to actually listen for this event on the client side so I'm gonna switch over to the client script and then here first of all let's check if the object which is responsible for hot modular replacement exists this object is stored on The Meta property of an invert object and if so we're going to register a listener for the custom event we have specified on the server with the name CSV update and as a second argument to your dysfunction we have to pass closure with one parameter and this parameter is basically going to store the data that we have specified under the data key while sending this event right here so first of all let's check it out what we're going to receive in this data parameter I'm going to print it out in a console let's switch over to the browser as we can see currently I have three products in my.csv file let's go there and change the content and after that in a browser we can see that the console shows new content of the CSV file including our latest product Edition so now we're gonna get two updates on the actual page because after CSV file is modified we need to properly change the content on the page to do so in our client script I'm going to copy this line and paste it into this Handler so anytime we're gonna receive the new content from the server we're going to update the content of the pre-tech by assigning updated content but currently this content will be passed as the raw content of the CSV file but what we need to do instead in our plugin is to actually transform CSV content into geoscript array by colon function Parts just like we have done in this transform hook so let's wrap the content of the CSV file in the parse function call and this way client application will receive JavaScript array instead of a row CSV content so now back to the browser and check it out once again initially I have four products in my CSV file let's remove the last product from here and see how it will be reflected in a browser as you can see content was changed and now instead of four products I have only three which corresponds to the latest content of the CSV file and that means that our hot module replacement worked and from the server via websocket connection we have received updated content of the CSV file in the form of array of objects and of course now as soon as I'm gonna do any kind of modifications to the CSV file instantly I'm going to see those changes reflected on the page so as we can see our first product was back and now let's just do one little Improvement to our plugin bypassing structured data to the client so I'm going to send an object with two properties First Property will be a URL and second one data URL will store the pass to the module that was updated and the data will store the new transformed content of the updated module let's just add more descriptive message on the client side in the console and say which module was updated and here we have to destructure two properties URL and the data those are two properties we have just specified in the source code of our plugin right here so now let's check it out one more time in a browser will create constant plugin and if this constant will be available this will be a sign that the browser hasn't done a full page refresh so after modifying the content of the products.csv file we can see that it was reflected on the page as well as we can see the new log which shows the paths to the file which was updated and of course the constant plugin is still available so our hot modular replacement for CSV files works great and this is how we can Implement hot module replacement in with projects by basically using the function handle hot update in our plugin and then send in custom event via websocket to the client with appropriate payload and then on the client side we are registering The Listener for this window except updated data and then do whatever we need with this updated data in order to apply hot module replacement update so this was one of the ways how we can Implement hot module replacement indeed

### **=>** Client-server Communication

>

now let's see how it allows us to establish client server communication just like in the previous lesson when we were using hook handle hot update to implement hot module replacement feature for our plugin and in here we were using websocket object to send events to the client and then we also had a chance to specify which data exactly should be sent along with this event and in our client script we have registered listener for this event except that the data received from the server and then we were able to do anything we want with this data to implement hot module replacement but besides using this hook handle hot update which will be called only when any module that we are importing in JavaScript files will be changed we can use another hook which allows us to configure the server and this Hook is called configure server which accepts a server instance as the first parameter and by using this server object we can also access websocket connection so just like previously we can set up a listener for all kinds of events for example there is a default event called connection which will be fired whenever our websocket connection will be established so we can try listening for this event in here and once we establish websocket connection let's send anyone to the client with the name connected and as a payload we can send simple message connection established and now to be able to listen for this event from the client code we have to register a listener by using object hold so here we also call the method called on and as a first parameter we have to specify event name which will be listening for and in the second parameter we specify the closure which will be our event handler so disclosure is going to receive the payload signed from the server along with this event and now let's see what will be printed in a console I'm going to switch over to the browser and as we can see in here we have that message sent from the server once websocket connection was established and this way we can exchange messages between server and the client for example let's fire another event as a response to the server with the name pin and the payload which will also be a simple message hello server and now going back to our plugin implementation inside of this configure server hook let's register another listener for the pin event and specify anyone Handler this time event handler is going to receive two parameters first to which will be the payload sent from the client and the second parameter will be the client itself in other words the object that represents the connection and inside of disclosure we will be able to use this object to send events to the client so as a response let's send event with the name and the message hello client and now one more time let's switch over to our client script and register a listener for Reason by using that same object hot as an event handler let's specify the closure which will receive the payload as the first argument and print this payload in a console so now in the browser console we can see two messages the first one was printed once websocket connection was established because previously on the server side in our plugin implementation code we have registered listener for the connection went and as soon as websocket connection was established we send the event called connected to the server with the message connection established and then client has received this event and printed that message in a console and now to reply back to the server client send another rewind with a name pin and the message hello server on the server side we have registered a listener for the U.N pin and also printed the message which will come from the client in the server console so now if we're going to take a look on the server console we're going to see here that message received from the client hello server and finally besides printing this message in a console we're also firing another event 2 declined with the message hello client and in our client script we are basically listening for this event and printing received message in the browser console and which is why we're seeing here as second log that says hello client received from the server and by the way all those listeners anyways which we have used in here this code will be executed only if an object Hood will be available because we have wrapped everything in the if conditional and the thing is that this object Holder will be available only during development so we are going to build this project for production by running npm run build this object hold will not be available so all this code will be basically removed from the production bundle by using three shaking so at the end let's just make sure that this is the case I'm going to print out simple messaging here just to see that this code will be executed and indeed we are seeing that lock code in the browser console along with other logs because currently I'm running development server but once I'm going to switch over to the console and run the command to build this project for production and then run production built in the browser by executing npm run preview sure enough I'm not going to see any looks whatsoever this is because that conditional block which we're checking if hot object is present has not been executed since hot object is not available in the production build so this is how we can exchange messages between our plugins and decline code by using websocket connection provided by vit

### **=>** Accepting hot updates

>

in one of the previous lessons we have implemented hot module replacement for CSV modules the way we have done this is by using handle hot update hook inside of our plugin implementation so in here whenever that CSV file will be modified we will fire event via websocket connection to the client and include all necessary data along with this event so that client could receive this data and then Implement all necessary updates and in this lesson we're going to see how we can Implement hot modular replacement for JavaScript files so I'm going to comment out all these listeners We're not gonna need them in this lesson and also we don't need to fire any custom events from our server so let's just comment out this hook configure server which was basically used to Fire custom events by websocket connection to the client and before getting to implementing hot module replacement for joscript files let's do a little preparation I'm going to create new Jos grid module in the root of the project let's call this file module.js and here let's add some dummy code for example let's export constant with the name message and the random string and also let's add one more expert which will be a default expert also with random string and now we're going to use HMR API to implement hot modular replacement and all the code which we will need for hot module replacement we're gonna wrap in the if conditional and check if hot object is present then we're going to implement HMR so that we could properly remove this code when doing production builds since we don't need to provide HMR during production so in order to implement hot module replacement for these specific module we can leverage method code except on the object hold so this method accepts closure which in turn accepts one parameter which will be updated content of this module let's call this parameter updated module and then print out this variable in the browser console and just to see it in action we of course have to go back to our main Javascript file and write an import statement to import our new module and regarding all other code we actually don't need any of that so let's comment everything out besides our invert and one more thing before we'll check it in a browser let's go back to module.js and print something out so we can see that this module will be loaded and here we go we got that look that means that our module was properly included and now let's see what is going to happen as soon as I'm going to modify the file module.gs for example let's change this string and in the browser console I'm seeing a different look which was just modified because after updating this file this module was executed again and then we also got this lock which contains updated content of this module in the form of an object so here we can see a default export of this module as well as the name the expert of the constant message and this log was printed by using disclosure that we have passed into accept method so now if I'm going to modify the value of the message constant for example right away I'm seeing the new log in the browser and this time the constant message contains the new value that we have just updated so anytime we're going to modify module.js file we're going to see here new log with updated content of that file and by the way all this is happening without full page refreshes but what if I'm not going to use call accept in this module Let's test it out let's comment our this part in the browser I'm only seeing one log which was printed on the initial page load but after I'm going to modify the file module.js in the console we can see only the new lock without all previous outputs and that is because browser has made full page refresh so in this case there is no hot module replacement and again if I'm gonna go back to the editor and comment this code back in then initially here I'm seeing only one log from the module.gs and after I'm going to modify this lock we're still going to see the old lock as well as the new output and in addition to that we got an object which contains updated data of the module so in this case as I'm using accept method in my module anytime where modifying module.js browser is not going to make full page refresh in order to update this module in a browser because all these updates are happening by using hot module replacement technique and now let's consider another example so what if my module.js is going to in bird another module let's emulate this situation let's create the new file and call it submodule.js this module is going to have only one default expert of the random string and then we're going to import this module from within module.js right here and now let's say we want to monitor our changes in all those modules we are important in this module so for example I want to run some code anytime the module submodule.js will change so in here I'm going to use another code to message accept which in this case will have a different shape as the first parameter we can provide an array which consists of all those inputs we'd like to monitor changes in so for example in here I'm going to watch file called submodule.gs so I'm going to include this name in here and then in disclosure we are going to receive an updated content of every module that we are monitoring since in this case I'm monitoring only one module I'm going to destructure this parameter and extract only the content of this submodule file and eventually let's see what will be contained in this new submodule variable which is supposed to give us updated content of the submodule file and before checking it out in the browser I'm going to include consolex statement inside some module.gs for testing purposes so on the initial page load we can see till locks obtained from lowering submodule.js as well as module.js and now let's see what is going to happen if I'm going to modify the content of the submodule.js let's change this message go back to the browser and here I can see the log from submodule.js again because after modifying this file it was executed in the browser one more time and then I'm seeing another lock which contains updated content of the modified submodule.js file and that is because in our parent module which is called module.gs we have registered this listener which monitors for changes inside submodule.js file and when they change occurs it is going to print the updated data of this submodule in the form of an object and if I'm going to make mistake in the submodule name and then we'll do any modifications to this submodule then in the browser I'm still going to see the lock but this lock comes from a different place it is actually this part of code which prints that log entry so just to make it all clear let's comment our this part and modify submodule.js once again and as we can see after modification there are no extra logs in a console because we are no longer listening for changes in the sub module so let's go back to module.js in fix that mistake in this name submodule.js and one more time if I'm gonna go ahead and modify the file submodule.js sure enough in the console we're going to see a new login 3 with an updated content of the submodule file and by the way if we're going to make any syntax errors in our modules then that log which is responsible for showing updated content of the module will print well and Define it instead so if you're planning to use this well in our closure it's necessary to firstly check if the received value actually exists so we're going to wrap this part in the if conditional so now if we're going to make any syntax errors in our modules it will prevent us from potential crashes and it's actually good to do these kind of checks most of the times so let's add the same conditional to this closure so this is how we can leverage method except on the whole object to implement hot module replacement for specific JavaScript modules let's keep learning a bit in the next lesson

### **=>** Disposing hot updates

>

so by now we already know how we can accept HMR updates by using method accept and apply them to our page and this method except has a few signatures first one allows us to accept updates of the model itself and the other signature allows us to accept updates from dependencies of this module in other words from those modules that are imported in this module like we're doing in here where we are monitoring changes inside of submodule.js but there can be such situations where when modules are updated and updates are applied in a browser those updates might also leave some kind of side effects for example those updates might modify Dom structure or change some data in local storage of the browser or even a simple console log statement can also be considered a side effect and sometimes before applying updates of the module in a browser before we need to run some kind of a code which would clean up those side effects left from previous us executions of this module it might sound complicated but in fact it is really simple let's consider one example I'm going to create variable Styles and then let's declare the function add style sheet which is basically going to add Styles into head element on the page so in here I'm going to use Dom API to create Dom element which corresponds to the style tag and then we're going to assign arbitrary styles to the inner HTML property for example let's make background color of the body Indigo and text color will be white and then all we have to do is to append this style element to the Head element like so by using method pen child and of course to apply these changes we have to execute this function once current module will be loaded in the browser so let's call the function add style sheet right here and also let's open up index.html and in here we'll add H1 element so in the browser we see that those stylus were applied and if we take a look at the head element at the end we can see that style element that we have just added so far it looks good but what is going to happen if we're going to modify the Styles in any way for example let's change the color on yellow and take a look in a browser the color was properly applied to the Page by using hot module replacement but in fact if we take a look at the dump structure here we have two Style Elements so the previous style element was not removed and the new one was just added so the previous execution of this module has left side effect in the dome by adding style element but right after we have updated those Styles the previous style tag was not removed So It produced so-called side effect but we didn't clean up that side effect before applying new updates and inserting new style element and as in my healthiest anytime we're going to would do any kind of changes to our module we're going to get the new style element appended to head element so now let's see how we can actually clean up after ourselves and anytime we're going to modify this module the previous style tag will be removed and the new one will be appended and for that let's create new function call it to remove style sheet and all this function is going to do is basically remove Styles Dom element by column remove method like this but the question is where do we actually need to call this function remove style sheet and since this function has to be executed right before we're going to receive new HMR updates lead provides us with another method called dispose that we also call on the whole object and the closure which will be passed into this method should execute all necessary cleanup code to get rid of previous side effects so this is exactly the place where we can call power function remove style sheet to remove style Dom element so now before going back to the browser let's actually reset these Styles as they were initially let's also do a full page refresh to have only one style element on the page so now after I'm going to modify this module in the browser what we will actually see is that before appending updated Styles onto the page the previous style element was removed because that function removes stylesheet was executed inside of a closure of the message dispose which cleaned up our previous side effect before appending new element and just to see at what time those functions are executed let's just Place arbitrary console log statement into function add style sheet as well as remote style sheet so on the initial page load our module was executed and called function and style sheet and therefore new styles were applied to the page and after any subsequent modifications of this module we're going to see that before applying new updates our function removes dollar sheet was executed thanks to that method dispose that we have called on the hot object so the previous styles were removed and then the new styles were added and this way we end up only with one style element on the page let's go back to the editor and remove these two console log statements so by now we know how we can accept hot module updates by using method accept as well as how to remove any side effects before applying new updates by using function dispose and now a couple of words about standard with events that we can listen to and there are several events that we can listen to and all of them are shown on this documentation page so for demonstration purposes let's just register listeners for some of these events as the first parameter we have to specify an event name I'm going to use before update event and as a second parameter we're passing the Handler which is going to take some data received from the server let's just print out this data in the console and then duplicate this piece of code a couple more times to register listeners for other wins such as for after update and for the error went like this and just to make it clear which console log statement corresponds to which listener I'm going to add in here labels before update after update and error so again initially there are no logs that came from those listeners because none of those events were fired on the initial page load because they will be fired once we're gonna modify the module so let's do just that I'm gonna go ahead and change the color of the background and then in a browser we can see that firstly we have received the lock which came from the before update event listener with some metadata about the module which was updated when it was updated and the best to this module so this lock was printed right before we have applied HMR update and after update log was printed after we have applied HMR updates and this event handler also received the same object which describes the module which was updated and just to triggered the error we went we had to make syntax error in this module and then in the console we're gonna see that the error was printed which means the error handler was executed and the data that we have received in here contains the full description of the error and by the way the same error was displayed right here and this is how we can leverage those default events to be able to hook into HMR process and execute particular code at the different stages of HMR updates

### **=>** Vue integration

>

in this lesson we're going to take a look at how we can integrate framework view in vid project so I have already scaffolded default vid project so let's start development server by running npm runev and by the way whil scold in new vid project there is a special command that we can use which will basically scaffold vid project with view framework already integrated but just to better understand this whole process and to see what is going on under the hood we're going to do this manually and the first thing we need to do is of course install all necessary npm dependencies such as framework view itself and vid plugin which will allow us to convert files with an extension. view into JavaScript code so after installing both of these dependencies we need to open our VD configuration file V.C config.js and in here we have to include that plugin we have just installed plugin view into this array by calling this function View and then let's just remove everything from the main.js file and start writing view component so inside of our index.html file we already have an element with an ad of up this will be an element where we're going to Mound our View application so firstly we're going to create the root component up. View and for demonstration purposes we're going to use a very basic example of a counter component so I'm going to create here one reactive variable by running function ref this variable is going to store current value of our counter and inside the template of this component let's add H1 element with a text counter and right under we're going to add a button which will allow us to increment count VAR iable so let's also output develop the account variable in here and register click listener on this button which will basically increment count variable like this so now that we have one view component we need to initialize View application in our main script so in here firstly let's import our root component from the file up. view and also we'll need to import function create up from The View package which is going to be used to initialize our View application and in here let's call this function create app pass in our root component and then call in function Mount and specifying an identifier of that element where we're going to mount our application into and just as a reminder we already have an element with an IDE of up in our index.html so now in the browser as we can see we have a working counter so our View application was properly initialized and now let's take a look at the transformation which wi has applied to our app component I have additionally installed plugin called vid plugin inspect in order to see what transformation V applies to our modules so we can open up this URL in the browser and in here we're going to see all those Transformations done to our modules so whenever we are importing up. view component the plugin is going to take the content of this component and turn all this content into valid Jo script code in other words into the render function which will be called on the client side and render our component on the page and now let's also take a look on the network tab so when browser fetches main.js then it fires the code to the server to fetch the content of the update view comp component but instead of giving us the r content of the update view component vit has applied the plugin to the file with this. viw extension which would transform view template into valid JavaScript syntax and this is the code which is responsible for rendering counter component on the page so as we can see it was very easy to integrate view framework into vid project initially we just had to install two npm dependencies view framework itself and and VD plugin to transform View files into JavaScript code and then we had to include this plugin inside of V configuration file just like any other V plugin and after doing all these steps we have actually provided the full support of the view framework inside vid project so we can develop View application in a normal way by creating components with view extensions importing those components they will be properly transformed into valid JavaScript code and everything will be working fine and this is how we integrate view framework in vid projects

### **=>** React integration

>

in this lesson we're going to take a look at how we can integrate react into vid project so I have prepared an empty vid project which doesn't use any Frameworks so let's get to integrating react and actually before we start there is an option which vid provides us with which allows us to scaffold vid project with react integrated right from the beginning and for that we just need to use value react for this template option and run the following comment but but just to better understand this whole process and how the integration happens we're going to do all these steps manually and before we start we actually have to install all necessary npm packages such as libraries react react Dom and VI plugin which allows us to import react components and after all those libraries are installed we have to open up configuration file V.C config.js and in here let's import the plugin from the VJs plugin react package and then to include this plugin we have to call this function react in this array of plugins like so and that's basically it now we can just start developing react application so everything starts with the main script file main.js let's remove everything from this file and also rename this file on main. jsx since we're going to use Js XX syntax in this file and also we have to fix the pass to this file inside of index.html so let's go here and fix this extension right here as we can see we already have a d with an identifier app this will be a de where we're going to mount react application so let's create our root component we'll call the new file app.jsx and here we're going to use a simple example which will be basic counter component so let's import use State function from react then we're also going to create file with Styles and import them right here and then down here let's define our component function up so this function is going to have only one state variable which will be a counter initial value for this counter will be zero and right here let's define our template for this component so I'm going to add H1 element with the counter text and down below we're going to create the button which is going to increment our counter and just to see if our counter gets incremented we're also going to show this variables Val is the label for this button like so and now we'll register The Listener which will be fired when clicking on this button and inside of this listener we're basically going to update State variable count by incrementing it by one and finally at the bottom of this file let's expert this component as a default expert and also just to check if we will be able to import CSS files with Styles and those Styles will be applied to our components let's create basic CSS file with the name up. CSS and in here I'm going to describe one rule for the H1 element and make the color of this element blue because previously I have already imported this CSS file in our component which is supposed to make this H1 Element blue so now that we have our root component in place we actually have to initialize react application inside of our main script so in here we're going to import react Dom library from the react doome client and also we're going to import our root component up from app.jsx in here we have to pass Dom element where we're going to mount our application into in this case we're going to mount it inside of element with an idea of up and eventually to render this application we're calling method render and as the parameter we're specifying our root component as a jsx and after that if we're going to take a look in a browser sure enough we're going to see work en counter and that means that react application was properly initialized so now just to see what Transformations are being applied to our react components we can use plug-in inspect which I have already pre-installed which allows us to open up this URL in a browser and see Transformations that happen to our Imports so in this case once browser reads main. jsx file then it sees this import of app.jsx comp component then it fires the call to the server to fetch the code of this component and instead of giving us the row content of this component V applies react plugin to convert the content of this component into render function which will be recognized in the browser and then this function runs in a browser in this way we're seeing our counter component on the page and if we open up our inspector and take a look at the transformation which is is happening with our component file we're going to see that this jsx syntax was converted into proper render function which will be recognized and run in the browser and this is it the whole process of react integration into vid project was pretty simple so just to recap we had to install three dependencies react react D and plugin for react and then we had to include this plugin inside vid configuration file in this plugins array and this is what actually allows us to create an import react components in our files so we can start developing our react applications in vid projects as we are used to

### **=>** Deploying Vite project

>

we are slowly approaching the end of the course and in this final lesson we're going to take a look how to deploy with application and the servers for the deployment that we are going to be using is called GitHub pages in fact there are a lot more services which provide support for when it comes to deployment and the deployment process is pretty simple for any of those services so we're going to review deployment steps by using GitHub Pages as always I have already prepared default evid application which we're going to deploy and actually before I get into the deployment we need to make sure that our repository exists on GitHub which in my case it does so we can go directly to the deployment we will not change any default configurations so after building our project all build files will be located inside this folder and this is exactly the folder which is going to be deployed so here in docs let's choose the option deployment moment to GitHub pages and our repository URL corresponds to this format where we have two URL segments first one is our GitHub username and the second one is the name of the repository so the only configuration option we have to specify will be the option called base and this option should contain the name of our repository so let's just go ahead and create configuration file vid.config.js in the root of this project from here we're going to expert configuration object with only one option base where we're gonna specify repository name which in my case is with Dash deployment and once again this is really important that this option value should match repository name on GitHub so now we have to create new commit where we're gonna include our configuration file let's specify an a message and push this commit to GitHub after that let's just make sure that then you commit appears in the GitHub history of our project it is this second commit then let's open up settings tab the main branch of our repository is main so we're gonna deploy this branch and now on the left side let's open up page called pages and in here we have to set up some deployment configurations firstly in this Source drop down we have to choose option GitHub actions and then let's click this link create your own which is basically going to create an empty deployment configuration file let's clear out all these predefined content and specify our run configurations and these configurations are listed in with Docs so we just have to copy over this whole configuration paste it in that file and let's quickly go through some of the options specified in this file in here we can see which branch is going to be deployed and down here there are a couple of steps which will be executed during deployment for example in here we can see that the node version which is going to be used to build our project will be version 18 then we're gonna install all npm dependencies by running npm install after that we're gonna build a project by running npm run build and at the end once this folder with our build files will be created this folder will be deployed to GitHub Pages server then let's just give this configuration file a name for example deploy.yml and click commit changes in here let's make sure that the new commit will be created on the main branch let's click commit changes once again and then we can see another new commit in the commit history that's the commit with the configuration file for deployment we have just created and then if we open up tap actions here we can actually see the new deployment task that is currently running and this is our deployment task so anytime we're gonna push changes to the main branch it will automatically kick off the deployment process and by clicking on this task we can actually inspect what steps are executed during the deployment and once this deployment will be successfully finished we can once again open up settings tab and then go to Pages page and in here we will see the URL where our application will be available on the web so by following this URL we can see that our replication was successfully deployed on GitHub pages and that's it we were able to successfully deploy the duplication on GitHub Pages server as we can see it was pretty simple process and if we decide to deploy our project by using another hosting provider the deployment process is going to be pretty simple as well and with that we are finishing this course about vidbundler
