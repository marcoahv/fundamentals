---
sidebar_position: 5
---

# Pages

### Current Page

- The Globomantics app has only one page, which has a welcome header message. It is quite empty at the moment.

This page is rendered from the app folder within which there is a `page.js` file.

```jsx
export default function Page() {
  return (
    <>
      <h1>Welcome to Globomantics App</h1>
    </>
  )
}
```

- We've defined a page component, which is a React component, and it renders the message "Welcome to Globomantics" in the form of a heading.

- Note that with Next.js 13, the file‑based routing can be done from this app folder.
  Previously, the routing was done from the pages folder instead.

`This represents the UI for the root URL.`
When you create a new Next.js app, this is a required file within the app directory.

- To enable this, I've added a setting within the next.config.js file. This is pretty standard, and it enables the experimental feature app directory.

### Setting up new pages

- Next.js provides what is called as `file‑based routing`. In the app directory, folders are used to define routes.

- `The app folder represents the root URL`, and it is at the very top of the tree. It has four sub-folders within it. For our example, we have a home folder, a settings folder, a conference folder, and a blog folder for our Globomantics app.

```
  app/
    home/
    settings/
    conference/
    blog/
```

- Each of these will be its own route, and each route can have its own child routes as well.

```
  app/
    home/
    settings/
    conference/
      speakers/
      sessions/
    blog/
```

- There is no limit to how many routes you can create in a Next.js app, and you simply follow this file‑based routing within the app directory for each new route that you create.

The routes that come out of the folder structure that we just designed for our Globomantics app are:

```
  /home
  /settings
  /conference
  /conference/speakers
  /conference/sessions
  /blog
```

### Features of Pages in Next.js

- A page is a UI that is unique to each route.

- A page.js file is required to make a route publicly accessible. This means each new route folder needs a page.js file.

- Pages can fetch data, pages render server components by default, but you can configure them to be a client component if needed.

- Pages also support extensions such as jsx, js, and TypeScript extension, tsx.

- To summarize, a page is a UI that is unique to a route and it is always the leaf of the route subtree.