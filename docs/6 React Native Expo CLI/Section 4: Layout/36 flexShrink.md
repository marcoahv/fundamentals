---
sidebar_position: 36
---

# Flex Shrink

>

### **=>** Intro

- In this video, we'll delve into the **flexShrink** property in React Native.

- This property determines how children within a container shrink along the main axis when their combined size exceeds the container's size.

- The flex shrink factor is relative to other items within the container.

### Understanding Flex Shrink

- To comprehend this concept better, let's look at an example UI.

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

For simplicity, let's make a few modifications:

- Comment out 5 boxes and render only two boxes

- Suffix each box text with "shrink"

- Change the flex direction of the container to row

- Set `alignItems` to `flex-start` to arrange the two boxes horizontally

- Set the container's width to 300

```jsx
import { StyleSheet, View } from 'react-native'
import Box from './components/Box'

export default function App() {
  return (
    <View style={styles.container}>
      <Box style={{ backgroundColor: '#8e9b00' }}>Box 1 shrink</Box>
      <Box style={{ backgroundColor: '#b65d1f' }}>Box 2 shrink</Box>
      {/* <Box style={{ backgroundColor: '#1c4c56' }}>Box 3</Box>
      <Box style={{ backgroundColor: '#ab9156' }}>Box 4</Box>
      <Box style={{ backgroundColor: '#6b0803' }}>Box 5</Box>
      <Box style={{ backgroundColor: '#1c4c56' }}>Box 6</Box>
      <Box style={{ backgroundColor: '#b95f21' }}>Box 7</Box> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: 300,
    marginTop: 64,
    borderWidth: 6,
    borderColor: 'red',
  },
})
```

- As a result, the two items will flow horizontally but overflow the container, which has a width of 300.

### Controlling Shrinking Behavior

- Initially, note that every flex item has a default `flexShrink` value of 0.

- Consequently, the items overflow the container.

- However, we can control the shrinking behavior by setting a positive value for `flexShrink`.

- For example, if we apply `flexShrink: 1` to the second box,

```jsx
import { StyleSheet, View } from 'react-native'
import Box from './components/Box'

export default function App() {
  return (
    <View style={styles.container}>
      <Box style={{ backgroundColor: '#8e9b00' }}>Box 1 shrink</Box>
      <Box style={{ backgroundColor: '#b65d1f', flexShrink: 1 }}>Box 2 shrink</Box>
      {/* <Box style={{ backgroundColor: '#1c4c56' }}>Box 3</Box>
      <Box style={{ backgroundColor: '#ab9156' }}>Box 4</Box>
      <Box style={{ backgroundColor: '#6b0803' }}>Box 5</Box>
      <Box style={{ backgroundColor: '#1c4c56' }}>Box 6</Box>
      <Box style={{ backgroundColor: '#b95f21' }}>Box 7</Box> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: 300,
    marginTop: 64,
    borderWidth: 6,
    borderColor: 'red',
  },
})
```

- we'll observe that the second box shrinks to fit within the container.

- By setting `flexShrink` on both boxes,

```jsx
import { StyleSheet, View } from 'react-native'
import Box from './components/Box'

export default function App() {
  return (
    <View style={styles.container}>
      <Box style={{ backgroundColor: '#8e9b00', flexShrink: 1 }}>Box 1 shrink</Box>
      <Box style={{ backgroundColor: '#b65d1f', flexShrink: 1 }}>Box 2 shrink</Box>
      {/* <Box style={{ backgroundColor: '#1c4c56' }}>Box 3</Box>
      <Box style={{ backgroundColor: '#ab9156' }}>Box 4</Box>
      <Box style={{ backgroundColor: '#6b0803' }}>Box 5</Box>
      <Box style={{ backgroundColor: '#1c4c56' }}>Box 6</Box>
      <Box style={{ backgroundColor: '#b95f21' }}>Box 7</Box> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: 300,
    marginTop: 64,
    borderWidth: 6,
    borderColor: 'red',
  },
})
```

- they'll shrink equally to fit in.

- Furthermore, the shrink factor is relative to other items.

- Setting `flexShrink: 2` on the second box

```jsx
import { StyleSheet, View } from 'react-native'
import Box from './components/Box'

export default function App() {
  return (
    <View style={styles.container}>
      <Box style={{ backgroundColor: '#8e9b00', flexShrink: 1 }}>Box 1 shrink</Box>
      <Box style={{ backgroundColor: '#b65d1f', flexShrink: 2 }}>Box 2 shrink</Box>
      {/* <Box style={{ backgroundColor: '#1c4c56' }}>Box 3</Box>
      <Box style={{ backgroundColor: '#ab9156' }}>Box 4</Box>
      <Box style={{ backgroundColor: '#6b0803' }}>Box 5</Box>
      <Box style={{ backgroundColor: '#1c4c56' }}>Box 6</Box>
      <Box style={{ backgroundColor: '#b95f21' }}>Box 7</Box> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: 300,
    marginTop: 64,
    borderWidth: 6,
    borderColor: 'red',
  },
})
```

- causes it to shrink twice as much as the first box.

- This difference in shrinkage can be seen in the width of the boxes.

### Summary

In summary:

- The `flexShrink` property dictates how Flex items behave when their default size is larger than the flex container.

- By default, the value of `flexShrink` is 0 on every Flex item, causing items to overflow.

- Setting a positive value for `flexShrink` will make items shrink when necessary, with the amount of shrinkage being relative to other items in the container.

By understanding and utilizing the `flexShrink` property, you can control how flex items react when there's not enough space in the container.
