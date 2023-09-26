---
sidebar_position: 2
---

# CSS Flexbox

Introduction

hey everyone my name is vishwas and welcome to this crash course on css
flexbox for complete beginners in this crash course we will understand
the various concepts in flexbox

Before we begin

before we begin let me go over a few
points first i would like to mention this course is for complete beginners
if you're someone who is new to flexbox or have an idea about flexbox and want
to understand better please continue if you are an expert
this is your cue to probably hop into another video where your time can be better utilized
second this video is a continuation of the css
crash course make sure you are familiar with both html and css before proceeding
in this video we are going to learn the important concepts in flexbox
if you are also interested in css grid we will be learning that in a separate
video but if you have the question should you be learning flexbox or grid
my advice would be to learn both flexbox is great for one directional
flow and can actually work alongside grid for more complex layouts
it's not rare to see code bases which use both now please do make sure you could along
with me as that is the best way to learn by the end of this video you will have a
solid understanding of creating layouts with css flexbox

What is Flexbox?

all right with these points in mind let's get started what is flexbox
the css flexible box module or simply known as flexbox is a one-dimensional
layout model it allows you to design flexible and efficient layouts
align and distribute space among items in a container to put it in non-technical terms
flexbox helps you arrange elements in a web page with ease
now why was this introduced well before flexbox there were four
layout modes and we had a look at all of them in the css crash course
block for sections in a web page inline for text
table for two-dimensional table data and positioned for explicit position of
an element these layouts however did not provide enough flexibility
we had to find all kinds of hacks to get the layout just the way we wanted
working with floats trying to vertically align content create equal height columns
well they were kind of a nightmare the flex layout on the other hand provides a lot of flexibility
with flexbox we can arrange items left to right right to left top to bottom or
bottom to top and at the same time control the spacing alignment
and order of items in the container and to be honest it has sort of become a
must-know for front-end developers in 2022. if you're comfortable with html and css
flexbox is the logical next step for you

Terminology

all right now that we understand the
what and why of flexbox let's dive into understanding the different concepts
we first need to start off by understanding the terminology in flexbox
trust me when i say this the next few minutes you spend understanding what each term means
will decide how easy it is to understand the flexbox properties
understanding the terminology is essential to this course so please make
sure you pay attention when we talk about flexbox we mainly
have two entities a parent container which we term as the
flex container and the immediate children elements which we term as flex items
if you take a look at some sample html the parent div is the flex container
and all the children divs are the flex items
now we also deal with two axes when working with flexbox
the main axis and the cross axis by default the main axis runs left to
right and the cross axis is perpendicular to the main axis and runs top to bottom
the start point of the main axis is termed as main start and the end point
is termed as main end the length from main start to main end
is called the main size so we can say that the flex items flow
from main start till main end and take up the main size as the length
similarly with cross access we have cross start cross end and cross size
we can also change the direction of the main and cross axis by changing how the
items are laid out in the container we will talk more about that later in
the course understanding flexbox is basically getting familiar with the properties
associated with the flex container and the flex items nothing fancy you just learn it like how
you learned css know what properties exist and how they work

Flex container properties

with the terminology now familiar let's begin by focusing first on the
properties that are associated with just the flex container
there are 10 in total first we have the display property this
is what defines a flex container and is mandatory to work with flexbox
next is flex direction it defines the direction in which the flex items are placed within the
container third we have flex wrap which is used to control the wrapping of items within the
container we then have flex flow which is a shorthand for the combination of flex
direction and flex wrap we then have column and row gap
properties to set the gap between columns and rows and just gap which is a shorthand for
both that is justify content that defines the alignment of the items along the main
axis and similarly align items which defines how flex items
are laid out along the cross access finally we have the align content
property this is similar to justify content with the difference being this will align
along the cross access and not mean access also this works only when there are
multiple rows of flex items in the container

Setup

