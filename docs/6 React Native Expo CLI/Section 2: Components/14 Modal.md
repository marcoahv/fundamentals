---
sidebar_position: 14
---

# Modal Component

## **Modal Component**

>

### **=>** Intro

- Modal is a screen that overlays the app content to provide important information or prompt the user for a decision.

- Since they are purposefully interruptive, make sure you use them only when necessary.

### **=>** Show and Hide Modal on Button Press

To begin:

1. Import the Modal component from React Native.

```jsx
import React from 'react'
import { View, Button, Text, Modal } from 'react-native'

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

2. Just before the closing View tag, define a Modal element.

   - The Modal opening and closing tags act as a container, and within it, we define a View that represents the content to be presented.

   - Duplicate the View component from above and modify the background color to light blue.

   - Inside the View component, add a Text component with the text "Modal content".

   - Add a button labeled "Close" with the color midnight blue.

```jsx
import React from 'react'
import { View, Button, Text, Modal } from 'react-native'

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
      <Button
        title='Press'
        onPress={() => console.log('Button pressed')}
        color='midnightblue'
      />
      <Modal>
        <View style={{ flex: 1, backgroundColor: 'lightblue', padding: 60 }}>
          <Text>Modal content</Text>
          <Button
            title='Close'
            color='midnightblue'
          />
        </View>
      </Modal>
    </View>
  )
}
```

### **=>** Controlling Modal Visibility

- By default, the Modal is always visible. We need to control its visibility based on user interaction.

- To achieve this, we require a state variable. Import the `useState` hook from React

- and within the App component, create the state variable `isModalVisible` with a setter function `setIsModalVisible` , and the default value for the state variable is `false` .

```jsx
import React from 'react'
import { useState } from 'react'
import { View, Button, Text, Modal } from 'react-native'

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false)

  return (
    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
      <Button
        title='Press'
        onPress={() => console.log('Button pressed')}
        color='midnightblue'
      />
      <Modal>
        <View style={{ flex: 1, backgroundColor: 'lightblue', padding: 60 }}>
          <Text>Modal content</Text>
          <Button
            title='Close'
            color='midnightblue'
          />
        </View>
      </Modal>
    </View>
  )
}
```

- Bind this variable to the `visible` prop of the Modal component, so `visible` is equal to `isModalVisible` . Since it is `false` by default, the Modal is initially hidden.

```jsx
import React from 'react'
import { useState } from 'react'
import { View, Button, Text, Modal } from 'react-native'

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false)

  return (
    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
      <Button
        title='Press'
        onPress={() => console.log('Button pressed')}
        color='midnightblue'
      />
      <Modal visible={isModalVisible}>
        <View style={{ flex: 1, backgroundColor: 'lightblue', padding: 60 }}>
          <Text>Modal content</Text>
          <Button
            title='Close'
            color='midnightblue'
          />
        </View>
      </Modal>
    </View>
  )
}
```

- To toggle the visibility of the Modal, modify the `onPress` event of the button component to call the setter function `setIsModalVisible` passing in a value of `true` .

```jsx
import React from 'react'
import { useState } from 'react'
import { View, Button, Text, Modal } from 'react-native'

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false)

  return (
    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
      <Button
        title='Press'
        onPress={() => setIsModalVisible(true)}
        color='midnightblue'
      />
      <Modal visible={isModalVisible}>
        <View style={{ flex: 1, backgroundColor: 'lightblue', padding: 60 }}>
          <Text>Modal content</Text>
          <Button
            title='Close'
            color='midnightblue'
          />
        </View>
      </Modal>
    </View>
  )
}
```

- Add another event handler to the button within the Modal component to close it. So, `onPress` calls the function `setIsModalVisible` and we pass in `false` to hide the Modal.

```jsx
import React from 'react'
import { useState } from 'react'
import { View, Button, Text, Modal } from 'react-native'

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false)

  return (
    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
      <Button
        title='Press'
        onPress={() => setIsModalVisible(true)}
        color='midnightblue'
      />
      <Modal visible={isModalVisible}>
        <View style={{ flex: 1, backgroundColor: 'lightblue', padding: 60 }}>
          <Text>Modal content</Text>
          <Button
            title='Close'
            onPress={() => setIsModalVisible(false)}
            color='midnightblue'
          />
        </View>
      </Modal>
    </View>
  )
}
```

- In the simulator, we have a view with a plum background and the "Press" button.

- Click the button, and the Modal will be displayed.

- Click the button within the Modal, and the Modal will be hidden.

- Pretty straightforward usage.

### **=>** Additional Props for Modal

- It is recommended to include another prop called `onRequestClose` where we call `setIsModalVisible` passing in `false` .

```jsx
import React from 'react'
import { useState } from 'react'
import { View, Button, Text, Modal } from 'react-native'

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false)

  return (
    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
      <Button
        title='Press'
        onPress={() => setIsModalVisible(true)}
        color='midnightblue'
      />
      <Modal
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}>
        <View style={{ flex: 1, backgroundColor: 'lightblue', padding: 60 }}>
          <Text>Modal content</Text>
          <Button
            title='Close'
            onPress={() => setIsModalVisible(false)}
            color='midnightblue'
          />
        </View>
      </Modal>
    </View>
  )
}
```

- The `onRequestClose` handler is triggered when the user presses the back button on Android or dismisses the Modal with a gesture on iOS.

- In either of the two scenarios, we want to hide the Modal.

### **=>** Animation and Presentation Style Props

- Let's explore a few more props related to Modals.

- By default, the Modal abruptly appears and disappears because the `animationType` prop is set to `none` .

```jsx
import React from 'react'
import { useState } from 'react'
import { View, Button, Text, Modal } from 'react-native'

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false)

  return (
    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
      <Button
        title='Press'
        onPress={() => setIsModalVisible(true)}
        color='midnightblue'
      />
      <Modal
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
        animationType='none'>
        <View style={{ flex: 1, backgroundColor: 'lightblue', padding: 60 }}>
          <Text>Modal content</Text>
          <Button
            title='Close'
            onPress={() => setIsModalVisible(false)}
            color='midnightblue'
          />
        </View>
      </Modal>
    </View>
  )
}
```

- Set the prop to `slide` , and the Modal will slide in from the bottom.

```jsx
import React from 'react'
import { useState } from 'react'
import { View, Button, Text, Modal } from 'react-native'

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false)

  return (
    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
      <Button
        title='Press'
        onPress={() => setIsModalVisible(true)}
        color='midnightblue'
      />
      <Modal
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
        animationType='slide'>
        <View style={{ flex: 1, backgroundColor: 'lightblue', padding: 60 }}>
          <Text>Modal content</Text>
          <Button
            title='Close'
            onPress={() => setIsModalVisible(false)}
            color='midnightblue'
          />
        </View>
      </Modal>
    </View>
  )
}
```

- Alternatively, set the value to `fade` , and the Modal will fade into view.

```jsx
import React from 'react'
import { useState } from 'react'
import { View, Button, Text, Modal } from 'react-native'

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false)

  return (
    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
      <Button
        title='Press'
        onPress={() => setIsModalVisible(true)}
        color='midnightblue'
      />
      <Modal
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
        animationType='fade'>
        <View style={{ flex: 1, backgroundColor: 'lightblue', padding: 60 }}>
          <Text>Modal content</Text>
          <Button
            title='Close'
            onPress={() => setIsModalVisible(false)}
            color='midnightblue'
          />
        </View>
      </Modal>
    </View>
  )
}
```

- There is a prop called `presentationStyle` , which is set to `fullScreen` by default.

```jsx
import React from 'react'
import { useState } from 'react'
import { View, Button, Text, Modal } from 'react-native'

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false)

  return (
    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
      <Button
        title='Press'
        onPress={() => setIsModalVisible(true)}
        color='midnightblue'
      />
      <Modal
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
        animationType='fade'
        presentationStyle='fullScreen'>
        <View style={{ flex: 1, backgroundColor: 'lightblue', padding: 60 }}>
          <Text>Modal content</Text>
          <Button
            title='Close'
            onPress={() => setIsModalVisible(false)}
            color='midnightblue'
          />
        </View>
      </Modal>
    </View>
  )
}
```

- You can change this to either `formSheet` or `pageSheet` to alter the appearance. For now, set it to `pageSheet` and change back the `animationType` to `slide` as it makes for a much better effect.

```jsx
import React from 'react'
import { useState } from 'react'
import { View, Button, Text, Modal } from 'react-native'

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false)

  return (
    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
      <Button
        title='Press'
        onPress={() => setIsModalVisible(true)}
        color='midnightblue'
      />
      <Modal
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
        animationType='slide'
        presentationStyle='pageSheet'>
        <View style={{ flex: 1, backgroundColor: 'lightblue', padding: 60 }}>
          <Text>Modal content</Text>
          <Button
            title='Close'
            onPress={() => setIsModalVisible(false)}
            color='midnightblue'
          />
        </View>
      </Modal>
    </View>
  )
}
```

- The `presentationStyle` prop only affects iOS and `not Android`.

### **=>** Exercise: Implementing Modal Props

- As an exercise, open an iPad simulator and toggle between `formSheet` and `pageSheet` values for the `presentationStyle` prop.

- Let me know in the comment section if you were successful in implementing it.

### **=>** Summary

To summarize what we have learned:

- The Modal component in React Native allows us to present important information or prompt user decisions.

- You can define a Modal using the Modal component with the desired content nested as its children.

- The visibility of the Modal can be controlled using the `visible` prop, and the `onRequestClose` callback is used to close the Modal when it is dismissed through hardware interaction.

- We can use the `animationType` prop to add fancier appearance transitions to the Modal, and the `presentationStyle` prop in iOS to modify its presentation.
