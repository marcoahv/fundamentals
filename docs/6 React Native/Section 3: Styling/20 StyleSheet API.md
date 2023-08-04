---
sidebar_position: 20
---

# The StyleSheet API

- In this video, we will explore the StyleSheet API which allows us to style components in React Native.
- For this section on styling, we have created a new Expo project called `StylingRN`
- However, you can continue working on the same core components project from the previous section if you prefer to.
- Just ensure that you start with an empty `app.js` file to follow along.

### Using inline styles

- Let's start by quickly creating a component that will render some text at the top:
- On the `View` component, we add the `style` prop with `flex` set to `1` so as to occupy the entire available space, a `backgroundColor` , and finally `padding` .

  ```jsx
  import React from 'react'
  import { View, Text } from 'react-native'

  export default function App() {
    return (
      <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
        <Text>StyleSheet API</Text>
      </View>
    )
  }
  ```

### The preferred method is to use the StyleSheet API.

- If we save the file and take a look at the two devices, we can see the expected UI.
- This approach uses inline styling which we have already come across. Although inline styles work fine, they are not the recommended approach for styling in React Native.
- In fact, you will rarely find them in a codebase.
- The preferred method is to use the StyleSheet API.
- Let me demonstrate how to use it by replacing the inline style.
- To begin, import the StyleSheet API from React Native:

```jsx
import { View, Text, StyleSheet } from 'react-native'

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
      <Text>StyleSheet API</Text>
    </View>
  )
}
```

- Next, below the `App` component, call the `create` method on the StyleSheet API, and assign the returned value to a constant called `styles` :

```jsx
import { View, Text, StyleSheet } from 'react-native'

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
      <Text>StyleSheet API</Text>
    </View>
  )
}

const styles = StyleSheet.create({})
```

- As an argument to the `create` method, provide an object that contains key-value pairs.
- You can choose any key name you want to, but it is recommended to give them semantic meaning.
- For example, I will limit `container` .
- The value should be an object containing key-value pairs similar to CSS properties and values but in JavaScript.
- In our case, we can extract the styles from the `style` prop and assign them to the `container` key.
- So cut the object and specify as the value to `container` .
- Now, for the `style` prop on the `View` component, specify `styles.container` .

```jsx
import { View, Text, StyleSheet } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>StyleSheet API</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'plum',
    padding: 60,
  },
})
```

- If we save the file, we can see that the UI remains the same as before, but this time we have styled our component using the StyleSheet API.

### why should you choose the StyleSheet API over inline styles?

- Now, there are a couple of reasons:
  - First, by moving styles away from the render function, you `make the code easier to read and understand`.
  - Second, naming the styles `adds meaning to the low-level components in the render function`.
  - For example, you could create a `title` style and assign it to the `Text` component as `styles.title` .

```jsx
import { View, Text, StyleSheet } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={style.title}>StyleSheet API</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'plum',
    padding: 60,
  },
  title: {},
})
```

- This makes it clear that the `View` represents the container and the `Text` represents the title for the screen.
- Finally, organizing styles in this manner `makes the code reusable and easier to maintain`.
- Imagine having the same inline styles across multiple `Text` components and you need to change the font size.
- You would have to update each component style individually.
- However, by grouping the styles using the StyleSheet API, you only need to change it once as the updated `title` style will be reflected across all components.
- It is also important to note that these styles can only be used within the same file.
- However, you do have the option to create a separate Global Styles file and export the styles object.

```jsx
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'plum',
    padding: 60,
  },
  title: {},
})
```

- You can then use it in any file throughout your codebase.
- This allows for reusing the styles across different components and promoting consistency in your application's visual design.
-

### What if you create a style object without using the StyleSheet API.

- Well, in that case, you won't have access to autocomplete suggestions.
- If I try to add a margin, you can see we don't have any autocomplete.
- But the same with the StyleSheet API, we have access to those autocomplete suggestions.
- And trust me, in React Native, having the assistance is valuable since the property names are quite different from what you're used to in the browser.
- All right, I hope you now have a clear understanding of the two methods of styling React Native components: inline styles and the StyleSheet API. The StyleSheet API is the recommended approach as it promotes writing organized, easy-to-read, and maintainable code.