to get us started with flexbox i have
set up some very simple html and css that i am now going to walk you
through i have created a folder called flexbox crash course and within the
folder i've created an index.html file and a
styles.css file the html is pretty standard
the head tag contains what you would normally find and a link to the css file
within the body we have a parent div tag with a class called container
this parent container has nine div tags as children
each div has a class flex item and also a class specific to the item
number item 1 item 2 till item 9.
in the css file i've set margin to 0 on the body element
and on the container class i've added a thick black border
on the flex item class i've added a font color white a font size of 1.5 ram
padding of one rem and have also center aligned the text
for items 1 through 9 i've set a different background color so as to
visually separate each item in the browser the html and css code can be found on my
github page in the crash course 2022 repo i'll make sure to include a link in the
description once you clone the repo or download the code
if you open the html file in the browser you should be able to see this layout
you can see we have nine items enclosed within the container that has a solid
black border

display

now we can focus on our very first
property which is the display property to create a flex container we make use
of the display property and set it to a value of flex
in the css file on the container class add the property display
and set it to flex now when i refresh the browser
you can immediately see the change as with all properties in css some
initial values are defined so when creating a flex container all of the contained flex items behave
in a certain way first they will display in a row
second items start from the beginning of the main access that is the leftmost
point but do not stretch till the end however they can shrink to a certain
extent third items will stretch to fill the size of the cross axis that is from the
top to the bottom also you can notice from the border that
the container itself has 100 percent width so it does behave similar to a
block level element now if you do not want a block level flex container you can set the display
property to inline flags and create an inline flex container
so back in the css file display is inline flex
if i now refresh you can see the border now wraps around
the flex items the container only takes up width to accommodate its children
so the display property is used to create either a block level or inline level flex container
the possible values are flex and inline flex

flex-direction

the next property we are going to learn is flex direction the flex direction establishes the main
axis which in turn decides how the flex items are placed within the flex container
by default the main axis flows from left to right which is the reason we see the
items placed from left to right in the browser by changing the value of the flex
direction property we can change how the items are placed
let's revert display to flex and now define the flex direction
property this property can accept one of four different values
the first value is row which is the default value so if we set flex direction to row
and refresh you can see it doesn't make a difference
the items still flow from left to right flex direction of row sets the main axis
from left to right and hence no change
the next alert value is row reverse and you might have guessed it
row reverse sets the main axis direction from right to left which results in the flex items being
placed from right to left if i refresh
you can see the items are now placed in the reverse order item 1 starts at the end of the
container the third alert value is column
when you set flex direction to column the main axis flows from top to bottom
the items will be stacked on top of each other refresh the browser
and you can see the items flow from top to bottom item 1 at the top and item 9 at the
bottom finally we have column reverse
which stacks items in the reverse order if i
refresh you can see that item nine is at the top and item one is at the bottom
so the flex direction property sets the direction of the main access thereby controlling how the items are placed in
the container possible values are row which sets main axes from left to right
row reverse for right to left column for top to bottom and column
reverse for bottom to top

flex-wrap

let's now move on to the third flex
container property which is flex wrap as i mentioned a few minutes ago
the items in a flex container can shrink to a certain extent to fit in a single
line if there is not enough space though the items simply overflow
let me show that to you in the css file i'm going to comment out
flex direction and refresh the browser
if i now start to reduce the browser width
you can see that the items begin to shrink but after a certain extent they are no
longer in view you can change this behavior using the flex wrap property
in the css file on the container class i'm going to add a new property which is
flex wrap keep in mind i haven't removed the display flex property on the container
and never will throughout this course now flex wrap can accept one of three
possible values the first one is no wrap and this is the
default value when i refresh
you can see there is no change if we want the items to wrap within the
container then we set a value of wrap so flex wrap
set to wrap now when i refresh the browser
you can see that when i reduce the browser width the items have been wrapped in the
container and the wrapping takes place only when needed
if i expand the browser width there is no wrapping if there is not enough space for just
one item which is item nine you can see only item nine moves into
the next row reduce the size further item eight moves into the next row and
so on the final possible value is wrap reverse
and what wrap reverse does is instead of items falling into the row below
it climbs into the row above let me show that in the browser
refresh and you can see we have nine items when i reduce the browser width
you can see that item nine instead of moving to the row below moves to the row
above now do not get confused that wrap reverse starts wrapping in the reverse
order of items item one will not move into the second row if the space is inadequate
wrapping always occurs from the last item rap reverse just pushes the last item
above instead of below what you should know is that vertical
wrapping of items is also possible and for that we need to change flex
direction to column and add a height to the flex container
so let's uncomment flex direction set it to column and we're going to add a height
of 400 pixels let's also set flex wrap to just wrap
if we refresh you can see that a column is created to the right and the items
are placed in that column so 789 which could not be accommodated
with a height of 400 pixels are shifted to the second column
if i change flexwrap to wrap reverse refresh
the items are placed in a new column to the left
so the flexwrap property is used to control the wrapping of flex items
within the container the possible values are no wrap which is default
wrap which wraps the content into the next row or column and wrap reverse
which wraps the content into the previous row or column

