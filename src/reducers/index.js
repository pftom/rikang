import { combineReducers } from 'redux-immutable';
import { reducer as formReducer } from 'redux-form/immutable';
import { fromJS } from 'immutable';

import nav from './nav';
import auth from './auth';
import account from './account';
import home from './home';
import hospital from './hospital';
import doctor from './doctor';
import fav from './fav';


const AppReducer = combineReducers({
  nav,
  auth,
  account,
  home,
  hospital,
  doctor,
  fav,
  form: formReducer,
});

export default AppReducer;
