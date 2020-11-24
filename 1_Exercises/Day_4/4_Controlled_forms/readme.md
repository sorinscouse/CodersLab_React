# Controlled forms &ndash; exercises

### Setup

> Create a fully working environment that will allow you to write JSX files, compile them to JS files and run a working React application.
>
> Remember to:
> - Run ```npm init``` command
> - Install appropriate modules
> - Set Webpack - the first input file should be `js/exercise00.jsx` (then with subsequent exercise numbers), the output `js/out.js`
>
> **Remember to modify appropriately _webpack.config.js_ when doing exercises, so that it points to the file you are currently working on in the _entry_.**


## Exercises done with the lecturer

### Hello, You (~ 5min)

Create a component named `HelloName`.

It should display a `div` with `input type="text"` and `h1` in it. The `h1` should display "Hello, {name}". `{name}` should show live what the user is inserting, and the default text should be "You".

Remember to make `input` a controlled component.

Render and test your component.

**Remember to create a main `App` component as well, and to use components from the exercise in it. Render the main `App` component on the page.**

### Counting (~ 10min)

Create a component named `TextField`.

It should render a`div` with `p`, `select` and `span` in it.

When selecting an option from the `select` element, the chosen option should be shown live in `p`, and `span` should show the number of entered characters, also live.

Render and test your component.

**Remember to create a main `App` component as well, and to use components from the exercise in it. Render the main `App` component on the page.**


## Exercises to do on your own

### Exercise 1 (~ 10min - 15min)
#### Adding numbers

Create a component named  `AddTwoNumbers`.

It should render a `div` with two `input type="text"` and a `h1` in it. `h1` should display live the sum of adding two integers. Extract the integers from `input` elements, remember to convert the type to `Number`.

If any of the data from `input` elements when converted yields NaN (use `Number.isNaN()`), display "Give two numbers" in `h1`.

Remember to make the `input` a controlled component.

Render and test your component.

**Remember to create a main `App` component as well, and to use components from the exercise in it. Render the main `App` component on the page.**

### Exercise 2 (~ 15min)
#### Interactive change of div content

Create a component named  `InteractiveDiv`.

It should render a `div` with `input type="`**`number`**`"` and another `div` in it. The inner `div` should have the following styles:
- Height: 100px,
- Width: from `input` element `+'px'`,
- Background color: red.

When input value is changed, the width of the inner `div` should also change. Remember to convert the type to `Number`.

Remember to make the `input` a controlled component.

Render and test your component. Note how the state connects and what is its flow in the component.

**Remember to create a main `App` component as well, and to use components from the exercise in it. Render the main `App` component on the page.**

### Exercise 3 (~ 15min)
#### Select

Create a component named `SelectOrType`. Przez props ma przyjmować tablicę `items`.

It should render a `div` with a `select` inside. Create `option` elements in the `select`:
- the ones that were passed in the props in `items`,
- one additional last option "Other".

If the user chooses the last option - display under the `select` element `input type="text"` elements and a `button` (in practice, they will be there the whole time, but hidden by default).

When any content is entered and submitted with the button, change the last option "Other" to whatever the user has entered, select that option and close the menu.

After another option is selected and then the user goes back to the last option - the display and change should still work.

Render the component with `items` set to `['BMW', 'Jaguar', 'Porshe']` and test it.

**Remember to create a main `App` component as well, and to use components from the exercise in it. Render the main `App` component on the page.**

### Exercise 4 (~ 5min - 10min)
#### Select, input

Create a component named `MixedData`.

It should render a `div` with `input type="text"` and a `select` with options: Bananas, Pineapples and Oranges.

Remember to make the `input` and `select` controlled components. Append them to **one common state element**.

Render and test your component. Check what is happening.

**Remember to create a main `App` component as well, and to use components from the exercise in it. Render the main `App` component on the page.**

## Additional exercises

### Exercise 3 (~ 25min - 35min)

This task will allow you to create another mathematical mini-game.

Create a component named `MathAnswersGame`.

First, draw **two integers from the range 1-10**. Perform addition of the two drawn numbers and store the result.

Display the added numbers and `input type="number"`.

The game should be displayed in the following structure (example):
```HTML
<div>
    <h1>2 + 3 =</h1>
    <div>
        <input type="number">
    </div>
    <h2>00:02</h2>
    <h3>Score: 2</h3>
</div>
```

The player will have 3 seconds to give the right answer. Initiate a timer. **Remember to do it in the right life cycle method, and to release resources.**

After the time has run out checj if the result entered by the player is correct. The rules:
- If the result is correct, give a point to the player, generate new integers and initiate a new timer (note that it will be best to create a new auxiliary metho for this purpose, so you do not have to repeat a code fragment);
- If the result is incorrect (or the player did not manage to enter the result - which is the same condition), block the `input` and display "Game over" in `h1`.

Render and test your component.

**Remember to create a main `App` component as well, and to use components from the exercise in it. Render the main `App` component on the page.**

### Exercise 4 (~ 30min - 40min)
#### To-do list

This task will allow you to create your own to-do list.

Create a component named `ToDoList`. It will store a to-do list in its state - as an array of objects in the following form:
```JavaScript
[
    {
        name: 'Element to do',
        done: false
    },
    //...
]
```

An example of the component structure (HTML):
```HTML
<div class="toDoList">
    <div class="header">
        <h2>To-Do List</h2>
        <input type="text">
        <button class="addBtn">Add</button>
    </div>

    <ul>
        <li>Buy milk</li>
        <li class="checked">Make the presentation</li>
    </ul>
</div>
```

When any text is entered into `input` element and "Add" is clicked, the inner array with to-do list should update. Add a new object at the end of it and set `done` to `false` for it. In practice, this will require you to extract the array from the state, make a copy of it, add the object there, and update the state with the whole new array. After this addition, clear the `input` (by hand, simply set the state connected with `input` to an empty string).

Remember to make the `input` a controlled component.

When any of the `li` elements is clicked, you should search the array to find this element, and change its `done` to the opposite. If the element was marked as done, mark it not done, and if it was not done - mark it done.

When rendering, give the CSS class `checked` to those `li` elements that are marked as done. Remember about appropriate keys for the list elements.

Render and test your component.

**Remember to create a main `App` component as well, and to use components from the exercise in it. Render the main `App` component on the page.**
