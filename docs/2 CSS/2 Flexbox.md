---
sidebar_position: 2
---

# CSS Flexbox

### **=>** What is Flexbox?

- The CSS Flexible Box Module, or simply known as Flexbox, is a one-dimensional layout model.

- It allows you to design flexible and efficient layouts, align and distribute space among items in a container.

- To put it in non-technical terms, Flexbox helps you arrange elements in a web page with ease.

- Now, why was this introduced?

- Well, before Flexbox, there were four layout modes, and we had a look at all of them in the CSS crash course.

  - Block for sections in a web page.

  - Inline for text.

  - Table for two-dimensional table data.

  - Positioned for explicit position of an element.

  - These layouts, however, did not provide enough flexibility.

  - We had to find all kinds of hacks to get the layout just the way we wanted.

  - Working with floats, trying to vertically align content, create equal-height columns - well, they were kind of a nightmare.

  - The Flex layout, on the other hand, provides a lot of flexibility.

  - With Flexbox, we can arrange items left to right, right to left, top to bottom, or bottom to top, and at the same time control the spacing, alignment, and order of items in the container.

  - And, to be honest, it has sort of become a must-know for front-end developers in 2022.

  - If you're comfortable with HTML and CSS, Flexbox is the logical next step for you.

### **=>** Terminology

- Alright, now that we understand the "what" and "why" of Flexbox, let's dive into understanding the different concepts.

- We first need to start off by understanding the terminology in Flexbox.

- Trust me when I say this, the next few minutes you spend understanding what each term means will decide how easy it is to understand the Flexbox properties.

- Understanding the terminology is essential to this course, so please make sure you pay attention.

- When we talk about Flexbox, we mainly have two entities:

  - A parent container, which we term as the flex container.

  - And the immediate children elements, which we term as flex items.

  - If you take a look at some sample HTML:

  - The parent `<div>` is the flex container.

  - And all the children `<div>`s are the flex items.

  - Now, we also deal with two axes when working with Flexbox:

  - The main axis and the cross axis.

  - By default, the main axis runs left to right.

  - And the cross axis is perpendicular to the main axis and runs top to bottom.

  - The start point of the main axis is termed as main start.

  - And the end point is termed as main end.

  - The length from main start to main end is called the main size.

  - So, we can say that the flex items flow from main start till main end and take up the main size as the length.

  - Similarly, with the cross axis, we have cross start, cross end, and cross size.

  - We can also change the direction of the main and cross axis by changing how the items are laid out in the container.

  - We will talk more about that later in the course.

  - Understanding Flexbox is basically getting familiar with the properties associated with the flex container and the flex items.

  - Nothing fancy; you just learn it like how you learned CSS.

  - Know what properties exist and how they work.

Here's the text you provided formatted using Markdown with h3 tags for sections, bullet points for sentences, and backticks for code terminology:

### **=>** Flex Container Properties

- With the terminology now familiar, let's begin by focusing first on the properties that are associated with just the flex container.

- There are 10 in total:

  1. First, we have the `display` property.
     - This is what defines a flex container and is mandatory to work with flexbox.
  2. Next is `flex-direction`.
     - It defines the direction in which the flex items are placed within the container.
  3. Third, we have `flex-wrap`,
     - Which is used to control the wrapping of items within the container.
  4. We then have `flex-flow`,
     - Which is a shorthand for the combination of `flex-direction` and `flex-wrap`.
  5. We then have `column` and `row` gap properties,
     - To set the gap between columns and rows.
  6. And just `gap`,
     - Which is a shorthand for both.
  7. That is `justify-content`,
     - That defines the alignment of the items along the main axis.
  8. And similarly `align-items`,
     - Which defines how flex items are laid out along the cross access.
  9. Finally, we have the `align-content` property,
     - This is similar to `justify-content` with the difference being this will align along the cross access and not main access. Also, this works only when there are multiple rows of flex items in the container.

### **=>** Setup

- To get us started with Flexbox, I have set up some very simple HTML and CSS that I am now going to walk you through.

- I have created a folder called "flexbox crash course," and within the folder, I've created an `index.html` file and a `styles.css` file.

