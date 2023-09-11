---
sidebar_position: 2
---

# Rewrite React Native App

### Initial Code Structure

- there are two main files: `app.js` and `index.js`. She highlights the importance of the `app.js` file.

### **Select and delete everything in the App.tsx file**

- in theory, technically this is all you need and you're required to have in your app, at least not crashing

```jsx
import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'

function App() {
  return
}

export default App
```

### **Writing a "Hello World" App**

- She starts writing the code for a simple "Hello World" app using JSX and React Native components.

```jsx
import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'

function App() {
  return (
    <SafeAreaView>
      <View>
        <Text>Hello World!</Text>
        <Text>Hello World!</Text>
        <Text>Hello World!</Text>
      </View>
    </SafeAreaView>
  )
}

export default App
```
