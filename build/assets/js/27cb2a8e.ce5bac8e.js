"use strict";(self.webpackChunkfundamentals=self.webpackChunkfundamentals||[]).push([[7037],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},p=Object.keys(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),m=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=m(e.components);return r.createElement(o.Provider,{value:t},e.children)},k="mdxType",N={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,p=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),k=m(a),d=n,u=k["".concat(o,".").concat(d)]||k[d]||N[d]||p;return a?r.createElement(u,l(l({ref:t},c),{},{components:a})):r.createElement(u,l({ref:t},c))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=a.length,l=new Array(p);l[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[k]="string"==typeof e?e:n,l[1]=i;for(var m=2;m<p;m++)l[m]=a[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},797:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>N,frontMatter:()=>p,metadata:()=>i,toc:()=>m});var r=a(7462),n=(a(7294),a(3905));const p={sidebar_position:1},l="Vim Shortcuts",i={unversionedId:"9 VimPractice/1 VimePractice",id:"9 VimPractice/1 VimePractice",title:"Vim Shortcuts",description:"From the editor",source:"@site/docs/9 VimPractice/1 VimePractice.md",sourceDirName:"9 VimPractice",slug:"/9 VimPractice/1 VimePractice",permalink:"/fundamentals/9 VimPractice/1 VimePractice",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"VIM",permalink:"/fundamentals/category/vim"}},o={},m=[{value:"From the editor",id:"from-the-editor",level:2},{value:"<strong>Practice One</strong>",id:"practice-one",level:2},{value:"From the terminal",id:"from-the-terminal",level:2},{value:"<strong>Practice Two</strong>",id:"practice-two",level:2},{value:"From the file tree",id:"from-the-file-tree",level:2},{value:"<strong>Practice Three</strong>",id:"practice-three",level:2},{value:"Basic navigation",id:"basic-navigation",level:2},{value:"<strong>Practice Four</strong>",id:"practice-four",level:2},{value:"In-line navigation",id:"in-line-navigation",level:2},{value:"<strong>Practice Five</strong>",id:"practice-five",level:2},{value:"Vertical Navigation",id:"vertical-navigation",level:2},{value:"<strong>Practice Six</strong>",id:"practice-six",level:2},{value:"Entering Insert mode",id:"entering-insert-mode",level:2},{value:"<strong>Practice Seven</strong>",id:"practice-seven",level:2},{value:"Change or Replace",id:"change-or-replace",level:2},{value:"<strong>Practice Eight</strong>",id:"practice-eight",level:2},{value:"Copy and paste",id:"copy-and-paste",level:2},{value:"<strong>Practice Nine</strong>",id:"practice-nine",level:2},{value:"undo and redo",id:"undo-and-redo",level:2},{value:"<strong>Practice Ten</strong>",id:"practice-ten",level:2},{value:"Deleting",id:"deleting",level:2},{value:"<strong>Practice Eleven</strong>",id:"practice-eleven",level:2},{value:"Searching",id:"searching",level:2},{value:"<strong>Practice Twelve</strong>",id:"practice-twelve",level:2},{value:"Visual mode",id:"visual-mode",level:2},{value:"<strong>Practice Thirteen</strong>",id:"practice-thirteen",level:2},{value:"Common Operations in Visual Modes",id:"common-operations-in-visual-modes",level:2},{value:"<strong>Practice Fourteen</strong>",id:"practice-fourteen",level:2},{value:"Folding code blocks",id:"folding-code-blocks",level:2},{value:"<strong>Practice Fifteen</strong>",id:"practice-fifteen",level:2}],c={toc:m},k="wrapper";function N(e){let{components:t,...a}=e;return(0,n.kt)(k,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"vim-shortcuts"},"Vim Shortcuts"),(0,n.kt)("h2",{id:"from-the-editor"},"From the editor"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Toggle Zen Mode"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"  ctrl + z\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Toggle Sidebar/focus (explorer)"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"  ctrl + e\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Toggle Terminal/focus"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"  ctrl + t\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Toggle Opened Files"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"  shift + l (Right)\n\n  shift + h (left)\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Quick open Files"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"  Leader + f\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Split Window"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"  Leader + s (horizontally)\n\n  Leader + v (Vertically)\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Switch Focus Window group"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"  Leader + h / j / k / l\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Close and Save File"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"  CMD + w\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Show Hover"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"  shift + k\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Toggle Vim"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"  ALT + v\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Move current line Down"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"  ALT + j\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Move current line Up"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"  ALT + k\n")))),(0,n.kt)("h2",{id:"practice-one"},(0,n.kt)("strong",{parentName:"h2"},"Practice One")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-jsx"},"")),(0,n.kt)("h2",{id:"from-the-terminal"},"From the terminal"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Toggle Terminal/focus"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"  ctrl + t\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Open new Terminal"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"  CMD + n\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Switch focus/next terminal"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"  CMD + j\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Switch focus/previous terminal"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"  CMD + k\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Close Terminal"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"  CMD + w\n")))),(0,n.kt)("h2",{id:"practice-two"},(0,n.kt)("strong",{parentName:"h2"},"Practice Two")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-jsx"},"")),(0,n.kt)("h2",{id:"from-the-file-tree"},"From the file tree"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Toggle Sidebar/focus (explorer)"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"  ctrl + e\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Navigate up and down the tree"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"  k / j\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Expand / Un-expand folders"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"  l / Space\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Open file/focus"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"  l / Space\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"New folder"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"  Shift + n\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"New file"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"  n\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Re-name file / folder"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"  r\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Delete file / folder"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"  d\n")))),(0,n.kt)("h2",{id:"practice-three"},(0,n.kt)("strong",{parentName:"h2"},"Practice Three")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-jsx"},"")),(0,n.kt)("h2",{id:"basic-navigation"},"Basic navigation"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"left / down / up / right"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"  h / j / k / l\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"navigate in any direction more than one space"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"  NUMBER then LETTER (ea. 13j)\n")))),(0,n.kt)("h2",{id:"practice-four"},(0,n.kt)("strong",{parentName:"h2"},"Practice Four")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-jsx"},"")),(0,n.kt)("h2",{id:"in-line-navigation"},"In-line navigation"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Jump forwards to the start of a word"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"  w\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Jump backwards to the start of a word"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"  b\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Jump forwards to the end of a word"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"  e\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"By prefixing a movement command with a number, you can repeat that movement multiple times"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"  3w / 2e / 4b\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Jump to the end of the line"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"  $ (use shift + a, instead)\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Jump to the start of the line"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"  0 (zero)\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Move the cursor to the fist character of the current line"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"  ^\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Find/Move to the next occurrence of a character to the right"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"  f then <char>\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Find/Move to the next occurrence of a character to the left"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"  F then <char>\n")))),(0,n.kt)("h2",{id:"practice-five"},(0,n.kt)("strong",{parentName:"h2"},"Practice Five")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-jsx"},"")),(0,n.kt)("h2",{id:"vertical-navigation"},"Vertical Navigation"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Move to the beginning of the next paragraph"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"  }\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Move to the beginning of the previous paragraph"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"  {\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Move to the beginning of the next sentence"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"  )\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Move to the beginning of the previous sentence"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"  (\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Move down half a screen"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"  Ctrl + d\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Move up half a screen"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"  Ctrl + u\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Move forward one full screen"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"  Ctrl + f\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Move backward one full screen"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"  Ctrl + b\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Go to the end of the file"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"  G\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Go to the beginning of the file"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"  gg\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Toggle between enclosing characters like (), {}, [],"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"  %\n")))),(0,n.kt)("h2",{id:"practice-six"},(0,n.kt)("strong",{parentName:"h2"},"Practice Six")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-jsx"},"")),(0,n.kt)("h2",{id:"entering-insert-mode"},"Entering Insert mode"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Insert before the cursor."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"  i\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Insert at the beginning of the line."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"  I\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Insert after the cursor."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"  a\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Insert at the end of the line."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"  A\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Open a new line below the current line and enter insert mode."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"  o\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Open a new line above the current line and enter insert mode."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"  O\n")))),(0,n.kt)("h2",{id:"practice-seven"},(0,n.kt)("strong",{parentName:"h2"},"Practice Seven")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-jsx"},"")),(0,n.kt)("h2",{id:"change-or-replace"},"Change or Replace"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"delete the word from the cursor position to the end of the word and put you into insert mode"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"  cw\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Replace a character under the cursor"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"  r <new char>\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Toggle the case of a character"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"  ~\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Increase the number under the cursor by 1"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"  Ctrl + a\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Decrease the number under the cursor by 1"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"  Ctrl + x\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Increase a Number by a Specific Amount"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"  10 Ctrl + a\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Decrease a Number by a Specific Amount"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"  10 Ctrl + x\n")))),(0,n.kt)("h2",{id:"practice-eight"},(0,n.kt)("strong",{parentName:"h2"},"Practice Eight")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-jsx"},"")),(0,n.kt)("h2",{id:"copy-and-paste"},"Copy and paste"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Yank a word from the cursor"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"  yw\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Paste on normal mode"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"  p\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Yank the word without any surrounding whitespace"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"  yiw\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Yank the word with any surrounding whitespace"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"  yaw\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Yank the line"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"  yy\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Yank Inside a Pair of characters (not including the pair of characters)"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"  yi( / yi{ / yi[ / yi< / yi' / yi\" / yi`\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Yank around a Pair of characters (including the pair of characters)"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"  ya( / ya{ / ya[ / ya< / ya' / ya\" / ya`\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Yank a Tag Block (including the parent tag)"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"  yat\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Yank Inside a Tag Block (tag content only)"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"  yit\n")))),(0,n.kt)("h2",{id:"practice-nine"},(0,n.kt)("strong",{parentName:"h2"},"Practice Nine")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-jsx"},"")),(0,n.kt)("h2",{id:"undo-and-redo"},"undo and redo"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Undo the last change"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"  u (can be pressed repeatedly to undo multiple changes.)\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Redo Last Undone Change"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"  Ctrl + r (can be pressed repeatedly to redo multiple changes.)\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Redo last command"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"  . (can be pressed repeatedly to redo multiple changes.)\n")))),(0,n.kt)("h2",{id:"practice-ten"},(0,n.kt)("strong",{parentName:"h2"},"Practice Ten")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-jsx"},"")),(0,n.kt)("h2",{id:"deleting"},"Deleting"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Delete the character or space under the cursor"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"  x\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Delete the character or space before the cursor"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"  X\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Delete from the cursor to the end of the word (excluding the space after it)."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"  dw\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Delete the entire word including the space after it."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"  daw\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Delete the inner word (excluding the space around it)."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"  diw\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Delete the entire current line."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"  dd\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Delete n lines starting from the current line"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"  ndd (For example, 3dd )\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Delete from the cursor to the end of the line."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"  <shift> d\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Delete from the cursor to the beginning of the line (excluding the character under the cursor)."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"  d0\n")))),(0,n.kt)("h2",{id:"practice-eleven"},(0,n.kt)("strong",{parentName:"h2"},"Practice Eleven")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-jsx"},"")),(0,n.kt)("h2",{id:"searching"},"Searching"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Search forward for pattern (term)"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"  /pattern THEN <enter>\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Clear the search highlight."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"  :noh\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Search backward for pattern (term)"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"  ?pattern THEN <enter>\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Repeat the last search in the same direction (forward or backward)."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"  n\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Repeat the last search in the opposite direction."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"  N\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Search forward for the next instance of the word under the cursor."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"  *\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Search backward for the previous instance of the word under the cursor."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"  #\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Toggle between the last visited places"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"  ``\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Toggle between the last edited places"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"  `.\n")))),(0,n.kt)("h2",{id:"practice-twelve"},(0,n.kt)("strong",{parentName:"h2"},"Practice Twelve")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-jsx"},"")),(0,n.kt)("h2",{id:"visual-mode"},"Visual mode"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Character-wise Visual Mode"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"  v (This mode allows you to select text character by character.)\n    Move the cursor to select the desired range of characters.\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Line-wise Visual Mode"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"  V (This mode allows you to select entire lines.)\n    Use movement keys to extend the selection to additional lines.\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Block-wise Visual Mode"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"  Ctrl + v (This mode allows you to select a rectangular block of text, useful for columnar operations.)\n           Use movement keys to extend the selection to form a rectangle.\n")))),(0,n.kt)("h2",{id:"practice-thirteen"},(0,n.kt)("strong",{parentName:"h2"},"Practice Thirteen")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-jsx"},"")),(0,n.kt)("h2",{id:"common-operations-in-visual-modes"},"Common Operations in Visual Modes"),(0,n.kt)("p",null,"Deletes the selected text."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"    d\n")),(0,n.kt)("p",null,"Copies the selected text."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"    y\n")),(0,n.kt)("p",null,"Changes the selected text by deleting it and entering insert mode."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"    c\n")),(0,n.kt)("p",null,"Indents the selected text to the right."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"    >\n")),(0,n.kt)("p",null,"Un-indents the selected text to the left."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"    <\n")),(0,n.kt)("h2",{id:"practice-fourteen"},(0,n.kt)("strong",{parentName:"h2"},"Practice Fourteen")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-jsx"},"")),(0,n.kt)("h2",{id:"folding-code-blocks"},"Folding code blocks"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Close the fold under the cursor."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"  zc\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Open the fold under the cursor."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"  zo\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Close all folds in file"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"  zM\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Open all folds in file"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"  zR\n")))),(0,n.kt)("h2",{id:"practice-fifteen"},(0,n.kt)("strong",{parentName:"h2"},"Practice Fifteen")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-jsx"},"")))}N.isMDXComponent=!0}}]);