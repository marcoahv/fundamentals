---
sidebar_position: 2
---

# Professional Website

<!-- This is part of the transcript of a video tutorial on web development.

help me do the following:

Write this text in its entirety, word by word, using markdown format, adding sub-headings for all its parts in h4 tags, starting every sentence with a bullet point, and using backticks for code terminology. -->

### **=>** Intro

- HTML and CSS are the fundamental building blocks of the web, and they're almost always the first thing that you learn when becoming a frontend or a full-stack web developer.

#### Tutorial Overview

- In this tutorial, we're going to be creating a simple professional website using HTML and CSS and also a little bit of JavaScript.

- I'm going to take you from just having a `figma file` which is just the layout and the design to a full-blown responsive web page.

- We're also going to deploy it to `netfi`.

#### Project Complexity

- The project itself is a bit `Advanced` for beginners.

- However, I'm going to explain absolutely everything to the best of my abilities.

#### Topics Covered

- We'll talk about things like `layout`, `why we're doing the things we are`, `naming conventions`, and so on.

- It'll be a relatively long project, so grab some tea or a cup of coffee.

- And let's build a website.

### **=>** Project Info & Demo

Before we start coding I just want to spend a couple of minutes getting set up, talking about the project, showing you the project, etc.

#### Project Information

- This is actually a project from the `iode this.com` website, which is a new daily coding challenge website run by my buddy `Floren pop`.

- It's full of UI challenges using HTML, CSS, and JavaScript.

- There are `free` and `paid challenges`, and they have a fully functional in-browser IDE that's very similar to `vs code`.

- If you want to go with the pro account for a limited time, you can get `10% off` using the code `Brad`.

- I'll have a link in the description to that.

#### Project Description

- This project is called the `Growth Landing page`.

- It's a website for an `SAS`, a `software as a service` company.

- It's not super hard, beginners can follow along, but it's also not super easy either. It's a good middle ground.

- This is one of the pro projects, but I got permission from Floren to share the `figma file` with you guys. You'll have a link to that in the description if you want it.

#### Figma File

- If you want to go in and slice up the images yourself, you can use the `figma file`.

- I have fig open; this is the `figma file`.

- If you want, you could click on the different layers.

- This is not a figma tutorial, so I'm not going to get into it too much.

- Let's say you want to export this image right here.

- I could do is on this side, I could say export `video`.

- That's just what the layer is called.

- If I do that, I can now have it just opened up in `Photoshop`.

- If you want, you can go through and slice up all the images, but I already have that done for you in the final code, which is in this `GitHub repository`. You'll find the link to it in the description.

#### Additional Resources

- I also have a `blog post` on my website that is the entire project, so all the code.

- Just about everything we're going to do in this video.

- Now I just want to give you a quick demo of the project and the different sections that we'll be working on.

#### Project Structure

- We're going to go `Section by section` doing the HTML and CSS.

- We're going to save the responsiveness for the end.

- So basically, we're building `desktop first`. We'll create the desktop version.

- Then we'll go back in and we'll add some `media queries` so that we can make it look good on mobile devices.

- We're already close to about `5 minutes` into the video, so I'm just going to go through this really quickly.

#### Project Sections

- There are different sections we'll be working on one by one.

- We're going to start with the `navbar`, which just has a logo, some links, and I'll show you the responsive version after because we do have a `hamburger menu` with a hamburger button with a mobile menu.

- Then we have the `main hero area` with some headings or a heading, some text, and buttons.

- This, you could do as `inline images` all separate, but I decided to just make it all one image and use it as the `background image` because there's nothing we actually have to interact with here.

- Then we have this `video section`, which is just some text, a `thumbnail`, and then a `button`.

- Then we have the `testimonials`, and we're going to be using a lot of `utility classes` or creating a lot of `utility classes` for buttons and cards, text, and backgrounds, things like that.

- I really want to emphasize creating basically `reusable CSS`, especially for beginners because I think that's really important when you're not using a framework that does it for you.

- So we have our `testimonials`.

- Then we have our `pricing cards` here, so just some headings, a list, buttons.

- Then we have `frequently asked questions`, and this is where we're going to implement a little bit of `JavaScript` so that we can open and close the answers.

- And then at the bottom, we have a decent looking `footer`.

- So we have a `newsletter subscribe form`, some links, and so on.

#### Responsive Version

- As far as the responsive version, let's take a look at that.

- Notice that now we have a `hamburger menu`, and now the menu opens from the side on smaller screens.

- We have a different background image; it's the same images but just formatted in a way that looks good on small screens.

- Then we have the `video section`, and then the `testimonial cards`. Everything is now stacked for the testimonial cards.

- And the pricing cards, we're using `CSS grid`, so we'll do that.

- We'll also make it responsive; everything looks nice and neat.

- Then we have our `FAQ`, still works and looks decent.

- Then we have the footer at the bottom.

#### Conclusion

- That's the complete website that we'll be building.

- We're not going to do the inner Pages; if you do want to add those, you can once you have a base layout.

- It's pretty easy to add inner pages.

- So that's it; let's go ahead and get started.

- I have my text editor; I'm using `vs code`.

- I have it open with an empty folder just called `SAS webs s it`.

- So you can use whatever text editor you want.

- I do recommend `vs code`, but if you like something else, that's fine.

### **=>** Exporting Images From Figma

- The first thing I want to do is get the assets for the project, which are the images.

- There are a couple of ways to do this.

- If you want to take the `figma file` that's in the description and slice out the images yourself, you can do that.

- But I also have the final code where you can just use the images from there.

#### Asset Retrieval Methods

- To show you real quick with `figma`, if you open up the project, I already kind of showed you this with the video preview image.

- If you want to export that, you can just go to the `layer`, which is right here, and then click down here `export`.

- Now for the main hero image, this one, you can do a couple of different ways.

- You could have these as separate inline images, but since there's nothing we have to interact with, these are basically just previews of the SAS of the product.

- Like this button isn't meant to be used or anything, so I would just say get this as one image and use that as a `background image`.

- And get this one as well because you can see this one is formatted for small screens.

- To do that, we could just click on this the `hero layer`, and if we look in here, we have another layer called `images`, and this has a bunch of different parts.

- Like the lines right there, that's one layer, that's another.

- What I would do, and what I did do, is just click on `images`, the whole thing, come down here and `Export` it.

- And then if I open that up and bring it over, you'll see it's just the entire thing.

- So that's what I did.

- If you want to, you know, if you have more experience and you know how to use these as inline images, you could align them.

- But I just don't think it's needed, and it's more of a pain to do it that way.

- But everyone has their own preference.

### **=>** Downloading The Image Assets

- Now, if you don't want to do any of this or even open `figma`, that's absolutely fine.

- Just go to the `GitHub page here`, and you can see I already have all the images for you.

- So if you're new to `GitHub`, you can either open your terminal and `clone` the repository.

- That might be a little `Advanced` for you, so you can just `download the zip file` here.

- If I open that up, you can see the `images folder` here with all the images.

#### Organizing Images in VS Code

- What I'm going to do is in `vs code`, I'm just going to create a new folder called `images`.

- Let's go ahead and just drag these over.

#### List of Assets

- And then I'll just go through them.

- So I have a `favicon` just for, you know, for the tab little logo.

- And then we have the `hero images`.

- We have the `main BG` which I just showed you how to get in `figma`.

- And then I also have the `mobile version` which is more compact.

- Then we have for the `logo`, the `regular logo` with dark text for the `navbar`, and then a `white one` for the `footer`.

- Okay, then I just have a `screenshot` that's really just for the `readme file` in the repo; you don't even need this.

- And the `video preview image`.

- So those are all the assets, all the images we need for this project.

### **=>** Creating Files and Folders

- So, the next thing we're going to do is create our `index.html` file.

- And we might as well create our `CSS folder`.

- You don't have to put the `CSS file` in a separate folder because it's only one file, but I usually like to, even if it's just one file.

- So, I'm going to call it `style.css`.

- You're welcome to call it something else if you want.

- And then we do have a little bit of `JavaScript`, so I'll create a `JS folder`.

- In that, we're going to create a `main.js file`.

- You can close it for now because we're not going to do `JavaScript` till later.

### **=>** Base HTML & Links

- So now we're ready to get started with the `index HTML`.

- I'm going to use `EMT`, which is a tool that's included with `VS Code`, and it allows us to just write quick `HTML` and `CSS`.

#### HTML Basics

- I'm going to just do `exclamation enter`, and that gives us our `head` and `body` tags.

- For the `title`, I'm just going to call it `growth app`.

- Let's include our other files.

- So we'll add a `link` tag here, `rel` equals `stylesheet`, and the `href` is going to be `CSS/` and then our `style.css`.

- And the `JavaScript` file, we can include down here at the bottom.

- Let's say `script`, `source`, and that's going to be in the `JS folder`, and then `main.js`.

#### Additional Head Elements

- There are a few other things that we're going to need to put up here in the `head`.

- One is going to be the `font` we're using.

- If we look at the `figma file`, and I click on any of this text here, you'll see over on the side we're using the `popins font`.

- That's what we want to use.

- So, what we'll do is go to `Google fonts`.

- I'm going to let me just clear this stuff up; you guys won't have that, don't want that.

- So we're going to search for `Poppins`, which is the font that we want to use.

- Just click on it.

- And then we want to select the different styles that we want to use.

- I'm going to choose `light 300`, `regular 400`, `semi-bold 600`, and `bold 700`.

#### Including Google Fonts

- Now all those are included in this one `link tag`, so I'm just going to copy that.

- You could also import it into your `CSS` if you want.

- I'm going to take the `link tag`, and we can close that up, and then let's put that in our `HTML` right above where we included the `style sheet`.

#### Adding Font Awesome

- I also want to use `Font awesome` because we do have some icons, for instance, in the login button here.

- You can see the user icon; we have this laptop icon.

- To include `Font Awesome`, you can go to `cdnjs.com`, at least this is how I do it.

- And then search for `font awesome`.

- So right here, version `642` at the moment.

- If we click on this `copy link tag`, we can get the link that we want to include in our `head`.

- I'll put that right here.

- And now we should be able to use `Font Awesome` icons.

#### Body Content

- Now in the `body`, for now, I'm just going to put an `H1` with just `hello`.

- You could just open your `HTML file` on your file system.

- But I would recommend, especially if you're using `VS Code`, I'd recommend using `live server`, which is a `Dev server` that will automatically reload every time you save, so you don't have to keep refreshing.

- If you go over to `extensions` and you just search for `live server`, so it's this one right here, so just go ahead and install it if you don't have it.

- And then the only other extension I'd really recommend for this project is probably `prettier`, which is a code formatter.

- I have it, so if I save, right, so if, let's say this is way over here, if I save, it gets formatted and pops back into place.

- I think that's turned on by default. If it's not, you can go to your `settings`. So if we go to `settings` and you search for `format`, let's see, right here, `format on save`, so you just want to make sure that's checked if you want that functionality.

#### Using Live Server

- Now, if you want to open this with a `live server`, you can either click on this `Go Live` button down here, or you can right-click and say `open with live server`. And there we go. So this is going to be our project.

- I'm going to keep it at about this width because, again, we're doing `desktop first`. We'll do the mobile stuff later on.

#### Using the Figma File

- I think I can close, well, I'll just keep the `figma file` open actually. We'll use that to go off of instead of the final website because that's more of a real-life scenario.

- A lot of times when you're a `frontend developer`, you'll get handed a file like this, and it's your job to make it a website.

#### Adding a Favicon

- Actually, one more thing I want to put in the `head` is the `favicon`.

- So instead of just having the default globe icon here, we want to show our logo.

- We'll do it right here.

- We'll say `link`, and let's say, instead of `rel stylesheet`, we're going to say `rel shortcut`. `Shortcut icon`, and I want to point to the `images folder` SL `favicon.ico`, and then I'm just going to add a type of `image/x-icon`. So if we do that and we go back, you can see now we have the little icon here.

### **=>** Navbar HTML

- All right now we're going to do this top to bottom, so we're going to obviously start off with the Navar which is this area right here and we're going to be using flexbox to align it so that the logo is over here and the UL is over here.

#### Setting up the Navbar

- Then we'll use flexbox to align the links as well, so let's go down to the body and let's get rid of that H1; we don't need that.

- We're going to use an HTML 5 semantic tag called `nav`.

- We're going to have a class of `navbar`. We're going to use EMT for that.

  - To add a class, instead of typing it all out, you can just say `dot` and then whatever the class name and then enter. So now I have a class of `navbar`.

- Inside that, we're going to want a class of `container`. This is a utility class that we're going to use because we don't want the website to go all the way over when we stretch the browser out really wide.

  - We want it to end at a certain point, so we'll add the CSS for that in a minute.

- In the `container`, we're going to have a logo.

  - Let's do a div with the class of `logo`.

  - Around the logo, I'll have a link just to `index.html`.

  - And then we need our image tag.

    - Image source: `images/SL_logo.png`

    - Alt: Logo

#### Creating the Menu

- Now in addition to the logo, after that div, we're going to have our menu.

- Let's have a div with the class of `main-menu`.

- Inside that, we'll have a `ul`, and then an `li` which will have the link.

  - The first one is going to be "Home," so I'll have it go to `index.html`.

  - We'll say Home.

- The other `li`s aren't actually going to go anywhere, so the `a` tag I'll just leave that as a number sign.

  - For this, let's say "About Us."

- Copy this down twice, and after "About Us," let's say "Blog."

- The last one is going to be our login link, which is going to be formatted as a button.

  - The `a` tag will have a class of `BTN`.

  - This is going to be gray, so I'm going to call it `BTN light`.

  - Inside the `a` tag, we're going to be using Font Awesome.

    - We're going to have that little user icon, so to get that, we can use an `i` tag with the class of `fas`.

    - All icons will have a base class of `fas`.

  - Let's say `f-user` because that's the icon we want to use.

  - After that `i` tag, we'll just say "Log In."

#### Conclusion

- We'll save that. Let me just, um, yeah, we'll do that so it's going to look like crap at the moment, but, uh, we'll add our CSS in a few minutes.

- I don't see the icon, so I'm sorry, it's `fa-user`, not `FAS user`. There we go. So now you can see the icon.

### **=>** Base CSS

Here is the provided text in markdown format with sub-headings, bullet points, and backticks for code terminology:

#### Introduction

- All right, so now we want to style the Navar.

- We also want to add just some base styles for links and unordered lists. We don't want bullet points for any unordered lists; things like that.

- We need to apply the font, the `Poppins` font.

#### Setting Base Styles

- Let's jump into our `style.css`.

- The first thing usually the first thing I add in my CSS is a little reset.

  - I'm going to add an asterisk which just represents everything.

  - I want to set the `Box sizing` on everything to `border-box`.

  - This makes it so that when we add margin and padding, it doesn't affect the actual width and height of the element; it's contained inside of it.

  - I also like to reset the margin to zero and padding to zero because some elements have default margin and padding.

    - This way I know that we're starting from zero with everything; there are no surprises.

- You'll see as soon as I save the margin goes away, and now it's all squished together.

- Now I can add my own margin and padding where I need it.

#### Styling the Body

- Let's add the `body` tag.

  - We're going to say `font-family`. We want to set that to `Poppins` which we already included and `Sans-serif`.

  - Set the `font-size` to 16 pixels by default.

  - Let's also set the `line-height`. I'm going to set that to 1.5.

  - Set the `background color` of the body to `White`.

#### Styling Links and Lists

- For links, let's say `a`.

  - I'm going to take away the underline, so `text-decoration` is going to be set to `none`.

  - Set the color to just set the default color to `333`, which is a really dark gray.

- For unordered lists, I don't want to have any bullet points.

  - We'll set `list-style` to `none`.

- Another thing I like to do is for images, I like to set the `max-width` by default to `100%`.

  - That way if you put an image inside of a div that has a certain width on it, it doesn't break out of the div; it stays contained within it.

#### Adding the Container Class

- What I want to do now is before we do the navbar, I want to just add the `container` class because you can see in the HTML we have a container directly in the `nav`. That's so that it doesn't go all the way over to the side when the browser is extended really wide.

- We're going to have a `container` pretty much in every section that we create.

- I'm going to come down here and what I'll usually do is at the bottom I'll have a spot for utility classes.

- We're going to have quite a few, and we're actually going to have two different sized containers.

- If we look at the project here, this so the container here for the Navar ends right here for the hero ends here.

- The video section, however, is more narrow.

- The pricing is more narrow, frequently asked questions.

- We'll have a `container` and then a `container SM` or `container small` class for those areas.

- Let's go ahead and create a class of `container`.

  - For the regular container, I'm going to set a `Max width` of `1100 pixels`.

  - Of course, this could be anything you want, but I think that that's a good kind of default width for it.

  - We want it to be in the middle.

  - We want to set the margin on that. We'll say top and bottom `0`, but on the left and right, we want it to be `Auto`, and that will put it in the middle.

  - I just want some padding on the left and right as well, so it's not right up against the edges. So `0` top and bottom, and then `15 pixels` on the left and right.

- For the `container small`, I'm just going to grab this and we're going to just change `1100 pixels` to `800 pixels`.

- We'll have a class of `container DSM` for those other areas.

- Now that we've done that if we save, you'll see that now there's a little bit of padding there. If I stretch the browser out, it stops here rather than just staying at the side.

### **=>** Navbar CSS

- Okay, now let's do the navbar Styles.

- So we're going to go up above where I put the utility classes and let's put a comment of `navbar`.

- The navbar itself isn't going to really have much.

- I'm just going to add a background color, let's say background of white.

- And then I'm just going to do padding, 20 pixels.

#### Flexbox for Alignment

- So I want to use `flex` because I'm going to align the logo over to the left and then the menu over to the right.

- Now we don't want to put `display: flex` directly on the navbar.

- Because if we look inside the navbar, the first child is the container.

- What we want to align is the logo and the main menu.

- So we're going to put the flexbox on `container` so that everything, all the direct children in `container`, which is the logo and the menu, are Flex items that we can easily align.

#### Flexbox Explanation

- Now if you don't know anything about flexbox, I'd probably say pause the video and go watch my flexbox crash course if you really want to understand it.

- Well, if you want to understand it better, I am going to explain it somewhat here as well, but I can't make this video 8 hours long, so you might want to check that out as well.

#### Applying Flexbox

- So let's go down here and let's grab the navbar and then the container that's in the navbar.

- And we're going to display the items inside of it as Flex items.

- So if I save right away, they're going to go side by side because it's a row, it's a flex row.

- I could keep it a column by saying `flex-direction` and set that to `column`, and that'll put it back vertically.

- But I want it to be a horizontal row, so I'm not going to do that.

#### Justify Content and Align Items

- Now I want the space right, this remaining space on the line, I want to be in the middle or between.

- So what we can do is say `justify-content` and we can set that to `space-between`, and now that'll get pushed over to the side so that aligns it going this way.

- Now, if I want to align them this way to be equal or to be in the center, then I could add `align-items` and set that to `center`.

#### Styling the Menu

- The menu, obviously, we don't want this to be vertical.

- We want this to go across in a row.

- So what I'm going to do is also make the `UL` a flexbox.

- So if we make this `UL` a flexbox, then all the `li`s are Flex items that we can align in a row.

- So let's say `navbar .main-menu UL`.

#### Styling Links

- And then the `a` tag, and notice I'm not using the `main-menu` class because I also want this to apply to the mobile menu when we add it later.

- So what I want to do first here is add some spacing so everything's not squished together.

- So let's do `10 pixels` top and bottom, `20` left and right.

- Okay, so that spreads it out.

- And then links are `display: inline` by default.

- So I'm actually going to just change that to `display: block`.

- And then let's set the font weight to semi-bold, so `600`.

- And I'm going to add a transition of `0.5 seconds` because when we hover over it and it changes color, I don't want it to just flick to that color.

- I want it to kind of smoothly fade into it.

#### Styling Hover State

- So let's save that and now you can see these are bold.

- The next thing I want to do is the hover.

- So let's go right under here, actually, we can just grab that.

- And we're just going to say `a:hover`.

- And then I will just want to change the text color to what's the color that we're going to use here.

- It's that light blue which is `#4891FF`.

