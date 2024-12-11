Problem
useState Hook
Update the current tab (to toggle its appearance when clicked) using the state setter function from useState.

Transcript
In our app, we're making this simple tabs component, we're displaying all of these tabs that you see here, which are each buttons. One button is currently selected. To display this component, we have an array of strings, which corresponds to the text of each of these buttons.

And we're just mapping over it and outputting a button element at the moment, the company button is currently selected. So here we have a conditional that compares the current tab with the string company. And if that's true, if it's the company button, then we give it a different background color and different text color. Otherwise, the default colors that you see here, our goal is to be able to click a different tab and have that clicked tab change its appearance to the selected version. This means that we need to keep track of a value of value that we're currently putting within the button here.

But we want to make this dynamic. A good first step at doing this would be to create a variable above our return, we can call this currentTab, and we'll set that to company now we can compare tab with currentTab. And if we were to change that to say my account, then that tab that button is given the different classes that we mentioned.

But how do we dynamically update this to do something when our buttons clicked, we can add the onClick prop and connect it to an event handler a function to call that will be responsible for changing this value. So we can write a simple function where if a given button is clicked, we'll take the current element and put that in currentTab.

When we change currentTab's value by clicking on a new button, however, we see that nothing happens. There's a couple of reasons this approach doesn't work.

First of all, whenever our component renders, local variables don't stick around. So if something were to happen to cause our component to rerender, to be updated, this currentTab variable is going to be reset and set once again to my account.

Additionally, any changes that we make to it aren't going to cause a rerender. That means we need a way to remember a given value to have it persist between renders, and to cause our component to update to rerender. and display the new content when its value changes.

And for such a purpose, we have something called state and to create state or to use state we have the useState hook from React to use a new piece of state we can grab as a named import useState from the core React library and call it like a regular function up at the top of our component. A hook is slightly different than a normal JavaScript function.

One of the main differences is is that hooks can only be used in React components. And to give it an initial value like we had with our variable here, we need to pass that to useState when it's being called. That was my account. So we'll pass that in.

And now my account is the default value of some piece of state. Now useState returns a couple of values to us on an array, it returns first our state variable as the first element in the array, and then a function to update that variable.

And the pattern to access this very easily is using array destructuring. So to get the currentTab value, that's the first value that we destructured. And then if we want to set the currentTab, that is going to be the function to change it. So at this point, everything is still the same, but we can't update our state like we did before.

We're not going to assign a new tab value to currentTab like this, we need to use setCurrentTab.

Your challenge is to make this tabs component work and toggle the currentTab with the help of our currentTab piece of state by updating it to whatever value that we're clicking on with our setCurrentTab function.

Solution
useState Hook Solution
To change the tab dynamically, use the set state function setCurrentTab when the button is clicked:

```jsx
onClick={() => {
    setCurrentTab(tab);
}}
```

Transcript
Here we have one piece of state: the current tab, referring to the tab that's currently selected. We're selecting it using onClick. That means we want to update it within the onClick event handler. And we know that we can't assign a value like this with the equals operator with a normal JavaScript variable.

Instead, we have a function to set state, and that's why it's prefixed with set. Anytime that you create a piece of state, whether this is tab or current tab, the state variable is going to be named something appropriate. And the setter function, the function to update state, will be prefixed with set. So if our state variable was named tab, our setter function would be setTab.

This is a naming convention that you should follow. We need to use setCurrentTab within the event handler here, and it accepts the new state, whatever we put or pass as the argument here to our set function.

That's what the new state is going to be; it's going to completely overwrite the old state. Fortunately, the update here is pretty simple because we're fine with changing the string value here to a completely different value. So to solve this, we just need to pass in the tab that we're currently mapping over.

And when we save, we can now select a tab, and because we're now updating it in state, we're able to successfully change the class, and if it's that tab that we clicked, those selected classes are applied; otherwise, they are not.

Problem
Multiple State Variables
Create separate pieces of state to store and manage the first name, last name and timezone.

Make sure to display each of these state values above the form instead of their default values.

As a bonus, disable the save button if any value missing. To do this, use the disabled prop on the save button.

Transcript
Here we have this PersonalInfo component where our users are going to be able to update their first name, last name, and the timezone that they're in.

