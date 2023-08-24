---
sidebar_position: 37
---

# Flex Grow

- In this final section, we'll explore the **FlexGrow** property in React Native.

- `flexGrow` determines how much space an item should occupy inside a flex container when there's extra space available.

- Similar to `flexShrink`, the flex grow factor is always relative to other items within the container.

### Exploring Flex Grow

- Let's gain clarity on how `flexGrow` works with an example UI.

- By default, flex items only occupy the space required to fit their content.

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

- This often leaves extra space within our container.

- However, in certain situations, we want flex items to grow and utilize the remaining space.

- By default, all flex items have a `flexGrow` value of 0, preventing them from utilizing the extra space.

- To change this behavior, we can use the `flexGrow` property with a positive value.

For instance:

- Initially, we'll set `flexGrow` of "Item 5" to 0 (default).

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
      <Box style={{ backgroundColor: '#6b0803', flexGrow: 0 }}>Box 5</Box>
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

- No change will be observed since 0 is the default value.

- Changing the `flexGrow` value to 1 for "Item 5"

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
      <Box style={{ backgroundColor: '#6b0803', flexGrow: 1 }}>Box 5</Box>
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

- will cause it to grow and occupy the remaining space in the container.

- Similarly, setting `flexGrow` to 1 for "Item 6"

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
      <Box style={{ backgroundColor: '#6b0803', flexGrow: 1 }}>Box 5</Box>
      <Box style={{ backgroundColor: '#1c4c56', flexGrow: 1 }}>Box 6</Box>
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

- will distribute the additional space evenly between items 5 and 6.

- To experiment further, changing "Item 6"'s `flexGrow` value to 3 from 1

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
      <Box style={{ backgroundColor: '#6b0803', flexGrow: 1 }}>Box 5</Box>
      <Box style={{ backgroundColor: '#1c4c56', flexGrow: 3 }}>Box 6</Box>
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

- will cause it to grow three times more than "Item 5".

### Applying Flex Grow

- Instead of setting `flexGrow` individually for each item,

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

- we can add it to the common style (`box`) applied to every item.

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
    flexGrow: 1,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
})
```

- This will result in all items evenly utilizing the leftover space.

### To summarize:

- The `flexGrow` property determines how much available space an item should take up in the flex container.

- The flexGrow factor is relative to other items in the container.

- A default value of 0 means items shouldn't grow.

- Setting `flexGrow` to 1 for all flex items will cause them to grow evenly when there's extra space.

**Note:**

- You might wonder about the relationship between the `flex` property and `flexGrow`.

- When `flex` is set to a positive number, it's equivalent to setting `flexGrow` with the same number.

- However, `flex` also implicitly sets `flexShrink` to 1 and `flexBasis` to 0.

- In essence, `flex` with a positive number is equivalent to `flexGrow` set to the same positive number, `flexShrink` set to 1, and `flexBasis` set to 0.

- This clarifies what the `flex` property does under the hood.

With a solid understanding of `flexBasis`, `flexShrink`, and `flex-grow`, you can fine-tune the behavior of flex items within your layouts.
