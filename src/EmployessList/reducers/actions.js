export const SET_EMPLOYEE_LIST = 'employee/SET_EMPLOYEE_LIST';
export const SET_USER_MORE_INFO = 'employee/SET_USER_MORE_INFO';

export function setEmployeeList(employeeList) {
    return {
        type: SET_EMPLOYEE_LIST,
        employeeList
    }
}

export function setMoreInfoData(userid, data) {
    return {
        type: SET_USER_MORE_INFO,
        userid, data
    }
}