import { REHYDRATE } from 'redux-persist-immutable/constants';
import Immutable from 'immutable';

//import action constants
import { LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT, LOGIN, CLEAR_TOKEN, SET_TOKEN } from '../constants/'
import { persistor } from '../store';

const initialAuthState = Immutable.Map({ 
  token: null,
  isLoggedIn: false,
  isLoadingData: false,
  loginError: false,
});

const auth = function auth(state = initialAuthState, action) {
  switch (action.type) {

    // later write the register logic

    case LOGIN: 
      //capture login action and show loading spinner
      return state.merge({
        isLoadingData: true,
        loginError: false,
      });

    case LOGIN_SUCCESS:

    //set the isLoggedIn
      return state.merge({
        isLoggedIn: true,
        isLoadingData: false,
      });

    case LOGIN_ERROR:

      //if login error, change the state 
      return state.merge({
        isLoadingData: false,
        loginError: true,
      })

    case LOGOUT:
      //clear all the persist data in the storage
      persistor.purge();

      //change the show screen
      return state.merge({
        isLoggedIn: false,
      })

    case SET_TOKEN: 

    //set the token for operate database later
      const { payload } = action;
      return state.merge({
        token: payload,
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
      let isLoggedIn = !!token ? true : false;
      
      return state.merge({
        isLoggedIn,
        token
      })

    default:
      return state;
  }
}

export default auth;