"use strict";(self.webpackChunkfundamentals=self.webpackChunkfundamentals||[]).push([[1842],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),h=a,m=c["".concat(s,".").concat(h)]||c[h]||d[h]||o;return n?i.createElement(m,r(r({ref:t},u),{},{components:n})):i.createElement(m,r({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},832:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var i=n(7462),a=(n(7294),n(3905));const o={sidebar_position:2},r="Setting Up Git & GitHub",l={unversionedId:"3 Javascript/shopping-list-project-docs/setting-up-git",id:"3 Javascript/shopping-list-project-docs/setting-up-git",title:"Setting Up Git & GitHub",description:"Git is a version control systems that is used to track changes in code. It is a very powerful tool that is very important to learn as a developer. It is used in many different ways, but we will be using it to track changes in our code as we build our shopping list app.",source:"@site/docs/3 Javascript/08-shopping-list-project-docs/02-setting-up-git.md",sourceDirName:"3 Javascript/08-shopping-list-project-docs",slug:"/3 Javascript/shopping-list-project-docs/setting-up-git",permalink:"/fundamentals/3 Javascript/shopping-list-project-docs/setting-up-git",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Add Items To List",permalink:"/fundamentals/3 Javascript/shopping-list-project-docs/add-items-to-list"},next:{title:"Remove & Clear Items",permalink:"/fundamentals/3 Javascript/shopping-list-project-docs/remove-clear-items"}},s={},p=[{value:"Installing Git",id:"installing-git",level:3},{value:"Init Git",id:"init-git",level:3},{value:"Add Files To Git",id:"add-files-to-git",level:3},{value:"Commit Files",id:"commit-files",level:3},{value:"Setup SSH keys for GitHub",id:"setup-ssh-keys-for-github",level:3},{value:"Adding the SSH Key to GitHub",id:"adding-the-ssh-key-to-github",level:3},{value:"Push To GitHub",id:"push-to-github",level:3},{value:"Updating the remote repo",id:"updating-the-remote-repo",level:3}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"setting-up-git--github"},"Setting Up Git & GitHub"),(0,a.kt)("p",null,"Git is a version control systems that is used to track changes in code. It is a very powerful tool that is very important to learn as a developer. It is used in many different ways, but we will be using it to track changes in our code as we build our shopping list app."),(0,a.kt)("p",null,"The basic workflow is:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Make changes to your code"),(0,a.kt)("li",{parentName:"ol"},"Add the changes to the staging area"),(0,a.kt)("li",{parentName:"ol"},"Commit the changes to the repository"),(0,a.kt)("li",{parentName:"ol"},"Push the changes to GitHub (or something else like BitBucket)")),(0,a.kt)("h3",{id:"installing-git"},"Installing Git"),(0,a.kt)("p",null,"Git is a command line tool, so you will need to install it on your computer. You can download it from ",(0,a.kt)("a",{parentName:"p",href:"https://git-scm.com/"},"git-scm.com"),". You can use the default settings when installing. If you are on a Mac, you can also install it using Homebrew."),(0,a.kt)("p",null,"If you are on Windows, you can also install Git Bash, which is a ",(0,a.kt)("inlineCode",{parentName:"p"},"bash")," terminal that comes with Git. You can use this instead of the regular Windows command prompt."),(0,a.kt)("h3",{id:"init-git"},"Init Git"),(0,a.kt)("p",null,"Once you install Git, go to the project folder in your command line. VS Code has a built in terminal that you can use, which is what I prefer. Enter the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git init\n")),(0,a.kt)("p",null,"This creates a hidden ",(0,a.kt)("inlineCode",{parentName:"p"},".git")," folder in your project folder. This is where all of the Git information is stored."),(0,a.kt)("h3",{id:"add-files-to-git"},"Add Files To Git"),(0,a.kt)("p",null,"Now that we have Git initialized, we need to add the files we want to track to Git. We can do this by entering the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git add .\n")),(0,a.kt)("p",null,"The files are now in the staging area. We can see what files are in the staging area by entering the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git status\n")),(0,a.kt)("h3",{id:"commit-files"},"Commit Files"),(0,a.kt)("p",null,"Now that we have the files in the staging area, we can commit them to the repository. We can do this by entering the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'git commit -m "Initial Commit"\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"-m")," flag is used to add a message to the commit. This is a good practice to get into. It is a good idea to make your commit messages descriptive. This will help you and others understand what changes were made in the commit."),(0,a.kt)("p",null,"Call it ",(0,a.kt)("inlineCode",{parentName:"p"},"shopping-list")," or whatever you'd like."),(0,a.kt)("h3",{id:"setup-ssh-keys-for-github"},"Setup SSH keys for GitHub"),(0,a.kt)("p",null,"Now that we have a remote repo, we need to add an SSH key to GitHub. This will allow us to push our code to GitHub. We can do this by entering the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'ssh-keygen -t rsa -b 4096 -C "\n')),(0,a.kt)("p",null,"This will create a new SSH key. You can press enter to accept the default file location and the default name of ",(0,a.kt)("inlineCode",{parentName:"p"},"id_rsa")," or you can type in a custom name and location. I like to name my key files for the service I am using it for, so I would do something like"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/Users/brad/ssh/id_rsa_github\n")),(0,a.kt)("p",null,"You will then be prompted to enter a passphrase. You can leave this blank by pressing enter."),(0,a.kt)("p",null,"This will create a private key file and a public key file. The public key file will have the same name as the private key file, but with ",(0,a.kt)("inlineCode",{parentName:"p"},".pub")," at the end. You can view the contents of the public key file by entering the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cat ~/.ssh/id_rsa_github.pub\n")),(0,a.kt)("h3",{id:"adding-the-ssh-key-to-github"},"Adding the SSH Key to GitHub"),(0,a.kt)("p",null,"Copy the contents of the public key file. Then go to your GitHub account and click on your profile picture in the top right corner. Then click ",(0,a.kt)("inlineCode",{parentName:"p"},"Settings"),". Then click ",(0,a.kt)("inlineCode",{parentName:"p"},"SSH and GPG keys"),". Then click ",(0,a.kt)("inlineCode",{parentName:"p"},"New SSH key"),". Give it a title and paste the contents of the public key file into the ",(0,a.kt)("inlineCode",{parentName:"p"},"Key")," field. Then click ",(0,a.kt)("inlineCode",{parentName:"p"},"Add SSH key"),"."),(0,a.kt)("h3",{id:"push-to-github"},"Push To GitHub"),(0,a.kt)("p",null,"Next, we need to setup a remote repo at GitHub. We can do this by going to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com"},"github.com")," and creating a new repository. Login and click the ",(0,a.kt)("inlineCode",{parentName:"p"},"+")," icon in the top right corner. Then click ",(0,a.kt)("inlineCode",{parentName:"p"},"New repository"),". Give it a name and click ",(0,a.kt)("inlineCode",{parentName:"p"},"Create repository"),"."),(0,a.kt)("p",null,"Now that we have a remote repo, we need to push our files to it. Start copying the ",(0,a.kt)("inlineCode",{parentName:"p"},"git remote")," command that you see on the repo page"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git remote add origin YOUR_REMOTE_REPO_URL\n")),(0,a.kt)("p",null,"Then specify the branch you want to push to, We will use the main branch."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git branch -M main\n")),(0,a.kt)("p",null,"Finally, push the files to the remote repo."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git push -u origin main\n")),(0,a.kt)("p",null,"Now, you should see your files in the remote repo."),(0,a.kt)("h3",{id:"updating-the-remote-repo"},"Updating the remote repo"),(0,a.kt)("p",null,"Anytime you update your code and you want to push to github, you simply add the files to the staging area, commit them, and push them to the remote repo."),(0,a.kt)("p",null,"Let's cerate a readme file called readme.md. Add the following to the readme file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-md"},"# Shopping List App\n\nThis is a shopping list app that I created using HTML, CSS, and JavaScript.\n")),(0,a.kt)("p",null,"This is a ",(0,a.kt)("inlineCode",{parentName:"p"},"markdown")," file. You can learn more about markdown ",(0,a.kt)("a",{parentName:"p",href:"https://www.markdownguide.org/"},"here"),"."),(0,a.kt)("p",null,"Now push to your remote repo:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'git add .\ngit commit -m "Update"\ngit push\n')),(0,a.kt)("p",null,"The readme file contents will show up on the repo page."))}d.isMDXComponent=!0}}]);