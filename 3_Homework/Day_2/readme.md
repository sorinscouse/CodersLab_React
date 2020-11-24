# Day 2 &ndash; homework

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

In React render a ```div``` in the element with ```app``` id that will have a green background.

Using ```setTimeout()```, after 5 seconds initiate a function that will update background color to red.

### Exercise 2

Create a component named `CardGenerator`. Pass it name, surname, position, email and phone number to `props`.

**Each data has to be a separate subcomponent (e.g. `CardName`, `CardJobTitle`, etc.)**.

It should display all the given data as a business card (set the structure and styles on your own).

E-mail should be clickable (`<a href="mailto:test@example.com">test@example.com</a>`).
Phone number should be clickable (`<a href="tel:111111111">111111111</a>`).

Render your component on the page with sample data in the attributes to props.

**Do the exercise two ways:**
- **with a function component first**
- **with a class component (the same component but built with a ES6 class**

### Exercise 3

Create a component named `RandomNumbers`. It should take the values: `min`, `max` and `count` to `props`.

Next, it generates an array with as many pseudo-random numbers in the range of `min` to `max` as the `count` shows.

The component should display in a `div` element first the information about the given minimum, maximum and number of integers (`RandomNumbersInfo` subkomponent). Next, it should display drawn integers using `join(separator)` (`RandomNumbersList` subkomponent).

Render your component on the page with sample data in the attributes to props.

**Do the exercise two ways:**
- **with a function component first**
- **with a class component (the same component but built with a ES6 class**
