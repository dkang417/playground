// still using strings here
import { SIGN_IN, SIGN_OUT } from '../actions/types';

// do not modify this object
const INITIAL_STATE = {
    isSignedIn: null
};
// default state is the const INITIAL_STATE 
// actions are signin and signout
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGN_IN:
            return { ...state, isSignedIn: true };
        case SIGN_OUT:
            return { ...state, isSignedIn: false };
        default:
            return state;    
    }
};

