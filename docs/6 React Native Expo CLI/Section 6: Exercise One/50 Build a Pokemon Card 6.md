---
sidebar_position: 50
---

# Build a Pokemon Card 6

>

### **=>** Intro

- Welcome to the final part of building a Pokémon card in React Native.

- In this video, let's render multiple Pokémon cards.

- Once again, we will pick up where we left off.

### Step 19: Defining Pokémon Details

- In App.js, Define the Pokémon details for three other Pokémon (Squirtle, Bulbasaur, and Pikachu).

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

  const squirtleData = {
    name: 'Squirtle',
    image: require('./assets/squirtle.png'), // Replace with the actual image path
    type: 'Water',
    hp: 44,
    moves: ['Tackle', 'Water Gun', 'Tail Whip', 'Withdraw'],
    weaknesses: ['Electric', 'Grass'],
  }

  const bulbasaurData = {
    name: 'Bulbasaur',
    image: require('./assets/bulbasaur.png'), // Replace with the actual image path
    type: 'Grass',
    hp: 45,
    moves: ['Tackle', 'Vine Whip', 'Growl', 'Leech Seed'],
    weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'],
  }

  const pikachuData = {
    name: 'Pikachu',
    image: require('./assets/pikachu.png'), // Replace with the actual image path
    type: 'Electric',
    hp: 35,
    moves: ['Quick Attack', 'Thunderbolt', 'Tail Whip', 'Growl'],
    weaknesses: ['Ground'],
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

- Invoke the `PokemonCard` component three more times and pass the newly defined objects as props.

```jsx
<PokemonCard {...SquirtleData} />
<PokemonCard {...BulbasaurData} />
<PokemonCard {...PikachuData} />
```

### Step 20: Adding a ScrollView

- Import the `ScrollView` component from React Native.

- Add the `ScrollView` component to make the view scrollable.

```jsx
import { StyleSheet, SafeAreaView, Platform, ScrollView } from 'react-native'
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

  const squirtleData = {
    name: 'Squirtle',
    image: require('./assets/squirtle.png'), // Replace with the actual image path
    type: 'Water',
    hp: 44,
    moves: ['Tackle', 'Water Gun', 'Tail Whip', 'Withdraw'],
    weaknesses: ['Electric', 'Grass'],
  }

  const bulbasaurData = {
    name: 'Bulbasaur',
    image: require('./assets/bulbasaur.png'), // Replace with the actual image path
    type: 'Grass',
    hp: 45,
    moves: ['Tackle', 'Vine Whip', 'Growl', 'Leech Seed'],
    weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'],
  }

  const pikachuData = {
    name: 'Pikachu',
    image: require('./assets/pikachu.png'), // Replace with the actual image path
    type: 'Electric',
    hp: 35,
    moves: ['Quick Attack', 'Thunderbolt', 'Tail Whip', 'Growl'],
    weaknesses: ['Ground'],
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <PokemonCard {...charmanderData} />
        <PokemonCard {...squirtleData} />
        <PokemonCard {...bulbasaurData} />
        <PokemonCard {...pikachuData} />
      </ScrollView>
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

- Ensure that all the cards are visible and scrollable in the UI.

### Final Checks:

- Test the app with different device dimensions and orientations to ensure it functions properly.

- In the terminal, press Shift + I and select different device profiles to verify the UI's responsiveness.

- Edit `app.json` to set the orientation to "default" for better adaptability.

- Restart the application and rotate the device to ensure all four cards render as expected without issues.

### Conclusion:

I hope this exercise has helped you apply all the concepts you've learned so far in the series.

---

With this, we have completed building the Pokémon card application in React Native.
