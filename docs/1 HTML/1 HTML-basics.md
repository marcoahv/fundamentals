---
sidebar_position: 1
---

# HTML BASICS

## 1 Doctype & Basic Layout

>

### The doctype

```html
<!DOCTYPE html>
```

- In web development, "Doctype" stands for `Document Type Declaration`.

- It is an HTML or XML declaration that `tells the web browser which version` of HTML or XML is being used in the document.

- The Doctype declaration `helps the browser render the web page correctly` by following the appropriate specifications and rules for that particular version of HTML or XML.

### html tag

- In HTML, the `<html>` tag is used to `define the root element of an HTML document`.

- It is the container that holds all other HTML elements within a web page.

- The `<html>` tag is typically placed at the beginning of an HTML document and is paired with the closing `</html>` tag at the end.

- It is also common to include the `lang` attribute within the opening `<html>` tag to specify the default language for the document.

```html
<!-- For example, -->

<html lang="en"></html>

<!-- indicates that the default language for the document is English. -->
```

### title tag

- The title tag is an HTML element `used to define the title of a webpage`.
- It is displayed on the browser's title bar or tab, and also appears as the clickable headline in search engine results.
- The title tag `plays a crucial role in search engine optimization (SEO)` as it helps search engines understand the content of the page and determine its relevance to a user's search query.
- It should accurately and concisely describe the content of the page, ideally using relevant keywords.
- The title tag should be unique for each webpage to avoid confusion and clearly differentiate it from other pages.
  Example:

  ```html
  <!DOCTYPE html>
  <html>
    <head>
      <title>Example Page - Best Practices for Title Tags</title>
    </head>
    <body>
      <!-- Page content goes here -->
    </body>
  </html>
  ```

  In the example above, the title tag is `<title>Example Page - Best Practices for Title Tags</title>` . This title clearly indicates that the page is about best practices for title tags.

### body tag

- The body tag is an HTML element that `represents the main content area of a webpage.`

- It`contains all the visible content that users see when they visit a webpage`, such as text, images, links, and other elements.

- The body tag is placed within the `<body>` and `</body>` tags in an HTML document.

- It is the container for all the content that is displayed on the webpage, excluding the head section which contains meta information, scripts, and other elements.

- The body tag can contain various HTML elements like headings ( `<h1>` , `<h2>` , etc.), paragraphs ( `<p>` ), images ( `<img>` ), links ( `<a>` ), lists ( `<ul>` , `<ol>` , `<li>` ), and more.

- CSS styles and JavaScript code can also be applied to elements within the body tag to control the appearance and behavior of the webpage.
  Example:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Example Page</title>
  </head>
  <body>
    <h1>Welcome to Example Page!</h1>
    <p>This is the main content of the webpage.</p>
    <img src="image.jpg" alt="Example Image" />
    <a href="https://example.com">Visit Example Website</a>
  </body>
</html>
```

In the example above, the body tag is enclosed between `<body>` and `</body>` . It contains various elements like heading, paragraph, image, and a link. The content within the body tag is what will be displayed on the webpage when it is rendered in a browser.

### **Practice 1**

1. Name the 5 tags for the basic layout of an HTML page...

> the doctype

> html tag

> head tag

> title tag

> body tag

2. using emmet `create the the core fundamental mandatory structure of an html document`...

```html
<!DOCTYPE html>

<html lang="en">
  <head>
    <meta charset="UTF-8" />

    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <title>Document</title>
  </head>

  <body></body>
</html>
```

3. how to create a comment...

> (Ctl + /)

4. You can view the html source on the browser...

> (control + U)

5. how you can comment out something that's already there...

> selection and (Ctl + /)

---

## 2 Meta Tags & Search Engines

### The lang attribute

The `lang` attribute in HTML is used to specify the language of the content within an element. It helps search engines and assistive technologies understand the language of the text and enables proper language-specific rendering and styling.
Here is an example of how the `lang` attribute can be used in HTML:

```html
<p lang="en">This is an English paragraph.</p>
<p lang="fr">Ceci est un paragraphe en français.</p>
```

In the above example, the `lang` attribute is used to indicate the language of each paragraph. The first paragraph has `lang="en" ` to specify that it is in English, while the second paragraph has `lang="fr"` to indicate that it is in French.
The `lang` attribute can be applied to any HTML element, such as `<html>`, `<body>`, `<div>`, or `<span>`, to define the language for a specific section of content. It follows the BCP 47 language tag format, which typically consists of a two-letter language code followed by an optional two-letter country/region code.
By using the ` lang` attribute, you can ensure that your content is properly interpreted and displayed according to the intended language rules and conventions.

### Meta tags

- Meta tags are HTML elements used to provide metadata or additional information about a webpage.
- They are placed within the head section of an HTML document, between the <head> and </head> tags.
- Meta tags are not visible to users but are used by search engines, browsers, and other web services to understand and process the webpage's content.

#### the character set meta tag:

```html
<meta charset="UTF-8" />
```

- Specifies the character encoding for the webpage (UTF-8 is the most common encoding).

#### the viewport meta tag:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

- Sets the viewport properties for responsive web design.

#### browser compatibility meta tag

```html
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
```

- is not related to specifying the default language for conversation.

- Instead, this meta tag is used to specify the version of Internet Explorer (IE) to be used to render the webpage. In this case, the `content="IE=edge"` value indicates that the latest version of IE should be used. This meta tag helps ensure that the webpage is rendered correctly in the most up-to-d

#### Meta tags that have to do with search engines

#### The title tag

The `<title>` tag in HTML is used to specify the title of a web page. It is placed within the `<head>` section of an HTML document and is displayed as the title of the browser window or tab for that particular page. The content within the `<title>` tag is also used by search engines to display the title of the page in search results.
Here is an example of how the `<title>` tag is used in HTML:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My Web Page</title>
  </head>
  <body>
    <h1>Welcome to My Web Page</h1>
    <p>This is the content of my web page.</p>
  </body>
</html>
```

In the above example, the `<title>` tag is used to set the title of the web page as "My Web Page". This title will be displayed in the browser's title bar or tab for this page.

#### the description meta tag

The `<meta>` tag with the `description` attribute is used to provide a brief description of the content of a web page. It is placed within the `<head>` section of an HTML document and is often used by search engines to display a summary of the page's content in search results.
Here is an example of how the `<meta>` tag with the `description` attribute is used in HTML:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta name="description" content="This is the description of my web page." />
  </head>
  <body>
    <h1>Welcome to My Web Page</h1>
    <p>This is the content of my web page.</p>
  </body>
</html>
```

In the above example, the `<meta>` tag with the `description` attribute is used to provide the description of the web page as "This is the description of my web page." Search engines may display this description in search results to give users a preview of what the page is about.

#### the keywords met a tag

The `<meta>` tag with the `keywords` attribute is used to specify a list of keywords or phrases that are relevant to the content of a web page. It is placed within the `<head>` section of an HTML document and helps search engines understand the main topics or themes of the page.
Here is an example of how the `<meta>` tag with the `keywords` attribute is used in HTML:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta name="keywords" content="HTML, CSS, JavaScript, web development" />
  </head>
  <body>
    <h1>Welcome to My Web Page</h1>
    <p>This is the content of my web page.</p>
  </body>
</html>
```

