import {
    SET_TOKEN,
    SET_SIGNED,
    SET_DATE_OF_BIRTH,
    SET_CLIENT_DATA,
    SET_ACCOUNT_DATA,
    SET_TRANSFER_DATA,
    SET_CLIENT_ID 
} from "./actions";

const initialState = {
    token: '',
    refresh: '',
    signed: false,
    dateOfBirth: '',
    clientId: null,
    clientData: {},
    accountData: {},
    transferData: {}
};

function userReducer(state = initialState, action) {
    switch (action.type) {
        case SET_TOKEN:
            return { ...state, token: action.payload };
        case SET_SIGNED:
            return { ...state, signed: action.payload };
        case SET_DATE_OF_BIRTH:
            return { ...state, dateOfBirth: action.payload };
        case SET_CLIENT_DATA:
            return { ...state, clientData: action.payload };
        case SET_ACCOUNT_DATA:
            return { ...state, accountData: action.payload };
        case SET_TRANSFER_DATA:
            return { ...state, transferData: action.payload };
        case SET_CLIENT_ID: 
            return { ...state, clientId: action.payload };
        default:
            return state;
    }
}

export default userReducer;
