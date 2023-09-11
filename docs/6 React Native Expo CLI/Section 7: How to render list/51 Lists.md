---
sidebar_position: 51
---

# Lists

>

### **=>** Intro

- Rendering lists is an essential aspect of mobile application development.

- Whether it's a list of contacts, products, or any other collection of items, lists are a fundamental UI component.

- In this seventh section of the course, we will explore how to render lists in React Native.

### Setting Up the Project:

- For this section on lists, I have created a new Expo project called `RNList`

- You can create a similar project using the command: `npx create-expo-app RNList`

### Step 1: Creating Mock Data

- We'll start by creating a mock data set that represents a list of Pokémon.

- Each Pokémon will have properties like ID, type, and name.

- Create a file called `data.json` within the project folder.

- Copy and paste a list of 100 Pokémon into `data.json`.

### Step 2: Importing the Data

- Import the Pokémon list from `data.json` in your JavaScript file.

```jsx
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import pokemonList from './data.json'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
```

### Step 3: Rendering the List

- To render the list, we can use the `map` method.

- Within the `View` container, use curly braces and `map` over the `PokemonList` array.

```jsx
mport { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import pokemonList from './data.json'

export default function App() {
  return <View style={styles.container}>{pokemonList.map()}</View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

```

- For each Pokémon, return a `View` component that renders the Pokémon type and name.

- Remember to specify a unique `key` prop for each item, in this case, use `Pokemon.id`.

```jsx
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import pokemonList from './data.json'

export default function App() {
  return (
    <View style={styles.container}>
      {pokemonList.map(pokemon => {
        return (
          <View key={pokemon.id}>
            <Text>{pokemon.typeList[0]}</Text>
            <Text>{pokemon.name}</Text>
          </View>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
```

### Step 4: Making the List Scrollable

- By default, the `View` component is not scrollable.

- To fix this, import the `ScrollView` component from React Native.

- Wrap your list with the `ScrollView` component to make it scrollable.

```jsx
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import pokemonList from './data.json'

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        {pokemonList.map(pokemon => {
          return (
            <View key={pokemon.id}>
              <Text>{pokemon.typeList[0]}</Text>
              <Text>{pokemon.name}</Text>
            </View>
          )
        })}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
```

### Step 5: Styling Improvements

### 1: Add Safe Area View

- Import `SafeAreaView` and replace the outermost `View` container with `SafeAreaView`.

- This adds top padding on iOS devices.

```jsx
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native'
import pokemonList from './data.json'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {pokemonList.map(pokemon => {
          return (
            <View key={pokemon.id}>
              <Text>{pokemon.typeList[0]}</Text>
              <Text>{pokemon.name}</Text>
            </View>
          )
        })}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
```

- To accommodate Android devices, import `StatusBar` (from react native instead of Expo) and set `paddingTop` to `StatusBar.currentHeight`.

```jsx
import { StyleSheet, Text, View, ScrollView, SafeAreaView, StatusBar } from 'react-native'
import pokemonList from './data.json'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {pokemonList.map(pokemon => {
          return (
            <View key={pokemon.id}>
              <Text>{pokemon.typeList[0]}</Text>
              <Text>{pokemon.name}</Text>
            </View>
          )
        })}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: StatusBar.currentHeight,
  },
})
```

### Add some styles

- let's also change the background color to `#F5F5F5`

- and remove `alignItems` and `justifyContent`

```jsx
import { StyleSheet, Text, View, ScrollView, SafeAreaView, StatusBar } from 'react-native'
import pokemonList from './data.json'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {pokemonList.map(pokemon => {
          return (
            <View key={pokemon.id}>
              <Text>{pokemon.typeList[0]}</Text>
              <Text>{pokemon.name}</Text>
            </View>
          )
        })}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: StatusBar.currentHeight,
  },
})
```

### 2: Add Styling to the ScrollView

- Create a style for the `ScrollView` by adding a `scrollView` key to the `Styles` object and set a horizontal padding to 16.

- Apply this style to the `ScrollView` component.

```jsx
import { StyleSheet, Text, View, ScrollView, SafeAreaView, StatusBar } from 'react-native'
import pokemonList from './data.json'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {pokemonList.map(pokemon => {
          return (
            <View key={pokemon.id}>
              <Text>{pokemon.typeList[0]}</Text>
              <Text>{pokemon.name}</Text>
            </View>
          )
        })}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    paddingHorizontal: 16,
  },
})
```

### 3: Create a card Style

- Create a style for each list item (card).

- Set a white background color, padding, border radius, border width, and margin bottom.

- Apply this style to the `View` component for each Pokémon.

```jsx
import { StyleSheet, Text, View, ScrollView, SafeAreaView, StatusBar } from 'react-native'
import pokemonList from './data.json'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {pokemonList.map(pokemon => {
          return (
            <View
              style={styles.card}
              key={pokemon.id}>
              <Text>{pokemon.typeList[0]}</Text>
              <Text>{pokemon.name}</Text>
            </View>
          )
        })}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 16,
  },
})
```

### 4: Create a Text Style

- Create a style for the text content inside the card. so `cardText:`

- Increase the font size for better readability.

- Apply this style to both text components.

```jsx
import { StyleSheet, Text, View, ScrollView, SafeAreaView, StatusBar } from 'react-native'
import pokemonList from './data.json'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {pokemonList.map(pokemon => {
          return (
            <View
              style={styles.card}
              key={pokemon.id}>
              <Text style={styles.cardText}>{pokemon.typeList[0]}</Text>
              <Text style={styles.cardText}>{pokemon.name}</Text>
            </View>
          )
        })}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 16,
  },
  cardText: {
    fontSize: 30,
  },
})
```

### Conclusion:

While our current code works fine, rendering lists using the `ScrollView` component and the `map` method is not the preferred technique. In the next video, we will explore why this is the case and learn about the recommended approach.
