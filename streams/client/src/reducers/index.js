import { combineReducers } from 'redux';
import authReducer from './authReducers';
import streamReducer from './streamReducer';
//adding redux form
import { reducer as formReducer } from 'redux-form';



export default combineReducers({
    auth: authReducer,
    form: formReducer,
    streams: streamReducer
});
