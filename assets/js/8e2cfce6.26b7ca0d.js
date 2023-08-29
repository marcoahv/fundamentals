"use strict";(self.webpackChunkfundamentals=self.webpackChunkfundamentals||[]).push([[8481],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>k});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=p(t),u=r,k=d["".concat(s,".").concat(u)]||d[u]||c[u]||o;return t?a.createElement(k,i(i({ref:n},m),{},{components:t})):a.createElement(k,i({ref:n},m))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4096:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=t(7462),r=(t(7294),t(3905));const o={sidebar_position:47},i=void 0,l={unversionedId:"6 React Native/Section 6: Exercise One/47 Build a Pokemon Card 3",id:"6 React Native/Section 6: Exercise One/47 Build a Pokemon Card 3",title:"47 Build a Pokemon Card 3",description:"- can you write this transcript in markdown format as in an editor?",source:"@site/docs/6 React Native/Section 6: Exercise One/47 Build a Pokemon Card 3.md",sourceDirName:"6 React Native/Section 6: Exercise One",slug:"/6 React Native/Section 6: Exercise One/47 Build a Pokemon Card 3",permalink:"/fundamentals/6 React Native/Section 6: Exercise One/47 Build a Pokemon Card 3",draft:!1,tags:[],version:"current",sidebarPosition:47,frontMatter:{sidebar_position:47},sidebar:"tutorialSidebar",previous:{title:"Build a Pokemon Card 2",permalink:"/fundamentals/6 React Native/Section 6: Exercise One/46 Build a Pokemon Card 2"},next:{title:"REACT 2023",permalink:"/fundamentals/category/react-2023"}},s={},p=[{value:"Step 7: Defining Pok\xe9mon Properties:",id:"step-7-defining-pok\xe9mon-properties",level:3},{value:"Step 7/2 : Passing Properties as Props:",id:"step-72--passing-properties-as-props",level:3},{value:"Step 8: Destructuring Props:",id:"step-8-destructuring-props",level:3},{value:"Rendering Content:",id:"rendering-content",level:3},{value:"Step 9: Block One - Name and HP:",id:"step-9-block-one---name-and-hp",level:3},{value:"Step 10: Block Two - Pok\xe9mon Image:",id:"step-10-block-two---pok\xe9mon-image",level:3},{value:"Step 11: Block Three - Pok\xe9mon Type:",id:"step-11-block-three---pok\xe9mon-type",level:3},{value:"Step 12: Block Four - Moves:",id:"step-12-block-four---moves",level:3},{value:"Step 13: Block Five - Weaknesses:",id:"step-13-block-five---weaknesses",level:3},{value:"Previewing the UI:",id:"previewing-the-ui",level:3}],m={toc:p},d="wrapper";function c(e){let{components:n,...t}=e;return(0,r.kt)(d,(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"can you write this transcript in markdown format as in an editor?")),(0,r.kt)("h1",{id:"build-a-pokemon-card-3"},"Build a Pokemon Card 3"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Welcome to Part Three of building a Pok\xe9mon card in React Native.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In Part 2, we successfully styled our card component to resemble an actual card.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In this video, our focus will shift towards crafting the content of the card component.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Let's pick up where we left off and proceed with Step 7."))),(0,r.kt)("h3",{id:"step-7-defining-pok\xe9mon-properties"},"Step 7: Defining Pok\xe9mon Properties:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In ",(0,r.kt)("inlineCode",{parentName:"p"},"App.js"),", define the properties of the Pok\xe9mon that need to be rendered in the card component.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For instance, let's consider Charmander:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Name: Charmander")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Image: Require from ",(0,r.kt)("inlineCode",{parentName:"p"},"assets/charmander.png"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Type: Fire")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"HP: 39")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Moves: Scratch, Ember, etc.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Weaknesses: Water and rock type Pok\xe9mon"))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { StyleSheet, SafeAreaView, Platform } from 'react-native'\nimport PokemonCard from './components/PokemonCard'\n\nexport default function App() {\n  const charmanderData = {\n    name: 'Charmander',\n    image: require('./assets/charmander.png'),\n    type: 'Fire',\n    hp: 39,\n    moves: ['Scratch', 'Ember', 'Growl', 'Leer'],\n    weaknesses: ['Water', 'Rock'],\n  }\n\n  return (\n    <SafeAreaView style={styles.container}>\n      <PokemonCard />\n    </SafeAreaView>\n  )\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    backgroundColor: '#f5f5f5',\n    paddingTop: Platform.OS === 'android' ? 25 : 0,\n  },\n})\n")),(0,r.kt)("h3",{id:"step-72--passing-properties-as-props"},"Step 7/2 : Passing Properties as Props:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Pass all these properties as props to the ",(0,r.kt)("inlineCode",{parentName:"p"},"PokemonCard")," component using the spread operator.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For instance:"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { StyleSheet, SafeAreaView, Platform } from 'react-native'\nimport PokemonCard from './components/PokemonCard'\n\nexport default function App() {\n  const charmanderData = {\n    name: 'Charmander',\n    image: require('./assets/charmander.png'),\n    type: 'Fire',\n    hp: 39,\n    moves: ['Scratch', 'Ember', 'Growl', 'Leer'],\n    weaknesses: ['Water', 'Rock'],\n  }\n\n  return (\n    <SafeAreaView style={styles.container}>\n      <PokemonCard {...charmanderData} />\n    </SafeAreaView>\n  )\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    backgroundColor: '#f5f5f5',\n    paddingTop: Platform.OS === 'android' ? 25 : 0,\n  },\n})\n")),(0,r.kt)("h3",{id:"step-8-destructuring-props"},"Step 8: Destructuring Props:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In ",(0,r.kt)("inlineCode",{parentName:"p"},"PokemonCard.js"),", destructure the properties from the component props.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"We have:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"name")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"image")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"type")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"hp")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"moves")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"weaknesses"))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { View, Text, StyleSheet, Platform } from 'react-native'\n\nexport default function PokemonCard({ name, image, type, hp, moves, weaknesses }) {\n  return (\n    <View style={styles.card}>\n      <Text>Pokemon Card</Text>\n    </View>\n  )\n}\n\nconst styles = StyleSheet.create({\n  card: {\n    backgroundColor: 'white',\n    borderRadius: 16,\n    borderWidth: 2,\n    padding: 16,\n    margin: 16,\n    ...Platform.select({\n      ios: {\n        shadowOffset: { width: 2, height: 2 },\n        shadowColor: '333',\n        shadowOpacity: 0.3,\n        shadowRadius: 4,\n      },\n      android: {\n        elevation: 5,\n      },\n    }),\n  },\n})\n")),(0,r.kt)("h3",{id:"rendering-content"},"Rendering Content:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Render all these props using the appropriate core components from React Native.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A card component will have five blocks:"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Name and HP"),(0,r.kt)("li",{parentName:"ol"},"Pok\xe9mon image"),(0,r.kt)("li",{parentName:"ol"},"Pok\xe9mon type"),(0,r.kt)("li",{parentName:"ol"},"Moves"),(0,r.kt)("li",{parentName:"ol"},"Weaknesses")))),(0,r.kt)("h3",{id:"step-9-block-one---name-and-hp"},"Step 9: Block One - Name and HP:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Render a View with name and HP text nested inside.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { View, Text, StyleSheet, Platform } from 'react-native'\n\nexport default function PokemonCard({ name, image, type, hp, moves, weaknesses }) {\n  return (\n    <View style={styles.card}>\n      <View>\n        <Text>{name}</Text>\n        <Text>{hp}</Text>\n      </View>\n    </View>\n  )\n}\n\nconst styles = StyleSheet.create({\n  card: {\n    backgroundColor: 'white',\n    borderRadius: 16,\n    borderWidth: 2,\n    padding: 16,\n    margin: 16,\n    ...Platform.select({\n      ios: {\n        shadowOffset: { width: 2, height: 2 },\n        shadowColor: '333',\n        shadowOpacity: 0.3,\n        shadowRadius: 4,\n      },\n      android: {\n        elevation: 5,\n      },\n    }),\n  },\n})\n")),(0,r.kt)("h3",{id:"step-10-block-two---pok\xe9mon-image"},"Step 10: Block Two - Pok\xe9mon Image:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Utilize the Image component to display the Pok\xe9mon image. Add an ",(0,r.kt)("inlineCode",{parentName:"li"},"accessibilityLabel")," for best practice.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { View, Text, StyleSheet, Platform, Image } from 'react-native'\n\nexport default function PokemonCard({ name, image, type, hp, moves, weaknesses }) {\n  return (\n    <View style={styles.card}>\n      <View>\n        <Text>{name}</Text>\n        <Text>{hp}</Text>\n      </View>\n\n      <Image\n        source={image}\n        accessibilityLabel={`${name} pokemon`}\n      />\n    </View>\n  )\n}\n\nconst styles = StyleSheet.create({\n  card: {\n    backgroundColor: 'white',\n    borderRadius: 16,\n    borderWidth: 2,\n    padding: 16,\n    margin: 16,\n    ...Platform.select({\n      ios: {\n        shadowOffset: { width: 2, height: 2 },\n        shadowColor: '333',\n        shadowOpacity: 0.3,\n        shadowRadius: 4,\n      },\n      android: {\n        elevation: 5,\n      },\n    }),\n  },\n})\n")),(0,r.kt)("h3",{id:"step-11-block-three---pok\xe9mon-type"},"Step 11: Block Three - Pok\xe9mon Type:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Display the Pok\xe9mon type using the Text component.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { View, Text, StyleSheet, Platform, Image } from 'react-native'\n\nexport default function PokemonCard({ name, image, type, hp, moves, weaknesses }) {\n  return (\n    <View style={styles.card}>\n      <View>\n        <Text>{name}</Text>\n        <Text>{hp}</Text>\n      </View>\n\n      <Image\n        source={image}\n        accessibilityLabel={`${name} pokemon`}\n      />\n\n      <View>\n        <Text>{type}</Text>\n      </View>\n    </View>\n  )\n}\n\nconst styles = StyleSheet.create({\n  card: {\n    backgroundColor: 'white',\n    borderRadius: 16,\n    borderWidth: 2,\n    padding: 16,\n    margin: 16,\n    ...Platform.select({\n      ios: {\n        shadowOffset: { width: 2, height: 2 },\n        shadowColor: '333',\n        shadowOpacity: 0.3,\n        shadowRadius: 4,\n      },\n      android: {\n        elevation: 5,\n      },\n    }),\n  },\n})\n")),(0,r.kt)("h3",{id:"step-12-block-four---moves"},"Step 12: Block Four - Moves:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Render a list of comma-separated moves.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { View, Text, StyleSheet, Platform, Image } from 'react-native'\n\nexport default function PokemonCard({ name, image, type, hp, moves, weaknesses }) {\n  return (\n    <View style={styles.card}>\n      <View>\n        <Text>{name}</Text>\n        <Text>{hp}</Text>\n      </View>\n\n      <Image\n        source={image}\n        accessibilityLabel={`${name} pokemon`}\n      />\n\n      <View>\n        <Text>{type}</Text>\n      </View>\n\n      <View>\n        <Text>Moves: {moves.join(', ')}</Text>\n      </View>\n    </View>\n  )\n}\n")),(0,r.kt)("h3",{id:"step-13-block-five---weaknesses"},"Step 13: Block Five - Weaknesses:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Display a list of comma-separated weaknesses.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { View, Text, StyleSheet, Platform, Image } from 'react-native'\n\nexport default function PokemonCard({ name, image, type, hp, moves, weaknesses }) {\n  return (\n    <View style={styles.card}>\n      <View>\n        <Text>{name}</Text>\n        <Text>{hp}</Text>\n      </View>\n\n      <Image\n        source={image}\n        accessibilityLabel={`${name} pokemon`}\n      />\n\n      <View>\n        <Text>{type}</Text>\n      </View>\n\n      <View>\n        <Text>Moves: {moves.join(', ')}</Text>\n      </View>\n      <View>\n        <Text>Weakness: {weaknesses.join(', ')}</Text>\n      </View>\n    </View>\n  )\n}\n\nconst styles = StyleSheet.create({\n  card: {\n    backgroundColor: 'white',\n    borderRadius: 16,\n    borderWidth: 2,\n    padding: 16,\n    margin: 16,\n    ...Platform.select({\n      ios: {\n        shadowOffset: { width: 2, height: 2 },\n        shadowColor: '333',\n        shadowOpacity: 0.3,\n        shadowRadius: 4,\n      },\n      android: {\n        elevation: 5,\n      },\n    }),\n  },\n})\n")),(0,r.kt)("h3",{id:"previewing-the-ui"},"Previewing the UI:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Save the file and preview the UI.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If you find the image appearing too large, don't worry; we'll address that shortly.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For now, you can comment it out to ensure other props are rendering correctly."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { View, Text, StyleSheet, Platform, Image } from 'react-native'\n\nexport default function PokemonCard({ name, image, type, hp, moves, weaknesses }) {\n  return (\n    <View style={styles.card}>\n      <View>\n        <Text>{name}</Text>\n        <Text>{hp}</Text>\n      </View>\n\n      {/* <Image\n        source={image}\n        accessibilityLabel={`${name} pokemon`}\n      /> */}\n\n      <View>\n        <Text>{type}</Text>\n      </View>\n\n      <View>\n        <Text>Moves: {moves.join(', ')}</Text>\n      </View>\n      <View>\n        <Text>Weakness: {weaknesses.join(', ')}</Text>\n      </View>\n    </View>\n  )\n}\n\nconst styles = StyleSheet.create({\n  card: {\n    backgroundColor: 'white',\n    borderRadius: 16,\n    borderWidth: 2,\n    padding: 16,\n    margin: 16,\n    ...Platform.select({\n      ios: {\n        shadowOffset: { width: 2, height: 2 },\n        shadowColor: '333',\n        shadowOpacity: 0.3,\n        shadowRadius: 4,\n      },\n      android: {\n        elevation: 5,\n      },\n    }),\n  },\n})\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Observe the UI, and you will now see the remaining content displayed, including name, HP, type, moves, and weaknesses.")),(0,r.kt)("p",null,"This concludes Part 3 of our tutorial. In the next video, we will delve into styling the content within this card component."))}c.isMDXComponent=!0}}]);