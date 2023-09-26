---
sidebar_position: 59
---

# TextInput Props

## **TextInput Props**

>

### **=>** Intro

- In the previous video, we explored the fundamental aspects of the TextInput component in React Native.

- In this video, let's dive into some important props that allow you to customize the behavior and appearance of the TextInput component.

### **=>** Placeholder Prop

- First, we have the `placeholder` prop.

- It provides users with visual cues about the expected input.

- For example, we can specify `placeholder= 'email@example.com'`

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

- When we take a look at the UI, you can see that before the user starts typing, the placeholder text is displayed.

- This guides them on what information to provide, in our case, an email.

- Please remember that `a placeholder is not a substitute for a label`, as the hint disappears once you start typing.

### **=>** SecureTextEntry Prop

- The second prop is `secureTextEntry`.

- Enabling this prop masks the input characters, making them appear as asterisks or dots.

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
        secureTextEntry
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

- This ensures that the user's input remains hidden when dealing with sensitive information like passwords.

- The `secureTextEntry` prop is crucial for privacy and security.

### **=>** keyboardType Prop

- The third prop to be aware of is `keyboardType`.

- This prop allows you to specify the type of keyboard that appears when the user interacts with the text input.

- For example, if you have created a phone number field, you can set `keyboardType = 'numeric'`

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
        secureTextEntry
        keyboardType='numeric'
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

- Returning to the UI and focusing on the text input field on Android, you can see the numeric keyboard.

- There are a few other values you can specify, but you can see how this prop enhances the user experience.

### **=>** AutoCorrection and AutoCapitalization

- Let me walk you through two more props which are sometimes not favored but are enabled by default.

- If I restart the app and head back to the UI, if I were to type "watre" and press Enter, you can see it auto-corrects to "water."

- Also, if I type "john doe" and press Enter, you can see it auto-capitalizes the last name.

- While this behavior is valid for some scenarios, for a username or email field that doesn't always follow perfect English, you might want to relax these enforcements.

- To do that, you can set `autoCorrect={false}` `autoCapitalize="none"`

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

- Other values for `autoCapitalize` include capitalizing every `character`, the first character of every `words`, or the first character of every `sentences` (which is the default).
