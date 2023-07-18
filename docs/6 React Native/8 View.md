---
sidebar_position: 8
---

# View Component

- The View component is a fundamental code component in React Native.

- It serves as a building block for creating user interfaces.

- The View component functions as a container that supports layouts using flexbox styling, touch handling, and accessibility controls.

- In web development terms, the View component can be compared to the div tag.

- When working with React Native, the View component is typically nested inside other views and can have zero or more children of any type.

- It provides the structure and organization for other components in the UI.

### Setting up the Project

- Create a new Expo project using the command

```bash
npx create-expo-app core-components --template blank --sdk 49
```

- Make sure you are running the latest version of Expo (version 49) by checking the package.json file.

- Start the development server by running the command

```bash
npm start
```

- Open the iOS simulator by pressing the key "I" in the terminal.

- Open the Android emulator in Android Studio.

- Run the app on the Android emulator by pressing the key "A" in the terminal.

- Verify that the app is running on both the iOS simulator and Android emulator.

### Starting with a Clean Slate

- Delete the existing code in the "app.js" file.

- Import the View component from the React Native library.

- Define a new component called "App" and make it the default export.

- Within the JSX code, return the View component.

```jsx
import React from 'react'
import { View } from 'react-native'

function App() {
  return <View>{/* Your code here */}</View>
}

export default App
```

### Displaying the View Component

- Add a background color to the View component using inline styles.

- Set the style prop as an object and set the background color to "plum".

- Save the file and observe the iOS simulator and Android emulator.

```jsx
import React from 'react'
import { View } from 'react-native'

function App() {
  return <View style={{ backgroundColor: 'plum' }}>{/* Your code here */}</View>
}

export default App
```

### Expanding the View Component

- Add the style property "flex: 1" to the View component.

- This will make the View component flexibly expand and take up all available space on the screen.

- Save the file and observe the expanded View component.

```jsx
import React from 'react'
import { View } from 'react-native'

function App() {
  return <View style={{ flex: 1, backgroundColor: 'plum' }}>{/* Your code here */}</View>
}

export default App
```

### Nesting Views within the View Component

- Create a new View component with a light blue background color.

- Specify its height and width as 200.

- Duplicate the View component and change its background color to light green.

- Save the file and observe the nested views within the outer View component.

```jsx
import React from 'react'
import { View } from 'react-native'

function App() {
  return (
    <View style={{ flex: 1, backgroundColor: 'plum' }}>
      <View style={{ backgroundColor: 'lightblue', height: 200, width: 200 }} />
      <View style={{ backgroundColor: 'lightgreen', height: 200, width: 200 }} />
    </View>
  )
}

export default App
```

### Summary

- The View component is a core component in React Native that serves as a container for other components.

- It supports layout and styling using flexbox.

- Remember to import the View component before using it.

- Nested views can be used to create complex user interfaces.
