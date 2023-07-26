---
sidebar_position: 3
---

---

## - Section Overview

>

### React and JavaScript Fundamentals

- React is a JavaScript library that requires a good understanding of essential JavaScript fundamentals.

- This section is especially useful if your JavaScript skills are a bit rusty.

### Topics to Review

- Destructuring

- Spread operator

- Template literals

- Ternaries

- Asynchronous JavaScript with promises and async/await

### Working with Immutable Arrays in React

- In React, working with immutable arrays is a common task.

- We will cover important array methods such as:

  - Map

  - Filter

  - Reduce

  - Sort

### Skipping the Section

- If you are already familiar with all these concepts, feel free to skip this entire section and move on to the next one.

---

## - Destructuring Objects and Arrays

- Destructuring is a feature in JavaScript that allows you to extract values from objects or arrays and assign them to variables in a more concise and readable way.

- It provides a convenient syntax for unpacking values from data structures.

### Destructuring Objects:

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

### Destructuring Arrays:

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

### Examples of destructuring in React

- Here are some examples of destructuring in React:

### 1. Destructuring props:

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

### 2. Destructuring state:

```jsx
const [count, setCount] = useState(0)
```

- In this example, we are using the `useState` hook from React to create a state variable called `count` and a function called `setCount` to update the state.

- We are using array destructuring to assign the initial value of `count` and the function `setCount` to the respective variables.

### 3. Destructuring context:

```jsx
const { theme, toggleTheme } = useContext(ThemeContext)
```

- In this example, we are using the `useContext` hook to access a context called `ThemeContext` . We are destructuring the `theme` and `toggleTheme` values from the context, allowing us to use them directly in the component.

- Destructuring in React can help simplify code by extracting specific values from props, state, or context objects.

- It improves readability and reduces the need for repetitive object or array access.

---

## - Rest/Spread Operator in JavaScript

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

##### Spread with Arrays:

```js
const arr1 = [1, 2, 3]
const arr2 = [...arr1, 4, 5]
console.log(arr2) // Output: [1, 2, 3, 4, 5]
```

- In the above code, the Spread operator is used to spread the elements of `arr1` into a new array `arr2` .

- This creates a new array with all the elements from `arr1` , followed by the additional elements 4 and 5.

##### Spread with Objects:

```js
const obj1 = { name: 'John', age: 25 }

const obj2 = { ...obj1, city: 'New York' }

console.log(obj2) // Output: { name: 'John', age: 25, city: 'New York' }
```

- In this example, the Spread operator is used to spread the properties of `obj1` into a new object `obj2` .

- This creates a new object with all the properties from `obj1` , followed by the additional property `city` .

- The Rest and Spread operators are powerful features in JavaScript that provide flexibility in working with arrays and objects.

- They make it easier to handle variable-length arguments, create new arrays or objects, and manipulate existing ones.

### Uses of the Rest and spread operators in React

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

## - Template Literals

### ### Template Literals in JavaScript

- Template Literals, also known as Template Strings, are a feature in JavaScript that allow for easier string interpolation and multiline strings.

- They are denoted by backticks instead of single or double quotes.

- Template Literals support the use of placeholders and expressions within the string.

### Examples:

>

### 1. Basic String Interpolation:

```js
const name = 'John'
const greeting = `Hello, ${name}!`
console.log(greeting) // Output: Hello, John!
```

In the above example, the `${name}` placeholder is used within the template literal to interpolate the value of the `name` variable into the string.

### 2. Multiline Strings:

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

### 3. Expression Interpolation:

```js
const num1 = 5
const num2 = 10
const result = `The sum of ${num1} and ${num2} is ${num1 + num2}.`
console.log(result) // Output: The sum of 5 and 10 is 15.
```

Template literals can also include expressions within the placeholders, allowing you to perform calculations or include dynamic values directly in the string.

### 4. Tagged Templates:

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

### Uses and Examples of Template Literals in React

- Template Literals in React can be used in various scenarios to simplify string interpolation and create dynamic content.
- Here are some common use cases and examples:

### 1. Rendering Dynamic Content:

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

### 2. Creating Dynamic CSS Classes:

- Template literals can also be used to create dynamic CSS classes based on certain conditions. For example:

