"use strict";(self.webpackChunkfundamentals=self.webpackChunkfundamentals||[]).push([[247],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=d(a),u=l,g=c["".concat(s,".").concat(u)]||c[u]||h[u]||r;return a?n.createElement(g,o(o({ref:t},p),{},{components:a})):n.createElement(g,o({ref:t},p))}));function g(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:l,o[1]=i;for(var d=2;d<r;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8509:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var n=a(7462),l=(a(7294),a(3905));const r={sidebar_position:2},o="12. Styling tables",i={unversionedId:"2 CSS/Section-6/Styling tables",id:"2 CSS/Section-6/Styling tables",title:"12. Styling tables",description:"setup (adding the relevant html to display a table)",source:"@site/docs/2 CSS/Section-6/12-Styling tables.md",sourceDirName:"2 CSS/Section-6",slug:"/2 CSS/Section-6/Styling tables",permalink:"/fundamentals/2 CSS/Section-6/Styling tables",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"11. Styling list",permalink:"/fundamentals/2 CSS/Section-6/Styling lists"},next:{title:"7 DISPLAY AND POSITION",permalink:"/fundamentals/category/7-display-and-position"}},s={},d=[{value:"setup (adding the relevant html to display a table)",id:"setup-adding-the-relevant-html-to-display-a-table",level:3},{value:"adding a border",id:"adding-a-border",level:3},{value:"border collapse property",id:"border-collapse-property",level:3},{value:"sometimes you might want the table to take up the entire available width",id:"sometimes-you-might-want-the-table-to-take-up-the-entire-available-width",level:3},{value:"the text align property",id:"the-text-align-property",level:3},{value:"vertical align property",id:"vertical-align-property",level:3},{value:"next to add spacing within the cell we can add padding to th and td tags",id:"next-to-add-spacing-within-the-cell-we-can-add-padding-to-th-and-td-tags",level:3},{value:"to make this look a bit more elegant we can change border in all directions to just border bottom",id:"to-make-this-look-a-bit-more-elegant-we-can-change-border-in-all-directions-to-just-border-bottom",level:3}],p={toc:d},c="wrapper";function h(e){let{components:t,...a}=e;return(0,l.kt)(c,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"12-styling-tables"},"12. Styling tables"),(0,l.kt)("h3",{id:"setup-adding-the-relevant-html-to-display-a-table"},"setup (adding the relevant html to display a table)"),(0,l.kt)("p",null,"next let's move on to styling tables"),(0,l.kt)("p",null,"let me begin by adding the relevant html to display a table and this is going to be the same table we had a look at in the html crash course"),(0,l.kt)("p",null,"so table tag t head tag\nand t body tag"),(0,l.kt)("p",null,"within t head add a tr tag and within the tr tag i'm\ngoing to add three th tags with the text\nheading one two and three"),(0,l.kt)("p",null,"within tbody i'm going to add a tr tag again and within the tr tag i'm going to add\nthree td tags with the text data one\ntwo and three"),(0,l.kt)("p",null,"i'm going to copy paste this row twice\nand change the text to data for five\nsix seven eight and nine"),(0,l.kt)("p",null,"so a heading row with three columns and three rows\nfor data in the table body"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"")),(0,l.kt)("p",null,"if we save the file and take a look at\nthe browser you can see the table being rendered"),(0,l.kt)("h3",{id:"adding-a-border"},"adding a border"),(0,l.kt)("p",null,"but this doesn't really look like a table does it so let's add some styles let's begin by\nadding a border"),(0,l.kt)("p",null,"in the css file on the th and td tags\nlet's add border one pixel\nsolid and a shade of gray"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"")),(0,l.kt)("h3",{id:"border-collapse-property"},"border collapse property"),(0,l.kt)("p",null,"if we save the file and refresh this still looks like individual cells\nrather than a table"),(0,l.kt)("p",null,"to fix this on the table tag\nwe add another property border collapse\nand set it to collapse"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"")),(0,l.kt)("p",null,"refresh and you can see it looks more like a\ntable now"),(0,l.kt)("h3",{id:"sometimes-you-might-want-the-table-to-take-up-the-entire-available-width"},"sometimes you might want the table to take up the entire available width"),(0,l.kt)("p",null,"in such cases you can set width to 100 percent on the\ntable tag"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"")),(0,l.kt)("p",null,"refresh you can see the table is wider now"),(0,l.kt)("p",null,"let's go with sixty percent"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"")),(0,l.kt)("p",null,"looks much better"),(0,l.kt)("h3",{id:"the-text-align-property"},"the text align property"),(0,l.kt)("p",null,"next let's talk about the alignment"),(0,l.kt)("p",null,"by default th tag is center aligned and\ntd tag is left aligned"),(0,l.kt)("p",null,"you can control that using the text\nalign property"),(0,l.kt)("p",null,"so just on the td tag we can set text\nalign and a value of center"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"")),(0,l.kt)("p",null,"refresh\nand the text is now center aligned"),(0,l.kt)("h3",{id:"vertical-align-property"},"vertical align property"),(0,l.kt)("p",null,"also depending on the height of each\ncell you can also control the vertical alignment"),(0,l.kt)("p",null,"for example below text align we can set height to 50 pixels\nand vertical align to bottom"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"")),(0,l.kt)("p",null,"refresh the browser and you can see the text is now aligned at the bottom of each cell"),(0,l.kt)("p",null,"i don't use this much but it is something to be aware of"),(0,l.kt)("h3",{id:"next-to-add-spacing-within-the-cell-we-can-add-padding-to-th-and-td-tags"},"next to add spacing within the cell we can add padding to th and td tags"),(0,l.kt)("p",null,"so apart from the border add padding 15 pixels\nand remove height and vertical align from td"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"")),(0,l.kt)("p",null,"refresh the browser and you can see the table looks much better now"),(0,l.kt)("h3",{id:"to-make-this-look-a-bit-more-elegant-we-can-change-border-in-all-directions-to-just-border-bottom"},"to make this look a bit more elegant we can change border in all directions to just border bottom"),(0,l.kt)("p",null,"so border bottom\none pixel solid ccc"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"")),(0,l.kt)("p",null,"refresh\nand we see the separation of each row rather than each cell in the table"),(0,l.kt)("p",null,"of course we're going to come across a variety of table styles when you start browsing websites"),(0,l.kt)("p",null,"but these are some fundamental properties that you need to know as a beginner"),(0,l.kt)("p",null,"border collapse width text alignment and padding for each cell"),(0,l.kt)("p",null,"all right we have now covered styling most of the html elements"))}h.isMDXComponent=!0}}]);