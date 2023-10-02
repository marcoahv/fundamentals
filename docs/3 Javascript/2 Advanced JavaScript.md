---
sidebar_position: 2
---

# Advanced JavaScript

### **=>** Nested Function Scope

- let's begin by revisiting the concept of scope in JavaScript.
- In the fundamentals crash course, we learned about three types of scope:
  - Block scope, which dictates that variables declared inside a pair of curly braces cannot be accessed from outside the block.
  - Function scope, which dictates variables declared inside a function cannot be accessed from outside the function.
  - Global scope, which is the scope outside a top-level block or function of code. Globally scoped variables can be accessed inside a block or function.
- We also had a look at examples related to each of these scopes. In case you missed it, please watch the last 10 to 15 minutes of the fundamentals crash course for continuity.
- Now, in the advanced crash course, let's learn about nested function scope with an example.
- In `main.js`, let's declare a variable `a` and initialize it to 10 in the global scope.
- Next, let's define a function called `outer`, and within the body of the function, define a variable `b` and initialize it to 20.
- Within this function, let's define another function called `inner`. In JavaScript, it is possible to define a function within a function.
- So, function `inner`, and within the `inner` function, let's declare another variable `c` and initialize it to 30. Then, log `a`, `b`, and `c` to the console within the `inner` function.
- Next, within the `outer` function, we invoke the `inner` function.
- Finally, we invoke the `outer` function.
- If we save the file and run the code (`node main`), what do you think is logged in the terminal? The output is 10, 20, and 30.

### **=>** Closure

- Alright, with this understanding of nested function scope, we are now ready to proceed to the second concept in this advanced JavaScript crash course, which is closures.
- Now, what exactly is a closure? According to Mozilla Docs, a closure is the combination of a function bundled together with references to its surrounding state. Closures are created every time a function is created at function creation time.
- Now, I refer to MDN Docs for most things related to JavaScript, but this definition doesn't really help me understand what a closure is with the knowledge of JavaScript I have so far. So, let's head back to VS Code and understand what exactly is a closure in JavaScript.
- I will then describe closure in simple terms for you to remember.
- In the example about nested function scope, we learned that nested functions have access to variables declared in their own scope as well as variables declared in the outer scope.
- Let's now look at a more simplified version of this example. Comment out the code we have written so far.
- Let's start over. We define a function called `outer`. Within the function body, we declare a variable `counter` and initialize it to zero.
- We also define a nested function called `inner`, where we increment the value of `counter` and then log that value right after the function definition. We invoke the `inner` function inside the `outer` function.
- Finally, we invoke the `outer` function. Now, if you were to run this code, what do you think is logged to the console (`node main`)? The answer is one.

Certainly! Here's the provided text formatted with Markdown using H3 headers, bullet points, and backticks for code terminology:

### **=>** Currying

- The next topic to learn is function currying, and the best way to understand function currying is with an example, so that's the approach we will take.
- Let's start with the definition: What is function currying?
  - Currying is a process in functional programming in which we transform a function with multiple arguments into a sequence of nesting functions that take one argument at a time.
  - So, if we had a function `f` of `a, b, c`, we transform it into `f(a)(b)(c)`.
  - It is important to note that currying doesn't call a function; it simply transforms it.
- Let's head back to VS Code and understand this with a simple example.
- Let's define a function `sum` which takes three parameters `a, b, c` and returns their sum.
- To call or invoke this function, we write the function name followed by parentheses, and within parentheses, we specify the arguments.
- Let's go with `2, 3, 5`, which correspond to `a, b, c`.
- If we were to run this code (`node main`), we get the output `10`.
- Now, currying this `sum` function means that we need to transform `sum` from calling it with all three arguments to calling it with one argument at a time.
- So, from `sum(2, 3, 5)`, we should transform it to `sum(2)(3)(5)` one argument at a time.
- The way we do that is by nesting functions where each function takes one argument at a time.
- Let's understand the code:
  - We start off with a function called `curry`, and this function will accept a function as its argument and return the curried version of the function.
  - For each of the three arguments, we return individual functions that accept one argument at a time.
  - The functions will be nested one inside the other.
  - So, the `curry` function will return a function which accepts an argument `a`.
  - This function, in turn, will return a function which accepts argument `b`.
  - This function, in turn, will return a function which accepts argument `c`.
