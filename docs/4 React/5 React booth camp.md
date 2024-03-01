---
sidebar_position: 5
---

# React Booth Camp

>

## MODULE 1 - JavaScript to React

>

## FUNCTIONS

>

### **=>** 1 - Functions as UI

>

#### PROBLEM

Display the text "Hello Python" using the function getLanguage.

```js
function getLanguage() {
  'Python'
}

const app = document.getElementById('app')
app.innerHTML = `<h1>Hello </h1>`
```

Make sure to use the string ("python") that is already within the function.

- Use it to create the desired output in the h1.

#### SOLUTION

To solve the challenge,

- just add the return keyword to the function.

- Then, make sure to call the function getLanguage() within the template string.

- Also make sure not to pass it as a reference but to call the function.

```js
function getLanguage() {
  return 'python'
}

const app = document.getElementById('app')
app.innerHTML = `<h1>Hello ${getLanguage()}</h1>`
```

### **=>** 2 - Function Arguments

>

#### PROBLEM

Using an argument passed to the createButton function,

- make it possible to dynamically change the first word within our button.

```js
function createButton(text) {
  return `<button>${text}</button>`
}

const app = document.getElementById('app')
app.innerHTML = createButton('Dislike Video')
```

#### SOLUTION

- we just need to remove "video" from where we're passing it in as an argument
- and added as a static bit of text to the return

  - instead of calling this argument text, we could call it action, that would be a bit more appropriate.

```js
function createButton(action, style) {
  return `<button>${action} Video</button>`
}

const app = document.getElementById('app')
app.innerHTML = createButton('Dislike')
```

And by adding additional arguments, we can really make this button as customizable as we want.

```js
function createButton(action, style) {
  return `<button style="${style}">${action} Video</button>`
}

const app = document.getElementById('app')
app.innerHTML = createButton('Upvote', 'background-color:green;color:white;')
```

So the benefit is that we have this nice, extensible button.

### **=>** 3 - Function Composition

>

#### PROBLEM

Create a video player using createHeader, createVideo and createButton.

- the end product should look something like this.

- Make the header the video title, prefixed with "Watch".

- Display the video using the videoSrc, passed as an argument.

- Make the video player 300 pixels in height and full width.

- Display a like and dislike button underneath the video.

```js
function createButton(action, style) {
  return `<button style="${style}">${action} Video</button>`
}

function createHeader(title, style) {
  return `<h1 style="${style}">Watch</h1>`
}

const videoSrc = 'https://reactbootcamp.nyc3.digitaloceanspaces.com/big-buck-bunny.mp4'

function createVideo() {
  return `<video controls></video>`
}

const app = document.getElementById('app')
app.innerHTML = `
${createButton('Like', 'background-color: green;')}
${createButton('Dislike', 'background-color: red;')}
`
```

#### SOLUTION

```js
function createButton(action, style) {
  return `<button style="${style}">${action} Video</button>`
}

function createHeader(title, style) {
  return `<h1 style="${style}">Watch ${title}</h1>`
}

const videoSrc = 'https://reactbootcamp.nyc3.digitaloceanspaces.com/big-buck-bunny.mp4'

function createVideo(src, style) {
  return `<video src="${src}" style="${style}" controls></video>`
}

const app = document.getElementById('app')
app.innerHTML = `
${createHeader('Big Buck Bunny')}
${createVideo(videoSrc, 'height:300px;width:100%;')}
  <div style="margin-top: 20px;">
  ${createButton('Like', 'background-color: green;')}
  ${createButton('Dislike', 'background-color: red;')}
  </div>
`
```

>

### **=>** 4 - Passing Arguments

https://www.reactbootcamp.com/modules/javascript-to-react/functions/passing-arguments

>

#### PROBLEM

- Break the markup displayed on the page into two components.

- Display the title in one component
- and display the cover image in another component.

They can be called createTitle and createCoverImage, for example.

- Create src, height and width arguments for the createCoverImage function to be able to change those properties dynamically.

