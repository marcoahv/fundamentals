---
sidebar_position: 39
---

# Dynamic User Interfaces

>

### **=>** Intro

- Welcome to the fifth section of the course!

- In this section, we'll delve into creating **Dynamic User Interfaces** in React Native.

- Up until now, we've covered how to style React Native components and design layouts using flexbox.

- While these aspects are vital, there's an essential piece missing.

- All our learning has revolved around iPhone 14 and Pixel 4 devices.

- However, it's crucial to remember that not all users of our apps will be using identical devices.

- Device sizes can vary significantly, ranging from more compact phones to larger devices like iPads or Android tablets.

- We must ensure that our app's interface remains responsive to these different device sizes while providing an optimal user experience.

- But that's not all! Even on the same device, users might prefer different orientations—portrait or landscape.

- Our UI needs to adeptly accommodate these varying user preferences.

### Learning Objectives

- In this section, we will dive into several APIs that React Native provides to gracefully adapt to these changes and create dynamic user interfaces.

### Setting Up

- For this section on Dynamic User Interfaces, I've created a new Expo project named "DynamicUI"

- In the `App` component:

  - Remove the `StatusBar` import

  - Remove the `Text` component import

  - Clear all contents within the `View` component

  - Set the `backgroundColor` of the container styles to plum

```jsx
import { StyleSheet, View } from 'react-native'

export default function App() {
  return <View style={styles.container}></View>
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

Upon executing these changes, the view component displays a plum-colored background.

Alright, let's proceed to the next video where we'll learn how to work with different device sizes.
