# Component life cycle &ndash; exercises

### Setup

> Create a fully working environment that will allow you to write JSX files, compile them to JS files and run a working React application.
>
> Remember to:
> - Run ```npm init``` command
> - Install appropriate modules
> - Set Webpack - the first input file should be `js/exercise00.jsx` (then with subsequent exercise numbers), the output `js/out.js`
>
> **Remember to modify appropriately _webpack.config.js_ when doing exercises, so that it points to the file you are currently working on in the _entry_.**


**From now on, do the exercises with class components only**


## Exercise done with the lecturer

### Exercise 1 (~ 10min - 15min)

#### LifeCyclesTester component - the component appears on the page

Create a component named `LifeCyclesTester`.

The component should display the following messages in the console: "constructor", "component will mount", "component did mount", "component unmounting", "rendering", etc., for **for the appropriate types of life cycle methods**.

Render your component directly using `ReactDOM.render()`.

Look at the console. Which life cycle methods have been initiated and which have not? Why?

**Do not create a main `App` component this time.**
