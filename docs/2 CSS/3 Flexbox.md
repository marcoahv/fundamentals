---
sidebar_position: 3
---

# FLEXBOX

---

<h2>19 What Is Flexbox?</h2>

<h3>1. What Is Flexbox</h3>

<h3>2. a quick look at how it works</h3>

- if we assign display: flex; to a container div or any container element it creates a flex container
- and then it makes all direct elements flex items
- and it's going to actually align horizontal in a row by default
- but we can also do flex direction column which will align them this way. OK. Align them vertically
- Now we have a cross axis which goes up and down and we have a main axis that goes this way

<h3>3. And there's different CSS properties we can use to align our Flex items....</h3>

- `justify-content`
- `align-items`
- `align-content`

---

<h2>20 Flexbox Basics</h2>

<h3>1. to align flex items side by side</h3>

- and it's going to actually align horizontal in a row by default
- And we we automatically have certain alignment properties that we can use
- We also have properties to basically change the widths of these to fill up the entire row (which I'm going to get into in the next video)
- and it doesn't matter how many of these we have
- and we could add anything like if I put an h1

<h3>2. Now we can also change the direction or the orientation of our Flex box</h3>

- (`flex-direction: row`) flex direction by default it's a row which goes horizontal
- (`flex-direction: column`) Now I can change this to a column and then they're going to be stacked on top of each other

<h3>3. we can change the direction of the items</h3>

- `column-reverse`
- `row-reverse`

<h3>4. flex wrap property</h3>

- `no-wrap`, by default we have this set to I believe it's `no-wrap`
- `flex-wrap`

---

<h2>21 Flex Properties</h2>

<h3>1. flex-shrink</h3>

<h3>2. flex-grow</h3>

<h3>3. flex-basis</h3>

<h3>4. the Flex property</h3>

- we also have the Flex property which implements all three of these.

---

<h2>22 Flex Alignment & Justify</h2>

<h3>1. align-items (Cross axis align)</h3>

- it's put on the container not on the items themselves because it applies to all of the items
- Now remember when it's in a row like this the horizontal access is the main axis
- What a align-items does is it aligns them on the cross axis
- So if it's a row it's going to be this way (vertical)

<h3>2. values for align-items</h3>

- `center`
- `flex-start`
- `flex-end`

<h3>3. align-items (with flex-direction: column;)</h3>

- when it's a column this is the cross acces<h3>s. (horizontal)</h3>

<h3>4. other value for align-items (stretch)</h3>

<h3>5. justify-content (main axis align)</h3>

- `justify-content: center;`
- `justify-content: flex-start;`
- `justify-content: flex-end;`
- `justify-content: space-around;`
- `justify-content: space-between;`

<h3>6. justify-content: (with) flex-direction: column;</h3>

<h3>7. align-self</h3>

---
