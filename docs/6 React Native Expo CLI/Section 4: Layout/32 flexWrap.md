---
sidebar_position: 32
---

# FlexWrap

>

### **=>** Intro

- This property allows us to control how flex items behave when there is limited space within the container.

### Default Value of Flex Wrap

- By default, the flex-wrap property is set to `no-wrap`.

- This means that the items will remain in a single line, even if there is not enough space.

- to demonstrate this, comment out `flex: 1,` and set a `height: 300`,

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
    marginTop: 64,
    borderWidth: 6,
    borderColor: 'red',
  },
})
```

- and you can see when there is not enough space the items overflow the container

### Using flexWrap

- to prevent this overflow and handle limited space more effectively we can use the `flexWrap` property

- the flexWrap property can accept one of `three possible values`

### No Wrap

- When the flexWrap property is set to `nowrap`, there is no change in the UI, and the items remain in a single line.

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
    flexWrap: 'nowrap',
    height: 300,
    marginTop: 64,
    borderWidth: 6,
    borderColor: 'red',
  },
})
```

- end this is the default value

### Wrap

- Setting the flex-wrap property to `wrap` allows the items to wrap within the container.

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
    flexWrap: 'wrap',
    height: 300,
    marginTop: 64,
    borderWidth: 6,
    borderColor: 'red',
  },
})
```

- The wrapping takes place only when needed, and the items are wrapped into the next row or column.

### Wrap Reverse

- The value `wrap-reverse` places the items starting at the end of the cross axis.

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
    flexWrap: 'wrap-reverse',
    height: 300,
    marginTop: 64,
    borderWidth: 6,
    borderColor: 'red',
  },
})
```

- Instead of wrapping to the right column, they wrap to the previous column.

### Horizontal Wrapping

- Horizontal wrapping of items is possible by changing the `flex-direction` to `row`.

- With flexWrap set to `wrap`, you can see the items wrapping to the next row.

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
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: 300,
    marginTop: 64,
    borderWidth: 6,
    borderColor: 'red',
  },
})
```

- Setting the value to `wrap-reverse`,( uncomment `flex: 1,`and delete the `height`),

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
    flexDirection: 'row',
    flexWrap: 'wrap-reverse',
    marginTop: 64,
    borderWidth: 6,
    borderColor: 'red',
  },
})
```

- places the items at the end of the cross axis and wraps them to the row above.

### Summary

- In summary, the flex Wrap property is a valuable tool for controlling the wrapping behavior of flex items within the container.

- The possible values are `nowrap` (default), `wrap`, and `wrap-reverse`.
