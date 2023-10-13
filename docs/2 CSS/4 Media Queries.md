---
sidebar_position: 4
---

# MEDIA QUERIES

https://youtu.be/K24lUqcT0Ms?si=4lpxfRf9Ht0jO3LK

Write this text word by word using markdown format, dividing its sections with h4 tags, using bullet points for all its main parts, using backticks for code terminology:

Certainly! Here is the provided text formatted using Markdown:

### Introduction

![](images/chameleon.png)

- You might be wondering why there's a chameleon in the thumbnail of this video.
- A chameleon can change its color and pattern, adapting its appearance to match its environment.
- The chameleon's ability to quickly and seamlessly change its appearance is a skill to be admired.
- What I'm suggesting is that we ought to be more like the chameleon when creating our responsive layouts.

### Responsive Layout Challenge

- You've built yourself a header component.
- Your header has a title on the left, a menu in the middle, and a sign-in button on the right.
- Your header looks good on large viewports.
- However, when you resize the page, eventually your header breaks.
- You need a way to add styles on smaller viewports.

### Using Media Queries

- This is exactly what media queries do.
- They allow you to target specific viewport sizes and apply styles on them.
- Resizing the page, we see our header breaks on a width of 1231 pixels.
- The title gets displayed on two lines, and the button becomes huge.
- The syntax for adding media queries is `@media (conditions) { styles }`.
- In between the `@media` and parentheses, you can specify the media type you want to target.
- Common media types include `screen`, `print`, `speech`, and `all`.
- If you don't specify a media type, it will target all by default.
- To add a breakpoint, you can specify `max-width` or `min-width` followed by the desired size in pixels.

### Implementing Media Queries

- Back in our header example, inside the curly braces of our media query is where we can select elements and apply styles on them.
- To make the header responsive, you reduce the font size of the title, links, and button for smaller viewports.
- The `@media` query with `max-width` 1231 pixels is applied, and the font sizes are adjusted using class selectors.

### Understanding Media Query Behavior

- Media queries can be set with `max-width` or `min-width` to control whether the styles apply below or above a certain screen width.
- `Max-width` targets screens below the specified breakpoint, while `min-width` targets screens above the breakpoint.
- Understanding both `max-width` and `min-width` is important for creating responsive designs.
- The choice of whether to use `max-width` or `min-width` depends on whether you're designing mobile-first or desktop-first.

### Predefined Media Queries

- To simplify responsive design, you can use predefined media queries for different screen sizes.
- These predefined queries allow you to set breakpoints for specific screen widths and apply consistent styles.
- Instead of adding media queries when a component breaks, you use predefined media queries to make components responsive on those breakpoints.

#### Mobile-first pre-defined media queries

```css
/* Mobile-first pre-defined media queries: */

/* xs */
@media (min-width: 475px) {
}

/* sm */
@media (min-width: 640px) {
}

/* md */
@media (min-width: 768px) {
}

/* lg */
@media (min-width: 1024px) {
}

/* xl */
@media (min-width: 1280px) {
}

/* 2xl */
@media (min-width: 1536px) {
}
```

#### Desktop-first pre-defined media queries

```css
/* Desktop-first pre-defined media queries: */

/* 2xl */
@media (max-width: 1536px) {
}

/* xl */
@media (max-width: 1280px) {
}

/* lg */
@media (max-width: 1024px) {
}

/* md */
@media (max-width: 768px) {
}

/* sm */
@media (max-width: 640px) {
}

/* xs */
@media (max-width: 475px) {
}
```

### Portfolio Website Example

- In a portfolio website example, only six predefined media queries are used to make the site responsive.
- The predefined queries are set for extra small, small, medium, large, extra-large, and extra-extra-large screens.
- Using predefined media queries reduces the number of breakpoints needed.

### Improved Container Utility Class

- A container utility class is introduced that ensures proper alignment and responsive shrinking of sections.
- The container utility class allows containers to shrink only when the viewport touches their borders, creating a more elegant responsive design.

#### Mobile-first container utility class

```css
/* Mobile-first container utility class: */

.container {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

/* xs */
@media (min-width: 475px) {
  .container {
    max-width: 475px;
  }
}

/* sm */
@media (min-width: 640px) {
  .container {
    max-width: 640px;
  }
}

/* md */
@media (min-width: 768px) {
  .container {
    max-width: 768px;
  }
}

/* lg */
@media (min-width: 1024px) {
  .container {
    max-width: 1024px;
  }
}

/* xl */
@media (min-width: 1280px) {
  .container {
    max-width: 1280px;
  }
}

/* 2xl */
@media (min-width: 1536px) {
  .container {
    max-width: 1536px;
  }
}
```

#### Desktop-first container utility class

```css
/* Desktop-first container utility class: */

.container {
  max-width: 1536px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

/* 2xl */
@media (max-width: 1536px) {
  .container {
    max-width: 1280px;
  }
}

/* xl */
@media (max-width: 1280px) {
  .container {
    max-width: 1024px;
  }
}

/* lg */
@media (max-width: 1024px) {
  .container {
    max-width: 768px;
  }
}

/* md */
@media (max-width: 768px) {
  .container {
    max-width: 640px;
  }
}

/* sm */
@media (max-width: 640px) {
  .container {
    max-width: 475px;
  }
}

/* xs */
@media (max-width: 475px) {
  .container {
    width: 100%;
  }
}
```

### Mobile-First Approach

- In the mobile-first approach, the container has a width of 100% for screens smaller than the first breakpoint.
- Inside each media query, the container's `max-width` is set to the same value as the `min-width` of its breakpoint.

### Benefits of Predefined Media Queries

- Using predefined media queries reduces the need for numerous breakpoints.
- This approach results in a cleaner and more efficient responsive design.
- The container utility class and predefined media queries make responsive design more manageable.

### Conclusion

- You can create responsive layouts like a chameleon by using predefined media queries and a responsive container utility class.
- The mobile-first approach and thoughtful application of media queries result in efficient and elegant responsive designs.

### Video Resource

- If you want to see these techniques in action in a real-world example, you can watch the video on the channel where an entire portfolio website is built using the container utility class and the six predefined media queries.

https://youtu.be/dLDn_k8GmaU?si=SPWCkFcNuoh8iUEc
