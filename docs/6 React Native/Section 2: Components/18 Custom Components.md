---
sidebar_position: 18
---

# Custom Components

- In React Native, we often combine core components to create custom user interfaces.

1. To create a custom component, start by creating a new folder called "components" within your project folder.

   - Inside the "components" folder, create a new file called "Greet.js".

2. In "Greet.js", define a basic component that accepts a "name" prop and renders JSX.

   - Import the "View" and "Text" components from React Native.

   - Export a default function called "Greet" that accepts a "name" prop.

   - Within the function, destructure the "name" prop and return JSX with a "View" component and a nested "Text" component.

   - The "Text" component will display "Hello" followed by the 'name' passed into the component.

```jsx
import { View, Text } from 'react-native'

export default function Greet({ name }) {
  return (
    <View>
      <Text>Hello, {name}</Text>
    </View>
  )
}
```

3. Import the newly created "Greet" component into "App.js".

```jsx
import React from 'react'
import { View } from 'react-native'
import Greet from './components/Greet'

export default function App() {
  return <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}></View>
}
```

4. Use the "Greet" component with a "name" prop, such as "Bruce Wayne" or "Clark Kent".

```jsx
import React from 'react'
import { View } from 'react-native'
import Greet from './components/Greet'

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
      <Greet name='Bruce Wane' />
      <Greet name='Clark Kent' />
    </View>
  )
}
```

- By combining core components like "View" and "Text", we can create reusable custom components.

- Custom components can include components like cards, buttons, list items, and more.

- The essence of building React Native apps is combining core components to create reusable custom components that form user interfaces.

- Next, we will focus on styling in React Native and explore the StyleSheet API.
