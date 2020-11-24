# More children &ndash; exercises

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

### E-mail template (~ 5min - 10min)

Create a component named `Email`. Give it the following structure:

```HTML
<div>
    <h1>{subject}</h1>
    <div>{body}<hr />{footer}</div>
    <pre>{textBody}<hr />{footer}</pre>
</div>
```

The component should take through props:
- `subject` that is entered in the header;
- `body` that is entered in the inner `div`;
- `footer` that is entered in both `footer` elements;
- `textBoxy` that is entered in the `pre` element.

Render and test your component using the following construction:
```JSX
<Email
    subject = {
        <span>Hello, this is the content of the e-mail</span>
    }
    body = {
        <h1>E-mail promo!</h1>
        <hr />
        <p>Hello, this is your new e-mail...</p>
    }
    textBody = {
        <p>E-mail promo!</p>
        <p>Hello, this is your new e-mail...</p>
    }
    footer = {
        <p>Mail by my
          <a href="http://example.com/unsubscribe">Click here to unsubscribe</a>
        </p>
    }
/>
```

Check if the page has been generated properly.

**Remember to create a main `App` component as well, and to use components from the exercise in it. Render the main `App` component on the page.**


## Exercises to do on your own

### Exercise 1 (~ 15min - 20min)
#### Holy grail page template

Create a component named `WebsiteTemplate`. It should render the "holy grail" page template:

![Layout of the holy grail page](https://www.w3.org/TR/2012/WD-css3-flexbox-20120322/images/flex-order-page.svg "Layout of the holy grail page")

Use the attached style sheet, you can use this article: <https://philipwalton.github.io/solved-by-flexbox/demos/holy-grail/> .

The component should take through props:
- `header` that is entered in the header;
- `content` that is entered in the main content;
- `menu` that is entered in the menu on the left;
- `ads` that is entered in the section on the right;
- `footer` that is entered in the footer.

Render and test your component using the following construction:
```JSX
<WebsiteTemplate
    header = {
        <h1>My page</h1>
    }
    content = {
        <div>
            <h1>Welcome to my page</h1>
            <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </p>
        </div>
    }
    menu = {
        <ul>
            <li>Homepage</li>
            <li>About me</li>
            <li>Contact</li>
        </ul>
    }
    ad = {null}
    footer = {
        <p>&copy; 2017 Coders Lab</p>
    }
/>
```

Check if the page has been generated properly.

**Remember to create a main `App` component as well, and to use components from the exercise in it. Render the main `App` component on the page.**
