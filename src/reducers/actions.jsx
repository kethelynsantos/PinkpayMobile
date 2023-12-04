export const SET_TOKEN = 'SET_TOKEN'
export const SET_CLIENT_ID = 'SET_CLIENT_ID';
export const SET_CLIENT_NAME = 'SET_CLIENT_NAME';
export const SET_SIGNED = 'SET_SIGNED'
export const SET_DATE_OF_BIRTH = 'SET_DATE_OF_BIRTH'
export const SET_CLIENT_DATA = 'SET_CLIENT_DATA'
export const SET_ACCOUNT_DATA = 'SET_ACCOUNT_DATA'
export const SET_TRANSFER_DATA = 'SET_TRANSFER_DATA'



export const setToken = token => dispatch => {
  dispatch({
    type: SET_TOKEN,
    payload: token
  });
};


export const setClientId = (clientId) => ({
  type: SET_CLIENT_ID,
  payload: clientId
});


export const setClientName = (clientName) => ({
  type: SET_CLIENT_NAME,
  payload: clientName
});


export const setSigned = signed => dispatch => {
  dispatch({
    type: SET_SIGNED,
    payload: signed
  });
};


export const setClientData = clientData => dispatch => {
  dispatch({
    type: SET_CLIENT_DATA,
    payload: clientData
  });
};

export const setAccountData = accountData => dispatch => {

  dispatch({
    type: SET_ACCOUNT_DATA,
    payload: accountData
  });
};


export const resetState = () => dispatch => {
    dispatch({
      type: RESET_STATE,
    });
};

export const setTransferData = (transferData) => dispatch => {
  dispatch({
    type: SET_TRANSFER_DATA,
    payload: transferData
  });
};