- Okay, so now if I hover over you can see it turns blue, and it kind of fades into it.

- It doesn't just flick into it like right away because we added that `transition`.

### **=>** Custom Properties/Variables

- Now we've come to a point where we're going to start using this color, quite a bit.

- So we're going to have buttons with it and stuff like that.

- Instead of having to use this heximal value in a bunch of different places, I'm going to create a custom property or variable within CSS that has this number or this color.

#### Creating a Custom Property

- I'm going to cut it here, and then I'm going to go up to the top.

- I usually like to put this right here under the reset.

- When we create a custom property or variable, we put it in a scope, and we're going to say `:root` for the scope.

- That way we can use this anywhere.

- And then when we define our variables, they have to start with a double hyphen.

- So I'm going to call it `primary color`, and I'm going to paste that in.

#### Using the Custom Variable

- Now to use this variable, I can come down where I cut it.

- And we need to use the `var` keyword here.

- Just put in the variable name, which is `primary color`.

- Now if I come over here, I should see the same blue.

#### Additional Colors

- Now there's a couple of other colors I just want to add real quick.

- So we're going to have a light color as well, which is going to be `#F4F4F6`.

- And then we're going to have a dark color, which is going to be `#111`, which is just like a really dark gray.

- All right, so we can use those later.

### **=>** Buttons & Utility Classes