- We are transforming from accepting three arguments at a time to one argument at a time.
- Now, when we have broken down the function into nested functions, we check if we have all the necessary arguments to run the given function. In our case, we have `a`, `b`, and `c`, so we have all the arguments.
- So now, from the innermost function, we return the actual passed-in function with all the necessary arguments `a, b, c`.
- With this `curry` function in place, we can now write `const curriedSum = curry(sum)` to call the `curry` function passing in the `sum` function.
- In the next line, we can use `console.log` and invoke the curried `sum` function, passing in one argument at a time: `curriedSum(2)(3)(5)`.
- If you run `node main`, the output will still remain `10`.
- Now, if this syntax doesn't look that different from what you've been doing all this while, let me break this down:
  - `const add2 = curriedSum` and we pass in `2`.
  - `const add3 = call add2` passing in a value of `3`.
  - `const add5 = call add3` passing in `5`.
- Finally, log to the console `add5`.
- The three parentheses can be broken down into three separate function calls. The first function takes the first argument, the second takes the second argument, and the third takes the third argument, then computes the sum of all three arguments and returns the result.
- So, this will just be `add5` instead of invoking `add5`.
- If you run `node main`, we see `10` from both the log statements.
- We have transformed a function with multiple arguments into a sequence of nesting functions that take one argument at a time.
- Currying is used to compose reusable functions. For example, you can create functions like `logInfo`, `logError`, `logNow`, etc., where one or more arguments are set, and you get to choose the remaining arguments. Currying makes composing new functions very easy. If you have understood the general concept about currying, I would recommend you take a detour, google more about function currying, and get an understanding of the practical applications.

### **=>** this Keyword

- Alright, we're now going to move on to one of the most confusing parts of JavaScript, which is the `this` keyword.
- The JavaScript `this` keyword, which is used in a function, refers to the object it belongs to. It makes functions reusable by letting you decide the object value.
- And `this` keyword value is determined entirely by how a function is called.
- Now, if that doesn't make sense, let's understand with a few examples how to use the `this` keyword and how its value changes based on the function call.
- Back in VS Code, let's define a function called `sayMyName`, which has one parameter, `name`, and logs to the console "My name is" followed by the `name` passed in.
- Looking at the function, if I were to ask you what this function would log to the console, you would say we can only determine that by looking at the function call.
- If I call the function passing in "Walter White," you would say the output is "My name is Walter White."
- If I call the function passing in "Heisenberg," you would say the output is "My name is Heisenberg."
- So, you can determine what is logged to the console by how a function is called, and this is the same with the `this` keyword.
- You can determine the value of the `this` keyword by how a function is called.
- Now, there are four ways to invoke a function in JavaScript and determine the value of the `this` keyword:
  1. Implicit binding
  2. Explicit binding
  3. New binding
  4. Default binding
- Let's look at examples for each of them.

#### Implicit Binding

- Implicit binding rule will tell you what `this` refers to most of the time.
- Consider an object `person` with a property called `name` set to "Vishwas" and also a function (or method) called `sayMyName`, which logs `this.name` to the console, "My name is" followed by the `name` property.
- To invoke the function, we use the dot notation: `person.sayMyName`.
- We now know how the function is called, which means we now have what we want to determine the `this` keyword inside the `sayMyName` function.
- The implicit binding rule states that when a function is invoked with the dot notation, the object to the left of the dot is what `this` keyword is referencing.
- JavaScript will now treat `this.name` as `person

.name`, which is equal to the string "Vishwas."

- The output, if I run `node main`, is "My name is Vishwas." This is the implicit binding rule.

#### Explicit Binding

- The second rule to determine `this` keyword is explicit binding.
- Consider the same function `sayMyName`, but this time the function is separated from the `person` object.
- So, `function sayMyName` and we log to the console "My name is `this.name`."
- In this scenario, we have to explicitly specify the context when the function is called.
- To do so, we can use the `call` method. In JavaScript, every function has a built-in method named `call` which allows you to specify the context with which a function is involved.
- So, to invoke `sayMyName` with the `person` object context, we have to write `sayMyName.call` with `person` as the argument.
- The first argument passed to `call` is what `this` keyword inside `sayMyName` is referencing.
- If you run `node main`, the code will once again output "My name is Vishwas" to the terminal. This is the second rule, which is explicit binding.

#### New Binding