- The HTML is pretty standard.

- The `<head>` tag contains what you would normally find and a link to the CSS file.

- Within the `<body>`, we have a parent `<div>` tag with a class called `container`.

- This parent container has nine `<div>` tags as children.

- Each `<div>` has a class `flex-item` and also a class specific to the item number (e.g., `item 1`, `item 2`, till `item 9`).

- In the CSS file, I've set margin to 0 on the body element.

- And on the `container` class, I've added a thick black border.

- On the `flex-item` class, I've added a font color white, a font size of 1.5 rem, padding of one rem, and have also center-aligned the text.

- For items 1 through 9, I've set a different background color so as to visually separate each item.

- In the browser, the HTML and CSS code can be found on my GitHub page in the "Crash Course 2022" repo. I'll make sure to include a link in the description.

- Once you clone the repo or download the code, if you open the HTML file in the browser, you should be able to see this layout.

- You can see we have nine items enclosed within the container that has a solid black border.

### **=>** display

- Now we can focus on our very first property, which is the `display` property.

- To create a flex container, we make use of the `display` property and set it to a value of `flex`.

- In the CSS file, on the `container` class, add the property `display` and set it to `flex`.

- Now when I refresh the browser, you can immediately see the change.

- As with all properties in CSS, some initial values are defined, so when creating a flex container, all of the contained flex items behave in a certain way:

  1. First, they will display in a row.
  2. Second, items start from the beginning of the main axis, that is the leftmost point, but do not stretch till the end. However, they can shrink to a certain extent.
  3. Third, items will stretch to fill the size of the cross-axis, that is from the top to the bottom.

- Also, you can notice from the border that the container itself has 100 percent width, so it does behave similarly to a block-level element.

- Now, if you do not want a block-level flex container, you can set the `display` property to `inline-flex` and create an inline flex container.

- So back in the CSS file, `display` is `inline-flex`.

- If I now refresh, you can see the border now wraps around the flex items.

- The container only takes up width to accommodate its children.

- So the `display` property is used to create either a block-level or inline-level flex container.

- The possible values are `flex` and `inline-flex`.

Here's the text you provided formatted using Markdown with h3 tags for sections and bullet points for sentences:

### **=>** flex-direction

- The next property we are going to learn is `flex-direction`.

- `flex-direction` establishes the main axis, which in turn decides how the flex items are placed within the flex container.

- By default, the main axis flows from left to right, which is the reason we see the items placed from left to right in the browser.

- By changing the value of the `flex-direction` property, we can change how the items are placed.

- Let's revert `display` to `flex` and now define the `flex-direction` property.

- This property can accept one of four different values.

  1. The first value is `row`, which is the default value. So, if we set `flex-direction` to `row` and refresh, you can see it doesn't make a difference; the items still flow from left to right.
  2. `flex-direction` of `row` sets the main axis from left to right, and hence no change.
  3. The next value is `row reverse`, which sets the main axis direction from right to left, resulting in the flex items being placed from right to left. If I refresh, you can see the items are now placed in the reverse order; item 1 starts at the end of the container.
  4. The third value is `column`. When you set `flex-direction` to `column`, the main axis flows from top to bottom. The items will be stacked on top of each other. Refresh the browser, and you can see the items flow from top to bottom, item 1 at the top and item 9 at the bottom.
  5. Finally, we have `column reverse`, which stacks items in the reverse order. If I refresh, you can see that item nine is at the top, and item one is at the bottom.

- So, the `flex-direction` property sets the direction of the main axis, thereby controlling how the items are placed in the container. Possible values are `row` (left to right), `row reverse` (right to left), `column` (top to bottom), and `column reverse` (bottom to top).

### **=>** flex-wrap

- Let's now move on to the third flex container property, which is `flex-wrap`.

- As I mentioned a few minutes ago, the items in a flex container can shrink to a certain extent to fit in a single line. If there is not enough space, though, the items simply overflow.

- Let me show that to you. In the CSS file, I'm going to comment out `flex-direction` and refresh the browser.

- If I now start to reduce the browser width, you can see that the items begin to shrink but after a certain extent, they are no longer in view.

