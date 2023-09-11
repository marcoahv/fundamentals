---
sidebar_position: 13
---

# Pressable Component

## **Pressable Component**

>

### **=>** Intro

- In the previous video, we learned about the Button component which allows us to trigger actions based on user interaction.

- However, there are times when we need to trigger actions on the press of other elements such as images or text.

- To address this requirement, React Native provides a component called `Pressable`

- `Pressable is a wrapper component that detects various stages of press interactions on its defined children`

### **=>** Implementing an example

- Let's switch back to VS Code and explore an example to better understand its usage.

- Behind the scenes, I have included an Image component and a Text component. Both of these are components we've already seen in previous videos.

```jsx
import React from 'react'
import { View, Button, Image, Text } from 'react-native'
const logoImage = require('./assets/adaptive-icon.png')

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
      <Button
        title='Press'
        onPress={() => console.log('Button pressed')}
        color='midnightblue'
      />
      <Image
        source={logoImage}
        style={{ width: 300, height: 300 }}
      />
      <Text>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui eligendi perspiciatis ipsam
        eaque modi, ducimus quae similique in at voluptatum cumque! Aliquam, quisquam id, placeat
        neque a fugiat ea quam odio, repudiandae atque iste. Nulla at quaerat exercitationem
        blanditiis aspernatur recusandae non laudantium omnis? Accusamus eaque mollitia optio? Illo,
        aliquam! Repellat praesentium cum, earum iste iure ipsa accusamus, expedita, temporibus
        optio corporis eius fugiat minus consequuntur aperiam est ullam nobis rerum. Autem quibusdam
        unde molestiae? Similique repudiandae dolorum aut nobis hic aliquid doloribus obcaecati
        beatae, fugit temporibus! Incidunt sint at ut id consectetur necessitatibus, natus possimus
        sequi adipisci dignissimos minima accusantium ea ducimus culpa libero assumenda! Hic
        doloremque alias placeat inventore quibusdam vitae neque facere
      </Text>
    </View>
  )
}
```

- If we take a look at the two devices, we have the Button from the last video, the Image component, and the long Text component.

### **=>** Getting Started with Pressable Component

To begin:

1. Import the Pressable component from React Native.

2. Wrap the desired elements with Pressable to detect press interactions. In our example, we'll wrap both the Image and Text components. So, the Image component is now a child of Pressable, and so is the Text component.

```jsx
import React from 'react'
import { View, Button, Image, Text, Pressable } from 'react-native'
const logoImage = require('./assets/adaptive-icon.png')

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
      <Button
        title='Press'
        onPress={() => console.log('Button pressed')}
        color='midnightblue'
      />
      <Pressable>
        <Image
          source={logoImage}
          style={{ width: 300, height: 300 }}
        />{' '}
      </Pressable>
      <Pressable>
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui eligendi perspiciatis ipsam
          eaque modi, ducimus quae similique in at voluptatum cumque! Aliquam, quisquam id, placeat
          neque a fugiat ea quam odio, repudiandae atque iste. Nulla at quaerat exercitationem
          blanditiis aspernatur recusandae non laudantium omnis? Accusamus eaque mollitia optio?
          Illo, aliquam! Repellat praesentium cum, earum iste iure ipsa accusamus, expedita,
          temporibus optio corporis eius fugiat minus consequuntur aperiam est ullam nobis rerum.
          Autem quibusdam unde molestiae? Similique repudiandae dolorum aut nobis hic aliquid
          doloribus obcaecati beatae, fugit temporibus! Incidunt sint at ut id consectetur
          necessitatibus, natus possimus sequi adipisci dignissimos minima accusantium ea ducimus
          culpa libero assumenda! Hic doloremque alias placeat inventore quibusdam vitae neque
          facere
        </Text>
      </Pressable>
    </View>
  )
}
```

- Similar to the Button component, the Pressable component accepts the `onPress` prop to handle the press event.

- Let's add it with an event handler:

```jsx
import React from 'react'
import { View, Button, Image, Text, Pressable } from 'react-native'
const logoImage = require('./assets/adaptive-icon.png')

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
      <Button
        title='Press'
        onPress={() => console.log('Button pressed')}
        color='midnightblue'
      />

      <Pressable onPress={() => console.log('Image pressed')}>
        <Image
          source={logoImage}
          style={{ width: 300, height: 300 }}
        />
      </Pressable>
      <Pressable onPress={() => console.log('Text pressed')}>
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui eligendi perspiciatis ipsam
          eaque modi, ducimus quae similique in at voluptatum cumque! Aliquam, quisquam id, placeat
          neque a fugiat ea quam odio, repudiandae atque iste. Nulla at quaerat exercitationem
          blanditiis aspernatur recusandae non laudantium omnis? Accusamus eaque mollitia optio?
          Illo, aliquam! Repellat praesentium cum, earum iste iure ipsa accusamus, expedita,
          temporibus optio corporis eius fugiat minus consequuntur aperiam est ullam nobis rerum.
          Autem quibusdam unde molestiae? Similique repudiandae dolorum aut nobis hic aliquid
          doloribus obcaecati beatae, fugit temporibus! Incidunt sint at ut id consectetur
          necessitatibus, natus possimus sequi adipisci dignissimos minima accusantium ea ducimus
          culpa libero assumenda! Hic doloremque alias placeat inventore quibusdam vitae neque
          facere
        </Text>
      </Pressable>
    </View>
  )
}
```

- Now, let's return to the simulator and verify the code. When we press the Text component, we will see the corresponding log statement.

### **=>** Custom Button using Pressable Component

- If you feel that the native Button component doesn't meet your app's requirements, you can create a custom button using the Pressable component.

- Just a heads up in case you want to build one from scratch.

### **=>** Other Events Supported by Pressable Component

- In addition to `onPress` , the Pressable component supports several other events you can listen to:

- `onPressIn` is called when a press is activated.

- `onLongPress` is triggered when a press is held for longer than 500 milliseconds.

- `onPressOut` is called when the press gesture is deactivated.

  Here is a great visualization from the React Native Docs:
  ![Pressable Events Visualization](https://reactnative.dev/docs/assets/d_pressable_pressing.svg)

  After triggering `onPressIn` , the user removes their finger, triggering `onPressOut` , which is followed by `onPress` .

  However, if the user keeps their finger pressed for more than 500 milliseconds after `onPressIn` , `onLongPress` is triggered followed by `onPressOut` .

  As an exercise, I encourage you to add these props to the Pressable component on the Image and handle the events to ensure they trigger as expected. Let me know in the comment section if they all work as expected.
