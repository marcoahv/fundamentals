---
sidebar_position: 9
---

# Container Components

Container components are a React design pattern that handles data loading and management for their child components. They allow for sharing logic and passing data automatically to child components.

#### Purpose of Container Components

The main purpose of container components is to separate the data loading and management logic from the child components. This allows the child components to be "dumb" and only focus on displaying the data they receive as props.

#### Example Scenario

Consider a setup with a container component and several child components. In a typical scenario, each child component would handle its own data loading using hooks like useState and useEffect, and libraries like axios or fetch to fetch data from a server.

# Problem with Individual Data Loading

The problem with individual data loading in child components is that it can lead to code duplication and difficulty in sharing logic between components.

#### Solution: Container Components

Container components solve this problem by extracting the data loading and management logic into a separate component (the container). The container component takes care of loading the data and passes it automatically to the child components.

#### Benefits of Container Components

- Allows for code reusability and sharing logic between child components.
- Separates concerns by keeping data loading and management separate from the child components.
- Child components can focus on displaying data without worrying about where it comes from or how it is managed.

#### Implementation Example

```jsx
const ContainerComponent = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    // Fetch data from server using axios or fetch
    // Set the data using setData
  }, [])
  return (
    <>
      <ChildComponent1 data={data} />
      <ChildComponent2 data={data} />
      <ChildComponent3 data={data} />
    </>
  )
}
```

In the above example, the ContainerComponent handles the data loading and passes the data as props to the child components (ChildComponent1, ChildComponent2, ChildComponent3). This way, the child components can focus on displaying the data without worrying about the data loading logic.
