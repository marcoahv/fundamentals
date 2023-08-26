---
sidebar_position: 43
---


# Safe Area View Component in React Native

- In this video, let's learn about the Safe Area View component in React Native.

- To save us some time, I'm going to copy-paste code for the `App` component and walk you through the same.

## Code Walkthrough

- First, we have the imports for `View`, `Text`, and `StyleSheet`:

```jsx
import { View, Text, StyleSheet } from 'react-native'
```

- Next, we have the App component as the default export:

```jsx
import { View, Text, StyleSheet } from 'react-native'

export default function App() {
  return (
    // JSX code here
  );
}
```

- For the JSX, we have an outer view container, an inner view box, and a text component. The component displays "Welcome" as the text:

```jsx
import { View, Text, StyleSheet } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>Welcome</Text>
      </View>
    </View>
  )
}
```

- For the container, we have flex set to 1 to make use of the full available space and the background color of Plum:

```jsx
import { View, Text, StyleSheet } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>Welcome</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'plum',
  },
})
```

- For the inner box, we have a simple padding of 20 pixels in all directions:

```jsx
import { View, Text, StyleSheet } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>Welcome</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'plum',
  },
  box: {
    padding: 20,
  },
})
```

- Finally, for the text, there is a font size of 24, font weight bold, and text align center to center-align the "Welcome" text:

```jsx
import { View, Text, StyleSheet } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>Welcome</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'plum',
  },
  box: {
    padding: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})
```

### Issue and Solution

- If you followed the series until now, this code should seem familiar.

- However, when we view the app on iPhone 14 and Pixel 4 devices, we encounter a problem.

- `The "Welcome" text is visible on Android, but on iOS devices, it's not visible`.

- The issue is that the text is hidden behind the notch on iOS devices.

To fix this, we can add a top padding to the container:

```jsx
import { View, Text, StyleSheet } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>Welcome</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'plum',
    paddingTop: 60,
  },
  box: {
    padding: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})
```

- But this solution is not ideal, as it introduces unnecessary space at the top for Android, and it might not work well on new devices with different notch placements.

### Introducing Safe Area View

- What we need is a way to figure out the safe area for a given device and render our application only within that view.

- That's where the `SafeAreaView` component comes in.

- Import it from React Native and wrap your entire JSX with it:

```jsx
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'

export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.text}>Welcome</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'plum',
    paddingTop: 60,
  },
  box: {
    padding: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})
```

- To ensure the view occupies the entire available space, add set flex to 1

- and on the component style is equal to styles dot safeContainer

```jsx
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'

export default function App() {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.text}>Welcome</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'plum',
    paddingTop: 60,
  },
  box: {
    padding: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})
```

- The purpose of SafeAreaView is to render content within the safe area boundaries of a device.

- It applies padding to reflect the physical limitations of the screen, such as rounded corners or camera notches.

To avoid the white spacing at the top and bottom, apply the same background color as your container to the SafeAreaView:

let's also remove the `paddingTop` which we don't need anymore

```jsx
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'

export default function App() {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.text}>Welcome</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: 'plum',
  },
  container: {
    flex: 1,
    backgroundColor: 'plum',
  },
  box: {
    padding: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})
```

### Conclusion

- Using SafeAreaView ensures that your application's content is rendered within the safe area of the device, accommodating notches and rounded corners.

- This is an important aspect of adapting user interfaces based on the device. I hope you now understand the what, why, and how of SafeAreaView.
