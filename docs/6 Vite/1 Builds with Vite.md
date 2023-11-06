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

- So by now, we have already created an `npm` package and use this package in the client application.
- Let's start the development server by running `npm run Dev` to start our application in the browser.
- The result of using our custom package is shown in a console.
- It basically has extracted user names from the initial array of the user objects, and although that has been implemented in previous lessons, so let's just recall how that works in the main script of our client application.

#### Importing Functionality

- In the main script of our client application, we are importing functionality from our package.
- But not only from the main module of our package, also from the sub-module `log`.
- Currently, the project which contains our package has two JavaScript files: `index.js` and `log.js`.
- Each of these files exports one function.
- These two functions we are actually importing in our client application from different sub-modules.

#### Library Integration

- But as we can see, currently, our package is pretty simple. It doesn't use any third-party libraries.
- In this lesson, we're going to review how to integrate a third-party library into our custom package.

#### Integrating collect.js

- In this file `index.js`, we're going to import the third-party Library called `collect.js`.
- This library has lots of utilities to work with arrays of objects.
- We're going to leverage this function inside our `log` function.
- Firstly, let's rename this function to `plug` and `lock`.
- Then we'll basically do the same, which is extract a key from each object of the collection.
- But this time, we're gonna use `black` method on our collection, provided by the `collect.js` library.
- We'll basically do the same here but by using the `black` method which the `collect.js` library provides us with, like so.
- Besides returning this result, we're also going to log the result in this function.
- Right after we return this result.

#### Building the Library

- Let's see what is going to happen if we try to build this library.
- In the terminal, let's run `npm run build`.
- We are receiving the following error that the `collect.js` library cannot be imported since this library does not exist in our package.
- What we need to do is to actually install this library by running `npm install collect.js`.

#### File Size Increase

- Now, once I'm gonna start the build process once again, this time it worked.
- We still see four build files, but this time we can notice that the sizes of some files drastically increased.
- For example, the size of the main file `index.js` is now almost 60 kilobytes.
- That is because when we were importing the library `collect.js` in our script, it has actually taken the whole source code of the third-party library and put it in the build.
- Which is why the resulting file of our library has a much bigger size now.

#### Using the New Function

- But before we'll solve this problem, let's just import our new functions `plug` and `lock` in the client application and see if it's gonna work.
- So now, we don't need to additionally call the `log` function in order to print results in a console.
- Because the new functions `black` and `lock` are going to extract keys from every object of the array as well as print the result in a console.
- In the console, as we can see, we are seeing the expected result.
- With the difference that our result is contained within the `items` property of the wrapper object.
- That's how the `collect.js` library works.
- It returns us not only the resulting array but an object which wraps our collection.

#### Optimizing Library Building

- But this is not the most optimal solution for building our libraries.
- Because anytime we're going to import a third-party library, the file size of our library will be drastically increased.
- So let's see what we can do about it and what `Vite` has to offer in this regard.
- So moving on, let's open up the configuration file `vite.config.js`.

#### Using External Libraries

- In here, we're gonna add another option which is called `rollup options`.
- It will be an object with the key `external`.
- This is where we have to specify library names which we don't need to be bundled along with the core of our library.
- Since by now we're using only one third-party library called `collect.js`, I'm going to include only one name in this array like so.

#### Reducing File Size

- Let's watch the size of the bundled file `index.js`.
- Currently, the size of the `index.js` file is around 60 kilobytes.
- After I rerun the build process by executing `npm run build`, this time we see that the file size was drastically dropped.
- If we're gonna take a look at the content of the build file `index.js`, we're seeing only our code in here and the import of the `collect.js` library.
- But the source code of this library is absent, and which is why we don't even need to install the library `collect.js` in our project.

#### Removing Dependency

- Let's remove this dependency by running `npm uninstall` and the dependency name.
- Let's just rerun the build process of our package once again by executing `npm run build`.

#### Cache Dependency

- Now, if we'll go to the browser and check the result in our client application again.
- We're supposed to get an error since our package relies on the third-party library `collect.js`.
- But that library was not included in the build version of our package.
- But surprisingly, as we can see, we didn't receive any errors.
- The reason it worked is that previously when we started the development server, `Vite` has gone ahead and cached some dependencies in the folder `.vite`, which is inside of `node_modules`.
- This folder has a cached version of the library `collect.js`.
- So let's just go back to the editor, open up the `node_modules` folder of our client application and remove the folder we cached.
- The dependency is called `.vite`.

#### Restarting Development Server

- So now, let's restart the development server in the client application.
- We are receiving an error that dependency `collect.js` cannot be imported since it is missing from our client application as well as from the build file of our library.
- The first thing that comes to mind is to actually install this library into our client application.
- So let's do just that.
- I'm gonna execute `npm install` and specify Library name `collect.js`.
- Then after running `npm run Dev` again, we're receiving a different error, similar, but this time it could not resolve imports of our own package `block`.
- Because the link to our package, which we have previously added to the `node_modules` folder of the client application by executing `npm link`, is gone for some reason.

#### Adding Back the Link

- Let's just add the link to our package inside the

`node_modules` folder one more time by running `npm link` and our package name.

- I am not going to explain in detail what this command is doing since we were talking about it in one of the previous lessons.
- So now that we have added back the link `block`, which points to our package inside `node_modules` folder.
- We can try to start the development server once again.
- And again, the previous error is back, that it cannot resolve dependency `collect.js`.
- So we're going to solve this problem in the next lesson when we will publish our package to the `npm` registry.
- Then instead of using `npm link` to make our package available to the client application.
- We're going to install our package as any other third-party dependency by running `npm install`.

### **=>** Publishing NPM package

- It's finally time to actually go ahead and publish our package into the `npm` registry.
- As a reminder, we are already importing functionality from our package in the `main.js` file of our client application.
- We made it possible by linking our local folder with a package to the `node_modules` folder of our client application by running the following command: `npm link` and the name of the package we'd like to link to our client application.

#### Logging into npm

- Now, instead of linking our local library, we're actually going to go ahead and publish our package to the `npm` registry.
- First of all, what we have to do is to log in.
- Let's run `npm login` in the root of our library.
- We will be presented with a couple of prompts.
- Here we need to type in the username as well as the password that we have used to register on the `npm` website.
- A side note: we need to be registered up front in order to log in to `npm`.
- Then we also have to enter our email address.
- Right after, we will receive the code on our email.
- As soon as we see this message, that means we were successfully authenticated.

#### Preparing to Publish

- Let's switch over to my browser, and right here as we can see, I don't have any libraries in my `npm` account yet.
- So let's start the process of publishing our library to `npm`.
- First of all, let's go and open up the `package.json` file of our library.

#### Setting Package Name

- Here, the first thing that I'm going to do is rename the value under the key `name`.
- Besides the name of our library, I'm also going to use a namespace.
- This namespace should match the username of the logged-in user.
- What this will do is it will basically make sure that we are not going to get any naming collisions.
- There is a high chance that the package with the name `plug` already exists on `npm`.

#### Publishing the Package

- Now, in the terminal, to publish the package, we have to run `npm publish`.
- This time we get an error saying that our library is considered to be private.
- The reason is that in the `package.json` file, we have the key `private` with a `true` value.
- So let's remove this key and run `npm publish` again.
- It looks like publishing private packages is actually a paid feature.
- When running `npm publish`, we have to specify one flag called `access` with an access modifier.
- In this case, I'm going to use `public`, so this way our library will be publicly visible.

#### Successful Publication

- Finally, the command has finished with no errors.
- If I switch over to the browser, I can see that my library was published.

#### Updating the Client Application

- Next, let's go back to the editor inside the client application.
- Let's open up `package.json`, and here, let's remove the only dependency, `collect.js`.
- We're also going to remove the folder with this dependency from the `node_modules` folder as well as the special folder `.vite` that `Vite` generates to store cached dependencies.

#### Installing the Published Library

