---
sidebar_position: 61
---

# Switch

## **Switch**

>

### **=>** Intro

- In this video, let's explore the `Switch` component in React Native.

- The `Switch` component serves as a valuable tool for integrating toggles into your app's user interface.

- It is particularly well suited for scenarios where you require users to make binary choices, such as enabling or disabling specific app features.

### **=>** Usage Steps

- Let's head back to VS Code and understand its usage step by step:

#### **=>** Step 1: Importing the Switch Component

- Begin by importing the Switch component from the React Native library.

```jsx
import { StyleSheet, Text, View, StatusBar, SafeAreaView, TextInput, Switch } from 'react-native'
```

#### **=>** Step 2: Creating a Container

- Let's use the `View` component from React Native and create a container for the switch component.

- We're going to set `styles` as equal to `styles.switchContainer`.

- Inside this container, nest a `Text` component that says "Dark mode" with a style set to `styles.text`. Then, invoke the switch component.

```jsx
import { StyleSheet, Text, View, StatusBar, SafeAreaView, TextInput, Switch } from 'react-native'
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
      <View style={styles.switchContainer}>
        <Text style={styles.text}>Dark Mode</Text>
        <Switch />
      </View>
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

#### **=>** Step 3: Defining Styles

- Let's define the styles for the switchContainer.

- Set `flexDirection` to "row," `alignItems` to "center," `justifyContent` to "space-between," and finally, `paddingHorizontal` to 10.

```jsx
import { StyleSheet, Text, View, StatusBar, SafeAreaView, TextInput, Switch } from 'react-native'
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
      <View style={styles.switchContainer}>
        <Text style={styles.text}>Dark Mode</Text>
        <Switch />
      </View>
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
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
})
```

- Now, we will have 10 pixels of horizontal padding for the text "dark mode," but that is okay as styling isn't really the main focus.

#### **=>** Step 4: Connecting with state variable

- For step 4, create a new state variable named `isDarkMode` with an initial value of `false`.

- Then, add two props to the switch component: `value` is equal to `isDarkMode`,

- and `onValueChange`, where we toggle the `isDarkMode` value.

- We pass in a function that receives the `previousState` and set it to the inverse of the previous state, `!previousState` basically inverting the value.

```jsx
import { StyleSheet, Text, View, StatusBar, SafeAreaView, TextInput, Switch } from 'react-native'
import { useState } from 'react'

export default function App() {
  const [name, setName] = useState('')
  const [isDarkMode, setIsDarkMode] = useState(false)
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
      <View style={styles.switchContainer}>
        <Text style={styles.text}>Dark Mode</Text>
        <Switch
          value={isDarkMode}
          onValueChange={() => setIsDarkMode(previousState => !previousStates)}
        />
      </View>
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
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
})
```

- In a practical scenario, you can consider showing different content or activating certain features in your application when the switch is turned on or off.

### **=>** Customizing Appearance using trackColor and thumbColor

- As for the props, we can use `trackColor` to set colors for the track in different states.

- This is an object. If the value is `false`, let's set it to `#767577`, and if it is `true`, we set it to light blue.

- We can also set the thumb color using the `thumbColor` prop, let's set it to `#F4F3F4`.

```jsx
import { StyleSheet, Text, View, StatusBar, SafeAreaView, TextInput, Switch } from 'react-native'
import { useState } from 'react'

export default function App() {
  const [name, setName] = useState('')
  const [isDarkMode, setIsDarkMode] = useState(false)
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
      <View style={styles.switchContainer}>
        <Text style={styles.text}>Dark Mode</Text>
        <Switch
          value={isDarkMode}
          onValueChange={() => setIsDarkMode(previousState => !previousState)}
          trackColor={{ false: '#767577', true: 'lightblue' }}
          thumbColor={'#f4f3f4'}
        />
      </View>
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
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
})
```

- If we take a look at the UI, we can see we have different colors from before.

- Ideally, these would be dictated by your brand colors.

### **=>** Platform Differences

- You can also see that the appearance of the switch component is different across the two platforms.