flex-flow

all right let's proceed to the fourth flex container property which is flex flow
it is a shorthand for flex direction and flex wrap
let's comment height of 400 pixels flex direction
and flex wrap instead define flex flow
by default the flex flow property is set to row and no wrap
which is the default value of the individual properties the first value is the flex direction
and the second value is the flex wrap property value if i refresh
and you can see once again the items are laid from left to right and there is no wrapping of items
you can type any combination of the possible values and the layout will adjust accordingly
let's go with flex flow set to row reverse
and wrap refresh
and you can see the layout in the browser the flex direction is from right to left
and when i reduce the browser width the items are wrapped into the next row
so the flex flow property is a shorthand for flex direction and flex wrap
the first value is flex direction and the second value is flex wrap
all possible combinations of the two properties work just fine

gap properties

all right let's now move on to the next set of properties which deal with spacing between rows and columns
first we have the column gap property which sets the gap between columns
for example if we set column gap 20 pixels and refresh
we can see a gap of 20 pixels between the columns
similarly we can also set the gap between rows the property is row gap
and we can set it to 30 pixels to verify this property though we need
more than one row so let's set flex wrap to wrap and head back to the browser
refresh and reduce the browser width
you can see there is now a 30 pixel gap between the two rows
now it's also possible to specify both column and row gap using the gap
shorthand property so let's comment these out and instead
set gap to 40 pixels and 20 pixels
here the first value is the row gap and the second value is the column gap
when i refresh you can see 40 pixels between the rows
and 20 pixels between the columns so to specify a gap between columns you
can use the column gap property to specify gap between rows you can use
the row gap property you can also use the shorthand gap property to specify both row gap and
column gap the values can be a non-negative value or a percentage

justify-content

now let's move on to the next set of properties which are concerned with alignment
we're going to start with the justify content property to see the alignment more clearly i'm
going to reduce the number of items from nine down to five
all right now justify content defines the alignment along the main axis
let's understand with the ui how the different values work
by default justify content is set to the value flex start
which places the flex items at the beginning of the main axis which is also
known as main start if i refresh the browser
you can see there is no difference in the alignment the second possible value is flex end
this causes the flex items to be placed at the end of the main axis which is
also known as main end if i refresh
you can see the items are now placed at the end of the main axis
we can also align the content at the center of the main axis
set the value to center and refresh the page
the content is now placed at the center of the main access
so these are some of the values you would expect for alignment left align right align and center align
but flexbox provides additional values that can control how the extra space has
to be distributed within the container we have a value of space between so
justify content space between when i refresh
you can see the extra space within the container is evenly split and added in
between the different flex items sometimes you might also want the space
before the first item and after the last item for such a scenario the value is space
around let me change space between to space around
and refresh the browser you can see there is now space at the beginning and at the end
and the space is equal to half of the space between the flex items
for example if space in between the items is 20 pixels space at the start
and end would be 10 pixels however if you want the same space at the start
and end of the items as well the value you're looking for is space evenly
if i change the value of justify content to space evenly
and refresh the browser you can see the extra space is equally
distributed within the container a very important point to keep in mind
is that justify content property aligns items based on the main access
so if we set flex direction to column which changes the main axis from top to
bottom justify content deals with vertical alignment so if i uncomment flex direction set to
column and set a height of let's say 800 pixels
add extra space within the container and change justify content to flex start
refresh the browser you can see all the items are pulled to the top
if the value is flex end refresh all the items are pushed to the bottom
set the value to center refresh and you have vertically centered
content something that was a real struggle before flexbox
now space between space around and space evenly behave the same way
i'm going to let you try them out so the justify content property is used
to align items and distribute any extra spacing in the parent container
the alignment is always along the main axis the possible values are flex start flex
end center space between space around and space evenly

