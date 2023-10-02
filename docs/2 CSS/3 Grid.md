---
sidebar_position: 3
---

# CSS Grid

### **=>** What is CSS Grid?

- The CSS Grid Layout module, or simply known as CSS Grid or just Grid, is a two-dimensional grid-based layout system with rows and columns.
- Grid makes it easier to design webpage layouts, align, and distribute space among items in a grid.
- Flexbox is great when we are dealing with one-dimensional layouts, but when dealing with two-dimensional layouts and you're concerned about laying down elements both horizontally and vertically, CSS Grid makes the task so much easier, including the complex layouts that we typically tend to struggle with.
- If you're comfortable with HTML, CSS, and Flexbox, CSS Grid is the logical next step for you.

### **=>** Terminology

- Let's dive into understanding the different concepts.
- We first need to start off by understanding the terminology in CSS Grid. Trust me when I say this, the next few minutes you spend understanding what each term means will decide how easy it is to understand the different properties CSS Grid offers.
- Understanding the terminology is essential to this course, so please make sure you pay attention.
- When we talk about CSS Grid, we mainly have two entities:
  - A parent container, which we term as the grid container.
  - And the immediate children elements, which we term as grid items.
- If you look at the sample HTML, the parent `<div>` is the grid container, and all the children `<div>`s are the grid items. Very important to keep this in mind.
- The next term to make note of is grid line, which is the horizontal or vertical dividing line in a grid. The orange line is an example of a column grid line as it is a vertical line. If it is horizontal, it is called a row grid line.
- Next, we have a grid cell, which is the smallest unit you can have on your CSS grid. It is the space between four intersecting grid lines as you can see here, denoted by the orange square.
- Next, we have a grid track, which is the space between two adjacent grid lines. It is denoted by the green portion on the screen.
- Finally, we have grid area, which is the total space surrounded by four grid lines. A grid area may be composed of any number of grid cells.
- Now, these terms you don't have to memorize for the very first time; however, it does help when learning the different properties. What is very important from the beginning is to understand grid container and grid items.
- Understanding CSS Grid is basically getting familiar with the properties associated with the grid container and the grid items, knowing what properties exist and how they work. You can always refer to the documentation if you're having trouble building a particular layout.

### **=>** Grid container properties

- Let's begin by focusing first on the properties that are associated with just grid container.
- There are 18 properties in total of which we're going to learn 16 in this crash course.
- The other two might be a bit confusing from a beginner's point of view; my recommendation is to understand the 16 properties, and then have a look at the other two which I will mention later on in the course.
- First, we have the `display` property; this is what defines a grid container and is mandatory to work with CSS Grid.
- Next, we have the `grid-template-column` and `grid-template-row` properties to set the number of columns and rows in the grid.
- We then have `column` and `row gap` properties to set the gap between columns and rows.
- Next, we have `justify`, `align`, and `place items` properties which are concerned with alignment of the grid items.
- Similarly, we have `content alignment` properties which deal with alignment of the entire grid.
- Finally, we have properties to deal with auto-generated grid tracks.
- This is just a list of the different properties, so don't get overwhelmed as to how each of them works.
- We will dive into each of them and understand how they work with a visual example in the browser.

### **=>** Setup

- To get us started with CSS Grid, I have set up some very simple HTML and CSS that I am now going to walk you through.
- I have created a folder called `grid-crash-course`, and within the folder, I've created an `index.html` file and a `styles.css` file.
- The HTML is pretty standard. The `head` tag contains what you would normally find and a link to the CSS file.
- Within the `body`, we have a parent `div` tag with a class called `container`. This parent container has nine `div` tags as children, and each `div` has a class `grid-item` and also a class specific to the item number (`item-1`, `item-2`, till `item-9`).
- In the CSS file, I've set `margin` to 0 on the `body` element, and on the `container` class, I've added a thick black border.
- On the `grid-item` class, I've added a font color white, a font size of 1.5rem, one `rem` padding, and I've also centered-aligned the text.
- For items one through nine, I've set a different background color to visually separate each item in the browser.
- The HTML and CSS code can be found on my GitHub page in the `crash-courses-2022` repo.
- You can either clone, copy, or download the code.
- If you open the HTML file in the browser, you should be able to see this layout. You can see that we have nine items enclosed within a container that has a solid black border.

### **=>** display