- Now that we have the hover effect, let's see what we want to do next.

- Let's start to work on the button.

- We want this "Last Login" to look like a button.

- If we look at the project here, we want it like that.

- This doesn't have the icon; I added that, but as you can see, it has the gray background.

#### Button Classes

- If we look at the HTML, we have a class of BTN and BTN light.

- So I'm doing this like the bootstrap classes.

- If you're familiar with bootstrap, you have a base BTN class and then you have different color classes that you can use in addition to that.

- Button classes are utility.

- So let's come down here and let's say "buttons."

- We'll go ahead and add our base BTN class.

- Let's do `display: inline-block` because links are inline by default.

- We want it to be `inline-block`.

- For padding, we'll do `13 pixels` top and bottom and `20 pixels` left and right.

#### Background Color

- Now for the background, it's up to you on how you want your default BTN class as far as the color goes.

- I think what I'm going to do is use the light color.

- I think that makes the most sense, so we'll say `V light color` like that.

- And if I save now, we have the gray background.

- Since I'm doing this, we don't really need the BTN light class.

- You could create it if you want, just if you want to always have to specify a color like this.

- But I think I'm just going to get rid of it.

#### Additional Styling

- And then for the color, let's say `#333`, so really dark gray.

- Font weight of the button, we'll do `semi-bold` `600`.

- Let's make sure text decoration is none.

- Border should be none.

- Border radius, I do want it to have rounded corners, so we'll do `10 pixels` on that.

- The cursor should always be a pointer.

- We'll also add a transition of `0.5 seconds` just for any hover effects.

#### Hover Effect

- If I hover over it, the text is still changing to Blue here.

- That's only because we specified that in the navbar.

- Now on just the regular hover, if it wasn't in the navbar, all I want to do is lighten the background color a little bit.

- So we can say `button:hover`.

- Then let's just change the opacity to `0.8`.

- Change it from one, which is the default, to `0.8`.

- So you can see the background gets a little bit lighter.

- We'll just do that for all the colors of the buttons.

#### Adding Color Classes

- Now while we're down here, let's add the other colors.

- So we'll do `BTN-Das-primary`.

- That'll have a background of the whatever the primary color is.

- Let's make the color white.

- And then I also want to have a `BTN-Das-dark`.

- Background is going to be whatever the dot color is.

- Color of the text will be white.

- Now if I were to go to my index HTML and add `BTN-Das-primary`, it turns blue.

- If I want `BTN-Dark`, it turns dark.

- I'm just going to keep it as just regular `BTN`.

- If you wanted to add `BTN-light`, that's also fine.

#### Creating a Block Level Button

- Let's see the last button class that I want to create is `button-block`.

- This is if we want it to be `Block Level` and go all the way across, like a width of `100%`.

- So let's do that. Let's say `display` as a block as opposed to `inline-block`.

- And then `width` of `100%`.

#### Additional Styling for Spacing

- Now we have a couple more things to do with this login.

- Since we have the background here, I want to add a little bit more space in between here.

- So what we can do is go back to where our navbar stuff is.

- Instead of putting a class on that last `Li`, I'm going to use a pseudo-selector called `last-child`.

- That will target that last one.

- Then I want the `a` tag in that last `Li`.

- I'm going to add margin. What do we want, margin left-right of `10 pixels`? Save that.

- Now we have a little bit more space in here.

- The icon is a little too close to the text for my taste.

- I think what I'm going to do is just say `navbar ul`.

- And then any `Li` that has an icon in it, let's add some margin to that icon.

- Margin right, there we go. That pushes it over a little bit.

#### Conclusion

- Okay, I think that's good for the navbar.

- Like I said, we'll do the responsiveness later.

- Right now, if you look at this on a mobile phone, it's not going to look very good.

- But we'll get to that later.

- We're just doing the desktop first.

### **=>** Hero HTML

- Let's move on to the hero section, which, if we look at the landing page here, is going to have a header or a large heading, some other text, a primary button, a light button, or regular button with an icon, and then this background image.

- Let's work on that.

#### HTML Structure

- We're going to add the HTML first, which isn't really that much.

- So let's go right here, put a comment here of `hero`.

- What I like to do, and if you've ever watched any of my HTML and CSS tutorials, I like to use the `section` HTML5 tag for just about everything except for headers, footers, and navs.

- So we're going to use `section`, and I'm going to give it a class of `Hero`.

#### Container

- Now we want a container in the section because we don't want it to go out to the sides when we stretch the browser out really wide.

- So let's say `container`, and then in that container, we're going to have our `hero-content`, and that's going to include the text and the buttons.

#### Heading and Paragraph

- First, we have the heading which I'm going to give an `H1`, and let's give it a class of `hero-heading`.

- For text sizes, we're going to have utility classes, so this one is going to be `text-XXL` (extra extra large).

- Let's add the text in here, we'll say "A powerful solution to grow your startup fast."

- And then let's add underneath that a paragraph.

- This one will have a class of `Hero text`, and I'm just going to copy the text and paste that in there.

#### Buttons

- Underneath the paragraph, we're going to have our buttons.

- So I'm going to have a `div` with the class of `hero-buttons`.

- The first one, I mean, they're links but they're going to be formatted as buttons.

- So we'll have `BTN`, but I also want to make it blue, so `BTN-primary`.

- And it's not going to go anywhere; it's going to say "Get started" for the text.

- Oops, "Get started."

- And then let's see, we'll just copy that down.

- This one's going to be gray, so we can actually just do `BTN`, and then we'll change the text here to "Book a demo."

- And we're going to have an icon here, so it'll be an `i` tag with `FAS` and then `F-laptop`.

- Let's save it and take a look.

- Okay, so buttons look good.

- Now we need to do some styling here, so let's go to `style.css`. and we'll do this uh

### **=>** Text Utility Classes

- Actually, before we do the hero stuff, let's do the text utility classes.

- So we have our buttons underneath that. Let's say text classes.

#### Sizing Classes

- We're basically going to have a bunch of different sizing classes.

- `text-XXL`. I'm going to set the font size.

- I'm going to use REM units here, so they're going to be relative to the root font size.

- The root font size is 16 pixels, right? That's the default font size.

- So one REM is going to be 16 pixels, two REM would be 32.

- Three REM would be 16 \* 3, etc.

- So I'm going to do three REM for the large. This is the largest text.

- Let's set a line height. I'm going to set that to 1.2.

- The font weight, I'm going to set that to 600.

- And then we're going to add some margin onto our text classes as well.

- Let's do 40 pixels top, zero, 20 pixels bottom.

- If I save that, there we go. So we have a very large heading.

- While we're at it, let's add the other text sizes.

- I'm just going to copy that.

- Let's do `text-extra-large`.

- Instead of three REM, let's do 2.2.

- Line height, I'll do 1.4.

- Font weight, we'll do normal.

- Margin, we'll keep the same.

- Let's go underneath that.

#### Additional Sizes

- In addition to XXL and XL, we're going to have `LG`, which is large.

- For that, we're going to do 1.8 REM for the line height.

- 1.4 font weight will be normal.

- Padding, let's do 30 pixels for the top.

- I'm just going to copy that one.

- The last one, actually, we're going to have two more. `Medium`, this is going to be medium.

- `MD` font size for this, let's do 1.2.

- Line height's good, that's good.

- We'll do 20 on the top instead of 30.

- Let's do 10 on the bottom because generally, the larger your heading is, the more space you're going to want around it.

- The last one is going to be small.

- `text-SM`. For that, let's do small.

- We'll do 0.9, and then line height 1.4.

- That's good for the bottom, we'll do five.

- For the top, we'll do 10.

- I also want to have a class to center the text, so we'll call this `text-Center` and set that to `text-align: center`.

- And that should do it for our text classes.

### **=>** Hero CSS

- Now let's go back up and let's do our hero.

- So under the navbar because I like to keep all the utility classes at the bottom.

- So here we're going to do our hero.

- The hero itself isn't going to have much on it.

- The reason for that is if we look at this, the background image.

- I don't want to put on the hero because the hero class itself extends all the way over.

- The container is what keeps it in here, and I want the background image to be the background of the container; otherwise, it's going to spread all the way across.

#### Styling the Hero

- So on the hero class itself, all I'm going to have is a margin bottom of 50 pixels.

- You could create utility classes for margin and padding like `m-2` or `my-y` or `mx-3`, things like that.

- But you start to get into creating your own framework, which is fine, but I don't want to do that for this project.

- We'll just add spacing to the actual elements directly.

#### Styling the Hero Container

- Now the hero container, let's do `hero` and then `container`.

- This is where we want the background image.

- So I'm going to say `background`.

- We're going to set that to a URL, and the URL is going to be `./images/slh-hero-bg.png`.

- We want that to be `no-repeat`.

- Then let's add a `background-size`, and I want it to be `contained`.

- And then the position, so `background-position`, I want it to be `center` and `bottom`.

- We want to push it down all the way to the bottom.

- And then the height of the container, I'm going to set that to `550` so that we can see the whole image.

- So if we come over here now, you can see we have the background image.

- And again, it's not going to look good.

- I don't think that looks very good because it's just too wide for a small screen.

- That's why we're using a different image for the mobile.

- But that looks good for now.

- However, up here, we have to fix some stuff, right?

- Because the buttons are too close to the text.

- This is just too wide.

- I want to shorten it up.

- If we look at the Figma file, everything goes over, about 70% or so.

- And then we have spacing in here.

- So that's what we want to do.

#### Adjusting Text and Container Width

- Let's go under the container here.

- `hero-container`.

- And let's say `hero` and then `hero-content`, which wraps everything.

- I'm going to set a width of that to `70%`.

- So it stops about here.

- Now the text, I want this text to be even shorter.

- If we look here, the text is probably about 70% of that 70%.

- So let's do that.

- Let's say `hero` and then `hero-text`, and we'll set that width to `70%`.

- And then I'm also going to add margin-bottom to push the buttons down.

- We'll do `20 pixels`.

- Okay, so that looks pretty good.

