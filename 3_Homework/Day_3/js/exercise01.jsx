document.addEventListener('DOMContentLoaded', function(){
    function UpperCaseText(props){
        return <div>
            {props.text.toUpperCase()}
        </div>
    }

    function App(props){
        return <div>
            <UpperCaseText text="Ala ma kota!" />
        </div>;
    }

    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});