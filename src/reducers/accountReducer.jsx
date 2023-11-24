import {
    SET_TOKEN,
    SET_SIGNED,
    SET_DATE_OF_BIRTH,
    SET_CLIENT_DATA,
    SET_ACCOUNT_DATA,
    SET_TRANSFER_DATA
} from "./actions";

const initialSTate = {
    token: '',
    refresh: '',
    signed: false,
    clientData: {},
    accountData: {},
    transferData: {}
}



function userReducer(state = initialSTate, action) {
    switch (action.type) {
        case SET_TOKEN:
            return { ...state, token: action.payload }
        case SET_SIGNED:
            return { ...state, signed: action.payload }
        case SET_DATE_OF_BIRTH:
            return { ...state, dateOfBirth: action.payload }
        case SET_CLIENT_DATA:
            return { ...state, clientData: action.payload }
        case SET_ACCOUNT_DATA:
            return { ...state, accountData: action.payload }
        case SET_TRANSFER_DATA:
                return { ...state, transferData: action.payload }
        default:
            return state;
    }
}


export default userReducer;