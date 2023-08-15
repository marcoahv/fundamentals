---
sidebar_position: 32
---

# Flex Wrap

his property allows us to control how flex items behave when there is limited space within the container.

### Default Value of Flex Wrap

By default, the flex-wrap property is set to `no-wrap`. This means that the items will remain in a single line, even if there is not enough space.

### No Wrap

When the flex-wrap property is set to no-wrap, there is no change in the UI, and the items remain in a single line.

### Wrap

- Setting the flex-wrap property to `wrap` allows the items to wrap within the container.
- The wrapping takes place only when needed, and the items are wrapped into the next row or column.

### Wrap Reverse

- The value `wrap-reverse` places the items starting at the end of the cross axis.
- Instead of wrapping to the right column, they wrap to the previous column.

### Horizontal Wrapping

- Horizontal wrapping of items is possible by changing the `flex-direction` to `row`.
- With flex-wrap set to `wrap`, you can see the items wrapping to the next row.
- Setting the value to wrap reverse places the items at the end of the cross axis and wraps them to the row above.

### Summary

- In summary, the flex wrap property is a valuable tool for controlling the wrapping behavior of flex items within the container.
- The possible values are no-wrap (default), wrap, and wrap-reverse.
