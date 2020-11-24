# Passing information &ndash; exercises

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

### Clock (~ 10min - 15min)

Create a component named `Clock` that will store current date in state.

Add a timer to your component that will update the time in state every second. **Remember to do it in the right life cycle method, and to release resources.**

Create two subcomponents:

First - **`ClockTime`** - takes a `date` through props and displays hour only in the `h1` element using `Date.toLocaleTimeString()`.

Second - **`ClockDate`** - takes a `date` through props) and displays date only in the `h1` element using `Date.toLocaleDateString()`.

Main component - `Clock` renders appropriately the two subcomponents passing them the curent date from its state.

Render your component.

**Remember to create a main `App` component as well, and to use components from the exercise in it. Render the main `App` component on the page.**


## Exercises to do on your own

### Exercise 1 (~ 15min)
#### Clock modification - composition

Modify `ClockTime` and `ClockDate` components from the previous exercise.

Increase the division adding new components:
- **`ClockTimeHour`** - displays hour using `Date.getHours()`
- **`ClockTimeMinute`** - displays minutes using `Date.getMinutes()`
- **`ClockTimeSecond`** - displays seconds using `Date.getSeconds()`
- **`ClockDateYear`** - displays year using `Date.getFullYear()`
- **`ClockDateMonth`** - displays month using `Date.getMonth()` (attention, this method returns 0 as January, 1 as February,  etc. Add 1 to display month appropriately)
- **`ClockDateDay`** - displays day using `Date.getDate()`

Modify `ClockTime` and `ClockDate` so that they use the new subcomponents.

### Exercise 2 (~ 15min)
#### Strobe light exercise modification

Modify the code from the strobe light exercise from the previous section.

Make the `StrobeLight` component take another attribute through props: `onOff` (a boolean).

If the `onOff` is set to `false`, it prevents the change of light.

Create a `StrobeControl` component that will render several sample `StrobeLight`s with the `onOff` set to `true`.

Set a timer in the `StrobeControl` that will set `onOff` to `false` in each `StrobeLight` after 5 seconds. **Remember to do it in the right life cycle method, and to release resources.** Use state to store the value that will be passed to subcomponents.

**Remember to create a main `App` component as well, and to use components from the exercise in it. Render the main `App` component on the page.**
