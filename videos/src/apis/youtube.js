import axios from 'axios';

const KEY = "AIzaSyDHSfCchhJVd3PIoDZNnfMCvUo1GEI6ZPg";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});

