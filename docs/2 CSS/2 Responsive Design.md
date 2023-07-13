---
sidebar_position: 2
---

# RESPONSIVE DESIGN

---

## 15 What Is Responsive Design?

>

### responsive design

- is when we use html and css to make a web site or an application layout respond to different screen sizes

### some of the different ways to achieve responsive design

- set the viewport/scale
- use fluid widths as appose to fixed
- Media queries - Different css stylings for different screen sizes
- Rem units over px (also vh and vw units)
- Another good idea is to use REM units over pixels
- it keeps sizes intact with the rest of the page because a rem unit is a multiplier of whatever the root hTML elements font size is

### mobile first method

- This is where you first design the layout for mobile devices meaning small screens and then you add your media queries for the larger screen styles and you might even display less content on mobile devices.

### **Practice 15**

---

## 16 Getting Started With Media Queries

>

### We can do media queries for both width and height

>

### as far as testing your your media queries and breakpoints

- you can resize the browser

- you should always check them out with the chrome tools

### Smartphones media query (max-width: 500px)

>

### tablet media query (max-width: 768px)

- add min-width if we want a different style for smartphones and then something different for tablets

- you might sometimes see this @media only screen and (max-width: 500px)

### normal size media query (desktop)

>

### widescreen media query

- let's test this out in the device toolbar

### media query for landscape

>

### we can actually have separate style sheets as our media query

### **Practice 16**

---

## 17 Em & Rem Units

>

### let's open up our dev tools (em unit)

- So if we go to computed tab (in the dev tools)
- Now headings are a bit different
- And that's very confusing

- So another reason is for nested elements

### So my suggestion would be just to drop ems altogether and use REMS

>

### Using rem units

>

### setting the html root element to 10px

>

### setting the html root element to 62.5%

>

### another huge reason to use REM units this is for accessibility and browser settings

>

### **Practice 17**

---

## 18 Vh & Vw Units

>

### using vh units

- This is where viewport heights come in

- So let's make this an actual image

- let's grab the daily photo

- you can have a background color and then put a U.R.L. after it

- add some other properties to this background

- So we're going to add some other properties to this background

- `no repeat`
- `center center/cover`

### using vw units

- let's work on actually centering the text

- We're going to target some of these other elements

- the viewport heights it's it's always gonna be a hundred even if we have content below it

- let's add a section

- As we scroll it's going to go right to that content

- Let's actually check it out with with the chrome tools device toolbar

- and we'll click the landscape

- So let's let's practice our media query

- we just need to change the padding of the header

### **Practice 18**

---
