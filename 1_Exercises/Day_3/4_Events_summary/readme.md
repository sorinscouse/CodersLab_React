# Event summary &ndash; exercises

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

### Buttons (~ 10min)

Create a component with 3 buttons with "Click!" on them.

When the first button is clicked, write in the console: "First button clicked".

When the second button is clicked, change the text on the buttons to "CLICK!".

When the third button is clicked, change the width of the third button to 300px.

Render and test your component.

**Remember to create a main `App` component as well, and to use components from the exercise in it. Render the main `App` component on the page.**


## Exercises to do on your own

### Exercise 1 (~ 10min)
#### Turning a light bulb on and off

Create a component named `Bulb` with a `div` with white background, and width and height of 100px. In the `div`, place a `button` with the text "On" on it.

Clicking the button changes the state of the bulb: if the background of the `div` was white, it turns yellow, and the text on the button changes to "Off". Otherwise, the background changes to white, and the text on the button to "On".

Render and test your component.

**Remember to create a main `App` component as well, and to use components from the exercise in it. Render the main `App` component on the page.**

### Exercise 2 (~ 10min)
#### Hovering and moving cursor away

Create a component with a `div` with green background, width of 500px and height of 200px.

When mouse cursor hovers over the `div`, its background should change to blue, and height to 400px.

When the cursor moves away, the component should return to the initial **state**.

Render and test your component.

**Remember to create a main `App` component as well, and to use components from the exercise in it. Render the main `App` component on the page.**


### Exercise 3 (~ 10min)
#### Running div

Create a component named `CrazyDiv`. It should have red background, width and height of 100px, and `position` set to `absolute`.

Each time the `div` is hovered over, its `left` and `top` style should change to two random values from the range 0 - 1000px.

Render and test your component.

**Remember to create a main `App` component as well, and to use components from the exercise in it. Render the main `App` component on the page.**

### Exercise 4 (~ 10min - 15min)
#### Displaying/hiding elements

Create a component named `MobileMenu`.

It should have the following structure:
```HTML
<menu>
    <div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg" alt="Open menu">
    </div>
    <div>
        <ul>
            <li>Menu 1...</li>
            <li>Menu 2...</li>
            <li>Menu 3...</li>
            <li>Menu 4...</li>
        </ul>
        <div>Hide menu</div>
    </div>
</menu>
```

At the beginning, only the first div should be visible, the second one should hide.

After clicking on the menu icon, the first div should be hidden and the second one should be displayed.

After clicking on "Hide menu", only the first div should be visible and the other one should hide.

Render and test your component.

**Remember to create a main `App` component as well, and to use components from the exercise in it. Render the main `App` component on the page.**

PS. <https://lmjabreu.com/post/why-and-how-to-avoid-hamburger-menus/>


### Exercise 5 (~ 25min - 35min)
#### Mini clicking game

> The following exercise will allow you to create a mini-game in which the player has a certain time to click a button. Time runs faster and faster, and you need to click as many times as you can before the time between successive clicks ends.

Create a component named `SpeedClickGame`. It should take the time to count down in ms by props (`time`) and store it in local state.

The component contains a button with the text: "Click me!", `h1`, and `h2` placed in a `div`. Display current time in `h1`, store the score in `h2`(for now, it is 0).

Initiate an interval or timer that is executed every 50ms. **Remember to do it in the right life cycle method, and to release resources.** In the timer/interval function decrease current time by 50ms and check if the time has not run out. If the time has run out, block the button (`disabled={true}`).

When he button is clicked, a point is added, and the time is reset - but it is shorter than before by 50ms.

E.g. if the `time` attribute of this component was set to 1000:
- No clicks, initial time: 1000ms,
- First click, initial time: 950ms,
- Second click, initial time: 900ms,
- Third click, initial time: 850ms...

Render the component for `time` set to 2000 and test it.

**Remember to create a main `App` component as well, and to use components from the exercise in it. Render the main `App` component on the page.**

### Exercise 6 (~ 20min - 25min)
#### Mathematical game

> This exercise will allow you to create a simple math game.
> You will need several things to complete the task.
> Drawing any element from an array:
> ```JavaScript
> items[Math.floor(Math.random()*items.length)]
> ```
>
> Drawing of a random integer in the range:
> ```JavaScript
> Math.floor(Math.random() * (max - min) + min )
> ```
>
> Function for ordering an array randomly (shuffle):
> ```JavaScript
> function shuffle(a) {
>     for (let i = a.length; i; i--) {
>         let j = Math.floor(Math.random() * i);
>         [a[i - 1], a[j]] = [a[j], a[i - 1]];
>     }
> }
> ```
> Use: you pass an array, it will be modified - the elements will be in random places.


Create a component named `MathQuestionGame`.

First, draw on e of the following operations: **adding, subtracting or multiplying**. Draw **two integers from the range 1-10** as well. Do the drawn operation on those two integers and save the result.

Generate 4 buttons, 3 of which will have random integers **other than the saved result** (you can use e.g. a while loop to make sure that the right answer is not drawn), and 1 button with the right answer. Store the buttons in an array that will be randomly ordered (see shuffle function above) and render them in a component.

The game should be displayed in such a structure (example):
```HTML
<div>
    <h1>2 * 3 =</h1>
    <div>
        <button>3</button>
        <button>6</button>
        <button>8</button>
        <button>7</button>
    </div>
    <h2>00:08</h2>
</div>
```

The player should have 10 seconds to mark the right answer. Set a timer / interval. **Remember to do it in the right life cycle method, and to release resources.**

Rules:
- When the right button is clicked, the text of `h1` will change to "Congratulations!";
- When a wrong button is clicked, the text of `h1` will change to "Wrong answer :(";
- When the time is out and no button was clicked, the text of `h1` will change to "Time is out!", make sure that buttons cannot be clicked when the time has passed.

Render and test your component.

**Remember to create a main `App` component as well, and to use components from the exercise in it. Render the main `App` component on the page.**
