---
sidebar_position: 49
---

# Build a Pokemon Card 5

>

### **=>** Intro

- Welcome to Part 5 of building a Pokémon card in React Native.

- In Part 4, we concentrated on styling the first two blocks within our card component.

- In this video, let's shift our attention to the remaining three blocks.

- Once again, we will pick up where we left off.

### Step 16: Styling the Pokémon type Block

- Apply styles to the third block that displays the Pokémon `type`.

- We'll render the type in a badge along with an emoji representing the Pokémon type.

- Include a function that returns badge styles based on the Pokémon type.

```jsx
import { View, Text, StyleSheet, Platform, Image } from 'react-native'

const getTypeDetails = type => {
  switch (type.toLowerCase()) {
    case 'electric':
      return { borderColor: '#FFD700', emoji: '⚡️' }
    case 'water':
      return { borderColor: '#6493EA', emoji: '💧' }
    case 'fire':
      return { borderColor: '#FF5733', emoji: '🔥' }
    case 'grass':
      return { borderColor: '#66CC66', emoji: '🌿' }
    default:
      return { borderColor: '#A0A0A0', emoji: '❓' }
  }
}

export default function PokemonCard({ name, image, type, hp, moves, weaknesses }) {
  return (
    <View style={styles.card}>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.hp}>❤️{hp}</Text>
      </View>

      <Image
        style={styles.image}
        source={image}
        accessibilityLabel={`${name} pokemon`}
        resizeMode='contain'
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
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 32,
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  hp: {
    fontSize: 22,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 16,
  },
})
```

- this function `getTypeDetails` returns a border color and an emoji based on the
  Pokemon type

- Invoke this function to get `borderColor` and `emoji` based on the type.

```jsx
import { View, Text, StyleSheet, Platform, Image } from 'react-native'

const getTypeDetails = type => {
  switch (type.toLowerCase()) {
    case 'electric':
      return { borderColor: '#FFD700', emoji: '⚡️' }
    case 'water':
      return { borderColor: '#6493EA', emoji: '💧' }
    case 'fire':
      return { borderColor: '#FF5733', emoji: '🔥' }
    case 'grass':
      return { borderColor: '#66CC66', emoji: '🌿' }
    default:
      return { borderColor: '#A0A0A0', emoji: '❓' }
  }
}

export default function PokemonCard({ name, image, type, hp, moves, weaknesses }) {
  const { borderColor, emoji } = getTypeDetails(type)

  return (
    <View style={styles.card}>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.hp}>❤️{hp}</Text>
      </View>

      <Image
        style={styles.image}
        source={image}
        accessibilityLabel={`${name} pokemon`}
        resizeMode='contain'
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
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 32,
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  hp: {
    fontSize: 22,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 16,
  },
})
```

- Apply styles to the type block:

  - Wrap the text element with a View representing the badge.

  - Create another View to Display the corresponding emoji within the badge view by
  - duplicating the line and binding `{emoji}`, which we have destructured from `getTypeDetails` function

```jsx
import { View, Text, StyleSheet, Platform, Image } from 'react-native'

const getTypeDetails = type => {
  switch (type.toLowerCase()) {
    case 'electric':
      return { borderColor: '#FFD700', emoji: '⚡️' }
    case 'water':
      return { borderColor: '#6493EA', emoji: '💧' }
    case 'fire':
      return { borderColor: '#FF5733', emoji: '🔥' }
    case 'grass':
      return { borderColor: '#66CC66', emoji: '🌿' }
    default:
      return { borderColor: '#A0A0A0', emoji: '❓' }
  }
}

export default function PokemonCard({ name, image, type, hp, moves, weaknesses }) {
  const { borderColor, emoji } = getTypeDetails(type)

  return (
    <View style={styles.card}>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.hp}>❤️{hp}</Text>
      </View>

      <Image
        style={styles.image}
        source={image}
        accessibilityLabel={`${name} pokemon`}
        resizeMode='contain'
      />

      <View>
        <View>
          <Text>{emoji}</Text>
          <Text>{type}</Text>
        </View>
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
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 32,
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  hp: {
    fontSize: 22,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 16,
  },
})
```

- Apply styles to each element: `styles.typeContainer`, `styles.badge`, `styles.typeEmoji`, and `styles.typeText`.

- so for the outer container style is equal to `styles.typeContainer`

- for the inner view component style is equal to an array `[]`, where we apply `styles.badge`, which we are going to Define, and we also said ` borderColor`` to the Border color destructured from  `getTypeDetails`

- next on the Emoji text style is equal to `styles.typeEmoji`

-and then style is equal to `styles.typeText`

```jsx
import { View, Text, StyleSheet, Platform, Image } from 'react-native'

const getTypeDetails = type => {
  switch (type.toLowerCase()) {
    case 'electric':
      return { borderColor: '#FFD700', emoji: '⚡️' }
    case 'water':
      return { borderColor: '#6493EA', emoji: '💧' }
    case 'fire':
      return { borderColor: '#FF5733', emoji: '🔥' }
    case 'grass':
      return { borderColor: '#66CC66', emoji: '🌿' }
    default:
      return { borderColor: '#A0A0A0', emoji: '❓' }
  }
}

export default function PokemonCard({ name, image, type, hp, moves, weaknesses }) {
  const { borderColor, emoji } = getTypeDetails(type)

  return (
    <View style={styles.card}>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.hp}>❤️{hp}</Text>
      </View>

      <Image
        style={styles.image}
        source={image}
        accessibilityLabel={`${name} pokemon`}
        resizeMode='contain'
      />

      <View style={styles.typeContainer}>
        <View style={[styles.badge, { borderColor }]}>
          <Text style={styles.typeEmoji}>{emoji}</Text>
          <Text style={styles.typeText}>{type}</Text>
        </View>
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
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 32,
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  hp: {
    fontSize: 22,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 16,
  },
})
```

### Define the key value pairs for each of these styles

- typeContainer:
- badge:
- typeEmoji:
- typeText:

```jsx
import { View, Text, StyleSheet, Platform, Image } from 'react-native'

