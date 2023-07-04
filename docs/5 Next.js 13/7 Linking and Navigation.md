---
sidebar_position: 7
---

# Linking and Navigation

### using the Link component

- In this demo, let's learn how to navigate between the pages in the Globomantics app using `the Link component`.

So far, we've created pages within our Globomantics app, but we haven't set up navigating between these pages.

We're only able to ensure that each of the routes are working by manually typing in the route URL in the browser.

- The Next.js router uses a server‑centric routing with client‑side navigation. This means navigation maintains the client side state and avoids expensive rerenders.

Doesn't that sound interesting?

You can navigate between the routes using the Link component.

### import the link component in the app/page.jsx

- The Link component can be imported from next/link.

- And to the Link component, you can pass the href prop, which will be the route URL.

- We're trying to add a link to our root page, and we're giving the href as /home, which is the URL to the home page,

- and it's going to display the text Home.

```jsx app/page.jsx
import Link from 'next/link'

export default function Page() {
  return (
    <>
      <h1>Welcome to Globomantics App</h1>
      <Link href='/home'>Home</Link>
    </>
  )
}
```

The Link component essentially is a React component that extends the HTML a Element and provides prefetching and client‑side navigation.

### testing the link on the browser

Here we are at the root URL, and you can see the text Home, and clicking on that link is going to take us to the home page.

### add navigation between pages using the same pattern.

- Let's now add some navigation links `on the home page`.

- Here, I want to display links to all the other pages such as blog, settings, conference, and so on.

- So first, we're going to `import the Link component`,

- and I'm going to `display links` for the blog, settings, and conference.

- I also want these link text to be of heading types, so I'm going to pass them `within the h2 element`.

Keep in mind you need to give each one of them their URL, so it's going to be `/blog`, `/settings`, and `/conference`.

```jsx app/home/page.jsx
import Link from 'next/link'

export default function Page() {
  return (
    <>
      <h1>Welcome to Home page</h1>
      <h2>
        <Link href='/blog'>Blog</Link>
      </h2>
      <h2>
        <Link href='/settings'>Settings</Link>
      </h2>
      <h2>
        <Link href='/conference'>Conference</Link>
      </h2>
    </>
  )
}
```

### testing in the browser

You'll see now that all of them are displayed here on the home page, and clicking on each one of them will take you to the respective routes.

You can go between the Blog, Settings, and Conference pages from the home page. Isn't that neat?

### prefetching

prefetching of routes, which is `done by the Link component with Next.js`, is a way to preload routes in the background before it is even visited.

The rendered result of prefetched routes are added to the router's client‑side cache, and this makes navigating to a prefetched route instantaneous.

Keep in mind that `prefetching is only enabled in production`, so you won't see the prefetching feature working if you're in development mode.

`Prefetching can also be disabled` if you don't want that to happen by passing the prefetch property equals false to the Link component as shown here.

```jsx
import Link from 'next/link'

export default function Page() {
  return (
    <>
      <h1>Welcome to Globomantics App</h1>
      <Link href='/home' prefetch={false}>
        Home
      </Link>
    </>
  )
}
```

When prefetch is set to false, `prefetching will still occur on hover`.

### adding routing from the conference pages route

- we can now go ahead and add routing from the conference pages route.

- Recall that the conference page can take you to the Speakers and the Sessions page, so we'll do just that.

- First things first, I'm going to `import the Link component` within the Conference page, Sessions page, and the Speakers page.

Now back in my conference root page, I'm going to `add links` to the Speakers, as well as the Sessions page. I'm going to pass the link href/conference/speakers and /conference/sessions.

```jsx
import Link from 'next/link'

export default function Page() {
  return (
    <>
      <h1>Welcome to Globomantics conference</h1>
      <h2>
        <Link href='/conference/speakers'>Speakers</Link>
      </h2>
      <h2>
        <Link href='/conference/sessions'>Sessions</Link>
      </h2>
    </>
  )
}
```

### testing in the browser

Now let's go back to our conference page and see if that worked out. There you go.

Now we're able to navigate from the conference page to the Sessions and Speakers page.

### adding links back to the conference page or to a previous page.

- In addition, we can also add links back to the conference page or to a previous page.

So what we're going to do is go into our Sessions and Speakers page and add a link back to the Conference page.

All you'll have to do there is provide /conference as the URL,

```jsx
import Link from 'next/link'

export default function Page() {
  return (
    <>
      <h1>Welcome to Globomantics Sessions</h1>
      <h2>
        <Link href='/conference'>Back to Conference</Link>
      </h2>
    </>
  )
}
```

- and I'm going to do the same within our Speakers page.

```jsx
import Link from 'next/link'

export default function Page() {
  return (
    <>
      <h1>Welcome to Globomantics Speakers</h1>
      <h2>
        <Link href='/conference'>Back to Conference</Link>
      </h2>
    </>
  )
}
```

### And let's see how that looks in the browser

We're in our Conference page. We're moving to the Speakers page, and there you see a Back to Conference link, and it's available on both the Speakers and the Sessions page.

You can see now how we can move back and forth from the Conference page to the subpages. And with that, you're all set with linking between pages in our Globomantics app using the Link component.