```jsx
const isActive = true
const buttonClass = `button ${isActive ? 'active' : 'inactive'}`
function Button() {
  return <button className={buttonClass}>Click Me</button>
}
```

- In this example, the template literal is used to conditionally add the `active` or `inactive` class to the button based on the value of the `isActive` variable.

### 3. Generating Dynamic URLs:

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

## - Ternaries Instead of if/else Statements

### Using Ternary Operator in React

- In React, values need to be defined based on conditions.

- The ternary operator is a special operator in JavaScript that has three operands.

- The first operand is a condition, the second is the result if the condition is true, and the third is the result if the condition is false.

- The ternary operator is used when if else statements cannot be used.

### Example of Using Ternary Operator

- The ternary operator can be used to define a variable conditionally.

- JavaScript expressions can be used inside the ternary operator.

- The ternary operator can be used inside a template literal to create a string based on a condition.

### Benefits of Using Ternary Operator in React

- The ternary operator is commonly used in React to define values based on conditions.

- The ternary operator allows for the creation of dynamic and readable code.

- The ternary operator is a powerful tool to have in your React toolkit.

---

## - Arrow Functions

### Arrow Functions in JavaScript

- Arrow functions are a new way of writing functions introduced in ES6.

- They are useful for writing quick and short one-line functions.

- Arrow functions can be used as an alternative to traditional function

syntax.

### Writing an Arrow Function

- Arrow functions are written using the arrow (=>) syntax.

- They can take in parameters and automatically return a value.

- If the function body consists of a single expression, the return statement

is implicit.

- If the function body has multiple lines, a function block with curly braces

and a return statement is required.

### Benefits of Using Arrow Functions

- Arrow functions are concise and can make code more readable.

- They are commonly used for callback functions and arrow methods.

- Arrow functions eliminate the need for the function keyword and return

statement in certain cases.

### Example: Using Arrow Functions to Get Year

- An example of using an arrow function is shown to extract the year from a

date string.

- The arrow function uses the string.split method to split the date and

return the first element.

- The arrow function can be stored in a variable and reused throughout the

code.

- Arrow functions are especially useful for one-liner functions like this.

---

## - Short-Circuiting And Logical Operators: &&, ||, ??

### Short Circuiting in JavaScript

- Short circuiting is a feature in JavaScript logical operators such as `&&` (and) and `||` (or).

- Short circuiting means that in certain conditions, the operator will immediately return the first value and not even evaluate the second value.

### Short Circuiting with the AND Operator

- The `&&` operator short circuits when the first operand is `false` .

- If the first value is `true` , the `&&` operator will return the second operand.

- If the first value is `false` , the `&&` operator will immediately return that first value.

- This can be used as a conditional statement similar to an `if` statement.

### Short Circuiting with the OR Operator

- The `||` operator works in the opposite way to the `&&` operator.

- The `||` operator short circuits when the first operand is `true` .

- If the first value is `true` , the `||` operator will immediately return that first value.

- If the first value is `false` , the `||` operator will return the second operand.

- This can be used to set default values.

### Truthy and Falsy Values

- Truthy values are any values that are not falsy.

- Falsy values are: `0` , `"" `, `null`, `undefined`, `NaN`, and `false`.

- The `&&` and `||` operators work with truthy and falsy values.

### Nullish Coalescing Operator

- The nullish coalescing operator (`??`) is a new logical operator in JavaScript.

- It returns the second value only when the first value is `null` or `undefined`.

- It does not short circuit for other falsy values like `0` or an empty string.

- This operator can be used to set default values when the original value is `null` or ` undefined`.

---

## - Optional Chaining

### Introduction to Optional Chaining Operator

- The optional chaining operator is a very important feature in JavaScript.

- It allows us to safely access properties of an object without causing an error if the property does not exist.

- In this lecture, we will create a function that calculates the total reviews count for each book.

- We will use the optional chaining operator to handle cases where certain review sources are missing.

### Implementing the getTotalReviewCount Function

- Let's start by writing a function called `getTotalReviewCount` for a certain book.

- We will pass in the book as a parameter.

- We can use any variable name for the book, let's use `B` for example.

- Inside the function, we will create variables for the review counts from Goodreads and libraryanything.

- We will use optional chaining to safely access the review counts.

