import { NavigationActions } from 'react-navigation';
import Immutable from 'immutable';

import { AppNavigator } from '../navigators/AppNavigator';


const nav = function nav(state, action) {
  let nextState;
  switch (action.type) {
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}

export default nav;