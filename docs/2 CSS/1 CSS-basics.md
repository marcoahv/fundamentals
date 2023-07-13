---
sidebar_position: 1
---

# CSS BASICS

---

## 1 Implementing CSS

>

### Inline CSS

- Inline CSS refers to the practice of adding CSS styles directly within the HTML markup of an element using the `style` attribute.

- It allows you to apply specific styles to individual elements without the need for an external CSS file.

Here is an example of how inline CSS can be used in HTML:

```html
<p style="color: blue; font-size: 16px;">This is a paragraph with inline CSS styles.</p>
<h1 style="background-color: yellow; padding: 10px;">This is a heading with inline CSS styles.</h1>
```

- In the above example, the `style` attribute is added to the `<p>` and `<h1>` elements to apply specific styles.

- The styles are defined within the attribute value using CSS property-value pairs.

- Multiple styles can be applied by separating them with a semicolon.

- Inline CSS can be useful for applying quick and specific styles to individual elements.

- However, it is generally recommended to use external CSS files or internal `<style>` tags for more complex and reusable styles, as inline CSS can become difficult to manage and maintain in larger projects.

### Separation of concerns

- Separation of concerns is a design principle in software development that aims to divide a computer program into distinct sections, each addressing a specific concern or responsibility.

- The goal is to improve maintainability, modularity, and reusability by keeping different aspects of the system separate and independent from each other.

- In web development, separation of concerns often refers to the separation of HTML (structure), CSS (presentation), and JavaScript (behavior) in order to achieve a clean and organized codebase.

- This allows developers to work on different aspects of the project independently, making it easier to understand, maintain, and update the code.

- By separating concerns, changes or updates to one aspect of the system are less likely to have unintended consequences on other parts.

- For example, modifying the visual appearance of a webpage can be done by updating the CSS files without affecting the underlying HTML or JavaScript functionality.

- Overall, separation of concerns is a fundamental principle that promotes code organization, scalability, and code reusability in software development.

### Internal CSS

- Internal CSS refers to the practice of including CSS code directly within an HTML document, typically within the `<style>` tags within the `<head>` section.

- This allows you to define and apply styles specifically to that HTML document.

Here is an example of using internal CSS:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Internal CSS Example</title>
    <style>
      body {
        background-color: lightblue;
        font-family: Arial, sans-serif;
      }
      h1 {
        color: darkblue;
        text-align: center;
      }
      p {
        color: black;
        font-size: 16px;
      }
    </style>
  </head>
  <body>
    <h1>Welcome to my website!</h1>
    <p>This is an example of using internal CSS.</p>
  </body>
</html>
```

- In this example, the CSS code is placed within the `<style>` tags in the `<head>` section.

The CSS rules defined within this internal style block will be applied to the HTML elements within the document.

- In this case, the background color of the `<body>` element is set to light blue, the color of the `<h1>` element is set to dark blue with centered alignment, and the color and font size of the `<p>` element are specified.

- Internal CSS is useful for small-scale projects or when you want to apply specific styles to a single HTML document.

- However, for larger projects or when you want to reuse styles across multiple pages, it is generally recommended to use external CSS files.

### CSS syntax

- The CSS syntax is used to define styles and apply them to HTML elements.

- It consists of selectors, properties, and values.

Here is a basic example of the CSS syntax:

```css
selector {
  property: value;
}
```

- The selector targets the HTML element(s) to which the styles will be applied.

- The property defines the specific aspect of the element that will be styled.

- The value specifies the value for the property.
- For instance, let's say we want to set the color of all `<h1>` elements to red.

  We would use the following CSS syntax:

```css
h1 {
  color: red;
}
```

- In this example, `h1` is the selector targeting all `<h1>` elements, `color` is the property specifying the text color, and `red` is the value assigned to the color property.

- CSS syntax allows for more complex selectors, multiple properties and values, and various units of measurement to define styles for HTML elements.

- It provides a powerful way to customize the appearance of web pages.

### External CSS

- External CSS refers to a separate CSS file that is linked to an HTML document using the `<link>` element.

- This external CSS file contains the styles that will be applied to the HTML elements.

- It allows for better organization and separation of concerns, as the styles are stored in a separate file rather than being embedded directly in the HTML document.

Here is an example of how to link an external CSS file to an HTML document:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>External CSS Example</title>
    <link rel="stylesheet" type="text/css" href="styles.css" />
  </head>
  <body>
    <h1>Welcome to my website!</h1>
    <p>This is a paragraph with some text.</p>
  </body>
</html>
```

- In the example above, the `<link>` element is used in the `<head>` section of the HTML document.

- The `rel` attribute specifies the relationship between the HTML document and the linked file, which is "stylesheet" in this case.

- The `type` attribute specifies the MIME type of the linked file, which is "text/css" for CSS files.

- The `href` attribute specifies the path to the external CSS file, which is "styles.css" in this example.

- `By using external CSS, you can easily maintain and update styles across multiple HTML documents, as changes made in the external CSS file will be automatically applied to all linked HTML documents.`

### **Practice 1**

> Practice: in a folder with a html and a css file...

#### `three` different ways to implement CSS

>

#### inline CSS

Using inline css give the text in the h1 a red color...

```html
<h1 style="color:red">Heading One</h1>
<h2>Heading Two</h2>
<h3>Heading Three</h3>
```

#### separation of concerns...

Now you don't want to do this and the reason for that is you want to _keep separation of concerns_.

you want to _keep your styling out of your markup_.

And when you do it like this you're just clumping it all together.

It's much _harder to read_.

It's much _harder to change_.

It's just _not good practice_ and any developer will give you crap for doing this.

So this is not something you want to do but it's something that you should know you can do.

#### internal CSS

using internal CSS give the h2 a color green...

```html
<style>
  h2 {
    color: green;
  }
</style>
```

#### CSS syntax

```css
h2 {
  color: green;
}
```

Now let's go over this syntax really quick.

the first thing here is a...

_selector (h2)_

then...

_the declarations start ({)_

We also have...

_the declarations end (})_

and inside the curly braces we have...

_a property_

And then...

_the value_

And in between that we have...

_the property/value separator (:)_ colon

and you can add more properties, you just want to end each one with...

_the declaration separator (;)_ semicolon

#### external CSS

using a css file in a css folder and a link tag with its 2 necessary attributes, style the h3 blue...

```html
<!-- index.html -->
<link rel="stylesheet" href="css/style.css" />
```

