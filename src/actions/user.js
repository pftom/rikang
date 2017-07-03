import { 
  REQUEST_LOGIN, 
  RECEIVE_LOGIN_SUCCESSFUL, 
  RECEIVE_LOGIN_FAILURE,
  LOGOUT,
  REQUEST_ASYNCSTORAGE_CHANGE,
  ASYNCSTORAGE_SUCCESS,
  ASYNCSTORAGE_ERROR,
  SUBMIT_CONFIRM,
  REQUEST_CHANGE_PASSWD,
  REQUEST_CHANGE_PASSWD_SUCCESSFUL,
  REQUEST_CHANGE_PASSWD_FAILURE,
  REQUEST_PERSON_PROFILE,
  REQUEST_PERSON_PROFILE_SUCCESSFUL,
  REQUEST_PERSON_PROFILE_FAILURE,
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

export const asyncStorageChangeSuccess = (data) => ({
  type: ASYNCSTORAGE_SUCCESS,
  data: data,
});

export const asyncStorageChangeError = () => ({
  type: ASYNCSTORAGE_ERROR,
});

export const submitConfirm = () => ({
  type: SUBMIT_CONFIRM,
});

//获取AsyncStorage里面的profile数据
export const getStorageData = () => dispatch => {
  dispatch(requestAsyncStorageChange());
  return AsyncStorage.getItem('profile')
                  .then(data => dispatch(asyncStorageChangeSuccess(data)))
                  .catch(err => dispatch(asyncStorageChangeError()));
};



export const receiveLoginSucess = (json) => dispatch => {
  console.log('json', json);
  dispatch(requestAsyncStorageChange());
  return AsyncStorage.setItem('token', json.token)
              .then((data) => {
                dispatch(asyncStorageChangeSuccess());
                dispatch(fetchPersonProfile(json.token));
                return dispatch({
                          type: RECEIVE_LOGIN_SUCCESSFUL,
                          success: json,
                          recevedAt: Date.now(),
                        });
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
                AsyncStorage.removeItem('profile')
                  .then(data => {
                    dispatch(asyncStorageChangeSuccess());
                    return dispatch({
                              type: LOGOUT,
                            })
                  })
                  .catch(err => asyncStorageChangeError());
              })
              .catch(err => asyncStorageChangeError());
};


const requestChangePasswd = () => ({
  type: REQUEST_CHANGE_PASSWD,
});

const requestChangePasswdSuccessful = (data) => ({
  type: REQUEST_CHANGE_PASSWD_SUCCESSFUL,
  data: data,
});

const requestChangePasswdFailure = () => ({
  type: REQUEST_CHANGE_PASSWD_FAILURE,
});

export const fetchChangePasswd = (values, token) => dispatch => {
  dispatch(requestChangePasswd());
  return request.put(commonApi.base + commonApi.changePassword, token, values)
            .then(json => dispatch(requestChangePasswdSuccessful(json)))
            .catch(err => dispatch(requestChangePasswdFailure(err)));
}

const requestPersonProfile = () => ({
  type: REQUEST_PERSON_PROFILE,
});

const requestPersonProlfileSuccessful = (json) => dispatch => {
  dispatch(requestAsyncStorageChange());
  return AsyncStorage.setItem('profile', json)
              .then((data) => {
                dispatch(asyncStorageChangeSuccess());
                return dispatch({
                        type: REQUEST_PERSON_PROFILE_SUCCESSFUL,
                        data: json,
                      })
              })
              .catch(err => dispatch(asyncStorageChangeError));
}

const requestPersonProlfileFailure = () => ({
  type: REQUEST_PERSON_PROFILE_FAILURE,
});

export const fetchPersonProfile = (token) => dispatch => {
  dispatch(requestPersonProfile());
  return request.get(commonApi.base + commonApi.profile, null, token)
                .then(json => {
                  let userProfile = {
                    avatar: json.avatar,
                    college: json.college,
                    full_name: json.full_name,
                    identity: json.identity,
                    major: json.major,
                    sex: json.sex,
                  }
                  dispatch(requestPersonProlfileSuccessful(JSON.stringify(userProfile)))
                })
                .catch(err => dispatch(requestPersonProlfileFailure()));
};

