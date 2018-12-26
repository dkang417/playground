import React from 'react';
import ReactDOM from 'react-dom';

// class Component not functional Component
class App extends React.Component {

    constructor(props) {
        super(props);
        // this is the only time we direct assignment on this.state = something
        this.state = { lat: 9999 };

        window.navigator.geolocation.getCurrentPosition(
            position => {
                // we call setstate to update our lat position
                this.setState({ lat: position.coords.latitude });
            },
            err => console.log(err)
        );
    }
    // react says we must define render
    render() {
        return <div> Latititude HERE:{this.state.lat} </div>;
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));

