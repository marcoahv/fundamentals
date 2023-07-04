---
sidebar_position: 2
---

# Introduction to Next.js

### Version Check

Let's do a quick version check before we get started with this course. This course was created using:

- Next.js version 13.0.2
- Node.js version 14
- React version 18.2.0

This course is 100% applicable to Next.js versions 13 and above. You may still use the information in the course for previous versions of Next as well.

Make sure you're familiar with the following tech stack before taking this course. You need to be aware of:

- JavaScript
- HTML
- CSS
- Basics of React

Also note that Next.js is updated almost monthly. Part of this course includes helping you navigate the framework's versioning and documentation so you can stay as relevant as you need.

### Introduction

Hello everyone. Welcome to my course, Next.js Fundamentals. I'm Adhithi Ravichandran, a software consultant, author, and speaker. And today, I'll be teaching you Next.js fundamentals.

In this course, Next.js 13 Fundamentals, you'll learn to build a React application using the Next.js framework.

- First, you'll explore the basics of Next.js.

- Next, you'll learn how to set up and create a Next.js app.

- Then, you'll discover managing assets, rendering data, and dynamic routing in Next.js.

- Finally, you'll learn how to deploy a Next.js app and learn how to migrate existing React applications to Next.js.

When you're finished with this course, you'll have the skills and knowledge to build React applications using Next.js and its core features.

Before you begin, here is a recommended learning link for you. Check out the Next.js big picture course on Pluralsight authored by Cory House. This course teaches you the big picture overview of Next.js, which will be useful for you before you get started with this course.

All right, let's get started. In this module, I'll introduce you to Next.js, a popular React framework. You'll then learn why Next.js. I'll then walk you through the features of Next.js and what makes it a good choice for building React applications. You'll learn how Next.js provides a superior developer experience with inbuilt production‑ready features. We'll then explore common use cases of building real‑world applications with Next.js and who is using it today. Finally, you'll learn some tradeoffs of Next.js. By the end of this module, you'll be ready to begin your journey to learn building your React applications using Next.js.

### React Decisions

React is a JavaScript library for building rich user interfaces. Over the last few years, React has gained immense popularity, and a lot of people today are building their web applications using React. We use React to create components and plug these UI components to make a complete web application.

When you're building applications with just React using the Create React App, there are lots of decisions you'll have to make as a developer or an architect. This is because React is flexible, and it's unopinionated, and it lets you as a developer make your own decisions around your web application, decisions on:

- routing
- data fetching
- server‑side rendering
- search engine optimization
- image optimization
- bundling
- code splitting
- deployment

Just to name a few. There is so much to decide and plan while you're building a web application. React does not dictate to you about any of these decisions.

Wouldn't it be nice to have a framework that makes these decisions for you? It would make your job easier, right?

### What Is Next.js?

Next.js is a flexible React framework that gives you building blocks to create fast web applications. Now, what are some `basic building blocks of a web application`?

- The first item would be the `user interface`, which tells you how the user interacts with the application.

- `Routing`. This tells you how the user navigates between different parts of the application.

- `Data fetching`. This is where your data lives and it also tells you how to fetch that data.

- `Rendering`. This tells you when and where you render static or dynamic content on your web application.

- `Performance`, how to optimize your app for end users.

- `Integrations` and infrastructures tells you what third‑party services to use and where you deploy, store, and run your application.

As we know, React as simply a JavaScript library to build rich user interfaces, but there is so much more work to make a complete web application. Here is where Next.js comes in. It handles tooling and configuration that is needed for React, and it provides additional structure, features, optimizations for your application.

You can use React to build your user interface and then incrementally adopt Next.js features to solve common application requirements such as routing, data fetching, integrations, and so on, all of this while improving the developer and end user experience. It's a win‑win situation, right?

### Features of Next.js

- file system routing

- hybrid rendering with server‑side rendering

- static‑side generation

- incremental static regeneration

- image and font optimization

- automatic bundle splitting

- lazy loading

- automatic TypeScript support

We'll learn about each of these features in detail in this course. Next.js changes the status quo with fast refresh, zero config, and awesome search engine optimization. This makes Next.js a React framework for production.

### Who Is Using Next.js?

At this point, you may be wondering so who is using Next.js? You'll be surprised to know that lots of very popular websites today use Next.js in production. Some of the popular ones are:

- hulu.com for their entertainment and video streaming

- target.com by providing an online shopping experience

- realtor.com

- ted.com

- DoorDash

- Tiktok

and many, many more. In the real world, Next.js is being used in e‑commerce with websites like Target