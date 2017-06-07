import { combineReducers } from 'redux';

import {
  REQUEST_CHANGE_PASSWD,
  REQUEST_CHANGE_PASSWD_SUCCESSFUL,
  REQUEST_CHANGE_PASSWD_FAILURE,
  REQUEST_PERSON_PROFILE,
  REQUEST_PERSON_PROFILE_SUCCESSFUL,
  REQUEST_PERSON_PROFILE_FAILURE,
} from '../constants';

const initialProfile = {
  isFetching: false,
  data: {},
  success: false,
  err: false,
}


function usersProfile (state = initialProfile, action) {
  switch(action.type) {
    case REQUEST_PERSON_PROFILE:
      return { ...state, isFetching: true };
    case REQUEST_PERSON_PROFILE_SUCCESSFUL:
      console.log('data', action);
      return { ...state, data: action.data, isFetching: false, success: true, err: false };
    case REQUEST_PERSON_PROFILE_FAILURE:
      return { ...state, err: true, isFetching: false, success: false };
    default: return state;
  }
}

const initialUserState = {
  isFetching: false,
  success: false,
  err: false,
}

function usersAuth (state = initialUserState, action) {
  switch (action.type) {
    case REQUEST_CHANGE_PASSWD:
      return { ...state, isFetching: true };
    case REQUEST_CHANGE_PASSWD_SUCCESSFUL:
      return { ...state, isFetching: false, success: true, err: fasle };
    case REQUEST_CHANGE_PASSWD_FAILURE:
      return { ...state, isFetching: false, success: false, err: true };
    default: return state;
  }
}

export default combineReducers({
  usersProfile,
  usersAuth,
});