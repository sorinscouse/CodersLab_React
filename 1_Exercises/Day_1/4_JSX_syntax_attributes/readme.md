# Attributes &ndash; exercises

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

### Attribute of a variable  (~ 5min)

Store the image address in a variable by adding the following code:

 ```JavaScript
 const imageUrl = 'http://www.nice.com/PublishingImages/Career%20images/J---HR_Page-4st-strip-green-hair%20(2).png';
```

Next, use REACT to render an  ```img``` in an element with the ```app``` id that will have the ```src``` attribute set to ```imageUrl``` variable in JSX. Remember to close the ```img``` tag.

### Dynamic styles  (~ 10min - 20min)

Using ```prompt()```, ask the user about border color and store the answer in a variable.

Check if the answer is `red`, `green` or `blue` (you can use array method ```.indexOf()```). If not, render a ```div``` with the text `Incorrect color` in the element with the ```app``` id.

If the given color was correct, in React, render a ```div``` in an element with the ```app``` id with the following styles:
- Width: 100px,
- Height: 100px,
- Border width: 5px,
- Border style: solid,
- Border color: entered by the user.


## Exercises to do on your own

### Exercise 1  (~ 10min)
####  Adding styles

Set the height to ```100px``` in all three divs, and give each a background color corresponding with its name. **Remember to use the right style name**.

Try to complete this task with an auxiliary variable (one for each div) and then in a short form directly in each JSX tag.

### Exercise 2  (~ 15min - 20min)
#### Reacting to user's response

In ```js/exercise02.jsx``` there is a function named ```genNumber()``` that generates pseudo-random numbers in the range 1-10. Use it to generate the numbers A and B.

Then use the ```prompt()``` function to ask the user for the result of adding A and B. **Display both numbers in the prompt message so that the user has a chance to see them.**

Use REACT to render a ```div``` in an element with the ```app``` id. If the user's answer was correct, display a message `Correct answer` in the newly created ```div``` element and set the background to green. If the answer was incorrect, the message should be `Incorrect answer`, and the background red.

Try to do this task in several ways:
 - Saving the text and background color in two variables;
 - Saving a finished element in one variable depending on the situation;
 - Create a new ```getAnswerElement(a, b, answer)``` function. It will take A, B and the user's answer as parameters. It should return the ready element depending on the situation. Then, modify the place in which you use ```ReactDOM.render()``` so that it renders a ```div``` with the result of ```getAnswerElement()``` function directly in it.
