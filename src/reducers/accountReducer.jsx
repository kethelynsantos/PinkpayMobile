import {
    SET_TOKEN,
    SET_CLIENT_ID,
    SET_CLIENT_NAME,
    SET_CLIENT_PHOTO
} from "./actions";

const initialState = {
    token: '',
    refresh: '',
    clientId: null,
    clientName: '',
    clientPhoto: '',
};

function userReducer(state = initialState, action) {
    switch (action.type) {
        case SET_TOKEN:
            return { ...state, token: action.payload };
        case SET_CLIENT_ID:
            return { ...state, clientId: action.payload };
        case SET_CLIENT_NAME:
            return { ...state, clientName: action.payload };
        case SET_CLIENT_PHOTO:
            return { ...state, clientPhoto: action.payload };
        default:
            return state;
    }
}

export default userReducer;
