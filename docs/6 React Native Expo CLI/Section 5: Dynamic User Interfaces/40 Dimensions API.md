---
sidebar_position: 40
---

# Dimensions API

>

### **=>** Intro

- In this video, we will explore the Dimensions API in React Native to better understand this topic.

- Let's jump straight into the code with an example.

- To start, we will nest a `View` component within the container
- `View` component with the `style` prop set to `Styles.box`,
- and then a `Text` component with `style` set to `Styles.text`.

- For the text itself, a simple "Welcome!" is sufficient.

- Let me also import the `Text` component which I deleted in the previous video.

```jsx
import { StyleSheet, View, Text } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>Welcome!</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'plum',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
```

- Now, let's define the corresponding styles we have applied to our `View` and `Text` components:

```jsx
import { StyleSheet, View, Text } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>Welcome!</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'plum',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 300,
    height: 300,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
  },
})
```

- If we save the file, the blue box and the welcome text will be displayed.

- Everything looks great at this point. However, let's test the application on a larger device like an iPad.

- To do this, in VSCode terminal with the terminal in focus, press `Shift + I`.

- This will bring up a list of iOS devices.

- Select "iPad Pro 6th generation." If prompted, approve the installation of the app through Expo Go.

- Now the app is running on both an iPhone and an iPad, in addition to Android, of course.

- However, it's clear that the app doesn't look the best on iPad.

- The box is really small, and the font is not easily readable.

- One potential solution to the box dimensions issue is to use percentages for width and height.

- Let's set width to 70 percent and height to 40 percent.

```jsx
import { StyleSheet, View, Text } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>Welcome!</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'plum',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: '70%',
    height: '40%',
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
  },
})
```

- While this is an improvement, it still doesn't feel right.

- The problem is that the two devices have similar height but significantly different width.

- Using percentage-based width and height is not sufficient.

- Moreover, how do we handle the font size? We may want a larger font, but specifying a percentage won't work.

- What we need is a way to address responsive styles based on the device size.

- This is where the `Dimensions API` comes into play. Let's learn how to use it.

**Step 1:**

- Import the Dimensions API from React Native

```jsx
import { StyleSheet, View, Text, Dimensions } from 'react-native'
```

**Step 2:**

- Obtain the device width and height using the API

- So right after a component: `const windowWidth = Dimensions.get('')`

```jsx
import { StyleSheet, View, Text, Dimensions } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>Welcome!</Text>
      </View>
    </View>
  )
}

const windowWidth = Dimensions.get('')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'plum',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: '70%',
    height: '40%',
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
  },
})
```

- The `get` method accepts either `screen` or `window` as an argument.

- `screen` refers to the entire physical display of the device, including areas that might be outside the visible viewport due to notches, status bars, or system nav bars.

- On the other hand, `window` refers to the visible area of the screen occupied by your app's UI.

- For tasks involving UI elements within your application's visible area, you will want to use `window`.

Similarly: `const windowHeight = Dimensions.get('window')`

- and then we access `.width` and `.height`

```jsx
import { StyleSheet, View, Text, Dimensions } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>Welcome!</Text>
      </View>
    </View>
  )
}

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'plum',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: '70%',
    height: '40%',
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
  },
})
```

- We can now use these device dimensions to dynamically adjust the styles based on the device size.

- For width, we're going to set: `width: windowWidth > 500 ? '70%' : '90%',`

- For height: `height: windowHeight > 600 ? '60%' : '90%',`

- For the font size: `fontSize: windowWidth > 500 ? 50 : 24,`

```jsx
import { StyleSheet, View, Text, Dimensions } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>Welcome!</Text>
      </View>
    </View>
  )
}

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'plum',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: windowWidth > 500 ? '70%' : '90%',
    height: windowHeight > 600 ? '60%' : '90%',
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: windowWidth > 500 ? 50 : 24,
  },
})
```

- If we save the file, you can see this is much better.

- The dimensions now closely follow the device size, and the font is much easier to read on an iPad.

### In summary

- the Dimensions API provides access to the device size.

- By using the device width or height, you can create responsive styles for your UI elements.

- Now, although our styles seem to be working completely fine, the Dimensions API does have a drawback that prevents it from being the recommended approach for creating dynamic user interfaces.

- Let's understand what the drawback is in the next video.
