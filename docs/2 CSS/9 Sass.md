---
sidebar_position: 9
---

# SASS

>

### **=>** Introduction

- Hey gang and welcome to the first lesson in this complete SASS tutorial

#### What is SASS?

- Now first of all, what is SASS and why would we even want to use it?

- So I guess we could describe SASS as CSS on steroids or as the official website likes to put it, CSS with superpowers.

- It's a language that basically extends CSS to give extra features or superpowers that make writing styles easier, more flexible, and more reusable.

- Now it does this by bringing typical programming constructs like functions, loops, variables, and inheritance into CSS, and it just makes CSS so much more flexible and powerful in the way that we write rules.

- For example, we could loop through a list of colors and generate a background color class and a font color class for each of them.

- It also adds other features to CSS like rule nesting, invisible comments, parent selectors, and a lot of other stuff which make it much easier to write complex CSS selectors.

#### Popularity and Usage

- SASS is extremely popular in the dev community.

- Lots of companies use it in their code base.

- It's also used to build CSS frameworks and libraries like Bootstrap and Bulmer.

#### What We're Going to Build

- Speaking of CSS libraries, that's exactly what we're going to be building in this series.

- A mini CSS library similar to something like Bootstrap or Tailwind using SASS.

- It's going to include a load of utility classes for things like spacing, border radius, opacity, and all that jazz.

- As well as a responsive grid system and some ready-made components like cards, buttons, and a navbar.

- You can customize and reuse that CSS library in your own personal projects to speed up your development.

- While we do this, you're going to learn all the basics of SASS as well as some of the more advanced features too.

#### Prerequisites

- Before you start, I would suggest you already know a couple of things.

- First of all, CSS since SASS is built on top of CSS.

- Secondly, I'd suggest that you know at least the foundations of any programming language that include variables, loops, and functions.

- It could be JavaScript or Python or something else entirely.

- It doesn't really matter what language it is as long as you understand those fundamental concepts.

- Because we're going to use those while we code with SASS.

#### Setting Up

- Browsers don't understand raw SASS files.

- We can't just hook up a SASS file to our HTML pages like we would a CSS file and just expect it to work.

- We need to process SASS into CSS before it works in a browser.

- That's really easy to do.

- There's a ton of free tools that can do it for us.

- We'll be using a task runner called Gulp, which we're going to talk about later on.

- But it does mean that you're going to need Node.js installed on your computer.

- Because we'll be using the Node Package Manager to install Gulp and some plugins into our project.

- You don't need to know a thing about Node.js at all.

- You just need to have it installed on your computer.

#### Course Files

- One more thing, I've uploaded all of the course files for this course onto GitHub using this repo right here, [complete sasSs tutorial](https://github.com/example/repo).

- So I'm going to leave the link to this repo down below the video.

- Each lesson in the course has its own branch in this repo.

- To get the code for lesson 10, for example, you select the lesson 10 branch from the drop-down.

- Then, you can click on the green code button and download the zip file for this lesson.

- Or if you prefer, you can just clone the entire repo to your desktop and work with it that way.

#### Conclusion

- Anyway, that's your quick introduction to SASS and this course.

- Next up, I'm going to show you how to create your first SASS file and then compile that to CSS.

### **=>** Compiling SASS

>

#### Setting Up SASS

- First, let's create our first SASS file and start writing some SASS.

- Then we're going to see how to compile that into a CSS file.

- I've already got VS Code open, and right here, I've got an `index.html` file with no real content inside it yet, just a head and an empty body tag.

#### Creating a SASS File

- Now, let's create a SASS file to style our web page.

- Right-click over here, new file, and I'm going to call this `index.scss`.

- So this is the extension that we use for a SASS file.

- Sometimes you might see `.sass` as well instead of `.scss`.

- Dot SASS files use a different syntax from what we'll be using. Most of the time, you're going to see SCSS.

- Now let's add a few simple rules to this file. I'm going to copy these from my GitHub repo where the course files are. These are just a few basic boring CSS rules, including a Google Font import right here at the top.

