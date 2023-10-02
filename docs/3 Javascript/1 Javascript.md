---
sidebar_position: 1
---

# JavaScript

### **=>** What is JavaScript?

- First, let us understand what is JavaScript.

- JavaScript is a high-level, often just-in-time compiled programming language that conforms to the ECMAScript specification.

- Now, that's a lot to take in, so let me break it down in simple terms.

- High-level means it is a friendlier language to write code with.

- Just-in-time compiled means the code we write is compiled during execution rather than before execution.

- ECMAScript specification is a standard that JavaScript adheres to, which ensures the code we write will work across any browser.

- Hopefully, you're now clear on what JavaScript is.

#### Why learn JavaScript?

- Now the next obvious question is why learn JavaScript?

- The first reason is that JavaScript, alongside HTML and CSS, is one of the core technologies of the World Wide Web.

- Pretty much every website you come across uses JavaScript to handle interactivity and updates, which is not a problem because web browsers have a dedicated JavaScript engine to execute the code on the user's computer.

- The second reason is that you can also use JavaScript to build server-side applications.

- In 2009, with the introduction of Node.js, which is a JavaScript runtime environment, JavaScript code can be run outside the browser.

- This paved the way to build servers that can handle network requests, interact with databases, compute logic, return the result, and a lot more.

- So, you can pretty much build full-stack applications with JavaScript.

- But it doesn't stop at that.

- JavaScript is also used in mobile app development to create cross-platform apps that can run on both iOS and Android, and it is also used to create desktop applications.

- It is no wonder that JavaScript is the most popular programming language, according to the 2021 Stack Overflow Developer Survey.

- Now, irrespective of whether you'll be using JavaScript on the front end to build web apps, on the back end to build services, on mobile, or desktop to build apps, there are certain features that you must know.

- They are nothing but the language syntax and concepts.

- In this crash course, our focus is going to be just that.

- However, at the end of this course, I will talk about the next steps after you have had a good understanding of the fundamentals.

### **=>** Setup

- Now, for some setup to work with JavaScript, we need three things: a browser, Node.js, and a code editor.

- Ideally, you either need a browser or Node.js, but I will teach you to use them both.

- For the browser, I'm going to be using Chrome; you can choose to use any browser you already have installed.

