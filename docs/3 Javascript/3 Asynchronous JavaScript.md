---
sidebar_position: 3
---

# Asynchronous JavaScript

### **=>** Why async JavaScript is important

#### Introduction

- We need to understand the basics of async programming and why async JavaScript is important.
- Under this topic, we have a few concepts to cover from an interview point of view: timeouts and intervals, callbacks, promises, async/await, and the all-important event loop.
- If you are a junior dev applying for an interview, a surface knowledge of these topics will suffice. However, if you are applying for a more senior role, you're expected to have a deeper understanding of all these topics.
- In this lecture, we are going to understand the "what" and "why" of async JavaScript. In the upcoming videos, we will see the "how" of async JavaScript by understanding and solving exercise problems on timeouts, callbacks, promises, and async/await.
- We will wind up async JavaScript by understanding how all of them behave with respect to the event loop.

#### Synchronous, Blocking, Single-Threaded JavaScript

- JavaScript, in its most basic form, is a synchronous, blocking, single-threaded language.
- These three points are crucial. Let's understand what they mean.
  - JavaScript is synchronous, meaning that code executes top-down with only one line executing at any given time.
  - JavaScript is blocking, which means that subsequent processes won't start until the previous one is completed.
  - JavaScript is single-threaded, having just one thread, the main thread, for executing code.

#### Challenges of Synchronous JavaScript

- This model of JavaScript creates a significant problem, especially when we have tasks that require waiting, like retrieving data from a database.
- We need a way to have asynchronous behavior in JavaScript.

#### Asynchronous Programming in JavaScript

- To cater to asynchronous programming in JavaScript, we rely on functions and APIs defined by web browsers.
- These functions and APIs allow us to register functions that should not be executed synchronously but should be invoked asynchronously when some event occurs (e.g., the passage of time, user interactions, or data arrival over the network).
- This enables running multiple tasks simultaneously without blocking the main thread.

#### Conclusion

- JavaScript's synchronous, blocking, and single-threaded nature necessitates the use of asynchronous techniques.
- Web browsers provide functions and APIs to enable asynchronous behavior in JavaScript.
- In the next lecture, we will explore the traditional methods JavaScript offers for running code asynchronously.

### **=>** Timeouts and Intervals

#### Timeouts and Intervals

- In this lecture, let's look at the traditional methods JavaScript has available for running code asynchronously after a set time period elapsed or at regular intervals of time.
- In other words, let's look at the `setTimeout` function and the `setInterval` function.

#### setTimeout

- The `setTimeout` function executes a particular block of code once after a specified time has elapsed.
- Parameters:
  - The first parameter is a function to run or a reference to a function defined elsewhere.
  - The second parameter is a number representing the duration in milliseconds to wait before executing the code.
- You can pass zero or more values after the duration as parameters for the function.
- Example: If we have a function `greet` that logs "hello" to the console, we can pass it into `setTimeout` with a duration of two seconds.
- To cancel a timeout, use `clearTimeout` with the identifier returned by `setTimeout`.

#### Clearing Timeouts

- A more practical scenario is clearing timeouts when the component is unmounting to free up resources and prevent code from executing on an unmounted component.

#### setInterval

- `setInterval` is used to repeatedly run the same code at regular intervals.
- The signature is similar to `setTimeout`: first parameter is the code to execute, the second parameter is the duration in milliseconds, and zero or more arguments for the passed-in function.
- Example: Function `greet` is called every two seconds, logging "hello" to the console.
- You should clear intervals when appropriate using `clearInterval` by capturing the return value from `setInterval`.

#### Additional Points

- Timers and intervals are not part of JavaScript itself; they are implemented by the browser, and `setTimeout` and `setInterval` are names given to that functionality in JavaScript.
- The duration parameter is the minimum delay, not guaranteed. JavaScript will execute the function when the specified time has elapsed and the call stack is free.
- Recursive `setTimeout` versus `setInterval`: Recursive `setTimeout` guarantees the same interval between executions, while `setInterval` considers the time taken to execute the code, potentially leading to varying intervals. Recursive `setTimeout` offers more flexibility in choosing different intervals for each iteration.

#### Conclusion

- With a good understanding of `setTimeout` and `setInterval`, in the next lecture, we will delve into essential exercise problems from an interview perspective.

### **=>** Callbacks

