---
sidebar_position: 24
---

### - Style Inheritance

- In this final video of the section, we will explore style inheritance in React Native.

- Let's dive straight into the code and look at an example to better understand this concept.

- Within our `App` component, within the outer `View` component, let's add a new `View` and nest a `Text` component inside it.

- The text is going to read "Style Inheritance".

```jsx
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Style inheritance</Text>
      </View>
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
  // boxShadow: {
  //   shadowColor: 'blue',
  //   shadowOffset: { width: 6, height: 6 },
  //   shadowOpacity: 0.6,
  //   shadowRadius: 4,
  // },
  androidShadow: {
    elevation: 20,
    shadowColor: 'blue',
  },
})
```

- If we return to the UI, we can see the text appears in black.

### Defining Styles for the Wrapping View Component

- Now, let's define some styles for the wrapping `View` component.

- In `styles.create` , let's add a new key called `darkModeBackgroundColor` and set it to black.

- On the new `View` component, `style` is equal to `Styles.darkModeBackgroundColor` .

```jsx
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.darkMode}>
        <Text>Style inheritance</Text>
      </View>
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
  darkMode: {
    backgroundColor: 'black',
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
  // boxShadow: {
  //   shadowColor: 'blue',
  //   shadowOffset: { width: 6, height: 6 },
  //   shadowOpacity: 0.6,
  //   shadowRadius: 4,
  // },
  androidShadow: {
    elevation: 20,
    shadowColor: 'blue',
  },
})
```

- If you now take a look at the UI, we see the `View` with the dark background. However, the text is not visible since its default color is also black.

### Adding Font Color

- Let's go back to our styles and add a font color for dark mode.

- `backgroundColor: 'black',` `color: 'white',`

```jsx
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.darkMode}>
        <Text>Style inheritance</Text>
      </View>
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
  darkMode: {
    backgroundColor: 'black',
    color: 'white',
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
  // boxShadow: {
  //   shadowColor: 'blue',
  //   shadowOffset: { width: 6, height: 6 },
  //   shadowOpacity: 0.6,
  //   shadowRadius: 4,
  // },
  androidShadow: {
    elevation: 20,
    shadowColor: 'blue',
  },
})
```

- If we save the file and go back to the UI, you can see that we still don't see the text.

- In CSS for the web, setting a font color on a `div` tag applies the same color to nested `paragraph` tags within the `div` tag. This is possible due to inheritance, which is a feature in CSS.

- However, `when working with styles in React Native, there is no inheritance of styles from a `View`component to a`Text` component`.

- To set the text color to white, you need to create and apply a separate style on this text component.

- For example, `darkModeText: { color: 'white', },`

- And apply on the text component: `style={Styles.darkModeText}`

```jsx
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.darkMode}>
        <Text style={styles.darkModeText}>Style inheritance</Text>
      </View>
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
  darkMode: {
    backgroundColor: 'black',
  },
  darkModeText: {
    color: 'white',
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
  // boxShadow: {
  //   shadowColor: 'blue',
  //   shadowOffset: { width: 6, height: 6 },
  //   shadowOpacity: 0.6,
  //   shadowRadius: 4,
  // },
  androidShadow: {
    elevation: 20,
    shadowColor: 'blue',
  },
})
```

- If we return to the UI, you will see that the text now appears in white.

### Understanding Bold Text Style Inheritance

- Now, let's add a new style called `boldText` and set `fontWeight` to bold.

- In the JSX, within the `Text` component right after "Style Inheritance", I'm going to nest another `Text` component.

- The text is going to read "in bold", and for the style, I'm going to apply only the `boldText` style: `style={Styles.boldText}`

```jsx
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.darkMode}>
        <Text style={styles.darkModeText}>
          Style inheritance<Text style={styles.boldText}> in bold</Text>
        </Text>
      </View>
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
  darkMode: {
    backgroundColor: 'black',
  },
  darkModeText: {
    color: 'white',
  },
  boldText: {
    fontWeight: 'bold',
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
  // boxShadow: {
  //   shadowColor: 'blue',
  //   shadowOffset: { width: 6, height: 6 },
  //   shadowOpacity: 0.6,
  //   shadowRadius: 4,
  // },
  androidShadow: {
    elevation: 20,
    shadowColor: 'blue',
  },
})
```

- Now, here is my question: Is the bold text styled in white and bold, or just bold? Take a moment to think about it and let me know your answer in the comment section.

- If we return to the UI, we can see that the bold text is indeed both bold and white.

- `Although React Native's style inheritance capabilities are limited compared to CSS, it still supports style inheritance within text subtrees`.

- In our case, the white color from the parent `Text` component is inherited by the nested `Text` component.

- `So, inheritance from `View`to`Text`does not work, but from`Text`to another nested`Text` does work.`

### Conclusion

- With that, we conclude this section on styling in React Native.

- We have seen how to add styles inline and using the stylesheet API, 
- how to add multiple styles to the same component using the array syntax, 
- the differences in styling Box model properties for the web versus React Native and for iOS versus Android. 
- We also had a look at shadows and elevation, 
- and finally, style inheritance.

- In the next section, let's focus our attention on understanding layouts in React Native.


