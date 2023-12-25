---
sidebar_position: 6
---

# WP WorkFlows

>

## 1 Create an Starter project

>

### New Site, theme and pages

- Create a new WP site using Local

- Install and Activate the chosen theme

- Delete all other themes

- Create a Home, Blog and About page

- create a Blank page (for Pattern experimenting)

### WordPress Settings

- General - Set Title & tagline

- Reading - Set static homepage & blog page

- Discussion - Users must be registered to comment

- Permalinks - Set to post name

### Create a template for every page

- Editor / Templates / + / select - Pages / select the specific page from the list / Choose a pattern /

### Edit the Page Template

- delete the Group with the Title and the Feature Image (note: do not delete the group with the Content)

- change the padding top and bottom to Zero

- save

- repeat for every page

- (Create a Blank template for the Blank page)

### Edit the Navigation Menu

- go to the Header Template - Editor / Patterns / Template parts: Header

- Delete unnecessary pages and posts

- From the Header template, in the Navigation Menu, delete the Page List
- add new page links for all pages

### Install Safe SVG and Create Block Theme plugins

- Safe SVG - for logos and icons

- Create Blocks Theme - to add fonts from Google or local fonts and to create a theme super quickly and also export it.

### Adding the temporary Logo

- go to the Header Template - Editor / Patterns / Template parts: Header

### Managing Theme Fonts

- go back to the `appearance` and then `manage theme font`.
- From here, we can either `add Google fonts` or `add local fonts`
- choose and install Roboto font
- remove extra fonts families

### Edit styles

- Typography

- go to editor / Design / Styles / edit (pencil) / Typography

- Text / FONT / select new font (Roboto)

- Colors

- Add all custom colors from Figma

### Enqueuing Styles and Debugging

- navigate to the root folder where we have **WP config.php**,
- and from here, if you open the file, scroll down to the bottom.
- Somewhere on the bottom where we have **WP debug**, turn that to **true**.

![](images/62.png)

- This is going to help you every time you make an error.
- It's going to show you at the top of your website, and it might help with caching issues.
- So if you save this,
-
- the other thing that we want to do is, let's look at the **style** super quickly.
- Let's go back to `wp-content/themes/ollie` theme.
- Here, as you can see, we have **style.css**.

![](images/63.png)

- Let's open it. So this contains details for the theme.

- The name which appears here in the editor, as you can see, and so on.

- But when we visit the actual website, if I refresh simple quickly, everything is working well so far.

![](images/64.png)

- But if I was to go to this **style.css** and if I was to do, let's say **body**, and let's say I wanted to change the background color for some reason, let's change it to **red** and, in fact, let's make it **!important** just to prove a point.

![](images/65.png)

- If I go back, and if I refresh, `you'll see that it's not taking any of the styles What we need to do is go back and create a **functions.php** file.
- by duplicating a file and renaming it **functions.php**.
- Let's open this file, and it's going to be empty.
- Inside the **functions.php**, the first thing I want to do is start PHP like so,
- and inside here all we want to do is include the **style.css**.
- I'm going to paste a little comment: "Enqueue Styles."
- To save time, I'm going to copy and paste the function that does that.
- So here it is.

```js
<?php

/*-------------------------------------------------
Enqueue Styles
--------------------------------------------------*/

if(!function_exists('theme_styles')) :
  function theme_styles() {
    wp_enqueue_style('styles', get_stylesheet_uri(), wp_get_theme()->get('version'));
  }

endif;

add_action('wp_enqueue_scripts', 'theme_styles');
```

- this enqueues the stylesheet for us.
- Now, if I save this, we still have the **body background color** of red.

- If I go back to the website and if I refresh,

![](images/66.png)

- you'll see that the styles are working, which is great.
- Let me remove the body because we don't obviously want that, and save it.
- Perfect, let's go back to the website and refresh.
- By the way, you might see some errors in here, and this is because I enabled the `wp_debug`.
- As you can see, some things are deprecated, and this is actually coming from this plugin here, the **create blockchain** plugin, which we don't really need anymore because we exported the stuff that we need.
- So I'm going to deactivate this, and as you can see, no errors.
- I am using PHP 8.1, I believe. If I do right-click, PHP, yeah, 8.1.

The provided text has been formatted with

the requested sub-headings, bullet points, and backticks for code terminology.