```css
/* styles.css */
h3 {
  color: blue;
}
```

- Now out of these three this is the preferred using an external CSS file.

---

## 2 Basic CSS Selectors

>

### Element selector

- The element selector in CSS is used to target and select specific HTML elements based on their tag name.

- It allows you to apply styles to all instances of a particular HTML element on a web page.

- The element selector is represented by the tag name of the HTML element.

For example, to select and style all `<p>` elements, you would use the following CSS rule:

```css
p {
  /* CSS styles here */
}
```

In the above example, the `p` selector targets all `<p>` elements and applies the specified CSS styles to them. You can replace `p` with any other HTML tag name to target different elements.
Element selectors are one of the most basic and commonly used selectors in CSS. They provide a way to apply styles to specific HTML elements throughout your web page.

### Id selector

The id selector in CSS is used to select and style a specific HTML element based on its unique id attribute value. Unlike the element selector, which targets all instances of a particular HTML element, the id selector selects only the element with the specified id.
The id selector is represented by the `#` symbol followed by the id value. For example, to select and style an element with the id "my-element", you would use the following CSS rule:

```css
#my-element {
  /* CSS styles here */
}
```

In the above example, the `#my-element` selector targets the HTML element with the id "my-element" and applies the specified CSS styles to it.
It is important to note that the id attribute should be unique within the HTML document. This means that only one element should have a particular id value.
The id selector is useful when you want to style or manipulate a specific element on your web page. It provides a way to target and apply styles to a single element based on its unique identifier.

### Class selector

The class selector in CSS is used to select and style one or more HTML elements that share the same class attribute value. It allows you to apply styles to multiple elements at once, grouping them together based on a common class name.
The class selector is represented by a period ( `.` ) followed by the class name. For example, to select and style all elements with the class "my-class", you would use the following CSS rule:

```css
.my-class {
  /* CSS styles here */
}
```

In the above example, the `.my-class` selector targets all HTML elements that have the class "my-class" and applies the specified CSS styles to them.
To apply the class to an HTML element, you would add the `class` attribute to the element and assign it the desired class name. Multiple elements can share the same class name, allowing you to style or manipulate them collectively.
Here is an example of how the class selector can be used:

```html
<p class="my-class">This paragraph has the class "my-class".</p>
<div class="my-class">This div also has the class "my-class".</div>
```

In the above example, both the `<p>` and `<div>` elements have the class "my-class", so they will be selected and styled by the `.my-class` selector in CSS.
The class selector is a powerful tool for applying consistent styles to multiple elements with the same class, making it easier to maintain and update the styling of your web page.

### Naming conventions

When naming classes using the class selector in CSS, it is important to follow some naming conventions to ensure clarity, consistency, and maintainability in your codebase. Although there are no strict rules, here are some commonly used conventions for naming classes:

1.  Use meaningful and descriptive names: Choose class names that accurately describe the purpose or role of the element. This helps make your code more readable and understandable.
2.  Use lowercase letters: It is generally recommended to use lowercase letters for class names. This improves consistency and avoids any potential case-sensitivity issues.
3.  Use hyphen or underscore as word separators: When using multiple words in a class name, you can use either hyphens or underscores to separate the words. For example, `.my-class` or `.my_class` .
4.  Be consistent and maintain a naming convention: It's important to establish a consistent naming convention and stick to it throughout your codebase. This makes it easier for you and other developers to understand and maintain the code.
5.  Avoid generic or ambiguous names: Try to avoid using generic or ambiguous class names like `.box` or `.container` . Instead, opt for more specific and contextual names that reflect the purpose of the element.
6.  Use BEM (Block Element Modifier) methodology: BEM is a popular naming convention that helps create modular and reusable CSS classes. It follows a naming structure like `.block` , `.block__element` , and `.block--modifier` to represent the relationship between elements.
    Example of BEM naming convention:

```css
.person-card {
  /* Styles for the entire person card block */
}
.person-card__name {
  /* Styles for the name element within the person card */
}
.person-card--highlighted {
  /* Modifier class to highlight the person card */
}
```

By following these naming conventions, you can create more maintainable and organized CSS code, making it easier to understand and collaborate with other developers.

### Multiple selectors

When using multiple CSS selectors, you can target specific elements based on different criteria. Here are a few examples of using multiple CSS selectors:

1.  Selector grouping: You can group selectors together by separating them with a comma (,). This allows you to apply the same styles to multiple elements. For example:

```css
h1,
h2,
h3 {
  color: blue;
}
```

In the above example, the styles will be applied to all `<h1>` , `<h2>` , and `<h3>`elements, making their text color blue. 2. Descendant selector: You can select elements that are descendants of another element by using a space between the selectors. For example:

```css
.container p {
  font-size: 16px;
}
```

In the above example, the styles will be applied to all `<p>` elements that are descendants of an element with the class "container". 3. Child selector: You can select elements that are direct children of another element by using the greater than sign (>). For example:

```css
ul > li {
  list-style-type: square;
}
```

In the above example, the styles will be applied to all `<li>` elements that are direct children of a `<ul>` element. 4. Adjacent sibling selector: You can select elements that are immediately preceded by another element by using the plus sign (+). For example:

```css
h2 + p {
  font-weight: bold;
}
```

In the above example, the styles will be applied to all `<p>` elements that are immediately preceded by an `<h2>` element.
These are just a few examples of how you can use multiple CSS selectors to target specific elements based on different criteria. By combining selectors, you can create more specific and targeted styles for your HTML elements.

### Nested selector

A nested selector in CSS refers to a selector that is nested inside another selector. It allows you to target specific elements that are descendants of another element and apply styles accordingly. This is achieved by using a space between the selectors.
Here's an example of a nested selector in CSS:

```css
.container {
  background-color: #f2f2f2;
}
.container h1 {
  color: blue;
}
```

In the above example, the `.container` class is used as the parent selector, and the `h1` element is the nested selector. This means that the styles defined inside the `.container h1` selector will only apply to `h1` elements that are descendants of an element with the class `container` . In this case, the `h1` elements inside the `.container` element will have a blue color.
Nested selectors are useful when you want to apply specific styles to elements within a certain container or context, without affecting other elements on the page. They allow for more precise targeting and styling of specific elements within the HTML structure.

### **Practice 2**

---

## 3 Dev Tools Introduction

>

### Dev Tools

