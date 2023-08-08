---
sidebar_position: 23
---

# Shadow and Elevation

- In the previous video, we learned about the differences in styling between web and React Native when it comes to some Box model properties.

- We also understood the nuances of applying the Border radius property for iOS and Android.

### Box Shadows in CSS

- Applying box shadows using CSS for the web is straightforward.

- We specify the horizontal offset, vertical offset, blur, spread, and color.

### Box Shadows in React Native

- In React Native, we use a group of four properties.

- Let's add a new key called `boxShadow` to the Styles object and specify the different shadow properties.

- The first property is `shadowColor` , which determines the color of the box shadow. Let's set it to `#333333` .

- The second property is `shadowOffset` , which accepts an object containing width and height properties with numerical values. Let's set width to 6 and height to 6.

- The third property is `shadowOpacity` , which sets the transparency of the box shadow. Its value ranges from 0 to 1, with 0 representing complete transparency and 1 representing complete opacity. Let's set `shadowOpacity` to 0.6 for our example.

- The fourth property is `shadowRadius` , which accepts a number to set the blur radius. A larger value creates a larger and lighter blur, making the shadow more prominent. Let's set it to 4.

- Let's also change the box width and height to 250.

- Next, we need to specify the box shadow in the Styles array for the light blue box.

```jsx
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={[styles.box, styles.lightBlueBg, styles.boxShadow]}>
        <Text style={{ borderRadius: 5, backgroundColor: 'red' }}>Lightblue box</Text>
      </View>
      <Text style={[styles.box, styles.lightGreenBg]}>
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
    width: 250,
    height: 250,
    // width: '25%',
    // height: '25%',
    // padding: 10,
    paddingHorizontal: 10,
    paddingVertical: 20,
    // margin: 10,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: 'purple',
    // borderStyle: 'solid'
    borderRadius: 5,
  },
  lightBlueBg: {
    backgroundColor: 'lightblue',
  },
  lightGreenBg: {
    backgroundColor: 'lightgreen',
  },
  boxShadow: {
    shadowColor: '333333',
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 0.6,
    shadowRadius: 4,
  },
})
```

- When we take a look at the iOS simulator, we can see that the box shadow is applied.

- However, if we take a look at Android, there is no box shadow.

### the elevation property

- There are no common styles to apply shadows in both iOS and Android.

- To add box shadows in Android, we have to use the `elevation` property, which internally utilizes the Android elevation API.

- Let's add a new key to our Styles object called `androidShadow` with a property `elevation` set to 10, and let's apply this to the light green box.

```jsx
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.lightBlueBg, styles.boxShadow]}>
        <Text style={{ borderRadius: 5, backgroundColor: 'red' }}>Lightblue box</Text>
      </View>
      <View style={[styles.box, styles.lightGreenBg, styles.androidShadow]}>
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
    width: 250,
    height: 250,
    // width: '25%',
    // height: '25%',
    // padding: 10,
    paddingHorizontal: 10,
    paddingVertical: 20,
    // margin: 10,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: 'purple',
    // borderStyle: 'solid'
    borderRadius: 5,
  },
  lightBlueBg: {
    backgroundColor: 'lightblue',
  },
  lightGreenBg: {
    backgroundColor: 'lightgreen',
  },
  boxShadow: {
    shadowColor: '333333',
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 0.6,
    shadowRadius: 4,
  },
  androidShadow: {
    elevation: 10,
  },
})
```

- When we view the Android device, we can see the shadow on the light green box.

### shadowColor is the only property that works on both iOS and Android

- It's also worth mentioning that `shadowColor` is the only property that works on both iOS and Android.

- As an exercise, I encourage you to change the shadow color to `blue` and apply it to both iOS and Android. Let me know in the comment section if it works for you.

```jsx
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.lightBlueBg, styles.boxShadow]}>
        <Text style={{ borderRadius: 5, backgroundColor: 'red' }}>Lightblue box</Text>
      </View>
      <View style={[styles.box, styles.lightGreenBg, styles.androidShadow]}>
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
    width: 250,
    height: 250,
    // width: '25%',
    // height: '25%',
    // padding: 10,
    paddingHorizontal: 10,
    paddingVertical: 20,
    // margin: 10,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: 'purple',
    // borderStyle: 'solid'
    borderRadius: 5,
  },
  lightBlueBg: {
    backgroundColor: 'lightblue',
  },
  lightGreenBg: {
    backgroundColor: 'lightgreen',
  },
  boxShadow: {
    shadowColor: 'blue',
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 0.6,
    shadowRadius: 4,
  },
  androidShadow: {
    elevation: 20,
    shadowColor: 'blue',
  },
})
```

### Conclusion

- Shadow properties do not work in Android, and you have to rely on the `elevation` property.

- There are packages available that support cross-platform shadows, but that is not the topic we want to address right now.
