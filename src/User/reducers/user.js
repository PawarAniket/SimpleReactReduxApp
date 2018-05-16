import Immutable from 'seamless-immutable';

const initialState = {
    formValues: {
        user: {
            firstName: 'Aniket',
            lastName: 'Pawar'
        }
    }
}

const userReducer = (state = Immutable(initialState), action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default userReducer;