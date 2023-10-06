---
sidebar_position: 1
---

# Typescript in React

https://youtu.be/TPACABQTHvM?si=Jq9kThcOggAwfwuT

### **=>** Introduction

- If you want to be a React developer these days, you also need to know TypeScript.

- TypeScript has become a de facto standard in React applications.

- In this video, I'll show you all the TypeScript things that you need to know as a React developer.

### **=>** JSX to TSX

- So right now, you can see I have a simple button component, and it's using the JSX extension.

- So if you're ready for this, let's convert this into TSX.

- I'm going to say this button now needs to start using TypeScript.

- You can see when I do that, it immediately changes this icon here.

- I'm going to press enter, and now we have enabled TypeScript in this file.

### **=>** Typing variables

- Let's start off with the most common things you want to do in TypeScript.

- Let's say we have some kind of variable.

- I can just write a variable like I'm always doing in JavaScript, but now if you hover this variable, you can see that there is some type connected to this, and we have not specified this type ourselves.

- We could do that.

- We can say this `URL` is going to be of type `string` (you use the colon and then the type).

- We could also say `number`, and then you're going to get red squiggly lines because now we're trying to assign a string to a variable that we just annotated as a number.

- So it should be a string, but you don't have to do this because TypeScript is smart enough to infer from what you're assigning to that variable what the type is going to be.

- It sees that you're trying to assign a string to this variable, so it will automatically infer this variable to be of type string, so we don't need to specify that.

- Now, what's the benefit of having that type? Well, now later if I try to assign some other value to it that's a different type, I'm going to get a warning, a red squiggly line from TypeScript.

- I'm trying to assign a number now to a variable that's supposed to be of type string, so TypeScript is helping us out here.

- It's telling us this is probably not what you want to do.

### **=>** Typing functions

- Besides variables, we also often want to type functions.

- Let's say we have some function here, `convertCurrency`, and it will take two arguments, let's say an `amount` and then also the `currency` that we want to convert that amount into.

- And then here in the function body, we would have the actual implementation.

- Now, in the function body, typically we don't want to type anything, but we do want to type the function parameters.

- If you don't type them, actually we're going to get red squiggly lines here.

- We're going to get a warning from TypeScript because it can't infer anything here, and we haven't specified it ourselves.

- So by default, it's going to be of type `any`, which is not what we want.

- `any` means anything goes; we can do whatever we want with it.

- It basically defeats the purpose of using TypeScript in the first place if you're using `any`.

- We do want to type this as specifically as we can, so the `amount` is going to be of type `number`, let's say, and the `currency` can be a string (USD, EU for Euro).

- So then I can call that function `convertCurrency` with, for example, the number 100 and then a string.

- If I now make a mistake here, if I now type in a string as the first argument, you can see TypeScript says, "Hey, you're trying to pass a string here, but it's expecting a number type."

- So TypeScript is helping us out here; it prevents us from making this mistake.

- Also, if I try to pass in another number here as the second argument, TypeScript is telling us, "Nope, that's not what you want to do; you want to pass a string here."

- And then we can also specify the return type.

- This is usually not necessary, but sometimes you want to do that.

- So if you want to specify what this function should return, maybe it should return a string, let's say, then if you call that function, you're going to get back a string.

- I get red squiggly lines now because I'm not returning anything here in the function body because it's just an example.

Certainly, here is the provided text transcribed in Markdown format with h3 tags, and each sentence starting with a bullet point:

### **=>** Typing React components

- So now let's talk about how you can use this in React.

- In React, we have components, and these are actually just functions like we just saw except you write a name with a capital case, and in the world of React, we call these parameters props.

- So typically, you're going to get props here, and just like before, we want to type those parameters; we want to type the props, and we don't really want to type the return values.

- So with React components, typically the only thing you want to type are the props.

### **=>** React.FC

- In the past, people often did the following to type components.

- So if you had some component function and then to type it, people would use `: React.FC` and then in here, you could specify the type of the component props.

- This looks a bit complicated, but this is how it was done mostly in the past.

- You will still see this sometimes, but there are some issues with this `FC`, and therefore it has gotten out of fashion.

- And it was also only possible to type this if you wrote your component function like this so as an arrow function.

- You can still do that, of course, nothing wrong with it.

- Personally, I prefer this traditional function syntax for a component.

### **=>** Typing props

- Let's say that our function is going to receive some props.

- So I have added the button to our page here.

- I'm using the component, and now let's say I want to be able to pass, let's say, the background color.

- I want to be able to set the background color when I use this component, right? Maybe I want to be able to set it to Red.

- So I should be able to pass in this background color prop, but if I do that now, I get a warning from TypeScript because TypeScript is telling us you're not accepting any props.

- So now we need to actually accept the props, so we have `props`, and that's just an object that holds all the props.

- So if we want to get the background color from there, we can do `props.backgroundColor`, and then we can use that background color here in the class, then to change the background color, let's say.

- But let's focus on TypeScript in this video, so now we have props, but we haven't typed this.

- So to type this, we can use a colon, and now it's not going to be `string` or `number` because `props` is an object.

