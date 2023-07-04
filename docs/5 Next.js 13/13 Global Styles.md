---
sidebar_position: 13
---

# Global Styles

### CSS modules vs Global styles

In this clip, let's learn about how you can handle global styles within your Next.js app.

CSS modules that you've seen so far are typically useful for styling components.

Global styles can be used for CSS that needs to be loaded by every page.

Note that global styles can be imported into any layout, page, or a component inside the app directory. This is new to Next.js 13.

### how to apply global styles in next.js 13

In this code snippet here, notice that `the global.css file is placed within the app folder`.

Here, a style has been given to the body, and this style is then simply `imported within the root layout file`, and that's all it takes.

The styles from the global.css file now `applies to every route in the application`.

### Let's go back to our Globomantics app and make some modification based on this newfound knowledge.

- 1. I'm going to `create the global.css file within the app folder`.

- 2. Then, I'm going to paste the `header style` over here, which was originally in the CSS module for the root style.

(remember to change the class selector for a header selector)

I'm also going to add a style for the body with a margin of 0.

```css app/global.css
header {
  width: 100%;
  padding: 50px 0px 50px;
  background: #212121;
  color: #fff;
  text-align: center;
  justify-content: center;
}

body {
  margin: 0;
}
```

- 3. Now I can simply `import the global.css file within the root layout`, and it should be effective and apply to every route in the application.

(remember to remove the className in the header)

Let's hit Save and open a browser. You'll notice that the header styles are still applicable. But this time, they're pulled in via the global.css file instead. Pretty cool, isn't it?

You can use styles that cater to your needs as you develop your Next.js application and pick and choose different types of styling and styling options that are available to you with Next.js.