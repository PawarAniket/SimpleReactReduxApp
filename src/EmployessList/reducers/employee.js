import Immutable from 'seamless-immutable';
import * as l from './actions';

const initialState = {
   employeeList:[]
}

const employeeReducer = (state = Immutable(initialState), action) => {
    switch (action.type) {
        case l.SET_EMPLOYEE_LIST:
            return Immutable.set(state, 'employeeList', action.employeeList);

        default:
            return state;
    }
}

export default employeeReducer;