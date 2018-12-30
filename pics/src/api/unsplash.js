import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 2e8127e666e44670b1ae8ca193b58a5300a26036565b60ad70bb2e163c7ffc76'
    }
});
