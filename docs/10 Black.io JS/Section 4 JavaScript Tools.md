---
sidebar_position: 4
---

# Section 4: JavaScript Tools

## 32. JavaScript Tools Introduction

### There's a tool in JavaScript to fix just about anything.

- I'll be showing you the five most used tools available for each data type.

- I'll also give you examples of scenarios where you will use these tools.

- After we finish learning the tools available for strings, we'll move on to the other data types and start the process all over again.

## 33. Dev Tools

### something additional about the dev tools.

- docker sides

- settings

- theme

# ** tools for strings **

## 34. String Length

### length property

```js
const MyString = 'Hello, there'
console.log(myString.length) //12
```

### Where can we use this?

- With this length property, we're able to monitor the length of characters being put into those the input elements

## 36. Uppercase and Lowercase

### toUpperCase() method

```js
const myString = 'Hello, there'
console.log(myString.toUpperCase()) //HELLO, THERE
```

### toLowerCase() method

```js
const myString = 'HeLLo, there'
console.log(myString.toLwerCase()) //hello, there
```

### And how is this one useful?

- when a user logs into a website to enter your username and password, that username and password

- is then checked against the username and password is saved to that website.

- And the way we check if something equals another thing, we want to make sure the case is exactly the same.

## 38. Trim String

### trim() method

- we use this trim to remove any unnecessary characters and this trim Removes characters from the front and from the back.

```js
const myString = '  Marco    '
const myStringTrimmed = myString.trim()
console.log(myString.length) //11
console.log(myStringTrimmed.length) //5
```

## 39. Chaining (tool for dot notation)

### Chaining is nothing but adding an extra dot to use methods and properties in the same line

```js
const myString = '  Marco    '
const myStringTrimmed = myString.trim()
console.log(myString.length) //11
console.log(myStringTrimmed.length) //5
//////////////////////////////////////
const myString = '  Marco    '
console.log(myString.trim().length) //5
//////////////////////////////////////
console.log('  hi '.trim().toUpperCase()) //HI
```

## 40. index Of characters

### indexOf() method

- Sometimes you want to know where a specific letter shows up in a strng and the way you do that is by using this indexOf() method.

```js
const myName = 'Isaiah'

const index = myName.indexOf('s') // we can put it into a variable

console.log(index) //1
```

- 1 is printing out because s is that the 1 index

- indexOf() is `case sensitive`
- indexOf() gives you back the `first instance` it finds of that letter

- `indexOf() will returned a -1 if we enter a character that is not in the string`

### use case for this

- and one use case for this, is when we want to `make sure that the user enters a full name` by trying to get the index of a empty space

```js
const myName = 'IsaiahHarrison'

const index = myName.indexOf(' ')

console.log(index) //-1
```

### lastIndexOf() Method

```js
const myName = 'Isaiah'

const index = myName.lastIndexOf('s')

console.log(index) //4
```

      - lastIndexOf() gives us back the index of the `last occurrence` of the letter that we put inside the parenthesis

# ** tools for numbers **

## 41. Arithmetic Operators

### a little practice with the debugger and devtools

```js
debugger
const costOfApple = 0.5
const amountOfApplesToBuy = 10

const total = costOfApple * amountOfApplesToBuy
console.log(total)
```

### Numbers

- Numbers are whole numbers or fractions of numbers.

### arithmetic operators

- arithmetic operators perform arithmetic on numbers.

```js
//   + Addition
//   - Subtraction
//   * Multiplication
//   ** Exponentiation
//   / Division

const x = 5
const y = 12
console.log(`x + y = `, x + y)
console.log(`x - y = `, x - y)
console.log(`x * y = `, x * y)
console.log(`x ** y = `, x ** y)
console.log(`x / y = `, x / y)
```

## 43. Modulus

### Modulus operator

- modulus gives us back The remainder

```js
const a = 10
const b = 3

console.log(a % b) // 1
```

### how is this useful?

- we can use it for example to find even numbers on index items where the remainder is always 0

```js
const rowNumber = 8
const b = 2

console.log(rowNumber % b) // 0
```

## 44. Increment Decrement

### increment operator