- To type an object, we can just use curly braces, and then we can say in there there's going to be a property `backgroundColor`, and that one is going to be of type `string`.

- So if I do this, this is now properly typed.

- The props is an object, and in there, we just have `backgroundColor` as a string.

- If I now try to pass a number, let's say number 5, we get an issue from TypeScript, and TypeScript is helping us out.

- You have to pass a string here now.

- Typically, you don't write your React components like this.

- Typically, you destructure this.

- So here you can destructure it like this.

- Instead of doing `props.backgroundColor`, you can just write `backgroundColor`, and then just destructure it from `props` like that or just immediately here in the parameter list, immediately destructure it here, and that's actually more common.

- So instead of writing `props`, you can actually already just immediately write that destructuring in the parameter list like this.

- So this is a more typical syntax that you're going to see in React components.

- So the `props` here, it's still an object, but we are immediately destructuring it here, and therefore we should still describe this as an object.

- Now let's say we want to pass a font size as well.

- So what we want to be able to do is say the font size should be some number.

- Let's say maybe font size should be 30, and we get red squiggly lines because we are not accepting a prop called font size here.

- So here now we need to accept a prop called font size, and we are immediately going to destructure that here.

- But we also need to specify this to TypeScript; we're going to tell TypeScript, "Hey, we expect a font size, and that's going to be of type number."

- The benefit of this is now when I try to pass something like 40 pixels, let's say, which is a pretty common mistake that you could make here, TypeScript is going to tell us, "Hey, don't do this; you should pass a number here." Right?

- So you can already see TypeScript is helping us out here; it's preventing us from making mistakes.

- So we have the type `string`, type `number`, and the third common primitive type is `Boolean`.

- So let's say we also have some `Boolean`.

- We want to be able to specify whether this button should be a pill shape or not.

- So we could say `pillShape` should be `true`.

### **=>** Extracting type

- Let's say so now we need to accept a pill shape here so we'll say we're going to destructure that pill shape from the props and then we're going to specify it here for TypeScript.

- We're going to say this is going to be a Boolean true or false.

- Now you can see the syntax here is quite ugly; it looks like we're sort of repeating ourselves.

- So we have curly braces here with all these props, and then we sort of have the same here.

- It looks like the same thing, so it's bloating up our components here quite a bit, especially if you have many props.

- So instead of writing it in line like this, maybe we should extract this into a separate type.

- We're going to create a separate type, so in TypeScript, we have type `Ty`, and we can call that let's say `buttonProps`.

- I like to use the name of the component and then just add `Props`, and we can say, well, this `props` is going to be an object with all this stuff here, all these properties.

- So we can just paste this here, and now we can use this name instead of writing it in line.

- You can see now it's much cleaner, it works the exact same.

### **=>** Benefits of TypeScript

- So the benefits are TypeScript helps us prevent mistakes, but it goes beyond that.

- Let's say we don't know the properties that we can pass here.

- I'm using the button, and I want to see the options essentially so I can press control space here, and TypeScript is telling us these are the properties that this button can accept.

- We have background color of type string, we have font size of type number, and we have this pill shape of type Boolean, so I get this very handy intellisense as well.

### **=>** Optional

- When I remove these now, by the way, we see red squiggly lines.

- So if we look at this, we can see there is some problem here, so we are not passing anything here, and that's a problem because the way that we've done it now is that we have made these mandatory.

- So if I add two of them back, we still get this red squiggly line because we are still missing one, which is pill shape.

- We don't have pill shape here, but the way that we've done it now is that these are all mandatory, so if we miss one, we're going to get a warning.

- I can make them optional by having this question mark here.

- So now if I go back, you can see the red squiggly line is gone because the pill shape now is optional.

### **=>** Benefits of TypeScript (cont.)

- Another benefit of TypeScript is that let's say I want to use some method here on the background color variable.

- This is a string, so if I do this `toUpperCase()`, this works without a problem.

- But if I try to do the same thing with font size, which is of type number, I get a warning here because `toUpperCase()` is a method that doesn't exist on type number.

- TypeScript helps us out with using these methods as well if we don't type this.

- So if I just remove this `any` type, font size is going to be of type `any` by default, and sometimes you will also see people make that explicit, so they'll say this font size is going to be of type `any`.

- So `any` means anything goes, so when I do this now, suddenly I don't get red squiggly line here.

- So now I could be passing a number here and trying to do `.toUpperCase()`, but this would cause an error.

- It could cause our application to crash; it could cause a lot of bugs in our code.

- And that's the problem with the `any` type; `any` means anything goes, you can do whatever you want, but then why are you using TypeScript in the first place? So we do want to type these things as specifically as we can.

- So here when I type it as number again, you can see we get a warning.

- So we can fix it, so let me remove that.

- We are not typing the parameters of this component.

- Do we also need to type the return value of this component?

- Type return value of component?

- Component so it's returning this button here.

- This is something called a JSX element.

- This button here, we don't have to type this ourselves.

- So if I remove this and just hover button, you can see it's already inferred that we are returning this JSX element.