Dev Tools (short for Developer Tools) is a set of web browser features and tools that are built into modern web browsers. They provide developers with a comprehensive set of utilities for debugging, inspecting, and analyzing web pages and web applications.
The Dev Tools typically include a variety of panels and tabs that offer different functionalities. Some common features of Dev Tools include:

1.  Elements Panel: This panel allows you to inspect and modify the HTML and CSS of a web page. You can view the DOM (Document Object Model) structure, inspect and modify CSS styles, and even make live edits to see the changes in real-time.

2.  Console Panel: The console panel is where you can interact with JavaScript on a web page. You can run JavaScript code, log messages, and debug your JavaScript applications. It is a powerful tool for testing and troubleshooting.

3.  Network Panel: This panel provides insights into the network activity of a web page. You can see the requests and responses made by the browser, analyze network performance, and identify potential bottlenecks.

4.  Sources Panel: The sources panel allows you to debug and analyze JavaScript code. You can set breakpoints, step through code execution, inspect variables, and analyze runtime behavior.

5.  Performance Panel: This panel helps you analyze the performance of a web page or application. You can record and analyze performance profiles, identify performance bottlenecks, and optimize the loading and rendering process.

6.  Application Panel: The application panel is used for inspecting and managing web storage, such as cookies, local storage, and indexedDB. You can view, add, modify, and delete data stored by a website.
    These are just a few examples of the features and panels available in Dev Tools. Each browser may have its own set of tools and variations, but the core functionalities are generally similar.
    Dev Tools are an essential part of web development, providing developers with powerful capabilities to debug, optimize, and understand their web projects. They are commonly accessed by right-clicking on a web page and selecting "Inspect" or by using keyboard shortcuts.

### Open the dev tools

- the Elements tab
- hover over elements
- the select tool
- default browser styling (user agent style sheet)
- change stuff here to, temporarily

### **Practice 3**

---

## 4 Fonts and Units In CSS

>

### Adding a font family

>

### To add fonts to a website, you have a few options:

1.  System Fonts: You can use the default fonts available on users' systems by specifying generic font families like `sans-serif` , `serif` , or `monospace` . These fonts are automatically applied based on the user's operating system settings.

2.  Web-safe Fonts: These are fonts that are widely available across different operating systems and browsers. Examples include Arial, Times New Roman, and Verdana. You can use these fonts by specifying their names in the `font-family` property in CSS.

3.  Google Fonts: Google Fonts is a popular library of free web fonts that you can easily integrate into your website. You can choose from a wide variety of fonts and include them in your site by adding a link to the Google Fonts stylesheet in the `<head>` section of your HTML file. Then, you can apply the chosen fonts to your elements using the `font-family` property in CSS.
    Here's an example of how to include and use a Google Font:

```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto" />
    <style>
      body {
        font-family: 'Roboto', sans-serif;
      }
    </style>
  </head>
  <body>
    <h1>Welcome to My Website</h1>
    <p>This paragraph uses the Roboto font from Google Fonts.</p>
  </body>
</html>
```

In the above example, we include the Roboto font from Google Fonts by adding a link to the Google Fonts stylesheet. Then, we set the `font-family` of the `body` element to `'Roboto'` , followed by a generic sans-serif font. This ensures that the Roboto font is used for the body text if it's available, and falls back to a generic sans-serif font if it's not.
Remember to consider the licensing and terms of use for any fonts you include in your website.

### To add a font family to your web page, you can use CSS.

The `font-family` property is used to specify the font you want to use for text within an element or a group of elements.
Here's an example of how you can add a font family to a CSS rule:

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      body {
        font-family: Arial, sans-serif;
      }
      h1 {
        font-family: 'Times New Roman', serif;
      }
      .custom-font {
        font-family: 'Open Sans', sans-serif;
      }
    </style>
  </head>
  <body>
    <h1>Welcome to My Website</h1>
    <p>This paragraph uses the default font.</p>
    <p class="custom-font">This paragraph uses a custom font.</p>
  </body>
</html>
```

In the above example, the `font-family` property is used to set the font for the `body` element to Arial as the preferred font, followed by a generic sans-serif font in case Arial is not available. The `h1` element is set to use Times New Roman as the preferred font, followed by a generic serif font. The `.custom-font` class is used to apply a custom font called Open Sans, followed by a generic sans-serif font.
You can specify multiple fonts separated by commas, and the browser will use the first available font from the list. It's a good practice to include generic font families at the end of the list to ensure that the browser can fallback to a similar font if the specified font is not available on the user's system.

### font stack

A font stack refers to a list of fonts specified in CSS that are used as fallback options in case the desired font is not available on a user's device. The font stack is written as a comma-separated list, with the preferred font listed first and the fallback fonts listed afterwards.
Here is an example of a font stack in CSS:

```css
body {
  font-family: 'Helvetica Neue', Arial, sans-serif;
}
```

In the above example, the preferred font is "Helvetica Neue". If that font is not available, the browser will attempt to use the next font in the stack, which is "Arial". If "Arial" is also not available, the browser will then use a generic sans-serif font as the final fallback option.
It's important to provide a font stack that includes both commonly available fonts and generic font families to ensure that the text is displayed consistently across different devices and platforms.

### Using Google fonts

To use Google Fonts in your HTML, you need to follow these steps:

1. Go to the Google Fonts website (fonts.google.com).

2. Browse through the available fonts and select the ones you want to use by clicking the "+" icon next to each font.

3. Once you have selected all the fonts you want, click the "Family Selected" button at the bottom of the screen.

4. In the pop-up window, you will see the embed code for the selected fonts. Copy the `<link>` tag provided.

5. Paste the `<link>` tag inside the `<head>` section of your HTML document.
   Here's an example of how to use Google Fonts in your HTML:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Using Google Fonts</title>
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
      rel="stylesheet"
    />
    <style>
      body {
        font-family: 'Roboto', sans-serif;
      }
    </style>
  </head>
  <body>
    <h1>Welcome to my website</h1>
    <p>This is a paragraph of text using the Roboto font from Google Fonts.</p>
  </body>
</html>
```

In this example, we are using the Roboto font from Google Fonts. The `<link>` tag is added in the `<head>` section to import the font stylesheets. Then, in the CSS, we set the `font-family` property to `'Roboto', sans-serif` to apply the Roboto font to the entire body of the page.

