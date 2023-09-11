---
sidebar_position: 54
---

# listEmpty

>

### **=>** Intro

- The next prop we will explore is the `listEmptyComponent`

- **This prop accepts a React component and renders it when the list is empty.**

- Let's specify a simple `Text` component: `"No items found."`

- If we now specify the `data` prop as an empty array (`[]`) and take a look at the UI,

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
          ListEmptyComponent={<Text>No items found</Text>}
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
    // marginBottom: 16,
  },
  cardText: {
    fontSize: 30,
  },
})
```

- we can see the text `"No items found."`

- The text is the component assigned to the `list empty component` prop.

- We have already covered styling and layout, so I won't dive into making this component look pretty.

- I will leave that to you as a practice exercise.

- Try increasing the font size and centering this text in the UI.

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
            <Text style={{ fontSize: 35, textAlign: 'center' }}>No items found</Text>
          }
          }
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

- Let me know how it goes in the comment section.

- As you can see, the `list empty component` prop is straightforward and incredibly useful, especially when you fetch data from an API, and the data might be empty.

- Instead of handling the logic yourself, you can use this prop to manage empty states efficiently.
