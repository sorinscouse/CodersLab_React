# Day 4 &ndash; homework

### Setup

> Create a fully working environment that will allow you to write JSX files, compile them to JS files and run a working React application.
>
> Remember to:
> - Run ```npm init``` command
> - Install appropriate modules
> - Set Webpack - the first input file should be `js/exercise01.jsx` (then with subsequent exercise numbers), the output `js/out.js`
>
> **Remember to modify appropriately _webpack.config.js_ when doing exercises, so that it points to the file you are currently working on in the _entry_.**


### Exercise 1

> To complete this task, you may need to provide your own unique information in the event.
> Just do it in the JSX expression directly when creating the item.
> See the example:
> ```JSX
>     <button onClick={e => this.handleClick( e, index );}/>
> ```

Create a component with 15 buttons with the word "Click!". Use a loop and `array.map()`.

Any clicked button changes its text to "Clicked." (**other buttons do not change their text**).

Think about how to determine which button was clicked.

Render and test your component.

**Remember to create a main `App` component as well, and to use components from the exercise in it. Render the main `App` component on the page.**


### Exercise 2

Create a component named `ProductTriangle`. It should contain three buttons:
- "Good",
- "Fast",
- "Cheap".

The buttons should be gray by default.

Any clicked button will change its color to green.

**Attention:** if two buttons are already green and a third one is just being clicked, the one that turned green first should be deselected (turn gray again).

Example:
- We click "Good", Good is selected,
- We click "Fast", Good and Fast are selected,
- We click "Cheap",Fast and Cheap are selected (Good deselected),
- We click "Good", Cheap and Good are selected (Fast deselected).

Render and test your component.

**Remember to create a main `App` component as well, and to use components from the exercise in it. Render the main `App` component on the page.**

### Exercise 3

Create a component named `PESELInput`.
It should display a `div` with `input` elements and a second `div`.

The `input` should be a controlled form element. During entering text check if it is 11 characters long and:
- If yes, display `input type="submit"` with the text "Submit" in the inner `div` (for now, it does nothing);
- If not, display the message "PESEL number incorrect" in the inner `div`.

Complete this task using all known techniques:
- Ternary operator directly in JSX ;
- `if` condition directly in JSX;
- `if` outside JSX (storing the content to display in a variable).

Which of those techniques seems the most legible to you? Did any of them force something?

Render and test your component.

**Remember to create a main `App` component as well, and to use components from the exercise in it. Render the main `App` component on the page.**

### Exercise 4

Create components named `AdultStuff` and `AdultStuffBox`.

In a `div`, the `AdultStuff` component renders `input type="number"` element (controlled form element)that takes the user's age.

It renders `AdultStuffBox` component as well. It passes the `age` attribute that is the current age entered by the user in the `input` through props.

The `AdultStuffBox` component displays "Lorem ipsum, adult content.". If the value passed in the `props` as `age` is less than 18, it blocks its own display.

Render and test your component. Note how updates react when you change the age.

**Remember to create a main `App` component as well, and to use components from the exercise in it. Render the main `App` component on the page.**

### Exercise 5

Create a component named `DynamicLego` that renders a div with a `input type="number"` element that is a controlled form element and accepts the number of blocks to display entered by the user.

It renders `ul` as well. The `ul` element should have exactly as many `li` element as the user entered in the `input`. **Remember to choose an appropriate key.**

Each `li` element should have the following style:
- background color: red,
- Height: 50px,
- Width: element number * 50px (e.g. the first block will be 50px wide, the second 100px, the third 150px, etc.).

Render and test your component. Note how updates react when you change the number of elements - does this work properly (without unnecessary updates)?

**Remember to create a main `App` component as well, and to use components from the exercise in it. Render the main `App` component on the page.**

### Exercise 6

Create a component named `Notes`. It should render a `div` with `textarea`, `button` and `span` elements.

The `textarea` should be a controlled form element.It should display whatever the user is entering. Additionally, the content entered by the user should also display in the `span` element.

CLick on the `button` should clear the entered text.

Render and test your component.

**Remember to create a main `App` component as well, and to use components from the exercise in it. Render the main `App` component on the page.**

### Exercise 7

Create a component named `WhoIsPresent`. It chould render a `div` with `select` element and a `ul` list.

The `ul` list should be empty initially.

`select` should contain elements from the array below as choices:

```JavaScript
['Ann Kovalsky', 'John Wicker', 'Mary von Handerburg', 'Jorge Carmenere'];
```

The selected `select` element should be moved to the `ul` list, which means that it appears ad a `li` element in the `ul`, and it disappears from the `select` element.

Render and test your component.

**Remember to create a main `App` component as well, and to use components from the exercise in it. Render the main `App` component on the page.**

### Exercise 8

Create a component named `Advertisement`. It should display within itself an advertisement passed to it with a `a` link at the top with the text "Show / hide the ad".

A click on the `a` element toggles the view: if the ad was visible (by default) - it hides, if it was hidden - it shows.

The text on the `a` link should depend on the situation: when the ad is visible - it should be "Hide the ad"; when it is not - "Show the ad".

Render and test your component using the following construction:
```JSX
<Advertisement>
    <a href="http://coderslab.pl" target="_blank"><img src="http://coderslab.pl/wp-content/uploads/2016/10/cropped-logo-coderslab-favicon-192x192.png"></a>
</Advertisement>
```

**Remember to create a main `App` component as well, and to use components from the exercise in it. Render the main `App` component on the page.**
