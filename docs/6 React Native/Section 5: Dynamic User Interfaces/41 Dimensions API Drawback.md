---
sidebar_position: 41
---

# Dimensions API Drawback

- In the previous video, we learned how to use the Dimensions API to define responsive styles for UI elements.

- We successfully configured the height, width, and font size based on the device dimensions.

- Although this works, we do have an issue: device dimensions can change when the screen orientation changes, and unfortunately, the Dimensions API doesn't dynamically update with these changes.

- Let me help you understand with an example.

### Logging Device Dimensions

- I'll log the device height and width to the console.

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

console.log({ windowHeight, windowWidth })

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

- When I save the file, you can see the different device dimensions are logged in the console.

- The iPhone dimensions here are logged as 852 for height and 393 for width.

- Now, let's rotate the iPhone device by 90 degrees using the rotate button.

- Although the device switches from portrait to landscape mode, our app doesn't seem to adapt to the orientation changes as expected.

- Ideally, the welcome text should also rotate similar to how one would read in portrait mode.

### Adapting to Landscape Mode

- Our application doesn't adapt to landscape mode because of an Expo setting defined in `app.json`.

- By default, the orientation setting is fixed to portrait mode.

```json
"orientation": "portrait",
```

- As a result, our UI is tailored solely for portrait orientation.

- Let's adjust this to default.

```json
"orientation": "default",
```

- Now when I save the file, press `R` to restart the server with the device orientation reset behind the scenes.

- You will see iPhone window height 852 and window width 393.

- But with the orientation now set to default, if I rotate the iPhone, the app adapts and the text becomes readable once again.

- However, the responsive styles don't seem to be working after rotating.

- The iPhone's device width would become 852, and the device height would become 393.

- This change in width and height should prompt the View component's width to change to 70 percent and the text font size to increase to 50.

- Yet these changes aren't being reflected.

- `The width remains at 90 percent, which can be clearly inferred, and the text font size is still 24 pixels`, the same as the Android device in portrait mode.

### The Solution: Using Hooks and Inline Styles

- `The only way to recalculate the dimensions is to restart our application.`

- When I bring focus to the device and press `R` to restart, you can see the width adjusts to 70 percent, and font size is now 50 pixels.

- The updated dimensions are also logged to the console.

- Height is now 393, and width is 852.

- But this is the drawback of the Dimensions API: `the values don't dynamically update when the window dimensions change`, either due to orientation changes or more complex scenarios such as foldable phones.

- Of course, we do have a solution to this problem.

- Let me walk you through the fix.

**Step 1:**

- Import `useState` and `useEffect` hooks from React.

```jsx
import { useState, useEffect } from 'react'
```

**Step 2:**

- Create a state variable that will store the device dimensions when the screen loads.

- Use the `useState` hook and pass in an object.

- This object will have a key called `window`, which is set to `Dimensions.get`.

```jsx
import { useState, useEffect } from 'react'
import { StyleSheet, View, Text, Dimensions } from 'react-native'

export default function App() {
  const [dimensions, setDimensions] = useState({
    window: Dimensions.get('window'),
  })

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

console.log({ windowHeight, windowWidth })

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

**Step 3:**

- Add an effect that listens to changes in the device dimensions and updates the dimensions state value.

- Listen to dimension changes using the static method `addEventListener` on the Dimensions API.

- This will return a subscription.

- The `subscription` constant is equal to `Dimensions.addEventListener`.

```jsx
import { useState, useEffect } from 'react'
import { StyleSheet, View, Text, Dimensions } from 'react-native'

export default function App() {
  const [dimensions, setDimensions] = useState({
    window: Dimensions.get('window'),
  })

  useEffect(() => {
    const subscription = Dimensions.addEventListener()
  })

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

console.log({ windowHeight, windowWidth })

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

- We listen to `change` in the dimensions and execute a callback function.

- This function receives an object from which we destructure `window` and call the `setDimensions` setter function, passing in `window`.

```jsx
import { useState, useEffect } from 'react'
import { StyleSheet, View, Text, Dimensions } from 'react-native'


  return (
    export default function App() {
      const [dimensions, setDimensions] = useState({
        window: Dimensions.get('window'),
      })

      useEffect(() => {
        const subscription = Dimensions.addEventListener('change', ({ window }) => {
          setDimensions({ window })
        })
      })

    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>Welcome!</Text>
      </View>
    </View>
  )
}

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

console.log({ windowHeight, windowWidth })

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

- We will also clean up the subscription.

```jsx
import { useState, useEffect } from 'react'
import { StyleSheet, View, Text, Dimensions } from 'react-native'

export default function App() {
  const [dimensions, setDimensions] = useState({
    window: Dimensions.get('window'),
  })

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setDimensions({ window })
    })
    return () => subscription?.remove()
  })

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

