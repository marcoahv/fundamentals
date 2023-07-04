---
sidebar_position: 19
---

# Exploring Dynamic Routing in Next.js

### Defining Dynamic Routes in Next.js

- When you don't know the exact route or segment name ahead of time, you can create routes for dynamic data using what is called as dynamic routes or dynamic segments in Next.js.

- 1. Now what if you wanted to create specific URLs for each speaker?

Something like /conference/speaker/123. An ID here is dynamic and depends on each speaker. That is where dynamic segments come in play.

- 2. You can create a dynamic segment by wrapping a folder's name within square brackets.

```
app/conference/speakers/[slug]
```

For example, you see a slug folder name within the speakers folder, and this slug within square brackets represents a dynamic route.

Within this folder, you'll create a page.js file, which will render the component for speakers/speaker-id.

```
app/conference/speakers/[slug]/page.jsx
```

After rendering, they'll translate into routes such as /speakers/speaker1, /speakers/speaker2, and so on.

Here is a code snippet that shows a dynamic segment for a speakers page.

```jsx app/conference/speakers/[slug]/page.jsx
export default function Page({ params }) {
  return <div>My speaker Page</div>
}
```

The page.js will be placed within the slug folder within the speakers folder as seen here.

This represents an individual speakers page.

For dynamic segments, params are passed as props. These can be leveraged by Page, Layout, and Head components.

### Demo: Dynamic Routing

- In this clip, let's add a dynamic segment within the Globomantics app for a specific Speakers page.

We're within our IDE here, and make sure to check out the before folder for this exercise before you get started.

- 1. Within our speakers folder here, go ahead and create a new folder. Let's call it [slug] within square brackets.

```
app/conference/speakers/[slug]
```

- The square brackets here is necessary and tells Next.js that this is a dynamic route.

- You can call it slug, id, or any name you want for your folder structure.

- 2. Within the slug folder, go ahead and create a page.jsx file.

```
app/conference/speakers/[slug]/page.jsx
```

- 3. Now within our `Speakers page`, we're going to `add a link` that will take you to the specific speaker's page when the `name` is clicked.

- Notice here that the `href` that we're going to pass is `/conference/speakers/${name}`.

- Now the name here is dynamic and depends on what speaker's name that the user is going to click.

(also, added the styles)

I'm going to have all of this wrap within the Next.js Link component, and it should work once we have everything wired up.

```jsx
import styles from '../conference.module.css'
import Link from 'next/link'

export let speakerJson = {}

// Static data fetching
async function fetchSpeakers() {
  const response = await fetch(
    'https://raw.githubusercontent.com/adhithiravi/Consuming-GraphqL-Apollo/master/api/data/speakers.json'
  )

  const data = await response.json()
  speakerJson = data
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
          <Link className={styles.bgLinks} href={'/conference/speakers/${name}'}>
            <h3 className={styles.titleText}>{name}</h3>
          </Link>
          <h5 className={styles.descText}>{bio}</h5>
        </div>
      ))}
    </div>
  )
}
```

- 4. now within the /slug/page.js file, we'll create a Page component.

The Page component will have the params as a prop, and this contains the name of the slug.

```jsx [slug]/page.jsx
export default async function Page({ params }) {}
```

- 5. I'm going to define a function called fetchSpeakerInfo and pass this params property to it.

```jsx [slug]/page.jsx
function fetchSpeakerInfo(params) {
  // API call, DB Query, fetch from the app
}

export default async function Page({ params }) {}
```

Now this function could be a fetch call to an API to fetch a specific speaker's information based on their ID or name. It could be a database query or simply retrieving something stored within the application. This depends on what you have going on within your web application.

- 6. For the sake of simplicity in our case, the speakerJson, which was fetched by the Speakers page, is imported within this file.

```jsx [slug]/page.jsx
import { speakerJson } from '../page'

function fetchSpeakerInfo(params) {
  // API call, DB Query, fetch from the app
}

export default async function Page({ params }) {}
```

