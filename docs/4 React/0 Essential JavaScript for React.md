---
sidebar_position: 0
---

# JS for React

### **=>** Section Overview

>

#### React and JavaScript Fundamentals

- React is a JavaScript library that requires a good understanding of essential JavaScript fundamentals.

- This section is especially useful if your JavaScript skills are a bit rusty.

#### Topics to Review

- Destructuring

- Spread operator

- Template literals

- Ternaries

- Asynchronous JavaScript with promises and async/await

#### Working with Immutable Arrays in React

- In React, working with immutable arrays is a common task.

- We will cover important array methods such as:

  - Map

  - Filter

  - Reduce

  - Sort

#### Skipping the Section

- If you are already familiar with all these concepts, feel free to skip this entire section and move on to the next one.

---

### **=>** Destructuring Objects and Arrays

- Destructuring is a feature in JavaScript that allows you to extract values from objects or arrays and assign them to variables in a more concise and readable way.

- It provides a convenient syntax for unpacking values from data structures.

#### Destructuring Objects:

- When destructuring objects, you can extract specific properties and assign them to variables with the same name.

- Here's an example:

```js
const person = {
  name: 'John',
  age: 25,
  city: 'New York',
}
const { name, age } = person
console.log(name) // Output: John
console.log(age) // Output: 25
```

- In the above code, we have an object called `person` with properties `name` , `age` , and `city` .

- Using object destructuring, we extract the `name` and `age` properties and assign them to variables with the same names.

- We can then access these variables and log their values to the console.

#### Destructuring Arrays:

- Destructuring can also be applied to arrays.

- You can extract elements from an array and assign them to variables.

- Here's an example:

```js
const numbers = [1, 2, 3, 4, 5]
const [first, second, ...rest] = numbers
console.log(first) // Output: 1
console.log(second) // Output: 2
console.log(rest) // Output: [3, 4, 5]
```

- In the above code, we have an array called `numbers` with elements 1, 2, 3, 4, and 5.

- Using array destructuring, we extract the first and second elements and assign them to variables `first` and `second` .

- The remaining elements are extracted using the spread operator `...` and assigned to the `rest` variable.

- We can then access these variables and log their values to the console.

Destructuring objects and arrays can make your code more concise and readable, especially when dealing with complex data structures.

It allows you to extract only the values you need and assign them to variables with meaningful names.

#### **Examples of destructuring in React**

- Here are some examples of destructuring in React:

#### 1. Destructuring props:

```jsx
const MyComponent = ({ name, age }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{age}</p>
    </div>
  )
}
```

- In this example, we are destructuring the `name` and `age` props directly in the function parameters.

- This allows us to use these props directly as variables within the component.

#### 2. Destructuring state:

```jsx
const [count, setCount] = useState(0)
```

- In this example, we are using the `useState` hook from React to create a state variable called `count` and a function called `setCount` to update the state.

- We are using array destructuring to assign the initial value of `count` and the function `setCount` to the respective variables.

#### 3. Destructuring context:

```jsx
const { theme, toggleTheme } = useContext(ThemeContext)
```

- In this example, we are using the `useContext` hook to access a context called `ThemeContext` . We are destructuring the `theme` and `toggleTheme` values from the context, allowing us to use them directly in the component.

- Destructuring in React can help simplify code by extracting specific values from props, state, or context objects.

- It improves readability and reduces the need for repetitive object or array access.

---

### **=>** Rest/Spread Operator in JavaScript

>

#### Rest Operator:

- The Rest operator, denoted by three dots (...), allows you to represent an indefinite number of arguments as an array.

- It gathers the remaining arguments into an array, making it easier to work with variable-length argument lists or arrays.

  Example:

```js
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0)
}
console.log(sum(1, 2, 3, 4, 5)) // Output: 15
```

- In the above code, the Rest operator is used in the `sum` function to gather all the arguments passed to it into an array called `numbers` .

- The `reduce` method is then used to calculate the sum of all the numbers in the array.

#### Spread Operator:

- The Spread operator, also denoted by three dots (...), allows you to expand elements from an array or object.

- It enables you to spread the contents of an array or object into another array or object.

#### Spread with Arrays:

```js
const arr1 = [1, 2, 3]
const arr2 = [...arr1, 4, 5]
console.log(arr2) // Output: [1, 2, 3, 4, 5]
```

- In the above code, the Spread operator is used to spread the elements of `arr1` into a new array `arr2` .

- This creates a new array with all the elements from `arr1` , followed by the additional elements 4 and 5.

#### Spread with Objects:

```js
const obj1 = { name: 'John', age: 25 }

const obj2 = { ...obj1, city: 'New York' }

console.log(obj2) // Output: { name: 'John', age: 25, city: 'New York' }
```

- In this example, the Spread operator is used to spread the properties of `obj1` into a new object `obj2` .

- This creates a new object with all the properties from `obj1` , followed by the additional property `city` .

- The Rest and Spread operators are powerful features in JavaScript that provide flexibility in working with arrays and objects.

- They make it easier to handle variable-length arguments, create new arrays or objects, and manipulate existing ones.

#### **Uses of the Rest and spread operators in React**

- The Rest and Spread operators in React have several uses. Here are some examples:

1.  Rest Operator:

- Collecting remaining props in a component:

```jsx
const MyComponent = ({ name, age, ...restProps }) => {
  // Access name and age
  // restProps will contain any other props passed to the component
}
```

- Gathering arguments into an array:

```jsx
const sum = (...numbers) => {
  return numbers.reduce((total, num) => total + num, 0)
}
console.log(sum(1, 2, 3, 4, 5)) // Output: 15
```

- Combining with destructuring to extract specific properties:

```jsx
const { name, age, ...restProps } = person
// Access name and age
// restProps will contain any other properties of the person object
```

2. Spread Operator:

- Spreading an array into individual elements:

```jsx
const arr1 = [1, 2, 3]
const arr2 = [...arr1, 4, 5]
console.log(arr2) // Output: [1, 2, 3, 4, 5]
```

- Spreading an object into a new object:

```jsx
const obj1 = { name: 'John', age: 25 }
const obj2 = { ...obj1, city: 'New York' }
console.log(obj2) // Output: { name: 'John', age: 25, city: 'New York' }
```

- Merging multiple objects into one:

```jsx
const obj1 = { name: 'John' }
const obj2 = { age: 25 }
const mergedObj = { ...obj1, ...obj2 }
console.log(mergedObj) // Output: { name: 'John', age: 25 }
```

- These operators provide a concise and efficient way to work with arrays, objects, and component props in React.
- They help simplify code and make it more readable.