- Finally, we will return the sum of the two review counts.

### Handling Undefined Values with Optional Chaining

- When using book number three, we encounter an error because it does not have the libraryanything review source.

- This causes the property `book.reviews.libraryanything` to be undefined.

- To prevent this error, we can use optional chaining.

- With optional chaining, JavaScript will only continue the chain if the previous property exists.

- By using optional chaining, we avoid the error and the result becomes `NaN` (not a number) instead.

### Setting a Default Value with the Nullish Coalescing Operator

- To handle the `NaN` result, we can set a default value using the nullish coalescing operator.

- The nullish coalescing operator returns the right-hand side value if the left-hand side value is null or undefined.

- In this case, we set the default value to zero.

- By adding zero to the value from Goodreads, we get the final result.

### Benefits of Optional Chaining

- Optional chaining allows us to safely access properties without checking their existence.

- It simplifies our code and reduces the need for null/undefined checks.

- It is especially useful when dealing with complex data structures or uncertain data sources.

---

## - The Array map Method

### Introduction to Functional Array Methods

- To build any meaningful React application, it is crucial to master the three functional array methods in JavaScript - map, filter, and reduce.

- These methods are called functional because they do not mutate the original array, but instead return a new array based on the original one.

### Understanding the Map Method

- The map method loops over an array and returns a new array with the same length but with some operation applied to each of the elements of the original array.

- For instance, if we have an array `[1, 2, 3, 4, 5]` and we call the map method on it with a callback function that multiplies each element by 2, we get a new array `[2, 4, 6, 8, 10]` .

### Using the Map Method to Extract Book Titles

- We can use the map method to create an array that contains all the titles of the books in our books array.

- We simply call the map method on the books array, passing in a callback function that returns the title of each book.

- The result is a new array containing only the titles of the books.

### Using the Map Method to Extract Essential Book Data

- We can also use the map method to create an array that contains only the essential data for each book.

- In this case, we want an array of objects, each containing the title and author of a book.

- We call the map method on the books array, passing in a callback function that returns a new object with the title and author of each book.

- Note that we have to wrap the returned object in parentheses to avoid confusion with the function block.

### Conclusion

- The map method is a powerful tool for transforming arrays in JavaScript.

- It allows us to create new arrays based on the original array, applying some operation to each element of the original array.

- The next important method we will look at is the filter method.

---

## - The Array filter Method

### Introduction to the Filter Method

- The filter method, as the name suggests, is used to filter out some elements of an array based on a condition.

- It returns a new array that includes only those elements that satisfy the condition.

### Filtering Books with More Than 500 Pages

- To create an array that only includes books with more than 500 pages, we can use the filter method.

- We pass a callback function to the filter method that checks if the number of pages of each book is greater than 500.

- If the condition is true, the current book is included in the new array; if it is false, the book is excluded.

### Filtering Books with Movie Adaptations

- We can chain another filter method to the previous one to further filter the books.

- This time, we want to include only those books that have a movie adaptation.

- We pass a callback function to the filter method that checks if each book has a movie adaptation.

- If the condition is true, the current book is included in the new array; if it is false, the book is excluded.

### Filtering Adventure Books

- We can also use the filter method to create an array that includes only adventure books.

- The condition in the callback function this time is whether the genres array of each book includes 'adventure'.

- If the condition is true, the current book is included in the new array; if it is false, the book is excluded.

### Combining Filter and Map Methods

- After filtering the books, we can chain a map method to return an array with only the titles of the adventure books.

- This is possible because both the filter and map methods return a new array, so we can call one method after the other.

- The result is an array of titles of adventure books.

### Importance of Filter and Map Methods in React

- The filter and map methods are essential in front-end development with React, as they allow us to work with data effectively.

- They enable us to create new arrays based on the original array, applying some operation or condition to each element of the original array.

---

## - The Array reduce Method

- We have already tackled the map and the filter method. Now, it's time for the one method that rules them all, which is the reduce method.

### The Power of Reduce Method

- The Versatility of Reduce Method

- The reduce method is really the most versatile and the most powerful of all array methods in JavaScript. In fact, we could probably implement all the other methods, simply using the reduce method. However, that would be a little bit too much work, and that's why we have all of these other methods which are a lot easier to use.

- The Purpose of Reduce Method

