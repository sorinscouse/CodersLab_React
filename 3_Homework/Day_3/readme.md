# Day 3 &ndash; homework

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

In `js/exercise01.jsx` there is a `UpperCaseText` component used for changing letters to capital ones.

It is written as a function component. Rewrite it along with the `App` component into class components.

### Exercise 2

Create a component named `AnotherColor` that stores color to be displayed as **local state**. The color should be set to "yellow" by default.

The component should render this `div` with background color set to the one from the local state.

Add a timer to your component that will change the background color to "blue" after 5 seconds. **Remember to do it in the right life cycle method, and to release resources.**

Add a `console.log` to each life cycle method.

Render your component.

Look at the console. Which life cycle methods have been initiated and why? Can you see a difference between what you have just done and multiple use of  `ReactDOM.render()`?

**Remember to create a main `App` component as well, and to use components from the exercise in it. Render the main `App` component on the page.**

### Exercise 3

Create a component named `TrafiicLights`. It will store the number of light to display (from 1 to 4) in the local state. The default value is 1. It takes the following values to `props`:
 - `redTime` (length of displaying the first - red - light in seconds);
 - `yellowTime` (length of displaying the second and fourth lights - red/yellow and just yellow - in seconds);
 - `greenTime` (length of displaying the third - green - light in seconds).

In a `div`, the component should display three `divs` with width and height set to 100px and `border-radius` set to 50%. Depending on the light that should shine, each of the three inner divs will have either black background (turned off) or background colored appropriately (turned on, see the colors below).

The lights should work in the following way and order:

 ![Exercise 3 lights](img/exercise03_lights.jpg "Exercise 3 lights")

Add appropriate timers / interval to your component that will change the light according to the set order after a number of seconds set in the props. **Remember to do it in the right life cycle method, and to release resources.**

Render your component on the page with sample data in the attributes to props.

**Remember to create a main `App` component as well, and to use components from the exercise in it. Render the main `App` component on the page.**


### Exercise 4

Create two components.

The first one, `PropsToState`, should take the `text` value in the `props`and store it in the local state.

The second component, `ShowInfo`, takes the `info` value in the props and renders it in `h1`.

`PropsToState` renders within itself the `ShowInfo` component passing it the `text` value from the local state.

Add an appropriate interval to your `PropsToState` component that will add to the `text` local state one dot "." every second. **Remember to do it in the right life cycle method, and to release resources.**

Render your component. Check in React Developer Tools what is refreshed - why?

**Remember to create a main `App` component as well, and to use components from the exercise in it. Render the main `App` component on the page.**
