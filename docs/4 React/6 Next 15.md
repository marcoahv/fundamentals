---
sidebar_position: 6
---

# Next.js 15 Crash Course

---

## Introduction to Next.js

Next.js 15 is a React-based framework designed to simplify the development of full-stack web applications.

React, as a library, is designed primarily for building user interfaces and handles only the **view layer** of applications.

On the other hand, **Next.js** extends React's capabilities by offering a comprehensive set of tools for routing, optimized rendering, and data **fetching**.

Next.js provides an all-in-one solution for developers to create **production-ready applications**, eliminating the need to combine and configure multiple libraries.

Its **out-of-the-box features** make it an ideal choice for developers of all skill levels.

### **Key features of Next.js include:**

1. **Server and Client Components:**

   - Server Components optimize performance and SEO by rendering content on the server.
   - Client Components enable interactivity and manage client-side functionality.

2. **File-Based Routing:**

   - Simplifies route creation by structuring routes directly in the file system.

3. **Layouts for Shared UI:**

   - Allows for consistent headers, footers, and navigation across multiple pages.

4. **Server Actions:**

   - Facilitate secure, server-side operations for handling form submissions and data mutations.

5. **API Route Handling:**

   - Enables the creation of RESTful endpoints directly within the application.

6. **Authentication Integrations:**
   - Provides seamless integration with authentication services, supporting user management and protected routes.

With these features, Next.js is tailored for beginners wanting to learn modern web development and experienced developers looking to leverage the latest updates in **version 15** for building robust, scalable applications.

### **By the end of this crash course, you will have gained the following skills in Next.js 15:**

1. **Setting Up a Project:**  
   Learn how to initialize and configure a Next.js 15 project from scratch using the latest tools and best practices.

2. **Understanding Server and Client Components:**  
   Master the distinction between server-rendered and client-rendered components, including their specific use cases and benefits.

3. **Utilizing the App Router:**  
   Explore how to define pages and layouts using the new app router, which enables efficient routing and shared UI across pages.

4. **Navigation Techniques:**  
   Understand Next.js navigation mechanisms, including the `Link` component for client-side transitions and `useRouter` for programmatic navigation.

5. **Creating API Routes:**  
   Build RESTful API endpoints using route handlers, enabling secure data processing and retrieval directly within your Next.js application.

6. **Implementing Data Fetching Strategies:**  
   Leverage server-side and client-side data fetching techniques, including handling loading and error states automatically in server components.

7. **Data Mutation with Server Actions:**  
   Utilize server actions to securely update data and perform operations like form submissions without exposing sensitive information.

8. **Handling Authentication:**  
   Integrate authentication seamlessly with Clerk to enable user sign-up, sign-in, and conditional UI rendering, as well as protect routes and manage user sessions.

By covering these topics, you'll be equipped to build production-ready, full-stack web applications with Next.js 15.

## New Next.js Project

To get started with Next.js 15, ensure the following requirements are met:

