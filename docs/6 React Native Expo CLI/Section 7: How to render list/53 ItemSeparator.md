---
sidebar_position: 53
---

# ItemSeparator

>

### **=>** Intro

- In the previous video, we learned about the FlatList component in React Native.

- We explored essential props like `data`, `renderItem`, and `keyExtractor`.

- Now, let's delve into some additional props commonly used with the FlatList component.

### ItemSeparatorComponent

- In this video, we will focus on the `ItemSeparatorComponent`

- **This prop accepts a React component, rendering it between each item in the list but excluding the top and the bottom.**

- In our case, it's the perfect prop to replace the bottom margin we have on the card component.

- While these 16 pixels serve as a useful separator between the cards, it also introduces unnecessary spacing at the bottom of the list.

- By specifying a `View` component with a `16-pixel heigh`t as the item separator component and commenting out the margin-bottom property,

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

- you'll notice that the spacing between the cards is still maintained, but the extra space at the end of the list is eliminated.

- Generally, spacing is the most elegant way to separate list items, but you are free to customize the separator component to align with your design preferences.

### In summary

- the `item separator component` inserts a component between each item in the list, excluding the top and bottom.

- You can assign any React component or even a function that returns a React component.

- The function can receive specific props, allowing for more intricate styling of the component, but I will leave that for you to explore further when you have the time.