- Now, in order to install the library I have just published, we can use `npm install` and the full Library name.
- The full name is stored in here under the `name` key of the `package.json` of our library project.
- So let's see what is going to happen when we run `npm install` and our library name.
- As we can see, the library was successfully installed.

#### Updating Import Paths

- Now I can run the development server by running `npm run Dev`.
- And here, I see the following error saying that some of the dependencies were not resolved.
- Those dependencies are from our library.
- The reason is that currently our client application, inside `main.js` file, references old paths to import functionality from our library.
- We have to properly update this import path by specifying the full Library name.

#### Fixing the Build

- Let's start the development server again.
- This time, we got a new error.
- To understand what's going on in here, let's open up the folder with our package inside the `node_modules` folder of our client application.
- Here we can see that there is no folder `dist` with the built assets of our library.
- But, in fact, inside the `package.json` file, we are referencing these files from the `dist` folder because those are the files that have to be imported when users are going to import functionality from our library.
- So we actually have to do one more thing before publishing our package to `npm`.

#### Specifying Files to Publish

- Let's go back to the `package.json` file of our library.
- In here, we have to specify the key `files`, where we can list all the files and folders that have to be published.
- In our case, we only need to publish the folder with the build assets, which is this.
- So I'm going to specify one folder name in here.
- And then once we do any change to our library, I'm also going to have to republish this library but with a different version number.
- We could update this version manually, or we could use an `npm` command called `npm version`.
- So we also have to specify which version number we'd like to update, either the first one, second one, or this third one.
- In this case, it's not really important which one we're going to update, so I'm going to update the third one.
- The word responsible for updating the third number is "patch".
- Let's run this command.

#### Updating the Version Number

- As we can see, our version number was updated.
- Also, this number was updated inside `package.json`.
- To grab the new version of this library in the client application, we have to reinstall it.
- Before installing the new version of this library in the client application, let's go inside the `node_modules` folder of our client application and manually remove the folder of our library from here.
- Right after that, we are ready to install a new version.
- Let's run `npm install` and our library name.

#### Automatically Installing Dependencies

- What actually happened this time is this: besides installing our library, we can see that inside the `node_modules` folder, there is a `collect.js` folder.
- Which means dependency `collect.js` was automatically installed along with our package.
- The reason it was installed automatically is because we have previously specified this dependency under `peerDependencies` key inside our library.
- So from now on, when any client application is going to install our library, the dependency `collect.js` will be automatically installed.

#### Successful Testing

- Finally, if we run the development server inside our client application, eventually it worked.
- In the browser, we can see an expected result in a console.
- Let's see if the production build is also going to

work.

- I'm going to run `npm run build` to build this client application.
- The build has finished without errors.
- That's good.
- Now let's run this build in the browser by running `npm run preview`.
- And then by opening up this URL, we see the same result as in development mode.
- So we were able to successfully publish our package to `npm` registry.
- Additionally, our package contains an external dependency, `collect.js`, which is not bundled with our library.
- So all client applications that are going to use our library, once they're going to install our library, all third-party libraries which our library depends upon, which in this case is only one dependency, `collect.js`, they are going to be automatically installed.
- That's about it for this lesson.

### **=>** Image optimization

- In this lesson, let's review how we can optimize images by using Vite.
- For that, I already prepared a default Vite project. Let's open it up in the browser and start.

#### Initial Preparation

- At the beginning, as always, let's just do a little preparation.
- Let's switch over to `index.html` file.
- Here, I'm going to add an image.
- In order for this image to not exceed the available widths of the browser, let's assign `width: 100%`.
- Then, what we're gonna do inside `main.js`?

#### Image Import and Assignment

- Firstly, let's clear everything from here and import an example image which I'm going to add in this project in a bit.
- So then, once we get the path to this image inside the `image` variable, let's just select the DOM element of that image we have just added and assign the path of the image to the `src` attribute like so.

#### Adding the Image

- Let me just quickly add an image to this project. Here it is.
- This is how our image we're going to optimize looks like.
- In order to easily see the size of any file within VS Code, we can use the following extension.
- I already have this installed, and the way this extension works is it just shows the size of an active file in the status bar at the bottom right corner.
- I currently have my status bar hidden, so let me just enable it.
- Right here, I can see the original size of this image. As we can see, this image is quite big, and the size exceeds one megabyte.
- Now, before proceeding further, let's switch over to the browser and make sure that this image shows up and everything looks good. We can continue.

#### Image Optimization Plugin

- In order to optimize images, Vite has several plugins, and one of them we're gonna use in this lesson.
- I'm going to use a plugin called `vite-plugin-image-optimizer`.
- This plugin relies on two other libraries, `sharp.js` and `svgo` for image optimizations.

#### Installing the Plugin

- So here, first things first, let's just install this plugin by running the following npm command. I'm gonna copy over this command and run it in my terminal.
- And then, since this plugin relies on two other libraries, those libraries have to be manually installed. So one by one, I'm going to copy these commands to install these two libraries.
- Firstly, let's install `sharp`.
- Right after that, let's also install another library, `svgo`.

#### Configuring the Plugin

- And once the installation process is finished, we have to configure this plugin. The way we do this is by inserting this configuration into our Vite configuration file.
- Currently, I do not have this file, so let me create it and paste in here all that configuration. There is nothing special about this configuration.
- The most important thing here is that we import and include our new image optimization plugin and add it to the build pipeline.
- Actually, this plugin allows us to configure a lot of things, but we're not going to review any possible configuration options.
- Instead, let's just see how to optimize an image with an extension `.jpg`. So let me copy over this configuration option and paste it into my `vite.config.js`.
- By using this option `quality`, we can configure how much we want all jpg images to be optimized.
- As an example, let's specify 80.
- And by the way, image optimization only happens when building the project for production.
- So I'm gonna have to run the build by using `npm run build`.

#### Building for Production

- And right here, we can see the new output. This is the result of that image optimization plugin.
- And right away, we can see in here that two images were optimized. The first image is the image we just added to the project, and another one, `vite.jpg`, is a default one which resides inside the `public` folder by default.
- So as you can see, the size of the first image was reduced by around 300 kilobytes.
- And now, to see the result in the browser, I'm gonna run `npm run preview` to open up the built project in the browser.
- By following the address `localhost:4173`, we can see in the browser the built project.

#### Checking the Optimized Image

- And there we go, we got here an optimized image. But the size here is a little bit different than the one we have just seen in the terminal.
- Anyway, our image optimization worked.
- So now, let's just change the value of the `quality` configuration option. For example, let's specify `40`, and then rerun the build by running `npm run build`.
- This time, the image size was reduced even more.
- And of course, if I open up this build in a browser, we can see in here the newly optimized image with a size of 392 kilobytes.

#### Image Optimization Results

- Let's review in the editor. Let's open up the original image with the name `image.jpg`.
- And as we can see, the original size of this image was over one megabyte.
- But then, when building the project for production, the size of this image was dropped to 344 kilobytes.
- Actually, the point of this lesson was not to show you how this particular plugin works, but how to include any plugin into Vite.
- Because the installation process as well as configuration will be pretty similar.
- And of course, this is not the only plugin which allows you to optimize images. There are also other choices.
- So we just have to pick the plugin that satisfies our needs and then follow simple steps to install and configure this plugin.
- And then, we'll be good to go.

### **=>** Plugin creation

- In this lesson, let's explore how we can create our own Vite plugins.
- I have already created a default Vite project. Let's run the development server.
- To make things a little bit easier while developing our plugin, let's use another plugin called `Vite plugin inspect`.
- This plugin will provide us with an inspector view where we can see all the transformations that are going to be applied to our modules by all plugins, including our own.
- Let's quickly install this plugin by using npm and run this command in the terminal.
- Then, let's copy over this code to include this plugin. Let's create a configuration file called `vite.config.js` and paste in here that code.
- Now, we'll have to restart my development server by running `npm run dev`.
- In here, besides our app URL, we can also see the inspector URL. By opening up this URL in the browser, we can access our inspector.
- So, if we see this page, that means our inspector was installed successfully. We can continue.