Remember to replace `'Roboto'` with the name of the specific font you want to use from Google Fonts. You can also adjust the font weights and styles by modifying the URL in the `<link>` tag.
By using Google Fonts, you can enhance the typography of your web page with a wide range of fonts that are easy to integrate and widely supported across different browsers.

### font-size

The `font-size` property in CSS is used to specify the size of the text. It determines the height of the font characters and is usually expressed in pixels (px), ems (em), or percentages (%).
Here's an example of how to use the `font-size` property in CSS:

```css
p {
  font-size: 16px;
}
```

In the above example, the `font-size` property is applied to the `<p>` element and set to 16 pixels. This will make the text inside the `<p>` element appear with a font size of 16 pixels.
You can also use other units like em or percentage to define the font size relative to the parent or the browser's default font size.

```css
h1 {
  font-size: 2em;
}
h2 {
  font-size: 150%;
}
```

In the above examples, the `font-size` property is used with em and percentage units. The first example sets the font size of the `<h1>` element to be twice the size of its parent element's font size. The second example sets the font size of the `<h2>` element to be 150% of the browser's default font size.
By adjusting the `font-size` property, you can control the visual appearance and readability of text on your web page.

### line-height

The `line-height` property in CSS is used to control the height of a line of text. It determines the amount of vertical space between lines within a block-level element. The value of the `line-height` property can be specified in different units such as pixels (px), ems (em), or as a unitless value.
Here's an example of how to use the `line-height` property in CSS:

```css
p {
  line-height: 1.5;
}
```

In the above example, the `line-height` property is applied to the `<p>` element and set to a unitless value of 1.5. This means that the height of each line of text within the `<p>` element will be 1.5 times the font size of that text.
You can also use specific units like pixels or ems to define the line height.

```css
h1 {
  line-height: 30px;
}
h2 {
  line-height: 1.2em;
}
```

In the above examples, the `line-height` property is used with pixel and em units. The first example sets the line height of the `<h1>` element to 30 pixels, while the second example sets the line height of the `<h2>` element to 1.2 times the font size of that text.
By adjusting the `line-height` property, you can control the spacing between lines of text, improving readability and aesthetics on your web page.

### CSS Absolute Units

Absolute units in CSS are those that are fixed and do not change based on the user's settings or device characteristics. These units include:

1.  `px` (pixels): The most commonly used absolute unit. One pixel represents a single dot on a screen. For example, `width: 200px;` sets the width of an element to 200 pixels.

2.  `in` (inches): Represents inches. For example, `width: 2in;` sets the width of an element to 2 inches.

3.  `cm` (centimeters): Represents centimeters. For example, `width: 5cm;` sets the width of an element to 5 centimeters.

4.  `mm` (millimeters): Represents millimeters. For example, `width: 30mm;` sets the width of an element to 30 millimeters.

5.  `pt` (points): Represents points, where 1 point is equal to 1/72 of an inch. For example, `font-size: 12pt;` sets the font size to 12 points.

6.  `pc` (picas): Represents picas, where 1 pica is equal to 12 points. For example, `line-height: 1.5pc;` sets the line height to 1.5 picas.
7.  It's important to note that absolute units like pixels provide precise control over the layout and appearance of elements, but they may not always result in consistent sizes across different devices and screens. Responsive design techniques and relative units like percentages and `em` are often used to create more flexible and adaptable layouts.

### CSS Relative Units

Relative units in CSS are those that are based on the context or characteristics of the elements they are applied to. These units allow for more flexible and responsive designs. Some commonly used relative units include:

1.  `em` : Represents the current element's font size. For example, `font-size: 1.5em;` sets the font size to 1.5 times the parent element's font size.

2.  `rem` : Represents the root element's font size. It is similar to `em` , but instead of being based on the parent element's font size, it is based on the root element (usually `<html>` ). For example, `font-size: 1.2rem;` sets the font size to 1.2 times the root element's font size.

3.  `%` : Represents a percentage of the parent element's size. For example, `width: 50%;` sets the width of an element to 50% of its parent element's width.

4.  `vw` (viewport width): Represents a percentage of the viewport's width. For example, `width: 30vw;` sets the width of an element to 30% of the viewport's width.

5.  `vh` (viewport height): Represents a percentage of the viewport's height. For example, `height: 50vh;` sets the height of an element to 50% of the viewport's height.

6.  Relative units are useful for creating responsive designs that adapt to different screen sizes and devices. They allow elements to scale proportionally and maintain their relative relationships.

### font-weight

The `font-weight` property in CSS is used to specify the weight or thickness of the text characters. It determines how bold or light the text appears on the web page. The `font-weight` property accepts different values, including numerical values and predefined keywords.
Some commonly used numerical values for `font-weight` are:

- `normal` (equivalent to 400)

- `bold` (equivalent to 700)

- Values between 100 and 900 (in multiples of 100), where lower values are lighter and higher values are bolder.
  Here is an example of how the `font-weight` property can be used in CSS:

```css
h1 {
  font-weight: bold;
}
p {
  font-weight: 300;
}
```

In the above example, the `h1` heading element will be displayed in bold, while the `p` paragraph element will have a lighter (thinner) font weight.

It's important to note that the actual appearance of different `font-weight` values can vary depending on the font used. Some fonts may not have distinct variations for all weight values. Additionally, not all font weights are available for all fonts.

### font-style

The `font-style` property in CSS is used to specify the style of the text characters, such as italic or normal. It allows you to control the slant or posture of the text.
The `font-style` property accepts the following values:

- `normal` : This is the default value and represents normal, upright text.

- `italic` : This value makes the text appear italicized, with a slight slant to the right.

- `oblique` : This value also slants the text, but the degree of slant is determined by the browser or font, and it may not appear as true italics.
  Here is an example of how the `font-style` property can be used in CSS:

```css
p {
  font-style: italic;
}
h1 {
  font-style: oblique;
}
```

In the above example, the `p` paragraph element will be displayed in italic style, while the `h1` heading element will be displayed with an oblique style.
It's important to note that the `font-style` property is dependent on the font being used. Some fonts may not have distinct italic or oblique styles, and in those cases, the browser may simulate the style.

### **Practice 4**

---

## 5 Color Types

>

### Color name type

The color name type in HTML and CSS refers to the way colors are specified using predefined names. These names represent specific colors and can be used to set the color of text, backgrounds, borders, and other elements.
There are 147 color names defined in the CSS Color Module Level 3 specification, including common names like "red", "blue", "green", "yellow", and many others. Some examples of color names are:

