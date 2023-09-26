---
sidebar_position: 63
---

# KeyboardAvoidingView

## **KeyboardAvoidingView**

>

### **=>** Intro

- In our last video, we built the UI for our login form, but as with most things in development, there is a common hiccup we run into when dealing with forms in React Native.
- Let me show that to you.

### **=>** Adding an Image

- First, let's make a small change in our UI.
- Above the username label, I'm going to render an image.
- Make sure to import the component from React Native.
- We're going to require the Adaptive icon from the assets folder:
- We will also add `style` is equal to `Styles.image`,
- and with the StyleSheet API, a new key `image` with a height of 200, width of 200, `alignSelf` set to `center`, and `marginBottom` of 50.

```jsx
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native'
import { useState } from 'react'

export default function App() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Image
          style={styles.image}
          source={require('./assets/adaptive-icon.png')}
        />
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder='Enter your username'
          value={username}
          onChangeText={setUsername}
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder='Enter your password'
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Button
          title='Login'
          onPress={() => {}}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f5f5f5',
  },
  form: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginBottom: 50,
  },
})
```

### **=>** The Keyboard Overlay Issue

- Now, if we jump back to our UI, we can see the form with the Adaptive icon image.
- If we tap on the password field on the iOS device and press `Command+Shift+K` to bring up the keyboard, do you notice something off?
- The keyboard completely overlays the input element; it's practically invisible.
- And let's be honest, this is not a great user experience.

### **=>** Using KeyboardAvoidingView

- Luckily, React Native has a solution for us: the `KeyboardAvoidingView` component.
- Let's import it from React Native.
- Now, replace our outermost `View` container with `KeyboardAvoidingView`, both opening and closing tags.
- On this component, we also set a prop `behavior` is equal to `padding`.
- This ensures that the component increases its padding at the bottom, matching the keyboard's height.

```jsx
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
} from 'react-native'
import { useState } from 'react'

export default function App() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <KeyboardAvoidingView
      behavior='padding'
      style={styles.container}>
      <View style={styles.form}>
        <Image
          style={styles.image}
          source={require('./assets/adaptive-icon.png')}
        />
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder='Enter your username'
          value={username}
          onChangeText={setUsername}
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder='Enter your password'
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Button
          title='Login'
          onPress={() => {}}
        />
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f5f5f5',
  },
  form: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginBottom: 50,
  },
})
```

### **=>** Addressing the Image Issue

- Let's take a look at our UI, tap on the password, and our form gracefully moves up, revealing the input element.
- Problem solved! Well, not entirely.
- I'm going to set the image height to 400.

```jsx
image: {
    width: 200,
    height: 400,
    alignSelf: 'center',
    marginBottom: 50,
  },
```

- Now, if we revisit our UI, you'll notice that the input is hiding again when the keyboard pops up.
- Once again, we have a fix, and that is a prop called `keyboardVerticalOffset`.
- Setting it to 100 usually does the trick.

```jsx
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
} from 'react-native'
import { useState } from 'react'

export default function App() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <KeyboardAvoidingView
      behavior='padding'
      keyboardVerticalOffset={100}
      style={styles.container}>
      <View style={styles.form}>
        <Image
          style={styles.image}
          source={require('./assets/adaptive-icon.png')}
        />
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder='Enter your username'
          value={username}
          onChangeText={setUsername}
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder='Enter your password'
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Button
          title='Login'
          onPress={() => {}}
        />
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f5f5f5',
  },
  form: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
  },
  image: {
    width: 200,
    height: 400,
    alignSelf: 'center',
    marginBottom: 50,
  },
})
```

### **=>** Handling Platform-Specific Offset

- But wait, there is a tiny problem for our Android users. When I tap on the password field, you can see there is this unnecessary space that is introduced by the offset.
- So what is the solution? Well, a platform-specific offset.
- Let's import the `Platform` module and adjust our offset to only apply to iOS devices:

```jsx
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Platform,
} from 'react-native'
import { useState } from 'react'

export default function App() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <KeyboardAvoidingView
      behavior='padding'
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
      style={styles.container}>
      <View style={styles.form}>
        <Image
          style={styles.image}
          source={require('./assets/adaptive-icon.png')}
        />
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder='Enter your username'
          value={username}
          onChangeText={setUsername}
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder='Enter your password'
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Button
          title='Login'
          onPress={() => {}}
        />
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f5f5f5',
  },
  form: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
  },
  image: {
    width: 200,
    height: 400,
    alignSelf: 'center',
    marginBottom: 50,
  },
})
```

- If we restart our application and take a look at our UI, we see that the UI is much better on both Android and iOS.

### **=>** Conclusion

- The `KeyboardAvoidingView` can be a tricky component in React Native; it might test your patience.
- But with the basics we have covered today, you're well positioned to deal with it.
