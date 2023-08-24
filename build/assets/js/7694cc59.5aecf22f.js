"use strict";(self.webpackChunkfundamentals=self.webpackChunkfundamentals||[]).push([[5562],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1458:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:43},o=void 0,l={unversionedId:"6 React Native/Section 5: Dynamic User Interfaces/43 SafeAreaView",id:"6 React Native/Section 5: Dynamic User Interfaces/43 SafeAreaView",title:"43 SafeAreaView",description:"- can you write this transcript in markdown format as in an editor?",source:"@site/docs/6 React Native/Section 5: Dynamic User Interfaces/43 SafeAreaView.md",sourceDirName:"6 React Native/Section 5: Dynamic User Interfaces",slug:"/6 React Native/Section 5: Dynamic User Interfaces/43 SafeAreaView",permalink:"/fundamentals/6 React Native/Section 5: Dynamic User Interfaces/43 SafeAreaView",draft:!1,tags:[],version:"current",sidebarPosition:43,frontMatter:{sidebar_position:43},sidebar:"tutorialSidebar",previous:{title:"useWindowDimensions",permalink:"/fundamentals/6 React Native/Section 5: Dynamic User Interfaces/42 useWindowDimensions"},next:{title:"REACT 2023",permalink:"/fundamentals/category/react-2023"}},s={},c=[{value:"Code Walkthrough",id:"code-walkthrough",level:2},{value:"Issue and Solution",id:"issue-and-solution",level:3},{value:"Introducing Safe Area View",id:"introducing-safe-area-view",level:3},{value:"Conclusion",id:"conclusion",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"can you write this transcript in markdown format as in an editor?")),(0,r.kt)("h1",{id:"safe-area-view-component-in-react-native"},"Safe Area View Component in React Native"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In this video, let's learn about the Safe Area View component in React Native.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"To save us some time, I'm going to copy-paste code for the ",(0,r.kt)("inlineCode",{parentName:"p"},"App")," component and walk you through the same."))),(0,r.kt)("h2",{id:"code-walkthrough"},"Code Walkthrough"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"First, we have the imports for ",(0,r.kt)("inlineCode",{parentName:"li"},"View"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Text"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"StyleSheet"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { View, Text, StyleSheet } from 'react-native'\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Next, we have the App component as the default export:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { View, Text, StyleSheet } from 'react-native'\n\nexport default function App() {\n  return (\n    // JSX code here\n  );\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'For the JSX, we have an outer view container, an inner view box, and a text component. The component displays "Welcome" as the text:')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { View, Text, StyleSheet } from 'react-native'\n\nexport default function App() {\n  return (\n    <View style={styles.container}>\n      <View style={styles.box}>\n        <Text style={styles.text}>Welcome</Text>\n      </View>\n    </View>\n  )\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For the container, we have flex set to 1 to make use of the full available space and the background color of Plum:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { View, Text, StyleSheet } from 'react-native'\n\nexport default function App() {\n  return (\n    <View style={styles.container}>\n      <View style={styles.box}>\n        <Text style={styles.text}>Welcome</Text>\n      </View>\n    </View>\n  )\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    backgroundColor: 'plum',\n  },\n})\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For the inner box, we have a simple padding of 20 pixels in all directions:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { View, Text, StyleSheet } from 'react-native'\n\nexport default function App() {\n  return (\n    <View style={styles.container}>\n      <View style={styles.box}>\n        <Text style={styles.text}>Welcome</Text>\n      </View>\n    </View>\n  )\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    backgroundColor: 'plum',\n  },\n  box: {\n    padding: 20,\n  },\n})\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Finally, for the text, there is a font size of 24, font weight bold, and text align center to center-align the "Welcome" text:')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { View, Text, StyleSheet } from 'react-native'\n\nexport default function App() {\n  return (\n    <View style={styles.container}>\n      <View style={styles.box}>\n        <Text style={styles.text}>Welcome</Text>\n      </View>\n    </View>\n  )\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    backgroundColor: 'plum',\n  },\n  box: {\n    padding: 20,\n  },\n  text: {\n    fontSize: 24,\n    fontWeight: 'bold',\n    textAlign: 'center',\n  },\n})\n")),(0,r.kt)("h3",{id:"issue-and-solution"},"Issue and Solution"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If you followed the series until now, this code should seem familiar.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"However, when we view the app on iPhone 14 and Pixel 4 devices, we encounter a problem.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},'The "Welcome" text is visible on Android, but on iOS devices, it\'s not visible'),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The issue is that the text is hidden behind the notch on iOS devices."))),(0,r.kt)("p",null,"To fix this, we can add a top padding to the container:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { View, Text, StyleSheet } from 'react-native'\n\nexport default function App() {\n  return (\n    <View style={styles.container}>\n      <View style={styles.box}>\n        <Text style={styles.text}>Welcome</Text>\n      </View>\n    </View>\n  )\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    backgroundColor: 'plum',\n    paddingTop: 60,\n  },\n  box: {\n    padding: 20,\n  },\n  text: {\n    fontSize: 24,\n    fontWeight: 'bold',\n    textAlign: 'center',\n  },\n})\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"But this solution is not ideal, as it introduces unnecessary space at the top for Android, and it might not work well on new devices with different notch placements.")),(0,r.kt)("h3",{id:"introducing-safe-area-view"},"Introducing Safe Area View"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"What we need is a way to figure out the safe area for a given device and render our application only within that view.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"That's where the ",(0,r.kt)("inlineCode",{parentName:"p"},"SafeAreaView")," component comes in.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Import it from React Native and wrap your entire JSX with it:"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { View, Text, StyleSheet, SafeAreaView } from 'react-native'\n\nexport default function App() {\n  return (\n    <SafeAreaView>\n      <View style={styles.container}>\n        <View style={styles.box}>\n          <Text style={styles.text}>Welcome</Text>\n        </View>\n      </View>\n    </SafeAreaView>\n  )\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    backgroundColor: 'plum',\n    paddingTop: 60,\n  },\n  box: {\n    padding: 20,\n  },\n  text: {\n    fontSize: 24,\n    fontWeight: 'bold',\n    textAlign: 'center',\n  },\n})\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"To ensure the view occupies the entire available space, add set flex to 1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"and on the component style is equal to styles dot safeContainer"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { View, Text, StyleSheet, SafeAreaView } from 'react-native'\n\nexport default function App() {\n  return (\n    <SafeAreaView style={styles.safeContainer}>\n      <View style={styles.container}>\n        <View style={styles.box}>\n          <Text style={styles.text}>Welcome</Text>\n        </View>\n      </View>\n    </SafeAreaView>\n  )\n}\n\nconst styles = StyleSheet.create({\n  safeContainer: {\n    flex: 1,\n  },\n  container: {\n    flex: 1,\n    backgroundColor: 'plum',\n    paddingTop: 60,\n  },\n  box: {\n    padding: 20,\n  },\n  text: {\n    fontSize: 24,\n    fontWeight: 'bold',\n    textAlign: 'center',\n  },\n})\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The purpose of SafeAreaView is to render content within the safe area boundaries of a device.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"It applies padding to reflect the physical limitations of the screen, such as rounded corners or camera notches."))),(0,r.kt)("p",null,"To avoid the white spacing at the top and bottom, apply the same background color as your container to the SafeAreaView:"),(0,r.kt)("p",null,"let's also remove the ",(0,r.kt)("inlineCode",{parentName:"p"},"paddingTop")," which we don't need anymore"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { View, Text, StyleSheet, SafeAreaView } from 'react-native'\n\nexport default function App() {\n  return (\n    <SafeAreaView style={styles.safeContainer}>\n      <View style={styles.container}>\n        <View style={styles.box}>\n          <Text style={styles.text}>Welcome</Text>\n        </View>\n      </View>\n    </SafeAreaView>\n  )\n}\n\nconst styles = StyleSheet.create({\n  safeContainer: {\n    flex: 1,\n    backgroundColor: 'plum',\n  },\n  container: {\n    flex: 1,\n    backgroundColor: 'plum',\n  },\n  box: {\n    padding: 20,\n  },\n  text: {\n    fontSize: 24,\n    fontWeight: 'bold',\n    textAlign: 'center',\n  },\n})\n")),(0,r.kt)("h3",{id:"conclusion"},"Conclusion"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Using SafeAreaView ensures that your application's content is rendered within the safe area of the device, accommodating notches and rounded corners.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"This is an important aspect of adapting user interfaces based on the device. I hope you now understand the what, why, and how of SafeAreaView."))))}d.isMDXComponent=!0}}]);