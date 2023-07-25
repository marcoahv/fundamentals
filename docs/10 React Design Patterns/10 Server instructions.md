---
sidebar_position: 10
---

# Server instructions

- To run the server, type `node server.js` in the root directory after running `npm install` .

- Make sure the server is running before proceeding.

### CurrentUserLoader component

- Create a new file called `current_user_loader.js` inside the source folder.

- The component structure:

```jsx
export const CurrentUserLoader = ({ children }) => {
  const [user, setUser] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('/current-user')
      const currentUser = response.data
      setUser(currentUser)
    }
    fetchData()
  }, [])
  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { user })
        }
        return child
      })}
    </>
  )
}
```

### Usage in the app

- Import the `CurrentUserLoader` and `UserInfo` components.

- Use the `CurrentUserLoader` component to load the current user data and pass it to the `UserInfo` component.

```jsx
import { CurrentUserLoader } from './current_user_loader'
import { UserInfo } from './user_info'
// Inside the render method
;<CurrentUserLoader>
  <UserInfo />
</CurrentUserLoader>
```

### User Info and Product Info Components

- The `UserInfo` and `ProductInfo` components are modified versions of the `LargePersonListItem` and `LargeProductListItem` components.

- They take a `user` and `product` prop respectively to display the data.

- Example usage:

```jsx
const UserInfo = ({ user }) => {
  // JSX to display user information
}
const ProductInfo = ({ product }) => {
  // JSX to display product information
}
```

### Server.js

- The `server.js` file contains a simple Express server that simulates a full-stack React app.

- It provides endpoints to fetch user and product data.

- The server runs on port 8080.

- Run the server using `node server.js` in the root directory after running `npm install` .
