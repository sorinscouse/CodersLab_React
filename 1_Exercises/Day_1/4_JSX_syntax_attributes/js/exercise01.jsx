import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
    //Do not modify the code above

    const redDiv = <div></div>;
    const greenDiv = <div></div>;
    const blueDiv = <div></div>;

    //Do not modify the code below
    ReactDOM.render(
        <div>
            {redDiv}{greenDiv}{blueDiv}
        </div>,
        document.getElementById('app')
    );
});