- If I ever want to increment a number by one, I can do a ++.

```js
let a = 1

console.log('before', a) //1

a++

console.log('after', a) //2
```

- we can't assign another value to a constant So I'm using let here.

### decrement operator

- -- decreases this number by one.

```js
let a = 1

console.log('before', a) //1

a--

console.log('after', a) //0
```

### How can we use this?

- Well, let's say you're shopping for a bag or some website and you press at a cart.

- You go to the actual cart and you decide that you want another one of those.

- Usually it has those increment and decrement buttons.

## 45. Fixed Decimal Places

### toFixed() method

- let's say we wanted to` restrict` this number to only use two digits after the decimal place.

```js
const x = 2.546832

console.log('x:', x) // 2.546832

const y = x.toFixed(2)

console.log('y:', y) // 2.55
```

- whatever you put in the parenthesis is the amount of decimal places you want to allow.

- notice that y is also rounded up

## 46. Number to String

### toString() method

- toString() converters and number to a string

```js
const x = 10

console.log(x)
console.log(x.toString())
```

- Sometimes you want to pass in numbers, but in order to pass a number into that function, you have to first convert it to a string.

## 47. Round Up and Down

### the Math object

- There's another built in object in JavaScript, and that is this Math object.

- This also has some built in properties and methods.

### Math.floor()

- If you ever wanted to round down a, you can use Math.floor()

```js
const a = 10.5
console.log(Math.floor(a)) // 10
```

### Math.ceil()

- If you ever wanted to round up a, you can use Math.ceil()

```js
const a = 10.5
console.log(Math.ceil(a)) // 11
```

## 49. Randomizing in JavaScript

### Math.random()

- gives you a random number between 0 and 0.99

```js
const a = Math.random() // 0 - 0.9999
```

# ** tools for booleans and logic **

## 51. True or False with Booleans

### Boolean data type

- Boolean can have one of two values, true or false.

```js
const hasFoundKeys = true

const isLightOn = false

console.log('hasFoundKeys', hasFoundKeys) // hasFoundKeys true

console.log('isLightOn', isLightOn) //isLightOn false
```

- booleans are mostly used in something called, if else, statements

## 52. Logical with If Else

### if else statement

- If else statements allow you to add logic to your app and that logic is determined by a condition.

```js
const hasFoundKeys = true

if (hasFoundKeys) {
  console.log('I found my keys!!') //I found my keys!!
} else {
  console.log('Where are my keys??')
}
```

## 54. Logic with Else If

### else if

- else if allows us to `introduce more than one condition`

- In this case, we want to have three conditions

```js
const hasFoundAllOfMyKeys = true
const hasOnlyFoundHouseKeys = true

if (hasFoundAllOfMyKeys) {
  console.log('I found all of my keys') //I found all of my keys
} else if (hasOnlyFoundHouseKeys) {
  console.log('I only found my house keys')
} else {
  console.log('I found no keys!!!)
}
```

- `only one of these conditions can be run`

### You can add as many of these else if statements as you want

### in conclusion:

- `else {}` is use when you have some default condition

- `if()` statement is required to start this off, you can't start off with an else if()

- `else if()` is optional

## 55. Comparison Operators

### comparison operators are used in logical statements

```js
==  ===, !=, !==, >, <, >= <=
```

- Each of these can be used inside of these if else statements

### we use double equal (==) because the single equal (=) is use to assign values

### the double equal (==) and not equal (!=) check for value equality

- if we use `==` compare the number 2 and the string '2' will give us `true`
- if we use `!=` compare the number 2 and the string '2' will give us `false`

### the triple equal (===) and the double not equal (!==) check for value and type equality

- if we use `===` compare the number 2 and the string '2' will give us `false`
- if we use `!==` compare the number 2 and the string '2' will give us `true`

## 57. Comparison Operators with If Else Statements

### Comparison Operators with If Else Statements

```js
const a = 1
const b = 2

if (a > b) {
  console.log('a is greater than b')
} else {
  console.log('b is greater than a') // b is greater than a
}
```

## 58. Logical Operators

### Logical AND (&&)