---

### **=>** Template Literals

- Template Literals, also known as Template Strings, are a feature in JavaScript that allow for easier string interpolation and multiline strings.

- They are denoted by backticks instead of single or double quotes.

- Template Literals support the use of placeholders and expressions within the string.

#### Examples:

>

#### 1. Basic String Interpolation:

```js
const name = 'John'
const greeting = `Hello, ${name}!`
console.log(greeting) // Output: Hello, John!
```

In the above example, the `${name}` placeholder is used within the template literal to interpolate the value of the `name` variable into the string.

#### 2. Multiline Strings:

```js
const message = `
     This is a multiline
     string using
     template literals.
   `
console.log(message)

// Output:
// - This is a multiline
// - string using
// - template literals.
```

- With template literals, you can create multiline strings without the need for manual line breaks or concatenation.

#### 3. Expression Interpolation:

```js
const num1 = 5
const num2 = 10
const result = `The sum of ${num1} and ${num2} is ${num1 + num2}.`
console.log(result) // Output: The sum of 5 and 10 is 15.
```

Template literals can also include expressions within the placeholders, allowing you to perform calculations or include dynamic values directly in the string.

#### 4. Tagged Templates:

```js
function formatCurrency(strings, ...values) {
  let result = ''
  strings.forEach((string, i) => {
    result += string
    if (values[i]) {
      result += `$${values[i].toFixed(2)}`
    }
  })
  return result
}
const price = 19.99
const quantity = 3
const total = formatCurrency`The total cost is ${price * quantity}.`
console.log(total) // Output: The total cost is $59.97.
```

- Tagged templates allow you to customize the behavior of template literals by passing them through a function.

- The function receives an array of strings and an array of interpolated values, which can be manipulated and returned as desired

- Template literals provide a more convenient and readable way to work with strings in JavaScript, especially when it comes to string interpolation and multiline strings.

- They are widely used in modern JavaScript development.

#### **Uses and Examples of Template Literals in React**

- Template Literals in React can be used in various scenarios to simplify string interpolation and create dynamic content.
- Here are some common use cases and examples:

#### 1. Rendering Dynamic Content:

- Template literals can be used to render dynamic content within JSX components.
- For example:

```jsx
const name = 'John'
const greeting = `Hello, ${name}!`
function Greeting() {
  return <h1>{greeting}</h1>
}
```

- In this example, the template literal is used to interpolate the value of the `name` variable into the greeting message.

#### 2. Creating Dynamic CSS Classes:

- Template literals can also be used to create dynamic CSS classes based on certain conditions. For example:

```jsx
const isActive = true
const buttonClass = `button ${isActive ? 'active' : 'inactive'}`
function Button() {
  return <button className={buttonClass}>Click Me</button>
}
```

- In this example, the template literal is used to conditionally add the `active` or `inactive` class to the button based on the value of the `isActive` variable.

#### 3. Generating Dynamic URLs:

- Template literals can be used to generate dynamic URLs by interpolating values into the string. For example:

```jsx
const userId = 123
const profileUrl = `https://example.com/profile/${userId}`
function ProfileLink() {
  return <a href={profileUrl}>Go to Profile</a>
}
```

- In this example, the template literal is used to generate a dynamic URL for the user's profile based on the `userId` variable.

- Template literals in React provide a flexible and concise way to work with dynamic content, CSS classes, and URLs.

- They enhance the readability and maintainability of your code.

---

### **=>** Ternaries Instead of if/else Statements

- The ternary operator is a shorthand way of writing an if-else statement in JavaScript.

- It takes three operands: a condition, a value to return if the condition is true, and a value to return if the condition is false.

- The syntax of the ternary operator is as follows:

  ```js
  condition ? value1 : value2
  ```

  - If the condition is true, the operator returns value1. If the condition is false, it returns value2.

#### Example 1: Check if a Number is Even or Odd

Here is an example that uses the ternary operator to check if a number is even or odd:

```js
let num = 6
let result = num % 2 === 0 ? 'Even' : 'Odd'
console.log(result) // Output: Even
```

- In this example, the condition is `num % 2 === 0` , which checks if `num` is divisible by 2 with no remainder.

- If the condition is true, the operator returns the string "Even".

- If the condition is false, it returns the string "Odd".

#### Example 2: Check if a User is Logged In

Here is another example that uses the ternary operator to check if a user is logged in:

```js
let isLoggedIn = true
let message = isLoggedIn ? 'Welcome back!' : 'Please log in.'
console.log(message) // Output: Welcome back!
```

In this example, the condition is `isLoggedIn` , which checks if the user is logged in. If the condition is true, the operator returns the string "Welcome back!". If the condition is false, it returns the string "Please log in.".

#### **Using Ternary Operator in React**

- The ternary operator can be very useful when working with conditional rendering in React components.

- It allows us to conditionally render different parts of the UI based on certain conditions. Here are a few examples:

#### Example 1: Rendering a Component based on a Condition

- Let's say we have a boolean variable `isLoggedIn` that determines whether a user is logged in or not.

- We can use the ternary operator to conditionally render different components based on this variable.

```jsx
{
  isLoggedIn ? <WelcomeComponent /> : <LoginComponent />
}
```

- In this example, if `isLoggedIn` is true, the `<WelcomeComponent />` will be rendered.

- Otherwise, the `<LoginComponent />` will be rendered.

#### Example 2: Conditional Styling

- We can also use the ternary operator to conditionally apply different styles to an element based on a condition.

- Let's say we have a variable `isHighlighted` that determines whether an element should be highlighted or not.

```jsx
<div className={isHighlighted ? 'highlighted' : 'normal'}>Some Content</div>
```

- In this example, if `isHighlighted` is true, the element will have the CSS class `highlighted` , otherwise it will have the class `normal` .

#### Example 3: Conditional Rendering of Content

- We can use the ternary operator to conditionally render specific content within a component.

- Let's say we have a variable `showContent` that determines whether some content should be displayed or not.

```jsx
<div>{showContent && <p>This content will only be rendered if showContent is true.</p>}</div>
```

- In this example, if `showContent` is true, the `<p>` element will be rendered. Otherwise, it will not be rendered at all.

- These are just a few examples of how the ternary operator can be used in React components for conditional rendering and styling.

- It provides a concise and readable way to handle conditional logic within JSX.

---

### **=>** Arrow Functions

- Arrow functions are a concise way of writing function expressions in JavaScript.

- They were introduced in ES6 and provide a more compact syntax compared to traditional function expressions.

- Here's an explanation with examples:

#### Basic Syntax

- The syntax for arrow functions is as follows:

```js
const functionName = parameters => {
  // function body
}
```

- Arrow functions are defined using the `=>` syntax, also known as the "fat arrow".

- They can have zero or more parameters enclosed in parentheses, followed by the arrow `=>` , and then the function body enclosed in curly braces `{}` .

#### Example 1: Basic Arrow Function

- Here's a simple example of an arrow function that takes two parameters and returns their sum:

```js
const sum = (a, b) => {
  return a + b
}