```scss
body {
  font-family: 'Poppins', sans-serif;
  background: #f4f4f4;
  margin: 0;
  padding: 0;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  color: #333;
  font-size: 2em;
}

p {
  color: #666;
  font-size: 1.2em;
}
```

- This all looks the exact same as normal CSS at the minute. There are no extra SASS features, and that's fine. Everything you can do with vanilla CSS, you can do in these SCSS files as well.

#### How to Use SASS Styles in HTML

- For now, how do we use these styles in our HTML file?

- In general, browsers don't understand SASS. They would understand all of this quite easily that we have right here because it's just plain CSS that we're using here. Like I said, there are no extra SASS features added yet. But as we start to add those extra SASS features, the browser won't understand them. So this SASS file has to be compiled into a CSS file, and then we can hook that CSS file up to our HTML page.

#### Compiling SASS into CSS

- Now there are several options when it comes to compiling SASS into CSS.

- A really easy option if you're using VS Code as your editor is to use the Live SASS Compiler package.

- You can install that by going to your packages and then searching at the top for `Live SASS Compiler` and then just install it.

- Once you've done that, you're going to see a little button at the bottom of the editor which says `Watch SASS`, and you can just click on that to watch your SASS file, and it will compile into a CSS file.

- However, the way that we'll be doing it is by using a task runner called Gulp.

- Now it's a little more work to set up than using the Live SASS Compiler package, but it offers us more compilation options, including the ability to tree shake or purge any unused styles later on, which we're going to see later in the course.

- And it's also going to allow us to use the SASS debug tool as well, which the Live SASS Compiler doesn't allow at the time being.

- So to do this, we need to install a few packages with npm. This is why we need Node.js installed on our computer.

```bash
npm init
npm install gulp gulp-sass sass --save-dev
```

- Now, to check that you've got it installed correctly, open a terminal right here in VS Code and then type `node -v` and press Enter. If you see a version number, then it's installed on your computer. If not, you're going to need to go and download it from [Node.js.org](https://nodejs.org) and install it.

#### Creating a Gulp File

- Anyway, once you have that installed, first type `npm init` down here and hit Enter. This is going to create for us a `package.json` file, and it's going to keep track of all of our project dependencies, the things that we're about to install.

- You can just hit Enter through all of these questions right here to keep the default values.

- And now we should see that `package.json` file right up here.

#### Creating a Gulp File (continued)

- Next, we need to make a Gulp file, which is basically just a JavaScript file that contains functions for Gulp to run.

- One of those functions is going to be for compiling our SASS to CSS. So let's first create that file, and we're going to call this `gulpfile.js`. It has to be called this.

- Now, don't worry too much if you don't understand a lot of JavaScript or Gulp or what I'm about to code in this file. You won't need to edit it too much once we've created it.

- I will explain everything I'm about to write in this file, but I don't want to get too bogged down with how Gulp works, and this is going to be a simple setup that we're about to make. Once we have it coded, we can just kind of leave it there in the background.

- So first things first, we need to import a few things from the Gulp package.

```javascript
const { src, dest, watch, series } = require('gulp')
const sasSs = require('gulp-sass')
```

- Next, we also need to import the Gulp SASS plugin that we installed.

```javascript
const sasSsGulp = require('gulp-sass')(sass)
```

- Now, this right here is going to return a function to us. We need to invoke that using parentheses at the end, and then we need to pass in our SASS compiler that we also installed.

```javascript
const sassCompiler = require('sass')
const sass = sasSsGulp(sasSsCompiler)
```

- And now all in all, this is going to return another function, which we're calling `sasSs` in this file. We just need to invoke this later on to compile our SASS to CSS.

#### Compiling SASS to CSS

- So, that's the imports out of the way. Next, we need to create a function that is going to be responsible for compiling our SASS into CSS.

- I'm going to make one called `buildStyles` since that's essentially what we're going to be doing here, but you can call it something else if you prefer.

```javascript
function buildStyles() {
  return src('index.scss').pipe(sass()).pipe(dest('css'))
}
```