- The logical AND (&&) operator (logical conjunction) for a set of boolean operands will be true if and only if all the operands are true. Otherwise it will be false.

```js
const a = 3
const b = -2

console.log(a > 0 && b > 0)
// expected output: false
```

- the operator returns the value of the first falsy operand encountered when evaluating from left to right, or the value of the last operand if they are all truthy.
  (The AND operator preserves non-Boolean values and returns them as they are:)

```js
result = '' && 'foo' // result is assigned "" (empty string)
result = 2 && 0 // result is assigned 0
result = 'foo' && 4 // result is assigned 4
```

### Logical OR (||)

- The logical OR (||) operator (logical disjunction) for a set of operands is true if and only if one or more of its operands is true. It is typically used with boolean (logical) values.

- When it is, it returns a Boolean value. However, the || operator actually returns the value of one of the specified operands, so if this operator is used with non-Boolean values, it will return a non-Boolean value.

```js
const a = 3
const b = -2

console.log(a > 0 || b > 0)
// expected output: true
```

## 59. Return Keyword Part 1

### return

- The return statement ends function execution and specifies a value to be returned to the function caller.

```js
function getRectArea(width, height) {
  if (width > 0 && height > 0) {
    return width * height
  }
  return 0
}

console.log(getRectArea(3, 4))
// expected output: 12

console.log(getRectArea(-3, 4))
// expected output: 0
```

### Description

- When a return statement is used in a function body, the execution of the function is stopped. If specified, a given value is returned to the function caller. For example, the following function returns the square of its argument, x, where x is a number.

```js
function square(x) {
  return x * x
}
const demo = square(3)
// demo will equal 9
```

# 60. Return Keyword Part 2

### the Returned value

- return specifies a value to be returned to the function caller

### stops execution

- when you have a return key inside of a function is stops execution of that function, So any code after the return keyword is not run at all.

# ** tolls for arrays **

## 62. Arrays

### The Array object

- The Array object enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.

### creating an array

- the minimum requirement to writing an array in opening and closing bracket `[data]`

- the data types and go between the brackets separated with commas

- You can put any type of data inside of these arrays

- JavaScript arrays are zero-indexed and each value within the array has its own index

```js
const myArray = [22, 'Max', true, [1, 2], 22]

console.log('myArray: ', myArray) // (5) [22, 'Max', true, [1, 2], 22]
```

### length property

- just like strings, arrays have a length property

```js
const myArray = [22, 'Max', true, [1, 2], 22]

console.log('myArray: ', myArray)
console.log('myArray length: ', myArray.length) //5
```

### indexOf() method

```js
const myArray = [22, 'Max', true, [1, 2], 22]

console.log('myArray: ', myArray)
console.log('myArray length: ', myArray.length)
console.log('indexOf: ', myArray.indexOf(22)) // 0
```

### lastIndexOf() method

```js
const myArray = [22, 'Max', true, [1, 2], 22]

console.log('myArray: ', myArray)
console.log('myArray length: ', myArray.length)
console.log('indexOf: ', myArray.indexOf(22))
console.log('lastIndexOf: ', myArray.lastIndexOf(22)) // 4
```

### Concepts are repeated in programming

- We can start to see a pattern here, Concepts are repeated in programming, and that's why it's so important to understand the concepts when developing.

## 64. Array Push() method

### Arrays properties and methods

- just like Math, just like console And just like strings, arrays are also objects and objects have properties and methods attached to them.

- you can access these properties and methods using dot notation

### The push()

- The push() method adds one or more elements to the end of an array and returns the new length of the array.

```js
const myArray = [1, 2, 3, 4]

console.log(myArray) // (4) [1, 2, 3, 4]

myArray.push(5, true, 'max', { name: 'juan' }, [2, 3])

console.log(myArray) // (9) [1, 2, 3, 4, 5, true, 'max', {…}, Array(2)]
```

- we can add any data type we want.

```js
const myArray = [1, 2, 3, 4]

console.log(myArray) // (4) [1, 2, 3, 4]

myArray.push(5)

console.log(myArray) // // (5) [1, 2, 3, 4, 5]
```

## 66. Array Includes() method

### The includes() method