- For Node.js, head over to [nodejs.org](https://nodejs.org/).

- You will need to download and install it.

- Click on LTS, which downloads the installer.

- Double-click the installer, stick to the defaults, and install Node.js.

- To write the JavaScript code, I'm going to be using VS Code.

- Head to [code.visualstudio.com](https://code.visualstudio.com/) and download and install the same.

- Once you have VS Code installed, in the side panel, open the extensions panel and make sure to install the Prettier extension; this will help format your code.

- Finally, open the editor inside a folder of your choice.

- I have created a folder called "javascript-crash-course" and opened VS Code inside that folder.

- Here, I'm going to create a new HTML file, "index.html." Type "exclamation" and tab to generate a simple HTML document.

- Within the `body` tag, add an `h1` tag that says "JavaScript Crash Course." Format the code using Alt + Shift + F, and this pretty much is all the setup we have to do.

- If you open this "index.html" file from the file explorer, you should see the text as expected.

- Now, we are ready to start learning JavaScript.

### **=>** How to run JavaScript

- The first thing you need to learn is how to run the JavaScript code you write.

- We can categorize this into two: either run the code in the browser or run it in the Node.js runtime.

- Let's start with the browser.

- The simplest way to execute JavaScript is in the browser console.

- Open Chrome and right-click.

- Click on "Inspect," and this brings up the Chrome Developer Tools.

- Navigate to the console panel.

- Here, you can type in the JavaScript code, and it gets executed.

- The first line of JavaScript you're going to learn is how to make JavaScript output the text "Hello, World." It is sort of the convention when you're starting with a new programming language to output "Hello, World." We write a JavaScript statement: `console.log("Hello, World");`.

- This is sort of the `printf` or `cout` statement if you're used to C or C++.

- When I press enter, you can see "Hello, World" being displayed.

- So, the first way to run JavaScript in the browser is to run it directly in the console.

- However, this is only suited for short snippets and not when we have to write several lines of code, which brings us to the second way of running JavaScript from within an HTML file.

- Just before the closing `body` tag, add a pair of `script` tags.

- Within these tags, you can add JavaScript code, and it will run when the HTML file is loaded in the browser.

- Let's add `console.log("Hello from script");`.

- If I now save the file and open it in the browser (which we already have here), refresh, and in the console, we see the text "Hello from script." Unlike HTML, JavaScript output will always be present in the console.

- So, this is the second way.

- Of course, it's not always a good idea to mix HTML and JavaScript in the same file.

- So, let's take a look at the third way of running JavaScript in the browser.

- Similar to external CSS, we can also have external JavaScript.

- Create a new file called "main.js"; "js" stands for JavaScript.

- Here, we can add JavaScript code.

- Let's type `console.log("Hello from main.js");`.

- Now, we need to include this script in the HTML file.

- For that, we use the `script` tag again, but we specify the `src` attribute, which will point to the JavaScript file.

- So, `<script src="main.js"></script>`.

- If we now save the file and refresh the HTML page in the browser, we see the newly added text, "Hello from," what is supposed to be "main.js." So, an external file linked to the HTML file; these are the three ways to run JavaScript in the browser.

- But like I mentioned, we can also run JavaScript outside the browser using Node.

- Let me show you how.

- In VS Code, click on "View" and then "Terminal"; this opens an integrated terminal where we can run some commands.

- First, let's check if Node.js is installed.

- Run the command `node --version`, and this should output the current version installed on your system.

- I have 16.13.2.

- Now run the command `node` followed by the JavaScript file name, which is "main.js." Press enter, and you

### **=>** Adding comments

- Now, another syntax which I would like to show before we proceed is how to add comments in JavaScript.

- If I type two forward slashes, that line becomes a comment and is ignored by JavaScript.

- It is for the user to get some idea about the code.

- So at the top, I can add two forward slashes and write a statement using `console.log`.

- If I now save the file and run the code `node main`, you can see the first line doesn't make it into the output; we only see the `console.log` statement printing "Hello from main.js."

### **=>** Variables

- All right, now that we know how to run the code we write, it is time to understand the first concept in JavaScript, which is variables.

- Variables are used to store information; the information can be the cost of an item, the name of a user, or any data that might be needed in the code.

- In JavaScript, in the year 2022, there are two recommended ways to declare variables using the `let` and `const` keywords.

- Let's look at an example: we use the `let` keyword followed by the name of the variable.

- For example, `age = 25`.

- So, we have stored a value of 25 in a variable called `age`.

- We can check this by logging the value to the console in the next line: `console.log(age)`.

- Make sure there are no quotes around `age`.

- Save the file, run `node main`, and we see 25 in the terminal.

- Similarly, we can declare variables using the `const` keyword.

- So, `const salary = 80,000`, and in the next line, `console.log(salary)`.

- Run `node main` again, and we see 80,000 being logged.

- Now, you might be wondering what is the difference between `let` and `const` declarations.

- Well, the difference is that all `const` declarations must be initialized, and once initialized, you cannot reassign a new value.

- So, if you were to declare `const sum` without any assignment and run the code `node main`, we see an error "missing initializer in `const` declaration." Also, if we assign a value of 0 or initialize with a value of 0 and then in the next line, change `salary` to 80,000, run the code, we see an error yet again, "Type Error: Assignment to constant variable." However, with `let`, save the file, comment out `salary`, run the code, and you can see we have no problem.

- Initialize `sum` to 0 and reassign a value of 5 in the next line, log the value to the console, so `console.log(sum)`.

- Save the file, run `node main`, and you can see the value of 5 in the terminal; there are no errors.

- A good rule of thumb is to always use `const` declarations unless the variable value is going to change, in which case you can make use of `let`.

- So, to declare variables in JavaScript, we make use of `const` and `let` keywords.

- Before we proceed, let's comment out the code we have so far so as not to print the previous code in the terminal.

### **=>** Data Types

- All right, the next topic to learn about is data types.

- Data types basically specify what kind of data can be stored and manipulated within a program.

- In JavaScript, data types can be categorized into primitive and non-primitive types.

- As per the latest specification, there are seven primitive types and one non-primitive type.

- Under primitives, we have:

  - String

  - Number

  - Boolean

  - Undefined

  - Null

  - BigInt

  - Symbol

- Under non-primitives, we have objects.

- Let's look at examples for each of them, starting with strings.

- A string is a sequence of characters that represent a text value in JavaScript.

- Strings are surrounded by backticks, double quotes, or single quotes.

- For example:

  - `const name = 'Vishwas'`

  - `const language = "JavaScript"`

  - `const channel = `Code Evolution``

- Next, we have the number data type that represents integer and floating-point numbers.

- For example:

  - `const total = 0`

  - `const pi = 3.14`

- We also have the boolean data type, which represents logical entities and can only have one of two values: `true` or `false`.

- For example:

  - `const isPrimaryNumber = true`

  - `const isNewUser = false`

- Undefined is a data type that represents a value that is not assigned.

- If a variable is declared but the value is not assigned, then the value of that variable will be undefined.

- For example:

  - `let result;`

- Null is a special value that represents an empty or unknown value in JavaScript.

- For example:

  - `const data = null`

- The next two values, BigInt and Symbol, we're not going to see examples of them in this beginner's crash course.

- BigInt is used to denote an integer value larger than what the number data type can hold, and Symbol is a data type introduced in 2015 that denotes a unique and unchangeable value.

- As a beginner, you don't have to worry about these two types.

- So, that covers the seven primitive types in JavaScript.

- A primitive value is written as an actual value like the text "Vishwas" or the number 0.

- A non-primitive type, on the other hand, is a collection of values.

- In JavaScript, an object is a complex data type that contains properties defined as key-value pairs.

- The syntax is as follows:

  - `const person = {`

    - `firstName: 'Bruce',`

    - `lastName: 'Wayne',`

    - `age: 30`

  - `};`

- To access a property in this object, you can use dot notation.

- For example:

  - `console.log(person.firstName);`

- Another non-primitive type is the array.

- Arrays are written with square brackets, and the items in an array are separated by commas.

- For example:

  - `const oddNumbers = [1, 3, 5, 7, 9];`

- To access a value in an array, we use the position of the item, which starts at 0.

- For example:

  - `console.log(oddNumbers[0]);`

- JavaScript is a dynamically typed language, which means you don't have to specify the data type of a variable when you declare it.

- Data types are automatically converted as needed during execution.

- For example:

  - `let a = 10;`

  - `a = 'Vishwas';`

  - `a = true;`

- If we log `a` to the console and run the code, we see a value of `true`.

- This is the last assigned value because JavaScript is dynamically typed, and this type of assignment does not cause an error message.

### **=>** Operators

- All right, now that you know the different data types, the next topic to learn is operators.

- In JavaScript, an operator is a special symbol used to perform operations on values and variables.

- Here is a list of operators we will be learning as a beginner:

  - Assignment operators

  - Arithmetic operators

  - Comparison operators

  - Logical operators

  - String operators

  - And a few other operators

- Let's start with assignment, which is an operator we have already seen in this video.

- I'm going to begin by selecting all the code we have written so far and pressing `Ctrl` + `/`, which will comment out the code.

- Now, let's focus on the assignment operator.

- The assignment operator is used to assign values to variables.

- For example: `let x = 10;`.

- This is the assignment operator.

- Next, we have the arithmetic operators, which are used to perform arithmetic calculations.

- For example, if we have two variables: `x = 10` and `let y = 5`, we can `console.log(x + y);`.

- If we run `node main`, we see the result `15`.

- Similarly, `x - y` will give us `5`, `x * y` will give us `50`, `x / y` will give us `2`, and `x % y` will log `0` to the terminal.

- You can also have `++x`, which increments `x` by `1`.

- Say, `console.log(++x);` and `node main`, and you can see the value is `11`.

- Similarly, `--y` decrements `y` value by one, so `node main`, and you can see the value is `4`.

- Here, `x` and `y` are referred to as operands, and the symbol is the operator.

- These are some of the arithmetic operations you can perform in JavaScript.

- Next, we have the comparison operators.

- Comparison operators compare two values and return a boolean value, either `true` or `false`.

- First, we have `x == y`, which checks if `x` and `y` are equal.

- So, `node main`, and we see `false`.

- We have `x != y`, which returns `true`.

- We also have `x === y`, which compares not just the value but also the data type.

- If we run `node main`, you can see it returns `false` as well.

- Similarly, we have `x !== y`, which returns `true`.

- We will learn more about this special equality in JavaScript in just a bit.

- We then have `x > y`, which is `true`, `x >= y`, which is again `true`, `y < x`, which is `true`, and `y <= x`, which is again `true`.

- Comparison operators are primarily used in loops and branching statements, which we will learn about later on in this video.

- Next, we move on to logical operators in JavaScript.

- Logical operators perform logical operations and return either `true` or `false`.

- They are very helpful when combining comparison operator results to make a decision.

- For example, let's say we need to figure out if the number `8` lies in the range of `x` and `y`, so we can write `const isValidNumber = x > 8 && 8 > y;`.

- Here, double `&&` is called the logical AND operator.

- It returns `true` only if both operands evaluate to `true`; otherwise, it returns `false`.

- Now, `x` is `11`, which is greater than `8`, and `y` is `4`, which is less than `8`.

- So, if you were to log `isValidNumber` to the console, run `node main`, you can see it evaluates to `true`, so it is a valid number.

- Similar to logical AND, we have logical OR operator, denoted by double pipe characters (`||`).

- This will return `true` if either of the operands is `true`, else it will return `false`.

- So, if I change `x > 20`, which is `false`, but `y` is still less than `8`, run `node main`, we see `isValidNumber` is still `true`.

- So, if either of the two operands is `true`, the logical OR operator returns `true`.

- Finally, we have the logical NOT operator, which negates the value.

- For example, if we have `const isValid = true;`, `!isValid` is going to return `false`.

- If we run `node main`, you can see the last value is `false`.

- Change `true` to `false`, run `node main` once more, and now it returns `true`.

- Next, let's move on to the string operators in JavaScript.

- We can use the plus operator (`+`) to join two or more strings.

- So, if we type `console.log('Bruce' + ' Wayne');` with the space at the end of 'Bruce', run `node main`, we see 'Bruce Wayne' as a single string in the terminal.

- The plus operator performs addition when used with numbers and concatenation when used with strings.

- As beginners, it is very important to keep this in mind, as we tend to create bugs because of this behavior.

- I will elaborate on that in a few minutes.

- There are a few more operators, but I want to discuss just one more, which is the ternary operator.

- The ternary operator returns a value based on the condition.

- Let me explain with an example.

- Let's define `const isEven = 10 % 2 == 0 ? true : false;`.

- What happens here is that the condition is evaluated first: Is the remainder of

### **=>** Type Conversions

- Now that we have a good understanding of types and operators in JavaScript, the next topic to learn is type conversion.

- We will learn how to convert one type to another because a lot of the times the code you write has to do some kind of conversion in JavaScript.

- There are two kinds of type conversions:

  - Implicit conversion, also known as type coercion, where JavaScript itself will automatically convert the type to be able to run the code you've written.

  - Explicit conversion, where you manually convert the type.

- Let's look at examples of both these conversions.

#### Implicit Conversion

- Let's start with implicit conversion.

- The first conversion is if you try to add with a numeric string type, JavaScript converts the operand to a string before concatenation.

- So if we type `console.log`:

  ```javascript
  number 2 plus a numeric string 3
  ```

  Run `node main`, and you can see the result is `23`.

  - So if you try to add with a numeric string type, the result is a string after concatenation.

- Similarly, if we add `true` plus numeric string `three`, we get the result `true three`, which is a concatenation of the two operands.

- On the other hand, if you use a numeric string with subtraction, multiplication, or division, the numeric string is automatically converted into a number.

- So if we `console.log`:

  ```javascript
  numeric string 4 minus numeric string 2
  ```

  Run `node main`, and you can see the result is the number `2`.

  - JavaScript converts both `4` and `2` to numbers and then performs subtraction.

- Now I would like you to pause the video and try the same with multiplication and division.

- What is worth noting, though, is if you try to use non-numeric strings, the result is a special value called "not a number." So if we `console.log`:

  ```javascript
  bruce minus wayne
  ```

  Run `node main`, it will result in `NaN`, which is not a number.

- Now, if you were to use boolean values with numeric strings, `false` is treated as `0` and `true` as `1`.

- So `console.log`:

  ```javascript
  numeric string 5 minus true
  ```

  Will result in `4`, and `numeric string 5 minus false` will result in `5`.

  - Also, if you use `null` with subtraction, `null` is treated as zero.

  - So `console.log`:

  ```javascript
  numeric string 5 minus null
  ```

  Will give back `5`.

  - The final example under implicit conversion is that of `undefined`.

  - If you use `undefined` with number, boolean, or null, the result is not a number.

  - For example, `console.log`:

  ```javascript
  the number 5 plus undefined
  ```

  Run `node main`, and you can see the result is "not a number." As you can see, JavaScript automatically converts types in performing operations, and it is crucial you understand this coercion to avoid any confusion in your code.

  - It might take some time, but at least you are aware of the concept.

#### Explicit Type Conversion

- To come back to next, let's move on to examples of explicit type conversion.

- For manual conversion, we're going to rely on some of the built-in methods available in JavaScript.

- First, to convert a string or boolean to numeric types, you can use the `Number` global method.

- So `console.log`:

  ```javascript
  Number('5')
  ```

  Run `node main`, and you can see it returns the number `5`.

  - If you pass a boolean value, let's say `false`, it will return `0`.

  - An empty string will also return `0`.

- Apart from `Number`, you can also use `parseInt` method.

- So `parseInt("5")` in `node main` will return `5`.

- If you want a floating-point number, you can make use of `parseFloat`.

- So `parseFloat("3.14")` in `node main` will get back a floating-point number `3.14`.

- Next, we have the `String` global method to convert other data types to a string.

- For example, `console.log`:

  ```javascript
  String(500)
  ```

  In `node main`, and this will print `500` as a string.

  - Similarly, `true` will return the string "true," `null` will return the string "null," and `undefined` will return the string "undefined."

- As an alternative to the `String` global method, you can also use the `toString` method.

- For example, `console.log`:

  ```javascript
  ;(500).toString()
  ```

  Run `node main`, and it logs the string "500" in the terminal.

  - However, `toString` will not work on `null` and `undefined`.

- Finally, to convert other data types to boolean, you can use the global `Boolean` method.

- For example, `console.log`:

  ```javascript
  Boolean(10)
  ```

  Will return `true` in `node main`.

  - And it is worth noting that `null`, `undefined`, numeric `0`, empty string, and `NaN` all return `false` when converted to boolean.

  - Everything else will return `true`.

- As a quick assignment, I want you to run `Boolean` method on these values and find out the return value, including a string that has only spaces.

- All right, I hope you now have an idea of how to convert between types in JavaScript.

### **=>** Equality

- With an understanding of how to convert between the different data types, the next topic to learn about is equality, and this is a slightly confusing topic to wrap your head around as a beginner.

- JavaScript is, let's say, a bit weird when it comes to equality.

- We have two types:

  - Double equals (`==`), which loves coercion when the types are different.

  - Triple equals (`===`), which does not allow coercion.

- Let's understand both with a few examples.

- Back in VS Code, let's declare a few constants:

  - `const variable1` is equal to the string `"test"`.

  - `const variable2` is equal to, again, the string `"test"`.

- Let's now log both equalities:

  - `console.log(variable1 == variable2)`

  - Make a copy of it, and this time, `console.log(variable1 === variable2)`.

- If we run the code (`node main`), both return true when the types are the same; there is no confusion.

- However, if I now change `variable1` to a number `10` and `variable2` to the numeric string `"10"`, run `node main`, you can see double equals is true, whereas triple equals is false.

- In case of double equals, JavaScript coerces the values to the same type, so `"10"` is converted into numeric `10` automatically and then compared.

- Both constants would be of the same value, and hence the result is true.

- However, triple equals is more strict and ensures both constants must be of the same type and will not convert implicitly.

- Since a number is different from a string type, false is returned.

- Now it's not wrong to use double equals, but as a beginner, it is probably safe to use triple equals to check equality, and this is simply because there is quite a bit of strange coercion that JavaScript does.

- For example, if `variable1` is equal to `0` and `variable2` is equal to an empty string, `console.log(variable1 == variable2)` still returns true.

- Similarly, `false` and empty string (`""`) with double equals is once again true.

- `null` and `undefined`? Well, it is true again.

- All the values we have just seen are treated as falsy values in JavaScript, and double equals will treat them as equals, which as you can see may be confusing and lead to incorrect results.

- So although it isn't wrong to use double equals, my advice would be to use triple equals when writing code as a beginner.

- This concept of equality is very important.

### **=>** Conditional Statements

- Which leads us to the next topic in this video, and that is about conditional statements.

- Conditional statements are used to perform different actions based on different conditions.

- For example, you may want to execute different blocks of code based on whether a number is positive, negative, or zero.

- In JavaScript, we have the following conditional statements:

  - `if`

  - `else`

  - `else if`

  - `switch`

- Let's first look at `if`, `else`, and `else if` statements and then look at `switch`, which is an alternative.

- Back in VS Code, let's declare a constant:

  - `const num` is equal to `5`.

- Now what we want to do is log a statement to the terminal if the number is a positive number.

- For such a scenario, we can use the `if` statement.

- The syntax is as follows:

  - `if` followed by parentheses.

  - Within parentheses, we specify a condition.

  - Our condition is that `num` should be greater than zero.

  - Then we specify a pair of curly braces.

  - Within the curly braces, we write the code that will be executed only if this condition evaluates to true.

  - Let's add `console.log("Number is positive")`.

- If we now run the code (`node main`), we see "Number is positive." If we change `num` to `-5` and rerun, we see that the statement is not logged in the terminal.

- So the `if` statement evaluates the condition inside the parentheses, and if the condition evaluates to true, it runs the code within the curly braces.

- Sometimes you may want to run a different block of code if the condition evaluates to false.

- In such a case, you can make use of the `else` statement.

- Now, the `else` statement must follow an `if` statement.

- So we can add `else` and then curly braces.

- Once again, within curly braces, we can type `console.log("Number is not positive")`.

- If we now rerun the code, we see the log statement as expected: "Number is not positive" as it is minus 5.

- So the `if` statement evaluates the condition inside the parentheses, and if the condition is true, the `if` block is executed.

- If the condition is false, the `else` block is executed.

- Now, if you have just two alternate blocks of code to run, the `if`-`else` statements are sufficient.

- However, if you need to decide amongst more than two alternatives, you need the `if`-`else if`-`else` statements.

- For example, instead of just logging whether the number is positive or not, let's try to log if the number is positive, negative, or zero.

- Let me explain the syntax: The `if` block remains the same, so let's leave it as it is and remove the `else` block.

- If `num` is greater than 0, we log "Number is positive." But after the `if` block, we now use the `else if` block.

- So `else if`, and this again follows an `if` block.

- This statement allows us to specify a new condition (in parentheses) and add another code block, which will be executed if that condition is true.

- The first condition might be false, but the second condition might be true.

- In this case, let's log to the console "Number is negative."

- Finally, if both these conditions are false, we want to log that the number is zero.

- For that, we make use of the `else` statement, as there is no other condition to evaluate.

- So `else console.log("Number is zero")`.

- If we now rerun the code, we see the statement "Number is negative." Change `num` to zero, and rerun, we can see "Number is zero." Our code works as expected.

- What you should know is that you're allowed to specify as many `else if` statements as you wish; it is not restricted to just one additional condition.

- Now, `if`-`else` statements do a good job of enabling conditional code.

- They're good when you have a few alternatives, and each has a good chunk of code to be executed.

- However, if you have a large number of choices with little code to execute in each choice, a `switch` statement is better suited.

- For our example, let's check a color and log that color value to the console.

- I'm going to declare a new variable or constant called `color`, and let's set this to `"red"`.

- Now, for our `switch`statement, the syntax is the keyword`switch`followed by parentheses.

- Within parentheses, we specify a value or an expression.

- In our case, it is going to be the constant`color`.

- Now this is followed by curly braces.

- Within curly braces, we can specify one or more cases that we specify using the `case`keyword.

- To check if`color`can be "red," we specify`case`followed by the string`"red"`, and if this is true, we log "Color is red." After the log statement, though, we need to specify the `break` keyword, and this will prevent the next case from being executed.

- Let's compare with two more colors: "blue" and "green," in which case "Color is blue" and "Color is green" are logged to the console.

- If we run `node main`, you can see "Color is red." Change this to "blue," you can see "Color is blue." Now it's also possible that the user might specify a completely different value, for example, `color` is `"10"`.

- In this case, none of the case statements are executed, and there's no text logged in the terminal.

- To handle this, you can add the `default` switch statement: `default:` where we are going to log "Not a valid color" to the console.

- `node main`, and you can see we have the text "Not a valid color." So the `switch` statement evaluates the expression within parentheses and executes the code corresponding to the matching case.

- If there is no matching case, the `default` case is executed.

- So `switch` statements and `if`-`else` statements, these are some of the ways you can conditionally run code in JavaScript.

### **=>** Looping code

- Let's now move on to the next topic, which is looping code in JavaScript.

- In programming, loops are used to repeat a block of code.

- For example, if you want to print numbers from 1 to 50, you can make use of a loop.

- Of course, that's a very simple example, but you can achieve a lot with loops.

- They're used in almost every app that you develop and are really important from a beginner's point of view.

- In this crash course, we're going to take a look at four looping constructs: for loop, while loop, do while loop, and for-of loop.

- Let's understand the syntax and usage with an example.

- First up, the for loop.

- The syntax is as follows: we have the keyword `for` followed by parentheses.

- Inside the parentheses, we have three items separated by semicolons: first is the initializer, which is run before starting the loop; second is the condition, which is checked to see if the loop should stop; third is the final expression, which is run each time the loop has gone through an iteration.

- We then have a pair of curly braces that contains a block of code, which will run each time the loop iterates.

- Let's understand this better by writing some code.

- For our example, let's log a message to the terminal five times.

- Back in VS Code, start with the `for` keyword followed by parentheses.

- For the initializer, we're going to initialize a variable called `i` and set it to `1`.

- So, `let i = 1;`.

- For the condition, since we are logging a message five times, we specify `i` less than or equal to `5`.

- For the final expression, we increment the value of `i` by one, so `i++`.

- You might remember this from the operators section.

- Now, for the block of code, we're going to run `console.log("Iteration number " + i)`.

- If we save the file and run the code (`node main`), we see the message logged five times, and the value of `i` increments from `1` to `5`.

- Let me slowly walk you through the execution of this for loop.

- First, `i` is set to a value of `1`.

- Next, the loop checks if `i` is less than or equal to `5`.

- It is, so the code inside the curly braces is executed.

- After that, `i` is incremented by one.

- Now, the condition is checked again; this time, `i` is equal to `2`, and the condition is still valid since `2` is less than `5`.

- The message is logged, and `i` is incremented once again.

- This happens for `i` equal to `3`, `4`, and `5`.

- But after logging the fifth message, `i` is incremented to `6`.

- Now, the condition evaluates to `false` since `6` is not less than or equal to `5`.

- When the condition becomes `false`, this loop is terminated.

- This is how the `for` loop works; we are able to repeat the execution of code (in our case, the log statement) five times without having to type it out five times.

- Let's now proceed with the second looping construct, which is the `while` loop.

- Here is the syntax.

- The parts of a `while` loop are similar to that of a `for` loop, as you can see.

- However, there is a bit of rearrangement.

- The initializer variable is set before the loop, and the final expression is included inside the loop after the code to run.

- Let's head back to VS Code and rewrite the `for` loop logic with a `while` loop.

- Let's first comment out the `for` loop.

- Now, the first part is the initializer, so `let i = 1;`.

- Then the `while` loop: the keyword `while`, followed by parentheses, and then curly braces.

- Within parentheses, we specify the condition.

- The condition is `i` should be less than or equal to `5`.

- In the code block, we specify the log message: `console.log("Iteration number " + i)`.

- But now, right before the closing brace, we specify the final expression, which is incrementing the value of `i` by one: `i++`.

- If we now run the code (`node main`), we see the same output, "Iteration number 1" through "Iteration number 5." However, if we initialize `i` to `6` and run the code, we still see the log statement once, "Iteration number 6." This was not the case with just the `for` loop.

- So, the `do while` loop executes the code block once and then evaluates the condition.

- Since `6` is greater than `5`, the loop is terminated after logging the message once.

- Let's now move on to the fourth looping construct, which is the `for-of` loop.

- This was introduced recently and is mainly used to loop over a collection of data, like an array, for example.

- Here is the syntax: the `for` keyword followed by parentheses.

- Within parentheses, we get hold of each item in the collection in each iteration, and then we have the code block within curly braces.

- Let's look at an example.

- Back in VS Code, I'm going to comment out the `do while` loop and create an array of five numbers: `const numArray` is going to be `1, 2, 3, 4, and 5`.

- Now, for the `for-of` loop, we can write: `for (const num of numArray) {` and within the block, we specify `console.log("Iteration number " + num)`.

- If we run the code now, it would mean we have the same output as before.

- What happens here is that the `for-of` loop automatically iterates over the array and, in each iteration, assigns the value of the current element to `num`.

- We can then execute the necessary code using that element.

- So, in iteration one, `num` is equal to `1`; in iteration two, `num` is equal to `2`, and so on until the fifth iteration.

- The `for-of` loop is best suited for a collection of data as it abstracts away two things: first, you don't have to keep track of a variable to increment the iteration count, so there is no need to track a variable like `i`, which we have done previously.

- Second, you don't have to figure out how to access the item in the collection, for example, `array[0]`, `array[1]`, `array[2]`, etc.

- The `for-of` loop does it all, and you just have to worry about the code that needs to be run.

- So, these are the four looping constructs that you, as a beginner, should be aware of.

- Again, you don't have to memorize these things; you just have to know they exist and where to come back to when you do come across the need to use them in your code.

### **=>** Functions

- All right, for the penultimate topic in this crash course, let's learn about functions.

- Functions are one of the fundamental building blocks in JavaScript.

- A JavaScript function is a block of code designed to perform a particular task, for example, add two numbers, multiply two numbers, etc.

- Functions are reusable as they can be defined once and can be called with different values, resulting in different results.

- Functions also help divide a complex problem into smaller chunks and make your program easy to understand and maintain.

- Let's take a look at the syntax of a function.

- As you can see, a function is defined with the `function` keyword, followed by the name of the function, followed by parentheses.

- The parentheses may include parameter names separated by commas; it is completely optional.

- We then have a pair of curly braces, and within the curly braces, the code to be executed.

- Let's head back to VS Code and understand with a few examples.

- For our first example, let's define a function which logs a greeting message to the console.

- So first, the `function` keyword followed by the function name; let's call it `greet`.

- This is followed by parentheses and then curly braces.

- Within curly braces, the code to execute: we're going to add a simple `console.log("Good morning, Vishwas")`.

- So we have defined our function, but a function doesn't run by itself; we have to call or invoke that function.

- We do that by specifying the function name followed by parentheses.

- If we now run the code (`node main`), we see the greeting message in the terminal.

- Our first function is working as expected, and we can call the function any number of times, and we will see the same message.

- So if I invoke the function two more times, run the code, we see the message three times in the terminal.

- Now, this is fine, but what would be better is if the person's name is dynamic.

- That way, we can use the same "Good morning" message but with different names and greet multiple people.

- This is where parameters come into play.

- A parameter is like an input to the function.

- Let's call it `username`.

- Now, in the log statement, we can use concatenation, so `"Good morning, " + username`.

- Now, when we invoke the function, we need to pass in the username.

- Let's pass the string "Bruce Clark" and "Diana." If you run the code, we can see that we can greet three different people using the same function.

- Now, in the function definition, this input `username` is called a parameter.

- When invoking the function, "Bruce Clark" and "Diana" are called function arguments.

- Function parameter, function argument; good to have the terminology in mind.

- Now, a function can also return a value, which we can use later in our code.

- Let me show you an example.

- Let's define a function that adds two numbers and returns their sum.

- So `function` followed by the function name, which will be `add`.

- Then we have parentheses, and this will have two parameters: `a` and `b`.

- Within the function body, `return a + b`.

- Now here, `a` and `b` are two input parameters.

- Within the function body, we add the two parameters, so `a + b`, and return the sum from this function.

- `return` is a JavaScript keyword which will return the value from the `add` function when we invoke it.

- So what this allows us to do is assign the result to a constant: `const sum = add(5, 10);`.

- We don't have any complex logic, so let's simply log the sum to the console in the next line: `console.log(sum)`.

- If we run the code, we see `15` in the terminal.

- Change it to `25` and `25`, run the code, and we see `50`.

- So the two numbers are added together and returned.

- As you can see, functions are very useful: define the code once and use it as many times as you want to, passing different arguments to produce different results.

- It also helps organize code into smaller, maintainable code blocks.

- Now, in 2015, an alternate syntax was introduced to define functions.

- They're called arrow functions and offer a more concise way of writing functions.

- Let's rewrite the `add` function using arrow functions: `const arrowSum = (a, b) => a + b;`.

- Another point worth noting is that if you just have one argument, you can, if you want to, omit the parentheses around the argument.

- For example, `const add5` will accept one parameter, which is called `num`, and will return `num + 5`.

- Arrow functions are used in a lot of code bases, and I wanted to ensure you know the syntax.

- Now, I cannot stress enough how important functions are in any programming language, so make sure you learn them well.

### **=>** Scope

- All right, for the final topic in this crash course, we're going to learn about scope in JavaScript.

- Scope basically determines the accessibility or visibility of variables.

- JavaScript has three types of scope: block scope, function scope, and global scope.

- Let's understand each of them with an example, starting with block scope.

#### Block Scope

- Block scope was introduced in 2015 with the introduction of `let` and `const` keywords.

- Basically, block scope dictates that variables declared inside a pair of curly braces cannot be accessed from outside the block.

- So, if you were to have an `if` block like this:

  ```javascript
  if (true) {
    const myName = 'Vishwas'
  }
  ```

  And try to access the `myName` outside the block:

  ```javascript
  console.log(myName)
  ```

  If you run the code, you can see JavaScript throws an error: "ReferenceError: myName is not defined." If you move the log statement inside the `if` block, though:

  ```javascript
  if (true) {
    const myName = 'Vishwas'
    console.log(myName)
  }
  ```

  And run the code again, you see "Vishwas" logged in the terminal.

  - So, `let` and `const` declared variables can only be accessed inside the block they are declared in.

#### Function Scope

- Function scope dictates that variables declared inside a function are not accessible from outside the function.

- So, if we define a function like this:

  ```javascript
  function testFunction() {
    const myName = 'Batman'
  }
  ```

  And try to log the value outside the function:

  ```javascript
  console.log(myName)
  ```

  JavaScript throws an error again: "ReferenceError: myName is not defined." If you move the log statement within the function:

  ```javascript
  function testFunction() {
    const myName = 'Batman'
    console.log(myName)
  }
  ```

  And run the code, you can see "Batman" logged in the terminal.

  - What is also worth noting here is that both `myName` variables have different scopes.

  - `myName` within the `if` block is "Vishwas," whereas within `testFunction`, it is "Batman," even though they have the same variable name.

  - Very important to keep that in mind.

#### Global Scope

- Global scope is the scope outside any block or a function.

- A globally scoped variable is accessible both inside a block as well as a function.

- Let me show you an example.

- Above the `if` block and the function, I'm going to define a constant called `mynum` and set it to `100`.

- Let's log the value in the `if` block as well as the function:

  ```javascript
  console.log(mynum)
  ```

  And the same within the function.

  - If we run the code, you can see `100` twice.

  - So, we are able to access a globally scoped variable inside a block as well as a function.

  - Also, if we declare a constant called `myname` again and set it to "Superman," run the code, we still see "Vishwas" and "Batman" but not "Superman." So, a globally declared variable will not overwrite block or function scoped variables.

  - As you can see, scope is a really important concept to be aware of, as you need to understand how variable values are resolved by JavaScript.

Well, with that, we come to the end of this crash course on the fundamentals of JavaScript.