Finally, pass arguments to 1. to set the cover image height to "300px", width to "520px" and set the src to its original value as well.

```js
const app = document.getElementById('app')
app.innerHTML = `
   <h1>👾 My Computer Setup</h1>
   <img src="https://images.unsplash.com/photo-1547082299-de196ea013d6" height="300px" width="520px">
`
```

#### SOLUTION

```js
function createHeader() {
  return '<h1>👾 My Computer Setup</h1>'
}

function createCoverImage(src, height = '300px', width = '520px') {
  return `<img src="${src}" height="${height}" width="${width}">`
}

const app = document.getElementById('app')
app.innerHTML = `
   ${createHeader()}
   ${createCoverImage('https://images.unsplash.com/photo-1547082299-de196ea013d6', '500px')}
`
```

>

### **=>** 5 - Passing Objects as Arguments

>

#### PROBLEM

Create an object and put it in a variable, profileProps.

Figure out what data needs to be passed down as an argument to the profile function.

Add that data as key-value pairs to the profileProps object.

Pass profileProps down to createProfile and display the data that was passed down.

```js

```

#### SOLUTION

```js

```

>

## CONDITIONALS

>

### **=>** 1 - If Statements

>

#### PROBLEM

Write a conditional that displays "authenticated content" if the user is authenticated (if `isAuth` is true).

Display the text "Log in here" if isAuth is false.

```js

```

#### SOLUTION

```js

```

>

### **=>** 2 - Ternaries

>

#### PROBLEM

Rewrite our if-else condition from the last lesson using a ternary expression.

If the user is authenticated, display "auth user content", else tell the user "log in here".

```js

```

#### SOLUTION

```js

```

>

### **=>** 3 - Nested Ternaries

>

#### PROBLEM

Write a ternary within the returned template literal.

This ternary conditional should display the image from user.avatar if it exists or the defaultAvatar as the src if not.

Both images can use the same width of 100px.

```js

```

#### SOLUTION

```js

```

>

### **=>** 4 - Hide Content

>

#### PROBLEM

Write two conditionals if the user doesn't have an avatar (you can remove it manually to test this):

1. A conditional that will hide all the displayed markup if there is no avatar (user.avatar).

2. A conditional that will hide only the avatar if there is no avatar.

```js

```

#### SOLUTION

```js

```

>

### **=>** 5 - Conditional Styles

>

#### PROBLEM

Use ternaries to change the text and class of the DownloadButton markup.

If props.isPaid is true, the .paid class should be added, with the text "Buy Now".

Otherwise, the button should have a green background with the text "Download Free".

```js

```

#### SOLUTION

```js

```

## ARRAYS

### **=>** 1 - Display Content with Map

>

#### PROBLEM

Take the text content from each of the list items in Features. Put them as individual array elements in an array called features.

Use the map array method to iterate over each of these array elements and output them in between the ul tags using template literals.

```js

```

#### SOLUTION

```js

```

>

### **=>** 2 - Transform Arrays with Map

>

#### PROBLEM

Iterate over the members array with map. Within map's inner function, use a template string to display each member within a Member function. Pass each member's data in as an argument

In the Member function, display their image, name within an h3 element and their role within a p element.

```js

```

#### SOLUTION

```js

```

>

### **=>** 3 - Filter Arrays with Filter

>

#### PROBLEM

Use the filter array method to filter the links array into two columns.

One column for the Support links (that start with "/support") and another column for the Company links (that start with "/company").

Hint: in the callback function to filter, you will need to find a way to check and see if the string includes the appropriate text (i.e. "/company")

```js

```

#### SOLUTION

```js

```

>

### **=>** 4 - Map with Inner Function

>

#### PROBLEM

Using the todos array, iterate over it with map, display each todo as an li within the ul tags.

Use the TodoItem component to display each of the todo's content.

Next, within a span, use a ternary to indicate whether the todo is done using a checkmark or x. Within another span, display the text content of each todo.