- Welcome back! In this lecture, we are going to learn about callbacks in JavaScript.
- Let's begin by understanding an important point: in JavaScript, functions are first-class objects. What that means is that, just like an object, a function can be passed as an argument to a function, and a function can also be returned as values from other functions.
- Let's understand this with a simple example:
  - I have a function called `greet` which accepts a `name` parameter and logs to the console "hello" followed by `name`.
  - I then have another function called `greetVishwas`. What is special here is that the function accepts another function as its argument. Within the function body, we have a `const` declaration `name` equal to "vishwas," and we call the passed-in function with `name` as its argument.
  - Finally, we invoke `greetVishwas` passing in the `greet

`function. So, the control goes to`greetVishwas`, which calls `greetFn`. `greetFn`is nothing but the`greet`function we have defined here. So, execution goes to the`greet`function with`name` equals "vishwas," and "hello vishwas" is logged to the console.

- So, `greetVishwas` is a function that accepts another function as an argument, and you might be pleasantly surprised to learn that any function that is passed as an argument to another function is called a **callback function** in JavaScript.
- Also, the function which accepts a function as an argument or returns a function is called a **higher-order function**.
- If I simply rename the function and its argument to convey what they stand for on line 5, we have `higherOrderFunction` which accepts a `callbackFunction`, and then on line 7, calls that callback function passing in the `name` constant.
- So, we now know what a callback function is. You might be thinking, is that it? Well, yes, a function passed as an argument to another function is called a callback function.
- But what we need to understand is why do we need a callback function? We can answer that by categorizing callbacks into two: synchronous callbacks and asynchronous callbacks.
- Let's first talk about synchronous callbacks:
  - A callback which is executed immediately is called a synchronous callback. The `greet` callback function from earlier is an example because the function gets executed immediately when the control goes inside the higher-order function.
  - A more practical example is a callback function passed to methods like `sort`, `map`, or `filter`. In these cases, the callback function defines the logic that the higher-order function needs to apply. So, nothing too fancy when it comes to synchronous callbacks.
- Let's now move on to asynchronous callbacks, which will also bring our focus back on asynchronous JavaScript:
  - An asynchronous callback is a callback that is often used to continue or resume code execution after an asynchronous operation has completed.
  - So, in the async world, callbacks are used to delay the execution of a function until a particular time or event has occurred, and this use case is really important because most of the applications that we build usually have some sort of data to be fetched. We all know that data fetching takes time, and we can only run the function we want to after the data has been fetched and not immediately.
- Let's take a look at a few examples of async callbacks which you might already be using without knowing that they're callback functions:
  - The first example is that of `setTimeout`, which we recently learned here. `setTimeout` acts as the higher-order function, and `greet` is the callback function. When the thread of execution goes through line number 5, does the `greet` function execute immediately? No, it waits for two seconds and then executes the `greet` callback function, making it an async callback.
  - Another common usage is event handlers. When JavaScript encounters line number 5, it does not immediately run the callback function. The function is only run when the user clicks on the button.
  - If you want a data fetching example with callbacks, you can go back to jQuery if you've used it before. `$.get` and the first parameter is the URL, and the second parameter is the callback function, which gets called only after the data has been loaded.
- This is the role that callback functions play in async JavaScript. They allow you to delay the execution of a function. Callbacks are something you're going to heavily see in Node.js. However, there is a problem with the callbacks pattern. If you have multiple callback functions where each level depends on the result obtained from the previous level, the nesting of functions becomes so deep that the code becomes difficult to read and maintain.
- In the code snippet here, you can see that each inner function depends on the result obtained from the outer function. So, once you go several levels deep like on line 5, the nesting starts to confuse you. The code is just not intuitive and only gets worse with more and more callback functions.
- As the application grows, to tackle this problem of "callback hell," promises were introduced in ES6, which we will learn about in the next lecture.
- But let me summarize about callbacks from an interview point of view:
  - Callbacks are functions passed as arguments to other functions. They can be synchronous if they execute immediately or they can be asynchronous, where they get executed after some time has passed, some event has occurred, or some data has been fetched.
  - Callbacks were the go-to pattern for asynchronously running code after fetching some data. However, as more and more requests had to be made based on the data obtained from the previous requests, developers started to encounter what is known as the "callback hell."
  - Callback hell makes the code difficult to reason about. An alternative and the recommended approach now is to use promises. Let's learn about that in the next lecture.

### **=>** Promise

- In this lecture, we are going to learn about promises in JavaScript.
- Here is a useful piece of info: In about eighty percent of the interviews I appeared for, I was asked about promises. So, if you're appearing for a senior dev position, you can take it for granted that you will be asked about this topic. So, make sure you have a thorough understanding of promises in JavaScript.
- I want to begin by helping you understand promises with a simple analogy. Once you understand the big picture in simple layman terms, we will then move on to understanding promises in JavaScript.

