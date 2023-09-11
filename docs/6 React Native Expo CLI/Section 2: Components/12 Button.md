---
sidebar_position: 12
---

# Button Component

## **Button Component**

>

### **=>** Intro

- The Button component allows users to trigger actions similar to the button component in the web

- However, it's important to note that the button component has platform-specific rendering for iOS and Android

### **=>** Implementing an Example

- First, we need to import the Button component from React Native

- Inside the View component, I'll invoke the Button component

```jsx
import React from 'react'
import { View, Text, Image, ScrollView, Button } from 'react-native'
const logoImage = require('./assets/adaptive-icon.png')

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
      <Button />
    </View>
  )
}
```

- Unlike the HTML button element, the button component in React Native is a self-closing tag with no inner text or closing tag

- To specify the button text, we use a prop called `title`

- Let's set it it to "Press"

```jsx
import React from 'react'
import { View, Text, Image, ScrollView, Button } from 'react-native'
const logoImage = require('./assets/adaptive-icon.png')

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
      <Button title='Press' />
    </View>
  )
}
```

- If we save the file and take a look at the devices, we can see the button component rendered with iOS styles on iPhone 14 Pro and Android styles on the Android virtual device

### **=>** Handling the Press Event

- In React Native, the button component provides an `onPress` prop to handle the Press event

- Let's add onPress equal to an arrow function that logs to the console "Button pressed"

```jsx
import React from 'react'
import { View, Text, Image, ScrollView, Button } from 'react-native'
const logoImage = require('./assets/adaptive-icon.png')

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
      <Button
        title='Press'
        onPress={() => console.log('Button pressed')}
      />
    </View>
  )
}
```

- When we press the button, the event handler is triggered and we see the log message in the terminal

- The event handler can be more complex by defining a separate function and assigning it to the onPress event

### **=>** Customization with Props

- The third prop to highlight is the `color` prop, which allows easy customization of the button color

- Let's set color to "midnight blue"

```jsx
import React from 'react'
import { View, Text, Image, ScrollView, Button } from 'react-native'
const logoImage = require('./assets/adaptive-icon.png')

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
      <Button
        title='Press'
        onPress={() => console.log('Button pressed')}
        color='midnightblue'
      />
    </View>
  )
}
```

- Now, if we take a look at the UI, we can see the button with the new color applied

- Lastly, there is the `disabled` prop mainly used in form handling

```jsx
import React from 'react'
import { View, Text, Image, ScrollView, Button } from 'react-native'
const logoImage = require('./assets/adaptive-icon.png')

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
      <Button
        title='Press'
        onPress={() => console.log('Button pressed')}
        color='midnightblue'
        disabled
      />
    </View>
  )
}
```

- By adding the disabled prop and setting it to true by default, the button is styled as disabled and won't trigger any press events when pressed

- It's usually better to manage a state variable to control the disabled prop value instead of directly assigning true or false

```jsx
disabled = { state }
```

### **=>** Summary

- The `Button` component is used to trigger actions on press

- You can specify the `title` prop for the button text

- The `onPress` prop is used to handle the Press event

- The `color` prop is used to set the button color

- The `disabled` prop is used to disable the button
