# Conditional rendering &ndash; exercises

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

### Your own checkbox (~ 5min - 10min)

Create a component named `MyCheckbox`.

It should contain one button that will initially display "NO". When it is clicked, the button text should change to "YES", and back to "NO" after another click, etc. **To display appropriate text, use ternary operator directly within JSX.**

Render and test your component.

**Remember to create a main `App` component as well, and to use components from the exercise in it. Render the main `App` component on the page.**


## Exercises to do on your own

### Exercise 1 (~ 10min - 15min)
#### Checking the number from props

Create a component named  `NumberInfo` that takes `number` through props.

Then, using the **ternary operator** and **logical operator &&** directly **within JSX**, render the following text in `h1`:

- Number,
- Even / odd,
- Prime number (does not appear if not true),
- The power of the number 2 (does not appear if not true),

Display the information in a single line, e.g.:
"7, odd, prime number,".

Render and test your component several times for the `number` attribute:
- 1
- 2
- 5
- 7
- 10
- 16

**Remember to create a main `App` component as well, and to use components from the exercise in it. Render the main `App` component on the page.**

### Exercise 2 (~ 10min - 15min)
#### Checking random number

Create a component named `NumberRandomInfo` that will draw a number from the range 0 - 5 every second. To draw a number, use the following formula:

```JavaScript
Math.ceil(Math.random() * 5 )
```
Create a condition in the render method that will check the drawn number, and if it is greater than 3, will render the number and the text "Greater than 3". Otherwise, render the number with the text "Less than 3".

**Remember to create a main `App` component as well, and to use components from the exercise in it. Render the main `App` component on the page.**
