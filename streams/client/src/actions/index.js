import { SIGN_IN, SIGN_OUT } from './types';

// all our action creators
// we call these once user is logged in or out

export const signIn = () => {
    return {
        type: SIGN_IN
    };
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};
