---
sidebar_position: 3
---

# FLEXBOX

---

## 19 What Is Flexbox?

>

### What Is Flexbox

>

### a quick look at how it works

- if we assign display: flex; to a container div or any container element it creates a flex container
- and then it makes all direct elements flex items
- and it's going to actually align horizontal in a row by default
- but we can also do flex direction column which will align them this way. OK. Align them vertically
- Now we have a cross axis which goes up and down and we have a main axis that goes this way

### And there's different CSS properties we can use to align our Flex items....

- `justify-content`
- `align-items`
- `align-content`

### **Practice 19**

---

## 20 Flexbox Basics

>

### to align flex items side by side

- and it's going to actually align horizontal in a row by default
- And we we automatically have certain alignment properties that we can use
- We also have properties to basically change the widths of these to fill up the entire row (which I'm going to get into in the next video)
- and it doesn't matter how many of these we have
- and we could add anything like if I put an h1

### Now we can also change the direction or the orientation of our Flex box

- (`flex-direction: row`) flex direction by default it's a row which goes horizontal
- (`flex-direction: column`) Now I can change this to a column and then they're going to be stacked on top of each other

### we can change the direction of the items

- `column-reverse`
- `row-reverse`

### flex wrap property

- `no-wrap`, by default we have this set to I believe it's `no-wrap`

### **Practice 20**

---

## 21 Flex Properties

>

### flex-shrink

>

### flex-grow

>

### flex-basis

>

### the Flex property

- we also have the Flex property which implements all three of these.

### **Practice 21**

---

## 22 Flex Alignment & Justify

>

### align-items (Cross axis align)

- it's put on the container not on the items themselves because it applies to all of the items
- Now remember when it's in a row like this the horizontal access is the main axis
- What a align-items does is it aligns them on the cross axis
- So if it's a row it's going to be this way (vertical)

### values for align-items

- `center`
- `flex-start`
- `flex-end`

### align-items (with flex-direction: column;)

>

### when it's a column this is the cross access. (horizontal)

>

### other value for align-items (stretch)

>

### justify-content (main axis align)

- `justify-content: center;`
- `justify-content: flex-start;`
- `justify-content: flex-end;`
- `justify-content: space-around;`
- `justify-content: space-between;`

### justify-content: (with) flex-direction: column;

>

### align-self

>

### **Practice 22**

---