- Inside this function, first of all, we return a value.

- Then we say `src` and invoke it, and we pass in a string, which is a relative path to the source file. In our case, the relative path is just `index.scss`.

- Now we might change this later on if we change our SASS file, but for now, that's our only source file.

### **=>** Variables

>

#### Basic Features of SASS: Variables

- One of the most basic features of SASS is the use of variables.

- These are a little bit like normal CSS variables, but the syntax is a little bit different.

- Variables are useful in CSS when you have values like theme colors, specific font sizes, or other frequently used values in your website.

- Instead of rewriting that value multiple times for different CSS selectors and rules, you can define it once as a variable.

- When you use that value, you can reference the variable, making code maintenance much easier.

#### Creating SASS Variables

- To create a variable in SASS, use a dollar sign followed by a variable name.

- For example, you can create variables for theme colors:

  - `$primary`: Primary theme color (e.g., `#326dee`)

  - `$secondary`: Secondary theme color (e.g., `#1ac8`)

  - `$error`: Error color (e.g., `#d32752`)

  - `$info`: Info color (e.g., `#f6c31c`)

#### Using SASS Variables

- You can use these variables in your CSS selectors to apply the defined colors:

  - Example for `h1` selector: `color: $primary;`

  - Example for `a` selector: `color: $secondary;`

  - Example for `button` selector:

    ```scss
    color: white;
    background: $primary;
    border: 0;
    ```

#### Applying SASS Variables

- By using variables, you ensure that when you update a variable's value, all selectors using that variable will automatically update.

- This simplifies maintenance as you only need to change the value once in the variable definition.

#### Using Variables for Other CSS Properties

- You can also use variables for other CSS properties like margin, padding, border thickness, and border radius.

- Define base values for these properties as variables and use them in your selectors to maintain consistency and simplify updates.

#### Example Usage

- Here's an example of how you can use variables for margin, padding, border radius, and border width in your CSS selectors.

  - `h1` selector:

    ```scss
    margin-bottom: $baseMargin;
    ```

  - `button` selector:

    ```scss
    border-radius: $baseBorderRadius;
    padding: $basePadding;
    ```

  - `error` selector:

    ```scss
    margin: $baseMargin;
    padding: $basePadding;
    border-radius: $baseBorderRadius;
    border-width: $baseBorderThickness;
    ```

  - `notification` selector (same properties as `error`).

#### Simplified Styling

- Using variables in this way simplifies styling by centralizing values and ensuring consistency throughout your styles.

- This approach is especially helpful when managing complex websites with many elements and styles.

### **=>** Partials & @import

>

#### Using SASS Partials

- Currently, we're putting all of our SASS code in a single file.

- This approach is fine for now when our code is minimal.

- However, as our codebase grows, having everything in one file becomes messy and hard to manage.

- SASS allows us to use partials to split our code into multiple files.

- Partials help keep our code modular, making it easier to maintain and read.

#### Benefits of Partials

- With partials, we can create separate files for different aspects of our CSS, such as variables, CSS resets, buttons, links, colors, etc.

- We can then combine these partial files into one single root SASS file.

- This approach improves code organization and readability.

#### Splitting Code into Partials

- To start using partials, create a new file, e.g., `variables.scss`.

- Move all variables from the main SASS file into this new `variables.scss` file.

#### Importing Partials

- To use variables from the `variables.scss` partial in the main SASS file, you need to import it.

- Import the `variables.scss` partial at the top of the main SASS file using `@import`:

  ```scss
  @import 'variables';
  ```

- No need to include the `.scss` file extension; SASS will recognize it.

#### Maintenance and Readability

- Using partials makes it easier to maintain code, especially as it grows.

- When you update a partial, the changes are reflected in the main CSS file.

- The output CSS file remains the same.

#### Handling Multiple SASS Files

- In some cases, you might want to compile or watch multiple SASS files.

- Task runners often use wildcard (`*`) to compile all SASS files.

- For example, compile any SASS file with an extension:

  ```bash
  *.scss
  ```

#### Excluding Partials from Compilation

