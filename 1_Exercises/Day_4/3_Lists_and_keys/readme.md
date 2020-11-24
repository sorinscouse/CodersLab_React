# Lists and keys &ndash; exercises

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

### List of people (~ 10min)

Create a component named `PeopleList`.

In `js/exercise00.js` there is an array of people. Take a look at it or import it and then perform a `console.log()` of the array to see what it has in store. Import it to `js/app.jsx`, e.g. using:

`import people from './exercise00';`

The component should display `ul` list of people with `li` elements with the name and surname of a person written as text. **Remember to choose an appropriate key.**

Render and test your component. Check in your console for any errors.

**Remember to create a main `App` component as well, and to use components from the exercise in it. Render the main `App` component on the page.**


## Exercises to do on your own

### Exercise 1 (~ 15min)
#### Creating li elements

Create a component named `PeopleList2`.

`js/exercise01.js` contains a list of people. Take a look at it or import it and then perform a `console.log()` of the array to see what it has in store. Import it to `js/app.jsx`, e.g. using:

`import people from './exercise01';`

The component should display a `div` with an `ul` element that contains a list of people with `li` elements that have the name and surname written as text. **Remember to choose an appropriate key.**

In the `div`, create a `button` as well that will reverse the array with people (store it in state for this purpose). Use ```array.reverse()``` method.

Render and test your component. Check in your console for any errors.

**Remember to create a main `App` component as well, and to use components from the exercise in it. Render the main `App` component on the page.**

### Exercise 2 (~ 15min)
#### Creating li elements, adding new elements

Create a component named `Invites`.

It should contain a `ul` element with a list of people (initially empty) and a button `New`. **Remember to choose an appropriate key.**

After the button is clicked, a `prompt()` should appear asking for a name and a surname. If such a person does not exist on the list yet, it is added **at the beginning of the list**.

Render and test your component. Go to React Developer Tools and check if the elements of your component are updated correctly (only the added one should change, not the other ones).

**Remember to create a main `App` component as well, and to use components from the exercise in it. Render the main `App` component on the page.**

### Exercise 3 (~ 15min)
#### Passing information to event function

> You will need to provide your own unique information in the event to complete this exercise.
> Just do it in the JSX expression directly when creating the element.
> See the example:
> ```JSX
> const buttons = infos.map(info => {
>     return <button onClick={e => this.handleClick( e, info.id );}/>;
> });
> ```

Create a component named `Switch`. It should take a `count` number in props.

Next, create as many `li` elements as the `count` number shows. **Remember to choose an appropriate key.** `li` elements should contain `button` elements with the text set to consecutive numbers: 1, 2, 3, etc.

After a button is clicked, it should be blocked, but only this one button, while all the remaining buttons return to their clickable state.

Render and test your component.

> Having problems with this task? Read the tip:
> In this simple way you can generate many elements by changing some of them:
> ```JSX
> const spans = smths.map(smth => {
>     return <span contentEditable={ smth.state === 'edit' ? true : false }>;
> });
> ```

**Remember to create a main `App` component as well, and to use components from the exercise in it. Render the main `App` component on the page.**