- And I think, aside from the responsiveness, I think we're done with the hero section.

### **=>** Video Section

- So next we're going to do the video section, which is pretty simple.

- We just have a heading, this image, and a button.

- We're going to give it a black background, so let's do that next.

- We're going to jump into our HTML.

- Let's come back down here, and I'm going to put a comment in here. This is the video section.

- And we're going to use a `section` tag.

- Let's give it a class, a `video`.

- I'm going to have some background utility classes as well.

- This one is going to be `BG-black`.

- I'm not calling it `BG-dark` because I'm also going to have a `BG-dark` with our dark color, which is `111`, which is almost black but not quite.

- But this one will be completely black.

- The video has a smaller container.

- And remember, we created that `container-sm` class, which was only `800` pixels wide.

- So we're going to use that here.

- And then for the text, let's do an `H2`.

- I'm going to give it a class of `video-heading`.

- And we'll use our `text-XEL` utility class and our `text-Center` utility class.

- And we're going to say, "See how it works and get started in less than two minutes."

- If we save that, we're not going to see the black background yet, obviously because we haven't created it. But let's finish the HTML first.

- Underneath the H2, let's have a `video-content` div.

- And we're going to have our image, but I want a link wrapped around it because ultimately it would either lead you to another video page or open a modal or something like that.

- The image, let's see, the image is going to go to `Images/video-preview.png`.

- I'll just say "video" for the alt.

- And then I'm going to give this a class. This image tag, let's give that a class of `video-preview`.

- Underneath that, link that image with the link.

- We're going to have a button.

- Well, it's an `a` tag formatted as `BTN BTN-primary`.

- And that will say, "Get started."

- Let's save it.

- All right, so there's not too much that we have to do here, but let's come back to our stylesheet.

#### Styling the Video Section

- And before we do the background utility classes, let's just do the video stuff because it's not much.

- Under `hero`, we'll do our video section.

- So the video class itself is just going to have some padding.

- So we're going to do `10 pixels` top, `0` and then `40 pixels`.

- And then I'm just going to make the video content, which is just the image and the button.

- I'll display that as a flexbox but as a column so it'll go vertical.

- So let's say `video-content`.

- If I do `display: flex`, automatically it'll go side by side.

- But as I showed you earlier, if I change the `flex-direction` into `column`, then they'll be on top of each other.

- Right now, I don't want this button to be spread all the way across like that.

- So what I'm going to do is align items to the center.

- So `align-items: center`.

- And yeah, yeah. So `align-items: center`.

- And then I think that's really it, right?

- We should probably add some margin here.

- So let's grab the video preview, which is the image.

- So `video-preview`.

- And let's say `margin-bottom: 20 pixels`.

- Okay, give us some space for that button.

### **=>** Background Utility Classes

- Now we want this to have a black background.

- This is where we're going to add our background utility classes.

#### Defining BG Primary

- Let's go down to the bottom here under the text.

- Let's say background so we'll have `BG primary`.

- This time the background is going to have the primary color, so `VAR primary color`.

- The text color will be white.

#### Defining BG Light

- Then we'll just copy that. Oops, so that...

- And then we'll have `BG light`.

- Change the color to `333`.

#### Defining BG Dark

- We're going to have `BG dark`.

- That'll be the dark color.

#### Defining BG Black

- Finally, we'll have `BG black`, which is the one that we use for the video section.

- For that, we're just going to hard code black.

#### Summary

- So pretty simple, I think that looks pretty good.

### **=>** Testimonials Section

- So the next thing we want to do underneath that is the testimonials.

- Now, I actually don't want to have black for the background.

- I want this to be the dark color.

- I think it's a nice contrast rather than this all be black.

- But I mean everyone has a different eye, so if you want to keep it black, if you want to make it primary, whatever you want to do is absolutely fine.

#### Adding HTML Structure

- Let's add the HTML first.

- So, let's go under the video section and let's say `testimonials`.

- We'll add a section tag with the class of `testimonials`.

- And let's do `BG Das`.

- This time we're going to have our container `regular container`.

- Then, let's see, we'll have our heading.

- Right before the testimonials, we have this text right here, which I'm actually going to copy that real quick.

#### Adding Testimonials Heading

- And then we'll use an `H3` here.

- Let's say `testimonials Das heading`.

- And then for the size, let's use our `text XL`.

- It's nice to have these utility classes that you can just reuse.

- Use big fan of that.

#### Adjusting Spacing

- If I save this and take a look down here now, this spacing that you see is from the heading.

- Because remember these headings or these text classes have margin on the top and bottom.

- So what we'll do is just add some padding to the testimonials class.

- Right in fact, we can do that right now.

- Let's go up here under the videos testimonials.

- And let's say for the `testimonials` class, we're going to add padding of `40 pixels` on the top and bottom.

- So now we won't see that space because that padding took that space.

- The text here, we might as well just do this CSS for the heading as well.

#### Styling the Heading

- So let's say `testimonials`.

- Then we'll say `testimonials Dash heading`.

- So I'm going to set the width to that.

- We don't want it to go all the way across, so let's set it to `700 pixels`.

- Let's also add a margin bottom of `40 pixels`.

- Okay, so that's our heading.

### **=>** CSS Grid & Cards

- Now, we're going to do the cards.

- These are going to be inside of a grid.

- We're going to use CSS grid for this.

#### Creating the Grid Wrapper

- Under the `H3`, we'll have our grid wrapper.

- It's going to be called `testimonials dgrid`.

#### Structuring Cards

- In that grid, we'll have a class of `cards`.

- So each one will be wrapped in a card.

- In that card, we'll have a paragraph.

#### Adding Card Content

- We'll have a paragraph, and underneath that, we'll have another paragraph with the name, so "Catherine Smith."

- Then we'll have another paragraph under that with the company name.

- I don't even know what this says, "cppo do DOA," not sure what that is, it must be the company name.

#### Adding Multiple Cards

- That's one card. If I save it, it's going to look like this right now because we haven't styled the card or anything in it.

- But what I'll do is grab the other two cards and paste those in.

- So underneath this one, which ends right here, I'll paste in two more so we have three cards.

- So if I save that, it should look like that so far.

#### Styling the Card

- Now let's style the card itself, which is a utility because we can use that in other places.

- We are going to use that in other places.

- So let's come down here to the bottom. Let's say `card`.

- Initially, the background will be white, but of course, you can change that.

- You can simply add a `BG class` to it.

- The color, we'll set that to `Black`.

- Border radius, I'm going to make that `10 pixels` for rounded corners.

- And we want a little bit of padding, so `20 pixels`.

- That'll be our card class.

#### Configuring CSS Grid

- Since we're going to be using CSS grid, there are a couple of things we have to do.

- Up where we have `testimonials`, let's add our `testimonials Das grid`.

- CSS grid, and I do have a crash course on that as well if you want to watch that.

- But it's similar to flexbox.

- Right, the way we use it, we say `display` instead of `flex`, we say `grid`.

- Now, if I do that, it doesn't do anything yet.

- If you say `display Flex`, just to show you, it automatically puts them in a row.

- But if I do `grid`, it doesn't because we need to add one more thing.

#### Configuring Grid Template Columns

- That's the `grid template columns`.

- The way this works is we set the value for each column.

- So let's say I wanted to do `100 pixels` for the first, `100 pixels` for the second, `200 pixels` for the third.

- Save that, and that's what I get.

- This is `100`, `100`, `200`, `200`.

#### Using Fraction Units

- Now I want these to go all the way across, and I want them to be even.

- Instead of using pixels, I'm going to use an `FR` (fraction) unit.

- I'm going to say `one FR, one FR`.

- Do that, and now they're even all the way across.

#### Using Repeat for Columns

- Instead of doing this three times, we can actually use `repeat`.

- We can say I want to repeat three times `1fr`, and that gives me the same thing.

#### Adding Gap

- Now we need some spacing.

- Instead of just adding margin like we would with flexbox, we actually have a property called `Gap` or `grid Gap`.

- You can also use `gap`.

- I'm going to set it to `30 pixels`.

- If I do that, it puts `30 pixels` for the gap.

- Incredibly easy to align stuff, and CSS grid is two-dimensional, so you can have columns expanding and do all kinds of stuff.

- This is something that's very easy, and you could do with flexbox, but I did want to just use CSS grid somewhere in here.

#### Conclusion

- Let's um, I think that's pretty good.

### **=>** Finish Testimonials CSS

>

#### Adjusting Spacing and Font Weight

- I do want to move, see how the name is, is move. There's some spacing between the text and the name, we want to do that.

- We also want to make the name bold.

- So what we can do is grab the, let's see, so we have, let me just go back to the HTML real quick.

- So we have three paragraphs, right.

- Let's grab the second paragraph using a pseudo-class or a pseudo-selector.

- So we can say `testimonials` and then inside the card, we're going to say `paragraph`.

- Instead of `last child` or `first child` because we don't want the first to last.

- We want the middle or the second.

- We can use `nth Das child` and then whatever number we want we can put in here.

- I want the second, so that'll give me the second paragraph.

- I'll put a margin top of `30 pixels`.

- And then we'll make the font weight `bold`.

- Save that, and there we go.

- So now it's pushed it down, margin top, and made it bold.

- Okay, so that's all set.

### **=>** Pricing HTML

- Now we have the pricing cards.

- So we have a heading, subheading, and then two cards with a bunch of content.

- Let's do that next.

- We're going to go to our HTML.

#### Setting Up Pricing Section

- Come down here, say `pricing section`.

- And we're going to give that a class of `pricing`.

- We're going to use the small container here, so `container DSM`.

#### Adding Heading

- Let's have an `H3`.

- We'll say `pricing Dash heading`.

- And for the size, we'll do `text- XL`.

- And let's do `text Dash Center`.

- We'll just say "pricing" here.

#### Adding Subheading

- Then we're going to have the subheading.

- I'll make that a paragraph.

- Give it a class of `pricing Das subheading`.

- And let's do `text medium`.

- Let's do `text Dash Center`.

- I'm just going to grab that text, all right.

- So if I save that, we should see this.

#### Creating Pricing Cards

- Now, we're going to do the same thing we did with the testimonial grid.

- So underneath that subheading, let's do a div with the class of `pricing Das grid`.

- And in here, I'm just going to put a comment and say "pricing card one."

#### Styling Pricing Card

- We're going to use the `card` class again.

- We're going to use `BG light`, so this first one is going to have a gray background, light gray.

- And then each card is going to have a `pricing`.

- Let's say `pricing Das card Dash heading` or header.

- And then in the header, we're going to have the card heading and the card subheading.