Consider a scenario where you and your roommate want to have dinner at home:

- You want to prepare your special soup.
- At the same time, you feel like having tacos from the food truck nearby.
- So, you ask your roommate, "Hey, can you go down to the food truck and get us some tacos?"
- Your friend says, "Sure." And when he's about to leave, you tell him there is no point in me waiting until you're back to prepare the soup, so I'll start with the soup now. But when you reach the place, can you promise that you'll text me so that I can start setting up the dining table? Also, let me know if something goes wrong. If you can't find the food truck or if they're out of tacos for the night, whatever might be the reason, just let me know that you cannot get the tacos, and I'll start cooking some pasta instead.
- Your friend says, "Sure, I promise. I'll head out now and text you in some time."

Now, you go about preparing your soup, but the status on tacos, we can say that it is currently pending till you receive that message from your friend. When you get back a text message saying that he is getting the tacos, your desire to eat tacos has been fulfilled, and you can then proceed to set up the dining table. If the text message says that he cannot bring back any tacos, your desire to have tacos has been rejected, and now you have to cook some pasta instead.

#### JavaScript Analogy

- Now, let's pick the important bits from the scenario and relate it back to JavaScript and promises. In the scenario:
  - Your friend is like a promise in JavaScript.
  - While your friend is on his way to the food truck, you know that it could take a while, and you don't want to sit idle, so you start preparing soup. In the meantime, this part is an analogy to an asynchronous operation in JavaScript.
  - Fetch tacos: When your friend texts you with "can get tacos" or "can't get tacos," it answers your question on whether he's getting the tacos or not. In JavaScript, this is the promise return value. If the return value is "can get tacos," the promise is said to be fulfilled. If the return value is "cannot get tacos," for whatever might be the reason, the promise is said to be rejected.
  - If the promise is fulfilled, you can set up the dining table. This is a success callback, or in other words, it is the callback function that gets executed when the promise is resolved successfully.
  - If the promise is rejected, you can cook some pasta. This is the failure callback, or in other words, it is the callback function that gets executed when the promise failed to resolve and was rejected instead.

That pretty much is a high-level overview of what a promise is in JavaScript. Let's read through the MDN definition of a promise:

> A promise is a proxy for a value, not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason.

To understand this definition better, let's break it down:

- A promise is a proxy for a value. Going back to our example, your friend made a promise that he will let you know whether he can or cannot get tacos, which is the promise value. The promise value is not necessarily known when the promise is created. In our example, you don't know which one of them is the value when your friend made his promise (he can get tacos or cannot get tacos); you don't necessarily know that value.
- A promise allows you to associate handlers with an asynchronous action's eventual success value or failure reason. Based on the promise value, you could decide ahead of time what has to be done when the promise is eventually fulfilled or rejected—that is, either setting up the table or cooking pasta.

Technically, a promise is simply an object in JavaScript, and a promise is always in one of the three states: pending (initial state, neither fulfilled nor rejected), fulfilled (the operation completed successfully), and rejected (the operation failed).

#### Why Use Promises

- Why would you use a promise? Well, for one and only one purpose: Promises help us deal with asynchronous code in a far simpler way compared to callbacks. Remember the callback hell we spoke about in the previous lecture? Well, that can be avoided with promises, and the code can be sort of read in a simple synchronous way. You'll see this in just a bit when we take a look at an example.

That is the "what" and "why" about promises. Next, let's see how to work with promises in JavaScript.

#### Working with Promises

- If you go back to our example, we have your friend as an analogy for a promise, "can get tacos" or "cannot get tacos," which is the promised value that your friend should inform you about. If he can get tacos, he's fulfilling his promise. If he cannot get tacos, he is rejecting his promise. And we have the success callback and the failure callback that we need to attach to the result returned by the promise, either set up the table or cook pasta.

Now, these six points cover the necessary information about a promise. So now, we need to understand three things in code:

1. How to create a promise (which covers point number one).
2. How to fulfill or reject the promise (which covers points two, three, and four).
3. How to execute callback functions based on whether the promise is fulfilled or rejected (which covers points 5 and 6).

Let's go over them one by one, starting with how to create a promise.

#### Creating a Promise

- We create an instance of a promise using the `new` keyword with the `Promise` constructor function.
- ```javascript
  const promise = new Promise((resolve, reject) => {
    // Your asynchronous code here
  })
  ```