- "red"
- "blue"
- "green"
- "yellow"
- "purple"
- "orange"
- "black"
- "white"

  Here is an example of how color names can be used in CSS:

```css
p {
  color: red;
  background-color: yellow;
  border: 1px solid blue;
}
```

In this example, the text color of the `<p>` element will be set to red, the background color will be set to yellow, and the border will have a solid blue color.
It's important to note that color names are limited to the predefined set of names and may not cover all possible colors. For more precise control over colors, hexadecimal codes (#RRGGBB or #RGB), RGB values (rgb(r, g, b)), or HSL values (hsl(h, s, l)) can be used.

### rgb value

The RGB value is a way to specify a color using the combination of red, green, and blue values.

It is a numerical representation of the intensity of each color component, ranging from 0 to 255. By varying the values of red, green, and blue, you can create a wide range of colors.

The syntax for specifying an RGB value in CSS is `rgb(red, green, blue)` , where red, green, and blue are integers between 0 and 255.
Here are a few examples of RGB values:

- `rgb(255, 0, 0)` represents the color red.

- `rgb(0, 255, 0)` represents the color green.

- `rgb(0, 0, 255)` represents the color blue.

- `rgb(255, 255, 0)` represents the color yellow.

- `rgb(255, 0, 255)` represents the color magenta.

- `rgb(0, 255, 255)` represents the color cyan.
  You can use RGB values in CSS to set the color of various elements, such as text, backgrounds, borders, and more.

  It's worth mentioning that there are other color models available, such as hexadecimal (e.g.,` #FF0000` for red) and HSL (Hue, Saturation, Lightness), which provide alternative ways to specify colors.

### Hexadecimal or hex value

Hexadecimal, also known as hex value or hex code, is a numerical representation of colors using a combination of six characters: digits 0-9 and letters A-F.

Each pair of characters represents the intensity of red, green, and blue color components.

Hexadecimal values range from 00 to FF, where 00 represents the absence of a color component and FF represents the maximum intensity.

The syntax for specifying a color using hexadecimal notation in CSS is `#RRGGBB` , where RR represents the red component, GG represents the green component, and BB represents the blue component.

Here are a few examples of hexadecimal color values:

- `#FF0000` represents the color red.

- `#00FF00` represents the color green.

- `#0000FF` represents the color blue.

- `#FFFF00` represents the color yellow.

- `#FF00FF` represents the color magenta.

- `#00FFFF` represents the color cyan.

  Hexadecimal values are commonly used in web development to set colors for various elements.

  They provide a more concise and widely supported method of specifying colors compared to other color models.

  If you have any further questions or need assistance with specific color values, feel free to ask!

### **Practice 5**

---

## 6 Backgrounds & Borders

>

### background-color property

The `background-color` property in CSS is used to specify the background color of an element.

It sets the color that appears behind the content and padding of the element.

The `background-color` property accepts a variety of color values, including hexadecimal color codes, RGB values, color names, and HSL values.

Here are a few examples:

- Hexadecimal color code: `background-color: #FF0000;` (sets the background color to red)

- RGB value: `background-color: rgb(255, 0, 0);` (also sets the background color to red)

- Color name: `background-color: blue;` (sets the background color to blue)

- HSL value: `background-color: hsl(240, 100%, 50%);` (sets the background color to a shade of blue)

  You can also use transparent as a value to make the background color fully transparent.
  Here is an example of how to use the `background-color` property in CSS:
  `c`ss
  div {
  background-color: #FF0000;
  }

  ```

  This example sets the background color of all `<div>` elements to red.
  ```

### Border (has three mandatory properties)

The `border` property in CSS is used to set the border around an element.

It has three mandatory properties: `border-width` , `border-style` , and `border-color` .

These properties define the width, style, and color of the border, respectively.

Here is an example of how to use the `border` property in CSS:

```css
div {
  border: 1px solid black;
}
```

In this example, the `border` property is applied to all `<div>` elements. It sets the border width to `1px` , the border style to `solid` , and the border color to `black` .

You can customize each property individually if you need different values for the border width, style, or color. For example:

```css
div {
  border-width: 2px;
  border-style: dashed;
  border-color: red;
}
```

In this case, the border width is set to `2px` , the border style is set to `dashed` , and the border color is set to `red` .

### Background property (if we want to add a color or background image)

The `background` property in CSS is used to set the background color or background image of an element.

It is a shorthand property that combines multiple background-related properties into a single declaration.

Here is an example of using the `background` property to set a background color:

```css
div {
  background: yellow;
}
```

In this example, the `background` property sets the background color of the `<div>` element to yellow.

You can also use the `background` property to set a background image:

```css
div {
  background: url('image.jpg');
}
```

In this case, the `background` property sets the background image of the `<div>` element to the specified image file ("image.jpg" in this example).

Additionally, you can specify other background-related properties within the `background` shorthand, such as background position, background repeat, and background size. Here's an example:

```css
div {
  background: url('image.jpg') center/cover no-repeat;
}
```

In this example, the `background` property sets the background image, positions it in the center, scales it to cover the entire element, and prevents it from repeating.

Using the `background` shorthand property allows you to set various background-related properties in a single declaration, making it convenient and concise.

### png image (if you want transparency)

When it comes to images, the PNG (Portable Network Graphics) format supports transparency.

PNG images can have transparent backgrounds, allowing the underlying content or background to show through.

To create a PNG image with transparency, you can use image editing software like Adobe Photoshop, GIMP, or online tools like Canva or Pixlr. These tools provide options to save or export images in the PNG format while preserving transparency.

### border-top (bottom left right)

The `border-top` , `border-bottom` , `border-left` , and `border-right` are CSS properties used to set the border style, color, and width for the top, bottom, left, and right sides of an element, respectively.

Here is an example of how to use these properties in CSS:

```css
div {
  border-top: 1px solid black;
  border-bottom: 2px dashed blue;
  border-left: 3px dotted red;
  border-right: 4px double green;
}
```

In the above example, the `div` element has different border styles applied to each side.

The top border has a solid black line, the bottom border has a dashed blue line, the left border has a dotted red line, and the right border has a double green line.

These properties can be used individually or combined to create custom border styles for elements in HTML and CSS.

### border-radius

The `border-radius` CSS property is used to specify the radius of the corners of an element's border.

It allows you to create rounded corners for elements such as divs, buttons, and images.