- The goal of reduce is to reduce, basically, the entire array to just one value. To boil it down, and if you think about it, this is exactly what we are trying to do. We want to boil down the entire array to just one number, which is the number of pages of all the books combined.

### Utilizing the Reduce Method

- Setting up the Reduce Method

- The reduce method takes in a callback function which will be executed for each element of the array. As a second argument, it also takes in a starter value. In this case, since we are adding together all of these values, we will start from zero.

- Understanding the Callback Function

- The function that we pass in will not only get caught with the current element but also with the current value of the accumulator which starts at zero. We can call this accumulator, and then, we will see why this makes sense. What we want to return is this accumulator plus book.pages.

- Going Through the Array

- Let's understand what happened by going over this array, element by element. The accumulator is the current value of the final value that we want to boil the array down to. In the first iteration the accumulator will still be zero. This function will get called for the first element and then the accumulator will be zero and the book will be the current book.

- Understanding the Accumulator

- We can imagine this accumulator here, basically, as a pile, onto which we put more and more, until, in the end, we reach the final result that we were looking for. It's like an intermediary value, in this case, onto which we keep adding the number of pages until, in the end, we reach the final result.

### Wrapping Up

- The Importance of Reduce Method

- The most important use case, usually, of reduce is just this. But we can also do very complex things, because this initial value doesn't have to be a number. It could also be an array or it could be an object. What this means is that we could do anything that we do with map or filter also with reduce.

- Final Thoughts

- In this case, it's simply the sum of the pages. And so, here, I like to then call it sum. That's all I had to show you here about reduce, because, many times we just use it for simple stuff like this. And so, now, you know how to do that.

---

## - The Array sort Method

- The sort method is another powerful array method that is frequently used in React applications. It allows us to sort an array based on certain criteria. Let's explore how it works with some examples.

### Sorting an Array of Numbers

- Sorting a Demo Array

- Let's start with a simple demo array of numbers. We can use the sort method to sort this array in ascending order. By subtracting b from a in the callback function, we can achieve the desired result.

- Understanding the Callback Function

- The callback function takes in two arguments, a and b, which represent the current and next values in the array. By returning a negative value, we sort the numbers in ascending order. If we return a positive value, the numbers will be sorted in descending order.

- Sorting and Mutating the Original Array

- Unlike other array methods like map, filter, and reduce, the sort method mutates the original array. This means that the array itself is modified after sorting. To avoid this, we can create a copy of the array using the slice method before sorting.

### Sorting an Array of Objects

- Sorting an Array of Books

- In practical scenarios, we often need to sort an array of objects based on a specific property. Let's consider an array of books and sort it based on the number of pages. By modifying the callback function to compare the pages property of each book, we can achieve the desired sorting.

- Sorting in Descending Order

- To sort the array in descending order, we need to modify the callback function to return b.pages - a.pages. This will sort the books from highest to lowest number of pages.

- Avoiding Mutation with Array Copy

- Just like before, it's important to create a copy of the array before sorting to avoid mutating the original array. This ensures that the sortedByPages array is sorted correctly while preserving the original order of the books array.

### Conclusion

- The sort method is a powerful tool for sorting arrays in JavaScript. By understanding how the callback function works and being mindful of array mutation, we can effectively sort both arrays of numbers and arrays of objects. Remember to create a copy of the array before sorting if you want to avoid modifying the original array.

---

## - Working With Immutable Arrays

### Immutable Operations in React

- Introduction

- React requires many operations to be immutable, meaning we do not manipulate the underlying data structure. This is important when adding, deleting, and updating elements in an array without mutating the original array. These techniques are essential for React development, and they always work the same way.

### Adding Elements to an Array

- Creating a New Book Object

- Let's start with adding a book object to our array of books. We create a new book object with the title "Harry Potter and the Chamber of Secrets" and the author "JK Rowling".

- Adding the New Book to the Array

- We can add this new book to our array using the spread operator. This creates a new array based on the original array and adds the new book object to the end.

- Result After Adding a Book

- After adding the new book, our array now contains six books, with the last one being the newly added book.

### Deleting Elements from an Array

- Deleting a Book Object

- To delete a book object from the array, we create a new array and use the filter method. We want to delete the book with the ID number three, so we filter out this book by checking if the book ID is not equal to three.

