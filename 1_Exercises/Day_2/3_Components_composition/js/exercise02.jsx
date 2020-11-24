import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
    function Chat(props){
        return <div className="chat">
            <header>
                <h1>Private chat</h1>
            </header>
            <div>
                <ul>
                    <li>Chat entry 1</li>
                    <li>Chat entry 2</li>
                    <li>Chat entry 3</li>
                </ul>
            </div>
            <footer>
                <input type="text"/>
                <button>Send</button>
            </footer>
        </div>
    }

    function App(props){
        return <div>
            <Chat />
        </div>;
    }

    // class Chat extends React.Component{
    //     render(){
    //         return <div className="chat">
    //             <header>
    //                 <h1>Chat prywatny</h1>
    //             </header>
    //             <div>
    //                 <ul>
    //                     <li>Chat entry 1</li>
    //                     <li>Chat entry 2</li>
    //                     <li>Chat entry 3</li>
    //                 </ul>
    //             </div>
    //             <footer>
    //                 <input type="text"/>
    //                 <button>Send</button>
    //             </footer>
    //         </div>
    //     }
    // }
    //
    // class App extends React.Component{
    //     render(){
    //         return <div>
    //             <Chat />
    //         </div>;
    //     }
    // }

    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});