Here is an example of how to use the `border-radius` property in CSS:

```css
div {
  border: 2px solid black;
  border-radius: 10px;
}
```

In the above example, the `div` element has a border of 2 pixels with a solid black color. The `border-radius` property is set to 10 pixels, which gives the corners of the div a rounded appearance.

You can also specify different radii for each corner using the `border-radius` property:

```css
div {
  border: 2px solid black;
  border-radius: 10px 20px 30px 40px;
}
```

In this example, the top-left corner has a radius of 10 pixels, the top-right corner has a radius of 20 pixels, the bottom-right corner has a radius of 30 pixels, and the bottom-left corner has a radius of 40 pixels.

The `border-radius` property provides flexibility in creating visually appealing designs by adding rounded corners to elements.

### border-top-left-radius

The `border-top-left-radius` CSS property is used to specify the radius of the top-left corner of an element's border.

It allows you to create a rounded corner specifically for the top-left corner.

Here is an example of how to use the `border-top-left-radius` property in CSS:

```css
div {
  border: 2px solid black;
  border-top-left-radius: 10px;
}
```

In the above example, the `div` element has a border of 2 pixels with a solid black color.

The `border-top-left-radius` property is set to 10 pixels, which gives only the top-left corner of the div a rounded appearance.

You can also specify different radii for each corner using the `border-radius` property, which includes the top-left corner:

```css
div {
  border: 2px solid black;
  border-radius: 10px 20px 30px 40px;
}
```

In this example, the top-left corner has a radius of 10 pixels, while the other corners have different radii specified.

The `border-top-left-radius` property is useful when you want to apply a rounded corner effect to only one specific corner of an element's border.

### border-top-right-radius

The `border-top-right-radius` CSS property is used to specify the radius of the top-right corner of an element's border.

It allows you to create a rounded corner specifically for the top-right corner.

Here is an example of how to use the `border-top-right-radius` property in CSS:

```css
div {
  border: 2px solid black;
  border-top-right-radius: 10px;
}
```

In the above example, the `div` element has a border of 2 pixels with a solid black color. The `border-top-right-radius` property is set to 10 pixels, which gives only the top-right corner of the div a rounded appearance.

You can also specify different radii for each corner using the `border-radius` property, which includes the top-right corner:

```css
div {
  border: 2px solid black;
  border-radius: 10px 20px 30px 40px;
}
```

In this example, the top-right corner has a radius of 20 pixels, while the other corners have different radii specified.

The `border-top-right-radius` property is useful when you want to apply a rounded corner effect to only one specific corner of an element's border.

### background-image

The `background-image` CSS property is used to set an image as the background of an element.

It allows you to specify the URL or path to the image file that you want to use as the background.

Here is an example of how to use the `background-image` property in CSS:

```css
div {
  background-image: url('image.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}
```

In the above example, the `div` element will have the "image.jpg" file set as its background image.

The `background-repeat` property is set to "no-repeat" to ensure that the image is not repeated.

The `background-size` property is set to "cover" to make the image cover the entire background area of the element.

You can also use other values for the `background-image` property, such as gradients or data URIs. Additionally, you can specify multiple background images using the `background-image` property by separating them with commas.

Please note that the `background-image` property is not specific to any particular language and can be used in CSS regardless of the language being used in the conversation.

### background-repeat

The `background-repeat` CSS property is used to control how a background image is repeated or displayed when it doesn't cover the entire background area of an element.

It has several possible values:

- `repeat` (default): The background image is repeated both horizontally and vertically to fill the background area.

- `repeat-x` : The background image is repeated only horizontally.

- `repeat-y` : The background image is repeated only vertically.

- `no-repeat` : The background image is not repeated and displayed only once.

- `space` : The background image is repeated and spaced out to fill the background area, with the last image cut off if needed.

- `round` : The background image is repeated and scaled to fill the background area, with the last image possibly being stretched or compressed if needed.

Here's an example of how to use the `background-repeat` property in CSS:

```css
div {
  background-image: url('image.jpg');
  background-repeat: no-repeat;
}
```

In the above example, the `div` element will have the "image.jpg" file set as its background image, and it will not be repeated.

You can use the `background-repeat` property in combination with other background properties, such as `background-image` , `background-position` , and `background-size` , to achieve the desired background effect for your elements.

### background-position

The `background-position` CSS property is used to specify the starting position of a background image within its containing element.

It determines where the background image will be placed relative to the element's padding box.

The property takes two values, which can be specified in different units such as pixels (px), percentages (%), or keywords:

- `background-position: x-axis y-axis;`

- `background-position: horizontal vertical;`

- `background-position: keyword;`

For example:

```css
div {
  background-image: url('image.jpg');
  background-position: center top;
}
```

In the above example, the background image of the `div` element will be positioned at the center horizontally and aligned to the top vertically.

Some common values for `background-position` are:

- `left` , `center` , `right` for horizontal positioning.

- `top` , `center` , `bottom` for vertical positioning.

- Numerical values or percentages to specify exact positions.

  You can also use combinations of values like `left top` , `right bottom` , or `50% 50%` to position the background image accordingly.

  The `background-position` property gives you control over the placement of the background image within its container, allowing you to create various visual effects and alignments.

### background-size

The `background-size` CSS property is used to specify the size of a background image within its containing element.

It determines how the background image should be scaled or resized to fit the element's dimensions.

The property takes one or two values, which can be specified in different units such as pixels (px), percentages (%), or keywords:

- `background-size: width height;`

- `background-size: value;`

For example:

```css
div {
  background-image: url('image.jpg');
  background-size: cover;
}
```

In the above example, the background image of the `div` element will be scaled proportionally to cover the entire element's dimensions.

The `cover` value ensures that the entire background image is visible without distortion, even if it needs to be cropped.

Some common values for `background-size` are:

- `auto` : The background image is displayed at its original size.

- `cover` : The background image is scaled proportionally to cover the entire element's dimensions, potentially cropping parts of the image.

- `contain` : The background image is scaled proportionally to fit within the element's dimensions, potentially leaving empty space.

- Numerical values or percentages to specify exact sizes.

The `background-size` property provides control over how the background image is displayed and resized, allowing you to achieve different visual effects and adapt the image to fit the element's dimensions.

### we can use background for all together

Yes, we can use background properties to apply background styles to elements on a web page.

The `background` shorthand property allows you to set multiple background properties at once, such as background color, image, repeat, position, and size.