console.log(sum(3, 5)) // Output: 8
```

- In this example, the arrow function `sum` takes two parameters `a` and `b` , and returns their sum using the `+` operator.

#### Example 2: Single Expression Arrow Function

- If an arrow function has only one expression in its body, the `curly braces` and `return` keyword can be omitted for a more concise syntax:

```js
const multiply = (a, b) => a * b
console.log(multiply(2, 4)) // Output: 8
```

- In this example, the arrow function `multiply` takes two parameters `a` and `b` , and directly returns their product without using curly braces or the `return` keyword.

#### Example 3: Arrow Function with No Parameters

- Arrow functions can also be used without any parameters:

```js
const greet = () => {
  console.log('Hello!')
}

greet() // Output: Hello!
```

- In this example, the arrow function `greet` has no parameters and simply logs "Hello!" to the console when invoked.

- Arrow functions have lexical scoping of `this` keyword, which means they inherit the `this` value from the enclosing context. This behavior can be different from traditional function expressions, which have their own `this` value.

- Arrow functions are commonly used for shorter, more concise function definitions, especially when working with higher-order functions like `map` , `filter` , and `reduce` .

I hope this helps! Let me know if you have any further questions.

#### **Uses of Arrow Functions in React**

- Arrow functions are commonly used in React for various purposes. Here are a few common use cases:

#### 1. Event Handlers

- Arrow functions are often used as event handlers in React components.
- They help in maintaining the correct context of `this` within the component.
- Since arrow functions don't bind their own `this` value, they inherit the `this` value from the surrounding scope.
- This makes it easier to access component properties and methods.

```jsx
class MyComponent extends React.Component {
  handleClick = () => {
    // Handle click event
  }
  render() {
    return <button onClick={this.handleClick}>Click Me</button>
  }
}
```

- In this example, the arrow function `handleClick` is used as the click event handler for the button.
- It allows us to access the component's properties and methods using `this` .

#### 2. Mapping Arrays

- Arrow functions are often used with array `map()` method to render lists of elements in React.
- They provide a concise way to iterate over an array and generate dynamic JSX content.

```jsx
const MyComponent = () => {
  const items = ['Apple', 'Banana', 'Orange']
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  )
}
```

- In this example, the arrow function is used within the `map()` method to generate a list of `<li>` elements based on the `items` array. The arrow function takes each item and its index as arguments and returns the JSX element.

#### 3. Functional Components

- Arrow functions are often used to define functional components in React.
- These components are stateless and don't require the use of `this` .
- They are concise and easy to read.

```jsx
const MyComponent = () => {
  return (
    <div>
      <h1>Hello, World!</h1>
    </div>
  )
}
```

- In this example, the arrow function defines a functional component `MyComponent` that renders a simple `<h1>` element.
- Functional components are a recommended approach for simpler components that don't need to manage state.

- These are just a few examples of how arrow functions are commonly used in React.
- They provide a more concise syntax and help in maintaining the correct context within components.

---

### **=>** Short-Circuiting And Logical Operators: &&, ||, ??

- Short-circuiting and logical operators are used in JavaScript to perform logical operations and handle conditional logic efficiently.

- Let's explain the three commonly used logical operators: `&&` (AND), `||` (OR), and `??` (nullish coalescing) with examples.

#### Logical AND ( `&&` ) Operator

- The logical AND operator ( `&&` ) returns the first falsy value encountered or the last truthy value if all operands are truthy.

- It short-circuits when the first falsy value is found.

```js
const a = 5
const b = 10
const result = a > 0 && b > 0
console.log(result) // Output: true
```

- In this example, the expression `a > 0 && b > 0` will evaluate to `true` because both `a` and `b` are greater than `0` .

- The logical AND operator short-circuits and doesn't evaluate the second operand since the first operand is already truthy.

#### Logical OR ( `||` ) Operator

- The logical OR operator ( `||` ) returns the first truthy value encountered or the last falsy value if all operands are falsy.

- It short-circuits when the first truthy value is found.

```js
const x = 0
const y = 10
const result = x || y
console.log(result) // Output: 10
```

- In this example, the expression `x || y` will evaluate to `10` because `x` is falsy (0) and `y` is truthy (non-zero).

- The logical OR operator short-circuits and returns the second operand `y` without evaluating further.

#### Nullish Coalescing ( `??` ) Operator

The nullish coalescing operator ( `??` ) returns the right-hand side operand if the left-hand side operand is `null` or `undefined` . It does not short-circuit based on truthy or falsy values like `||` does.

```js
const x = null
const y = 10
const result = x ?? y
console.log(result) // Output: 10
```

- In this example, the expression `x ?? y` will evaluate to `10` because `x` is `null` .

- The nullish coalescing operator does not short-circuit based on the falsy value of `x` but checks specifically for `null` or `undefined` values.

- These logical operators are commonly used in JavaScript to handle conditional logic, perform null checks, and control the flow of execution.

- They provide a concise and efficient way to handle logical operations in your code.

#### **Uses of Short-Circuiting and Logical Operators in React**

- Short-circuiting and logical operators ( `&&` , `||` , `??` ) are commonly used in React to handle conditional rendering, default values, and more.

- Here are some examples of their uses in React:

#### Conditional Rendering

- Short-circuiting and logical operators are often used for conditional rendering of components or elements based on certain conditions.

```jsx
const MyComponent = ({ isLoggedIn }) => {
  return (
    <div>
      {isLoggedIn && <WelcomeMessage />}{' '}
      {/* Renders WelcomeMessage component if isLoggedIn is true */}
      {isLoggedIn || <LoginButton />} {/* Renders LoginButton component if isLoggedIn is false */}
    </div>
  )
}
```

- In this example, the `WelcomeMessage` component is rendered only if `isLoggedIn` is true, thanks to the `&&` operator.

- The `LoginButton` component is rendered if `isLoggedIn` is false, thanks to the `||` operator.

#### Default Values

- Logical operators can be used to set default values for props or variables in React components.

```jsx
const MyComponent = ({ name }) => {
  const defaultName = name || 'Guest' // Sets default name as "Guest" if name is falsy
  return <h1>Hello, {defaultName}!</h1>
}
```

- In this example, if the `name` prop is falsy (e.g., undefined or empty string), the `defaultName` variable will be set to "Guest".

- This ensures that a default value is used when `name` is not provided.

#### Nullish Coalescing

- The nullish coalescing operator ( `??` ) can be used to provide default values specifically for `null` or `undefined` values.

```jsx
const MyComponent = ({ count }) => {
  const displayCount = count ?? 0 // Sets displayCount as 0 if count is null or undefined
  return <p>Count: {displayCount}</p>
}
```

- In this example, if the `count` prop is `null` or `undefined` , the `displayCount` variable will be set to 0.

- This ensures that a default value is used only for nullish values, not for other falsy values like 0 or an empty string.

- These are just a few examples of how short-circuiting and logical operators are used in React.

- They provide a concise and efficient way to handle conditional rendering and set default values in React components.

---

### **=>** Optional Chaining

- Optional chaining is a feature introduced in JavaScript that allows you to safely access nested properties or methods of an object without worrying about potential null or undefined values.

- It is denoted by the question mark ( `?` ) followed by a dot ( `.` ) operator.

#### Accessing Nested Property

- Here's an explanation of optional chaining with code examples:

- Consider the following object structure:

```js
const person = {
  name: 'John',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'New York',
    country: 'USA',
  },
}
```

- Without optional chaining, if you want to access the `country` property of the `address` object, you would typically write:

```js
const country = person.address.country
```

- However, if any intermediate property is null or undefined, it would result in an error.

- To avoid this, you can use optional chaining:

```js
const country = person.address?.country
```

- In this case, if the `address` property is null or undefined, the expression will short-circuit and return undefined instead of throwing an error.

- It provides a safe way to access nested properties without worrying about potential null or undefined values.

#### Using Optional Chaining with Methods

- Optional chaining can also be used with method calls.

- Consider the following example:

```jsx
const person = {
  name: 'John',
  age: 30,
  getAddress() {
    return this.address
  },
}
```

To call the `getAddress` method and then access the `country` property, you can use optional chaining as follows:

```js
const country = person.getAddress?.().country
```

In this case, if the `getAddress` method is not defined, the expression will short-circuit and return undefined.

#### Benefits of Optional Chaining

- Optional chaining is particularly useful when working with data from APIs, where certain properties may be missing or undefined.

- It provides a convenient way to handle such scenarios without writing verbose null/undefined checks.

- Note that optional chaining is supported in modern JavaScript environments (ES2020 and later) and may require transpilation for older environments.

#### **Uses of Optional Chaining in React**

- Optional chaining can be particularly useful in React applications when working with nested props or state values.

- Here are a few common use cases:

#### 1. Accessing nested props or state:

- Instead of writing verbose null checks, you can use optional chaining to safely access nested properties without worrying about potential null or undefined values.

- For example, if you have a nested prop `user` and want to access the `name` property, you can use optional chaining like this: `user?.name` .

```jsx
import React from 'react'
const UserComponent = ({ user }) => {
  return (
    <div>
      <h3>User Details:</h3>
      <p>Name: {user?.name}</p>
      <p>Email: {user?.email}</p>
      <p>
        Address: {user?.address?.street}, {user?.address?.city}, {user?.address?.country}
      </p>
    </div>
  )
}
export default UserComponent
```

#### 2. Calling methods on nested components:

- Optional chaining can also be used when calling methods on nested components.

- For instance, if you have a nested component `childComponent` with a method `handleClick` , you can use optional chaining to call the method without causing errors: `childComponent?.handleClick()` .

```jsx
import React from 'react'
const ParentComponent = () => {
  const childComponent = {
    handleClick: () => {
      console.log('Button clicked!')
    },
  }
  return (
    <div>
      <h3>Parent Component</h3>
      <button onClick={childComponent?.handleClick}>Click me</button>
    </div>
  )
}

