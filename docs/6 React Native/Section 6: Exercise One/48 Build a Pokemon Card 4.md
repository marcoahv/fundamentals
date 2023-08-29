---
sidebar_position: 48
---

# Build a Pokemon Card 4

- Welcome to Part 4 of building a Pokémon card in React Native.

- In Part 3, we focused on the card component's content.

- In this video, let's shift our concentration to styling the content.

- Once again, we're picking up where we left off.

### Step 14: Styling the Name and HP Block

- Start with the first block that renders the name and HP.

- Apply styles to each of the elements in this block.

  - `style` prop for the wrapping view: `Styles.nameContainer`.

  - `style` prop for the name text element: `Styles.name`.

  - `style` prop for HP text element: `Styles.hp`.

```jsx
import { View, Text, StyleSheet, Platform, Image } from 'react-native'

export default function PokemonCard({ name, image, type, hp, moves, weaknesses }) {
  return (
    <View style={styles.card}>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.hp}>{hp}</Text>
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

- Now Define these styles in the stylesheet object.

### nameContainer Style:

- Set `flexDirection` to `row` to align the name and HP horizontally.

- Add spacing between the text items with `justifyContent: 'space-between'`.

- Set a bottom margin for spacing with the next block.

```jsx
import { View, Text, StyleSheet, Platform, Image } from 'react-native'

export default function PokemonCard({ name, image, type, hp, moves, weaknesses }) {
  return (
    <View style={styles.card}>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.hp}>{hp}</Text>
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
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 32,
  },
})
```

### Name Text Style:

- Increase font size.

- Set font weight to bold.

```jsx
import { View, Text, StyleSheet, Platform, Image } from 'react-native'

export default function PokemonCard({ name, image, type, hp, moves, weaknesses }) {
  return (
    <View style={styles.card}>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.hp}>{hp}</Text>
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
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 32,
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
  },
})
```

### HP Text Style:

- Set font size to 22.

- Add a heart emoji in the jsx to represent HP.

```jsx
import { View, Text, StyleSheet, Platform, Image } from 'react-native'

export default function PokemonCard({ name, image, type, hp, moves, weaknesses }) {
  return (
    <View style={styles.card}>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.hp}>❤️{hp}</Text>
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
})
```

### Step 15: Styling the Image Block

- For the second block (image), add `style` prop: `Styles.image`.

```jsx
import { View, Text, StyleSheet, Platform, Image } from 'react-native'

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
})
```

- Define this style in the stylesheet object.

  - Set width to 100%.

  - Set height to 200.

  - Add margin bottom for spacing.

```jsx
import { View, Text, StyleSheet, Platform, Image } from 'react-native'

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

- To fix cropping, add `resizeMode` prop to the image component and set it to `contain`.

```jsx
import { View, Text, StyleSheet, Platform, Image } from 'react-native'

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

- Now the image block is perfectly positioned.

### Conclusion:

I'll stop here as we're halfway through the styling process. Let's continue with the remaining styles in Part 5.
