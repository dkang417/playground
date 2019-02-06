import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './spinner';

// class Component not functional Component
class App extends React.Component {
    
    
    // anytime a new instance of app component shows- this constructor gets called first
    // constructor(props) {
    //     super(props);
    
    //     this.state = {lat: null, errorMessage:'' };
    // }

    // same as using constructor and super with this.state
    state = { lat:null, errorMessage:'' };

    // gets called automatically one time when content first shows up on screen
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })     
        );
    }
  
    // helper method so we dont have conditionals in render method
    renderContent() {

        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>;
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />
        }

        return <Spinner message="Please accept location request" />;
    }

    // react says we must define render and return jsx or throws error
    render() {
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));