- So TypeScript can infer a lot; you just have to follow the red squiggly lines.

### **=>** Union type

- Let's talk a little bit more about the other types that we have in TypeScript.

- Instead of accepting any string for the background color, maybe we can be more specific than that.

- Maybe we only want to allow the string red or the string blue or the string green.

- So you use this pipe symbol, and this entire thing is called a union type.

- It's possible that we want to use that for other properties as well.

- For example, we may also have a text color prop, and maybe that one needs to accept the same strings.

- Now we are duplicating ourselves, so what we can do is we can extract this out into its own type.

- So we can have another type here, and we can simply call that let's say colors, and that's going to be the union type.

- Now, I named this colors in the plural, but typically it's actually better to leave this as the singular name, so the color is going to be either red, blue, or green, and then we can specify color here.

- Right, so you can extract new types like that and just combine them like this.

- Now, if I want to make a change here, maybe add another color or other colors, I only have to change it in one place now because I added text color here, and I didn't make it optional.

- So now we're going to get red squiggly lines here because I'm not passing text color.

- So let's say I make text color the string purple; now we get rid of the red squiggly lines.

### **=>** Typing arrays

- Arrays, maybe we want to accept a padding prop, and with padding, you have multiple sides, right? So you have top, right, bottom, left, so maybe this can be some kind of array.

- So what we can do is something like this.

- So it shouldn't be just a number; it should be an array of numbers.

- You can just tack on these square brackets, and that means it should be an array of this type.

- I can do the same thing here, and now it's going to be an array of Boolean.

- I can even do it with my own custom type.

- Right, now it's going to be an array of these colors.

- And for padding now, I need to pass it in, so how does that look like? Well, for padding now, I need to pass an array here, so it's going to be square brackets, and it should all be numbers.

- Right, so if I try to do something like 5 pixels, 10 pixels, TypeScript is warning me, "Hey, this shouldn't be in this format; it should be a number." Type string is not assignable to type number.

- So it should be 5, 10, 20, 50.

### **=>** Tuple Type

- The problem here is that I can add even more values without restricting the length.

- However, there is another type in TypeScript that addresses this issue, and it's called a Tuple.

- Instead of writing the type inline like this, you should define it as an array.

- So, if you specify the types as `number`, `number`, `number`, like this, you create what's known as a Tuple.

- A Tuple is essentially a more specific type of array in TypeScript.

- It allows you to define the number of elements and their specific types.

- For example, in this case, we've defined a Tuple with four numbers.

- If I try to add more than four elements, TypeScript will issue a warning, prompting me to correct the issue.

- So, to resolve this problem, I simply need to remove the excess values from the array.

- Additionally, I should also update the parameter list to accept this Tuple as an argument.

### **=>** React.CSSProperties

- In addition to the previous props, we can also add text color and padding. While I've been using Tailwind CSS, you can use plain styles as well. In React, we have the `style` attribute, where you can pass an object to define the styles for an element.

- You can define this object with curly braces and set various properties like `background color`, `color`, `font size`, and more.

- If you're using a code editor with features like code completion (e.g., Copilot), it can help you by suggesting available properties as you type.

- Rather than specifying each CSS property individually, you can streamline your code by using a single `style` object. This allows you to avoid having multiple style-related props.

- To accept this `style` object as a prop, you need to add it to the `button` component's props.

- When using JSX syntax, you can pass the object within curly braces as the value for the `style` prop.

- The `style` prop is an object that describes the CSS properties you want to apply to the component.

- React also provides predefined types for handling CSS properties. You can leverage these types to ensure that your styles are correctly typed.

- For instance, instead of manually specifying your own style object, you can use the `React.CSSProperties` type.

- By doing so, you let React define the structure of the `style` object based on the CSS properties you want to use.

- This approach ensures that you can pass any CSS property you want as part of the `style` object.

- It also helps catch errors, such as passing a number when a string is expected for a specific property.

- To summarize, using the `style` attribute in React allows you to efficiently manage styles by passing a single object containing the desired CSS properties. Leveraging predefined types like `React.CSSProperties` ensures proper type checking and helps prevent common styling mistakes.

### **=>** Record type

- Style is an object used for defining CSS properties, but there are cases where you need to work with objects in a different way.

- Let's consider a scenario where we want to create a prop for `border radius`. Border radius defines rounded corners and can have values for top left, top right, bottom right, and bottom left corners.

- To pass this information, we might want to use an object where each key represents a corner (e.g., `top left`, `top right`) and the values are numbers representing the radius for each corner.

- The challenge is in typing this object correctly because the keys are strings, and the values are numbers.

- If you directly define the object, you'll encounter issues with TypeScript as it will not recognize the keys as string literals.

- To solve this problem, you can use TypeScript's `Record` type.

- The `Record` type allows you to specify both the types for keys and values within an object.

- In this case, the keys should be of type `string`, and the values should be of type `number`.

- By using `Record<string, number>`, you are telling TypeScript that the object should have string keys and number values.

- This ensures proper type checking and allows you to work with objects where keys and values have specific types.

