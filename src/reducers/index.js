import { combineReducers } from 'redux-immutable';
import { reducer as formReducer } from 'redux-form/immutable';
import { fromJS } from 'immutable';

import nav from './nav';
import auth from './auth';
import account from './account';

const AppReducer = combineReducers({
  nav,
  auth,
  account,
  form: formReducer,
});

export default AppReducer;