const getTypeDetails = type => {
  switch (type.toLowerCase()) {
    case 'electric':
      return { borderColor: '#FFD700', emoji: '⚡️' }
    case 'water':
      return { borderColor: '#6493EA', emoji: '💧' }
    case 'fire':
      return { borderColor: '#FF5733', emoji: '🔥' }
    case 'grass':
      return { borderColor: '#66CC66', emoji: '🌿' }
    default:
      return { borderColor: '#A0A0A0', emoji: '❓' }
  }
}

export default function PokemonCard({ name, image, type, hp, moves, weaknesses }) {
  const { borderColor, emoji } = getTypeDetails(type)

  return (
    <View style={styles.card}>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.hp}>❤️{hp}</Text>
      </View>

      <Image
        style={styles.image}
        source={image}
        accessibilityLabel={`${name} pokemon`}
        resizeMode='contain'
      />

      <View style={styles.typeContainer}>
        <View style={[styles.badge, { borderColor }]}>
          <Text style={styles.typeEmoji}>{emoji}</Text>
          <Text style={styles.typeText}>{type}</Text>
        </View>
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
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 32,
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  hp: {
    fontSize: 22,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 16,
  },
  typeContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderWidth: 4,
  },
  typeEmoji: {
    fontSize: 30,
    marginRight: 12,
  },
  typeText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
})
```

### Step 17: Styling the Moves Block

- Display the list of moves in the JSX.

- Apply styles to the moves jsx block: `Styles.movesContainer` and `Styles.movesText`.

- And let's define the key value pairs for the styles

```jsx
import { View, Text, StyleSheet, Platform, Image } from 'react-native'

const getTypeDetails = type => {
  switch (type.toLowerCase()) {
    case 'electric':
      return { borderColor: '#FFD700', emoji: '⚡️' }
    case 'water':
      return { borderColor: '#6493EA', emoji: '💧' }
    case 'fire':
      return { borderColor: '#FF5733', emoji: '🔥' }
    case 'grass':
      return { borderColor: '#66CC66', emoji: '🌿' }
    default:
      return { borderColor: '#A0A0A0', emoji: '❓' }
  }
}

export default function PokemonCard({ name, image, type, hp, moves, weaknesses }) {
  const { borderColor, emoji } = getTypeDetails(type)

  return (
    <View style={styles.card}>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.hp}>❤️{hp}</Text>
      </View>

      <Image
        style={styles.image}
        source={image}
        accessibilityLabel={`${name} pokemon`}
        resizeMode='contain'
      />

      <View style={styles.typeContainer}>
        <View style={[styles.badge, { borderColor }]}>
          <Text style={styles.typeEmoji}>{emoji}</Text>
          <Text style={styles.typeText}>{type}</Text>
        </View>
      </View>

      <View style={styles.movesContainer}>
        <Text style={styles.movesText}>Moves: {moves.join(', ')}</Text>
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
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 32,
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  hp: {
    fontSize: 22,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 16,
  },
  typeContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderWidth: 4,
  },
  typeEmoji: {
    fontSize: 30,
    marginRight: 12,
  },
  typeText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  movesContainer: {
    marginBottom: 16,
  },
  movesText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
})
```

### Step 18: Styling the Weakness Block

- Style the weakness block similar to the moves block.

- Apply styles to the weakness block: `Styles.weaknessContainer` and `styles.weaknessText`.

```jsx
import { View, Text, StyleSheet, Platform, Image } from 'react-native'

const getTypeDetails = type => {
  switch (type.toLowerCase()) {
    case 'electric':
      return { borderColor: '#FFD700', emoji: '⚡️' }
    case 'water':
      return { borderColor: '#6493EA', emoji: '💧' }
    case 'fire':
      return { borderColor: '#FF5733', emoji: '🔥' }
    case 'grass':
      return { borderColor: '#66CC66', emoji: '🌿' }
    default:
      return { borderColor: '#A0A0A0', emoji: '❓' }
  }
}

export default function PokemonCard({ name, image, type, hp, moves, weaknesses }) {
  const { borderColor, emoji } = getTypeDetails(type)

  return (
    <View style={styles.card}>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.hp}>❤️{hp}</Text>
      </View>

      <Image
        style={styles.image}
        source={image}
        accessibilityLabel={`${name} pokemon`}
        resizeMode='contain'
      />

      <View style={styles.typeContainer}>
        <View style={[styles.badge, { borderColor }]}>
          <Text style={styles.typeEmoji}>{emoji}</Text>
          <Text style={styles.typeText}>{type}</Text>
        </View>
      </View>

      <View style={styles.movesContainer}>
        <Text style={styles.movesText}>Moves: {moves.join(', ')}</Text>
      </View>

      <View style={styles.weaknessContainer}>
        <Text style={styles.weaknessText}>Weakness: {weaknesses.join(', ')}</Text>
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
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 32,
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  hp: {
    fontSize: 22,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 16,
  },
  typeContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderWidth: 4,
  },
  typeEmoji: {
    fontSize: 30,
    marginRight: 12,
  },
  typeText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  movesContainer: {
    marginBottom: 16,
  },
  movesText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  weaknessContainer: {
    marginBottom: 8,
  },
  weaknessText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
})
```

### Conclusion:

With this, we have successfully completed styling our Pokémon card component. In the sixth and final part, we will add multiple Pokémon cards to our view.
