---
sidebar_position: 17
---

# Data Fetching Approaches

### in next.js 13, data fetching can be done on a page‑by‑page basis

So far, we saw the different rendering approaches at the component level in Next.js.

In this clip, let's learn about the different data fetching approaches that come with Next.js.

- Something really cool about Next.js is that data fetching can be done on a page‑by‑page basis.

You can pick and choose the data fetching method that is most suitable for a specific page.

### static data fetching (also known as static site generation)

- The default data fetching approach in Next.js is called static data fetching.

It's also known as static site generation.

- In this approach, the data is fetched at build time once and then cached. The cached data is then reused on every request.

This is a good technique to use for pages that do not change often within your website, for instance a blog post page.

It can always be fetched from the cache. This boosts performance to a great extent since the pages are now static and the content is retrieved from the cache instead.

This method ensures that the load on the database is reduced by minimizing the number of requests.

- By default, Next.js automatically does static data fetching unless specified otherwise.

### incremental static regeneration (This includes what is called as revalidation)

The second approach is also a static data fetching approach, but it's slightly different. This includes what is called as revalidation.

It's otherwise known as incremental static regeneration, or ISR.

In this approach, the data is fetched and cached. The cached data is then reused on each request until it reaches a specific interval of time.

Let's say you've provided a specific interval of time to Next.js, such as 10 seconds. Then after the 10 seconds, Next.js revalidates the data and invalidates the previous cache.

This method is useful when your data changes and you want to ensure that the application shows the latest version without having to rebuild the entire application.

### dynamic data fetching (or the server‑side rendering)

The final approach of data fetching is called the dynamic data fetching or the server‑side rendering.

In this method, the data is fetched on each request. Dynamic data changes often or could be specific to users like a shopping cart, for instance.

In this method, there is no caching, and the data is fetched on each request.