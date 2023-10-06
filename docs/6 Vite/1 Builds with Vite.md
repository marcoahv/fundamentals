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

### **=>** Path aliases

>

### **=>** Environment variables

>

### **=>** Multi-page app

>

### **=>** Library mode

>

### **=>** Multiple library entry points

>

### **=>** Importing library using require

>

### **=>** External dependencies

>

### **=>** Publishing NPM package

>

### **=>** Image optimization

>

### **=>** Plugin creation

>

### **=>** Plugin options

>

### **=>** Server options

>

### **=>** Hot Module Replacement (HMR)

>

### **=>** Client-server Communication

>

### **=>** Accepting hot updates

>

### **=>** Disposing hot updates

>

### **=>** Vue integration

>

### **=>** React integration

>
