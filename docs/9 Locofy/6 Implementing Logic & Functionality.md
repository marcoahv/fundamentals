---
sidebar_position: 6
---

# Implementing Logic & Functionality

### Getting Started with Super Bass

- Visit superbass.com and sign up or sign in.

- Click "Start your project".

- Create a new project, such as "Lockify Real Estate".

- Choose a database password and remember it.

- Select the region and stay on the free pricing plan.

- Click "Create your new project".

### Creating the Database

- Go to "Table Editor" and create a new table named "Properties".

- Disable RLS security for easier access.

- Add new columns: ID, created, name (text), image (text), and price (INT 8).

- Save the changes.

### Importing Real Estate Properties

- Go to "Insert" and click "Import data from CSV".

- Find the CSV file containing demo properties.

- Copy and paste the file to import seven properties.

- Click "Import data" to add the properties to our table.

### Installing Super Bass

- Stop the terminal by pressing Ctrl+C and then Y.

- Clear the terminal and run `npm install add Super Bass forward slash Super Bass Dash JS` .

- Wait for the installation to complete.

### Fetching the Properties

- Import `create client` from `at Super Bass forward slash Superbass Dash JS` .

- Use `const client = create client` and pass the super base URL and key.

- Create a new `use effect` hook to fetch the properties.

- Define an async function called `const Fetch properties` .

- Use `const result = await client Dot from properties` and then `dot select` to fetch everything.

- Create a `use State` field called `properties` and set it to an empty array.

- Set `properties` to `result dot data` .

- Call `fetch properties` within the `use effect` .

### Using the Properties in Our Application

- Import `use effect` and `use State` from React.

- Modify the `properties grid container` to use the real data.

- Map through all the properties and delete the repetitive card components.

- Return a `property card` component with the key, image URL, name, and price.

### Modifying the Card to Show the Data

- Remove the `use memo` and `card 1` style.

- Replace the price with the price from props.

- Replace the address with the name from props.

### Keeping Your Design and Code in Sync

- Lockify can keep your design and code in sync.

- Make changes in Figma and easily update your code.

- This feature saves time and ensures design and code consistency.
