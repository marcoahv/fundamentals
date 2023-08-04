---
sidebar_position: 7
---

# Core Components

- In this section, we will explore the core components in React Native.
- When we use React to create web user interfaces, we often utilize HTML tags such as `<div>` , `<span>` , and `<p>` .
- Here's an example React component that renders "Hello, World!" in the browser using `<div>` and `<p>` tags.

```jsx
import React from 'react'
const HelloWorld = () => {
  return (
    <div>
      <p>Hello, World!</p>
    </div>
  )
}
export default HelloWorld
```

- It's crucial to note that JSX elements we write for the web are specific to the browser's understanding of HTML.

- However, when working with React Native, these elements won't work because React Native does not incorporate the concept of a Document Object Model (DOM).

- In Android and iOS development, a fundamental building block called a "View" is employed for user interfaces.

- A view is a small rectangular element on the screen that can display text, images, or respond to user input.

- In Android development, views are written in Kotlin or Java, while in iOS development, Swift or Objective-C is used.

- With React Native, this process becomes simpler as you can create these views using JavaScript through React components. At runtime, React Native generates the corresponding Android and iOS views for these components.

- React Native offers a collection of essential rebuilt components known as "Core Components" that are readily available for building your native app's user interface.

### Core Components Table

| React Native Core Component | Android Equivalent | iOS Equivalent | Web Equivalent |
| --------------------------- | ------------------ | -------------- | -------------- |
| View                        | View               | UIView         | `<div>`        |
| Text                        | TextView           | UILabel        | `<p>`          |
| Image                       | ImageView          | UIImageView    | `<img>`        |
| TextInput                   | EditText           | UITextField    | `<input>`      |
| ScrollView                  | ScrollView         | UIScrollView   | `<div>`        |
| Button                      | Button             | UIButton       | `<button>`     |

- Pause the video and take a good look at each row and column in this table.

- A notable difference between creating React components for the web and React Native is that in React Native, you need to import core components from the React Native Library, ...

```jsx
import React from 'react'
import { View, Text } from 'react-native' /// import core components from the React Native Library
const MyComponent = () => {
  return (
    <View>
      <Text>Hello, World!</Text>
    </View>
  )
}
export default MyComponent
```

- whereas in React for web development, you don't import HTML elements like `<div>` , `<span>` , or `<p>`.

- Before we proceed, it's important to quickly highlight a point about styling. We will cover styling in detail in the next section, but for this section, we will apply some basic inline styles that might be familiar if you have written HTML and CSS for the web.

### Conclusion

- With an understanding of what core components are in React Native, let's take a closer look at the most important ones in the next video.