- In summary, the `Record` type is useful when you need to define an object with specific key-value pairs, such as for managing CSS properties like `border radius`. It helps TypeScript enforce the correct types for both keys and values in the object.

### **=>** Typing functions

- In some cases, you may want to pass a function as a prop. For example, you might want to specify an action to be performed when a button is clicked.

- To achieve this, you define a function elsewhere in your code (not inside the button component) and pass it as a prop to the button component.

- Let's assume you have an `onclick` prop, which represents the function to be executed when the button is clicked.

- You want to make sure that your button component accepts this `onclick` prop correctly.

- First, you need to define the `onclick` prop in your button component's prop types.

- This prop can be named something like `onClickHandler`, and you should specify the expected type for it.

- In TypeScript, you can type a function as a prop by using a specific syntax.

- For a function that doesn't accept any parameters and doesn't return anything, you can use the `() => void` type.

- In this type definition, `()` represents the absence of parameters, and `void` signifies that the function doesn't return anything.

- If your function accepts parameters, you specify the parameter types within the parentheses. For example, if your function accepts a string parameter named `test` and returns a number, the type definition would be `(test: string) => number`.

- By defining the prop type in this way, you ensure that the function passed as a prop adheres to the expected parameter and return value types.

- This type safety helps prevent potential issues and errors when using the function within the button component.

- In summary, when passing functions as props, TypeScript allows you to specify the expected function type to ensure type safety and prevent potential issues related to function parameters and return values.

### **=>** Typing children (React.ReactNode)

- Let's explore how to handle and type the "children" prop in a React component.

- In your example, you have a custom button component that you want to use with different text content.

- Instead of hardcoding the text within the component, you'd like to specify it when using the component, similar to how you pass props.

- In JSX, you can specify content between the opening and closing tags of a component.

- However, to make this work properly and ensure type safety, you need to define and handle the "children" prop in your component.

- The "children" prop is a common pattern in React components, and it allows you to include dynamic content inside your custom components.

- When you use the "children" prop, you essentially pass content to your component as if it were another prop.

- In your custom button component, you should accept the "children" prop and make use of it.

- To properly type the "children" prop, you can use the `React.ReactNode` type.

- `React.ReactNode` is a TypeScript type that encompasses various types, including JSX elements, plain text, booleans, and more.

- This type flexibility allows you to pass different types of content as children to your component.

- In your component's prop types, you would specify the "children" prop like this: `children: React.ReactNode`.

- By defining the "children" prop in this way, you indicate that it can accept any type of content.

- This ensures that you can pass JSX elements, text, or other valid React content as children to your component.

- When using the "children" prop within your component, you can simply render it where you want the content to appear.

- This approach provides flexibility and allows you to use your custom component with various types of content.

- In practice, you'll often use `React.ReactNode` for the "children" prop to accommodate different content types and maintain type safety.

- However, if your component specifically expects only JSX elements as children and wants to restrict other types, you can use the `React.JSX.Element` type for stricter type checking.

- The choice between `React.ReactNode` and `React.JSX.Element` depends on your component's requirements and how flexible you want it to be when accepting content.

- Regardless of the choice, properly handling the "children" prop is essential for creating versatile and reusable React components.

### **=>** React.JSX.Element vs React.ReactNode

- When working with the "children" prop in React components, you have the option to use different types for type safety and specificity.

- In your example, you're exploring the differences between `React.JSX.Element` and `React.ReactNode` when handling the "children" prop.

- While this example may not have a practical use case, understanding these types can be helpful in more complex scenarios.

- `React.JSX.Element` is a type that specifically allows JSX elements to be passed as children.

- If you want to ensure that only JSX elements, like HTML tags or React components, can be used as children, you can use this type.

- For instance, if you have a component that expects specific child components, you can use `React.JSX.Element` to restrict the input to those components only.

- However, this restrictiveness might not be suitable if you need more flexibility in your component.

- `React.ReactNode`, on the other hand, is a more general type that accepts various content types, including JSX elements, plain text, and booleans.

- It provides greater flexibility when handling the "children" prop because it allows a wider range of content to be used.

- In some cases, you may want to allow different content types within your component, and that's where `React.ReactNode` becomes valuable.

- For instance, you might want to pass not only JSX elements but also text or other data as children to your component.

- Using `React.ReactNode` allows you to achieve this flexibility while maintaining type safety.

- In practice, `React.ReactNode` is often the preferred choice for handling the "children" prop because it accommodates various use cases.

- It's a versatile type that aligns with React's design principles of composability and reusability.

- When you use `React.ReactNode`, you can freely pass different content types as children, making your components more adaptable.

- However, it's crucial to choose the appropriate type based on your component's specific requirements and the level of strictness you want to enforce.

- Whether you opt for `React.JSX.Element` or `React.ReactNode`, understanding the differences between these types allows you to make informed decisions when designing and typing your React components.

- Ultimately, your choice should align with your component's intended behavior and how you intend to use it in your application.

### **=>** Typing `useState` Setter Function

- In some scenarios, you may need to manage state in a parent component while using child components.

