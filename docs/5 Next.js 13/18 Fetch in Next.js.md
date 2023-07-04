---
sidebar_position: 18
---

# Fetch in Next.js

### how to implement data fetching in Next.js

You know the different data fetching approaches in Next.js. In this clip, we'll see how to implement data fetching in Next.js.

- The Next 13's new data fetching uses the fetch API, which works within the app folder that we've been working from.

- The fetch API is a new data fetching system that is built on top of the native fetch web API, and it also makes use of the JavaScript async/await functions within server components.

- It allows caching and revalidating options within the fetch request itself.

This is much easier than the previous APIs that Next.js had offered before Next.js 13.

- how each data fetching approach is done using this fetch API

Let's look at some code snippets to understand how each data fetching approach is done using this fetch API.

### static data fetching method (static site generation)

By default, the fetch call is going to perform a static data fetching method.

```jsx
async function fetchData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/post')
  const data = await res.json()
  return data
}
```

Here you'll notice an async function called fetchData. You can name it whatever you like.

Within this, the fetch call is made to the API. No options are provided to the fetch method here. And by default, it performs a static data fetching.

The JSON response is then parsed and returned from this function.

This can then be used within the server component to render the data.

Within the server component, if fetchData is called again, it will return the data from the cache rather than making a fresh request.

### incremental static regeneration (This includes what is called as revalidation)

- In the next approach, if you want to perform a revalidation within a specific interval of time, then you can provide the optional property `next` within which the `revalidate` property is given the interval time in seconds.

```jsx
async function fetchData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/post')
  {
    next: {
      revalidate: 15
    }
  }
  const data = await res.json()
  return data
}
}
```

This request is cached with a lifetime of 15 seconds here, after which a fresh request will be made and the cache will be updated with the new data. Simple enough, right?

### dynamic data fetching (or the server‑side rendering)

For dynamic data fetching or server‑side rendering, you'll provide the `cache` property to the fetch call and give it the value `no‑store`.

```jsx
async function fetchData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/post')
  {
    cache: 'no-store'
  }
  const data = await res.json()
  return data
}
```

This will let the fetch method know that there is going to be no cache in this call.

The request should be refetched on every request. Neat.

With this, you're aware of all the data fetching techniques in Next and how to implement them. In the next clips, we'll perform this data fetching within our Globomantics demo application.

### Demo: Static Data Fetching

In this demo, let's fetch the conference speaker information for our Globomantics app and perform the static data fetching using the fetch API in Next.

Make sure to use the before exercise folder code for this module before you get started. `M5-Before`

- 1. Now, we're within our IDE in the speakers/page.js file. This does not have anything at the moment other than a welcome message.

```jsx
import styles from '../conference.module.css'

export default async function Page() {
  return (
    <div className={styles.parentContainer}>
      <div className='self-start whitespace-nowrap rounded-lg bg-gray-700 px-3 py-1 text-sm font-medium tabular-nums text-gray-100'>
        Last Rendered: {new Date().toLocaleTimeString()}
      </div>
      <h1>Welcome to Globomantics Speakers</h1>
    </div>
  )
}
```

- 2. First things first, we're going to fetch the speakers information for the Globomantics conference.

I'm going to define an async function here and name it `fetchSpeakers()`.

Within the function, I can define a response object, which will hold the `response` from the API call.

I'm going to apply the `await` operator and then call the `fetch` method.

Within the fetch method, I'm going to `pass the URL` to fetch from here. This is going to be a GitHub URL containing the speakers.json file for demo purposes.

```jsx
import styles from '../conference.module.css'

async function fetchSpeakers() {
  const response = await fetch(
    'https://raw.githubusercontent.com/adhithiravi/Consuming-GraphqL-Apollo/master/api/data/speakers.json'
  )
}

export default async function Page() {
  return (
    <div className={styles.parentContainer}>
      <div className='self-start whitespace-nowrap rounded-lg bg-gray-700 px-3 py-1 text-sm font-medium tabular-nums text-gray-100'>
        Last Rendered: {new Date().toLocaleTimeString()}
      </div>
      <h1>Welcome to Globomantics Speakers</h1>
    </div>
  )
}
```

- 3. Now, I can parse the JSON using the `response.json()` and store it in the `data` object here.

Finally, I can `return` the `data` here from this fetchSpeakers function.

Notice here that the `await` method is used just before parsing the JSON response as well.