In the above example, the `<meta>` tag with the `keywords` attribute is used to specify a list of keywords related to the web page's content. In this case, the keywords are "HTML, CSS, JavaScript, web development". These keywords can help search engines understand the main topics covered in the page and may influence how the page is ranked in search results. However, it's important to note that the importance of the `keywords` meta tag for search engine optimization (SEO) has diminished over time, and search engines now rely more on the actual content of the page for determining relevance.

#### the robots meta tag

The `<meta>` tag with the attribute `name="robots" ` is used to provide instructions to search engine crawlers on how to index and display a web page in search results. It is placed within the `<head>` section of an HTML document.
Here is an example of how the `<meta>` tag with the ` name="robots"` attribute is used in HTML:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta name="robots" content="index, follow" />
  </head>
  <body>
    <h1>Welcome to My Web Page</h1>
    <p>This is the content of my web page.</p>
  </body>
</html>
```

In the above example, the `<meta>` tag with the `name="robots" ` attribute is used to specify the instructions for search engine crawlers. The ` content` attribute can have different values to control indexing and crawling behavior. In this case, the value "index, follow" indicates that the page should be indexed and its links should be followed by search engine crawlers.
Other possible values for the `content` attribute include:

- "noindex": Instructs search engines not to index the page.
- "nofollow": Instructs search engines not to follow any links on the page.
- "noarchive": Instructs search engines not to display a cached version of the page.
- "nosnippet": Instructs search engines not to display a snippet of the page's content in search results.
  It's important to note that search engines may treat these instructions as suggestions rather than strict rules. Additionally, different search engines may interpret the instructions differently.

### **Practice 2 **

on a new file with a html boilerplate

1. The lang attribute...

```js
<html lang='en'></html>
```

> The lang attribute `specifies` the language of the element's content.

> You should `always include` the lang attribute inside the `<html>` tag, to declare the language of the Web page.

> This is meant to assist search engines and browsers

2. meta tags...

> The `<meta>` tag defines metadata about an HTML document. Metadata is data (information) about data.

> `<meta>` tags always go inside the `<head>` element, and are typically used to specify

> character set,  
> page description,  
> keywords,  
> author of the document,  
> and viewport settings.

> Metadata will not be displayed on the page, but is machine parsable.

> Metadata is used by browsers (how to display content or reload page), search engines (keywords), and other web services.

3. the character set meta tag...

```js
<meta charset='UTF-8' />
```

> The charset attribute specifies the character encoding for the HTML document.

> The HTML5 specification encourages web developers to use the UTF-8 character set, which covers almost all of the characters and symbols in the world!...

---

## 3 Headings, Paragraphs & Text Formatting

### Headings

- Headings are HTML elements used to structure and organize the content of a web page.

- They provide hierarchy and indicate the importance of different sections within the document.

- Headings range from `<h1>` to `<h6>` , with `<h1>` being the highest level and `<h6>` being the lowest.

- `<h1>` represents the main heading or title of the page, while `<h2>` to `<h6>` represent subheadings or nested sections.

- Search engines and screen readers use headings to understand the structure and context of the content.

- Properly using headings improves accessibility, readability, and search engine optimization (SEO).

- It is recommended to have only one `<h1>` per page and to use the subsequent headings in descending order according to their importance.

- Headings can be styled using CSS to enhance their visual appearance, such as font size, color, and alignment.

### Paragraphs

the `<p>` tag is used to define a paragraph. It is a block-level element that is commonly used to structure and present text content. Here's an example of using the `<p>` tag:

```html
<p>This is a paragraph of text.</p>
```

In the example above, the `<p>` tag is used to enclose the text "This is a paragraph of text." The browser will automatically render this text as a separate paragraph, typically with some vertical spacing before and after.

### Text Formatting tags

Text formatting tags in HTML are used to apply various styles and formatting to the text within the tags. Some commonly used text formatting tags include:

- `<b>` : Bold text
- `<i>` : Italic text
- `<u>` : Underlined text
- `<strong>` : Strong emphasis (similar to `<b>` )
- `<em>` : Emphasized text (similar to `<i>` )
- `<s>` : Strikethrough text
- `<sub>` : Subscript text
- `<sup>` : Superscript text
- `<mark>` : Highlighted text
- `<small>` : Smaller text
- `<big>` : Bigger text
- `<code></code>`: Code or monospace text

- `<pre>` : Preformatted text (preserves whitespace and line breaks)
  Here's an example of using some of these text formatting tags:

```html
<p>
  This is
  <b>bold</b>
  and
  <i>italic</i>
  text.
  <u>Underlined</u>
  and
  <s>strikethrough</s>
  text.
</p>
<p>
  This is
  <sub>subscript</sub>
  and
  <sup>superscript</sup>
  text.
  <mark>Highlighted</mark>
  and
  <code>code</code>
  text.
</p>
<p>
  This is
  <small>small</small>
  and
  <big>big</big>
  text.
</p>
<pre>This is preformatted text.</pre>
```

These tags can be combined and nested to achieve different combinations of formatting. It's important to note that the visual appearance of these tags can vary depending on the browser and CSS styles applied to them.

- line break

The line break tag in HTML is `<br>` . It is a self-closing tag and does not require a closing tag. When used in the HTML code, it creates a line break or a new line in the rendered output, allowing you to separate content onto different lines.
Here's an example of how the line break tag can be used:

```html
<p>
  This is the first line.
  <br />
  This is the second line.
</p>
```

In the above example, the `<br>` tag is used to create a line break between the two sentences. When rendered in the browser, it will display the first sentence on one line and the second sentence on the next line.
The line break tag is particularly useful when you want to add a line break within a paragraph or separate content into multiple lines without creating new paragraphs or using CSS styles for spacing.

- horizontal rule

The horizontal rule, also known as the `<hr>` tag in HTML, is used to create a horizontal line to visually separate content. It is a self-closing tag and does not require a closing tag.
Here's an example of how the horizontal rule tag can be used:

```html
<p>This is the first paragraph.</p>
<hr />
<p>This is the second paragraph.</p>
```

In the above example, the `<hr>` tag is used to create a horizontal line between the two paragraphs. When rendered in the browser, it will display a horizontal line separating the two paragraphs.
The horizontal rule tag is commonly used to visually divide sections or content within a webpage. It can be styled using CSS to adjust its appearance, such as changing the color, width, or style of the line.

- deleted tag

The `<del>` tag in HTML is used to represent deleted or removed text within a document. It is typically rendered with a strikethrough line. This tag is commonly used in conjunction with the `<ins>` tag, which represents inserted or added text.
Here is an example of how the `<del>` tag can be used in HTML:

```html
<p>
  My favorite color is
  <del>red</del>
  blue.
