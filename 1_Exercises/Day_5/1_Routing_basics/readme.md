# Basic routing &ndash; exercises

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

### Nested paths (~ 10min - 20min)

Create a React application with the following routing:
- `/` - path rendering the `Main` component that contains a `h1` with the text "Welcome to the page";
- `/about/us` - path rendering the `AboutUs` component that contains a `p` with the text "A bit more about us...";
- `/about/company` - path rendering the `AboutCompany` component that contains a `p` with the text "A bit more about the company...".

All paths use the main template that contains a `div` with a `h1` element with the text "React Application with React Router" and the content rendered by the children.

Additionally, paths beginning with `/about` have their own additional template that contains a `div` with a `h2` element with the text "About us"  and the content rendered by the children.

Render and test your application, check the paths.


## Exercises to do on your own

### Exercise 1 (~ 10min - 20min)

Create a React application with the following routing:
- `/` - path rendering the `Home` component that contains a `h1` with the text "Welcome to the page";
- `/blog` - path rendering the `Blog` component that contains a `h1` with the text "Blog";
- `/pricing` - path rendering the `Pricing` component that contains a `h1` with the text "Pricing".

All paths use the main template that contains a `div` with a `h1` element with the text "React Application with React Router", a `ul` element with links to every subpage and the content renderen by the children.

Render and test your application, check the paths.