- Now let's focus on our very first grid container property, which is the `display` property.
- To create a grid container, we make use of the `display` property and set it to a value of `grid`.
- In the CSS file, on the `container` class, add the property `display` and set it to `grid`.
- If we save this file and refresh the browser, you won't see any difference in how the content is displayed.
- As `display: grid` has created a single-column grid for the items.
- So when creating a grid container, all of the contained grid items are placed in rows by default and span the full width of the grid container.
- It behaves similar to a block-level element.
- If you do not want a block-level grid container, you can set the `display` property to `inline-grid` and create an inline grid container.
- In the CSS file, `display` is going to be `inline-grid`.
- Save the file, refresh, and you can see the border now wraps around the grid items.
- The container only takes up width to accommodate its children, which in this case, is the text in each of the items.
- So the `display` property is used to create either a block-level or inline-level grid container.
- The possible values are `grid` and `inline-grid`.

### **=>** grid-template-columns

- Now, if you want to explicitly set a grid by creating columns and rows, you need to make use of `grid-template-columns` and `grid-template-rows` property. Let's understand each of them.
- First, let's take a look at defining columns. I'm going to revert `display` to `grid`.
- And then set a new property called `grid-template-columns`.
- This property specifies the number of columns in a grid layout. The values are a space-separated list where each value specifies the size of the respective column. For example, we can set the value as `100 pixels 200 pixels and 300 pixels`.
- This will create three columns in the grid. The first column width is `100 pixels`, the second column width is `200 pixels`, and the third column width is `300 pixels`.
- If we head to the browser and refresh, you can see we now have three columns of varying size. Item 1 is `100 pixels`, item 2 is `200 pixels`, and item 3 is `300 pixels`. But since we have specified the grid should have only three columns, the fourth item is now pushed to the second row, so items four, five, six now have the same size as 1, 2, and 3.
- Similar is the case with items 7, 8, and 9. The grid container is still the entire width of the browser; however, the items only take up `600 pixels` in width.
- Now if you want equal width columns, simply set `200 pixels` three times, so `200 200 and 200`.
- Refresh and all are equal-width columns.
- Now sometimes you might want to specify equal width columns but for a greater number of columns. In such a scenario, you can use the `repeat` function. So instead of `200 pixels` three times, you can specify the value as `repeat three times 200 pixels`.
- Refresh, and the result is the same, but now we can change three to six, and we can easily have six equal-width columns.
- Refresh, you can see we have the first six items in row one, seven, eight, nine in row two. This is because we have specified six columns of equal width.
- Now it is also possible to set the width of the column as a fraction of the available free space in the container. For example, we can set `grid-template-columns` value to `1 fr 2 fr and 1 fr` again. So if you were to have `100` width columns, `1` and `3` are given `25%` of the space while column `2` is given `50%` of the space.
- Refresh, and you can see just that we have specified the width as a fraction of the available space. Another function that is useful with grid is the `min max` function. We can specify three columns, so `repeat three columns whose width should be min max 200 pixels comma one fraction`.
- So the column should be at least `200 pixels` but can grow to take up the free space if available. When I refresh, you can see we have three columns. We can reduce the browser width, and the columns start to shrink, but at `200 pixels`, they stop shrinking and simply overflow.
- These are some of the values we can specify, so the `grid-template-columns` property is used to specify the number of columns in the grid. The width can be any non-negative length value like pixels, percentage, etc., or as a fraction of the free space. Available, you can also make use of functions like `repeat` and `min max` to achieve the perfect grid layout. On a side note, this property also accepts a line name as part of the value, but I find it to be confusing for a beginner, so I've decided to leave that out.

### **=>** grid-template-rows

- Alright, the next property we are going to understand is `grid-template-rows`, which specifies the number of rows in the grid. The value you can specify is pretty much what you can specify for `grid-template-columns`. You're now setting the height of the row instead of the width.
- So we can set `grid-template-rows` `100 pixels`, and this sets the height of the first row to `100 pixels`. You can see item 1, 2, and 3 have `100 pixels` as height.
- I can set the value as `100 pixels 150 pixels 200 pixels` refresh, and we see three rows of different heights, `100`, `150`, and `200`.
- Specify `repeat three times 100 pixels`, and we have three rows of equal height. Now if you specify a fourth row, so `repeat three times` and then `200 pixels` as the fourth value, refresh, you can see a blank row at the end. It doesn't contain any items, but the space is occupied by the grid container.
- Now you can also use the fraction unit if the container has a defined height. Let's add height of `400 pixels` and `grid-template-rows` as `repeat one fraction three times`.
- Refresh, and you can see the three rows grow to take up the available free space in the container. Pretty straightforward as you can see. So the `grid-template-rows` property is used to specify the number of rows in the grid. The height can be any non-negative length value like pixels, percentage, etc., or as a fraction of the free space available. You can also make use of functions like `repeat` and `min max`. This property also accepts a line name as part of the value, which I'm going to leave out as it is not significant from a beginner's perspective.