- To exclude specific files (partials) from compilation, prefix their filenames with an underscore (e.g., `_variables.scss`).

- SASS compilers typically ignore files starting with underscores.

- This convention indicates that a file is a partial meant for organization but not compilation.

### **=>** Project Structure

>

#### Building a Mini CSS Library

- In this series, we'll create our mini CSS library, similar to Bootstrap, Tailwind, or Bulma.

- It will be a simplified version, and we'll use this library to design a web page later.

- First, let's establish a project structure to keep our SASS files organized.

#### Project Structure

- Create a folder named "shinobe" to house all SASS files.

- We'll call our CSS library "Shinobi CSS."

#### Moving SASS Files

- Move the existing SASS files (e.g., variables.scss, index.scss) into the "shinobe" folder.

- Any future partials we create should also reside in this folder.

#### Cleaning the Index File

- Delete unnecessary code in the index file, particularly the code using variables that won't be part of our library.

- We aim for a clean slate to build our CSS library.

#### Creating a Base Partial

- Create a new partial file named `_base.scss` within the "shinobe" folder.

- Copy the base styles, including font imports, from the index file to the base partial.

#### Importing Base Styles

- Import the base partial into the index file using `@import`:

  ```scss
  @import 'base';
  ```

- The order of import matters; variables should be imported before anything that depends on them.

#### Updating the Gulp File

- In the Gulp file, update the source paths to include the "shinobe" folder:

  ```bash
  'shinobe/**/*.scss'
  ```

#### Order of Import

- Ensure the correct order of import for your partials.

- Variables and functions should come first.

- Base and layout styles follow.

- Colors and components come next.

- At the bottom, include utilities.

#### Comments for Organization

- Add comments in your files to denote the purpose and order of partials.

- This helps maintain clarity and ensures the correct import order as you expand your library.

### **=>** Nested Rules

>

#### Introduction

- All right then gang, so the next SASS feature I want to show you is the ability to nest CSS rules in other CSS rules.

- To demo this, we're going to create our first real UI component for the library, which is going to be the card.

#### Creating the Card Component

- Start by making a card partial inside a component folder.

- The file name is going to be called `underscorecard.scss`.

#### Adding Variables

- Before we start writing the SASS for this component, let's add two new variables:

  - `baseboxshadow` for the box shadow property.

  - `basefontsize` for the font size property.

#### Styling the Card Component

- Create a selector for the `.card` class and define its CSS properties:

  - `display` is set to `block`.

  - `padding` is set to `basepadding`.

  - `border` is set to `baseborderthickness` solid `#ddd`.

  - `box-shadow` is set to `baseboxshadow`.

#### Nesting Styles

- In SASS, you can nest different selectors inside each other for better organization.

- Example: To style the card title, you can nest it inside the `.card` selector like this:

  - `card card-title` with properties for `font-size`, `padding-bottom`, and `font-weight`.

#### Styling the Card Body

- To style the card body, nest the selector like this:

  - `card card-body` with a property for `font-size`.

#### Styling Anchor Tags

- You can further nest to style anchor tags within the card body:

  - `card card-body a` with the property `text-decoration: underline`.

#### Importing the Card Component

- Import the card component into the `index.scss` file from the components folder.

#### Showcase in HTML

- Create a sample card in the `index.html` file to showcase the card component.

- Use `div` with class `card`, `h1` with class `card-title`, `p` with class `card-body`, and an `a` tag.

#### Preview

- Preview the card component in the browser.

#### Future Enhancements

- Currently, the card stretches the full width of the page, but later additions like a grid system and layout containers will refine its appearance.

#### Conclusion

- SASS simplifies the process of creating and organizing nested styles, making it easier to manage complex CSS structures.

### **=>** Using Math

>

#### Introduction

- All right then, so the next thing I want to talk about in SASS is the use of maths.

- This includes multiplication, division, and similar operations to calculate variable values.

#### Working with Font Sizes

- Start by working with font sizes.

- We have a `basefontsize` value.

