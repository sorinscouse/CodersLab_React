# Uncontrolled components &ndash; exercises

### Setup

> Create a fully working environment that will allow you to write JSX files, compile them to JS files and run a working React application.
>
> Remember to:
> - Run ```npm init``` command
> - Install appropriate modules
> - Set Webpack - the first input file should be `js/exercise00.jsx` (then with subsequent exercise numbers), the output `js/out.js`
>
> **Remember to modify appropriately _webpack.config.js_ when doing exercises, so that it points to the file you are currently working on in the _entry_.**


## Exercise done with the lecturer

### Enter password (~ 5min - 10min)

Create a component named `GivePassword`. It will take `pwd` attribute through props.

It should render a `div` with `input type="password"` elements and a `button`.

When the button is clicked, extract the value of the `input` element. If it is the same as `pwd` from props, from this moment on display `h1` with the text "I'm in." instead of the `input` and `button`.

**Remember to make the `input` an uncontrolled component this time. Use the ref attribute.**

Render and test your component.

**Remember to create a main `App` component as well, and to use components from the exercise in it. Render the main `App` component on the page.**


## Exercises to do on your own

### Exercise 1 (~ 15min)
#### Uncontrolled input

Create a component named `Sum`.

It should render a `div` with `input type="number"` elements, a `button`, `ul` and `li`.

When the button is clicked, extract the value of the `input`, and add it to the list displayed in `ul`.

`h1` Should display the sum of all added numbers.

Do the exercise in two ways:
- First, do it with an uncontrolled component,
- Next, try to do it with a controlled component.

What differences do you see in the code, and what differences in the way they work?

Render and test your component.

**Remember to create a main `App` component as well, and to use components from the exercise in it. Render the main `App` component on the page.**
