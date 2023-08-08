---
sidebar_position: 25
---

# Layout with Flexbox

- In this section, we will dive into the world of layouts in React Native.

- The core of layout design in React Native is flexbox, a powerful one-dimensional layout model used to arrange elements within a container.

- With flexbox, you have the freedom to arrange items either horizontally (left to right or right to left) or vertically (top to bottom or bottom to top).

- Additionally, you can easily control the spacing and alignment of items within the container.

### Understanding Flexbox:

- Flexbox consists of two main entities: the flex container and the flex items.

- The parent container, usually a View component, is referred to as the `flex container`.

- The immediate children elements are called `flex items`.

```jsx
<View>
  <View>Item 1</View>
  <View>Item 2</View>
  <View>Item 3</View>
</View>
```

- In the provided sample UI, the parent view acts as the flex container, and all the children views serve as flex items.

### The Axes in Flexbox:

- When working with flexbox, we encounter two axes: the `main axis` and the `cross axis`.

- By default,

  - `the main axis runs from left to right,`
  - `and the cross axis is perpendicular to it`, `running from top to bottom`.

- However, in React Native, it is the opposite:

  - `the main axis runs top to bottom`,
  - `and the cross axis runs left to right`.

- It is very important to remember this.

### Understanding Flexbox Properties:

- Understanding flexbox is a straightforward process, much like learning CSS.

- You need to familiarize yourself with the various flexbox properties and understand how they function.

- Once you grasp the concepts of flexbox, you'll have a solid understanding of how layouts are created in React Native.

- In this section, we will focus on exploring different flexbox properties while arranging elements on the screen.
