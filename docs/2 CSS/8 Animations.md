---
sidebar_position: 8
---

# ANIMATIONS

https://youtu.be/SgmNxE9lWcY?si=mAIgYDfuKXnp4VX2

Write this text word by word using markdown format, dividing its sections with h4 tags, using bullet points for all its main parts, using backticks for code terminology:

### **=>** Intro

- There are two ways of creating animations in CSS: `Transitions` and `Animations`.

#### Transitions

- `Transitions` wait until they change in a property occurs and then allows those changes to take place over time.

  - Without a transition, any changes in a property would take effect immediately.
  - `Transitions` should be used when properties are changed interactively. For example, in CSS, a property can change when hovered on and when focused on.

#### Animations

- `Animations`, however, provide `keyframes` for more control over the animation and allow us to create complex animations on a frame-by-frame basis.
  - Use `animations` when you want to create complex animations that just work without having to wait for properties that change interactively.

#### Combining Transitions and Animations

- You can also create stunning animations by combining both `Transitions` and `animations` together.
- In this example, I used `Transitions` to make boxes appear when hovering over the orbs, and I used `animations` to make the Rings rotate in a circle.
- I also used some JavaScript to track the position of the mouse and move the Rings towards the mouse, creating a tunnel-like effect.
- This example barely scratches the surface of what's possible with animations, and in this video, I'm going to provide you with all the fundamental CSS animation concepts you need to know to start getting creative and building beautiful CSS animations for your own projects.

## Transitions

- To create a transition, we first need a component that has a change in property.
- In my HTML, I have a button with the class of `button`.
- In my CSS, I have the styles for the button, and I also have a hover state.
- All this does is move our button 10 pixels up when we hover over it.
- We see this is exactly what's happening, but it's taking effect immediately.
- This is not how things move in the real world.

### **=>** Transition properties

- We can make the hover state happen over time by using the transition properties:

  - `transition property`
  - `transition duration`
  - `transition timing function`
  - `transition delay`

- The `transition property` defines which property the transition effect should be applied to.
  - In our hover state, we are only using the `transform` property, so in here we can say `transform`.
- The `transition duration` defines how long the transition effect should take to complete.
  - I'm going to set it to 0.3 seconds.
- The `transition timing function` defines the acceleration curve for the transition.
  - The common possible values that go in here are `ease-in`, `ease-out`, `ease-in-out`, `linear`, and `ease` (which is the default).
- The `transition delay` defines the delay before the transition should take effect.
  - I want my transition to start the moment the element is hovered on, so I set this one to zero seconds.
- When we hover over our button, we see the button moves 10 pixels up over time, and this is a lot better than before.

### **=>** The shorthand property transition

- But in our code, what we can do is instead of using these four properties, we can use the shorthand property `transition`.
- In the `transition` property, we can set the same values that we passed in our four properties and also in the same order: `transform`, `0.3 seconds`, `ease`, and `0 seconds delay`.

- Hovering over our button, we see this works great.
-

### **=>** Shortening our code even more

- But we can shorten our code even more.
- If we have a delay of zero seconds, then we can remove it entirely.
- Also, `ease` is the default timing function, so we can remove it as well.
- Now when we hover over our button, we see it's still working perfectly.

### **=>** Having more than one property changing

- Sometimes you might have more than one property changing.
- For example, maybe on hover, I want the background color to match the border color, and also maybe I want the color of the text to be white.

- When I hover over my button, the only property that has a transition effect is the `transform` property.
- So what I can do is inside my `transition` property, I can comma separate the different properties I want animated:

  - the `background-color` property with a 0.3-second duration and the `color` property with a 0.3-second duration as well.

- Now when I hover over my button, everything is being animated.

### **=>** The all keyword

- But back in our code, if I have more than two properties on our hover state, comma separating each property would take a lot of time, especially if they shared the same duration, timing function, and delay.
- In those cases, what we can do instead is have nothing being comma separated, and on the first value, instead of defining a property, we can replace it with the `all` keyword.
- Now everything is going to have a transition effect applied to it.

## Animations

Sure, here is the provided text written in Markdown format with h4 headings for main sections, bullet points, and backticks for code terminology:

### **=>** To Create an Animation

- First, we need an element that we want to animate.
- In my HTML, I have an H1 element with the class of `heading1`.
- To animate this heading, I can head over to my CSS file and add a keyframe.

### **=>** Adding Keyframes

- The syntax for this is `@keyframes` and curly braces.
- Inside the `@keyframes` and curly braces goes the name of our animation. Let's call it `slide-in-left`.
- Inside the curly braces goes the animation rules.

### **=>** Defining Animation Rules