Here is an example of using the `background` property in CSS:

```css
div {
  background: #f2f2f2 url('image.jpg') no-repeat center / cover;
}
```

In the above example, the `background` property is applied to a `div` element.

It sets the background color to `#f2f2f2` , the background image to `image.jpg` , and sets it to not repeat ( `no-repeat` ).

The `center` value specifies the horizontal and vertical alignment of the background image, and the `cover` value scales the image proportionally to cover the entire element's dimensions.

By using the `background` shorthand property, you can easily set multiple background properties in a single declaration, making it more convenient to apply background styles to elements.

### background-attachment

The `background-attachment` property in CSS is used to specify whether a background image should scroll with the content or remain fixed in the viewport when the content is scrolled.

It controls the behavior of the background image in relation to the element's content.

There are three possible values for the `background-attachment` property:

- `scroll` : The background image scrolls along with the content.

- `fixed` : The background image remains fixed in the viewport, even when the content is scrolled.

- `local` : The background image scrolls with the element's content, independently of the viewport.

Here is an example of using the `background-attachment` property in CSS:

```css
div {
  background-image: url('image.jpg');
  background-attachment: fixed;
}
```

In the above example, the `background-attachment` property is set to `fixed` , which means that the background image specified by `url("image.jpg") ` will remain fixed in the viewport, regardless of scrolling the content inside the `div` element.

By using the ` background-attachment` property, you can control how the background image behaves when scrolling the content, allowing for various visual effects and design possibilities.

### **Practice 6**

---

## 7 Box Model, Margin & Padding

>

### Chrome tools and the box model

With Chrome DevTools, you can inspect and modify the box model of elements in real-time.

By selecting an element and navigating to the "Elements" panel in DevTools, you can see the box model displayed visually.

It shows the dimensions and properties of the element, including its content width and height, padding, border, and margin.

You can also make changes to the box model properties in DevTools to see how they affect the layout and appearance of the element.

For example, you can modify the padding or margin values to adjust the spacing around an element, or change the border properties to alter its appearance.

Overall, Chrome DevTools provides a powerful set of tools for inspecting and manipulating the box model, allowing developers to fine-tune the layout and design of their web pages.

### The box model

The box model is a fundamental concept in web design and development that describes how elements are displayed and take up space on a web page.

It consists of four main components: content, padding, border, and margin.

1.  Content: This is the actual content of the element, such as text, images, or other HTML elements.

2.  Padding: The padding is the space between the content and the element's border. It provides spacing and can be set using CSS properties like `padding-top` , `padding-right` , `padding-bottom` , and `padding-left` .

3.  Border: The border surrounds the padding and content of an element. It can have a specific width, style, and color defined using CSS properties like `border-width` , `border-style` , and `border-color` .

4.  Margin: The margin is the space between the element and its neighboring elements.

It provides spacing between elements and can be set using CSS properties like `margin-top` , `margin-right` , `margin-bottom` , and `margin-left` .

The box model helps determine the total space an element occupies on a web page.

The width and height of an element can be calculated by adding the content width and height with the padding, border, and margin values.

Understanding the box model is crucial for layout and positioning in web design. By manipulating the padding, border, and margin, you can control the spacing and arrangement of elements on a web page.

### CSS reset

A CSS reset is a set of CSS rules that aim to reset or normalize the default styles applied by browsers to HTML elements.

It helps in achieving consistent and predictable styling across different browsers and devices.

By default, different browsers may have different default styles for HTML elements.

For example, headings ( `<h1>` to `<h6>` ), paragraphs ( `<p>` ), lists ( `<ul>` , `<ol>` , `<li>` ), and other elements may have varying margins, paddings, font sizes, and other styles applied to them.

This can lead to inconsistencies in the appearance of web pages.

A CSS reset typically includes a set of CSS rules that remove or reset these default styles, allowing developers to start with a clean slate and apply their own styles consistently.

It often includes global rules like setting margins and paddings to 0, removing default list styles, and resetting font sizes and line heights.

Here is an example of a simple CSS reset:

```css
/* CSS Reset */
body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
ul,
ol,
li {
  margin: 0;
  padding: 0;
  font-size: 100%;
  font-weight: normal;
  line-height: 1.5;
}

/* Additional reset rules can be added as needed */
```

It's important to note that CSS resets should be used with caution, as they can remove some useful default styles and behavior provided by browsers.

Some developers prefer using CSS resets, while others opt for CSS normalization techniques that aim to preserve some of the useful default styles while still achieving consistency.

Using the universal selector ( `*` ) for a CSS reset is a common technique to reset or normalize the default styles applied by browsers to all elements.

It allows you to remove any default margins, paddings, and other styles that may vary across different browsers, providing a more consistent starting point for your CSS styles.

Here's an example of using the universal selector for a CSS reset:

```css
/* CSS Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /* Additional reset styles can be added here */
}
```

In the above example, the universal selector `*` is used to target all elements on the page. The `margin` and `padding` properties are set to `0` to remove any default spacing. The `box-sizing` property is set to `border-box` to include the element's padding and border within its total width and height. Additional reset styles can be added within the curly braces as needed.
Using the universal selector for a CSS reset provides a clean slate to build upon and ensures more consistent styling across different browsers. However, it's important to note that it may also remove some default styles that you might want to keep, so it's recommended to use it judiciously and test thoroughly.

### adding box-sizing: border-box; to the reset

Adding `box-sizing: border-box;` to the CSS reset is a common practice.

This rule ensures that the `width` and `height` properties of elements include the `padding` and `border` values, resulting in a more predictable and consistent box model behavior.

Here's an updated example of a CSS reset with `box-sizing: border-box;` included:

```css
/* CSS Reset */
body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
ul,
ol,
li {
  margin: 0;
  padding: 0;
  font-size: 100%;
  font-weight: normal;
  line-height: 1.5;
  box-sizing: border-box;
}

/* Additional reset rules can be added as needed */
```

By including `box-sizing: border-box;` in the CSS reset, you ensure that all elements on the page adhere to this box model behavior, simplifying layout calculations and reducing inconsistencies.

### Padding

To apply padding on all sides of an element in CSS, you can use the `padding` property. The `padding` property allows you to specify the padding size for all four sides (top, right, bottom, left) of an element, or you can specify individual values for each side.

Here are a few examples:

1.  Applying the same padding value to all sides:

```css
.element {
  padding: 10px;
}
```

