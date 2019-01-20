// do not modify this object
const INITIAL_STATE = {
    isSignedIn: null
};
// default state is the const INITIAL_STATE 
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SIGN_IN':
            return { ...state, isSignedIn: true };
        case 'SIGN_OUT':
            return { ...state, isSignedIn: false };
        default:
            return state;    
    }
};