- Create variables for different font size variations:

  - `font-size-sm` is `basefontsize * 0.75`.

  - `font-size-large` is `basefontsize * 1.5`.

  - `font-size-xl` is `basefontsize * 2`.

  - `font-size-xxl` is `basefontsize * 3`.

#### Applying Font Sizes

- Apply these font size variables to your components.

- Example: Change the title font size to `font-size-large`.

#### Division in SAS

- Demonstrate division in SASS.

- Calculate the border radius by dividing `20` by `4` using the `math.div` function.

- Include the `math` module using `@use sas:math`.

#### Debugging SASS Code

- Learn how to debug SASS code.

- Use the `@debug` rule to print messages to the console.

- Example: `@debug "hello ninjas"` will print "hello ninjas" to the console.

#### More Math Functions

- Explore additional math functions provided by the `math` module.

- Example: `math.floor(2.6)` rounds down to `2`.

- Example: `math.max(1px, 20px, 15px, 12px)` returns the maximum value `20px`.

#### Conclusion

- Math operations and debugging tools in SASS can help you create dynamic and calculated styles effectively.

- Explore the `math` module's functions and use the `@debug` rule for debugging purposes.

### **=>** Maps

>

#### Introduction

- All right then gang, so the next thing I want to talk about in SASS is the use of maps.

- Maps are a bit like associative arrays in programming languages or maybe a little bit like an object in JavaScript.

- It's basically a way we can collect a lot of different variables or values together in some kind of collection, and that collection is going to have key-value pairs.

- They're really useful for generating utility classes whereby we loop through a map and generate a class for each value in that map.

- We'll see that later on. For now, I want to show you how we can use a map to kind of collect different values together that belong together and how we can manipulate or get data from that map.

#### Creating a Color Palette

- What I'm gonna do is create some kind of color palettes beyond our theme colors right here. So it contains other colors as well. So let me do a little comment first of all to say **color palettes**.

- Now we're gonna create a map of colors, and we're going to store this inside a variable. I'm going to call it `colors`.

- Inside this map, which is denoted by parentheses, we can have different key-value pairs. For example, I could pass in the primary key, and that is going to have a value of this thing right here.

- So, let's do the same thing for the other theme colors because I want all those to be in the color palette. It's going to be secondary; we also need one for the error, so let's do that and pass in the error.

- And then thirdly, it's info, and the variable is just info.

- Now we can add other colors as well, so I could want some kind of blue color and what I'm going to do is just paste in these different hash codes because I don't want to write them all out from scratch.

- We have blue, red, yellow, green, orange, purple, gray, black, and white, all of these extra colors now in our color palette, and we've given a hash value for each one of these except these down here; they're just using the keywords black and white, which we can use in CSS.

- So we have this map of colors now, and this is going to be really, really useful for us later when we're making things like button components or utility classes for background colors or text colors, things like that. For now, what I want to show you is how we can use this map in terms of getting values from it, adding values to it, etc.

#### Manipulating the Map

- Down here, we're just going to use the debug rule, which we talked about in the last lesson, to manipulate this a little bit or get data from it.

- I'm going to say `@debug` and then I'm going to use a function built into SASS called `map-get`, and what this does is get us a value from a map.

- I can say in here the first parameter is going to be what map we want to look at because we might have multiple maps in our files. Well, I want to look through the `colors` map, and then the value I want to get is the `purple` key.

- So, what I'm gonna do is create some kind of test button selector like so and inside here, I'm going to set the background color, and it's going to be `map-get` and then we want to get something from the `colors` palette, and we want to grab the `purple` color.

- So, if I was to save that now, we can see it's built, and if I go into the index file and go down to the bottom, hopefully, no, we don't see there, let me just search for it `test-btn`. Okay, it's near the top, `test-button`, and it has this background color. This is how we can use it inside CSS selectors as well.

#### Conclusion

- So there's a few different ways we can interact with this map, and we can use these different functions in selectors.

### **=>** Loops

>

#### Introduction

- All right then, so now we've seen how to generate a map like this using parentheses and key-value pairs.

