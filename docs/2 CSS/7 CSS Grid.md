---
sidebar_position: 7
---

# CSS Grid

---

<h2>33 What Is CSS Grid</h2>

<h3>1. So what is the grid</h3>

<h3>2. the biggest difference between flex and the grid</h3>

<h3>3. different use cases for grid and flex</h3>

---

<h2>34 Grid Basics & Columns</h2>

<h3>1. we're gonna go over just The basics of how `the grid` works  </h3>
and the `grid-template-columns` property

<h3>1. Basics:</h3>

<h3>1. The grid works in a similar way to flexbox</h3>

1.  let's go ahead and create our mark up
2.  let's style the items
3.  Then, we want to add display to the div container
4.  Now if I save that nothing happens, What we need to do is add (grid-template-columns:)
5.  Now even if we have more than 3 grid items here, That's absolutely fine
6.  let's say we wanted the middle one to stretch, We could use `auto`
7.  And let's say I wanted them all to be the same but I wanted them to fill the container
8.  Now there's a better way to do this, You can simply use `repeat()`
9.  Now we used pixels here, but the most common unit using the grid is a `fraction`
10. Now notice that these have no margin, there's a specific property, `grid-gap:`
11. What I want to show you now is just how easy it is to do a simple layout

---

<h2>35 Grid Rows</h2>

<h3>1. Now there's also a `grid-template-rows` property</h3>

<h3>2. we're also going to talk about the `implicit rows`</h3>

1.  for this we are going to need again a div with a class of grid,then we need to style the items
2.  So remember with Flexbox we have a row and a column, with the grid we also have rows and columns
3.  there's actually another property we can use `grid-auto-rows:`

<h3>3. Now unlike flexbox the grid is multi-dimensional so we can we can use `grid-template-rows:` along with `grid-template-columns:`</h3>

<h3>4. So just to show you that let's set grid columns</h3>

---

<h2>36 Spanning Columns & Rows</h2>

<h3>1. blue-backgroundI'm going to show you how to take a grid item and span it across multiple rows and columns</h3>

---

<h2>37 Auto-Fit & Minmax</h2>

<h3>1. we're going to look at `auto-fit and minmax` which can make your grid kind of responsive.</h3>

---

<h2>38 Grid Template Areas</h2>

<h3>1. we're going to get into a property called `grid-template-areas:` which basically allows us to visually map out the alignment of </h3>our elements through CSS

---

<h2>39 Media Queries & The Grid</h2>

<h3>1. we're going to take a look at media queries with the grid</h3>

---
