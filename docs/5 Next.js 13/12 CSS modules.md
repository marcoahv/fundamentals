---
sidebar_position: 12
---

# CSS modules

### Next.js has built‑in support for CSS modules

which are identified using simply the extension `.module.css`.

CSS modules `locally scope CSS` by automatically creating a unique class name.

For those of you already used it in other projects may be familiar with the internals of how CSS modules work.

- It allows you to use the same class name in different files without worrying about those collisions.

(In this code snippet that you see here, you can see that speaker.module.css file contains styles for the Speakers page.

This file can be directly imported within the Speakers page, and the styles are then passed to the className parameter.

Simple enough, right?)

- Next.js's fast refresh feature when running locally

What is cool is when running locally on dev, the local style sheets, both the CSS modules and global styles, will take advantage of Next.js's fast refresh feature.

So your changes will be seen instantly on the browser as you save them.

- fewer minified .css files when building for production

Another fun fact when building for production is Next.js will build the CSS files into fewer minified .css files.

This results in improved performance because of fewer network calls.

### how to use the CSS module styles

Let's see how to use the CSS module styles within our Globomantics app.

- Here is the current state of our application.

We have a home page with links to blog, settings, and conference pages.

If you step into the conference page, you see a header, and there are links to the Speakers and Sessions page.

This black header that you see on the top is shared between all the conference pages, such as Speakers and Sessions, because it's part of the conference layout.

### creating a similar header for all our pages in our app using css modules

Now, what if I want a similar header for all our pages, including the home page, and also add these links to the other pages within that header so that they're always available.

Right now from the conference page, I can't easily go back to the home page or other pages. I'll have to explicitly type in the URL to get back to the home page.

So let's see how we can rewire some of this and utilize the CSS modules for styling each component or page.

- 1. add the links to all the other pages in the root layout within the app folder

