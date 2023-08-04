---
sidebar_position: 22
---

# Box Model

- In this video, let's take a look at the different styles applicable in relation to the CSS Box model.
- As you may already know, `the CSS Box model represents a box that encloses every HTML element consisting of margins, borders, padding, and the actual content`.
- Interestingly, `these properties are also applicable to React Native components`.
- Let's delve into the specifics of these properties in this video.

### Height and Width Properties

- To begin, let's discuss the height and width properties.
- These properties have already been covered in the previous videos of the series.
- They're used to define the dimensions of a component.
- It is important to note that `in React Native, all dimensions are unitless` and represent density independent pixels.
- No specific units like Rems or pixels are required.
- In our example, both the width and height are set to 100.

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

- But what you can do is specify percentage values.
- `when the parent's dimensions are defined. Child components can have percentage dimensions`.
- In this case, since the container has a flex value of 1, occupying the entire available screen space, we can set the Box's width and height to 25 percent.

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'plum',
    padding: 60,
  },
  box: {
    width: '25%',
    height: '25%',
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

- As a result, you can observe that the Box width and height now account for 25 percent of the apparent container's width and height, respectively.
- Together, the two boxes occupy fifty percent of the available height and 25 percent of the available width.
- So this covers the width and height aspects of the element.

### Padding

- Moving on, let's talk about padding.
- Similar to CSS for the web, `React Native allows us to specify padding in all four directions.`
- Additionally, there are a few properties in React Native that you should be aware of.
- You can individually set padding in the horizontal and vertical directions using `paddingHorizontal` and `paddingVertical` .
- So, let's comment out padding and instead add `paddingHorizontal: 10` and `paddingVertical: 20` . Take a look at the UI,

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
    // width: '25%',
    // height: '25%',
    // padding: 10,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  lightBlueBg: {
    backgroundColor: 'lightblue',
  },
  lightGreenBg: {
    backgroundColor: 'lightgreen',
  },
})
```

- and you will see the styles work as expected.

### Margin

- The margin property also functions similarly to its CSS counterpart, and in React Native, we can utilize `marginHorizontal` and `marginVertical` as well.
- So, `margin: 10` works completely fine, but we can also have `marginVertical: 10` . Take a look at the UI,

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
    // width: '25%',
    // height: '25%',
    // padding: 10,
    paddingHorizontal: 10,
    paddingVertical: 20,
    // margin: 10,
    marginVertical: 10,
  },
  lightBlueBg: {
    backgroundColor: 'lightblue',
  },
  lightGreenBg: {
    backgroundColor: 'lightgreen',
  },
})
```

- and we now clearly see the spacing between the two boxes because of the vertical margin.

### Borders

- Next, let's take a look at borders in React Native.
- In traditional web CSS, we often specify the border with a shorthand property like `border: 2px solid purple` .
- However, this approach does not work in React Native.
- Instead, we need to specify the properties individually.
- First, we set `borderWidth` to 2. Next, we have `borderColor` , which is a string "purple". Finally, we have `borderStyle` , which is set to "solid" by default, so we don't need to explicitly mention it.

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
  },
  lightBlueBg: {
    backgroundColor: 'lightblue',
  },
  lightGreenBg: {
    backgroundColor: 'lightgreen',
  },
})
```

- Take a look at the simulator, and you will see the purple border applied to both boxes.

### Border Radius

- Finally, I want to highlight a nuance regarding border radius in iOS versus Android.
- If we set a border radius on a text component, let's go with inline styles for now: `borderRadius: 5` and this needs a background color, so `backgroundColor: "red" `,

```jsx
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.lightBlueBg]}>
        <Text style={{ borderRadius: 5, backgroundColor: 'red' }}>Lightblue box</Text>
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
  },
  lightBlueBg: {
    backgroundColor: 'lightblue',
  },
  lightGreenBg: {
    backgroundColor: 'lightgreen',
  },
})
```

- you will notice that it only applies to Android and not iOS.
- We have the curved border in Android but not iOS.
- However, if we apply `borderRadius` to the view component, so ` borderRadius: 5`,

```jsx
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.lightBlueBg]}>
        <Text style={{ borderRadius: 5, backgroundColor: 'red' }}>Lightblue box</Text>
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
})
```

- you will observe that the boxes have rounded corners on both platforms.
- This is an important distinction to keep in mind.
- `Border radius is applicable to the view component across both platforms, but for the text component, it only applies to Android`.
- If you wish to add a border radius to text, `the solution is to wrap it with a view component and apply the border radius to the view component instead.`

I hope you are able to slowly recognize the differences in styling between the web and React Native, as well as the variations in styling for iOS and Android platforms.