export default ParentComponent
```

- In the code example above, we have a parent component called `ParentComponent` that renders a button.

- The `childComponent` object is a nested component with a `handleClick` method.

- We use optional chaining ( `?.` ) to call the `handleClick` method when the button is clicked.

- This ensures that if the `childComponent` or `handleClick` method is undefined, the code will not throw an error.

#### 3. Handling async data:

- When working with async data, there might be scenarios where certain properties are not available until the data is fetched.

- Optional chaining allows you to safely access these properties without causing errors, making it easier to handle async data in React components.

```jsx
import React, { useState, useEffect } from 'react'
const AsyncDataComponent = () => {
  const [data, setData] = useState(null)
  useEffect(() => {
    fetchData()
  }, [])
  const fetchData = async () => {
    // Simulating async data fetching
    const response = await fetch('https://api.example.com/data')
    const json = await response.json()
    setData(json)
  }
  return (
    <div>
      <h3>Async Data Component</h3>
      {data?.name && <p>Name: {data.name}</p>}
      {data?.age && <p>Age: {data.age}</p>}
      {data?.address?.city && <p>City: {data.address.city}</p>}
    </div>
  )
}
export default AsyncDataComponent
```

- In the code example above, we have a component called `AsyncDataComponent` that fetches async data and renders it.

- The `data` state variable is initially set to `null` and gets updated with the fetched data using the `setData` function.

- We use optional chaining ( `?.` ) to safely access the properties of the `data` object. This allows us to conditionally render the data without causing errors if certain properties are not available until the data is fetched.

- For example, we check if `data.name` , `data.age` , and `data.address.city` exist before rendering them.

- This ensures that the component handles the async data gracefully and does not throw errors if the properties are undefined or null.

- Note that in this example, we assume the async data is an object with properties like `name` , `age` , and `address` . You would need to modify the code according to your specific data structure.

#### 4. Conditional rendering:

- Optional chaining can be useful for conditional rendering based on the existence of nested properties or values.

- You can use optional chaining to check if a nested property exists and conditionally render components or content based on that.

  Note that optional chaining is supported in modern JavaScript environments (ES2020 and later) and may require transpilation for older environments.

```jsx
import React from 'react'