align-items

all right the next alignment property is the align items property
align items defines the default behavior for how flex items are laid out along
the cross axis of the container this means it works just like justify
content but in the perpendicular direction again let's understand with the ui how
the different values work to visualize the changes we need a
height on the container so let's set height to 800 pixels
by default the value of align items is stretch
that means the flex items stretch the entire length of the cross axis
so if i set align items to stretch and head back to the browser refresh
you can see the items take up all the available height of the container so they stretch to fill the container
so stretch is the default value the second value we can specify is flex
start all items are pushed to the cross start
which is the starting point of the cross access so if i refresh
you can see even though the container is 800 pixels in height the items do not stretch and are aligned
with the cross start of the line similar to flex start we also have flex
end and this value as you might have guessed
will push the items to the bottom of the container or pushes the items to the end of the
cross access the fourth possible value is center
which centers the content along the cross axis so refresh
and the items are now placed at the center of the cross axis the last value i want to discuss is
baseline to help us understand baseline i've got this image from stack overflow
if there is a word for example sphinx the baseline is the line upon which most
letters sit now coming to flexbox the base value for
flex items will align flex items along their contents
baseline you can see we have five items each with different heights and content
size but you can see how all the content in the flex items sit on this baseline
so if you ever want the text inside the items to line up go with baseline
let's quickly take a look at an example i'm going to slightly modify the css for
the first three items on item one padding bottom three ram
on item two padding bottom five ram
and on item three padding bottom 3 ram
now i can set align items to baseline if i refresh
you can see that the text inside each item is aligned
the item itself is positioned based on where the text will sit
now you can also flip the axis by setting flex direction to column and test how the alignment works i'm going
to leave that to you as an exercise so the align items property is used to
align items and distribute any extra space in the parent container
the alignment is always along the cross axis the possible values are flex start flex
end center baseline and stretch which is the default value

align-content

all right let's now proceed to the last property that can be applied on the flex container which is the align content
property the align content property aligns lines of content along the cross axis
similar to how justify content aligns individual items within the main access
so it distributes additional space but along the cross axis and a very important condition is
that multiple lines or rows must exist within the container
if not it has no effect let's understand the different possible values with the ui
first make sure to have a height on the container and also enable wrapping of
items so height 800 pixels and flex wrap set
to wrap wrapping is required to force our content into two lines
let's go back to html let's also uncomment the remaining four items
head back to the browser and refresh if i reduce the width
you can see the content wraps into two rows the align content property is used to
align these rows of content within the container
the default value is stretch you can see both the lines stretch to fill the
available space so if we set align content
to stretch and refresh the browser
you can see there is no change the second value possible
is flex start this pulls the rows to the beginning of
the cross access refresh and you can see the cross access runs
from top to bottom so the content of lines is pushed to the very top
let's also get rid of the padding we just added so from item 1 remove padding bottom
from item 2 and 3 as well align content flex start
refresh you can see the rows of items are pulled to the top
similarly we also have flex end which pushes the content to the end of
the cross access if i refresh you can see the content is at the bottom
you can also center the content by specifying a value of center
refresh and you can see the content is center aligned
the fourth value is space between which takes all the extra space and puts
it in between the rows refresh
and you can see all the space is in between the two rows
finally we have space around which distributes the space around the
lines refresh and you can see the space
distributed the center portion has twice as that of the edges
so the align content property is used to align lines of content or rows of
content along the cross axis and distribute any extra spacing in the
parent container the possible values are flex start flex end center space between space around
and stretch which is the default value with that we have covered all the
properties that work on a flex container

Flex item properties

next let's take a look at list of
properties applicable on a flex item first we have order
the order property controls the order in which they appear in the flicks container
next we have flicks grow which defines the ability for a flex item to grow if
necessary on similar lines there is flex shrink which defines the ability for a flex
item to shrink if necessary after that we have flex basis
which specifies the initial mean size of a flex item
we're also going to quickly take a look at the flex property which is a shorthand for flex grow flex shrink and
flex bases we will wrap up flex item properties with align self which allows alignment
of individual flex items

order

