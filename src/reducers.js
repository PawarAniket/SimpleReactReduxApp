import {combineReducers} from 'redux';
import loginReducer from './Login/reducers/login';

const appReducer = combineReducers({
    loginReducer
});

export default appReducer;