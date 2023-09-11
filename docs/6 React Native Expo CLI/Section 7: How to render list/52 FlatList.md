---
sidebar_position: 52
---

# FlatList

>

### **=>** Intro

- In the previous video We learned how to render a list in React Native using the `ScrollView` component and the `map` method.

- However, with this method, all items are rendered even if they're not in the viewport.

- While rendering all list items might not be an issue for small lists, for larger data sets consisting of thousands of items, it can lead to performance problems.

### The recommended approach

- In React Native to rendering lists is to use the `FlatList` component, which **renders only the items currently in view, making it highly performant for long lists.**

Let's see it in action:

1. Comment out the `ScrollView` component code.
2. Import the `FlatList` component from React Native.
3. Replace the map method code with the `FlatList` component code.

```jsx
import { StyleSheet, Text, View, ScrollView, SafeAreaView, StatusBar, FlatList } from 'react-native'
import pokemonList from './data.json'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView style={styles.scrollView}>
        {pokemonList.map(pokemon => {
          return (
            <View
              style={styles.card}
              key={pokemon.id}>
              <Text style={styles.cardText}>{pokemon.type}</Text>
              <Text style={styles.cardText}>{pokemon.name}</Text>
            </View>
          )
        })}
      </ScrollView> */}
      <FlatList />
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

- The Flat List is a self-closing component and has two mandatory props:

1. **data={}**: The `data` prop is used to pass the array of items that you want to render in the list.

- In our case, it is the `pokemonlist`

```jsx
import { StyleSheet, Text, View, ScrollView, SafeAreaView, StatusBar, FlatList } from 'react-native'
import pokemonList from './data.json'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView style={styles.scrollView}>
        {pokemonList.map(pokemon => {
          return (
            <View
              style={styles.card}
              key={pokemon.id}>
              <Text style={styles.cardText}>{pokemon.type}</Text>
              <Text style={styles.cardText}>{pokemon.name}</Text>
            </View>
          )
        })}
      </ScrollView> */}
      <FlatList data={pokemonList} />
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

1. **renderItem={}**: The `renderItem` prop is a function that returns the JSX for rendering each item in the list.

```jsx
import { StyleSheet, Text, View, ScrollView, SafeAreaView, StatusBar, FlatList } from 'react-native'
import pokemonList from './data.json'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView style={styles.scrollView}>
        {pokemonList.map(pokemon => {
          return (
            <View
              style={styles.card}
              key={pokemon.id}>
              <Text style={styles.cardText}>{pokemon.type}</Text>
              <Text style={styles.cardText}>{pokemon.name}</Text>
            </View>
          )
        })}
      </ScrollView> */}
      <FlatList
        data={pokemonList}
        renderItem={() => {}}
      />
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

- The function receives an object containing the current `item`, and you can define how each item should be rendered.

- This is the same as what we return from the `map` method.

- So, copy the return statement and paste it.

- We do have to change "pokemon" to "item".

```jsx
import { StyleSheet, Text, View, ScrollView, SafeAreaView, StatusBar, FlatList } from 'react-native'
import pokemonList from './data.json'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView style={styles.scrollView}>
        {pokemonList.map(pokemon => {
          return (
            <View
              style={styles.card}
              key={pokemon.id}>
              <Text style={styles.cardText}>{pokemon.type}</Text>
              <Text style={styles.cardText}>{pokemon.name}</Text>
            </View>
          )
        })}
      </ScrollView> */}
      <FlatList
        data={pokemonList}
        renderItem={({ item }) => {
          return (
            <View
              style={styles.card}
              key={item.id}>
              <Text style={styles.cardText}>{item.type}</Text>
              <Text style={styles.cardText}>{item.name}</Text>
            </View>
          )
        }}
      />
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

- if we now take a look at the UI. We can still see our list, and we can scroll down to the bottom, but this list is more performant.

- Let's verify that by logging the item ID to the console:

Within the render item function, `console.log(item.ID)`.

