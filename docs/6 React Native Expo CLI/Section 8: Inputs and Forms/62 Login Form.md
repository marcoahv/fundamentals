---
sidebar_position: 62
---

# Login Form

## **Login Form**

>

### **=>** Intro

- Welcome back! In our previous videos, we have covered inputs in React Native.

- Now, let's talk about forms.

- We're going to be learning this through a series of four videos where we will be building a login form from scratch.

- In this particular video, our focus will be on building the user interface for our login form.

- This means we'll be writing the JSX and styling it.

### **=>** Setting Up the Component

- I have reset the app component to minimal code.

- We have imports for `View`, `Text`, `TextInput`, `Button`, and `StyleSheet`. The JSX is empty.

```jsx
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'

export default function App() {
  return ()
}

const styles = StyleSheet.create({})

```

- Now, let's add the elements for the login form.

### **=>** Creating the Main Container

- First things first, we'll begin with a `View` component.

- Think of this as our main container, and of course, we're going to apply some container styles to make it look neat.

- `style` is equal to `styles.container`, and we're going to define the container styles: `flex` set to `1`, `justifyContent` set to `center`, a bit of padding in the horizontal direction, and a slightly gray background color.

```jsx
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'

export default function App() {
  return <View style={styles.container}></View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f5f5f5',
  },
})
```

### **=>** Form Container

- Next, inside this container, let's nest another `View` component.

- This will act as our form container, and you guessed it, we're going to style it using form styles.

- `style` is set to `styles.form`, and we're going to specify a white background color, padding, border radius, shadow color, shadow offset, shadow opacity, shadow radius, and elevation. This is specifically for Android.

```jsx
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.form}></View>
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
})
```

### **=>** Adding Labels and Inputs

- Now it's time to add our labels and inputs. We'll need one for username and one for the password.

- For our inputs, let's add a placeholder to guide our users: "Enter your username" and "Enter your password."

- For the password input, always use `secureTextEntry` to keep passwords hidden.

```jsx
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text>Username</Text>
        <TextInput placeholder='Enter your username' />
        <Text>Password</Text>
        <TextInput
          placeholder='Enter your password'
          secureTextEntry
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
})
```

- Let's style these components: For the label, `style` is equal to `styles.label`, and for the text input, `style` is equal to `styles.input`.

```jsx
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder='Enter your username'
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder='Enter your password'
          secureTextEntry
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
})
```

- For the label, we set font size, margin bottom, font weight,

- and for the input, we define height, border color, border width, margin bottom, padding, and border radius.

```jsx
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder='Enter your username'
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder='Enter your password'
          secureTextEntry
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
})
```

### **=>** Adding a Submit Button

- Moving on, we will add a button that users can click to submit this form data.

- We will title it "Login," and as for the `onPress` prop, we will leave it empty for now. We'll tackle that in an upcoming video.

```jsx
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder='Enter your username'
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder='Enter your password'
          secureTextEntry
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
})
```

### **=>** Managing Form State

- If we save the file and take a look at the UI, we can see our login form with username, password, and the login button.

- For our final step, we're going to manage the form state using the `useState` hook.

- Let's import it at the top.

```jsx
import { useState } from 'react'
```

- We'll then create two state variables:

- `username` (empty string as the default value)

- and `password` (empty string as the default value).

```jsx
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import { useState } from 'react'

export default function App() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder='Enter your username'
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder='Enter your password'
          secureTextEntry
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
})
```

- On the text inputs, we add `value` is equal to `username` and `onChangeText` is equal to `setUsername`.

- Similarly, `value` is equal to `password`, and `onChangeText` is equal to `setPassword`.

```jsx
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import { useState } from 'react'

export default function App() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <View style={styles.container}>
      <View style={styles.form}>
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
})
```

- We can now manage our form state seamlessly.
