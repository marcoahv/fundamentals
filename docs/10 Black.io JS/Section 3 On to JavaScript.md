---
sidebar_position: 3
---

# Section 3: On to JavaScript!

## 17. Setting up JavaScript file

### Create a new project folder

```
  project folder/
                index.html
                main.css
                app.js
```

### the script tag - how to link your JavaScript files to your HTML file.

- In this course, we will always link our JavaScript file in the body tag

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script src="app.js"></script>
  </body>
</html>
```

### link the css file

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="main.css" />
  </head>
  <body>
    <script src="app.js"></script>
  </body>
</html>
```

- you can link CSS files and you can link JavaScript files to your HTML, but you must follow the folder structure.

## 18. Comments

### using comments

- comments are used to remind yourself what a piece of code does. It also helps other developers understand what you are writing and your intentions behind you.

### single line comments

- are written with two forward slashes

```js
// This is a comment
```

### multi-line comments

- is just a forward slash, star, star, and another forward slash, and in between your comment

```js
/* I can move this damage to the next line and start writing some more notes here, just like that.*/
```

### Code Blacks {}

- just like in HTML where we had to section all the HTML from the rest of the code, in JavaScript we use code blocks to a section of the JavaScript from the rest

- a code block is written like this opening curly bracket and closing curly bracket

```js
{
  // This is a comment
  // This is a comment
}
```

### keyboard shortcut for comments

- You basically highlight any line you want to comment and then press `command/control forward slash`, and that automatically creates these single line comments for you

## 19. Strings

### Data types

- Data types is how JavaScript represents data.

- There are a number of data types out there, but the first one I want to teach you about is a `string`

### string

- strings are used to represent text.

- This is a good place to add names, messages, tiles, etcetera.

### This is how you write a string.

- You write a string in either `double quotes or single quotes`

- but I recommend using the double quotes because you can run into an error when using single quotes improperly.

```js
'my strings'
```

### scape character

- This backslash (\) is the escape character.

```js
'my string\'s'
```

- It ignores the character that follows the backslash.

### Practice on W3Schools

- Copy and paste the links into a new tab and complete the exercises.

- https://www.w3schools.com/js/exercise_js.asp?filename=exercise_js_strings2

## 21. Var, Let, and Const

### variables

- in JavaScript We store data in variables.

- You can think of a variable as a box, We dump data inside of them and come back to them once we need them.

### let

- creating/declaring/initializing a variable with the `let` keyword

```js
let myDogName = 'Max'
```

### changing a variable

```js
let myDogName = 'Max'
myDogName = 'Maxine'
```

- So when you change a variable name, you don't write the declaration

### const and var

- creating/declaring/initializing a variable with the `const` keyword and the `var` key word

```js
let myDogName = 'Max'
myDogName = 'Maxine'

const pi = 3.14
var dinner = 'chicken and rice'
```

### let vs const vs var

- `let` is the keyword that you use if you know that you may change the value of that variable sometime in the future.

- `const` is the declaration that you make when you know that you would never change that variable.

- `var` is the keyword that you want to use to declare variable if you have a variable, is going to change sometime in your future.

- `The difference between let and var` is that var variables can be accessed in a wider scope.

## 23. Scope

### scope is where variables exist.

- Scope determines the accessibility (visibility) of variables from different parts of your code.

- JavaScript has 3 types of scope:

- Block scope
- Function scope
- Global scope

- https://www.w3schools.com/js/js_scope.asp

### Block scope

- Variables to clear with let and const only exist between these two curly brackets

```js
{
  let myDogName = 'Max'
  const pi = 3.14
}
```

### function and global scope

- The var keyword is used to declare function-scoped variables and globally-scoped variables.

- If you use var inside a block, the variable will not be a block scoped. It will either be function scoped or globally scoped depending upon where the block is present.

- https://www.section.io/engineering-education/variables-in-javascript/#:~:text=The%20var%20keyword%20is%20used,where%20the%20block%20is%20present.

### we need our code to be as predictable as possible

- `var` would let you redeclare a variable with the same name while `let` and `const` would not

```js
var dinner = 'chicken'
var dinner = 'fish'
console.log(dinner) // fish
/////////////////////////////////
let dinner = 'chicken'
let dinner = 'fish'
console.log(dinner) // Uncaught SyntaxError: Identifier 'dinner' has already been declared
```

### is best practice not to declare variables with this VAR keyword

- use `let` for variables that can possibly be changed later on

- use `const` for variables that we know won't change later on.

## 24. Console Object (and intro to objects)

### objects

- In JavaScript, an object is an unordered collection of key-value pairs. Each key-value pair is called a property.

### objects can have properties and methods

- properties are attributes of the object

- Methods define functionality

### console object

- JavaScript has some built in objects that allow you to access information and use functionality.

- The first JavaScript object I want to introduce you to is the `console object`.

- The `console object` is nothing but a variable that's already built into JavaScript

### the log method

- we will use a method on this console object to help us debug our code.

- And the method that we will use on this object is the `log()` method.

### dot notation

- on objects, you access its properties and methods by using dot notation.

```js
console.log()
```

- This console object allows us to log things to the console.

```js
let myDogName = 'Max'
console.log(myDogName)
```

## 25. (console) Logging (to further explain) Scope

### I want to use this logging method to further explain scope.

```js
{
  let myDogName = 'Max'
  const pi = 3.14
  var dinner = 'chicken and rice'

  console.log(myDogName) // Max
  console.log(pi) // 3.14
  console.log(dinner) // chicken and rice
}
```

### variables created with let or const only exist within the block {}

```js
{
  let myDogName = 'Max'
  const pi = 3.14
  var dinner = 'chicken and rice'
}
console.log(myDogName) // error
console.log(pi) // error
console.log(dinner) // chicken and rice
```