- The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

```js
const myArray = [1, 2, 3, 4, 30, 2, 32]

const hasTheNumber32 = myArray.includes(32)
const hasTheNumber100 = myArray.includes(100)

console.log(hasTheNumber32) //true
console.log(hasTheNumber100) //false
```

## 67. Array filter() method

### The filter() method

- The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

- shallow copy (a copy whose properties share the same references as those of the source object from which the copy was made.)

```js
// create an array with elements that contain the letter a
const myArray = ['max', 'joe', 'dana', 'sarah']

const filteredArray = myArray.filter((data) => {
  return data.indexOf('a') !== -1
})

console.log(myArray) //(4) ['max', 'joe', 'dana', 'sarah']
console.log(filteredArray) // (3) ['max', 'dana', 'sarah']
```

- the return keyword will give us a boolean, and this Boolean defines how you want to filter this array.

- filter() iterates all the array elements and will keep the ones returning true

- filter() also returns a filtered array that we can assign to a new constant

## 68. Array find() method

### The find() method

- The find() method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

```js
const myArray = ['max', 'joe', 'dana', 'sarah']

const x = myArray.find((data) => {
  return data.length > 3
})

console.log(x) // dana
```

## 69. Array pop() and unshift() methods

### The pop() method

- The pop() method removes the last element from an array and returns that element. This method changes the length of the array.

```js
const myArray = ['max', 'joe', 'dana', 'sarah']

console.log(myArray) // (4) ['max', 'joe', 'dana', 'sarah']

myArray.pop()

console.log(myArray) // (3) ['max', 'joe', 'dana']
```

### The unshift() method

- The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.

```js
const myArray = ['max', 'joe', 'dana', 'sarah']

console.log(myArray) // (4) ['max', 'joe', 'dana', 'sarah']

myArray.pop()

console.log(myArray) // (3) ['max', 'joe', 'dana']

myArray.unshift('sarah')

console.log(myArray) // (4) ['sarah', 'max', 'joe', 'dana']
```

# ** objects **

## 71. Objects

### An object

- An object is a collection of properties, and a property is an association between a name (or key) and a value. A property's value can be a function, in which case the property is known as a method.

- In JavaScript, an object is a standalone entity, with properties and type. A property of an object can be explained as a variable that is attached to the object. Object properties are basically the same as ordinary JavaScript variables, except for the attachment to objects.

### Object Literal in JavaScript

- An object literal in JavaScript allows us to create plain JavaScript objects. It consists of a list of key-value pairs, each separated by a comma and wrapped inside curly braces.

### Assigning an object to a variable

```js
const me = {
  myName: 'Isaiah',
  licenseNumber: 12345,
  sayHi: () => {
    console.log('Hi, my name is Isaiah')
  },
}
```

### dot notation

- You access the properties of an object with a simple dot-notation

```js
const me = {
  myName: 'Isaiah',
  licenseNumber: 12345,
  sayHi: () => {
    console.log('Hi, my name is Isaiah')
  },
}

console.log(me.licenseNumber)
console.log(me.myName)
me.sayHi()
```

### objects in real life vs Objects in JavaScript

- Objects in JavaScript, just as in many other programming languages, can be compared to objects in real life. The concept of objects in JavaScript can be understood with real life, tangible objects.

## 72. Object Dot Notation

### Dot notation

- Dot notation is one way to access a property of an object. To use dot notation, write the name of the object, followed by a dot (.), followed by the name of the property.

# ** loops **

## 74. for loop

### loops

- Loops offer a quick and easy way to do something repeatedly. in JavaScript when you loop, you're iterating over a variable or a value.

- Loops are handy, if you want to run the same code over and over again, each time with a different value.

### the for loop

- The `for` statement creates a loop with 3 optional expressions:

- Expression 1 is executed (one time) `before the execution of the code block`.(set the variable)

- Expression 2 defines the condition for executing the code block. (if condition is false exit the loop)

- Expression 3 is executed (every time) `after the code block has been executed.`

```js
const arr = [1, 2, 3, 4, 5, 6]

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i])
}
```

## 76. for in loop

### the for in loop

