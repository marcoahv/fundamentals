---
sidebar_position: 17
---

# Alert component

- The Alert component in React Native serves more as an API than a typical component. Instead of rendering it as part of JSX, you invoke methods that generate UI elements.

- When using the Alert component, you can launch another dialog with a specified title and message.

- Additionally, you have the option to include a list of buttons.

### Usage Example

1. Import the Alert component from React Native.

2. Define a button within the View component in the JSX of the App component.

3. Import the Button component.

4. Add a title to the Button component, called "alert", and an onPress prop.

5. The onPress prop should be an arrow function where we invoke `Alert.alert()` , passing a string ("invalid data") as the first parameter.

```jsx
import React from 'react'
import { View, Alert, Button } from 'react-native'

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
      <Button title='Alert' onPress={() => Alert.alert('Invalid data!')} />
    </View>
  )
}
```

7. Upon pressing the button, the alert dialog will be displayed with the specified `title` ("invalid data").

### Adding a massage

8. Optionally, you can specify a `message` as the second parameter in the `Alert.alert()` function.

9. To display multiple alerts, duplicate the button and change the title and message accordingly.

```jsx
import React from 'react'
import { View, Alert, Button } from 'react-native'

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
      <Button title='Alert' onPress={() => Alert.alert('Invalid data!')} />
      <Button title='Alert 2' onPress={() => Alert.alert('Invalid data!', 'DOB Incorrect')} />
    </View>
  )
}
```

### Controlling the buttons

- on iOS you can specify any number of buttons while on Android the limit is three

10. To control the buttons shown in the alert, you can pass an array as the third parameter in the `Alert.alert()` function.

11. Within the array, specify objects with a "text" property (e.g., "cancel") and a corresponding "onPress" handler.

12. The "onPress" handler can be defined as an arrow function that performs a desired action (e.g., logging to the console).

```jsx
import React from 'react'
import { View, Alert, Button } from 'react-native'

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
      <Button title='Alert' onPress={() => Alert.alert('Invalid data!')} />
      <Button title='Alert 2' onPress={() => Alert.alert('Invalid data!', 'DOB Incorrect')} />
      <Button
        title='Alert 3'
        onPress={() =>
          Alert.alert('Invalid data!', 'DOB Incorrect', [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel pressed'),
            },
            {
              text: 'OK',
              onPress: () => console.log('OK pressed'),
            },
          ])
        }
      />
    </View>
  )
}
```

### Available APIs

- Alert is just one of the many available apis in react native

13. The appearance of the alert dialog may vary slightly between iOS and Android platforms.

14. For a comprehensive list of available APIs in React Native, refer to the documentation on development APIs.
