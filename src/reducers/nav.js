import { NavigationActions } from 'react-navigation';
import Immutable from 'immutable';

import { AppNavigator } from '../navigators/AppNavigator';

const firstAction = AppNavigator.router.getActionForPathAndParams('Main');
const tempNavState = AppNavigator.router.getStateForAction(firstAction);


const initialNavState = Immutable.fromJS(tempNavState);

const nav = function nav(state = initialNavState, action) {
  let nextState;
  switch (action.type) {
    default:
      nextState = state.merge(AppNavigator.router.getStateForAction(action, state.toJS()));
      break;
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}

export default nav;