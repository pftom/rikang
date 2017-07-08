import { combineReducers } from 'redux-immutable';
import { reducer as formReducer } from 'redux-form/immutable';
import { fromJS } from 'immutable';

import nav from './nav';
import auth from './auth';
import account from './account';
import home from './home';

const AppReducer = combineReducers({
  nav,
  auth,
  account,
  home,
  form: formReducer,
});

export default AppReducer;