- **Node.js 18.18 or later:** Install or update from [nodejs.org](https://nodejs.org).
- **Visual Studio Code:** Download from [code.visualstudio.com](https://code.visualstudio.com).

Once these are ready, create a new project using the command:

```bash
npx create-next-app@latest
```

This will prompt you with a series of questions:

- **Project Name:** Enter a name for your project, such as `nextjs-demo`.
- **TypeScript:** Choose `Yes` to enable TypeScript for better type safety.
- **ESLint:** Choose `Yes` to catch errors early.
- **Tailwind CSS:** Choose `Yes` for styling (used in this course).
- **Source Directory:** Choose `Yes` to organize code within a `/src` directory.
- **App Router:** Choose `Yes`, as it’s a key feature of Next.js 15.
- **TurboPack:** Choose `No` for this course.
- **Customize Default Import alias:** Choose `No` to use the default setup.

1. **Project Folder Creation:**  
   After the command runs, it will create a folder named `nextjs-demo` containing your project files.

2. **Start the Development Server:**

- Navigate to the project folder:

```bash
cd nextjs-demo
```

- Start the development server:

```bash
npm run dev
```

- The server will run on `localhost:3000`. Open the link in your browser to see the Next.js welcome page.

3. **Make Your First Edit:**

- Open **Visual Studio Code** and navigate to `src/app/page.tsx`.
- Replace the text of the second `<li>` element with `"Hello World"`.
- Save the file, and your browser will automatically refresh to display the updated text: **Hello World**.

With these steps, you have successfully set up and run your first **Next.js 15** project.

## Understanding Project Structure

When you set up a Next.js 15 project, the structure consists of folders and files designed to streamline development. Here's a detailed look at the key elements:

### **Root-Level Files and Folders**

1. **Files:**

   - `package.json`:
     - Lists project dependencies (e.g., Next.js 15, React 19, ReactDOM 19).
     - Includes scripts like `dev`, `build`, `start`, and `lint` for running and managing the application.
   - Configuration files:
     - `next.config.ts`: Configures Next.js-specific settings.
     - `tsconfig.json`: Sets TypeScript options for the project.
     - `.eslintrc.json`: Configures ESLint for code quality checks.
     - `tailwind.config.ts` and `postcss.config.mjs`: Configure Tailwind CSS for styling.
   - Supporting files:
     - `package-lock.json`: Locks dependency versions for reproducibility.
     - `.gitignore`: Specifies files and folders to ignore in version control.
     - `README.md`: Provides project documentation.
     - `.env`: Stores environment variables (e.g., API keys).

2. **Folders:**
   - `.next`:
     - Generated when you run `dev` or `build` scripts.
     - Contains compiled code and assets used by Next.js to serve the application.
   - `node_modules`:
     - Holds all installed dependencies.
   - `public`:
     - Stores static assets like images, SVGs, and favicon files.
   - `src`:
     - Houses most of the application code.

---

### **Inside the `src` Folder**

**`app` Directory (App Router):**

- **`page.tsx`:**
  - The root component of the application, associated with the root route (`/`).
  - This is where you define what renders at the root URL.
- **`layout.tsx`:**
  - Defines the root layout for the application, wrapping all pages with shared elements like headers, footers, or navigation menus.
  - Contains the `children` prop, which dynamically renders the current page component.
- **`globals.css`:**
  - Defines global styles applied throughout the application.
- **`favicon.ico`:**
  - The favicon displayed in the browser tab.
- **`fonts/`:**
  - Contains fonts referenced in the `layout.tsx` file.

---

## How the Project Works

When you run the command `npm run dev`, the following steps occur:

1. **`package.json`:** The `dev` script is executed to start the development server.
2. **`layout.tsx`:** The root layout is rendered first.
   - It defines the structure for shared UI elements across the application.
3. **`page.tsx`:** The component for the root route (`localhost:3000`) is rendered within the `children` slot of `layout.tsx`.

This modular structure simplifies routing, allows shared layouts, and organizes assets efficiently, making development intuitive and scalable.

Next, the framework uses this structure to implement **file-based routing**, a foundational feature of Next.js.

---

## React Server Components (RSCs) in Next.js

React Server Components (RSCs) are a new architecture introduced by the React team and adopted by Next.js. They provide a way to split components into two distinct types based on the environments they interact with: **Server Components** and **Client Components**.

---

### **Server Components**

- Rendered **exclusively on the server** and never sent to the client.
- This reduces the amount of JavaScript downloaded by the browser, leading to **faster page loads** and **better performance**.
- Cannot use React hooks like `useState` or `useEffect` since they don’t handle interactivity.
- Default in Next.js 15.

#### **Example: Creating a Server Component**

1. Create a new file `Greet.tsx` in the `components` folder.
   ```tsx
   export default function Greet() {
     console.log('Greet Component')
     return <h1>Hello from Server Component!</h1>
   }
   ```
2. Import and use this component in `page.tsx`.

   ```tsx
   import Greet from './components/Greet'

   export default function Home() {
     return (
       <div>
         <Greet />
       </div>
     )
   }
   ```

3. **Output:**
   - The console message ("Greet Component") will appear in the **server logs**, not in the browser’s console.
   - This confirms that the `Greet` component is server-rendered.

---

### **Client Components**

- Rendered **in the browser** and can also be rendered to HTML on the server for SEO and improved perceived performance.
- Can use React hooks like `useState`, `useEffect`, and browser-specific APIs.
- To create a client component, add `"use client"` at the top of the file.

#### **Example: Creating a Client Component**

1. Create a new file `Counter.tsx` in the `components` folder.

   ```tsx
   'use client'
   import { useState } from 'react'

   export default function Counter() {
     const [count, setCount] = useState(0)

     return (
       <div>
         <p>Clicked {count} times</p>
         <button onClick={() => setCount(count + 1)}>Click Me</button>
       </div>
     )
   }
   ```

2. Import and use this component in `page.tsx`.

   ```tsx
   import Counter from './components/Counter'

   export default function Home() {
     return (
       <div>
         <Counter />
       </div>
     )
   }
   ```

3. **Output:**
   - The counter displays click interactions and updates state dynamically in the browser.

---

### **Key Differences Between Server and Client Components**

| Feature                | Server Components                                        | Client Components                                 |
| ---------------------- | -------------------------------------------------------- | ------------------------------------------------- |
| **Rendering Location** | Server                                                   | Browser (and optionally server for initial HTML)  |
| **Performance**        | High (less JavaScript)                                   | Moderate (includes JavaScript for interactivity)  |
| **Interactivity**      | None                                                     | Fully supports hooks and event listeners          |
| **Use Case**           | Fetching data, accessing sensitive server-side resources | Handling user interactions, browser-specific APIs |

---

### **Best Practices**

- Use **Server Components** whenever possible for better performance and efficiency.
- Reserve **Client Components** for interactive and event-driven UI elements.
- In an ideal structure, client components should be **leaf nodes** of the component tree, embedded within server components.

This distinction helps maximize the performance benefits of React Server Components while ensuring interactivity where needed.

---

## Routing and Navigation in Next.js

Routing in Next.js is based on a **file system structure**, making it intuitive and efficient.

The way you organize your files and folders within the `app` directory determines the routes of your application.

---

### **File-Based Routing**

1. **Basic Conventions:**

   - Routes are defined inside the `app` folder.
   - Each route corresponds to a file named `page.js` or `page.tsx`.
   - Folder names represent URL path segments.

   **Example:**

   - `app/page.tsx` → Root route `/`
   - `app/about/page.tsx` → `/about`

2. **Creating a Route:**

   - Create a folder inside the `app` directory.
   - Add a `page.tsx` file within that folder.
   - Export a React component as default in the file.

   **Example:**

   ```tsx
   // app/about/page.tsx
   export default function About() {
     return <h1>About Page</h1>
   }
   ```

   Navigate to `http://localhost:3000/about` to view the route.

---

### **Nested and Dynamic Routing**

1. **Nested Routes:**

   - Create nested folders to structure routes like `/blog/posts`.

   **Example:**

   ```
   app/
     blog/
       posts/
         page.tsx
   ```

   This structure maps to `/blog/posts`.

2. **Dynamic Routes:**

   - Use square brackets (`[]`) in folder names to define dynamic segments.
   - These segments act as parameters in the route.

   **Example:**

   ```
   app/products/[id]/page.tsx
   ```

   Dynamic parameter `id` can be accessed in the component:

   ```tsx
   export default async function Product({ params }: { params: { id: string } }) {
     return <h1>Product ID: {params.id}</h1>
   }
   ```

   Visiting `/products/123` will display `Product ID: 123`.

---

### **Route Groups**

Route groups allow logical organization of routes without affecting the URL structure.

- Wrap folder names in parentheses for grouping, e.g., `(auth)` for authentication-related routes.

**Example:**

```
app/(auth)/
    login/page.tsx → `/login`
    register/page.tsx → `/register`
```

---

### **Layouts and Shared UI**

1. **Root Layouts:**

   - Define global layouts for shared elements like headers and footers using `layout.tsx`.

   ```tsx
   // app/layout.tsx
   export default function RootLayout({ children }: { children: React.ReactNode }) {
     return (
       <html>
         <body>
           <header>Welcome to Next.js</header>
           {children}
           <footer>© 2024</footer>
         </body>
       </html>
     )
   }
   ```

2. **Nested Layouts:**

   - Apply specific layouts to route segments.
   - Nested layouts extend the root layout.

   **Example:**

   ```
   app/products/[id]/layout.tsx → Applies layout to `/products/:id` routes.
   ```

---

### **Navigation in Next.js**

1. **Link Component:**

   - Use the `Link` component for client-side navigation.
   - Prevents full-page reloads, preserves state, and enhances performance.

   ```tsx
   import Link from 'next/link'

   export default function Navigation() {
     return (
       <nav>
         <Link href='/'>Home</Link>
         <Link href='/about'>About</Link>
       </nav>
     )
   }
   ```

2. **Programmatic Navigation:**

   - Use the `useRouter` hook to navigate dynamically.

   ```tsx
   import { useRouter } from 'next/navigation'

   export default function NavigateButton() {
     const router = useRouter()

     return <button onClick={() => router.push('/')}>Go Home</button>
   }
   ```

3. **Active Links:**

   - Style active links based on the current route using `usePathname`.

   ```tsx
   'use client'
   import Link from 'next/link'
   import { usePathname } from 'next/navigation'

   export default function Navigation() {
     const pathname = usePathname()

     return (
       <nav>
         <Link
           href='/'
           className={pathname === '/' ? 'active' : ''}>
           Home
         </Link>
         <Link
           href='/about'
           className={pathname === '/about' ? 'active' : ''}>
           About
         </Link>
       </nav>
     )
   }
   ```

---

### **Route Handlers**

Beyond UI routes, Next.js allows creating API endpoints directly within the `app` directory using `route.ts` files.

**Example:**

- Create a `users` folder with a `route.ts` file:

  ```tsx
  // app/users/route.ts
  const users = [{ id: 1, name: 'John Doe' }]

  export async function GET() {
    return new Response(JSON.stringify(users), {
      headers: { 'Content-Type': 'application/json' },
    })
  }
  ```

  Access the endpoint at `http://localhost:3000/users`.

- Dynamic API routes work similarly with folders named `[param]`:
  ```tsx
  // app/users/[id]/route.ts
  export async function GET(request: Request, { params }: { params: { id: string } }) {
    const user = users.find(u => u.id === parseInt(params.id))
    return user
      ? new Response(JSON.stringify(user))
      : new Response('User not found', { status: 404 })
  }
  ```

This approach combines API and UI logic seamlessly, making Next.js a full-stack framework.

---

## Fetching Data in Next.js

Next.js 15 offers robust data-fetching capabilities, bridging the gap between frontend and backend development. Here’s how data can be fetched and managed in **Client Components** and **Server Components**:

---

### **1. Fetching Data in Client Components**

This approach is similar to traditional React. Data is fetched on the client side after the page loads.

#### **Steps:**

1. Create a new folder in the `app` directory named `users-client`.
2. Add a `page.tsx` file in the folder.
3. Define a React component that:
   - Uses hooks like `useState` and `useEffect` to fetch data.
   - Tracks `loading` and `error` states.

#### **Code Example:**

```tsx
'use client'
import { useState, useEffect } from 'react'

type User = {
  id: number
  name: string
  username: string
  email: string
  phone: string
}

export default function UsersClient() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await res.json()
        setUsers(data)
      } catch (err) {
        setError('Failed to fetch users.')
      } finally {
        setLoading(false)
      }
    }
    fetchUsers()
  }, [])

  if (loading) return <div>Loading...</div>
  if (error) return <div style={{ color: 'red' }}>{error}</div>

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          {user.name} - {user.email}
        </li>
      ))}
    </ul>
  )
}
```

#### **Output:**

Navigate to `/users-client` in your browser to see the list of users displayed.

---

### **2. Fetching Data in Server Components**

Next.js allows direct server-side data fetching within components using `async/await`, making the code cleaner and more efficient.

#### **Steps:**

1. Create a new folder in the `app` directory named `users-server`.
2. Add a `page.tsx` file in the folder.
3. Use server-side fetching in an async function.

#### **Code Example:**

```tsx
type User = {
  id: number
  name: string
  username: string
  email: string
  phone: string
}

export default async function UsersServer() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const users: User[] = await res.json()

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          {user.name} - {user.email}
        </li>
      ))}
    </ul>
  )
}
```

#### **Output:**

Navigate to `/users-server` to see the same data, now fetched server-side.

---

### **3. Handling Loading and Error States Automatically**

Next.js uses conventions like `loading.tsx` and `error.tsx` for handling these states in **Server Components**.

#### **Steps for `loading.tsx`:**

1. Create a `loading.tsx` file in the `users-server` folder.
2. Define a React component to show a loading message.

**Code Example:**

```tsx
export default function Loading() {
  return <div>Loading users...</div>
}
```

#### **Steps for `error.tsx`:**

1. Create an `error.tsx` file in the `users-server` folder.
2. Add the `use client` directive and handle errors.

**Code Example:**

```tsx
'use client'
import { useEffect } from 'react'

export default function Error({ error }: { error: Error }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return <div style={{ color: 'red' }}>Error fetching users data.</div>
}
```

#### **Testing States:**

1. **Loading State:** Add a delay in the `page.tsx` server component.
   ```tsx
   await new Promise(resolve => setTimeout(resolve, 2000))
   ```
2. **Error State:** Use an incorrect URL in the `fetch` function.

#### **Output:**

The loading spinner appears while data is being fetched, and error messages are displayed for any failures.

---

### **Key Differences Between Client and Server Fetching**

| Feature                | Client Components                  | Server Components                   |
| ---------------------- | ---------------------------------- | ----------------------------------- |
| **Rendering Location** | Browser                            | Server                              |
| **Code Simplicity**    | Requires hooks (`useEffect`)       | Direct use of `async/await`         |
| **Performance**        | Slower (data fetched after render) | Faster (data fetched before render) |
| **SEO Benefits**       | Minimal                            | High                                |

---

### **Best Practices for Data Fetching in Next.js**

- Use **Server Components** whenever possible for better performance, SEO, and reduced JavaScript bundle sizes.
- Opt for **Client Components** only when:
  - Real-time updates are needed.
  - Data fetching depends on client-side user interactions.

With Next.js 15, server components are the preferred choice for most data-fetching scenarios, providing significant improvements in efficiency and developer experience.

---

## Server Actions in Next.js

**Server Actions** in Next.js are asynchronous functions executed on the server, designed to handle operations like form submissions, data updates, and secure database interactions. They eliminate the need for exposing sensitive data such as API keys in the client-side code.

---

### **Benefits of Server Actions**

1. **Server-Side Execution:**
   - Keeps sensitive data secure by executing logic on the server.
   - Simplifies data-handling processes without needing separate route handlers.
2. **Direct Integration with Components:**
   - Server actions can be defined and used directly within components.
3. **Automatic Updates:**
   - Enable seamless updates to data and UI without manual page reloads.

---

### **Example: Adding a New User with Server Actions**

#### **1. Setting up the Environment:**

- Use [MockAPI.io](https://mockapi.io) to simulate a backend.
  - Create an account and set up a project named `nextjs`.
  - Add a resource called `users` with fields `id` and `name`.
  - Set up 25 mock users and copy the API endpoint URL.

---

#### **2. Fetch and Display Users**

1. Create a new folder in the `app` directory called `mock-users`.
2. Add a `page.tsx` file to fetch and display the users.

**Code Example:**

```tsx
type User = { id: string; name: string }

export default async function MockUsers() {
  const res = await fetch('https://your-mockapi-endpoint/users')
  const users: User[] = await res.json()

  return (
    <div>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}
```

Visit `/mock-users` in your browser to see the list of users.

---

#### **3. Adding a Form to Create Users**

Extend the UI to include a form for adding new users.

**Updated Code Example:**

```tsx
import { revalidatePath } from 'next/cache'

type User = { id: string; name: string }

export default async function MockUsers() {
  const res = await fetch('https://your-mockapi-endpoint/users')
  const users: User[] = await res.json()

  async function addUser(formData: FormData) {
    'use server' // Mark as server action
    const name = formData.get('name') as string

    await fetch('https://your-mockapi-endpoint/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name }),
    })

    revalidatePath('/mock-users') // Revalidate the page to reflect changes
  }

  return (
    <div>
      <form action={addUser}>
        <input
          type='text'
          name='name'
          required
          placeholder='Enter user name'
        />
        <button type='submit'>Add User</button>
      </form>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}
```

---

#### **4. How It Works**

- **`addUser` Function:**
  - A server action marked with `"use server"`.
  - Handles the form submission and sends a POST request to the MockAPI backend.
- **Revalidate Path:**
  - After the user is added, the `revalidatePath("/mock-users")` function refreshes the data displayed on the page without a full reload.

---

### **Testing the Functionality**

1. Navigate to `/mock-users`.
2. Fill in a name in the input field and click **Add User**.
3. The new user appears in the list automatically without refreshing the page.

---

### **Advantages of Server Actions in This Use Case**

- **Security:** Sensitive API keys remain on the server.
- **Convenience:** Combines server-side logic and component UI in one place.
- **Efficiency:** Updates the UI seamlessly after performing backend operations.

With server actions, Next.js streamlines server-side data updates, making it ideal for modern full-stack applications.

---

## Authentication in Next.js with Clerk

Authentication is a critical part of modern web applications, and **Clerk** simplifies this process in **Next.js**. Clerk provides tools for user sign-up, sign-in, and session management, while integrating seamlessly with Next.js 15.

---

### **Goals of Authentication Implementation**

1. Allow users to sign up and sign in.
2. Enable users to manage their accounts.
3. Show UI elements conditionally based on authentication status.
4. Protect routes that require authentication.
5. Read session and user data securely.
6. Provide a way for users to sign out.

---

### **Step-by-Step Setup and Implementation**

#### **1. Setting Up Clerk**

1. **Create a Clerk Account:**

   - Go to [Clerk.com](https://clerk.com) and create an account.
   - Set up a new application (e.g., "Next.js App").
   - Enable sign-in methods like email/password, Google, or GitHub.

2. **Install Clerk in Your Project:**

   - Run the following command in your terminal:
     ```bash
     npm install @clerk/nextjs
     ```

3. **Add API Keys to Environment Variables:**

   - Create a `.env.local` file in the root of your project.
   - Add your **Clerk Publishable Key** and **Clerk Secret Key** (available in the Clerk dashboard).
     ```env
     CLERK_PUBLISHABLE_KEY=your_publishable_key
     CLERK_SECRET_KEY=your_secret_key
     ```

4. **Set Up Middleware for Protected Routes:**

   - Create a `middleware.ts` file in the `src` folder.
   - Add the following code:

     ```tsx
     import { authMiddleware } from '@clerk/nextjs'

     export default authMiddleware({
       publicRoutes: ['/'], // Define public routes here
     })

     export const config = {
       matcher: ['/((?!.*\\..*|_next).*)'], // Apply middleware to all routes
     }
     ```

5. **Wrap Your Application with Clerk Provider:**

   - Update the `layout.tsx` file to include the `ClerkProvider`:

     ```tsx
     import { ClerkProvider } from '@clerk/nextjs'

     export default function RootLayout({ children }: { children: React.ReactNode }) {
       return (
         <ClerkProvider>
           <html>
             <body>{children}</body>
           </html>
         </ClerkProvider>
       )
     }
     ```

---

#### **2. Adding Sign-In and User Management**

1. **Sign-In Button:**

   - Use Clerk’s `SignInButton` to enable user login.
   - Add this to your navigation or header component:

     ```tsx
     import { SignInButton } from '@clerk/nextjs'

     export default function Navigation() {
       return <SignInButton mode='modal' />
     }
     ```

2. **User Button:**

   - Display account management options for logged-in users with the `UserButton`:

     ```tsx
     import { UserButton } from '@clerk/nextjs'

     export default function Navigation() {
       return <UserButton />
     }
     ```

---

#### **3. Conditional Rendering Based on Authentication Status**

Use Clerk’s `SignedIn` and `SignedOut` components to conditionally render UI elements.

**Example:**

```tsx
import { SignedIn, SignedOut } from '@clerk/nextjs'

export default function Navigation() {
  return (
    <nav>
      <SignedOut>
        <SignInButton mode='modal' />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </nav>
  )
}
```

---

#### **4. Protecting Routes**

Use Clerk’s middleware to restrict access to specific routes.

**Example:**

- Protect `/protected-route` by adding it to the middleware matcher.
- Unauthenticated users will be redirected to the sign-in page.

---

#### **5. Accessing User and Session Data**

Clerk provides hooks like `useAuth` and `useUser` to access user and session details.

**Example (Server Component):**

```tsx
import { auth } from '@clerk/nextjs'

export default async function ProtectedPage() {
  const { userId } = auth()

  if (!userId) {
    return <div>You need to sign in</div>
  }

  return <div>Welcome, user {userId}!</div>
}
```

**Example (Client Component):**

```tsx
'use client'
import { useAuth, useUser } from '@clerk/nextjs'

export default function Profile() {
  const { isLoaded, isSignedIn } = useAuth()
  const { user } = useUser()

  if (!isLoaded) return null

  if (!isSignedIn) {
    return <div>Please sign in</div>
  }

  return <div>Welcome, {user?.emailAddresses[0].emailAddress}!</div>
}
```

---

#### **6. Testing the Authentication Flow**

1. Navigate to your app and test the following:

   - Sign up with email/password or a social provider (e.g., Google).
   - Log in and check if account management options appear.
   - Visit protected routes as a logged-in and logged-out user.

2. Use the console or network tab to verify session and user data.

---

### **Summary of Authentication Goals Achieved**

1. **Sign-Up/Sign-In:** Users can log in or register with multiple authentication methods.
2. **Account Management:** Logged-in users can manage their profiles and passwords.
3. **Conditional Rendering:** UI elements are displayed based on authentication status.
4. **Route Protection:** Unauthenticated users are redirected from protected routes.
5. **Session and User Data:** Access user details securely in server and client components.
6. **Sign-Out:** Users can log out with ease.

Clerk streamlines the authentication process, allowing you to focus on building features without worrying about security or session management complexities.

---

## Next Steps

This **Next.js 15 Crash Course** has covered the core features that make Next.js a powerful framework for building modern and efficient web applications. Here's a recap of what we've learned:

1. **Project Setup:**

   - Creating and configuring a Next.js project from scratch.

2. **Server and Client Components:**

   - Leveraging React Server Components for better performance and SEO.
   - Understanding when to use Client Components for interactivity.

3. **Routing and Layouts:**

   - File-based routing, dynamic routes, and route groups.
   - Shared layouts for consistent UI elements.

4. **Data Fetching:**

   - Fetching data with both Server and Client Components.
   - Handling loading and error states effectively.

5. **Server Actions:**

   - Securely updating data and handling form submissions directly in components.

6. **Authentication:**
   - Implementing authentication with Clerk, including user management and protected routes.

---

### **Continue Learning with the Next.js 15 Series**

If you’re ready to take your skills to the next level, I’ve created a **comprehensive Next.js 15 series** on YouTube. This free series dives deeper into advanced concepts, including:

- **Advanced Routing Techniques:** Nested routes, dynamic paths, and route matching.
- **Metadata and Middleware:** Managing SEO and handling requests efficiently.
- **Rendering Strategies:**
  - Client-Side Rendering (CSR)
  - Server-Side Rendering (SSR)
  - Suspense with SSR
  - Static Site Generation (SSG)
- **Caching and Performance Optimization:** Strategies for faster web applications.
- **In-Depth Server Actions:** Detailed use cases and advanced implementations.
- **Styling and the Image Component:** Best practices for styling and optimizing media.
- **Advanced Authentication:** Deep dive into integrating authentication and authorization workflows.

---

### **Subscribe for More**

To stay updated with the series:

- **Subscribe** to my YouTube channel.
- **Turn on notifications** to catch every new video.

If this crash course was helpful, don’t forget to hit the **like button** and share it with others who want to learn Next.js!

Thank you for joining this crash course. I’ll see you in the next tutorial as we continue to master Next.js together! 🚀
