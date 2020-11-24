# Component summary &ndash; exercises

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

### React DevTools installation (~ 10min - 15min)

Install and test the React development tools together with your lecturer.


## Exercises to do on your own

### Exercise 1  (~ 10min)

#### React Developer Tool - testing

Review the exercise solutions from previous sections today. Run them in React Developer Tools - see how the structure of your components and elements is displayed.

### Exercise 2  (~ 20min - 25min)

#### Receipt component and props

Create a component named `Receipt`. It should take an array with receipt `items` in the `props`.

Objects should have the following form:

```JavaScript
{
    price   :   price,
    count   :   quantity,
    name    :   'item name'
}
```

Display all contents in an array:

Name | Price / 1 | Count | Total price
--- | --- | --- | ---
Butter | 4.00 | 1 | 4.00
Bread | 3.50 | 2 | 7.00
Apples | 2.99 | 1.5 | 4.49
TOTAL | - | - | 15.49

Remember to make appropriate calculations. At the end, display the total amount of the receipt.

In `js/exercise02.js`, there is an array with objects of sample shopping items. Import it to `js/app.jsx`, e.g. using:

`import shopping from './exercise02';`

Render your receipt component with the imported data.

**Remember to create a main `App` component as well, and to use components from the exercise in it. Render the main `App` component on the page.**

**Do this exercise either with class components, or function components - choose one way and stick to it.**

### Exercise 3  (~ 10min - 15min)
#### Receipt component - composition

If you had not done this already, divide the component from exercise 2 into the following components:
- ReceiptHeader
- ReceiptItems
- ReceiptItem
- ReceiptFooter
- Receipt.

Think about where to make calculations and how to pass them to subcomponents.

The component should work after this division :)
