# Advanced routing &ndash; exercises

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

### Advanced paths (~ 5min - 15min)

Create a React application with the following routing:
- `/` - main path with greeting;
- `/hello/:name` - path rendering the `HelloYou` component that contains a `h1` with the text "Hello, {name}", where the `{name}` is a name written in the path;
- `/checkage/:age` - path rendering the `CheckAge` component that contains a `h1` with the text "Adult" if the age entered in `age` is greater than 18. Otherwise, the text should be "Under age".

On each sub-page, display the menu, up to three sample paths (`/`, `/hello/Jan`, `/checkage/50`). The selected links should be bold.


## Exercises to do on your own

### Exercise 1 (~ 5min - 10min)

Modify exercise 1 from the previous section so that every selected link had a green border.

Use `NavLink` instead of `Link` to prevent possible problems with coloring links that are not exactly as they should be.

Render and test your application, check the paths and they appearance.

### Exercise 2 (~ 15min - 25min)

Create a React application with the following routing:
- `/` - main path with a list of all services links, that is: `/services/www`, `/services/shop`, `/services/seo`;
- `/services/:service` - path rendering the `ServiceInfo` component that contains `h1` with the text "We offer: {service}" where the `{service}` is the name entered in the URL parameter. Correct `service` parameters are: `www`, `shop` or `seo`. Check this. If anything else was entered - display just the link to the homepage;
- If an incorrect path is entered, also display the link to the homepage.

Render and test your application, check the paths. Check what happens if you enter an incorrect path (entering `/none` or `/services/incorrect` should result in display of a link to homepage).
