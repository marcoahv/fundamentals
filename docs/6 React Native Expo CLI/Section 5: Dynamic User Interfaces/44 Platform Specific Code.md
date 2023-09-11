---
sidebar_position: 44
---

# Platform Specific Code

>

### **=>** Intro

- When developing a cross-platform app, maximizing code reuse is a priority.

- However, there are situations where it becomes necessary to tailor your code to specific platforms.

- React Native offers two approaches for organizing and separating platform-specific code.

- Let's learn both these approaches in this video.

## Platform Module

- Let's begin with the first approach: the `Platform` module.

- This module is imported from React Native and detects the platform on which the app is running.

```jsx
import { View, Text, StyleSheet, SafeAreaView, Platform } from 'react-native'

export default function App() {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.text}>Welcome</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: 'plum',
  },
  container: {
    flex: 1,
    backgroundColor: 'plum',
  },
  box: {
    padding: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})
```

- You can use the detection logic to implement platform-specific code.

- For instance, consider our welcome text.

- On iPhone, it is appropriately positioned within a safe area view, but on Pixel, it is too close to the status bar.

- using the Platform module we can set a top padding only on Android: `paddingTop: Platform.OS === 'android' ? 25 : 0,`

```jsx
import { View, Text, StyleSheet, SafeAreaView, Platform } from 'react-native'

export default function App() {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.text}>Welcome</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: 'plum',
  },
  container: {
    flex: 1,
    backgroundColor: 'plum',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
  box: {
    padding: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})
```

- This way, you can set a top padding only on Android:

- you can similarly check against iOS to apply Styles specifically to iOS `paddingTop: Platform.OS === 'android' ? 25 : 0,`

### Platform.select

- While Platform.OS is suitable for small changes, a better option for more comprehensive platform-specific styles is to use `Platform.select`.

- Let's show an example where we completely change the text styles for iOS and Android.

- We'll change the font color and font size across the two platforms.

- for that within text key we're going to spread pPlatform.select and curly braces: `text: {...Platform.select({})}`

- within this object, we can specify `ios: {}` as a key to apply iOS specific Styles
- and `android: {}` as a key to apply Android specific styles

```jsx
import { View, Text, StyleSheet, SafeAreaView, Platform } from 'react-native'

export default function App() {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.text}>Welcome</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: 'plum',
  },
  container: {
    flex: 1,
    backgroundColor: 'plum',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
  box: {
    padding: 20,
  },
  text: {
    ...Platform.select({
      ios: {
        color: 'purple',
        fontSize: 24,
        fontStyle: 'italic',
      },
      android: {
        color: 'blue',
        fontSize: 30,
      },
    }),
    fontWeight: 'bold',
    textAlign: 'center',
  },
})
```

### Platform-Specific Extensions

- For more complex platform-specific scenarios, you should rely on the second approach: `platform-specific extensions`.

- In this approach, you split your code into separate files with `.iOS.js` and `.Android.js` extensions before the file's main extension.

- React Native detects the extension and loads the relevant platform file when required by other components.

### example

- 1. Within the project folder, create a `components` folder and inside create a `CustomButton` folder

- 2. create two files: `CustomButton.ios.js`

```jsx
import React from 'react'
import { Pressable, Text } from 'react-native'

const CustomButton = ({ onPress, title }) => (
  <Pressable
    onPress={onPress}
    style={{
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'lightblue',
      borderRadius: 20,
      padding: 10,
    }}>
    <Text style={{ color: 'purple', fontSize: 18 }}>{title}</Text>
  </Pressable>
)

export default CustomButton
```

- and `CustomButton.android.js`

```jsx
import React from 'react'
import { Pressable, Text } from 'react-native'

const CustomButton = ({ onPress, title }) => (
  <Pressable
    onPress={onPress}
    style={{
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'lightblue',
      borderRadius: 5,
      padding: 10,
    }}>
    <Text style={{ color: 'blue', fontSize: 18 }}>{title}</Text>
  </Pressable>
)

export default CustomButton
```

- each containing the platform-specific code for the custom button component.

- 3. back in App.js import the folder

```jsx
import { View, Text, StyleSheet, SafeAreaView, Platform } from 'react-native'
import CustomButton from './components/CustomButton/CustomButton'

export default function App() {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.text}>Welcome</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: 'plum',
  },
  container: {
    flex: 1,
    backgroundColor: 'plum',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
  box: {
    padding: 20,
  },
  text: {
    ...Platform.select({
      ios: {
        color: 'purple',
        fontSize: 24,
        fontStyle: 'italic',
      },
      android: {
        color: 'blue',
        fontSize: 30,
      },
    }),
    fontWeight: 'bold',
    textAlign: 'center',
  },
})
```

- 4. and then invoke the component

- By organizing your code this way, React Native will automatically select the appropriate version of the component based on the executing platform.

### In summary

- React Native allows you to run platform-specific code using the platform module and platform file extensions.

- You can use Platform.OS or Platform.select for minor style differences.

- However, for more complex components that need distinct appearances or behaviors across the two platforms, using .iOS.js and .Android.js file extensions is recommended.

- With that, we conclude this section on Dynamic UI in React Native.

- We've learned how to adapt the application's user interface based on device dimensions using the dimensions API, explored its drawbacks, and understood how the useWindowDimensions hook simplifies working with dimensions and responsive styles.

- We've also learned about the SafeAreaView component for iOS, which ensures the application's UI adapts to hardware limitations like notches and rounded corners.

- Finally, we looked at running platform-specific code, which can be quite useful as iOS and Android at times require tailor-made user experiences.
