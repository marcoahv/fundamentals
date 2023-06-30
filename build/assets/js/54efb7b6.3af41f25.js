"use strict";(self.webpackChunkfundamentals=self.webpackChunkfundamentals||[]).push([[225],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},h="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),h=u(a),d=o,m=h["".concat(s,".").concat(d)]||h[d]||c[d]||l;return a?n.createElement(m,r(r({ref:t},p),{},{components:a})):n.createElement(m,r({ref:t},p))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=a.length,r=new Array(l);r[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[h]="string"==typeof e?e:o,r[1]=i;for(var u=2;u<l;u++)r[u]=a[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7768:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=a(7462),o=(a(7294),a(3905));const l={sidebar_position:3},r="14. forms",i={unversionedId:"HTML Crash Course/Section-4/Forms",id:"HTML Crash Course/Section-4/Forms",title:"14. forms",description:"you will come across situations where you need to collect data from the user",source:"@site/docs/HTML Crash Course/Section-4/14-Forms.md",sourceDirName:"HTML Crash Course/Section-4",slug:"/HTML Crash Course/Section-4/Forms",permalink:"/fundamentals/HTML Crash Course/Section-4/Forms",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"13. tables",permalink:"/fundamentals/HTML Crash Course/Section-4/Tables"},next:{title:"Section Five",permalink:"/fundamentals/category/section-five"}},s={},u=[{value:"you will come across situations where you need to collect data from the user",id:"you-will-come-across-situations-where-you-need-to-collect-data-from-the-user",level:3},{value:"form tag",id:"form-tag",level:3},{value:"label element",id:"label-element",level:3},{value:"input element and type attribute",id:"input-element-and-type-attribute",level:3},{value:"form controls, the id attribute and the for attribute",id:"form-controls-the-id-attribute-and-the-for-attribute",level:3},{value:"text area element",id:"text-area-element",level:3},{value:"the option tag and the value attribute",id:"the-option-tag-and-the-value-attribute",level:3},{value:"radio button group and the type radio attribute",id:"radio-button-group-and-the-type-radio-attribute",level:3},{value:"check box control",id:"check-box-control",level:3},{value:"button element",id:"button-element",level:3}],p={toc:u},h="wrapper";function c(e){let{components:t,...a}=e;return(0,o.kt)(h,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"14-forms"},"14. forms"),(0,o.kt)("h3",{id:"you-will-come-across-situations-where-you-need-to-collect-data-from-the-user"},"you will come across situations where you need to collect data from the user"),(0,o.kt)("p",null,"the next topic we have to learn about is\nhtml forms"),(0,o.kt)("p",null,"so far we have been displaying data to the user"),(0,o.kt)("p",null,"when building web pages you will come across situations where you need to collect data from the user"),(0,o.kt)("p",null,"for example user details in a registration form or personal details\nwhen applying for a bank account"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"forms allow users to enter data which is generally sent to a web server for processing and storage")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"in this video we are only going to focus on the html part of a web form and not processing the data as you need a lot more than just html for that"))),(0,o.kt)("p",null,"let's take a look at the different html elements that are typically used when\ncreating forms"),(0,o.kt)("h3",{id:"form-tag"},"form tag"),(0,o.kt)("p",null,"now every form begins with a form tag\nso opening and closing tags"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"")),(0,o.kt)("h3",{id:"label-element"},"label element"),(0,o.kt)("p",null,"next let's add a form input to collect a\nuser's name for that we make use of two elements"),(0,o.kt)("p",null,"first a label element to display the input label"),(0,o.kt)("p",null,"let's call this field username"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"")),(0,o.kt)("h3",{id:"input-element-and-type-attribute"},"input element and type attribute"),(0,o.kt)("p",null,"next an input element to accept some text input\nis a tag and this is a self-closing tag"),(0,o.kt)("p",null,"we're going to specify type is equal to\ntext as an attribute"),(0,o.kt)("p",null,"and i'm going to add a few break tags\nfor some spacing so after the label a break tag\nand another pair of break tags after the input element"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"")),(0,o.kt)("p",null,"ideally spacing should be taken care with css but break tags will serve the purpose\nfor now"),(0,o.kt)("p",null,"if we take a look at the browser\nrefresh"),(0,o.kt)("p",null,"you can see the username label and the input element"),(0,o.kt)("h3",{id:"form-controls-the-id-attribute-and-the-for-attribute"},"form controls, the id attribute and the for attribute"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"(form elements or tags are known as form controls)")),(0,o.kt)("p",null,"now what is a good practice with form controls as we call them is tying the label with the input"),(0,o.kt)("p",null,"for that we add an id attribute to the input element"),(0,o.kt)("p",null,"and use its value on the for attribute for the label"),(0,o.kt)("p",null,"so id on input is going to be equal to username\nand label for attribute is equal to the id of the input which is again username"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"")),(0,o.kt)("p",null,"so we are telling this label is for this input"),(0,o.kt)("p",null,"what this does is when ",(0,o.kt)("inlineCode",{parentName:"p"},"we click on the label it focuses the input element")," and this is considered a good practice in html"),(0,o.kt)("p",null,"so this is the input element"),(0,o.kt)("h3",{id:"text-area-element"},"text area element"),(0,o.kt)("p",null,"let's look at a few more form elements"),(0,o.kt)("p",null,"next we have a text area to collect a\nlarger text from the user"),(0,o.kt)("p",null,"first we're going to add a label\nwhich is going to be about you"),(0,o.kt)("p",null,"and then for text area we use the text\narea tag"),(0,o.kt)("p",null,"i'm going to set id is equal to about"),(0,o.kt)("p",null,"and add on label for attribute is equal to about"),(0,o.kt)("p",null,"i'm also going to add a few break tags for spacing"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"")),(0,o.kt)("p",null,"if we now take a look at the browser refresh you can see that we have a text area\nand here we can type multiple lines of text"),(0,o.kt)("p",null,"the select element (drop-down control)"),(0,o.kt)("p",null,"the next form control is the drop-down control"),(0,o.kt)("p",null,"again a label, let's call it country"),(0,o.kt)("p",null,"and the tag this time is select"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"")),(0,o.kt)("h3",{id:"the-option-tag-and-the-value-attribute"},"the option tag and the value attribute"),(0,o.kt)("p",null,"within the select tag we need to specify the different options"),(0,o.kt)("p",null,"we're going to specify three countries\nas options"),(0,o.kt)("p",null,"each option is represented with an option tag"),(0,o.kt)("p",null,"and for\neach option we specify the text to be displayed and the value of that option"),(0,o.kt)("p",null,"for example text is india value is also going to be india"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"")),(0,o.kt)("p",null,"so india with upper case is displayed to the user"),(0,o.kt)("p",null,"and lowercase india is the value sent to\nthe server"),(0,o.kt)("p",null,"let's add two more options"),(0,o.kt)("p",null,"i'm going to\nmake a copy"),(0,o.kt)("p",null,"this is going to be singapore\nthe value is going to be the same with lowercase and finally\nvietnam"),(0,o.kt)("p",null,"also going to add on the select tag id is equal to country"),(0,o.kt)("p",null,"and for the label for is equal to country"),(0,o.kt)("p",null,"a bit of spacing"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"")),(0,o.kt)("p",null,"and if you now take a look at the browser you can see the drop down with three\noptions india singapore and i guess vietnam is cut out\nof the display"),(0,o.kt)("h3",{id:"radio-button-group-and-the-type-radio-attribute"},"radio button group and the type radio attribute"),(0,o.kt)("p",null,"alright the next form control is radio button group which allows the user to select one value from many options"),(0,o.kt)("p",null,"let's say the job type is part time or full time"),(0,o.kt)("p",null,"in that case we're going to add a label that says job type"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"")),(0,o.kt)("p",null,"and below the label we're going to add first an input element\nthis is a self-closing tag"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"")),(0,o.kt)("p",null,"by default the input element type is\ntext which is not what we want right now"),(0,o.kt)("p",null,"for radio buttons\nwe specify type is equal to radio"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"")),(0,o.kt)("p",null,"but we also need to specify a few more\nattributes"),(0,o.kt)("p",null,"i'm going to add ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," is equal to job type"),(0,o.kt)("p",null,"the actual ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," which will be sent to the server so this is going to be part time"),(0,o.kt)("p",null,"and then i'm also going to set an ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," part time"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"")),(0,o.kt)("p",null,"and this radio button needs a label so we're going to add the label after the input"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"")),(0,o.kt)("p",null,"this is going to be part time"),(0,o.kt)("p",null,"and the for attribute is also going to\nbe part time so this label is for this input element"),(0,o.kt)("p",null,"i'm going to add a break tag after the main job type label and also after the first radio button"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"")),(0,o.kt)("p",null,"i'm going to make a copy of the input element along with the label and paste\nit"),(0,o.kt)("p",null,"our second option type is going to be radio again\nand the name needs to remain the same job type and job type"),(0,o.kt)("p",null,"both the radio buttons belong to the same group"),(0,o.kt)("p",null,"the value though is going to be full\ntime and so is the id"),(0,o.kt)("p",null,"the label for attribute is going to be\nfull time and the text is going to be full time"),(0,o.kt)("p",null,"i'm also going to add another pair of break tags for some spacing"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"")),(0,o.kt)("p",null,"if we now head to the browser you can see we can now select the job type as part time or full time"),(0,o.kt)("p",null,"now it's also possible that you want the user selecting both the options"),(0,o.kt)("h3",{id:"check-box-control"},"check box control"),(0,o.kt)("p",null,"in that case we make use of check boxes instead of radio buttons"),(0,o.kt)("p",null,"all we have to do is change the type attribute from radio to check box"),(0,o.kt)("p",null,"so let me make a copy of this job type"),(0,o.kt)("p",null,"and change radio to check box"),(0,o.kt)("p",null,"and i'll also change the id as it should\nbe unique within a page part time check box\nfull time check box"),(0,o.kt)("p",null,"job type is job type check box\njob type check box for the name attribute"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"")),(0,o.kt)("p",null,"if you now go back to the browser refresh\nwe have check boxes"),(0,o.kt)("p",null,"we can select part time as well as full time"),(0,o.kt)("p",null,"so these are some of the most common ways to accept input from a user a"),(0,o.kt)("p",null,"single line input"),(0,o.kt)("p",null,"multi-line input"),(0,o.kt)("p",null,"a drop down radio buttons"),(0,o.kt)("p",null,"and check boxes"),(0,o.kt)("h3",{id:"button-element"},"button element"),(0,o.kt)("p",null,"now what you might want at the end of this form is a button to send all the data to your server"),(0,o.kt)("p",null,"for that within the form tag add a button element"),(0,o.kt)("p",null,"so button opening and closing tags and the text is going to be submit"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"")),(0,o.kt)("p",null,"at the moment this will not send the data to any server"),(0,o.kt)("p",null,"that part is out of scope for html so for now make sure you understand about the various form controls and this submit button"))}c.isMDXComponent=!0}}]);