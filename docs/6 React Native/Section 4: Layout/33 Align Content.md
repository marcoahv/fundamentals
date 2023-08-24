---
sidebar_position: 33
---

# Align Content

- In this tutorial, we will cover the **Align Content** property in Flexbox.

- This property is used to align lines of content along the cross axis within a container.

### Align Content Property Overview

- The `align-content` property aligns lines of content along the cross axis, similar to how the `align-items` property aligns individual items along the cross axis.

- However, a crucial condition is that multiple columns or rows must exist within the container.

### Understanding Values

- To better understand the different possible values, let's make adjustments in our code using VS Code.

1. Set a height on the container: `height: 300px;`
2. Enable wrapping: `flex-wrap: wrap;`
3. Comment out `flex: 1;` to ensure wrapping into 2 columns.

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
    // flex: 1,
    height: 300,
    flexWrap: 'wrap',
    marginTop: 64,
    borderWidth: 6,
    borderColor: 'red',
  },
})
```

### Value 1: Flex Start

- The default value for `align-content` is `flex-start`, which places both columns at the start of the cross axis.

- The cross axis runs from left to right.

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
    // flex: 1,
    height: 300,
    flexWrap: 'wrap',
    alignContent: 'flex-start',
    marginTop: 64,
    borderWidth: 6,
    borderColor: 'red',
  },
})
```

### Value 2: Flex End

- Setting `align-content` to `flex-end` pushes the content to the end of the cross axis.

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
    // flex: 1,
    height: 300,
    flexWrap: 'wrap',
    alignContent: 'flex-end',
    marginTop: 64,
    borderWidth: 6,
    borderColor: 'red',
  },
})
```

### Value 3: Center

- Using a value of `center` for `align-content` centers the content along the cross axis.

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
    // flex: 1,
    height: 300,
    flexWrap: 'wrap',
    alignContent: 'center',
    marginTop: 64,
    borderWidth: 6,
    borderColor: 'red',
  },
})
```

### Value 4: Stretch

- The `stretch` value stretches the columns from the start to the end of the cross axis.

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
    // flex: 1,
    height: 300,
    flexWrap: 'wrap',
    alignContent: 'stretch',
    marginTop: 64,
    borderWidth: 6,
    borderColor: 'red',
  },
})
```

- This makes both columns take up the entire horizontal space available.

### Value 5: Space Between

- `space-between` takes extra space and places it between the lines.

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
    // flex: 1,
    height: 300,
    flexWrap: 'wrap',
    alignContent: 'space-between',
    marginTop: 64,
    borderWidth: 6,
    borderColor: 'red',
  },
})
```

### Fixing Styles for Space Between

- You might encounter styling issues when using `space-between`.

- To resolve this, add a fixed width and height to the box component, e.g., `width: 50px;` and `height: 50px;`.

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
    width: 50,
    height: 50,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
})
```

### Value 6: Space Around

- `space-around` distributes space around the columns.

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
    // flex: 1,
    height: 300,
    flexWrap: 'wrap',
    alignContent: 'space-around',
    marginTop: 64,
    borderWidth: 6,
    borderColor: 'red',
  },
})
```

- The center portion has twice the space as the edges.

### Summary

- In React Native, the `align-content` property aligns lines of content along the cross axis and distributes any extra spacing in the parent container.

- The possible values are:

- `flex-start` (default)

- `flex-end`

- `center`

- `stretch`

- `space-between`

- `space-around`

By using these values, you can control how content is aligned and distributed within a flex container.
