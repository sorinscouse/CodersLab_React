import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
    //Function generates pseudo-random integers in the range of 1-10.
    function genNumber(){
        return Math.round( Math.random() * 9 + 1 );
    }
    //Do not modify the code above

    ReactDOM.render(
        <h1>Hello, World!</h1>,
        document.getElementById('app')
    );
});