- The third rule for determining `this` in a function is the new binding.
- In JavaScript, we can invoke a function with the `new` keyword, and in such a scenario, the function is invoked with `this` keyword referencing an empty object.
- So, consider a function called `Person` which accepts a `name`.
- Within the function, we set `this.name` equal to the passed-in `name`.
- With this function, we can now create multiple persons or people by passing in different names each time.
- So, `const p1 = new Person("Vishwas")` and similarly, `const p2 = new Person("Batman")`.
- This `Person` function right here is what is known as a constructor function, as we can create multiple persons from this function.
- Now, when we invoke a function with the `new` keyword, JavaScript under the hood will create a new empty object that `this` keyword will reference.
- Within function `Person`, I'm going to add as a comment, "`this` is equal to an empty object."
- You can then add properties to the object using `this` followed by the dot notation. So, `this.name = name`.
- We are not creating this empty object; the `new` keyword internally does this when function `Person` is invoked with the `new` keyword.
- The `new` keyword also does a few other things, but from the `this` keyword point of view, I just want you to remember the following line: When a function is invoked with the `new` keyword, within the function, `this` keyword will always reference a new empty object.
- If we log `p1.name` and `p2.name` and run `node main`, we see "Vishwas" and "Batman" in the terminal.
- Alright, the fourth and final rule is the default binding, which is the fallback binding if none of the other three rules are matched.
- So, consider the same `sayMyName` function. Let's call it as you would normally call a function, `sayMyName` with parentheses.
- As you can see, there is no dot notation, no `call` method, or no `new` keyword as well.
- If we simply invoke `sayMyName`, what do you think the output is?
- Run `node main`, and you can see it is "My name is undefined."
- If none of the three rules are satisfied, JavaScript will default to the global scope and set `this` keyword to the global object.
- In the global scope, JavaScript will try to find a variable called `name`. Since it doesn't find it, `this.name` is undefined.
- If you were to have the variable `name` in the global scope, however, like `const name = "Superman"`, if it were to be in a browser (but since it is Node.js), `this.name` is equal to "Superman."
- Run `node main`, and you can see the output is "My name is Superman."
- So, the fourth binding is the default binding where `this` keyword will rely on the global scope.
- As you can see with this keyword, you can introduce a dynamic value within the same function.
- What you should know is that when multiple rules can be applied to figure out `this` keyword, new binding takes top priority, followed by explicit binding, followed by implicit binding, followed by default binding.
- So, this is how `this` keyword works in JavaScript. It lets you specify the execution context, and its value is pretty much determined by how the function is invoked.

Certainly! Here's the provided text formatted with Markdown using H3 headers, bullet points, and backticks for code terminology:

### **=>** Prototype

- All right, next, let's take a look at another concept that is usually difficult to understand, which is the concept of `prototype`.
- When it comes to prototype, there is a lot of terminology, and when we try to understand everything, it may lead to confusion and us losing interest in the topic, especially as beginners. In this crash course, we will learn with a simple example why and how prototype works in JavaScript.
- Let's begin by defining a function called `person`.
  - ```javascript
    function person(firstname, lastname) {
      this.firstname = firstname
      this.lastname = lastname
    }
    ```
- We can now create instances of this `person` function using the `new` keyword.
  - ```javascript
    const p1 = new person('Bruce', 'Wayne')
    const p2 = new person('Clark', 'Kent')
    ```
- Now, as you already know, JavaScript is a dynamic language, so it allows us to attach new properties to an object at any given time.
- So, on `person1`, we can attach `person1.getFullName`, which is going to be equal to a function that returns `this.firstname` followed by `this.lastname`. You can also use the template literal syntax for string concatenation.
  - ```javascript
    person1.getFullName = function () {
      return `${this.firstname} ${this.lastname}`
    }
    ```
- What you should know here is that `getFullName` property is specific to just `person1`.
- If we log `person1.getFullName` to the console and run `node main`, we see "Bruce Wayne" logged in the terminal.
- However, if we run `person2.getFullName` and run `node main`, we get an error: `person.getFullName is not a function`.
- Now, what if we wanted to attach a property or a method that should be applied to every instance of this `person` function? In our example, `getFullName` is a function that benefits us by being available on all instances of the `person` function, since it is generic. It is not specific to just `person1`. It would work on `person1`, `person2`, `person3`, or even `person100`.
- Well, this is where `prototype` comes into the picture in JavaScript.
- Every function has a property called `prototype` that points to an object.
- We can make use of that prototype object to determine all our shareable properties.
- So, instead of `person1.getFullName`, we change it to `person.prototype.getFullName`.
- Now, if we log `person1.getFullName` and `person2.getFullName` and run `node main`, we see "Bruce Wayne" and "Clark Kent" in the terminal.
- You have defined the `getFullName` function once, but it is available on every instance of the `person` function.
- Again, on a side note, the function that is used with the `new` keyword is called a `constructor function`.

