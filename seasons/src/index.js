import React from 'react';
import ReactDOM from 'react-dom';

// class Component not functional Component
class App extends React.Component {
    render() {
        window.navigator.geolocation.getCurrentPosition(
            position => console.log(position),
            err => console.log(err)
        );

        return <div> Latititude HERE: </div>;
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));