- You can change this behavior using the `flex-wrap` property.

- In the CSS file, on the `container` class, I'm going to add a new property, which is `flex-wrap`. Keep in mind I haven't removed the `display: flex` property on the container and never will throughout this course.

- Now, `flex-wrap` can accept one of three possible values:

  1. The first one is `no wrap`, and this is the default value. When I refresh, you can see there is no change.
  2. If we want the items to wrap within the container, then we set a value of `wrap`. So, `flex-wrap` set to `wrap`. Now when I refresh the browser, you can see that when I reduce the browser width, the items have been wrapped in the container, and the wrapping takes place only when needed. If I expand the browser width, there is no wrapping. If there is not enough space for just one item, which is item nine, you can see only item nine moves into the next row.
  3. The final possible value is `wrap reverse`, and what `wrap reverse` does is instead of items falling into the row below, it climbs into the row above. Let me show that in the browser. Refresh, and you can see we have nine items. When I reduce the browser width, you can see that item nine, instead of moving to the row below, moves to the row above. Now, do not get confused that `wrap reverse` starts wrapping in the reverse order of items. Item one will not move into the second row if the space is inadequate. Wrapping always occurs from the last item. `Wrap reverse` just pushes the last item above instead of below.

- What you should know is that vertical wrapping of items is also possible, and for that, we need to change `flex-direction` to `column` and add a height to the flex container. So let's uncomment `flex-direction`, set it to `column`, and we're going to add a height of 400 pixels. Let's also set `flex-wrap` to just `wrap`. If we refresh, you can see that a column is created to the right, and the items are placed in that column. So, 789, which could not be accommodated with a height of 400 pixels, are shifted to the second column. If I change `flex-wrap` to `wrap reverse`, refresh, and the items are placed in a new column to the left.

- So, the `flex-wrap` property is used to control the wrapping of flex items within the container. The possible values are `no wrap` (default), `wrap` (wraps content into the next row or column), and `wrap reverse` (wraps content into the previous row or column).

### **=>** flex-flow

- All right, let's proceed to the fourth flex container property, which is `flex-flow`.

- It is a shorthand for `flex-direction` and `flex-wrap`.

- Let's comment height of 400 pixels, `flex-direction`, and `flex-wrap`. Instead, define `flex-flow`.

- By default, the `flex-flow` property is set to `row` and `no wrap`, which is the default value of the individual properties.

- The first value is the `flex-direction`, and the second value is the `flex-wrap` property value. If I refresh, and you can see once again the items are laid from left to right, and there is no wrapping of items.

- You can type any combination of the possible values, and the layout will adjust accordingly. Let's go with `

Here's the text you provided formatted using Markdown with h3 tags for sections and bullet points for sentences:

### **=>** gap properties

- Let's now move on to the next set of properties which deal with spacing between rows and columns.

- First, we have the `column gap` property, which sets the gap between columns. For example, if we set `column gap` to `20 pixels` and refresh, we can see a gap of `20 pixels` between the columns.

- Similarly, we can also set the gap between rows; the property is `row gap`, and we can set it to `30 pixels`. To verify this property, though, we need more than one row, so let's set `flex wrap` to `wrap` and head back to the browser.

- Refresh, and reduce the browser width; you can see there is now a `30 pixel` gap between the two rows.

- Now it's also possible to specify both column and row gap using the `gap` shorthand property.

- So let's comment these out and instead set `gap` to `40 pixels` and `20 pixels`. Here, the first value is the row gap, and the second value is the column gap.

- When I refresh, you can see `40 pixels` between the rows and `20 pixels` between the columns.

- So, to specify a gap between columns, you can use the `column gap` property.

- To specify a gap between rows, you can use the `row gap` property.

- You can also use the shorthand `gap` property to specify both row gap and column gap.

- The values can be a non-negative value or a percentage.

### **=>** justify-content

- Now let's move on to the next set of properties, which are concerned with alignment.

- We're going to start with the `justify content` property.

- To see the alignment more clearly, I'm going to reduce the number of items from nine down to five.

- All right, now `justify content` defines the alignment along the main axis.

- Let's understand with the UI how the different values work.

