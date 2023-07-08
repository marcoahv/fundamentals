---
sidebar_position: 2
---

# RESPONSIVE DESIGN

---

<details>
<summary><h2>15 What Is Responsive Design?</h2></summary>

<details>
<summary><h3>1. responsive design</h3></summary>

- is when we use html and css to make a web site or an application layout respond to different screen sizes

</details>

<details>
<summary><h3>2. some of the different ways to achieve responsive design</h3></summary>

- set the viewport/scale
- use fluid widths as appose to fixed
- Media queries - Different css stylings for different screen sizes
- Rem units over px (also vh and vw units)
- Another good idea is to use REM units over pixels
- it keeps sizes intact with the rest of the page because a rem unit is a multiplier of whatever the root hTML elements font size is

</details>

<details>
<summary><h3>3. mobile first method</h3></summary>

- This is where you first design the layout for mobile devices meaning small screens and then you add your media queries for the larger screen styles and you might even display less content on mobile devices.

</details>

</details>

---

<h2>16 Getting Started With Media Queries</h2>

<h3>1. We can do media queries for both width and height</h3>

<h3>2. as far as testing your your media queries and breakpoints</h3>

- you can resize the browser
- you should always check them out with the chrome tools

<h3>3. Smartphones media query (max-width: 500px)</h3>

<h3>4. tablet media query (max-width: 768px)</h3>

- add min-width if we want a different style for smartphones and then something different for tablets

- you might sometimes see this @media only screen and (max-width: 500px)

<h3>5. normal size media query (desktop)</h3>

<h3>6. widescreen media query</h3>

- let's test this out in the device toolbar

<h3>7. media query for landscape</h3>

<h3>8. we can actually have separate style sheets as our media query</h3>

<h2>17 Em & Rem Units</h2>

<h3>1. let's open up our dev tools (em unit)</h3>

- So if we go to computed tab (in the dev tools)
- Now headings are a bit different
- And that's very confusing

- So another reason is for nested elements

<h3>2. So my suggestion would be just to drop ems altogether and use REMS</h3>

<h3>3. Using rem units</h3>

<h3>4. setting the html root element to 10px</h3>

<h3>5. setting the html root element to 62.5%</h3>

<h3>6. another huge reason to use REM units this is for accessibility and browser settings</h3>

---

<h2>18 Vh & Vw Units</h2>

<h3>1. using vh units</h3>

- This is where viewport heights come in

- So let's make this an actual image

- let's grab the daily photo

- you can have a background color and then put a U.R.L. after it

- add some other properties to this background

- So we're going to add some other properties to this background

- `no repeat`
- `center center/cover`

<h3>2. using vw units</h3>

- let's work on actually centering the text

- We're going to target some of these other elements

- the viewport heights it's it's always gonna be a hundred even if we have content below it

- let's add a section

- As we scroll it's going to go right to that content

- Let's actually check it out with with the chrome tools device toolbar

- and we'll click the landscape

- So let's let's practice our media query

- we just need to change the padding of the header

---