all right now that we know the
properties that can be applied to a flex item let's take a closer look at each of
the properties starting with the order property
on the container class if i comment out all the properties except display and
border with display being set to flex
it is quite evident that flex item in a container are laid out in the order in
which they appear in the source code that however can be changed using the
order property in our example we have 9 items and you
can see they are laid out item 1 through 9 which is the order in which they appear
in the code let's mix up this order in the css for item 3
i'm going to set order 1.
if we refresh the browser you can see that item 3 is pushed all
the way to the end and that is because all flex items by default have an order
of zero order one is greater than the order of all other items and hence
item three appears at the very end if i change the order of item 7
to 2 refresh you can see that item 7 is pushed to the
end order zero first then order one and then order two
if you specify the same order number for more than one item items are laid out in the order in which
they appear in the source code for example if i specify order of 1 to item 9
you can see that both item 3 and item 9 have the same order
but in the html item three appears before item nine
and if i refresh that is how the items are laid out in
the browser so the order property accepts an integer
value and is used to control the order of items in the flex container
elements with the same order value are laid out in the order in which they appear in the source code

flex-grow

the next property that can be applied to a flex item is the flex grow property
flex grow specifies what amount of space inside the fixed container the item
should take up if necessary the flex grow factor is always relative
to the size of the other children in the flex container let's understand how it works with the
ui by default you can see that the flex items only take up space that is
required to fit the content so there is a lot of extra space within
the container sometimes you don't want the additional white space
instead you want the flex items to grow to take up the remaining space
by default all flex items have a flex grow value of 0 which is why they don't
take up the available extra space let's change that for one of the items
and see what happens in the css file for item 5 i will set
flex grow to 0 to begin with
when i refresh the browser you can see there is no change so 0 is the default value
when i change this to 1 though refresh
you can see the change right away item 5 now grows to take up all the
remaining space in the container let's add the property to item 6 as well
flex grow set to 1. now if we refresh
we can see that the additional space has been evenly distributed between the two flex items
if there was 100 pixels available item 5 would grow by an additional 50 pixels
and item 6 would also grow by an additional 50 pixels
now let me change the value of flex grill on item 6 to 3 from 1.
what do you think is going to happen refresh
and you can see that item five and six both grow but item six takes up the extra space
three times as much as item five remember flex grow factor is relative
if item 5 grows by 25 pixels item 6 has to be 3 times that and hence grows by 75
pixels you can specify decimal values as well to flex grow and it works completely
fine do not specify negative values
now if we want all the items to grow to take up the extra space evenly we simply add flex grow and set it to 1
for all the flex items so in the css let me comment out flex
grow on the individual items and instead on the flex item class which
is applied to every item in the html let's add flex grow and set it to one
refresh and you can see all the items grow evenly to take up the
leftover space nice and clean so the flexgear property dictates what
amount of the available space inside the flex container the item should take up
flexible factor is also relative to the other items in the container
by default the value is 0 which dictates the items should not grow
setting a flex grow value of 1 on all the flex items will cause the flex items
to grow evenly whenever there is additional space in the container

flex-shrink

now on the other side of flex grow we have the flex shrink property
as you might have already guessed flex shrink defines the ability for a flex
item to shrink if necessary unlike flex grow the default value for
flex shrink is one however the flex shrink factor is still
relative to the other items in the container let's understand with the ui
the first point to make note of is that flex shrink is set to a value of 1 by
default for every single flex item and that is why if i try to reduce the
width of the parent container
the flex items shrink to fit inside the container in case you missed that let me repeat it
you can see the flex item's width if i decrease the screen size the width of the flex items also decrease
they are shrinking but the shrinking only happens up to a certain point after which the items
simply overflow you can see that items 8 and 9 are not visible anymore
now let's say you don't want the shrinking happening on the flex items
for that simply set the flex shrink value to zero
on the flex item class which is applied to every flex item
set flex shrink to zero now if i go back to the browser
refresh reduce the width
you can see there is no shrinking and the items overflow right away
it is also possible to control the shrinking for individual items i'm going to comment out flex shrink on
the flex item class and add a flex shrink of 4 to item 3.
now what this specifies is item three is going to shrink four times
as much as the other items remember this is a relative factor if
all the other items shrink by 25 pixels item 3 shrinks by 100 pixels
let's see this in action and just for this property demo i'm going to add a width to the flex
items class to make them larger so width is going to be equal to 6 ram
now you can see all the items occupy the same size if i start decreasing or reducing the
width though you can see item 3 decreases more than the other items
let me repeat it in case you missed that reduce the browser width and you can see item 3 shrinks more than
the other items so the flex shrink property dictates the
shrink factor of the flex items when the default size of the flex items is larger
than the flex container it is always relative to other items in
the container by default the value is 1 which dictates the items should shrink to a certain
extent if necessary all right

