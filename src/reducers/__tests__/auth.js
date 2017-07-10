import { Map } from 'immutable';

import auth from '../auth';

import {
  REGISTER,
  REGISTER_ERROR,
  REGISTER_SUCCESS,

  LOGIN,
  LOGIN_ERROR,
  LOGIN_SUCCESS,

  LOGOUT,

  CLEAR_STATE,
  CLEAR_TOKEN,

  
} from '../../constants/'

const registerAction = {
  type: REGISTER,
};

const registerErrorAction = {
  type: REGISTER_ERROR,
};

const registerSuccessAction = {
  type: REGISTER_SUCCESS,
};

const loginAction = {
  type: LOGIN,
};

const loginSuccessAction = {
  type: LOGIN_SUCCESS,
  token: "1234",
};

const loginErrorAction = {
  type: LOGIN_ERROR,
};

const logoutAction = {
  type: LOGOUT,
};

const clearStateAction = {
  type: CLEAR_STATE,
};

const clearTokenAction = {
  type: CLEAR_TOKEN,
};


const rehydrateHasToken = {
  type: 'REHYDRATE',
  payload: Map({
    auth: {
      token: '123',
    },
  }),
};

const rehydrateNoToken = {
  type: 'REHYDRATE',
  payload: Map({
    auth: {
      token: null,
    },
  }),
};

const initialAuthState = Map({ 
  token: null,
  isLoggedIn: false,
  isLoadingData: false,
  loginError: false,
  loginSuccess: false,
  registerError: false,
  registerSuccess: false,
});


test('the auth reducer work as well', () => {
  //test register reducer
  expect(auth(initialAuthState, registerAction)).toMatchSnapshot();
  expect(auth({...initialAuthState, isLoadingData: true}, registerErrorAction)).toMatchSnapshot();
  expect(auth({...initialAuthState, isLoadingData: true}, registerSuccessAction)).toMatchSnapshot();

  //test login reducer
  expect(auth(initialAuthState, loginAction)).toMatchSnapshot();
  expect(auth({...initialAuthState, isLoadingData: true}, loginSuccessAction)).toMatchSnapshot();
  //test login error reducer
  //no token
  expect(auth({...initialAuthState, isLoadingData: true}, loginErrorAction)).toMatchSnapshot();
  //have token
  expect(auth({...initialAuthState, token: "123", isLoadingData: true}, loginErrorAction)).toMatchSnapshot();
  //logout 
  expect(auth({...initialAuthState, token: "123"}, logoutAction)).toMatchSnapshot();
  //clear state
  expect(auth({...initialAuthState, loginError: true, clearStateAction: true }, logoutAction)).toMatchSnapshot();
  //clear token
  expect(auth({...initialAuthState, token: "123" }, clearTokenAction)).toMatchSnapshot();

  //rehydrate
  //has token
  expect(auth(initialAuthState, rehydrateHasToken)).toMatchSnapshot();
  //no token
  expect(auth(initialAuthState, rehydrateNoToken)).toMatchSnapshot();
})