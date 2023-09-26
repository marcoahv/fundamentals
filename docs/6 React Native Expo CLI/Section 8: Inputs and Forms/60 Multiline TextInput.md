---
sidebar_position: 60
---

# Multiline TextInput

## **Multiline TextInput**

>

### **=>** Intro

- In this video, we will explore how to define and style a multiline input in React Native.

- Unlike the web, which has an input element for single-line input and a text area element for multiline input, in React Native, the same text input element can be used for both purposes.

- All we have to do is include the `multiline` prop.

### **=>** Creating a Multi-line Input

- Let's add a new `TextInput` component.

- We're going to set `style` as equal to `Styles.input`, `placeholder` as equal to "message," and then add the `multiline` prop

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
        placeholder='email@example.com'
        // secureTextEntry
        // keyboardType='numeric'
        autoCorrect={false}
        autoCapitalize='none'
      />
      <TextInput
        style={styles.input}
        placeholder='message'
        multiline
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

- If we take a look at the UI, we don't see much difference since the underlying element is the same.

### **=>** Styling the multiline Input

- To make this multiline input stand out, we need to add some additional styles.

- In the `Styles` object, add a new key-value pair `multilineText: { minHeight: 100 }`

- Now, we need to specify an array of styles for the TextInput

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
        placeholder='email@example.com'
        // secureTextEntry
        // keyboardType='numeric'
        autoCorrect={false}
        autoCapitalize='none'
      />
      <TextInput
        style={[styles.input, styles.multilineText]}
        placeholder='message'
        multiline
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
  multilineText: {
    minHeight: 100,
  },
})
```

- If we take a look at the UI, it is clear that this now resembles a multi-line text input.

- A user will be able to understand from the get-go that they can input longer text, which is always good.

### **=>** Addressing Alignment

- Now, it's important to note that the `multiline` prop aligns the text input to the top on iOS and centers it on Android.

- To address this, we need to specify `textAlignVertical` and set it to "top."

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
        placeholder='email@example.com'
        // secureTextEntry
        // keyboardType='numeric'
        autoCorrect={false}
        autoCapitalize='none'
      />
      <TextInput
        style={[styles.input, styles.multilineText]}
        placeholder='message'
        multiline
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
  multilineText: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
})
```

- If we head back to the UI, we can see it is now properly aligned to the top.

### **=>** Summary

- That covers the text input component in React Native, including how to create a multi-line input and style it to meet your design requirements.