### **=>** Prototypal Inheritance

- Now, one use of `prototype` is to share properties and methods across instances. The other use, which is pretty significant as well, is inheritance.
- In JavaScript, inheritance is supported through the concept of prototypes and is referred to as `prototypal inheritance`. Let's understand how it works.
- For our example, we're going to create a superhero that is supposed to inherit properties and methods from `person`. So, a superhero will have a first name, last name, and a `getFullName` function. But apart from that, a superhero will also have a property called `isSuperhero` set to `true`, and a `fightCrime` function that logs a message to the console.
- Let me walk you through the code.

  (Reordering the code for continuity)

- Now, we are going to begin by defining the `superhero` function.
  - ```javascript
    function superhero(fname, lname) {
      this.isSuperhero = true
      this.fightCrime = function () {
        console.log('Fighting crime!')
      }
    }
    ```
- However, `batman` only has access to `isSuperhero` and `fightCrime`. We want `batman` to also have a first name, a last name, and the `getFullName` function.
- Instead of duplicating the code we have written for `person`, let's inherit them.
- First, let's inherit the `firstName` and `lastName` properties.
  - ```javascript
    superhero.prototype = Object.create(person.prototype)
    ```
- What this does is when you try to access `batman.getFullName()`, JavaScript checks the prototype object of `superhero`. It doesn't find it. However, it sees that the prototype object has a chain to `person.prototype`, created because of this `Object.create` method. It checks to see if `person.prototype` has a `getFullName` method; it does, and it will execute that method. This is how the method is inherited through the prototype chain, hence the name `prototypal inheritance`.
- So, if you now pass in "Bruce" and "Wayne" while creating `batman` and log `batman.getFullName()` and run `node main`, we see "Bruce Wayne" logged in the terminal.
- `Batman` has inherited properties and methods from `person`.
- One last bit of cleanup we need to do is to ensure `superhero.prototype.constructor` is equal to `superhero`. Otherwise, JavaScript thinks that a `superhero` is created from `person`, which is incorrect.
- Run the code again, and we still see "Bruce Wayne". `Superhero` has inherited properties and methods from `person`.

#### Conclusion

- In conclusion, `prototypes` in JavaScript allow us to share properties and methods between objects efficiently and enable prototypal inheritance, which is a powerful feature for building reusable and extensible code.
- Understanding prototypes is essential for mastering JavaScript and working effectively with the language.

Certainly! Here's the provided text formatted with Markdown using H3 headers, bullet points, and backticks for code terminology:

### **=>** Class

- All right, for our next topic, we're going to learn about the `class` keyword which was introduced in 2015.
- A minute ago, we learned about prototypal inheritance. If you're coming to JavaScript from a language like C++ or Java, it might be very confusing. You would be more used to class-based inheritance. To somewhat relate to that, classes were introduced in 2015. However, the class syntax does not introduce a new object-oriented inheritance model in JavaScript. Classes are primarily syntactical sugar over the existing prototypal inheritance.
- Let's learn how it works by rewriting the prototypal inheritance code with classes.
- Let's start with this `person` function:
  - Change `function person` becomes `class person`.
  - The initialization of the name argument to this object gets moved into a constructor, so `constructor` accepts `firstName` and `lastName`, and within the constructor, `this.firstName` is equal to `fname`, `this.lastName` is equal to `lname`.
  - All the methods on the prototype object are rewritten as methods within the class.
  - `sayMyName` is a function where we return `this.firstName` followed by `this.lastName`.
- We can now comment out the previous code and create instances of this `person`.
  - `const classPerson1 = new person` and we pass in `Bruce` and `Wayne` as arguments.
  - We can now log `classP1.sayMyName` to the terminal, and we see `Bruce Wayne` being logged.
- So, we can create an instance and access the properties and methods like before. Nothing changes; the `class` keyword simply makes the syntax better for the code we already had in place.
- Let's now rewrite `superhero`, which inherits from `person`. Two keywords take care of the entire inheritance, and those two keywords are `extends` and `super`.
- We specify that `class superhero` `extends class person`, and in the constructor, we accept `firstName` and `lastName`, and we invoke the `super` method that JavaScript provides us, passing in `fname` and `lname`. This will call the `person` class constructor.
- Once we call `super`, we set the superhero properties and methods in the class, `this.isSuperhero` is set to `true`, and then we define the `fightCrime` method `console.log` fighting crime.
- But this simple class syntax is pretty much all we have to write. Classes are just syntactical sugar over what was already existing in JavaScript. So, make sure you understand how to create a class, how to initialize properties, how to add methods, how to create an instance of the class, how to inherit using the `extends` and `super` keywords. That is pretty much all you have to know about the `class` keyword from a beginner's point of view.

