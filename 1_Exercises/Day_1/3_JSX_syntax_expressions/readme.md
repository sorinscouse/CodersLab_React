# Expressions &ndash; exercises

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

### Adding user's numbers  (~ 10min)

> You will need the ```prompt(text)``` function to complete this and subsequent exercises.
>
> This is a function built into the browser which will display a window that lets the user enter any value. The function will display the information contained in the `text` parameter, when the user enters and accepts the text the function will return it.

When the page has loaded, display two ```prompt(text)``` to the user encouraging him to enter numbers A and B. Store the result in a variable. Do not forget to use ```Number(str)``` to change a string into a number.

Next, use REACT to render a ```div``` in an element with ```app``` id. The div will store the result of adding A and B. The addition should be performed directly in an expression in the JSX tag.

## Exercises to do on your own

### Exercise 1  (~ 5min - 10min)
####  Displaying user's age

Using```prompt()```, take the year of birth of the user. Store the answer in a variable. NDo not forget to use ```Number(str)``` to change a string into a number.

Next, using ```(new Date()).getFullYear()``` method, download current year.

Using JSX, display the user's age in a `h1` tag. The subtraction should be done directly in an expression in the JSX tag.

### Exercise 2 (~ 5min - 10min)
#### Displaying data from external file

In `js/exercise02.js`, there is an object representing a person. Import it to `js/app.jsx`, e.g. using:

`import person from './exercise02';`

Next, use React to render a ```div``` in an element with the ```app``` id that will display the title, name, surname, and the age of the person.  The names of these object properties can be found in the imported file.

### Exercise 3 - A simple calculator (~ 15min - 20min)

Create a simple calculator that calculates the result of adding, subtracting, multiplying or dividing.

Modify the exercise done with the lecturer to display one more ```prompt()``` that will take one of the following signs: `+`, `-`, `*` or `/` - the sign corresponds to the mathematical operations that will be performed for the numbers A and B.

Do the exercise in such a way that different elements were rendered depending on the operation: `h1` for adding, `h2` for subtracting, `h3` for multiplying, and `h4` for dividing. The mathematical operations should be done directly in an expression in the JSX tag.

### Exercise 4  (~ 10min - 15min)
#### Calculator - modification

Modify exercise 3 so that you create a funkction named ```calc(a, b, operation)``` that will take A, B, and a string representing a mathematical operation sign (one of the following: `+`, `-`, `*` or `/`) as parameters. The function should return a ready JSX tag ```h1``` to ```h4``` depending on operation.

Next, modify the place in which you use ```ReactDOM.render()``` so that it renders a ```div``` with the result of ```calc()``` function directly in it.

### Exercise 5  (~ 10min - 15min)
#### Displaying data from external file - animals

In `js/exercise05.js`, there is an array representing a list of animals. Import it into `js/app.jsx` e.g. using:

`import animals from './exercise05';`

Use React to render a ```div``` in an element with ```app``` id that will display the total number of animals and all their names. Alle the operations should be done directly in an expression in the JSX tag.

You will need the ```length``` property and the ```join(separator)``` array method.

### Exercise 6  (~ 5min - 10min)
#### Conditional display based on entered data

Using ```prompt()```, take the user's age.

If the age value is less 18, display a ```div``` with `youth` id, otherwise display a ```div``` with `adult` id. Insert the entered age inside the div.