</p>
```

In the above example, the word "red" is marked as deleted using the `<del>` tag, indicating that it has been removed or replaced with the word "blue". The rendering of the deleted text may vary depending on the browser and CSS styles applied.
Please note that the conversation language is set to English by default, but you can specify any language you prefer for further assistance.

- deprecated tags

Deprecated tags are HTML tags that have been declared obsolete and are no longer recommended for use in modern HTML documents. While some deprecated tags may still work in modern browsers, they are not considered part of the current HTML specification and may not be supported in future versions.
Some examples of deprecated tags include `<center>` , `<font>` , `<strike>` , and `<marquee>` . These tags were commonly used in older versions of HTML for styling and formatting purposes. However, they have been replaced with more modern and semantic alternatives, and it is recommended to use CSS for styling instead.
It is important to avoid using deprecated tags in new projects and consider updating existing code to use modern HTML standards.

### **Practice 3**

Practice in the index.html file

_headings_...

> Heading tags are part of semantic HTML

> They are used to define headings

> They go from h1 to h6

> Size is largest for h1 by default and smallest for h6 by default

1. make headings from h1 to h6 "My heading"...

```js
<h1>My Heading 1</h1>
<h2>My Heading 2</h2>
<h3>My Heading 3</h3>
<h4>My Heading 4</h4>
<h5>My Heading 5</h5>
<h6>My Heading 6</h6>
```

_paragraphs_...

> `<p></p>` element is used for writing a paragraph of texts in HTML

> You can include p inside other elements like div, section, article

2. Using emmet make a paragraph with 100 words...

#### Text Formatting tags

_strong tag_...

> The `<strong></strong>` tag is used to define text with strong importance.

> The content inside is typically displayed in bold.

3. Use the strong tag in some of the words in the paragraph...

_emphasis tag_...

> The `<em></em>` tag is used to define emphasized text. The content inside is typically displayed in italic.

> A screen reader will pronounce the words in `<em></em>` with an emphasis, using verbal stress.

4. Use the emphasis tag in some of the words in the paragraph....

_line break_...

> The `<br>` tag inserts a single line break.

> The `<br>` tag is useful for writing addresses or poems.

> The `<br>` tag is an empty tag which means that it has no end tag.

5. use the br tag inside the paragraph...

_horizontal rule_...

> The `<hr>` tag defines a thematic break in an HTML page (e.g. a shift of topic).

> The `<hr>` element is most often displayed as a horizontal rule that is used to separate content (or define a change) in an HTML page.

6. use the br tag after the paragraph....

_deleted tag_...

> The `<del></del>` tag defines text that has been deleted from a document. Browsers will usually strike a line through deleted text.

7. Use the del tag in this html doc...

_deprecated tags_...

> in the early days of HTML there was a fair amount of markup designed to control the look of the page right alongside the content.

> all of which is now deprecated due to the aforementioned separation of concerns.

---

## 4 Links, Images & Attributes

>

### External links

External links in HTML are used to create clickable links that direct users to a different web page or resource outside of the current webpage. They are created using the `<a>` (anchor) element and the `href` attribute to specify the URL of the destination.
Here is an example of an external link in HTML:

```html
<a href="https://www.example.com">Visit Example Website</a>
```

In the above example, the anchor element `<a>` is used to create a link, and the `href` attribute specifies the URL of the external website. The text "Visit Example Website" is the visible text that users can click on to navigate to the specified URL.
It's important to note that when linking to external websites, it's generally a good practice to include the `target="_blank"` attribute to open the link in a new browser tab or window, like this:

```html
<a href="https://www.example.com" target="_blank">Visit Example Website</a>
```

This ensures that users can easily return to the original webpage without losing their place.
Additionally, you can also link to specific sections within a webpage by using anchor tags and IDs. For example:

```html
<a href="https://www.example.com#section1">Go to Section 1</a>
```

In this case, the link will take the user to a specific section with the ID "section1" on the external webpage.

### Internal links

Internal links in HTML are used to create clickable links that direct users to different sections or pages within the same website or HTML document. They are created using the `<a>` (anchor) element and the `href` attribute to specify the target location within the same document using a relative URL or an ID.
Here are a few examples of internal links in HTML:

```html
<a href="#section1">Go to Section 1</a>
<a href="/about">About</a>
<a href="page2.html">Go to Page 2</a>
```

In the first example, the link with `href="#section1"` will navigate to a section with the ID "section1" within the same document.
In the second example, the link with `href="/about"` will navigate to a page named "about.html" in the root directory of the website.
In the third example, the link with `href="page2.html"` will navigate to a page named "page2.html" in the same directory as the current HTML document.
Internal links are useful for creating navigation menus, table of contents, or linking related sections within a webpage or across multiple pages within a website.

### Local image

A local image refers to an image file that is stored on the local device or server, rather than being sourced from an external URL. It is commonly used to display images that are part of the website's content or design. To include a local image in an HTML document, you can use the `<img>` element with the `src` attribute set to the file path of the image on the local device or server.
Here is an example of using a local image in HTML:

```html
<img src="path/to/image.jpg" alt="Description of the image" />
```

In the above example, the `src` attribute specifies the path to the local image file, relative to the HTML document. The `alt` attribute provides alternative text that is displayed if the image cannot be loaded or for accessibility purposes.
Remember to replace "path/to/image.jpg" with the actual file path and name of the image on your local device or server.

- set the width and height of an image in the html

To set the width and height of an image in HTML, you can use the `width` and `height` attributes of the `<img>` element. These attributes allow you to specify the dimensions of the image in pixels.
Here is an example:

```html
<img src="path/to/image.jpg" alt="Description of the image" width="300" height="200" />
```

In the above example, the `width` attribute is set to 300 pixels and the `height` attribute is set to 200 pixels. Adjust these values according to your desired dimensions.
It's important to note that setting the width and height attributes can affect the aspect ratio of the image. If you want to maintain the original aspect ratio, you can set either the width or the height and leave the other attribute blank. The browser will automatically adjust the corresponding dimension while preserving the aspect ratio.

```html
<img src="path/to/image.jpg" alt="Description of the image" width="300" />
```

In the above example, only the width is specified, and the height will be adjusted proportionally based on the original aspect ratio of the image.

### Remote image

A remote image refers to an image that is hosted on a different server or location than the web page where it is being displayed. To include a remote image in HTML, you can use the `<img>` element and specify the `src` attribute with the URL of the image.
Here is an example:

```html
<img src="https://example.com/path/to/image.jpg" alt="Description of the image" />
```

In the above example, the `src` attribute is set to the URL of the remote image. Make sure to replace "https://example.com/path/to/image.jpg" with the actual URL of the remote image you want to display. The `alt` attribute is used to provide alternative text for the image, which is displayed if the image fails to load or for accessibility purposes.
Including remote images in your HTML allows you to display images from external sources, such as image hosting platforms or content delivery networks (CDNs).

### Attributes

Some commonly used attributes for the `<img>` element are:

- `src` : Specifies the source URL of the image.
- `alt` : Provides alternative text for the image, which is displayed if the image fails to load or for accessibility purposes.
- `width` : Specifies the width of the image in pixels or as a percentage of the parent container.
- `height` : Specifies the height of the image in pixels or as a percentage of the parent container.
- `title` : Specifies a tooltip text that is displayed when the user hovers over the image.
- `class` : Assigns one or more CSS class names to the image for styling purposes.
- `style` : Allows inline CSS styles to be applied to the image.
- `id` : Specifies a unique identifier for the image, which can be used for JavaScript manipulation or CSS targeting.
- `usemap` : Specifies a client-side image map to be used with the image.
- `ismap` : Indicates that the image is part of a server-side image map.
  Here is an example of using some of these attributes:

```html
<img
  src="image.jpg"
  alt="Description of the image"
  width="300"
  height="200"
  title="Click to enlarge"
  class="image-thumbnail"