- By default, `justify content` is set to the value `flex start`, which places the flex items at the beginning of the main axis, which is also known as `main start`.

- If I refresh the browser, you can see there is no difference in the alignment.

- The second possible value is `flex end`; this causes the flex items to be placed at the end of the main axis, which is also known as `main end`.

- If I refresh, you can see the items are now placed at the end of the main axis.

- We can also align the content at the center of the main axis; set the value to `center` and refresh the page; the content is now placed at the center of the main axis.

- So these are some of the values you would expect for alignment: left-align, right-align, and center-align.

- But Flexbox provides additional values that can control how the extra space has to be distributed within the container.

- We have a value of `space between`, so `justify content: space between`. When I refresh, you can see the extra space within the container is evenly split and added in between the different flex items.

- Sometimes you might also want the space before the first item and after the last item; for such a scenario, the value is `space around`.

- Let me change `space between` to `space around` and refresh the browser; you can see there is now space at the beginning and at the end, and the space is equal to half of the space between the flex items. For example, if space between the items is `20 pixels`, space at the start and end would be `10 pixels`.

- However, if you want the same space at the start and end of the items as well, the value you're looking for is `space evenly`.

- If I change the value of `justify content` to `space evenly` and refresh the browser, you can see the extra space is equally distributed within the container.

- A very important point to keep in mind is that `justify content` property aligns items based on the main axis.

- So, if we set `flex direction` to `column`, which changes the main axis from top to bottom, `justify content` deals with vertical alignment.

- So if I uncomment `flex direction`, set to `column`, and set a height of, let's say, `800 pixels`, add extra space within the container, and change `justify content` to `flex start`, refresh the browser; you can see all the items are pulled to the top.

- If the value is `flex end`, refresh; all the items are pushed to the bottom. Set the value to `center`, refresh, and you have vertically centered content.

- Something that was a real struggle before Flexbox; now `space between`, `space around`, and `space evenly` behave the same way.

- I'm going to let you try them out. So, the `justify content` property is used to align items and distribute any extra spacing in the parent container. The alignment is always along the main axis. The possible values are `flex start`, `flex end`, `center`, `space between`, `space around`, and `space evenly`.

### **=>** align-items

- All right, the next alignment property is the `align items` property.

- `align items` defines the default behavior for how flex items are laid out along the cross axis of the container.

- This means it works just like `justify content` but in the perpendicular direction.

- Again, let's understand with the UI how the different values work.

- To visualize the changes, we need a height on the container, so let's set height to `800 pixels`.

- By default, the value of `align items` is `stretch`, which means the flex items stretch the entire length of the cross axis.

- So if I set `align items` to `stretch` and head back to the browser, refresh; you can see the items take up all the available height of the container, so they stretch to fill the container.

- So `stretch` is the default value.

- The second value we can specify is `flex start`; all items are pushed to the cross start, which is the starting point of the cross access. So if I refresh, you can see even though the container is `800 pixels` in height, the items do not stretch and are aligned with the cross start of the line.

- Similar to `flex start`, we also have `flex end`, and this value, as you might have guessed, will push the items to the bottom of the container or push the items to the end of the cross access.

- The fourth possible value is `center`, which centers the content along the cross axis. So refresh, and the items are now placed at the center of the cross axis.

- The last value I want to discuss is `baseline`. To help us understand `baseline`, I've got this image from Stack Overflow. If there is a word, for example, "sphinx," the baseline is the line upon which most letters sit.

- Now, coming to Flexbox, the base value for flex items will align flex items along their content's baseline. You can see we have five items, each with different heights and content size, but you can see how all the content in

Here's the text you provided, formatted using Markdown with h3 tags for sections and bullet points for sentences:

### **=>** align-content

- Let's now proceed to the last property that can be applied on the flex container, which is the `align-content` property.

- The `align-content` property aligns lines of content along the cross-axis, similar to how `justify-content` aligns individual items within the main axis. So, it distributes additional space but along the cross-axis, and a very important condition is that multiple lines or rows must exist within the container; if not, it has no effect.

- Let's understand the different possible values with the UI. First, make sure to have a height on the container and also enable wrapping of items. So, `height: 800 pixels` and `flex-wrap: wrap`.