#### Fulfilling or Rejecting a Promise

- The `Promise` constructor function accepts one function as its argument. Let's pass in an arrow function.
- This arrow function automatically receives two arguments: `resolve` and `reject`.
- `resolve` is a function that, when called, changes the status of the promise from pending to fulfilled.
- `reject` is a function that, when called, changes the status of the promise to rejected.
- You cannot directly mutate the status of a promise; you can call the `resolve` function to fulfill the promise or the `reject` function to reject the promise.

To keep things simple, let's use a `setTimeout`. We

're going to assume that for your friend to go out and text you back, it takes five seconds. So, our code now changes to incorporate the `setTimeout`. If the food truck was found, we will call `resolve` after five seconds; if the food truck was not found, we call `reject` after five seconds.

#### Executing Callback Functions

- The final part is to understand how to execute callback functions based on the status change of the promise.
- Let's define two callback functions:
  - `onFulfillment`: The function to be called if `resolve` is called after the async operation.
  - `onRejection`: The function to be called if `reject` is called after the async operation.

In our analogy, if the food truck was found and our promise is fulfilled, in which case we want to set up the table to eat tacos. If the food truck was not found and our promise is rejected, we have to start cooking the pasta. We've turned those actions into log statements.

Ideally, there would be more code in your callback functions, but we're simply logging to the console, and it serves the purpose. Now, I keep telling you that we are defining callback functions, but callback functions are functions that are passed in as arguments to other functions, right? Well, where are those other functions? This is the point where the promise we have created comes into picture. When we create a new promise using the `Promise` constructor function, the promise object gives us access to two methods or functions, `then` and `catch`. We call those functions using `promise.then` and `promise.catch`, as you can see on lines 18 and 19. But here's the important bit: If the status of the promise changes from pending to fulfilled by calling the `resolve` function, the function that is passed to the `then` function will automatically get invoked. And if the status of the promise changes from pending to rejected by calling the `reject` function, the function that is passed to the `catch` function will automatically get invoked. In our case, we need to pass the `onFulfillment` function to `then` and the `onRejection` function to `catch`. Since the two functions are passed in as arguments to other functions, they are callback functions. Hopefully, that makes sense now. Our promise code works as expected, but there is room for improvement.

What if we want to send out some data when resolving or rejecting a promise? That way, inside our callback functions, we can make use of the value to do something else. Well, it turns out that we can do that by passing an argument to `resolve` or `reject`. For the `resolve` function on line 6, we'll pass in a string that says "bringing tacos," and for `reject` on line 40, I'll pass in a string that says "not bringing tacos, food truck not there." But how do we access these strings in our callback functions? Well, the great thing about a promise is that it will automatically inject the argument passed to `resolve` as the argument to the `onFulfillment` callback and the argument passed to `reject` as the argument to the `onRejection` callback. You can see that I've included parameters to both these callbacks and simply log them to the console on lines three and line nine. So we would now see the output "bringing tacos" and "set up the table to eat tacos" from lines three and four when the promise is fulfilled, or if there is an error and hence a rejection, we would see "not bringing tacos" and "start cooking pasta" from lines nine and 10. Of course, in a practical scenario, your result would be an object or an array or any data type that your async operation returns, and the error might be an object with different error codes. In your on rejection callback handler, you might want to perform different actions based on the error status code. But this pretty much is the fundamentals of promises in JavaScript.

#### Interview Tips

- During an interview, begin by explaining what a promise is. You don't have to give the technical definition from MDN; it's probably better to explain in your own words.
- Talk about how promises are used for async operations in JavaScript. Give an analogy to a real-world scenario and connect it back to JavaScript.
- Talk about the three states that a promise can be in, namely pending, fulfilled, and rejected.
- Talk about the function that is passed into the promise constructor function.
- Talk about the `resolve` and `reject` functions and how they change the state of the promise from pending to fulfilled or pending to rejected.
- Finally, talk about the on fulfillment and on rejection callback functions, which let you decide what to run when a promise is either fulfilled or rejected.

If you're applying for a junior dev role, for the most part, this should give the interviewer a good impression of your knowledge of promises. However, there are a few more details for us to understand. We will do that in the next lecture, which is part two of promises. In the previous lecture, we learned the fundamentals of promises in JavaScript. We learned how to create a promise, how to change its state using the resolve and reject functions, and also how to attach callbacks using then and catch functions on the promise object. In this lecture, let's understand a few more points around the concept of promises, which are useful during an interview.

#### Chaining Promises

