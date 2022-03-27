import authReducer from './isLoggedIn';
import userReducer from './user';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    auth: authReducer,
    user: userReducer
});

export default allReducers;