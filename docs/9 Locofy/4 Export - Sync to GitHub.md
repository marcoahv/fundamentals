---
sidebar_position: 4
---

# Export - Sync to GitHub

- To export our code and sync it with GitHub, follow these steps:

- Choose the "Sync Project" option.

- Connect to GitHub by logging in and authorizing the connection.

- Create a new repository or choose an existing one.

- Type a repository name and click "Confirm Repo and Branch".

- On the left side, you can see your GitHub code, while on the right side, you can see your code within Local Fight Builder.

- Click "Push to GitHub" to sync your code. This process may take a few minutes.

- After pushing the project to GitHub, you can explore the smart merging functionalities to resolve conflicts between Local Fight Builder and your GitHub repo.

- Go to the repository to see the newly pushed repo. It is a Next.js application with the pages folder containing two pages: app.js and landing page.

- The code within the repo is exactly as you would write it, including imports and global CSS.

- Additionally, there are pre-created components provided by Lookify, making it convenient to use the header code and preferred styling method (e.g., Tailwind).

- To clone the repo and run it locally on your machine, follow these steps:

  - Click the green "Code" button and either open it with GitHub Desktop or copy the HTTPS clone link.

  - Create a new empty folder on your desktop, such as "real estate".

  - Drag and drop the cloned repo into the empty folder.

  - Open the folder in Visual Studio Code and go to "View" > "Terminal".

  - Clone the repo by running the command "git clone [paste the URL]".

  - CD into the cloned folder.

  - Explore the code within the folder.

- To have a cleaner file tree, right-click the cloned folder, select "Reveal in File Explorer", and drag and drop it back into Visual Studio Code as a separate folder.

- The cloned repo is a complete Next.js application with proper Tailwind configuration, allowing you to extend colors, font families, border radiuses, and more.

- Install the dependencies listed in the package.json file by running "npm install".

- Run the application on localhost 3000 by running "npm run dev".

- Click the localhost link to access the app.