### **=>** grid-template

- The third property is `grid-template`, which is a shorthand for defining rows and columns. So instead of `grid-template-rows` and `grid-template-columns`, I'm going to add `grid-template`, and the value is going to be the value of the rows, so `repeat three times one fraction followed by a forward slash followed by the value of columns`.
- So `repeat three times min max of 200 pixels or one fraction`. When I refresh, you can see there is no change in the layout. So the `grid-template` property is used to specify both rows and columns in the grid. Its value is the value of `grid-template-rows` followed by a forward slash and then `grid-template-columns`.

### **=>** column-gap

- All right, let's now move on to the next set of properties which deal with spacing between rows and columns.
- First, we have the `column gap` property which sets the gap between the columns in the grid.
- For example, if we set `column gap` to `20 pixels` and refresh, we can see a gap of `20 pixels` between the columns.

### **=>** row-gap

- Similarly, we can also set the gap between rows.
- The property is `row gap`, and we can set this to `30 pixels`.
- Refresh, and we now see spacing between the rows as well.

### **=>** gap

- Now you can specify both column and row gap using just the shorthand `gap` property.
- So let's comment `column gap` `row gap` and instead specify `gap` `40 pixels` and `20 pixels`.
- Here, the first value is row gap, and the second value is column gap.
- When I refresh, you can see `40 pixels` between the rows and `20 pixels` between the columns.
- So to specify gap between columns, you can use the `column gap` property.
- To specify gap between rows, you can use the `row gap` property. And you can also use the shorthand `gap` property to specify both row gap and column gap. Values can be any non-negative value or a percentage.

### **=>** justify-items

- Let's now move on to the next set of properties which are concerned with alignment, and there are two types of alignment properties within the grid cell and within the grid container.
- Let's first take a look at alignment within the cell.
- To align the grid items along the row axis, we can make use of the `justify items` property on the grid container class.
- I'm going to comment out the grid gap as we don't need that anymore.
- Now I'm going to add a new property called `justify items`, and by default, the value of this property is `stretch`.
- If I set `stretch` as a value and refresh, you can see there is no change apart from the gap being removed.
- However, if I set a value of `start`, refresh, you can see that all the items are aligned to the start edge of their cell.
- This will be more clear when we inspect the element and hover on the grid container. You can see that the items are pushed to the start of the individual cells.
- And we can also set a value of `end`, in which case the items are pushed to the end of the cell.
- Finally, we can also set `center`, in which case the item is horizontally center aligned within the cell.
- So `justify items` for alignment along the row axis.

### **=>** align-items

- If you want to adjust alignment along the column axis, there is the `align items` property.
- Similar to `justify items`, `align items` has a default value of `stretch`.
- If I refresh, there is no change in the grid layout.
- However, if I set the value to `start`, refresh, you can see all the items are pushed to the top of the cell. Set it to `end`, and all the items are pushed to the bottom of the cell.
- - Set it to `center`, and all the items are vertically centered aligned within the cell. So `align items` for alignment along the column axis.

### **=>** place-items

- Now it is also possible to specify both the properties in a single declaration using the `place items` property.
- So I can comment out `justify items`, `align items`, and instead specify `place items`, and let the value be `start` and `end`.
- The first value here, which is `start`, is for `align items`, and the second value is for `justify items`.
- So if you've got this right, the items should be pushed to the top of the cell and then to the right of the cell.
- Refresh, and we see just that.
- `place items` can also accept a single value in which case the same value is assigned to both `align items` and `justify items`.
- Let's set one value of `center`.
- Now when I refresh you can see the item is center aligned both horizontally and vertically within the cell.
- So for alignment and spacing within the cell you have `justify items` for variation along the row axis, `align items` for variation along the column axis, and `place items`, which is a shorthand for both.
- The possible values are `start`, `end`, `center`, and `stretch`, which is the default value.

### **=>** justify-content

