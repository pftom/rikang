import { createSelector } from 'reselect';

//get the data from the store, as use for reselect computing derive data
const getLoginError = (state) => state.getIn(['auth', 'loginError']);
const getLoginSuccess = (state) => state.getIn(['auth', 'loginSuccess']);
const getIsLoadingData = (state) => state.getIn(['auth', 'isLoadingData']);

export const getInputInitial = createSelector(
  [ getLoginError, getLoginSuccess, getIsLoadingData ],
  (loginError, loginSuccess, isLoadingData) => ({
      loginError,
      loginSuccess,
      isLoadingData,
  })
);