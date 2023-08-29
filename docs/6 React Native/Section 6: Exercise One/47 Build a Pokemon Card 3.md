---
sidebar_position: 47
---

# Build a Pokemon Card 3

- Welcome to Part Three of building a Pokémon card in React Native.

- In Part 2, we successfully styled our card component to resemble an actual card.

- In this video, our focus will shift towards crafting the content of the card component.

- Let's pick up where we left off and proceed with Step 7.

### Step 7: Defining Pokémon Properties:

- In `App.js`, define the properties of the Pokémon that need to be rendered in the card component.

- For instance, let's consider Charmander:

  - Name: Charmander

  - Image: Require from `assets/charmander.png`

  - Type: Fire

  - HP: 39

  - Moves: Scratch, Ember, etc.

  - Weaknesses: Water and rock type Pokémon

```jsx
import { StyleSheet, SafeAreaView, Platform } from 'react-native'
import PokemonCard from './components/PokemonCard'

export default function App() {
  const charmanderData = {
    name: 'Charmander',
    image: require('./assets/charmander.png'),
    type: 'Fire',
    hp: 39,
    moves: ['Scratch', 'Ember', 'Growl', 'Leer'],
    weaknesses: ['Water', 'Rock'],
  }

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

### Step 7/2 : Passing Properties as Props:

- Pass all these properties as props to the `PokemonCard` component using the spread operator.

- For instance:

```jsx
import { StyleSheet, SafeAreaView, Platform } from 'react-native'
import PokemonCard from './components/PokemonCard'

export default function App() {
  const charmanderData = {
    name: 'Charmander',
    image: require('./assets/charmander.png'),
    type: 'Fire',
    hp: 39,
    moves: ['Scratch', 'Ember', 'Growl', 'Leer'],
    weaknesses: ['Water', 'Rock'],
  }

  return (
    <SafeAreaView style={styles.container}>
      <PokemonCard {...charmanderData} />
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

### Step 8: Destructuring Props:

- In `PokemonCard.js`, destructure the properties from the component props.

- We have:

  - name

  - image

  - type

  - hp

  - moves

  - weaknesses

```jsx
import { View, Text, StyleSheet, Platform } from 'react-native'

export default function PokemonCard({ name, image, type, hp, moves, weaknesses }) {
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

### Rendering Content:

- Render all these props using the appropriate core components from React Native.

- A card component will have five blocks:

  1. Name and HP
  2. Pokémon image
  3. Pokémon type
  4. Moves
  5. Weaknesses

### Step 9: Block One - Name and HP:

- Render a View with name and HP text nested inside.

```js
import { View, Text, StyleSheet, Platform } from 'react-native'

export default function PokemonCard({ name, image, type, hp, moves, weaknesses }) {
  return (
    <View style={styles.card}>
      <View>
        <Text>{name}</Text>
        <Text>{hp}</Text>
      </View>
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

### Step 10: Block Two - Pokémon Image:

- Utilize the Image component to display the Pokémon image. Add an `accessibilityLabel` for best practice.

```jsx
import { View, Text, StyleSheet, Platform, Image } from 'react-native'

export default function PokemonCard({ name, image, type, hp, moves, weaknesses }) {
  return (
    <View style={styles.card}>
      <View>
        <Text>{name}</Text>
        <Text>{hp}</Text>
      </View>

      <Image
        source={image}
        accessibilityLabel={`${name} pokemon`}
      />
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

### Step 11: Block Three - Pokémon Type:

- Display the Pokémon type using the Text component.

```jsx
import { View, Text, StyleSheet, Platform, Image } from 'react-native'

export default function PokemonCard({ name, image, type, hp, moves, weaknesses }) {
  return (
    <View style={styles.card}>
      <View>
        <Text>{name}</Text>
        <Text>{hp}</Text>
      </View>

      <Image
        source={image}
        accessibilityLabel={`${name} pokemon`}
      />

      <View>
        <Text>{type}</Text>
      </View>
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

### Step 12: Block Four - Moves:

- Render a list of comma-separated moves.

```jsx
import { View, Text, StyleSheet, Platform, Image } from 'react-native'

export default function PokemonCard({ name, image, type, hp, moves, weaknesses }) {
  return (
    <View style={styles.card}>
      <View>
        <Text>{name}</Text>
        <Text>{hp}</Text>
      </View>

      <Image
        source={image}
        accessibilityLabel={`${name} pokemon`}
      />

      <View>
        <Text>{type}</Text>
      </View>

      <View>
        <Text>Moves: {moves.join(', ')}</Text>
      </View>
    </View>
  )
}
```

### Step 13: Block Five - Weaknesses:

- Display a list of comma-separated weaknesses.

```jsx
import { View, Text, StyleSheet, Platform, Image } from 'react-native'

export default function PokemonCard({ name, image, type, hp, moves, weaknesses }) {
  return (
    <View style={styles.card}>
      <View>
        <Text>{name}</Text>
        <Text>{hp}</Text>
      </View>

      <Image
        source={image}
        accessibilityLabel={`${name} pokemon`}
      />

      <View>
        <Text>{type}</Text>
      </View>

      <View>
        <Text>Moves: {moves.join(', ')}</Text>
      </View>
      <View>
        <Text>Weakness: {weaknesses.join(', ')}</Text>
      </View>
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

### Previewing the UI:

- Save the file and preview the UI.

- If you find the image appearing too large, don't worry; we'll address that shortly.

- For now, you can comment it out to ensure other props are rendering correctly.

```jsx
import { View, Text, StyleSheet, Platform, Image } from 'react-native'

export default function PokemonCard({ name, image, type, hp, moves, weaknesses }) {
  return (
    <View style={styles.card}>
      <View>
        <Text>{name}</Text>
        <Text>{hp}</Text>
      </View>

      {/* <Image
        source={image}
        accessibilityLabel={`${name} pokemon`}
      /> */}

      <View>
        <Text>{type}</Text>
      </View>

      <View>
        <Text>Moves: {moves.join(', ')}</Text>
      </View>
      <View>
        <Text>Weakness: {weaknesses.join(', ')}</Text>
      </View>
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

- Observe the UI, and you will now see the remaining content displayed, including name, HP, type, moves, and weaknesses.

This concludes Part 3 of our tutorial. In the next video, we will delve into styling the content within this card component.