Above it, we want to display the values that they typed in. These are just the default values that we have here. But to be able to hold onto what the user has typed in or selected, we're going to need to use, you guessed it, state. It's important to identify what pieces of state a given component needs.

For this particular component, we have three pieces: the first name, last name, and timezone. You might be wondering whether we need to use useState just once or whether we need to use it multiple times. Is it possible to use it multiple times?

Well, yes, you can call useState as many times as you need for as many state variables as you have. That's going to be your task here: to create the appropriate state variables for each of these pieces of data that we want to keep track of, and then use the appropriate setter function for each of those pieces of state to then update each of those values when they're changed.

These inputs, as well as this select, are all inside this form element. And the way to get the value that was typed in or selected for each of these is with the onChange prop. You need to add onChange to the input or the Select. In order to grab the value, we need to connect onChange to a function, or we call an event handler function.

And in the parameters of this function, we get the event. The event gives us a bunch of data about what is typed in, or in particular, the change event, just like we had the onClick for the click event. If we navigate to the console, you'll be able to see all of this stuff.

But what's important for you to get the actual value that was typed in or selected is to grab the target, which is the underlying element that the event took place on and then its value. To grab that we can simply say event.target.value.

Your task is to get the value that was typed in or selected for each of these inputs, put them in state, and display them on the page.

Solution
Multiple State Variables Solution
First, create three state variables for firstName, lastName and timezone

const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [timezone, setTimezone] = useState("Eastern Standard Time");
Next, add an onChange to each of the inputs with the appropriate set state function:

onChange={(event) => {
setFirstName(event.target.value);
}}
Finally, display the updated state in the component:

<div>
    <h2 className="text-base font-semibold leading-7 text-white">
        {firstName} {lastName}
    </h2>
    <p className="mt-1 text-sm leading-6 text-gray-400">{timezone}</p>
</div>
Transcript
Let's start at the very beginning: What are state variables? What data do we need to keep track of? We need to keep track of our first name, last name, and timezone. We know these values can change, and we want to hold on to them. We also want to display them in another part of our component.

That's why each of these values should be their own separate piece of state. It's important to mention that they should be separate because they can be updated and changed independently.

If they were linked together, it would make sense to use state and put each of these individual values as properties on an object. We'll cover that in a future lesson. What you need to do is to call useState three times and make three separate state variables. We know that useState returns an array, so we can immediately destructure it, and we will make the first piece of state the first name state.

The next piece of state is the last name state, and finally, the timezone state. Now, the tricky part here is figuring out what the default value of each of these should be. When you have an input that takes text, we know that we're going to be working with a string. Since strings don't have a default value, we give it an empty string for that new piece of state. We'll add an empty string for first name, last name, and timezone.

Because it is a select, we might want one value or another to be first. If we want something to be controlled by state, we need to put the default value in state and pass it down to that input. For our select, we might want that to be Eastern Standard Time or Pacific Standard Time; it's entirely up to you.

But the way that we set a default value with plain HTML is to set defaultValue like this. We know that in React, this is a prop written in camelCase, and since this is being controlled by state, this needs to be set like this: defaultValue is going to be read according to whatever is in the timezone state variable.

To update each of these values, we need to use the setter function for each of them: for first name, that would be called setFirstName; for last name, it would be setLastName; and for timezone, that would be setTimezone. We saw how to get the value that was typed in or selected for each of these inputs; we get that from event.target.value, so we can just replace our console.log with setFirstName, and that needs to be for the first name input. And we can do something identical for the last name: we add the onChange prop, but this time we want to set event.target.value to last name using the setLastName function.

And finally, for our select, we can do exactly the same but with setTimezone. At this point, whenever we interact with an input, we're setting the value in state. To see that this is working, we need to read from it. We're not using any of these variables except for timezone.

So, for the area up at the top, we want to output the first name variable, then the last name variable, and then the timezone. When we do that, whenever we make a change to any input, it's immediately reflected: our component re-renders to display that new state.

And finally, for the bonus, to disable the save button if any value is missing, we can use the disabled prop. If disabled is set to true, then it's not going to be possible to click on this button.

That's only going to be true if any of these values are empty. For that, we could say isDisabled. This should be true if there is not a first name, or a last name, or a timezone.

