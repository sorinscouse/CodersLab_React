# props &ndash; exercises

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

### First component with props (~ 5min - 10min)

Create a component named `Hello`. Pass it the `name` and `surname` as `props`.

It should display the text: "Hello, name surname" with appropriate data in `h1` element.

Render it on the page with your name and surname in the props.

**Do the exercise two ways:**
- **with a function component first**
- **with a class component (the same component but built with a ES6 class**

## Exercises to do on your own

### Exercise 1  (~ 10min)
#### Passing props - numbers

Create a component named `AddNumbers`.  Pass it the `numberA` and `numberB` as `props`.

It should display the sum of those two numbers in the `h1` element.

Render it on the page with any numbers in the props.

**Do the exercise two ways:**
- **with a function component first**
- **with a class component (the same component but built with a ES6 class**

### Exercise 2 (~ 10min - 15min)
#### Passing props - array

Create a component named `Sum`. Pass it the `numbers` array as `props`.

It should display the sum of all numbers in the `h1` element. You can use `array.reduce()`.

Render it on the page with any array of numbers in the props.

**Do the exercise two ways:**
- **with a function component first**
- **with a class component (the same component but built with a ES6 class**

### Exercise 3 (~ 10min)
#### Passing props to LikeBox component

Modify the `LikeBox` component from the previous section. It should take the initial like number `likes` in the `props`.

Render it on the page with a random like number in the props.

**Do the exercise two ways:**
- **with a function component first**
- **with a class component (the same component but built with a ES6 class**

### Exercise 4  (~ 10min - 20min)
#### Passing Menu component to props - array of objects

Modify the `Menu` component from the previous section. It should take an array of objects with `menu` items in the `props`.

Objects should take the following form:

```JavaScript
{
    url     :   'link_address',
    text    :   'link text'
}
```

Using `array.map()`, turn those objects into `li` elements that will be nested in a `ul` list.

Render it on the page with the following `menu` attribute that will be passed to props:
```JavaScript
[
    {
        urL     :   '/',
        text    :   'Homepage'
    },
    {
        urL     :   '/blog',
        text    :   'Blog'
    },
    {
        urL     :   '/pricing',
        text    :   'Pricing'
    },
    {
        urL     :   '/contact',
        text    :   'Contact'
    }
]
```


**Do the exercise two ways:**
- **with a function component first**
- **with a class component (the same component but built with a ES6 class**