- the for in loop is meant to be used on objects.
- we could `output the key value pairs in a object` with help of a for in loop.

- 1. Let's say we have a loggedInUser object:

```js
const loggedInUser = {
  name: 'Max',
  age: 32,
  isAdmin: true,
}
```

- 2. we start with the for keyword, and then again we create a helper constant, but this constant will then actually hold the different property Names or keys as we can also call them.

- hence you very often named this `key`, But the name is up to you. We could also name it propertyName.

- The important thing to note, it's just that it will be the name, not the value and not both together. Just the name.

```js
const loggedInUser = {
  name: 'Max',
  age: 32,
  isAdmin: true,
}

for (const key)
```

- 3. Then we use the `in` keyword here, and then we point at the object through which we want to loop.

```js
const loggedInUser = {
  name: 'Max',
  age: 32,
  isAdmin: true,
}

for (const key in loggedInUser)
```

- 4. Now in the code block we can now console log key to see what's stored in there (all the property names)

```js
const loggedInUser = {
  name: 'Max',
  age: 32,
  isAdmin: true,
}

for (const key in loggedInUser) {
  console.log(key)
}
// name
// age
// isAdmin
```

- 5. if you want to get access to the values as well, We can console log the loggedInUser, and now dynamically access the different properties stored in the user.

- but dot notation won't work here since the property I want to access is actually different in every execution

```js
const loggedInUser = {
  name: 'Max',
  age: 32,
  isAdmin: true,
}

for (const key in loggedInUser) {
  console.log(key)
  console.log(loggedInUser.name) // dot notation will not work
}
```

- 6. but we can use bracket just like in arrays

- And between those square brackets, you can put the property name as a string. So for example, 'name', I could access this like that as well. And that would be equivalent to loggedInUser.name

```js
const loggedInUser = {
  name: 'Max',
  age: 32,
  isAdmin: true,
}

for (const key in loggedInUser) {
  console.log(key)
  console.log(loggedInUser['name'])
}
```

- 7. But since we have this syntax, we can now also not hard-code the propertyName as a string here, but instead refer to key. our helper constant here.

- And key indeed holds the different property names as strings. So therefore this line of code will dynamically access the values for those different propertyNames, which are different for every execution.

```js
const loggedInUser = {
  name: 'Max',
  age: 32,
  isAdmin: true,
}

for (const key in loggedInUser) {
  console.log(key)
  console.log(loggedInUser[key])
}
```

- This does not work with the dot notation because of you had loggedInUser.key, it would look for a property named key

## 78. forEach

### The forEach() method

- an easier way to iterate over an array

- The forEach() method executes a provided function once for each array element.

- forEach() is an array method and it takes an anonymous function that takes 2 parameters

- The first one is data (this can be named whatever you want.)

- the second one is the index (And this can be named whatever you want as well.)

```js
const arr = ['hey', 'hi', 'hello']

arr.forEach((data, index) => {
  console.log(data)
  console.log(index)
  console.log('======================')
})

// hey
// 0
// ====================
// hi
// 1
// ====================
// hello
// 2
// ====================
```

- Now, if we don't have use for this index, we don't have to include this here.

```js
const arr = ['hey', 'hi', 'hello']

arr.forEach((data) => {
  console.log(data)
})
// hey
// hi
// hello
```

### forEach() is a lot more simplified than using for loops but only for arrays

## 79. map()

### the map() method

- The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

- just like forEach(), map() has data and it also has an index

```js
const arr = ['hey', 'hi', 'hello']

arr.map((data, index) => {
  console.log(data)
  console.log(index)
})
// hey
// 0
// hi
// 1
// hello
// 2
```

- And just like forEach(), We don't have to use this index we don't need it.

```js
const arr = ['hey', 'hi', 'hello']

arr.map((data) => {
  console.log(data)
})
// hey
// hi
// hello
```

### forEach vs map()

- the difference between forEach() and map() is that map() returns an array.

```js
const arr = ['hey', 'hi', 'hello']

const myArray = arr.map((data) => {
  return data
})

console.log(myArray)
// (3) ['hey', 'hi', 'hello']
```

// this ^ in equal to this V

