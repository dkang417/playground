import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

//redux invokes dispatches 
export const fetchPostsAndUsers = () => async (dispatch,getState) => {
    // console.log('about to fetch posts right now...');
    // dispatch the result of our fetchpost actioncreator
    // await tells us to first fetch posts then go on to nextline
    await dispatch(fetchPosts());
    // console.log(getState().posts);
    // console.log('fetched posts!');
    const userIds = _.uniq(_.map(getState().posts, 'userId'));
    userIds.forEach(id => dispatch(fetchUser(id)));

};



// define function that returns a function
export const fetchPosts = () => async dispatch => {
        const response = await jsonPlaceholder.get('/posts');

    dispatch({ type: 'FETCH_POSTS', payload: response.data });
      
};


export const fetchUser = id => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({ type: 'FETCH_USER', payload: response.data });
};

// memoize solution 
// export const fetchUser = (id) => dispatch => {
//     _fetchUser(id, dispatch);
// };
// const _fetchUser = _.memoize(async(id, dispatch) => {
//     const response = await jsonPlaceholder.get(`/users/${id}`);

//     dispatch({ type: 'FETCH_USER', payload: response.data })
// });
