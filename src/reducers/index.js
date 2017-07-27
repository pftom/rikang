import { combineReducers } from 'redux-immutable';
import { reducer as formReducer } from 'redux-form/immutable';
import { fromJS } from 'immutable';

import nav from './nav';
import auth from './auth';
import home from './home';
import hospital from './hospital';
import doctor from './doctor';
import patient from './patient';
import qa from './qa';
import answer from './answer';
import service from './service';


const AppReducer = combineReducers({
  nav,
  auth,
  home,
  hospital,
  doctor,
  patient,
  service,
  qa,
  answer,
  form: formReducer,
});

export default AppReducer;
