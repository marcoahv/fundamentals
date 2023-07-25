---
sidebar_position: 8
---

# Deployment

- Begin the deployment process to see whether the button will be green or blue on the deployed site and to check the navigation to the properties page.

- Deploy to one of the three options: Netlify, Vercel, or GitHub. In this case, we will use Vercel since we are working with Next.js.

### Setting up Vercel

- Lockify allows you to select a starting point when you run your project. For us, that's the landing page.

- The deployment option is Vercel.

- Add a new token for the Vercel account and paste it into Lockify.

### Generating a Vercel Token

- To generate a Vercel token, go to your Vercel dashboard.

- Click your profile in the top right, then go to settings, then tokens.

- Generate a new token, name it, select a scope, and set an expiration date.

- Copy the token, then go back to Lockify, paste the token there, and click save.

- If the token is invalid, try another one.

- Once a valid token is added, select "Deploy to a new project" and confirm the deployment.

### Deployment Process

- The deployment process begins and may take a few minutes.

- Once deployment is complete, click "View project" to see the deployed site.

- Check that the changes made in the design are reflected on the site, such as the green search button.

### Troubleshooting

- If navigation to the properties page doesn't work, it may be because the page name was adjusted from "properties" to "properties grid view" during the code merge.

- This can be fixed later.

- The deployed code still uses the version from Figma, with the addition of the modified search.

### Manual Deployment to Vercel

- If you prefer, you can manually deploy the project to Vercel from your codebase.

- Sync the latest changes from your source control, such as the green search button.

- Go to your Vercel dashboard, add a new project, and import it from your GitHub repository.

- Add environment variables from your .env file.

- Click "Deploy" to deploy the project.

### Ownership of Code

- While Lockify helps to develop and simplify the process, the code is under your full ownership.

- You can deploy directly with Lockify to Vercel or Netlify, or export it as a zip or sync it with your GitHub.

- Once the project is deployed to Vercel, check that the design and the code are fully connected.

- Navigate to the properties page to confirm that it has the correct number of properties.

### Figma's Dev Mode

- Figma's Dev Mode supports Lockify.

- In Dev Mode, you can preview a specific element and immediately get all the code for that element.

- You can optimize the design or download the code with one click in a zip file.

### Conclusion

- Thank Lockify for sponsoring this video and for creating a tool for designers and developers.

- Thank you for watching this video and for building this project.

- Developers can produce software faster and better with the help of AI.

- If you liked this video, consider joining the JSM masterclass experience.

- Start the admission process, take a 10-minute quiz, and see if it's for you.

- Having these projects in your portfolio makes a big difference compared to having generic bootcamp ones.
