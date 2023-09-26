---
sidebar_position: 58
---

# TextInput

## **TextInput**

>

### **=>** Intro

- The Text Input component is a fundamental building block for user input in React Native.

- It allows users to enter text and other data into your application.

### **=>** Getting Started

- I'm going to start by making some changes in App.js

  - Remove the `expo-status-bar` import from Expo and instead import `StatusBar` from `react-native` to stick with vanilla RN

  - Import `SafeAreaView` and replace the `View` component with `SafeAreaView` to handle iOS padding at the top.

  - For Android, add padding equal to the status bar height in the container styles. `paddingTop: StatusBar.currentHeight`

  - Remove any alignment properties on the container that may affect text input placement.

  - Delete the JSX within the `SafeAreaView`.

```jsx
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from 'react-native'

export default function App() {
  return <SafeAreaView style={styles.container}></SafeAreaView>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: StatusBar.currentHeight,
  },
})
```

### **=>** Adding Text Input

- We are now ready for our text input.

- Begin by importing it from React Native and invoke the component within `SafeAreaView`.

```jsx
import { StyleSheet, Text, View, StatusBar, SafeAreaView, TextInput } from 'react-native'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <TextInput />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: StatusBar.currentHeight,
  },
})
```

- However, when you view it on your devices, you may not see the text input component.

- The styling is such that you don't really see it.

- If you try to click on the input, you can see the cursor.

### **=>** Styling the Text Input

- Let's add some styles to fix this.

- Let's call the key `input` and add a height of 40 pixels, margin, padding, and border width.

- Assign this style to the `TextInput` component

```jsx
import { StyleSheet, Text, View, StatusBar, SafeAreaView, TextInput } from 'react-native'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <TextInput style={styles.input} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: StatusBar.currentHeight,
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    borderWidth: 1,
  },
})
```

- Now, when you view the UI, you can clearly see the text input component.

- You can focus on the input and start typing.

- On Android, it brings up the keyboard, and you can continue typing.

- For iOS, if you want a similar keyboard, you need to press `Command+Shift+K`.

- This will bring up the keyboard, and you can press different keys.

- Press `Command+Shift+K` again, and the keyboard disappears.

### **=>** Tracking Input Value with useState

- However, the value you've entered isn't being tracked.

- To track the input value, we can make use of a `state` variable similar to how we do it in React.

- Import `useState` from React

- and create a state variable `name` and the corresponding `setName` function with an initial value of an empty string.

```jsx
import { StyleSheet, Text, View, StatusBar, SafeAreaView, TextInput } from 'react-native'
import { useState } from 'react'

export default function App() {
  const [name, setName] = useState('')
  return (
    <SafeAreaView style={styles.container}>
      <TextInput style={styles.input} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: StatusBar.currentHeight,
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    borderWidth: 1,
  },
})
```

- Assign `name` to the `value` prop on the `TextInput` and assign `setName` function to the `onChangeText` prop of the text input component.

```jsx
import { StyleSheet, Text, View, StatusBar, SafeAreaView, TextInput } from 'react-native'
import { useState } from 'react'

export default function App() {
  const [name, setName] = useState('')
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: StatusBar.currentHeight,
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    borderWidth: 1,
  },
})
```

- This will automatically update the state variable when you start typing in the input box.

### **=>** Displaying Input Value

- Let's add some text to make sure we are tracking the input value:

```jsx
import { StyleSheet, Text, View, StatusBar, SafeAreaView, TextInput } from 'react-native'
import { useState } from 'react'

export default function App() {
  const [name, setName] = useState('')
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
      />
      <Text>My name is {name}</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: StatusBar.currentHeight,
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    borderWidth: 1,
  },
})
```

- Let's also add some styles to make it clear:

```jsx
import { StyleSheet, Text, View, StatusBar, SafeAreaView, TextInput } from 'react-native'
import { useState } from 'react'

export default function App() {
  const [name, setName] = useState('')
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
      />
      <Text style={styles.text}>My name is {name}</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: StatusBar.currentHeight,
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    borderWidth: 1,
  },
  text: {
    fontSize: 30,
    padding: 10,
  },
})
```

- Now, when you start typing on the devices, you can see the same value is reflected in the text component below.

### **=>** Summary

- The `TextInput` component is a tool for inputting text into the app via a keyboard.

- You can import it from the React Native library and invoke it with the `value` and `onChangeText` props to manage its state.

- Join me in the next video where we will learn about some of the important props supported by the text input component.
