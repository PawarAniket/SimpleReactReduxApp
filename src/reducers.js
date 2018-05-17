import {combineReducers} from 'redux';
import loginReducer from './Login/reducers/login';
import employeeReducer from './EmployessList/reducers/employee';

const appReducer = combineReducers({
    loginReducer, employeeReducer
});

export default appReducer;