- Let's consider a situation where you have a count value in the parent component, and you want to update it when a button is clicked.

- To achieve this, you'll typically pass the `setCount` function (the state updater) to the child component so it can modify the count.

- When dealing with TypeScript, it's essential to correctly type the `setCount` function to ensure type safety.

- First, let's assume that you have some state variables, including `count`, in your parent component.

- These state variables are managed using the `useState` hook.

- Since you mentioned Next.js, it's important to note that when using client-side hooks, you might need to convert your component to a client component.

- However, the specifics of Next.js aren't the focus here; we're primarily concerned with typing the `setCount` function.

- Now, the goal is to increment the count when a button is clicked, and for that, you need to pass the `setCount` function to the button component.

- This pattern of passing a setter function to a child component is quite common when managing state in React.

- To achieve this, you need to accept the `setCount` function as a prop in your child component.

- Instead of using the `children` prop for the button's content, you can hardcode it as "Click me" for demonstration purposes.

- The key part is defining the type of the `setCount` function you receive in the child component.

- The type suggestion you received from Co-pilot is accurate and represents the appropriate type for the `setCount` function.

- However, if you're not using Co-pilot, you can easily determine the type by hovering over the `setCount` function in your code.

- TypeScript will provide you with the inferred type, which you can copy and use in your code.

- In this case, the type of `setCount` is a "Setter function" that accepts only a `number` as its argument.

- It enforces that you can only update the count with numeric values, preventing potential type errors.

- As a result, if you attempt to pass a string or any other data type instead of a number to `setCount`, TypeScript will issue a warning.

- With the correct type definition in place, you can safely use the `setCount` function to update the count when the button is clicked.

- By ensuring that your setter function is appropriately typed, you enhance the type safety of your React components, reducing the chances of runtime errors and improving code quality.

### **=>** Default Prop Values

- When working with React components, you can define default values for props.

- These default values are used when a prop is not explicitly provided, ensuring that your component can function properly even without all props being passed.

- Let's consider a scenario where you have a prop called `count`, and you want to give it a default value of `0`.

- By specifying a default value in the component's prop declaration, you eliminate the need to provide a value for `count` every time you use the component.

- With the default value set, TypeScript can automatically infer the type of `count` to be a number.

- This inference is based on the default value, and TypeScript recognizes that the default value is `0`, which is a numeric type.

- Therefore, you don't need to explicitly specify the type for `count` when you have default values.

- Default prop values help streamline your code by reducing the need for repetitive type annotations, making your code cleaner and more maintainable.

### **=>** Type Alias vs Interface

- In TypeScript, there are two primary ways to define the shape of an object: Type Alias and Interface.

- So far, we've been using Type Aliases, which are introduced with the `type` keyword.

- Type Aliases allow you to assign a name to a specific type, making it easier to reuse complex type definitions.

- For example, we can define a `buttonProps` type using Type Alias, where `text` is a string and `count` is a number.

- However, TypeScript also offers the `interface` keyword for defining types.

- We can achieve the same result by using an interface called `buttonProps`.

- With interfaces, you don't use an equal sign to assign types, but rather describe the structure of an object.

- Some developers like to prefix their interfaces with "I" to indicate that it's an interface, and they may also prefix Type Aliases with "t" for clarity.

- Interfaces have some limitations. They can only describe objects, making it challenging to define other types like union types or literal types.

- For instance, if you want to define a type for a URL that is just a string, you can easily do it with a Type Alias, but not with an interface.

- Interfaces are primarily focused on describing object shapes.

- While you can use both Type Aliases and Interfaces, it's common in the TypeScript community to prefer Type Aliases because of their flexibility.

- Type Aliases can handle a broader range of type definitions, making them more versatile for complex scenarios.

- In this video, we'll primarily focus on Type Aliases, but we'll also explore how Interfaces work for those who prefer them.

### **=>** ComponentPropsWithoutRef

- When creating a custom button component, we want to allow various attributes like `type`, `autofocus`, and many others to be specified when using the component.

- For instance, we may want to set the `type` attribute to "submit" and `autofocus` to `true`.

- To accept these attributes as props, we need to define them individually in the component's prop type.

- However, manually specifying each attribute can become cumbersome, especially when there are many attributes to consider.

- To simplify this, we can utilize a helper type called `component props` provided by React.

- This type allows us to pass all the attributes of a native HTML element, such as a button, to our custom component.

- By using `component props`, we can accept attributes like `type` and `autofocus` without needing to define them one by one.

- This approach is particularly useful when wrapping native elements like buttons or anchor tags in custom components.

- When using `component props`, we need to ensure it's within the React namespace, typically accessed as `react.component props`.

- This type simplifies the process of accepting attributes from the native HTML element.

- However, it's important to note that when dealing with refs, you may need to consider different variations of `component props`, such as `component props with ref`.

- Depending on your use case, you can choose the appropriate `component props` variant to suit your component's requirements.

### **=>** Rest and Spread

- In our button component, we have been destructuring the `type` and `autofocus` attributes, but what if we have many other attributes to consider?

