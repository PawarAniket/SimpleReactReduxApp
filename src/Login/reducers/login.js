import Immutable from 'seamless-immutable';
import * as l from './actions';

const initialState = {
    username: null,
    password: null,
    token: null,
    isUserAuthenticated: false
}

const loginReducer = (state = Immutable(initialState), action) => {
    switch (action.type) {
        case l.SET_USERNAME:
            return Immutable.set(state, 'username', action.username);

        case l.SET_PASSWORD:
            return Immutable.set(state, 'password', action.password);

        case l.SET_USER_AUTHENTICATION_TOKEN:
            return Immutable.set(state, 'token', action.token);

        default:
            return state;
    }
}

export default loginReducer;