// import react and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';


// create a react component

const App =  () => {
    return <div>Hi there!</div>;
};


// take the react component and show it on the scree
ReactDOM.render(
    <App />, 
    document.querySelector('#root')
);