console.log({ windowHeight, windowWidth })

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

**Step 4:**

- Extract the device width and height from the dimensions state variable.

- Create constants window from dimensions, `const { window } = Dimensions`,

- windowWidth equal to window.width, `const windowWidth = window.width`

- and windowHeight equal to window.height, `const windowHeight = window.height`

```jsx
import { useState, useEffect } from 'react'
import { StyleSheet, View, Text, Dimensions } from 'react-native'

export default function App() {
  const [dimensions, setDimensions] = useState({
    window: Dimensions.get('window'),
  })

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setDimensions({ window })
    })
    return () => subscription?.remove()
  })

  const { window } = dimensions
  const windowWidth = window.width
  const windowHeight = window.height

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

console.log({ windowHeight, windowWidth })

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

**Step 5:**

- Add inline styles that dynamically change based on the device dimensions.

- Comment out:
  - the two lines outside the component,
  - width and height calculation in the Stylesheet API,
  - and the entire text key as well

```jsx
import { useState, useEffect } from 'react'
import { StyleSheet, View, Text, Dimensions } from 'react-native'

export default function App() {
  const [dimensions, setDimensions] = useState({
    window: Dimensions.get('window'),
  })

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setDimensions({ window })
    })
    return () => subscription?.remove()
  })

  const { window } = dimensions
  const windowWidth = window.width
  const windowHeight = window.height

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>Welcome!</Text>
      </View>
    </View>
  )
}

// const windowWidth = Dimensions.get('window').width
// const windowHeight = Dimensions.get('window').height

console.log({ windowHeight, windowWidth })

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'plum',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    // width: windowWidth > 500 ? '70%' : '90%',
    // height: windowHeight > 600 ? '60%' : '90%',
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // text: {
  //   fontSize: windowWidth > 500 ? 50 : 24,
  // },
})
```

- on the text component, Replace the entire `Styles.text` with an object where we set `fontSize:` to `windowWidth > 500 ? 50 : 24`.

```jsx
import { useState, useEffect } from 'react'
import { StyleSheet, View, Text, Dimensions } from 'react-native'

export default function App() {
  const [dimensions, setDimensions] = useState({
    window: Dimensions.get('window'),
  })

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setDimensions({ window })
    })
    return () => subscription?.remove()
  })

  const { window } = dimensions
  const windowWidth = window.width
  const windowHeight = window.height

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={{ fontSize: windowWidth > 500 ? 50 : 24 }}>Welcome!</Text>
      </View>
    </View>
  )
}

// const windowWidth = Dimensions.get('window').width
// const windowHeight = Dimensions.get('window').height

console.log({ windowHeight, windowWidth })

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'plum',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    // width: windowWidth > 500 ? '70%' : '90%',
    // height: windowHeight > 600 ? '60%' : '90%',
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // text: {
  //   fontSize: windowWidth > 500 ? 50 : 24,
  // },
})
```

- For the view container, use the array syntax to extend the styles,

- Also, specify width and height the same as before in the Stylesheet API.

- Let's also make sure to comment out the console log statement.

```jsx
import { useState, useEffect } from 'react'
import { StyleSheet, View, Text, Dimensions } from 'react-native'

export default function App() {
  const [dimensions, setDimensions] = useState({
    window: Dimensions.get('window'),
  })

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setDimensions({ window })
    })
    return () => subscription?.remove()
  })

  const { window } = dimensions
  const windowWidth = window.width
  const windowHeight = window.height

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.box,
          {
            width: windowWidth > 500 ? '70%' : '90%',
            height: windowHeight > 600 ? '60%' : '90%',
          },
        ]}>
        <Text style={{ fontSize: windowWidth > 500 ? 50 : 24 }}>Welcome!</Text>
      </View>
    </View>
  )
}

// const windowWidth = Dimensions.get('window').width
// const windowHeight = Dimensions.get('window').height

// console.log({ windowHeight, windowWidth })

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'plum',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    // width: windowWidth > 500 ? '70%' : '90%',
    // height: windowHeight > 600 ? '60%' : '90%',
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // text: {
  //   fontSize: windowWidth > 500 ? 50 : 24,
  // },
})
```

- If we now save the file and go back to our iPhone device, you can see the default portrait orientation still works.

- But when we change to landscape, the width and font size are adjusted to 70 and 50 pixels.

- We are able to add dynamic styles to our UI elements based on device dimensions.

- If you take a look at the code, though, it does seem a little verbose, doesn't it?

- What if there was an easier way that abstracts all of this?

- Well, there is, and that is what we will be learning in the next video.
