---
sidebar_position: 6
---

# Create Pages

### it's time to start creating the routes

- All right, now let's go ahead and create some pages within our Globomantics app based on the route structure that we just saw.

- We're back to the VS Code editor.

- Now within our app folder, it's time to start creating the routes.

### Create Folders inside app folder

- First, I'm going to create a folder called `home`.

- Then I'm going to create a folder for the `settings`.

- The next folder we're going to create is one for the `conference`.

- Finally, we create a folder for the `blog`.

```
 app/
   home/
   settings/
   conference/
   blog/
```

### Create page.js files

- The next step is to create a `page.js` file within each of these folders.

- So I'm going to go ahead and paste what we had in the page.js file from the app directory and tweak that a little bit.

- We could have a generic message that says Welcome to `Settings Page`.

```jsx app/settings/page.jsx
export default function Page() {
  return (
    <>
      <h1>Welcome to Settings Page</h1>
    </>
  )
}
```

- And I'm going to start creating the rest of the pages on each folder.

- We're going to have a Welcome to Home Page message rendered for the `home page` route

```jsx app/home/page.jsx
export default function Page() {
  return (
    <>
      <h1>Welcome to Home Page</h1>
    </>
  )
}
```

- and one for the `blog page` , and it's going to say Welcome to Blog.

```jsx app/blog/page.jsx
export default function Page() {
  return (
    <>
      <h1>Welcome to blog</h1>
    </>
  )
}
```

- We still have to wire up a page for the `conference` folder.

```jsx app/conference/page.jsx
export default function Page() {
  return (
    <>
      <h1>Welcome to Globomantics conference</h1>
    </>
  )
}
```

### Create subfolders

Recall that we want to create subfolders within the conference folder, one for the `speakers` and another folder for the `sessions`.

So let's go ahead and create these subfolders.

```
  app/
    home/
    settings/
    conference/
      speakers/
      sessions/
    blog/
```

- And when you create subfolders, the subfolders also need to have a page.js file because it's going to be its own unique route.

- So I'm going to go ahead and create a page.js for both the Sessions page, as well as the Speakers page

- and have a generic welcome message that says Welcome to Globomantics `Sessions`

```jsx app/conference/sessions/page.jsx
export default function Page() {
  return (
    <>
      <h1>Welcome to Globomantics Sessions</h1>
    </>
  )
}
```

- and Welcome to Globomantics `Speakers`.

```jsx app/conference/speakers/page.jsx
export default function Page() {
  return (
    <>
      <h1>Welcome to Globomantics Speakers</h1>
    </>
  )
}
```

### Check URLs

- So now we have set up all the pages that we want, and they're going to automatically follow this file‑based routing, and you'll see how that looks in action.

- Localhost 3000 is going to render our root page.

Now if I change the URL to include `/home`, you see the Welcome to Home Page being rendered.

Now you see the blog being rendered with the URL changes to` blog/`

If you change that to `/settings`, you're going to see the Welcome to Settings message.

Let's go ahead and try the conference page.
So you would do `/conference`, and there you go. You see the Welcome to Globomantics Conference.

And now, you can append the URL with `conference/speakers`, and you'll now see the new route for the speakers being created.

And you can also try out the `conference/sessions`, and you'll see the sessions page being rendered.

And with that, we've set up all the pages for our Globomantics app, and all of the URLs are following the file‑based routing correctly.