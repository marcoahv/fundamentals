---
sidebar_position: 29
---

# Justify Content

### Introduction

- In this video, we will focus on the justify content property, which defines the alignment along the main axis.

- let's start with the previous code

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
    marginTop: 64,
    borderWidth: 6,
    borderColor: 'red',
  },
})
```

### Setting Justify Content

- Justify content is a property you set on the container to control the alignment of its items.

- Let's add `justifyContent` to the container styles.

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
    justifyContent: '',
    marginTop: 64,
    borderWidth: 6,
    borderColor: 'red',
  },
})
```

### Default Value

- By default, justify content is set to the value `flex-start` .

- This places the flex items at the beginning of the main axis, which, in this case, is at the top of the view.

### Flex Start

When justify content is set to `flex-start` , there is no difference in the placement of the items.

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
    justifyContent: 'flex-start',
    marginTop: 64,
    borderWidth: 6,
    borderColor: 'red',
  },
})
```

- They are still placed at the top of the view.

### Flex End

- Setting justify content to `flex-end` causes the flex items to be placed at the end of the main axis.

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
    justifyContent: 'flex-end',
    marginTop: 64,
    borderWidth: 6,
    borderColor: 'red',
  },
})
```

- In this case, the items are now placed at the bottom of the view.

### Center

- To align the content at the center of the main axis, set the value to `center` .

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
    justifyContent: 'center',
    marginTop: 64,
    borderWidth: 6,
    borderColor: 'red',
  },
})
```

- This will place the content in the middle of the view.

### Additional Values

- Flexbox provides additional values that control how the extra space is distributed within the container.

### Space Between

- One such value is `space-between` .

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
    justifyContent: 'space-between',
    marginTop: 64,
    borderWidth: 6,
    borderColor: 'red',
  },
})
```

- This evenly splits the extra space left out between the flex items.

### Space Around

- For scenarios where you want space before the first item and after the last item, the value is `space-around` .

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
    justifyContent: 'space-around',
    marginTop: 64,
    borderWidth: 6,
    borderColor: 'red',
  },
})
```

- This adds space at the beginning and end, equal to half of the space between the flex items.

### Space Evenly

- If you want the same space at the start and end of the items as well, the value you are looking for is `space-evenly` .

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
    justifyContent: 'space-evenly',
    marginTop: 64,
    borderWidth: 6,
    borderColor: 'red',
  },
})
```

- This equally distributes the extra space within the container.

### Horizontal Alignment with Flex Direction

- It's important to note that the justify content property aligns items based on the main axis.

- If the flex direction is set to row (which changes the main axis from left to right),

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
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 64,
    borderWidth: 6,
    borderColor: 'red',
  },
})
```

- justify content deals with horizontal alignment.

### Summary

- In summary, the justify content property is used to align items and distribute any extra space in the container.

- The alignment is always along the main axis. The possible values are `flex-start` , `flex-end` , `center` , `space-between` , `space-around` , and `space-evenly` .
