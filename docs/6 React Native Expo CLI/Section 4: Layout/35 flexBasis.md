---
sidebar_position: 35
---

# flexBasis

>

### **=>** Intro

- In this video, we'll delve into the **flexBasis** property in React Native.

- The `flexBasis` property determines the initial size of a flex item before any extra space in the container is distributed.

- It provides an alternative to using the height and width properties in Flex layouts.

### Understanding Flex Basis

- Let's gain a better understanding with a UI example.

- By default, flex items have an initial height based on the Box model.

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
    flex: 1,

    marginTop: 64,
    borderWidth: 6,
    borderColor: 'red',
  },
})
```

- As you can see, an item's height depends on its content size and padding in the vertical direction.

- However, what if you want a specific item to be intentionally taller? For such cases, the `flexBasis` property comes to the rescue.

### Using Flex Basis

In our JSX for "Box 3", let's set `flexBasis: 140`

```jsx
import { StyleSheet, View } from 'react-native'
import Box from './components/Box'

export default function App() {
  return (
    <View style={styles.container}>
      <Box style={{ backgroundColor: '#8e9b00' }}>Box 1</Box>
      <Box style={{ backgroundColor: '#b65d1f' }}>Box 2</Box>
      <Box style={{ backgroundColor: '#1c4c56', flexBasis: 140 }}>Box 3</Box>
      <Box style={{ backgroundColor: '#ab9156' }}>Box 4</Box>
      <Box style={{ backgroundColor: '#6b0803' }}>Box 5</Box>
      <Box style={{ backgroundColor: '#1c4c56' }}>Box 6</Box>
      <Box style={{ backgroundColor: '#b95f21' }}>Box 7</Box>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    marginTop: 64,
    borderWidth: 6,
    borderColor: 'red',
  },
})
```

- Now, when we examine the UI, you can observe that "Box 3" appears twice as tall as the other boxes.

- You might wonder why not just use the height property to set the initial height.

- Let's try adding `height: 140` to "Box 4" and look at the UI.

```jsx
import { StyleSheet, View } from 'react-native'
import Box from './components/Box'

export default function App() {
  return (
    <View style={styles.container}>
      <Box style={{ backgroundColor: '#8e9b00' }}>Box 1</Box>
      <Box style={{ backgroundColor: '#b65d1f' }}>Box 2</Box>
      <Box style={{ backgroundColor: '#1c4c56', flexBasis: 140 }}>Box 3</Box>
      <Box style={{ backgroundColor: '#ab9156', height: 140 }}>Box 4</Box>
      <Box style={{ backgroundColor: '#6b0803' }}>Box 5</Box>
      <Box style={{ backgroundColor: '#1c4c56' }}>Box 6</Box>
      <Box style={{ backgroundColor: '#b95f21' }}>Box 7</Box>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    marginTop: 64,
    borderWidth: 6,
    borderColor: 'red',
  },
})
```

- As you can see, the result is quite similar.

- However, an important difference arises when we want both "Box 3" and "Box 4" to take up the available space in the container.

- We've learned to achieve this by adding `flex: 1`.

```jsx
import { StyleSheet, View } from 'react-native'
import Box from './components/Box'

export default function App() {
  return (
    <View style={styles.container}>
      <Box style={{ backgroundColor: '#8e9b00' }}>Box 1</Box>
      <Box style={{ backgroundColor: '#b65d1f' }}>Box 2</Box>
      <Box style={{ backgroundColor: '#1c4c56', flexBasis: 140, flex: 1 }}>Box 3</Box>
      <Box style={{ backgroundColor: '#ab9156', height: 140, flex: 1 }}>Box 4</Box>
      <Box style={{ backgroundColor: '#6b0803' }}>Box 5</Box>
      <Box style={{ backgroundColor: '#1c4c56' }}>Box 6</Box>
      <Box style={{ backgroundColor: '#b95f21' }}>Box 7</Box>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    marginTop: 64,
    borderWidth: 6,
    borderColor: 'red',
  },
})
```

- If we save the file and review the UI, you'll notice that "Box 3" is taller than "Box 4".

- This is because the available space is distributed proportionally with respect to the flexBasis, but not the height property.

### Flex Basis for Width

- It's also important to note that flexBasis sets the initial width of an item if the parent container's flex direction is row, instead of column.

### In summary

the flexBasis property is a valuable tool to set the initial size of a flex item, enabling you to create intentional variations in item dimensions within your Flex layouts.
