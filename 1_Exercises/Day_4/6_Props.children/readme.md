# props.children &ndash; exercises

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

### Children and grandchildren (~ 5min - 15min)

Create components named `ParentComponent`, `ChildComponent` and `GrandchildComponent`.

The `ParentComponent` should render `ChildComponent` and pass its children to it as children.

`ChildComponent` should render `GrandchildComponent` and pass its children to it as children.

 `GrandchildComponent` simply displays its children.

Render and test your component using the following construction:
```JSX
<ParentComponent>
    <h1>It works!</h1>
</ParentComponent>
```

The code should display the following structure:
```
-- ParentComponent
    |-- ChildComponent
          |-- GrandchildComponent
                |-- <h1>It works!</h1>
```

**Remember to create a main `App` component as well, and to use components from the exercise in it. Render the main `App` component on the page.**


## Exercises to do on your own

### Exercise 1 (~ 10min - 15min)
#### Displaying children

Create a component named `ShowMore`. It should display a link `a` with the text "Show more".

When the `a` element is clicked, it disappears (stop rendering it) and the content shows instead of it. The content is the children of this component.

Render and test your component using the following construction:
```JSX
<ShowMore>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mollis enim eget iaculis fermentum. Nulla facilisi. Morbi auctor quis leo ut efficitur. Duis a nulla sed nunc vestibulum condimentum ac vitae lorem. Vestibulum at ornare lacus, in euismod diam. Fusce varius, justo convallis varius elementum, quam felis molestie purus, accumsan imperdiet lacus nulla sed nunc. Suspendisse efficitur risus vel ante pharetra cursus.</p>
</ShowMore>
```

**Remember to create a main `App` component as well, and to use components from the exercise in it. Render the main `App` component on the page.**
