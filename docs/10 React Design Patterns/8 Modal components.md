---
sidebar_position: 8
---

# Modal Components

The last layout component we're going to examine is modals. Modals are a common feature in web applications. Let's learn how to create them as a layout design pattern.

### Creating a New File

First, we'll create a new file called `modal.js` . This file will contain all the code for our modal.

### Implementing the Component

Before we proceed, it's important to note that most people install `react-modal` or a similar package when they add modals to a React application. However, this isn't necessary. We can easily implement our own modal.
We'll import `useState` from React and `styled` from styled-components to add the actual modal styling.

```jsx
import { useState } from 'react';
import styled from 'styled-components';
Then, our basic modal component will look like this:
jsx
export const Modal = ({ children }) => {...}
```

This is similar to our split screen component. We won't pass in the modal contents as a prop; instead, we'll just display them.

### Creating State Variable

In the component body, we'll have a state variable called `shouldShow` and set it to `false` initially. This means the modal will be hidden at first.

### Creating Styled Components

We'll create two different styled components for the modal structure: `ModalBackground` and `ModalBody` .

```jsx
const ModalBackground = styled.div`...`
const ModalBody = styled.div`...`
```

### JSX Structure

The JSX will have the `ModalBackground` , inside which will be the `ModalBody` . Inside the `ModalBody` , we'll display the actual children passed to this modal component.

### Conditional Rendering

We only want the modal background and modal body to show when `shouldShow` is `true` . We'll use short circuit evaluation for this:

```jsx
{
  shouldShow && (
    <ModalBackground>
      <ModalBody>{children}</ModalBody>
    </ModalBackground>
  )
}
```

### Button to Show Modal

We'll add a button to display the modal. This button's `onClick` property sets the `shouldShow` state to `true` .

### Button to Hide Modal

We'll add an `onClick` property to the modal background that sets `shouldShow` to `false` when a user clicks on it. Inside the modal body, we'll add another button that allows the user to hide the modal. This button will also set `shouldShow` to `false` .

### Stopping Event Propagation

Lastly, for our `ModalBody` , we need to add an `onClick` event that calls `event.stopPropagation()` . This ensures that when a user clicks on one of the children inside our component, the click event doesn't bubble up and close the modal.

### Adding Styles

Next, we'll add some styles to our modal. The modal background will be a semi-transparent dark gray that covers the rest of the page. The modal body will have a white background, take up 50% of the screen, and have a little bit of margin and padding.

### Using the Modal Component

To demonstrate what this will look like, we'll open up our `app.js` and display our `Modal` . Inside the modal, we'll display a `LargeProductListItem` .

```jsx
<Modal>
  <LargeProductListItem product={products[0]} />
</Modal>
```

When we run our app and click on "Show Modal", we'll see the details of the product inside our modal. We can click either on the background or on the "Hide Modal" button to hide the modal.
If we were going to use this `LargeProductListItem` for other things besides list items, we might want to rename it to something like `LargeProductDetails` . This would allow us to display it now either in a list or in a modal, which is the strength of layout components.