- Result After Deleting a Book

- After deleting the book, our array now contains five books, with the book with the ID number three removed.

### Updating Elements in an Array

- Updating a Book Object

- To update a book object in the array, we create a new array and use the map method. We want to update the book with the ID number one, so we check if the book ID is equal to one. If it is, we return an updated book object with the pages property changed to 1210. If it's not, we return the book object unchanged.

- Result After Updating a Book

- After updating the book, our array now contains the same five books, with the book with the ID number one updated to have 1210 pages.

### Conclusion

- Immutable operations in React are important for managing data without mutating the original array. By using the spread operator, filter method, and map method, we can add, delete, and update elements in an array respectively. These techniques are essential for React development and always work the same way.

---

## - Asynchronous JavaScript: Promises

### Immutable Operations in React

- Introduction

- React requires many operations to be immutable, meaning we do not manipulate the underlying data structure. This is important when adding, deleting, and updating elements in an array without mutating the original array. These techniques are essential for React development, and they always work the same way.

### Adding Elements to an Array

- Creating a New Book Object

- Let's start with adding a book object to our array of books. We create a new book object with the title "Harry Potter and the Chamber of Secrets" and the author "JK Rowling".

- Adding the New Book to the Array

- We can add this new book to our array using the spread operator. This creates a new array based on the original array and adds the new book object to the end.

- Result After Adding a Book

- After adding the new book, our array now contains six books, with the last one being the newly added book.

### Deleting Elements from an Array

- Deleting a Book Object

- To delete a book object from the array, we create a new array and use the filter method. We want to delete the book with the ID number three, so we filter out this book by checking if the book ID is not equal to three.

- Result After Deleting a Book

- After deleting the book, our array now contains five books, with the book with the ID number three removed.

### Updating Elements in an Array

- Updating a Book Object

- To update a book object in the array, we create a new array and use the map method. We want to update the book with the ID number one, so we check if the book ID is equal to one. If it is, we return an updated book object with the pages property changed to 1210. If it's not, we return the book object unchanged.

- Result After Updating a Book

- After updating the book, our array now contains the same five books, with the book with the ID number one updated to have 1210 pages.

### Conclusion

- Immutable operations in React are important for managing data without mutating the original array. By using the spread operator, filter method, and map method, we can add, delete, and update elements in an array respectively. These techniques are essential for React development and always work the same way.

---

## - Asynchronous JavaScript: Async/Await

### Introduction to Async/Await

- In the previous lecture, we learned how to handle fetching data using promise methods.

- But in this lecture, let's take it one step further and learn how to do the exact same thing with a much nicer and cleaner syntax called async/await.

### Implementing the Logic with Async Functions

- The async function is created by adding the async keyword before the function definition.

- Let's create an async function called "getTodos".

- Inside the async function, we can use the "await" keyword to wait for the promise to resolve.

- By using "await", the code inside the async function will pause and wait for the promise to resolve before moving on to the next line.

- This makes the code inside the async function look more like normal synchronous JavaScript code.

### Storing the Result in Variables

- We can store the result of the awaited promise in a variable.

- In this case, let's store the response in a variable called "response".

- We can then store the data from the response in a variable called "data" by using "await response.json()".

- We can log the data to the console.

- Finally, we can call the "getTodos" function.

### Understanding the Asynchronous Nature of JavaScript

- JavaScript by default immediately moves on to the next line and doesn't wait for anyone.

- However, with the await keyword inside async functions, we can pause the code execution and make it look more like normal synchronous code.

- The waiting only works inside the async function and in the lines that have the await keyword.

### Handling the Promise Result

- If we try to store the result of the async function in a variable, it will be a promise.

- JavaScript immediately moves on to the next line after calling the function, so it doesn't wait for the promise to resolve.

- To handle the promise result, we can use the then method or another async/await function.

- In React, it's common to set the state as soon as we receive data, so returning the data from the async function is not necessary.

### Conclusion

- Async/await provides a cleaner and more readable syntax for handling asynchronous operations in JavaScript.

- By using async functions and the await keyword, we can make the code look more like normal synchronous JavaScript code.

- Understanding the asynchronous nature of JavaScript and how to handle promises is essential when working with async functions.

---