const ConditionalRenderingComponent = ({ user }) => {
  return (
    <div>
      <h3>Conditional Rendering Component</h3>
      {user?.isLoggedIn ? <p>Welcome, {user?.name}!</p> : <p>Please log in to continue.</p>}
      {user?.isAdmin && <p>You have admin privileges.</p>}
    </div>
  )
}
export default ConditionalRenderingComponent
```

- In the code example above, we have a component called `ConditionalRenderingComponent` that receives a `user` object as a prop.

- We use optional chaining ( `?.` ) to conditionally render different components or content based on the existence of nested properties.

- In the first conditional rendering example, we check if `user?.isLoggedIn` is `true` .

- If it is, we render a welcome message with the user's name.

- Otherwise, we render a message asking the user to log in.

- In the second example, we check if `user?.isAdmin` is `true` .

- If it is, we render a message indicating that the user has admin privileges.

- By using optional chaining, we can safely access nested properties and conditionally render components or content based on their existence.

- This makes it easier to handle conditional rendering in React components.

---

### **=>** Introduction to Functional Array Methods

- To build any meaningful React application, it is crucial to master the three functional array methods in JavaScript - map, filter, and reduce.

- These methods are called functional because they do not mutate the original array, but instead return a new array based on the original one.

- Functional array methods are a set of built-in methods in JavaScript that provide a functional programming approach to working with arrays.

- These methods allow us to perform operations on arrays in a more concise and declarative manner.

- Some commonly used functional array methods include:

  - map : Iterates over an array and returns a new array with modified elements.

  - filter : Filters an array based on a given condition and returns a new array with the filtered elements.

  - reduce : Reduces an array to a single value by applying a function to each element and accumulating the result.

  - forEach : Executes a provided function once for each array element.

  - some : Checks if at least one element in the array satisfies a given condition.

  - every : Checks if all elements in the array satisfy a given condition.

- These functional array methods promote immutability and help in writing more readable and maintainable code.

- They are widely used in modern JavaScript development and are an essential part of functional programming concepts.

---

### **=>** The Array map Method

- The Array map method is a powerful tool in JavaScript that allows you to iterate over an array and apply a function to each element.

- This results in a new array with the modified values.

- It is a functional programming method that promotes immutability and provides a concise way to transform data in an array.

#### Syntax:

```js
array.map(function (currentValue, index, array) {
  // return modified value
})
```

- The `array` parameter represents the original array that you want to iterate over.

- The `currentValue` parameter represents the current element being processed.

- The `index` parameter represents the index of the current element being processed.

- The `array` parameter represents the original array on which the map method was called.

- Inside the map method, you provide a function that will be applied to each element of the array.

- This function can modify the element and return the modified value. The map method then creates a new array with these modified values.

#### Example:

```js
const numbers = [1, 2, 3, 4, 5]
const doubledNumbers = numbers.map(function (number) {
  return number * 2
})