### avoid unpredictable code

- The fact that we can access the var keyword outside of Code Blocks makes our code unpredictable and when code becomes unpredictable Bugs are likely to come.

### Never use the var keyword

## 26. Functions (Arrow)

### using functions

- functions are used to run code blocks when we want to run them, instead of them just running by default.

### This is how you write a function.

```js
const myFunction = () => {}
```

- We write our code between these two code blocks {}

```js
const myFunction = () => {
  console.log('my code goes here')
}
```

- we are storing this function inside of this variable with the name of myFunction.

### calling the function

- functions don't run unless you explicitly run them

```js
const myFunction = () => {
  console.log('my code goes here')
}

myFunction()
```

- This is `calling` a function and is also `invoking` a function. You can also think of it as `running` the function.

### another example a bit more complex

```js
const sayHello = () => {
  const greeting = 'John Does say hi'
  console.log(greeting)
}

sayHello()
```

- In this function, I'm declaring a variable with the const keyword here, I'm naming the greeting, Setting it to a string and I'm logging that to the console.

## 27. Arrow Functions (vs function keyword)

### the older way of writing functions

```js
function myFn() {
  ...
}
```

- This is the older way of writing a function

- when you look at code online, you may see someone use this type of function.

- However, we won't be using this type of function in this course because `I want it to be consistent with which version of a function I'm using`.

### arrow function

- this function is an arrow function. The one we learned in a previous video.

```js
const sayHello = () => {
  const message = 'Hello'
  console.log(message)
}

sayHello()
```

### Now let's see that as the older way of writing a function.

```js
function sayHello() {
  const message = 'Hello'
  console.log(message)
}

sayHello()
```

### parameters

- You can think of a parameter as a variable being passed into a function.

- Function `parameters` are the `names` listed in the function definition. (possible parameters)

- Function `arguments` are the `real values` passed to (and received by) the function. (actual arguments)

```js
const sayHello = (message) => {
  console.log(message)
}

sayHello('Hello')
```

- Let's say we wanted to log more than one message.

```js
const sayHello = (message, message2) => {
  console.log(message)
  console.log(message2)
}

sayHello('Hello', 'there')
```

### this works the exact same way if we wish to use the older way of writing a function.

```js
function sayHello(message, message2) {
  console.log(message)
  console.log(message2)
}

sayHello('Hello', 'there')
```

### if we only had one parameter `using this arrow function`, we can remove these parentheses

### setting parameters to a default value

- adding the parameters inside the parenthesis is the same as declaring a variable inside the function without assigning a value to it

- A parameter is a variable in a function definition. It is a placeholder and hence does not have a concrete value.

```js
let message
let message2
```

- An argument is a value passed during function invocation.

### Default Parameters

- In JavaScript, default function parameters allow you to initialize named parameters with default values if no values or undefined are passed into the function.

```js
const say = (message = 'Hi') => {
  console.log(message)
}

say() // 'Hi'
say('Hello') // 'Hello'
```

- We're using these default values. These have to be the last parameters

## 29. Debugging Part 1

### The debugger Keyword

- The debugger keyword stops the execution of JavaScript, and calls (if available) the debugging function.

- This has the same function as setting a breakpoint in the debugger.

```js
const sayHello = (message) => {
  console.log(message)
}

debugger

sayHello('Hello')
```

### using chrome devtools with debugger

- First thing I want you to notice is that when we refreshed the code, automatically stop execution.

### the source tab in devtools

### How do we use this debugger?

- We have a few buttons here at the bottom, and yours may be at a different spot.

- this play button basically continues execution.
- step over next function
- step into function

## 30. Debugging Part 2

### Let's have a little bit more fun with this.

- Let's pass in another variable.

```js
const sayHello = (message1, message2) => {
  console.log(message1)
  console.log(message2)
  const myDog = 'Max'
  console.log(myDog)
}

debugger

sayHello('Hello', 'there')
```

- You can already see the power of using this debugger

- if your code is something that's unexpected You can also put a debugger somewhere in your code,

### and this debugger can also go within this function here.

```js
const sayHello = (message1, message2) => {
  debugger
  console.log(message1)
  console.log(message2)
  const myDog = 'Max'
  console.log(myDog)
}

sayHello('Hello', 'there')
```

### chrome tools debugger

- if I click any of these numbers (for the lines in the source tab) This also stops execution.

- It does the exact same thing the debugger keyword does

## 31. Null and Undefined

### null

- If we were to declare a variable, let's say myDogName.

- If we didn't want to set this to a value, if we wanted to intentionally leave out a value, we can assign it to null.

- And that literally means that we don't have a value for that.

```js
let myDogName = null
// null
```

### undefined

- On other hand, if we was to initiate this with the let keyword but not assign it any value.

- My dog name will automatically equal undefined and undefined just literally means that you did not define this.

```js
//let myDogName = null
let myDogName
// undefine
// null
```

### null and undefined also represent Boolean values.

- Technically there are considered `falsy` values

### Boolean()

- Boolean() is a built in JavaScript object, and we can use it to convert different types to booleans

```js
console.log(Boolean(null)) //false
console.log(Boolean(undefined)) //false
console.log(Boolean('Hey')) //true
console.log(Boolean('')) //false
console.log(Boolean(2)) //true
console.log(Boolean(0)) //false
```

### falsy values

- null, Undefined, an empty string and zero all evaluate to false because they're all falsy values.

```js
null, undefined, "", 0 -> false
```

### truthy values

- any number but 0, any string

### How can we use truthy and falsy values?

```js
let myDogName

if (myDogName) {
  console.log('My dog has a name')
} else {
  console.log('My dog does NOT have a name') //
}
```
