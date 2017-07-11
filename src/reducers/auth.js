import { REHYDRATE } from 'redux-persist-immutable/constants';
import Immutable from 'immutable';

//import action constants
import { 
  LOGIN_SUCCESS, 
  LOGIN_ERROR, 
  LOGOUT, 
  LOGIN, 
  CLEAR_TOKEN, 
  SET_TOKEN,
  REGISTER,
  REGISTER_ERROR,
  REGISTER_SUCCESS,
  CLEAR_STATE,
} from '../constants/'
import { persistor } from '../store';

const initialAuthState = Immutable.Map({ 
  token: null,
  isLoggedIn: false,
  isLoadingData: false,
  loginError: false,
  loginSuccess: false,
  registerError: false,
  registerSuccess: false,
});

const auth = function auth(state = initialAuthState, action) {
  switch (action.type) {

    // later write the register logic
    case REGISTER:
      
      return state.merge({
        isLoadingData: true,
        registerError: false,
        registerSuccess: false,
      });

    case REGISTER_ERROR:
    
      return state.merge({
        isLoadingData: false,
        registerError: true,
      })

    case REGISTER_SUCCESS:

      return state.merge({
        isLoadingData: false,
        registerSuccess: true,
      });

    case LOGIN: 
      //capture login action and show loading spinner
      return state.merge({
        isLoadingData: true,
        loginError: false,
        loginSuccess: false,
      });

    case LOGIN_SUCCESS:

    //set the isLoggedIn
      return state.merge({
        isLoggedIn: true,
        isLoadingData: false,
        loginSuccess: true,
        token: action.token,
      });


    case LOGIN_ERROR:

      //if login error, change the state 
      return state.merge({
        isLoadingData: false,
        loginError: true,
      });

    case LOGOUT:
      //clear all the persist data in the storage
      persistor.purge();

      //change the show screen
      return state.merge({
        isLoggedIn: false,
        token: null,
        loginError: false,
        loginSuccess: false,
      });

    case CLEAR_STATE:

      return state.merge({
        loginError: false,
        registerError: false,
        loginSuccess: false,
        registerSuccess: false,
      });
      
    case CLEAR_TOKEN: 

      // 清除token
        return state.merge({
          token: null,
        });

    case REHYDRATE:
      //get persist data from redux-persist
      const { auth } = action.payload;
      const token = auth && auth.has('token') && auth.get('token');

      //use isLoggedIn show the initialScreen
      const isLoggedIn = !!token ? true : false;

      return state.merge({
        loginError: null,
        registerError: false,
        isLoggedIn,
        token,
        loginSuccess: false,
      });

    default:
      return state;
  }
}

export default auth;