- All right, let's now take a look at the second set of alignment properties which deal with alignment within the container.
- Now to understand the different properties we have to make a small change in the grid template value.
- We're going to create a grid with three rows `200 pixels` tall and three columns `200 pixels` wide, so `repeat 3, 200 pixels`, and `repeat 3, 200 pixels`.
- I'm going to set height to `800 pixels` and comment out the `place items` property.
- If we take a look at the browser and refresh, you can see the grid container with the black border, but the `3x3` grid itself is smaller.
- This extra space gives you an opportunity to align the entire `3x3` grid block within the container.
- Now to align the content along the row axis we have the `justify content` property.
- By default the value is set to `start` so if I specify `justify content start`, refresh you can see there is no change in the layout.
- If I set it to `end`, and the content is now moved to the end of the row access.
- Set it to `center`, and the content is now center aligned with respect to the container horizontally of course.
- Now grid also provides additional values that can control how the extra space has to be distributed within the container.
- First we have a value of `space between` when I refresh the browser you can see the extra space that was left out is evenly split and added in between the grid columns.
- Sometimes you might also want the space before the first column and after the last column for such a scenario the value is `space around`.
- Let me change the value and refresh the browser you can see there is now space at the beginning and at the end and the space is equal to half of the space between the grid columns.
- For example if the space in between the columns is `200 pixels` space at the start and the end would be `100 pixels`.
- However, if you want the same space at the start and the end of the items as well the value you're looking for is `space evenly`. `justify content space evenly`.
- If I refresh you can see the extra space equally distributed within the container.

### **=>** align-content

- Of course we can expect the same behavior along the column axis as well.
- Grid provides another property called `align content`.
- The values are the same as `justify content` so I'm going to go over this fairly quicker.
- First we have `start` which is also the default value this pushes the content to the top of the container refresh and you can see there is no change as it is the default value.
- Specify `end`, and it pushes the content to the bottom of the container.
- `center`, refresh and the content is now center aligned vertically.
- To control spacing we have `space between` in which case the space is evenly distributed between the rows.
- You can also specify `space around` which adds space at the top and at the bottom the space is equal to half of the space between the rows.
- If you want the same space at the top and bottom of the rows as well the value is `space evenly`. Refresh and you can see the extra space is equally distributed within the container.

### **=>** place-content

- Now the next property is `place-content`, which is a shorthand for aligned content and justify content. So `place-content start end`, and comment out the other two properties. Here the first value of `start` is for align content, and the second value of `end` is for justify content. If you have understood this right, the content should be pushed to the top of the container and then to the right of the container. Refresh, and we see just that.
- Now `place-content` can also accept a single value, in which case the same value is assigned to both align content and justify content. Let's set one value of `center`. Now when I refresh, you can see the content is center aligned both horizontally and vertically within the container.
- So for alignment and spacing within the container, you have `justify-content` for alignment along the row axis, `align-content` for alignment along the column axis, and `place-content`, which is a shorthand for both. The possible values are `start`, `end`, `center`, and `stretch`, with `start` being the default value. You also have `space-between`, `space-around`, and `space-evenly` for adding spacing between the rows and columns.

### **=>** grid-auto-flow

- Alright, let's now move on to the last few properties that apply to a grid container. The next property to know about is `grid-auto-flow`, which controls how auto-placed items get inserted into the grid. For this property, I'm going to comment out all the properties except `display: grid` and, of course, the border.
- If we take a look at the browser, you can see that the items are placed by filling each row (nine rows for nine items). This is because the default value of `grid-auto-flow` is `row`. So if I specify `grid-auto-flow` and set a value of `row`, refresh, we see no change in the browser. However, set it to `column`, refresh, and you can see the items being placed by filling each column (nine columns for nine items).

### **=>** grid-auto-columns

- The next property is `grid-auto-columns`, which is used to specify the default width of a column. Currently, we have not specified a column width. So if we were to set `grid-auto-columns` to `100px`, refresh, you can see every column is now 100 pixels wide. This value, of course, will be overridden if you have specified a column width using the `grid-template-columns` property.

### **=>** grid-auto-rows

- Similar to `grid-auto-columns`, we also have `grid-auto-rows`, which sets the default height for rows within the grid. If we set it to `200px`, refresh, you can see the only row we have is now 200 pixels tall.
- So, some of the auto properties, as I call them, include `grid-auto-flow`, which controls how auto-placed items get inserted into the grid (by default, it is set to `row`, but you can also set it to `column`). Three other values are `dense`, `row dense`, and `column dense`, which are applicable for more complex layouts that you can look at once you've mastered the fundamentals. Then we have `grid-auto-columns` for setting the default column width and `grid-auto-rows` for setting the default row height. The value can be in pixels, percentage, `minmax`, etc., with `auto` being the default value.
- With that, we've had a look at all the grid container properties that I wanted to cover in this crash course. Two more properties which I would like you to read about once you are comfortable with the properties discussed so far are `grid-template-areas` and `grid`. `grid-template-areas` is used to specify areas within the grid layout, and the `grid` property is a shorthand for `grid-template-rows`, `grid-template-columns`, `grid-template-areas`, `grid-auto-rows`, `grid-auto-columns`, and finally, `grid-auto-flow`.

