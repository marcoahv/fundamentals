---
sidebar_position: 20
---

# Generating Static Params

### Generate static parameters is a server function that defines the list of route segment parameters.

It is statically generated at build time instead of on demand at request time.

This works out if you know what routes are expected within the application.

These will not be called again during revalidation or incremental static regeneration.

### Let's take a look at the Speakers page again here.

- Within the slug folder's page.js file where the dynamic route has been defined, you can also define the generateStaticParams function.

```jsx
export async function generateStaticParams() {
  const speakers = await getSpeakers()

  return speakers.map(() => ({
    slug: speaker.slug,
  }))
}
```

This could potentially be a hardcoded list of static params for this route, or it could be fetched from a URL.

n this example, a call is made to fetch all speakers via a getSpeakers call.

This call returns a list of speaker names, and each name is then mapped to the slug property as shown.

This ensures that the routes are statically generated at build time and improves the performance of the dynamic routes.

### summary

In this module, we've learned about dynamic routing, otherwise known as dynamic segments in Next.js. In the next module, we'll learn about deploying your Next.js app and migrating existing apps to Next.js. See you in the next module.