### **=>** Iterables and Iterators

- Alright, let's move on to the penultimate topic in this crash course, which is `iterables and iterators`.
- I'm going to begin by setting some context about iteration in JavaScript.
- Before 2015, we had three looping constructs: `for` loop, `while` loop, and `do while` loop.
- Let me show an example of how to iterate and access data with a string and array type using the `for` loop.
- On the left-hand side, you can see that we have stored the string "Vishwas" in a variable called `sdr`, and we basically want to log every character in the string to the console.
- Similarly, on the right-hand side, the array is a collection of items which is nothing but the characters of the string we have already seen. We again want to log to the console each item in the array.
- This form of iteration has two difficulties, if I can call it that:
  - First, to apply some functionality on each element in the string or each item in the array, we first need to figure out how to access that element. We need to create a new variable (`i`) to keep track of it, ensure it satisfies a condition, and finally increment that value of `i` to access the next element in the collection. If there are nested `for` loops, we have to do this all over again with a second variable. So, we would have difficulty in accessing the element itself before even getting to the part where we do something with that element.
  - The second difficulty is with the type of the data structure. It is kind of difficult to manage iteration on data for various types of data structures. You can see that iterating and accessing elements on a string is different from iterating on an array. There was a need to iterate over various data structures in a new way that abstracts away the complexity of accessing elements one by one and was at the same time uniform across the different data structures. This would make our code more readable and less confusing.
- That is exactly the reason for the introduction of `iterables and iterators` in JavaScript.
- Iterables and iterators make it possible to access data from a collection one at a time, which allows us to focus on what to do with the data rather than how to access the data.
- In the year 2015, two new iteration protocols were introduced which help with iteration. They are the `iterable` and `iterator` protocols.
- It was also decided that some of the data structures would implement the iterable protocol by default. Examples include strings, arrays, and two more data structures which we haven't discussed, namely maps and sets. They are termed as `built-in iterables`.
- A new looping construct, which is the `for...of` loop, was introduced to iterate over an iterable. Here is how the loop works with the same string and array.
- As you can see, we don't really have to worry about accessing the element from the data structure. It is just given to us one by one in a sequence, allowing us to focus on the functionality. Of course, I'm just logging the value to the console, but you can add any functionality you want.
- But clearly, this is better than creating a variable `i

`, tracking its value, and checking conditions before accessing the next element.

- But what exactly is an iterable? Let's understand that now.
- An object which implements the iterable protocol is called an `iterable`.
- Then, what is the iterable protocol? It states the following: For an object to be an iterable, it must implement a method at the key `Symbol.iterator`. That method should not accept any argument and should return an object which conforms to the iterator protocol.
- Now, what is the iterator protocol? The iterator protocol decides whether an object is an `iterator`. An object is an iterator when it satisfies the following rule: The object must have a `next` method that returns an object with two properties: `value`, which gives the current element, and `done`, which is a boolean value indicating whether or not there are any more elements that could be iterated upon.
- Now, if this made no sense whatsoever, don't worry, because I was on a similar boat when I started on this topic. For me, what helped was implementing my own simple iterable and iterator. Let's head back to VS Code and do just that.
- Consider an object which is not a built-in iterable, so `const obj` is equal to an empty object. Our goal is to make this object an iterable so that when this object is used with the `for...of` loop, it will print "hello world" one word at a time.
- For an object to be an iterable, it must implement a method at the key `Symbol.iterator`. So, add a key which is going to be `Symbol.iterator`, and add this key, we must implement a method.
- The final rule of the iterable protocol is that this method should not accept any argument and should return an object which conforms to the iterator protocol.
- At the moment, we don't know much about what an iterator is, but we do know it's an object that implements the iterator protocol. So, I'm going to create an object called `iterator` and then return it.
- `const iterator` is an object I'm going to return `iterator`. This is pretty much the iterable protocol expressed in code.
- Next, we need to implement this iterator. Now, an iterator is an object that has a method at the key `next`. The method should return an object which contains two properties: `value` and `done`.
- So, in the iterator object, we're going to define a method at the key `next`, and this method will return an object that contains two properties: `value` and `done`. `value` gives the current element, and `done` is a boolean value which indicates whether there are more elements to be iterated upon.
- I'm currently not returning the object on line 145 because this is where we need to come up with our logic.
- So, within the outer function defined at key `Symbol.iterator`, we declare a variable called `step` and initialize it to zero.
- Within the inner function, we increment the value of `step` by one, and based on the value of this `step` variable, we return the appropriate object.
- If `step` is 1, we return an object where `value` is going to be the string "hello" and `done` is set to `false`.
- Similarly, else if `step` is equal to 2, we're going to return a similar object where `value` is "world" and `done` is still `false`.
- So, for step one and two, we return "hello" and "world", and `done` is set to `false`. When `step` goes beyond 2, we return `undefined`, and `done` is set to `true`.
- So, return an object where `value` is `undefined`, and `done` is set to `true`.
- So, we are saying there is no more iteration necessary.
- If we now use this object with a `for...of` loop:
  - `for (const word of obj) console.log(word)`
