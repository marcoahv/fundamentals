---
sidebar_position: 21
---

# Deploying Your Next.js App and Migrating Existing Apps to Next.js

### Next.js Deployment on Vercel

Vercel deployment is the fastest way to deploy your Next.js. app with zero configuration.

Vercel deployment can automatically detect Next.js and run the next build command.

This next build command generates an optimized version of the app for production.

### The optimizations and features that you receive from Vercel deployment include the following.

- Persisting cached assets across deployment if it's unchanged.

- Immutable deployments with a unique URL for every commit.

- Pages are automatically statically optimized if possible.

- Assets such as JavaScript, CSS, images, and fonts are compressed and served from a global edge network.

- API routes are automatically optimized as isolated serverless functions.

- You can also pay and opt in for additional features from Vercel, such as performance monitoring via Next.js Analytics.

### Now, how do we deploy an app on Vercel?

The steps are super easy.

- 1. In the deployment docs page here, click on the link that will allow you to deploy your existing Next.js app.

- 2. You'll simply provide your repository name here and click on Create.

This process takes a few minutes, and the deployment is ready. Isn't it super simple?

### I've already set up deployment for the repo that contains this course's code on my GitHub repository,

and here is my GitHub repository, Next.js‑Fundamentals, and it's deployed on Vercel.

You can see the deployment link here, and this shows you the latest deployment from the main branch.

```
https://next-js-fundamentals-lac.vercel.app
```

I can click on it, and you'll see the Globomantics app open up, and it shows the current state of the app from the main branch.

If you add pull requests to your repository, each pull request also gets deployed with a unique URL.

You can see here that there is a pull request waiting in the pipeline, and there is a deployment link that comes with it as well.

Clicking on this view deployment will take me to the URL running the code from this specific branch. Neat. I find this very useful since all the heavy lifting is done by Vercel, and the deployments behind are all automatic.

### Other Deployment Options

- In the Next.js official docs, you can find other deployment options if you do not want to use Vercel.

- You can self‑host your Next.js app using Node.js or Docker, and the steps to do so are provided here within this documentation.

- In addition, you could also use other services, such as AWS Copilot, Google Cloud Run, and so on. Documentation on each of these services are provided here, and you can explore them if you would like.

### Migrating to Next.js

- Next.js is designed for gradual adoption.

You would typically start small and incrementally add more pages.

- The best strategy is to configure a subpath that points to the Next.js app.

You can configure a server or proxy such that a new URL from a specific subpath is pointing to your new Next.js application.

- An alternative would be to create micro‑frontends, which deploy using monorepos and subdomains.

this allows subdomains to adopt new applications incrementally.

- Here are some references if you're moving from a Create React App to Next.js.

This documentation will provide you a step‑by‑step walkthrough on converting a Create React App to Next.js.

In addition, if you're using React Router, here is a migration guide that helps you migrate from React Router to the inbuilt Next.js file‑routing method.

This is also a step‑by‑step walkthrough that will help you understand how to transition from a library like React Router to file system‑based routing that comes with Next.js.

### Module Summary

All right folks, we've reached the end of this course.

Let's do a quick recap of what we've learned in this Next.js fundamentals course.

- First, we learned about what Next.js is and got introduced to the Next.js concepts.
- Next, we set up our demo Globomantics application and learned about pages, layout, file‑based system routing, and so on in Next.js.
- In the next module, we learned about images, font, and optimizations that come along with it.
- We then learned about styling components
- in Next.js. In the second half of the course, we learned about data rendering and fetching techniques in Next.js.
- We then learned about dynamic routing
- and finally learned about how to deploy your Next.js application.
-
- Here is the GitHub repository for this course, which contains the entire code that was used to build the Globomantics application. It also contains the code per module in different branches. Finally, I'd like to say thank you for watching this course, and I hope you enjoyed it and learned something interesting and new. You can reach out to me on Twitter @AdhithiRavi if you would like to follow my work. And good luck on your learning journe, and congratulations on finishing this course.