Now, we can pass isDisabled as the value of the disabled prop on the button. And if any of these are not provided, our button is going to be disabled, but if it's there, our button is going to be clickable.

Problem
Arrays in State
Make it possible to delete products from order summary using the trash button.

As a bonus, display the correct subtotal and total, based off of the products array.

Transcript
Any valid JavaScript value can be utilized in state with the useState hook; this includes non-primitive values like arrays and objects.

In this component, we're displaying an order summary. We've got a couple of products that our users added to their cart. These are coming from the cartProducts array, which is an array of objects containing various data. This is all being displayed here. Because we're using React, we want to make this dynamic; we aim to enable our users to delete a given item from their cart.

Right now, we're simply displaying them by mapping over each within a list item. Your task is to figure out how we're going to delete products from our order summary when we click on this trash button.

Here, I'm referring to this particular button that wraps the TrashIcon component. When a user clicks on it, that element should be filtered out and removed from our array, and the display should update to show everything else that wasn't deleted.

As a bonus, use another array method to update our subtotal and total here to correspond and be updated whenever the items in our cart summary are updated.

Solution
Arrays in State Solution
Place the cartProducts array in state as the default value:

const [products, setProducts] = useState(cartProducts);
After that, map over the products array and when the trash button is clicked, filter the products, removing the product whose trash button was clicked according to its id:

```jsx
onClick={() => {
    const filteredProducts = products.filter(
        (p) => p.id !== product.id
    );
    setProducts(filteredProducts);
}}
```

Transcript
Hopefully, this task presented a bit of a challenge, but was ultimately doable. If not, let's walk through it step by step. The issue with the current version of our order summary is that everything is static; the delete button doesn't work.

We know that we can't change our current products because they're coming from an array outside our component. To be able to update it and rerender our component to display that update, we need to move this array into state. There are a couple of ways to do this.

We could copy the array literal directly, or when we create a piece of state with the useState hook, we can add a default value to it by passing in currentProducts immediately. We now have a piece of state, and let's call this simply products. We can now use this products array in our markup, replacing currentProducts with products. At this moment, we still have the same output.

But now we know that we can update this array and see changes in our UI. We also want to remove an item whenever we click the Delete button. To do that, we'll head down to the button itself and add an onClick.

We'll connect it to a function. In this function, we want to figure out how to remove a given element from our products array. To remove an element from an array, either one or multiple elements, we can use the filter method. To do this, we can take products.filter, where for each element we're iterating over, we'll just call p, and to write a predicate or condition, we can find a property to compare, such as the ID. We could also use something like the name, but ID is best here. It can take p.id and ensure that this new array we're returning does not include an element where product.id matches. So, when this is clicked, we're going to filter our products into an array called filteredProducts and then put that new array in state. We then need to create a setProducts function and pass filteredProducts to it.

Remember, this setState function completely replaces our state, overwriting it. So when I save and want to remove a given item, such as the second one, we run filter, and the new filteredProducts array is now in state, and we can ultimately delete both. For the bonus, we want to display the subtotal and total according to what's in our products array.

To calculate the subtotal, we want to derive it from products. We can get the sum using the reduce method. It's an array method that allows us to collect data on this so-called accumulator and iterate over each product or each element. On the accumulator, we're going to add, for each iteration, the product price. We need this to be a number, but we see that the price property is a string. So to turn that into a number, we need to say .slice(1) to slice this string starting at the first index to get just the number and then convert this to a number using the Number function.

And finally, to add a default value as the second argument to reduce, which will be zero, because we're adding this up from zero. This will be our subtotal.

To get the total, we just need to add the shipping cost, which is five, to that. We'll say subtotal + 5, and then use each of these variables in place of our static values for subtotal and total. And notice that we're getting the correct number values, but we don't have the decimals.

The way to fix that is by using the toFixed method and passing in a value of two to get two decimal places for subtotal and total. If this seemed way too complex, don't worry about it.

This was just something extra to make our component a bit more complete and to show you that we could compute values from our state variables without anything special.

Problem
Objects in State
Make it possible to update the billing address, namely the country and postalCode properties without deleting the other properties.

Remember that the set state function entirely replaces the previous state with the new state that is passed to it as an argument.

