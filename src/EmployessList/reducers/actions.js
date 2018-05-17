export const SET_EMPLOYEE_LIST = 'employee/SET_EMPLOYEE_LIST';


export function setEmployeeList(employeeList) {
    return {
        type: SET_EMPLOYEE_LIST,
        employeeList
    }
}