flex-basis

let's move on to the next property which is flex basis the flex basis property specifies the
initial size of a flex item before the extra space in the container is distributed
this is used in place of the width property in flex layouts so it can accept values in percentages
pixels m rems or even keywords like auto
let's understand better with the ui by default flex basis has a value of
auto which sets the initial width based on the item's content
in our case you can see that the item's width is dependent on the text inside
if i change the text on item 1 to item 1 flex basis
and refresh the item now has a larger initial width
back in the css file on item 1
i'm going to add flex basis and set it to auto
if i refresh you should not be seeing any difference as it is the default value
if i change the value to 200 pixels
refresh you can see the initial size of item 1
is now 200 pixels and what you have to make note of here is that flex grow and flex shrink apply
on top of flex bases for example on item 1 if flex grow is set to 1
refresh the extra space is added onto the 200 pixels
it could be 300 pixels after growing flexbox doesn't try to decrease its
growth just because it is larger than the other items to begin with
and the same goes with flex shrink as well so the flex basis property is used to
set the initial size of a flex item you can specify values in pixels
percentages or relative units by default the value is auto which
decides the item's width based on the item's content

flex

all right the next property applicable to a flex item is the flex property
which is a shorthand for flex grow flex shrink and flex bases
although we can specify the three properties individually the recommended way is to use the flex property
since we have already covered the three properties i'll walk you through slides for this property
i recommend you play around with it in code when you get the time now flex accepts three values separated
by a space the first is flex grow the second is
flex shrink and finally flex bases you can see that it is much simpler and
easier as well by default flex property has a value of
0 1 auto 0 for flex grow which implies the items
will not grow to fit the container one for flex shrink which implies the
items will shrink when necessary an auto for flex bases which implies the
width of the items depends on their content the flex property can be specified using
one two or all three values try experimenting with different values
and you'll get a good understanding of the flex property

align-self

let's now move on to the last flex item
property which is the align self property align self is used to control the
alignment of individual items the values are pretty much the same that are
applicable for the align items property on the flex container let's take a look at them one by one
the first value is flick start which aligns the items at the start of the cross access
on item one let's set align self
to flex start let's also set a height
of 400 pixels on the container if we take a look at the browser
refresh you can see the item is pulled to the top which is where the cross axis starts
the second value is flex end which aligns the item with the end of the cross axis
on item 2 let's set align self to flex end
and you can see the item is pushed to the bottom of the cross axis
the third value is center so let's add a line self
center on item three and refresh
you can see item three is centered the fourth value is stretch which
stretches the item from cross start to cross end on item 4 if i set align self
to stretch and refresh you can see item 4 is stretched but so
are items 5 through 9. now you might think okay stretch is the
default value for align self but that is not true the default value for align self is auto
and align self is computed from the align items property of the parent flex
container now items five through nine are stretched because the container has
align items of stretch which is the default value starting to get a bit confusing isn't it
well let me go over this slowly flex container
which is the parent container has no align items property set
so what is the default value it is stretch
so container has align items set to stretch by default
now flex item 5 does it have a line self
no but what is the default value of align self
it is auto and what does auto specify well it specifies to take the value of
the parents align items value so item 5 takes the value of stretch
so do items 6 7 and so on now if i specify align items on the
parent container and set it to flex end
items 5 through 9 will now inherit that value
and if i refresh you can see that they are pushed to the end of the cross access
now i understand this is a bit overwhelming to keep track of but i hope you now have a place to come
back to any time you need to understand what is going on with the layout in your
web page so align self property is used to align
the items individually it accepts values like auto flex start
flex end center and stretch if specified it will always override the
align items value of the flex container all right with that we wind up with the
different properties that are part of the flexbox module and in doing so we have come to the end
of this crash course on css flexbox