Transcript
Objects are often used within state when all the data needs to change simultaneously or is closely related. In this component, we are keeping track of the user's card details.

If you examine the details at the top, you'll notice values including the number, expiration date, and CVC.

All of these are not editable. However, what can change is the billing address; we have a select option here to change their country as well as their zip code. We are using this object within our current state.

We aim to make it possible to change these two values in the billing address pieces of state: the country and postal code properties.

While not altering any other details, your challenge is to set state to update the card state whenever a user changes their country or postal code, but to do so while keeping the other numbers unchanged.

If this seems a bit complex, don't worry. Just remember that the key to this is something we covered earlier, which is the fact that whenever we update state, calling the setter function completely overwrites our state variable.

Solution
Objects in State Solution
On the select and input elements, add the onChange prop and connect it to a function, onUpdateBilling.

onChange={onUpdateBilling}
Make sure that the name prop of the both the select and input match the property of the object that we want to update.

Then, in the onUpdateBilling function, spread in all of the previous card values and update the appropriate property according to the name prop:

```jsx
function onUpdateBilling(event) {
  setCard({ ...card, [event.target.name]: event.target.value })
}
```

Transcript
To solve this challenge, we'll first note that we have a select as well as an input. We can listen for the change event on each of these elements. We can start with the select, where we're currently setting the default value from card.country.

And to listen for the change event, we can add an onChange where we're getting the event, and we are setting the card state. Now, one approach might be to take the card, the value that's currently in state, and mutate it by saying card.country = event.target.value, and then passing that mutated card object to setCard.

Let's see what happens when we do this. It seems like it works. However, if we were to display the country, say up here next to billing address from card.country, and we change it, the onChange does run. But this pattern of mutating our object does not cause React to rerender. Instead, we need to create a totally new card where we're spreading in, or adding at least, all of the properties and values that are not changed and updating the one property that is being changed.

So, an alternative way to do this would be to say create a new card variable and spread in all of the current card properties and values from the card state variable and to just change the country property. And that value, again, comes from event.target.value. And then, instead of passing in card, we pass in newCard.

So, if we attempt to change this, we see that the component does rerender when we do not mutate our object, when we create a new one, and we don't even need an intermediate variable for this; we can just take that object literal that we're creating here and pass it directly to setCard.

So, be aware that you need to use either the spread operator or some other pattern in order to create a new object that's not being mutated in order for React to detect a change with a state variable. And only in that case, will it cause our component to be rerendered. So, let's remove our displaying card.country.

Since we know that this works, we can do the identical thing for our other input where our user types in the postal code. We want to spread in all the previous card properties. But in this case, we just want to change the postalCode property that is the value here.

And so, if I change this to something else, we can test once again and make sure that card.postalCode whenever we change it is actually causing our component to rerender.

And it does. One last improvement to make this is being aware of the fact that we're performing the same operation, we're setting state, we can create an abstraction for this, if we like, by taking our event handler function here and replacing it with onUpdateBilling or a function with a similar name.

We haven't created this function yet, but we'll want to pass a reference to it. So, whenever we have a change event, this function is going to be called, and it's going to still get the event. We'll create it above the return. We'll say onUpdateBilling, it's going to get the event, and using that event, we can still get the value.

And to determine what property we need to update, we can get that from the name or the id prop.

So, provided that it matches on the select that is country, and on the input, this needs to be written as postalCode in camel case, it'll change the HTML for as well. A nice pattern is to be able to take that name or ID if we take a look at event.target using console.dir, we can see that we're able to get the name off of the target with event.target.name.

So, using a set of square brackets to insert this property as a dynamic value, we can say event.target.name = event.target.value, just like this.

And one more time, we can confirm that everything has been updated appropriately by displaying next to card details the country and postalCode.

So, whenever these values are updated, our entire component rerenders, and we see that they're being updated properly.

Problem
Sharing State
Share state by lifting the isOpen state variable to the parent component FAQ and passing data down via props.

Transcript
An important thing to understand about useState is that it's local. When declared in a given component, it is specific to that component. In this application, we have a couple of these accordion components; we can toggle them open or closed.

This is being controlled by the isOpen piece of state, which is either the value true or false. You can see that they are separate because we can control them independently; we can toggle their state entirely separately from one another.