- We've created a color palette map, and we've also seen how to interact with the map using these different functions right here.

- Now what we're going to do is put this to greater effect by cycling through the map and generating classes for each of these items inside the map.

#### Creating Color Utility Classes

- What I'm going to do is create a new file inside the shinobi folder, and this is going to be for colors, so `_colors.scss`.

- We're going to create some color utility classes for things like text color and background color.

- To cycle through this map, let's go to the index file and import it right here. We want the colors file below the variables so we can use the `colors` variable inside our colors file.

- How do we cycle through it? We use the `@each` loop, like so:

  ```scss
  @each key, val in colors {
    // Loop body
  }
  ```

- For each key-value pair inside the map, we get access to the key and the value.

- We can generate classes for text color and background color for each color in the map.

#### Generating Text Color Classes

- To generate text color classes, we use the key as part of the selector name, like `text-primary`, `text-secondary`, etc.

- We use the `map-get` function to retrieve the color value from the map.

- We set the color property to the retrieved value.

#### Generating Background Color Classes

- To generate background color classes, we follow a similar approach, but with a different selector name, like `bg-primary`, `bg-secondary`, etc.

- We set the `background-color` property to the retrieved value.

#### Conclusion

- We now have utility classes for different colors in our map.

- These classes are generated dynamically, making it easy to add more colors in the future.

- In the next step, we'll generate light and dark variations of these colors by using nested loops.

- This approach helps us create a comprehensive color palette for our project.

#### Generating Light and Dark Variations

- For each color, we want to generate light and dark variations.

- We use nested loops, a `@for` loop to iterate through strength values (from 1 to 9), and another loop to cycle through the colors.

- We generate class names like `text-primary-light-1`, `bg-primary-light-1`, `text-primary-dark-1`, `bg-primary-dark-1`, and so on.

- We use the `mix` function to mix white or black with the color, gradually making it lighter or darker based on the strength value.

#### Using Generated Classes

- We can now use these generated classes in our HTML.

- We've added sample HTML code that utilizes these classes to showcase light and dark variations of the primary color.

- These classes provide flexibility and convenience in styling our project.

#### Managing Generated CSS

- While generating these classes, we've created a substantial amount of CSS.

- In production, you can implement techniques to remove unused styles to optimize your CSS file size.

- This ensures that only the necessary styles are included in the final build, minimizing the file size.

### **=>** Conditionals (@if)

>

#### Introduction

- All right then, gang, so the next thing I'd like to talk about is conditionals or if statements in SASS.

- If you're familiar with another programming language, this is going to come as second nature to you because it's just like a normal if-else statement.

- We can check a certain condition with this, and if that condition is true, then we can maybe generate some styles or selectors or whatever.

- If it's false, we can do something else.

#### Simple If Statement Example

- Let's do a simple example. I'm still in the colors file. I'm just going to say `@if` at the bottom.

- In parentheses is where the condition goes.

- In this example, if 10 is greater than 5, then we're going to do something.

- That's obviously true, so if that's true, we're going to say `test-if` and just say `color is black` just to see if this works.

#### Using If Statements

- We can use if statements to conditionally generate CSS based on certain conditions.

- For example, we can check if a condition is true and generate specific styles if it is.

#### Conditional Example

- If we check if 10 is greater than 5, we can generate styles based on that condition.

- For instance, if the condition is true, we can set the color to black.

#### Example with `@else`

- We can also use an `@else` clause.

- For example, if 10 is less than 5, do one thing (`test-if`), and if it's not, do something else (`test-if 2`).

- This allows us to handle both true and false conditions.

#### Practical Usage in Utility Classes

- We can apply if statements in utility classes to conditionally generate styles.

- In this example, we want to avoid generating light and dark variations of black and white colors.

- We only want variations for other colors.

#### Conditional Check

- We use an `@if` statement to check if the value (e.g., black or white) is not equal to black and not equal to white.

- If the condition is met, we generate the variations.

- If it's black or white, we skip the variations.

#### Conclusion

- If statements in SASS are similar to those in other programming languages.

