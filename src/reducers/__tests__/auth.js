import { Map } from 'immutable';

import auth from '../auth';

import {
  REGISTER,
  REGISTER_ERROR,
  REGISTER_SUCCESS,
} from '../../constants/'

const initialAuthState = Immutable.Map({ 
  token: null,
  isLoggedIn: false,
  isLoadingData: false,
  loginError: false,
  loginSuccess: false,
  registerError: false,
});

const register = {
  type: REGISTER
};

const registerSuccess = {
  type: REGISTER_SUCCESS
}