```js
const arr = ['hey', 'hi', 'hello']

const myArray = arr.map((data) => data)

console.log(myArray)
// (3) ['hey', 'hi', 'hello']
```

### we can manipulate the returned array

```js
const arr = [1, 2, 3]

const myArray = arr.map((data) => data * 3)

console.log(arr) // (3) [1, 2, 3]
console.log(myArray) // (3) [3, 6, 9]
```

# ** DOM manipulation **

## 80. The DOM P1

### the document object

- document has the properties and methods to manipulate the DOM or the document object model

### getElementById()

- We can target different HTML elements by using this getElementById(), This is helping grab something by an ID.

```js
const div = document.getElementById('myDiv')

console.log(div) //<div id="myDiv"></div>
```

- now div is also an object and we have properties and methods available to us

- This is how we would change the background color, the height and the width

```js
const div = document.getElementById('myDiv')

console.log(div) //<div id="myDiv"></div>

div.style.backgroundColor = 'red'
div.style.height = '200px'
div.style.width = '200px'
```

## 81. The DOM P2

### querySelector()

- with querySelector() we target the selectors in the same way as in css using #

```js
// const div = document.getElementById('myDiv')
const div = document.querySelector('#myDiv')

console.log(div) //div#myDiv

div.style.backgroundColor = 'orange'
div.style.height = '200px'
div.style.width = '200px'
```

### getElementsByClassName()

- getElementsByClassName() let us select multiple elements with the same class name

- if we console log the returned value we can see it returns an HTMLCollection

```js
// const div = document.getElementById('myDiv')
// const div = document.querySelector('#myDiv')
const divs = document.getElementsByClassName('myDivClass')

console.log(divs) //HTMLCollection(2) [div.myDivClass, div.myDivClass]

// div.style.backgroundColor = 'orange'
// div.style.height = '200px'
// div.style.width = '200px'
```

### HTMLCollection

- HTMLCollections are very similar to arrays, we'll treat them like arrays for now.

### loop over an HTMLCollection

- just like arrays we are able to loop over this HTMLCollection using a for loop

```js
// const div = document.getElementById('myDiv')
// const div = document.querySelector('#myDiv')
const divs = document.getElementsByClassName('myDivClass')

// console.log(divs)
for (let i = 0; i < divs.length; i++) {
  console.log(divs[i])
}
// div.style.backgroundColor = 'orange'
// div.style.height = '200px'
// div.style.width = '200px'
```

- with that we can style both off those divs

```js
// const div = document.getElementById('myDiv')
// const div = document.querySelector('#myDiv')
const divs = document.getElementsByClassName('myDivClass')

// console.log(divs)
for (let i = 0; i < divs.length; i++) {
  const div = divs[i]

  div.style.backgroundColor = 'orange'
  div.style.height = '200px'
  div.style.width = '200px'
  div.style.margin = '2px'
}
```

### querySelectorAll()

- querySelectorAll() returns an HTMLCollection of all the elements with the provided selector

```js
// const div = document.getElementById('myDiv')
// const div = document.querySelector('#myDiv')
// const divs = document.getElementsByClassName('myDivClass')
const divs = document.querySelectorAll('.myDivClass')

// console.log(divs)
for (let i = 0; i < divs.length; i++) {
  const div = divs[i]

  div.style.backgroundColor = 'black'
  div.style.height = '200px'
  div.style.width = '200px'
  div.style.margin = '2px'
}
```

## 82. The DOM P3

### manipulate attributes in the DOM

### setAttribute()

- setAttribute() takes to parameters

- The first one is the attribute that you want to set

- The second one is the value that you want to set it to

```js
const catPicUrl = 'https://idsb.tmgrup.com.tr/ly/uploads/images/2021/09/08/142779.jpg'

const img = document.querySelector('img')
img.style.height = '200px'
img.setAttribute('src', catPicUrl)
img.setAttribute('alt', 'cat picture')
```

### removeAttribute()

- removeAttribute() takes one parameter, the attribute that you want to remove.

```js
const img = document.querySelector('img')
img.style.height = '200px'
img.removeAttribute('src')
```