- They allow us to conditionally generate CSS styles based on specific conditions.

- In practical scenarios, we can use if statements to control the generation of utility classes, ensuring that we only create variations when needed.

### **=>** Parent Selectors

>

#### Introduction

- In this video, I want to talk about **parent selectors**.

- We'll explore how they help create variations of classes to add effects like **hover** and other pseudo-selectors such as `nth-child`, `:active`, `:visited`, or `:last-child`.

#### Example Scenario

- Suppose we have different classes for **text color** and **background color**.

- We may want to change the background color or text color when hovering over an element.

#### Current Class System

- Currently, we assign classes like `text-hi-primary` to set the text color to "primary."

#### Desired Behavior

- We want to create classes like `text-hover-{color}` for hover effects, e.g., `text-hover-purple`.

- This class will change the text color to purple when hovering over an element.

#### Implementation

- We can achieve this by using the **hover pseudo-selector** in CSS.

- Let's generate these classes inside a loop in the `colors` file.

- The class structure would be `text-hover-{color}`.

#### Using the Parent Selector

- Instead of traditional CSS, let's utilize the **parent selector**.

- We use the ampersand (`&`) to reference the parent class and add the hover effect.

- This allows us to combine multiple pseudo-selectors in one selector efficiently.

#### Expanding to Other Variations

- We can apply the same approach to create hover classes for **light and dark variations**.

- The classes will be named `text-hover-light-{strength}` and `text-hover-dark-{strength}`.

- These classes will mix the color with white or black, respectively, for hover effects.

#### HTML Implementation

- We can now use these classes in our HTML elements to trigger the hover effects.

#### Conclusion

- This approach simplifies CSS code and makes it more maintainable.

- In the future, we'll explore how to optimize and purge unused styles for production sheets.

### **=>** Mixins

>

#### Introduction

- All right gang, so in this video, I want to talk about another feature in SAS: mixins.

- Mixins are a way for us to group together a bunch of CSS properties and values so that it can be included in many different CSS rules.

- For example, it might be that a group of different elements on our web page all contain the same padding, margin, color, and font-size properties and values.

- Instead of rewriting those properties and values for each of those elements in their own CSS rules, we could create a mixin for those properties and values, which could then be dropped into those element rules.

#### Example: Creating a Button Component

- Let's see an example of this in action by creating a new component. This component is going to be a button component.

- Create a new file inside the components folder: `components/button.scss`.

- Inside this file, we'll create our button component.

#### Generating Button Classes for Different Colors

- In this file, we want to generate a button class for all of our different colors so that we can have a primary button or a secondary button, each with different background colors.

- We'll use an `@each` loop to cycle through the color map defined in our variables.

- Example code for generating button classes:

```scss
@each $key, $val in $colors {
  .button-#{$key} {
    // CSS properties and values for the button
  }
}
```

#### Creating a Mixin for Button Properties

- To avoid duplicating code for button properties and values in different selectors, we'll create a mixin.

- Declare a mixin named `btn` with parentheses and curly braces:

```scss
@mixin btn {
  // CSS properties and values for the button
}
```

- Include this mixin in the selectors for different button colors.

#### Using Variables in Mixins

- We can pass values or arguments into mixins.

- For example, we can pass in a background color as a parameter:

```scss
@mixin btn($bg-color) {
  background-color: $bg-color;
  // Other properties and values
}
```

#### Creating a Generic Button Class

- We can create a generic button class that uses a default background color:

```scss
@include btn($bg-color: #e2e2e2);
```

#### Adding Hover Effects

- Apply hover effects to the button classes:

```scss
&:hover {
  background-color: lighten($val, 5%);
}
```

- For outlined buttons:

```scss
&:hover {
  background-color: $val;
}
```

#### Using the Button Classes

- In your HTML, apply the button classes to anchor tags as needed.

- Example usage:

```html
<a class="button">Default Button</a>
<a class="button-primary text-white">Primary Button</a>
<a class="button-secondary text-white">Secondary Button</a>
<a class="button-error text-white">Error Button</a>
<a class="button-info text-white">Info Button</a>
<a class="button-outlined-purple">Outlined Purple</a>
<a class="button-outlined-orange">Outlined Orange</a>
```