### **=>** Grid Item Properties

- All right, next, let's take a look at the list of properties applicable to a grid item.
- First, we have `grid-column-start` and `grid-column-end`. These two properties control on which column line the item starts and ends.
- Similarly, we have `grid-row-start` and `grid-row-end`, which control on which row line the item starts and ends.
- Then we have `grid-column` and `grid-row`, which is a shorthand for the previously mentioned properties.
- Finally, we have `justify-self`, `align-self`, and `place-self`, which deal with the alignment of the item.

### **=>** grid-column-start / grid-column-end

- All right, now that we know the different properties that can be applied to a grid item, let's take a closer look at each of the properties, starting with `grid-column-start` and `grid-column-end`.
- I'm going to comment out all the grid container properties except `display` and `grid-template`.
- Now, if we take a look at the browser, refresh, it is quite evident that grid items, by default, take up one column in the container. That can be changed using `grid-column-start` and `grid-column-end` on item 1.
- I'm going to set `grid-column-start` to 1 and `grid-column-end` to 3. If you now take a look at the browser, refresh, you can see item one starts at the first line in the grid and ends at the third line in the grid. So it now takes up two columns worth of space.
- If I set it to end at 4, refresh, it takes up three columns.
- Set it to 5, and it will add a new column, and the width will be the rest of the available space, which is why you see item 5 and 9 also take up more space than 200 pixels. Now, if you're unsure about the end column line, you can also mention how many columns it should span using the `span` keyword.
- So `grid-column-end`, let's say it has to span for two columns, refresh, and you can see item one now spans across two columns.

### **=>** grid-row-start / grid-row-end

- Similarly, let's take a look at the next two properties, which deal with row lines on item one. Again, we can set `grid-row-start` to 1 and `grid-row-end` to 3.
- If I now refresh the browser, you can see item one starts at the first row line and ends at the third row line, effectively taking up two rows of space.
- You can also use the `span` keyword, so span for two rows, refresh, and the layout remains the same.

### **=>** grid-column and grid-row

- It is also possible to specify these values using the `grid-column` and `grid-row` shorthand. So let me comment out the four properties and instead specify `grid-column` is going to be `1 / span 2`, and `grid-row` is going to be `1 / span 2`. So again, the first value is the start value, and then a forward slash, and then the end value, refresh, and we still see the same layout. So the `grid-column-start`, `grid-column-end`, `grid-row-start`, and `grid-row-end` properties control the position of the item in the grid. You can also make use of the `grid-column` and `grid-row` shorthand for the same purpose. Values can be a grid line number or the number of columns or rows the item has to span.

### **=>** justify-self

- All right, for the final set of properties, let's take a look at aligning items within a cell. Earlier in the video, we had a look at `justify-items`, `align-items`, and `place-items`, which apply to every item in the container.
- However, if you want alignment for one single item, you make use of `justify-self`, `align-self`, and `place-self`. Let's look at an example.
- On item two, I'm going to set `justify-self` to `stretch`. Now, this is the default value, so when I refresh the browser, you're not going to see any change.
- However, if I set it to `start`, refresh, you can see the item is pushed to the start of the row axis.
- Set it to `end`, refresh, and the item is at the end of the row axis.
- So it is center, and the item is center-aligned along the row axis. Similarly, we have `align-self` for alignment along the column axis. The default value is `stretch`. When I refresh, you can see the item stretches from top to bottom. There is no change.
- If I set it to `start`, refresh, it is pushed to the top of the column axis.
- Set it to `end`, it is pushed to the bottom.
- Set it to `center`, and it is center-aligned along the column axis.

### **=>** place-self

- Now, you can combine both `justify-self` and `align-self` into one `place-self` shorthand property.
- So comment out the two properties and specify `place-self`. First, we specify the `align-self` property value. Let's push it to the top using `start`, and then the `justify-self` property value. Let's push it to the right using `end`, refresh, and you can see the item is placed at the top right.
- You can also set one value in which case it will be applied to both the properties. If I set it to `center`, refresh, you can see the item is center-aligned both horizontally and vertically.
- So for alignment of an item within the cell, you have `justify-self` for variation along the row axis, `align-self` for variation along the column axis, and `place-self`, which is a shorthand for both. The possible values are `start`, `end`, `center`, and `stretch`, which is the default value.
- All right, with that, we wind up with the different properties that are part of the grid module, and in doing so, we have come to the end of this crash course on CSS Grid.
