---
sidebar_position: 2
---

# Create a project with Vanilla JavaScript

## Introduction

Hey everyone, in this video we're going to use Vite JS, which is the same tool I used in the previous video to create a project with React JS and Storybook, along with ESLint and so on. In this video, I want to keep things simple and just share some tips to make things as quick as possible for you to create a project with Vanilla JavaScript, meaning HTML, CSS, and JavaScript, as fast as possible so you can start learning.

## Tools and Setup

Those of you who have been following me for a while know that I really like to talk about the lite-server extension, which is a super useful extension for learning HTML, CSS, and JavaScript. In this video, we're going a bit further because in addition to having the server, we’ll also get some additional benefits that Vite brings us. If you want to read more, you can visit the Vite JS website to find a lot of information about what it does. It has many benefits that I won't go into here since I want to keep this video as short as possible.

## Creating a New Project

Open your terminal in the folder where you will create your projects. In this example, I've already created a few projects with Vite JS for React. Here, we’re going to create a project called "Hello Kitty," for example, which will be a Vanilla JavaScript project.

We’ll type

`npm create vite@latest`,

and we’ll use the system prompts to create whatever we want. So from here, you can create a Vue project, a Svelte project, a React project, a Vanilla JavaScript project, or TypeScript if you prefer.

## Naming and Setup

As I said, I’ll name the project “hello”. Note that it's pronounced “Vite” (not "vite"), which I believe is the French word for "fast" or something like that. I'm not sure, I just heard someone mention it. Anyway, the pronunciation is "Vite".

Here you can choose Vanilla JavaScript, Vue, React, Svelte, etc.

I’ll use Vanilla JavaScript with JavaScript,

so I won’t choose TypeScript.

## Organizing the Project

You have two options:

enter the Hello Vite folder we just created, or open it in Visual Studio Code. For me, it’s simpler to open the folder in Visual Studio Code. You’ll see it was super quick to create everything. As you can see, everything is in the root of the project, which is not a problem. I could use it like this,

but I prefer to work with an `src` folder.

So, I’ll move the `index.html`, `main.js`, `style.css`, and `vite.config.js` files into the `src` folder.

## Configuring Vite

Now, I’ll create a file called `vite.config.js`

and export a default object where I’ll set the root directory to `src` and the build output directory to `dist`.

This means the root of my project is the `src` folder, and when I build it, it will create a `dist` folder outside `src`.

```javascript
export default {
  root: 'src',
  build: {
    outDir: '../dist',
  },
}
```

## Installing Dependencies

Another thing we need to do is run `npm install`

to install the necessary packages.

## Running the Development Server

Once that's done, we can run `npm run dev`

to start the development server. I’m using a Mac, so if you hold the option key and click the link, it will open the link here. If you observe, it’s super fast.

## Making Changes and Live Updates

In the `main.js` file, if I change "Hello World" to something else and save, it instantly updates in the browser. The same goes for the CSS file: if I change a style and save, it instantly reflects in the browser.

## Learning and Experimenting

This is a perfect setup for learning. You can install npm packages, use import/export, and not worry about much else. When you finish your project, run `npm run build` to generate the `dist` folder. You can serve this folder using a tool like `lite-server` or any other simple server setup.

```bash
npx lite-server --baseDir="dist"
```

## Further Organization

- Create subfolders in `src` such as `js` and `css` to further organize your JavaScript and CSS files.
- Update the import paths in your HTML and JavaScript files accordingly.

## Deployment

Deploy the contents of the `dist` folder to your web server.

## Feedback and Engagement

If you have suggestions or need specific tutorials, leave a comment on the video. I’m trying to create videos based on what many students ask for, but I’d love to get more suggestions.

## Conclusion

If you liked the video, don’t forget to like it, subscribe to the channel, and click the bell to receive notifications of new videos. See you in the next one. Bye!

---