- 7. We're going to use the `array.find` function to find the speaker whose name matches with the name we're provided from the slug.

The slug here is passed to us via the params property.

In here, we'll check if the speaker.name equals the params.slug. And if it is true, then we found the correct speaker that the user has clicked on.

```jsx
import { speakerJson } from '../page'

function fetchSpeakerInfo(params) {
  // API call, DB Query, fetch from the app

  const speakerInfo = speakerJson.speakers?.find((speaker) => speaker.name == params.slug)
}

export default async function Page({ params }) {}
```

- 8. We're going to `return` the speakerInfo with the specific speakers object, and then we're done.

```jsx
import { speakerJson } from '../page'

function fetchSpeakerInfo(params) {
  // API call, DB Query, fetch from the app

  const speakerInfo = speakerJson.speakers?.find((speaker) => speaker.name == params.slug)

  return speakerInfo
}

export default async function Page({ params }) {}
```

- 9. Now let's go ahead and call this function within the `Page` component and pass to it the params.

- This is how the fetchSpeakerInfo is going to contain the params.slug, which contains the name of the specific speaker.

```jsx
import { speakerJson } from '../page'

function fetchSpeakerInfo(params) {
  // API call, DB Query, fetch from the app

  const speakerInfo = speakerJson.speakers?.find((speaker) => speaker.name == params.slug)

  return speakerInfo
}

export default async function Page({ params }) {
  const speakerInfo = fetchSpeakerInfo(params)
}
```

- 10. Now we're all set, and we can simply destructure the speakerInfo and store the name, bio, ID, and sessions within a const.

```jsx
import { speakerJson } from '../page'

function fetchSpeakerInfo(params) {
  // API call, DB Query, fetch from the app

  const speakerInfo = speakerJson.speakers?.find((speaker) => speaker.name == params.slug)

  return speakerInfo
}

export default async function Page({ params }) {
  const speakerInfo = fetchSpeakerInfo(params)
}
```

- 11. Within the Page component now, I can render the name, bio, and the sessions that will be presented by this specific speaker.

he styling is already done and comes from the conference.module.css so we don't have to worry about it.

```jsx
import { speakerJson } from '../page'
import styles from '../../conference.module.css'

function fetchSpeakerInfo(params) {
  // API call, DB Query, fetch from the app

  const speakerInfo = speakerJson.speakers?.find((speaker) => speaker.name == params.slug)

  return speakerInfo
}

export default async function Page({ params }) {
  const speakerInfo = fetchSpeakerInfo(params)

  const { name, bio, sessions } = speakerInfo

  return (
    <div key={id} className={styles.infoContainer}>
      <h3 className={styles.titleText}>{name}</h3>
      <h5 className={styles.descText}>About: {bio}</h5>
      {sessions &&
        sessions.map(({ name, id }) => (
          <div key={id}>
            <h5 className={styles.descText}>Session: {name}</h5>
          </div>
        ))}
    </div>
  )
}
```

To recap what we're rendering here within the Page component is simply going to be the name of the speaker, their bio, and the sessions that they're presenting, and we've got all of this information about the specific speaker using the params.slug.

All right, we're all set. Let's go ahead and hit Save and see how this looks within our application.

We're within our Globomantics app. Let's go ahead and click on Conference and View Speakers.

The View Speakers page loads and has tons of speakers and their information. It contains a huge list.

Now we can click on any of the individual speaker's name now. I'm going to go ahead and click on Reed Watts, and there you go.

You see a new page show up with the new URL here. The URL you see is /conference/speakers/ReedWatts, and this this is a dynamically generated URL. It contains Reed Watts' name, bio, and the session information about the session they're presenting. Pretty cool, isn't it?

Now I can go back to the Speakers page and click on a different speaker. Let's go ahead and pick Rebecca Silva this time, and there you go.

The URL is updated to /speakers/RebeccaSilva and contains her name, bio, and session. You get the idea, right?

This is how you set up dynamic routes within Next.js, and you can create as many dynamic routes as you want within your Next.js application.
