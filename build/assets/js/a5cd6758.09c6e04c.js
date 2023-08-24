"use strict";(self.webpackChunkfundamentals=self.webpackChunkfundamentals||[]).push([[5886],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var l=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,o=function(e,t){if(null==e)return{};var n,l,o={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=l.createContext({}),c=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return l.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return n?l.createElement(f,r(r({ref:t},u),{},{components:n})):l.createElement(f,r({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:o,r[1]=i;for(var c=2;c<a;c++)r[c]=n[c];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},617:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var l=n(7462),o=(n(7294),n(3905));const a={sidebar_position:31},r="Align Self",i={unversionedId:"6 React Native/Section 4: Layout/31 Align Self",id:"6 React Native/Section 4: Layout/31 Align Self",title:"Align Self",description:"- Unlike alignItems, which is applied to the container and controls the alignment of all items within it, alignSelf is applied to individual items, allowing us to control the alignment of each item independently.",source:"@site/docs/6 React Native/Section 4: Layout/31 Align Self.md",sourceDirName:"6 React Native/Section 4: Layout",slug:"/6 React Native/Section 4: Layout/31 Align Self",permalink:"/fundamentals/6 React Native/Section 4: Layout/31 Align Self",draft:!1,tags:[],version:"current",sidebarPosition:31,frontMatter:{sidebar_position:31},sidebar:"tutorialSidebar",previous:{title:"Align Items",permalink:"/fundamentals/6 React Native/Section 4: Layout/30 Align Items"},next:{title:"Flex Wrap",permalink:"/fundamentals/6 React Native/Section 4: Layout/32 Flex Wrap"}},s={},c=[{value:"Align Self vs Align Items",id:"align-self-vs-align-items",level:3},{value:"Flex Start",id:"flex-start",level:3},{value:"Flex End",id:"flex-end",level:3},{value:"Center",id:"center",level:3},{value:"Stretch",id:"stretch",level:3},{value:"Default Value",id:"default-value",level:3},{value:"Inheritance from Align Items",id:"inheritance-from-align-items",level:3},{value:"Summary",id:"summary",level:3}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,l.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"align-self"},"Align Self"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Unlike alignItems, which is applied to the container and controls the alignment of all items within it, ",(0,o.kt)("inlineCode",{parentName:"li"},"alignSelf")," is applied to individual items, allowing us to control the alignment of each item independently.")),(0,o.kt)("h3",{id:"align-self-vs-align-items"},"Align Self vs Align Items"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"alignSelf ",(0,o.kt)("inlineCode",{parentName:"p"},"values")," are similar to those used in alignItems.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Let's dive into VS Code to understand more."))),(0,o.kt)("h3",{id:"flex-start"},"Flex Start"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The value ",(0,o.kt)("inlineCode",{parentName:"p"},"flex-start")," aligns the items at the start of the cross axis.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"For Box 1, let's reset alignSelf to ",(0,o.kt)("inlineCode",{parentName:"p"},"flex-start"),","))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { StyleSheet, View } from 'react-native'\nimport Box from './components/Box'\n\nexport default function App() {\n  return (\n    <View style={styles.container}>\n      <Box style={{ backgroundColor: '#8e9b00', alignSelf: 'flex-start' }}>Box 1</Box>\n      <Box style={{ backgroundColor: '#b65d1f' }}>Box 2</Box>\n      <Box style={{ backgroundColor: '#1c4c56' }}>Box 3</Box>\n      <Box style={{ backgroundColor: '#ab9156' }}>Box 4</Box>\n      <Box style={{ backgroundColor: '#6b0803' }}>Box 5</Box>\n      <Box style={{ backgroundColor: '#1c4c56' }}>Box 6</Box>\n      <Box style={{ backgroundColor: '#b95f21' }}>Box 7</Box>\n    </View>\n  )\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    marginTop: 64,\n    borderWidth: 6,\n    borderColor: 'red',\n  },\n})\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"and you can observe the item being pulled to the left where the cross axis begins.")),(0,o.kt)("h3",{id:"flex-end"},"Flex End"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The value ",(0,o.kt)("inlineCode",{parentName:"p"},"flex-end")," aligns the item with the end of the cross axis.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Box 2 has align self as ",(0,o.kt)("inlineCode",{parentName:"p"},"flex-end"),","))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { StyleSheet, View } from 'react-native'\nimport Box from './components/Box'\n\nexport default function App() {\n  return (\n    <View style={styles.container}>\n      <Box style={{ backgroundColor: '#8e9b00', alignSelf: 'flex-start' }}>Box 1</Box>\n      <Box style={{ backgroundColor: '#b65d1f', alignSelf: 'flex-end' }}>Box 2</Box>\n      <Box style={{ backgroundColor: '#1c4c56' }}>Box 3</Box>\n      <Box style={{ backgroundColor: '#ab9156' }}>Box 4</Box>\n      <Box style={{ backgroundColor: '#6b0803' }}>Box 5</Box>\n      <Box style={{ backgroundColor: '#1c4c56' }}>Box 6</Box>\n      <Box style={{ backgroundColor: '#b95f21' }}>Box 7</Box>\n    </View>\n  )\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    marginTop: 64,\n    borderWidth: 6,\n    borderColor: 'red',\n  },\n})\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"resulting in the item being pulled to the right where the cross axis ends.")),(0,o.kt)("h3",{id:"center"},"Center"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"let's try ",(0,o.kt)("inlineCode",{parentName:"li"},"Center")," as the third value.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { StyleSheet, View } from 'react-native'\nimport Box from './components/Box'\n\nexport default function App() {\n  return (\n    <View style={styles.container}>\n      <Box style={{ backgroundColor: '#8e9b00', alignSelf: 'flex-start' }}>Box 1</Box>\n      <Box style={{ backgroundColor: '#b65d1f', alignSelf: 'flex-end' }}>Box 2</Box>\n      <Box style={{ backgroundColor: '#1c4c56' }}>Box 3</Box>\n      <Box style={{ backgroundColor: '#ab9156' }}>Box 4</Box>\n      <Box style={{ backgroundColor: '#6b0803' }}>Box 5</Box>\n      <Box style={{ backgroundColor: '#1c4c56' }}>Box 6</Box>\n      <Box style={{ backgroundColor: '#b95f21' }}>Box 7</Box>\n    </View>\n  )\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    marginTop: 64,\n    borderWidth: 6,\n    borderColor: 'red',\n  },\n})\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"After saving the file, you can see that Box 3 is now centered.")),(0,o.kt)("h3",{id:"stretch"},"Stretch"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The value ",(0,o.kt)("inlineCode",{parentName:"li"},"stretch")," stretches the item from the start to the end of the cross axis.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { StyleSheet, View } from 'react-native'\nimport Box from './components/Box'\n\nexport default function App() {\n  return (\n    <View style={styles.container}>\n      <Box style={{ backgroundColor: '#8e9b00', alignSelf: 'flex-start' }}>Box 1</Box>\n      <Box style={{ backgroundColor: '#b65d1f', alignSelf: 'flex-end' }}>Box 2</Box>\n      <Box style={{ backgroundColor: '#1c4c56', alignSelf: 'center' }}>Box 3</Box>\n      <Box style={{ backgroundColor: '#ab9156', alignSelf: 'stretch' }}>Box 4</Box>\n      <Box style={{ backgroundColor: '#6b0803' }}>Box 5</Box>\n      <Box style={{ backgroundColor: '#1c4c56' }}>Box 6</Box>\n      <Box style={{ backgroundColor: '#b95f21' }}>Box 7</Box>\n    </View>\n  )\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    marginTop: 64,\n    borderWidth: 6,\n    borderColor: 'red',\n  },\n})\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"After saving the file, you can see Box 4 gets stretched from the start to the end.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"However, Boxes 5 through 7 are also stretched."))),(0,o.kt)("h3",{id:"default-value"},"Default Value"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The default value for align self is ",(0,o.kt)("inlineCode",{parentName:"li"},"auto"),", and it inherits its value from the align items property of the parent flex container.")),(0,o.kt)("h3",{id:"inheritance-from-align-items"},"Inheritance from Align Items"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Boxes 5 through 7 are stretched because the container has alignItems stretch as its default value.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"When alignSelf is set to Auto, it takes the value of the parent's align items property, which in this case is stretch.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Hence, items 5, 6, and 7 inherit the value stretch and stretch from the left to the right in the UI."))),(0,o.kt)("h3",{id:"summary"},"Summary"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"In summary, the alignSelf property is used to align items individually and accepts values like ",(0,o.kt)("inlineCode",{parentName:"p"},"auto"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"flex-start"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"flex-end"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"center"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"stretch"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"When specified, it always overrides the align items value of the flex container"),"."))))}d.isMDXComponent=!0}}]);