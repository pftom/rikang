import { 
  REQUEST_LOGIN, 
  RECEIVE_LOGIN_SUCCESSFUL, 
  RECEIVE_LOGIN_FAILURE,
  LOGOUT,
  REQUEST_ASYNCSTORAGE_CHANGE,
  ASYNCSTORAGE_SUCCESS,
  ASYNCSTORAGE_ERROR,
  SUBMIT_CONFIRM,
} from '../constants/index';

import { AsyncStorage } from 'react-native';
import { persistor } from '../store';
import request from '../util/request';
import { header, commonApi } from '../util/config';

// This means, Uh, I want simplify the common, but, in my first project I want make it clearly as much as possible.
// import { dispatchSuccess, dispatchFailure } from './index';

export const requestLogin = values => ({
  type: REQUEST_LOGIN,
  values,
});

export const requestAsyncStorageChange= () => ({
  type: REQUEST_ASYNCSTORAGE_CHANGE,
});

export const asyncStorageChangeSuccess = () => ({
  type: ASYNCSTORAGE_SUCCESS,
});

export const asyncStorageChangeError = () => ({
  type: ASYNCSTORAGE_ERROR,
});

export const submitConfirm = () => ({
  type: SUBMIT_CONFIRM,
})



export const receiveLoginSucess = (json) => dispatch => {
  dispatch(requestAsyncStorageChange());
  return AsyncStorage.setItem('token', json.token)
              .then((data) => {
                dispatch(asyncStorageChangeSuccess());
                return dispatch({
                          type: RECEIVE_LOGIN_SUCCESSFUL,
                          success: json,
                          recevedAt: Date.now(),
                        })
              })
              .catch(err => dispatch(asyncStorageChangeError));
};

export const receiveLoginFailure = (err) => ({
  type: RECEIVE_LOGIN_FAILURE,
  err: err,
  recevedAt: Date.now(),
});


export const fetchLogin = values => dispatch => {
  dispatch(requestLogin(values));
  return request.post(commonApi.base + commonApi.login, values)
    .then(json => dispatch(receiveLoginSucess(json)))
    .catch(err => dispatch(receiveLoginFailure(err)));
};

export const logout = () => dispatch => {
  dispatch(requestAsyncStorageChange());
  return AsyncStorage.removeItem('token')
              .then(data => {
                console.log()
                persistor.purge();
                dispatch(asyncStorageChangeSuccess());
                return dispatch({
                          type: LOGOUT,
                        })
              })
              .catch(err => asyncStorageChangeError());
};