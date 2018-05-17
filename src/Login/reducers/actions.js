export const SET_USERNAME = 'login/SET_USERNAME';
export const SET_PASSWORD = 'login/SET_PASSWORD';
export const SET_USER_AUTHENTICATION_STATUS = 'login/SET_USER_AUTHENTICATION_STATUS';

export function setUsername(username) {
    return {
        type: SET_USERNAME,
        username
    }
}

export function setPassword(password) {
    return {
        type: SET_PASSWORD,
        password
    }
}

export function setUserAuthenticationStatus(status) {
    return {
        type: SET_USER_AUTHENTICATION_STATUS,
        status
    }
}