#### Creating Our Own Plugin

- We're going to create our own plugin, which is going to allow us to import CSV modules and transform CSV code into valid JavaScript arrays.
- We're going to use the Node.js Library called `node-csv`. The specific library we need is called `CSV parse`.
- Let's install this library by running the following npm command in our terminal.
- Before actually getting into writing our plugin, let's do a little preparation by adding an empty `pre` tag in our HTML file.
- Then, let's switch over to `main.js` and remove everything from here. We're going to start from scratch.
- What we're going to do in here is try to import the CSV file we're going to create soon.
- We're going to add this CSV file to the project.
- Here, I'm going to insert some random data. We're going to work with products and their quantities.
- The first line will contain names of the columns of the CSV file.
- On other lines, we'll contain the data for every column.
- By default, Vite does not support importing CSV modules.
- So when we switch over to the browser, we'll actually get an error because our server responds with the raw content of the CSV file.
- This import didn't work.
- So, before actually importing CSV modules, we have to apply a custom transformation, which would transform CSV code into a valid JavaScript array.
- Our transformed JavaScript array could be assigned to the `products` variable.
- Now, the main part of this lesson is creating the Vite plugin.
- A Vite plugin is basically an object that we should add to the plugins array in our Vite configuration file.
- Firstly, we'll have to specify the name for our plugin. I'm going to use `vite-plugin-csv`.
- Most importantly, we have to provide a special function called `transform`, which in our case will be asynchronous.
- This function will be called automatically by Vite whenever we're going to import any modules inside JavaScript files.
- The first parameter of this hook will be the content of the imported module, and the second parameter will be the path to this module. I'm going to call these parameters `source` and `id`.
- Once we have fetched the content of the CSV module, we need to transform this CSV code into a JavaScript array.
- We can do this by using a function called `parse`. This function is going to be imported from the `csv-parse` module.
- To this function, I'm going to pass a configuration object with only one option, `columns`. This option will tell the `parse` function that our CSV code contains the names of columns as the first line in our CSV file.
- Let's add an import for the `parse` function from the `csv-parse` package in the sync submodule.
- By following conventions of Vite, the `transform` function has to return an object, which should have a key called `code`. In here, we have to provide valid ECMAScript code, which is supposed to be exported when people are going to import CSV modules in JavaScript files.
- This hook `transform` is going to be called anytime we're going to import any module inside JavaScript files, not only CSV files. We have to restrict execution of this hook to only CSV modules by adding a conditional and wrapping all the code by this conditional.
- We're going to use a regular expression to check if the currently imported module is indeed a CSV module. Only then, we're going to run this transformation; otherwise, our plugin is not going to do anything when importing other modules.
- Let's also print some variable values for clarity. For example, `source`, `id`, and the `records`.
- In the browser, there is no error anymore while importing CSV modules. Instead, we got transformed CSV code into a JavaScript array on the page. Let's make this output a little bit prettier by adding the style `white-space

