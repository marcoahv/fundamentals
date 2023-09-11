---
sidebar_position: 38
---

# Relative and Absolute Layout

>

### **=>** Intro

- In this final video of the section, we will delve into two essential layout types in React Native: **relative** and **absolute** layouts.

- These layouts are based on the `position` property, which defines how an element is positioned within its parent container.

- The two possible values for the `position` property are `relative` and `absolute`.

### Understanding Relative Layout

- Let's begin by looking at the default layout, which is the relative layout.

- In this layout, elements are positioned according to the normal flow of the layout.

- An element remains in its original position and can be offset from that position using the `top`, `right`, `bottom`, and `left` values.

- Importantly, this offset does not affect the positioning of any sibling or parent elements.

### Exploring Absolute Layout

- In contrast, the absolute layout makes an element not participate in the normal flow of the layout.

- Instead, it is laid out independently of its siblings.

- The position of the element is determined by the `top`, `right`, `bottom`, and `left` values, which specify specific coordinates relative to its parent container.

### Visualizing with UI

- Let's take a look at these layouts using the UI in VS Code.

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

1. We'll begin by converting each box into a square with `width: 100` and `height: 100`. This will create 7 square boxes in the UI.

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
    width: 100,
    height: 100,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
})
```

2. **Relative Layout:**

- The default layout positions elements according to the normal flow.

- You can offset elements using `top`, `left`, etc., values relative to their position.

- For instance, setting `top: 75` and `left: 75` on "Box 1" and "Box 4" will offset them.

```jsx
import { StyleSheet, View } from 'react-native'
import Box from './components/Box'

export default function App() {
  return (
    <View style={styles.container}>
      <Box style={{ backgroundColor: '#8e9b00', top: 75, left: 75 }}>Box 1</Box>
      <Box style={{ backgroundColor: '#b65d1f' }}>Box 2</Box>
      <Box style={{ backgroundColor: '#1c4c56' }}>Box 3</Box>
      <Box style={{ backgroundColor: '#ab9156', top: 75, left: 75 }}>Box 4</Box>
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

3. **Absolute Positioning:**

- Changing the `position` to `absolute` on "Box 4" and setting `top: 100` and `left: 100`

```jsx
import { StyleSheet, View } from 'react-native'
import Box from './components/Box'

export default function App() {
  return (
    <View style={styles.container}>
      <Box style={{ backgroundColor: '#8e9b00', top: 75, left: 75 }}>Box 1</Box>
      <Box style={{ backgroundColor: '#b65d1f' }}>Box 2</Box>
      <Box style={{ backgroundColor: '#1c4c56' }}>Box 3</Box>
      <Box
        style={{
          backgroundColor: '#ab9156',
          position: 'absolute',
          top: 100,
          left: 100,
        }}>
        Box 4
      </Box>
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

- positions it using specific coordinates relative to its parent container.

- Notice that "Box 4" with absolute positioning is independent of the normal layout flow.

### When to Use Each Layout

- **Relative Layout:**

- Use this when responsiveness and adaptability are crucial.

- It offers a more maintainable and flexible approach for handling different screen sizes and orientations.

- **Absolute Layout:**

- Opt for this when you need precise control over position and size of UI components.

- It's also useful for building custom animations with fixed coordinates.

With this, we conclude the section on layouts in React Native.

Throughout, we've learned how to use the flexbox model, understood various flexbox properties, and gained insights into the differences between relative and absolute layouts.
