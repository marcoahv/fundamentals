---
sidebar_position: 4
---

# Split-screen components

### Introduction

In this example, we will create a split-screen layout using layout components.

- We will start with `a basic Create React App application`.

- To style our components, we will use a package called styled-components.

```bash
npm install styled-components
```

### Creating the Split Screen Component

To begin, let's create a new file called `SplitScreen.js` that will contain our split screen layout component. The component will have two props: `left` and `right` , representing the components to be displayed on the left and right sides of the split screen, respectively.

```jsx
export const SplitScreen = ({ left, right }) => {
  return (
    <div>
      <div>{left}</div>
      <div>{right}</div>
    </div>
  )
}
```

### Adding Styles with Styled Components

To add styles to our split screen component, we will use styled components. First, let's import the `styled` package.

```jsx
import styled from 'styled-components'
```

Next, we will define the styles for our container and pane components. The container component will have the `display: flex` property, and the pane component will have the `flex: 1` property to ensure equal spacing.

```jsx
const Container = styled.div`
  display: flex;

const Pane = styled.div`
flex: 1
```

Now, we can replace the `div` elements in our split screen component with the styled components.

```jsx
export const SplitScreen = ({ left, right }) => {
  return (
    <Container>
      <Pane>{left}</Pane>
      <Pane>{right}</Pane>
    </Container>
  )
}
```

### Implementing the Split Screen Component

To see how our split screen component works, let's use it in our app. First, import the `SplitScreen` component.
import { SplitScreen } from './split-screen';
In our app component, define two simple components: `LeftHandComponent` and `RightHandComponent` . These components will be displayed on the left and right sides of the split screen, respectively.

```jsx
const LeftHandComponent = () => {
  return <h1 style={{ backgroundColor: 'green' }}>Left</h1>
}
const RightHandComponent = () => {
  return <p style={{ backgroundColor: 'red' }}>Right</p>
}
```

Now, let's render the `SplitScreen` component and pass the `LeftHandComponent` and `RightHandComponent` as props.

```jsx
function App() {
  return (
    <div className='App'>
      <SplitScreen left={<LeftHandComponent />} right={<RightHandComponent />} />
    </div>
  )
}
```

### Conclusion

By using the `SplitScreen` component, we can create a split-screen layout with components displayed on the left and right sides. The `styled-components` package allows us to easily add styles to our components.
