---
sidebar_position: 14
---

# Image in Next.js

### features of the Next.js Image component

The Next.js Image component extends the HTML img element with several additional features.

- Some of the cool features of the Next.js Image component are

- 1. size optimization

where it can automatically serve correctly sized images for each device using modern image formats.

- 2. Visual stability

This feature prevents layout shifts automatically when images are loading.

- 3. Faster page loads

The images are loaded only when they enter the viewport, and this feature uses the native browser's lazy loading and results in faster page loads while images are set to blur or have other placeholders.

- 4. local and remote support

Finally, the Image component supports both local images, as well as remote images from the network.

### usage of tne Image component

Here is an example usage of how the Image component looks.

```jsx
import Image from 'next/image'

export default function Page() {
  return (
    <Image
      src='https://s3/amazonaws.com/my-bucket/profile.png'
      alt='Picture of the author'
      with={500}
      height={500}
    />
  )
}
```

- You can directly import the Image component from the Next.js package via next/image.

- While using the component, you'll provide the source.

- Next, you'll provide the width and height of the image if it is pulled from the network as shown here. `This is not necessary if it is a local image file`.

- You can also see some alt text has been provided to the component, which basically describes the image to screen readers, as well as search engines.

In the next clip, let's take a look at how we can use the Image component within our Globomantics app.

### Demo: Image Component

- let's use the Next.js Image component within our Globomantics app to render optimized images.

- I want to add a background image for both the home page, as well as the conference page.

So let's go ahead and use the Image component to do just that.

We're now in the home/page.jsx file. Notice there is nothing much going on here as of now.

- 1. My first step is going to `import the Image component` from next/image.

```jsx home/page.jsx
import Image from 'next/image'

export default function Page() {
  return (
    <>
      <h1>Welcome to Home page</h1>
    </>
  )
}
```

- 2. I'm also going to `import the image file`. I'm going to import the file home‑image‑1.jpg.

This file is already available inside the images folder that you see here, and I'm going to import it with the name `OurStoryPic`.

```jsx home/page.jsx
import Image from 'next/image'
import OurStoryPic from '../../images/home-image-1.jpg'

export default function Page() {
  return (
    <>
      <h1>Welcome to Home page</h1>
    </>
  )
}
```

- 3. The final `import here will be the styles` from the home.module.css.

Here, the styles are already defined and are component‑specific styles for the home page. All right,

```jsx home/page.jsx
import Image from 'next/image'
import OurStoryPic from '../../images/home-image-1.jpg'
import styles from './home.module.css'

export default function Page() {
  return (
    <>
      <h1>Welcome to Home page</h1>
    </>
  )
}
```

- 4. now that we have all the imports that we need, let's get started with rendering the Image component.

- I'm going to have a `div` component as the parent component. And to this component, I'm going to provide a `style bgWrap`. (This is already defined within our styles for the home module.)

```jsx home/page.jsx
import Image from 'next/image'
import OurStoryPic from '../../images/home-image-1.jpg'
import styles from './home.module.css'

export default function Page() {
  return (
    <>
      <div className={styles.bgWrap}></div>
      <h1>Welcome to Home page</h1>
    </>
  )
}
```

- And right here, I can `include the Image component`.

The first thing that the Image component needs is the `source`, so our source here is the imported image file, `OurStoryPic`.

I'm also going to provide an `alt` text to it, which is going to read out `OurStoryPic`.

Next, I'm going to provide a property called `quality` and give it the value of 100.