- Wrapping is required to force our content into two lines.

- Let's go back to HTML, and let's also uncomment the remaining four items. Head back to the browser and refresh.

- If I reduce the width, you can see the content wraps into two rows. The `align-content` property is used to align these rows of content within the container.

- The default value is `stretch`; you can see both the lines stretch to fill the available space. So, if we set `align-content` to `stretch` and refresh the browser, you can see there is no change.

- The second possible value is `flex-start`; this pulls the rows to the beginning of the cross-axis. Refresh, and you can see the cross-axis runs from top to bottom, so the content of lines is pushed to the very top.

- Let's also get rid of the padding we just added. So, from item 1, remove padding bottom from item 2 and 3 as well. `align-content: flex-start`. Refresh, and you can see the rows of items are pulled to the top.

- Similarly, we also have `flex-end`, which pushes the content to the end of the cross-axis. If I refresh, you can see the content is at the bottom.

- You can also center the content by specifying a value of `center`. Refresh, and you can see the content is center-aligned.

- The fourth value is `space-between`, which takes all the extra space and puts it in between the rows. Refresh, and you can see all the space is in between the two rows.

- Finally, we have `space-around`, which distributes the space around the lines. Refresh, and you can see the space distributed; the center portion has twice as much as that of the edges.

- So, the `align-content` property is used to align lines of content or rows of content along the cross-axis and distribute any extra spacing in the parent container. The possible values are `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, and `stretch`, which is the default value.

### **=>** Flex item properties

- Next, let's take a look at the list of properties applicable to a flex item.

- First, we have `order`. The `order` property controls the order in which they appear in the flex container.

- On similar lines, there is `flex-grow`, which defines the ability for a flex item to grow if necessary.

- Similarly, we have `flex-shrink`, which defines the ability for a flex item to shrink if necessary.

- After that, we have `flex-basis`, which specifies the initial main size of a flex item.

- We're also going to quickly take a look at the `flex` property, which is a shorthand for `flex-grow`, `flex-shrink`, and `flex-basis`.

- We will wrap up flex item properties with `align-self`, which allows alignment of individual flex items.

### **=>** order

- Now that we know the properties that can be applied to a flex item, let's take a closer look at each of the properties, starting with the `order` property.

- On the container class, if I comment out all the properties except `display` and `border`, with `display` being set to `flex`, it becomes quite evident that flex items in a container are laid out in the order in which they appear in the source code.

- However, this order can be changed using the `order` property. In our example, we have 9 items, and you can see they are laid out as item 1 through 9, which is the order in which they appear in the code.

- Let's mix up this order in the CSS. For item 3, I'm going to set `order` to 1.

- If we refresh the browser, you can see that item 3 is pushed all the way to the end. That's because all flex items, by default, have an order of zero. Order one is greater than the order of all other items, and hence item three appears at the very end.

- If I change the order of item 7 to 2 and refresh, you can see that item 7 is pushed to the end. It goes in order from zero to one and then to two.

- If you specify the same order number for more than one item, items are laid out in the order in which they appear in the source code.

- For example, if I specify an order of 1 for item 9, you can see that both item 3 and item 9 have the same order. However, in the HTML, item three appears before item nine, and if I refresh, that is how the items are laid out in the browser.

- So, in summary, the `order` property accepts an integer value and is used to control the order of items in the flex container. Elements with the same `order` value are laid out in the order in which they appear in the source code.

### **=>** flex-grow

- The next property that can be applied to a flex item is the `flex grow` property.

- `flex grow` specifies what amount of space inside the flex container the item should take up if necessary.

- The `flex grow` factor is always relative to the size of the other children in the flex container.

- Let's understand how it works with the UI. By default, you can see that the flex items only take up space that is required to fit the content.

- So, there is a lot of extra space within the container. Sometimes you don't want the additional white space; instead, you want the flex items to grow to take up the remaining space.

- By default, all flex items have a `flex grow` value of 0, which is why they don't take up the available extra space. Let's change that for one of the items and see what happens.

- In the CSS file, for item 5, I will set `flex grow` to 0 to begin with.

- When I refresh the browser, you can see there is no change. So 0 is the default value.

- When I change this to 1, though, and refresh, you can see the change right away. Item 5 now grows to take up all the remaining space in the container. Let's add the property to item 6 as well, `flex grow` set to 1.

- Now, if we refresh, we can see that the additional space has been evenly distributed between the two flex items. If there were 100 pixels available, item 5 would grow by an additional 50 pixels, and item 6 would also grow by an additional 50 pixels.

- Now let me change the value of `flex grow` on item 6 to 3 from 1. What do you think is going to happen? Refresh, and you can see that item 5 and 6 both grow, but item 6 takes up the extra space three times as much as item 5.

- Remember, `flex grow` factor is relative. If item 5 grows by 25 pixels, item 6 has to be 3 times that and hence grows by 75 pixels. You can specify decimal values as well for `flex grow`, and it works completely fine. Do not specify negative values.

- Now, if we want all the items to grow to take up the extra space evenly, we simply add `flex grow` and set it to 1 for all the flex items.

- So, in the CSS, let me comment out `flex grow` on the individual items and, instead, on the flex item class, which is applied to every item in the HTML, let's add `flex grow` and set it to one.

- Refresh, and you can see all the items grow evenly to take up the leftover space, nice and clean.

- So, the `flex grow` property dictates what amount of the available space inside the flex container the item should take up.

- `Flex grow` factor is also relative to the other items in the container.

- By default, the value is 0, which dictates that items should not grow.

- Setting a `flex grow` value of 1 on all the flex items will cause the flex items to grow evenly whenever there is additional space in the container.

### **=>** flex-shrink

- Now, on the other side of `flex grow`, we have the `flex shrink` property.

- As you might have already guessed, `flex shrink` defines the ability for a flex item to shrink if necessary.

- Unlike `flex grow`, the default value for `flex shrink` is one. However, the `flex shrink` factor is still relative to the other items in the container.

- Let's understand with the UI. The first point to make note of is that `flex shrink` is set to a value of 1 by default for every single flex item. That's why, if I try to reduce the width of the parent container, the flex items shrink to fit inside the container.

- In case you missed that, let me repeat it. You can see the flex item's width. If I decrease the screen size, the width of the flex items also decreases.

- They are shrinking, but the shrinking only happens up to a certain point, after which the items simply overflow. You can see that items 8 and 9 are not visible anymore.

- Now let's say you don't want the shrinking to happen on the flex items. For that, simply set the `flex shrink` value to zero on the flex item class, which is applied to every flex item.

- Set `flex shrink` to zero. Now, if I go back to the browser, refresh, and reduce the width, you can see there is no shrinking, and the items overflow right away.

- It is also possible to control the shrinking for individual items. I'm going to comment out `flex shrink` on the flex item class and add a `flex shrink` of 4 to item 3.

- Now what this specifies is item three is going to shrink four times as much as the other items.

- Remember, this is a relative factor. If all the other items shrink by 25 pixels, item 3 shrinks by 100 pixels.

- Let's see this in action, and just for this property demo, I'm going to add a width to the flex items class to make them larger. So, width is going to be equal to 6rem.

- Now you can see all the items occupy the same size. If I start decreasing or reducing the width, though, you can see item 3 decreases more than the other items.

- Let me repeat it in case you missed that: reduce the browser width, and you can see item 3 shrinks more than the other items.

- So, the `flex shrink` property dictates the shrink factor of the flex items when the default size of the flex items is larger than the flex container. It is always relative to other items in the container. By default, the value is 1, which dictates that items should shrink to a certain extent if necessary.

Here's the text you provided, formatted using Markdown:

### **=>** `flex-basis`

- Let's move on to the next property which is `flex-basis`.

- The `flex-basis` property specifies the initial size of a flex item before the extra space in the container is distributed.

- This is used in place of the `width` property in flex layouts, so it can accept values in percentages, pixels, rems, or even keywords like `auto`.

- Let's understand better with the UI. By default, `flex-basis` has a value of `auto`, which sets the initial width based on the item's content.

- In our case, you can see that the item's width is dependent on the text inside. If I change the text on item 1 to "Item 1 flex basis" and refresh, the item now has a larger initial width.

- Back in the CSS file, on item 1, I'm going to add `flex-basis` and set it to `auto`. If I refresh, you should not be seeing any difference as it is the default value.

- If I change the value to 200 pixels and refresh, you can see the initial size of item 1 is now 200 pixels.

- `Flex-grow` and `flex-shrink` apply on top of `flex-basis`. For example, on item 1, if `flex-grow` is set to 1, refresh, the extra space is added onto the 200 pixels. It could be 300 pixels after growing.

- `Flexbox` doesn't try to decrease its growth just because it is larger than the other items, to begin with. The same goes with `flex-shrink` as well.

- So, the `flex-basis` property is used to set the initial size of a flex item. You can specify values in pixels, percentages, or relative units. By default, the value is `auto`, which decides the item's width based on the item's content.

### **=>** `flex`

- All right, the next property applicable to a flex item is the `flex` property, which is a shorthand for `flex-grow`, `flex-shrink`, and `flex-basis`.

- Although we can specify the three properties individually, the recommended way is to use the `flex` property, since we have already covered the three properties, I'll walk you through slides for this property. I recommend you play around with it in code when you get the time.

- Now, `flex` accepts three values separated by a space. The first is `flex-grow`, the second is `flex-shrink`, and finally, `flex-basis`. You can see that it is much simpler and easier as well.

- By default, the `flex` property has a value of "0 1 auto," where:

  - 0 for `flex-grow` implies the items will not grow to fit the container.

  - 1 for `flex-shrink` implies the items will shrink when necessary.

  - "auto" for `flex-basis` implies the width of the items depends on their content.

- The `flex` property can be specified using one, two, or all three values. Try experimenting with different values, and you'll get a good understanding of the `flex` property.

### **=>** `align-self`

- Let's now move on to the last flex item property, which is the `align-self` property.

- `Align-self` is used to control the alignment of individual items. The values are pretty much the same as those applicable for the `align-items` property on the flex container. Let's take a look at them one by one.

- The first value is "flex start," which aligns the items at the start of the cross axis.

- On item one, let's set `align-self` to "flex start." Let's also set a height of 400 pixels on the container. If we take a look at the browser and refresh, you can see the item is pulled to the top, which is where the cross axis starts.

- The second value is "flex end," which aligns the item with the end of the cross axis. On item 2, let's set `align-self` to "flex end," and you can see the item is pushed to the bottom of the cross axis.

- The third value is "center." So let's add `align-self` "center" on item three and refresh, and you can see item three is centered.

- The fourth value is "stretch," which stretches the item from cross start to cross end. On item 4, if I set `align-self` to "stretch" and refresh, you can see item 4 is stretched, but so are items 5 through 9.

- Now, you might think, "Okay, stretch is the default value for `align-self`," but that is not true. The default value for `align-self` is "auto," and `align-self` is computed from the `align-items` property of the parent flex container.

- Now, items five through nine are stretched because the container has `align-items` of "stretch," which is the default value. Starting to get a bit confusing, isn't it?

- Well, let me go over this slowly. The flex container, which is the parent container, has no `align-items` property set. So what is the default value? It is "stretch." So the container has `align-items` set to "stretch" by default.

- Now, flex item 5, does it have `align-self`? No, but what is the default value of `align-self`? It is "auto," and what does "auto" specify? Well, it specifies to take the value of the parent's `align-items` value. So item 5 takes the value of "stretch," so do items 6, 7, and so on.

- Now, if I specify `align-items` on the parent container and set it to "flex end," items 5 through 9 will now inherit that value, and if I refresh, you can see that they are pushed to the end of the cross axis.

- Now, I understand this is a bit overwhelming to keep track of, but I hope you now have a place to come back to anytime you need to understand what is going on with the layout in your web page.

- So `align-self` property is used to align the items individually. It accepts values like "auto," "flex start," "flex end," "center," and "stretch." If specified, it will always override the `align-items` value of the flex container.

- All right, with that, we wind up with the different properties that are part of the flexbox module, and in doing so, we have come to the end of this crash course on CSS flexbox.