#### Adding Card Heading

- So inside here, we'll use an `H4`.

- And let's give it a class of `pricing Dash heading`.

- And actually, let's also add `text XL` for that.

- And this one is simple.

- And then underneath the `H4`, we'll do our `pricing Das card Dash subheading`.

- And I'll just grab that text.

#### Adding Pricing

- Now, underneath that, we're going to have this line, which is going to be the price.

- So this one's free, this one's $49, and this text is bigger than this text.

- So what we'll do is wrap this in a `span` so that we can style it separately.

- So underneath the subheading, let's say, do another paragraph with `pricing card Dash price`.

- And then we're going to have a `span` in here.

- And we can use our `text XL` here.

- Let's say "free."

- And then outside of the `span`, but still within that paragraph, we'll put "asterisk no credit card needed."

#### Adding Content

- And then underneath that, let's go underneath the header.

- The header ends right here, so that will be the body.

- So class of `pricing Das card Dash body`.

- So you can see the convention that I'm using here.

- In the body, we're going to have our unordered list.

- And each list item is going to have a check icon.

- So we'll use an `li` tag, and then `FAS` and `fa- check` for the icon.

- And then some text, so "real-time monitoring."

- All right, and I'm just going to grab the rest of the `li`s.

#### Adding a Call-to-Action

- And then underneath the unordered list, the last thing we want in the card is the link, the "get started" link.

- So it'll be an `a` tag with `BTN`, `BTN Das primary`, and `BTN block`.

- So this is the, I believe, the first time we're using `BTN block` because we want it to go all the way across the button.

- And that'll say "get started."

#### Conclusion

- So let's save that; we'll check it out.

- Okay, it doesn't look very good, but we'll fix that.

- I think what I'm going to do is just paste in `pricing card two` because it's the same exact thing except it's different content, different text, same classes and all that, except for the background, which is black.

- So underneath `pricing card one`, which ends right here, I'll paste in `pricing card two`.

- And again, same thing except it has `BG black` instead of `BG light`.

- All right, so, let's see, it's not black though.

- So this has to do with CSS specificity.

- What I'm going to do is actually take the card, and I actually wanted this up above anyway.

- So we're going to take the card and put it up above the background classes.

- I want the background to be at the very bottom.

- So we'll put this under the containers.

- So we have containers, paste that in, that card in right there.

- And now that takes precedence.

- So now we have our light and our dark cards.

### **=>** Pricing CSS

Certainly, here's the provided text written in markdown format with sub-headings in h4 tags, each sentence starting with a bullet point, and code terminology enclosed in backticks:

#### Styling Pricing Cards

- So now we have some styling to do within the pricing cards.

- Let me just make sure. Let's see, is there anything after that? We have just this text right here.

- I'm not going to add the "view features" link, but I will put this text. So I'll just grab that.

#### Adding Pricing Footer Text

- Let's put it below. Let's see, this is the container. Let's, where's the container? So right above the last div, we'll put a paragraph.

- Let's say `pricing dasf footer`, and we'll give it a class of `text Center`, and then paste that in.

#### Styling Pricing Elements

- Now we're going to go up here where we're going to style our pricing stuff.

- Now, there's not much to do on the pricing class itself. So let's, yeah, let's do the grid.

- `pricing Das grid`. And obviously, this grid only has two columns, so what we can do is say `display grid`, and then we want to add `grid template columns`.

- We're going to say `repeat twice one F`. So if I save that, now we have two side by side.

- Let's add a little margin on the top to keep it away from that text. So `margin top` we'll do `50 pixels`, and then let's also add a `gap` of `30 pixels`.

#### Styling Elements Inside the Pricing Cards

- Okay, so that looks good now.

- Now, we just basically want to style the stuff inside of the card because everything looks pretty, you know, smushed together.

- Underneath the grid, let's say `pricing` and `pricing Dash oops dot pricing card`.

- Let's get the subheading. Notice that I'm prefixing this with pricing, and that's just that I prefer to do that, so I'm going to do that here as well.

#### Styling Subheading

- So I should be doing this everywhere, even for like `testimonial grid`. To me, it's just good practice. Like even with this stuff video just to better target everything, `hero`. That's good, that's good, yeah.

- So the rest of that's good, so I'm just going to prefix everything with that pricing class.

- For the subheading, I'm just going to add `margin bottom 30 pixels`.

#### Styling Pricing Card Heading and Subheading

- Let's do this right here which is the `pricing card price`. So we'll do `margin bottom 30 pixels` on that.

- Padding we're going to do `20` on top and bottom, and then I'm also going to have a border on the bottom, `one pixel solid and CCC`, which is light gray.

#### Styling Unordered List (UL) and List Items (LI)

- For the UL, let's do that next. So we have `pricing UL`. `UL`, we're going to do `margin 30 on the top and bottom` for that.

- And then for the `li`s, `pricing for the Lis`, let's do `margin bottom 20` to space those out a little bit.

- The icon, the check is too close to the text, so we can say `pricing UL Li it tag margin right 10 pixels` to fix that.

#### Aligning Button Text

- And then let's see, so we have the button here, but the text isn't aligned.

- So let's actually go into our utilities, our buttons, and make sure that we align on the `BTN`. We want the text align centered, so buttons should always be centered.

#### Styling Pricing Footer Text

- For the footer, this text right here, we just want to add some space there as well.

- So let's go right here and say `pricing pricing Das footer`, and we're just going to do `margin 30 pixels on the top and bottom`.

### **=>** FAQ HTML

- Now we're going to get into the FAQ, which we're actually going to be adding a little bit of JavaScript to as well.

- So, we'll start off with the HTML, then we'll do the CSS, and then we'll do the JavaScript.

#### Adding FAQ to HTML

- Let's go to our HTML.

- Let's go under the pricing section and add `FAQ`.

- So, `section FAQ`, and let's do `BG light` for the background.

- We're going to be using the `container small` for this.

- And then for the text, let's do an `H3` for the heading, rather.

- We'll do an `H3` with `text XL` and `text Center`, and we'll say "frequently asked questions."

- That blue squiggly line that you see sometimes is just my spell checker, so just ignore that.

#### Creating FAQ Menu

- So underneath the `H3`, we're going to have this menu thing. We're not going to make it function like we don't have categories or anything like that, but we will create it and style it.

- Underneath that `H3`, let's make it a `ul`, and let's call it `fa aq- menu` for the class.

- And then we'll have an `li`, and I'm going to have an active class because, as you can see in the mockup here, it has a blue background.

- So we'll make that the class of `active`. We'll say "all."

- And then we'll have another one, "getting started."

- Then we'll have another one, "pricing," so that's our menu.

#### Creating FAQ Content

- Underneath that, we're going to have our FAQ content.

- So I'm going to wrap everything in a class called `FAQ content`.

- And then each one of these with the question and answer, so this right here, each one is going to be a group. So I'm going to call it `FAQ group` for the class for each one.

- So let's say `FAQ - group`.

- And then in each group, we're going to have a group header. So let's say `group` or `FAQ Dash group Dash header`.

- And in that header is going to be the question. So I'm going to put that in an `H4`. We'll do `text MD` for the size, and then I'll grab the first question.

- Underneath that `H4`, I'm going to have the icon for the plus or minus sign.

- And I want the first one to be shown like it is here, although in this mockup it has an X, we're going to use a minus sign. So let's put an icon here, `FAS f-h minus`.

#### Styling the Group Header and Group Body

- This isn't going to look very good at first; we're going to have to position it and all that.

- Then underneath the group header, which ends right here, is going to be the group body, which is where the answer is going to be.

- So let's say `FAQ Das group- body`.

- The way that this is going to work is whichever one is open is going to have a class of `open`, and we want the first one to show.

- So I'm going to manually put the open class on there.

- And then what we'll do is with our JavaScript, we'll make it so that when we click on one of these, it'll add that class of `open` dynamically, but for the first one, it'll have that open class.

#### Adding Answer Text

- Now in here, I'm just going to grab a paragraph which is the answer.

- And if we take a look at it, yeah, I mean it's not going to look very good, but let's just finish the HTML.

- Instead of typing out every group, I'm going to paste them in.

- If you want, you can go to the GitHub repo, and you can grab the code. Basically, it's going to just be what four or five more of these groups.

- So one, two, three, four, yeah, so five more of those.

#### Completing the FAQ HTML

- Right under this group, I'm going to paste in just a bunch of other groups. It's all the same; the only difference between these and the first one is there's no open class on the body, and of course, the text is different.

- So if I save that, you can see we have all of our headers and group groups with a group header and a group body and an icon.

### **=>** FAQ CSS

- Now we want to start to style this, so let's go to our CSS.

- Let's go under `pricing`.

- I'll say `FAQ`.

#### Styling FAQ Class

- For the `FAQ` class itself, all I'm going to really have is padding on the top and bottom.

#### Styling FAQ Groups

- Then we have our group, so `FAQ dgroup`.

- And let's see for the group, I'm going to have a `border Dash bottom` to kind of separate them out.

- So we'll do `one pixel solid` and let's do `CCC` for the color.

- And then `padding bottom of 20 pixels` to separate them out.

#### Styling FAQ Group Header

- Then for the header, let's do that.

- So we have, and I'm going to prefix this with `FAQ`.

- Then we'll do `FAQ Dash group head`.

- What we want to do here is make the Border. Actually, wait a minute, no, we don't want it. There's no border; we don't want that.

- We want to add some padding, so we'll do `20 pixels top and bottom`, and some margin on the bottom, `15`.

- And then we want to position this relative. So, the reason I'm doing this is because the icon, right, the plus or minus sign, we have to position that absolute within the group header. In order to do that, we need to make the group header position relative. The reason we want to position the icon absolute is so we can say exactly where we want it. You know, 10 pixels from the top, 10 from the left, or whatever we're going to do. All right, so you want to make sure position relative is on that header.

#### Styling FAQ Group Header Text

- So before we do the icon, let's do the actual text, the `H4` that's in the header.

- So I'll just grab this, and then `H4`.

- I'm just going to make the `font weight` `600`, and I'm going to set the `width` to `95%` because I don't want it to run into the icon.

#### Styling FAQ Group Header Icon

- Now for the icon, let's take that, put an `i` there.

- And we're going to, like I said, position this to be absolute.

- Now I don't want it positioned here; I want it to be over here at the top right.

- So what we'll do is say from the right, let's go `zero` from the right, so it'll be all the way over.

- And then from the top, let's bring it down `35 pixels`. Save that, and now you can see it's positioned all the way to the right and it's pushed down `35 pixels`.

