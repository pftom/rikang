import { createSelector } from 'reselect';
import { formValueSelector } from 'redux-form/immutable';

//get the data from the store, as use for reselect computing derive data
const getLoginError = (state) => state.getIn(['auth', 'loginError']);
const getLoginSuccess = (state) => state.getIn(['auth', 'loginSuccess']);
const getIsLoadingData = (state) => state.getIn(['auth', 'isLoadingData']);
const getRegisterError = (state) => state.getIn(['auth', 'registerError']);
const getRegisterSuccess = (state) => state.getIn(['auth', 'registerSuccess']);



const getIsVerifyCode = (state) => state.getIn(['auth', 'isVerifyCode']);
const verifyCodeError = (state) => state.getIn(['auth', 'verifyCodeError']);
const verifyCodeSuccess = (state) => state.getIn(['auth', 'verifyCodeSuccess']);

const getIsRequestSmsCode = (state) => state.getIn(['auth', 'isRequestSmsCode']);
const getRequestSmsCodeSuccess = (state) => state.getIn(['auth', 'requestSmsCodeSuccess']);
const getRequestSmsCodeError = (state) => state.getIn(['auth', 'requestSmsCodeError']);
const getRequestPhone = (state) => state.getIn(['auth', 'phone']);


export const getInputInitial = createSelector(
  [ getIsVerifyCode, verifyCodeSuccess, verifyCodeError, getLoginError, getLoginSuccess, getIsLoadingData, getRegisterError, getRegisterSuccess, getIsRequestSmsCode, getRequestSmsCodeSuccess, getRequestSmsCodeError, getRequestPhone ],
  (isVerifyCode, verifyCodeSuccess, verifyCodeError, loginError, loginSuccess, isLoadingData, registerError, registerSuccess, isRequestSmsCode, requestSmsCodeSuccess, requestSmsCodeError, phone ) => ({
      isVerifyCode,
      verifyCodeSuccess,
      verifyCodeError,

      loginError,
      loginSuccess,
      isLoadingData,
      registerError,
      registerSuccess,

      isRequestSmsCode,
      requestSmsCodeSuccess,
      requestSmsCodeError,
      phone,
  })
);