---
sidebar_position: 45
---

# Build a Pokemon Card 1

- Welcome back! Throughout the series, we have gained a solid understanding of some of the fundamental concepts in React Native.

- We have covered core components, creating custom components, styling elements, crafting layouts, and even designing responsive styles based on device dimensions.

- In this sixth section of the course, we will put all this knowledge into practice by building a list of Pokemon cards in our application.

- Here is what we are aiming to create:

- a scrollable view displaying four Pokemon cards.

- Each card has text content, an image, and styling. It is a great exercise to apply what you've learned so far.

- Let's type in some code and begin.

- For this section, I have set up a new project called `ExerciseOne`

- Please feel free to choose any project name you prefer.

- To create a new React Native Expo project, use the command:

```bash
npx create-expo-app ExerciseOne
```

- Once you have your project set up, let's proceed to build the UI step by step.

### Step 1: Modify app.js

- Remove the import for StatusBar and the Text component.

- Also, remove the two corresponding components from the JSX.

- For the styles, keep flex as it is and change the background color to #F5F5F5.

- Remove the alignItems and justifyContent properties.

- With these changes in place, if we take a look at our devices,

```jsx
import { StyleSheet, View } from 'react-native'

export default function App() {
  return <View style={styles.container}></View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
})
```

- we will see a gray-colored View.

### Step 2: Add Images

- Copy and paste a few images into the assets folder.

- These images will represent the four Pokemon cards.

- You can find these images in my GitHub repository.

- https://github.com/gopinav/React-Native-Tutorials/tree/main/ExerciseOne/assets

- [Please pause the video to download them.]

### Step 3: Create a Components Folder

- Create a new folder called `components` within your project folder.

- Inside this folder, create a new file named `PokemonCard.js`

- Within this file, define a simple React Native component.

```jsx
import { View, Text } from 'react-native'

export default function PokemonCard() {
  return (
    <View>
      <Text>Pokemon Card</Text>
    </View>
  )
}
```

### Step 4: Import the Component

- Import the PokemonCard component in app.js.

```jsx
import { StyleSheet, View } from 'react-native'
import PokemonCard from './components/PokemonCard'

export default function App() {
  return <View style={styles.container}></View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
})
```

- Invoke this component within the JSX.

```jsx
import { StyleSheet, View } from 'react-native'
import PokemonCard from './components/PokemonCard'

export default function App() {
  return (
    <View style={styles.container}>
      <PokemonCard />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
})
```

- If we save the file and take a look at the devices, you should see the text "Pokemon Card" being rendered.

- But the placement of the card isn't great.

### Step 5: Improve Card Placement

- Replace the View component import with `SafeAreaView`

- Update the JSX as well.

```jsx
import { StyleSheet, SafeAreaView } from 'react-native'
import PokemonCard from './components/PokemonCard'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <PokemonCard />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
})
```

- `SafeAreaView` does not affect Android so let's Add top padding specific to Android devices.

- import `Platform` module from react native

- and then on the container styles: padding top if platform dot operating system is equal to Android it's going to be 25 pixels else zero

- (`paddingTop: Platform.OS === 'android' ? 25 : 0,`)

```jsx
import { StyleSheet, SafeAreaView, Platform } from 'react-native'
import PokemonCard from './components/PokemonCard'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <PokemonCard />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
})
```

- Now the component is placed in a much better position on iPhones.

- On Android, the `SafeAreaView` adds padding to ensure the card is placed correctly, slightly away from the status bar.

- We've made significant progress in this part.

- Make sure your code matches mine before moving forward. I'll see you in part two!
