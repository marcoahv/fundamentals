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

### JavaScript Review Section: Destructuring

- Destructuring is a very important concept in JavaScript.

- To illustrate, let's create a new folder called "JavaScript Review".

- We'll get our starter files from the GitHub repo we downloaded at the beginning of the course.

- Let's select `script.js` from the starter folder and paste it into the project folder we just created.

- To open this folder in VS Code, simply drag and drop it onto the VS Code icon.

- Alternatively, you can open a project folder by clicking on "Open".

### Setting Up the Project

- Our `script.js` file already contains some starter data.

  - There's an array that contains five book objects, each with a title, a date, and other relevant information.

  - There are also two functions: `getBooks` , which returns the book data, and `getBookById` , which returns a book with a specific ID.

### Understanding Destructuring

- Destructuring is useful whenever we need to extract data from an object or an array.

- For example, if we needed the title and author of a certain book, we could use destructuring.

- To demonstrate, let's use `getBookById` with an ID of 2.

- If we wanted to take the title out of this book object and create a new variable called `title` , we could do `book.title` .

- If we wanted the author as well, we could do `book.author` .

- However, if we have lots of properties that we need to extract, this method can become cumbersome.

- That's where object destructuring comes in. With object destructuring, we can create new variables all at once.

- For example, `{title, author} = book` would create new variables `title` and `author` and assign them the respective values from the `book` object.

- The variable names must match the property names in the object exactly.

### Destructuring with Arrays

- Destructuring with arrays is similar to destructuring with objects, but it relies on the order of elements in the array instead of property names.

- For example, if we have an array of genres and we want to extract the primary and secondary genres, we could do `[primaryGenre, secondaryGenre] = genres` .

- This would assign the first element of the `genres` array to `primaryGenre` and the second element to `secondaryGenre` .

---

## - Rest/Spread Operator

### Rest and Spread Operator in JavaScript

- The rest and spread operator in JavaScript is denoted by three dots `...` .

- These operators are used for different purposes and are quite useful in JavaScript programming.

### Using the Rest Operator

- The rest operator is used to get the rest of the items in an array.

- For example, if we have destructured some items from an array and we want to get the rest of the items, we can use the rest operator.

- Here's how we can do it:

```jsx
const [primaryGenre, secondaryGenre, ...otherGenres] = genres
```

- In this example, `primaryGenre` and `secondaryGenre` will hold the first and second items from the `genres` array respectively.

- `otherGenres` will be an array holding the rest of the items.

- Note that the rest operator must be the last in the destructuring pattern.

### Using the Spread Operator

- The spread operator is used to spread out the elements of an array or the properties of an object.

- This is useful when we want to create a new array or object that includes the elements or properties of an existing array or object.

- Here's how we can use the spread operator with arrays:

```jsx
const newGenres = [...genres, 'Epic Fantasy']
```

- In this example, `newGenres` will be a new array that includes all the items from the `genres` array and a new item "Epic Fantasy".

- Here's how we can use the spread operator with objects:

```jsx
const updatedBook = { ...book, moviePublicationDate: '2001-12-19' }
```

- In this example, `updatedBook` will be a new object that includes all the properties from the `book` object and a new property `moviePublicationDate` .

- If the object already has a property with the same name, the new value will overwrite the existing one.

- This feature of the spread operator is particularly useful when working with React, as it allows us to easily update the state of an object.

---

## - Template Literals

### Template Literals in JavaScript

- Template literals are a feature introduced in ES6 JavaScript.

- They allow for easy creation of strings containing JavaScript variables or expressions.

- Template literals are defined using back ticks ( ` ` ) instead of normal quotes.

- JavaScript expressions can be added to template literals using `${}` syntax.

- Template literals are commonly used in React.

### Using Template Literals to Create a Summary String

- Template literals can be used to create a summary string of an object.

- JavaScript expressions can be used inside the template literal to add dynamic content.

- Destructuring can be used to easily access object properties in the template literal.

### Formatting Template Literals

- Template literals can be formatted to create a more readable string.

- JavaScript expressions can be used to manipulate the content of the template literal.

- Standard JavaScript methods can be used inside the template literal, such as `split()` .

### Conclusion

- Template literals are a powerful and easy-to-use feature in JavaScript.

- They are commonly used in React and other JavaScript frameworks.

- Template literals allow for the creation of dynamic and readable strings.

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

---

## **Javascript for React **

## - Module Introduction

Welcome to this module in the course. Let's get started!

### Module Optional

- This module is optional.

- If you already know next generation JavaScript concepts like arrow functions, let, const, and more, you may skip this module.

- This module is for you if you know JavaScript but haven't worked with ES6 or any other version.

- JavaScript used in this course may sometimes look like a new language to you because of all the next generation features React apps typically use.

- I'm not using these next generation features to show off.

### React and Next Generation JavaScript

- React apps are built with the latest version of JavaScript and using the next gen features.

- This allows us to write clean and robust React apps.

- React itself uses a lot of Next Generation JavaScript features.

- It's important for you to understand all these features and not be confused by this sometimes strange-looking version of JavaScript.

### Evolution of JavaScript

- JavaScript is evolving quickly and therefore new features can look different.

- These new features allow developers to do more powerful things.

- This module will walk you through the core features used in this course.

- Hopefully, the code will look less strange to you after going through this module.

- Feel free to skip this module if you already know it.

- You can always come back to it if you encounter something that looks strange to you later in the course.
