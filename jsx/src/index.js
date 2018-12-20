// import react and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';


// create a react component
const App = () => {

    const buttonText = 'click me';
    return (
        <div>
            <label className="label" for="name">
                Enter name:
            </label>
            <input id="name" type="text" />
            <button style={{ backgroundColor: 'blue', color: 'white' }}>
                { buttonText }
            </button>
        </div>
    );
};

// take the react component and show it on the scree
ReactDOM.render(
    <App />, 
    document.querySelector('#root')
);