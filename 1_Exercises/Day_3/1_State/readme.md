# state &ndash; exercises

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

### Changes (~ 10min - 15min)

Create a component named `HelloWorld` that will store text to display as **local state**. By default, set the text to "Hello, World!".

The component should render the text in `h1` element.

Add a timer to your component that will change the text to "Hi, Everyone!" after 5 seconds. **Remember to do it in the right life cycle method, and to release resources.**

Add a `console.log` to every life cycle method.

Render your component.

Look at the console. Which life cycle methods have been initiated and which have not? Why? Can you see a difference between what you have just done and multiple use of `ReactDOM.render()`?

**Remember to create a main `App` component as well, and to use components from the exercise in it. Render the main `App` component on the page.**


## Exercises to do on your own

### Exercise 1 (~ 15min - 25min)
#### Displaying characters

Create a component named `TextTyper`. It should take `text` value through props.

The component should render the first character of the text in `h1` element. Remember to store the characters that will be displayed using the **state**.

Add a timer or interval to your component so that each second an additional character appears in `h1` (every second 1==next character). **Remember to do it in the right life cycle method, and to release resources.**

The effect should be as follows for the `text` set to `Hello!`:
- 0s.: H
- 1s.: He
- 2s.: Hel
- 3s.: Hell
- 4s.: Hello
- 5s.: Hello!

Render your component with sample text.

Take a look at React Developer Tools. Click your component - you will see its `props`, current `state` and and update highlights.

**Remember to create a main `App` component as well, and to use components from the exercise in it. Render the main `App` component on the page.**

### Exercise 2 (~ 10min - 15min)
#### Displaying characters in backward order

Modify exercise 1. Make the `TextTyper` component take an additional, a boolean value: `reversed` through props.

If props value `reversed` is set to `true`, the component should have the opposite effect, i.e. at first show all characters, and show one character less each second.

The effect should be as follows for the `text` set to `Hello!`:
- 0s.: Hello!
- 1s.: Hello
- 2s.: Hell
- 3s.: Hel
- 4s.: He
- 5s.: H
- 6s.: (empty :) )

Try to stick to the principle of **DRY (don't repeat yourself)** and do not produce unnecessary code. Try to write so that your component contains no identical/similar code lines.

### Exercise 3 (~ 15min - 25min)
#### Light change

Create a component named `StrobeLight`. It will take two values through props: light `color` and blinking `frequency` in ms.

The component should render an empty `div` with the following styles:
- Width: 500px,
- Height: 50px,
- Background color: white.

Add a timer or interval to your component that will make the background color change alternately every specific number of ms `frequency`:
- if the background was white - it will change to the color from `props`,
- otherwise it will change to white.

Render your component several times with sample data and enjoy your own strobe light :)

Take a look at React Developer Tools. Click your components - you will see their `props`, current `state` and and update highlights.

**Remember to create a main `App` component as well, and to use components from the exercise in it. Render the main `App` component on the page.**


## Additional exercises

### Exercise 4  (~ 10min - 15min)
#### LifeCyclesTester component - updating state

Do you remember LifeCyclesTester component (an exercise from the Component life cycle section)?
In state of this component, create a field that will store given text, e.g. (`text`). Render it in `h1` element.

Add a timer in an appropriate life cycle method that will change the text to "Updated state" after 5 seconds.

The component should also display the following information in the console: "the inner state just changed", "component will update", "component updated", etc., for **appropriate life cycle methods**. (The previous information should be displayed as well).

Look at the console. Which life cycle methods have been initiated and which have not? Why?

**Do not create a main `App` component yet.**

### Exercise 5  (~ 10min - 15min)
#### LifeCyclesTester component - updating props

Create an App component and render our LifeCyclesTester component in it in the following way:

```JavaScript
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }

    }
    componentDidMount() {
        this.intervalID = setInterval(() => {
            this.setState({
                counter: this.state.number + 1
            })
        }, 2000)
    }

    render() {
        return <LifeCyclesTester text={this.state.counter} />
    }
}
```
As you can see, the App component passes the changing counter as props to the LifeCyclesTester component. Create appropriate life cycle methods in LifeCyclesTester and display the following in the console: "component will receive a new set of props", "props object has just changed", "component will update", "component updated". (the previous information should be displayed as well).

Look at the console. Which life cycle methods have been initiated and which have not? Why?