- I'm also going to make the `font size` `1.5 Rim` just make it a little bigger, a little smaller, `1.3`, and then I'm also going to make the `cursor` into a pointer when we hover over it. All right, right, cool.

#### Styling FAQ Group Body

- Now for the body, the body we obviously don't want this to show by default.

- So what we're going to do is let's say `FAQ` and then `FAQ Dash group` oops `FAQ group` and then what is it `FAQ Dash is it group body`? Yeah, `group body`. We don't want this to show, so I'm going to say `display none`. As soon as I do that, all the bodies are gone.

- We'll style this after this menu right here. Now all the bodies are gone, but if it has the class of open, then it should show. So what we can do is grab this and say if it has the class of open, so do `open`, don't put a space here, that means you're looking for an element inside of it with the class of open. We want to see if the actual body has a class of open. And if it does, then we want to `display block` instead of `none`.

#### Styling FAQ Menu

- Now for the menu, let's do that real quick.

- So `FAQ` and then `FAQ` actually, yeah, we'll do `ul. FAQ menu`.

- So let's set a `Max width`, a `Max width of 400 pixels`.

- And let's see, we want it in the middle.

- Let's say `margin Auto`.

- And let's display it as a flex box.

- So, the remaining space we want to put in between. Let's say `justify content` that's going to be `space Dash between`.

- Okay, and then let's `align items` to the center.

- Let's set a `background`. Let's do `DDD`.

- And then for padding, we want some spacing in there. Let's do `10 pixels top`, `20 pixels top` `bottom`, `20 pixels left right`, `border radius` `border radius is going to be 10`, and then `font weight` is going to be `600`.

#### Styling FAQ Menu List Items

- Now, we want that to have a `cursor` as a `pointer`. So, let's say `cursor pointer`.

- And then for the `active` one, actually before we do that, we just want to style the list items.

- So I'm going to grab that `Li`, say `padding 10 pixels 20 pixels`.

- `Border Dash radius` will be `five pixels`, and `text align Center`.

#### Styling Active List Items

- The `active` one, we want it to have the primary color.

- So what we can do is say `FAQ oops do FAQ ul` and then `fa aq- menu` and then `li. active`.

- So if it has the class of `active`, then let's set the `background` to be the primary color.

- All right, and we'll change the `text color` to `white`.

- There we go. Okay, so that's the CSS.

### **=>** FAQ JavaScript

- Now we're going to jump into the JavaScript because we want to be able to click on one of these headers either the icon here or the header, and we want it to show that answer for that question or the body for that question.

- So let's go into our `main.js`.

#### Comment for FAQ Accordion

- Again, this is not a JavaScript tutorial; I don't expect you to really 100% understand everything I'm about to do. I will explain it as I move along, but again, it's not a JavaScript tutorial, so I'm not going to spend a ton of time on it.

#### Event Listener for DOM Content Loaded

- Let's put a comment here; we'll say **FAQ Accordion**.

- Because we're going to have JavaScript for the mobile menu in a little bit. What I'm going to do here is take the `document` object because we're working in the Document Object Model.

- The document contains everything in the document, all of our paragraphs, headings, the body tag, all that stuff is within the document.

- There are also certain methods or functions on this document object.

- So, I want to call `addEventListener`, and it's going to listen for whatever specific event that I put in here.

- I'm going to listen for `DOMContentLoaded`.

- So I'm going to wait for the DOM or the page to load, and then once that happens, I'm going to run a function.

- So I can pass that in as a second parameter.

- You can do it like that, or you can do an arrow function, which is a little shorter.

- So inside here, once the content is loaded, I'm going to grab the `FAQ container` or the `FAQ content`.

#### Selecting the FAQ Container

- This is going to be the div with the class of `FAQ content`.

- So I'm going to create a variable here. I'm using `const` because I'm not going to reassign it; it's constant.

- So, let's say `FAQ container`.

- And we're going to set that to `document` and use a method called `querySelector`.

- Just like we can with CSS, we can select items using the class or ID or just the selector, whatever we want.

- So, I'm going to use the class of `FAQ content` because that wraps everything.

#### Adding Click Event Listener to FAQ Container

- Then, what I want to do is add a click event listener onto that `FAQ container`.

- So, let's say `FAQ container.addEventListener` and we're going to listen for a click.

- When that happens, we're going to run a function.

- For now, I'll just do an `alert` of `1`.

- So now, if I click anywhere in the `FAQ content` class or the div with that class, I get an alert saying `1`.

#### Understanding Event Delegation

- Now, there's a few ways to do this.

- We could have added a click event listener onto every header, but this is a little more efficient.

- This is using something called event delegation, where instead of putting an event listener on each one, we put an event listener on a parent element, which is this container.

- We figure out what we're actually clicking on.

- Instead of this `alert 1`, let's get rid of that.

- We can actually pass an event object into this function.

- And if we do a `console.log` of `e.target`, let's come over here and open up the console.

- I'll click on this right here, and you can see we get the `H4`.

- We get this here. So `e.target` simply gives me whatever I click on.

- If I click on this, we get the paragraph, which is in the body.

- If I click on the icon, that's what we get.

- `e.target` is just whatever we click on.

#### Targeting the Group Header

- What I want to do is create a variable here called `group header`.

- I'm going to set that to `e.target`, and I want to get the closest header, the closest div with the class of `FAQ group header`.

- So, we can use a method called `closest`, and then we can put the class in here that we want, which is going to be `FAQ dgroup header`.

#### Clicking on Header, Not on Body

- I'm just going to change the variable here to `other icon`.

- So, all we have to do is take the `other group body` and remove the open class.

- So, we can use the `classList` object, and then the `remove` method.

- Just like we have `toggle`, we also have `add` and `remove`.

- So, we want to remove the `open` class from all the other ones.

- So, if I save this and I come over here and I click on the second header, you can see that now it's only going to do something if we click on the header.

- Now, I'm going to get the group itself, and we can do that by taking the `group header`.

- So, if we say `group header`, we can use a property called `parentElement`.

- It does just that. If we look at our HTML, each group header has a parent of the group `FAQ group`. So that's how we can bring that into our JavaScript.

#### Get the Group Body and Icon

- We also want to get the `group body`. So, let's say `const group body`, and we can get that by saying `group` (the group we just created above or selected above), and then we can use `querySelector` and we want to grab the body, the class of `FAQ group- body`.

- And then we also want the icon. So, let's say `const icon`, and I'm going to say `group header.querySelector` and we want to grab the `it` tag.

#### Toggling the Icon

- So, now that we have all of these elements in our JavaScript, let's first make it so when we click on either the icon or the header, the icon changes to either a plus or a minus, whatever it's not.

- So, we can easily do that.

- Let's just say `toggle icon`.

- So, we can easily do that by taking the `icon`, and there's a `classList` property or `classList` object that has a method called `toggle`.

- That will toggle whatever class we put in here.

- So, let's say `fa- plus`.

- And then I want to copy that down, and we're going to do `fa- minus`.

- So, basically, if it's plus already, then when we click it, it'll turn to minus. If it's minus, it'll turn to plus.

- So, now, if I come over here and

I click it, you can see that now it's toggling.

- And even if I click on the header itself, it toggles the icon.

- So, we get that part done.

#### Toggle Visibility of Body

- Now, let's toggle the visibility of the body.

- And the way we do that is by adding and removing the `open` class.

- The first one already has the class hardcoded on it, `open`.

- That's why we can see this text.

- So, let's make it so that when we click on one of these headers, it adds `open` to the body and shows the body.

- So, let's say `toggle visibility of body`.

- This is pretty simple.

- We can just take the `group body` and we're going to say `classList.toggle` and we're going to toggle the class of `open`.

- So now, if I come right here, the second one, and I click it, now the icon turns to a minus, and I can see the body.

- If I click it again, it goes away, so I'm toggling it.

- I can toggle the first one too, even though it starts off with the `open` class.

- I can toggle it off. Same thing with any of these.

#### Close Other Open FAQ Bodies

- Now, the last thing I want to do here is when I open another body, I want whichever other one is open to close.

- I don't want to be able to open all of these.

- If this is your first time ever seeing JavaScript, I'm sure you're very confused, but I have a bunch of content on my channel for learning JavaScript.

### **=>** Footer HTML

- So the next thing we're going to do is the footer.

- That's the last part of the last section we're going to do before we move on to the responsiveness and the mobile menu.

- The footer basically has a few different sections:

  - Here we have this newsletter card with a little form.

  - And then we have some menus, some links.

#### Adding Footer to Index HTML

- Let's go back to our `index.html`.

- We're going to go down past the FAQ, so that section ends right here.

- Let's add the footer.

- So I'm going to use a `footer` tag for this.

- We'll give it a class of `footer`.

- And I'm going to use the `BG black` class.

- We're going to use a regular container for this.

- Let's use the grid system here as well.

- So we'll just say `f-grid`.

- We're just going to have a `div`.

- Each `div` is going to be a grid item.

- So, basically, we'll have four columns (1, 2, 3, 4).

#### Adding Newsletter Section

- So, the first one is going to have the newsletter.

- It's also going to have the logo right above it, or the light logo.

- So in this `div`, we'll do:

  - We'll wrap a link around the logo, send it to `index.html`.

  - Then we want an `image` tag. It's going to be `Images/logo-white.png`.

  - Underneath that logo in the `a` tag, we're going to have a class of `card` because this is going to be the newsletter form.

  - We'll have an `H4` that says "Subscribe to newsletter".

  - Then let's have a paragraph, and we're going to use `text-small` here (or `text-m`).

  - We'll say `Enter your email`.

  - Underneath that paragraph, we'll have a `form`. It doesn't need an action; we can get rid of that.

  - Inside the form:

    - We'll do an `input` and give it a type of `email`. It doesn't need a `name`.

    - We'll give it an `ID` as "email".

    - We'll add a `placeholder` and say "Enter your email".

    - We'll have a `button` underneath. It's a `submit` button.

    - Let's say "Subscribe".

    - We'll give this button a class of `BTN`, `BTN primary`, and `BTN block` because we want it to go all the way across.

  - Underneath the `div` (the card `div`), we'll have just two social media icons. We'll say:

    - `i` with the class of `faab`. When you use these social icons, they have a class of `Fab` instead of `Fas`. We'll do `fa-LinkedIn` and `fa-Twitter`.

#### Adding Company Links

- After the first `div` that's in the footer grid, we're going to add another `div`.

- That's going to have an `H4` that says "Company".

- Underneath that, we'll have a `UL`.

