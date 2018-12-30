import React from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';


class App extends React.Component {

    onSearchSubmit(term) {
        // console.log(term);
        axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term },    
            headers: {
                Authorization: 'Client-ID 2e8127e666e44670b1ae8ca193b58a5300a26036565b60ad70bb2e163c7ffc76'
            }
        });

        


    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '50px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        );
    }
}


export default App;
