---
sidebar_position: 10
---

# Image Component

- Welcome back! The next core component we have is the image component.

- The image component enables us to display various types of images including static images, network images, and images from the local disk such as the camera roll.

- React Native seamlessly translates the image component to platform-specific counterparts: UIImage view for iOS, ImageView for Android, and the image tag for the web.

- Let's return to VS Code and understand more.

#### Rendering a Static Image

- To begin, let's render a static image located in the assets folder.

- Start by importing the image component from react native.

- Next, import the image from the assets folder.

- The const, let's call it logo image, and we use the required function from './assets/adaptive-icon.png'.

- In the JSX code, invoke the image component and specify the source prop so image which is self-closing and we specify the source prop equal to logo image.

```jsx
import React from 'react'
import { View, Text, Image } from 'react-native'
const logoImage = require('./assets/adaptive-icon.png')

function App() {
  return (
    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
      <Text>
        <Text style={{ color: 'white' }}>Hello</Text> World
      </Text>
      <Image source={logoImage} />
    </View>
  )
}

export default App
```

- If we save the file and check both the devices, we'll see that the image renders but appears too large.

- To fix this, let's add a width and height to the image, so style prop with 300 and height 300.

```jsx
import React from 'react'
import { View, Text, Image } from 'react-native'
const logoImage = require('./assets/adaptive-icon.png')

function App() {
  return (
    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
      <Text>
        <Text style={{ color: 'white' }}>Hello</Text> World
      </Text>
      <Image source={logoImage} style={{ width: 300, height: 300 }} />
    </View>
  )
}

export default App
```

- Save the file and now we can see the image within the view much better.

#### Loading a Network Image

- Next, let's load an image by making a network request.

- Duplicate the line with the image component and change the source prop to a remote image URI.

- A convenient place to find placeholder images is picsum.photos.

- Scroll down and find the URL for a square image. (`https://picsum/photos/200`)

- Copy and paste the URL as a string into the source attribute.

- Let's adjust the size to 300 by 300, (`https://picsum/photos/300`)

```jsx
import React from 'react'
import { View, Text, Image } from 'react-native'
const logoImage = require('./assets/adaptive-icon.png')

function App() {
  return (
    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
      <Text>
        <Text style={{ color: 'white' }}>Hello</Text> World
      </Text>
      <Image source={logoImage} style={{ width: 300, height: 300 }} />
      <Image source={'https://picsum.photos/200'} style={{ width: 300, height: 300 }} />
    </View>
  )
}

export default App
```

- When we save the file, we encounter a warning.

- The warning is because the source prop expects a number but we have provided a string.

- When using logo image as a value we are actually passing in a number that references the image in the assets folder.

- In order to specify a remote image as the source, we need to convert the value into an object and include a key called uri.

- The string is set as the value for uri.

```jsx
import React from 'react'
import { View, Text, Image } from 'react-native'
const logoImage = require('./assets/adaptive-icon.png')

function App() {
  return (
    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
      <Text>
        <Text style={{ color: 'white' }}>Hello</Text> World
      </Text>
      <Image source={logoImage} style={{ width: 300, height: 300 }} />
      <Image source={{ uri: 'https://picsum.photos/200' }} style={{ width: 300, height: 300 }} />
    </View>
  )
}

export default App
```

- If we go back to our screens, we'll see the image being rendered.

- It's very important to note that `specifying width and height is mandatory for Network images.`

- For static images, React Native can infer the dimensions from the file data.

#### Setting a Background Image

- Finally, let's explore setting a background image for a view.

- React Native provides a second image component called `imageBackground` for this purpose.

- Import it at the top and then comment out the two image components in the JSX.

- Instead, add the image background component opening and closing tags.

- We pass the source attribute is equal to `logoImage` which is the Adaptive icon.

- And then ,as children for the image background component, Let's add a text component that says IMAGE TEXT.

- Save the file and we can observe that the image appears in the background with the text overlaid on top.

```jsx
import React from 'react'
import { View, Text, Image, ImageBackground } from 'react-native'
const logoImage = require('./assets/adaptive-icon.png')

function App() {
  return (
    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
      <Text>
        <Text style={{ color: 'white' }}>Hello</Text> World
      </Text>

      {/* <Image source={logoImage} style={{ width: 300, height: 300 }} />
      <Image source={{ uri: 'https://picsum.photos/200' }} style={{ width: 300, height: 300 }} /> */}

      <ImageBackground source={logoImage}>
        <Text>IMAGE TEXT</Text>
      </ImageBackground>
    </View>
  )
}

export default App
```

- If you want the image to occupy the entire available space, rely on the flex property.

- Style Flex set to 1.

```jsx
import React from 'react'
import { View, Text, Image, ImageBackground } from 'react-native'
const logoImage = require('./assets/adaptive-icon.png')

function App() {
  return (
    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
      <Text>
        <Text style={{ color: 'white' }}>Hello</Text> World
      </Text>

      {/* <Image source={logoImage} style={{ width: 300, height: 300 }} />
      <Image source={{ uri: 'https://picsum.photos/200' }} style={{ width: 300, height: 300 }} /> */}

      <ImageBackground source={logoImage} style={{ flex: 1 }}>
        <Text>IMAGE TEXT</Text>
      </ImageBackground>
    </View>
  )
}

export default App
```

- We see the image now takes up the available space.

- Let's not worry too much about centering the text for now, as I mentioned in every video we will cover styling and layouts in the upcoming sections.

#### Summary

- In summary, the image component is utilized to render images in React Native.

- You can display static images, network images, and even local images from the camera roll (although that topic is beyond the scope of this video).

- To render an image, import the image component from React Native and specify the source prop.

- For remote images, ensure to use the URI option.

- To render a background image, utilize the image background component nesting the desired content inside.
