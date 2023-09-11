---
sidebar_position: 34
---

# gap

>

### **=>** Intro

- In this video, we will delve into the flex properties that allow us to manage spacing between rows and columns in React Native.

- The three main properties we will cover are `rowGap`, `columnGap`, and `gap`.

### Getting Started

- Let's jump into VS Code and explore how these properties work.

**Setting Up Rows and Columns:**

- First, ensure that we have multiple rows and columns of items within the container.

- To achieve this, let's:

  - Comment out `flex: 1`

  - Add a `height` of 300

  - Set `flexWrap` to `wrap`

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

- also in Box.js, comment out the width and height to te box.abs

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
    // width: 50,
    // height: 50,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
})
```

- With these styles applied, if we examine the UI, we can observe that items are organized in rows and columns.

### Row Gap Property

- The `rowGap` property allows us to set the gap between rows.

- For instance, if we set `rowGap` to 20 and save the file,

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
    rowGap: 20,
    marginTop: 64,
    borderWidth: 6,
    borderColor: 'red',
  },
})
```

- we will notice a gap introduced between the rows.

### Column Gap Property

- Similarly, the `columnGap` property sets the gap between columns.

- By setting it to 30 and saving the file,

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
    rowGap: 20,
    columnGap: 30,
    marginTop: 64,
    borderWidth: 6,
    borderColor: 'red',
  },
})
```

- we will see spacing between the columns.

### Shorthand Gap Property

- To specify the same gap for both rows and columns, you can utilize the `gap` property.

- Set `gap` to 10,
- comment out `rowGap` and `columnGap`,
- and save the file.

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
    // rowGap: 20,
    // columnGap: 30,
    gap: 10,
    marginTop: 64,
    borderWidth: 6,
    borderColor: 'red',
  },
})
```

- This results in the same smaller gap between both rows and columns.

### Summary

In summary:

- To set the gap between columns, use the `columnGap` property.

- To set the gap between rows, use the `rowGap` property.

- For a consistent gap between both rows and columns, employ the shorthand `gap` property.

By leveraging these properties, you can precisely control the spacing between rows and columns in your React Native layouts.