- At the moment, we pass in the on fulfillment callback to then function and on rejection callback to catch function. But you could, if you want to, pass on rejection as a second argument to the then function. The code works exactly as before; however, the usage of the catch function is encouraged because of one main reason. In the below two-argument approach, the on rejection callback handles errors from only the promise. However, if your callback function itself throws an error or an exception, there is no code to handle that. If you have a catch function, though, even if your on fulfillment callback throws an exception, it is still caught, and then you can handle that exception gracefully. So do make a note that the then function can accept both success and error callbacks, but it's not preferred over using the catch function.

#### Chaining Promises

- Another aspect to understand is chaining promises. At the moment, a promise is returned by using the new keyword followed by the promise constructor function. But let me tell you that both then and catch methods return promises. This means then and catch methods can be chained in JavaScript. So, the two lines on line 5 and 6 can be rewritten as `promise.then(onFulfillment).catch(onRejection)`, and this chaining can be done as many times as you want. This also solves the problem of callback hell we encountered a few lectures back. So the code with callbacks looked like this, and the same code with promises looks like this. As you can see, the code becomes much more readable and maintainable. In fact, it seems as if the code is synchronous. We begin by fetching the current user, then fetch the followers, then fetch their interests, then fetch their tags, then fetch the description, and then finally display the data. This is really important to keep in mind not only from an interview point of view but also for your day-to-day work. Promises can be chained.

### **=>** Static Methods

- The last point to discuss when it comes to promises for an interview is some of the static methods available with a promise. The first one is the `Promise.all` static method. Many times you may want to query multiple APIs and perform some actions but only after all the APIs have finished loading. For such scenarios, you can use `Promise.all`. Here's a good example from MDN docs to help you better understand this method. In the example we have here, the first promise immediately results; the second isn't really a promise, and the third results after 100 milliseconds. You can pass in all three promises as an array to `Promise.all`, and you see the output as an array containing the results of the individual promises. However, please do keep in mind even if one of the promises rejects, `Promise.all` will reject with that error message. So, this example can be summarized into the following points:

  - The `Promise.all` method takes an iterable of promises as an input and returns a single promise that results in an array of the results of the input promises.
  - The return promise will resolve when all of the input's promises have been resolved or if the input iterable contains no promises. However, it rejects immediately if any of the input promises reject or the non-promises throw an error and will reject with the first rejection message or error.

- A slight variation of `Promise.all` is `Promise.allSettled`, which waits for all input promises to complete regardless of whether or not one of them is rejected. So, `Promise.all` returns even if one promise rejects, whereas `Promise.allSettled` returns after all promises have completed, even if one or more promises reject.

- The next method is `Promise.race`. This method returns a promise that fulfills or rejects as soon as one of the promises fulfills or rejects with the value or reason from that promise. In the example we have here, even though both promises resolve, promise 2 results in 100 milliseconds, whereas promise 1 results in 500 milliseconds. So the value result from promise 2 is the value `Promise.race` will get, which is logged to the console on line 10. The output is the string "2" that you can see here.

So, `Promise.all`, `Promise.allSettled`, and `Promise.race` are some of the static methods to keep in mind for an interview.

Well, with that, we come to the end of the discussion about promises in JavaScript. In the next lecture, let's take a look at how asynchronous code can be further improved with async/await.

### **=>** Async & Await

- Welcome back. In the previous two lectures, we learned about promises in JavaScript.
- We learned about the basic syntax and how to add success and failure callbacks.
- We also learned how chaining promises resolves the problem we had with callback hell.
- Although it's clear that promises improve the readability of your asynchronous code, there is a way to improve it even further, that is by using the `async` and `await` keywords introduced in ES2017.
- The `async` and `await` keywords allow us to write completely synchronous-looking code while performing asynchronous tasks behind the scenes. In this lecture, let's understand more about `async` and `await`.

#### The async Keyword

- The `async` keyword is used to declare async functions.
- What are async functions? Async functions are functions that are instances of the `async` function constructor.
- Now, what is special about async functions? Well, unlike normal functions, async functions always return a promise.
- Let's understand this with an example:
  - Here you can see that we have a simple normal function `greet` which returns `"hello"`.
  - When you run this function in the browser console, it logs "hello," nothing that we don't already know.
  - Let's convert this function into an async function:
    ```javascript
    async function greet() {
      return 'hello'
    }
    ```
  - If you run this function in the browser console, you're going to see "promise fulfilled" followed by "hello" logged.
  - "Fulfilled" is the promise status, and "hello" is the promise value.