In this example, the `.element` class will have 10 pixels of padding on all sides.

2.  Applying different padding values for each side:

```css
.element {
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 15px;
  padding-left: 30px;
}
```

In this example, the `.element` class will have 10 pixels of padding on the top, 20 pixels on the right, 15 pixels on the bottom, and 30 pixels on the left.

3.  Applying shorthand notation for all sides:

```css
.element {
  padding: 10px 20px 15px 30px;
}
```

In this example, the `.element` class will have 10 pixels of padding on the top, 20 pixels on the right, 15 pixels on the bottom, and 30 pixels on the left, using the shorthand notation (top, right, bottom, left).

By using the `padding` property, you can easily apply padding to all sides of an element in CSS. Adjust the values according to your requirements.

### Margin

To apply margin on all sides of an element in CSS, you can use the `margin` property.

The `margin` property allows you to specify the margin size for all four sides (top, right, bottom, left) of an element, or you can specify individual values for each side.

Here are a few examples:

1.  Applying the same margin value to all sides:

```css
.element {
  margin: 10px;
}
```

In this example, the `.element` class will have 10 pixels of margin on all sides.

2.  Applying different margin values for each side:

```css
.element {
  margin-top: 10px;
  margin-right: 20px;
  margin-bottom: 15px;
  margin-left: 30px;
}
```

In this example, the `.element` class will have 10 pixels of margin on the top, 20 pixels on the right, 15 pixels on the bottom, and 30 pixels on the left.

3.  Applying shorthand notation for all sides:

```css
.element {
  margin: 10px 20px 15px 30px;
}
```

In this example, the `.element` class will have 10 pixels of margin on the top, 20 pixels on the right, 15 pixels on the bottom, and 30 pixels on the left, using the shorthand notation (top, right, bottom, left).
By using the `margin` property, you can easily apply margin to all sides of an element in CSS. Adjust the values according to your requirements.

### **Practice 7**

---

## 8 Float & Alignment

>

### How to center your your content with float

- if you want to move it down a little bit

- use max-width for responsive design

### Style these boxes a little bit

-

### text-align property

-

### floats are not ideal anymore

- float to the left
- you want to add a width when you're floating something
- float to the right
- we're not going to get into responsiveness yet
- if we add another div below this Doesn't look right
- if you use floating you're gonna have to clear them. In most cases

### **Practice 8**

---

## 9 Link State & Button Styling

>

### Link State Styling

- change the color of a link
- remove the underline (text-decoration property)
- a change when you hover over it (pseudo selector hover)
- if you want to add the underline on hover (text-decoration: underline;)
- in addition to hover we have visited (pseudo selector visited)
- another state that we have four links is active (pseudo selector active)

### Style a link as a button

- button styling
- adding the pointer
- adding the hover state

### **Practice 9**

---

## 10 Navigation Menu Styling

>

### Side menu styling

- get rid of the bullets
- add a border around the whole you ul
- a border radius
- width of 300 pixels
- set the padding

### List items styling

- by default at 16 we're gonna set it to 18.
- line height
- ast child pseudo selector
- the color to 3 3 3
- Let's get rid of the underline
- for the hover

### Navbar styling

- remove the the bullet
- take away all the margin and all the padding
- add the background
- add board a radius

### Floating the list items

- add overflow: auto; (to get the background back)
- and lets say you don't want that scroll bar there you can set overflow to hidden

### Style the links

- change the color to white
- You will take away the underline
- And we want to display this block
- move this up to the top
- padding We want to do 15 on the top and bottom
- and we want to do 20. On the left and right...
- And there we go. So it kind of filled out the wrapper that the nav bar.

### Let's make it so that when we hover over a link the background changes color

- the background color
- the color of the text.

### Always put the padding on the a tag, not on the list item

>

### **Practice 10**

---

## 11 Inline, Block & Inline-Block Display

>

### Change a block element to be inline (a way to create a horizontal menu)>

-

### ake an inline elements such as an image and make it block level

- (These are two situations where you would want to display something that's normally block as in line and normally in line as block)

### Align these 3 boxes (divs) going across (to display horizontally)

- First let's style them a little bit
- And we want these to display horizontally...
- So obviously we need a width...
- But they're still on top of each other because by default divs are displayed as block.
- So maybe we just need to do inline. Right?
- So the solution to this if we want these to go across is to use inline-block which is basically like a mix of both

### **Practice 11**

---

## 12 Positioning

>

### Everything by default has a position of static

-

### All the possible values of position

- `static`
- `relative`
- `absolute`
- `fixed`
- `sticky`

### The z index property

>

### **Practice 12**

>

---

## 13 Form Style Solution

### The asterisk (css reset)

-`box-sizing: border-box;` -`margin: 0px;` -`padding: 0px;`

### body (global css)

- `font-family: 'Raleway', sans-serif;`
- `background-color: #344a72;`
- `color: #fff;`
- `line-height: 1.8;`

### Links (a tags)

- `text-decoration: none;`

### Container (wrapper)

- `margin: 30px auto;`
- `max-width: 400px;`
- `padding: 20px;`

### form-wrap (the actual form)

- `background: #fff;`
- `padding: 15px 25px;`
- `color: #333;`

### form-wrap h1, form-wrap p

- `text-align: center;`

### form group (each label/input pair)

- `margin-top: 15px;`

### Labels (.form-wrap .form-group label)

- `display: block;`
- `color: #666;`

### Inputs (.form-wrap .form-group input)

- `width: 100%;`
- `padding: 10px;`
- `border: #ddd 1px solid;`
- `border-radius: 5px;`

### button (.form-wrap button)

- `background: #49c1a2;`
- `display: block;`
- `width: 100%;`
- `padding: 10px;`
- `margin-top: 20px;`
- `color: #fff;`
- `cursor: pointer;`

### button on hover

- `background: #37a08e`

### bottom-text

- `font-size: 13px;`
- `margin-top: 20px;`

### footer

- `text-align: center;`
- `margin-top: 10px;`

### footer link (footer a)

- `color:#49c1a2`

### **Practice 13**

---

## 14 Aside: Visibility, Order & Negative Margin

>

### Visibility (display: none;)

-

### Now there's also a property called visibility (visibility: hidden;)

-

### The order of precedence

- So normally the further down the style is that that's what's going to take precedence
- however targeting a class is going to override targeting the actual element.

### The important flag

-

### Negative margin values

-

### **Practice 14**
