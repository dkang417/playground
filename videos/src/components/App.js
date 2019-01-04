import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';

class App extends React.Component{
    state = {videos: [], selectedVideo: null };

    onTermSubmit = async term => {
        const response =  await youtube.get('/search', {
            params: {
                q: term
            }
        });
        this.setState({ videos: response.data.items });
        // console.log(this.state.videos);
    };

    onVideoSelect = (video) => {
        console.log('from the app!', video);
    };

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} /> 
            </div>
        )
    }
};

export default App;
