---
sidebar_position: 30
---

# Align Items

- `AlignItems` defines the default behavior for laying out flex items along the container's cross axis.

### Default Value of Align Items

- `By default`, the value of AlignItems is set to `stretch`.

```jsx
import { StyleSheet, View } from 'react-native'
import Box from './components/Box'

export default function App() {
  return (
    <View style={styles.container}>
      <Box style={{ backgroundColor: '#8e9b00' }}>Box 1</Box>
      <Box style={{ backgroundColor: '#b65d1f' }}>Box 2</Box>
      <Box style={{ backgroundColor: '#1c4c56' }}>Box 3</Box>
      {/* <Box style={{ backgroundColor: '#ab9156' }}>Box 4</Box>
      <Box style={{ backgroundColor: '#6b0803' }}>Box 5</Box>
      <Box style={{ backgroundColor: '#1c4c56' }}>Box 6</Box>
      <Box style={{ backgroundColor: '#b95f21' }}>Box 7</Box> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: '',
    marginTop: 64,
    borderWidth: 6,
    borderColor: 'red',
  },
})
```

- This means the flex items will stretch the entire length of the cross axis, which typically flows from left to right.

### Stretch

- Setting AlignItems to `stretch` explicitly doesn't result in any visible change since stretch is the default value.

```jsx
import { StyleSheet, View } from 'react-native'
import Box from './components/Box'

export default function App() {
  return (
    <View style={styles.container}>
      <Box style={{ backgroundColor: '#8e9b00' }}>Box 1</Box>
      <Box style={{ backgroundColor: '#b65d1f' }}>Box 2</Box>
      <Box style={{ backgroundColor: '#1c4c56' }}>Box 3</Box>
      {/* <Box style={{ backgroundColor: '#ab9156' }}>Box 4</Box>
      <Box style={{ backgroundColor: '#6b0803' }}>Box 5</Box>
      <Box style={{ backgroundColor: '#1c4c56' }}>Box 6</Box>
      <Box style={{ backgroundColor: '#b95f21' }}>Box 7</Box> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    marginTop: 64,
    borderWidth: 6,
    borderColor: 'red',
  },
})
```

- Each box stretches from the left to the right, following the direction of the cross axis.

### Flex Start

- The value `flex-start` pushes all the items to the start of the cross axis.

```jsx
import { StyleSheet, View } from 'react-native'
import Box from './components/Box'

export default function App() {
  return (
    <View style={styles.container}>
      <Box style={{ backgroundColor: '#8e9b00' }}>Box 1</Box>
      <Box style={{ backgroundColor: '#b65d1f' }}>Box 2</Box>
      <Box style={{ backgroundColor: '#1c4c56' }}>Box 3</Box>
      {/* <Box style={{ backgroundColor: '#ab9156' }}>Box 4</Box>
      <Box style={{ backgroundColor: '#6b0803' }}>Box 5</Box>
      <Box style={{ backgroundColor: '#1c4c56' }}>Box 6</Box>
      <Box style={{ backgroundColor: '#b95f21' }}>Box 7</Box> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    marginTop: 64,
    borderWidth: 6,
    borderColor: 'red',
  },
})
```

### Flex End

- The value `flex-end` pushes the items to the end of the cross axis.

```jsx
import { StyleSheet, View } from 'react-native'
import Box from './components/Box'

export default function App() {
  return (
    <View style={styles.container}>
      <Box style={{ backgroundColor: '#8e9b00' }}>Box 1</Box>
      <Box style={{ backgroundColor: '#b65d1f' }}>Box 2</Box>
      <Box style={{ backgroundColor: '#1c4c56' }}>Box 3</Box>
      {/* <Box style={{ backgroundColor: '#ab9156' }}>Box 4</Box>
      <Box style={{ backgroundColor: '#6b0803' }}>Box 5</Box>
      <Box style={{ backgroundColor: '#1c4c56' }}>Box 6</Box>
      <Box style={{ backgroundColor: '#b95f21' }}>Box 7</Box> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-end',
    marginTop: 64,
    borderWidth: 6,
    borderColor: 'red',
  },
})
```

### Center

- The value `center` centers the content along the cross axis.

```jsx
import { StyleSheet, View } from 'react-native'
import Box from './components/Box'

export default function App() {
  return (
    <View style={styles.container}>
      <Box style={{ backgroundColor: '#8e9b00' }}>Box 1</Box>
      <Box style={{ backgroundColor: '#b65d1f' }}>Box 2</Box>
      <Box style={{ backgroundColor: '#1c4c56' }}>Box 3</Box>
      {/* <Box style={{ backgroundColor: '#ab9156' }}>Box 4</Box>
      <Box style={{ backgroundColor: '#6b0803' }}>Box 5</Box>
      <Box style={{ backgroundColor: '#1c4c56' }}>Box 6</Box>
      <Box style={{ backgroundColor: '#b95f21' }}>Box 7</Box> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 64,
    borderWidth: 6,
    borderColor: 'red',
  },
})
```

### Baseline

- The `baseline` value aligns flex items based on their content's baseline.

```jsx
import { StyleSheet, View } from 'react-native'
import Box from './components/Box'

export default function App() {
  return (
    <View style={styles.container}>
      <Box style={{ backgroundColor: '#8e9b00', paddingVertical: 100 }}>Box 1</Box>
      <Box style={{ backgroundColor: '#b65d1f' }}>Box 2</Box>
      <Box style={{ backgroundColor: '#1c4c56' }}>Box 3</Box>
      {/* <Box style={{ backgroundColor: '#ab9156' }}>Box 4</Box>
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
    alignItems: 'baseline',
    marginTop: 64,
    borderWidth: 6,
    borderColor: 'red',
  },
})
```

- This value ensures that the text content sits on the same baseline, regardless of the height or padding of each flex item.

### Summary

- In summary, the align items property is used to align items along the cross axis.

- The possible values are `flex-start`, `flex-end`, `center`, `baseline`, and `stretch` (which is the default value).
