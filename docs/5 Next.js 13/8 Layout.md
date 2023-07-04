---
sidebar_position: 8
---

# Layout

### Layout is basically a UI that is shared between pages.

- You may have headers, footers, navigation bars, and so on that are common across several pages within your web application.

- Rendering these components could be part of your layout.

- What's cool about layouts is that on navigation from one page to another, layouts preserve the state and remain interactive.

- This means they do not rerender, and your page transitions seem even quicker.

### When you set up your Next.js app, a root layout file is required.

- This will be within the app folder, and this layout will be shared across all the pages in the app.

- A layout can simply be defined by default exporting a React component from a layout.js file.

- The component should accept `a children prop`, which will be populated within a page or other nested layouts.

```jsx
export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head />
      <body>{children}</body>
    </html>
  )
}
```

- Let's take a look at the app structure.

In our case, one of the sub-routes is the /conference route.

Conference is a folder within the app folder,

and conference has its own sub-routes, speakers and sessions.

```
app/
  page.js
  layout.js
    conference/
      page.js
      layout.js
      speakers/
        page.js
      sessions/
        page.js

```

We already learned that page.js file is required for the route to be publicly accessible for each route and sub-route.

`The only required layout.js file is the one for the root layout within the app folder.`

- The other layout files are optional depending on how you plan to design your web application.

`Layouts defined inside a folder apply to specific route segments and render within those segments when they're active.`

- For instance, here the conference route has its own layout file.

```
app/
  page.js
  layout.js
    conference/
      page.js
      layout.js
      speakers/
        page.js
      sessions/
        page.js

```

This will be rendered when the user navigates to the conference page, and this layout will be shared by both the sub-route's Sessions page and the Speakers page. Isn't that neat?

### adding a layout for conference page

- Let's take a look at a demo on how we can set up layout for our conference page and how it's really shared between the sub-routes as well.

Here's our app's root layout file within the app folder. It should contain the html and body tags. Now this file is a parent layout to the whole application.

```jsx
export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head />
      <body>{children}</body>
    </html>
  )
}
```

- Let's now go ahead and create a layout file just for our conference folder. So `within our conference folder here, we create a layout.js file`.

- In here, let's create a React component and call it `ConferenceLayout`.

- This component is going to take in the children props as well and return some HTML.

- What I'm going to do is simply add a header for our Globomantics conference pages, and the header text is going to be GLOBOMANTICS MANIACALLY TAKING TECH TO THE GLOBE.

- Now we can wrap the header tag, and the rest of the items will be rendered within the section tag.

```js
export default function ConferenceLayout({ children }) {
  return (
    <>
      <header>
        <h1>GLOBOMANTICS MANIACALLY TAKING TECH TO THE GLOBE</h1>
      </header>
      <section>{children}</section>
    </>
  )
}
```

- Now keep in mind that this layout is going to be used when the conference page is rendered, and we should also see `the same layout being used for the Sessions page, as well as the Speakers page`.

### add some basic styling to our header

- One last step here is to add some basic styling to our header.

I've already create a `style.css` file within the conference folder that you can see here.

```css conference/styles.css
header {
  width: 100%;
  padding: 50px 0px 50px;
  background: #212121;
  color: #fff;
  text-align: center;
  justify-content: center;
}
```

- It contains some basic styling for the header.

- Let's go back to our layout.js file and import the style here

```jsx
import style from './styles.css'

export default function ConferenceLayout({ children }) {
  return (
    <>
      <header>
        <h1>GLOBOMANTICS MANIACALLY TAKING TECH TO THE GLOBE</h1>
      </header>
      <section>{children}</section>
    </>
  )
}
```

- and pass it to the header.
- We're going to pass styles.header to the style property within our header tag.

```jsx
import style from './styles.css'

export default function ConferenceLayout({ children }) {
  return (
    <>
      <header style={style.header}>
        <h1>GLOBOMANTICS MANIACALLY TAKING TECH TO THE GLOBE</h1>
      </header>
      <section>{children}</section>
    </>
  )
}
```

### testing in the browser

And with that, our ConferenceLayout component is ready, and let's go ahead and see how it looks.

As you can see, we are within our localhost 3000, which is the home page, and this page will not render the layout that we have within the conference page.

We then navigate to the home, which also does not display that layout.

We're now going to get into the conference page, and there you see it.

You see this black header, and it has the white heading text, which says GLOBOMANTICS MANIACALLY TAKING TECH TO THE GLOBE.

Now this is the header for a conference page that is being rendered from the layout.

### this piece of UI does not rerender

Now what's interesting is if you click on the Speakers page and navigate to it, you still see that header.

And if you click on the Sessions page, you're still going to see that header.

But take a look closely that it's really not rerendering the header.

So that piece of the layout that you're seeing is already available and cached.

So when you navigate back and forth between the Sessions, Speakers, and Conference pages, this piece of UI does not rerender.

It's pretty cool because now you can see how you can tap into this layout by having navigation bars, footers, headers, and so on, which don't necessarily rerender per page.

Instead, they rerender based on the route that the layout is set up for.