- To make the heading slide in from the left side of the screen, we need to define the rules from the beginning to the end of the animation.
- Inside the curly braces, add the values `from` and `to`.
  - `from` represents the beginning of the animation (0% completion).
  - `to` represents the end of the animation (100% completion).
- Inside the `from` curly braces, add a `transform` of `translateX(-200px)`.
- Inside the `to` curly braces, add a `transform` of `translateX(0)`.

### **=>** Explaining the Transformations

- Setting `translateX(0)` brings the element back to its original position.
- Without animation properties, our heading won't animate.

### **=>** Animation Properties

- Select our heading by its class name.
- Add animation properties:
  - `animation-name`
  - `animation-duration`
  - `animation-timing-function`
  - `animation-delay`
  - `animation-iteration-count`
  - `animation-direction`
  - `animation-fill-mode`

### **=>** Explaining Animation Properties

- `animation-name` selects the keyframe you want to use. In our case, it's `slide-in-left`.
- `animation-duration` sets how long the animation takes to complete one lap. Set it to `1s`.
- `animation-timing-function` defines the acceleration curve; let's use `ease-in`.
- `animation-delay` adds a delay before running the animation (default is 0s).
- `animation-iteration-count` determines how many times the animation runs (default is 1).
- `animation-direction` sets the animation direction (default is normal).
- `animation-fill-mode` defines how styles apply before and after execution (default is none).

### **=>** Modifying the Animation

- Add `transform` to our heading: `translateX(-150px)` and `animation-delay` of `1s`.
- The transform pushes the heading 150px to the left before and after the animation.

### **=>** Animation Fill Mode

- Set `animation-fill-mode` to `forwards` to keep the final style after animation ends.

### **=>** Further animation-fill-mode Values

- Setting it to `backwards` starts with the first keyframe styles but doesn't affect the animation.
- `both` applies the first and last keyframe styles at the animation's start and end.

### **=>** Simplifying with Animation Shorthand

- Use the `animation` shorthand property with values:
  - Name: `slide-in-left`
  - Duration: `1s`
  - Timing Function: `ease-in`
  - Delay: `1s`
  - Iteration Count: `1`
  - Direction: `normal`
  - Fill Mode: `forwards`

### **=>** Simplifying Further

- Remove the default values for `iteration count` and `duration` as they match the defaults.
- Remove the delay because zero seconds is the default.
- Remove the earlier added `transform` and `animation-fill-mode`.

- Our animation code is now cleaner and more concise.

## Utility classes

>

### **=>** Utility classes

- Currently, our animation is placed on the element itself.
- This is bad for reusability.
- Instead of selecting the heading element by its class name and giving it the animation, I'll create a utility class specifically for the slide and left animation and give it the animation property with all of the same values.

- Our heading isn't being animated anymore.
- This is because we need to head over to our HTML and give our heading the slide and left utility class.
- This is superior because now if I had other elements that also wanted to have the same animation, instead of selecting them in the CSS and giving them the animation property, all I have to do is give them the utility class, and they will animate the same way.
- This way, we're saving code by reusing the slide and left utility class.

Actually, we can push this utility class architecture even further.
At the very top of our CSS file, I'll add a comment saying `utility classes`.
I'll also add a comment right above our keyframe saying `animations`.
Underneath our first comment, I'm going to have five utility classes:

1. `animate` with the property of `Animation duration` set to one second and the `animation fill mode` set to `both`.
2. `animate--infinite` with the property of `Animation iteration count` set to `infinite`.
3. `animate--delay-1s` with the property of `Animation delay` set to one second.
4. `animate--fast` with the property of `Animation duration` set to 0.6 seconds.
5. `animate--slow` with the property of `Animation duration` set to 3 seconds.

And finally, the last thing we need to do is go to our `slide-in-left` class and replace the animation shorthand with the `animation name` property set to the name of our keyframe and the `animation timing function` property set to whatever acceleration curve we want.
I'll set it to `ease`.

- With this architecture, in the HTML, every element I want animated, I give the `animate` class.
- Then, I can select the animation I want.

- In our case, we only have one animation - the `slide-in-left` animation.
- So, in the classes of each element, I'll give `slide-in-left`.
- We see now all our elements are being animated.

- What we can do now is use the different utility classes where we want.
- For example, maybe I want the first heading to be fast.
- I can give it the `animate--fast` utility class.
- And now we see our heading is faster than the others.

- Maybe I want the second heading to be slow.
- I can give it the `animate--slow` utility class.
- And now it's animating slower than the others.

- Finally, maybe I want the third heading to have a delay of one second and constantly repeat its animation infinitely.
- For this, I can give it the `animate--delay-1s` and `animate--infinite` utility classes.