```jsx
import styles from '../conference.module.css'

async function fetchSpeakers() {
  const response = await fetch(
    'https://raw.githubusercontent.com/adhithiravi/Consuming-GraphqL-Apollo/master/api/data/speakers.json'
  )

  const data = await response.json()
  return data
}

export default async function Page() {
  return (
    <div className={styles.parentContainer}>
      <div className='self-start whitespace-nowrap rounded-lg bg-gray-700 px-3 py-1 text-sm font-medium tabular-nums text-gray-100'>
        Last Rendered: {new Date().toLocaleTimeString()}
      </div>
      <h1>Welcome to Globomantics Speakers</h1>
    </div>
  )
}
```

- 4. Now by default, the request we've made will be cached until it is manually invalidated.

This means it will follow static site generation or static data fetching.

Every time the Speakers page is going to be loaded, it will pull the data from the cache and not make a request call after the very first time. All right,

- 5. the next step is within the page component, I'm going to call the `fetchSpeakers()` method that we just defined.

This will be before the component is rendered. (return)

Ensure to use the `await` function before the fetchSpeakers method is invoked.This will ensure that the promises are handled correctly.

Now we store the parsed JSON response here in the `data` object.

```jsx
import styles from '../conference.module.css'

async function fetchSpeakers() {
  const response = await fetch(
    'https://raw.githubusercontent.com/adhithiravi/Consuming-GraphqL-Apollo/master/api/data/speakers.json'
  )

  const data = await response.json()
  return data
}

export default async function Page() {
  const data = await fetchSpeakers()

  return (
    <div className={styles.parentContainer}>
      <div className='self-start whitespace-nowrap rounded-lg bg-gray-700 px-3 py-1 text-sm font-medium tabular-nums text-gray-100'>
        Last Rendered: {new Date().toLocaleTimeString()}
      </div>
      <h1>Welcome to Globomantics Speakers</h1>
    </div>
  )
}
```

- 6. Notice here within the components render, there is a `last rendered date` and time string that will be displayed.

I've added this to demo the different data fetching techniques, and the only way to validate that is using the timestamp of when a page was last rendered.

So this is specifically here for demo purposes.

- 7. Now within our render, I'm going to use the `map` function to go through the `speakers` array. We'll need the speaker's `ID`, `name`, and `bio`.

I'm going to wrap them all within a `div` tag and provide the ID as a key. Don't forget to provide a `key` because React requires that you do that when you display lists.

The next step is I'm going to add the `name` with the `h3` tag and the `bio` with the `h5` tag. And that's all we need to render here. Make sure to close all your tags.

```jsx
import styles from '../conference.module.css'

async function fetchSpeakers() {
  const response = await fetch(
    'https://raw.githubusercontent.com/adhithiravi/Consuming-GraphqL-Apollo/master/api/data/speakers.json'
  )

  const data = await response.json()
  return data
}

export default async function Page() {
  const data = await fetchSpeakers()

  return (
    <div className={styles.parentContainer}>
      <div className='self-start whitespace-nowrap rounded-lg bg-gray-700 px-3 py-1 text-sm font-medium tabular-nums text-gray-100'>
        Last Rendered: {new Date().toLocaleTimeString()}
      </div>
      <h1>Welcome to Globomantics Speakers</h1>
      {data.speakers.map(({ id, name, bio }) => (
        <div key={id}>
          <h3>{name}</h3>
          <h5>{bio}</h5>
        </div>
      ))}
    </div>
  )
}
```

- 8. We already have some styles defined in the conference.module.css, which has been imported in this file already for you.

We can provide the `infoContainer style` to the `div` tag here and the `titleText style` to the header with the speaker's `name` and the `descriptionText` style to the `bio`.

These styles are going to make our conference speakers page look pretty, and we'll see that in just a minute.

```jsx
import styles from '../conference.module.css'

async function fetchSpeakers() {
  const response = await fetch(
    'https://raw.githubusercontent.com/adhithiravi/Consuming-GraphqL-Apollo/master/api/data/speakers.json'
  )

  const data = await response.json()
  return data
}

export default async function Page() {
  const data = await fetchSpeakers()

  return (
    <div className={styles.parentContainer}>
      <div className='self-start whitespace-nowrap rounded-lg bg-gray-700 px-3 py-1 text-sm font-medium tabular-nums text-gray-100'>
        Last Rendered: {new Date().toLocaleTimeString()}
      </div>
      <h1>Welcome to Globomantics Speakers</h1>
      {data.speakers.map(({ id, name, bio }) => (
        <div key={id} className={styles.infoContainer}>
          <h3 className={styles.titleText}>{name}</h3>
          <h5 className={styles.descText}>{bio}</h5>
        </div>
      ))}
    </div>
  )
}
```