/>
```

In this example, the `src` attribute specifies the image URL, the `alt` attribute provides alternative text, the `width` and `height` attributes define the dimensions of the image, the `title` attribute sets a tooltip, and the `class` attribute assigns a CSS class for styling purposes.
These attributes help control the appearance, accessibility, and behavior of the `<img>` element and the image it displays on the web page.

### **Practice 4**

Practice on a new boilerplate

_a link is is represented with an `<a></a>` tag_...

> The `<a>` tag defines a hyperlink, which is used to link from one page to another.

> The most important attribute of the `<a>` element is the `href` attribute, which indicates the link's destination.

> By default, links will appear as follows in all browsers:

> An unvisited link is underlined and blue
> A visited link is underlined and purple
> An active link is underlined and red

> If the `<a>` tag has no `href` attribute, it is only a `placeholder` for a hyperlink.

> A linked page is normally displayed in the current browser window, unless you specify another target.

> every link needs an href attribute because that's the location that you're linking to.

_external link_...

1. Write an external link to Google.com "Click For Google"...

```html
<!-- External link -->
<a href="http://google.com">Click For Google</a>
```

> if we want to open in a different browser tab we can use `target` attribute and `_blank` value...

2. make this link to open in a new browser window..

```html
<!-- External link -->

<a href="http://google.com" target="_blank">Click For Google</a>
```

**how to put an `<a></a>` tag in a new line**...

3. Now if I want this on a new line I could put a line break or I could just wrap them in a paragraph tag, because a paragraph is actually a block level element...

```html
<!-- External link -->
<p>
  <a href="http://google.com" target="_blank">Click For Google</a>
</p>
```

\__how to create an internal links_...\_...

4. Create an internal link to 04_typography.html "Typography"...

```html
<!-- Internal link -->
<p>
  <a href="/04_typography.html">Typography</a>
</p>
```

_The `<img>` tag is used to embed an image in an HTML page._...

> Images are not technically inserted into a web page; images are linked to web pages.

> The `<img>` tag creates a holding space for the referenced image.

> The `<img>` tag has two required attributes:

> `src` - Specifies the path to the image

> `alt` - Specifies an alternate text for the image, if the image for some reason cannot be displayed

> Also, always specify the `width` and `height` of an image. If width and height are not specified, the page might flicker while the image loads.

> To link an image to another document, simply nest the `<img>` tag inside an `<a>` tag

5. Create a local image...

```html
<!-- Local image -->
<img src="/images/sample.jpg" alt="My Image" />
```

6. set the width and height of an image in the html...

```html
<!-- Local image -->
<img src="/images/sample.jpg" alt="My Image" width="200" />
```

7. create a Remote image...

```html
<!-- Remote image -->
<img src="https://source.unsplash.com/200x200/#building" alt="My Image 2" />
```

---

## 5 Lists & Tables

### Unordered lists

An unordered list in HTML is created using the `<ul>` element. It is used to create a list of items that do not have a specific order or sequence. Each item in the list is represented by the `<li>` element, which stands for "list item". Here is an example of how to create an unordered list in HTML:

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

In the above example, the `<ul>` element represents the unordered list, and each item is represented by the `<li>` element. The list items will be displayed with bullet points by default.
Unordered lists are commonly used to display items in a bulleted format, such as navigation menus, features, or any other collection of items that don't require a specific order.

- Different types of bullets

There are different types of bullets that can be used in unordered lists in HTML. By default, the bullet style is determined by the user agent (web browser) and the operating system. However, you can also customize the bullet style using CSS. Here are some common types of bullets:

1.  Disc: The default bullet style, typically a solid circle.

```html
<ul style="list-style-type: disc;">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

2. Circle: Similar to the disc style, but with an empty circle.

```html
<ul style="list-style-type: circle;">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

3. Square: Displays a solid square as the bullet.

```html
<ul style="list-style-type: square;">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

4. Decimal: Uses numbers as bullets, starting from 1.

```html
<ul style="list-style-type: decimal;">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

5. Lowercase and Uppercase Roman numerals: Uses lowercase or uppercase Roman numerals as bullets.

```html
<ul style="list-style-type: lower-roman;">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
<ul style="list-style-type: upper-roman;">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

These are just a few examples of the bullet styles available in HTML. You can explore more options and customize the bullet style further using CSS.

### Ordered Lists

Ordered lists in HTML are used to create lists where each item is numbered. The numbering starts from 1 by default, but you can customize it using CSS if needed. The `<ol>` element is used to define an ordered list, and each list item is represented by the `<li>` element.
Here is an example of an ordered list in HTML:

```html
<ol>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ol>
```

This will display as:

1. First item
2. Second item
3. Third item
   By default, the numbering style is decimal (1, 2, 3), but you can change it to other styles using CSS. Some common numbering styles include:

- `decimal` : Default numbering style (1, 2, 3).
- `decimal-leading-zero` : Adds a leading zero to single-digit numbers (01, 02, 03).
- `lower-roman` : Uses lowercase Roman numerals (i, ii, iii).
- `upper-roman` : Uses uppercase Roman numerals (I, II, III).
- `lower-alpha` : Uses lowercase letters (a, b, c).
- `upper-alpha` : Uses uppercase letters (A, B, C).
  You can specify the numbering style using the `type` attribute on the `<ol>` element:

```html
<ol type="upper-alpha">
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ol>
```

This will display as:
A. First item
B. Second item
C. Third item
These are just a few examples of how you can use ordered lists in HTML. You can further customize the appearance of the list using CSS.

- type attribute

The `type` attribute in ordered lists ( `<ol>` ) is used to specify the numbering style for the list items. The default value of the `type` attribute is "1", which indicates decimal numbering (1, 2, 3, etc.). However, there are several other values that can be used to change the numbering style:

1. "1": This is the default value and represents decimal numbering.
2. "A": It represents uppercase alphabetical numbering (A, B, C, etc.).
3. "a": It represents lowercase alphabetical numbering (a, b, c, etc.).
4. "I": It represents uppercase Roman numeral numbering (I, II, III, etc.).
5. "i": It represents lowercase Roman numeral numbering (i, ii, iii, etc.).
   Here is an example of how the `type` attribute can be used in an ordered list:

```html
<ol type="A">
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ol>
```

In the above example, the `type` attribute is set to "A", which changes the numbering style to uppercase alphabetical (A, B, C, etc.).
By using the `type` attribute, you can customize the numbering style of ordered lists to suit your specific requirements.

### Nested lists

Nested lists in HTML refer to the practice of placing one list inside another list. This allows for the creation of more complex and hierarchical structures of content. In HTML, this can be achieved by placing `<ul>` or `<ol>` elements (unordered or ordered lists) within other `<li>` elements (list items).
Here is an example of nested lists in HTML:

```html
<ul>
  <li>List item 1</li>
  <li>
    List item 2
    <ul>
      <li>Nested item 1</li>
      <li>Nested item 2</li>
    </ul>
  </li>
  <li>List item 3</li>
</ul>
```

In the above example, we have an outer unordered list ( `<ul>` ) with three list items ( `<li>` ). The second list item contains a nested unordered list within it. This nested list has two list items. The result is a hierarchical structure where the nested list is indented and visually connected to the parent list item.
Nested lists can be used to organize and structure content, such as subcategories, steps within a process, or any other content that requires a hierarchical representation.

### Tables

HTML tables are used to display data in a structured tabular format on a web page. Tables consist of rows ( `<tr>` ) and columns ( `<td>` or `<th>` ). The `<td>` element represents a data cell, while the `<th>` element represents a header cell. Tables can be created using the `<table>` element, and additional elements such as `<caption>` , `<thead>` , `<tbody>` , and `<tfoot>` can be used to provide further structure and semantics to the table.
Here is an example of an HTML table:

```html
<table>
  <caption>Employee Data</caption>
  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Department</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>001</td>
      <td>John Doe</td>
      <td>Marketing</td>
    </tr>
    <tr>
      <td>002</td>
      <td>Jane Smith</td>
      <td>Finance</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="3">Total Employees: 2</td>
    </tr>
  </tfoot>
</table>
```

In the above example, we have a simple table with three columns: ID, Name, and Department. The `<caption>` element provides a title or description for the table. The `<thead>` element contains the table header row, and the `<tbody>` element contains the table body rows. The `<tfoot>` element contains the table footer row, which can be used to display summary information. The `colspan` attribute is used to span multiple columns in the footer row.
Tables in HTML are highly customizable using CSS to control the styling, layout, and responsiveness of the table.

- So tables are used for tabular data

### **Practice 5**

Practice on a new boilerplate

_unordered lists_...

> unordered lists are not numbered

> and basically they have bullet points

> which of course you can remove with CSS

> You can you can have different types of bullet points

_The `<ul>`tag defines an unordered (bulleted) list._

_Use the `<ul>` tag together with the `<li>` tag to create unordered lists._

> So we want to put a `<ul></ul>` tag

> and then each item in the list should be wrapped in a list item, an `<li></li>` tag

1. Create an unordered list with 4 items named Item 1 to Item 4...

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
  <li>Item 4</li>
</ul>
```

_We can also have different types of bullets_

> This isn't something that I would recommend but you can use a `in line style tag` to change the attributes`

> and there is something called a `list-style` attribute