- Inside the `UL`, we'll have `LI` with an `a` tag, and for this, we'll say:

  - "About Us".

  - "Our Process".

  - "Join Our Team".

#### Adding Resources Links

- After the `div` wrapping the company links, we're going to have another one.

- It's going to have an `H4` of "Resources".

- Inside this `div`, we'll have a `UL` with `LI` items, each containing an `a` tag.

- The links don't go anywhere; they are:

  - "News".

  - "Research".

  - "Recent Projects".

#### Adding Contact Link

- We'll have one more `div`.

- In this `div`, we'll have an `H4` that says "Contact".

- We'll have a `UL` with a `LI` containing an email link, which will be "hello at growth app growth app.com".

### **=>** Footer CSS

- Alright, so if we look, we should have all the HTML now.

- We just need to style it.

- Let's go down in our stylesheet, under the FAQ above the utility classes, and let's style the footer.

#### Styling the Footer Container

- For the footer itself, we're going to do some padding on the top and bottom.

- Let's set it to `40 pixels` (`40px`).

#### Styling H4 Headings in the Footer

- Next, let's style the `H4` headings in the footer.

- We'll set a `margin-bottom` of `10 pixels`.

#### Styling List Items in the Footer

- For the list items in the footer, we want to set a larger `line-height`.

- We'll use `2.5` to spread those out a little bit.

#### Styling Links in the Footer

- Now, for the links, which we can't even see, let's target `footer a`.

- We'll set the `color` to `#CCC`.

#### Styling Icons in the Footer

- Finally, let's style the icons in the footer.

- We'll set the `font-size` to make them a little bigger, `1.5 REM`.

- We'll also set a `margin-right` of `10 pixels`.

#### Applying the Grid System to the Footer

- Now we just need to align these and use the grid system.

- Let's go right here and say `footer grid`.

- Just like we did with the other ones, we're going to say `display: grid`.

- For `grid-template-columns`, I don't want them all to be even.

- I actually want the newsletter to take up `2fr` to take up two fractions.

- Let's set `2fr` for the first one, and then for the next three, we'll do `1fr`.

- To space them out, we can add `grid-gap` or just `gap`.

- Let's set it to `30 pixels`.

- To align them, we can use `justify-content` and `align-items`.

- Let's set `justify-content` to `center` and `align-items` to `center`.

#### Styling the Card in the Footer

- Now, the card I want to add some margin to both the top and the bottom.

- For `footer card`, set the `margin` to `20px` (`20 pixels`) on the `top`, `30px` (`30 pixels`) on the `bottom`, and `0` for the other sides.

#### Styling the Email Input

- The last thing is the input here.

- Obviously, it doesn't look very good; it's way too small.

- For `footer input`, select only the input with the `type` of `email`.

- In CSS, we'll set the `width` to be `100%` of its container.

- We'll add `padding` of `10 pixels`.

- Add a `border` of `1px solid light gray`.

- Set `border-radius` to `5 pixels`.

- Add a `margin` of `20 pixels` on the `top` and `bottom`.

- And there we go, that looks pretty good.

### **=>** Mobile Menu HTML

- Alright guys, so that's the desktop version.

- Now what I'm going to do is make this smaller, and you can see that we have some problems.

- So, we have the menu here is squished, this image doesn't look right, this looks okay, these should be stacked, pricing cards should be stacked, this looks pretty good, and the footer also needs to be stacked.

#### Handling the Hamburger Menu

- We're going to start off with the hamburger menu.

- There's not that much JavaScript we really have to do, we do have to add a little bit more HTML for both the hamburger button and for the mobile menu.

- We'll need HTML, CSS, and just a little bit of JavaScript.

#### Adding the Hamburger Button

- Let's go up to the top.

- We have our navbar, then we have our main menu.

- The main menu ends right here, so this is where I want to put our hamburger button.

- We're going to say `button`.

- Let's give it an `ID` of `hamburger-button` and also a class of `hamburger-button`.

- This is going to have three lines, that's why it's called a hamburger menu because it looks like you know two buns and the meat or whatever.

- So, let's do three classes of `hamburger`, we'll call it `hamburger-line`.

- So, we'll copy that down three times.

- If I save that, we can't see anything just yet because we're going to use CSS to create it.

#### Creating the Mobile Menu

- Underneath that, we're going to have our mobile menu.

- That's going to be a `div` with the class of `mobile-menu`.

- As far as the links go, it's going to be the same as the main menu.

- So, I'm just going to grab the `UL` here, and then we'll put that in the mobile menu.

- You could have different links if you wanted for the mobile menu.

### **=>** Mobile Menu CSS

- Alright, now it looks weird because we have two menus, but we're going to fix that.

- So, let's actually go to our CSS, and at the very bottom, we're going to have some media queries.

#### Understanding Media Queries

- And if you're not familiar with media queries, it basically allows us to add specific CSS for specific screen sizes or a range of screen sizes.

- So, we're going to have a couple of these, and we do this with `@media` and then inside parentheses, we can say either `min-width` or `max-width`.

- I'm going to set a `max-width` here of `960 pixels`.

- What that means is any CSS I put in here is only going to be displayed if the screen is under `960 pixels`.

- For instance, if I say `body` and then I say `display: none`, you can see that the body isn't showing if I make this bigger.

- As soon as I hit `960 pixels`, we see the body.

#### Hiding the Main Menu

- The menu, I want that to disappear when we get down to `670`.

- So, what we can do is we'll say `navbar` and then the main menu.

- We're going to set that to `display: none`, so the main menu is gone.

#### Styling the Hamburger Button

- Now, for the mobile menu, we're not going to display none.

- We're actually going to set it off to the side because we're going to make it so when we hit the hamburger menu, it opens from the right.

- But before we hide it, let's style it.

- Because I don't want it to look like this when it pops out.

#### Styling the Mobile Menu

- We want to position it to be fixed so that it's always on the page.

- We can use `top`, `right`, `bottom`, and `left`. I'm going to say from the top, I want it to be `0`, and from the right, I want it to start off the page, so we're going to do `-300 pixels`.

- The width of it is going to be `250 pixels`.

- The height I want it to be the entire thing because I want it to be like a sidebar, so we're going to do `100%` for the height.

- The `z-index` I want it to be on top of all the content except for the hamburger button, so let's do `100` for the `z-index`.

- The background color I'm going to do white. You can change it if you want.

- We're also going to add a box shadow.

- We want it to transition when it comes open, so we're going to transition the `right` property.

#### Constructing the Hamburger Button

- Now, it's not going to work yet because we've just set it to be off the screen.

- We haven't added the functionality where we click the button and the menu opens.

- But before we do that, let's comment out, right?

- Because now we'll be able to see it.

#### Adding the Hamburger Button Styles

- So, let's say `Hamburger button`.

- We have our class of `hamburger-button`.

- We want this to `display: none` by default because we only want it to show on smaller screens.

- In the `670` media query, let's go ahead and say `navbar` and then the class of `hamburger-button`.

- We want to then `display: block`, so we want to show it.

- In the class here, we're going to add a bunch of styles.

- So, let's say `background: none`, `border: none`.

- We want the cursor to be a pointer.

- We'll say `padding: 10 pixels`.

- We're going to put a `z-index` on it, and what the `z-index` does is bring it to the front.

- We want it to bring it to the front. We don't want anything to be over that hamburger button, so I'm going to give it a high `z-index`.

#### Styling the Hamburger Lines

- Now, we still can't see anything because we need to construct the lines.

- Remember, we have three divs inside the button with the class of `hamburger-line`.

- Let's do that next.

- So, right here, let's say `class hamburger-button class hamburger-line`.

- We'll set a width of `30 pixels`, a height of `3 pixels`, a background of `#333`, margin `6 pixels` on the top and bottom.

#### Styling the Mobile Menu Items

- Now, like I said, we want the `right` to go to zero when it's open.

- We're going to have a class called `active`. So, when `mobile-menu` has a class of `active`, we'll take that `right: 0` and put that down here in the `active` class.

- We'll uncomment `right: -300 pixels` so now if I were to manually go to the mobile menu and say `active`, then it opens, and if I don't have the class, then it's closed.

### **=>** Mobile Menu JS

- So now we can just add the JavaScript to open and close the menu.

- If you want to try that on your own, you can do that. It's not a lot; it's just like five lines.

#### Event Listener for Document Load

- Let's come down here, and we'll say `mobile-menu`.

- I'm going to do the same thing I did above where I add an event listener on the document.

- We add an event listener and listen for the `DOMContentLoaded` event.

- Then run a function.

#### Selecting DOM Elements

- We're going to bring in the hamburger menu or hamburger button.

- So, `const hamburgerButton` let's set that to `document.querySelector`.

- We're going to have the class of `hamburger-button`.

#### Adding Event Listener to Hamburger Button

- Now we need the mobile menu.

- Let's change this variable to `mobileMenu`, and we want the class of `mobile-menu`.

- On the hamburger button, we want to add a click event listener.

- So, `addEventListener` and we want to listen for a `click`.

- When that happens, we want to run a function.

#### Toggling the Active Class

- This is just going to be one line so we don't even need to use curly braces with an arrow function.

- We can just simply say we want `mobileMenu` to, on the class list, we want to toggle the `active` class.

- So now if I come over here and I click the hamburger button, the menu opens.

- If I click it again, it closes.

- All I'm doing is toggling that `active` class.

### **=>** Responsive Hero

- Now All We Have Left is the Rest of the Site on Mobile Devices

- So as you can see, the now that we have the Navar all set, the hero doesn't look very good.

- So let's go to our stylesheet.

- Let's go down to the media queries.

#### Media Queries for 960 Pixels and Smaller

- The only thing I want in the 960 pixels, which is right around somewhere right around here, is I just want the `XXL` text, which is this right here, to be a little smaller.

- So in that media query, let's say the class of `text` that `XXL`.

- We'll say font size. I believe it's three `REM` by default, so I'm going to set it to 2.5 `REM` on 960 and smaller.

- So when we hit 960, which is right here, it gets a little smaller.

- So that's all I'm going to do for that.

- 670 is where the majority of our stuff is going to go because that's where we start to get to, you know, smaller mobile screens.

#### Styling the Hero Section for Smaller Mobile Screens

- So staying with the Hero.

- Let's change the image.

- We don't want this long image that doesn't really make sense; it doesn't look good there.

- So I have a mobile image that we can use.

- Let's say `hero`, and remember it's on the container, so we're going to set the background to `URL`.

- That's going to be `../` (we're in the CSS folder, so we want to go up one level) into `images`, and then `hero-bg-mobile.png`, I think.