console.log(doubledNumbers) // Output: [2, 4, 6, 8, 10]
```

- In this example, we have an array of numbers.

- By using the map method, we apply a function to each element of the array to double its value.

- The resulting array, `doubledNumbers` , contains the doubled values of the original array.

- The map method is a powerful tool for transforming data in an array without mutating the original array.

- It allows for concise and readable code when working with arrays in JavaScript.

#### **Uses of the Array map Method in React**

- The array map method is a powerful tool in React for transforming data in an array and rendering it in the UI.

- Here are some common uses of the array map method in React:

#### 1. Rendering lists:

```jsx
const blogPosts = [
  { id: 1, title: 'React Basics', content: '...' },
  { id: 2, title: 'React Hooks', content: '...' },
  { id: 3, title: 'React Router', content: '...' },
]
const BlogPostList = () => {
  return (
    <ul>
      {blogPosts.map(blogPost => (
        <li key={blogPost.id}>{blogPost.title}</li>
      ))}
    </ul>
  )
}
```

- In this example, the map method is used to iterate over the `blogPosts` array and render a list of blog post titles as list items.

- Each blog post is assigned a unique `key` prop to ensure efficient rendering and updates.

#### 2. Transforming data:

```jsx
const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'Alice' },
]
const UserDropdown = () => {
  return (
    <select>
      {users.map(user => (
        <option
          key={user.id}
          value={user.id}>
          {user.name}
        </option>
      ))}
    </select>
  )
}
```

- In this example, the map method is used to transform the `users` array into a dropdown menu of user names.

- Each user object is mapped to an option element with a unique `key` prop and the user's name as the displayed value.

#### 3. Creating dynamic components:

```jsx
const images = [
  { id: 1, src: 'image1.jpg', alt: 'Image 1' },
  { id: 2, src: 'image2.jpg', alt: 'Image 2' },
  { id: 3, src: 'image3.jpg', alt: 'Image 3' },
]
const ImageGallery = () => {
  return (
    <div>
      {images.map(image => (
        <img
          key={image.id}
          src={image.src}
          alt={image.alt}
        />
      ))}
    </div>
  )
}
```

- In this example, the map method is used to dynamically create image components based on the `images` array.

- Each image object is mapped to an img element with a unique `key` prop, and the image source and alt text are set dynamically.

#### 4. Filtering data:

```jsx
const products = [
  { id: 1, name: 'Product 1', inStock: true },
  { id: 2, name: 'Product 2', inStock: false },
  { id: 3, name: 'Product 3', inStock: true },
]
const ProductList = () => {
  const inStockProducts = products.filter(product => product.inStock)
  return (
    <ul>
      {inStockProducts.map(product => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  )
}
```

- In this example, the map method is combined with the filter method to render a list of products that are in stock.

- The `inStockProducts` array is created by filtering the `products` array based on the `inStock` property.

- The resulting array is then mapped to a list of product names.

Overall, the array map method is a versatile tool in React that can be used in various ways to transform and render data in the UI.

---

### **=>** The Array filter Method

- The Array filter method is a built-in JavaScript method that allows you to create a new array containing elements from the original array that meet a specific condition.

- It iterates through each element of the array and checks if the element satisfies the provided condition.

- If the condition is true, the element is included in the new array; otherwise, it is excluded.

- Here's an example of how to use the Array filter method:

```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const evenNumbers = numbers.filter(number => number % 2 === 0)
// The condition `number % 2 === 0` checks if the number is even
console.log(evenNumbers)
// Output: [2, 4, 6, 8, 10]
```

- In this example, the `numbers` array contains a list of numbers.

- The `filter` method is used to create a new array called `evenNumbers` , which only includes the even numbers from the original array.

- The condition `number % 2 === 0` checks if each number is divisible by 2 without a remainder, indicating it is an even number.

- The resulting `evenNumbers` array contains [2, 4, 6, 8, 10].

- The Array filter method is commonly used when you need to extract specific elements from an array based on certain criteria.

- It provides a concise and efficient way to filter data and create new arrays without modifying the original array.

#### **Uses of the Array filter Method in React**

- The Array filter method in React is often used to filter and manipulate data in an array before rendering it in the UI.
- Here are some common use cases of the Array filter method in React:

#### 1. Filtering data based on a condition:

```jsx
const users = [
  { id: 1, name: 'John', age: 25 },
  { id: 2, name: 'Jane', age: 30 },
  { id: 3, name: 'Alice', age: 28 },
]
const AdultUsers = () => {
  const adults = users.filter(user => user.age >= 18)
  return (
    <ul>
      {adults.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  )
}
```

- In this example, the `filter` method is used to create a new array called `adults` that only contains users who are 18 years or older.
- The resulting `adults` array is then mapped to a list of names, which are rendered in the UI.

#### 2. Removing elements from an array:

```jsx
const numbers = [1, 2, 3, 4, 5]

const removeNumber = numberToRemove => {
  const updatedNumbers = numbers.filter(number => number !== numberToRemove)
  console.log(updatedNumbers)
}

removeNumber(3)
// Output: [1, 2, 4, 5]
```

In this example, the `filter` method is used to create a new array `updatedNumbers` that excludes the `numberToRemove` from the original `numbers` array. The resulting `updatedNumbers` array is then logged to the console.

#### 3. Filtering and rendering components conditionally:

```jsx
const products = [
  { id: 1, name: 'Product 1', inStock: true },
  { id: 2, name: 'Product 2', inStock: false },
  { id: 3, name: 'Product 3', inStock: true },
]
const ProductList = () => {
  const availableProducts = products.filter(product => product.inStock)
  return (
    <ul>
      {availableProducts.map(product => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  )
}
```

- In this example, the `filter` method is used to create a new array `availableProducts` that only contains products with `inStock` set to `true` .
- The resulting `availableProducts` array is then mapped to a list of product names, which are rendered in the UI.
- The Array filter method is a versatile tool in React that allows you to selectively filter and manipulate data in arrays, enabling you to display or work with specific elements based on certain conditions.

---

### **=>** The Array reduce Method

- The Array reduce method is a built-in JavaScript method that allows you to reduce an array of values to a single value.

- It iterates through each element of the array and applies a function that accumulates a single result based on the values of the previous elements.

- The result is a single output value that can be of any data type.

#### Here's an example of how to use the Array reduce method:

```js
const numbers = [1, 2, 3, 4, 5]
const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
}, 0)

console.log(sum)
// Output: 15
```

- In this example, the `numbers` array contains a list of numbers. The `reduce` method is used to calculate the sum of all the numbers in the array.

- The `accumulator` parameter is initialized with a value of 0, and the `currentValue` parameter iterates through each element of the array.

- The function returns the sum of the `accumulator` and `currentValue` values, which are accumulated until the end of the array is reached. The resulting `sum` value is 15.

- The Array reduce method is commonly used when you need to perform complex calculations or transformations on an array of values.

- It provides a flexible and efficient way to reduce an array to a single value, making it a powerful tool in JavaScript programming.

#### **Uses of the The Array reduce Method in React**

- The Array reduce method in React is often used to perform complex calculations or transformations on arrays of data before rendering them in the UI.

- Here are some common use cases of the Array reduce method in React:

#### Calculating the total value of an array of numbers:

```jsx
const numbers = [1, 2, 3, 4, 5]
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
console.log(sum)
// Output: 15
```

- In this example, the reduce method is used to calculate the sum of all the numbers in the numbers array.

- The accumulator parameter keeps track of the running sum, and the currentValue parameter iterates through each element of the array, adding it to the accumulator.

#### Grouping and organizing data:

```jsx
const data = [
  { category: 'fruit', name: 'apple' },
  { category: 'fruit', name: 'banana' },
  { category: 'vegetable', name: 'carrot' },
  { category: 'vegetable', name: 'broccoli' },
]
const groupedData = data.reduce((accumulator, currentValue) => {
  if (!accumulator[currentValue.category]) {
    accumulator[currentValue.category] = []
  }
  accumulator[currentValue.category].push(currentValue.name)
  return accumulator
}, {})
console.log(groupedData)
// Output: { fruit: ['apple', 'banana'], vegetable: ['carrot', 'broccoli'] }
```

- In this example, the reduce method is used to group the data array based on the category property.

- The accumulator parameter is an object that stores the grouped data, and the currentValue parameter represents each element of the array.

- The function checks if the category property exists as a key in the accumulator object.

- If not, it creates an empty array for that category. It then pushes the name property into the corresponding category array.

#### Calculating aggregated values:

```jsx
const orders = [
  { product: 'apple', quantity: 2, price: 1 },
  { product: 'banana', quantity: 3, price: 2 },
  { product: 'orange', quantity: 5, price: 3 },
  ];
  const totalRevenue = orders.reduce((accumulator, currentValue) => accumulator + (currentValue.quantity \* currentValue.price), 0);
  console.log(totalRevenue);
  // Output: 19
```

- In this example, the reduce method is used to calculate the total revenue from the orders array.

- The accumulator parameter keeps track of the running total, and the currentValue parameter represents each order.

- The function multiplies the quantity and price properties of each order and adds it to the accumulator.

- The Array reduce method is a powerful tool in React for performing various calculations and transformations on arrays of data.

- It provides flexibility and control in manipulating data before rendering it in the UI.

---

### **=>** The Array sort Method

- The Array sort method in JavaScript is used to sort the elements of an array in place, meaning it modifies the original array.

- It arranges the elements in ascending order by default, based on their Unicode values.

- The sort method takes an optional compare function as a parameter.

- This function defines the sorting order and how the elements should be compared.

- If no compare function is provided, the elements are converted to strings and sorted lexicographically.

- The compare function takes two arguments, usually referred to as "a" and "b".

- It compares these two values and returns a negative number if "a" should be sorted before "b", a positive number if "b" should be sorted before "a", or zero if they are equal.

##### Example 1: Sorting without a compare function

- Here's an example of using the sort method without a compare function:

```js
const fruits = ['apple', 'banana', 'cherry', 'date']
fruits.sort()
console.log(fruits)

// Output: ['apple', 'banana', 'cherry', 'date']
```

- In this case, the elements are sorted alphabetically because the default compare function converts them to strings.

##### Example 2: Sorting with a compare function

- Now, let's see an example using a compare function to sort numbers in descending order:

```jsx
const numbers = [5, 1, 3, 2, 4]
numbers.sort((a, b) => b - a)

console.log(numbers)

// Output: [5, 4, 3, 2, 1]
```

- In this example, the compare function `(a, b) => b - a` subtracts "b" from "a". If the result is negative, "a" is sorted before "b". Therefore, the numbers are sorted in descending order.

- Note that the sort method modifies the original array. If you want to preserve the original array, make a copy before sorting.

#### **Uses of the Array sort Method in React**

- The Array sort method in React can be used to sort arrays of data in various ways.
- Here are some examples of how it can be used:

#### 1. Sorting an array of objects by a specific property:

```jsx
const data = [
  { name: 'John', age: 25 },
  { name: 'Jane', age: 30 },
  { name: 'Bob', age: 20 },
]
data.sort((a, b) => a.age - b.age)
// Output: [{ name: 'Bob', age: 20 }, { name: 'John', age: 25 }, { name: 'Jane', age: 30 }]
```

- In this example, we have an array of objects with properties like "name" and "age".

- The sort method is used with a compare function (a, b) => a.age - b.age to sort the objects based on the "age" property in ascending order.

- The compare function subtracts the "age" of object "b" from the "age" of object "a". If the result is negative, "a" is sorted before "b".

- The sorted array will be in ascending order based on the "age" property.

#### 2. Sorting an array of strings:

```jsx
const names = ['John', 'Jane', 'Bob', 'Alice']
names.sort()
// Output: ['Alice', 'Bob', 'Jane', 'John']
```

- In this example, we have an array of strings representing names.

- The sort method is used without a compare function, so it sorts the strings lexicographically by default.

- The sorted array will be in alphabetical order.

#### 3. Sorting an array of numbers in descending order:

```jsx
const numbers = [5, 1, 3, 2, 4]
numbers.sort((a, b) => b - a)

// Output: [5, 4, 3, 2, 1]
```

- In this example, we have an array of numbers.

- The sort method is used with a compare function (a, b) => b - a to sort the numbers in descending order.

- The compare function subtracts "b" from "a". If the result is negative, "a" is sorted before "b".

- The sorted array will be in descending numerical order.

#### 4. Sorting an array of dates:

```jsx
const dates = [new Date('2022-01-01'), new Date('2021-01-01'), new Date('2023-01-01')]
dates.sort((a, b) => a - b)

// Output: [new Date('2021-01-01'), new Date('2022-01-01'), new Date('2023-01-01')]
```

- In this example, we have an array of Date objects.

- The sort method is used with a compare function (a, b) => a - b to sort the dates in ascending order.

- The compare function subtracts "b" from "a". If the result is negative, "a" is sorted before "b".

- The sorted array will be in ascending chronological order.

- Overall, the Array sort method is a powerful tool for sorting arrays of data in React.

- It can be used in a variety of ways to meet different sorting requirements.

---

### **=>** Working With Immutable Arrays

#### Immutable Operations in React

- Introduction

- React requires many operations to be immutable, meaning we do not manipulate the underlying data structure.
- This is important when adding, deleting, and updating elements in an array without mutating the original array.
- These techniques are essential for React development, and they always work the same way.

#### Adding Elements to an Array

1. Creating a New Book Object

- Let's start with adding a book object to our array of books. We create a newBook object with the title "Harry Potter and the Chamber of Secrets" and the author "JK Rowling".

```js
const newBook = {
  id: 6,
  title: 'Harry Potter and the Chamber of Secrets',
  author: 'J. K. Rowling',
}
```

2. Adding the `newBook` to the `books` Array

- We can add this newBook to our array `using the spread operator`.

```js
const newBook = {
  id: 6,
  title: 'Harry Potter and the Chamber of Secrets',
  author: 'J. K. Rowling',
}

const bookAfterAdd = [...books, newBook]
```

- This creates a new array based on the original array and adds the new book object to the end.

- After adding the new book, our array now contains six books, with the last one being the newly added book.

#### Deleting Elements from an Array

- Deleting a Book Object

- To delete a book object from the array, we create a new array and use the filter method.

- We want to delete the book with the ID number three, so we filter out this book by checking if the book ID is not equal to three.

```js
const booksAfterDelete = booksAfterAdd.filter(book => book.id !== 3)
```

- Result After Deleting a Book

- After deleting the book, our array now contains five books, with the book with the ID number three removed.

#### Updating Elements in an Array

- Updating a Book Object

- To update a book object in the array, we create a new array and use the map method.

```js
const booksAfterUpdate = booksAfterDelete.map(book =>
  book.id === 1 ? { ...book, pages: 1210 } : book
)
```

- We want to update the book with the ID number one, so we check if the book ID is equal to one.`book.id === 1`

- If it is, we return an updated book object with the pages property changed to 1210. `book.id === 1 ? { ...book, pages: 1210 }`

- If it's not, we return the book object unchanged.`book.id === 1 ? { ...book, pages: 1210 } : book`

- After updating the book, our array now contains the same five books, with the book with the ID number one updated to have 1210 pages.

#### Conclusion

- Immutable operations in React are important for managing data without mutating the original array.

- By using the spread operator, filter method, and map method, we can add, delete, and update elements in an array respectively.

- These techniques are essential for React development and always work the same way.

---

### **=>** Asynchronous JavaScript: Promises

#### Reviewing Asynchronous JavaScript Techniques for Data Fetching

- We're going to review how we can use asynchronous JavaScript techniques to fetch data from an external web API.

- The first method we will use is the concept of promises.

#### Fetch API

- To fetch data from an API in browsers, we have the so-called fetch API. This function is called fetch and into which we can pass a URL of an API.

- We will use a dummy API commonly seen in tutorials - the JSONPlaceholder API.

```js
fetch('https://jsonplaceholder.typicode.com/todos')
```

#### Fetch Function

- The fetch function is used to fetch the data from the API, which will take some time.

- JavaScript needs to do an HTTP request, wait until the request is processed, and then download the data from the server.

- In the meantime, JavaScript keeps running.

- If we log something to the console, it will get executed immediately.

```js
fetch('https://jsonplaceholder.typicode.com/todos')

console.log('Jonas')
```

- JavaScript will not wait until the data is fetched. It will execute the function and then immediately move on to the next line of code.

#### Promises

- The fetch function returns a so-called promise, which can be in multiple states - `pending`, `rejecte`d, or `fulfilled`.

- We can handle the fulfilled state by using the `then` method. The then method will be called as soon as the promise is `fulfilled`.

```js
fetch('https://jsonplaceholder.typicode.com/todos').then()

console.log('Jonas')
```

#### Fetching Data

- We pass a callback function into the then method, which will be executed as soon as the data has arrived.

- JavaScript will call this callback function with the response `res` it has received.

```js
fetch('https://jsonplaceholder.typicode.com/todos').then((res) => )

console.log('Jonas')
```

- The data then needs to be converted from JSON to a JavaScript object using `res.json()`.

```js
fetch('https://jsonplaceholder.typicode.com/todos').then(res => res.json())

console.log('Jonas')
```

- This operation returns another promise, so we need to add another then.

```js
fetch('https://jsonplaceholder.typicode.com/todos')
  .then(res => res.json())
  .then()

console.log('Jonas')
```

- The callback function of the second then will be called with the result of the previous function, which is the data.

- We can then log this data to the console.

```js
fetch('https://jsonplaceholder.typicode.com/todos')
  .then(res => res.json())
  .then(data => console.log(data))

console.log('Jonas')
```

- The console will first print the result of the log for 'Jonas', and only later will it print the array of to-do objects, which is because the data arrived later.

#### Asynchronous JavaScript

- Asynchronous JavaScript allows us to wait until certain functions are executed, which is not how JavaScript usually works. JavaScript is a synchronous language where one line of code is executed after the other.

- With asynchronous JavaScript, we can handle the moment when the data arrives from the API.

#### React and Asynchronous JavaScript

- In React, we would typically take the fetched data and set some state, which would then get reflected in the user interface.

- More about this will be discussed later. For now, it's important to understand how we use promise methods to handle the moment when the data arrives from the API.

#### **Use of Promises in React**

- Promises are commonly used in React for handling asynchronous operations, such as fetching data from an API or updating the state after a certain event occurs.

- When fetching data from an API, promises can be used to handle the moment when the data arrives.

- The `fetch()` function can be used to make the API call and return a promise.

- The `.then()` method can be used to handle the response and update the state with the fetched data.

- Here's an example of how promises can be used in React to fetch data from an API:

```jsx
import React, { useState, useEffect } from 'react'

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.log(error))
  }, [])
  return (
    <div>
      {data.map(item => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.completed ? 'Completed' : 'Not Completed'}</p>
        </div>
      ))}
    </div>
  )
}