(Here, 100 refers to the best quality of the image. You could provide lower numbers if you're not looking for the highest quality of the image to be rendered.)

Next, I'm going to provide a `placeholder` property and give it a value, `blur`.

(A placeholder is a really cool property, which is a part of the Next.js Image component, which is used while the image is loading. The possible values could be blur or empty for local images, and it defaults to empty. When it's empty, there will be no placeholder. And while the image is loading, you'll only see an empty space. But if you give the value blur, you'll see that the image looks sort of blurred until it is loaded. You'll see that in just a minute once we're done coding our Image component here.)

The next property I'm going to add is `sizes`, and I'm giving it a value `100vw`.

(This is basically a string that provides information about how wide the image will be at different breakpoints. Here, vw stands for the viewport width.)

Now instead of providing the height and width, I'm also going to provide a Boolean property called `fill`, which is going to be set to true.

(When fill is true, it causes the image to fill the parent element instead of setting the width and height explicitly.)

The default image fit behavior will stretch the image to fit the container, and you may prefer to set a property `objectFit` to `contain` for an image,

(which is letter box to fit the container and also preserve the aspect ratio of the image.)

(Alternatively, you could also provide the value `cover`, which will cause the image to fill the entire container and be cropped to preserve the aspect ratio.)

(This really depends on the design that you get from UX. And for this to look correct, you'll also have to include the `overflow hidden` style to your parent element.)

In our example, we're going to provide the style `objectFit` set to `cover`.

(And notice that in the home.module.css, the parent wrapper bgWrap style has the overflow hidden property already set for you. All right,)

```jsx home/page.jsx
import Image from 'next/image'
import OurStoryPic from '../../images/home-image-1.jpg'
import styles from './home.module.css'

export default function Page() {
  return (
    <>
      <div className={styles.bgWrap}>
        <Image
          src={OurStoryPic}
          alt='Our story pic'
          quality={100}
          placeholder='blur'
          sizes={'100vh'}
          fill
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
      <h1>Welcome to Home page</h1>
    </>
  )
}
```

with this, the Image component is wired up and ready.

- 5. I'm also going to paste some text that will be displayed on the home page in addition to this image.

The text is going to be displayed on top of the image, and it would be some heading text and some paragraph. All right,

now let's go ahead and hit Save, and let's check out our home page. There you go.

You see the image rendered in the background of the home page and some text on the top of it.

(Now what you can do is reset the cache here and try again. Notice that there is a blue blur here as the placeholder until the image loads. Isn't that pretty cool? Once the image loads one time, you will not see this blur effect again when you come back to it. So if you go to a different page and come back to the home page, you won't see this effect anymore because the image is already loaded and waiting for you in the cache. If you ever want to debug and see this blur again, you'll have to reset your cache and refresh again to see that blur effect.)

- 6. Now using the same methods, let's add an image to the conference page as well.

- I'm copying the same code that we had on the home page, and I'm going to add it to the conference page.

We're going to tweak the image that is imported to be `media‑image‑1.jpg`,

and I'm going to call it the `ConferencePic`,

and we're going to now pass this `ConferencePic` as the source to our Image component.

Everything else remains the same.

```jsx conference/page.jsx
import Link from 'next/link'
import Image from 'next/image'
import ConferencePic from '../../images/media-image-1.jpg'
import styles from './conference.module.css'

export default function Page() {
  return (
    <>
      <div className={styles.bgWrap}>
        <Image
          src={ConferencePic}
          alt='Conference pic'
          quality={100}
          placeholder='blur'
          sizes={'100vh'}
          fill
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
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

- I'm also going to paste a different text to be displayed here on the conference page.

It's going to have a welcome header and links to the Speakers and Sessions page.

Let's also remember to import the styles for this component from the conference.module.css file, which already contains the styles for the Conference component.

Within the styles, I'm going to make a small tweak. I'm going to make the color of all the text to be white since the background for the image that we're going to be using will be dark. All right,

```css
.bgWrap {
  position: fixed;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  z-index: -1;
}
.bgHeader {
  margin: 0;
  padding-top: 25px;
  font-size: 56px;
  font-weight: 800;
  line-height: 45px;
  text-align: center;
  color: #fff;
}

.bgText {
  margin: 0;
  font-size: 30px;
  padding-top: 25px;
  text-align: center;
  font-style: italic;
  color: #fff;
```

you're all set. Let's hit Save and refresh your browser.

You can see images now on both the home page and the conference page. And when the image loads for the very first time, it takes a second or so, and you can see a blur effect on both the home page, as well as the conference page. With this, you've learned how to use images within your Next.js app.

### Summary

In this module, we've learned about working with the font component in Next.js and the optimizations that come with the Font component. We also learned about styling Next.js apps using CSS modules, as well as global styles. We then looked into the Image component and how it is being optimized as well. In the next module, we're going to be getting into learning rendering and data fetching techniques in Next.js.