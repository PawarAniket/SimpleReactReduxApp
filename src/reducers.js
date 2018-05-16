import {combineReducers} from 'redux';
import homeReducer from '../src/Home/reducers/home';
import userReducer from '../src/User/reducers/user';

const appReducer = combineReducers({
    homeReducer, userReducer
});

export default appReducer;