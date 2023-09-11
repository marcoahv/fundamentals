---
sidebar_position: 31
---

# AlignSelf

>

### **=>** Intro

- Unlike alignItems, which is applied to the container and controls the alignment of all items within it, `alignSelf` is applied to individual items, allowing us to control the alignment of each item independently.

### Align Self vs Align Items

- alignSelf `values` are similar to those used in alignItems.

- Let's dive into VS Code to understand more.

### Flex Start

- The value `flex-start` aligns the items at the start of the cross axis.

- For Box 1, let's reset alignSelf to `flex-start`,

```jsx
import { StyleSheet, View } from 'react-native'
import Box from './components/Box'

export default function App() {
  return (
    <View style={styles.container}>
      <Box style={{ backgroundColor: '#8e9b00', alignSelf: 'flex-start' }}>Box 1</Box>
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

- and you can observe the item being pulled to the left where the cross axis begins.

### Flex End

- The value `flex-end` aligns the item with the end of the cross axis.

- Box 2 has align self as `flex-end`,

```jsx
import { StyleSheet, View } from 'react-native'
import Box from './components/Box'

export default function App() {
  return (
    <View style={styles.container}>
      <Box style={{ backgroundColor: '#8e9b00', alignSelf: 'flex-start' }}>Box 1</Box>
      <Box style={{ backgroundColor: '#b65d1f', alignSelf: 'flex-end' }}>Box 2</Box>
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

- resulting in the item being pulled to the right where the cross axis ends.

### Center

- let's try `Center` as the third value.

```jsx
import { StyleSheet, View } from 'react-native'
import Box from './components/Box'

export default function App() {
  return (
    <View style={styles.container}>
      <Box style={{ backgroundColor: '#8e9b00', alignSelf: 'flex-start' }}>Box 1</Box>
      <Box style={{ backgroundColor: '#b65d1f', alignSelf: 'flex-end' }}>Box 2</Box>
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

- After saving the file, you can see that Box 3 is now centered.

### Stretch

- The value `stretch` stretches the item from the start to the end of the cross axis.

```jsx
import { StyleSheet, View } from 'react-native'
import Box from './components/Box'

export default function App() {
  return (
    <View style={styles.container}>
      <Box style={{ backgroundColor: '#8e9b00', alignSelf: 'flex-start' }}>Box 1</Box>
      <Box style={{ backgroundColor: '#b65d1f', alignSelf: 'flex-end' }}>Box 2</Box>
      <Box style={{ backgroundColor: '#1c4c56', alignSelf: 'center' }}>Box 3</Box>
      <Box style={{ backgroundColor: '#ab9156', alignSelf: 'stretch' }}>Box 4</Box>
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

- After saving the file, you can see Box 4 gets stretched from the start to the end.

- However, Boxes 5 through 7 are also stretched.

### Default Value

- The default value for align self is `auto`, and it inherits its value from the align items property of the parent flex container.

### Inheritance from Align Items

- Boxes 5 through 7 are stretched because the container has alignItems stretch as its default value.

- When alignSelf is set to Auto, it takes the value of the parent's align items property, which in this case is stretch.

- Hence, items 5, 6, and 7 inherit the value stretch and stretch from the left to the right in the UI.

### Summary

- In summary, the alignSelf property is used to align items individually and accepts values like `auto`, `flex-start`, `flex-end`, `center`, and `stretch`.

- `When specified, it always overrides the align items value of the flex container`.