- Manually specifying each attribute one by one would be impractical.

- Fortunately, JavaScript provides the rest operator, which can be used to collect all remaining props.

- We can use the rest operator by adding `...rest` (or any preferred name) in our function parameters.

- This will gather all the additional attributes passed to our component into an array-like object named `rest`.

- With the collected `rest` object, we can easily spread its contents onto the native button element.

- To do this, we use the spread operator, indicated by three dots (`...`).

- By spreading `rest`, we can include all the other attributes like `defaultValue`, `lastName`, or any other potential props.

- This approach allows us to efficiently manage and pass any number of attributes to our component without the need for manual specification.

### **=>** Intersection (&)

- We have now set up our button component to accept all the attributes of a native button element.

- But what if we want to accept additional props that aren't standard HTML attributes?

- In TypeScript, we can achieve this by using the intersection operator (`&`).

- To do this, we first define the base type, which includes all the native attributes.

- Then, we use the `&` operator to intersect this base type with any additional props we want to include.

- For example, let's say we want to introduce a `variant` prop, which specifies if the button should be primary or secondary.

- By using the intersection operator, we can accept both the standard button attributes and the `variant` prop.

- This allows us to have a flexible and extensible component that accommodates both standard and custom props.

- In more complex scenarios, you can apply this concept to create a hierarchy of props, where a "super" component inherits the props of a "base" component and adds its own unique props using intersection.

### **=>** Interface extends

- In TypeScript, you can extend the properties of one interface with another interface.

- When using the `interface` keyword, you don't use the `=` sign as you do with type aliases.

- Instead, you use the `extends` keyword to specify that one interface extends the properties of another.

- For example, we can define an `interface` called `buttonProps` to represent the properties of a button component.

- Then, we can create another `interface` called `superButtonProps` that extends `buttonProps` using the `extends` keyword.

- This way, `superButtonProps` inherits all the properties of `buttonProps`.

- This is similar to how you use the `&` operator with type aliases to intersect types.

- So, sometimes you use `extends` with interfaces for extending properties and `&` with type aliases for intersecting types, depending on your specific needs.

### **=>** Typing event handler functions

- When working with event handlers in React, you often define functions that get triggered when an event occurs, such as an `onClick` function for a button.

- In TypeScript, you can type these event handlers to specify the expected event object.

- For example, if you have an `onClick` event handler inline, TypeScript can automatically infer the type of the event object.

- However, if you extract the function into a separate variable or function declaration, TypeScript loses context, and you need to manually type the event object parameter.

- To do this, you can hover over the inline event handler to see the inferred type and then copy it to properly type your function.

- For instance, if you have a function called `handleClick`, you can explicitly type the event parameter by using a colon followed by the event type.

- This way, your event handler functions are properly typed, whether they are used inline or extracted as separate functions.

- This approach also applies to other event handlers like `onChange` or `onSubmit` when dealing with form elements or other interactive components in React.

### **=>** Typing useState hook

- When using the `useState` hook in TypeScript, you can often rely on TypeScript's type inference to determine the variable types.

- For example, if you declare a state variable like `count` without specifying its type, TypeScript can infer that it's of type `number` based on the initial value you provide.

- Explicitly specifying the type with angled brackets (e.g., `<string>`, `<number>`, or `<boolean>`) is not necessary in most cases because TypeScript can correctly infer it.

- However, when dealing with objects as initial values, it's crucial to define a custom type for the object to avoid type errors.

- For instance, if you initialize a `user` state with `null`, TypeScript will infer its type as `null`. To address this, create a custom type (e.g., `user`) for the object.

- To work with the possibility of `null` initial values, use the union type `user | null`, indicating that it can be either a user object or `null`.

- When accessing properties of objects that may be `null`, consider using optional chaining (`?.`) to prevent runtime errors.

- These practices help ensure type safety when using the `useState` hook in React with TypeScript.

### **=>** Typing useRef hook

- While some React hooks, like `useEffect`, may not require explicit typing, others, such as `useRef`, benefit from type annotations.

- When using `useRef`, you can create a reference for a native button element, for instance, by passing an initial value of `null`.

- To properly type the ref, you can leverage helper types provided by React.

- The general `element` type is available, but you can narrow it down to `HTML element`.

- For even more specificity, you can specify that the `ref` will eventually hold an `HTMLButtonElement`, ensuring proper typing.

- By applying these type annotations, your `ref` will be correctly typed without the need for `| null`.

- Note that when dealing with the Context API, type annotations can become complex, and it's advisable to refer to dedicated resources for detailed guidance.

### **=>** Using `as const`

- When working with constants, you can employ the `as const` TypeScript feature to enhance specificity.

- Suppose you have a constant array of button text options like "click me," "click me again," and "click me one more time."

- Initially, TypeScript infers this array as an array of strings.

- To make it more specific and restrict it to these specific string values, use `as const` after the array.

- `as const` ensures that the array is treated as read-only and contains only the specified string values.

- This specificity aids in better type inference, providing you with the actual values when you reference elements from the array.

- Furthermore, it prevents accidental additions or modifications to the constant array.

