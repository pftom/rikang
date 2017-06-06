import { REHYDRATE } from 'redux-persist/constants';

import { 
  RECEIVE_LOGIN_FAILURE, 
  RECEIVE_LOGIN_SUCCESSFUL, 
  REQUEST_LOGIN, 
  LOGOUT,
  SUBMIT_CONFIRM,
  SET_TOKEN,
} from '../constants';


export const initialAuthState = {
  authenticated:  false,
  isFetching: false,
  failure: false,
  token: null,
}

function auth(state = initialAuthState, action) {
  switch (action.type) {
    case REHYDRATE: 
      return { ...state, authenticated: true };
    case REQUEST_LOGIN:
      return { ...state, isFetching: true, authenticated: false, failure: false, };
    case RECEIVE_LOGIN_SUCCESSFUL:
      return { ...state, authenticated: true, isFetching: false, failure: false, };
    case RECEIVE_LOGIN_FAILURE:
      return { ...state, authenticated: false, isFetching: false, failure: true, };
    case LOGOUT:
      return { ...state, authenticated: false };
    case SUBMIT_CONFIRM:
      return { ...state, failure: false };
    case SET_TOKEN:
      return { ...state, token: action.data }
    default:
      return state;
  }
}

export default auth;
