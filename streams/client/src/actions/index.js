// our api
import streams from '../apis/streams';
import history from '../history';

// still using strings here
import {
    SIGN_IN,
    SIGN_OUT,
    CREATE_STREAM,
    FETCH_STREAM,
    FETCH_STREAMS,
    DELETE_STREAM,
    EDIT_STREAM
} from './types';

// all our action creators
// we call these once user is logged in or out

export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    };
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};

// restful conventions 
export const createStream = formValues => async (dispatch, getState ) => {
    const { userId } = getState().auth;
    const response = await streams.post('/streams', { ...formValues, userId });

    dispatch({ type: CREATE_STREAM, payload: response.data });
    // do some programatic navigation to get the user back to root route
    history.push('/');
};

export const fetchStreams = () => async dispatch => {
    const response = await streams.get('/streams');

    dispatch({ type: FETCH_STREAMS, payload: response.data });
};

export const fetchStream = (id) => async dispatch => {
    const response = await streams.get(`streams/${id}`);
    dispatch({ type: FETCH_STREAM, payload: response.data });
};

export const editStream = (id, formValues) => async dispatch => {
    const response = await streams.patch(`/streams/${id}`, formValues);
    dispatch({ type: EDIT_STREAM, payload: response.data });
    // do some programatic navigation to get the user back to root route
    history.push('/');
};

export const deleteStream = (id) => async dispatch => {
    await streams.delete(`/streams/${id}`);
    dispatch({ type: DELETE_STREAM, payload: id });
     // do some programatic navigation to get the user back to root route
     history.push('/');
};