- We'll say `no-repeat`.

- As far as the size, let's do `background size`, and I'm going to set it to `350` pixels. Normally, this takes a little bit of experimentation, so I had to try a couple of things, try different values; this is ultimately what I found works the best.

- So we'll set it to that size.

- The position, `background position`, I want to set it to the bottom.

- That'll put it down at the bottom there.

- And then the height of the container, I want to make that bigger because right now, everything doesn't fit.

- So let's make that `770` pixels.

- I'm going to change some of this stuff up as well, but that takes care of our image.

- Basically, as soon as we hit `670`, which is right here, it goes to the small image.

#### Styling Hero Content and Text

- So let's see the Hero content.

- I'm going to set the width to `100%`.

- So let's say `hero`, and then `hero content`.

- We'll set that width to `100%`.

- That kind of gives us some space right here.

- I want everything to be aligned centered.

- `text-align: center`.

#### Adjusting Hero Text Width

- Let's see the Hero text right here.

- I think that's at `70%` right now.

- So let's say `hero`, and then we want the hero text.

- So that width should also be `100%`.

- Actually, we could just take this and put it here.

- Just put a comma, put that there, and then we don't need that.

- Now, I think that looks pretty good.

#### Stacking Buttons on Top of Each Other

- But we could stack the buttons on top of each other.

- I think that's how it is in the Figma file.

- So if we look at that, right here, on the responsive versions, the buttons are on top of each other.

- So we'll go ahead and do that.

- Right here in the `670`, let's say `hero`, and then there's a class called `hero buttons`.

- We'll grab both of them which have the class of `BTN`.

- We'll add some `margin-bottom`.

- And we want to display instead of `inline-block`, we're going to say `display: block`.

- We're going to set the width to `100%`.

- And then if I save that, now they're on top of each other.

- We do want some `margin-bottom`, `10` pixels.

- That'll break it up a little bit.

### **=>** Remaining Responsiveness

- So the video area, I think, is fine.

- Aside from the text, maybe we should make that a little smaller.

- For the text classes, let's come into the `670` media query.

- Just say `text`.

- For the class of `text-EXL`, which I believe is what that is, let's set the font size to `1.9 REM`.

- Yeah, so that makes that a little smaller.

- And then we'll add the other ones as well.

- So we have `text-LG`, so on mobile screens, we'll set the font size for that to `1.5 REM`.

- And then let's do for the medium, so `text-MD`, we'll set the font size to `1.1 REM`.

#### Styling Testimonials

- The video part is all set.

- Now, for the testimonials.

- For the heading, what do we have it set to?

- I think we have it set to a width of like `700` pixels or something.

- So if we come up here and we look at `testimonials`, where is it? We've written a lot of CSS. `testimonials-heading`.

- Yeah, width is `700` pixels, so I'm going to change that to be a width of `100%`.

- So that it doesn't break out of the screen here.

- Back down to the `670` media query, let's go right above the text here.

- And let's say `testimonials` and then `testimonials-heading`.

- Let's set a width.

- Or we'll set a max width to `100%`.

- And we should probably center it as well, so `text-align: center`.

#### Handling Layout for Testimonials and Price Grids

- Next, we have the cards here, which we want to stack.

- Also, there's a horizontal scroll bar here, which we'll get rid of once we align everything.

- But I don't ever want to have a horizontal scroll there.

- So what we can do is on the body, we can say `overflow-x`, which is the horizontal axis.

- We'll set that to `hidden`.

- So that way there's no horizontal scroll no matter what.

- Then we'll come back down to our media query `670`.

- And let's go right here.

- Let's say `testimonials`, and then `testimonials-grid`.

- And all we're going to do is set the `grid-template-columns`, which initially was set to `1fr` three times.

- Now we're just going to set it to simply `1fr`.

- So one single column.

- If I save now, they're all stacked in one column.

- So I think that's really all we need there.

- If we come down to pricing, we want to do the same thing.

- We want these to stack.

- So instead of creating a whole another selector, let's just add it on to this.

- So we have our `pricing`, `pricing-grid`, I believe that's what I called it.

- And now that stacks.

- So the grid is easy to make responsive using it in this way.

#### FAQ and Footer

- FAQ, I mean, we can just leave that. I think that's fine.

- And then the footer.

- Let's see, we have the same issue with the grid.

- So we can just actually add that here because we're doing the same thing to all of these.

- We could even have a special class for the grid instead of having these three.

- But I mean, you guys can look into that more on your own.

- So let's say, what is it, `footer`, I think it's called `footer-grid`.

- Let's just put the footer class before it just to stay consistent.

- Okay, there we go.

- Now, I also want to see how we have the margin right on the newsletter.

- I want that to go all the way, so we want to remove that margin.

- So let's add here, `footer` again, make sure you're in the media query `670`.

- So the `footer-card`, we're going to set the margin right to zero.

- So now it goes all the way across.

- And then I want to align everything here into the middle.

- So let's say, in the `footer` and `footer-grid`, the direct divs.

- So basically, the parent divs inside the grid.

- I want to align to the center, so `text-align: center`.

#### Final Adjustments

- Okay, that looks pretty good.

- And then let's see what else we have, our text.

- I think that's pretty much it.

- For the large text, like the `XXL` on `500` pixels smaller screens, I do want to make that a little bit smaller.

- So we'll say font size.

- We'll do `2 REM` for that.

- Okay, up here.

- Yeah, and we can check it out with the device toolbar.

- So if we open up our Dev tools, click on that.

- Now, if you see a big space on the right here, I don't know why it does that sometimes in Chrome.

- You can click this button to make it go horizontal, which looks pretty good.

- But then click it again, and that space should go away.

- So yeah, I mean that looks pretty good.

- I'd say it looks pretty similar to the Figma file here.

- All right, cool, I think we're done.

- Yeah, I think we're good.

- And again, if you want to add inner pages, you guys can do that.

- You have the main layout now; you should understand a lot.

- We went through a lot in this video.

### **=>** Deploy To Netlify

Certainly, I've formatted the text as requested using Markdown with subheadings in h4 tags, starting each sentence with a bullet point, and using backticks for code terminology.

#### Deploying the Project with Netlify

- Now the last thing we're going to do is deploy this project, and we're going to use Netlify.

- So if we go to [Netlify](https://www.netlify.com), they have an extremely generous free package.

- So we don't have to put any credit card information or anything like that.

- All you have to do is sign up, and you just sign up with GitHub.

- I'm already in; it just logs me in because I'm already signed up.

- Basically, you need to push your project to GitHub first.

- And then you can go ahead and add a new site, and you can import it, and it's very, very simple.

#### Preparing Your GitHub Repository

- So let's go to GitHub before we do anything.

- We're going to create a new repo.

- If you don't have a GitHub account, make sure you create one.

- If you're doing any kind of web development or any kind of programming at all, you should have a GitHub account.

- So let's go to, um, right here, "new repository."

- And I'm going to call this `SAS Landing Page`.

- And I'll say, "Simple landing page for a SAS."

- I'm going to make it private just for now, but it'll be public by the time the video is released.

#### Setting Up Git and Pushing Your Project

- All we have to do, you have to make sure you have Git installed, which is a version control system.

- If you don't, you can go to [Git-SC.com](https://git-scm.com), you can download it here, or if you're on Mac, you can install it with Homebrew.

- There are a lot of different ways to get Git set up.

- Then we have to just run a few commands.

- So I'm going to go to my project and close these files out.

- And there's just a couple of things I want to add here.

- Actually, I already have the screenshot because I'm using that in my readme file.

- I do want to have a readme for you guys in the main project page; you don't have to do this, but I'm going to.

- So I'm just going to create a new file here called `readme.md`.

- It's a markdown file, and I'm just going to grab the content from the current one I have.

- So basically, it tells you what this is and gives you a screenshot to preview this.

- So it just looks like that, all right.

- And again, you don't have to add that.

- So now we need to open up a terminal.

- You could do it from VS Code; you could do it, you know, there's Source Control built in.

- But if you're not using VS Code, just in case, I'm going to do it from the terminal.

- It's really, really simple if you guys haven't used Git before.

- So the first thing you want to do is just initialize a repository.

- We can do that with `git init`.

- So what that does is it creates a repository; it's actually a hidden folder called `.git`.

- And then we need to add our project files.

- So I'm going to say `git add .`, so just use a period; that means we're adding all the files to the staging area.

- Then we want to commit the files to the repository.

- So we can say `git commit -m` and then some kind of comment.

- Usually, on your first commit, you can say just "initial commit," hit enter.

- Now everything is in our local repository.

- Now we want to push it to GitHub.

- So if we look over here, we've already done this stuff.

- Now right here, it says "or push an existing repository," that's what we want.

- So we're going to grab this; yours will be a different URL, so make sure you copy your own.

- Basically, we're just adding this GitHub project as our remote repository.

- I'm going to paste that in.

- Okay, then we want to make sure we're using the `main` branch.

- So I'll grab that, paste that in.

- And then finally, we're going to push to the `main` branch.

- So I'll grab that.

#### Deploying to Netlify

- All right, so now if I come back over here and reload.

- Now I have my project on GitHub.

- So now that that's done, we can go back to Netlify and say "add new site."

- Import an existing project.

- I'm going to deploy with GitHub.

- It's going to open up another window.

- I'm going to search for what I call it, `SAS Landing Page`.

- So right here, I'm going to click on that.

- There are no special settings; we don't have any special directories or anything or commands.

- So we don't need to do anything here, just click on "deploy SAS Landing Page."

- So it says "site deploy in progress"; it shouldn't take long at all since it's a very, very small site.

- There we go.

- So you'll have a URL here; it'll be something different than this.

- But just click on that, and now your project is live.

- Obviously, if this were a production project, you wouldn't want to use this kind of domain, this Netlify `doapp` domain.

- So what you would do next is just click on "set up custom domain" and go through the steps.

- Set up an SSL certificate, and you're all set.

#### Additional Resources

- All right, so that's pretty much it.

- Remember to check out [iO](https://www.iode.io/); there are tons of challenges here, really cool stuff.

- Like you can see right here, "pricing grid," so this is something that's obviously much more simple than what we just did.

- So if you're a beginner and you're trying to learn HTML, CSS, it's a great site to get some cool projects.

- And of course, you can submit them as well.

- You can check out other submissions.

- So right here, "view all submissions," and you can check out everyone's code.

- This is the in-browser editor that I was talking about in the beginning.

- So it has HTML, CSS, and JavaScript; pretty cool.

- All right, guys, so that's it.

- I will see you in the next video.
