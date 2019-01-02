import React from 'react';


class SearchBar extends React.Component {
   
    state = { term: '' };
    
    // arrow function to make sure you get the right 'this'
    // use callback to send search term from searchBar to parent App
    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    };
    
    render() {
        return (
            <div className="ui segment">  
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field"> 
                        <label>Image Search</label>    
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={e => this.setState({ term: e.target.value })}
                        />
                    </div>
                </form>
            </div>
        );
    }
}


export default SearchBar;
