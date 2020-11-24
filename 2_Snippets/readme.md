<img src="http://coderslab.pl/wp-content/uploads/2016/03/logo-v2.png" align="right" style="width:150px; margin-top:45px"/>

# React - Snippets
> Short pieces of code that solve various problems, illustrate dependencies, or show how to use some more complicated functions.

#### 1. Complete application code with posts divided into components
```JSX
class User extends React.Component {
    render() {
        return <div className="user">
            <img src={this.props.user.avatar}/>
            <strong>{this.props.user.name}</strong>
        </div>;
    }
}

class Post extends React.Component {
    render() {
        return <div className="post">
            <h1>{this.props.post.title}</h1>
            <p>{this.props.post.body}</p>
        </div>;
    }
}

class App extends React.Component{
    render() {
    return <div>
        <User user={ this.props.post.author }/>
        <Post post={ this.props.post }/>
    </div>;
    }
}

ReactDOM.render(
	<App post={post} />,
	document.getElementById('app')
);
```

#### 2. Sample component with internal state and support of life cycle events
```JSX
class Counter extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            seconds: 0
        };
    }
    componentDidMount(){
        this.intervalId = setInterval(() => {
            this.setState({
                seconds: this.state.seconds + 1
            });
        }, 1000);
    }
    componentWillUnmount(){
        clearInterval(this.intervalId);
    }
    render(){
        return <h1>You have been here {this.state.seconds} s.</h1>;
    }
}
```

#### 3. ToDo application
```JSX
class ToDoItem extends React.Component{
    handleDoneClick = () => {
        //Remember to check if
        //the attribute exists and can be called!
        if ( typeof this.props.onDone === 'function' ){
            this.props.onDone(this.props.title);
        }
    }
    render(){
        return <li><span>{this.props.title}</span>
            <button
                onClick={this.handleDoneClick}
            >End</button></li>;
    }
}

class ToDoList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items: this.props.items
        };
    }
    handleItemDone = (title) => {
        const newItems = this.state.items.filter(item => {
            return item !== title;
        });
        this.setState({
            items: newItems
        });
    };
    render(){
        const items = this.state.items.map(item => {
            return <ToDoItem
                title={item}
                onDone={this.handleItemDone}
            />
        });
        return <ul>
            {items}
        </ul>;
    }
}

const items = ['Buy bread','Cook soup',
    'Prepare a presentation on events'];

ReactDOM.render(
    <ToDoList items={items} />,
    document.getElementById('app')
);
```

#### 4. Light bulb application
```JSX
class BulbOn extends React.Component{
    render(){
        return <strong>
            The bulb is on
            <button
                onClick={this.props.onClick}>
                Turn off
            </button>
        </strong>
    }
}

class BulbOff extends React.Component{
    render(){
        return <em>
            Light bulb is off
            <button
                onClick={this.props.onClick}>
                Turn on
            </button>
        </em>
    }
}

class Bulb extends React.Component {
    constructor(props){
        super(props);

        this.state = {bulbOn:false};
    }
    handleTurnOffClick = () => {
        this.setState({bulbOn:false});
    }
    handleTurnOnClick = () => {
        this.setState({bulbOn:true});
    }
    render() {
        let bulb;
        if (this.state.bulbOn){
            bulb = <BulbOn
                onClick={this.handleTurnOffClick}
            />
        } else {
            bulb = <BulbOff
                onClick={this.handleTurnOnClick}
            />
        }

        return <div>
            <h1>Light bulb</h1>
            { bulb }
        </div>;
    }
}

ReactDOM.render(
    <Bulb />,
    document.getElementById('app')
);
```

#### 5. Example of a controlled component - forms
```JSX
class FormExample extends React.Component {
    constructor(props) {
        super(props);
		//Initial input value set to '':
        this.state = {name: ''};
    }
    handleNameChange = (event) => {
        this.setState({name: event.target.name});
    };
    handleSubmit = (event) => {
        event.preventDefault();
        console.log('Your name is '
            + this.state.name);
    };
    render(){
        return <form onSubmit={this.handleSubmit}>
            <label>
                Name:
                <input type="text"
                       value={this.state.name}
                       onChange={this.handleNameChange}
                />
            </label>
            <input type="submit" value="Submit" />
        </form>;
    }
}

ReactDOM.render(
    <FormExample />,
    document.getElementById('app')
);
```

#### 6. Example of select element - forms
```JSX
class SelectExample extends React.Component {
    constructor(props) {
        super(props);
        //Initial select value set to 'mrs':
        this.state = {title: 'mrs'};
    }
    handleTitleChange = (event) => {
        this.setState({title: event.target.value});
    };
    handleSubmit = (event) => {
        event.preventDefault();
        console.log('Your title is '
            + this.state.title);
    };
    render(){
        return <form onSubmit={this.handleSubmit}>
            <label>
                Title:
                <select
                    value={this.state.title}
                    onChange={this.handleTitleChange}>
                    <option value="ms">Ms</option>
                    <option value="mrs">Mrs</option>
                    <option value="mr">Mr</option>
                </select>
            </label>
            <input type="submit" value="Submit" />
        </form>;
    }
}

ReactDOM.render(
    <SelectExample />,
    document.getElementById('app')
);
```