`with the value`pre-wrap` to place the content on multiple lines.

- The request which was supposed to fetch the CSV module from the server in the response shows that the response was turned into a valid ECMAScript module, which exports an array of objects.
- This array contains objects for every line from the CSV file.
- In the server console, we can see the result of these variables. These variables correspond to the `source`, `id`, and the `records`.
- This is the result of outputting that variable in the server console.
- One more time, while importing a CSV module in our JavaScript file, we got transformed CSV code into a JavaScript array.
- This JavaScript array was assigned to the `products` variable, which later was stringified and assigned to the `textContent` property of the `pre` tag.
- Now, let's take a look at the transformation of our custom plugin that was applied to the CSV module.
- Let's open up the inspector and click on our module `products.csv`.
- We see the transformation, which corresponds to the name of our plugin `vite-plugin-csv`.
- Our plugin has read the content of the CSV file and transformed this code into a valid ECMAScript module.

#### Conclusion

- We have successfully implemented our custom Vite plugin, which allows us to import CSV modules in JavaScript files.

### **=>** Plugin options

- In the previous lesson, we have implemented the plugin which allows us to import CSV files inside of ecmascript modules.

#### The Plugin Structure

- The way it works is as follows: whenever we import CSV file the CSV synex gets transformed into JavaScript array of objects.

#### Organizing the Plugin

- But currently our plugin is kind of inlined inside of vid configuration.
- Usually, plugins are extracted into separate JavaScript modules in the form of a factory function.
- So let's try to move it into a separate file just like it is done for the inspect plugin.

#### Setting up the Plugin

- Here we're just importing this plugin and then colon it inside this plugins array.
- So we're going to do the same with our CSV plugin.
- Let's just cut this whole object, create a new file for this plugin in the root of our project, let's call it vid plugin CSV.
- This module is going to export one function which will be a factory function for our plugin.
- Here we're going to paste that whole object with plugin definition.
- Let's also move that import that we need in this plugin of the function `parse`.
- Since this function `parse` gets imported from the sync subm module, there is no need to make our transform hook a syncronous.
- Let's also rename this plugin to simply `CSV`.

#### Including the Plugin

- Let's get back to our vid configuration and include this plugin by firstly importing the factory function from `vid-plugin-csv` file.
- Then, just like it is done for the inspect plugin, right next to it, we're going to call our Factory function `CSV`.
- This way, we have just included our own plugin.
- Please note that there is no difference between including plugins in line in the form of JavaScript objects or by moving them into Factory functions.

#### Testing the Plugin

- Just to make sure that our plugin works as expected and we got the same result as before, let's run the development server and take a look in the browser.
- As we can see, we get the same data. That means our plugin works as before.

#### Exploring Existing Plugins

- Now a couple of words about existing plugins that exist in V ecosystem.
- First of all, there is a list of official plugins provided on the official documentation page.

#### Rup Plugins

- V internally uses another bundle called rup to build projects for production.
- There are a bunch of Rup plugins that are compatible with VD projects.
- The list of Rup plugins compatible with VD projects can be found on this page.

#### Community Plugins

- Besides official rup and VD plugins, there are countless plugins built by the community.
- For example, there is some rup repository which has a collection of resources specifically for rup.
- This page also includes a list of community plugins.
- A similar page also exists for V. This repo is called awesome vit.
- Here we can find a bunch of links to everything related to V projects as well as plugins developed by the community.

#### Plugin Options

- Now let's go back to our plugin configuration and consider a couple more options that we can use for our plugin.
- An important option is called `apply`, and this option allows us to specify which environment our plugin should be included into.

#### Apply Option

- For example, if we'd like to use this plugin only during development, we can specify `Val serve` for this option.
- This way, the plugin will only be activated while we are running the development server.
- By using another keyword called `build`, it allows us to include this plugin only in production builds.
- In other words, when we are running `npm run build` to build the project for production.

#### Using Closure

- Besides specifying predefined values for the `apply` option, we can also specify a closure which gives us more fine-grain control.
- Closure accepts a couple of parameters, first of which will be a configuration object.
- Another parameter will also be an object with a couple of useful properties, such as `common` and `mode`.

#### Customizing the Plugin

- Let's just print out each of those variables to see what they contain.
- By looking in the console, we can see that the first parameter basically printed the whole configuration object.
- `common` variable stores `Val serve`, and `mode` variable stores `Val development`, since we are currently running it in development mode.
- Based on these values, we can do extra checks.

#### Accessing Configuration Object

- There may be situations where we need to access the configuration object in other hooks.
- For example, in this `transform` hook.
- How do I get access to this configuration object from other hooks?
- There is another hook that V provides called `config resolved`.
- This hook will be called automatically before the `transform` hook and it receives a configuration object.
- This configuration object can be stored in a variable so it will be accessible to other hooks.

#### Using Config Resolved Hook

- I'm going to declare a variable called `config` before returning configuration for this plugin.
- Inside `config resolved` hook, I'm going to assign the resolved configuration object to this variable `config`.
- Then it's accessible from other hooks.
- Based on configuration values, we can easily do extra checks in this `transform` hook.

#### Customizing the Parsing

- For example, let's compare `val serve` with the value stored in the `common` variable.
- Based on that, we're going to specify this value as the value for the `columns` option for the `parse` function.

#### Testing the Transformation

- Now let's take a look at the difference.
- Firstly, let's run our development server and check the result of how our CSV code was transformed.
- As we can see, we got an array of objects where every key corresponds to the field from the CSV file.
- Every such object corresponds to an individual line from the CSV file.
- If I'm going to run the development build, in this case, we're supposed to get a different result.

#### Transforming HTML Content

- Let's run this production build in the browser by running the preview server.
- As we can see, the output is different in this case.
- The first element of this array is another array which consists only of column values from the CSV file.
- All other elements store values from individual rows of the CSV file.

#### Transforming Index HTML

- Now let's review one more useful hook which basically allows us to transform HTML content.
- This hook is called `transform index HTML`.
- It is about to receive the whole content of the HTML file.

#### Modifying HTML Content

- In here, we can do all necessary transformations with the content of the HTML file.
- Let's replace the closing body tag with the following.
- I'm going to put a basic script at the end of the body element which will open up a dialogue with the word "hello" like so.

#### Proper Hook Placement

- It is very important to position all the hooks on the same level.
- So the `transform` hook as well as `transform index HTML` hook should be included on the same level like this.
- Now after running the development server in the browser, we can see that firstly we got an

alert with the word "hello".

- Our transformation of the HTML file was successful.

#### Conclusion

- In this lesson, we have only reviewed a couple of hooks that we can leverage in our plugins.
- But, in fact, there are a lot more such hooks, and documentation about those can be found in the official vid documentation.
- Even only using these hooks, we get a lot of flexibility and we can transform imported modules in whatever way we like.
- Let's continue learning about V in the next lesson.

### **=>** Server options

- Let's consider several options which allow us to configure the development server.
- When we start the development server by running `npm run dev`, it starts using Port 5173.

#### Dynamic Port Allocation

- If we run another copy of this server, the port will be changed dynamically because the previous Port 5173 was already taken by the previous copy of the development server.

#### Custom Port Configuration

- Of course, this port is configurable, and just like other configurations, we can override the port in the vid configuration file.

#### Creating a Vid Configuration File

- Let's create an empty vid configuration file.
- In here, we're going to specify an object under the server key where we can configure several aspects of the vid development server.

#### Specifying the Port

- For example, I want the port to be 3333.
- Now after running `npm run dev`, we can notice that the port we just specified was used for the development server.

#### Dynamic Port Allocation

- Still, if we're going to launch another copy of this server, the port will be changed.
- This is a pretty convenient behavior.

#### Restricting Port Usage

- But in case we'd like this command to serve an error if the specified port was already taken, we can specify another configuration option called `restrict port` with the value `true`.
- Now, if we launch one instance of the development server and then try to launch another instance, it will throw an error because Port 33333 is already in use.

#### Custom Headers

- Another option called `headers` allows us to specify custom headers for responses.
- As an example, let's specify one header with a name `a`.

#### Viewing Custom Headers

- In the browser, it will inspect the request for fetch in the current page.
- Under the response headers, we are noticing our custom header `a`.
- This header will be added not only in the response for fetching the current page but also for fetching other assets such as JavaScript files.

#### Using the Proxy Option

- Another interesting option is called `proxy`.
- This will allow us to provide custom URLs which will be accessible from our Dev server.

#### Redirecting Requests

- For example, I want to use the URL `/products` to fetch a list of dummy products during development.
- We can achieve this by specifying a custom option `proxy`.
- This option holds an object where keys are addresses that would like to be accessible, and the values for those keys will be addresses that the dev server is going to redirect those requests.

#### Using a Dummy API

- For this particular example, I'm going to use a third-party server called `damages.json` which provides us with a dummy API.
- It gives us a set of dummy endpoints which we can use during our local development.

#### Custom Proxy Configuration

- Besides specifying only addresses for keys inside a proxy object, we can also provide more detailed configuration in the form of an object.
- For example, I want to have an API route in my development server which is going to redirect me to that same damages.json service but while redirecting me to these servers, I don't want to include the API segment in the address.

#### Modifying the Final URL

- I'm basically going to modify the final URL which is going to be used to make a request to the damages.json API by completely removing the API segment from the URL.

#### Handling Different Origins

- This configuration is going to allow me to do the following type of requests.
- For example, if I'm going to refer to `/API/products`, since the API segment will be removed, the resulting URL will be as follows.

#### Custom Origin Configuration

- So now let's try to call this URL in the browser `/API/products`.
- This time I'm receiving an error with an error code of 500.
- This error has something to do with different Origins.

#### Handling Different Origins with `change origin`

- Without getting too far off the topic, the documentation suggests us to use another option `change origin` with the value `true` to avoid errors related to different Origins.
- Now, if I'm going to make that same request on `/API/products`, I'm receiving the list of products.

#### Expanding on the Proxy

- But this time we can do even more.
- For example, let's use a different URL.
- Let's try to fetch a list of posts by using `/post` URL.
- To do this, I simply have to change this segment to `post`.

#### Custom URLs and Response

- As we can see, it has worked, and we got a list of posts in the response.
- For now, we will only specify all configurations for the server under the server key in the configuration file.

#### Overriding Configurations for Preview Server

- But we can also assign separate configurations for the preview server.
- Let's build this project for production by running `npm run build`.
- Then run the preview server by executing `npm run preview`.

#### Default Port for the Preview Server

- As we can see, the default Port of the preview server is 4173.

#### Overriding Preview Server Configurations

- Let's just try to overwrite some configurations for the previous server.
- For that, I'm going to copy over this object, paste it down here, and rename the `server` option to `server on preview`.

#### Customizing the Preview Server

- This configuration will only be applicable for the preview server.
- Let's change something in this configuration.
- For example, let's use a different port, remove this `headers` object, and add another option called `open`.

#### Specifying a Custom URL

- Here we can specify which address should be open in a browser by default after starting the preview server.
- I'm going to specify our custom URL `/API/products`.

#### Utilizing Proxy Configuration

- Just because we have previously configured proxy, a request was made to the following URL `/API/products`, and we get the list of products on the page.

#### Overriding Preview Server Configurations

- This is how we can override configurations for the preview server as well as for the development server.
- In fact, there are many more configurations for configuring servers, and all of them are described in detail in the official vid documentation.

### **=>** Hot Module Replacement (HMR)

- In one of the previous lessons, we have implemented the custom `with` plugin.
- It allows us to import CSV files inside JavaScript modules.

#### Importing CSV Files

- Inside our main JavaScript file, we are importing the file `products.csv`.
- The content of the CSV file will be transformed by our plugin and turned into an array of JavaScript objects.

#### Configuration in Bit Configuration File

- From the code point of view, it looks like this.
- Inside the `bit` configuration file, we are including this plugin by calling Factory function `CSV`.
- We import it from the `with` plugin CSV file.

#### Plugin Implementation

- Let's open up this file and take a look at the implementation.
- Here, we're basically using the hook called `transform`.
- It will be called by Vite anytime we are going to import CSV files in ECMAScript modules.
- We're converting the raw content of the CSV file into a valid JavaScript array of objects by using this function `parse`.
- At the end, we are returning a valid script module to the client.
- It contains the data from the CSV file in the form of an array of JavaScript objects.

#### Content of `products.csv` File

- Here is how our `products.csv` file currently looks like.
- We are importing it in our main JavaScript file.

#### Injecting Content

- Then, we're injecting the content that we have received after importing that CSV file into the pre-tech.
- That's why we're seeing the content of the CSV file on this page.

#### Limitation of Page Refresh

- If we update the content of the CSV file, it will cause a full page refresh of the browser.
- Let's create an arbitrary constant `plugin` and see if this constant will still be available after we modify the CSV file.

#### Modifying `products.csv`

- Let's make any modification to the content of the `products.csv` file.
- For example, I'm going to add another row.

#### Checking Constant Availability

- In the browser, let's see if the plugin constant is still available.
- First of all, we see that the new line added to the CSV file appeared on this page.
- However, the plugin constant is undefined because the browser has made a full page refresh to update the content on the page.

#### Implementing Hot Module Replacement

- Now, we're going to implement support for so-called hot module replacement for our plugin.
- This technique allows us to update modules that are modified without doing a full page refresh in the browser.
- It's called HMR, which stands for hot module replacement.

#### Using the `handleHotUpdate` Hook

- To implement hot module replacement for our plugin, we need to use another hook provided by Vite called `handle hot update`.
- This hook will do a synchronous operation.
- Let's mark this function as an `async` function.
- The first parameter into this function will pass a context object.

#### Condition for Updates

- We don't need to listen for all updates but only for updates that happened to CSV files.
- Let's use the same condition we have used in the transform hook.
- Check if the modification has been done to the CSV file.

#### WebSocket Connection

- In order to implement hot module replacement, we need to leverage a WebSocket connection.
- We'll fire a custom event to the client using the `send` method on the WebSocket object.
- We specify a custom configuration for this event.

#### Custom Event Configuration

- Let's specify the type, which will be a custom event name, `CSV-Update`.
- We can use any kind of name we like.
- Later, we're going to listen to this event in the client code.
- We also have to specify the `data` key.
- This key will store the content that we're going to send to the client.
- For now, let's read the content of the updated CSV file by calling the `read` method on the context object.
- Since this method is asynchronous, we have to `await` the response and then assign it to the `data` property.
- Right after that, we need to notify Vite that we are going to take care of hot module replacement ourselves.
- We do this by simply returning an empty array from this method.

#### Testing Hot Module Replacement

- Let's try it out one more time and check if the constant that we're going to declare will be available even after we modify the `CSV` file.
- I'm going to remove the last line of the CSV file and check if the plugin constant is still available.

#### Verifying Hot Module Replacement

- As we can see, it is still defined.
- That means the browser hasn't reloaded the page.
- We also haven't seen any changes to the content on the page because we are currently not listening to the custom event that we are firing from the server.

#### Listening for Custom Event

- This was the first part of implementing the hot module replacement, which is firing an event from the server to the client.
- The next part is to actually listen for this event on the client side.

#### Client-Side Implementation

- I'm going to switch over to the client script.
- First of all, let's check if the object responsible for hot module replacement exists.
- This object is stored on the `meta` property of an `import` object.
- If it exists, we're going to register a listener for the custom event we specified on the server with the name `CSV-Update`.

#### Receiving Data

- As a second argument to your function, we have to pass a closure with one parameter.
- This parameter will store the data we specified under the `data` key while sending this event.
- Let's check what we're going to receive in this data parameter.
- I'm going to print it out in the console.

#### Testing Data Reception

- As we can see, I have three products in my CSV file.
- Let's go there and change the content.
- After that, in the browser, we can see that the console shows the new content of the CSV file, including our latest product edition.

#### Updating Content on the Page

- Now, we're going to get two updates on the actual page because after the CSV file is modified, we need to properly change the content on the page.
- In our client script, I'm going to copy this line and paste it into this handler.
- Anytime we're going to receive the new content from the server, we're going to update the content of the pre-tech by assigning the updated content.

#### Transforming CSV Content

- But currently, this content will be passed as the raw content of the CSV file.
- What we need to do instead in our plugin is to transform CSV content into JavaScript array by calling the function `parse`.
- Just like we have done in the `transform` hook.
- Let's wrap the content of the CSV file in the `parse` function call.

#### Successful Hot Module Replacement

- Initially, I have four products in my CSV file.
- Let's remove the last product from here and see how it will be reflected in the browser.
- As you can see, the content was changed.
- Now,

instead of four products, I have only three, which corresponds to the latest content of the CSV file.

- Our hot module replacement worked.

#### Adding Structured Data

- Now, as soon as I do any kind of modifications to the CSV file, I'm going to see those changes reflected on the page.
- We can also do one little improvement to our plugin by passing structured data to the client.
- I'm going to send an object with two properties.

#### Sending Module Update Info

- The first property will be `URL`, and the second one, `data`.
- `URL` will store the path to the module that was updated.
- `data` will store the new transformed content of the updated module.
- Let's add a more descriptive message on the client side in the console.

#### Data Destructuring

- Here, we have to destructure two properties, `URL` and `data`.
- These are the two properties we have specified in the source code of our plugin.

#### Verifying Structured Data

- Let's check it out one more time in the browser.
- We'll create a constant `plugin`, and if this constant is available, it's a sign that the browser hasn't done a full page refresh.
- After modifying the content of the `products.csv` file, we can see that it was reflected on the page.
- We also see the new log which shows the paths to the file that was updated.
- And, of course, the constant `plugin` is still available.
- Our hot module replacement for CSV files works great.
- This is how we can implement hot module replacement in Vite projects by using the `handle hot update` function in our plugin.
- Then, sending a custom event via WebSocket to the client with an appropriate payload.
- On the client side, we register the listener for this event, receive updated data, and apply hot module replacement updates.

- This was one of the ways to implement hot module replacement indeed.

### **=>** Client-server Communication

- Now, let's see how it allows us to establish client-server communication.
- Just like in the previous lesson when we were using the hook `handle hot update` to implement hot module replacement feature for our plugin.

#### Using WebSocket Object

- In here, we were using the `WebSocket` object to send events to the client.
- And then, we also had a chance to specify which data exactly should be sent along with this event.

#### Registering Listener in Client Script

- In our client script, we have registered a listener for this event.
- We accept the data received from the server.
- And then, we were able to do anything we want with this data to implement hot module replacement.

#### Using the `configureServer` Hook

- Besides using the hook `handle hot update`, which will be called only when any module that we are importing in JavaScript files will be changed.
- We can use another hook that allows us to configure the server.
- This hook is called `configureServer`.
- It accepts a server instance as the first parameter.

#### Accessing WebSocket Connection

- By using this `server` object, we can also access the WebSocket connection.
- Just like previously, we can set up a listener for all kinds of events.
- For example, there is a default event called `connection`.
- It will be fired whenever our WebSocket connection will be established.

#### Listening for the `connection` Event

- So, we can try listening for this event.
- And once we establish a WebSocket connection, let's send an event to the client with the name `connected`.
- As a payload, we can send a simple message, "Connection established."

#### Registering Listener in Client Code

- To be able to listen for this event from the client code, we have to register a listener by using an object called `hot`.
- Here, we also call the method called `on`.
- As the first parameter, we have to specify the event name that we will be listening for.
- In the second parameter, we specify the closure, which will be our event handler.
- So, the closure is going to receive the payload sent from the server along with this event.

#### Testing the Communication

- Now, let's see what will be printed in a console.
- I'm going to switch over to the browser.
- As we can see in here, we have that message sent from the server.
- Once the WebSocket connection was established.

#### Exchanging Messages

- This way, we can exchange messages between the server and the client.
- For example, let's fire another event as a response to the server with the name `pin`.
- And the payload will also be a simple message, "Hello, server."

#### Handling the `pin` Event

- Going back to our plugin implementation inside the `configureServer` hook, let's register another listener for the `pin` event.
- And specify an event handler this time.
- The event handler is going to receive two parameters.
- The first one will be the payload sent from the client.
- The second parameter will be the client itself, in other words, the object that represents the connection.
- Inside of the closure, we will be able to use this object to send events to the client.

#### Sending Response to Client

- As a response, let's send an event with the name and the message, "Hello, client."
- Now, one more time, let's switch over to our client script.

#### Listening for the `pin` Event

- Register a listener for `pin` by using that same `hot` object as an event handler.
- Let's specify the closure, which will receive the payload as the first argument and print this payload in a console.

#### Verifying the Communication

- So now, in the browser console, we can see two messages.
- The first one was printed once the WebSocket connection was established.
- Because previously, on the server side in our plugin implementation code, we have registered a listener for the `connection` event.
- As soon as the WebSocket connection was established, we send the event called `connected` to the server with the message, "Connection established."

#### Bidirectional Communication

- And then the client has received this event and printed that message in a console.
- To reply back to the server, the client sends another event with the name `pin` and the message, "Hello, server."
- On the server side, we have registered a listener for the event `pin` and also printed the message which will come from the client in the server console.

#### Handling Communication in Both Directions

- Now, if we're going to take a look at the server console.
- We're going to see here that message received from the client, "Hello, server."
- And finally, besides printing this message in a console, we're also firing another event to the client with the message, "Hello, client."

#### Confirming Object Availability

- In our client script, we are basically listening for this event.
- And printing the received message in the browser console.
- That's why we're seeing a second log that says, "Hello, client," received from the server.

#### Conditional Code Execution

- By the way, all those listeners and code that we have used in here.
- This code will be executed only if an object `hot` will be available.
- Because we have wrapped everything in an `if` conditional.

#### Availability in Development Mode

- The thing is that this object `hot` will be available only during development.
- So, we are going to build this project for production by running `npm run build`.
- This `hot` object will not be available.
- So, all this code will be basically removed from the production bundle using tree shaking.

#### Verifying Code Removal

- At the end, let's just make sure that this is the case.
- I'm going to print out a simple message here just to see that this code will be executed.
- Indeed, we are seeing that log in the browser console along with other logs.
- Because currently, I'm running the development server.

#### Production Build

- But once I'm going to switch over to the console and run the command to build this project for production.
- And then run the production build in the browser by executing `npm run preview`.
- Sure enough, I'm not going to see any logs whatsoever.
- This is because the conditional block we're checking if the `hot` object is present has not been executed.
- Since the `hot` object is not available in the production build.

#### WebSocket Communication

- This is how we can exchange messages between our plugins and client code by using the WebSocket connection provided by Vite.

### **=>** Accepting hot updates

- In one of the previous lessons, we have implemented hot module replacement for CSV modules.
- The way we have done this is by using the `handle hot update` hook inside of our plugin implementation.
- So in here, whenever that CSV file will be modified, we will fire an event via the WebSocket connection to the client.

#### Preparation

- And before getting to implementing hot module replacement for JavaScript files, let's do a little preparation.
- I'm going to create a new JavaScript module in the root of the project.
- Let's call this file `module.js`.
- Here, let's add some dummy code, for example, let's export a constant with the name `message` and a random string.
- Also, let's add one more export which will be a default export with a random string.
- And now, we're going to use HMR API to implement hot module replacement.

#### Conditional Code for HMR

- All the code which we will need for hot module replacement, we're going to wrap in an if conditional.
- And check if the `hot` object is present.
- Then we're going to implement HMR so that we could properly remove this code when doing production builds since we don't need to provide HMR during production.

#### Using the `accept` Method

- In order to implement hot module replacement for this specific module, we can leverage the `accept` method on the `hot` object.
- This method accepts a closure, which, in turn, accepts one parameter, which will be the updated content of this module.
- Let's call this parameter `updatedModule`.
- And then, print out this variable in the browser console.

#### Testing Hot Module Replacement

- Just to see it in action, we, of course, have to go back to our main JavaScript file.
- And write an import statement to import our new module.
- Regarding all other code, we actually don't need any of that, so let's comment everything out besides our `import`.

#### Checking the Behavior

- And now, let's see what is going to happen as soon as I'm going to modify the file `module.js`.
- For example, let's change this string.
- And in the browser console, I'm seeing a different log which was just modified because after updating this file, this module was executed again.
- And then, we also got this log which contains updated content of this module in the form of an object.
- So here we can see a default export of this module as well as the name and the export of the constant `message`.
- And this log was printed by using a closure that we have passed into the `accept` method.

#### Handling Updates Without `accept`

- So now if I'm going to modify the value of the `message` constant, for example, right away I'm seeing the new log in the browser.
- And this time the constant `message` contains the new value that we have just updated.
- Anytime we're going to modify `module.js` file, we're going to see here a new log with the updated content of that file.

#### Handling Full Page Refresh

- By the way, all this is happening without full page refreshes.
- But what if I'm not going to use `accept` in this module?
- Let's test it out, let's comment out this part.
- In the browser, I'm only seeing one log, which was printed on the initial page load.

#### No HMR without `accept`

- But after I'm going to modify the file `module.js`, in the console, we can see only the new log without all previous outputs.
- And that is because the browser has made a full page refresh.
- So in this case, there is no hot module replacement.

#### Restoring `accept`

- And again, if I'm going to go back to the editor and uncomment this code back in, then initially here I'm seeing only one log from the `module.js`.
- And after I'm going to modify this file, we're still going to see the old log as well as the new output.

#### Handling Errors

- And in addition to that, we got an object that contains the updated data of the module.
- And by the way, if we're going to make any syntax errors in our modules, then that log, which is responsible for showing updated content of the module, will print `undefined` instead.
- So if you're planning to use this object in a closure, it's necessary to firstly check if the received value actually exists.
- So we're going to wrap this part in an if conditional.
- Now, if we're going to make any syntax errors in our modules, it will prevent us from potential crashes.
- And it's actually good to do these kinds of checks most of the time.

#### Monitoring Multiple Modules

- Let's consider another example

.

- So what if my `module.js` is going to import another module?
- Let's emulate this situation.
- Let's create a new file and call it `submodule.js`.
- This module is going to have only one default export of a random string.
- And then, we're going to import this module from within `module.js`.
- And now, let's say we want to monitor our changes in all those modules we are importing in this module.
- So, for example, I want to run some code anytime the module `submodule.js` will change.
- So in here, I'm going to use another call to `accept`, which in this case will have a different shape.

#### Monitoring Specific Modules

- As the first parameter, we can provide an array which consists of all those inputs we'd like to monitor changes in.
- So, for example, in here, I'm going to watch the file called `submodule.js`.
- So I'm going to include this name in here.
- Then in the closure, we are going to receive an updated content of every module that we are monitoring.
- Since in this case, I'm monitoring only one module, I'm going to destructure this parameter and extract only the content of this submodule file.

#### Testing Multiple Modules

- Eventually, let's see what will be contained in this new `submodule` variable.
- Which is supposed to give us updated content of the submodule.
- In the browser, I can see the log from `submodule.js` again because after modifying this file, it was executed in the browser one more time.
- And then, I'm seeing another log, which contains the updated content of the modified `submodule.js` file.

#### Errors and Fixes

- And that is because in our parent module, which is called `module.js`, we have registered this listener which monitors for changes inside `submodule.js` file.
- And when a change occurs, it is going to print the updated data of this submodule in the form of an object.
- And if I'm going to make a mistake in the submodule name, and then we'll do any modifications to this submodule, then in the browser, I'm still going to see the log, but this log comes from a different place.
- It is actually this part of code which prints that log entry.

#### Fixing the Name

- So just to make it all clear, let's comment out this part.
- And modify `submodule.js` once again.
- And as we can see, after the modification, there are no extra logs in the console.
- Because we are no longer listening for changes in the submodule.
- So let's go back to `module.js` and fix that mistake in this name, `submodule.js`.

#### Correct Behavior

- And one more time, if I'm going to go ahead and modify the file `submodule.js`, sure enough, in the console, we're going to see a new log in line with the updated content of the `submodule.js` file.

#### Leveraging `accept` for HMR

- And by the way, if we're going to make any syntax errors in our modules, it will prevent us from potential crashes.
- And it's actually good to do these kinds of checks most of the time.
- So let's add the same conditional to this closure.
- This is how we can leverage the `accept` method on the `hot` object to implement hot module replacement for specific JavaScript modules.
- Let's keep learning a bit in the next lesson.

### **=>** Disposing hot updates

- So by now, we already know how we can accept HMR updates by using the `accept` method and apply them to our page.
- This `accept` method has a few signatures.
  - The first one allows us to accept updates of the model itself.
  - The other signature allows us to accept updates from dependencies of this module.
  - In other words, from those modules that are imported in this module.

#### Side Effects of Updates

- Sometimes, when modules are updated and updates are applied in a browser, those updates might also leave some kind of side effects.
- For example, those updates might modify the DOM structure or change some data in local storage of the browser.
- Even a simple console log statement can also be considered a side effect.
- Sometimes, before applying updates of the module in a browser, we need to run some kind of code which would clean up those side effects left from previous executions of this module.

#### Example

- It might sound complicated, but in fact, it is really simple.
- Let's consider one example.
- I'm going to create a variable `Styles`.
- Then let's declare the function `addStyleSheet`, which is basically going to add styles into the `head` element on the page.
- In here, I'm going to use the DOM API to create a DOM element, which corresponds to the style tag.
- We're going to assign arbitrary styles to the `innerHTML` property.
  - For example, let's make the background color of the body Indigo and text color white.
- Then all we have to do is append this style element to the `head` element using the `appendChild` method.
- Of course, to apply these changes, we have to execute this function once the current module is loaded in the browser.
  - So let's call the function `addStyleSheet` right here.
- Also, let's open up `index.html`, and in here, we'll add an `H1` element.
  - So in the browser, we see that those styles were applied.
- If we take a look at the `head` element, we can see the style element that we have just added.

#### Handling Side Effects

- So far, it looks good, but what is going to happen if we're going to modify the styles in any way?
- For example, let's change the color to yellow.
- Take a look in the browser.
  - The color was properly applied to the page by using hot module replacement.
- But if we take a look at the DOM structure, we have two style elements.
- The previous style element was not removed, and the new one was just added.
- The previous execution of this module has left a side effect in the DOM by adding a style element.
- But right after we have updated those styles, the previous style tag was not removed.
- It produced a so-called side effect.
- We didn't clean up that side effect before applying new updates.
- As a result, any time we make changes to our module, a new style element is appended to the `head` element.

#### Cleaning Up Side Effects

- Now let's see how we can clean up after ourselves.
- Any time we modify this module, the previous style tag will be removed, and the new one will be appended.
- For that, let's create a new function called `removeStyleSheet`.
- All this function is going to do is basically remove the styles DOM element by calling the `remove` method.
- The question is, where do we actually need to call this function `removeStyleSheet`?
- Since this function has to be executed right before we receive new HMR updates, Webpack provides us with another method called `dispose`.
- We also call it on the `hot` object.
- The closure passed into this method should execute all necessary cleanup code to get rid of previous side effects.
  - This is exactly the place where we can call our function `removeStyleSheet` to remove the styles DOM element.
- Now, before going back to the browser, let's reset these styles as they were initially.
- Also, do a full page refresh to have only one style element on the page.

#### Cleaning Up Side Effects - Continued

- Now, after I'm going to modify this module in the browser, what we will actually see is that before appending updated styles onto the page, the previous style element was removed.
- Because the function `removeStyleSheet` was executed inside of a closure of the `dispose` method, which cleaned up our previous side effect before appending the new element.
- Just to see at what time those functions are executed, let's place arbitrary console log statements into the `addStyleSheet` and `removeStyleSheet` functions.
- On the initial page load, our module was executed and called the `addStyleSheet` function.
  - Therefore, new styles were applied to the page.
- After any subsequent modifications of this module, we're going to see that before applying new updates, our function `removeStyleSheet` was executed.
  - Thanks to the `dispose` method that we have called on the `hot` object.
  - The previous styles were removed, and then the new styles were added.
  - This way, we end up with only one style element on the page.

#### Cleaning Up Side Effects - Conclusion

- Let's go back to the editor and remove these two console log statements.
- So, by now, we know how we can accept hot module updates by using the `accept` method.
- We also know how to remove any side effects before applying new updates by using the `dispose` function.
- Now, a couple of words about standard Webpack events that we can listen to.
- There are several events that we can listen to, and all of them are shown on this documentation page.
- For demonstration purposes, let's register listeners for some of these events.
  - As the first parameter, we have to specify an event name.
    - I'm going to use the "before update" event.
  - As the second parameter, we're passing the handler, which is going to take some data received from the server.
    - Let's just print out this data in the console.
  - Duplicate this piece of code a couple more times to register listeners for other events.
    - Such as for "after update" and for the "error" event.
  - Just to make it clear which console log statement corresponds to which listener, I'm going to add labels.
    - "before update," "after update," and "error."

#### Event Handling

- Initially, there are no logs that came from those listeners because none of those events were fired on the initial page load.
- They will be fired once we modify the module.
- So, let's do just that.
- I'm going to go ahead and change the color of the background.
- In the browser, we can see that firstly, we have received the log which came from the "before update" event listener.
  - With some metadata about the module, which was updated, when it was updated, and the best guess to this module.
  - This log was printed right before we applied the HMR update.
- The "after update" log was printed after we applied the HMR updates.
  - This event handler also received the same object, which describes the module that was

updated.

- To trigger the error event, we had to make a syntax error in this module.
- In the console, we're going to see that the error was printed, which means the error handler was executed.
  - The data that we received in here contains the full description of the error.

#### Conclusion

- By the way, the same error was displayed right here.
- This is how we can leverage those default events to hook into the HMR process and execute particular code at different stages of HMR updates.

### **=>** Vue integration

- In this lesson, we're going to take a look at how we can integrate the `framework view` in a `vid` project.

#### Setting Up the Project

- I have already scaffolded a default `vid` project.
- Let's start the development server by running `npm runev`.
- By the way, while scaffolding a new `vid` project, there is a special command that we can use.
  - It will basically scaffold a `vid` project with the `view` framework already integrated.
  - But just to better understand this whole process and to see what is going on under the hood, we're going to do this manually.

#### Installing Dependencies

- The first thing we need to do is, of course, install all necessary npm dependencies.
- We need `framework view` itself and `vid` plugin, which will allow us to convert files with an extension `.view` into JavaScript code.

#### Configuring `vid` and `view`

- After installing both of these dependencies, we need to open our `vid` configuration file `V.C config.js`.
- In here, we have to include that plugin we have just installed, `plugin view`, into this array by calling this function `View`.

#### Creating a View Component

- Let's remove everything from the `main.js` file and start writing a `view` component.
- Inside of our `index.html` file, we already have an element with an `id` of `app`.
- This will be an element where we're going to mount our `view` application.
- Firstly, we're going to create the root component `app.view`.
- For demonstration purposes, we're going to use a very basic example of a counter component.
- We'll create a reactive variable by running the function `ref`.
  - This variable will store the current value of our counter.
- Inside the template of this component, we'll add an `H1` element with the text "Counter."
- Right under it, we'll add a button to increment the `count` variable.
- We'll also output the value of the `count` variable in here.
- We'll register a click listener on this button which will increment the `count` variable.

#### Initializing the `View` Application

- Now that we have one `view` component, we need to initialize the `View` application in our main script.
- Firstly, we'll import our root component from the file `app.view`.
- We'll also need to import the function `createApp` from the `View` package.
  - This function is going to be used to initialize our `View` application.
- In here, we'll call this function `createApp`, pass in our root component, and then call the function `mount`, specifying an identifier of that element where we're going to mount our application into.
  - Just as a reminder, we already have an element with an `id` of `app` in our `index.html`.

#### Running the `View` Application

- Now, in the browser, as we can see, we have a working counter.
- Our `View` application was properly initialized.
- Let's take a look at the transformation which `vid` has applied to our `app` component.
- I have additionally installed a plugin called `vid plugin inspect` to see what transformation `vid` applies to our modules.
- We can open up this URL in the browser, and here we're going to see all those transformations done to our modules.
- Whenever we are importing `app.view` component, the plugin is going to take the content of this component and turn all this content into valid JavaScript code.
  - In other words, into the render function, which will be called on the client side and render our component on the page.

#### Examining the Network Tab

- Let's also take a look at the network tab.
- When the browser fetches `main.js`, it then fires a code to the server to fetch the content of the `app.view` component.
- Instead of giving us the raw content of the `app.view` component, `vid` has applied the plugin to the file with the `.view` extension.
  - This transformation converts the `view` template into valid JavaScript syntax.
- This is the code responsible for rendering the `counter` component on the page.

#### Conclusion

- As we can see, it was very easy to integrate the `View` framework into a `vid` project.
- Initially, we just had to install two npm dependencies: `View` framework itself and the `vid` plugin to transform `View` files into JavaScript code.
- After doing all these steps, we have provided full support for the `View` framework inside a `vid` project.
- We can develop `View` applications in a normal way by creating components with `.view` extensions.
- Importing those components, they will be properly transformed into valid JavaScript code, and everything will work fine.
- This is how we integrate the `View` framework in `vid` projects.

### **=>** React integration

- In this lesson, we're going to take a look at how we can integrate React into a Vid project.

- I have prepared an empty Vid project which doesn't use any Frameworks, so let's get to integrating React.

#### React Integration Options

- Before we start, there is an option which Vid provides us with, which allows us to scaffold a Vid project with React integrated right from the beginning.
- To do that, we just need to use `value react` for the `template` option and run the following command.

#### Manual Integration

- Just to better understand this whole process and how the integration happens, we're going to do all these steps manually.
- Before we start, we actually have to install all necessary npm packages, such as libraries `react`, `react-dom`, and `Vid plugin`, which allows us to import React components.
- After all those libraries are installed, we have to open up the configuration file `V.C config.js`.

#### Configuring Vid for React

- In here, let's import the plugin from the `VJs plugin react` package.
- Then, to include this plugin, we have to call this function `react` in this array of plugins.

#### Start Developing with React

- Now we can just start developing our React application.
- Everything starts with the main script file `main.js`.

#### Modifying Main.js

- Let's remove everything from this file and also rename this file to `main.jsx` since we're going to use JSX syntax in this file.
- Also, we have to fix the path to this file inside of `index.html`.

#### Creating the Root Component

- As we can see, we already have a `<div>` with an identifier `app`. This will be where we're going to mount our React application.
- Let's create our root component; we'll call the new file `app.jsx`.

#### Defining the Root Component

- Here, we're going to use a simple example, which will be a basic counter component.
- Let's import the `useState` function from React.
- We're also going to create a file with styles and import them right here.
- Then, let's define our component function.

#### Component Structure

- This function is going to have only one state variable, which will be a `counter`.
- The initial value for this counter will be zero.
- Let's define our template for this component.
- We're going to add an `<h1>` element with the counter text.
- Below, we're going to create a button that will increment our counter.
- Just to see if our counter gets incremented, we're also going to show this variable's value as the label for this button.
- Now, we'll register the listener, which will be fired when clicking on this button.
- Inside of this listener, we're basically going to update the state variable `count` by incrementing it by one.
- Finally, at the bottom of this file, let's export this component as a default export.

#### Styling

- Just to check if we will be able to import CSS files with styles and those styles will be applied to our components, let's create a basic CSS file with the name `app.css`.

#### Initializing React

- Now that we have our root component in place, we actually have to initialize the React application inside our main script.
- In here, we're going to import `react-dom` library from the `react-dom` client.
- We're also going to import our root component `app` from `app.jsx`.
- In this case, we're going to mount it inside an element with an ID of `app`.

#### Rendering the Application

- To render this application, we're calling the `render` method, and as the parameter, we're specifying our root component as a JSX.

#### Browser Output

- After that, if we're going to take a look in a browser, sure enough, we're going to see our working counter.

#### Understanding Transformations

- To see what transformations are being applied to our React components, we can use the plugin `inspect`, which I have already pre-installed.
- This allows us to open up this URL in a browser and see transformations that happen to our imports.

#### Transformation Process

- In this case, once the browser reads `main.jsx` file, then it sees this import of `app.jsx` component.
- It fires the call to the server to fetch the code of this component.
- Instead of giving us the raw content of this component, Vid applies the React plugin to convert the content of this component into a render function.
- This function will be recognized in the browser, and then this function runs in the browser.
- This way, we're seeing our counter component on the page.

#### React Integration Recap

- The whole process of React integration into Vid project was pretty simple.
- Just to recap, we had to install three dependencies: `react`, `react-dom`, and the plugin for React.
- Then, we had to include this plugin inside Vid configuration file in the plugins array.
- This is what actually allows us to create and import React components in our files.
- So we can start developing our React applications in Vid projects as we are used to.

### **=>** Deploying Vite project

- We are slowly approaching the end of the course.
- In this final lesson, we're going to take a look at how to deploy our application.

#### Deployment Service: GitHub Pages

- The servers for the deployment that we are going to be using are called GitHub Pages.
- In fact, there are many more services that provide support for deployment.
- The deployment process is pretty simple for any of those services, so we're going to review deployment steps using GitHub Pages.

#### Preparing the Application

- As always, I have already prepared a default Vite application that we're going to deploy.
- Before I get into the deployment, we need to make sure that our repository exists on GitHub (which, in my case, it does).
- So we can go directly to the deployment without changing any default configurations.

#### Building the Project

- After building our project, all build files will be located inside the `docs` folder.
- This is exactly the folder which is going to be deployed.
- In `docs`, let's choose the option "deployment moment to GitHub Pages."

#### Repository URL

- Our repository URL corresponds to this format, where we have two URL segments:
  1. Our GitHub username.
  2. The name of the repository.
- The only configuration option we have to specify will be the option called `base`, and this option should contain the name of our repository.

#### Creating a Configuration File

- Let's create a configuration file `vite.config.js` in the root of this project.
- From here, we're going to export a configuration object with only one option: `base`, where we're going to specify the repository name (which, in my case, is `with-Dash-deployment`).
- This option value should match the repository name on GitHub.

#### Commit and Push

- Now, we have to create a new commit where we're going to include our configuration file.
- Let's specify a message and push this commit to GitHub.
- After that, let's make sure that the new commit appears in the GitHub history of our project.
- It is this second commit.

#### GitHub Settings

- Let's open up the settings tab.
- The main branch of our repository is `main`, so we're going to deploy this branch.
- Now, on the left side, let's open up the page called "pages."

#### Deployment Configurations

- In here, we have to set up some deployment configurations.
- Firstly, in this Source dropdown, we have to choose the option "GitHub Actions."
- Then, let's click this link "create your own," which is basically going to create an empty deployment configuration file.
- Let's clear out all the predefined content and specify our run configurations.
- These configurations are listed in Vite Docs, so we just have to copy over this whole configuration and paste it in that file.

#### Configuration Options

- Let's quickly go through some of the options specified in this file:
  - We can see which branch is going to be deployed.
  - In here, we can see that the node version used to build our project will be version 18.
  - We're going to install all npm dependencies by running `npm install`.
  - After that, we're going to build the project by running `npm run build`.
  - At the end, once this folder with our build files is created, this folder will be deployed to GitHub Pages server.

#### Configuration File Name

- Let's give this configuration file a name, for example, `deploy.yml`, and click "commit changes."
- In here, let's make sure that the new commit will be created on the main branch.
- Let's click "commit changes" once again, and then we can see another new commit in the commit history.

#### GitHub Actions

- If we open the "Actions" tab, here we can actually see the new deployment task that is currently running.
- This is our deployment task, so anytime we push changes to the main branch, it will automatically kick off the deployment process.
- By clicking on this task, we can inspect what steps are executed during the deployment.

#### Deployment Successful

- Once this deployment is successfully finished, we can once again open up the "Settings" tab and go to the "Pages" page.
- In here, we will see the URL where our application will be available on the web.

#### Application Deployment

- By following this URL, we can see that our application was successfully deployed on GitHub Pages.
- That's it! We were able to successfully deploy the application on GitHub Pages server, as we can see it was a pretty simple process.
- If we decide to deploy our project using another hosting provider, the deployment process is going to be pretty simple as well.
- And with that, we are finishing this course about Vite bundler.
