import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';



// class Component not functional Component
class App extends React.Component {
    
    // same as using constructor and super with this.state
    state = { lat:null, errorMessage:'' };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })     
        );
    }
  
    // react says we must define render
    render() {

        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>;
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />
        }

        return <div> Loading..... </div>;
    
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));

