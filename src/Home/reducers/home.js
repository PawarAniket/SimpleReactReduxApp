import * as h from "./action";
import Immutable from "seamless-immutable";

const initialState = {
    name: 'Aniket Pawar',
    experience: 2.5
};

const homeReducer = (state = Immutable(initialState), action) => {
    switch (action.type) {
        case h.CHANGE_NAME:
            return Immutable.set(state, 'name', action.name);

        default:
            return state;
    }
}

export default homeReducer;