All right, so that's all we have here, and let's go ahead and hit Save.

We've written all the code to fetch the speakers data via static data fetching.

- 9. Now to demonstrate with the last rendered timestamp, I've deployed this code on the Vercel host instead of running it locally.

We'll learn more about deployments later in this course, but for now, let's directly go into the deployed URL.

Now let's get into our Globomantics app here, and we can navigate to the conference page. I'm going to click on View Speakers. There you go.

Notice here that all the speaker information is now displayed below with the big list of speakers, their names, and their bio being populated after the API call.

- 10. Now how do we know that this page follows static site generation?

Keep an eye out here at the last rendered timestamp. You see the timestamp is not going to get updated even if we refresh this page many times.

Notice that the timestamp remains the same. And I can keep hitting Refresh, but the speakers data is going to be fetched from the cache, and a real server request will not be made.

You can navigate between the pages, come back to the speakers page, and you see how quickly this page loads with all of the speaker information, but the last rendered timestamp still remains the same. Isn't that cool?

- Make sure to use this kind of static data fetching on pages that do not change in your website and leverage this huge performance boost while rendering your page.

### Demo: Static Data Fetching with Revalidation

In this clip, let's see how to perform the revalidation with static data fetching, otherwise known as incremental static regeneration.

- 1. We're back to our speakers page, and we have to modify our fetch call here to allow for revalidation.

- To revalidate cached data at a specific interval, you can use the next: revalidate option within the fetch method. The default unit is seconds.
- I'm going to add 20 seconds here as the interval for our demo purposes.

```jsx
import styles from '../conference.module.css'

async function fetchSpeakers() {
  const response = await fetch(
    'https://raw.githubusercontent.com/adhithiravi/Consuming-GraphqL-Apollo/master/api/data/speakers.json'
    {next: {revalidate: 20}}
  )

  const data = await response.json()
  return data
}

export default async function Page() {
  const data = await fetchSpeakers()

  return (
    <div className={styles.parentContainer}>
      <div className='self-start whitespace-nowrap rounded-lg bg-gray-700 px-3 py-1 text-sm font-medium tabular-nums text-gray-100'>
        Last Rendered: {new Date().toLocaleTimeString()}
      </div>
      <h1>Welcome to Globomantics Speakers</h1>
      {data.speakers.map(({ id, name, bio }) => (
        <div key={id} className={styles.infoContainer}>
          <h3 className={styles.titleText}>{name}</h3>
          <h5 className={styles.descText}>{bio}</h5>
        </div>
      ))}
    </div>
  )
}
```

We hit Save, and I'm going to redeploy our application.

- 2. Here is what will happen with this revalidation property being set.

When a request is made to the route that was statically rendered at build time, it will initially show the cached data.

Any requests to the route after the initial request and before 20 seconds are also going to be cached and instantaneous.

After the 20‑second window that we've given, the next request will show the cached data, and Next will immediately trigger a regeneration of the data in the background.

Once the route generates successfully, Next.js will invalidate the cache and show the updated route.

If the background regeneration fails for some reason, the old data would still be unaltered.

- 3. To validate this, we're going to hit Refresh on our conference speakers page here and verify the last rendered timestamp.

It does not revalidate until it hits the 20‑second interval.

Past 20 seconds, the request is made to the API, and the new data is fetched again, and the cache is updated. Isn't that neat?

Now after the 20‑second mark, you can see here that the timestamp is updated.

This revalidation and static fetching is very useful if you have data that is going to change within a given page.

### Deme: Dynamic Data Fetching ( otherwise known as the server‑side rendering.)

So far, we saw the static data fetching methods within the Globomantics app. Next, let's demo the dynamic data fetching, otherwise known as the server‑side rendering.

- 1. For this, let's fetch the conference sessions information within the `sessions page`.

- We'll be using the fetch API just like we did within the speakers page, so let's copy paste that here within the sessions page.

- 2. We'll be calling a different URL here, so I'm replacing it with the URL that fetches the conference sessions page. All right,

- 3. now we want this to perform dynamic data fetching. To do that, we'll add the `cache` property within the fetch method and provide the value `no‑store`.