### **=>** Using the `Omit` Utility

- Suppose you have a `user` type that includes properties like `name` and `sessionID`.

- Additionally, you have a `guest` type, which should be similar to `user` but without the `name` property.

- To achieve this, you can use the `Omit` utility in TypeScript.

- `Omit` takes two arguments: the original type (in this case, `user`) and the property you want to omit (e.g., `name`).

- When you apply `Omit` in this manner, it creates a new type (`guest`) that includes all properties from the original type except the omitted one (`name`).

- As a result, the `guest` type only contains the `sessionID` property and does not include `name`.

### **=>** 'as' Type Assertion

- When working with data retrieved from local storage, you often use the `useEffect` hook.

- While `useEffect` doesn't require typing, there are situations within it where you might need to provide type information.

- For instance, when retrieving a value like the previous button color from local storage, you can use `localStorage.getItem('buttonColor')`.

- You might already have a type defined for `buttonColor`, such as a union type that represents all possible colors.

- However, TypeScript infers the result of `localStorage.getItem('buttonColor')` as `string | null` by default.

- To tell TypeScript that you expect the result to be of type `buttonColor`, you can use a type assertion with the `as` keyword.

- By asserting the type with `as buttonColor`, you inform TypeScript that you are confident the result is of the specified type.

- This assertion makes the variable's type consistent with the rest of your application, ensuring that it matches the expected type.

### **=>** Generics (EASY!)

- In TypeScript, there's a concept called generics, which some people find intimidating but is actually quite straightforward.

- Let's start with a simple example. Imagine we have a function called `convertToArray`, and all it does is take a value and return that value in an array format, enclosed in square brackets.

- We want to be able to call this function with different types of values, such as numbers, strings, and booleans.

- Currently, TypeScript gives us an error because we haven't specified the type of the `value` parameter, so it's inferred as `any`.

- Using `any` is problematic because it allows us to perform operations that might not be safe for all types. For instance, calling `.toUpperCase()` on a number will cause issues.

- To address this, we could explicitly type `value` as a `string`, and we'd also need to specify that the function returns an array of strings. This ensures type safety, but it only works for one specific type, in this case, strings.

- However, we want this function to work with various types, not just strings. This is where generics come in.

- Instead of hardcoding the type as `string`, we use a generic type parameter, conventionally named `T`. We declare it in angle brackets before the parameter list.

- By using `T`, we're making the function more general and allowing it to work with different types.

- We specify that the return value will be an array of the same type as the input `value`. This creates a relationship between the parameter and the return value.

- TypeScript will infer `T` based on the type of `value` when we call the function.

- To make it cleaner, you can use traditional function syntax and specify the type parameter in front of the parameter list, such as `function convertToArray<T>(value: T): T[]`.

- With this approach, we can call the function with various types like numbers, strings, and booleans, and TypeScript will handle the type inference correctly.

- Generics allow us to write more flexible and type-safe functions, making our code more versatile and less error-prone.

### **=>** Generics in React

- Generics in React components allow us to handle dynamic types for props.

- Let's take an example where we have a button component that accepts a `countValue` and a `countHistory`.

- We create a type called `buttonProps` to encapsulate these props.

- Initially, we could hard-code `countValue` as a number, but we want to make it more flexible, so it can also accept other types like strings.

- Now, we have a relationship between the type of `countValue` and the type of the elements in the `countHistory` array.

- Generics are essentially type parameters that let us make our components more versatile.

- We specify this relationship between the two props using generics.

- To declare a type parameter, we use `<T>` and ensure that `countValue` and the array elements in `countHistory` are of the same type.

- To use this type parameter, we specify it in angle brackets `<T>` before the parameter list.

- However, since we've extracted the type into `buttonProps`, we need to add another set of angle brackets when declaring the type.

- With this setup, TypeScript will ensure that the `countValue` type matches the type of elements in the `countHistory` array.

- If we try to pass mismatched types, TypeScript will generate warnings, helping us maintain type safety in our React components.

- Generics are a powerful tool in TypeScript for creating flexible and type-safe components. While they may seem complex, they offer significant benefits in maintaining code quality.

### **=>** `index.d.ts` vs. `types.ts`

- We've covered some complex topics, but there are a few other essential concepts to grasp.

- Consider the example of a color type, like red, blue, and green, which is often part of a theme.

- Other components may also require access to this type for styling purposes.

- To reuse this type across multiple files, it's best to place it in a separate library folder.

- You might be tempted to use `index.d.ts` or `import type`, but this is not the recommended approach.

- `index.d.ts` files are primarily used for declaration files that provide type information for third-party libraries.

- Instead, you should create a `types.ts` file to store your custom types and share them across your project.

### **=>** `import type`

- Instead of using `import type`, you can create a TypeScript file, let's call it `types.ts`.

- Place your color type definition in this `types.ts` file and export it using `export`.

- Now, you can import this type in other components by using a regular `import` statement.

- For example, you can import the color type like this: `import { color } from './types';`.

- By specifying `type` in front of the imported type, you make it explicitly clear that it's a TypeScript type.