```js

```

#### SOLUTION

```js

```

>

### **=>** 5 - Nested Lists

>

#### PROBLEM

Filter through the recipes array to only display the vegetarian recipes.

Use map to display the recipes and iterate over the ingredients property of each recipe to create a nested list.

```js

```

#### SOLUTION

```js

```

## OBJECTS

>

### **=>** 1 - Destructuring

>

#### PROBLEM

Destructure all of the properties that are being passed down on the argument to Checkbox as id, label and defaultChecked.

Also make sure to use those variables in the correct places in our Checkbox component, for the id attributes, the label text and the checked attribute of the input.

```js

```

#### SOLUTION

```js

```

### **=>** 2 - Rest Operator

>

#### PROBLEM

Destructure the src property from the object passed to Avatar.

Use the rest operator (i.e. ...rest) to gather the rest of properties as a separate object. Use the rest object to display the other values in the Avatar component.

```js

```

#### SOLUTION

```js

```

### **=>** 3 - Default Values

>

#### PROBLEM

Destructure all of the appropriate properties while providing the necessary fallback values.

For the author property, use the fallback value "Someone".

For the text property, use the fallback value "No message".

For the time property, use the fallback value of an empty string to not display anything.

```js

```

#### SOLUTION

```js

```

### **=>** 4 - Spread Operator

>

#### PROBLEM

Figure out how to use the spread operator to add the properties of livesIn in each of the users' objects.

Display each user's location with the state and country properties.

```js

```

#### SOLUTION

```js

```

### **=>** 5 - Nested Spread Operator

>

#### PROBLEM

Figure out how to use the spread operator ... to add and display the today property to each of the statistic cards.

```js

```

#### SOLUTION

```js

```

>

## PROMISES

>

### **=>** 1 - Promise Chaining

>

#### PROBLEM

Make a GET request using the fetch API and the fetch function to the characters endpoint of the Star Wars API.

Use promises and then callbacks in order to get the data back and display the count value in the user interface (in place of the default text, --).

```js

```

#### SOLUTION

```js

```

### **=>** 2 - Error Handling with Promises

>

#### PROBLEM

With the first .then() callback, use the .ok property from the response object to see if there was an error making a request.

If so, throw an error (i.e. throw new Error()). Then, within the .catch() block, log the error to the console.

```js

```

#### SOLUTION

```js

```

### **=>** 3 - Finally Callback

>

#### PROBLEM

Add the .finally() callback, identical to how you chained on .then() and after it, .catch().

The only difference is that the finally callback does not accept a value. Within the finally callback, when the promise has "settled" (resolved successfully or has been rejected), perform the cleanup step of removing the loading span.

```js

```

#### SOLUTION

```js

```

### **=>** 4 - Async Await Syntax

>

#### PROBLEM

Resolve our fetch request using the async-await syntax and, once again, display the number of starships from the Star Wars API in our UI.

```js

```

#### SOLUTION

```js

```

### **=>** 5 - Async Await Complete

>

#### PROBLEM

Display the number of Star Wars films using the films endpoint.

Write the async code with the async-await syntax, with a try-catch to catch any errors and a finally block to hide the loading span.

```js

```

#### SOLUTION

```js

```

## MODULE 2 - React Essentials

>

## ELEMENTS

### **=>** HTML to JSX

>

#### PROBLEM

Convert the Pricing component's HTML string to valid JSX.

Remember to not return a string, camel case attributes (props), close single tag elements and wrap everything in one parent element.

```js

```

#### SOLUTION

The final Pricing component should have a single parent element, convert class to className, change `<hr>` to `<hr />` and return JSX, not a string:

```jsx
export default function Pricing() {
  return (
    <div>
      <h2 className='title'>Simple no-tricks pricing</h2>
      <hr />
      <a
        href='/buy'
        className='button'>
        Buy Now <span aria-hidden='true'>→</span>
      </a>
    </div>
  )
}
```
