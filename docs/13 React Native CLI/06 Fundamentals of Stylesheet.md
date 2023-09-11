---
sidebar_position: 3
---

# The Fundamentals of Stylesheet

### Setting Up the Environment

- Recap of the previous video (Hello World app).
- Creating a new file on the root directory and name it `AppPro.tsx`
- Importing React and React Native.
- Exporting the app component.

```jsx
import React from 'react'
import {} from 'react-native'

export default AppPro
```

### Creating the `appPro` Component

- Creating a new function component `appPro`.
- Setting up the basic structure for the app.

```jsx
import React from 'react'
import {} from 'react-native'

function AppPro() {}

export default AppPro
```

- edit the index.js file

```jsx
/**
 * @format
 */

import { AppRegistry } from 'react-native'
// import App from './App';
import AppPro from './AppPro'
import { name as appName } from './app.json'

AppRegistry.registerComponent(appName, () => AppPro)
```

- add `SafeAreaView` `View`, `Text`, `StyleSheet`, `useColorScheme` to AppPro

```jsx
import React from 'react'
import { SafeAreaView, View, Text, StyleSheet, useColorScheme } from 'react-native'

function AppPro() {
  return (
    <SafeAreaView>
      <View>
        <Text>Hello</Text>
      </View>
    </SafeAreaView>
  )
}

export default AppPro
```

### Using TypeScript

- Introduction to TypeScript.
- Specifying that the component should return a JSX element `function AppPro(): JSX.Element {}`

```jsx
import React from 'react'
import { SafeAreaView, View, Text, StyleSheet, useColorScheme } from 'react-native'

function AppPro(): JSX.Element {
  return (
    <SafeAreaView>
      <View>
        <Text>Hello</Text>
      </View>
    </SafeAreaView>
  )
}

export default AppPro
```

- Declaring a variable `const isDarkMode = useColorScheme`

```jsx
import React from 'react'
import { SafeAreaView, View, Text, StyleSheet, useColorScheme } from 'react-native'

function AppPro(): JSX.Element {
  const isDarkMode = useColorScheme
  return (
    <SafeAreaView>
      <View>
        <Text>Hello</Text>
      </View>
    </SafeAreaView>
  )
}

export default AppPro
```

### Using Color Schemes

- Introducing `useColorScheme` for dark mode.

```jsx
import React from 'react'
import { SafeAreaView, View, Text, StyleSheet, useColorScheme } from 'react-native'

function AppPro(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark'
  return (
    <SafeAreaView>
      <View>
        <Text>Hello</Text>
      </View>
    </SafeAreaView>
  )
}

export default AppPro
```

### Styling with StyleSheet

- Importing `StyleSheet` from React Native.
- Creating a stylesheet object.
- Defining a `container` style with flex and alignment.
- Applying styles to the `SafeAreaView`component.

### Testing Dark Mode

- Demonstrating how to toggle dark mode.
- Showing that styles change based on dark mode.

```jsx
import React from 'react'
import { SafeAreaView, View, Text, StyleSheet, useColorScheme } from 'react-native'

function AppPro(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark'
  return (
    <SafeAreaView style={isDarkMode ? styles.containerDark : styles.container}>
      <View>
        <Text style={isDarkMode ? styles.whiteText : styles.blackText}>Hello World</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  containerDark: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
  },
  whiteText: {
    color: '#ffffff',
  },
  blackText: {
    color: '#000000',
  },
})

export default AppPro
```

### Understanding Flexbox

- Explanation of flexbox and its properties.
- Clarifying `alignItems` and `justifyContent` in React Native.
- How these properties differ from web development.

### Conclusion and Assignment

- Summarizing the main points covered.
- Assignment: Write about React Native's `alignItems` and `justifyContent`.
