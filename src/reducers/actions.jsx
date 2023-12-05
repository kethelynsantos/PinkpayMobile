export const SET_TOKEN = 'SET_TOKEN'
export const SET_CLIENT_ID = 'SET_CLIENT_ID';
export const SET_CLIENT_NAME = 'SET_CLIENT_NAME';
export const SET_CLIENT_PHOTO = 'SET_CLIENT_PHOTO';
export const SET_ACCOUNT_BALANCE = 'SET_ACCOUNT_BALANCE';



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


export const setClientPhoto = (clientPhoto) => ({
  type: SET_CLIENT_PHOTO,
  payload: clientPhoto
});


export const setAccountBalance = (balance) => ({
  type: 'SET_ACCOUNT_BALANCE',
  payload: balance,
});