## Double classes

>

### **=>** Double classes

- We can make this architecture even better by using double classes in our CSS.
- I can prepend the `animate` class to each of these four utility classes.
- What this does is it only allows the utility classes to work if the `animate` class exists in the same element.
- This can help us avoid any possible accidents that may occur when naming our classes.

- With this way of working with animations, we can essentially create our very own mini animation library.
- The reason this works so well is because we decoupled the relationship between the animation and the element, making each animation a reusable utility class.

- We only have one animation, so let's add a few more.
- We can give our `slide-in-left` a brother called `slide-in-right` because this animation will be the same but come in from the right.
- I'll just copy the code from our `slide-in-left` and paste it underneath.
- We can rename the keyframe from `slide-in-left` to `slide-in-right`.
- We can do the same with the class name and the `animation name` property.
- Then in our `transform` of `translateX`,
- I can just remove the negative, and now the element will come in from the right.
- In our HTML, I'll give the second heading the class of `slide-in-right` instead of `slide-in-left`, and now we see our heading is coming in from the right.

- Back in our CSS, at the bottom of the file, I'll add a new keyframe called `rotate`.
- It's going to start with a transform of `rotate` set to zero and end with a transform of `rotate` set to 260 degrees.
- Underneath our keyframe, I can add the `rotate` class and give it the `animation name` of `rotate`.
- I'll also give it the `animation timing function` set to `linear`.

- Then in our HTML, in our last heading, I'll replace `slide-in-left` with `rotate`.
- I'll leave the `animate--infinite` utility class but I'll replace the `animate--delay-1s` with `animate--slow`, and now we see our last heading is rotating from its center point infinitely.

- This is what I want, but say for example, I wanted the heading to rotate not from its center but from one of its corners.
- What I can do is in the `rotate` class, give it the `transform origin` property, which has a default of `center`, and set it to `top left`.

- Now the last heading is still rotating not from its center point but from its top left corner.
- I'll do one last animation; this one more challenging than the others. I'll create a new keyframe at the bottom of the file called `bounce`.
- I'll also create the `bounce` class now instead of later and give it the `animation name` of `bounce`.
- I don't need to give it the `animation timing function` because I want the acceleration curve to be `ease`, and `ease` is the default.

- In my HTML, on the first heading, I'll replace `slide-in-left` with `bounce`, and I'll remove the `animate--fast` utility class.
- What I want to do with this animation is have the element bounce almost like a bouncing ball.
- This can be done entirely with the `transform` of `translateY` because our animation will be vertical.
- The bouncing animation starts on the ground, so I'll set the start of the animation with a `transform` of `translateY` of 0. The end of the animation needs to also be on the ground, so I'll set it to 0.

## In-between

>

### **=>** In-between

- Now what we need is some in-between animations.
- To do this, we can replace our `from` and `to` with `0%` and `100%`. By using percentages, we get more control over the keyframes because now I can set some in-between values like `40%`, which I'll set to a `translateY` of -30 pixels.
- Our heading is going up and down but not really bouncing.
- I'll add a `50%` with a `transform` of `translateY` set to 0, and I'll add a `60%` with a `transform` of `translateY` set to -15 pixels.

- This looks pretty good, but we can still make it look better.
- Currently, we're going from a `translateY` of 0 to a `translateY` of -30 pixels from `0%` to `40%`.
- To make it look snappier, I'll add a `20%` with a `transform` of `translateY` set to 0.
- Now what's happening is from `0%` to `20%`, we're staying at 0, but starting at `20%`, we can accelerate towards the -30 pixels, and this will make our animation look better.
- It's subtle but still better.

- We can do the same in-between the `60%` and the `100%`. Already `80%` with a `transform` of `translateY` set to 0. Our heading definitely looks like it's bouncing, and the animation is exactly like I want it.
- However, inside our keyframe, we are repeating ourselves a bunch of times with all of those `translateY` set to 0.

- In programming, you really want to avoid repeating yourself.
- So, to clean things up, all I have to do is remove all of the percentages where I'm repeating the `translateY` of 0, and then on my `0%`, I can comma separate all of the percentages that had the `translateY` of 0.
- The reason this works is because keyframe percentages don't have to be in order.
- I could have the `60%` on top of everything, and the animation would still work perfectly.
- I'll bring it back down, though, just because I think it's cleaner and more readable.
- And there you have it! This is pretty much everything you need to know to start getting creative and building some beautiful animations yourself.
- If you enjoyed the video, I'd be honored if you liked and subscribed. Thanks for watching and have a wonderful day.
