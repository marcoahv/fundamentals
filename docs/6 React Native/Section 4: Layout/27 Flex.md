---
sidebar_position: 27
---

# Flex

- The flex property plays a crucial role in defining how much of a view will fill the screen along the main axis.

- It accepts an integer value greater than or equal to zero indicating the fraction of the available space the component should occupy.

- In react native The View component is automatically set to display Flex by default

- so in our case the view container is already a flex container and the boxes inside are considered Flex items

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
    marginTop: 64,
    borderWidth: 6,
    borderColor: 'red',
  },
})
```

### Example 1

- Replace the entire View component with a simple View that has an inline Style.

- Set the background color of the View component to Plum.

```jsx
import { StyleSheet, View } from 'react-native'
import Box from './components/Box'

export default function App() {
  return (
    <View style={{ backgroundColor: 'plum' }}></View>
    // <View style={styles.container}>
    //   <Box style={{ backgroundColor: '#8e9b00' }}>Box 1</Box>
    //   <Box style={{ backgroundColor: '#b65d1f' }}>Box 2</Box>
    //   <Box style={{ backgroundColor: '#1c4c56' }}>Box 3</Box>
    //   <Box style={{ backgroundColor: '#ab9156' }}>Box 4</Box>
    //   <Box style={{ backgroundColor: '#6b0803' }}>Box 5</Box>
    //   <Box style={{ backgroundColor: '#1c4c56' }}>Box 6</Box>
    //   <Box style={{ backgroundColor: '#b95f21' }}>Box 7</Box>
    // </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 64,
    borderWidth: 6,
    borderColor: 'red',
  },
})
```

- The View component only occupies enough space to accommodate its children by default.

- To make the View occupy the entire available space, add the flex property and set it to a value of 1.

```jsx
import { StyleSheet, View } from 'react-native'
import Box from './components/Box'

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: 'plum' }}></View>
    // <View style={styles.container}>
    //   <Box style={{ backgroundColor: '#8e9b00' }}>Box 1</Box>
    //   <Box style={{ backgroundColor: '#b65d1f' }}>Box 2</Box>
    //   <Box style={{ backgroundColor: '#1c4c56' }}>Box 3</Box>
    //   <Box style={{ backgroundColor: '#ab9156' }}>Box 4</Box>
    //   <Box style={{ backgroundColor: '#6b0803' }}>Box 5</Box>
    //   <Box style={{ backgroundColor: '#1c4c56' }}>Box 6</Box>
    //   <Box style={{ backgroundColor: '#b95f21' }}>Box 7</Box>
    // </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 64,
    borderWidth: 6,
    borderColor: 'red',
  },
})
```

- we can see the plum colored background now occupies the entire available space

- and this is a common approach in react native apps

- adding a view component and setting the flex property to 1 to occupy all available space

### Example 2

- for the second example let's work with the code that we set up in the previous video

```jsx
import { StyleSheet, View } from 'react-native'
import Box from './components/Box'

export default function App() {
  return (
    // <View style={{ flex: 1, backgroundColor: 'plum' }}></View>
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
    marginTop: 64,
    borderWidth: 6,
    borderColor: 'red',
  },
})
```

- if we save the file and take a look at the devices, we can see the space occupied by the flex container it is indicated by the red border

- To ensure the container occupies the entire available space, set the flex property of the container to 1.

```jsx
import { StyleSheet, View } from 'react-native'
import Box from './components/Box'

export default function App() {
  return (
    // <View style={{ flex: 1, backgroundColor: 'plum' }}></View>
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

### Example 3

- The flex property is not limited to the flex container; it is also applicable to flex items.

- Add Flex 1 to the first box component.

```jsx

```

- The first box now occupies all the available space within the container.

- The flex value indicates the fraction of available space the component should take up.

- When Flex 1 is set on the second box,

```jsx
import { StyleSheet, View } from 'react-native'
import Box from './components/Box'

export default function App() {
  return (
    // <View style={{ flex: 1, backgroundColor: 'plum' }}></View>
    <View style={styles.container}>
      <Box style={{ flex: 1, backgroundColor: '#8e9b00' }}>Box 1</Box>
      <Box style={{ flex: 1, backgroundColor: '#b65d1f' }}>Box 2</Box>
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

- both box 1 and box 2 equally share the available space between them, taking up 50 percent of the available space each.

- When Flex 1 is set on the third box,

```jsx
import { StyleSheet, View } from 'react-native'
import Box from './components/Box'

export default function App() {
  return (
    // <View style={{ flex: 1, backgroundColor: 'plum' }}></View>
    <View style={styles.container}>
      <Box style={{ flex: 1, backgroundColor: '#8e9b00' }}>Box 1</Box>
      <Box style={{ flex: 1, backgroundColor: '#b65d1f' }}>Box 2</Box>
      <Box style={{ flex: 1, backgroundColor: '#1c4c56' }}>Box 3</Box>
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

- the first three boxes each take up 33 percent of the available space.

### Example 4

- Remove the flex property from the third box and instead set Flex 3 on box 2.

```jsx
import { StyleSheet, View } from 'react-native'
import Box from './components/Box'

export default function App() {
  return (
    // <View style={{ flex: 1, backgroundColor: 'plum' }}></View>
    <View style={styles.container}>
      <Box style={{ flex: 1, backgroundColor: '#8e9b00' }}>Box 1</Box>
      <Box style={{ flex: 3, backgroundColor: '#b65d1f' }}>Box 2</Box>
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

- The available space is divided into one plus three, which equals four parts.

- Box 1 takes 1/4 (25 percent) of the space, and box 2 takes three by four (75 percent) of the available space.

- Box 2 is three times larger than box one.

- boxes that don't have the flex property will continue to take up space as dictated by the Box model properties

### Summary

- In React Native, a View component has display Flex by default.

- When you set flex 1 on a container, it takes up the entire available space.

- If you set Flex on an item, it takes up a fraction or percentage of the available space.

- The flex property allows for the distribution of available space among components.
