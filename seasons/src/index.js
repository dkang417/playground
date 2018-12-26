import React from 'react';
import ReactDOM from 'react-dom';

// class Component not functional Component
class App extends React.Component {

    constructor(props) {
        super(props);
        // this is the only time we direct assignment on this.state = something
        this.state = { lat: null, errorMessage: '' };

        window.navigator.geolocation.getCurrentPosition(
            position => {
                // we call setstate to update our lat position
                this.setState({ lat: position.coords.latitude });
            },
            err => {
                this.setState({ errorMessage: err.message });
            }
        );
    }

    componentDidMount() {
        console.log('my component was rendered to the screen');
    }
    componentDidUpdate() {
        console.log('my component was just updated-it rerendered');
    }
    // react says we must define render
    render() {

        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>;
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <div> Latitude is: {this.state.lat}</div>;
        }

        return <div> Loading..... </div>;
    
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));

