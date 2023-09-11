---
sidebar_position: 46
---

# Build a Pokemon Card 2

>

### **=>** Intro

- In Part 1, we set up our container, added a background color, utilized SafeAreaView for iOS, and applied top padding for Android using the Platform module.

- Now, in this video, our focus shifts towards styling our card component. Let's pick up where we left off and move on to Step 6.

### Step 6: Styling with Stylesheet API

- in `PokemonCard.js`, Import the Stylesheet API from React Native.

- Use the `.create()` method to define styles and assign them to the `styles` constant.

```jsx
import { View, Text, StyleSheet } from 'react-native'

export default function PokemonCard() {
  return (
    <View>
      <Text>Pokemon Card</Text>
    </View>
  )
}

const styles = StyleSheet.create({})
```

### Add Card Styling

- Create a new key called `card` within the `styles` object.

- Apply styling to the View component using the defined `card` style.

```jsx
import { View, Text, StyleSheet } from 'react-native'

export default function PokemonCard() {
  return (
    <View style={styles.card}>
      <Text>Pokemon Card</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {},
})
```

### Define Card Styles

For the card, let's start with these styles:

- Background color: white,

- Border radius: 16,

- borderWidth: 2,

- Padding: 16, (for creating spacing within the card)

- Margin: 16, (for spacing between the cards)

### Adding Shadow Effect

- for the card Shadow effect we rely on the `Platform` module

- Import the `Platform` module from React Native.

- Utilize (spread)`...Platform.select()` to apply platform-specific shadow properties.

```jsx
import { View, Text, StyleSheet, Platform } from 'react-native'

export default function PokemonCard() {
  return (
    <View style={styles.card}>
      <Text>Pokemon Card</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    borderWidth: 2,
    padding: 16,
    margin: 16,
    ...Platform.select({
      ios: {},
      android: {},
    }),
  },
})
```

- Define shadow properties for both `ios` and `Android` within the `card` style.

```jsx
import { View, Text, StyleSheet, Platform } from 'react-native'

export default function PokemonCard() {
  return (
    <View style={styles.card}>
      <Text>Pokemon Card</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    borderWidth: 2,
    padding: 16,
    margin: 16,
    ...Platform.select({
      ios: {
        shadowOffset: { width: 2, height: 2 },
        shadowColor: '333',
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  },
})
```

And that's it! Taking a look at our UI, the card component should now have a visually appealing appearance.