(don't forget to import the Link component)

Since I want to share the header across all the pages, I'm going to go to the root layout within the app folder and add the links to all the other pages right here.

I'm copying and pasting from the home page, and I'm going to add that right here within our root layout.

We'll update the home page later.

```jsx app/layout.jsx
import { Open_Sans } from '@next/font/google'
import Link from 'next/link'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400'],
})

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={openSans.className}>
      <head />
      <body>
        <h3>
          <Link href='/blog'>Blog</Link>
        </h3>
        <h3>
          <Link href='/settings'>Settings</Link>
        </h3>
        <h3>
          <Link href='/conference'>Conference</Link>
        </h3>
        {children}
      </body>
    </html>
  )
}
```

- 2. Next, I want to add a link to the home page as well.

So what I'm going to do is I'm going to add a header that says Globomantics, and it's going to link back to the home page.

```jsx app/layout.jsx
import { Open_Sans } from '@next/font/google'
import Link from 'next/link'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400'],
})

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={openSans.className}>
      <head />
      <body>
        <h1>
          <Link href='/home'>Globomantics</Link>
        </h1>
        <h3>
          <Link href='/blog'>Blog</Link>
        </h3>
        <h3>
          <Link href='/settings'>Settings</Link>
        </h3>
        <h3>
          <Link href='/conference'>Conference</Link>
        </h3>
        {children}
      </body>
    </html>
  )
}
```

This is going to ensure that this header is available on each page, and there's going to be text that says Globomantics.

And clicking on that will take the user back to the home page. All right,

let's see how this looks on the browser.

You can notice that it's wired up, but there is no styling so we can improve on that.

- 3. add a new file here within the app folder.`rootStyle.module.css`.

In here, I'll add a style for the `homeLink` which is the header link for the Globomantics.
Within the style, I'm going to give styles for text decoration and set it to none,
and I'm also going to give the color as white.
This will ensure that there are no additional stylings on the link text.

Let's also add another style for the other links. I'm going to call it the `menuBarLink`.
And within this, I'm going to repeat the same style, text‑decoration set to none, and I'm going to give this a color, which is going to be a cool green.

```css app/rootStyle.module.css
.homeLink {
  text-decoration: none;
  color: #fff;
}
.menuBarLink {
  text-decoration: none;
  color: #bdfef2;
}
```

- 4. import the style within our layout.js file. The styles are then passed to the respective links.

The `homeLink` is passed to the Globomantics link text,
and the `menuBarLinks` are going to be passed to the other links as follows.

```jsx app/layout.jsx
import { Open_Sans } from '@next/font/google'
import Link from 'next/link'
import styles from './rootStyle.module.css'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400'],
})

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={openSans.className}>
      <head />
      <body>
        <h1>
          <Link className={styles.homeLink} href='/home'>
            Globomantics
          </Link>
        </h1>
        <h3>
          <Link className={styles.menuBarLink} href='/blog'>
            Blog
          </Link>
        </h3>
        <h3>
          <Link className={styles.menuBarLink} href='/settings'>
            Settings
          </Link>
        </h3>
        <h3>
          <Link className={styles.menuBarLink} href='/conference'>
            Conference
          </Link>
        </h3>
        {children}
      </body>
    </html>
  )
}
```

- 5. The next step would be to include all of these links within the header element of our html inside the body.

```jsx app/layout.jsx
import { Open_Sans } from '@next/font/google'
import Link from 'next/link'
import styles from './rootStyle.module.css'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400'],
})

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={openSans.className}>
      <head />
      <body>
        <header>
          <h1>
            <Link className={styles.homeLink} href='/home'>
              Globomantics
            </Link>
          </h1>
          <h3>
            <Link className={styles.menuBarLink} href='/blog'>
              Blog
            </Link>
          </h3>
          <h3>
            <Link className={styles.menuBarLink} href='/settings'>
              Settings
            </Link>
          </h3>
          <h3>
            <Link className={styles.menuBarLink} href='/conference'>
              Conference
            </Link>
          </h3>
        </header>
        {children}
      </body>
    </html>
  )
}
```

So I included the header tag, which means all of these links are going to be at the very top.

- 6. And I'm also going to add some styling for our header.

The most important one is the background color.
It's going to be a darker color and making sure that the content and text are all aligned to the center.

```css app/rootStyle.module.css
.homeLink {
  text-decoration: none;
  color: #fff;
}
.menuBarLink {
  text-decoration: none;
  color: #bdfef2;
}

.header {
  width: 100%;
  padding: 50px 0px 50px;
  background: #212121;
  color: #fff;
  text-align: center;
  justify-content: center;
}
```

- 7. Now we can go back into our layout file and add the styling for the header.

```jsx app/layout.jsx
import { Open_Sans } from '@next/font/google'
import Link from 'next/link'
import styles from './rootStyle.module.css'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400'],
})

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={openSans.className}>
      <head />
      <body>
        <header>
          <h1>
            <Link className={styles.homeLink} href='/home'>
              Globomantics
            </Link>
          </h1>
          <h3>
            <Link className={styles.menuBarLink} href='/blog'>
              Blog
            </Link>
          </h3>
          <h3>
            <Link className={styles.menuBarLink} href='/settings'>
              Settings
            </Link>
          </h3>
          <h3>
            <Link className={styles.menuBarLink} href='/conference'>
              Conference
            </Link>
          </h3>
        </header>
        {children}
      </body>
    </html>
  )
}
```

we're done with our layout file, and we've styled it well.

So let's go ahead and take a look at the browser to see how all of this looks now.

There you go. You see now within our home page a header, which is black, and it contains all of the things that we wanted.

This is going to be shared between all the routes, and it is much easier and intuitive to navigate between the pages now from the header here.

So you have links to the blog, the conference, and the settings.

Keep in mind that this is coming from the root layout page, which means Next.js does not keep rendering it. It is already in the cache, so your page loads are going to be faster. We're not going to rerender any of this header.

- 8.Now the next step would be to go back and clean up our home page and the conference page

remove the links from the home page since we've moved them now to the header.

```jsx home/page.jsx
import Link from 'next/link'

export default function Page() {
  return (
    <>
      <h1>Welcome to Home page</h1>
    </>
  )
}
```

And the conference page also has some additional items in the header because it was part of the `conference layout`, which I'm going to go ahead and remove. Neat.

```jsx conference/layout.jsx
import style from './styles.css'

export default function ConferenceLayout({ children }) {
  return (
    <>
      <section>{children}</section>
    </>
  )
}
```

Now that we've removed all of the things we don't need from the home page and the conference page, let's go back and see all the changes reflected on our browser.

You see now a clean home page with a header bar, and now we can navigate to the links from the home home page. And going across all of the routes, you'll see the same header being displayed statically, and you can link back and forth, go into any of the pages, and also navigate back to the home page by simply clicking the Globomantics button.