```jsx
import { StyleSheet, Text, View, ScrollView, SafeAreaView, StatusBar, FlatList } from 'react-native'
import pokemonList from './data.json'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView style={styles.scrollView}>
        {pokemonList.map(pokemon => {
          return (
            <View
              style={styles.card}
              key={pokemon.id}>
              <Text style={styles.cardText}>{pokemon.type}</Text>
              <Text style={styles.cardText}>{pokemon.name}</Text>
            </View>
          )
        })}
      </ScrollView> */}
      <FlatList
        data={pokemonList}
        renderItem={({ item }) => {
          console.log(item.id)
          return (
            <View
              style={styles.card}
              key={item.id}>
              <Text style={styles.cardText}>{item.type}</Text>
              <Text style={styles.cardText}>{item.name}</Text>
            </View>
          )
        }}
      />
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

- take a look at the terminal. We can see the first 64 IDs instead of 100.

- Now you might think that this is incorrect. We see six or seven items in the viewport but we see 64 in the terminal. How is that right?

- Well, the thing is, `the FlatList component ensures it generates a few devices length of content in advance to ensure smooth scrolling`

- But now that the initial number of cards have been rendered, if we scroll down a bit, you can see the additional IDs being logged in the console.

- `They are lazily loaded to ensure smooth scrolling.`

- If you were to try this experiment with an array of 50 Pokemon, you would see all 50 in the logs and would assume FlatList has no performance benefits.

- I wanted to make sure you don't walk away with that wrong idea, and hence the long list of items.

### horizontal prop

On a side note, if you want **to render the list horizontally**, you can add the `horizontal={}` prop and set it to `true`

```jsx
import { StyleSheet, Text, View, ScrollView, SafeAreaView, StatusBar, FlatList } from 'react-native'
import pokemonList from './data.json'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView style={styles.scrollView}>
        {pokemonList.map(pokemon => {
          return (
            <View
              style={styles.card}
              key={pokemon.id}>
              <Text style={styles.cardText}>{pokemon.type}</Text>
              <Text style={styles.cardText}>{pokemon.name}</Text>
            </View>
          )
        })}
      </ScrollView> */}
      <FlatList
        data={pokemonList}
        renderItem={({ item }) => {
          console.log(item.id)
          return (
            <View
              style={styles.card}
              key={item.id}>
              <Text style={styles.cardText}>{item.type}</Text>
              <Text style={styles.cardText}>{item.name}</Text>
            </View>
          )
        }}
        horizontal={true}
      />
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

- You can see the cards are now rendered horizontally.

### keyExtractor prop

- If this is clear, let me highlight one more prop before we proceed to the next video:

- The prop is `keyExtractor={}`

- **This prop is a function that takes an item from the data array and returns a unique key for that item.**

- It is used to identify the unique items in the list, similar to the key prop when using the map method.

- By default, it returns `keyExtractor={item.key}`

- and if that is not present, it returns `keyExtractor={item.id}`

- If that as well is not present, it uses the item `index` as key.

- Index, by the way, is available as the second argument to the callback function, where the first argument is the `item` itself. `keyExtractor={(item, index) => }`

- In our case, we do have an `Id` property for every item, and the same is used by default.

- However, you can define it yourself. So `item` returns `item.Id` and we convert this to a string, as the function should return a string, (but I believe there is implicit conversion for a numeric type).

```jsx
import { StyleSheet, Text, View, ScrollView, SafeAreaView, StatusBar, FlatList } from 'react-native'
import pokemonList from './data.json'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView style={styles.scrollView}>
        {pokemonList.map(pokemon => {
          return (
            <View
              style={styles.card}
              key={pokemon.id}>
              <Text style={styles.cardText}>{pokemon.type}</Text>
              <Text style={styles.cardText}>{pokemon.name}</Text>
            </View>
          )
        })}
      </ScrollView> */}
      <FlatList
        data={pokemonList}
        renderItem={({ item }) => {
          console.log(item.id)
          return (
            <View
              style={styles.card}
              key={item.id}>
              <Text style={styles.cardText}>{item.type}</Text>
              <Text style={styles.cardText}>{item.name}</Text>
            </View>
          )
        }}
        keyExtractor={item => item.id.toString()}
        // horizontal={true}
      />
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

- If we save the file, our UI should still be working as expected.

### Adding horizontal padding

Now we are missing the horizontal padding, so you can wrap the `FlatList` component with a `View` component and add `style` equal to `styles.scrollView`.

```jsx
import { StyleSheet, Text, View, ScrollView, SafeAreaView, StatusBar, FlatList } from 'react-native'
import pokemonList from './data.json'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView style={styles.scrollView}>
        {pokemonList.map(pokemon => {
          return (
            <View
              style={styles.card}
              key={pokemon.id}>
              <Text style={styles.cardText}>{pokemon.type}</Text>
              <Text style={styles.cardText}>{pokemon.name}</Text>
            </View>
          )
        })}
      </ScrollView> */}
      <View style={styles.scrollView}>
        <FlatList
          data={pokemonList}
          renderItem={({ item }) => {
            console.log(item.id)
            return (
              <View
                style={styles.card}
                key={item.id}>
                <Text style={styles.cardText}>{item.type}</Text>
                <Text style={styles.cardText}>{item.name}</Text>
              </View>
            )
          }}
          keyExtractor={item => item.id.toString()}
          // horizontal={true}
        />
      </View>
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

- If we save the file, a list of Pokemon should look much better.

Apart from `data`, `renderItem`, `horizontal`, and `keyExtractor`, there are quite a few props that can be used to customize the behavior and appearance of the Flat List. Let's see what they are in the upcoming videos.

### to summarize

But to summarize what we have learned in this video:

- A `ScrollView` renders all its React child components at once and has a performance downside.

- `FlatList`, on the other hand, renders items easily when they're about to appear and removes items that scroll way off the screen to save memory and processing time.

- Using `FlatList` is a recommended approach to render lists in React Native.
