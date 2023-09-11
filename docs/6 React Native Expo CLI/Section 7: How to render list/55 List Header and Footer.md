---
sidebar_position: 55
---

# List Header and Footer

>

### **=>** Intro

- two more props supported by FlatList component the `ListHeaderComponent` and the `ListFooterComponent`

- they allow you to add custom header and footer components to your lists

### ListHeaderComponent

- **This prop allows you to add a custom header component to the top of the list.**

- It accepts a React component and renders it at the top of the list.

- `Perfect for adding titles, descriptions, or any other content you want to display above your list items.`

- Example: Add a simple text component that says "Pokémon List" with the style set to `styles.header_text`.

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
          data={[]}
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
          ItemSeparatorComponent={<View style={{ height: 16 }} />}
          ListEmptyComponent={
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 35 }}>No items found</Text>
            </View>
          }
          ListHeaderComponent={<Text style={styles.headerText}>Pokemon List</Text>}
          // horizontal={true}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    paddingHorizontal: 16,
  },
  card: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    // marginBottom: 16,
  },
  cardText: {
    fontSize: 30,
  },
})
```

- In the Styles section, define the styles with a font size of 24, text-align center, and a bottom margin of 12.

- When you change the header to "Pokémon List" and view the UI,

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
          ItemSeparatorComponent={<View style={{ height: 16 }} />}
          ListEmptyComponent={
            <Text style={{ fontSize: 35, textAlign: 'center' }}>No items found</Text>
          }
          ListHeaderComponent={<Text style={styles.headerText}>Pokemon List</Text>}
          // horizontal={true}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    paddingHorizontal: 16,
  },
  card: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    // marginBottom: 16,
  },
  cardText: {
    fontSize: 30,
  },
  headerText: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 12,
  },
})
```

- you can see the text "Pokémon List" at the top.

### List Footer Component

- **This prop allows you to add a custom footer component to the bottom of the list.**

- `It accepts a React component and renders it at the bottom of the list.`

- Useful for adding footnotes, pagination controls, or indicating the end of the list.

- Example: Add a text component that says "End of List" with the style set to `styles.footer_text`.

  - In the Styles section, define the styles with a font size of 24, text-align center, and a margin-top of 12.

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
          ItemSeparatorComponent={<View style={{ height: 16 }} />}
          ListEmptyComponent={
            <Text style={{ fontSize: 35, textAlign: 'center' }}>No items found</Text>
          }
          ListHeaderComponent={<Text style={styles.headerText}>Pokemon List</Text>}
          ListFooterComponent={<Text style={styles.footerText}>End if list</Text>}
          // horizontal={true}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    paddingHorizontal: 16,
  },
  card: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    // marginBottom: 16,
  },
  cardText: {
    fontSize: 30,
  },
  headerText: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 12,
  },
  footerText: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 12,
  },
})
```

- When you scroll all the way to the bottom of the list, you can see the text "End of List."

Whether you're displaying a catalog of products, a collection of articles, or a list of Pokémon, both these props can help you create more engaging and user-friendly interfaces.
