---
sidebar_position: 21
---

# Multiple Styles

- in the previous video we learned about Styling with Stylesheet API

```jsx
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>StyleSheet API</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'plum',
    padding: 60,
  },
  title: {},
})
```

- The Stylesheet API is used for styling in React Native.

### Applying Multiple Styles to a Component

To begin, we'll add two boxes within our container View component, each with text:

- Light blue box

- Light green box

```jsx
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Lightblue box</Text>
      </View>
      <View>
        <Text>Lightgreen box</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'plum',
    padding: 60,
  },
  title: {},
})
```

- If we look at the two devices, we can see the text from the two boxes, but they don't resemble a box in any way. Let's add some styles to fix this.

- Inside the Stylesheet API object, below the container key, we'll add two more keys:

- Light blue box: An object that sets the background color to light blue, with a height of 100 and padding of 10.

- Light green box: An object that sets the background color to light green.

```jsx
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Lightblue box</Text>
      </View>
      <View>
        <Text>Lightgreen box</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'plum',
    padding: 60,
  },
  lightBlueBox: {
    backgroundColor: 'lightblue',
    width: 100,
    height: 100,
    padding: 10,
  },
  lightGreenBox: {
    backgroundColor: 'lightgreen',
    width: 100,
    height: 100,
    padding: 10,
  },
})
```

- Now, we can use these styles for our View components. On the first nested View component, add the style prop and set it to `Styles.lightBlueBox` . Repeat the process for the light green box by setting the style prop to `Styles.lightGreenBox` .

```jsx
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.lightBlueBox}>
        <Text>Lightblue box</Text>
      </View>
      <View style={styles.lightGreenBox}>
        <Text>Lightgreen box</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'plum',
    padding: 60,
  },
  lightBlueBox: {
    backgroundColor: 'lightblue',
    width: 100,
    height: 100,
    padding: 10,
  },
  lightGreenBox: {
    backgroundColor: 'lightgreen',
    width: 100,
    height: 100,
    padding: 10,
  },
})
```

If we take a look at the UI, we can see that the two boxes are now displayed as expected. Everything works great, but there is room for improvement.

### Extracting and Reusing Shared Styles

There are common styles shared between the light blue box and the light green box. We can extract these shared styles and reuse them in React Native.
Let's refactor the styles:

- Start with a key called "box" and extract width, height, and padding into this new box.

- Change "light blue box" to "light blue background" and set the background color to light blue.

- Similarly, change "light green box" to "light green background" and set the background color to light green.

```jsx
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.lightBlueBox}>
        <Text>Lightblue box</Text>
      </View>
      <View style={styles.lightGreenBox}>
        <Text>Lightgreen box</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'plum',
    padding: 60,
  },
  box: {
    width: 100,
    height: 100,
    padding: 10,
  },
  lightBlueBg: {
    backgroundColor: 'lightblue',
  },
  lightGreenBg: {
    backgroundColor: 'lightgreen',
  },
})
```

- Now, we have separated the common styles from the colors.

- The light blue box is a combination of "box" with "light blue background", while the light green box is a combination of "box" and "light green background".

### specify multiple styles for a component

- To specify multiple styles for a component, we use an array of styles.

- For the light blue box, we use an array as the value to the style prop and specify `styles.box, styles.lightBlueBg` .

- Similarly, for the light green box, we specify an array `styles.box, styles.lightGreenBg` .

```jsx
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.lightBlueBg]}>
        <Text>Lightblue box</Text>
      </View>
      <View style={[styles.box, styles.lightGreenBg]}>
        <Text>Lightgreen box</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'plum',
    padding: 60,
  },
  box: {
    width: 100,
    height: 100,
    padding: 10,
  },
  lightBlueBg: {
    backgroundColor: 'lightblue',
  },
  lightGreenBg: {
    backgroundColor: 'lightgreen',
  },
})
```

- If we now take a look at the two devices, we can see that the two boxes are still rendering as expected (light blue and light green).

- The styles, however, are written in a much more organized manner.

### the last style in the array takes precedence

- One important point to note is that when merging different styles, the last style in the array takes `precedence`.

- Even if we add a background color "pink" to the "box" style,

```jsx
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'plum',
    padding: 60,
  },
  box: {
    width: 100,
    height: 100,
    padding: 10,
    backgroundColor: 'pink',
  },
  lightBlueBg: {
    backgroundColor: 'lightblue',
  },
  lightGreenBg: {
    backgroundColor: 'lightgreen',
  },
})
```

- the boxes will continue to render with their respective colors.

- However, if we change the order in the array so that `Styles.box` is the last element,

```jsx
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={[styles.lightBlueBg, styles.box]}>Lightblue box</Text>
      </View>
      <View>
        <Text style={[styles.box, styles.lightGreenBg]}>Lightgreen box</Text>
      </View>
    </View>
  )
}
```

- we can see that the box color is now pink instead of light blue.

- When merging the background color from the two styles, the value from the last element in the array takes precedence.

### To summarize

- You can specify multiple styles using arrays in tags.

- When merging styles, the value from the last style in the array takes precedence.
