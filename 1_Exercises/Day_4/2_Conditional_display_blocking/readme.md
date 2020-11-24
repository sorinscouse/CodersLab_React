# Conditional display blocking &ndash; exercises

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

### Secret locker (~ 5min - 10min)

Create a component named `SecretStuff`.

It takes `pwd`, `correctPwd` and `secret` from props.

If `pwd` and `correctPwd` attributes were the same, a `div` is displayed with the contents of `secret` inside it. Otherwise, block the rendering.

Render and test your component.

**Remember to create a main `App` component as well, and to use components from the exercise in it. Render the main `App` component on the page.**

**PS. This is just an example. NEVER use blocking in such a way, or checking confidential information. As you can easily guess, the data are NOT secretly hidden :)**


## Exercises to do on your own

### Exercise 1 (~ 15min - 20min)
#### Pretended fetching data

Create a component named `AccountData`. It should store `false` value under the name `data` in its inner state.

In `js/exercise01.js`, there is an object that enables you to pretend sending a request to an external API. Import it to `js/app.jsx`, e.g. using:

```import fakeAPI from './exercise01';```

It is used as follows:
```JavaScript
fakeAPI.load().then( callback );
```

The call will take a few seconds, then the `callback` function that was passed as a parameter to the `then()` method will be called. **Callback will take an array with data as a parameter.** Check in the console how the data look like in order to know how to render them.

Immediately after the component is mounted, call ```fakeAPI.load().then( callback )```. In the callback, pass a function that will change the `data` inner state to the data received from the API.

As long as the `data` is `false`, block rendering of the component.

If you have the data, generate the received data as an array 3 columns x 12 rows.

Render and test your component.

**Remember to create a main `App` component as well, and to use components from the exercise in it. Render the main `App` component on the page.**
