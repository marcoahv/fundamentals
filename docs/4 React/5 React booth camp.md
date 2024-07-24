---
sidebar_position: 5
---

# React Booth Camp

>

## **MODULE 1** - JavaScript to React

>

## FUNCTIONS

>

### **=>** 1 - Functions as UI

>

#### **Notes**

- displaying an h1 using JavaScript
- dynamic values using variables
- code interpolation using template literals and dollar sign and curly brace syntax `${}`

#### PROBLEM

Make our app display the text "Hello Python" using the function getLanguage.

Make sure to use the string ("python") that is already within the function. Use it to create the desired output in the h1.

```js
function getLanguage() {
  'Python'
}

const app = document.getElementById('app')
app.innerHTML = `<h1>Hello </h1>`
```

#### SOLUTION

>

#### **Notes**

- using the return keyword to output a value
- an expression is just something that resolves to a value in JavaScript
- passing a function (expression) as an argument
- passing as reference vs call the function
- the implicit behavior of a function, if you do not have a return keyword, is to return undefined.

```js
function getLanguage() {
  return 'python'
}

const app = document.getElementById('app')
app.innerHTML = `<h1>Hello ${getLanguage()}</h1>`
```

To solve the challenge,

- just add the return keyword to the function.

- Then, make sure to call the function getLanguage() within the template string.

- Also make sure not to pass it as a reference but to call the function.

### **=>** 2 - Function Arguments

>

#### **Notes**

- Returning HTML elements from the function, not just their content
- we can pass dynamic values to our functions via arguments.

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

>

#### **Notes**

- Returning dynamic values mixed with static content
- Naming our parameters more appropriate
- Passing multiple arguments to make the component customizable/extensible
- Passing arguments for in line style rules

- we just need to remove "video" from where we're passing it in as an argument
- and added as a static bit of text to the return

- instead of calling this argument text, we could call it action, that would be a bit more appropriate.

```js
function createButton(action, style) {
  return `<button style="${style}">${action} Video</button>`
}

const app = document.getElementById('app')
app.innerHTML = createButton('Upvote', 'background-color:green;color:white;')
```

### **=>** 3 - Function Composition

>

#### **Notes**

- we need to start thinking of these functions as being little reusable pieces of our user interface
- to compose them, We not only need to arrange them in the appropriate order, so that they show up in the right place in our application, but we also need to pass them the right stuff

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

>

#### **Notes**

- Look at the end result/design and the functions/components in the code
- use composition to arrange the components and pass them the attributes needed

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

![](ReactImages/1.png)

### **=>** 4 - Passing Arguments

>

#### **Notes**

- When we're creating components for our application, its totally fine to start with some static markup first, and then turn that into a component
- in the previous problem we use a generic style attribute to pass the width and height but we can pass individual arguments also
- adding a fallback value for parameters

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

>

#### **Notes**

- breaking up our app into the two components that we talked about, we want to make one for the header or the title
- Creating functions/components for each part
- then make them dynamic as needed/wanted by creating all the parameters/arguments
- to set a default value can do that in the parameters of the function by using an equals sign
- And we can still provide dynamic values to override those values

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

### **=>** 5 - Passing Objects as Arguments

>

#### **Notes**

- the annoying thing about adding arguments in JavaScript is that they all have to be added individually, you'd have to add src and then the name. And if they weren't in the right order, that would cause some problems
- It's a bit simpler to add them all as a single argument and we can do that with the help of objects

#### PROBLEM

Create an object and put it in a variable, profileProps.

Figure out what data needs to be passed down as an argument to the profile function.

Add that data as key-value pairs to the profileProps object.

Pass profileProps down to createProfile and display the data that was passed down.

```js
function createProfile() {
  return `
     <header>
       <img class="profile" src="https://images.unsplash.com/profile-1584086234832-be18ba3c6918image?dpr=2&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff" />
       <span>Benjamin Voros</span>
     </header>
   `
}

const photoProps = {
  src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba',
  width: '500px',
}

function createPhoto(props) {
  return `
      <img src="${props.src}" width="${props.width}" />
   `
}

const app = document.getElementById('app')
app.innerHTML = `
   <div>
   ${createProfile()}
   ${createPhoto(photoProps)}
   </div>
`
```

#### SOLUTION

>

#### **Notes**

- So now we have one unified place to set all of these values instead of passing down multiple arguments.
- if a value is not provided, we could set a fallback value. We wanted to do that with name
- we could provide a fallback value by using the or operator

```js
const profileProps = {
  src: 'https://images.unsplash.com/profile-1584086234832-be18ba3c6918image?dpr=2&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff',
}

function createProfile(props) {
  return `
     <header>
       <img class="profile" src="${props.src}" />
       <span>${props.name || 'Reed Barger'}</span>
     </header>
   `
}

const photoProps = {
  src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba',
  width: '500px',
}

function createPhoto(props) {
  return `
      <img src="${props.src}" width="${props.width}" />
   `
}

const app = document.getElementById('app')
app.innerHTML = `
   <div>
   ${createProfile(profileProps)}
   ${createPhoto(photoProps)}
   </div>
`
```

## CONDITIONALS

>

### **=>** 1 - If Statements

>

#### **Notes**

- One major use of conditionals in JavaScript and in React apps in particular, is to show different types of content to different users. For example, to show authenticated content to logged in users.

#### PROBLEM

Write a conditional that displays "authenticated content" if the user is authenticated (if `isAuth` is true).

Display the text "Log in here" if isAuth is false.

```js
function MyApp() {
  const isAuth = false

  return '<div>Authenticated content</div>'
}

const appDiv = document.getElementById('app')
appDiv.innerHTML = MyApp()
```

#### SOLUTION

>

#### **Notes**

- There are a ton of ways to solve this. But the easiest way is probably with an if else
- This is a really common pattern that you will be using in your React applications where you want to display one component if the user is authenticated, or to return an entirely different component if they're not

```js
function MyApp() {
  const isAuth = false

  if (isAuth) {
    return '<div>Authenticated content</div>'
  }

  return '<div>Log in here</div>'
}

const appDiv = document.getElementById('app')
appDiv.innerHTML = MyApp()
```

### **=>** 2 - Ternaries

>

#### **Notes**

- there's another major way to write these conditions as compared to using an if statement
- And it's really useful in a lot of different places in our React components.
- This type of conditional is different because it's an expression, and it's what's known as a ternary expression

#### PROBLEM

Rewrite our if-else condition from the last lesson using a ternary expression.

If the user is authenticated, display "auth user content", else tell the user "log in here".

```js
function MyApp() {
  const isAuth = false
  return isAuth ? 'true' : 'false'
}

const appDiv = document.getElementById('app')
appDiv.innerHTML = MyApp()
```

#### SOLUTION

>

#### **Notes**

- because a ternary is just an expression, it can be inserted within our string here within our div
- This is something that you're gonna write within your JSX quite a lot when we're working with React components.
- It's really neat to be able to conditionally add content, add markup with the help of these ternary

```js
function MyApp() {
  const isAuth = false

  return `<div>${isAuth ? 'Auth user content' : 'Log in here'}</div>`
}

const appDiv = document.getElementById('app')
appDiv.innerHTML = MyApp()
```

### **=>** 3 - Nested Ternaries

>

#### **Notes**

- We want to greet the user based on their name on the name property
- We have an avatar here, but we won't necessarily have it for every user

#### PROBLEM

Write a ternary within the returned template literal.

This ternary conditional should display the image from user.avatar if it exists or the defaultAvatar as the src if not.

Both images can use the same width of 100px.

```js
const defaultAvatar = 'https://reactbootcamp.nyc3.digitaloceanspaces.com/default-avatar.png'

function Profile() {
  const user = {
    name: 'Brock Wegner',
    avatar:
      'https://images.unsplash.com/profile-1680533857160-e99b9ea2f17bimage?dpr=2&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff',
  }

  return `
    <div>
      <h1>Welcome, user!</h1>
      <img src="" width="100px" />
    </div>
  `
}

const appDiv = document.getElementById('app')
appDiv.innerHTML = Profile()
```

#### SOLUTION

>

#### **Notes**

- one way to do it if for example we wanted to display different properties for this first Avatar or the second one:

```js
return `
<div>
  <h1>Welcome, ${user.name}!</h1>$
  {user.avatar
    ? `<img src="${user.avatar}" width="100px" />`
    : `<img src="${defaultAvatar}" width="100px" />`}
</div>`
```

- or if let's say they were exactly the same:

```js
return `
<div>
  <h1>Welcome, ${user.name}!</h1>$
  <img
    src='${user.avatar ? user.avatar : defaultAvatar}'
    width='100px'
  />
</div>`
```

- But if we want to get even shorter, we can use our or operator:

```js
const defaultAvatar = 'https://reactbootcamp.nyc3.digitaloceanspaces.com/default-avatar.png'

function Profile() {
  const user = {
    name: 'Brock Wegner',
    avatar:
      'https://images.unsplash.com/profile-1680533857160-e99b9ea2f17bimage?dpr=2&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff',
  }

  return `
    <div>
      <h1>Welcome, ${user.name}!</h1>
      <img src="${user.avatar || defaultAvatar}" width="100px" />
    </div>
  `
}

const appDiv = document.getElementById('app')
appDiv.innerHTML = Profile()
```

### **=>** 4 - Hide Content

>

#### **Notes**

- What do we do in the event that we don't want to display any of our return markup?
- but of course, we can't just not return from the function because it would return undefined.
- Or if we don't want to display the image?
- What conditionals would we write in both cases?

#### PROBLEM

Write two conditionals if the user doesn't have an avatar (you can remove it manually to test this):

1. A conditional that will hide all the displayed markup if there is no avatar (user.avatar).

2. A conditional that will hide only the avatar if there is no avatar.

```js
function Profile() {
  const user = {
    name: 'Brock Wegner',
    avatar:
      'https://images.unsplash.com/profile-1680533857160-e99b9ea2f17bimage?dpr=2&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff',
  }

  return `
    <div>
      <h1>Welcome, ${user.name}!</h1>
      <img src="${user.avatar}" />
    </div>
  `
}

const appDiv = document.getElementById('app')
appDiv.innerHTML = Profile()
```

#### SOLUTION

>

#### **Notes**

- if we don't have an avatar, and we want to hide everything, we can use an if statement
- And we can even shorten this single line, usually, you'll see this, especially if you have a number of early returns within a component, you can just remove the curly braces here and just write this all on one line
- So if we were to comment out this property avatar, we see all of our component, all of our UI goes away

```js
function Profile() {
  const user = {
    name: 'Brock Wegner',
    avatar:
      'https://images.unsplash.com/profile-1680533857160-e99b9ea2f17bimage?dpr=2&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff',
  }

  // if (!user.avatar) {
  //   return ''
  // }

  if (!user.avatar) return ''

  return `
    <div>
      <h1>Welcome, ${user.name}!</h1>
      ${user.avatar ? `<img src="${user.avatar}" />` : ''}
    </div>
  `
}

const appDiv = document.getElementById('app')
appDiv.innerHTML = Profile()
```

- if we just want to hide the avatar itself, the image,
- we can again, write a ternary.
- So we will add within the dollar sign in curly braces, If user avatar is there, we want to display our image. Otherwise, we want to just display an empty string

```js
function Profile() {
  const user = {
    name: 'Brock Wegner',
    avatar:
      'https://images.unsplash.com/profile-1680533857160-e99b9ea2f17bimage?dpr=2&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff',
  }

  if (!user.avatar) {
    return ''
  }

  return `
    <div>
      <h1>Welcome, ${user.name}!</h1>
      ${user.avatar ? `<img src="${user.avatar}" />` : ''}
    </div>
  `
}

const appDiv = document.getElementById('app')
appDiv.innerHTML = Profile()
```

- So that's a nice pattern for hiding individual elements. And this is identical to the syntax you'd use in React components with just one small change. And we'll cover that in future sections
- When we move on to react. We'll see that instead of this empty string, we'll use a different JavaScript value to not show or rather to hide a component

```js
function Profile() {
  const user = {
    name: 'Brock Wegner',
    avatar:
      'https://images.unsplash.com/profile-1680533857160-e99b9ea2f17bimage?dpr=2&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff',
  }

  if (!user.avatar) {
    return ''
  }

  return `
    <div>
      <h1>Welcome, ${user.name}!</h1>
      ${user.avatar ? `<img src="${user.avatar}" />` : ''}
    </div>
  `
}

const appDiv = document.getElementById('app')
appDiv.innerHTML = Profile()
```

### **=>** 5 - Conditional Styles

>

#### **Notes**

- Conditionals, like ternaries, can be used anywhere. It not only applies to hiding or showing elements or the text content within it, but it also extends to styles as well
- with the help of a ternary, we need to conditionally change not only the text content here, but also the applied class.
- We're going to pass in to `downloadButton` an argument.
- Again, this is going to be on an object `{}` and we're going to have one boolean value called `isPaid` and this is either going to be `true` or `false`.

#### PROBLEM

Use ternaries to change the text and class of the DownloadButton markup.

If `props.isPaid` is true, the `.paid` class should be added, with the text "`Buy Now`".

Otherwise, the button should have a green background with the text "`Download Free`".

```js
function DownloadButton() {
  return `
    <button class="download-button">
      <span>Download Free</span>
    </button>
  `
}

const appDiv = document.getElementById('app')
appDiv.innerHTML = DownloadButton({
  isPaid: true,
})
```

#### SOLUTION

>

#### **Notes**

- we need to add the props parameter
- we'll start with the easy part, we'll start with the text. So we can conditionally change this based off of props.is. Paid

```js
function DownloadButton(props) {
  return `
    <button class="download-button ${props.isPaid ? 'paid' : ''}">
      <span>${props.isPaid ? 'Buy Now' : 'Download Free'}</span>
    </button>
  `
}

const appDiv = document.getElementById('app')
appDiv.innerHTML = DownloadButton({
  isPaid: true,
})
```

## ARRAYS

### **=>** 1 - Display Content with Map

>

#### **Notes**

- Array methods are essential for working with React. You're going to have arrays, whenever you have lists. It's good to have the equivalence in your mind: array = list
- To map over these list items, we're going to be using the `.map()` function
- Map is good for either outputting something or transforming our array.
- We can do both at the same time

#### PROBLEM

Take the text content from each of the list items in Features. Put them as individual array elements in an array called features.

Use the map array method to iterate over each of these array elements and output them in between the ul tags using template literals.

```js
function Features() {
  return `
      <h1>App Features</h1>
      <ul>
        <li>✅ Push to deploy</li>
        <li>✅ SSL certificates</li>
        <li>✅ Simple queues</li>
      </ul>
    `
}

const appDiv = document.getElementById('app')
appDiv.innerHTML = Features()
```

>

#### SOLUTION

>

#### **Notes**