export default App
```

- In this example, the `useState()` hook is used to define a state variable `data` which holds the fetched data.

- The `useEffect()` hook is used to fetch the data when the component mounts.

- The `fetch()` function is used to make the API call and return a promise.

- The `.then()` method is used to update the state with the fetched data.

- The `.catch()` method is used to handle any errors that may occur during the API call.

- Once the data is fetched, it is mapped over and each item is rendered in the UI.

### **=>** Asynchronous JavaScript: Async/Await

#### Introduction to Async/Await

- In the previous lecture, we learned how to handle fetching data using promise methods.

- But in this lecture, let's take it one step further and learn how to do the exact same thing with a much nicer and cleaner syntax called async/await.

#### Implementing the Logic with Async Functions

- The async function is created by adding the async keyword before the function definition.

- Let's create an async function called `getTodos`.

```js
// fetch('https://jsonplaceholder.typicode.com/todos')
//   .then((res) => res.json())
//   .then((data) => console.log(data))

// console.log('Jonas')

async function getTodos() {}
```

- Inside the async function, we can use the "await" keyword to wait for the promise to resolve.

```js
// fetch('https://jsonplaceholder.typicode.com/todos')
//   .then((res) => res.json())
//   .then((data) => console.log(data))

// console.log('Jonas')

