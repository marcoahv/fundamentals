"use strict";(self.webpackChunkfundamentals=self.webpackChunkfundamentals||[]).push([[248],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>g});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},h=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),u=p(n),c=i,g=u["".concat(s,".").concat(c)]||u[c]||d[c]||r;return n?a.createElement(g,o(o({ref:t},h),{},{components:n})):a.createElement(g,o({ref:t},h))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1713:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const r={},o="6. Text formatting",l={unversionedId:"HTML Crash Course/Section-2/Text formatting",id:"HTML Crash Course/Section-2/Text formatting",title:"6. Text formatting",description:"headings, paragraphs and more",source:"@site/docs/HTML Crash Course/Section-2/6-Text formatting.md",sourceDirName:"HTML Crash Course/Section-2",slug:"/HTML Crash Course/Section-2/Text formatting",permalink:"/fundamentals/HTML Crash Course/Section-2/Text formatting",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Section Two",permalink:"/fundamentals/category/section-two"},next:{title:"7. Inline text formatting",permalink:"/fundamentals/HTML Crash Course/Section-2/Inline Text Formatting"}},s={},p=[{value:"Headings",id:"headings",level:3},{value:"the h1 tag",id:"the-h1-tag",level:3},{value:"the h2 tag",id:"the-h2-tag",level:3},{value:"h3 to h6",id:"h3-to-h6",level:3},{value:"the paragraph element",id:"the-paragraph-element",level:3},{value:"lorem ipsum",id:"lorem-ipsum",level:3},{value:"white space is ignore by the browser",id:"white-space-is-ignore-by-the-browser",level:3},{value:"the line brake element",id:"the-line-brake-element",level:3},{value:"self-closing elements",id:"self-closing-elements",level:3},{value:"horizontal rule element",id:"horizontal-rule-element",level:3}],h={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"6-text-formatting"},"6. Text formatting"),(0,i.kt)("p",null,"headings, paragraphs and more"),(0,i.kt)("h3",{id:"headings"},"Headings"),(0,i.kt)("p",null,"users looking at a web page tend to scan quickly to find relevant content\noften just reading the headings before designing whether to read the corresponding paragraph of text or not"),(0,i.kt)("p",null,"so html gives us heading and paragraph elements for some basic structuring of\nthe text"),(0,i.kt)("p",null,"let's go over heading elements first"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"html headings are titles or subtitles that you want to display on a web page")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"there are six heading elements in total"))),(0,i.kt)("h3",{id:"the-h1-tag"},"the h1 tag"),(0,i.kt)("p",null,"the first one is the h1 element"),(0,i.kt)("p",null,"so we specify the opening h1 tag the closing h1 tag"),(0,i.kt)("p",null,"and the content in between let's type heading 1"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"<body>\n  \x3c!-- Headings and Paragraph --\x3e\n  <h1>Hading 1</h1>\n</body>\n")),(0,i.kt)("p",null,"if you now head back to the browser and refresh\nyou can see we have the text in larger font size and it's also bold"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"the h1 tag corresponds to the title of your web page")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"and it's a good practice to have only one h1 tag per page"))),(0,i.kt)("h3",{id:"the-h2-tag"},"the h2 tag"),(0,i.kt)("p",null,"which brings us to the h2 tag"),(0,i.kt)("p",null,"back in the editor i'm going to make a copy of this tag"),(0,i.kt)("p",null,"shift alt down arrow being the shortcut and change each one to h2"),(0,i.kt)("p",null,"and the content to heading two"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"<body>\n  \x3c!-- Headings and Paragraph --\x3e\n  <h1>Hading 1</h1>\n  <h2>Hading 2</h2>\n</body>\n")),(0,i.kt)("p",null,"save and take a look at the browser"),(0,i.kt)("p",null,"you can see we have the h2 text"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"and this is usually used for subheadings")),(0,i.kt)("h3",{id:"h3-to-h6"},"h3 to h6"),(0,i.kt)("p",null,"if your web page needs more hierarchy in the content you can rely on the remaining heading\ntags"),(0,i.kt)("p",null,"i'm going to press alt shift or option shift and down arrow\nto make copies of the h2 tag once twice\nthree times and four times"),(0,i.kt)("p",null,"now change the tags to h3\nall the way till h6"),(0,i.kt)("p",null,"change the content as well"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"<body>\n  \x3c!-- Headings and Paragraph --\x3e\n  <h1>Hading 1</h1>\n  <h2>Hading 2</h2>\n  <h3>Hading 3</h3>\n  <h4>Hading 4</h4>\n  <h5>Hading 5</h5>\n  <h6>Hading 6</h6>\n</body>\n")),(0,i.kt)("p",null,"if you now save the file and take a look at the browser refresh"),(0,i.kt)("p",null,"you can see the heading text being formatted in different ways"),(0,i.kt)("p",null,"and this seems a bit large because i\nhave zoomed in let me reset and you can see the actual size of h1 to\nh6 tags"),(0,i.kt)("p",null,"they all are formatted differently"),(0,i.kt)("p",null,"each heading starts in a new line and also has some spacing at the bottom\nto separate from the content below"),(0,i.kt)("p",null,"so we have marked the content\nusing tags to let the browser know how to display the content"),(0,i.kt)("p",null,"this is pretty much what we do with html hopefully you're starting to get the\nhang of it"),(0,i.kt)("h3",{id:"the-paragraph-element"},"the paragraph element"),(0,i.kt)("p",null,"another html element that is used for\ndisplaying text is the paragraph element"),(0,i.kt)("p",null,"add an opening tag\nwhich is p and the closing tag"),(0,i.kt)("p",null,"for the content i'm going to add this is\na paragraph"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"<body>\n  \x3c!-- Headings and Paragraph --\x3e\n  <p>This id a paragraph</p>\n</body>\n")),(0,i.kt)("p",null,"take a look at the browser\nand you see the paragraph text being displayed"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"a paragraph text always starts on a new line and unlike headings it is usually a block of text")),(0,i.kt)("p",null,"so text you see in a blog post product descriptions on your ecommerce sites etc"),(0,i.kt)("h3",{id:"lorem-ipsum"},"lorem ipsum"),(0,i.kt)("p",null,"to add more content to display in a paragraph add a new p tag\nand for the content type lorem l-o-r-e-m and press tab"),(0,i.kt)("p",null,"format it and you can see when we tab\nit fills in a paragraph of text without you having to type it all out"),(0,i.kt)("p",null,"let's make a copy of this save the file refresh"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"<body>\n  \x3c!-- Headings and Paragraph --\x3e\n  <p>This is a paragraph</p>\n  <p>\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur autem unde sed.\n    Doloremque, quae quo doloribus quia ipsum sapiente officiis repellat tenetur eligendi molestiae\n    dolores in odio laudantium ipsa praesentium?\n  </p>\n  <p>\n    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt ex dolores, doloribus\n    blanditiis distinctio beatae aperiam repudiandae velit laborum eligendi dolore asperiores\n    voluptatum magni officiis incidunt ad sit optio! In?\n  </p>\n</body>\n")),(0,i.kt)("p",null,"and you can see that each paragraph starts on a new line and adds a little\nspacing to the content below"),(0,i.kt)("h3",{id:"white-space-is-ignore-by-the-browser"},"white space is ignore by the browser"),(0,i.kt)("p",null,"and what you do have to learn here is\nthat you cannot change the display by adding extra spaces or extra lines in\nyour html code"),(0,i.kt)("p",null,"the browser will automatically remove any extra spaces and lines when the page\nis being displayed"),(0,i.kt)("p",null,"so even if you split this paragraph into\nseparate lines the output will remain the same"),(0,i.kt)("h3",{id:"the-line-brake-element"},"the line brake element"),(0,i.kt)("p",null,"if you intentionally want to add line breaks html provides a line break element which\nyou can use"),(0,i.kt)("p",null,"so after a line we can add\nthe break tag copy and paste it"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"<body>\n  \x3c!-- Headings and Paragraph --\x3e\n  <p>This is a paragraph</p>\n  <p>\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur autem unde sed.\n    Doloremque, quae quo doloribus quia ipsum sapiente officiis repellat tenetur eligendi molestiae\n    dolores in odio laudantium ipsa praesentium?\n  </p>\n  <p>\n    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt ex dolores, doloribus\n    <br />\n    blanditiis distinctio beatae aperiam repudiandae velit laborum eligendi dolore asperiores\n    <br />\n    voluptatum magni officiis incidunt ad sit optio! In?\n  </p>\n</body>\n")),(0,i.kt)("h3",{id:"self-closing-elements"},"self-closing elements"),(0,i.kt)("p",null,"now the break tag is sort of a special tag in the sense that"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"you're allowed to skip the closing tag as there is no content")),(0,i.kt)("p",null,"so just angle brackets"),(0,i.kt)("p",null,"and even this forward slash is optional\nthe prettier formatter we are using does add the forward slash"),(0,i.kt)("p",null,"so when you format the document\nyou're going to see this self-closing break tag"),(0,i.kt)("p",null,"if we save the file refresh\nyou can see that our last paragraph is now split across three lines"),(0,i.kt)("p",null,"first line then html encounters a break tag"),(0,i.kt)("p",null,"so second line\na break tag again"),(0,i.kt)("p",null,"and then the third line"),(0,i.kt)("h3",{id:"horizontal-rule-element"},"horizontal rule element"),(0,i.kt)("p",null,"now while we're on this topic of\nseparation of content and self-closing tags"),(0,i.kt)("p",null,"another noteworthy element is the\nhorizontal rule"),(0,i.kt)("p",null,"the tag is hr"),(0,i.kt)("p",null,"which is again self closing"),(0,i.kt)("p",null,"i've added an hr tag in between the\nparagraph elements"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"<body>\n  <p>This is a paragraph</p>\n  <p>\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur autem unde sed.\n    Doloremque, quae quo doloribus quia ipsum sapiente officiis repellat tenetur eligendi molestiae\n    dolores in odio laudantium ipsa praesentium?\n  </p>\n  <hr />\n  <p>\n    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt ex dolores, doloribus\n    <br />\n    blanditiis distinctio beatae aperiam repudiandae velit laborum eligendi dolore asperiores\n    <br />\n    voluptatum magni officiis incidunt ad sit optio! In?\n  </p>\n</body>\n")),(0,i.kt)("p",null,"if i refresh the browser"),(0,i.kt)("p",null,"you can see a horizontal rule is drawn across the page and separates the two\nparagraphs"),(0,i.kt)("p",null,"generally spacing is sufficient to separate two paragraphs"),(0,i.kt)("p",null,"but it is worth knowing about the horizontal rule as well next"))}d.isMDXComponent=!0}}]);