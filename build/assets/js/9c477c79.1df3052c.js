"use strict";(self.webpackChunkfundamentals=self.webpackChunkfundamentals||[]).push([[8621],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),h=m(n),g=o,c=h["".concat(s,".").concat(g)]||h[g]||u[g]||i;return n?a.createElement(c,l(l({ref:t},p),{},{components:n})):a.createElement(c,l({ref:t},p))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=g;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[h]="string"==typeof e?e:o,l[1]=r;for(var m=2;m<i;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},4234:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>m});var a=n(7462),o=(n(7294),n(3905));const i={sidebar_position:14},l="Image in Next.js",r={unversionedId:"5 Next.js 13/14 Image in Next.js",id:"5 Next.js 13/14 Image in Next.js",title:"Image in Next.js",description:"features of the Next.js Image component",source:"@site/docs/5 Next.js 13/14 Image in Next.js.md",sourceDirName:"5 Next.js 13",slug:"/5 Next.js 13/14 Image in Next.js",permalink:"/fundamentals/5 Next.js 13/14 Image in Next.js",draft:!1,tags:[],version:"current",sidebarPosition:14,frontMatter:{sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"Global Styles",permalink:"/fundamentals/5 Next.js 13/13 Global Styles"},next:{title:"Learning Rendering and Data Fetching",permalink:"/fundamentals/5 Next.js 13/15 Learning Rendering and Data Fetching"}},s={},m=[{value:"features of the Next.js Image component",id:"features-of-the-nextjs-image-component",level:3},{value:"usage of tne Image component",id:"usage-of-tne-image-component",level:3},{value:"Demo: Image Component",id:"demo-image-component",level:3},{value:"Summary",id:"summary",level:3}],p={toc:m},h="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(h,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"image-in-nextjs"},"Image in Next.js"),(0,o.kt)("h3",{id:"features-of-the-nextjs-image-component"},"features of the Next.js Image component"),(0,o.kt)("p",null,"The Next.js Image component extends the HTML img element with several additional features."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Some of the cool features of the Next.js Image component are")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"size optimization")))),(0,o.kt)("p",null,"where it can automatically serve correctly sized images for each device using modern image formats."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("ol",{parentName:"li",start:2},(0,o.kt)("li",{parentName:"ol"},"Visual stability")))),(0,o.kt)("p",null,"This feature prevents layout shifts automatically when images are loading."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("ol",{parentName:"li",start:3},(0,o.kt)("li",{parentName:"ol"},"Faster page loads")))),(0,o.kt)("p",null,"The images are loaded only when they enter the viewport, and this feature uses the native browser's lazy loading and results in faster page loads while images are set to blur or have other placeholders."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("ol",{parentName:"li",start:4},(0,o.kt)("li",{parentName:"ol"},"local and remote support")))),(0,o.kt)("p",null,"Finally, the Image component supports both local images, as well as remote images from the network."),(0,o.kt)("h3",{id:"usage-of-tne-image-component"},"usage of tne Image component"),(0,o.kt)("p",null,"Here is an example usage of how the Image component looks."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import Image from 'next/image'\n\nexport default function Page() {\n  return (\n    <Image\n      src='https://s3/amazonaws.com/my-bucket/profile.png'\n      alt='Picture of the author'\n      with={500}\n      height={500}\n    />\n  )\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You can directly import the Image component from the Next.js package via next/image.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"While using the component, you'll provide the source.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Next, you'll provide the width and height of the image if it is pulled from the network as shown here. ",(0,o.kt)("inlineCode",{parentName:"p"},"This is not necessary if it is a local image file"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You can also see some alt text has been provided to the component, which basically describes the image to screen readers, as well as search engines."))),(0,o.kt)("p",null,"In the next clip, let's take a look at how we can use the Image component within our Globomantics app."),(0,o.kt)("h3",{id:"demo-image-component"},"Demo: Image Component"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"let's use the Next.js Image component within our Globomantics app to render optimized images.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"I want to add a background image for both the home page, as well as the conference page."))),(0,o.kt)("p",null,"So let's go ahead and use the Image component to do just that."),(0,o.kt)("p",null,"We're now in the home/page.jsx file. Notice there is nothing much going on here as of now."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"My first step is going to ",(0,o.kt)("inlineCode",{parentName:"li"},"import the Image component")," from next/image.")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"home/page.jsx","home/page.jsx":!0},"import Image from 'next/image'\n\nexport default function Page() {\n  return (\n    <>\n      <h1>Welcome to Home page</h1>\n    </>\n  )\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("ol",{parentName:"li",start:2},(0,o.kt)("li",{parentName:"ol"},"I'm also going to ",(0,o.kt)("inlineCode",{parentName:"li"},"import the image file"),". I'm going to import the file home\u2011image\u20111.jpg.")))),(0,o.kt)("p",null,"This file is already available inside the images folder that you see here, and I'm going to import it with the name ",(0,o.kt)("inlineCode",{parentName:"p"},"OurStoryPic"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"home/page.jsx","home/page.jsx":!0},"import Image from 'next/image'\nimport OurStoryPic from '../../images/home-image-1.jpg'\n\nexport default function Page() {\n  return (\n    <>\n      <h1>Welcome to Home page</h1>\n    </>\n  )\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("ol",{parentName:"li",start:3},(0,o.kt)("li",{parentName:"ol"},"The final ",(0,o.kt)("inlineCode",{parentName:"li"},"import here will be the styles")," from the home.module.css.")))),(0,o.kt)("p",null,"Here, the styles are already defined and are component\u2011specific styles for the home page. All right,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"home/page.jsx","home/page.jsx":!0},"import Image from 'next/image'\nimport OurStoryPic from '../../images/home-image-1.jpg'\nimport styles from './home.module.css'\n\nexport default function Page() {\n  return (\n    <>\n      <h1>Welcome to Home page</h1>\n    </>\n  )\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("ol",{parentName:"li",start:4},(0,o.kt)("li",{parentName:"ol"},"now that we have all the imports that we need, let's get started with rendering the Image component."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"I'm going to have a ",(0,o.kt)("inlineCode",{parentName:"p"},"div")," component as the parent component. And to this component, I'm going to provide a ",(0,o.kt)("inlineCode",{parentName:"p"},"style bgWrap"),". (This is already defined within our styles for the home module.)"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"home/page.jsx","home/page.jsx":!0},"import Image from 'next/image'\nimport OurStoryPic from '../../images/home-image-1.jpg'\nimport styles from './home.module.css'\n\nexport default function Page() {\n  return (\n    <>\n      <div className={styles.bgWrap}></div>\n      <h1>Welcome to Home page</h1>\n    </>\n  )\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"And right here, I can ",(0,o.kt)("inlineCode",{parentName:"li"},"include the Image component"),".")),(0,o.kt)("p",null,"The first thing that the Image component needs is the ",(0,o.kt)("inlineCode",{parentName:"p"},"source"),", so our source here is the imported image file, ",(0,o.kt)("inlineCode",{parentName:"p"},"OurStoryPic"),"."),(0,o.kt)("p",null,"I'm also going to provide an ",(0,o.kt)("inlineCode",{parentName:"p"},"alt")," text to it, which is going to read out ",(0,o.kt)("inlineCode",{parentName:"p"},"OurStoryPic"),"."),(0,o.kt)("p",null,"Next, I'm going to provide a property called ",(0,o.kt)("inlineCode",{parentName:"p"},"quality")," and give it the value of 100."),(0,o.kt)("p",null,"(Here, 100 refers to the best quality of the image. You could provide lower numbers if you're not looking for the highest quality of the image to be rendered.)"),(0,o.kt)("p",null,"Next, I'm going to provide a ",(0,o.kt)("inlineCode",{parentName:"p"},"placeholder")," property and give it a value, ",(0,o.kt)("inlineCode",{parentName:"p"},"blur"),"."),(0,o.kt)("p",null,"(A placeholder is a really cool property, which is a part of the Next.js Image component, which is used while the image is loading. The possible values could be blur or empty for local images, and it defaults to empty. When it's empty, there will be no placeholder. And while the image is loading, you'll only see an empty space. But if you give the value blur, you'll see that the image looks sort of blurred until it is loaded. You'll see that in just a minute once we're done coding our Image component here.)"),(0,o.kt)("p",null,"The next property I'm going to add is ",(0,o.kt)("inlineCode",{parentName:"p"},"sizes"),", and I'm giving it a value ",(0,o.kt)("inlineCode",{parentName:"p"},"100vw"),"."),(0,o.kt)("p",null,"(This is basically a string that provides information about how wide the image will be at different breakpoints. Here, vw stands for the viewport width.)"),(0,o.kt)("p",null,"Now instead of providing the height and width, I'm also going to provide a Boolean property called ",(0,o.kt)("inlineCode",{parentName:"p"},"fill"),", which is going to be set to true."),(0,o.kt)("p",null,"(When fill is true, it causes the image to fill the parent element instead of setting the width and height explicitly.)"),(0,o.kt)("p",null,"The default image fit behavior will stretch the image to fit the container, and you may prefer to set a property ",(0,o.kt)("inlineCode",{parentName:"p"},"objectFit")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"contain")," for an image,"),(0,o.kt)("p",null,"(which is letter box to fit the container and also preserve the aspect ratio of the image.)"),(0,o.kt)("p",null,"(Alternatively, you could also provide the value ",(0,o.kt)("inlineCode",{parentName:"p"},"cover"),", which will cause the image to fill the entire container and be cropped to preserve the aspect ratio.)"),(0,o.kt)("p",null,"(This really depends on the design that you get from UX. And for this to look correct, you'll also have to include the ",(0,o.kt)("inlineCode",{parentName:"p"},"overflow hidden")," style to your parent element.)"),(0,o.kt)("p",null,"In our example, we're going to provide the style ",(0,o.kt)("inlineCode",{parentName:"p"},"objectFit")," set to ",(0,o.kt)("inlineCode",{parentName:"p"},"cover"),"."),(0,o.kt)("p",null,"(And notice that in the home.module.css, the parent wrapper bgWrap style has the overflow hidden property already set for you. All right,)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"home/page.jsx","home/page.jsx":!0},"import Image from 'next/image'\nimport OurStoryPic from '../../images/home-image-1.jpg'\nimport styles from './home.module.css'\n\nexport default function Page() {\n  return (\n    <>\n      <div className={styles.bgWrap}>\n        <Image\n          src={OurStoryPic}\n          alt='Our story pic'\n          quality={100}\n          placeholder='blur'\n          sizes={'100vh'}\n          fill\n          style={{\n            objectFit: 'cover',\n          }}\n        />\n      </div>\n      <h1>Welcome to Home page</h1>\n    </>\n  )\n}\n")),(0,o.kt)("p",null,"with this, the Image component is wired up and ready."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("ol",{parentName:"li",start:5},(0,o.kt)("li",{parentName:"ol"},"I'm also going to paste some text that will be displayed on the home page in addition to this image.")))),(0,o.kt)("p",null,"The text is going to be displayed on top of the image, and it would be some heading text and some paragraph. All right,"),(0,o.kt)("p",null,"now let's go ahead and hit Save, and let's check out our home page. There you go."),(0,o.kt)("p",null,"You see the image rendered in the background of the home page and some text on the top of it."),(0,o.kt)("p",null,"(Now what you can do is reset the cache here and try again. Notice that there is a blue blur here as the placeholder until the image loads. Isn't that pretty cool? Once the image loads one time, you will not see this blur effect again when you come back to it. So if you go to a different page and come back to the home page, you won't see this effect anymore because the image is already loaded and waiting for you in the cache. If you ever want to debug and see this blur again, you'll have to reset your cache and refresh again to see that blur effect.)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("ol",{parentName:"li",start:6},(0,o.kt)("li",{parentName:"ol"},"Now using the same methods, let's add an image to the conference page as well."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"I'm copying the same code that we had on the home page, and I'm going to add it to the conference page."))),(0,o.kt)("p",null,"We're going to tweak the image that is imported to be ",(0,o.kt)("inlineCode",{parentName:"p"},"media\u2011image\u20111.jpg"),","),(0,o.kt)("p",null,"and I'm going to call it the ",(0,o.kt)("inlineCode",{parentName:"p"},"ConferencePic"),","),(0,o.kt)("p",null,"and we're going to now pass this ",(0,o.kt)("inlineCode",{parentName:"p"},"ConferencePic")," as the source to our Image component."),(0,o.kt)("p",null,"Everything else remains the same."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"conference/page.jsx","conference/page.jsx":!0},"import Link from 'next/link'\nimport Image from 'next/image'\nimport ConferencePic from '../../images/media-image-1.jpg'\nimport styles from './conference.module.css'\n\nexport default function Page() {\n  return (\n    <>\n      <div className={styles.bgWrap}>\n        <Image\n          src={ConferencePic}\n          alt='Conference pic'\n          quality={100}\n          placeholder='blur'\n          sizes={'100vh'}\n          fill\n          style={{\n            objectFit: 'cover',\n          }}\n        />\n      </div>\n      <h1>Welcome to Globomantics conference</h1>\n      <h2>\n        <Link href='/conference/speakers'>Speakers</Link>\n      </h2>\n      <h2>\n        <Link href='/conference/sessions'>Sessions</Link>\n      </h2>\n    </>\n  )\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"I'm also going to paste a different text to be displayed here on the conference page.")),(0,o.kt)("p",null,"It's going to have a welcome header and links to the Speakers and Sessions page."),(0,o.kt)("p",null,"Let's also remember to import the styles for this component from the conference.module.css file, which already contains the styles for the Conference component."),(0,o.kt)("p",null,"Within the styles, I'm going to make a small tweak. I'm going to make the color of all the text to be white since the background for the image that we're going to be using will be dark. All right,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},".bgWrap {\n  position: fixed;\n  height: 100vh;\n  width: 100vw;\n  overflow: hidden;\n  z-index: -1;\n}\n.bgHeader {\n  margin: 0;\n  padding-top: 25px;\n  font-size: 56px;\n  font-weight: 800;\n  line-height: 45px;\n  text-align: center;\n  color: #fff;\n}\n\n.bgText {\n  margin: 0;\n  font-size: 30px;\n  padding-top: 25px;\n  text-align: center;\n  font-style: italic;\n  color: #fff;\n")),(0,o.kt)("p",null,"you're all set. Let's hit Save and refresh your browser."),(0,o.kt)("p",null,"You can see images now on both the home page and the conference page. And when the image loads for the very first time, it takes a second or so, and you can see a blur effect on both the home page, as well as the conference page. With this, you've learned how to use images within your Next.js app."),(0,o.kt)("h3",{id:"summary"},"Summary"),(0,o.kt)("p",null,"In this module, we've learned about working with the font component in Next.js and the optimizations that come with the Font component. We also learned about styling Next.js apps using CSS modules, as well as global styles. We then looked into the Image component and how it is being optimized as well. In the next module, we're going to be getting into learning rendering and data fetching techniques in Next.js."))}u.isMDXComponent=!0}}]);