But what do we want to do if we're interested in sharing state? For example, if in this Frequently Asked Questions component that's rendering these accordions, we only want to display one at a time.

That means we want all accordions to rely on one central piece of state, and we want that accordion's visibility, whether it's open or not, to be read from that piece of state, but also to be able to update it. To have our components share state, we need to use a pattern called "lifting state up".

And this involves not having the state be local to a specific component but raising it to the parent component. In this case, that is the FAQ component. So, the state needs to live above the child component in the parent, and using props, the child needs to both read from and update that state.

So here's your job: make it possible to toggle only one or another accordion open by lifting the state up and moving it to the parent, the FAQ component.

Solution
Sharing State Solution
To lift state up, move it up from the child Accordion to the parent component FAQ:

```jsx
export default function FAQ() {
  const [isOpen, setOpen] = useState(false);

  return (
    // ...

```

In this case, however, we want to display a particular Accordion. We can do so based off of its index. We'll rename the isOpen state to selectedIndex to keep track of that:

const [selectedIndex, setSelectedIndex] = useState();
Then, to the Accordion component, pass down isOpen, which should compare the current index with the selected index. The onSelect function will update the index value:

```jsx
<dl className='mt-10 space-y-6 divide-y divide-gray-900/10'>
  {faqs.map((faq, index) => (
    <Accordion
      key={index}
      faq={faq}
      isOpen={index === selectedIndex}
      onSelect={() => setSelectedIndex(index)}
    />
  ))}
</dl>
```

Finally, to read and update from our parent component's state, we need to destructure isOpen and onSelect and use both:

```jsx
function Accordion({ faq, isOpen, onSelect }) {
  return (
    <div className="pt-6">
      <dt>
        <button
          onClick={onSelect}
                    // ...
```

Transcript
Let's walk through the entire process of sharing state between components. This pattern, called "lifting state up," is a really important one that you need to know whenever you're working with the useState hook.

This pattern involves lifting the state variable up so that each of these components doesn't have their own local state. But instead, it's being controlled by state in a parent component. The way that it works is with the help of props. Let's walk through each step. We are first going to take the state and remove it; we're going to get an error at first, but we need to then move it to the parent. We're still going to get an error.

And this is coming from the accordion; we're using setOpen and isOpen. According to our application, right now, these two are missing because they're not within the scope of the accordion component.

To fix this, we need to pass them down—pass down isOpen and setOpen, both as two individual props. Then we need to use them; that means destructure them in the parameters of the accordion. And when we do this, we see that everything opens and collapses.

At the same time, we've now successfully lifted state up. And what's happening is that we're still able to change state from a child, but the state is no longer in that child component.

Another pattern for this, to show that this will work with any callback that changes state, is that instead of having setOpen being passed down, we could have something a little bit more declarative. We could have a function called toggleOpen, and this would do the same thing—it would just change isOpen to its opposite value.

But toggleOpen is a little bit more understandable as to what it does. We then have to pass it down, destructure it, and use it on click. We don't need this function declared here since it's declared in the parent, and it accomplishes the same thing.

But you'll remember that the challenge was actually to display one or another; we've successfully lifted state up, but we only want to display one at a time. So we need to have a little bit different form of state here, instead of just having true or false.

To open or close everything, we want to have a piece of state that correctly opens the appropriate accordion. We can do that with the help of the index because we know that they're all different from one another. Instead of storing a boolean value in state, we could have a number in state, and this could be selectedIndex and setSelectedIndex for the callback function.

Instead of toggleOpen, we could call this onSelect and pass it a function declared here where we set selectedIndex to the current index of the element that we're mapping over. And for isOpen, we want an accordion to be open if the current index matches the selected index.

So isOpen is now going to be a comparison between index and seeing if that's equal to the selectedIndex stored in state.

So down here in accordion, we're still going to destructure isOpen. Now we're going to pass down onSelect to be called when the user clicks on it, as compared to toggleOpen.

So when we save this, by default, the zeroth element is going to be selected. We could remove that if we like to have nothing open by default.

But now we can open one or another of our accordions. Our child components, which could be as many as are in this array, are all now reading from and updating one singular state variable.

This is the pattern of lifting state up, and it's especially helpful when you need to have a singular source of truth—one state variable that can control as many child components as you like.
