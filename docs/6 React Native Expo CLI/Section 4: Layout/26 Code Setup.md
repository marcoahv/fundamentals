---
sidebar_position: 25
---

# Code Setup

>

### **=>** Intro

- In this video, we will set up the initial code that we will be working with throughout this section.

- For the section on layouts, we have created a new Expo project called RNLayout

```bash
npx create-expo-app RNLayout
```

### Step 1: Creating a Reusable Box Component:

- Within the project folder, create a new folder called "`components`."

- Inside the "components" folder, create a new file called "`Box.js`."

- Define the Box custom component that will utilize the View and Text core components along with the StyleSheet API for styling.

- Start by importing the required components and APIs (View, Text, and StyleSheet from React Native).

- Next, default export a function called "box."

- For the JSX, return the View component with the Text component nested inside to display the text box.

```jsx
import { View, Text, StyleSheet } from 'react-native'

export default function Box() {
  return (
    <View>
      <Text>Box</Text>
    </View>
  )
}
```

- Next, add the styles to give this component the appearance of a box.

- The const Styles is equal to StyleSheet.create, and we pass in an object with a key called "box" that has a background color of white and a padding of 20 pixels.

- Also, add another key called "text" with font size 24, font weight bold, and text align center.

```jsx
import { View, Text, StyleSheet } from 'react-native'

export default function Box() {
  return (
    <View>
      <Text>Box</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#fff',
    padding: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})
```

- On the View component, specify style is equal to Styles.box, and on the Text component, style is equal to Styles.text.

```jsx
import { View, Text, StyleSheet } from 'react-native'

export default function Box() {
  return (
    <View style={styles.box}>
      <Text style={styles.text}>Box</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#fff',
    padding: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})
```

- With this, our Box component is now ready.

### Step 2: Defining the Flex Container in App.js:

- Let's begin by making some changes in App.js.

- Remove the StatusBar import, the Text component import, and clear the contents within the View component in the JSX.

- As for the container Styles, remove all the properties.

- Finally, import the Box component and include it in the JSX.

```jsx
import { StyleSheet, View } from 'react-native'

export default function App() {
  return <View style={styles.container}></View>
}

const styles = StyleSheet.create({
  container: {},
})
```

- If you now take a look at the devices, we see our Box component on an Android device but not iPhone, and this is because `the Box text is hidden behind the notch`.

- To fix this, on the container Styles, add a top margin of 64. `marginTop: '64',`

```jsx
import { StyleSheet, View } from 'react-native'
import Box from './components/Box'

export default function App() {
  return (
    <View style={styles.container}>
      <Box></Box>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 64,
  },
})
```

- We should now see the Box text on both the devices.

- However, the UI doesn't look appealing, and it is difficult to identify where the container is and where the box is.

### Step 3: Adding Props to the Box Component:

- Let's add two props to the Box component: children and style.

```jsx
import { View, Text, StyleSheet } from 'react-native'

export default function Box({ children, style }) {
  return (
    <View style={styles.box}>
      <Text style={styles.text}>Box</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#fff',
    padding: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})
```

- The children prop allows the parent to control the text rendered inside the box, and the style prop allows the parent component to extend the Styles applied to the Box component.

- Now, instead of rendering the text box, let's render the children prop.

- On the View component, let's specify multiple styles using the array syntax, so Styles.box, comma Style.

- Also, add a white font color to the Text component.

```jsx
import { View, Text, StyleSheet } from 'react-native'

export default function Box({ children, style }) {
  return (
    <View style={[styles.box, style]}>
      <Text style={styles.text}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#fff',
    padding: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
})
```

- Back in App.js, add seven items within the container.

- Copy and paste the text box 1, Box 2, and so on, representing the children prop, and the background color is what we pass to the style prop.

```jsx
import { StyleSheet, View } from 'react-native'
import Box from './components/Box'

export default function App() {
  return (
    <View style={styles.container}>
      <Box style={{ backgroundColor: '#8e9b00' }}>Box 1</Box>
      <Box style={{ backgroundColor: '#b65d1f' }}>Box 2</Box>
      <Box style={{ backgroundColor: '#1c4c56' }}>Box 3</Box>
      <Box style={{ backgroundColor: '#ab9156' }}>Box 4</Box>
      <Box style={{ backgroundColor: '#6b0803' }}>Box 5</Box>
      <Box style={{ backgroundColor: '#1c4c56' }}>Box 6</Box>
      <Box style={{ backgroundColor: '#b95f21' }}>Box 7</Box>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 64,
  },
})
```

- These will get merged with the box styles in Box.styles.

### Final Step: Adding a Border to the Container:

- I'm going to add a border to clearly identify the container at any given point.

- Border width 6 and border color red.

```jsx
import { StyleSheet, View } from 'react-native'
import Box from './components/Box'

export default function App() {
  return (
    <View style={styles.container}>
      <Box style={{ backgroundColor: '#8e9b00' }}>Box 1</Box>
      <Box style={{ backgroundColor: '#b65d1f' }}>Box 2</Box>
      <Box style={{ backgroundColor: '#1c4c56' }}>Box 3</Box>
      <Box style={{ backgroundColor: '#ab9156' }}>Box 4</Box>
      <Box style={{ backgroundColor: '#6b0803' }}>Box 5</Box>
      <Box style={{ backgroundColor: '#1c4c56' }}>Box 6</Box>
      <Box style={{ backgroundColor: '#b95f21' }}>Box 7</Box>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 64,
    borderWidth: 6,
    borderColor: 'red',
  },
})
```

- If you now go back to the devices, we can clearly see our container in red with the seven items nested inside with different colors.

- We are now ready to start learning about the different properties in flexbox.