> And we have `circle`, `square`, `disk` (That's the default) and `none`

1. Let's see let's change it to a _square_...

```html
<!-- Unordered lists -->
<ul style="list-style: square">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
  <li>Item 4</li>
</ul>
```

> Now you can see that each bullet is a square

> this is something that I would not recommend doing you want to put all your styling in your CSS style sheet. But I just wanted to give you an example of this.

_Ordered Lists_...

> The `<ol>` tag defines an ordered list. An ordered list `can be numerical or alphabetical`.

> The `<li>` tag is used to define each list item.

1. create one with 4 items...

```html
<!-- Ordered Lists -->
<ol>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
  <li>Item 4</li>
</ol>
```

> And now notice that instead of bullets we actually have numbers.

_We can use the type attribute the numbers or letters_

> type attribute of `number` is the default

`<ol type="1">`

1. we can change it to uppercase letters...

`<ol type="A">`

2. lowercase letters...

`<ol type="a">`

3. uppercase Roman numerals...

`<ol type="I">`

4. lowercase Roman numerals...

`<ol type="i">`

> ordered list is something that I almost never use

> unordered list is something you're going to use all the time because they're used for navigation menus whether it's a horizontal navigate nav bar or if it's a side menu or anything like that

_Nested lists_...

> let's say we want to have a list within the list

1. nest a ul with 2 items inside a ul with 4 items...

```html
<ul>
  <li>Item 1</li>
  <li>
    Item 2
    <ul>
      <li>Nested Item 1</li>
      <li>Nested Item 2</li>
    </ul>
  </li>
  <li>Item 3</li>
  <li>Item 4</li>
</ul>
```

> And now you can see that these two items are nested in the act. It automatically changes the the bullet point here to a circle. Changes it from a disk to a circle.

_So lists are pretty simple styling them as is a whole new level._

> When you start to get into creating navigation bars and stuff like that but we'll get into that later on when we start to deal with CSX. All right.

_tables_...

Practice: on a new boilerplate

> The `<table>` tag defines an HTML table.

> An HTML table consists of one `<table>` element and one or more `<tr>`, `<th>`, and `<td>` elements.

> The `<tr>` element defines a `table row`,

> the `<th>` element defines a `table header`,

> and the `<td>` element defines a `table cell`.

> An HTML table may also include `<caption>`, `<colgroup>`, `<thead>`, `<tfoot>`, and `<tbody>` elements.

_So tables are used for tabular data_

> `You only want to use tables for tabular data`.

1. So to create a table we want to put a...

`<table></table>` tag

> (and in a table we have a `head`, a `body` and we can also have a `footer` If we want.)

2. for the head we're gonna say...

`<thead></thead>` table head

3. and inside we want a...

`<tr></tr>` table row

4. inside the table row we want some column (headings) but when it's with a heading you want to use...

`<th></th>` for table head

> first name  
> last name  
> email

> Now if I save this you'll see that these are our headings

> so these are the headings and then we want the data underneath

5. so the data is going to go in the body...

`<tbody></tbody>`

6. which you also have table rows...

`<tr></tr>`

7. But instead of T.H. We want to use...

`<td></td>` table data

8. compete a table with 3 names, last names, and emails. (if we want to we could change the width)...

```html
<!-- Tables -->
<table style="width: 600px">
  <thead>
    <tr>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Email</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John</td>
      <td>Doe</td>
      <td>jdoe@gmail.com</td>
    </tr>
    <tr>
      <td>Kate</td>
      <td>Smith</td>
      <td>kate@gmail.com</td>
    </tr>
    <tr>
      <td>Jeff</td>
      <td>Wilson</td>
      <td>jeff@gmail.com</td>
    </tr>
  </tbody>
</table>
```

---

## 6 Forms & Input

### The form element

The `<form>` element in HTML is used to create a form on a web page. It acts as a container for various form elements such as input fields, checkboxes, radio buttons, select dropdowns, and buttons. The form element allows users to input data and submit it to a server for processing or further actions.
Here is an example of how the `<form>` element can be used in HTML:

```html
<form action="/submit-form" method="POST">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required />
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required />
  <label for="password">Password:</label>
  <input type="password" id="password" name="password" required />
  <input type="submit" value="Submit" />
</form>
```

In the above example, the `<form>` element is used to create a form. The `action` attribute specifies the URL where the form data will be submitted, and the `method` attribute specifies the HTTP method to be used (in this case, POST). Inside the form, there are several form elements like `<input>` with different types (text, email, password) and corresponding labels. The `name` attribute is used to identify each form field when the form is submitted. Finally, the `<input>` element with `type="submit"` creates a submit button that the user can click to submit the form.
Note: The example provided is in HTML, but if you need assistance with a specific programming language or framework for handling form submissions, please specify it.

- The `<form>` element can contain one or more of the following form elements
- html and CSS are use to only display the form

### Form input elements

Form input elements are used within HTML forms to allow users to input data. There are various types of input elements available, each serving a specific purpose. Here are some commonly used form input elements:

1. `<input type="text"> `: Creates a text input field for users to enter single-line text.
2. `<input type="password">`: Displays a password input field, where the entered text is masked for security.
3. `<input type="email">`: Validates that the entered text is in email format.
4. `<input type="number">`: Accepts numeric input from the user.
5. `<input type="checkbox">`: Creates a checkbox that allows users to select one or more options.
6. `<input type="radio">`: Creates a radio button that allows users to select only one option from a group.
7. `<input type="file">`: Allows users to upload files from their local system.
8. `<input type="submit">`: Creates a submit button to submit the form data.
9. `<input type="reset">`: Creates a reset button to clear the form inputs.
10. `<input type="date">`: Displays a date picker for selecting dates.
11. `<input type="time">`: Allows users to select a time value.
12. ` <input type="color">`: Displays a color picker for selecting colors.
    These are just a few examples of the input elements available in HTML forms. Each input element has its own attributes and behavior, allowing for a wide range of user input options.

### **Practice 6**

Practice: on a new boilerplate

_The `<form>` tag is used to create an HTML form for user input._

> The `<form>` element can contain one or more of the following form elements:

`<input>`

`<textarea>`

`<button>`

`<select>`

`<option>`

`<optgroup>`

`<fieldset>`

`<label>`

`<output>`

_html and CSS are use to only display the form_

> But when you submit a form and make it do something like let's say a registration form. That stuff happens on the back end

**create a form (Practice)**

1. Start a form to be submitted to process.php ...

```html
<form action="process.php"></form>
```

> separate each label/input pair with Divs

1. create a text input for the Name with its label...

```html
<div>
  <label for="name">Name</label>
  <input type="text" id="name" name="name" />
</div>
```

2. create a email input...

```html
<div>
  <label for="email">Email</label>
  <input type="email" name="email" id="email" />
</div>
```

3. to put your label on a separate line without CSS you could put a line break...

```html
<body>
  <form action="process.php">
    <div>
      <label for="name">Name</label>
      <br />
      <input type="text" id="name" name="name" />
    </div>
    <div>
      <label for="email">Email</label>
      <br />
      <input type="email" name="email" id="email" />
    </div>
  </form>
</body>
```

4. create a textarea input for a Message...

```html
<div>
  <label for="message">Message</label>
  <br />
  <textarea name="message" id="message" cols="50" rows="5"></textarea>
</div>
```

5. create a select list input for "Sex" with 3 options...

```html
<div>
  <label for="sex">Sex</label>
  <select name="sex" id="sex">
    <option value="male">Male</option>
    <option value="female">Female</option>
    <option value="other">Other</option>
  </select>
</div>
```

6. create a number input for the age...

```html
<div>
  <label for="age">Age</label>
  <br />
  <input type="number" name="age" id="age" />
</div>
```

7. create a date input for Birth date...

```html
<div>
  <label for="birthdate">Birth date</label>
  <br />
  <input type="date" name="birthdate" id="birthdate" />
</div>
```

8. create a radio input for a type of Membership...

```html
<div>
  <label for="membership">Membership:</label>

  <input type="radio" name="membership" value="simple" id="membership" />
  Simple

  <input type="radio" name="membership" value="standard" id="membership" />
  Standard

  <input type="radio" name="membership" value="super" id="membership" />
  Super
</div>
```

9. to pre-select, pre-check or pre-fill an option we can add an attribute here of `checked`...

```html
<div>
  <label for="membership">Membership</label>

  <input type="radio" name="membership" value="simple" id="membership" />
  Simple

  <input type="radio" name="membership" value="standard" id="membership" checked />
  Standard

  <input type="radio" name="membership" value="super" id="membership" />
  Super
</div>
```

10. And with `<select></select>` we can do the same thing but using an attribute of `selected`...

```html
<div>
  <label for="sex">Sex</label>
  <select name="sex" id="sex">
    <option value="male">Male</option>
    <option value="female" selected>Female</option>
    <option value="other">Other</option>
  </select>
</div>
```

11. Also if we want to pre fill a value here like let's say a name we want to a value we can actually `add a value attribute` and let's say John Doe and save...

```html
<div>
  <label for="name">Name</label>
  <br />
  <input type="text" id="name" name="name" value="John Doe" />
</div>
```

12. we can also use a `placeholder` attribute and set that to let's say "Enter an email"...

```html
<div>
  <label for="email">Email</label>
  <br />
  <input type="email" name="email" id="email" placeholder="Enter an email" />
</div>
```

13. create a checkbox input...

```html
<div>
  <label for="likes">I Like..</label>
  <input type="checkbox" name="likes" value="bike" id="likes" />
  Bike
  <input type="checkbox" name="likes" value="car" id="likes" />
  Car
  <input type="checkbox" name="likes" value="boat" id="likes" />
  Boat
</div>
```

> we can go ahead and we can check as many as we want that.

14. to add a submit input...

```html
<input type="submit" value="Submit" />
```

> now we have a button that says submit

15. another way to do it would be to use a button tag...

```html
<button type="submit">Submit</button>
```

16. to add a reset button...

```html
<button type="reset">Reset</button>
```

---

## 7 Block and Inline Level Elements

### Block-level Elements

Block-level elements in HTML are elements that are displayed as a block and start on a new line. They typically take up the full width available to them and can have margins, paddings, and borders applied to them. Some common examples of block-level elements include `<div>` , `<p>` , `<h1>` to `<h6>` , `<ul>` , `<ol>` , `<li>` , `<table>` , and `<form>` .
Here is an example of block-level elements in HTML:

```html
<div>This is a block-level element.</div>
<p>This is another block-level element.</p>
<h1>This is a heading element.</h1>
<ul>
  <li>List item 1</li>
  <li>List item 2</li>
  <li>List item 3</li>
</ul>
<table>
  <tr>
    <th>Header 1</th>
    <th>Header 2</th>
  </tr>
  <tr>
    <td>Data 1</td>
    <td>Data 2</td>
  </tr>
</table>
<form>
  <label for="name">Name:</label>
  <input type="text" id="name" />
  <br />
  <label for="email">Email:</label>
  <input type="email" id="email" />
</form>
```

These block-level elements provide structure and organization to the content of a web page. They can be styled, positioned, and manipulated using CSS and JavaScript to achieve the desired layout and functionality.

### Inline Elements

Inline elements in HTML are elements that are displayed within the flow of text and do not start on a new line. They typically take up only as much space as necessary to contain their content. Some common examples of inline elements include `<span>` , `<a>` , `<strong>` , `<em>` , `<img>` , `<input>` , `<label>` , and `<button>` .
Here is an example of inline elements in HTML:

```html
<p>
  This is a paragraph with
  <span>inline</span>
  elements like
  <strong>strong</strong>
  and
  <em>emphasized</em>
  text.
</p>
<p>
  Click
  <a href="#">here</a>
  to visit the website.
</p>
<p>
  <label for="name">Name:</label>
  <input type="text" id="name" />
</p>
<button type="button">Click me</button>
```

Inline elements are typically used for smaller elements within a sentence or paragraph, such as emphasizing text, adding links, or inserting inline images. They can be styled and manipulated using CSS and JavaScript to enhance the visual appearance and functionality of the web page.

### **Practice 7**

_Every HTML element has a default display value_

> depending on what type of element it is.

1. There are two display values: ...

`block and inline.`

2. Block-level Elements (3 points)...

> A block-level element always starts on a new line.

> A block-level element always takes up the full width available (stretches out to the left and right as far as it can).

> A block level element has a top and a bottom margin, whereas an inline element does not.

_Here are the block-level elements in HTML:_

```html
<address>  <article>  <aside>  <blockquote>  <canvas>

<dd>  <div>  <dl>  <dt>  <fieldset>  <figcaption>

<figure>  <footer>  <form>  <h1>-<h6>  <header>  <hr>

<li>  <main>  <nav>  <noscript> <ol>  <p>  <pre>

<section>  <table>  <tfoot>  <ul>  <video>
```

3. Inline Elements (3 points)...

> An inline element does not start on a new line.

> An inline element only takes up as much width as necessary.

> Note: An inline element cannot contain a block-level element!

_Here are the inline elements in HTML:_

```html
<a>  <abbr>  <acronym>  <b>  <bdo>  <big>  <br>

<button>  <cite>  <code>  <dfn>  <em>  <i>  <img>

<input>  <kbd>  <label>  <map>  <object>  <output>

<q>  <samp>  <script>  <select>  <small>  <span>

<strong>  <sub>  <sup>  <textarea>  <time>  <tt>  <var>
```

4. _inline block_

> and you also have something called inline block which I'll talk about when we get to CSS because it doesn't really pertain to to just html

---

## 8 Divs & Spans, Classes & Ids

### The div Element

The `<div>` element is a fundamental building block in HTML that is used to create a container or a division within a web page. It is a block-level element that does not have any specific semantic meaning. Instead, it is used as a generic container to group and organize other HTML elements.
Here is an example of how the `<div>` element can be used in HTML:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Div Element Example</title>
  </head>
  <body>
    <div>
      <h1>Welcome to my website!</h1>
      <p>This is a paragraph inside a div element.</p>
      <img src="image.jpg" alt="An image" />
    </div>
  </body>
</html>
```

In the above example, the `<div>` element is used to group the heading, paragraph, and image elements together. It helps in structuring the content and applying styles or scripts to the grouped elements as a whole.

### The span Element

The `<span>` element is an inline-level HTML element used to apply styles or add additional markup to a specific part of the text within a larger block of content. Unlike the `<div>` element, which is a block-level container, the `<span>` element is used for smaller, more specific sections of content within a line or paragraph.
Here is an example of how the `<span>` element can be used in HTML:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Span Element Example</title>
    <style>
      .highlight {
        background-color: yellow;
        font-weight: bold;
      }
    </style>
  </head>
  <body>
    <p>
      This is a
      <span class="highlight">highlighted</span>
      text using the span element.
    </p>
    <p>
      <span style="color: red;">This</span>
      <span style="font-size: 20px;">text</span>
      <span style="text-decoration: underline;">has</span>
      <span style="font-style: italic;">different</span>
      <span style="font-weight: bold;">styles</span>
      applied using inline styles.
    </p>
  </body>
</html>
```

In the first example, the `<span>` element is used with a class of "highlight" to apply a yellow background color and bold font weight to the word "highlighted". In the second example, inline styles are used within each `<span>` element to apply different styles such as color, font size, text decoration, font style, and font weight to specific parts of the text.

### HTML class Attribute

The `class` attribute in HTML is used to specify one or more class names for an element. It is primarily used for styling and selecting elements with CSS or JavaScript. The class names can be used to group elements together and apply styles or functionality to those specific groups.
Here is an example of how the `class` attribute can be used in HTML:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Class Attribute Example</title>
    <style>
      .highlight {
        background-color: yellow;
        font-weight: bold;
      }
      .box {
        border: 1px solid black;
        padding: 10px;
      }
    </style>
  </head>
  <body>
    <h1 class="highlight">Welcome to my website!</h1>
    <div class="box">
      <p>This is a paragraph inside a div element with the "box" class.</p>
    </div>
    <p>This is a normal paragraph with no class specified.</p>
  </body>
</html>
```

In the above example, the `highlight` class is applied to the `<h1>` element, which adds a yellow background color and bold font weight to it. The `<div>` element has the `box` class, which applies a border and padding to create a box-like appearance. The last `<p>` element has no class specified and therefore does not receive any specific styles from CSS.
By using the `class` attribute, you can target and style specific elements or groups of elements, making it easier to apply consistent styles throughout your HTML document.

### HTML id Attribute

The `id` attribute in HTML is used to uniquely identify an element on a web page. It provides a way to select and manipulate individual elements using CSS or JavaScript. Unlike the `class` attribute, which can be applied to multiple elements, the `id` attribute should only be assigned to a single element within the entire HTML document.
Here is an example of how the `id` attribute can be used in HTML:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Id Attribute Example</title>
    <style>
      #main-heading {
        color: blue;
      }
    </style>
  </head>
  <body>
    <h1 id="main-heading">Welcome to my website!</h1>
    <p>This is a paragraph below the main heading.</p>
  </body>
</html>
```

In the above example, the `id` attribute is assigned to the `<h1>` element with a value of "main-heading". This allows us to specifically target and apply styles to that particular element. In this case, the CSS rule with `#main-heading` selector sets the color of the main heading to blue.
The `id` attribute is also useful when using JavaScript to manipulate or interact with specific elements on the page, as it provides a unique identifier for easy selection and manipulation.

### **Practice 8**

1. _The `<div>` Element:_ (3 points)...

> The `<div>` element is often used as a container for other HTML elements.

> The `<div>` element has no required attributes, but style, class and id are common.

> When used together with CSS, the `<div>` element can be used to style blocks of content

---

2. _The `<span>` Element:_ (3 points)...

> The `<span>` element is an inline container used to mark up a part of a text, or a part of a document.

> The `<span>` element has no required attributes, but style, class and id are common.

> When used together with CSS, the `<span>` element can be used to style parts of the text

---

3. _HTML class Attribute:_ (4 points)...

> The HTML class attribute is used _to specify a class for an HTML element._

> Multiple HTML elements can _share the same class_.

> The class attribute is often used _to point to a class name in a style sheet._

> It can also be _used by a JavaScript to access and manipulate elements_ with the specific class name.

---

4. _HTML id Attribute_: (5 points)...

> The HTML id attribute is used _to specify a unique id for an HTML element._

> You _cannot have more than one element with the same id_ in an HTML document.

> The id attribute _specifies a unique id for an HTML element._ The value of the id attribute must be unique within the HTML document.

> The id attribute is used to _point to a specific style declaration_ in a style sheet.

> _It is also used by JavaScript \_to access and manipulate the element_ with the specific id.\_

>

5. _a div for the header with an id_...

```html
<div id="main-header">
  <h1>My Website</h1>
  <p>A site about me</p>
</div>
```

---

6. _a id for the nav-bar_...

```html
<ul id="main-nav">
  <li><a href="#">Home</a></li>
  <li><a href="#">About</a></li>
  <li><a href="#">Contact</a></li>
</ul>
```

---

7. _a div with an id for a about section_...

```html
<div id="about">
<h3>About</h3>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit expedita quae, molestias magnam recusandae ducimus</span> dolore itaque sit dolores error qui repudiandae aliquam nam Ad, tempore amet voluptate enim itaque minima quasi quae esse quis incidunt sint provident sapiente aspernatur!</p>
</div>
```

---

8. _div for the contact section_...

```html
<div id="contact">
  <h3>Contact Me</h3>
  <ul>
    <li>Address: 50 Main st, Boston MA</li>
    <li>Phone: (555) 555-5555</li>
    <li>Email: me@somethingcool.com</li>
  </ul>
</div>
```

---

9. _a div for the footer_...

```html
<div id="footer">
  <p>Copyright &copy; 2019</p>
</div>
```

10. _adding a class of card to the about and contact sections_...

```html
<div id="about" class="card">
  <h3>About</h3>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
    <span class="enhance">expedita quae, molestias magnam recusandae ducimus</span>
    dolore itaque sit dolores error qui repudiandae aliquam nam*Ad, tempore amet voluptate enim
    *itaque minima quasi quae esse quis incidunt sint provident sapiente aspernatur!
  </p>
</div>

<div id="contact" class="card">
  <h3>Contact Me</h3>
  <ul>
    <li>Address: 50 Main st, Boston MA</li>
    <li>Phone: (555) 555-5555</li>
    <li>Email: me@somethingcool.com</li>
  </ul>
</div>
```

---

11. _Adding 2 classes in one to the main-header instead of an id and a class_...

```html
<div class="main-header card">
  <h1>My Website</h1>
  <p>A site about me</p>
</div>
```

12. _But I think that this is a better way to structure it_...

```html
<div id="main-header" class="card">
  <h1>My Website</h1>
  <p>A site about me</p>
</div>
```

13. _add a span tag to the paragraph in the about section_...

```html
<div id="about" class="card">
  <h3>About</h3>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
    <span class="enhance">expedita quae, molestias magnam recusandae ducimus</span>
    dolore itaque sit dolores error qui repudiandae aliquam nam*Ad, tempore amet voluptate enim
    *itaque minima quasi quae esse quis incidunt sint provident sapiente aspernatur!
  </p>
</div>
```

---

## 9 HTML Entities

### HTML Entities

HTML entities are special codes used to represent characters that have special meaning in HTML. These entities are used to display characters that are reserved for HTML syntax, such as angle brackets (< and >), ampersands (&), and quotation marks (" and ').

Here are some commonly used HTML entities:

- non-breaking space `&nbsp;` `&#160;`

- < less than `&lt;` `&#60;`

- `>` greater than `&gt;` `&#62;`

- & ampersand `&amp;` `&#38;`

- " double quotation mark `&quot;` `&#34;`

- ' single quotation mark (apostrophe) `&apos;` `&#39;`

- ¢ cent `&cent;` `&#162;`

- £ pound `&pound;` `&#163;`

- ¥ yen `&yen;` `&#165;`

- € euro `&euro;` `&#8364;`

- © copyright `&copy;` `&#169;`

- ® registered trademark `&reg;` `&#174;`

- computer code tag (`<code></code>`)

```html
<code>&lt;?php echo 'Hello' ?&gt;</code>
```

- keyboard tag (`<kbd></kbd>`) is similar

These entities are useful when you want to display special characters in your HTML code without them being interpreted as part of the HTML syntax.

### **Practice 9**

1. _HTML Entities_: (4 points)...

> Some characters are reserved in HTML.

> Reserved characters in HTML must be replaced with character entities.

> If you use the less than (<) or greater than (>) signs in your text, the browser might mix them with tags.

> Character entities are used to display reserved characters in HTML.

---

>

Non-breaking Space...

> A commonly used entity in HTML is the non-breaking space: `&nbsp;`

> A non-breaking space is a space that will not break into a new line.

> Two words separated by a non-breaking space will stick together (not break into a new line). This is handy when breaking the words might be disruptive. (10 km/h)

> If you write 10 spaces in your text, the browser will remove 9 of them.

> To add real spaces to your text, you can use the `&nbsp;` character entity.

> Tip: The non-breaking hyphen (`&#8209;`) is used to define a hyphen character (‑) that does not break into a new line.

```html
<!-- Non breaking space -->
<p>Hello, my name is &nbsp; &nbsp; &nbsp; &nbsp;Brad</p>
```

> _grater than angle bracket - &gt; (`&gt;`) (`&#62;`)_

> _less than angle bracket - &lt; (`&lt;`) (`&#60;`)_

> _copyright symbol - (&copy;) `&copy;`_

> _registered trademark symbol - (&reg;) `&reg;`_

> _cents - (&cent;) `&cent;`_

> _pound - (&pound;) `&pound;`_

> _yen - (&yen;) `&yen;`_

> _euro - (&euro;) `&euro;`_

> _spades - (&spades;) `&spades;`_

> _clubs - (&clubs;) `&clubs;`_

> _hearts - (&hearts;) `&hearts;`_

> _diamonds - (&diams;) `&diams;`_

Also if you want to display something in like computer code font you can use the code tag...

> _computer code tag (`<code></code>`)_

```html
<code>&lt;?php echo 'Hello' ?&gt;</code>
```

---

> _keyboard tag - (`<kbd></kbd>`)_ is similar

---

## 10 HTML5 Semantic Tags

### HTML Semantic Elements

HTML Semantic Elements are a set of tags introduced in HTML5 that `provide meaning and structure to the content of a web page`.

These elements `help search engines, screen readers, and other assistive technologies understand the purpose and organization of the content`.

Some commonly used semantic elements include:

1.  `<header>` : Represents the introductory content or a container for navigational links.

2.  `<nav>` : Defines a section containing navigation links.

3.  `<main>` : Represents the main content of a document. There should be only one `<main>` element per page.

4.  `<article>` : Represents a self-contained composition, such as a blog post or news article.

5.  `<section>` : Defines a thematic grouping of content within a document.

6.  `<aside>` : Represents content that is tangentially related to the main content, such as sidebars or pull quotes.

7.  `<footer>` : Represents the footer of a document or a section. It typically contains information about the author, copyright, or related links.

Using these semantic elements instead of generic `<div>` tags helps `improve the accessibility, maintainability, and SEO of a web page`.

### **Practice 10**

HTML Semantic Elements: (4 points)...

- Semantic elements = elements with a meaning.

- A semantic element clearly describes its meaning to both the browser and the developer.

- Examples of non-semantic elements: `<div>` and `<span>` - Tells nothing about its content.

- Examples of semantic elements: `<form>`, `<table>`, and `<article>` - Clearly defines its content.

_the more popular HTML5 semantic tags_...

- _header and footer_...

- _nav_...

- _main_...

- _section_...

- _article_...

- _aside_...