- This helps prevent accidental misuse of the type, treating it as a regular JavaScript variable.

- The main benefit of this approach is maintaining clarity and ensuring the type is used appropriately.

### **=>** 'unknown' type

- Sometimes, you'll encounter the 'unknown' type, which is important to understand.

- When using `useEffect` to fetch data, you might receive a response, parse it as JSON, and finally, you get the actual data.

- By default, TypeScript types this data as 'any,' but using 'any' is not ideal.

- The problem is, when dealing with external APIs, you can't be sure about the structure of the data you'll receive.

- It could be different from what you expect, or there could be errors on the server.

- To address this uncertainty, TypeScript provides the 'unknown' type, which means you don't know anything about the data.

- You can't immediately use methods or access properties on values of type 'unknown.'

- Before using 'unknown' values, you should verify that they have the expected shape and type.

- This approach helps prevent bugs and ensures you handle unexpected data gracefully.

### **=>** Zod

- This is actually where schemas come into place.

- Maybe you've heard of Zod and other schema validators.

- What you want to do here is run your data through a schema validator.

- In Zod, for example, you can define a schema, then use the `parse` method to check if your data matches that schema.

- If the data conforms to the schema, you can proceed with your operations.

- Consider replacing occurrences of 'any' with the 'unknown' type and use a schema validator like Zod to ensure the data conforms to the expected shape.

- In-depth details about schema validation and using Zod are beyond the scope of this video, but you can find more information in other resources or tutorials.

### **=>** ts-reset Library

- If you don't want to manually change types from 'any' to 'unknown' yourself, you can consider using the 'ts-reset' package.

- This package, created by Met Pook, ensures that when you fetch data, it will automatically be typed as 'unknown'.

- The 'ts-reset' package offers other benefits as well, but discussing them is beyond the scope of this video.

- To learn more about installing and using 'ts-reset' and other TypeScript-related topics, you can refer to other videos or courses, such as my course on React and Next.js, where TypeScript and related details are covered.

### **=>** Third-party types ('@types' / DefinitelyTyped)

- Some other things that you really need to know are the following. Let me clean this up.

- Previously, we were actually using a type from React. We did something like `children: ReactNode`, so this is the React namespace, but this is a type that we get from React. We also used one for styles, so we had something like `style: React.CSSProperties`. These are helpful because then we don't have to create these types ourselves; we can just use something from React.

- So, where are these types coming from? Well, if you go into the node_modules folder, you will see something called `@types`. This is where a lot of your third-party library types will come from. Here we also have `react`, `react-dom`, and `node` for Node.js. So, `@types` is a repository for high-quality TypeScript type definitions. It's also called DefinitelyTyped, and it's basically a big collection of types for third-party libraries. When Microsoft introduced TypeScript, many of these libraries weren't using TypeScript yet. This project, DefinitelyTyped, provides types for popular third-party libraries like React and many others.

### **=>** tsconfig.json

- When you're using a framework like Next.js, you'll usually have some other TypeScript files here as well for configuration. Typically, the file you'll always have is a `tsconfig.json` file, where you define TypeScript settings.

- TypeScript compiles your TSX files into JSX files, and you can determine how that should be done using the `jsx` option. This option isn't particularly interesting, and Next.js, by default, sets it to "preserve." You don't typically need to change this.

- The only other option here that you may want to use is the `strict` option. In a Next.js project, it's set to `true` by default. This means that TypeScript will enforce strict type checking.

- As a quick example, if you remember when we had a state that's initially `null`, like `const [user, setUser] = useState(null);`, and `user` can be an object with properties like `name` and `email`, TypeScript will give you a red squiggly line if you try to access properties of `user` because it could possibly be `null`.

- However, if you set `strict` to `false`, the red squiggly line disappears. So, it's less strict. But it's generally better to be strict with your types and make sure you handle null values properly, either with optional chaining or checking for null values.

- The `strict` setting doesn't only affect this behavior; it also affects other type checking rules. In general, it's a good idea to be strict with your TypeScript settings, but usually, your framework will have already set these settings for you, so you don't need to change them.

### **=>** next-env.d.ts

- In Next.js specifically, we also have this `next-env.d.ts` file, and this file references the types for Next.js. If we're using some Next.js-specific feature, we also want to ensure we get correct typing, and this file ensures that.

- As a quick example, if you're fetching data in a server component in Next.js, you can do that using the `fetch` function to some URL. What's unique in Next.js is that they have extended the `fetch` API a bit. Instead of just a plain URL, you can write `next` here, and this is actually an object. When you start typing inside this object, you'll get intelligent code suggestions. For instance, it suggests that you can pass properties like `revalidate` and `text`. If you try to pass something that's not the correct type, you'll get a warning. In this case, it should be a number.

- This is a Next.js-specific feature where they have extended the `fetch` API to provide additional functionality and typing. The reason you get this typing and intelligence is because you include this `next-env.d.ts` file, which references where those types for Next.js are defined.

- There was a lot to take in, and it's completely normal if you're a little bit confused right now.
