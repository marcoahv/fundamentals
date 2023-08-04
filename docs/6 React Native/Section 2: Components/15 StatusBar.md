---
sidebar_position: 15
---

# StatusBar component

- Welcome back for our next component. Let's take a look at the status part component in React Native.

- The status bar component provides control over the application's status bar, which is the area typically located at the top of the screen.

- The status bar displays various information such as the current time, Wi-Fi and network status, battery level, and other status icons.

- Now, our focus will be on the top section of the two devices. You can see they are transparent to begin with.

### Code Example

- let's now import the statusBar component

- and within the view component invoke status bar

```jsx
import React from 'react'
import { View, StatusBar } from 'react-native'

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
      <StatusBar />
    </View>
  )
}
```

- When we save the file, there is no visible change in iOS, but in Android, it adds a status bar component with a dark background.

### Modifying Appearance

- Let's now modify its appearance by adding some props:

  - Set the background color using the backgroundColor prop. For example, backgroundColor: 'lightgreen' (specific to Android).

```jsx
import React from 'react'
import { View, StatusBar } from 'react-native'

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
      <StatusBar backgroundColor='lightgreen' />
    </View>
  )
}
```

- Please note that this prop is specific to Android. The iOS simulator has no background color, while the Android device shows a green background.

- Although we can't change the background color on iOS, we can adjust the text color on both platforms.

- The prop to control the text color is called` barStyle` , and its default value is `default` .

```jsx
import React from 'react'
import { View, StatusBar } from 'react-native'

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
      <StatusBar backgroundColor='lightgreen' barStyle='default' />
    </View>
  )
}
```

- This corresponds to dark text on iOS and light text on Android.

- Currently, we see black text on iOS and white text on Android.

- We can change the value of barStyle to `dark-content` , which results in black text on both platforms,

- or `light-content` , which gives us white text on both platforms.

```jsx
import React from 'react'
import { View, StatusBar } from 'react-native'

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
      <StatusBar backgroundColor='lightgreen' barStyle='dark-content' />
    </View>
  )
}
```

- Depending on your application's background color, choose the appropriate value to ensure good visibility and contrast.

### Visibility and Hidden Prop

- Speaking of visibility, you can use the `hidden` prop to hide the status bar.

```jsx
import React from 'react'
import { View, StatusBar } from 'react-native'

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
      <StatusBar backgroundColor='lightgreen' barStyle='dark-content' hidden />
    </View>
  )
}
```

- Add the hidden prop, and you'll notice that the status bar is now hidden.

- As an exercise, I encourage you to try toggling the visibility of the status bar by using a state variable and a button click event, similar to how you control the visibility of a modal.

```jsx
import React from 'react'
import { useState } from 'react'
import { View, StatusBar, Button, Text } from 'react-native'

export default function App() {
  const [isStatusBarHidden, setIsStatusBarHidden] = useState(false)
  return (
    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
      <StatusBar backgroundColor='lightgreen' barStyle='dark-content' hidden={isStatusBarHidden} />
      <Button title='Hidden' onPress={() => setIsStatusBarHidden(true)} color='midnightblue' />
      <Text> </Text>
      <Button title='Visible' onPress={() => setIsStatusBarHidden(false)} color='midnightblue' />
    </View>
  )
}
```

### Summary

- To summarize, the status bar component allows you to control the application's status bar.

- You can adjust the background color on Android using the backgroundColor prop,

- change the text color using the barStyle prop,

- and toggle visibility using the hidden prop.
