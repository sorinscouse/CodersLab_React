# Day 1 &ndash; homework

### Exercise 1

Create a fully working environment that will allow you to write JSX files, compile them to JS files and run a working React application.

Remember to:
- Run ```npm init``` command
- Install appropriate modules
- Set Webpack - the first input file should be `js/exercise00.jsx` (then with subsequent exercise numbers), the output `js/out.js`

**Remember to modify appropriately _webpack.config.js_ when doing exercises, so that it points to the file you are currently working on in the _entry_.**

### Exercise 2

After the page loads, display ```prompt(text)``` to the user twice, asking for a name and age. Store the answer in a variable.

Next, using React render a ```div``` in the element with ```app``` id that will display "{name} is {age} years old" with appropriate data.

### Exercise 3

Create an array representing 5 colors of your choice and store it in a variable.

Next, using React render a ```div``` in the element with ```app``` id that will display a list of all the colors. Perform all operations directly in an expression in the given JSX tag.

You will need the array method: ```join(separator)```.

### Exercise 4

In the code create a variable with any color (correct CSS color code), e.g.:

```JavaScript
const color = 'yellow';
```

Next, using React render a ```div``` in the element with ```app``` id that will have a text message taken from a variable and written in the color also taken from the variable. Perform all operations directly in an expression in the given JSX tag.

### Exercise 5

In the code, create a variable with any size you like (correct CSS size), e.g.:

```JavaScript
const size = '500px';
```

Next, using React render a ```div``` in the element with ```app``` id with the following style:
- Width: taken from the size variable,
- Height: taken from the size variable,
- Color: blue.

Perform all operations directly in an expression in the given JSX tag. Every time the variable changes, the `div` size should also change.

### Exercise 6

In `js/exercise06.js` there is an object representing a person. Import it to `js/exercise06.jsx`, e.g. using:

`import person from './exercise06';`

Create the following structure (try to come up with element types and pick similar styles on your own):


 ![Exercise 6 screen](img/zadanie06_screen.png "Zadanie 6 screen")


Using React, render a ```div``` in the element with ```app``` id that will display information on that person according to the structure above. Names of this object properties can be found in the imported file.
