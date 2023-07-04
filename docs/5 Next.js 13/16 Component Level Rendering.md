---
sidebar_position: 16
---

# Component Level Rendering

### what exactly a client and a server really is.

With the latest Next.js 13, you can choose a rendering environment at the component level, it provides support for both client and server components.

- The client refers to the browser on a user's device that sends a request to the server for your application code.

It then returns the response from the server into an interface that the user can interact with.

- The server, on the other hand, refers to the computer in a data center that stores your application code. It receives requests from the client, does some computation, and sends back an appropriate response. All right,

### client component

In Next.js, client components are components that are rendered on the client.

They can also be pre-rendered on the server and hydrated on the client.

### server components

With Next.js 13, all components inside the app folder that we've seen so far are server components by default.

You can choose to use a client component instead by specifying it explicitly.

### why server components

These components allow you to render components on the server and reduce the amount of JavaScript sent to the client. Isn't that cool?

This is a new concept and taps into an entirely performant way of rendering React components.

Let's take a look at this component tree here, for example.

The pink components here represents server components, and the blue components are the client components.

You can see here that you can interleave server and client components in your application.

You could do it as you like across the component tree or on a per‑component basis.

React will seamlessly merge the work of both environments without any additional work from your end.

### To use a client component

- So, as we saw earlier, all components inside the Next.js app folder are server components by default.

- To use a client component, you would create a file inside the app folder and add the `'use client'` directive at the top of the file.

- This should be before any imports are added.

You only need to mark components as use client when they use client hooks, such as useState or useEffect.

In our case, this Counter component uses a state hook and hence needs to be marked as a client component.

It's best to leave components that do not depend on client hooks without the client directive so that they can automatically be rendered as a server component.

This helps ensure the smallest amount of client‑side JavaScript.

### So how do we make a choice on when to use the client versus the server component

- The rule of thumb is to `use a client component if you use any of the React hooks`, such as useState, useEffect, useReducer, and so on.

This means there are going to be changes within the component that needs to be rendered on the client.

`If there is any sort of interactivity with the component`, such as event listeners you have on button click and so on, you would use a client component.

Also, `if there are custom hooks that depend on state and effects`, they have to be client components too.

In all other cases, you'll use a server component by default.

### when are Server components use?

Server components are used while `fetching data`,

`storing sensitive information` on the server, such as tokens, API keys, and so on.

And `if the component must access back‑end resources directly`, then it would be a server component too.

Make sure to use a server component `to also keep large dependencies on the server`.

(So far within our Globomantics app, we did not really create components with interactivity or use any client hooks, so all our components inside the app folder or server components by default.

If we ever want to change them, we'll include the use client directive at the very top of a component's file.)