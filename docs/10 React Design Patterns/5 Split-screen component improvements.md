---
sidebar_position: 5
---

# Split-screen component improvements

### Adding weight to components

- To make the left component take up less space and the right component take up more space, we can add two more props to the split screen component:

  - `leftWeight` with a default value of 1

  - `rightWeight` with a default value of 1

### Applying weight to components

- Pass the `leftWeight` and `rightWeight` props to their respective pane components.

- Modify the Flex property in the pane component using the passed weight props.

### Usage in app.js

- Add the `leftWeight` and `rightWeight` props to the split screen component in app.js.

- Example: `leftWeight=1` and `rightWeight=3` to make the left side one-third as wide as the right side.

### Displaying components as children

- Instead of passing the left and right components as props, put them inside the split screen component as children.

- Example: `leftHandComponent` and `rightHandComponent` as children.

### Implementation in split screen component

- Remove the left and right props.

- Replace them with the children prop.

- Assign the children prop to `left` and `right` variables.

- Display the `left` and `right` components using curly braces.

### Passing props to components

- If the left and right components require props, pass them directly as props to the components.

- Example: `name="Sean" ` for the left component and ` message="hello"` for the right component.
