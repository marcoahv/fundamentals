---
sidebar_position: 64
---

# Form Validation

## **Form Validation**

>

### **=>** Intro

- In this video, Let's dive into form validation.

- We will make sure our email and password fields have mandatory field validation.

### **=>** to display error messages

- We need a way to display error messages to our users.

- Let's start by creating a new state variable to store these messages.

- We're going to call this `errors`, the function `setErrors`, and its initial value is an empty object.

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
  const [errors, setErrors] = useState({})

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

- This object will help us keep track of any errors that might pop up.

### **=>** Define a Validation Function

- Now, let's define a function called `validateForm`.

- This function will be the heart of our validation logic.

- It will check the fields and either populate our `errors` object with messages or return true if everything is valid.

- Similarly, one for the password.

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
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    let errors = {}
    if (!username) errors.username = 'Username is require'
    if (!password) errors.password = 'Password is require'
  }

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

- We will then call `setErrors` passing in the `errors` object.

```javascript
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
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    let errors = {}
    if (!username) errors.username = 'Username is require'
    if (!password) errors.password = 'Password is require'

    setErrors(errors)

    return Object.keys(errors).length === 0
  }

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

- So, if the `errors` object doesn't have a key for username or password, we don't have any error messages, and our form is valid.

### **=>** Displaying Error Messages

- But if you do have errors, we need to display them.

- In our JSX, let's add error messages using a text component right after the text input.

- We're going to check if a username error is present and render that message. If there is no error, we return null.

- We'll also style this using `Styles.errorText`, which we will define shortly.

- I'm going to copy this, paste it after the other text input, and change occurrences of "username" to "password".

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
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    let errors = {}
    if (!username) errors.username = 'Username is require'
    if (!password) errors.password = 'Password is require'

    setErrors(errors)

    return Object.keys(errors).length === 0
  }

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
        {errors.username ? <Text style={styles.errorText}>{errors.username}</Text> : null}
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder='Enter your password'
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        {errors.password ? <Text style={styles.errorText}>{errors.password}</Text> : null}

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

- This way, our users will know exactly what they missed or what they need to correct.

### **=>** Styling the Error Text

-For the error text styles, we'll set color to red and a margin bottom.

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
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    let errors = {}
    if (!username) errors.username = 'Username is require'
    if (!password) errors.password = 'Password is require'

    setErrors(errors)

    return Object.keys(errors).length === 0
  }

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
        {errors.username ? <Text style={styles.errorText}>{errors.username}</Text> : null}
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder='Enter your password'
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        {errors.password ? <Text style={styles.errorText}>{errors.password}</Text> : null}

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
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
})
```

This will make sure our errors stand out.

### **=>** Conclusion

- And there you have it—simple yet effective form validation.

- But we are not done yet. In our next video, we will be handling form submission.

- We will learn when to call this `validateForm` function and how to log form values if the form is indeed valid.