async function getTodos() {
  await fetch('https://jsonplaceholder.typicode.com/todos')
}
```

- By using "await", the code inside the async function will pause and wait for the promise to resolve before moving on to the next line.

- This makes the code inside the async function look more like normal synchronous JavaScript code.

#### Storing the Result in Variables

- We can store the result of the awaited promise in a variable.

- In this case, let's store the response in a variable called `res` for "response".

```js
// fetch('https://jsonplaceholder.typicode.com/todos')
//   .then((res) => res.json())
//   .then((data) => console.log(data))

// console.log('Jonas')

async function getTodos() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos')
}
```

- We can then store the data from the response in a variable called "data" by using "await response.json()".

```js
// fetch('https://jsonplaceholder.typicode.com/todos')
//   .then((res) => res.json())
//   .then((data) => console.log(data))

// console.log('Jonas')

async function getTodos() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos')
  const data = await res.json()
}
```

- We can log the data to the console.

- Finally, we can call the "getTodos" function.

```js
// fetch('https://jsonplaceholder.typicode.com/todos')
//   .then((res) => res.json())
//   .then((data) => console.log(data))

// console.log('Jonas')

async function getTodos() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos')
  const data = await res.json()
  console.log(data)
}

getTodos()
```

#### Understanding the Asynchronous Nature of JavaScript

- JavaScript by default immediately moves on to the next line and doesn't wait for anyone.

- However, with the await keyword inside async functions, we can pause the code execution and make it look more like normal synchronous code.

- The waiting only works inside the async function and in the lines that have the await keyword.

#### Handling the Promise Result

- If we try to store the result of the async function in a variable, it will be a promise.

- JavaScript immediately moves on to the next line after calling the function, so it doesn't wait for the promise to resolve.

- To handle the promise result, we can use the then method or another async/await function.

- In React, it's common to set the state as soon as we receive data, so returning the data from the async function is not necessary.

#### Conclusion

- Async/await provides a cleaner and more readable syntax for handling asynchronous operations in JavaScript.

- By using async functions and the await keyword, we can make the code look more like normal synchronous JavaScript code.

- Understanding the asynchronous nature of JavaScript and how to handle promises is essential when working with async functions.

#### **Use of Async/Await in React**

- Async/Await is a syntactic sugar on top of Promises, making asynchronous code easier to read and write in React.

- Async/Await can be used to handle asynchronous operations, such as fetching data from an API or updating the state after a certain event occurs.

- Here's an example of how Async/Await can be used in React to fetch data from an API:

```jsx
import React, { useState, useEffect } from 'react'

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos')
      const data = await response.json()
      setData(data)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      {data.map(item => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.completed ? 'Completed' : 'Not Completed'}</p>
        </div>
      ))}
    </div>
  )
}

export default App
```

- In this example, we define a state variable `data` using the `useState()` hook.

- We use the `useEffect()` hook to call the `fetchData()` function when the component mounts.

- The `fetchData()` function is defined as an asynchronous function using the `async` keyword.

- Inside the function, we use `await` to wait for the API call to complete and the response to be returned.

- We then use `await` again to parse the response using the `.json()` method.

- Finally, we update the state with the fetched data.

- If any errors occur during the API call or parsing of the response, they are caught in the `catch` block and logged to the console.

- Once the data is fetched, we map over the `data` array and render each item in the UI.

---
