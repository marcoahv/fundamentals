---
sidebar_position: 10
---

# Font in Next.js

### install @next/font package.

- The `Next.js Font component` comes in a separate package,
  and it is not part of the Next.js package itself.

The package includes built‑in automatic self‑hosting for any font file.

This means you can optimally load web fonts with zero layout shift. Isn't that neat?

To put it in simple words, the next/font will automatically optimize the fonts and remove external requests for improved privacy and performance.

This includes any custom fonts that you add as well.

You can run the npm install command to install the dependencies and run npm run dev to restart your dev server.

```
npm install @next/font
```

And you can go to our package.json file, and you'll be able to see that the next slash font package has been added as a dependency.

- All right, the next step would be to ensure that you restart your dev server.

```
npm run dev
```

### google fonts in next.js 13

- Next.js is also strongly recommends that you use `variable fonts` for the best performance and flexibility.

- With Next.js font, you can automatically self‑host any Google font, and these fonts are included in the deployment and serve from the same domain as your deployment.

So there are no requests that are sent to Google by the browser.

let's go ahead and open our root layout file, which is within the app folder.

### adding fonts in our application

the fonts are defined in the app/layout.js file, which is the root layout file for your app.

As of Next.js 13, here's where you would be including the font package and including the font that you want for your application.

- Here I'm going to first `import the font` that I'm planning to use. It's going to be Open_Sans, and it seems like a good option for our app. And I'm going to import it from @next/font/google, which is where you can find this font.

```jsx page/layout.jsx
import { Open_Sans } from '@next/font/google'

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head />
      <body>{children}</body>
    </html>
  )
}
```

- The next step would be to `instantiate the Open_Sans object` by providing the subsets.

Now Google Fonts are automatically subset, which means it reduces the size of the font file and improves performance. So you'll need to define which of these subsets you want to preload.

I'm going to `include just latin as the subset` here, and the font weight is optional.

```jsx page/layout.jsx
import { Open_Sans } from '@next/font/google'

const openSans = Open_Sans({
  subsets: ['latin'],
})

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head />
      <body>{children}</body>
    </html>
  )
}
```

- You can provide an array of `font weight` here.

If it is a variable style, like the open sans font that we're using, you do not need to provide the weight here. It's optional.

But if you're using other types of fonts, then you'll have to provide it a weight here.

```jsx page/layout.jsx
import { Open_Sans } from '@next/font/google'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400'],
})

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head />
      <body>{children}</body>
    </html>
  )
}
```

- The next step is to pass the className to the html tag within the RootLayout component

and we're going to call it openSans.className.

```jsx page/layout.jsx
import { Open_Sans } from '@next/font/google'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400'],
})

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={openSans.className}>
      <head />
      <body>{children}</body>
    </html>
  )
}
```

Hit Save and you're done.

Now this font is going to be applied to our entire application.

So let's go ahead and take a look at the Globomantics app and hit Refresh. There you go. You see this new font being applied to our application.

You can move to different pages, go to the conference page, go back, and notice that this font has been updated, and now we have the open sans font, which comes from Google Fonts, within our Globomantics app.

### define local fonts at RootLayout

You can also use local fonts within your application.

To do that, you'll be using the `next/font/local` package, which also comes with the next/fonts package.

All you'll need to include in addition would be the source file for the local font as shown here in this example.

```jsx page/layout.jsx
import localFont  from '@next/font/local'

// Font files can be located inside of 'app'
const myFont = localFont({ src: "./my-font.woff2
})

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={myFont.className}>
      <head />
      <body>{children}</body>
    </html>
  )
}
```

Everything else remains the same and works just like the Google Fonts that we saw earlier.

And with that, you've learned how to use the next/font package to use and load fonts optimally within your Next.js application.
