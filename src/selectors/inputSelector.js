import { createSelector } from 'reselect';

//get the data from the store, as use for reselect computing derive data
const getLoginError = (state) => state.getIn(['auth', 'loginError']);
const getLoginSuccess = (state) => state.getIn(['auth', 'loginSuccess']);
const getIsLoadingData = (state) => state.getIn(['auth', 'isLoadingData']);
const getRegisterError = (state) => state.getIn(['auth', 'registerError']);

export const getInputInitial = createSelector(
  [ getLoginError, getLoginSuccess, getIsLoadingData, getRegisterError ],
  (loginError, loginSuccess, isLoadingData, registerError) => ({
      loginError,
      loginSuccess,
      isLoadingData,
      registerError,
  })
);