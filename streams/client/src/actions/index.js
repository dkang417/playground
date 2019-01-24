// our api
import streams from '../apis/streams';
// still using strings here
import { SIGN_IN, SIGN_OUT } from './types';

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


export const createStream = formValues => async dispatch => {
    streams.post('/streams', formValues);
};