- Like I mentioned, an async function always returns a promise. If you don't explicitly return a promise, the async function will automatically wrap the value in a resolved promise.
- So, you could, if you wanted to, rewrite the function body as:
  ```javascript
  async function greet() {
    return Promise.resolve('hello')
  }
  ```
  - The output would be the same.
- In order to actually consume the string value when the promise fulfills, we would use the `then` function on the promise instance:
  ```javascript
  greet().then(value => {
    console.log(value)
  })
  ```
- Now you can see that the output on line 5 is the string "hello".
- So, the `async` keyword ensures that the function returns a promise, but it's not just that. The real advantage of async functions becomes evident when you combine them with the `await` keyword.

#### The await Keyword

- The first point is that the `await` keyword can be put in front of any async promise-based function to pause your code until the promise settles and returns its result.
- In simple terms, you can say that the `await` operator makes JavaScript wait until the promise settles and returns a result.
- The second point about the `await` keyword is that it only works inside async functions; you cannot use `await` in normal functions.
- Let's understand this with an example:
  - We have an async function `greet`.
  - Within the function body, on line three, we create a promise that resolves after one second.
  - We store the promise in a variable called `promise`.
  - In the next line, we `await` the promise and assign the returned value to the `result` variable.
  - On line 9, we log the `result` to the console, which prints "hello."
- What is happening here is that the `await` keyword basically pauses code execution until the promise settles.
- In this example, the promise takes one second to settle, so after a second, the execution resumes, and "hello" is logged to the console.
- It's important to note here that the `await` keyword literally suspends the `greet` function execution until the promise settles and then resumes it with the promise return value.
- The JavaScript engine can do other tasks in the meantime, but as far as the `greet` function is concerned, there is one second of suspension where no further code will execute.
- If we go back to the promise chaining example we had a look at in the previous lecture, we can rewrite it using `async/await` in the following way:
  ```javascript
  async function getData() {
    try {
      const user = await fetchUser()
      const followers = await fetchFollowers(user.id)
      const interests = await fetchInterests(followers[0].id)
      const tags = await fetchTags(interests[0].id)
      const description = await fetchDescription(tags[0].id)
      displayData(description)
    } catch (error) {
      handleError(error)
    }
  }
  ```
  - You can see that the code resembles synchronous code and is even more readable than a promise chain.
  - In fact, error handling is also simplified, as you can simply use try-c

### **=>** Event Loop

- In this lecture, let's understand the all-important event loop in JavaScript.
- What do you know about the event loop in JavaScript? It's a popular question for a senior front-end developer interview.
- Learning about the event loop early in your career as a front-end developer can help you write better asynchronous code.
- We'll divide this discussion on the event loop into four concise lectures.
- In this lecture, we'll start with a small recap of async programming in JavaScript and introduce the essential components for running asynchronous code.
- We'll also see how these components work during the execution of a simple synchronous code snippet.
- In the next three lectures, we'll explore the same concepts with asynchronous code snippets.
- We'll dive deeper into how `setTimeout` code executes, how promises work, and finally, how code combining these topics executes.
- By the end of the fourth lecture, you'll have a better understanding of async JavaScript and JavaScript in general.

#### Recap of Async Programming in JavaScript

- JavaScript is a synchronous, blocking, single-threaded language.
- To make async programming possible, JavaScript alone isn't enough; we also need the web browser.
- The JavaScript runtime environment includes the JavaScript engine, memory heap, call stack, web APIs, callback queue (or task queue), and the event loop.
- The JavaScript engine consists of a memory heap and a call stack.
- Variables and functions are allocated memory in the heap, and functions are pushed onto the call stack when executed.
- Web APIs provide features like `setTimeout`, `Promise`, `XMLHttpRequest`, and the DOM, which are not implemented in JavaScript itself.
- Callback queue (or task queue) stores callbacks that are ready to be executed.
- The event loop checks if the call stack is empty; if so, it pushes items from the queue onto the stack.

#### Synchronous Code Execution

- Visualizing the execution of a simple synchronous code snippet.
- Demonstrated with a code snippet containing three `console.log` statements.
- Explained how functions are pushed onto the call stack, executed, and popped off in a last-in, first-out manner.
- Showed how synchronous code runs in a straightforward manner without involving the callback queue or event loop.

#### Conclusion

- Understanding how the call stack works is crucial for understanding asynchronous code.
- Introduced the key components of the JavaScript runtime environment.
- In the next lecture, we'll delve into the execution of code involving `setTimeout`.
