import { REHYDRATE } from 'redux-persist-immutable/constants';
import Immutable from 'immutable';

import { persistor } from '../store';

const initialAuthState = Immutable.Map({ isLoggedIn: false });

const auth = function auth(state = initialAuthState, action) {
  switch (action.type) {
    case 'Logout':
      persistor.purge();
      return state.set('isLoggedIn', false);
    case REHYDRATE:
      const { auth } = action.payload;
      let isLoggedIn = auth ? auth.get('isLoggedIn') : false;
      return state.set('isLoggedIn', isLoggedIn);
    default:
      return state;
  }
}

export default auth;