"use strict";(self.webpackChunkfundamentals=self.webpackChunkfundamentals||[]).push([[29],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),f=r,d=m["".concat(s,".").concat(f)]||m[f]||u[f]||o;return n?a.createElement(d,i(i({ref:t},c),{},{components:n})):a.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6358:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:44},i="Platform Specific Code",l={unversionedId:"6 React Native/Section 5: Dynamic User Interfaces/44 Platform Specific Code",id:"6 React Native/Section 5: Dynamic User Interfaces/44 Platform Specific Code",title:"Platform Specific Code",description:"- When developing a cross-platform app, maximizing code reuse is a priority.",source:"@site/docs/6 React Native/Section 5: Dynamic User Interfaces/44 Platform Specific Code.md",sourceDirName:"6 React Native/Section 5: Dynamic User Interfaces",slug:"/6 React Native/Section 5: Dynamic User Interfaces/44 Platform Specific Code",permalink:"/fundamentals/6 React Native/Section 5: Dynamic User Interfaces/44 Platform Specific Code",draft:!1,tags:[],version:"current",sidebarPosition:44,frontMatter:{sidebar_position:44},sidebar:"tutorialSidebar",previous:{title:"Safe Area View Component in React Native",permalink:"/fundamentals/6 React Native/Section 5: Dynamic User Interfaces/43 SafeAreaView"},next:{title:"Section 6: Exercise One",permalink:"/fundamentals/category/section-6-exercise-one"}},s={},p=[{value:"Platform Module",id:"platform-module",level:2},{value:"Platform.select",id:"platformselect",level:3},{value:"Platform-Specific Extensions",id:"platform-specific-extensions",level:3},{value:"example",id:"example",level:3},{value:"In summary",id:"in-summary",level:3}],c={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"platform-specific-code"},"Platform Specific Code"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When developing a cross-platform app, maximizing code reuse is a priority.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"However, there are situations where it becomes necessary to tailor your code to specific platforms.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"React Native offers two approaches for organizing and separating platform-specific code.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Let's learn both these approaches in this video."))),(0,r.kt)("h2",{id:"platform-module"},"Platform Module"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Let's begin with the first approach: the ",(0,r.kt)("inlineCode",{parentName:"p"},"Platform")," module.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"This module is imported from React Native and detects the platform on which the app is running."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { View, Text, StyleSheet, SafeAreaView, Platform } from 'react-native'\n\nexport default function App() {\n  return (\n    <SafeAreaView style={styles.safeContainer}>\n      <View style={styles.container}>\n        <View style={styles.box}>\n          <Text style={styles.text}>Welcome</Text>\n        </View>\n      </View>\n    </SafeAreaView>\n  )\n}\n\nconst styles = StyleSheet.create({\n  safeContainer: {\n    flex: 1,\n    backgroundColor: 'plum',\n  },\n  container: {\n    flex: 1,\n    backgroundColor: 'plum',\n  },\n  box: {\n    padding: 20,\n  },\n  text: {\n    fontSize: 24,\n    fontWeight: 'bold',\n    textAlign: 'center',\n  },\n})\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You can use the detection logic to implement platform-specific code.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For instance, consider our welcome text.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"On iPhone, it is appropriately positioned within a safe area view, but on Pixel, it is too close to the status bar.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"using the Platform module we can set a top padding only on Android: ",(0,r.kt)("inlineCode",{parentName:"p"},"paddingTop: Platform.OS === 'android' ? 25 : 0,")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { View, Text, StyleSheet, SafeAreaView, Platform } from 'react-native'\n\nexport default function App() {\n  return (\n    <SafeAreaView style={styles.safeContainer}>\n      <View style={styles.container}>\n        <View style={styles.box}>\n          <Text style={styles.text}>Welcome</Text>\n        </View>\n      </View>\n    </SafeAreaView>\n  )\n}\n\nconst styles = StyleSheet.create({\n  safeContainer: {\n    flex: 1,\n    backgroundColor: 'plum',\n  },\n  container: {\n    flex: 1,\n    backgroundColor: 'plum',\n    paddingTop: Platform.OS === 'android' ? 25 : 0,\n  },\n  box: {\n    padding: 20,\n  },\n  text: {\n    fontSize: 24,\n    fontWeight: 'bold',\n    textAlign: 'center',\n  },\n})\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"This way, you can set a top padding only on Android:")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"you can similarly check against iOS to apply Styles specifically to iOS ",(0,r.kt)("inlineCode",{parentName:"p"},"paddingTop: Platform.OS === 'android' ? 25 : 0,")))),(0,r.kt)("h3",{id:"platformselect"},"Platform.select"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"While Platform.OS is suitable for small changes, a better option for more comprehensive platform-specific styles is to use ",(0,r.kt)("inlineCode",{parentName:"p"},"Platform.select"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Let's show an example where we completely change the text styles for iOS and Android.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"We'll change the font color and font size across the two platforms.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"for that within text key we're going to spread pPlatform.select and curly braces: ",(0,r.kt)("inlineCode",{parentName:"p"},"text: {...Platform.select({})}"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"within this object, we can specify ",(0,r.kt)("inlineCode",{parentName:"p"},"ios: {}")," as a key to apply iOS specific Styles")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"and ",(0,r.kt)("inlineCode",{parentName:"p"},"android: {}")," as a key to apply Android specific styles"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { View, Text, StyleSheet, SafeAreaView, Platform } from 'react-native'\n\nexport default function App() {\n  return (\n    <SafeAreaView style={styles.safeContainer}>\n      <View style={styles.container}>\n        <View style={styles.box}>\n          <Text style={styles.text}>Welcome</Text>\n        </View>\n      </View>\n    </SafeAreaView>\n  )\n}\n\nconst styles = StyleSheet.create({\n  safeContainer: {\n    flex: 1,\n    backgroundColor: 'plum',\n  },\n  container: {\n    flex: 1,\n    backgroundColor: 'plum',\n    paddingTop: Platform.OS === 'android' ? 25 : 0,\n  },\n  box: {\n    padding: 20,\n  },\n  text: {\n    ...Platform.select({\n      ios: {\n        color: 'purple',\n        fontSize: 24,\n        fontStyle: 'italic',\n      },\n      android: {\n        color: 'blue',\n        fontSize: 30,\n      },\n    }),\n    fontWeight: 'bold',\n    textAlign: 'center',\n  },\n})\n")),(0,r.kt)("h3",{id:"platform-specific-extensions"},"Platform-Specific Extensions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For more complex platform-specific scenarios, you should rely on the second approach: ",(0,r.kt)("inlineCode",{parentName:"p"},"platform-specific extensions"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In this approach, you split your code into separate files with ",(0,r.kt)("inlineCode",{parentName:"p"},".iOS.js")," and ",(0,r.kt)("inlineCode",{parentName:"p"},".Android.js")," extensions before the file's main extension.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"React Native detects the extension and loads the relevant platform file when required by other components."))),(0,r.kt)("h3",{id:"example"},"example"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Within the project folder, create a ",(0,r.kt)("inlineCode",{parentName:"li"},"components")," folder and inside create a ",(0,r.kt)("inlineCode",{parentName:"li"},"CustomButton")," folder"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("ol",{parentName:"li",start:2},(0,r.kt)("li",{parentName:"ol"},"create two files: ",(0,r.kt)("inlineCode",{parentName:"li"},"CustomButton.ios.js"))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react'\nimport { Pressable, Text } from 'react-native'\n\nconst CustomButton = ({ onPress, title }) => (\n  <Pressable\n    onPress={onPress}\n    style={{\n      justifyContent: 'center',\n      alignItems: 'center',\n      backgroundColor: 'lightblue',\n      borderRadius: 20,\n      padding: 10,\n    }}>\n    <Text style={{ color: 'purple', fontSize: 18 }}>{title}</Text>\n  </Pressable>\n)\n\nexport default CustomButton\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"and ",(0,r.kt)("inlineCode",{parentName:"li"},"CustomButton.android.js"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react'\nimport { Pressable, Text } from 'react-native'\n\nconst CustomButton = ({ onPress, title }) => (\n  <Pressable\n    onPress={onPress}\n    style={{\n      justifyContent: 'center',\n      alignItems: 'center',\n      backgroundColor: 'lightblue',\n      borderRadius: 5,\n      padding: 10,\n    }}>\n    <Text style={{ color: 'blue', fontSize: 18 }}>{title}</Text>\n  </Pressable>\n)\n\nexport default CustomButton\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"each containing the platform-specific code for the custom button component.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("ol",{parentName:"li",start:3},(0,r.kt)("li",{parentName:"ol"},"back in App.js import the folder")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { View, Text, StyleSheet, SafeAreaView, Platform } from 'react-native'\nimport CustomButton from './components/CustomButton/CustomButton'\n\nexport default function App() {\n  return (\n    <SafeAreaView style={styles.safeContainer}>\n      <View style={styles.container}>\n        <View style={styles.box}>\n          <Text style={styles.text}>Welcome</Text>\n        </View>\n      </View>\n    </SafeAreaView>\n  )\n}\n\nconst styles = StyleSheet.create({\n  safeContainer: {\n    flex: 1,\n    backgroundColor: 'plum',\n  },\n  container: {\n    flex: 1,\n    backgroundColor: 'plum',\n    paddingTop: Platform.OS === 'android' ? 25 : 0,\n  },\n  box: {\n    padding: 20,\n  },\n  text: {\n    ...Platform.select({\n      ios: {\n        color: 'purple',\n        fontSize: 24,\n        fontStyle: 'italic',\n      },\n      android: {\n        color: 'blue',\n        fontSize: 30,\n      },\n    }),\n    fontWeight: 'bold',\n    textAlign: 'center',\n  },\n})\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("ol",{parentName:"li",start:4},(0,r.kt)("li",{parentName:"ol"},"and then invoke the component"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"By organizing your code this way, React Native will automatically select the appropriate version of the component based on the executing platform."))),(0,r.kt)("h3",{id:"in-summary"},"In summary"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"React Native allows you to run platform-specific code using the platform module and platform file extensions.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You can use Platform.OS or Platform.select for minor style differences.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"However, for more complex components that need distinct appearances or behaviors across the two platforms, using .iOS.js and .Android.js file extensions is recommended.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"With that, we conclude this section on Dynamic UI in React Native.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"We've learned how to adapt the application's user interface based on device dimensions using the dimensions API, explored its drawbacks, and understood how the useWindowDimensions hook simplifies working with dimensions and responsive styles.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"We've also learned about the SafeAreaView component for iOS, which ensures the application's UI adapts to hardware limitations like notches and rounded corners.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Finally, we looked at running platform-specific code, which can be quite useful as iOS and Android at times require tailor-made user experiences."))))}u.isMDXComponent=!0}}]);