### **=>** Functions

>

#### Introduction

- Functions in SASS are similar to mixins but different in functionality.

- Mixins group CSS properties together, while functions return a single value, often based on an argument.

- Functions can be used for property values.

#### Creating a Custom Function

- To create a custom function, we'll demonstrate by creating a button variant that uses a complementary color.

- Create a functions file inside the Shinobi folder: `shinobi/functions.scss`.

- Define a function named `light-comp` to calculate a complementary color and lighten it.

- The function takes an argument, which is the color to complement and lighten.

- Example code for the custom function:

```scss
@function light-comp($color) {
  $complement: complement($color);
  $light-complement: lighten($complement, 30%);
  @return $light-complement;
}
```

#### Using the Custom Function in a Button Variant

- Apply the custom function to a button variant called `button-complement-<color>`.

- Include the `functions.scss` file.

- Use the `light-comp` function to set the color property and background-color property on hover.

#### Example Usage in HTML

- Create anchor tags with classes corresponding to the `button-complement` variants.

- Pass in a color argument to the function based on your desired color.

```html
<a class="button-complement-purple">Complement Purple</a>
<a class="button-complement-primary">Complement Primary</a>
```

#### Testing the Result

- After applying the function and creating HTML elements, preview the result in a browser.

- Observe how the text color and background color change, demonstrating the use of the custom function.

### **=>** Making Utility Classes

>

#### Introduction

- The next thing I'd like to do is to create some utility classes for this library that we're creating now.

- In many other CSS libraries and frameworks, you often see classes like `m-4` for margin in all directions and `p-l-3` for padding left with a strength of three, or `o-40` for opacity.

- We're going to generate these kinds of classes in this lesson, and it's going to be a little more complex than some of the things we've been working on so far.

#### Creating a Utilities File

- The first thing I want to do is create a file to create all of our utility classes in.

- Inside the `shinobi` folder: `_utilities.scss`.

- Import that file at the bottom: `@import utilities;`

#### Creating Utility Classes

- In the `utilities` file, we're going to create a map of different utility classes.

- We'll start with the `padding` utility.

  - Prefix: `p`

  - Values:

    - `0` - Zero padding

    - `1` - Base padding

    - `2` - Base padding times 2

    - ...

    - `5` - Base padding times 8

- Similarly, we create `padding-left` utility.

  - Prefix: `pl`

  - Values: `0`, `1`, `2`, ..., `5`

- We repeat this for `padding-right` and `padding-top` with their respective prefixes.

- We also create `padding-bottom` utility.

- Next, we create `margin` utility.

  - Prefix: `m`

  - Values: `0`, `1`, `2`, ..., `5`

- We create `margin-left`, `margin-right`, `margin-top`, and `margin-bottom` utilities.

- We create `opacity` utility.

  - Prefix: `o`

  - Values: `0`, `10`, `20`, ..., `100`

- We create `border-radius` utility.

  - Prefix: `br`

  - Values: `none`, `xs`, `sm`, `lg`, `xl`, `xxl`, and a default case.

- We create `display` utility.

  - Prefix: `d`

  - Values: `n`, `b`, `f`, `i`, `ib`, and `ifb`.

- We create `font-size` utility.

  - Prefix: `fs`

  - Values: `small`, `medium`, `large`, `xl`, `xxl`.

#### Generating Utility Classes

- We generate utility classes for each property and its values.

- For each property in the map:

  - Get the prefix and values.

  - For each value in values:

    - If it's "default," use only the prefix (e.g., `pl` for padding-left).

    - Otherwise, create a class with the prefix and the value (e.g., `pl-1` for padding-left strength 1).

    - Apply the property and value in the selector.

#### Applying Utility Classes

- In the `index.css` file, apply these utility classes to elements to see them in action.

Now you have the text formatted using Markdown with h4 tags, bullet points, and backticks for code terminology.

### **=>** Media Queries
