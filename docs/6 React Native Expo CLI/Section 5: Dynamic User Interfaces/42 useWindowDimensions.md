---
sidebar_position: 42
---

# useWindowDimensions

>

### **=>** Intro

- In the previous video, we discovered that the Dimensions API doesn't update when device dimensions change.

- We had to implement a substantial amount of code to ensure our dynamic styles would be applied correctly when the device orientation changed.

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

- In this video, I'll demonstrate how we can simplify this process and achieve the same outcome using the `useWindowDimensions` hook.

### Step 1: Eliminate Unnecessary Code

Let's start by eliminating the unnecessary code. This includes:

- Removing the imports for `useState` and `useEffect`.

- Removing the import for the Dimensions API.

- Removing the entire block of code related to `useState` and `useEffect`.

```jsx
import { StyleSheet, View, Text } from 'react-native'

export default function App() {
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

### Step 2: Import `useWindowDimensions`

Now, import `useWindowDimensions` from React Native.

```jsx
import { StyleSheet, View, Text, useWindowDimensions } from 'react-native'
```

### Step 3: Implement `useWindowDimensions`

- Within the component:

`const windowWidth = useWindowDimensions().width`
`const windowHeight = useWindowDimensions().height`

```jsx
import { StyleSheet, View, Text, useWindowDimensions } from 'react-native'

export default function App() {
  const windowWidth = useWindowDimensions().width
  const windowHeight = useWindowDimensions().height

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

- And that's all that is required.

- Save the file and return to your device.

### Testing the Updated Approach

- Rotate your device, and you'll notice that our dynamic styles continue to function as expected.

- `It is important to note that useWindowDimensions is the recommended approach.`

- By first explaining the Dimensions API, I wanted to ensure you understand the problem it addresses.

- useWindowDimensions should be a go-to approach for responsive styles.