This will ensure that there is no cache and the request is refreshed upon every request.

Next.js fetches the resource from the remote server on every request without looking in the cache, and it will not update the cache with the downloaded resource.

```jsx
import styles from '../conference.module.css'

async function fetchSessions() {
  const response = await fetch(
    'https://raw.githubusercontent.com/adhithiravi/Consuming-GraphqL-Apollo/master/api/data/sessions.json',
    { cache: 'no-store' }
  )

  const data = await response.json()
  return data
}

export default async function Page() {
  return (
    <div className={styles.parentContainer}>
      <div className='self-start whitespace-nowrap rounded-lg bg-gray-700 px-3 py-1 text-sm font-medium tabular-nums text-gray-100'>
        Last Rendered: {new Date().toLocaleTimeString()}
      </div>
      <h1>Welcome to Globomantics Sessions</h1>
      {/*
      {data.sessions.map(
        ({ id, title, description, room, day, track, speakers }) => (
          <div key={id} className={styles.infoContainer}>
            <h3 className={styles.titleText}>{title}</h3>
            {speakers &&
              speakers.map(({ name }) => (
                <h3 className={styles.titleText}>Speaker: {name}</h3>
              ))}
            <h5 className={styles.descText}>{description}</h5>
            <h4 className={styles.infoText}>Room: {room}</h4>
            <h4 className={styles.infoText}>Day: {day}</h4>
            <h4 className={styles.infoText}>Track: {track}</h4>
          </div>
        )
              )}*/}
    </div>
  )
}
```

- 4. now we call the getSessions function from the Page component here.

- Notice I already have the last rendered timestamp to be rendered on the page for our demo purposes.

- I also have some code commented here, which you can uncomment. It basically parses through the sessions.json just like we did within the speakers page and renders each session.

I'm going to render the session's title, description, room, day, track, and the speaker's name.

- The styles for this is already wired up and can be found in the conference.module.css file. All right,

```jsx
import styles from '../conference.module.css'

// Dynamic Data Fetching or Server Side Rendering
async function fetchSessions() {
  const response = await fetch(
    'https://raw.githubusercontent.com/adhithiravi/Consuming-GraphqL-Apollo/master/api/data/sessions.json',
    { cache: 'no-store' }
  )

  const data = await response.json()
  return data
}

export default async function Page() {
  const data = await fetchSessions()
  return (
    <div className={styles.parentContainer}>
      <div className='self-start whitespace-nowrap rounded-lg bg-gray-700 px-3 py-1 text-sm font-medium tabular-nums text-gray-100'>
        Last Rendered: {new Date().toLocaleTimeString()}
      </div>
      <h1>Welcome to Globomantics Sessions</h1>

      {data.sessions.map(({ id, title, description, room, day, track, speakers }) => (
        <div key={id} className={styles.infoContainer}>
          <h3 className={styles.titleText}>{title}</h3>
          {speakers &&
            speakers.map(({ name }) => <h3 className={styles.titleText}>Speaker: {name}</h3>)}
          <h5 className={styles.descText}>{description}</h5>
          <h4 className={styles.infoText}>Room: {room}</h4>
          <h4 className={styles.infoText}>Day: {day}</h4>
          <h4 className={styles.infoText}>Track: {track}</h4>
        </div>
      ))}
    </div>
  )
}
```

we have everything we need now. The main idea of this clip was to take a look at how we can do dynamic data fetching using the no‑store option that has been given to the cache. All right,

let's go ahead, hit Save, and redeploy our application. Here is the redeployed version of our app running.

Let's navigate to the conference page and the sessions page. Wow, there you see it. This is the sessions page that displays all the conference session information that we wanted.

Now, keep an eye out at the last rendered timestamp here. Because this is dynamically fetched data, we'll see that every time we hit Refresh on this page, the timestamp is going to get updated.

You can see that every few seconds we hit Refresh, and you see a new timestamp showing up.

This means that there is no cache and that on every fetch call, the request is being refetched. All right,

with that, we've seen all the techniques of data fetching in Next.js. Remember that with Next.js, you can pick and choose the data fetching method on a page‑by‑page basis like we've seen in this demo.

Summary

In this module, we've learned about the client and server components that come with Next.js 13. We then looked at the different data fetching approaches using static site generation, static site generation with revalidation, also known as incremental static regeneration. And finally, we also learned about server‑side rendering. In the next module, we're going to be exploring dynamic routing in Next.js.