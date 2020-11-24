import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
    function AddNumbers(props){
        const sum = props.numberA + props.numberB;
        return <div>
            {sum}
        </div>
    }

    function App(props){
        return <div>
            <AddNumbers numberA={2} numberB={3} />
        </div>;
    }

    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});