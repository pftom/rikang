import React from 'react';
import { NavigationActions } from 'react-navigation';

import { AppNavigation } from '../containers/AppNavigation';

function nav(state, action) {
  let nextState;

  switch (action.type) {
    default:
      nextState = AppNavigation.router.getStateForAction(action, state);
    break;
  }

  return nextState || state;
}

export default nav;