- You can see it logs the value "hello" followed by "world". Our object is now an iterable. To be more precise, we have created our very own iterable.
- Now, similar to what we have done here, JavaScript does it internally for strings, arrays, maps, and sets. That is how you can easily iterate them with the `for...of` loop. Hopefully, you now know what are iterables and iterators in JavaScript.

Sure, here's the provided text formatted with Markdown using H3 headers, bullet points, and backticks for code terminology:

### **=>** Generators

- All right, for the last topic in this advanced JavaScript crash course, we're going to learn about `generators`.
- We've just seen how to create our very own iterable and iterator. Even though it is not difficult to make an iterator ourselves (that is, create an object with the `next` method and define its behavior), it is definitely a verbose implementation. Wouldn't it be nice if there was something that would create an iterator for us instead of us having to write it? That is where generators come into the picture. Generators are a special class of functions that simplify the task of writing iterators.
- Now, there is a lot to learn when it comes to generators, but for this crash course, we're only going to focus on the part where it relates to iterators in JavaScript. In fact, what we are going to do is rewrite this very "Hello, World" example using generators that will allow you to compare and contrast writing our own iterators versus using generators.

#### Creating a Generator

- So, how can we create a generator in JavaScript? We write functions using the `function` keyword. So, `function normalFunction() { ... }`.
- A generator, since it is a special function, we use the `function` keyword followed by an asterisk: `function* generatorFunction() { ... }`.

#### Generator Behavior

- But what is so special about it? Now, we all know that a normal function follows the `run to completion` model. So, if I add two log statements to log "Hello" and "World", this normal function will not stop before the last line is executed. The function will log "Hello" followed by "World" to the console. The only way to exit this function is by returning from it or throwing an error. So, if we call `normalFunction()` and run `node main`, we see "Hello" and "World". If you call the function again, it will begin execution from the top, so we say "Hello, World" and "Hello, World".
- In contrast, a generator function is a function that can stop midway and then continue from where it stopped, or you could say a generator function can pause the execution to achieve that behavior. We use the `yield` keyword. So, `yield "Hello"` and in the next line, `yield "World"`.
- `yield` is an operator with which a generator can pause itself. Every time a generator encounters a `yield`, it yields the value specified after it.

#### Invocation and Iteration

- Next, let's talk about invocation. We invoke a generator function by adding parentheses after the function name. So, `generatorFunction()`.
- However, unlike returning a value from a normal function, a generator function always returns what is called a `generator object`. So, `const generatorObject = generatorFunction()`, and this generator object is an iterator.
- Instead of us having to create an iterator, a generator function will create it for us, and because the generator object is an iterator, it can be used in `for...of` loops. So, `for (const word of generatorObject) console.log(word)`.

#### Benefits of Using Generators

- As you can see with generators, we not only have created an iterable that returns "Hello" followed by "World," but we also have a simpler way to create iterators.
- We have achieved the same iteration behavior we had seen two minutes ago, but this time it is much simpler to define our custom iteration behavior.
- I think it is a bit obvious looking at the code; the benefit we get from using the generator function:
  - First, we don't have to worry about `Symbol.iterator`.
  - Second, we don't have to worry about implementing the `next` method.
  - Third, we don't have to create the object that is returned from the `next` method.
  - Finally, we don't have to be responsible for managing the state in our iterator. We have a variable called `step` that needs to be tracked between iterations; however, we have nothing of that sort in a generator.
- So, that is about generators in JavaScript. Generators were introduced in 2015 and allow you to define an iterative behavior by writing a single function whose execution is not continuous.
- Well, with that, we come to the end of this crash course on advanced JavaScript.
