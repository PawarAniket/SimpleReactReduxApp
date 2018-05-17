import Immutable from 'seamless-immutable';
import * as e from './actions';

const initialState = {
    employeeList: []
}

const employeeReducer = (state = Immutable(initialState), action) => {

    switch (action.type) {
        case e.SET_EMPLOYEE_LIST:
            return Immutable.set(state, 'employeeList', action.employeeList);

        case e.SET_USER_MORE_INFO:
            let userInfo = state.employeeList;
            let user = userInfo ? userInfo.find(info => info.userid == action.userid) : null;
            if (user) {
                userInfo = userInfo.map(info => {
                    if (info.id == user.id) {
                        return {...info, more: action.data};
                    }
                    else {
                        return info;
                    }
                })
            }
            return state.set("employeeList", userInfo);

        default:
            return state;
    }
}

export default employeeReducer;