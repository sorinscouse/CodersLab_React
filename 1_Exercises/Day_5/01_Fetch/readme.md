# fetch() &ndash; exercises

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

### Exercise 1 (~ 15min - 25min)

Add a polyfill `fetch()`.

Create a component named `BookInfo` that takes ISBN number of a book (`isbn`) through props.

Using `fetch()`, make a query to the address of an open API:
 > `https://www.googleapis.com/books/v1/volumes?q=isbn:{ISBNnumber}`

where instead of `ISBNnumber` you will insert the ISBN number from props.

In reply, you will receive a JSON. In it there will be an object containing an array under the key: `items`, and in it: the first element - an object with information about the book.

The component should render a `div` with a `h1` element with title in it (jest w tym obiekcie pod kluczem `volumeInfo.title`.

Remember to block component display before you receive the answer from the server.

Test your component the following way:

```JSX
<BookInfo isbn="0747532699" />
```


## Additional exercises

### Exercise 2 (~ 15min - 35min)

You must have the `JsonServer` installed to do this exercise correctly.
>
> Run it in the project directory. There is a `db.json` file known to you with a ready local database of cars.

Add a polyfill `fetch()`.

Create a component named `CarsDbManager`.

Using `fetch()`, make a query to your local server in order to download the list of all cars.

Next, build a list (remember about appropriate keys) in which you will display the `brand`, model (`name`) and a button "Sold" for every car.

When the button is clicked, you should make an appropriate query that will remove the given element from the local database. Next, refresh the view to see the changes.

The component should render a `div` with `ul` containing car list elements.

Remember to block component display before you receive the answer from the server.

Test your component.
