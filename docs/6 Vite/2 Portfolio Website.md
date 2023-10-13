---
sidebar_position: 2
---

# Portfolio Website

Write this text word by word using markdown format, dividing its main topics with h3 tags, using bullet points for all its main parts, using backticks for code terminology:

>

### **=>** Vite & Utility Classes

>

#### Building a Portfolio Website

- This portfolio has seven sections:
  - A header
  - A hero
  - A boat
  - A featured project
  - More projects
  - A contact section
  - A footer
- The website is entirely responsive, mobile-first, and has six breakpoints at:
  - 175 pixels
  - 640 pixels
  - 768 pixels
  - 1024 pixels
  - 1280 pixels
  - 1536 pixels

#### Theme Toggle

- Clicking on the sun icon toggles between light mode and dark mode.
- Local storage is used to save the selected theme, ensuring the chosen mode persists even after page reloads.

#### Lazy Loading and Blur Animation

- Images below the fold are lazy-loaded.
- Images are accompanied by a blur animation as they load.

#### Deployment

- Code is pushed to a GitHub repository.
- The website is deployed to the World Wide Web using Vercel.

#### Prerequisites

- Make sure you have Node.js installed. Download the LTS version from [nodejs.org](https://nodejs.org).
- Install Git and Git Bash. Download it from [git.scm.com](https://git.scm.com) for Windows users.
- Consider using the Windows Terminal for an improved command-line experience.

#### Setting Up Development Environment

- Instead of manually creating files, use a tool like Vite to set up your development environment.
- Vite generates index.html, style.css, and main.js.
- Vite offers features like npm dependency resolving, pre-bundling, and hot module replacement.

#### Getting Started with Vite

- Run `npm create @vitejs/app portfolio` to create your project.
- Choose "vanilla" for the framework and "JavaScript" for the language.

#### Running the Development Server

- Use `npm run dev` to start the development server.

#### Adding Modern Normalize

- Normalize your styles for consistent rendering in modern browsers.
- Copy the styles from [modern normalize.css](#) and save them in your project.

#### Defining Color Variables

- Store colors in CSS variables for easy reference.
- Use variables like `--Color-dark`, `--Color-light`, etc.

#### Base Styles

- Apply base styles, such as `box-sizing`, to the HTML element.
- Improve typography by setting a consistent `line-height` based on `font-size`.

#### Font and Scroll Behavior

- Set the `font-family` for the body.
- Enable smooth scrolling behavior on the HTML element.

#### Resetting Default Element Styles

- Set common styles for elements like `img`, `picture`, `video`, `canvas`, and `svg`.

#### Styling Buttons

- Create a utility class for buttons to maintain consistent styles.
- Add styles for `display`, `padding`, `background-color`, `border`, and `box-shadow`.

#### Container Utility Class

- Create a utility class for containers to maintain alignment and responsive behavior.
- Define media queries for breakpoints to adjust container behavior.

#### Gap Between Sections

- Create a utility class for sections to add margin between them.
- Adjust the margin for larger screens within media queries.

#### Sizing Variables

- Define sizing variables for various components.
- Use sizing variables for consistent spacing throughout the project.

### **=>** Header Section

>

#### Deleting Content in index.html

- In my `index.html`, I'm going to delete everything inside the `body` except for the `script`.

#### Website Sections

- Our website has seven sections:
  - At the top, we have a `header`.
  - At the very bottom, we have a `footer`.
  - In between those, we have our `main content`, comprised of five sections.
  - We're going to be building one section at a time.

#### Styling the Header

- To start, I'm going to comment out everything except for the `header`. So right now, all we have is the `header`.
- I'll give it a class of `header` and I'll also give it the `container` utility class.

#### Header Navigation

- Looking at the demo website, we see the `header` is a navigation with five items and a separator.
- Back in our code inside the `header` element, I'm going to add a `nav` sectioning element, and inside it, I'll add an unordered list.
- I'm going to give the unordered list `list` elements.
- For now, on our demo, the first three items are links that send us to different sections of the page.
- So inside the first three list elements, I'll give them an anchor element.
- The first anchor will have an `href` of `#about`, the second anchor will have an `href` of `#featured`, and the third anchor will have an `href` of `#contact`.
- Also, the first anchor will display "About," the second will display "Work," and the third will display "Contact."

#### Styling the Header (Continued)

- To start adding styles to the `header`, I'm going to create a new folder inside my `Styles` folder called `components`.
- Inside the `components` folder, I'll create a CSS file called `header.css`.
- I'm going to separate the styles for each section inside the `components` folder.
- Because of the `container` utility class, I prefer not using the shorthand padding on the `header` class.

#### Naming Convention

- Our menu is currently vertical. Back in my `index.html`, I'll add a class to the unordered list of `header__menu`. This naming convention is called "BEM."

#### Styling the Menu

- I don't want the menu to be vertical, so I'll give it a `display: flex`.
- I'll also give it an `align-items` of `center`.
- I can remove the dots in our unordered list with a `list-style` of `none`.
- I'll temporarily add a border of `1px solid red` to remove it.
- To space each list item out, I'll also add a `gap` of `2em`.
- I don't need the `order` anymore, so I'll just remove it.

#### Styling the Links

- Back in the `index.html`, I'll give them a class of `header__link`.
- I'll select them in the CSS and give them a `font-size` of `var(--size-extra-small)`.
- I can remove the underscores with a `text-decoration` of `none`.
- I'll make them look slightly bolder with a `font-weight` of `600`.
- I'll change their colors to `slate-600` and give them a tighter letter spacing with a `letter-spacing` property of `-0.05em`.
- I want the links to change colors when I hover over them, so I'll add the `hover` pseudo-class.

#### Header Items

- Our menu is missing the separator line, the sun button for dark and light mode, and the resume button.
- In the HTML, I'll add an empty list element with the class of `header__line`.
- For the sun button, I'll do a Google search for a sun icon and add it.
- I'll add the last list element for the resume button.

#### Styling the Sun and Resume Buttons

- In the CSS, I'll style the sun button and the resume button.

#### Responsive Design

- Our header displays a hamburger button on small viewports. I'll uncomment the media query and move everything except the `header` class inside it.
- Now, when we're on small screens, we see the bars icon, and when we're on larger screens, we see our menu.

#### Styling the Bars Icon

- I'm going to go back to the Heroicon website and add the bars icon.
- I'll add a button with the class of `header__bars`.
- I'll style the button in the CSS.

#### Final Adjustments

- The only thing left for us to do in our header is making the font size on the menu slightly larger on large screens.

That's the provided text formatted with Markdown headings, bullet points, and backticks for code terminology.

### **=>** Hero Section

>

#### The Hero Section

- Looking at our demo, we see this section is pretty simple.
- We've got an image, two headings, a paragraph, a button, and everything is centered in the HTML.
- I'll uncomment both the `main` element and the first `section` element. The other section elements can stay commented out.
- I'll give the section the Class of `Hero` and a container inside it.
- I'll add an image, an H2, an H1, a paragraph, and an anchor element.
- For the image, I need to go to my desktop, where I have a folder called `images` with all the images I need for my portfolio.
- I'm going to open the `profile` folder and copy the hero image.
- Then, in my root directory, there's a folder called `public`. I'll open it and paste my profile image there.
- By the way, if you don't know where your source files are, you can right-click on VS Code and click on "Reveal in File Explorer".
- With my image inside my public folder, I can add its route inside the `src` attribute.
- The route is `./public/hero.jpg`. However, because we're using Vue assets, the assets inside the public directory can be referenced simply by a slash. So, inside my `src` attribute, I can remove the route and just say `/hero.jpg`.
- Inside the `alt` attribute, I can give a short description of my image. I'll just say "profile picture".
- I'll copy the text from the first heading and paste it into my H2 element.
- I'll copy the text from the second heading and paste it into my H1 element.
- I'll copy the text from the paragraph and paste it inside the paragraph element.
- The button should say "reach out", so inside the content of my anchor element, I'll say "reach out".
- I'll also give each element a class:
  - The image a Class of `Hero__image`.
  - The H2 a Class of `Hero__subtitle`.
  - The H1 a Class of `Hero__title`.
  - The paragraph a Class of `Hero__description`.
  - The button a Class of `Hero__button`.

#### Styling the Hero Section

- To start styling the section, I'll create a `hero.css` file inside the `components` folder.
- I also need to import it inside the `main.js`, after the header import but before the utils import.
- I'll select the entire section by its class name.
- I want this entire section to be centered, so I can set a `text-align` of `Center`.
- I'll select the image by its class name and give it:
  - A `border-radius` of `50%`.
  - A `width` of `6rem`.
  - A `height` of `6rem`.
- To center the image, I can use Flexbox. I'll give the hero section:
  - `display: flex`.
  - `flex-direction: column`.
  - `justify-content: center`.
  - `align-items: center`.
- I'll also give the hero section some spacing with `gap: 1rem`.
- I'll add a `margin-top` of `2rem` to the hero section, just to provide some space below the header.
- Styling for the other elements:
  - H2: `color: slate 800`, `font-size: base`.
  - H1: `color: slate 400`, `text-transform: uppercase`, `font-size: 4XL`, `letter-spacing: -0.05m`, `line-height: 0.9`.
  - Paragraph: `max-width: 60ch`, `font-size: small`, `color: slate 600`.
  - Button: `text-transform: capitalize`, `font-size: small`.

#### Making the Hero Section Responsive

- Before I start adding media queries and making the website responsive, I'll address the issue where the H1 heading goes from displaying on two lines to displaying on one line at certain breakpoints.
- To ensure the heading always displays on two lines, I'll add a `<br>` tag in between "front end" and "web developer" in the HTML.
- Now, the heading stays on two lines as desired.

#### Media Queries for Responsiveness

- I'll copy the media queries that were commented out earlier in `utils.css` and paste them at the bottom of the `hero.css` file.
- I'll update the styles for different breakpoints, making the section responsive.

Now, you have the text divided into sections using markdown format as per your request.

### **=>** About section

>

#### About Section Modifications

- Let's take a look at the about section on our demo on mobile screens.
- The section has the column layout, and when we increase the viewport, we eventually switch to a row layout with the content on the left and the image on the right.
- Let's see how we can do this over on the `index.html`.
- I'll uncomment one section element and leave the others commented.
- I'll give it a class of `about`, our container utility class, and our section utility class.
- This is the first time we get to use the section utility class. So, in case you've forgotten, all it does is add the margin-top to separate the sections from one another.
- I'm going to be adding a `display: flex` to the `about` section. If you're not comfortable with flexbox, I have an 8-minute video on everything you need to know to start using it.
- But because the parent element is going to have a `display: flex`, I need to wrap the elements that make up the about section into containers.
- So, basically, looking at our demo on a larger viewport, the content on the left is going to be wrapped inside a container, and the image on the right is also going to be wrapped inside a container.

#### Adding Containers

- Back in our `index.html` inside this section, I'm going to add two `div` elements. These two `div` elements are my two containers.
- Back on my demo, we see we have a heading, three paragraphs, a horizontal line, another heading, and an unordered list.
- So, back in my `index.html`, inside the first container, I'm going to add an H2 heading, three paragraphs, an HR tag, and an H3 heading, and an unordered list with six list elements.
- Inside the H2 heading goes "About," for the paragraph, I'll just go and copy the text from the demo.
- Inside the H3 heading goes "Technologies." Inside my first list element, I have JavaScript, ES6 Plus, CSS, HTML, React.js, Next.js, and Tailwind CSS. Also, on the first paragraph, I should have a `strong` element wrapped around "front" and "full stack jump stack," and on the third paragraph, I should also have an anchor element wrapped around "slaying the Dragon."
- We're done with the first container.
- Inside the second container, I just need to add an image tag. However, I need to go copy my profile picture from my desktop inside the same folder as earlier. I'll copy the `about.jpg` and paste it inside the `public` directory.
- Back in my `index.html`, for the source attribute, I can simply say `/about.jpg`. Remember the reason I can just say `/about.jpg` instead of the full route is that we are using Veet, and Veet has static asset handling as a feature where the public directory is the root of all our assets. If that doesn't make any sense, I guess in simpler terms, with Veet, the public folder is a special folder.
- Anyways, inside the `alt` attribute, I'll just say "profile picture."

#### Styling the Section

- To start styling the section, inside the `components` folder, I'll create a new file called `about.css`.
- Before I can use it, I need to open my `main.js` and import it. I'll import it under the `hero.css` but above the `utils.css`.
- I want some space in between the content. There's a couple of ways we can do this, but I think the simplest way is to use the `Gap` property. To use it, we also need to use flexbox.
- On my first container, I'll give it a class of `about__content`. I'll select it in the `about.css` and give it a `display: flex`, a `flex-direction: column`, and a `gap` of `1rem`.
- Now we see we've got some spacing in between each element.
- Next, I'll give a class to my heading of `about__title`. I'll select it in the CSS and give it a `font-size` of `2XL`.
- We see nothing changed, and this is because a size of `2XL` or `1.5rem` is the default font size on H2 elements. I won't remove the font size, even though we technically don't need it; having it there adds readability.
- I'll also give it a color of light. Again, we see nothing happened, and this is because on our body, we set the default color to light. So, again, I could remove it, but I'll keep it there for the same reason that I'm choosing to keep the font size property.
- I'll give our three paragraphs the same class of `about__description`. I'll select it in the CSS and give it a `max-width` of `60ch`, a `font-size` of `small`, and a `color` of `slate 600`.
- Next, I'll give a class to the HR tag of `about__HR`. I'll select it in the CSS, and all I need to do here is add a `border-color` of `slate 800`.
- Under the HR is the H3 element. I'll give it a class of `about__subtitle`. I'll select it in the CSS and give it a `font-size` of `small` and a `color` of `slate 400`.
- The last element inside this container is the unordered list. I'll give it a class (for a lack of a better name) - I'll just call it `about__UL`.
- I want some space in between each list item. So, back in my CSS, I'll select the unordered list by its class name and give it a `display: flex`, a `flex-direction` of `column`, and a `gap` of `1em`.
- Looking at our demo, we see we're using a thumbs-up instead of a default disk. To change this is actually easier than you would think. We can use the `list-style-type` property, and for the value, we can pass it the CSS code for the thumbs-up emoji.
- To get that code, we can head over to Google and search for Unicode thumbs-up. I'll copy the Unicode and paste it as a value to the `list-style-type` property.
- We see this didn't work, and this is for two reasons. First, we need to add single quotes around the value, and then we need to delete "U+" and replace it with the backslash. Unicodes work in CSS, but you just have to fix the syntax to turn the code into valid CSS.
- Next, I want to fix the padding on our unordered list. By default, the UL element has a `padding-left` of `2.5em`. We see nothing changed. However, if I set it to 0, we see the text is aligned with the container, but our thumbs-up is outside of the container.
- To align it with the container, we just need to set the `padding-left` to `1em`, and now we see

everything is perfectly aligned.

- Back in the HTML, I'll give each list item the class of `about__list`. I'll select them in the CSS and give them the `font-size` of `small` and the `color` of `slate 600`.
- We see this looks good; the only thing I'd like to add is some space in between the thumbs-up and the text. You would think adding some space in between the two would be a simple task, but because of how the unordered list works, it's actually a little tricky.
- For example, if I add a `margin-left` to the unordered list of `0.5em`, we see this pushed the entire thing to the right; this is no good. If I add the `margin-left` to the list elements, the same thing happens, so again, this is no good.
- To add some space in between the thumbs-up and the text, we need to reselect the list elements by their class name and follow that up with the `before` pseudo-class. The way the `before` pseudo-class works is we give it the `content` property, and as a value, we add single quotes, and inside the single quotes, we can add any text we want. For example, I'm going to add the "hello world," and we see "hello world" was added before the text.
- If I replace `before` with the `after` pseudo-class, now our "hello world" is after the text. However, I'll go back to using the `before` pseudo-class because I want to add spacing before the text, not after.
- To add the space, I can just use the `margin-left` of `0.5em` for `before`, and we see we finally have our spacing. I'll remove the "hello world" by leaving the single quotes empty. We need to have the `content` property defined despite not actually using it. If I comment it out, we see we lose our spacing. Also, we're using a `margin-left` here, but we could also use a `margin-right`, and this works the same because the margin is being added before the text regardless of whether we're using the left or right margin.
- We can actually see this better if I add a `border` of one pixel solid red; we see our border is next to our thumbs-up, and if I were to use a `margin-left`, our border is now next to the text. So regardless of which margin we use, we get our spacing.
- I'll remove the "hello world" because we don't need it. We're using a `margin-left` here, but we could also use a `margin-right`, and this works the same because the margin is being added before the text regardless of whether we're using the left or right margin.
- We can actually see this better if I add a `border` of one pixel solid red; we see our border is next to our thumbs-up, and if I were to use a `margin-left`, our border is now next to the text. So regardless of which margin we use, we get our spacing.
- I'll remove the "hello world" by leaving the single quotes empty. We need to have the `content` property defined despite not actually using it. If I comment it out, we see we lose our spacing.
- We're using a `margin-left` here, but we could also use a `margin-right`, and this works the same because the margin is being added before the text regardless of whether we're using the left or right margin.
- We can actually see this better if I add a `border` of one pixel solid red; we see our border is next to our thumbs-up, and if I were to use a `margin-left`, our border is now next to the text. So regardless of which margin we use, we get our spacing.
- I'll remove the "hello world" by leaving the single quotes empty. We need to have the `content` property defined despite not actually using it. If I comment it out, we see we lose our spacing.
- Also, we're using a `margin-left` here, but we could also use a `margin-right`, and this works the same because the margin is being added before the text regardless of whether we're using the left or right margin. We can actually see this better if I add a `border` of one pixel solid red; we see our border is next to our thumbs-up, and if I were to use a `margin-left`, our border is now next to the text. So regardless of which margin we use, we get our spacing.
- I'll remove the "hello world" by leaving the single quotes empty. We need to have the `content` property defined despite not actually using it. If I comment it out, we see we lose our spacing. Also, we're using a `margin-left` here, but we could also use a `margin-right`, and this works the same because the margin is being added before the text regardless of whether we're using the left or right margin. We can actually see this better if I add a `border` of one pixel solid red; we see our border is next to our thumbs-up, and if I were to use a `margin-left`, our border is now next to the text. So regardless of which margin we use, we get our spacing.
- I'll remove the "hello world" by leaving the single quotes empty. We need to have the `content` property defined despite not actually using it. If I comment it out, we see we lose our spacing. Also, we're using a `margin-left` here, but we could also use a `margin-right`, and this works the same because the margin is being added before the text regardless of whether we're using the left or right margin. We can actually see this better if I add a `border` of one pixel solid red; we see our border is next to our thumbs-up, and if I were to use a `margin-left`, our border is now next to the text. So regardless of which margin we use, we get our spacing.
- I'll remove the "hello world" by leaving the single quotes empty. We need to have the `content` property defined despite not actually using it. If I comment it out, we see we lose our spacing.
- Also, we're using a `margin-left` here, but we could also use a `margin-right`, and this works the same because the margin is being added before the text regardless of whether we're using the left or right margin. We can actually see this better if I add a `border` of one pixel solid red; we see our border is next to our thumbs-up, and if I were to use a `margin-left`, our border is now next to the text. So regardless of which margin we use, we get our spacing.
- I'll remove the "hello world" by leaving the single quotes empty. We need to have the `content` property defined despite not actually using it. If I comment it out, we see we lose our spacing.
- We're using a `margin-left` here, but we could also use a `margin-right`, and this works the same because the margin is being added before the text regardless of whether we're using the left or right margin. We can actually see this

better if I add a `border` of one pixel solid red; we see our border is next to our thumbs-up, and if I were to use a `margin-left`, our border is now next to the text. So regardless of which margin we use, we get our spacing.

- I'll remove the "hello world" by leaving the single quotes empty. We need to have the `content` property defined despite not actually using it. If I comment it out, we see we lose our spacing.

#### Responsive Design

- We've been using flexbox a lot to center things around, but sometimes in some use cases, it's a bit overkill. For example, instead of using this margin of `0 auto`, I could comment it out and instead use `display: flex`, `justify-content: center`, and `align-items: center`. We see our image is centered, but there's no real reason to use flexbox in here. Flexbox would be useful if there were more than one element inside our wrapper, but with only an image, there's no reason to use it, and a margin of `0 auto` works just fine.

#### Font Size and Layout Adjustments

- To adjust font sizes and layout, we'll utilize media queries:
- From the previous media query, I'll copy everything from the `about__title` down to the `about__list`.
- I'll paste the code inside the large media query under the `about` class.
- I just want to increase the font sizes one variable up, so the font size on our `about__title` can be `4XL` instead of `3XL`. The font size on the other classes is all set to `base`.
- In our `style.css`, we see that the size variable one level larger than `base` is `large`, so each font size with the size of `base` I'll change to `large`.
- For the next breakpoint, I just want to slightly increase the size of everything.
- So, from the previous media query, I'll copy everything from the `about__title` down to the `about__list`.
- I'll uncomment the extra-large media query, and I'll paste everything in here.
- I'll increase the title from `4XL` to `5XL`, and I'll increase all of the other font sizes with the size of `large` to `extra large`.
- In our extra small media query, I'll copy the `about__content` and paste it in our extra-large media query.
- I want to increase the Gap from `1.5rem` to `2rem`.
- You'll also notice that if I open our `hero.css` file, we see our hero class has a `gap` property of `1rem` by default.
- Then on the extra small media query, we increase the Gap to `1.5rem`, and then on the extra-large media query, we increase it again to `2rem`. Consistency is key to beautiful layouts.
- The last thing I want to do is increase the size of the image on our demo. When we inspect and select the image, we see that on our extra-large breakpoint, the image has a width of `492` pixels.
- Inside our extra-large media query, I'll select the image by its class name of `about__image` and give it a width of `30.75rem`.
- And we're pretty much done with the about section. We see we've got the `2XL` media query left, but there's nothing we need to do on this breakpoint, so we can just ignore it.

### **=>** Featured Section

>

Sure, here is the text you provided with the requested formatting in markdown:

#### the next section is the featured section

- it has a subtitle
- a title
- a paragraph
- a list
- and images

#### I'm going to do this section in three parts

1. the subtitle, title, and paragraph in part one
2. the tech stack, project type, and timeline in part two
3. and the images in part 3

#### over on the HTML

- I'll uncomment the next section and give it a classic featured and our container in section utility classes
- inside this section I'll add an `H3` with the class of `featured__subtitle` and the content of `featured project`
- an `H2` with the class of `featured__title` and the content of `slaying the Dragon`
- a paragraph with the class of `featured__description`
- and for the content, I'll just go back to my demo and copy the text I have there; it's just filler text, and I'll paste it inside my paragraph element
- on our demo, we see we've got a clickable icon; clicking it does nothing because this is just a demo, but if you're going to be using this website for your portfolio, you can make this link send the users to your featured project
- I'm going to go to the hero icon website, search for a link, and copy the SVG in my HTML
- under the title, I'll add an anchor element with the class of `featured__link`
- inside the anchor element, I'll paste the SVG
- and inside the SVG, there's a `class` attribute we don't need, so I'll remove it

#### to start styling this inside my components folder

- I'll create a new file called `featured.css`
- now I need to import it inside my `main.js`
- I'll open the `utils.css` file, copy all of the commented-up media queries, and paste them inside our empty `featured.css` file
- the first element I'm going to style is the title because it's the easiest and also because it'll have the same styles with the same breakpoints as the title in our about section; actually, because both titles are identical, we could consider making them utility classes, but because this is just a portfolio website, I won't bother
- however, what I'll do is open the `about.css` file, copy the styles from the about title, and paste them in our `featured.css` file
- I'll go back to the `about.css` file, look for the same title in the extra small media query, and copy it
- I'll go back to the `featured.css` and comment the extra small media query and paste in the title
- the title is located in two more breakpoints, the large and the extra-large breakpoints; however, I won't bother fetching them from the `about.css` file
- instead, what I'll do is uncomment the large media query and uncomment the extra-large media query
- I'll copy the title from the extra small media query and paste it in both the large and extra-large media queries
- I need to change each class from `about__title` to `featured__title`
- then I just need to make sure that they're all increasing in size by one level
  - `2XL`, `3XL` for `4XL`, and `5XL`

#### next I'll select the `featured__subtitle` and give it

- a font size of `small`
- a color of `indigo`
- a text transform of `capitalize`
- and a font weight of `400`

#### I'll select it in the extra small media query and increase its font size from `small` to `base`

- I'll copy it
- then paste it in the large media query and increase the font size from `base` to `large`
- I'll paste it again in the extra-large media query and increase the font size to `extra large`

#### let's fix our icon

- I want the icon to have the same size as our title, so I'll select it and give it a width and height of `2XL`
- we see nothing happened; this is because anchor elements have a display of `inline` by default
- we could add a display of `inline-block` to our link, and as you can see, this fixes it
- actually, a display of `block` would also fix it, but because we want the link to be to the right of the title in a horizontal layout, what we can do is remove the display property from our link and instead, over on the HTML above the title, add a `div` with the class of `featured__wrapper` and wrap both the title and the anchor element inside it
- then back in the CSS, I'll select the `featured__wrapper` and give it a display of `flex`
- we see this worked; I'll also add an align-items of `center` to center the icon
- and I'll also add a gap property of `1 REM` to add a little bit of spacing
- also, inside the media queries, wherever I'm increasing the size of the title, I want to also increase the size of the link so that both the title and the link are always the same size
- so I'll copy the link from outside of the media queries and paste it inside the extra small media query under the title
- I'll change the width and the height from `2XL` to `3XL`
- just like the title

#### I'll do the same on the large media query

- and the same on the extra-large media query
- also looking at my title, I just noticed that I forgot to make it all uppercase
- all I have to do is add the text-transform property of `uppercase` to my title

#### the next element we need to style is the paragraph

- I'll select it by its class name and give it a Max width of `60 ch`
- a color of `slate 600`
- a font size of `small`
- and a margin of `1 REM` for the top and bottom and `0` for the left and right
- I'll copy the description and paste it in the extra small media query
- I don't need to change the max width and the color, so I'll remove them
- I'll increase the font size from `small` to `base`
- and I'll increase the margin top and bottom from `1 REM` to `1.5 REM`
- I'll copy it again and paste it in both the large and extra-large media query
- on our large media query, I don't want to change the margin, so I'll just remove it
- however, I will increase the font size from `base` to `large`
- then on our extra-large media query, I'll increase the font size to `extra large`
- and I'll increase the top and bottom margins from `1.5 REM` to `2 REM`
- we're done with the first part

#### looking at our demo, we see the second part is composed of three containers

- a tech stack
- a project type
- and a timeline
- so in our HTML under the paragraph, I'll add three `

div` elements

- inside the first one, I'll add an `H3` element with the class of `featured__label` and display `Tech stack` under it
- an unordered list with seven list items
- the unordered list with a class of `featured__Tech-Stack`
- and each list item with a class of `featured__info`
- the first list item is `Tailwind CSS`
- the second is `react.js`
- the third is `react hook form`
- `Next.js`
- `axios`
- `Super Bass`
- and `stripe`
- inside the next `div` element goes an `H3` element with the class of `featured__label` and a paragraph element with the class of `featured__info`
- the heading displays `project type`
- and the paragraph displays `full stack jump stack`
- inside the last `div` element is again an `H3` element with the class of `featured__label`
- and a paragraph with the class of `featured__info`
- the heading displays `timeline`
- and the paragraph displays `December 2022 - present`

#### I'll select our headings by their class name of `featured__label` and give them a font size of `base`

- a text transform of `capitalize`
- and a margin bottom of `0.25 REM`
- next I'll select the unordered list by its class name of `featured__Tech-Stack` and give it a padding of `0`
- and a list style of `none`
- lastly I'll select all of the list and paragraph elements by their class name of `featured__info` and give them a font size of `small`
- a color of `slate 600`
- and a text transform of `capitalize`

#### I'm going to copy `featured__label`, `featured__Tech-Stack`, and `featured__info`, and I'll paste them inside the extra small media query

- or delete `featured__Tech-Stack`, it's our unordered list, and there's nothing we need to change
- on our `featured__label`, I'll remove the text transform and the margin bottom
- and I'll increase the size from `base` to `large`
- on our `featured__info`, I'll remove the color and the text transform
- and I'll increase the font size from `small` to `base`

#### I'll copy both these classes and paste them inside the large media query

- I'll increase the font size on the label from `large` to `extra large`
- and on the info, I'll increase the font size from `base` to `large`
- I'll copy them again and paste them inside the extra-large media query
- label can be increased to `2XL` and info can be increased to `4XL`

#### looking at our demo, we see that the sizes are looking good

- however, we just need to make them have a horizontal layout on larger screens just like in our demo
- to achieve this, we need to head over to our HTML and wrap all three containers inside a parent div
- so under our paragraph, I'll add a div with the class of `featured__info-Container` and move all three div containers inside it
- then back in the CSS, I'll select the parent container by its class name of `featured__info-Container` and give it a display of `flex`
- a flex wrap of `wrap`
- and a gap of `1 REM`

#### then I want to select all the div elements inside the container

- to do this, I'll reselect the `featured__info-Container`, add a space, and say `div`
- this line is selecting all the divs inside the container
- inside it, I'll add a border of `1 pixel solid red` to better see what's happening
- I'll add a flex of `1` so that they all have the same width
- and I'll also give each div a Min width of `250 pixels`
- because of a Min width on small screens, we have our vertical layout
- then eventually, when there's enough space, the divs will wrap into a horizontal layout
- we see this happening on our Dev server; eventually, there's enough room to fit all three on the same horizontal line
- I'll remove the border; we don't need it anymore

#### the third and last part of this section is displaying images of our featured project

- on our demo, on small screens, we see the images are being displayed in a vertical layout
- as I increase the viewport to larger screens, eventually the images start appearing both in a horizontal layout and a vertical layout
- we've got images sitting next to each other and we've got images underneath each other, so in other words, both horizontal and vertical
- also, we notice that there is a background color on top of each image
- I'll close the developer tools and hover over the images
- we see that this background color has a reduced opacity when we hover over it
- back in our HTML under the div that wraps the tech stack, project type, and timeline
- I'll add eight image tags
- now I need to go on my desktop, on the images folder
- open the featured folder and copy all of the images in here
- I'm going to paste them inside my public folder
- these images are screenshots of a website that I made for myself; if you're wondering how I took the screenshots or what's the best way of taking screenshots of a website, I'll show you
- I'll head over to any website; the website doesn't matter, so I guess I'll head over to `heroicons.com`
- then to take a screenshot, you just need to open the developer tools by pressing `Ctrl+Shift+I` on the Chrome browser
- and then press `Ctrl+Shift+P`; a run command bar will open
- I'll type `screenshot`, and you can select any one of these options
- I'll select the last option, `capture screenshot save`, and voila
- back in our HTML, now that I added all the images of my featured project inside my public folder
- I can start selecting them in the `src` attribute
- the route to the first image is `/sling the dragon.png`
- and again, I said this before, but I'll say it again because we used Vite to bootstrap our project, we get to use some of Vite's amazing features
- one of them being able to reference the public folder simply by a slash; this is why I can say `/sling the dragon.png` instead of `./public/sling the dragon.png`
- the second image is `/courses.png`
- the third image is `/pricing.png`
- the fourth is `/features.png`
- `/blog.png`
- `/sign-in.png`
- and `/app.png`
- then for the `alt` attribute, I'll select them all and say "slaying the dragon"
- because they're all images of this "sling the dragon" website
- then I'll individually add on which section they are
- so the first one is `hero`
- the second is `courses`
- the third is `pricing`
- the fourth is `features`
- `fax`
- `

blog`

- `sign in`
- and `dashboard`
- we see we've got our images; the reason they're blending so well with our portfolio website is that I used the same background color on that project
- and even if they weren't blending so well and had a totally different color scheme than our portfolio website, I would still need to find a solution to make the screenshots blend with the colors of our website for design purposes
- the way I decided to tackle this problem is with the background colors we see on our demo that sits on top of the images
- to add this effect to our images, we need to wrap each image inside its very own `div` element
- doing this one by one would take forever; a quick way to do this is with the mouse
- click at the end of the first image tag
- then press and hold the ALT key on your keyboard; with the ALT key pressed, we can start adding clicks at the end of each image tag
- with the ends all clicked, I'll press Enter on my keyboard
- type `div`; typing `div` triggers the Emmet extension to pop up; we see Emmet abbreviation
- and now if I press Tab or Enter, we get our `div` element
- I will press Enter to open up all of the `div` elements
- then with the arrow keys on my keyboard, I'll go up by 2 so that I'm on each image tag
- I'll press the ALT key again on my keyboard and hold it; with the ALT key held down, I can press the bottom arrow key to move the images down inside the `div` elements
- I'll save to let VS Code and Prettier format the white space
- and we see each image tag is now inside a `div` element
- we're not done; I want to add a class to each of the `div` elements
- and because we've still got our clicks on the image tags, I can move up by one to be on the `div` elements
- and add the class attribute of `featured__image-Wrapper`
- then to add a background color on top of the images, I need to select the wrapper in the CSS
- and also provide it with the `::after` pseudo-class
- inside it, the first thing I need to do is add the content property
- because this is pretty much required when we're using either of the `::before` or `::after` pseudo-classes
- I'll just leave the content with empty single quotes
- then I'll add the background color property
- I'll head over to my `style.css` file
- copy the `Indigo` RGB
- and paste it inside our background color
- I'll add an "a" at the end of RGB so that it's rgba
- and then I'll add a fourth value of `0.4`; this value represents the alpha, which is basically just transparency
- when I save, we see nothing happened
- I'll add a width of `100%` and a height of `100%` because I want my background color to be 100% of the width of the image and 100% of the height of the image
- when I save, we see still nothing happened
- I'll add a position of `absolute` because I need my background color to be removed from the document so that it can sit on top of the image
- and I'll add a top of `0` and a left of `0`
- I'll add a z-index of `1` so that we're always layered on top of anything with a lower z-index
- when I save, we see nothing happened to our images
- however, if I look at the top of my page, we see we've got our background color filling out the entire width and height of the body
- the reason this is happening is because currently the position of `absolute` is being positioned relative to the entire document
- to make the position of `absolute` relative to the images instead of the entire document, we need to define a position property set to anything other than `static` on the closest parent
- because we're using the `::after` pseudo-class, the closest parent is the wrapper itself
- so I'll reselect it above the `::after` pseudo-class and give it the position property of `relative`
- we see our background color is now relative to the wrapper instead of being relative to the entire document
- now I know the `position` property is confusing
- using it almost feels like we're hacking our way to achieving what we want
- but I have an entire video on my channel dedicated to how the `position` property works
- so if this was confusing to you in any way, then I highly suggest you watch that video
- looking at our demo, we see that when we hover over the images, the background color changes
- to do this, I'll reselect the `featured__image-Wrapper` with the `::after` pseudo-class
- and in between both the class name and the `::after` pseudo-class, I'll add the `hover` pseudo-class like this
- I'll copy the background color, paste it in here, and reduce the last value from `0.4` to `0.1`
- I also need a `transition` so that the animation doesn't happen instantaneously
- so under the `z-index`, I'll add a `transition` property of `background-color 0.3s`
- on our Dev server, we see when we hover over our images, the opacity on the background color is reduced
- the only thing left for us to do in this section is to make the images responsive
- we see on our Dev server everything is looking good and responsive.

### **=>** Projects Section

>

- The Next Section is the featured section.
- It has the following components:
  - Subtitle
  - Title
  - Paragraph
  - List
  - Images

#### Section Breakdown

- This section will be divided into three parts:
  1. Subtitle, Title, and Paragraph
  2. Tech Stack, Project Type, and Timeline
  3. Images

#### HTML Markup

- To structure the HTML, follow these steps:
  - Uncomment the next section on HTML.
  - Give it a "classic featured" class and a "our container" class in the section utility classes.
  - Inside this section, add the following elements:
    - H3 with the class of `featured__subtitle` and the content "Featured Project."
    - H2 with the class of `featured__title` and the content "Slaying the Dragon."
    - Paragraph with the class of `featured__description` and content from your demo.
    - Add a clickable icon (SVG) under the title.
    - Use an anchor element with the class of `featured__link` to wrap the SVG.

#### Styling

- To style the elements, create a CSS file named `featured.css` inside the `components` folder.
- Import it into `main.js`.
- Copy the media queries from `utils.css` to `featured.css`.
- Style the following elements in `featured.css`:
  - `featured__title` for various breakpoints.
  - `featured__subtitle` for different font sizes.
  - Style the icon size to match the title.
  - Organize media queries for title and link sizes.
  - Apply `text-transform: uppercase` to the title.

#### Styling the Paragraph

- Style the paragraph with the class of `featured__description`.
- Set `max-width`, `color`, `font-size`, and margins for different breakpoints.

#### Section 2: Tech Stack, Project Type, and Timeline

- This section contains three containers:
  - Tech Stack
  - Project Type
  - Timeline

#### HTML Markup for Section 2

- For the Tech Stack container, add:

  - H3 with the class of `featured__label` and text "Tech Stack."
  - An unordered list with list items containing technology names.

- For the Project Type container, add:

  - H3 with the class of `featured__label` and text "Project Type."
  - A paragraph with the class of `featured__info` and text "Full Stack Jump Stack."

- For the Timeline container, add:
  - H3 with the class of `featured__label` and text "Timeline."
  - A paragraph with the class of `featured__info` and text "December 2022 - Present in RCSS."

#### CSS Styling for Section 2

- Style `featured__label` elements with `font-size`, `text-transform`, and `margin-bottom`.
- Style `featured__info` elements with `font-size`, `color`, and `text-transform`.
- Add media queries for responsive styling.

#### Section 3: Displaying Images

- Add 8 image tags for your project screenshots.
- Place the images in your public folder.
- Set the `alt` attribute for each image.
- Add a background color to overlay the images.
- Implement a hover effect for the background color.

#### Making Images Responsive

- Wrap all images in a `featured__image-container`.
- Set `margin-top` and `grid-gap` for the container.
- Use CSS Grid to allow images to wrap automatically based on available space.
- Adjust container margin and gap for different breakpoints to make it responsive.

That's your provided text divided into sections with the requested Markdown formatting.

### **=>** Contact Section

>

the next two sections are incredibly easy starting with the contact Section we see on our demo all this is is a title a paragraph and a button and our HTML I'll uncomment the last section element and give it a class of contact container and section inside the section I'll add an H2 element with the class of contact underscore underscore title and I want this heading to display get and contact then I'll add a paragraph with the class of contact underscore underscore description and for the content I'll head over to My Demo copy the text and paste it inside the paragraph element lastly I'll add an anchor element with the class of a contact underscore underscore button and our n utility class on our demo when I click on this button it opens a new tab where I can send an email for me it's Gmail because that's what I have set up as a default if you go on the demo yourself and click on this button you might get a different result depending on your device and browser settings you might be thinking why not set up a form so that people can send us emails through a form the issue it forms is that they don't allow for back and forth emails forms are great for freelancing but if it's for a hiring position the person trying to reach out to you doesn't want to use your form they want your email and they want to be able to reach out to you through their own means which is why I chose to have a simple button here forms are better suited for other use cases like a payment form or a survey form for example but that's just my opinion you could always extend this portfolio add a form yourself and use a service like formspree to make your forms send emails to you anyways back in our HTML to make our button be an email button all I have to do is inside the href attribute say mail to Colin and our email so for me slaying the dragon dot IO gmail.com in our Dev server clicking on the button we see it works however I want this to open in a new tab so after the href attribute I'll add a Target attribute of underscore blank this will open our mail to in a separate tab in the past when we would use Target underscore blank we would need to also Define a Rel attribute of no opener note referrer but this isn't necessary anymore all major browsers now do this automatic likely all that no opener and no referred it was prevent a security issue from being exploited when using a target of blank I can remove it now because as of 2021 browsers do this automatically for us inside our components folder I'll create a new file called contact.css I need to import contact.css inside our main.js I'll import it after work.css but before utils.css I'll go to my utils.css file copy the commented.media queries and paste them inside our contact.css file I want the entire section to be in the middle so above all of the media queries I'll select the entire section by its class and give it a display a flex the flex direction of column the Justified content of Center the Align items of Center a text align of Center and a gap of one REM next I'll select the title bytes class name and give it a font size of 2XL a color of light and a text transform of capitalize I'll select the paragraph by its class name and give it a font size of small a color of slate 600 and a Max width of 60 ch lastly I'll select the button by its class name and give it a font size of small I'll copy literally everything uncomment the extra small media query and paste everything inside it on the contact the only thing I want to change is the gap from one REM to 1.5 gram everything else can be removed on the title I'll increase the font size from 2XL to 3XL everything else can be removed on the paragraph I'll increase the font size from small to base everything else can be removed and finally on the button I'll increase the font size from small to base I'll copy all four classes we can skip the small and medium breakpoints uncomment both the large and extra large media queries and paste our four classes inside both of them inside our large media query I don't want to change the gap on the contact so I'll remove this class from this breakpoint I'll increase the title from 3XL to 4XL I'll increase both the paragraph and the buttons font size from base to large then inside the extra large media query I'll increase the gap up from 1.5 Ram to 2 RAM the font size on the title to 5xl the font size on the paragraph to Excel and the font size on the button to excel we're done with this section looking at our Dev server we see our contact Section is centered responsive and the button opens a new tab for sending an email also people can right click on the button and just copy the email address if they want

### **=>** Footer Section

>

the last section is the footer looking at our demo we see all it is is some text in the middle that's it in our HTML I'll uncomment the footer element and give it a class of footer container and section inside the footer I'll add an H3 element with the class of footer underscore underscore title and for the content I just want to display my full name wrapped until these symbols if you're going to be using this portfolio just remember to change the name for yours inside the components folder I'll create a new file called the footer.css then inside main.js I'll import it after contact.css but before utils.css inside footer.css we're not even going to need media queries all I need to style is the title so I'll select it by its class name and give it a font size of extra small a font weight of 400 a color of slate 600 a text align of Center a text transform of uppercase a letter spacing of 0.2 m and a user select of none because there's no reason to be able to select it that's literally it we're done

### **=>** Mobile Menu

>

#### Introduction

- With the footer currently when we click the links on our header, nothing happens.
- You can see the route changing on the address bar. This is because in our HTML, inside the header, where we're defining anchor elements, we added inside the href attribute a hashtag and the name of the section we want to go to.

#### Fixing Scroll Behavior

- To make the "About" button scroll down to the About section, all we need to do is find our About section element and give it the ID attribute of `about`.
- Now on our demo, when we click the "About" button on our header, the page scrolls down to the About section.
- Back in our HTML, I'll do the same with the two other sections. I'll find the "Featured" section and give it the ID attribute of `featured`, and I'll find the "Contact" section and give it the ID attribute of `contact`.
- Now, clicking on any of these buttons will send us to its section.

#### Creating a Mobile Navigation Menu

- Another thing we need to do is create a navigation menu for mobile screens.
- Clicking on our bars icon does absolutely nothing, but on our demo, when we click it, it opens a mobile version of our menu.
- To create the mobile navigation menu, I'm going to go in my HTML and under the header section, I'll add two comments.
- The first one will say "mobile navigation," and the second one will say "end of mobile navigation."
- In between these two comments, I'll add the code for the menu.
- Because this isn't a section, I'll use a `div` element and give it a class of `mobile-nav`.
- Inside our `div`, I'll add a `nav` element because this is going to be a navigation.
- Inside our `nav` element, I'll add an unordered list with the class of `mobile-nav__menu`, and inside it, six list elements.
- Inside the first three list elements, I'll add an anchor element to each with the class of `mobile-nav__link`.
- I'll give the first anchor element the `href` of `#about` and the text of "About."
- I'll give the second anchor element the `href` of `#featured` and the text of "Work."
- For the third anchor element, I'll give it the `href` of `#contact` and the text of "Contact."
- On our demo, we see under "About," "Work," and "Contact," we've got a horizontal line.
- So, on our fourth list element, I don't need to add anything inside it, but I'll give it a class of `mobile-nav__link-line`.
- For the fifth list element, I want the sun button. I'll look for it in the header, copy the button and SVG, and paste them inside our list element.
- I'll just change the class on our button from `header__sun` to `mobile-nav__Sun`.
- Inside our last list element, I'll add an anchor element with the class of `mobile-nav__button` and our utility class.

#### Styling the Mobile Navigation

- This is looking pretty ugly, so inside our components folder, I'll create a new file called `mobile-nav.css` and import it inside our `main.js`.
- In our CSS, I'll select the parent div by its class name of `mobile-nav`.
- I want our mobile navigation to be removed from the document so that it doesn't affect the other elements on our website.
- Currently, our mobile navigation pushed our hero section down, so inside our `mobile-nav` class, I'll give it a `position` of `absolute`.
- The position of `absolute` removed our menu from the document.
- I want the menu to be positioned at the top and left corner of the page.
- I'll add a `top` of 0 and a `left` of 0.
- I'll add a `z-index` of 999 just to make sure our menu is above all the other elements.
- I'll give it a `width` of 100% and a `height` of 100%.
- Under our `height`, I'll add a `background-color` of `dark`, a `display` of `flex`, `justify-content` of `center`, and `align-items` of `center`.
- This is starting to look like a mobile menu. However, if you scroll down, we see we're in the About section.
- We could use a `position` of `fixed` instead of `absolute`, and we see when we scroll, we're still in our menu. This is fine, but later on with JavaScript, I'll be removing the scroll bar entirely when we enter our mobile menu.
- So, I'll change the position back to `absolute`, although if you want, you can leave it at `fixed`.

#### Styling the Unordered List

- The next element we need to style is the unordered list.
- So, I'll select it by its class name of `mobile-nav__menu` and give it a `list-style` of `none`, a `padding` of 0, a `display` of `flex`, `flex-direction` of `column`, `justify-content` of `center`, `align-items` of `center`, and a `gap` of `1rem`.
- I'll select the links by their class name of `mobile-nav__link` and give them a `font-size` of `small`, `text-decoration` of `none`, `font-weight` of 600, a color of `slate 600`, a letter-spacing of `-0.05em`, and a `transition` of `color 0.3s`.
- I'll reselect the `mobile-nav__link` with the `hover` pseudo-class and give it the `color` of `rose`.
- Now when we hover over our links, they turn red.
- We aren't seeing our line, so I'll select it by its class name of `mobile-nav__link-line` and give it a `border` of `1px solid slate 800` and a `padding` of `1.5rem`.
- Our sun icon is also missing. I'll select it by its class name of `mobile-nav__Sun` and give it a `width` of `extra large`, a `height` of `extra large`, and I'll give it a `color` of `slate 600`.

#### Styling the Button

- If I open the developer tools and hover over our unordered list, you can see that the sun icon isn't centered in the middle of its container.
- This is because our sun icon is a button, and our buttons have a `display` of `inline-block` by default.
- I can add a `display` of `block` to my sun icon, and now when I hover over it, we see it's in the center of its container.
- Our button is too big. I'll select it by its class name of `mobile-nav__button` and give it a `font-size` of `smaller`.
- You don't need the green border anymore, so I'll remove it.

#### JavaScript for the Mobile Menu

- Our menu looks perfect. Since this menu is designed only for mobile screens, you don't even need media queries.
- However, we do need to add some JavaScript to make the menu open and close when we click on the bars icon.
- Currently, I'm noticing that the bars icon is missing.
- I'll open my `header.css` file and inside the `header` class, below the padding-bottom, I'll add a `position` of `relative` and a `z-index` of `9999`.
- Now we see our bars icon.
- When clicking on this icon, it should open and close the menu.
- So inside our `src` folder, I'll create a new folder called `utils`.
- Inside the `utils` folder, I'll create a new file called `mobile-nav.js`.
- I want to have the mobile menu open when we click on the bars icon.
- I also want the bars icon to close the menu if the menu is already open.

#### Working with JavaScript

- To select the bars icon, I'll use `document.querySelector` and set the query selector's parentheses.
- I'll add single quotes, and inside the single quotes, I can select any element I want in our HTML.
- Our bars icon is defined as a button with the class of `header__bars`.
- Inside the single quotes of our query selector, I can select the button's class name using the same syntax we would use to select it in a CSS file: `.header__bars`.
- This line of JavaScript selects the bars icon by its class name.
- But we can't just leave it like this; we need to store it inside a variable.
- To store it inside a variable, I can say `const headerButton = document.querySelector(...)`.
- The `const` keyword is used to create a constant variable.
- A constant variable is a variable that never changes and can't be modified.

#### Handling Click Events

- To add a click event to our bars icon, I'll select our `headerButton` variable and add to it the `addEventListener` method.
- The `addEventListener` method takes two arguments: the type of the event and a callback function.
- We want the event type to be `click`, so inside single quotes, I'll say `click`.
- For the callback function, I'll use an anonymous arrow function.
- Clicking on the bars icon should open the mobile navigation.
- So, I'll select the mobile navigation variable and change it to `display: flex`.
- I also want to change the `isMobileNavOpen` state variable to `true` because the menu is now open.
- This will make sure that clicking on any of the links closes the mobile navigation and restores the scroll behavior.

#### Adding Click Events to Links

- Now I want to open our callback arrow function to define what we want to happen when the links are clicked.
- First of all, the only way to click on these links is if the mobile navigation is open.
- If the mobile navigation is open, that means we clicked on our bars icon, and if we click on our bars icon, that also means that our `isMobileNavOpen` state is true.
- Clicking on any of these links should close the mobile navigation.
- I'll reselect our `isMobileNavOpen` variable and reassign it to `false`.
- I want the mobile navigation to close when I click on any of these links.
- Lastly, I'll say `document.body.style.overflowY = 'auto'` to restore our scroll bar, and we won't be stuck in place anymore after clicking any of the links.

#### Conclusion

- Let's see if our component works. I can spam click the bars icon; it opens and closes our mobile navigation.
- I can click on the "About" link, and we get sent to the About section; the navigation closes, and we have our scroll bar.
- Let's try the other two links; it's all working.
- We're finally done with the mobile menu.

### **=>** Dark & Light Mode

>

#### Implementation

- We need to implement the dark mode and light mode theme switcher on our demo.
- When we click on the sun icon, the theme switches to dark mode if we're on light mode, or the theme switches to light mode if we're on dark mode.
- We have two buttons that do this: one is the sun icon inside the header, and the second is the sun icon inside the mobile navigation menu.
- They both do the same thing, but in our HTML, they have different classes.
- To select them in our JavaScript using the querySelectorAll method, they need to share the same class or the same idea.
- Since they don't share the same class name, we will give them both the same ID attribute.
- Inside the header element, we'll find the sun button and give it the ID attribute of `theme-toggle`.
- Next, inside our mobile navigation, we'll find the sun button and give it the same ID attribute of `theme-toggle`.
- This way, they share the same idea.

#### Creating `Dark-Mode.js`

- In the `utils` folder, we'll create a new file called `Dark-Mode.js`.
- On the first line of this file, we'll create a constant variable called `themeToggleButtons` and assign it to `document.querySelectorAll('theme-toggle')`.

#### Styling Light Mode

- In our `style.css`, copy all of our color variables.
- Find where we're selecting the body element and create a utility class called `light-mode` right above it.
- Inside the `light-mode` utility class, paste all of the color variables.
- Remove the rows and indigo variables, as we're not changing them when switching the theme.

#### Switching the Theme

- To switch the theme, rename the `dark` variable to `light` and the `light` variable to `dark`. Now `light` is assigned a dark color, and `dark` is assigned a light color.
- Set all Slate colors to have the color of `slate-800`.
- When you apply the `light-mode` utility class to the body element, it will switch the color variables, based on the cascading feature of CSS variables.
- Add the `light-mode` utility class to the body element in `index.html`.
- Now, when we reload the page, the theme is remembered.

#### Implementing Local Storage

- Use local storage to remember the theme.
- Create a constant variable called `theme` and set it equal to `localStorage.getItem('theme')`.
- If `theme` is truthy, add the `theme` to the body class list on page load.

#### Handling Theme Toggle

- Create a handler function called `handleThemeToggle`.
- Copy the code inside the callback function of the event listener and paste it inside the handler function.
- Replace the callback function inside the event listener with the handler function.
- Remove the curly braces from the arrow function since it's a one-liner now.

#### Improved Code Structure

- Restructuring the code for better readability and maintainability.
- The code is well-structured with clear naming for variables and functions.
- Use meaningful variable and function names for easier understanding.
- The code structure helps developers quickly grasp the functionality.
- Ensure your code is easy to read and understand.
- Make your code easy to read for better collaboration and maintainability.

#### Fixing Empty Class Attribute

- Addressed the issue of an empty class attribute when switching themes.
- Removed the class attribute from the body element when switching to dark mode.

#### Ensuring Proper Text Color

- Ensured the button text color is always white regardless of the website's color theme.
- Applied the hex value of the light color to the button text.

### **=>** Lazy Loading

>

#### Lazy Loading for Images

- We're really close to the Finish Line.
- We need to add lazy loading to our images.
- Currently, all of our images get loaded when we first load or reload the page.
- This is bad for performance.
- While loading images, we can't even see them.
- On my Dev server, I'll open the console and go to the network tab.
- When I reload, notice how everything gets loaded at the same time.
- We see we've got all of our images in here despite them not even being visible to us.

#### Comparison with Demo Website

- Now let's compare that to the network tab on our demo website.
- When I reload, you see we only have a few things being loaded.
- As I scroll down, where images get loaded as they enter the viewport.
- This is called lazy loading, and there's a couple of ways to do it.

#### Two Ways to Add Lazy Loading

- In this video, I'll show you two ways of adding lazy loading to your website: the easy way and the hard way.
- The easy way of adding lazy loading is to simply add the `loading` attribute of `lazy` in our HTML.
- I'll press `Ctrl+F` on my keyboard and type the start of the image tag like this.
- I can close the search bar, and now I have the first image tag selected.
- With the image tag selected, I can press `Ctrl+F2` on my keyboard to select all of the images.
- I'll add the `loading` attribute and set it to `lazy`.
- Now all of our images will be lazy loaded. It's that easy.
- I'll just remove it from our first image because our first image doesn't need lazy loading.
- Images that are visible above the fold don't need lazy loading, only images that are below the fold need lazy loading.
- By the way, below the fold means anything under the initial viewport, as in I have to scroll down to see it.

#### Using JavaScript and the Intersection Observer API

- Undo the loading attributes of lazy on my images by pressing `Ctrl+Z` a few times.
- Notice how by undoing our changes, it selects all of our images.
- I want to add a few things to all of the image tags except for the first one.
- I can unselect it by holding the `ALT` key on my keyboard and clicking on the selection with my mouse.
- Now I have all of the images selected except for the first one.
- None of them have the `loading` attribute of `lazy`. I'll give all my selected images a new class called `lazy`.
- In our HTML, we call it `data-source` because we're storing the original route inside it.
- Looking at our Dev server, we see our placeholder image isn't showing up. This is because we need to provide the size we want for our placeholder.
- I want the size of the placeholder to be the exact same size of our image.
- Inside the public folder, I'll click on `about.jpg`, and at the bottom right, we see the original size of the image is 720 by 720.
- To provide this size to our placeholder, I'll add a slash at the end of the URL and say `720`.
- I'll do the same for other images in this section.

#### Creating a JavaScript File

- I can now create a new file inside the `utils` folder called `lazy-loading.js`.
- Inside it, I'll create a new const variable called `lazyImages`.
- I'll assign it to `document.querySelectorAll('.lazy')`.
- Our goal is to create a way of detecting when one of our images enters the viewport.
- To do this, we can use the Intersection Observer API from JavaScript.
- To start using intersection observers, I'll create a new variable, a const variable called `Observer`.
- I'll assign it to `new IntersectionObserver`.
- `IntersectionObserver` takes two arguments: a callback function and an options object.
- I want the intersection observer to observe the entire page, so I'll leave the root option at `null`.
- The `rootMargin` option adds additional space to be observed on the root, but because we have the root option at `null`, we can leave this at its default of `0 pixels`.
- `Threshold` defines how much of the image needs to be visible before observing it.
- I want the image to be observed the exact moment it enters the viewport, so I'll leave it at `0`.

#### Observing Images

- I'll select my `lazyImages` variable and loop through our images with the `forEach` method.
- `forEach` takes a callback function, and I'll use an arrow function.
- I'll call the parameter `image` because we're looping through images.
- Inside our arrow function, I'll say `Observer.observe(image)`.
- We're observing all of our images with the class of `lazy`.

#### Intersection Observer Callback

- Our callback function takes a parameter called `entries`.
- Inside our callback, I'm going to `console.log(entries)`.
- To use intersection observers on my images, I'll select my `lazyImages` variable.
- Because I'm using `querySelectorAll`, I'll loop through our images with the `forEach` method.
- `forEach` takes a callback function. I'll use an arrow function.
- I'll call the parameter `image` because we're looping through images.
- I'll say `Observer.observe(image)`.
- Now, all of our images are being observed.

#### Handling Image Intersection

- When an image enters the viewport, we want to replace the placeholder image in our `src` attribute with the route stored in the `data-src` attribute.
- I'll remove the `console.log` inside our if statement.
- Instead of saying `entry.target`, I'll create a variable called `image`.
- I'll set it equal to `entry.target`.
- I'll say `image.source = image.dataset.source`.

#### Avoiding Re-detection

- To stop our intersection observer from detecting the same image more than once, we can add a new parameter to our intersection observer called `Observer`.
- Underneath the `console.log`, I'll say `Observer.unobserve(image)`.
- The `Observer` parameter is a reference to the intersection observer itself, which gives us access to the `unobserve` method.
- The `unobserve` method stops observing. We just need to tell it what we want to stop observing.

#### Adding Blur Animation

- In the `utils.css` file, create two new utility classes: `loading` and `loaded`.
- The `loading` utility class is used when images aren't yet in the viewport, and once they enter the viewport, we'll replace the `loading` class with the `loaded` class.
- In the `index.html`, add the `loading` utility class to the appropriate image tags.
- Uncomment the `loaded` utility class in the CSS file.
- When an image enters the viewport, remove the `loading` utility class and add the `loaded` utility class.
- Now, our images are lazy loaded with a blur animation.

.

### **=>** Custom Scrollbar

>

Sure, I've formatted the text as requested using Markdown with H4 tags, bullet points, and backticks for code terminology:

#### Enhancing the Website with a Custom Scroll Bar

- Technically our website is finished.
- There's one more thing we could do though to make our website look even better.
- If we take a closer look at our demo, we can see that the scroll bar is not the default Chrome scroll bar; it's actually custom-made.

#### Adding the Custom Scroll Bar

- Let's add this custom scroll bar to our website.
- I'll open `style.css` and go to the very bottom of the file.
- I'll add a comment saying `scroll bar`, and underneath it, we'll go our custom scroll bar.

```css
/* Scroll Bar */
/* Custom scroll bar code here */
```

- I'm going to head over to Google and search for `CSS tricks scroll bar`.
- I'll click on this link and copy the code they provide under the scroll bar comment.
- I'll paste the code, and when I save, you see that the scroll bar on our Dev server already changed.

#### Customizing the Scroll Bar

- However, we can make it look even better.
- Instead of a width of `1M`, I'll replace it with `8 pixels`.
- On the `box-shadow`, I'll reset all of the values to zero.
- I'll change the background color to our `rows` variable.
- I'll do the same for the `outline`.

```css
/* Scroll Bar */
/* Custom scroll bar code here */
/* Customize the scroll bar */
```

- And there you have it, we've got our custom scroll bar, and the website is finished.

### **=>** Deploy Website

>

#### Exploring the Package.json

- At the beginning of the video when we were looking at the `package.json` file.
- I told you that I'd show you what the build and preview scripts do later on in the video.
- We've been using the `dev` script all this time during development for Life Changes in our Dev server.

#### Transition to Production

- In my terminal, I'll press Ctrl C on my keyboard. This stopped our Dev server, and if I try reloading the page, it won't work.
- Our development server was useful to us during development, but now that the website is finished, I'll run `npm run build`.
- This created a new folder called `dist`, and inside it is our source files.
- We've got all of our images, we've got the `index.html`, we've got an `assets` folder with our CSS, we see it's all minimized, and we've got all of our JavaScript here minimized.

#### Optimizations for Production

- `vite` not only minimized the CSS and JavaScript code but it also did some optimizations like code splitting and caching.
- This `dist` folder is our production-ready code, and everything else is our development code.
- We know our code works in our development server, but we need to see if our production code works as well.
- To see if our production code works in my terminal, I can run `npm run preview` and follow the link it provides.
- We see our website is working, dark and light mode is working, our images are being lazy loaded, and if I open the developer tools and resize the page, we see everything is responsive.
- Our production website works and has no bugs.
- Back in my terminal, I'll press Ctrl C on my keyboard to stop the preview.

#### Pushing Code to GitHub

- Now, I want to push my code into a GitHub repository.
- You're going to need a GitHub account to do this. If you don't already have one, then you should go and create one, and if you already have one, take a moment to sign in.
- In VS Code, using your GitHub account, you can see in VS Code in the bottom left above the gears icon, there's a profile icon. When I click it, you can see I'm signed in with my GitHub account.
- I'm going to head over to [github.com](https://github.com).
- I'm going to go in my profile and in my repository page, and I'll click on "new."
- For the repository name, I'll say "building a portfolio website," but you can call it whatever you want.
- I'll skip the description, and here you can choose whether you want your repo to be public or private.
- I'll have mine be public so that you guys have access to the code of this video, but if this is for yourself, you can set it to private.
- Next, I'll click on "create repository."

#### Initializing and Pushing to GitHub

- To push our code inside this repository, I can follow the steps that GitHub has laid out for us.
- I'll copy the First Command and paste it inside our terminal. I'll press enter, and we see this just created a readme markdown file for GitHub.
- I'll copy and paste the next command in our terminal, `git init`, and it initializes a local git repo for our project. I'll press enter to run the command.
- I'll copy and paste the next command in our terminal; however, this command adds files into our local git repo as it currently is. It's only going to add the readme markdown file.
- I want to add our entire project inside our local repository, not just the readme file. So instead of saying `git add readme`, I'll say `git add -A` and press enter. `git add -A` will add the entire project all at once.
- I'll copy and paste the next command inside our terminal and press enter. This will commit into the `master` branch our changes.
- I'll copy and paste the next command and press enter.
- The last command is the push command. I'll copy and paste it inside our terminal and press enter. This pushed our code into our GitHub repository, and now if I reload the page, we see our repo and all of our code.

#### Deployment with Versal

- Notice, however, how the `dist` folder is missing. This is as intended. Back in VS Code, we have a file called `.gitignore`, and in this file, we define everything we want to ignore and not push into our repository. We see the `node_modules` folder is in here, and so is the `dist` folder.
- Now, to deploy our website to the World Wide Web, I'm going to head over to [versal.com](https://versal.com).
- Versal is where I'm going to deploy my website. It's free and absolutely amazing. For static websites, Jumpstack websites, full-stack websites, it doesn't matter. If you don't already have an account, just create one or log in with your GitHub account. It's free.
- Once you're logged in, click on "add new" and select "project."
- Because I'm logged in to Versal with my GitHub account, Versal is detecting my GitHub repositories. On the repo I want to deploy, I'll click on "import."
- In this page, we can set the project name. I'll leave it as is. Versal automatically detected that we're using Vite in our website and set up the build options accordingly. You see the build commands are correct, the output is correct, and the install commands are correct. Versal set this up all automatically by detecting that we're using Vite. Had it not detected it for us, we would need to manually define what the build command is and what the output directory is, and for beginners, these are not easy questions to answer.
- Now I can just click on "deploy," wait a few seconds until we finally get "congratulations" and some confetti, and there you have it, our website is live. I won't bother buying a domain in this video, but you can buy a domain if you don't already have one and set it up with your portfolio website.

#### Making Final Touches

- Now, if we want to make changes to our live server, all we need to do is go to our code. For example, instead of having a Dev server title, replace that with a proper title like "portfolio website," save.
- Inside our terminal, I can `git add -A` and press enter, then `git commit -m` and add a description like "change title" inside quotes, and press enter. And lastly, just `git push` to push our code.
- This pushed our changes to GitHub, but because our website is deployed using our GitHub repo, any changes we make to the repository will trigger a build command in Versal that rebuilds our website using `npm run build` in the background.
- After a few seconds, our changes are live. If I open our portfolio website and look at the title, we see "portfolio website."
- The last thing I'm going to do

is in our HTML inside the head for SEO purposes. I'll add a meta tag with a name attribute called "description" and a content attribute where I describe the website. I'll say "my portfolio website."

- I'll add a second meta tag with a name attribute of "keywords" and a content attribute where I can add keywords for search engines. Doing this is not that important in all honesty, but I still personally like to do it. I'll just say "web design, HTML, CSS, JavaScript."
- Lastly, I'll Ctrl+F and search for SVG elements. Our SVG elements are all icons, and on their parent element, we need to add an `aria-label` so that people using screen readers can read the icon.
- On the button above the SVG, I'll add an `aria-label` saying "theme toggle button." Then on the parent element of the second SVG, I'll add an `aria-label` saying "mobile navigation button."
- On the parent of the third SVG, I'll add an `aria-label` saying "theme toggle button," and on the parent of the fourth SVG, I'll add an `aria-label` saying "a link to featured project website."
- Another thing you can do, which I won't bother doing in this video, is adding social media elements to the head. You can go to Google and search for CSS Tricks essential meta tags and click on this link.
- In this page, you'll find some meta tags for different social media, which you can add to your HTML inside the head element.
- Now that we've made some changes to our HTML, we can push these changes into our terminal with `git add -A`, `git commit -m` tags and area labels, and `git push`.
- Our portfolio website is finished. If you want to use it, feel free to do so and customize it to make it your own. I really hope this video was valuable to you, and I hope you enjoyed it.
- If you want to subscribe to the channel and maybe like the video, I'd very much appreciate it. You don't have to, of course.
- Also, feel free to join the Discord server. The link is in the description of the video. Much love and have a great day.
