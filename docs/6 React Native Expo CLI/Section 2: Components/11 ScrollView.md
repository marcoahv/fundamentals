---
sidebar_position: 11
---

# ScrollView Component

## **ScrollView Component**

>

### **=>** Intro

- View Component:

  The View component is similar to a div tag in web development. However, it does not scroll automatically. It is used to define the structure and layout of the content.

- Image Component:

  The Image component is used to display images in React Native. It can be static or dynamic.

To demonstrate the difference between the web and React Native, we will use the View and Image components.

### **=>** Implementing an Example

- Keep the outer View component and one Image component from the previous video.

- Keep the static image as it is.

```jsx
import React from 'react'
import { View, Text, Image, ImageBackground } from 'react-native'
const logoImage = require('./assets/adaptive-icon.png')

function App() {
  return (
    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
      <Image
        source={logoImage}
        style={{ width: 300, height: 300 }}
      />
    </View>
  )
}

export default App
```

#### **=>** Adding Text Component

- Add a lengthy Text component right after the Image component to emphasize the point.

- The Text component contains some lorem ipsum text.

```jsx
import React from 'react'
import { View, Text, Image, ImageBackground } from 'react-native'
const logoImage = require('./assets/adaptive-icon.png')

function App() {
  return (
    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
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
        doloremque alias placeat inventore quibusdam vitae neque facere, tempora excepturi saepe
        ipsa numquam, ratione aspernatur tempore nisi incidunt distinctio? Doloremque possimus,
        accusamus recusandae iste, ut doloribus sed dolores itaque, quaerat nostrum minima voluptas
        perferendis corporis suscipit iusto mollitia deserunt. Commodi minima totam iure?
      </Text>
    </View>
  )
}

export default App
```

#### **=>** Duplicating Image Component

- Duplicate the Image component by copying and pasting it.

```jsx
import React from 'react'
import { View, Text, Image, ImageBackground } from 'react-native'
const logoImage = require('./assets/adaptive-icon.png')

function App() {
  return (
    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
      <Image
        source={logoImage}
        style={{ width: 300, height: 300 }}
      />
      <Text>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia id ipsa veritatis, nemo
        ad reiciendis blanditiis consequuntur fugit officia saepe tenetur doloribus illo sed ipsam
        natus, qui temporibus unde ratione, sapiente in tempore debitis delectus nisi harum!
        Voluptate voluptatem nulla esse qui similique aspernatur quam culpa cumque quia
        voluptatibus. Quis, quod ex optio tenetur deserunt saepe officiis excepturi. Maiores
        quisquam, corrupti hic consectetur animi voluptatum libero itaque nisi eaque esse laudantium
        et nemo fuga laborum eligendi quasi accusamus dolor iure eos quibusdam recusandae. At
        explicabo perferendis laudantium, tempore dolorum quos beatae voluptatum a tempora, minus
        eius eligendi impedit blanditiis nulla!
      </Text>
      <Image
        source={logoImage}
        style={{ width: 300, height: 300 }}
      />
    </View>
  )
}

export default App
```

#### **=>** Viewing the Content

- After saving the file and returning to the simulator or emulator, we will notice that the first image is followed by the long text and then the image again, both in iOS and Android.

- However, there is an issue - we cannot scroll down to see the full image. Clicking and dragging does not scroll.

### **=>** Introducing ScrollView

React Native provides the ScrollView component specifically for scrolling purposes.

- Import the ScrollView component from react native.

- Replace the View component with ScrollView.

```jsx
import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
const logoImage = require('./assets/adaptive-icon.png')

function App() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
      <Image
      source={logoImage}
      style={{ width: 300, height: 300 }}
      />
      <Text>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia id ipsa veritatis, nemo
        ad reiciendis blanditiis consequuntur fugit officia saepe tenetur doloribus illo sed ipsam
        natus, qui temporibus unde ratione, sapiente in tempore debitis delectus nisi harum!
        Voluptate voluptatem nulla esse qui similique aspernatur quam culpa cumque quia
        voluptatibus. Quis, quod ex optio tenetur deserunt saepe officiis excepturi. Maiores
        quisquam, corrupti hic consectetur animi voluptatum libero itaque nisi eaque esse laudantium
        et nemo fuga laborum eligendi quasi accusamus dolor iure eos quibusdam recusandae. At
        explicabo perferendis laudantium, tempore dolorum quos beatae voluptatum a tempora, minus
        eius eligendi impedit blanditiis nulla!
      </Text>
      <Image source={logoImage} style={{ width: 300, height: 300 }} />
    </ScrollView>
  )
```

#### **=>** Resolving Padding Issue

- The ScrollView component has padding by default, which causes the issue of not being able to fully see the end of the second image.

- To address this, nest the ScrollView within the View component.

- This way, the ScrollView is bounded by the height of its parent, representing the entire available space with 60 pixels padding.

```jsx
import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
const logoImage = require('./assets/adaptive-icon.png')

function App() {
  return (
    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
      <ScrollView>
        <Image
          source={logoImage}
          style={{ width: 300, height: 300 }}
        />
        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia id ipsa veritatis, nemo
          ad reiciendis blanditiis consequuntur fugit officia saepe tenetur doloribus illo sed ipsam
          natus, qui temporibus unde ratione, sapiente in tempore debitis delectus nisi harum!
          Voluptate voluptatem nulla esse qui similique aspernatur quam culpa cumque quia
          voluptatibus. Quis, quod ex optio tenetur deserunt saepe officiis excepturi. Maiores
          quisquam, corrupti hic consectetur animi voluptatum libero itaque nisi eaque esse
          laudantium et nemo fuga laborum eligendi quasi accusamus dolor iure eos quibusdam
          recusandae. At explicabo perferendis laudantium, tempore dolorum quos beatae voluptatum a
          tempora, minus eius eligendi impedit blanditiis nulla!
        </Text>
        <Image
          source={logoImage}
          style={{ width: 300, height: 300 }}
        />
      </ScrollView>
    </View>
  )
}

export default App
```

- After saving the file, the content becomes scrollable.

- We can now scroll down to the end of the second image successfully.

### **=>** Summary

- unlike the div tag in web development, the View component in React Native doesn't scroll by default.

- For scrollable content, you should utilize the ScrollView component and ensure it has a bounded height.
