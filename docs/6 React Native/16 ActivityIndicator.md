---
sidebar_position: 16
---

# ActivityIndicator Component

- In this video, let's take a look at the ActivityIndicator component.

- The ActivityIndicator component displays a circular loading indicator.

- It is used to inform users about the status of ongoing processes, such as loading an app, submitting a form, or saving updates.

### Usage

- To begin, import the ActivityIndicator component from React Native and place it within a view.

```jsx
import React from 'react'
import { useState } from 'react'
import { View, ActivityIndicator } from 'react-native'

export default function App() {
  const [isStatusBarHidden, setIsStatusBarHidden] = useState(false)
  return (
    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
      <ActivityIndicator />
    </View>
  )
}
```

- If we save the file, you will notice the circular loading indicator in both iOS and Android.
- They are indeed very small, and the color contrast is not great. So, I recommend you verify this on your own simulator or virtual device.

- Although they have slight visual differences, they effectively convey the message that something is happening in the background.

### Important Props

- Let's highlight three important props for this component:

  - The `size` prop: By default, it is set to `small`, but we can change it to `large`.

```jsx
import React from 'react'
import { useState } from 'react'
import { View, ActivityIndicator } from 'react-native'

export default function App() {
  const [isStatusBarHidden, setIsStatusBarHidden] = useState(false)
  return (
    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
      <ActivityIndicator />
      <ActivityIndicator size='large' />
    </View>
  )
}
```

- The `color` prop: By default, it uses the system accent default color for Android and a shade of gray for iOS. However, we can customize it by setting a specific color, such as `midnightblue`.

```jsx
import React from 'react'
import { useState } from 'react'
import { View, ActivityIndicator } from 'react-native'

export default function App() {
  const [isStatusBarHidden, setIsStatusBarHidden] = useState(false)
  return (
    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
      <ActivityIndicator />
      <ActivityIndicator size='large' />
      <ActivityIndicator size='large' color='midnightblue' />
    </View>
  )
}
```

- The `animating` prop: By default, it is set to `true`, which is why we see the indicator.
- We can set it to `false` to hide the indicator.

```jsx
import React from 'react'
import { useState } from 'react'
import { View, ActivityIndicator } from 'react-native'

export default function App() {
  const [isStatusBarHidden, setIsStatusBarHidden] = useState(false)
  return (
    <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
      <ActivityIndicator />
      <ActivityIndicator size='large' />
      <ActivityIndicator size='large' color='midnightblue' />
      <ActivityIndicator size='large' color='midnightblue' animating={false} />
    </View>
  )
}
```

- Keep in mind that the recommended approach is to use a state variable for the `animating` prop.

- In summary, the ActivityIndicator component displays a loading indicator to inform users about ongoing background processes.
- You can customize it using the `size` prop to set the size,
- the `color` prop to set a predefined or custom color,
- and the `animating` prop to control visibility.
