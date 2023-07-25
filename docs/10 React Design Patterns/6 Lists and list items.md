---
sidebar_position: 6
---

# Lists and list items

#### Introduction to lists and list items

- The next design pattern focuses on lists and list items.

- The app component contains arrays of people data and products data that we want to display in different kinds of lists.

#### Creating list item components

- Create two different variations of list items for each type of resource.

- Create a folder for people and products, each containing a small and large list item component.

#### Implementing small person list item

- The small person list item will take a person as a prop and get only the name and age from that person prop.

- It will return a paragraph that displays the person's name and age.

- The small person list item doesn't contain any styling that indicates where it's being displayed.

#### Implementing large person list item

- The large person list item will display more information than the small person list item.

- It will get the name, age, hair color, and hobbies properties from the person and display them.

- The large person list item will be displayed inside a react fragment.

#### Creating list components

- Create a single list component that can display all the different list items.

- The list component will take the items that it should display as a prop.

- It will also take a prop called resource name, which will be the type of resource that the list is displaying.

- The final prop is item component, which is the actual component that we use to display each of the items in the items array prop.

#### Implementing regular list component

- The regular list component will map over all of the items and display one item component for each of them, passing it to the prop called resource name.

#### Displaying lists in app.js

- Display two lists in app.js, one displaying all small person list items and one displaying all large person list items.

- The regular list component is reusable and can display different components as children of the list.
