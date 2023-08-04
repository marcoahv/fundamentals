---
sidebar_position: 19
---

# Styling React Native apps

- Styling React Native apps shares similarities with styling web apps but introduces some key differences.
- The most notable difference is that `React Native does not use CSS for styling`.
- Instead, you style your app using JavaScript itself.
- The naming conventions for styles and their values are similar to CSS on the web but with a slight modification.
- `Names are written in camel case`, such as `backgroundColor` instead of `background-color` .

### Approaches to styling a React Native component:

- `The first approach` is using inline styles with the `style prop`, which is accepted by most of the core components.
- We have already explored this approach in the previous section of this course, where we specified a plain JavaScript object as the value for the `style` prop.
- `The second approach` involves utilizing the `stylesheet API` provided by React Native.
- This API allows you to define multiple styles in one place using the `create` method.

### Focus of this section: the stylesheet API

- In this section, `we will primarily focus on the stylesheet API`.
- We will explore how to style various core components and understand the nuances of applying specific styles across iOS and Android platforms.
