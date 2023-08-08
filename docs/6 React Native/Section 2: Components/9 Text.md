---
sidebar_position: 9
---

# Text Component

- The text component is a component for displaying text.

- It supports nesting, styling, and touch handling.

- Depending on the target platform, `React Native will translate this component to either a UI text view for iOS, a text view for Android, or a paragraph tag for the web.`

### Understanding the Text Component

- Let's return to VS Code and understand more.

- To start, let's write some code within the outer view component.

- Delete the two nested views and instead add the text "Hello World".

```jsx
import React from 'react'
import { View } from 'react-native'

function App() {
  return <View style={{ flex: 1, backgroundColor: 'plum' }}>Hello World</View>
}

export default App
```

- When we save the file, `we see an error.`

- This error occurs because `in React Native, all text nodes must be wrapped inside a text component`.

- Directly placing text under a view is not allowed.

- This is a common error you will run into when starting with React Native.

- `To fix this error, we need to import the text component from React Native and wrap the "Hello World" text with it.`

```jsx
import React from 'react'
import { View, Text } from 'react-native'

function App() {
  return (
    <View style={{ flex: 1, backgroundColor: 'plum' }}>
      <Text>Hello World</Text>
    </View>
  )
}

export default App
```

- Once we make this change and save the file, we can now see the text being displayed in the simulator and the emulator.

### Improving the Position

- Now the position of the text is a little awkward, so let's add some padding for now on the outer view container.

- Add a padding of 60.

```jsx
import React from 'react'
import { View, Text } from 'react-native'

function App() {
  return (
    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
      <Text>Hello World</Text>
    </View>
  )
}

export default App
```

- Save the file.

- This is much better. We're able to clearly see the "Hello World" text. Not perfect, but better.

### Styling and Layout

- As mentioned in the previous video, there is much more to learn about styling and layout with these components.

- We will cover these topics in detail in the upcoming sections.

### Nesting Text Components

- Next, let's explore nesting text components.

- For example, suppose we want to display the word "Hello" in white color.

- To achieve this, we can wrap the "Hello" text with another pair of text component tags.

- On this inner text component, we can add a style prop, which is an object, and set the color property to a value of "white".

```jsx
import React from 'react'
import { View, Text } from 'react-native'
function App() {
  return (
    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
      <Text>
        <Text style={{ color: 'white' }}>Hello</Text> World
      </Text>
    </View>
  )
}
export default App
```

- By doing this, the word "Hello" will appear in white color, while "World" remains in black.

### Summary

- The text component is essential for displaying text in React Native.

- Remember that every text node within a view must be wrapped with the text component.

- Additionally, nesting of text components is allowed.
