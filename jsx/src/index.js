// import react and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';


// create a react component
const App = () => {

    const buttonText = { text: 'click me' };
    const style = { backgroundColor: 'blue', color: 'white' };
    return (
        <div>
            <label className="label" for="name">
                Enter name:
            </label>
            <input id="name" type="text" />
            <button style={style}>
                { buttonText.text }
            </button>
        </div>
    );
};

// take the react component and show it on the scree
ReactDOM.render(
    <App />, 
    document.querySelector('#root')
);