- first we're going to make an array called `features`. And we're going to take each of these elements and drop it in as a string
- we can use maps since we have an array, and we give it a callback function to be called on each element.
- (And as we said, we can output it, we can transform it, that's what map does.)
- And we always want to give the parameter something that makes sense. And since we're mapping over features, we're going to call each element in this array a `feature`
- Now we want to output a string. Since we're we ultimately have to output a string to be added to our HTML
- So we're going to return that. So we have an implicit return here, we do not have a return keyword, but it will still return the string that we have here
- and we want to construct a list item, so we can add the opening and closing tag
- And here we can, again, since we have another template literal going again, use our dollar sign curly brace syntax to insert each of these features
- And when we save this, you'll see something kind of weird that they're separated by commas. The way to fix this is to just go to the end of map and just chain on the join method.
- The only difference is that the map function that React uses is a bit different than the standard JavaScript one
- we do not have to call join at the end.
- And another thing is that we're not going to be mapping over template literal strings to be output. We're going to be mapping over what's known as JSX.

```js
const features = ['✅ Push to deploy', '✅ SSL certificates', '✅ Simple queues']

function Features() {
  return `
    <h1>App Features</h1>
    <ul>
      ${features
        .map(
          feature => `
         <li>${feature}</li>
      `
        )
        .join('')}
    </ul>
  `
}

const appDiv = document.getElementById('app')
appDiv.innerHTML = Features()
```

### **=>** 2 - Transform Arrays with Map

>

#### **Notes**

- `map` is not just great for iterating over lists to display them in our UI.
- It can additionally enable us to transform whatever we're iterating over.
- we can iterate over each element and within our user interface, just display the things that we want

#### PROBLEM

Iterate over the members array with map. Within map's inner function, use a template string to display each member within a Member function. Pass each member's data in as an argument

In the Member function, display their image, name within an h3 element and their role within a p element.

```js
const members = [
  {
    name: 'Lindsay Walton',
    role: 'Front-end Developer',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    twitterUrl: 'https://twitter.com/lindsay',
    linkedinUrl: 'https://linkedin.com/lindsay',
  },
  {
    name: 'Tom Cook',
    role: 'Director of Product',
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    twitterUrl: 'https://twitter.com/tom',
    linkedinUrl: 'https://linkedin.com/tom',
  },
  {
    name: 'Courtney Henry',
    role: 'Designer',
    imageUrl:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    twitterUrl: 'https://twitter.com/courtney',
    linkedinUrl: 'https://linkedin.com/courtney',
  },
]

function About() {
  return `
    <header>
      <h1>Who we are</h1>
      <h2>Meet the team that makes this all possible</h2>
    </header>
    <div class="members">
    
    </div>
  `
}

function Member() {
  return `
    <div class="member">
        
    </div>
  `
}

const appDiv = document.getElementById('app')
appDiv.innerHTML = About()
```

#### SOLUTION

>

#### **Notes**

- we're mapping over a list, but we're also displaying the output within a separate component within a separate function
- this is the typical structure that we're going to have for just about every list that we work with

```js
const members = [
  {
    name: 'Lindsay Walton',
    role: 'Front-end Developer',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    twitterUrl: 'https://twitter.com/lindsay',
    linkedinUrl: 'https://linkedin.com/lindsay',
  },
  {
    name: 'Tom Cook',
    role: 'Director of Product',
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    twitterUrl: 'https://twitter.com/tom',
    linkedinUrl: 'https://linkedin.com/tom',
  },
  {
    name: 'Courtney Henry',
    role: 'Designer',
    imageUrl:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    twitterUrl: 'https://twitter.com/courtney',
    linkedinUrl: 'https://linkedin.com/courtney',
  },
]

function About() {
  return `
    <header>
      <h1>Who we are</h1>
      <h2>Meet the team that makes this all possible</h2>
    </header>
    <div class="members">
      ${members
        .map(
          member => `
        ${Member(member)}
      `
        )
        .join('')}
    </div>
  `
}

// MemberList -> MemberItem

function Member(props) {
  return `
    <div class="member">
      <img src="${props.imageUrl}" />
      <h3>${props.name}</h3>
      <p>${props.role}</p>
    </div>
  `
}

const appDiv = document.getElementById('app')
appDiv.innerHTML = About()
```

### **=>** 3 - Filter Arrays with Filter

>

#### **Notes**

- There are many transformations to arrays that can't be done with map. In fact, map can't remove elements from arrays and it can't separate arrays.
- That's where `.filter()` comes into play.
- filter is very much like map in that it accepts a callback function, but what's different about it is that it accepts something called a "predicate", which is a condition that resolves to a true or false value (a boolean value).

```js
const filtered = [1, 2, 3].filter(number => number === 1)
console.log(filtered) // 1
```

#### PROBLEM

Use the filter array method to filter the links array into two columns.

One column for the Support links (that start with "/support") and another column for the Company links (that start with "/company").

Hint: in the callback function to filter, you will need to find a way to check and see if the string includes the appropriate text (i.e. "/company")

```js
const links = [
  {
    text: 'About',
    href: '/company/about',
  },
  {
    text: 'Pricing',
    href: '/support/pricing',
  },
  {
    text: 'Jobs',
    href: '/company/jobs',
  },
  {
    text: 'Press',
    href: '/company/press',
  },
  {
    text: 'Documentation',
    href: '/support/docs',
  },
]

// const filtered = [1, 2, 3].filter((number) => number > 1);
// console.log(filtered);

function Footer() {
  return `
    <footer>
      <section>
        <h4>Support</h4>
        <div>
        
        </div>
      </section>

      <section>
        <h4>Company</h4>
        <div>
        </div>
      </section>
    </footer>
  `
}

function Link(link) {
  return `
    <div>
      <a href="${link.href}">
        ${link.text}
      </a>
    </div>
  `
}

const appDiv = document.getElementById('app')
appDiv.innerHTML = Footer()
```

#### SOLUTION

>

#### **Notes**

- there's a couple of parts to solving this correctly, the first step is to filter our links, then to map over them
- So let's do that first for our support links:

  ```js
  ${links.filter(link => link.href.startsWith('/support'))}
  ```

  - (if you didn't know about the `.startsWith()` array method, you could have also used something like `includes()` would have been fine, but `.startsWith()` is probably a little bit better)
  - So we've got all those support links, but we still need to `map` over them

  ```js
  ${links.filter(link => link.href.startsWith('/support')).map((link) => `${Link(link)}`).joint("")}
  ```

- Now to do the same for our company links is pretty easy,
- we can actually just copy all of this and where we have /support, we want to have /company instead

- So filter is a very powerful array method to use in combination with map with the two combined you can do just about anything when it comes to transforming arrays

- The only exception would be if you want to transform your array into something that's not an array. In that case, you would probably have to use the `reduce()` function

```js
const links = [
  {
    text: 'About',
    href: '/company/about',
  },
  {
    text: 'Pricing',
    href: '/support/pricing',
  },
  {
    text: 'Jobs',
    href: '/company/jobs',
  },
  {
    text: 'Press',
    href: '/company/press',
  },
  {
    text: 'Documentation',
    href: '/support/docs',
  },
]

// const filtered = [1, 2, 3].filter((number) => number > 1);
// console.log(filtered);

function Footer() {
  return `
    <footer>
      <section>
        <h4>Support</h4>
        <div>
          ${links
            .filter(link => link.href.startsWith('/support'))
            .map(
              link => `
            ${Link(link)}
          `
            )
            .join('')}
        </div>
      </section>

      <section>
        <h4>Company</h4>
        <div>
        ${links
          .filter(link => link.href.startsWith('/company'))
          .map(
            link => `
          ${Link(link)}
        `
          )
          .join('')}
        </div>
      </section>
    </footer>
  `
}

function Link(link) {
  return `
    <div>
      <a href="${link.href}">
        ${link.text}
      </a>
    </div>
  `
}

const appDiv = document.getElementById('app')
appDiv.innerHTML = Footer()
```

### **=>** 4 - Map with Inner Function

>

#### **Notes**

- a very, very common activity when working with React and lists is going from data, either an array or an array of objects
- and making a list using a dedicated list component.

#### PROBLEM

Using the `todos` array, iterate over it with `map`, display each todo as an `li` within the `ul` tags.

Use the `TodoItem` component to display each of the todo's content.

Next, within a `span`, use a ternary to indicate whether the todo is done using a checkmark or x. Within another `span`, display the text content of each todo.

```js
const todos = [
  {
    done: false,
    text: 'Wash dishes',
  },
  {
    done: true,
    text: 'Pick up laundry',
  },
  {
    done: true,
    text: 'Feed dog',
  },
]

function TodoList() {
  return `
    <main>
      <h1>What I did today</h1>
      <ul>
        
      </ul>
    </main>
  `
}

function TodoItem() {}

const appDiv = document.getElementById('app')
appDiv.innerHTML = TodoList()
```

#### SOLUTION

>

#### **Notes**

- This whole process is something that you're going to need to be very familiar with when working with React, you're going to be working with lists all the time.
- So let's walk through this step by step:

  - we have our `TodoList` component And this is where we iterate over our array
  - (you're never going to use a for each or something like that, you're always going to use map because map just like filter returns a new array, that's very important)
  - So we're passing down our `(todo)` here:

```js
function TodoList() {
  return `
        <main>
          <h1>What I did today</h1>
          <ul>
            ${todos
              .map(
                todo => `
${TodoItem(todo)}
`
              )
              .join('')}
          </ul>
        </main>
      `
}
```

- and we're going to receive our `(todo)` here within TodoItem

```js
function TodoItem(todo) {
  return `
    <li>
      <span>${todo.done ? '✅' : '❌'}</span>
      <span>${todo.text}</span>
    </li>
  `
}
```

- it's good to get the practice in of iterating over an array mapping over it
- and then figuring out how to create this component
- to then display in our UI what we're mapping over

```js
const todos = [
  {
    done: false,
    text: 'Wash dishes',
  },
  {
    done: true,
    text: 'Pick up laundry',
  },
  {
    done: true,
    text: 'Feed dog',
  },
]

function TodoList() {
  return `
    <main>
      <h1>What I did today</h1>
      <ul>
        ${todos
          .map(
            todo => `
          ${TodoItem(todo)}
        `
          )
          .join('')}
      </ul>
    </main>
  `
}

function TodoItem(todo) {
  return `
    <li>
      <span>${todo.done ? '✅' : '❌'}</span>
      <span>${todo.text}</span>
    </li>
  `
}

const appDiv = document.getElementById('app')
appDiv.innerHTML = TodoList()
```

### **=>** 5 - Nested Lists

>

#### **Notes**

- it's good to get used to mapping over arrays and creating lists in React because sometimes you need to create nested lists.
- You're going to need to create a list within a list.
- That's exactly what we're going to do here.
- In fact, we're going to put together everything that we have covered with map and filter to create this.

#### PROBLEM

Filter through the recipes array to only display the vegetarian recipes.

Use map to display the recipes and iterate over the ingredients property of each recipe to create a nested list.

```js
const recipes = [
  {
    isVegetarian: true,
    name: 'Greek Salad',
    ingredients: ['tomatoes', 'cucumber', 'onion', 'olives', 'feta'],
  },
  {
    isVegetarian: false,
    name: 'Hawaiian Pizza',
    ingredients: ['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple'],
  },
  {
    isVegetarian: true,
    name: 'Hummus',
    ingredients: ['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini'],
  },
]

function Recipes() {
  return `
    <div>
      <h1>Vegetarian Recipes</h1>
      
    </div>
  `
}

const appDiv = document.getElementById('app')
appDiv.innerHTML = Recipes()
```

#### SOLUTION

>

#### **Notes**

- for our predicate, we want to write a condition where `isVegetarian` is `true`
- And to do that, we could be very explicit:
  ```js
    ${recipes
        .filter(recipe => recipe.isVegetarian === true)}
  ```
- But an easier way to do this, since we know that we just need this expression to return true:

  ```js
  ${recipes
      .filter(recipe => recipe.isVegetarian)}
  ```

  - I'm not going to create a dedicated component of it, feel free to do so yourself. We could of course extract this into a separate component later on.

```js
const recipes = [
  {
    isVegetarian: true,
    name: 'Greek Salad',
    ingredients: ['tomatoes', 'cucumber', 'onion', 'olives', 'feta'],
  },
  {
    isVegetarian: false,
    name: 'Hawaiian Pizza',
    ingredients: ['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple'],
  },
  {
    isVegetarian: true,
    name: 'Hummus',
    ingredients: ['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini'],
  },
]

function Recipes() {
  return `
    <div>
      <h1>Vegetarian Recipes</h1>
      ${recipes
        .filter(recipe => recipe.isVegetarian)
        .map(
          recipe => `
        <div>
          <h3>${recipe.name}</h3>
          <ul>
            ${recipe.ingredients
              .map(
                ingredient => `
              <li>${ingredient}</li>
            `
              )
              .join('')}
          </ul>
        </div>
      `
        )
        .join('')}
    </div>
  `
}

const appDiv = document.getElementById('app')
appDiv.innerHTML = Recipes()
```

## OBJECTS

>

### **=>** 1 - Destructuring

>

#### **Notes**

- We want to make this dynamic.
- And of course, we could call this parameter `props` or `checkbox` or whatever.
- But to be a bit more declarative, because we just have a few, a nice pattern that we can use with objects is called `destructuring`.

- Instead of having an object that we pass down and give it a generic name, like `props`,
- we can within the argument parameters, "destructure" the property that we know is being passed down, such as id.
- If we add a set of curly braces, `function Checkbox({ id })`
- we can immediately grab that property and kind of turn it into its own variable.

#### PROBLEM

Destructure all of the properties that are being passed down on the argument to Checkbox as id, label and defaultChecked.

Also make sure to use those variables in the correct places in our Checkbox component, for the id attributes, the label text and the checked attribute of the input.

```js
function Checkbox({ id }) {
  return `
    <div>
      <label for="id">label</label>
      <input id="id" type="checkbox" checked="checked" />
    </div>
  `
}

const appDiv = document.getElementById('app')

appDiv.innerHTML = Checkbox({
  id: 'checkbox',
  label: 'Subscribe for updates',
  defaultChecked: true,
})
```

#### SOLUTION

>

#### **Notes**

- Destructuring is a nice pattern, as I mentioned for when you have a props object when you have an object being passed down to a component or to a function for that matter, and you want to get specific properties that you know are there. destructuring makes it really easy just to grab those individually.

- And this destructuring pattern is used all the time when working with props, objects, specifically within React components. You're going to see it again in every single app that you work with.

```js
function Checkbox({ id, label, defaultChecked }) {
  return `
    <div>
      <label for="${id}">${label}</label>
      <input id="${id}" type="checkbox" checked=${defaultChecked} />
    </div>
  `
}

const appDiv = document.getElementById('app')

appDiv.innerHTML = Checkbox({
  id: 'checkbox',
  label: 'Subscribe for updates',
  defaultChecked: true,
})
```

### **=>** 2 - Rest Operator

>

#### **Notes**

- this rest syntax, we call this the rest operator,

```js
function Avatar({ src, ...rest })
```

- we get the rest of the properties. Here in this collected object (rest), it gathers all of this all these remaining properties that haven't been restructured and put them and put them in its own separate object.

#### PROBLEM

Destructure the `src` property from the object passed to Avatar.

Use the rest operator (i.e. `...rest`) to gather the rest of properties as a separate object.

Use the rest object to display the other values in the Avatar component.

```js
function Avatar() {
  return `<img src="" alt="" style="border-radius: " width="100px" />`
}

const appDiv = document.getElementById('app')

appDiv.innerHTML = Avatar({
  src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  alt: 'Bob Jones',
  borderRadius: '10px',
})
```

#### SOLUTION

>

#### **Notes**

- the rest operator is something that you're not going to need too much.
- But it's especially helpful when you want to gather a bunch of properties a bunch of values from an object that you want to collect into its own object and pass somewhere else.
- So you might pass one destructured property to one component and the rest of them somewhere else.
- But it's important to know this pattern because there's another very similar operator with the same syntax.

```js
function Avatar({ src, ...rest }) {
  return `<img src="${src}" alt="${rest.alt}" style="border-radius: ${rest.borderRadius}" width="100px" />`
}

const appDiv = document.getElementById('app')

appDiv.innerHTML = Avatar({
  src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  alt: 'Bob Jones',
  borderRadius: '10px',
})
```

### **=>** 3 - Default Values

>

#### **Notes**

- a default value can be applied with the equals operator just like this:

```js
function Message({ text = 'No message'})
```

#### PROBLEM

Destructure all of the appropriate properties while providing the necessary fallback values.

For the author property, use the fallback value "Someone".

For the text property, use the fallback value "No message".

For the time property, use the fallback value of an empty string to not display anything.

```js
function Message({ text }) {
  return `
    <div class="message">
      <header>
        <strong>Someone</strong> commented 
      </header>
      <p>No message</p>
    </div>
  `
}

const appDiv = document.getElementById('app')

appDiv.innerHTML = Message({
  text: 'Called client, they reassured me the invoice would be paid by the 25th.',
  author: 'Chelsea Hagon',
  time: '3d ago',
})
```

#### SOLUTION

>

#### **Notes**

- in this example the default values are use so if no values are provided in the passed object
- without them we would see undefined

```js
function Message({ text = 'No message', author = 'Someone', time = '' }) {
  return `
    <div class="message">
      <header>
        <strong>${author}</strong> commented ${time}
      </header>
      <p>${text}</p>
    </div>
  `
}

const appDiv = document.getElementById('app')

appDiv.innerHTML = Message({
  // text: "Called client, they reassured me the invoice would be paid by the 25th.",
  // author: "Chelsea Hagon",
  // time: "3d ago",
})
```

### **=>** 4 - Spread Operator

>

#### **Notes**

- We can use the spread operator to easily add (spread) all the properties in an object into a new object.
- If we just console log a new object here, we can create one where, for example, we might have a name and we want to add some additional properties. Of course, we could manually add them. But if we have an object with a bunch of properties, or we want to add these properties safely, making sure that we don't introduce any errors by doing it manually, we can just use the ..., the spread syntax, to spread in all of those properties individually:

```js
const livesIn = {
  state: 'California',
  country: 'USA',
}

console.log({ name: 'Bob', ...livesIn })
```

![](ReactImages/2.png)

#### PROBLEM

Figure out how to use the spread operator to add the properties of livesIn in each of the users' objects.

Display each user's location with the state and country properties.

```js
const users = [
  {
    name: 'Lindsay Walton',
    email: 'lindsay.walton@example.com',
  },
  {
    name: 'Whitney Francis',
    email: 'whitney.francis@example.com',
  },
  {
    name: 'Tom Cook',
    email: 'tom.cook@example.com',
  },
]

const livesIn = {
  state: 'California',
  country: 'USA',
}

console.log({ name: 'Bob', ...livesIn })

function Users() {
  return `
    <div >

    </div>
  `
}

const appDiv = document.getElementById('app')

appDiv.innerHTML = Users()
```

#### SOLUTION

>

#### **Notes**

1. Transform all the objects in the users array

   - use the map method to loop the users array
   - and using the spread operator transform every object in the users array, (user), with all the properties in each user object plus the properties in the livesIn object.

2. map thru the new users array to display every user's info as wanted

```js
const livesIn = {
  state: 'California',
  country: 'USA',
}

const users = [
  {
    name: 'Lindsay Walton',
    email: 'lindsay.walton@example.com',
  },
  {
    name: 'Whitney Francis',
    email: 'whitney.francis@example.com',
  },
  {
    name: 'Tom Cook',
    email: 'tom.cook@example.com',
  },
].map(user => ({
  ...user,
  ...livesIn,
}))

function Users() {
  return `
    <div>
      ${users
        .map(
          user => `
        <div>${user.name} lives in ${user.state}, ${user.country}</div>      
      `
        )
        .join('')}
    </div>
  `
}

const appDiv = document.getElementById('app')

appDiv.innerHTML = Users()
```

### **=>** 5 - Nested Spread Operator

>

#### **Notes**

- Again, the problem is that we have an array of objects that don't have all the data that we need
- But it's a bit different because we have not just an array of objects, but those objects also have nested elements.
- Those are what we need to update by adding when this value was updated.

#### PROBLEM

Figure out how to use the spread operator ... to add and display the today property to each of the statistic cards.

```js
const date = 'today'

const stats = [
  { id: 1, record: { value: '71,897', name: 'Total Subscribers' } },
  { id: 2, record: { value: '58.16%', name: 'Avg. Open Rate' } },
  { id: 3, record: { value: '24.57%', name: 'Avg. Click Rate' } },
]

function Statistics() {
  return `
    <ul>
     
    </ul>
  `
}

function Statistic() {
  return `
    <li>
      <span></span>
      <h2></h2>
      <span>as of </span>
    </li>
  `
}

const appDiv = document.getElementById('app')

appDiv.innerHTML = Statistics()
```

#### SOLUTION

>

#### **Notes**

1. We'll begin once again by mapping over our array

- But we're going to use the spread operator a little bit differently here, because we have a couple of objects to spread into

```js
].map(stat => ({
  ...stat,
  record: {
    ...stat.record,
  },
```

- And here we just have the same objects that we did before
- But we need to add date as a property and value
- And we can do that with this object shorthand which is equivalent to this by setting date equal to date

```js
].map(stat => ({
  ...stat,
  record: {
    ...stat.record,
    date: date,
  },
```

- and we can write it in the same fashion by just collapsing it like this

```js
].map(stat => ({
  ...stat,
  record: {
    ...stat.record,
    date,
  },
```

2. So now we have date added to each of our nested records. All we need to do now is map over the stats

- and we're going to use the statistic component to receive that stat
- And we want to display the name of the statistic will say stat dot record dot name, and then stat dot record dot value as of stat dot record dot date,
- and once again, for the last time we need to add the join method at the very end.
- And now we have our three statistics cards.

```js
function Statistics() {
  return `
    <ul>
     ${stats
       .map(
         stat => `
       ${Statistic(stat)}
     `
       )
       .join('')}
    </ul>
  `
}

function Statistic(stat) {
```

```js
const date = 'today'

const stats = [
  { id: 1, record: { value: '71,897', name: 'Total Subscribers' } },
  { id: 2, record: { value: '58.16%', name: 'Avg. Open Rate' } },
  { id: 3, record: { value: '24.57%', name: 'Avg. Click Rate' } },
].map(stat => ({
  ...stat,
  record: {
    ...stat.record,
    date,
  },
}))

function Statistics() {
  return `
    <ul>
     ${stats
       .map(
         stat => `
       ${Statistic(stat)}
     `
       )
       .join('')}
    </ul>
  `
}

function Statistic(stat) {
  return `
    <li>
      <span>${stat.record.name}</span>
      <h2>${stat.record.value}</h2>
      <span>as of ${stat.record.date}</span>
    </li>
  `
}

const appDiv = document.getElementById('app')

appDiv.innerHTML = Statistics()
```

## PROMISES

>

### **=>** 1 - Promise Chaining

>

#### **Notes**

1. Promises are essential for working with asynchronous code in JavaScript

- and async code is unpredictable, we don't know when it's going to resolve meaning give us the value that we want
- For example, if we're making a request for data from an API, and we don't know about the state of that, whether it's going to be successful, or if it's going to fail. We use promises to help us with that.
- We use promises to help us with that
- Promises crop up in many places in JavaScript and React, but the most common one is when we're fetching data

2. By visiting this endpoint URL in our browser, we're making a get request.

- And we can make this within our JavaScript application by taking that same URL and using the Fetch API.

- Promise chaining with the Fetch API in JavaScript is a powerful technique for handling asynchronous HTTP requests and their responses in a structured and concise manner. The Fetch API provides a simple interface for fetching resources, and since it returns a Promise, you can chain methods like `.then()` and `.catch()` to handle the response and any errors that might occur.

Here's how promise chaining works with the Fetch API:

1. **Making a Fetch Request**: When you make a fetch request, it returns a Promise that resolves to a `Response` object representing the response to your request.

   ```javascript
   fetch('https://api.example.com/data')
     .then(response => {
       // Handle the response
     })
     .catch(error => {
       // Handle errors
     })
   ```

2. **Handling the Response**: Once the request is successful, the first `.then()` block will be executed. Inside this block, you can access properties and methods of the `Response` object, such as `.json()` to parse the response body as JSON, `.text()` to get the response body as text, etc.

   ```javascript
   fetch('https://api.example.com/data')
     .then(response => {
       return response.json() // Parse response body as JSON
     })
     .then(data => {
       // Handle the parsed data
     })
     .catch(error => {
       // Handle errors
     })
   ```

3. **Chaining Multiple `.then()` Blocks**: You can chain multiple `.then()` blocks to perform sequential operations on the response data. Each `.then()` block receives the result of the previous operation as its argument.

   ```javascript
   fetch('https://api.example.com/data')
     .then(response => {
       return response.json() // Parse response body as JSON
     })
     .then(data => {
       // Process the parsed data
       return processData(data)
     })
     .then(result => {
       // Handle the processed result
     })
     .catch(error => {
       // Handle errors
     })
   ```

4. **Handling Errors**: If an error occurs at any point during the fetch request or subsequent operations, it will be caught by the `.catch()` block. This block is responsible for handling any errors that occur during the promise chain.

   ```javascript
   fetch('https://api.example.com/data')
     .then(response => {
       if (!response.ok) {
         throw new Error('Network response was not ok')
       }
       return response.json()
     })
     .then(data => {
       // Handle the parsed data
     })
     .catch(error => {
       // Handle errors
     })
   ```

By chaining `.then()` blocks together, you can perform a sequence of operations on the response data in a clean and readable manner. Additionally, by including a `.catch()` block at the end of the chain, you can handle any errors that occur during the request or processing of the response. This helps to ensure robust error handling and maintainability in your code.

#### PROBLEM

Make a GET request using the fetch API and the fetch function to the characters endpoint of the Star Wars API.

Use promises and then callbacks in order to get the data back and display the count value in the user interface (in place of the default text, --).

```js
const appDiv = document.getElementById('app')

function getPeople() {
  fetch('https://swapi.dev/api/people/')
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })
}

getPeople()

appDiv.innerHTML = `
  <p>⭐️ There are <strong id="characters">--</strong> primary characters in Star Wars</p>
`
```

#### SOLUTION

>

#### **Notes**

- To display the number of characters, we need to take that value from data dot count. And we can put that in a variable, for example, called primaryCharacters: `const primaryCharacters = data.count`

- And using that we want to select where we're interested in putting it: `document.getElementById('characters').textContent = primaryCharacters`

```js
const appDiv = document.getElementById('app')

function getPeople() {
  fetch('https://swapi.dev/api/people/')
    .then(response => response.json())
    .then(data => {
      const primaryCharacters = data.count
      document.getElementById('characters').textContent = primaryCharacters
    })
}

getPeople()

appDiv.innerHTML = `
  <p>⭐️ There are <strong id="characters">--</strong> primary characters in Star Wars</p>
`
```

### **=>** 2 - Error Handling with Promises

>

#### **Notes**

- When you make a request using the `fetch` API, it returns a Promise that resolves to the Response object representing the response to the request made. This Response object has a property called `.ok` which is a boolean value indicating whether the request was successful (status in the range 200-299) or not.

Here's how you can use it:

```js
fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    return response.json()
  })
  .then(data => {
    console.log('Data received:', data)
  })
  .catch(error => {
    console.error('Error:', error)
  })
```

In this example, we're checking if the `response.ok` property is `false`. If it's not `true`, it means the request was not successful (e.g., due to a network error, or the server returned an error response), and we throw an error to be caught by the subsequent `.catch()` block.

This `.ok` property is particularly useful for handling HTTP errors and network issues in a fetch request. It helps you determine if the request was successful or not, and take appropriate action based on that.

#### PROBLEM

With the first .then() callback, use the .ok property from the response object to see if there was an error making a request.

If so, throw an error (i.e. throw new Error()). Then, within the .catch() block, log the error to the console.

```js
const appDiv = document.getElementById('app')

function getPeople() {
  fetch('https://swapi.dev/api/peoplee/')
    .then(response => {
      console.log(response)
      return response.json()
    })
    .then(data => {
      console.log(data)
    })
    .catch(error => {
      console.log(error)
    })
}

getPeople()

appDiv.innerHTML = `
  <p>⭐️ There are <strong id="characters">--</strong> primary characters in Star Wars</p>
`
```

#### SOLUTION

>

#### **Notes**

- So when we save, we're not only displaying our error to the console, but we're telling our users that the request was bad, which is going to happen sometimes whenever you're making an API request or working with promises in general.

```js
.catch(error => {
      console.log(error)
      document.getElementById('title').textContent = 'Could not get characters'
    })
```

```js
const appDiv = document.getElementById('app')

function getPeople() {
  fetch('https://swapi.dev/api/peoplee/')
    .then(response => {
      if (!response.ok) {
        throw new Error('Error making request')
      }
      return response.json()
    })
    .then(data => {
      console.log(data)
    })
    .catch(error => {
      console.log(error)
      document.getElementById('title').textContent = 'Could not get characters'
    })
}

getPeople()

appDiv.innerHTML = `
  <p id="title">⭐️ There are <strong id="characters">--</strong> primary characters in Star Wars</p>
`
```

### **=>** 3 - Finally Callback

>

#### **Notes**

- The `finally` callback in promise chaining serves a crucial role in executing code regardless of whether the promise was fulfilled or rejected. It's commonly used to perform cleanup tasks or execute code that needs to run regardless of the outcome of the promise chain.

Here's how the `finally` callback works:

```javascript
fetch('https://api.example.com/data')
  .then(response => {
    // Handle the response
  })
  .catch(error => {
    // Handle errors
  })
  .finally(() => {
    // This code block will execute regardless of whether the promise was resolved or rejected
    console.log('Request completed')
  })
```

Key points to note about the `finally` callback:

1. **Execution**: The code inside the `finally` callback will be executed regardless of whether the promise is fulfilled or rejected. This means that it will run regardless of whether the `.then()` or `.catch()` block is executed.

2. **Cleanup Tasks**: `finally` is often used for cleanup tasks such as closing resources, resetting state, or performing actions that need to happen regardless of the outcome of the promise.

3. **Chaining**: You can chain the `finally` callback after `.then()` and `.catch()` blocks in a promise chain. It will execute after all preceding `.then()` or `.catch()` blocks have finished executing.

4. **No Arguments**: The `finally` callback does not receive any arguments. It's simply executed when the promise chain completes, whether successfully or with an error.

Here's an example demonstrating the use of `finally` for cleanup:

```javascript
fetch('https://api.example.com/data')
  .then(response => {
    // Handle the response
    return response.json()
  })
  .then(data => {
    // Process the data
    console.log('Data processed successfully')
  })
  .catch(error => {
    // Handle errors
    console.error('Error:', error)
  })
  .finally(() => {
    // Cleanup tasks, e.g., hiding loading spinner, resetting form fields, etc.
    console.log('Request completed')
  })
```

In this example, the `finally` block is used to log a message indicating that the request has completed, regardless of whether it was successful or encountered an error. This can be useful for providing feedback to users or performing cleanup actions in your application.

#### PROBLEM

Add the .finally() callback, identical to how you chained on .then() and after it, .catch().

The only difference is that the finally callback does not accept a value. Within the finally callback, when the promise has "settled" (resolved successfully or has been rejected), perform the cleanup step of removing the loading span.

```js
const appDiv = document.getElementById('app')

function getPeople() {
  fetch('https://swapi.dev/api/peoplee/')
    .then(response => {
      if (!response.ok) {
        throw Error('Unsuccessful response')
      }
      return response.json()
    })
    .then(data => {
      console.log(data)
      document.getElementById('characters').textContent = data.count
    })
    .catch(err => {
      console.log('Error fetching data: ', err)
      document.querySelector('p').innerHTML = 'Error fetching data'
    })
}

getPeople()

appDiv.innerHTML = `
  <span id="loading">Loading...</span>
  <p>⭐️ There are <strong id="characters">--</strong> primary characters in Star Wars</p>
`
```

#### SOLUTION

>

#### **Notes**

- here, we just need to figure out how to get rid of this loading span.

- And because it has an ID of loading, it's going to be pretty easy to select. Once again, using document dot get element by ID here, we just need to select the one the element with the loading `id`.

- And we need to say at the very end, remove(), we just need to call the `remove()` function to get rid of it.

```js
const appDiv = document.getElementById('app')

function getPeople() {
  fetch('https://swapi.dev/api/people/')
    .then(response => {
      if (!response.ok) {
        throw Error('Unsuccessful response')
      }
      return response.json()
    })
    .then(data => {
      console.log(data)
      document.getElementById('characters').textContent = data.count
    })
    .catch(err => {
      console.log('Error fetching data: ', err)
      document.querySelector('p').innerHTML = 'Error fetching data'
    })
    .finally(() => {
      document.getElementById('loading').remove()
    })
}

getPeople()

appDiv.innerHTML = `
  <span id="loading">Loading...</span>
  <p>⭐️ There are <strong id="characters">--</strong> primary characters in Star Wars</p>
`
```

### **=>** 4 - Async Await Syntax

>

#### **Notes**

- The `async/await` syntax provides a more concise and synchronous-looking way to work with asynchronous operations, including making HTTP requests using the Fetch API. Here's how you can use `async/await` with `fetch`:

```javascript
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data')
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json()
    console.log('Data:', data)
    return data
  } catch (error) {
    console.error('Error:', error)
    throw error // Re-throwing the error for further handling if needed
  } finally {
    console.log('Request completed') // This block will always execute
  }
}

// Call the async function
fetchData()
  .then(data => {
    // Handle data if needed
  })
  .catch(error => {
    // Handle error if needed
  })
```

Explanation:

1. `async/await` Syntax: The `fetchData` function is declared as an asynchronous function using the `async` keyword. This allows us to use `await` within the function to pause execution until promises are resolved or rejected.

2. `try/catch` Block: Inside the `try` block, we use `await` to pause execution until the `fetch` promise is resolved. If the response status is not within the successful range (200-299), we throw an error using `throw new Error()`.

3. Handling Response: We use `await response.json()` to parse the response body as JSON. This also returns a promise, which we await to get the actual data.

4. Error Handling: Any errors that occur during the execution of the `try` block are caught in the `catch` block. We log the error and optionally re-throw it for further handling.

5. `finally` Block: The `finally` block will always execute, regardless of whether there was an error or the promise was resolved. This is useful for cleanup tasks or actions that need to be performed after the promise has settled.

6. Calling the Function: We call the `fetchData` function, which returns a promise. We can then use `.then()` and `.catch()` to handle the resolved data or any errors that occur during the execution of the function.

Using `async/await` with `fetch` can make your code more readable and easier to understand, especially when dealing with multiple asynchronous operations or when error handling and cleanup are required.

#### PROBLEM

Resolve our fetch request using the async-await syntax and, once again, display the number of starships from the Star Wars API in our UI.

```js
const appDiv = document.getElementById('app')

async function getStarships() {
  const response = await fetch('https://swapi.dev/api/starships/')
  console.log(response)
  // .then((response) => response.json())
  // .then((data) => {
  //   document.getElementById("starships").textContent = data.count;
  // });
}

getStarships()

appDiv.innerHTML = `
  <p>🛳️ There are <strong id="starships">--</strong> starships in Star Wars</p>
`
```

#### SOLUTION

>

#### **Notes**

- We've covered the first part of resolving our promise here. But whenever we use Fetch, as you might have seen, hopefully saw, we have to resolve a couple of promises.

That's what the purpose of chaining these then callbacks is for, we need that in order to resolve another promise, which is specifically using the JSON method. So we have our response here, but we don't have the result value from it. We have metadata about it.

But to get the JSON data, we need to `await response.json`. And if I hover over this, we do see that it in fact, returns a promise.
So using await, we can get back the data and put it in a variable of the same name: `const data = await response.json()`
And from here, we can grab `data.count`, and we're going to call that our starships: ` const starships = data.count`

And again, using `document.getElementById` select the starships strong tag and set the inner text or the text content to the starships variable: `document.getElementById('starships').textContent = starships`

So now we have a function that fetches the data and updates our UI but runs in a top down very understandable fashion with far less code and is a lot easier to work with in general.

```js
const appDiv = document.getElementById('app')

async function getStarships() {
  const response = await fetch('https://swapi.dev/api/starships/')
  const data = await response.json()
  const starships = data.count
  document.getElementById('starships').textContent = starships
}

getStarships()

appDiv.innerHTML = `
  <p>🛳️ There are <strong id="starships">--</strong> starships in Star Wars</p>
`
```

### **=>** 5 - Async Await Complete

>

#### **Notes**

- In JavaScript, the `try`...`catch` statement is used for error handling, allowing you to gracefully handle exceptions that might occur during the execution of your code. When combined with the Fetch API, which is used for making HTTP requests, `try`...`catch` can help handle errors that may arise during the fetching of resources.

Here's a basic example of how you can use `try`...`catch` with the Fetch API:

```javascript
try {
  // Attempt to fetch data from a URL
  fetch('https://example.com/data')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      return response.json() // Parse the JSON response
    })
    .then(data => {
      // Handle the fetched data
      console.log(data)
    })
    .catch(error => {
      // Handle any errors that occurred during the fetch operation
      console.error('There was a problem with the fetch operation:', error)
    })
} catch (error) {
  // This block will only catch synchronous errors, not asynchronous ones from fetch
  console.error('Caught an error synchronously:', error)
}
```

In this example:

- The `try` block contains the code that you want to attempt to execute. Here, it's the `fetch()` function call.
- Inside the `try` block, we attempt to fetch data from the URL 'https://example.com/data'. If there's an issue with the network or the server returns an error response, it throws an `Error`.
- If the fetch operation is successful (`response.ok` is `true`), the JSON data is extracted from the response using `response.json()` and further processed in the subsequent `.then()` block.
- If any error occurs during the fetch operation or JSON parsing, it's caught in the `catch` block, where you can handle it gracefully. In this case, we log the error message to the console.
- It's important to note that `fetch` operates asynchronously, so any errors that occur during the fetch operation or processing of the response will not be caught by a surrounding `try` block unless specifically handled within a `.catch()` block chained to the `fetch()` call.

Remember that `try`...`catch` is mainly for handling synchronous errors. Asynchronous errors, like those from a `fetch` call, are handled within the Promise chain with `.catch()`.

#### PROBLEM

>

Display the number of Star Wars films using the films endpoint.

Write the async code with the async-await syntax, with a try-catch to catch any errors and a finally block to hide the loading span.

```js
const appDiv = document.getElementById('app')

// https://swapi.dev/api/films
function getFilms() {}

getFilms()

appDiv.innerHTML = `
  <span id="loading">Loading...</span>
  <p>🍿 There are <strong id="films">--</strong>  Star Wars films</p>
`
```

#### SOLUTION

>

#### **Notes**

- In this code:

We define an async function `getFilms()` to fetch the films data from the SWAPI endpoint.
Inside the function, we use `tr`y to attempt fetching the data using `fetch` and `await`, and then parsing the JSON response.
If there's an error during the fetching or parsing process, the `catch` block catches the error and logs it to the console.
Finally, regardless of whether the promise is fulfilled or rejected, the `finally` block removes the loading span by using the `remove()` method.
We call getFilms() to initiate the fetching process.
The HTML content is set with a loading span initially. When the films data is fetched and displayed, the loading span disappears.

```js
const appDiv = document.getElementById('app')

// https://swapi.dev/api/films
async function getFilms() {
  try {
    const response = await fetch('https://swapi.dev/api/filmss')
    if (!response.ok) {
      throw new Error('Error making request')
    }
    const data = await response.json()
    const films = data.count
    document.getElementById('films').textContent = films
  } catch (error) {
    console.log(error)
    document.getElementById('title').textContent = 'Error fetching data'
  } finally {
    document.getElementById('loading').remove()
  }
}

getFilms()

appDiv.innerHTML = `
  <span id="loading">Loading...</span>
  <p id="title">🍿 There are <strong id="films">--</strong>  Star Wars films</p>
`
```

## **MODULE** 2 - React Essentials

>

## ELEMENTS

>

### **=>** 1 - HTML to JSX

#### What is covered?

- Naming component's files and the ".jsx" extension
- The Rules of JSX
  1. Return a single root element
  2. Close all the tags
  3. camelCase all most of the things
  4. Use parenthesis for multi-line returns

https://react.dev/learn/writing-markup-with-jsx#the-rules-of-jsx

https://react.dev/learn/writing-markup-with-jsx

>

#### PROBLEM

Convert the Pricing component's HTML string to valid JSX.

```js
// Convert HTML string to valid JSX
export default function Pricing() {
  return `<h2 class="title">Simple no-tricks pricing</h2>
      <hr>
      <a href="/buy" class="button">
        Buy Now <span aria-hidden="true">→</span>
      </a>`
}
```

#### SOLUTION

The final Pricing component should have:

- a single parent element,
- convert class to className,
- change `<hr>` to `<hr />`
- and return JSX, not a template literal

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

### **=>** 2 - Dynamic Data with Curly Braces

#### What is covered?

- Using the curly brace syntax and displaying dynamic data
- Passing strings with quotes.
- Where to use curly braces.
- CSS and other objects in JSX.
- Objects are not valid as a React child.

https://react.dev/learn/javascript-in-jsx-with-curly-braces

#### PROBLEM

- Use the `curly braces syntax` to display all of the data within this object in the right places in the UI.

```js
import { InformationCircleIcon as Icon } from '@heroicons/react/20/solid'

// Use curly braces to display banner data
export default function Banner() {
  const bannerData = {
    icon: (
      <Icon
        className='h-5 w-5 text-blue-400'
        aria-hidden='true'
      />
    ),
    version: 4,
    href: '/details',
  }

  return (
    <div className='banner-wrapper'>
      <div className='flex'>
        <div className='flex-shrink-0'></div>
        <div className='banner-content'>
          <p className='banner-text'>
            A new software update is available. See what’s new in version
          </p>
          <p className='banner-details'>
            <a className='banner-details-link'>
              Details
              <span aria-hidden='true'> &rarr;</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
```

#### SOLUTION

In order to solve this problem,

- you not only have to figure out how to output the primitive values, version (number) and the href (string),
- but also the icon.

The Icon is a React component, which cannot be referenced. It must be written as a single "tag", as if it was a single tag JSX element.

```jsx
import { InformationCircleIcon as Icon } from '@heroicons/react/20/solid'

// Use curly braces to display banner data
export default function Banner() {
  const bannerData = {
    icon: (
      <Icon
        className='h-5 w-5 text-blue-400'
        aria-hidden='true'
      />
    ),
    version: 4,
    href: '/details',
  }

  return (
    <div className='banner-wrapper'>
      <div className='flex'>
        <div className='flex-shrink-0'>{bannerData.icon}</div>
        <div className='banner-content'>
          <p className='banner-text'>
            A new software update is available. See what’s new in version {bannerDate.version}
          </p>
          <p className='banner-details'>
            <a
              href={bannerData.href}
              className='banner-details-link'>
              Details
              <span aria-hidden='true'> &rarr;</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
```

### **=>** 3 - Inline Styles

#### What is covered?

- The className and id attributes
- The style attribute (prop) and double curly braces
- advantages of using inline styles
  - inline styles do override any rules that are applied using a class name
  - cutting down on our code by extracting shared styles

https://react.dev/learn#adding-styles

https://legacy.reactjs.org/docs/dom-elements.html#style

https://react.dev/learn/javascript-in-jsx-with-curly-braces#using-double-curlies-css-and-other-objects-in-jsx

#### PROBLEM

Using inline styles:

- Give the "Create" button a green background color and white text color.
- Give the "Update" button an orange (darkorange) background color and white text color.
- Give the "Delete" button a red background color, white text color, and font weight of bold.

```js
// Add inline styles on each individual button, corresponding to the action
export default function ButtonVariants() {
  return (
    <span className='wrapper'>
      <button className='button-create'>Create</button>
      <button className='button-update'>Update</button>
      <button className='button-delete'>Delete</button>
    </span>
  )
}
```

#### SOLUTION

To change the inline styles,

- just add a second set of curly braces to the styles prop
- and add the required key-value pairs to each button
- inline styles do override any rules that are applied using a className because styles inline styles have higher specificity and CSS.

```jsx
// Add inline styles on each individual button, corresponding to the action
export default function ButtonVariants() {
  return (
    <span className='wrapper'>
      <button
        className='button-create'
        style={{
          color: 'white',
          backgroundColor: 'green',
        }}>
        Create
      </button>
      <button
        className='button-update'
        style={{
          .color: 'white',
          backgroundColor: 'darkorange',
        }}>
        Update
      </button>
      <button
        className='button-delete'
        style={{
          color: 'white',
          backgroundColor: 'red',
          fontWeight: 'bold',
        }}>
        Delete
      </button>
    </span>
  )
}
```

we can use the power of JavaScript to extract some of these reuse styles

- extract sheared styles in an object (`sharedStyles`)
- use the spread operator to apply the styles (`..sharedStyles,`)

- that definitely cuts down on our code.
- And it's a nice advantage that working with JSX and react in particular gives us

```jsx
// Add inline styles on each individual button, corresponding to the action
export default function ButtonVariants() {
  const sharedStyles = { color: 'white', fontWeight: 'bold' }

  return (
    <span className='wrapper'>
      <button
        className='button-create'
        style={{
          ...sharedStyles,
          backgroundColor: 'green',
        }}>
        Create
      </button>
      <button
        className='button-update'
        style={{
          ...sharedStyles,
          backgroundColor: 'darkorange',
        }}>
        Update
      </button>
      <button
        className='button-delete'
        style={{
          ...sharedStyles,
          backgroundColor: 'red',
        }}>
        Delete
      </button>
    </span>
  )
}
```

### **=>** 4 - Conditionals in JSX

#### What is covered?

- Conditional (ternary) operator (? :)
- Conditionally returning nothing with null
- Logical AND operator (&&)

https://react.dev/learn/conditional-rendering

https://react.dev/learn/conditional-rendering#conditionally-returning-nothing-with-null

https://react.dev/learn/conditional-rendering#logical-and-operator-

#### PROBLEM

If `isSaleOpen` is true (if there is an active sale),

- display the appropriate header and description.

If there is a sale,

- make sure to show the link to the sale page,
- otherwise hide it.

```js
const saleOpen = {
  heading: 'Get 25% off during our one-time sale',
  description:
    "Most of our products are limited releases that won't come back. Get your favorite items while they're in stock.",
  href: '/one-time-sale',
}

const saleClosed = {
  heading: 'Oops, you just missed out on our big sale!',
  description: 'Now everything you like is back at full price. Sorry!',
}

export default function Callout() {
  const isSaleOpen = false

  return (
    <section className='section'>
      <div className='section-wrapper'>
        <h2 className='section-heading'>{isSaleOpen ? saleOpen.heading : saleClosed.heading}</h2>
        <p className='section-description'>
          {isSaleOpen ? saleOpen.description : saleClosed.description}
        </p>
        {isSaleOpen ? (
          <a
            href={saleOpen.href}
            className='mt-6 inline-block w-full rounded-md border border-transparent bg-gray-900 px-8 py-3 font-medium text-white hover:bg-gray-800 sm:w-auto'>
            Get access to our one-time sale
          </a>
        ) : null}
      </div>
    </section>
  )
}
```

#### SOLUTION

To display the appropriate content in the header and description,

- we need to use a couple of ternary expressions within our JSX:

```jsx
<h2 className="section-heading">
	{isSaleOpen ? saleOpen.heading : saleClosed.heading}
</h2>
<p className="section-description">
   {isSaleOpen ? saleOpen.description : saleClosed.description}
</p>
```

After that, we need to only display the link if isSaleOpen is true:

- you could just add a set of curly braces around this link where we want to put this conditional
- and we can once again add a ternary.
- That's the easiest approach, to say if a sale is open, we want to display that link, Otherwise, we want to hide with `null`

```jsx
{
  isSaleOpen ? (
    <a
      href={saleOpen.href}
      className='section-link'>
      Get access to our one-time sale
    </a>
  ) : null
}
```

but another shorter way to do this is to just use the AND (`&&`) operator and drop the ternary and of course drop the else condition for it.

```jsx
{
  isSaleOpen && (
    <a
      href={saleOpen.href}
      className='section-link'>
      Get access to our one-time sale
    </a>
  )
}
```

- So this means when this is true, this is returned and displayed. But if this is false false is instead returned and not displayed.

So if we write our conditional like this, this is identical. It will have the same effect as writing a ternary just something to be aware of.

```jsx
const saleOpen = {
  heading: 'Get 25% off during our one-time sale',
  description:
    "Most of our products are limited releases that won't come back. Get your favorite items while they're in stock.",
  href: '/one-time-sale',
}

const saleClosed = {
  heading: 'Oops, you just missed out on our big sale!',
  description: 'Now everything you like is back at full price. Sorry!',
}

export default function Callout() {
  const isSaleOpen = true

  return (
    <section className='section'>
      <div className='section-wrapper'>
        <h2 className='section-heading'>{isSaleOpen ? saleOpen.heading : saleClosed.heading}</h2>
        <p className='section-description'>
          {isSaleOpen ? saleOpen.description : saleClosed.description}
        </p>
        {isSaleOpen && (
          <a
            href={saleOpen.href}
            className='mt-6 inline-block w-full rounded-md border border-transparent bg-gray-900 px-8 py-3 font-medium text-white hover:bg-gray-800 sm:w-auto'>
            Get access to our one-time sale
          </a>
        )}
      </div>
    </section>
  )

  return (
    <section className='section'>
      <div className='section-wrapper'>
        <h2 className='section-heading'></h2>
        <p className='section-description'></p>
        <a
          href='#'
          className='mt-6 inline-block w-full rounded-md border border-transparent bg-gray-900 px-8 py-3 font-medium text-white hover:bg-gray-800 sm:w-auto'></a>
      </div>
    </section>
  )
}
```

### **=>** 5 - Hiding Elements

#### What is covered?

- You can't directly use an if statement in JSX
- Using an if statement with a condition to not display a component by returning null
- using the AND (&&) operator instead of a ternary

#### PROBLEM

> we want to create this review component.

- This is the final version of it:

![](ReactImages/3.png)

First,

- fill out the Review component using all the data from the review object.

Next,

- add a conditional to not display the component at all if there is no author

- Hide the ReviewRating component if the review is not good (again, less than 4).

- Display "No review" for the review content if the review is not good.

```js
import { StarIcon } from '@heroicons/react/20/solid'

const review = {
  rating: 2,
  content:
    "I really loved this product, but then I took it out of the box and realized I didn't like it at all.",
  author: 'Emily Selman',
  avatarSrc:
    'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
}

// Good review has rating >= 4
// If no author, hide entire Review
// If good review, show ReviewRating, otherwise hide it. In place of review content, say "No review".
export default function GoodReview() {
  return (
    <div className='review'>
      <div className='review-wrapper'>
        <img className='review-avatar' />
        <div className='review-left'>
          <h4 className='review-author'></h4>
          <ReviewRating review={review} />
        </div>
      </div>
      <div className='review-content'></div>
    </div>
  )
}

function ReviewRating({ review }) {
  return (
    <div className='review-rating'>
      {[0, 1, 2, 3, 4].map(rating => (
        <StarIcon className='review-star' />
      ))}
    </div>
  )
}
```

#### SOLUTION

To hide the component if the review has no author, add an early return:

- `if (!review.author) return null`

To hide the `ReviewRating` component if the review is bad,

- first make a boolean variable `isGoodReview`.

- `const isGoodReview = review.rating >= 4`

Next,

- use the `&&` operator or a ternary to display the `ReviewRating` component is `isGoodReview` is equal to `true`:

- `{isGoodReview && <ReviewRating review={review} />}`

```jsx
import { StarIcon } from '@heroicons/react/20/solid'

const review = {
  rating: 4,
  content:
    "I really loved this product, but then I took it out of the box and realized I didn't like it at all.",
  author: 'Emily Selman',
  avatarSrc:
    'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
}

// Good review has rating >= 4
// If no author, hide entire Review
// If good review, show ReviewRating, otherwise hide it. In place of review content, say "No review".
export default function GoodReview() {
  const isGoodReview = review.rating >= 4

  if (!review.author) return null

  return (
    <div className='review'>
      <div className='review-wrapper'>
        <img
          className='review-avatar'
          src={review.avatarSrc}
          alt={review.author}
        />
        <div className='review-left'>
          <h4 className='review-author'>{review.author}</h4>
          {isGoodReview && <ReviewRating review={review} />}
        </div>
      </div>
      <div className='review-content'>{isGoodReview ? review.content : 'No review'}</div>
    </div>
  )
}

function ReviewRating({ review }) {
  return (
    <div className='review-rating'>
      {[1, 2, 3, 4, 5].map(rating => (
        <StarIcon
          className='review-star'
          style={{
            color: review.rating >= rating ? 'gold' : 'lightgray',
          }}
        />
      ))}
    </div>
  )
}
```

## COMPONENTS

>

### **=>** 1 - Root Component

#### What is covered?

- Creating a Root component from scratch

- >

#### PROBLEM

Create a Root component from scratch,

- making sure to import React as well as ReactDOM.
- Select the root element from the HTML document
- display a component to the page and use the StrictMode component.

#### SOLUTION

The first step is to import all of the necessary libraries,

- React and ReactDOM.
- It's also recommended to import your CSS stylesheet in this file.

After that,

- check what the root element is in the HTML Document (index.html) and select it using the document API.

Finally,

- use ReactDOM, create the root using the selected container element
- and render the entire component tree, which usually consists of a top-level App component.

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

const root = document.getElementById('root')

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
```

This App component

- should be placed into a separate file
- so make sure to import it up at the top

```jsx
export default function App() {
  return <h2>Hello React</h2>
}
```

### **=>** 2 - Creating Components

#### What is covered?

Take the App component and split the elements within it into two sub-components, Header and Form.

When splitting components, consider the following guidelines:

- Identify logical parts of your UI that can be encapsulated into separate components.
- Keep components small and focused on a single responsibility.
- Use props to pass data and functions between parent and child components.
- Name components appropriately to reflect their purpose and responsibilities.

Splitting components in this manner can lead to a more modular and scalable codebase, making it easier to maintain and extend your React application.

https://react.dev/learn/thinking-in-react

>

#### PROBLEM

Take the App component and split the elements within it into two sub-components,

- Header
- and Form.

Make sure to

- place all 3 components in their own separate files
- within the src folder
- with the same name as the component

```js
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// Break into separate App/Header/Form components, put in separate files with their own name
function App() {
  return (
    <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
      <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
        <img
          className='mx-auto h-10 w-auto'
          src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
          alt='Your Company'
        />
        <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
          Sign in to your account
        </h2>
      </div>

      <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
        <form
          className='space-y-6'
          action='#'
          method='POST'>
          <div>
            <label
              htmlFor='email'
              className='block text-sm font-medium leading-6 text-gray-900'>
              Email address
            </label>
            <div className='mt-2'>
              <input
                id='email'
                name='email'
                type='email'
                autoComplete='email'
                required
                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              />
            </div>
          </div>

          <div>
            <div className='flex items-center justify-between'>
              <label
                htmlFor='password'
                className='block text-sm font-medium leading-6 text-gray-900'>
                Password
              </label>
              <div className='text-sm'>
                <a
                  href='#'
                  className='font-semibold text-indigo-600 hover:text-indigo-500'>
                  Forgot password?
                </a>
              </div>
            </div>
            <div className='mt-2'>
              <input
                id='password'
                name='password'
                type='password'
                autoComplete='current-password'
                required
                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              />
            </div>
          </div>

          <div>
            <button
              type='submit'
              className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
              Sign in
            </button>
          </div>
        </form>

        <p className='mt-10 text-center text-sm text-gray-500'>
          Not a member?{' '}
          <a
            href='#'
            className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'>
            Start a 14 day free trial
          </a>
        </p>
      </div>
    </div>
  )
}
```

#### SOLUTION

>

Take a look at the UI to figure out what elements you want to place in each component.

Once you've done that,

- create separate Header and Form components and move the respective elements into each.

After that,

- create and put each of these components into their own file: App, Header, and Form.

- Make sure in the App component to import both of the Header and Form sub-components.

this isn't an exact science, it's really based off of the requirements of your app.

- I'm just calling the header here, this logo, as well as the text.

```jsx
import React from 'react'
import Header from './Header'
import Form from './Form'

export default function App() {
  return (
    <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
      <Header />
      <Form />
    </div>
  )
}
```

```jsx
import React from 'react'

export default function Header() {
  return (
    <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
      <img
        className='mx-auto h-10 w-auto'
        src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
        alt='Your Company'
      />
      <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
        Sign in to your account
      </h2>
    </div>
  )
}
```

```jsx
import React from 'react'

export default function Form() {
  return (
    <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
      <form
        className='space-y-6'
        action='#'
        method='POST'>
        <div>
          <label
            htmlFor='email'
            className='block text-sm font-medium leading-6 text-gray-900'>
            Email address
          </label>
          <div className='mt-2'>
            <input
              id='email'
              name='email'
              type='email'
              autoComplete='email'
              required
              className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
            />
          </div>
        </div>

        <div>
          <div className='flex items-center justify-between'>
            <label
              htmlFor='password'
              className='block text-sm font-medium leading-6 text-gray-900'>
              Password
            </label>
            <div className='text-sm'>
              <a
                href='#'
                className='font-semibold text-indigo-600 hover:text-indigo-500'>
                Forgot password?
              </a>
            </div>
          </div>
          <div className='mt-2'>
            <input
              id='password'
              name='password'
              type='password'
              autoComplete='current-password'
              required
              className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
            />
          </div>
        </div>

        <div>
          <button
            type='submit'
            className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
            Sign in
          </button>
        </div>
      </form>

      <p className='mt-10 text-center text-sm text-gray-500'>
        Not a member?{' '}
        <a
          href='#'
          className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'>
          Start a 14 day free trial
        </a>
      </p>
    </div>
  )
}
```

### **=>** 3 - Purity and Side Effects

>

#### What is covered?

- understanding purity and managing side effects effectively to write cleaner, more efficient React components and improve the performance and maintainability of your applications.

https://react.dev/learn/keeping-components-pure

#### PROBLEM

One really key part of working with components is the fact that they need to be pure.
(This comes from functional programming)

Purity means

- having a predictable input and output;
- given a certain input as a function needs to have a certain output,
- which is always going to be JSX, or null if we want to hide the component.

a side effect here means

- something other than just rendering the component.
- So, if we were to attempt to change something outside of the component, that would make it impure; we would be performing a side effect.

A good example would be if we wanted to display a count of each discussion

- Let's say we had a count variable, above everything, It exists outside the discussion and the discussions component, and we initialize it to zero:
  `let count = 0`

- and we want to display it within the discussion
  `Discussion {count}`

- within discussion, we could take the count and increment it by one. We could say += 1.
  `count += 1`

- But if we run this, we're going to see something strange.

![](ReactImages/4.png)

- The reason for this is due to the fact that we're in StrictMode

What StrictMode does by default is it renders our components twice to detect any errors

Try to display the appropriate count value within each Discussion component, by making the component pure and fixing the side effect.

```js
let count = 0

export default function Discussions() {
  return (
    <ul className='discussions'>
      <Discussion />
      <Discussion />
    </ul>
  )
}

function Discussion() {
  count += 1

  return (
    <li className='flex flex-wrap items-center justify-between gap-x-6 gap-y-4 py-5 sm:flex-nowrap'>
      <div>
        <p className='text-sm font-semibold leading-6 text-gray-900'>
          <a
            href='#'
            className='hover:underline'>
            Discussion {count}
          </a>
        </p>
        <div className='mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500'>
          <p>
            <a
              href='#'
              className='hover:underline'>
              Leslie Alexander
            </a>
          </p>
          <svg
            viewBox='0 0 2 2'
            className='h-0.5 w-0.5 fill-current'>
            <circle
              cx={1}
              cy={1}
              r={1}
            />
          </svg>
          <p>
            <time>2d ago</time>
          </p>
        </div>
      </div>
    </li>
  )
}
```

#### SOLUTION

- To fix the side effect, you can move the count variable inside the Discussion component.

However, this does not give us the correct count value when more than 1 Discussion component is rendered.

To display the appropriate count, it can be displayed by utilizing the "purity" of React components--there is a predictable JSX output for a given input.

For this, we can pass the count data to the component via a count prop:

```jsx
export default function Discussions() {
  return (
    <ul className='discussions'>
      <Discussion count={1} />
      <Discussion count={2} />
    </ul>
  )
}
```

>

```jsx
export default function Discussions() {
  return (
    <ul className='discussions'>
      <Discussion count={1} />
      <Discussion count={2} />
    </ul>
  )
}

function Discussion(props) {
  return (
    <li className='flex flex-wrap items-center justify-between gap-x-6 gap-y-4 py-5 sm:flex-nowrap'>
      <div>
        <p className='text-sm font-semibold leading-6 text-gray-900'>
          <a
            href='#'
            className='hover:underline'>
            Discussion #{props.count}
          </a>
        </p>
        <div className='mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500'>
          <p>
            <a
              href='#'
              className='hover:underline'>
              Leslie Alexander
            </a>
          </p>
          <svg
            viewBox='0 0 2 2'
            className='h-0.5 w-0.5 fill-current'>
            <circle
              cx={1}
              cy={1}
              r={1}
            />
          </svg>
          <p>
            <time>2d ago</time>
          </p>
        </div>
      </div>
    </li>
  )
}
```

### **=>** 4 - Lists and Keys

>

#### What is covered?

- Rendering Lists
  https://react.dev/learn/rendering-lists

- Keeping list items in order with key
  https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key

#### PROBLEM

- Use the filter and map methods on the projects array to display the pinned projects as list items within the unordered list.

```js
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'

const projects = [
  {
    name: 'Graph API',
    initials: 'GA',
    href: '#',
    members: 16,
    bgColor: 'bg-pink-600',
    isPinned: true,
  },
  {
    name: 'Component Design',
    initials: 'CD',
    href: '#',
    members: 12,
    bgColor: 'bg-purple-600',
    isPinned: true,
  },
  {
    name: 'Templates',
    initials: 'T',
    href: '#',
    members: 16,
    bgColor: 'bg-yellow-500',
    isPinned: false,
  },
  {
    name: 'React Components',
    initials: 'RC',
    href: '#',
    members: 8,
    bgColor: 'bg-green-500',
    isPinned: true,
  },
]

// Use filter and map to display only pinned projects
export default function PinnedProjects() {
  return (
    <div className='projects-wrapper'>
      <h2 className='projects-title'>Pinned Projects</h2>
      <ul className='projects-list'>
        <li className='project-list-item'>
          <div className={` project-initials`}>AB</div>
          <div className='project-content-wrapper'>
            <div className='project-content'>
              <a
                href='#'
                className='project-link'>
                Name
              </a>
              <p className='project-members'>0 Members</p>
            </div>
            <div className='project-button-wrapper'>
              <button
                type='button'
                className='project-button'>
                <EllipsisVerticalIcon className='project-icon' />
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}
```

#### SOLUTION

- To display the pinned projects only, use the filter function to check if the isPinned property is true, and then iterate over each project with map:

```jsx
<ul className='projects-list'>
  {projects
    .filter(project => project.isPinned)
    .map((project, index) => (
      <PinnedProject
        project={project}
        key={index}
      />
    ))}
</ul>
```

To iterate over a component or element, a unique key value must be provided on the key prop. In this case, the most unique property is the name property, but the index of the current element can also be used in a pinch.

To clean up our App component and to make our code more readable, we can turn the list item into a separate PinnedProject component, which can receive the project data by passing it down on a project prop. Which can be then be destructured in the parameters of the PinnedProject component:

```jsx
function PinnedProject({ project }) {
  return (
    <li className='project-list-item'>
      <div className={`${project.bgColor} project-initials`}>{project.initials}</div>
      <div className='project-content-wrapper'>
        <div className='project-content'>
          <a
            href={project.href}
            className='project-link'>
            {project.name}
          </a>
          <p className='project-members'>{project.members} Members</p>
        </div>
        <div className='project-button-wrapper'>
          <button
            type='button'
            className='project-button'>
            <EllipsisVerticalIcon className='project-icon' />
          </button>
        </div>
      </div>
    </li>
  )
}
```

```jsx
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'

const projects = [
  {
    name: 'Graph API',
    initials: 'GA',
    href: '#',
    members: 16,
    bgColor: 'bg-pink-600',
    isPinned: true,
  },
  {
    name: 'Component Design',
    initials: 'CD',
    href: '#',
    members: 12,
    bgColor: 'bg-purple-600',
    isPinned: true,
  },
  {
    name: 'Templates',
    initials: 'T',
    href: '#',
    members: 16,
    bgColor: 'bg-yellow-500',
    isPinned: false,
  },
  {
    name: 'React Components',
    initials: 'RC',
    href: '#',
    members: 8,
    bgColor: 'bg-green-500',
    isPinned: true,
  },
]

// Use filter and map to display only pinned projects
export default function PinnedProjects() {
  return (
    <div className='projects-wrapper'>
      <h2 className='projects-title'>Pinned Projects</h2>
      <ul className='projects-list'>
        {projects
          .filter(project => project.isPinned)
          .map((project, index) => (
            <PinnedProject
              project={project}
              key={index}
            />
          ))}
      </ul>
    </div>
  )
}

function PinnedProject({ project }) {
  return (
    <li className='project-list-item'>
      <div className={`${project.bgColor} project-initials`}>{project.initials}</div>
      <div className='project-content-wrapper'>
        <div className='project-content'>
          <a
            href={project.href}
            className='project-link'>
            {project.name}
          </a>
          <p className='project-members'>{project.members} Members</p>
        </div>
        <div className='project-button-wrapper'>
          <button
            type='button'
            className='project-button'>
            <EllipsisVerticalIcon className='project-icon' />
          </button>
        </div>
      </div>
    </li>
  )
}
```

### **=>** 5 - Fragments

>

#### What is covered?

- using fragments
  https://react.dev/reference/react/Fragment

#### PROBLEM

A fragment is

- a special type of React component that's a "nothing" component.
- It allows us to "fix", so to speak, our elements and keep us from breaking the rules of React.
- Like if we want to have two return sibling elements, but not add something like a div or main tag or something to wrap it
- because there are many situations where it might affect our styles; that might affect the appearance of what our user sees.

- And plus, we just don't need to; we don't need to add another element to the DOM, especially if we have a bunch of components here.
- We don't need to add that extra weight to our DOM.

So here is your challenge.

- Use a fragment to conditionally display the appropriate links.

- If you have an authenticated user, show the "Dashboard" and "Sign Out" links as siblings. If you don't, show the "Login" link.

```js
// Use fragment <></> to conditionally display login / dashboard + signout
export default function Navbar() {
  const isAuthUser = false

  return (
    <header className='navbar-wrapper'>
      <nav className='navbar'>
        <Logo />
        <div className='navbar-links'>
          <a
            href='#'
            className='navbar-link'>
            Dashboard
          </a>
          <a
            href='#'
            className='navbar-link'>
            Sign out
          </a>
        </div>
      </nav>
    </header>
  )
}

function Logo() {
  return (
    <div className='flex lg:flex-1'>
      <a
        href='#'
        className='-m-1.5 p-1.5'>
        <img
          className='h-8 w-auto'
          src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500'
          alt=''
        />
      </a>
    </div>
  )
}
```

#### SOLUTION

To display the Dashboard and Sign Out links as sibling elements, we need to

- wrap them in a fragment.

- We can use a ternary to display the auth links if isAuthUser is true and the Login link if not:

```jsx
<div className='navbar-links'>
  {isAuthUser ? (
    <>
      <a
        href='#'
        className='navbar-link'>
        Dashboard
      </a>
      <a
        href='#'
        className='navbar-link'>
        Sign out
      </a>
    </>
  ) : (
    <a
      href='#'
      className='navbar-link'>
      Log in
    </a>
  )}
</div>
```

```jsx
// Use fragment <></> to conditionally display login / dashboard + signout
export default function Navbar() {
  const isAuthUser = false

  return (
    <header className='navbar-wrapper'>
      <nav className='navbar'>
        <Logo />
        <div className='navbar-links'>
          {isAuthUser ? (
            <>
              <a
                href='#'
                className='navbar-link'>
                Dashboard
              </a>
              <a
                href='#'
                className='navbar-link'>
                Sign out
              </a>
            </>
          ) : (
            <a
              href='#'
              className='navbar-link'>
              Login
            </a>
          )}
        </div>
      </nav>
    </header>lsu
  )
}

function Logo() {
  return (
    <div className='flex lg:flex-1'>
      <a
        href='#'
        className='-m-1.5 p-1.5'>
        <img
          className='h-8 w-auto'
          src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500'
          alt=''
        />
      </a>
    </div>
  )
}
```

## PROPS

>

### **=>** 1 - Props Basics

#### What is covered?

- Props mental model:

  - the child component takes the props object and is where you say what props and where in the ui they go

  - the parent component is where you run the child component and where you pass the props as attributes
    >

#### PROBLEM

Add the props imageSrc and name (along with their default values) to the Avatar component so that dynamic values can be used.

```js
import React from 'react'

// Pass in imageSrc and name as props
function Avatar(props) {
  return (
    <div className='group block p-8 flex-shrink-0'>
      <div className='flex items-center'>
        <div>
          <img
            className='inline-block h-12 w-12 rounded-full'
            src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
            alt=''
          />
        </div>
        <div className='ml-3'>
          <p className='text-base font-medium text-gray-700 group-hover:text-gray-900'>Tom Cook</p>
          <p className='text-sm font-medium text-gray-500 group-hover:text-gray-700'>
            {props.profileText}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function App() {
  return <Avatar profileText='See profile' />
}
```

#### SOLUTION

```jsx
import React from 'react'

// Pass in imageSrc and name as props
function Avatar(props) {
  return (
    <div className='group block p-8 flex-shrink-0'>
      <div className='flex items-center'>
        <div>
          <img
            className='inline-block h-12 w-12 rounded-full'
            src={props.imageSrc}
            alt=''
          />
        </div>
        <div className='ml-3'>
          <p className='text-base font-medium text-gray-700 group-hover:text-gray-900'>
            {props.name}
          </p>
          <p className='text-sm font-medium text-gray-500 group-hover:text-gray-700'>
            {props.profileText}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <>
      <Avatar
        imageSrc='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
        name='Tom Cook'
        profileText='See profile'
      />
      <Avatar
        imageSrc='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
        name='John Cook'
        profileText='See profile'
      />
    </>
  )
}
```

### **=>** 2 - Passing Props

>

#### What is covered?

- props exercise

#### PROBLEM

Take the static markup, add the appropriate props, set their values and make our FormInput component customizable (i.e. for a password input).

```js
import React from 'react'

// Take static values and make them dynamic using props
// For example: label id, label text, input placeholder, input description
function FormInput() {
  return (
    <div className='max-w-sm p-8'>
      <label
        htmlFor='email'
        className='block text-sm font-medium leading-6 text-gray-900'>
        Email
      </label>
      <div className='mt-2'>
        <input
          id='email'
          name='email'
          type='email'
          placeholder='you@example.com'
          className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2'
        />
      </div>
      <p className='mt-2 text-sm text-gray-500'>We'll only use this for spam.</p>
    </div>
  )
}

export default function App() {
  return (
    <form>
      <FormInput />
      <FormInput />
    </form>
  )
}
```

#### SOLUTION

Figure out what props we need to add to our FormInput component, namely id, type, placeholder, label, and message.

Add those props and their values to the FormInput to pass them:

```jsx
<FormInput
  id='email'
  type='email'
  label='Email'
  placeholder='you@example.com'
  message="We'll only use this for spam."
/>
```

Consume them within the component itself:

```jsx
function FormInput(props) {
  return (
    <div className='max-w-sm p-8'>
      <label
        htmlFor={props.id}
        className='block text-sm font-medium leading-6 text-gray-900'>
        {props.label}
      </label>
      <div className='mt-2'>
        <input
          id={props.id}
          name={props.id}
          type={props.type}
          placeholder={props.placeholder}
          className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2'
        />
      </div>
      <p className='mt-2 text-sm text-gray-500'>{props.message || 'No message'}</p>
    </div>
  )
}
```

---

```jsx
import React from 'react'

// id
// label
// type
// placeholder
// message
function FormInput(props) {
  return (
    <div className='max-w-sm p-8'>
      <label
        htmlFor={props.id}
        className='block text-sm font-medium leading-6 text-gray-900'>
        {props.label}
      </label>
      <div className='mt-2'>
        <input
          id={props.id}
          name={props.id}
          type={props.type}
          placeholder={props.placeholder}
          className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2'
        />
      </div>
      <p className='mt-2 text-sm text-gray-500'>{props.message || 'No message'}</p>
    </div>
  )
}

export default function App() {
  return (
    <form>
      <FormInput
        id='email'
        type='email'
        label='Email'
        placeholder='you@example.com'
        message="We'll only use this for spam."
      />
      <FormInput
        id='password'
        type='password'
        label='Password'
        placeholder='Your password'
      />
    </form>
  )
}
```

### **=>** 3 - Props in Lists

>

#### What is covered?

- using a prop to pass file data, we can split an item component from a list component to make it more readable.

#### PROBLEM

Map over the files array and display each of the list items within a PhotoListItem component, passing down the file data via props.

```js
import React from 'react'
import files from './files'

// Use files array, display a PhotoListItem, passing the data down as a prop and displaying it
function PhotoList() {
  return (
    <ul
      role='list'
      className='grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8'>
      {files.map(file => (
        <li
          key={file.source}
          className='relative'>
          <div className='group aspect-square block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100'>
            <img
              src={file.source}
              alt=''
              className='pointer-events-none object-cover group-hover:opacity-75'
            />
            <button
              type='button'
              className='absolute inset-0 focus:outline-none'>
              <span className='sr-only'>View details for {file.title}</span>
            </button>
          </div>
          <p className='pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900'>
            {file.title}
          </p>
          <p className='pointer-events-none block text-sm font-medium text-gray-500'>{file.size}</p>
        </li>
      ))}
    </ul>
  )
}

export default function App() {
  return (
    <div className='bg-purple-100'>
      <div className='mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8'>
        <PhotoList />
      </div>
    </div>
  )
}
```

#### SOLUTION

Instead of mapping over indivdual list items, move them into the PhotoListItem component and make sure to use the key prop on the component itself.

Also, pass down all the file data on the file prop:

```jsx
function PhotoList() {
  return (
    <ul
      role='list'
      className='grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8'>
      {files.map((file, index) => (
        <PhotoListItem
          key={index}
          file={file}
        />
      ))}
    </ul>
  )
}
```

Using the file prop, you can use that data within the PhotoListItem component using props.file, which you can put in a local variable, file:

```jsx
function PhotoListItem(props) {
  const file = props.file

  return (
    <li className='relative'>
      <div className='group aspect-square block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100'>
        <img
          src={file.source}
          alt=''
          className='pointer-events-none object-cover group-hover:opacity-75'
        />
        <button
          type='button'
          className='absolute inset-0 focus:outline-none'>
          <span className='sr-only'>View details for {file.title}</span>
        </button>
      </div>
      <p className='pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900'>
        {file.title}
      </p>
      <p className='pointer-events-none block text-sm font-medium text-gray-500'>{file.size}</p>
    </li>
  )
}
```

---

```jsx
import React from 'react'
import files from './files'

// Use files array, display a PhotoListItem, passing the data down as a prop and displaying it
function PhotoList() {
  return (
    <ul
      role='list'
      className='grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8'>
      {files.map((file, index) => (
        <PhotoListItem
          key={index}
          file={file}
        />
      ))}
    </ul>
  )
}

function PhotoListItem(props) {
  const file = props.file

  return (
    <li className='relative'>
      <div className='group aspect-square block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100'>
        <img
          src={file.source}
          alt=''
          className='pointer-events-none object-cover group-hover:opacity-75'
        />
        <button
          type='button'
          className='absolute inset-0 focus:outline-none'>
          <span className='sr-only'>View details for {file.title}</span>
        </button>
      </div>
      <p className='pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900'>
        {file.title}
      </p>
      <p className='pointer-events-none block text-sm font-medium text-gray-500'>{file.size}</p>
    </li>
  )
}

export default function App() {
  return (
    <div className='bg-purple-100'>
      <div className='mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8'>
        <PhotoList />
      </div>
    </div>
  )
}
```

### **=>** 4 - Destructuring Props

>

#### What is covered?

- Destructuring the props object

#### PROBLEM

Pass props to the Card component and use object destructuring on the props object to consume and display them.

```js
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'
import React from 'react'

// Add individual props to Card, then destructure each to use them
function Card({ username }) {
  return (
    <div className='mx-auto max-w-7xl py-6 sm:px-6 lg:px-8'>
      <div class='bg-white sm:rounded-lg sm:shadow'>
        <div className='px-4 py-5 sm:px-6'>
          <div className='flex space-x-3'>
            <div className='flex-shrink-0'>
              <img
                className='h-10 w-10 rounded-full'
                src='https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                alt=''
              />
            </div>
            <div className='min-w-0 flex-1'>
              <p className='text-sm font-semibold text-gray-900'>
                <a
                  href='#'
                  className='hover:underline'>
                  {username}
                </a>
              </p>
              <p className='text-sm text-gray-500'>
                <a
                  href='#'
                  className='hover:underline'>
                  December 9 at 11:43 AM
                </a>
              </p>
            </div>
            <CardButton />
          </div>
        </div>
        <div class='px-4 pb-5 opacity-25 sm:p-6 sm:pt-0'>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo impedit sapiente
            recusandae iusto officiis dolor? Laborum quibusdam quam, quidem vel assumenda repellat
            inventore sint nesciunt, ullam asperiores magnam placeat eveniet. Aliquam voluptatibus
            assumenda distinctio veniam quam tempora modi aperiam nemo voluptate reprehenderit
            quidem, nisi vero est.
          </p>
        </div>
      </div>
    </div>
  )
}

function CardButton() {
  return (
    <div className='flex flex-shrink-0 self-center'>
      <div
        as='div'
        className='relative inline-block text-left'>
        <div>
          <div className='-m-2 flex items-center rounded-full p-2 text-gray-400 hover:text-gray-600'>
            <span className='sr-only'>Open options</span>
            <EllipsisVerticalIcon
              className='h-5 w-5'
              aria-hidden='true'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <div className='bg-gray-100'>
      <Card username='Chelsea Hagon' />
    </div>
  )
}
```

#### SOLUTION

To solve this challenge, pass down all the required props, including username, date, avatar, text, and (optionally) hideButton.

From there, make sure to destructure all of these props individually:

```jsx
function Card({ username, date, avatar, text, hideButton }) {
  return (
    <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
      <div class="bg-white sm:rounded-lg sm:shadow">
			...

```

---

```jsx
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'
import React from 'react'

// Add individual props to Card, then destructure each to use them

// username, date, avatar, text, hideButton
function Card({ username, date, avatar, text, hideButton }) {
  return (
    <div className='mx-auto max-w-7xl py-6 sm:px-6 lg:px-8'>
      <div class='bg-white sm:rounded-lg sm:shadow'>
        <div className='px-4 py-5 sm:px-6'>
          <div className='flex space-x-3'>
            <div className='flex-shrink-0'>
              <img
                className='h-10 w-10 rounded-full'
                src={avatar}
                alt=''
              />
            </div>
            <div className='min-w-0 flex-1'>
              <p className='text-sm font-semibold text-gray-900'>
                <a
                  href='#'
                  className='hover:underline'>
                  {username}
                </a>
              </p>
              <p className='text-sm text-gray-500'>
                <a
                  href='#'
                  className='hover:underline'>
                  {date}
                </a>
              </p>
            </div>
            {hideButton ? null : <CardButton />}
          </div>
        </div>
        <div class='px-4 pb-5 opacity-25 sm:p-6 sm:pt-0'>
          <p>{text}</p>
        </div>
      </div>
    </div>
  )
}

function CardButton() {
  return (
    <div className='flex flex-shrink-0 self-center'>
      <div
        as='div'
        className='relative inline-block text-left'>
        <div>
          <div className='-m-2 flex items-center rounded-full p-2 text-gray-400 hover:text-gray-600'>
            <span className='sr-only'>Open options</span>
            <EllipsisVerticalIcon
              className='h-5 w-5'
              aria-hidden='true'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

// username, date, avatar, text, hideButton
export default function App() {
  return (
    <div className='bg-gray-100'>
      <Card
        username='Chelsea Hagon'
        date='December 9 at 11:43 AM'
        avatar='https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
        text={`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo impedit sapiente recusandae iusto officiis dolor? Laborum quibusdam quam, quidem vel assumenda repellat inventore sint nesciunt, ullam asperiores magnam placeat eveniet. Aliquam voluptatibus assumenda distinctio veniam quam tempora modi aperiam nemo voluptate reprehenderit quidem, nisi vero est.`}
        hideButton={false}
      />
    </div>
  )
}
```

### **=>** 5 - Children Props

>

#### What is covered?

- using children props

#### PROBLEM

Extract the BoxButton markup into a separate component and pass it dynamic data using the children prop.

```js
import React from 'react'
import { CameraIcon, VideoCameraIcon } from '@heroicons/react/24/outline'

// Extract a "BoxButton" component from the markup and use the children prop to pass it different content
function BoxButton({ children }) {
  return <button>{children}</button>
}

export default function App() {
  return (
    <div className='space-y-4 p-8 max-w-sm mx-auto'>
      <button
        type='button'
        className='relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
        <CameraIcon className='mx-auto h-12 w-12 text-gray-400' />
        <span className='mt-2 block text-sm font-semibold text-gray-900'>Add a new picture</span>
      </button>
      <button
        type='button'
        className='relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
        <VideoCameraIcon className='mx-auto h-12 w-12 text-gray-400' />
        <span className='mt-2 block text-sm font-semibold text-gray-900'>Create a new video</span>
      </button>
    </div>
  )
}
```

#### SOLUTION

First, create the BoxButton component, by moving the button from our markup in App.

After that, make sure to use the children prop to output what is passed between the BoxButton tags as a child of the button element:

```jsx
function BoxButton({ children }) {
  return (
    <button
      type='button'
      className='relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
      {children}
    </button>
  )
}
```

Then, within App, recreate the two button we previously had by passing the appropriate JSX as children:

```jsx
export default function App() {
  return (
    <div className='space-y-4 p-8 max-w-sm mx-auto'>
      <BoxButton>
        <CameraIcon className='mx-auto h-12 w-12 text-gray-400' />
        <span className='mt-2 block text-sm font-semibold text-gray-900'>Add a new picture</span>
      </BoxButton>
      <BoxButton>
        <VideoCameraIcon className='mx-auto h-12 w-12 text-gray-400' />
        <span className='mt-2 block text-sm font-semibold text-gray-900'>Create a new video</span>
      </BoxButton>
    </div>
  )
}
```

---

```jsx
import React from 'react'
import { CameraIcon, VideoCameraIcon } from '@heroicons/react/24/outline'

// Extract a "BoxButton" component from the markup and use the children prop to pass it different content
function BoxButton({ children }) {
  return (
    <button
      type='button'
      className='relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
      {children}
    </button>
  )
}

export default function App() {
  return (
    <div className='space-y-4 p-8 max-w-sm mx-auto'>
      <BoxButton>
        <CameraIcon className='mx-auto h-12 w-12 text-gray-400' />
        <span className='mt-2 block text-sm font-semibold text-gray-900'>Add a new picture</span>
      </BoxButton>
      <BoxButton>
        <VideoCameraIcon className='mx-auto h-12 w-12 text-gray-400' />
        <span className='mt-2 block text-sm font-semibold text-gray-900'>Create a new video</span>
      </BoxButton>
    </div>
  )
}
```

## STATE

>

### **=>** 1 - useState Hook

>

#### PROBLEM

Update the current tab (to toggle its appearance when clicked) using the state setter function from useState.

```js
import React, { useState } from 'react'

const tabs = ['My Account', 'Company', 'Team Members', 'Billing']

// Update the current tab (to toggle its appearance when clicked) using the state setter function
export default function Tabs() {
  const [currentTab, setCurrentTab] = useState('My Account')
  // let currentTab = "My Account";

  return (
    <div className='flex justify-center my-8'>
      <div
        className='flex space-x-4'
        aria-label='Tabs'>
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => {
              currentTab = tab
            }}
            className={`${
              tab === currentTab
                ? 'bg-indigo-100 text-indigo-700'
                : 'text-gray-500 hover:text-gray-700'
            } rounded-md px-3 py-2 text-sm font-medium`}>
            {tab}
          </button>
        ))}
      </div>
    </div>
  )
}
```

#### SOLUTION

To change the tab dynamically, use the set state function setCurrentTab when the button is clicked:

```jsx
onClick={() => {
	setCurrentTab(tab);
}}
```

---

```jsx
import React, { useState } from 'react'

const tabs = ['My Account', 'Company', 'Team Members', 'Billing']

// Update the current tab (to toggle its appearance when clicked) using the state setter function
export default function Tabs() {
  const [currentTab, setCurrentTab] = useState('My Account')

  return (
    <div className='flex justify-center my-8'>
      <div
        className='flex space-x-4'
        aria-label='Tabs'>
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => {
              setCurrentTab(tab)
            }}
            className={`${
              tab === currentTab
                ? 'bg-indigo-100 text-indigo-700'
                : 'text-gray-500 hover:text-gray-700'
            } rounded-md px-3 py-2 text-sm font-medium`}>
            {tab}
          </button>
        ))}
      </div>
    </div>
  )
}
```

### **=>** 2 - Multiple State Variables

>

#### PROBLEM

Create separate pieces of state to store and manage the first name, last name and timezone.

Make sure to display each of these state values above the form instead of their default values.

As a bonus, disable the save button if any value missing. To do this, use the disabled prop on the save button.

```js
import React, { useState } from 'react'

// Display the first name, last name and timezone next to the form
// Bonus: Disable the save button if any value missing
export default function PersonalInfo() {
  return (
    <div className='bg-gray-800 h-screen divide-y divide-white/5'>
      <div className='grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8'>
        <div>
          <h2 className='text-base font-semibold leading-7 text-white'>FirstName LastName</h2>
          <p className='mt-1 text-sm leading-6 text-gray-400'>Timezone</p>
        </div>

        <form className='md:col-span-2'>
          <div className='grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6'>
            <div className='sm:col-span-3'>
              <label
                htmlFor='first-name'
                className='block text-sm font-medium leading-6 text-white'>
                First name
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  name='first-name'
                  id='first-name'
                  autoComplete='given-name'
                  onChange={event => {
                    console.log(event.target.value)
                  }}
                  className='block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='sm:col-span-3'>
              <label
                htmlFor='last-name'
                className='block text-sm font-medium leading-6 text-white'>
                Last name
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  name='last-name'
                  id='last-name'
                  autoComplete='family-name'
                  className='block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='col-span-full'>
              <label
                htmlFor='timezone'
                className='block text-sm font-medium leading-6 text-white'>
                Timezone
              </label>
              <div className='mt-2'>
                <select
                  id='timezone'
                  name='timezone'
                  className='block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 [&_*]:text-black'>
                  <option>Pacific Standard Time</option>
                  <option>Eastern Standard Time</option>
                  <option>Greenwich Mean Time</option>
                </select>
              </div>
            </div>
          </div>

          <div className='mt-8 flex'>
            <button
              type='submit'
              className='rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500'>
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
```

#### SOLUTION

First, create three state variables for firstName, lastName and timezone

```jsx
const [firstName, setFirstName] = useState('')
const [lastName, setLastName] = useState('')
const [timezone, setTimezone] = useState('Eastern Standard Time')
```

Next, add an onChange to each of the inputs with the appropriate set state function:

```jsx
onChange={(event) => {
	setFirstName(event.target.value);
}}
```

Finally, display the updated state in the component:

```jsx
<div>
  <h2 className='text-base font-semibold leading-7 text-white'>
    {firstName} {lastName}
  </h2>
  <p className='mt-1 text-sm leading-6 text-gray-400'>{timezone}</p>
</div>
```

---

```jsx
import React, { useState } from 'react'

// Display the first name, last name and timezone next to the form
// Bonus: Disable the save button if any value missing
export default function PersonalInfo() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [timezone, setTimezone] = useState('Eastern Standard Time')
  const isDisabled = !firstName || !lastName || !timezone

  return (
    <div className='bg-gray-800 h-screen divide-y divide-white/5'>
      <div className='grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8'>
        <div>
          <h2 className='text-base font-semibold leading-7 text-white'>
            {firstName} {lastName}
          </h2>
          <p className='mt-1 text-sm leading-6 text-gray-400'>{timezone}</p>
        </div>

        <form className='md:col-span-2'>
          <div className='grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6'>
            <div className='sm:col-span-3'>
              <label
                htmlFor='first-name'
                className='block text-sm font-medium leading-6 text-white'>
                First name
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  name='first-name'
                  id='first-name'
                  autoComplete='given-name'
                  onChange={event => {
                    setFirstName(event.target.value)
                  }}
                  className='block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='sm:col-span-3'>
              <label
                htmlFor='last-name'
                className='block text-sm font-medium leading-6 text-white'>
                Last name
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  name='last-name'
                  id='last-name'
                  autoComplete='family-name'
                  onChange={event => {
                    setLastName(event.target.value)
                  }}
                  className='block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='col-span-full'>
              <label
                htmlFor='timezone'
                className='block text-sm font-medium leading-6 text-white'>
                Timezone
              </label>
              <div className='mt-2'>
                <select
                  id='timezone'
                  name='timezone'
                  defaultValue={timezone}
                  onChange={event => {
                    setTimezone(event.target.value)
                  }}
                  className='block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 [&_*]:text-black'>
                  <option>Pacific Standard Time</option>
                  <option>Eastern Standard Time</option>
                  <option>Greenwich Mean Time</option>
                </select>
              </div>
            </div>
          </div>

          <div className='mt-8 flex'>
            <button
              type='submit'
              disabled={isDisabled}
              className='rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500'>
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
```

### **=>** 3 - Arrays in State

>

#### PROBLEM

Make it possible to delete products from order summary using the trash button.

As a bonus, display the correct subtotal and total, based off of the products array.

```js
import { TrashIcon } from '@heroicons/react/20/solid'
import React from 'react'

const cartProducts = [
  {
    id: 1,
    title: 'Basic Tee',
    href: '#',
    price: '$32.00',
    color: 'Black',
    size: 'Large',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/checkout-page-02-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
  },
  {
    id: 2,
    title: 'Basic Tee',
    href: '#',
    price: '$32.00',
    color: 'Sienna',
    size: 'Large',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/checkout-page-02-product-02.jpg',
    imageAlt: "Front of men's Basic Tee in sienna.",
  },
]

// Make it possible to delete products from order summary using the trash button
// Bonus: Display the correct subtotal and total
export default function OrderSummary() {
  return (
    <div className='max-w-sm py-8 mx-auto'>
      <h2 className='text-lg font-medium text-gray-900'>Order summary</h2>

      <div className='mt-4 rounded-lg border border-gray-200 bg-white shadow-sm'>
        <h3 className='sr-only'>Items in your cart</h3>
        <ul
          role='list'
          className='divide-y divide-gray-200'>
          {cartProducts.map(product => (
            <li
              key={product.id}
              className='flex px-4 py-6 sm:px-6'>
              <div className='flex-shrink-0'>
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className='w-20 rounded-md'
                />
              </div>

              <div className='ml-6 flex flex-1 flex-col'>
                <div className='flex'>
                  <div className='min-w-0 flex-1'>
                    <h4 className='text-sm'>
                      <a
                        href={product.href}
                        className='font-medium text-gray-700 hover:text-gray-800'>
                        {product.title}
                      </a>
                    </h4>
                    <p className='mt-1 text-sm text-gray-500'>{product.color}</p>
                    <p className='mt-1 text-sm text-gray-500'>{product.size}</p>
                  </div>

                  <div className='ml-4 flow-root flex-shrink-0'>
                    <button
                      type='button'
                      className='-m-2.5 flex items-center justify-center bg-white p-2.5 text-gray-400 hover:text-gray-500'>
                      <span className='sr-only'>Remove</span>
                      <TrashIcon
                        className='h-5 w-5'
                        aria-hidden='true'
                      />
                    </button>
                  </div>
                </div>

                <div className='flex flex-1 items-end justify-between pt-2'>
                  <p className='mt-1 text-sm font-medium text-gray-900'>{product.price}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <dl className='space-y-6 border-t border-gray-200 px-4 py-6 sm:px-6'>
          <div className='flex items-center justify-between'>
            <dt className='text-sm'>Subtotal</dt>
            <dd className='text-sm font-medium text-gray-900'>$64.00</dd>
          </div>
          <div className='flex items-center justify-between'>
            <dt className='text-sm'>Shipping</dt>
            <dd className='text-sm font-medium text-gray-900'>$5.00</dd>
          </div>
          <div className='flex items-center justify-between border-t border-gray-200 pt-6'>
            <dt className='text-base font-medium'>Total</dt>
            <dd className='text-base font-medium text-gray-900'>$69.00</dd>
          </div>
        </dl>

        <div className='border-t border-gray-200 px-4 py-6 sm:px-6'>
          <button
            type='submit'
            className='w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50'>
            Confirm order
          </button>
        </div>
      </div>
    </div>
  )
}
```

#### SOLUTION

Place the cartProducts array in state as the default value:

```jsx
const [products, setProducts] = useState(cartProducts)
```

After that, map over the products array and when the trash button is clicked, filter the products, removing the product whose trash button was clicked according to its id:

```jsx
onClick={() => {
	const filteredProducts = products.filter(
		(p) => p.id !== product.id
	);
	setProducts(filteredProducts);
}}
```

---

```jsx
import { TrashIcon } from '@heroicons/react/20/solid'
import React, { useState } from 'react'

const cartProducts = [
  {
    id: 1,
    title: 'Basic Tee',
    href: '#',
    price: '$32.00',
    color: 'Black',
    size: 'Large',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/checkout-page-02-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
  },
  {
    id: 2,
    title: 'Basic Tee',
    href: '#',
    price: '$32.00',
    color: 'Sienna',
    size: 'Large',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/checkout-page-02-product-02.jpg',
    imageAlt: "Front of men's Basic Tee in sienna.",
  },
]

// Make it possible to delete products from order summary using the trash button
// Bonus: Display the correct subtotal and total
export default function OrderSummary() {
  const [products, setProducts] = useState(cartProducts)

  const subtotal = products.reduce((acc, product) => (acc += Number(product.price.slice(1))), 0)
  const total = subtotal + 5

  return (
    <div className='max-w-sm py-8 mx-auto'>
      <h2 className='text-lg font-medium text-gray-900'>Order summary</h2>

      <div className='mt-4 rounded-lg border border-gray-200 bg-white shadow-sm'>
        <h3 className='sr-only'>Items in your cart</h3>
        <ul
          role='list'
          className='divide-y divide-gray-200'>
          {products.map(product => (
            <li
              key={product.id}
              className='flex px-4 py-6 sm:px-6'>
              <div className='flex-shrink-0'>
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className='w-20 rounded-md'
                />
              </div>

              <div className='ml-6 flex flex-1 flex-col'>
                <div className='flex'>
                  <div className='min-w-0 flex-1'>
                    <h4 className='text-sm'>
                      <a
                        href={product.href}
                        className='font-medium text-gray-700 hover:text-gray-800'>
                        {product.title}
                      </a>
                    </h4>
                    <p className='mt-1 text-sm text-gray-500'>{product.color}</p>
                    <p className='mt-1 text-sm text-gray-500'>{product.size}</p>
                  </div>

                  <div className='ml-4 flow-root flex-shrink-0'>
                    <button
                      type='button'
                      onClick={() => {
                        const filteredProducts = products.filter(p => p.id !== product.id)
                        setProducts(filteredProducts)
                      }}
                      className='-m-2.5 flex items-center justify-center bg-white p-2.5 text-gray-400 hover:text-gray-500'>
                      <span className='sr-only'>Remove</span>
                      <TrashIcon
                        className='h-5 w-5'
                        aria-hidden='true'
                      />
                    </button>
                  </div>
                </div>

                <div className='flex flex-1 items-end justify-between pt-2'>
                  <p className='mt-1 text-sm font-medium text-gray-900'>{product.price}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <dl className='space-y-6 border-t border-gray-200 px-4 py-6 sm:px-6'>
          <div className='flex items-center justify-between'>
            <dt className='text-sm'>Subtotal</dt>
            <dd className='text-sm font-medium text-gray-900'>${subtotal.toFixed(2)}</dd>
          </div>
          <div className='flex items-center justify-between'>
            <dt className='text-sm'>Shipping</dt>
            <dd className='text-sm font-medium text-gray-900'>$5.00</dd>
          </div>
          <div className='flex items-center justify-between border-t border-gray-200 pt-6'>
            <dt className='text-base font-medium'>Total</dt>
            <dd className='text-base font-medium text-gray-900'>${total.toFixed(2)}</dd>
          </div>
        </dl>

        <div className='border-t border-gray-200 px-4 py-6 sm:px-6'>
          <button
            type='submit'
            className='w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50'>
            Confirm order
          </button>
        </div>
      </div>
    </div>
  )
}
```

### **=>** 4 - Objects in State

>

#### PROBLEM

Make it possible to update the billing address, namely the country and postalCode properties without deleting the other properties.

Remember that the set state function entirely replaces the previous state with the new state that is passed to it as an argument.

```js
import { useState } from 'react'

// Make it possible to update the billing address (without deleting the other properties)
export default function CardDetails() {
  const [card, setCard] = useState({
    number: '4242424242424242',
    expiration: '04/26',
    cvc: '424',
    country: 'Canada',
    postalCode: '42424',
  })

  return (
    <div className='py-4 max-w-sm mx-auto'>
      <fieldset>
        <legend className='block text-sm font-medium leading-6 text-gray-900'>Card Details</legend>
        <div className='mt-2 -space-y-px rounded-md bg-white shadow-sm'>
          <div
            type='text'
            className='px-2 relative block w-full rounded-none rounded-t-md border-0 bg-transparent py-1.5 text-gray-400 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6'>
            {card.number}
          </div>
          <div className='flex -space-x-px'>
            <div className='w-1/2 min-w-0 flex-1'>
              <div
                type='text'
                className='px-2 relative block w-full rounded-none border-0 bg-transparent py-1.5 text-gray-400 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6'>
                {card.expiration}
              </div>
            </div>
            <div className='min-w-0 flex-1'>
              <div
                type='text'
                className='px-2 relative block w-full rounded-none border-0 bg-transparent py-1.5 text-gray-400 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6'>
                {card.cvc}
              </div>
            </div>
          </div>
        </div>
      </fieldset>
      <fieldset className='mt-6 bg-white'>
        <legend className='block text-sm font-medium leading-6 text-gray-900'>
          Billing address
        </legend>
        <div className='mt-2 -space-y-px rounded-md shadow-sm'>
          <div>
            <label
              htmlFor='country'
              className='sr-only'>
              Country
            </label>
            <select
              id='country'
              name='country'
              className='relative block w-full rounded-none rounded-t-md border-0 bg-transparent py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-1'
              defaultValue={card.country}>
              <option>United States</option>
              <option>Canada</option>
              <option>Mexico</option>
            </select>
          </div>
          <div>
            <label
              htmlFor='postal-code'
              className='sr-only'>
              ZIP / Postal code
            </label>
            <input
              type='text'
              name='postal-code'
              id='postal-code'
              className='px-2 relative block w-full rounded-none rounded-b-md border-0 bg-transparent py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              placeholder='ZIP / Postal code'
              defaultValue={card.postalCode}
            />
          </div>
        </div>
      </fieldset>
    </div>
  )
}
```

#### SOLUTION

On the select and input elements, add the onChange prop and connect it to a function, onUpdateBilling.

```jsx
onChange = { onUpdateBilling }
```

Make sure that the name prop of the both the select and input match the property of the object that we want to update.

Then, in the onUpdateBilling function, spread in all of the previous card values and update the appropriate property according to the name prop:

```jsx
function onUpdateBilling(event) {
  setCard({ ...card, [event.target.name]: event.target.value })
}
```

---

```jsx
import { useState } from 'react'

// Make it possible to update the billing address (without deleting the other properties)
export default function CardDetails() {
  const [card, setCard] = useState({
    number: '4242424242424242',
    expiration: '04/26',
    cvc: '424',
    country: 'Canada',
    postalCode: '42424',
  })

  function onUpdateBilling(event) {
    setCard({ ...card, [event.target.name]: event.target.value })
  }

  return (
    <div className='py-4 max-w-sm mx-auto'>
      <fieldset>
        <legend className='block text-sm font-medium leading-6 text-gray-900'>
          Card Details ({card.country}) ({card.postalCode})
        </legend>
        <div className='mt-2 -space-y-px rounded-md bg-white shadow-sm'>
          <div
            type='text'
            className='px-2 relative block w-full rounded-none rounded-t-md border-0 bg-transparent py-1.5 text-gray-400 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6'>
            {card.number}
          </div>
          <div className='flex -space-x-px'>
            <div className='w-1/2 min-w-0 flex-1'>
              <div
                type='text'
                className='px-2 relative block w-full rounded-none border-0 bg-transparent py-1.5 text-gray-400 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6'>
                {card.expiration}
              </div>
            </div>
            <div className='min-w-0 flex-1'>
              <div
                type='text'
                className='px-2 relative block w-full rounded-none border-0 bg-transparent py-1.5 text-gray-400 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6'>
                {card.cvc}
              </div>
            </div>
          </div>
        </div>
      </fieldset>
      <fieldset className='mt-6 bg-white'>
        <legend className='block text-sm font-medium leading-6 text-gray-900'>
          Billing address
        </legend>
        <div className='mt-2 -space-y-px rounded-md shadow-sm'>
          <div>
            <label
              htmlFor='country'
              className='sr-only'>
              Country
            </label>
            <select
              id='country'
              name='country'
              className='relative block w-full rounded-none rounded-t-md border-0 bg-transparent py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-1'
              onChange={onUpdateBilling}
              defaultValue={card.country}>
              <option>United States</option>
              <option>Canada</option>
              <option>Mexico</option>
            </select>
          </div>
          <div>
            <label
              htmlFor='postalCode'
              className='sr-only'>
              ZIP / Postal code
            </label>
            <input
              type='text'
              name='postalCode'
              id='postalCode'
              className='px-2 relative block w-full rounded-none rounded-b-md border-0 bg-transparent py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              placeholder='ZIP / Postal code'
              onChange={onUpdateBilling}
              defaultValue={card.postalCode}
            />
          </div>
        </div>
      </fieldset>
    </div>
  )
}
```

### **=>** 5 - Sharing State

>

#### PROBLEM

Share state by lifting the isOpen state variable to the parent component FAQ and passing data down via props.

```js
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

const faqs = [
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: 'What do you call someone with no body and no nose?',
    answer:
      'Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptas ipsa quia excepturi, quibusdam natus exercitationem sapiente tempore labore voluptatem.',
  },
]

// Share state by lifting the `isOpen` state variable to the parent component (FAQ) and passing data down via props
export default function FAQ() {
  const [isOpen, setOpen] = useState(false)

  return (
    <div className='bg-white'>
      <div className='mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40'>
        <div className='mx-auto max-w-4xl divide-y divide-gray-900/10'>
          <h2 className='text-2xl font-bold leading-10 tracking-tight text-gray-900'>
            Frequently asked questions
          </h2>
          <dl className='mt-10 space-y-6 divide-y divide-gray-900/10'>
            {faqs.map((faq, index) => (
              <Accordion
                key={index}
                faq={faq}
              />
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

function Accordion({ faq }) {
  return (
    <div className='pt-6'>
      <dt>
        <button
          onClick={() => setOpen(!isOpen)}
          className='flex w-full items-start justify-between text-left text-gray-900'>
          <span className='text-base font-semibold leading-7'>{faq.question}</span>
          <span className='ml-6 flex h-7 items-center'>
            {isOpen ? (
              <MinusSmallIcon
                className='h-6 w-6'
                aria-hidden='true'
              />
            ) : (
              <PlusSmallIcon
                className='h-6 w-6'
                aria-hidden='true'
              />
            )}
          </span>
        </button>
      </dt>
      {isOpen && (
        <dd className='mt-2 pr-12'>
          <p className='text-base leading-7 text-gray-600'>{faq.answer}</p>
        </dd>
      )}
    </div>
  )
}
```

#### SOLUTION

To lift state up, move it up from the child Accordion to the parent component FAQ:

```jsx
export default function FAQ() {
  const [isOpen, setOpen] = useState(false);

  return (
	// ...

```

In this case, however, we want to display a particular Accordion. We can do so based off of its index. We'll rename the isOpen state to selectedIndex to keep track of that:

```jsx
const [selectedIndex, setSelectedIndex] = useState()
```

Then, to the Accordion component, pass down isOpen, which should compare the current index with the selected index. The onSelect function will update the index value:

```jsx
<dl className='mt-10 space-y-6 divide-y divide-gray-900/10'>
  {faqs.map((faq, index) => (
    <Accordion
      key={index}
      faq={faq}
      isOpen={index === selectedIndex}
      onSelect={() => setSelectedIndex(index)}
    />
  ))}
</dl>
```

Finally, to read and update from our parent component's state, we need to destructure isOpen and onSelect and use both:

```jsx
function Accordion({ faq, isOpen, onSelect }) {
  return (
    <div className="pt-6">
      <dt>
        <button
          onClick={onSelect}
					// ...
```

---

```jsx
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

const faqs = [
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: 'What do you call someone with no body and no nose?',
    answer:
      'Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptas ipsa quia excepturi, quibusdam natus exercitationem sapiente tempore labore voluptatem.',
  },
]

// Share state by lifting the `isOpen` state variable to the parent component (FAQ) and passing data down via props
export default function FAQ() {
  const [selectedIndex, setSelectedIndex] = useState()

  return (
    <div className='bg-white'>
      <div className='mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40'>
        <div className='mx-auto max-w-4xl divide-y divide-gray-900/10'>
          <h2 className='text-2xl font-bold leading-10 tracking-tight text-gray-900'>
            Frequently asked questions
          </h2>
          <dl className='mt-10 space-y-6 divide-y divide-gray-900/10'>
            {faqs.map((faq, index) => (
              <Accordion
                key={index}
                faq={faq}
                isOpen={index === selectedIndex}
                onSelect={() => setSelectedIndex(index)}
              />
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

function Accordion({ faq, isOpen, onSelect }) {
  return (
    <div className='pt-6'>
      <dt>
        <button
          onClick={onSelect}
          className='flex w-full items-start justify-between text-left text-gray-900'>
          <span className='text-base font-semibold leading-7'>{faq.question}</span>
          <span className='ml-6 flex h-7 items-center'>
            {isOpen ? (
              <MinusSmallIcon
                className='h-6 w-6'
                aria-hidden='true'
              />
            ) : (
              <PlusSmallIcon
                className='h-6 w-6'
                aria-hidden='true'
              />
            )}
          </span>
        </button>
      </dt>
      {isOpen && (
        <dd className='mt-2 pr-12'>
          <p className='text-base leading-7 text-gray-600'>{faq.answer}</p>
        </dd>
      )}
    </div>
  )
}
```

## **MODULE** 3 - Advanced React

## REFS

### **=>** 1 - Media Playback

>

#### PROBLEM

Implement the VideoPlayer component. Make the play and pause button works using a ref using the .play() and .pause() methods.

Also display the current state of the video (whether it is playing or not), using the onPlay and onPause props.

```js
import React, { useRef } from 'react'

export default function VideoPlayer() {
  const ref = useRef()

  console.log(ref.current)

  return (
    <div className='max-w-[500px] space-y-4 p-8 mx-auto'>
      <h1
        ref={ref}
        className='text-center font-bold text-3xl'>
        Video Player
      </h1>
      <video
        src='https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4'
        poster='https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217'
      />
      <div className='flex justify-between'>
        <button className='text-orange-500 font-semibold'>Pause</button>
        <div>Paused</div>
        <button className='text-indigo-500 font-semibold'>Play</button>
      </div>
    </div>
  )
}
```

#### SOLUTION

Create a dedicated ref using the useRef hook.

```jsx
const ref = useRef()
```

After that, connect it to the video element:

```jsx
<video ref={ref} />
```

After adding onClick to both of the buttons, you can play and pause the video by connecting them to the following functions, using the ref.

```jsx
function playVideo() {
  ref.current.play()
}

function pauseVideo() {
  ref.current.pause()
}
```

---

```jsx
import React, { useRef, useState } from 'react'

export default function VideoPlayer() {
  const ref = useRef()
  const [isPlaying, setPlaying] = useState(false)

  function playVideo() {
    ref.current.play()
  }

  function pauseVideo() {
    ref.current.pause()
  }

  return (
    <div className='max-w-[500px] space-y-4 p-8 mx-auto'>
      <h1 className='text-center font-bold text-3xl'>Video Player</h1>
      <video
        ref={ref}
        src='https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4'
        poster='https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217'
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
      <div className='flex justify-between'>
        <button
          onClick={pauseVideo}
          className='text-orange-500 font-semibold'>
          Pause
        </button>
        <div>{isPlaying ? 'Playing...' : 'Paused'}</div>
        <button
          onClick={playVideo}
          className='text-indigo-500 font-semibold'>
          Play
        </button>
      </div>
    </div>
  )
}
```

### **=>** 2 - Input Focus

>

#### PROBLEM

Use the "Focus" button focus the input with the help of a ref that you connect with the underlying input element.

Note that you can focus any input using the focus method.

```js
import React from 'react'

export default function Form() {
  return (
    <div className='p-8 mx-auto'>
      <div className='px-4 max-w-sm py-5 shadow sm:rounded-lg sm:p-6'>
        <h3 className='text-base font-semibold leading-6 text-gray-900'>Focus the input</h3>
        <form className='mt-5 sm:flex sm:items-center'>
          <div className='w-full sm:max-w-xs'>
            <label
              htmlFor='email'
              className='sr-only'>
              Email
            </label>
            <input
              type='email'
              name='email'
              id='email'
              className='px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              placeholder='you@example.com'
            />
          </div>
          <button
            type='button'
            className='mt-3 inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:ml-3 sm:mt-0 sm:w-auto'>
            Focus
          </button>
        </form>
      </div>
    </div>
  )
}
```

#### SOLUTION

Create a ref using the useRef hook. After doing so, connect to the ref to the input element using the ref prop.

After that, you can connect an event handler function to the button via onClick. Using this function, focus the input element (on inputRef.current) using the .focus() method.

```jsx
const inputRef = useRef()

function handleFocusInput() {
  inputRef.current.focus()
}
```

---

```jsx
import React, { useRef } from 'react'

export default function Form() {
  const inputRef = useRef()

  function handleFocusInput() {
    inputRef.current.focus()
  }

  return (
    <div className='p-8 mx-auto'>
      <div className='px-4 max-w-sm py-5 shadow sm:rounded-lg sm:p-6'>
        <h3 className='text-base font-semibold leading-6 text-gray-900'>Focus the input</h3>
        <form className='mt-5 sm:flex sm:items-center'>
          <div className='w-full sm:max-w-xs'>
            <label
              htmlFor='email'
              className='sr-only'>
              Email
            </label>
            <input
              ref={inputRef}
              type='email'
              name='email'
              id='email'
              className='px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              placeholder='you@example.com'
            />
          </div>
          <button
            type='button'
            onClick={handleFocusInput}
            className='mt-3 inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:ml-3 sm:mt-0 sm:w-auto'>
            Focus
          </button>
        </form>
      </div>
    </div>
  )
}
```

### **=>** 3 - Scroll To Element

>

#### PROBLEM

When the user clicks on the "Go to Pricing" button, make the page scroll down to the pricing section at the very bottom to make it easier for them to checkout.

Be sure to use a ref and use it to scroll to the bottom of the page, namely the pricing card.

```js
import { CheckIcon } from '@heroicons/react/20/solid'

export default function LandingPage() {
  return (
    <>
      <div className='relative pt-14'>
        <div
          className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
          aria-hidden='true'>
          <div
            className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className='py-24 sm:py-32'>
          <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl text-center'>
              <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
                Welcome!
              </h1>
              <p className='mt-6 text-lg leading-8 text-gray-600'>
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat
                commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
              </p>
              <div className='mt-10 flex items-center justify-center'>
                <button className='rounded-md bg-indigo-600 px-4 py-3 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
                  Go to Pricing
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='py-24'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='mx-auto max-w-4xl text-center'>
            <h2 className='text-base font-semibold leading-7 text-indigo-600'>Pricing</h2>
            <p className='mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
              Pricing plans for teams of&nbsp;all&nbsp;sizes
            </p>
          </div>
          <p className='mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600'>
            Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi iusto modi
            velit ut non voluptas in. Explicabo id ut laborum.
          </p>
          <div className='isolate mx-auto mt-16 grid max-w-sm grid-cols-1 gap-y-8 sm:mt-20'>
            <div className='flex flex-col justify-center rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10 lg:z-10 lg:rounded-b-none'>
              <div>
                <div className='flex items-center justify-between gap-x-4'>
                  <h3 className='text-indigo-600 text-lg font-semibold leading-8'>Startup</h3>
                  <p className='rounded-full bg-indigo-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-indigo-600'>
                    Most popular
                  </p>
                </div>
                <p className='mt-4 text-sm leading-6 text-gray-600'>
                  A plan that scales with your rapidly growing business.
                </p>
                <p className='mt-6 flex items-baseline gap-x-1'>
                  <span className='text-4xl font-bold tracking-tight text-gray-900'>$32</span>
                  <span className='text-sm font-semibold leading-6 text-gray-600'>/month</span>
                </p>
                <ul
                  role='list'
                  className='mt-8 space-y-3 text-sm leading-6 text-gray-600'>
                  {[
                    '25 products',
                    'Up to 10,000 subscribers',
                    'Advanced analytics',
                    '24-hour support response time',
                    'Marketing automations',
                  ].map(feature => (
                    <li
                      key={feature}
                      className='flex gap-x-3'>
                      <CheckIcon
                        className='h-6 w-5 flex-none text-indigo-600'
                        aria-hidden='true'
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href='#'
                className='mt-8 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 bg-indigo-600 text-white shadow-sm hover:bg-indigo-500'>
                Buy plan
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
```

#### SOLUTION

Create a ref for the pricing area with useRef.

```jsx
const pricingRef = useRef()
```

Add the ref to the pricing card div (or to a nearby element). After that, add a function (i.e. goToPricing) on the "Go To Pricing" button via the onClick prop.

When the button is clicked, scroll to the pricing card using the the .current property of the ref and use the scrollIntoView method that is available on every element.

```jsx
function goToPricing() {
  pricingRef.current.scrollIntoView({ behavior: 'smooth' })
}
```

---

```jsx
import { CheckIcon } from '@heroicons/react/20/solid'
import { useRef } from 'react'

export default function LandingPage() {
  const pricingRef = useRef()

  function goToPricing() {
    pricingRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <div className='relative pt-14'>
        <div
          className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
          aria-hidden='true'>
          <div
            className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className='py-24 sm:py-32'>
          <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl text-center'>
              <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
                Welcome!
              </h1>
              <p className='mt-6 text-lg leading-8 text-gray-600'>
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat
                commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
              </p>
              <div className='mt-10 flex items-center justify-center'>
                <button
                  onClick={goToPricing}
                  className='rounded-md bg-indigo-600 px-4 py-3 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
                  Go to Pricing
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='py-24'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='mx-auto max-w-4xl text-center'>
            <h2 className='text-base font-semibold leading-7 text-indigo-600'>Pricing</h2>
            <p className='mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
              Pricing plans for teams of&nbsp;all&nbsp;sizes
            </p>
          </div>
          <p className='mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600'>
            Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi iusto modi
            velit ut non voluptas in. Explicabo id ut laborum.
          </p>
          <div
            ref={pricingRef}
            className='isolate mx-auto mt-16 grid max-w-sm grid-cols-1 gap-y-8 sm:mt-20'>
            <div className='flex flex-col justify-center rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10 lg:z-10 lg:rounded-b-none'>
              <div>
                <div className='flex items-center justify-between gap-x-4'>
                  <h3 className='text-indigo-600 text-lg font-semibold leading-8'>Startup</h3>
                  <p className='rounded-full bg-indigo-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-indigo-600'>
                    Most popular
                  </p>
                </div>
                <p className='mt-4 text-sm leading-6 text-gray-600'>
                  A plan that scales with your rapidly growing business.
                </p>
                <p className='mt-6 flex items-baseline gap-x-1'>
                  <span className='text-4xl font-bold tracking-tight text-gray-900'>$32</span>
                  <span className='text-sm font-semibold leading-6 text-gray-600'>/month</span>
                </p>
                <ul
                  role='list'
                  className='mt-8 space-y-3 text-sm leading-6 text-gray-600'>
                  {[
                    '25 products',
                    'Up to 10,000 subscribers',
                    'Advanced analytics',
                    '24-hour support response time',
                    'Marketing automations',
                  ].map(feature => (
                    <li
                      key={feature}
                      className='flex gap-x-3'>
                      <CheckIcon
                        className='h-6 w-5 flex-none text-indigo-600'
                        aria-hidden='true'
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href='#'
                className='mt-8 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 bg-indigo-600 text-white shadow-sm hover:bg-indigo-500'>
                Buy plan
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
```

### **=>** 4 - Reference Values

>

#### PROBLEM

Use a ref to store a reference to a value, namely the setInterval id.

Using this ref, make it possible to start and stop the timer.

To start the timer, you want to count up in seconds (using state).

To stop the timer, you will need to clear the timer using clearInterval and the id stored in the ref.

```js
import React from 'react'

export default function Stopwatch() {
  const timerId = setInterval(() => console.log('count'), 1000)
  clearInterval(timerId)

  return (
    <div className='p-12 mx-auto space-y-4 max-w-[300px]'>
      <div className='font-bold text-center text-3xl'>Timer: 0s</div>
      <div className='flex justify-between'>
        <button className='text-amber-500 font-bold'>Stop</button>
        <button className='text-green-500 font-bold'>Start</button>
      </div>
    </div>
  )
}
```

#### SOLUTION

Add a piece of state (i.e. seconds) that can be incremented every second when the timer is started.

```jsx
const [seconds, setSeconds] = useState(0)

function startTime() {
  setInterval(() => {
    setSeconds(seconds => seconds + 1)
  }, 1000)
}
```

Here, we need to pass an inner function to properly update state using setSeconds. Just passing seconds + 1 to the function will not work.

To stop the timer, we need to create a ref to store the timer id, put the timer id in timerId.current and then pass that to clearInterval.

```jsx
const timerId = useRef()

function startTime() {
  timerId.current = setInterval(() => {
    setSeconds(seconds => seconds + 1)
  }, 1000)
}

function stopTime() {
  clearInterval(timerId.current)
}
```

---

```jsx
import React, { useRef, useState } from 'react'

export default function Stopwatch() {
  const [seconds, setSeconds] = useState(0)
  const timerId = useRef()

  function startTime() {
    timerId.current = setInterval(() => {
      setSeconds(seconds => seconds + 1)
    }, 1000)
  }

  function stopTime() {
    clearInterval(timerId.current)
  }

  return (
    <div className='p-12 mx-auto space-y-4 max-w-[300px]'>
      <div className='font-bold text-center text-3xl'>Timer: {seconds}s</div>
      <div className='flex justify-between'>
        <button
          onClick={stopTime}
          className='text-amber-500 font-bold'>
          Stop
        </button>
        <button
          onClick={startTime}
          className='text-green-500 font-bold'>
          Start
        </button>
      </div>
    </div>
  )
}
```

### **=>** 5 - Refs and Rendering

>

#### PROBLEM

Fix this code so that the toggle component works and successfully toggles the Switch when clicked.

Note that you need to implement a different way to use state in React.

```js
import { Switch } from '@headlessui/react'
import React, { useRef } from 'react'

export default function Toggle() {
  const toggleRef = useRef(true)
  const enabled = toggleRef.current

  return (
    <div className='p-8 flex justify-center'>
      <Switch.Group
        as='div'
        className='flex items-center'>
        <Switch
          checked={enabled}
          onChange={() => {
            toggleRef.current = !toggleRef.current
            console.log(!toggleRef.current)
          }}
          className={classNames(
            enabled ? 'bg-indigo-600' : 'bg-gray-200',
            'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2'
          )}>
          <span
            aria-hidden='true'
            className={classNames(
              enabled ? 'translate-x-5' : 'translate-x-0',
              'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
            )}
          />
        </Switch>
        <Switch.Label
          as='span'
          className='ml-3 text-sm'>
          <span className='font-medium text-gray-900'>Annual billing</span>{' '}
          <span className='text-gray-500'>(Save 10%)</span>
        </Switch.Label>
      </Switch.Group>
    </div>
  )
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
```

#### SOLUTION

The issue with this component is that while we are successfully mutating the ref and changing the value of ref.current, we need to trigger a re-render.

One way to do this is to use state and is an important reason of using the useState hook. When state is updated with useState, a re-render is triggered, which allow us to see the new state in the UI.

```jsx
import { Switch } from '@headlessui/react'
import React, { useState } from 'react'

export default function Toggle() {
  const [enabled, setEnabled] = useState(true)

  return (
    <div className='p-8 flex justify-center'>
      <Switch.Group
        as='div'
        className='flex items-center'>
        <Switch
          checked={enabled}
          onChange={() => {
            setEnabled(enabled => !enabled)
          }}
          className={classNames(
            enabled ? 'bg-indigo-600' : 'bg-gray-200',
            'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2'
          )}>
          <span
            aria-hidden='true'
            className={classNames(
              enabled ? 'translate-x-5' : 'translate-x-0',
              'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
            )}
          />
        </Switch>
        <Switch.Label
          as='span'
          className='ml-3 text-sm'>
          <span className='font-medium text-gray-900'>Annual billing</span>{' '}
          <span className='text-gray-500'>(Save 10%)</span>
        </Switch.Label>
      </Switch.Group>
    </div>
  )
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
```

## EFFECTS

### **=>** 1 - useEffect Hook

>

#### PROBLEM

Use document.title to perform a side effect.

Display the number of times the user has clicked the updateCount button in the tab of our page.

```js
import { useState, useEffect } from 'react'

// Display number of times the button is clicked in tab (with document.title = )
export default function Counter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('After Rendering')
  })

  function updateCount() {
    setCount(count + 1)
  }

  console.log('Rendering')

  return (
    <div className='bg-blue-500/50 h-screen grid place-items-center'>
      <div className='text-orange-500 mx-auto text-center'>
        <h1 className='text-4xl font-bold tracking-tight text-gray-900 pb-8'>
          You clicked {count} times
        </h1>
        <button
          className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
          onClick={updateCount}>
          +1
        </button>
      </div>
    </div>
  )
}
```

#### SOLUTION

In order to update the tab title after each state update, when the count state variable updates and causes the component to re-render, we can use the useEffect hook.

The useEffect hook runs after each render and after every render by default.

To solve the challenge, just set the document title directly with the effect function of useEffect to the current count:

```jsx
useEffect(() => {
  document.title = `You clicked ${count} times`
})
```

---

```jsx
import { useState, useEffect } from 'react'

// Display number of times the button is clicked in tab (with document.title = )
export default function Counter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('After Rendering')
    document.title = `You clicked ${count} times`
  })

  function updateCount() {
    setCount(count + 1)
  }

  console.log('Rendering')

  return (
    <div className='bg-blue-500/50 h-screen grid place-items-center'>
      <div className='text-orange-500 mx-auto text-center'>
        <h1 className='text-4xl font-bold tracking-tight text-gray-900 pb-8'>
          You clicked {count} times
        </h1>
        <button
          className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
          onClick={updateCount}>
          +1
        </button>
      </div>
    </div>
  )
}
```

### **=>** 2 - Dependencies Array

>

#### PROBLEM

Fix the infinite loop, particularly in the part of the component where we are using useEffect:

```jsx
useEffect(() => {
  setCount(count + 1)
})
```

Also try to think about why this bit of code is causing an infinite loop.

```js
import { useState, useEffect } from 'react'

// Fix the infinite loop
export default function InputChanges() {
  const [value, setValue] = useState('')
  const [count, setCount] = useState(-1)

  // useEffect(() => {
  //   setCount(count + 1);
  // });

  function onChange(event) {
    setValue(event.target.value)
  }

  return (
    <div className='mx-auto max-w-md p-8'>
      <label
        htmlFor='changes'
        className='block text-sm font-medium leading-6 text-gray-900'>
        Total changes ({count})
      </label>
      <div className='mt-2'>
        <input
          id='changes'
          className='px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
          onChange={onChange}
        />
      </div>
    </div>
  )
}
```

#### SOLUTION

Fix the infinite loop by using the dependencies array (the second argument) for useEffect.

The default behavior without this array is for the effect function to run on every render. Because setCount updates state and causes the component to re-render, this is what causes the infinite loop.

The dependent value (upon which our effect function is dependent) is value. Now, only whenever the value state variable changes, setCount will be called.

```jsx
useEffect(() => {
  setCount(count + 1)
}, [value])
```

---

```jsx
import { useState, useEffect } from 'react'

// Fix the infinite loop
export default function InputChanges() {
  const [value, setValue] = useState('')
  const [count, setCount] = useState(-1)

  useEffect(() => {
    setCount(count + 1)
  }, [value])

  function onChange(event) {
    setValue(event.target.value)
  }

  return (
    <div className='mx-auto max-w-md p-8'>
      <label
        htmlFor='changes'
        className='block text-sm font-medium leading-6 text-gray-900'>
        Total changes ({count})
      </label>
      <div className='mt-2'>
        <input
          id='changes'
          className='px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
          onChange={onChange}
        />
      </div>
    </div>
  )
}
```

### **=>** 3 - Syncing with State

>

#### PROBLEM

Show the dialog in the Modal component by synchronizing it with the isOpen state.

Give the Modal component access to isOpen, get a reference to the dialog (using the document API or a React ref).

With the ref, use the .showModal() method to open the modal and .close() to close it, according to the appropriate state.

Note that your solution should use the useEffect hook.

```js
import { useEffect, useState } from 'react'

// Open the Modal when isOpen is true
export default function App() {
  const [isOpen, setOpen] = useState(false)

  function openModal() {
    setOpen(true)
  }

  function closeModal() {
    setOpen(false)
  }

  return (
    <>
      <button onClick={openModal}>Open modal</button>
      <Modal>
        <h1 className='pb-2 text-lg font-bold'>Modal is open!</h1>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </>
  )
}

function Modal({ children }) {
  // ref.showModal()
  return <dialog className='border-2 border-black p-4'>{children}</dialog>
}
```

#### SOLUTION

To synchronize our React state with our Modal component, pass down the isOpen state as a prop to Modal:

```jsx
<Modal isOpen={isOpen}>
  <h1 className='pb-2 text-lg font-bold'>Modal is open!</h1>
  <button onClick={closeModal}>Close</button>
</Modal>
```

After that, we need to get a reference to the dialog element within useEffect, either through the document API or with a ref.

To do so with a ref, we need to add isOpen to the dependencies array to have it run only when isOpen changes.

Next, we need to add a conditional to display the modal when isOpen is true and hide the modal when it is false.

```jsx
const dialogRef = useRef()

useEffect(() => {
  if (isOpen) {
    dialogRef.current.showModal()
  } else {
    dialogRef.current.close()
  }
}, [isOpen])
```

---

```jsx
import { useEffect, useRef, useState } from 'react'

// Open the Modal when isOpen is true
export default function App() {
  const [isOpen, setOpen] = useState(false)

  function openModal() {
    setOpen(true)
  }

  function closeModal() {
    setOpen(false)
  }

  return (
    <>
      <button onClick={openModal}>Open modal</button>
      <Modal isOpen={isOpen}>
        <h1 className='pb-2 text-lg font-bold'>Modal is open!</h1>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </>
  )
}

function Modal({ isOpen, children }) {
  const dialogRef = useRef()

  useEffect(() => {
    if (isOpen) {
      dialogRef.current.showModal()
    } else {
      dialogRef.current.close()
    }
  }, [isOpen])

  // ref.showModal()
  return (
    <dialog
      ref={dialogRef}
      className='border-2 border-black p-4'>
      {children}
    </dialog>
  )
}
```

### **=>** 4 - Fetching Data with useEffect

>

#### PROBLEM

Using the fetch API and the jsonplaceholder endpoint, fetch all of the todos, put them in our Todos component.

Display each of them (including their title and completed state) within the Todo component.

```js
import React, { useEffect, useState } from 'react'

// Fetch all todos from the todos endpoint and display them in the todo component
// API endpoint: https://jsonplaceholder.typicode.com/users/1/todos
export default function Todos() {
  //   {
  //     "userId": 1,
  //     "id": 1,
  //     "title": "delectus aut autem",
  //     "completed": false
  // }[]

  return (
    <div className='flex justify-center flex-col items-center py-8'>
      <h1 className='text-2xl font-bold pb-4'>My Todo List</h1>
      <div className='space-y-5'>{/* todos here */}</div>
    </div>
  )
}

function Todo() {
  return (
    <div className='relative flex items-start'>
      <div className='flex h-6 items-center'>
        <input
          id='completed'
          name='completed'
          type='checkbox'
          defaultChecked={false}
          className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
        />
      </div>
      <div className='ml-3 text-sm leading-6'>
        <div className='font-medium text-gray-900'>Title</div>
      </div>
    </div>
  )
}
```

#### SOLUTION

First, fetch the todos from our API endpoint within useEffect:

```jsx
useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/users/1/todos')
    .then(response => response.json())
    .then(data => setTodos(data))
}, [])
```

Next, use setTodos to put the array of todos in state:

```jsx
const [todos, setTodos] = useState([])
```

In our markup, map over the todos array and pass each todo down as a prop of the same name to the Todo component:

```jsx
{
  todos.map(todo => (
    <Todo
      key={todo.id}
      todo={todo}
    />
  ))
}
```

Finally, use the completed and title properties within the Todo component:

```jsx
function Todo({ todo }) {
  return (
    <div className='relative flex items-start'>
      <div className='flex h-6 items-center'>
        <input
          id='completed'
          name='completed'
          type='checkbox'
          defaultChecked={todo.completed}
          className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
        />
      </div>
      <div className='ml-3 text-sm leading-6'>
        <div className='font-medium text-gray-900'>{todo.title}</div>
      </div>
    </div>
  )
}
```

---

```jsx
import React, { useEffect, useState } from 'react'

// Fetch all todos from the todos endpoint and display them in the todo component
// API endpoint: https://jsonplaceholder.typicode.com/users/1/todos
export default function Todos() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1/todos')
      .then(response => response.json())
      .then(data => setTodos(data))
  }, [])

  return (
    <div className='flex justify-center flex-col items-center py-8'>
      <h1 className='text-2xl font-bold pb-4'>My Todo List</h1>
      <div className='space-y-5'>
        {todos.map(todo => (
          <Todo
            key={todo.id}
            todo={todo}
          />
        ))}
      </div>
    </div>
  )
}

function Todo({ todo }) {
  return (
    <div className='relative flex items-start'>
      <div className='flex h-6 items-center'>
        <input
          id='completed'
          name='completed'
          type='checkbox'
          defaultChecked={todo.completed}
          className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
        />
      </div>
      <div className='ml-3 text-sm leading-6'>
        <div className='font-medium text-gray-900'>{todo.title}</div>
      </div>
    </div>
  )
}
```

### **=>** 5 - Cleanup Function

>

#### PROBLEM

Use the cleanup function within the useEffect hook by returning a function, where in the body, you "clean up" the event listener that is created with window.addEventListener.

Hint: use vanilla JavaScript to perform this cleanup step.

```js
import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

// Use the cleanup function in useEffect to stop our app from updating state when the component is unmounted
export default function App() {
  return (
    <div className='flex justify-center flex-col items-center py-8'>
      <h1 className='text-2xl font-bold pb-4'>🐭</h1>
      <BrowserRouter>
        <nav className='flex justify-center max-w-sm p-4 pb-8 space-x-4'>
          <Link
            className='underline'
            to='/'>
            Home
          </Link>
          <Link
            className='underline'
            to='/about'>
            About
          </Link>
        </nav>
        <Routes>
          <Route
            path='/'
            element={<MousePosition />}
          />
          <Route
            path='/about'
            element={<h1>Track your mouse!</h1>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function MousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    function handleMove(e) {
      setPosition({ x: e.clientX, y: e.clientY })
      console.log('Updating state')
    }
    window.addEventListener('pointermove', handleMove)

    return () => {
      console.log('Unmounted')
    }
  }, [])

  return (
    <div className='space-y-5'>
      <div>
        X position: <strong>{position.x.toFixed(2)}</strong>
      </div>
      <div>
        Y position: <strong>{position.y.toFixed(2)}</strong>
      </div>
    </div>
  )
}
```

#### SOLUTION

To remove the active event listener that is updating state in our unmounted component, we need to create a cleanup function for useEffect.

In the body of that function, remove the event listener with window.removeEventListener, making sure to reference the same event by name that was added, and reference the same callback as window.addEventListener:

```jsx
useEffect(() => {
  function handleMove(e) {
    setPosition({ x: e.clientX, y: e.clientY })
  }
  window.addEventListener('pointermove', handleMove)

  return () => {
    window.removeEventListener('pointermove', handleMove)
  }
}, [])
```

---

```jsx
import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

// Use the cleanup function in useEffect to stop our app from updating state when the component is unmounted
export default function App() {
  return (
    <div className='flex justify-center flex-col items-center py-8'>
      <h1 className='text-2xl font-bold pb-4'>🐭</h1>
      <BrowserRouter>
        <nav className='flex justify-center max-w-sm p-4 pb-8 space-x-4'>
          <Link
            className='underline'
            to='/'>
            Home
          </Link>
          <Link
            className='underline'
            to='/about'>
            About
          </Link>
        </nav>
        <Routes>
          <Route
            path='/'
            element={<MousePosition />}
          />
          <Route
            path='/about'
            element={<h1>Track your mouse!</h1>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function MousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    function handleMove(e) {
      setPosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('pointermove', handleMove)

    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [])

  return (
    <div className='space-y-5'>
      <div>
        X position: <strong>{position.x.toFixed(2)}</strong>
      </div>
      <div>
        Y position: <strong>{position.y.toFixed(2)}</strong>
      </div>
    </div>
  )
}
```

## CONTEXT

### **=>** 1 - Create Context

>

#### PROBLEM

Create context with the help of the createContext function. Give it a default value which will be either the sale percentage or the title to display in the header.

Consume the context within the Hero component and display the default value in the header.

```js
import React, { createContext, useContext } from 'react'

export default function App() {
  return <Hero />
}

function Hero() {
  const value = useContext(SaleContext)

  return (
    <div className='relative bg-gray-900'>
      <div
        aria-hidden='true'
        className='absolute inset-0 overflow-hidden'>
        <img
          src='https://tailwindui.com/img/ecommerce-images/home-page-01-hero-full-width.jpg'
          alt=''
          className='h-full w-full object-cover object-center'
        />
      </div>
      <div className='relative mx-auto flex max-w-3xl flex-col items-center px-6 py-32 text-center sm:py-64 lg:px-0'>
        <h1 className='text-5xl font-bold tracking-tight text-white'>Get everything X off</h1>
        <p className='mt-4 text-xl text-white'>
          The new arrivals have, well, newly arrived. Check out the latest options from our summer
          small-batch release while they're still in stock.
        </p>
        <a
          href='#'
          className='mt-8 inline-block rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100'>
          Shop New Arrivals
        </a>
      </div>
    </div>
  )
}
```

#### SOLUTION

To use context in React, you simply need to create context and then consume it.

First, create the sale context and give it a default value using createContext function.

const SaleContext = createContext("40%");
Next, consume that consume with the useContext hook, passing in the entire context object.

```jsx
const percentOff = useContext(SaleContext)
```

---

```jsx
import React, { createContext, useContext } from 'react'

const SaleContext = createContext('40%')

export default function App() {
  return <Hero />
}

function Hero() {
  const percentOff = useContext(SaleContext)

  return (
    <div className='relative bg-gray-900'>
      <div
        aria-hidden='true'
        className='absolute inset-0 overflow-hidden'>
        <img
          src='https://tailwindui.com/img/ecommerce-images/home-page-01-hero-full-width.jpg'
          alt=''
          className='h-full w-full object-cover object-center'
        />
      </div>
      <div className='relative mx-auto flex max-w-3xl flex-col items-center px-6 py-32 text-center sm:py-64 lg:px-0'>
        <h1 className='text-5xl font-bold tracking-tight text-white'>
          Get everything {percentOff} off
        </h1>
        <p className='mt-4 text-xl text-white'>
          The new arrivals have, well, newly arrived. Check out the latest options from our summer
          small-batch release while they're still in stock.
        </p>
        <a
          href='#'
          className='mt-8 inline-block rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100'>
          Shop New Arrivals
        </a>
      </div>
    </div>
  )
}
```

### **=>** 2 - Consume Context

>

#### PROBLEM

Consume the AuthContext within the Links and Avatar component to display the appropriate links and hide the Avatar component if false.

```js
import { FolderIcon, HomeIcon, KeyIcon, UsersIcon } from '@heroicons/react/24/outline'
import { createContext } from 'react'

const AuthContext = createContext(true)

export default function Header() {
  return (
    <div className='flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6 pt-6'>
      <nav className='flex flex-1 flex-col'>
        <ul
          role='list'
          className='flex flex-1 flex-col gap-y-7'>
          <Links />
          <Avatar />
        </ul>
      </nav>
    </div>
  )
}

function Links() {
  const authLinks = [
    { name: 'Dashboard', href: '#', icon: HomeIcon, count: '5', current: true },
    { name: 'Team', href: '#', icon: UsersIcon, current: false },
    {
      name: 'Projects',
      href: '#',
      icon: FolderIcon,
      count: '12',
      current: false,
    },
  ]
  const unAuthLinks = [
    {
      name: 'Log in',
      href: '#',
      icon: KeyIcon,
      current: false,
    },
  ]

  return (
    <li>
      <ul
        role='list'
        className='-mx-2 space-y-1'>
        {unAuthLinks.map(item => (
          <li key={item.name}>
            <a
              href={item.href}
              className='text-indigo-200 hover:text-white hover:bg-indigo-700 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'>
              <item.icon
                className='h-6 w-6 shrink-0 text-indigo-200 group-hover:text-white'
                aria-hidden='true'
              />
              {item.name}
              {item.count ? (
                <span
                  className='ml-auto w-9 min-w-max whitespace-nowrap rounded-full bg-indigo-600 px-2.5 py-0.5 text-center text-xs font-medium leading-5 text-white ring-1 ring-inset ring-indigo-500'
                  aria-hidden='true'>
                  {item.count}
                </span>
              ) : null}
            </a>
          </li>
        ))}
      </ul>
    </li>
  )
}

function Avatar() {
  // if (true) return null;

  return (
    <li className='-mx-6 mt-auto'>
      <a
        href='#'
        className='flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-indigo-700'>
        <img
          className='h-8 w-8 rounded-full bg-indigo-700'
          src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
          alt=''
        />
        <span className='sr-only'>Your profile</span>
        <span aria-hidden='true'>Tom Cook</span>
      </a>
    </li>
  )
}
```

#### SOLUTION

Since we are already creating AuthContext and giving it the appropriate value, we can consume it where we need.

For example, in the Links component and display the appropriate links to map over based on the isAuthenticated state.

```jsx
const isAuthenticated = useContext(AuthContext)

const links = isAuthenticated ? authLinks : unAuthLinks
```

And in the Avatar component, we can consume the same context and return null if isAuthenticated is false.

```jsx
function Avatar() {
  const isAuthenticated = useContext(AuthContext);

  if (!isAuthenticated) return null;
```

---

```jsx
import { FolderIcon, HomeIcon, KeyIcon, UsersIcon } from '@heroicons/react/24/outline'
import { createContext, useContext } from 'react'

const AuthContext = createContext(true)

export default function Header() {
  return (
    <div className='flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6 pt-6'>
      <nav className='flex flex-1 flex-col'>
        <ul
          role='list'
          className='flex flex-1 flex-col gap-y-7'>
          <Links />
          <Avatar />
        </ul>
      </nav>
    </div>
  )
}

function Links() {
  const isAuthenticated = useContext(AuthContext)
  const authLinks = [
    { name: 'Dashboard', href: '#', icon: HomeIcon, count: '5', current: true },
    { name: 'Team', href: '#', icon: UsersIcon, current: false },
    {
      name: 'Projects',
      href: '#',
      icon: FolderIcon,
      count: '12',
      current: false,
    },
  ]
  const unAuthLinks = [
    {
      name: 'Log in',
      href: '#',
      icon: KeyIcon,
      current: false,
    },
  ]

  const links = isAuthenticated ? authLinks : unAuthLinks

  return (
    <li>
      <ul
        role='list'
        className='-mx-2 space-y-1'>
        {links.map(item => (
          <li key={item.name}>
            <a
              href={item.href}
              className='text-indigo-200 hover:text-white hover:bg-indigo-700 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'>
              <item.icon
                className='h-6 w-6 shrink-0 text-indigo-200 group-hover:text-white'
                aria-hidden='true'
              />
              {item.name}
              {item.count ? (
                <span
                  className='ml-auto w-9 min-w-max whitespace-nowrap rounded-full bg-indigo-600 px-2.5 py-0.5 text-center text-xs font-medium leading-5 text-white ring-1 ring-inset ring-indigo-500'
                  aria-hidden='true'>
                  {item.count}
                </span>
              ) : null}
            </a>
          </li>
        ))}
      </ul>
    </li>
  )
}

function Avatar() {
  const isAuthenticated = useContext(AuthContext)

  if (!isAuthenticated) return null

  return (
    <li className='-mx-6 mt-auto'>
      <a
        href='#'
        className='flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-indigo-700'>
        <img
          className='h-8 w-8 rounded-full bg-indigo-700'
          src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
          alt=''
        />
        <span className='sr-only'>Your profile</span>
        <span aria-hidden='true'>Tom Cook</span>
      </a>
    </li>
  )
}
```

### **=>** 3 - Context Provider

>

#### PROBLEM

Use the UserContext.Provider component to pass down data on the value prop to consume in the appropriates components.

Namely, use the useUserData hook in App to get the user data and consume in the ProfilePage components.

```js
import { createContext, useContext } from 'react'

function useUserData() {
  return {
    username: 'janep86',
    firstName: 'Jane',
    lastName: 'Phillips',
    emailAddress: 'janep86@gmail.com',
  }
}

const UserContext = createContext(false)

export default function App() {
  return <ProfilePage />
}

function ProfilePage() {
  return (
    <form className='p-8'>
      <div className='space-y-12'>
        <ProfileInfo />
        <PersonalInfo />
      </div>
    </form>
  )
}

function ProfileInfo() {
  return (
    <div className='border-b border-gray-900/10 pb-12'>
      <h2 className='text-base font-semibold leading-7 text-gray-900'>Profile</h2>
      <p className='mt-1 text-sm leading-6 text-gray-600'>
        This information will be displayed publicly so be careful what you share.
      </p>

      <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
        <div className='sm:col-span-4'>
          <label
            htmlFor='username'
            className='block text-sm font-medium leading-6 text-gray-900'>
            Username
          </label>
          <div className='mt-2'>
            <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md'>
              <span className='flex select-none items-center pl-3 text-gray-500 sm:text-sm'>
                workcation.com/
              </span>
              <input
                type='text'
                name='username'
                id='username'
                autoComplete='username'
                className='block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                placeholder='janesmith'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function PersonalInfo() {
  return (
    <div className='border-b border-gray-900/10 pb-12'>
      <h2 className='text-base font-semibold leading-7 text-gray-900'>Personal Information</h2>
      <p className='mt-1 text-sm leading-6 text-gray-600'>
        Use a permanent address where you can receive mail.
      </p>

      <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
        <div className='sm:col-span-3'>
          <label
            htmlFor='first-name'
            className='block text-sm font-medium leading-6 text-gray-900'>
            First name
          </label>
          <div className='mt-2'>
            <input
              type='text'
              name='first-name'
              id='first-name'
              autoComplete='given-name'
              className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
            />
          </div>
        </div>

        <div className='sm:col-span-3'>
          <label
            htmlFor='last-name'
            className='block text-sm font-medium leading-6 text-gray-900'>
            Last name
          </label>
          <div className='mt-2'>
            <input
              type='text'
              name='last-name'
              id='last-name'
              autoComplete='family-name'
              className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
            />
          </div>
        </div>

        <div className='sm:col-span-4'>
          <label
            htmlFor='email'
            className='block text-sm font-medium leading-6 text-gray-900'>
            Email address
          </label>
          <div className='mt-2'>
            <input
              id='email'
              name='email'
              type='email'
              autoComplete='email'
              className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
```

#### SOLUTION

Create a provider component within App. Get the user data and pass it down on the value prop.

```jsx
export default function App() {
  const user = useUserData()

  return (
    <UserContext.Provider value={user}>
      <ProfilePage />
    </UserContext.Provider>
  )
}
```

---

```jsx
import { createContext, useContext } from 'react'

function useUserData() {
  return {
    username: 'janep86',
    firstName: 'Jane',
    lastName: 'Phillips',
    emailAddress: 'janep86@gmail.com',
  }
}

const UserContext = createContext()

export default function App() {
  const user = useUserData()

  return (
    <UserContext.Provider value={user}>
      <ProfilePage />
    </UserContext.Provider>
  )
}

function ProfilePage() {
  return (
    <form className='p-8'>
      <div className='space-y-12'>
        <ProfileInfo />
        <PersonalInfo />
      </div>
    </form>
  )
}

function ProfileInfo() {
  const user = useContext(UserContext)

  return (
    <div className='border-b border-gray-900/10 pb-12'>
      <h2 className='text-base font-semibold leading-7 text-gray-900'>Profile</h2>
      <p className='mt-1 text-sm leading-6 text-gray-600'>
        This information will be displayed publicly so be careful what you share.
      </p>

      <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
        <div className='sm:col-span-4'>
          <label
            htmlFor='username'
            className='block text-sm font-medium leading-6 text-gray-900'>
            Username
          </label>
          <div className='mt-2'>
            <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md'>
              <span className='flex select-none items-center pl-3 text-gray-500 sm:text-sm'>
                workcation.com/
              </span>
              <input
                type='text'
                name='username'
                id='username'
                autoComplete='username'
                className='block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                placeholder='janesmith'
                defaultValue={user.username}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function PersonalInfo() {
  const user = useContext(UserContext)

  return (
    <div className='border-b border-gray-900/10 pb-12'>
      <h2 className='text-base font-semibold leading-7 text-gray-900'>Personal Information</h2>
      <p className='mt-1 text-sm leading-6 text-gray-600'>
        Use a permanent address where you can receive mail.
      </p>

      <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
        <div className='sm:col-span-3'>
          <label
            htmlFor='first-name'
            className='block text-sm font-medium leading-6 text-gray-900'>
            First name
          </label>
          <div className='mt-2'>
            <input
              type='text'
              name='first-name'
              id='first-name'
              autoComplete='given-name'
              className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              defaultValue={user.firstName}
            />
          </div>
        </div>

        <div className='sm:col-span-3'>
          <label
            htmlFor='last-name'
            className='block text-sm font-medium leading-6 text-gray-900'>
            Last name
          </label>
          <div className='mt-2'>
            <input
              type='text'
              name='last-name'
              id='last-name'
              autoComplete='family-name'
              className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              defaultValue={user.lastName}
            />
          </div>
        </div>

        <div className='sm:col-span-4'>
          <label
            htmlFor='email'
            className='block text-sm font-medium leading-6 text-gray-900'>
            Email address
          </label>
          <div className='mt-2'>
            <input
              id='email'
              name='email'
              type='email'
              autoComplete='email'
              className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              defaultValue={user.emailAddress}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
```

### **=>** 4 - Props Drilling

>

#### PROBLEM

Fix the props drilling by replacing all of the props that are being unnecessarily passed through the component tree by using context instead.

```js
export default function App() {
  const session = { name: 'Alex Brown', initials: 'AB' }

  return (
    <div className='bg-white'>
      <Header session={session} />
      <Hero />
    </div>
  )
}

function Header({ session }) {
  return (
    <header className='absolute inset-x-0 top-0 z-50'>
      <nav
        className='flex items-center justify-between p-6 lg:px-8'
        aria-label='Global'>
        <Logo />
        <Avatar session={session} />
      </nav>
    </header>
  )
}

function Avatar({ session }) {
  return (
    <div className='items-center space-x-2 flex lg:flex-1 lg:justify-end'>
      <span className='inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-500'>
        <span className='text-lg font-medium leading-none text-white'>{session.initials}</span>
      </span>
      <span>{session.name}</span>
    </div>
  )
}

function Logo() {
  return (
    <div className='flex lg:flex-1'>
      <a
        href='#'
        className='-m-1.5 p-1.5'>
        <span className='sr-only'>Your Company</span>
        <img
          className='h-8 w-auto'
          src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
          alt=''
        />
      </a>
    </div>
  )
}

function Hero() {
  return (
    <div className='relative isolate px-6 pt-14 lg:px-8'>
      <div
        className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
        aria-hidden='true'>
        <div
          className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className='mx-auto max-w-2xl py-32 sm:py-48 lg:py-56'>
        <div className='hidden sm:mb-8 sm:flex sm:justify-center'>
          <div className='relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20'>
            Announcing our next round of funding.{' '}
            <a
              href='#'
              className='font-semibold text-indigo-600'>
              <span
                className='absolute inset-0'
                aria-hidden='true'
              />
              Read more <span aria-hidden='true'>&rarr;</span>
            </a>
          </div>
        </div>
        <div className='text-center'>
          <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
            Data to enrich your online business
          </h1>
          <p className='mt-6 text-lg leading-8 text-gray-600'>
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat
            commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
          </p>
          <div className='mt-10 flex items-center justify-center gap-x-6'>
            <a
              href='#'
              className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
              Get started
            </a>
            <a
              href='#'
              className='text-sm font-semibold leading-6 text-gray-900'>
              Learn more <span aria-hidden='true'>→</span>
            </a>
          </div>
        </div>
      </div>
      <div
        className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]'
        aria-hidden='true'>
        <div
          className='relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]'
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
  )
}
```

#### SOLUTION

Setup SessionContext and pass it down through App via the Provider component.

```jsx
const SessionContext = createContext()

export default function App() {
  const session = { name: 'Alex Brown', initials: 'AB' }

  return (
    <SessionContext.Provider value={session}>
      <div className='bg-white'>
        <Header />
        <Hero />
      </div>
    </SessionContext.Provider>
  )
}
```

Remove the props and destructuring assignments, while still consuming the data in the only component it is needed, Avatar.

```jsx
function Avatar() {
  const session = useContext(SessionContext)

  return (
    <div className='items-center space-x-2 flex lg:flex-1 lg:justify-end'>
      <span className='inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-500'>
        <span className='text-lg font-medium leading-none text-white'>{session.initials}</span>
      </span>
      <span>{session.name}</span>
    </div>
  )
}
```

---

```jsx
import { createContext, useContext } from 'react'

const SessionContext = createContext()

export default function App() {
  const session = { name: 'Alex Brown', initials: 'AB' }

  return (
    <SessionContext.Provider value={session}>
      <div className='bg-white'>
        <Header />
        <Hero />
      </div>
    </SessionContext.Provider>
  )
}

function Header() {
  return (
    <header className='absolute inset-x-0 top-0 z-50'>
      <nav
        className='flex items-center justify-between p-6 lg:px-8'
        aria-label='Global'>
        <Logo />
        <Avatar />
      </nav>
    </header>
  )
}

function Avatar() {
  const session = useContext(SessionContext)

  return (
    <div className='items-center space-x-2 flex lg:flex-1 lg:justify-end'>
      <span className='inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-500'>
        <span className='text-lg font-medium leading-none text-white'>{session.initials}</span>
      </span>
      <span>{session.name}</span>
    </div>
  )
}

function Logo() {
  return (
    <div className='flex lg:flex-1'>
      <a
        href='#'
        className='-m-1.5 p-1.5'>
        <span className='sr-only'>Your Company</span>
        <img
          className='h-8 w-auto'
          src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
          alt=''
        />
      </a>
    </div>
  )
}

function Hero() {
  return (
    <div className='relative isolate px-6 pt-14 lg:px-8'>
      <div
        className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
        aria-hidden='true'>
        <div
          className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className='mx-auto max-w-2xl py-32 sm:py-48 lg:py-56'>
        <div className='hidden sm:mb-8 sm:flex sm:justify-center'>
          <div className='relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20'>
            Announcing our next round of funding.{' '}
            <a
              href='#'
              className='font-semibold text-indigo-600'>
              <span
                className='absolute inset-0'
                aria-hidden='true'
              />
              Read more <span aria-hidden='true'>&rarr;</span>
            </a>
          </div>
        </div>
        <div className='text-center'>
          <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
            Data to enrich your online business
          </h1>
          <p className='mt-6 text-lg leading-8 text-gray-600'>
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat
            commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
          </p>
          <div className='mt-10 flex items-center justify-center gap-x-6'>
            <a
              href='#'
              className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
              Get started
            </a>
            <a
              href='#'
              className='text-sm font-semibold leading-6 text-gray-900'>
              Learn more <span aria-hidden='true'>→</span>
            </a>
          </div>
        </div>
      </div>
      <div
        className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]'
        aria-hidden='true'>
        <div
          className='relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]'
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
  )
}
```

### **=>** 5 - Update Context

>

#### PROBLEM

Make it possible to 'log out' the current user (session) by passing a callback down through context.

To be able to update the session, however, make the App component stateful.

```js
import { createContext, useContext } from 'react'

const SessionContext = createContext(null)

export default function App() {
  const session = { name: 'Alex Brown', initials: 'AB' }

  return (
    <SessionContext.Provider value={session}>
      <div className='bg-white'>
        <Header session={session} />
        <Hero />
      </div>
    </SessionContext.Provider>
  )
}

function Header() {
  return (
    <header className='absolute inset-x-0 top-0 z-50'>
      <nav
        className='flex items-center justify-between p-6 lg:px-8'
        aria-label='Global'>
        <Logo />
        <Avatar />
      </nav>
    </header>
  )
}

function Avatar() {
  const session = useContext(SessionContext)

  return (
    <div className='items-center space-x-2 flex lg:flex-1 lg:justify-end'>
      <span className='inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-500'>
        <span className='text-lg font-medium leading-none text-white'>{session.initials}</span>
      </span>
      <span>{session.name}</span>
    </div>
  )
}

function Logo() {
  return (
    <div className='flex lg:flex-1'>
      <a
        href='#'
        className='-m-1.5 p-1.5'>
        <span className='sr-only'>Your Company</span>
        <img
          className='h-8 w-auto'
          src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
          alt=''
        />
      </a>
    </div>
  )
}

function Hero() {
  return (
    <div className='relative isolate px-6 pt-14 lg:px-8'>
      <div
        className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
        aria-hidden='true'>
        <div
          className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className='mx-auto max-w-2xl py-32 sm:py-48 lg:py-56'>
        <div className='hidden sm:mb-8 sm:flex sm:justify-center'>
          <div className='relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20'>
            Announcing our next round of funding.{' '}
            <a
              href='#'
              className='font-semibold text-indigo-600'>
              <span
                className='absolute inset-0'
                aria-hidden='true'
              />
              Read more <span aria-hidden='true'>&rarr;</span>
            </a>
          </div>
        </div>
        <div className='text-center'>
          <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
            Data to enrich your online business
          </h1>
          <p className='mt-6 text-lg leading-8 text-gray-600'>
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat
            commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
          </p>
          <div className='mt-10 flex items-center justify-center gap-x-6'>
            <a
              href='#'
              className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
              Get started
            </a>
            <a
              href='#'
              className='text-sm font-semibold leading-6 text-gray-900'>
              Learn more <span aria-hidden='true'>→</span>
            </a>
          </div>
        </div>
      </div>
      <div
        className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]'
        aria-hidden='true'>
        <div
          className='relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]'
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
  )
}
```

#### SOLUTION

To make it possible to update the session data, you need to move the session data into a state variable.

```jsx
const [session, setSession] = useState({
  name: 'Alex Brown',
  initials: 'AB',
})
```

Then, using a callback you can pass down a function to "log out" the session by setting it to null.

```jsx
function onLogout() {
  setSession(null)
}

return (
  <SessionContext.Provider value={{ session, onLogout }}>
    <div className='bg-white'>
      <Header session={session} />
      <Hero />
    </div>
  </SessionContext.Provider>
)
```

---

```jsx
import { createContext, useContext, useState } from 'react'

const SessionContext = createContext(null)

export default function App() {
  const [session, setSession] = useState({
    name: 'Alex Brown',
    initials: 'AB',
  })

  function onLogout() {
    setSession(null)
  }

  function onSignIn() {
    setSession({
      name: 'Alex Brown',
      initials: 'AB',
    })
  }

  return (
    <SessionContext.Provider value={{ session, onLogout, onSignIn }}>
      <div className='bg-white'>
        <Header session={session} />
        <Hero />
      </div>
    </SessionContext.Provider>
  )
}

function Header() {
  return (
    <header className='absolute inset-x-0 top-0 z-50'>
      <nav
        className='flex items-center justify-between p-6 lg:px-8'
        aria-label='Global'>
        <Logo />
        <Avatar />
      </nav>
    </header>
  )
}

function Avatar() {
  const { session, onLogout, onSignIn } = useContext(SessionContext)

  if (!session) return <button onClick={onSignIn}>Sign in</button>

  return (
    <div className='items-center space-x-2 flex lg:flex-1 lg:justify-end'>
      <span className='inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-500'>
        <span className='text-lg font-medium leading-none text-white'>{session.initials}</span>
      </span>
      <span>{session.name}</span>
      <button onClick={onLogout}>Log out</button>
    </div>
  )
}

function Logo() {
  return (
    <div className='flex lg:flex-1'>
      <a
        href='#'
        className='-m-1.5 p-1.5'>
        <span className='sr-only'>Your Company</span>
        <img
          className='h-8 w-auto'
          src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
          alt=''
        />
      </a>
    </div>
  )
}

function Hero() {
  return (
    <div className='relative isolate px-6 pt-14 lg:px-8'>
      <div
        className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
        aria-hidden='true'>
        <div
          className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className='mx-auto max-w-2xl py-32 sm:py-48 lg:py-56'>
        <div className='hidden sm:mb-8 sm:flex sm:justify-center'>
          <div className='relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20'>
            Announcing our next round of funding.{' '}
            <a
              href='#'
              className='font-semibold text-indigo-600'>
              <span
                className='absolute inset-0'
                aria-hidden='true'
              />
              Read more <span aria-hidden='true'>&rarr;</span>
            </a>
          </div>
        </div>
        <div className='text-center'>
          <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
            Data to enrich your online business
          </h1>
          <p className='mt-6 text-lg leading-8 text-gray-600'>
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat
            commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
          </p>
          <div className='mt-10 flex items-center justify-center gap-x-6'>
            <a
              href='#'
              className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
              Get started
            </a>
            <a
              href='#'
              className='text-sm font-semibold leading-6 text-gray-900'>
              Learn more <span aria-hidden='true'>→</span>
            </a>
          </div>
        </div>
      </div>
      <div
        className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]'
        aria-hidden='true'>
        <div
          className='relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]'
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
  )
}
```

## REDUCERS

### **=>** 1 - useReducer Hook

>

#### PROBLEM

Use the useReducer hook to increment the count of the component when the button is clicked.

Make sure to throw an error unless an action with the type "increment" is provided.

```js
import { MinusIcon } from '@heroicons/react/24/solid'
import { useReducer } from 'react'

function reducer(count, action) {
  return count - 1
}

// Create fully functional counter
// Display count and make it possible to increment count
export default function CountUp() {
  const [count, dispatch] = useReducer(reducer, 0)

  return (
    <div className='text-center p-8'>
      <h3 className='text-lg font-semibold text-gray-900'>Current Count is... {count}</h3>
      <div className='mt-6'>
        <button
          onClick={() => dispatch({ type: 'increment' })}
          className='inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
          <MinusIcon className='-ml-0.5 mr-1.5 h-5 w-5' />1
        </button>
      </div>
    </div>
  )
}
```

#### SOLUTION

To update the count with useReducer, dispatch an action with the property type set to "increment".

```jsx
<button onClick={() => dispatch({ type: 'increment' })}>
  <PlusIcon className='-ml-0.5 mr-1.5 h-5 w-5' />1
</button>
```

Within the reducer, make sure to add a conditional and return a new state with the current state plus 1.

```jsx
function reducer(count, action) {
  if (action.type === 'increment') {
    return count + 1
  } else {
    throw new Error()
  }
}
```

---

```jsx
import { PlusIcon } from '@heroicons/react/24/solid'
import { useReducer } from 'react'

function reducer(count, action) {
  if (action.type === 'increment') {
    return count + 1
  } else {
    throw new Error()
  }
}

// Create fully functional counter
// Display count and make it possible to increment count
export default function CountUp() {
  const [count, dispatch] = useReducer(reducer, 0)

  return (
    <div className='text-center p-8'>
      <h3 className='text-lg font-semibold text-gray-900'>Current Count is... {count}</h3>
      <div className='mt-6'>
        <button
          onClick={() => dispatch({ type: 'increment' })}
          className='inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
          <PlusIcon className='-ml-0.5 mr-1.5 h-5 w-5' />1
        </button>
      </div>
    </div>
  )
}
```

### **=>** 2 - Pass data with useReducer

>

#### PROBLEM

Use the useReducer hook to invite users with the form and the email input within it.

Make sure to dispatch an action with the type "invite" and figure out how to pass the data through the action as well.

```js
import { EnvelopeIcon } from '@heroicons/react/20/solid'
import { useReducer } from 'react'

export default function InviteUsers() {
  return (
    <div className='mx-auto p-8 max-w-lg'>
      <div>
        <Header />
        <form className='mt-6 flex'>
          <label
            htmlFor='email'
            className='sr-only'>
            Email address
          </label>
          <input
            type='email'
            name='email'
            id='email'
            className='px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
            placeholder='Enter an email'
          />
          <button
            type='submit'
            className='ml-4 flex-shrink-0 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
            Send invite
          </button>
        </form>
      </div>
      <div className='mt-10'>
        <h3 className='text-sm font-medium text-gray-500'>
          Team member <span className='text-indigo-500'>email</span> added!
        </h3>
      </div>
    </div>
  )
}

function Header() {
  return (
    <div className='text-center'>
      <EnvelopeIcon className='mx-auto h-12 w-12 text-gray-400' />
      <h2 className='mt-2 text-base font-semibold leading-6 text-gray-900'>Invite team members</h2>
      <p className='mt-1 text-sm text-gray-500'>
        You haven’t added any team members to your project yet. As the owner of this project, you
        can manage team member permissions.
      </p>
    </div>
  )
}
```

#### SOLUTION

When the form is submitted, connect a function to the onSubmit prop.

You can use the FormData constructor to get the value typed into the email input.

Then, dispatch an action where the type is "invite" and add the user data to a property on the action as well (i.e. data).

```jsx
function handleInviteUser(event) {
  event.preventDefault()
  const formData = new FormData(event.currentTarget)
  const email = formData.get('email')
  if (typeof email === 'string') {
    dispatch({
      type: 'invite',
      data: {
        email,
      },
    })
    event.target.reset()
  }
}
```

Then, in the reducer, add a condition to check for that type and then set the new state to action.data by returning it from the reducer.

```jsx
function reducer(state, action) {
  if (action.type === 'invite') {
    return action.data
  } else {
    throw new Error()
  }
}
```

---

```jsx
import { EnvelopeIcon } from '@heroicons/react/20/solid'
import { useReducer } from 'react'

function reducer(state, action) {
  if (action.type === 'invite') {
    return action.data
  } else {
    throw new Error()
  }
}

export default function InviteUsers() {
  const [user, dispatch] = useReducer(reducer, null)

  function handleInviteUser(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const email = formData.get('email')
    if (typeof email === 'string') {
      dispatch({
        type: 'invite',
        data: {
          email,
        },
      })
      event.target.reset()
    }
  }

  return (
    <div className='mx-auto p-8 max-w-lg'>
      <div>
        <Header />
        <form
          onSubmit={handleInviteUser}
          className='mt-6 flex'>
          <label
            htmlFor='email'
            className='sr-only'>
            Email address
          </label>
          <input
            type='email'
            name='email'
            id='email'
            className='px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
            placeholder='Enter an email'
          />
          <button
            type='submit'
            className='ml-4 flex-shrink-0 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
            Send invite
          </button>
        </form>
      </div>
      {user && (
        <div className='mt-10'>
          <h3 className='text-sm font-medium text-gray-500'>
            Team member <span className='text-indigo-500'>{user.email}</span> added!
          </h3>
        </div>
      )}
    </div>
  )
}

function Header() {
  return (
    <div className='text-center'>
      <EnvelopeIcon className='mx-auto h-12 w-12 text-gray-400' />
      <h2 className='mt-2 text-base font-semibold leading-6 text-gray-900'>Invite team members</h2>
      <p className='mt-1 text-sm text-gray-500'>
        You haven’t added any team members to your project yet. As the owner of this project, you
        can manage team member permissions.
      </p>
    </div>
  )
}
```

### **=>** 3 - Multiple Action Types

>

#### PROBLEM

Make it possible to add to new users to the users array with useReducer as well as delete users with the delete button.

Implement this with the handleAddUser function, when the form is submitted. And the handleDeleteUser function, which should be passed to the User component.

Make sure to add two conditions to the reducer to check for the "add" and "delete" action types.

```js
import { PlusIcon, TrashIcon } from '@heroicons/react/20/solid'

export default function AddUsers() {
  const users = [{ name: 'Test' }]

  function handleAddUser(event) {}

  function handleDeleteUser(userToDelete) {}

  return (
    <div className='mx-auto p-8 max-w-lg'>
      <div>
        <Header />
        <form className='mt-6 flex'>
          <label
            htmlFor='name'
            className='sr-only'>
            User Name
          </label>
          <input
            type='text'
            name='name'
            id='name'
            className='px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
            placeholder="Enter user's name"
          />
          <button
            type='submit'
            className='ml-4 flex-shrink-0 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
            Add user
          </button>
        </form>
      </div>
      <div className='mt-10'>
        <h3 className='text-sm font-medium text-gray-500'>Recommended team members</h3>
        <ul
          role='list'
          className='mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2'>
          {users.map((user, index) => (
            <User
              key={index}
              user={user}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

function User({ user }) {
  return (
    <li>
      <div className='group flex w-full items-center justify-between space-x-3 rounded-full border border-gray-300 p-2 text-left shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
        <span className='flex min-w-0 flex-1 items-center space-x-3'>
          <span class='inline-block h-12 w-12 overflow-hidden rounded-full bg-gray-100'>
            <svg
              class='h-full w-full text-gray-300'
              fill='currentColor'
              viewBox='0 0 24 24'>
              <path d='M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z' />
            </svg>
          </span>
          <span className='block min-w-0 flex-1'>
            <span className='block truncate text-sm font-medium text-gray-900'>{user.name}</span>
            <span className='block truncate text-sm font-medium text-gray-500'>Invited User</span>
          </span>
        </span>
        <button className='inline-flex h-10 w-10 flex-shrink-0 items-center justify-center'>
          <TrashIcon
            className='h-5 w-5 text-gray-400 group-hover:text-gray-500'
            aria-hidden='true'
          />
        </button>
      </div>
    </li>
  )
}

function Header() {
  return (
    <div className='text-center'>
      <PlusIcon className='mx-auto h-12 w-12 text-gray-400' />
      <h2 className='mt-2 text-base font-semibold leading-6 text-gray-900'>Add team members</h2>
      <p className='mt-1 text-sm text-gray-500'>
        You haven’t added any team members to your project yet.
      </p>
    </div>
  )
}
```

#### SOLUTION

To add a new user to when the form is submitted, we need to dispatch an action with type "add" and pass through the user data to the reducer.

```jsx
function handleAddUser(event) {
  event.preventDefault()
  const formData = new FormData(event.currentTarget)
  const name = formData.get('name')
  if (typeof name === 'string') {
    dispatch({
      type: 'add',
      data: {
        name,
      },
    })
    event.target.reset()
  }
}
```

Then, in the reducer, add a condition for "add" to add the new user at the end of the users array.

```jsx
function usersReducer(users, action) {
  if (action.type === 'add') {
    const user = action.data
    return [...users, user]
  }
}
```

To delete the user, pass the handleDeleteUser callback down to the User component via props.

```jsx
<ul
  role='list'
  className='mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2'>
  {users.map((user, index) => (
    <User
      key={index}
      user={user}
      handleDeleteUser={handleDeleteUser}
    />
  ))}
</ul>
```

In handleDeleteUser, dispatch an action with the type "delete" and the user to delete.

```jsx
function handleDeleteUser(userToDelete) {
  dispatch({
    type: 'delete',
    data: userToDelete,
  })
}
```

Finally, add another condition to the reducer to filter the array based on the user to delete's name property.

```jsx
// ...
else if (action.type === "delete") {
const userToDelete = action.data;
return users.filter((u) => u.name !== userToDelete.name);
} else {
throw new Error();
}
}
```

---

```jsx
import { PlusIcon, TrashIcon } from '@heroicons/react/20/solid'
import { useReducer } from 'react'

function usersReducer(users, action) {
  if (action.type === 'add') {
    const user = action.data
    return [...users, user]
  } else if (action.type === 'delete') {
    const userToDelete = action.data
    return users.filter(u => u.name !== userToDelete.name)
  } else {
    throw new Error()
  }
}

export default function AddUsers() {
  const [users, dispatch] = useReducer(usersReducer, [])

  function handleAddUser(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = formData.get('name')
    if (typeof name === 'string') {
      dispatch({
        type: 'add',
        data: {
          name,
        },
      })
      event.target.reset()
    }
  }

  function handleDeleteUser(userToDelete) {
    dispatch({
      type: 'delete',
      data: userToDelete,
    })
  }

  return (
    <div className='mx-auto p-8 max-w-lg'>
      <div>
        <Header />
        <form
          onSubmit={handleAddUser}
          className='mt-6 flex'>
          <label
            htmlFor='name'
            className='sr-only'>
            User Name
          </label>
          <input
            type='text'
            name='name'
            id='name'
            className='px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
            placeholder="Enter user's name"
          />
          <button
            type='submit'
            className='ml-4 flex-shrink-0 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
            Add user
          </button>
        </form>
      </div>
      <div className='mt-10'>
        <h3 className='text-sm font-medium text-gray-500'>Recommended team members</h3>
        <ul
          role='list'
          className='mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2'>
          {users.map((user, index) => (
            <User
              key={index}
              user={user}
              handleDeleteUser={handleDeleteUser}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

function User({ user, handleDeleteUser }) {
  return (
    <li>
      <div className='group flex w-full items-center justify-between space-x-3 rounded-full border border-gray-300 p-2 text-left shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
        <span className='flex min-w-0 flex-1 items-center space-x-3'>
          <span class='inline-block h-12 w-12 overflow-hidden rounded-full bg-gray-100'>
            <svg
              class='h-full w-full text-gray-300'
              fill='currentColor'
              viewBox='0 0 24 24'>
              <path d='M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z' />
            </svg>
          </span>
          <span className='block min-w-0 flex-1'>
            <span className='block truncate text-sm font-medium text-gray-900'>{user.name}</span>
            <span className='block truncate text-sm font-medium text-gray-500'>Invited User</span>
          </span>
        </span>
        <button
          onClick={() => handleDeleteUser(user)}
          className='inline-flex h-10 w-10 flex-shrink-0 items-center justify-center'>
          <TrashIcon
            className='h-5 w-5 text-gray-400 group-hover:text-gray-500'
            aria-hidden='true'
          />
        </button>
      </div>
    </li>
  )
}

function Header() {
  return (
    <div className='text-center'>
      <PlusIcon className='mx-auto h-12 w-12 text-gray-400' />
      <h2 className='mt-2 text-base font-semibold leading-6 text-gray-900'>Add team members</h2>
      <p className='mt-1 text-sm text-gray-500'>
        You haven’t added any team members to your project yet.
      </p>
    </div>
  )
}
```

## **MODULE** 4 - TypeScript for React

## INTRO TO TYPESCRIPT

### **=>** 1 - Component Files

>

#### PROBLEM

Fix the extension of the "App.js" file in order to make it possible to add types to that file.

```js
import React from 'react'

export default function App() {
  return <div className='mx-auto p-8 text-3xl'>Hello TypeScript!</div>
}
```

#### SOLUTION

To be able to add types to a component file (a file that contains a component in React and uses JSX), it needs to end in the extension .tsx.

This is as compared to files that end in .ts, which do not use components and should only contain TypeScript (JavaScript written with types).

```jsx
import React from 'react'

export default function App() {
  return <div className='mx-auto p-8 text-3xl'>Hello TypeScript!</div>
}
```

### **=>** 2 - Type Information

>

#### PROBLEM

Your challenge is to explore TypeScript's benefits in understanding data types and using code editors like VS Code to help you.

You have an input element with missing properties size and onChange. Your task is to determine the appropriate data types these properties expect and use that information to complete writing the input element.

By investigating the code you've written and utilizing TypeScript, you'll gain a clearer understanding of how to work with these properties effectively.

```js
import React from "react";

export default function App() {
  return (
    <input
      // What type does "size" expect?
      size={}
      // What type does "onChange" expect?
      onChange={}
    />
  );
}
```

#### SOLUTION

```jsx
import React from 'react'

export default function App() {
  return (
    <input
      // What type does "size" expect?
      size={10}
      // What type does "onChange" expect?
      onChange={event => {
        event.target.value
      }}
    />
  )
}
```

### **=>** 3 - Type Autocomplete

>

#### PROBLEM

Your challenge is to work with TypeScript in your code editor.

You have a simple badge displayed, and you need to figure out how to use TypeScript's autocomplete feature to explore the available properties on the span element.

This will help you understand how to access information quickly without guessing or searching online. Dive in, play around, and see how you can utilize TypeScript's capabilities to enhance your coding experience.

```js
import React from 'react'

export default function App() {
  return (
    <span
      // How do you get autocomplete with TypeScript?
      className='inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10'>
      Badge
    </span>
  )
}
```

#### SOLUTION

```jsx
import React from 'react'

export default function App() {
  return (
    <span
      // How do you get autocomplete with TypeScript?
      className='inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10'>
      Badge
    </span>
  )
}
```

## TYPES

### **=>** 1 - Basic Types

>

#### PROBLEM

Your challenge is to work with type annotations in TypeScript.

You have an application with a badge that uses values from three variables: className, width, and disabled.

Your task is to correctly apply type annotations to these variables to ensure that their values match the specified data types.

This will help prevent errors and make your code more reliable.

```js
import React from 'react'

// Fix the type annotations
const className: number =
  'inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10'
const width: string = 200
let disabled: boolean

export default function App() {
  disabled = 'false'

  return (
    <span
      className={className}
      style={{ width }}
      aria-disabled={disabled}>
      Badge
    </span>
  )
}
```

#### SOLUTION

```jsx
import React from 'react'

// Fix the type annotations
const className: string =
  'inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10'
const width: number = 200
let disabled: boolean

export default function App() {
  disabled = false

  return (
    <span
      className={className}
      style={{ width }}
      aria-disabled={disabled}>
      Badge
    </span>
  )
}
```

### **=>** 2 - Object Types

>

#### PROBLEM

Your challenge is to accurately describe and annotate the types for objects in your code.

Specifically, you need to define the correct types for arrays and plain objects with keys and values.

Additionally, you'll need to create custom types for these objects using the type keyword, following the naming convention with a capital letter at the beginning.

Once you've done this, ensure that the types you specify match the actual values and structure of your objects.

```js
import React from "react";

const options: string = ["United States", "Canada", "Mexico"];

type Location = {
  id:
}

const location = {
  id: "location",
  name: "location",
  defaultValue: "Canada",
  disabled: false,
};

// Add the appropriate type annotations
export default function App() {
  return (
    <div>
      <label
        htmlFor={location.id}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        Location
      </label>
      <select
        id={location.id}
        name={location.name}
        className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-green-600 sm:text-sm sm:leading-6"
        defaultValue={location.defaultValue}
        disabled={location.disabled}
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}
```

#### SOLUTION

>

```jsx
import React from 'react'

const options: Array<string> = ['United States', 'Canada', 'Mexico']

interface Location {
  id: string;
  name: string;
  defaultValue: string;
  disabled: boolean;
}

const location: Location = {
  id: 'location',
  name: 'location',
  defaultValue: 'Canada',
  disabled: false,
}

// Add the appropriate type annotations
export default function App() {
  return (
    <div>
      <label
        htmlFor={location.id}
        className='block text-sm font-medium leading-6 text-gray-900'>
        Location
      </label>
      <select
        id={location.id}
        name={location.name}
        className='mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-green-600 sm:text-sm sm:leading-6'
        defaultValue={location.defaultValue}
        disabled={location.disabled}>
        {options.map(option => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  )
}
```

### **=>** 3 - Optional Types

>

#### PROBLEM

Your challenge is to fix errors in an app that retrieves Star Wars character data from the Star Wars API.

Firstly, make the getCharacter function capable of receiving an optional character ID as an argument while providing a default value.

Secondly, determine the correct return type for the getCharacter function by addressing the requirements set by the generic it uses.

Your task is to find out what type argument should be added to accurately describe the function's behavior.

```js
import React, { useState } from 'react'

// Make the getCharacter argument optional
// Fix the return type of getCharacter
export default function App() {
  const [character, setCharacter] = useState(null)

  React.useEffect(() => {
    async function getCharacter(id): Promise {
      const response = await fetch(`https://swapi.dev/api/people/${id || 1}`)
      const data = await response.json()
      setCharacter(data.name)
    }

    getCharacter()
  }, [])

  if (!character) return <div>Loading...</div>

  return <h1>{character}</h1>
}
```

#### SOLUTION

```jsx
import React, { useState } from 'react'

// Make the getCharacter argument optional
// Fix the return type of getCharacter
export default function App() {
  const [character, setCharacter] = useState(null)

  React.useEffect(() => {
    async function getCharacter(id?: string | number): Promise<void> {
      const response = await fetch(`https://swapi.dev/api/people/${id || 1}`)
      const data = await response.json()
      setCharacter(data.name)
    }

    getCharacter()
  }, [])

  if (!character) return <div>Loading...</div>

  return <h1>{character}</h1>
}
```

## TYPED COMPONENTS

### **=>** 1 - Typed Props

>

#### PROBLEM

Your challenge is to describe all the individual props that are being passed down to the Person component using the provided interface props.

Use the interface to clearly define and specify each prop's type.

This will help resolve the type error you're encountering and ensure that the data is correctly handled within the component.

```js
import React from 'react'

export default function App() {
  const person = {
    name: 'Wade Cooper',
    avatar:
      'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    width: 50,
    height: 50,
  }

  return <Person {...person} />
}

interface Props {}

// Add a props type annotation
function Person(props) {
  return (
    <div className='p-8 flex items-center'>
      <img
        src={props.avatar}
        alt={props.name}
        className='flex-shrink-0 rounded-full'
        style={{ width: props.width, height: props.height }}
      />
      <span className='ml-3 block truncate font-bold'>{props.name}</span>
    </div>
  )
}
```

#### SOLUTION

```jsx
import React from 'react'

export default function App() {
  const person = {
    name: 'Wade Cooper',
    avatar:
      'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    width: 50,
    height: 50,
  }

  return <Person {...person} />
}

export type Props = {
  name: string,
  avatar: string,
  width: number,
  height: number,
}

// Add a props type annotation
const Person = (props: Props) => {
  return (
    <div className='p-8 flex items-center'>
      <img
        src={props.avatar}
        alt={props.name}
        className='flex-shrink-0 rounded-full'
        style={{ width: props.width, height: props.height }}
      />
      <span className='ml-3 block truncate font-bold'>{props.name}</span>
    </div>
  )
}
```

### **=>** 2 - Typed Optional Props

>

#### PROBLEM

Your challenge is to replace the "any" type used in the "Section" component with appropriate types for each prop.

Specifically, you need to make the "cover" prop optional while maintaining the reliability of TypeScript's type checking.

```js
import React from 'react'

export default function App() {
  return (
    <>
      <Section
        heading='Long-term thinking'
        cover='https://tailwindui.com/img/ecommerce-images/home-page-03-feature-section-full-width.jpg'
        text="We're committed to responsible, sustainable, and ethical
          manufacturing. Our small-scale approach allows us to focus on quality
          and reduce our impact. We're doing our best to delay the inevitable
          heat-death of the universe."
      />
      <Section
        heading='Level up your desk'
        text='Make your desk beautiful and organized. Post a picture to social media and watch it get more likes than
        life-changing announcements. Reflect on the shallow nature of existence. At least you have a really nice
        desk setup.'
      />
    </>
  )
}

function Section(props: any) {
  return (
    <div className='relative bg-gray-800 px-6 py-32 sm:px-12 sm:py-40 lg:px-16'>
      {props.cover && (
        <div className='absolute inset-0 overflow-hidden'>
          <img
            src='https://tailwindui.com/img/ecommerce-images/home-page-03-feature-section-full-width.jpg'
            alt=''
            className='h-full w-full object-cover object-center'
          />
        </div>
      )}
      <div
        aria-hidden='true'
        className='absolute inset-0 bg-gray-900 bg-opacity-50'
      />
      <div className='relative mx-auto flex max-w-3xl flex-col items-center text-center'>
        <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
          {props.heading}
        </h2>
        <p className='mt-3 text-xl text-white'>{props.text}</p>
      </div>
    </div>
  )
}
```

#### SOLUTION

```jsx
import React from 'react'

export default function App() {
  return (
    <>
      <Section
        heading='Long-term thinking'
        cover='https://tailwindui.com/img/ecommerce-images/home-page-03-feature-section-full-width.jpg'
        text="We're committed to responsible, sustainable, and ethical
          manufacturing. Our small-scale approach allows us to focus on quality
          and reduce our impact. We're doing our best to delay the inevitable
          heat-death of the universe."
      />
      <Section
        heading='Level up your desk'
        text='Make your desk beautiful and organized. Post a picture to social media and watch it get more likes than
        life-changing announcements. Reflect on the shallow nature of existence. At least you have a really nice
        desk setup.'
      />
    </>
  )
}

interface Props {
  heading: string;
  text: string;
  cover?: string;
}

function Section(props: Props) {
  return (
    <div className='relative bg-gray-800 px-6 py-32 sm:px-12 sm:py-40 lg:px-16'>
      {props.cover && (
        <div className='absolute inset-0 overflow-hidden'>
          <img
            src='https://tailwindui.com/img/ecommerce-images/home-page-03-feature-section-full-width.jpg'
            alt=''
            className='h-full w-full object-cover object-center'
          />
        </div>
      )}
      <div
        aria-hidden='true'
        className='absolute inset-0 bg-gray-900 bg-opacity-50'
      />
      <div className='relative mx-auto flex max-w-3xl flex-col items-center text-center'>
        <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
          {props.heading}
        </h2>
        <p className='mt-3 text-xl text-white'>{props.text}</p>
      </div>
    </div>
  )
}
```

### **=>** 3 - Typed Children

>

#### PROBLEM

Your challenge is to correctly handle the children prop in the "Call to Action" button component.

You need to make sure this prop is set up properly to work with different types of content, and that it's defined correctly in the interface.

```js
import React from "react";

// Add type annotation for children prop
export default function App() {
  return (
    <>
      <CTAButton>
        <span>Shop Workspace</span>
      </CTAButton>
      <CTAButton />
    </>
  );
}

interface Props {
  children:
}

function CTAButton(props: Props) {
  return (
    <a
      href="#"
      className="mt-8 block w-full rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
    >
      {props.children || "Click Me"}
    </a>
  );
}
```

#### SOLUTION

```jsx
import React from 'react'

// Add type annotation for children prop
export default function App() {
  return (
    <>
      <CTAButton>
        <span>Shop Workspace</span>
      </CTAButton>
      <CTAButton>Click me</CTAButton>
    </>
  )
}

interface Props {
  children: React.ReactNode;
}

function CTAButton(props: Props) {
  return (
    <a
      href='#'
      className='mt-8 block w-full rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto'>
      {props.children}
    </a>
  )
}
```

### **=>** 4 - Typed Event Handlers

>

#### PROBLEM

Make the "Close" button work properly in the Details component.

our task is to figure out how to pass the right function and fix any type errors, so the button actually closes the Details component.

```js
import { CheckIcon, StarIcon } from '@heroicons/react/20/solid'
import React from 'react'

// Add type annotation for event handler
export default function App() {
  const [isOpen, setOpen] = React.useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div className='p-8'>
      {isOpen ? <Details handleClose={handleClose} /> : <button onClick={handleOpen}>Open</button>}
    </div>
  )
}

interface Props {}

function Details(props: Props) {
  return (
    <section className='mt-4'>
      <div className='flex items-center'>
        <p className='text-lg text-gray-900 sm:text-xl'>{product.price}</p>

        <div className='ml-4 border-l border-gray-300 pl-4'>
          <h4 className='sr-only'>Reviews</h4>
          <div className='flex items-center'>
            <div className='flex items-center'>
              {[0, 1, 2, 3, 4].map(rating => (
                <StarIcon
                  key={rating}
                  className={classNames(
                    product.rating > rating ? 'text-yellow-400' : 'text-gray-300',
                    'h-5 w-5 flex-shrink-0'
                  )}
                  aria-hidden='true'
                />
              ))}
            </div>
            <p className='sr-only'>{product.rating} out of 5 stars</p>
          </div>
        </div>
      </div>

      <div className='mt-6 flex items-center'>
        <CheckIcon
          className='h-5 w-5 flex-shrink-0 text-green-500'
          aria-hidden='true'
        />
        <p className='ml-2 font-medium text-gray-500'>In stock and ready to ship</p>
      </div>
      <button
        onClick={props.handleClose}
        className='py-4'>
        Close
      </button>
    </section>
  )
}

const product = {
  name: 'Everyday Ruck Snack',
  price: '$220',
  rating: 3.9,
  href: '#',
  imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-quick-preview-03-detail.jpg',
  imageAlt:
    'Interior of light green canvas bag with padded laptop sleeve and internal organization pouch.',
  sizes: [
    {
      name: '18L',
      description: 'Perfect for a reasonable amount of snacks.',
    },
    {
      name: '20L',
      description: 'Enough room for a serious amount of snacks.',
    },
  ],
}

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}
```

#### SOLUTION

```jsx
import { CheckIcon, StarIcon } from '@heroicons/react/20/solid'
import React from 'react'

// Add type annotation for event handler
export default function App() {
  const [isOpen, setOpen] = React.useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div className='p-8'>
      {isOpen ? <Details handleClose={handleClose} /> : <button onClick={handleOpen}>Open</button>}
    </div>
  )
}

interface Props {
  handleClose: React.MouseEventHandler<HTMLButtonElement>;
}

function Details(props: Props) {
  return (
    <section className='mt-4'>
      <div className='flex items-center'>
        <p className='text-lg text-gray-900 sm:text-xl'>{product.price}</p>

        <div className='ml-4 border-l border-gray-300 pl-4'>
          <h4 className='sr-only'>Reviews</h4>
          <div className='flex items-center'>
            <div className='flex items-center'>
              {[0, 1, 2, 3, 4].map(rating => (
                <StarIcon
                  key={rating}
                  className={classNames(
                    product.rating > rating ? 'text-yellow-400' : 'text-gray-300',
                    'h-5 w-5 flex-shrink-0'
                  )}
                  aria-hidden='true'
                />
              ))}
            </div>
            <p className='sr-only'>{product.rating} out of 5 stars</p>
          </div>
        </div>
      </div>

      <div className='mt-6 flex items-center'>
        <CheckIcon
          className='h-5 w-5 flex-shrink-0 text-green-500'
          aria-hidden='true'
        />
        <p className='ml-2 font-medium text-gray-500'>In stock and ready to ship</p>
      </div>
      <button
        onClick={props.handleClose}
        className='py-4'>
        Close
      </button>
    </section>
  )
}

const product = {
  name: 'Everyday Ruck Snack',
  price: '$220',
  rating: 3.9,
  href: '#',
  imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-quick-preview-03-detail.jpg',
  imageAlt:
    'Interior of light green canvas bag with padded laptop sleeve and internal organization pouch.',
  sizes: [
    {
      name: '18L',
      description: 'Perfect for a reasonable amount of snacks.',
    },
    {
      name: '20L',
      description: 'Enough room for a serious amount of snacks.',
    },
  ],
}

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}
```

### **=>** 5 - Typed HTML Props

>

#### PROBLEM

Focus on modifying the button component so that it can accept native HTML props, just like a regular React button element would.

This means allowing the button component to receive props such as id, disabled, and any other valid prop that a button can have.

```js
import { ComponentProps } from 'react'

// Add the right type annotation to pass native HTML props to Button component
export default function App() {
  return (
    <form className='max-w-sm p-8'>
      <div className='col-span-full'>
        <label
          htmlFor='about'
          className='block text-sm font-medium leading-6 text-black'>
          About
        </label>
        <div className='mt-2'>
          <textarea
            id='about'
            name='about'
            rows={3}
            className='block w-full rounded-md border-2 bg-white/5 py-1.5 text-black shadow-sm ring-1 ring-inset ring-white/10 border-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
            defaultValue={''}
          />
        </div>
        <p className='mt-3 text-sm leading-6 text-gray-400'>
          Write a few sentences about yourself.
        </p>
      </div>
      <Button
        type='submit'
        className='mt-4 text-white'>
        Save
      </Button>
    </form>
  )
}

function Button(props) {
  return (
    <button
      type={props.type}
      className={`${props.className} rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}>
      {props.children}
    </button>
  )
}
```

#### SOLUTION

```jsx
import React, { ComponentProps } from 'react'

// Add the right type annotation to pass native HTML props to Button component
export default function App() {
  return (
    <form className='max-w-sm p-8'>
      <div className='col-span-full'>
        <label
          htmlFor='about'
          className='block text-sm font-medium leading-6 text-black'>
          About
        </label>
        <div className='mt-2'>
          <textarea
            id='about'
            name='about'
            rows={3}
            className='block w-full rounded-md border-2 bg-white/5 py-1.5 text-black shadow-sm ring-1 ring-inset ring-white/10 border-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
            defaultValue={''}
          />
        </div>
        <p className='mt-3 text-sm leading-6 text-gray-400'>
          Write a few sentences about yourself.
        </p>
      </div>
      <Button
        type='submit'
        className='mt-4 text-white'>
        Save
      </Button>
    </form>
  )
}

function Button(props: React.ComponentProps<'button'>) {
  return (
    <button
      type={props.type}
      className={`${props.className} rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}>
      {props.children}
    </button>
  )
}
```

## TYPED HOOKS

### **=>** 1 - Typed useState

>

#### PROBLEM

In this task, you should fix a simple to-do application.

Your goal is to enable users to write a to-do, click "save," and use the "add to-do" function triggered by the save button.

This should add a new to-do to the state. You need to address TypeScript type issues by adding a type argument to the useState hook. This will ensure smooth operation when setting and displaying to-dos.

```js
import React, { useState } from 'react'

// Add the appropriate types to todos
export default function App() {
  const [text, setText] = useState('')
  const [todos, setTodos] = useState()

  function addTodo() {
    if (text) {
      setTodos([...todos, { id: Date.now(), text }])
      setText('')
    }
  }

  return (
    <div className='max-w-sm p-8'>
      <h1 className='text-2xl font-bold pb-4'>Todos</h1>
      <ul className='space-y-2 pb-4'>
        {todos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
      <div className='col-span-full mt-2'>
        <textarea
          id='todo'
          name='todo'
          onChange={e => setText(e.target.value)}
          rows={3}
          className='block w-full rounded-md border-2 bg-white/5 py-1.5 text-black shadow-sm ring-1 ring-inset ring-white/10 border-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
          value={text}
        />
      </div>
      <button
        type='button'
        onClick={addTodo}
        className='mt-8 text-white rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
        Save
      </button>
    </div>
  )
}
```

#### SOLUTION

```jsx
import React, { useState } from "react";

interface Todo {
  id: number;
  text: string;
}

// Add the appropriate types to todos
export default function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  function addTodo() {
    if (text) {
      setTodos([...todos, { id: Date.now(), text }]);
      setText("");
    }
  }

  return (
    <div className="max-w-sm p-8">
      <h1 className="text-2xl font-bold pb-4">Todos</h1>
      <ul className="space-y-2 pb-4">
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
      <div className="col-span-full mt-2">
        <textarea
          id="todo"
          name="todo"
          onChange={(e) => setText(e.target.value)}
          rows={3}
          className="block w-full rounded-md border-2 bg-white/5 py-1.5 text-black shadow-sm ring-1 ring-inset ring-white/10 border-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
          value={text}
        />
      </div>
      <button
        type="button"
        onClick={addTodo}
        className="mt-8 text-white rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Save
      </button>
    </div>
  );
}
```

### **=>** 2 - Typed useEffect

>

#### PROBLEM

You should fix the type error in the custom hook so that it no longer displays the cryptic message. This will ensure that the useCountUp hook can properly increment the counter every second.

```js
import React, { useEffect, useState } from 'react'

export default function App() {
  const count = useCountUp()

  return <div>{count}</div>
}

// Fix the useEffect type error
function useCountUp(ms: number = 1000) {
  const [count, setCount] = useState(0)

  useEffect(
    () =>
      setInterval(() => {
        setCount(count => count + 1)
      }, ms),
    [ms]
  )

  return count
}
```

#### SOLUTION

```jsx
import React, { useEffect, useState } from 'react'

export default function App() {
  const count = useCountUp()

  return <div>{count}</div>
}

// Fix the useEffect type error
function useCountUp(ms: number = 1000) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(count => count + 1)
    }, ms)

    return () => {
      clearInterval(timer)
    }
  }, [ms])

  return count
}
```

### **=>** 3 - Typed useRef

>

#### PROBLEM

Autofocus an Input Using useRef

- Create a useRef named inputRef.
- Set its initial value as null.
- Use an effect after rendering.
- Implement input autofocus with inputRef.current.
- Solve autocomplete issues by specifying the element type.
- Ensure you check if inputRef exists.

```js
import React, { useEffect, useRef } from 'react'

export default function App() {
  const inputRef = useRef(null)
  // Autofocus input using useEffect
  // Add appropriate type to useRef
  useEffect(() => {
    inputRef.current
  })

  return (
    <input
      ref={inputRef}
      placeholder='Focus me'
    />
  )
}
```

#### SOLUTION

```jsx
import React, { useEffect, useRef } from 'react'

export default function App() {
  const inputRef = (useRef < HTMLInputElement) | (null > null)

  // Autofocus input using useEffect
  // Add appropriate type to useRef
  useEffect(() => {
    if (!inputRef.current) return
    inputRef.current.focus()
  }, [])

  return (
    <input
      ref={inputRef}
      placeholder='Focus me'
    />
  )
}
```

### **=>** 4 - Typed Context

>

#### PROBLEM

You should create context for the "current user" with proper type information. This will ensure that the value passed down on the value prop is not unknown, eliminating the type error.

```js
import React, { useState, useContext, createContext } from 'react'

const CurrentUserContext = createContext()

export default function App() {
  const [currentUser, setCurrentUser] = useState({
    username: 'Paul Brown',
  })

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Profile />
    </CurrentUserContext.Provider>
  )
}

function Profile() {
  const currentUser = useContext(CurrentUserContext)

  return <p>Welcome, {currentUser.username}!</p>
}
```

#### SOLUTION

>

```jsx
import React, { useState, useContext, createContext } from "react";

interface CurrentUser {
  username: string;
}

const CurrentUserContext = createContext<CurrentUser>({} as CurrentUser);

export default function App() {
  const [currentUser, setCurrentUser] = useState({
    username: "Paul Brown",
  });

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Profile />
    </CurrentUserContext.Provider>
  );
}

function Profile() {
  const currentUser = useContext(CurrentUserContext);

  return <p>Welcome, {currentUser.username}!</p>;
}
```

### **=>** 5 - Typed useReducer

>

#### PROBLEM

Update the view count for increment and decrement.

Add the appropriate types for state and action parameters in the reducer.

```js
import React, { useReducer } from 'react'

const initialState = { views: 0 }

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { views: state.views + action.payload }
    case 'decrement':
      return { views: state.views - action.payload }
    default:
      throw new Error()
  }
}

export default function ViewCount() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className='max-w-sm p-8'>
      <video
        className='w-full'
        controls>
        <source
          src='https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm'
          type='video/webm'
        />
        <source
          src='https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4'
          type='video/mp4'
        />
      </video>
      <div className='flex justify-between mt-4'>
        <button onClick={() => dispatch({ type: 'increment', payload: 1 })}>+</button>
        <span>{state.views} views</span>
        <button onClick={() => dispatch({ type: 'decrement', payload: '1' })}>-</button>
      </div>
    </div>
  )
}
```

#### SOLUTION

```jsx
import React, { useReducer } from 'react'

interface ViewState {
  views: number;
}

interface ViewAction {
  type: 'increment' | 'decrement';
  payload: number | string;
}

const initialState: ViewState = { views: 0 }

function reducer(state: ViewState, action: ViewAction) {
  switch (action.type) {
    case 'increment':
      return { views: state.views + Number(action.payload) }
    case 'decrement':
      return { views: state.views - Number(action.payload) }
    default:
      throw new Error()
  }
}

export default function ViewCount() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className='max-w-sm p-8'>
      <video
        className='w-full'
        controls>
        <source
          src='https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm'
          type='video/webm'
        />
        <source
          src='https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4'
          type='video/mp4'
        />
      </video>
      <div className='flex justify-between mt-4'>
        <button onClick={() => dispatch({ type: 'increment', payload: 2 })}>+</button>
        <span>{state.views} views</span>
        <button onClick={() => dispatch({ type: 'decrement', payload: '3' })}>-</button>
      </div>
    </div>
  )
}
```

## **MODULE** 5 - Next.js Mastery

## GETTING STARTED

### **=>** 1 - Project Overview

### **=>** 2 - Tools Needed

### **=>** 3 - Why Next.js

### **=>** 4 - Create Next.js Project

### **=>** 5 - Files & Folders

## PAGES & COMPONENTS

### **=>** 1 - Root Layout

### **=>** 2 - Styling with CSS

### **=>** 3 - Client vs Server Components

### **=>** 4 - Static Pages

## DATA FETCHING

### **=>** 1 - Prisma Setup

### **=>** 2 - API Route Handlers

### **=>** 3 - React Server Components

### **=>** 4 - Client Data Fetching

### **=>** 5 - Server Actions

## APP CONTENT

### **=>** 1 - Create Post Page

### **=>** 2 - Drafts Page

### **=>** 3 - Dynamic Page Routes

### **=>** 4 - Dynamic Route Handlers
