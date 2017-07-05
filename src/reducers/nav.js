import { NavigationActions } from 'react-navigation';
import Immutable from 'immutable';

import { AppNavigator } from '../navigators/AppNavigator';

const firstAction = AppNavigator.router.getActionForPathAndParams('Main');
const tempNavState = AppNavigator.router.getStateForAction(firstAction);


const initialNavState = Immutable.fromJS(tempNavState);

const nav = function nav(state = initialNavState, action) {
  let nextState;
  switch (action.type) {
    case 'Login':
      nextState = state.merge(AppNavigator.router.getStateForAction(NavigationActions.back(), state.toJS()));
      break;
    case 'Logout':
      nextState = state.merge(AppNavigator.router.getStateForAction(NavigationActions.navigate({ routeName: 'Login' }), state.toJS()));
      break;
    default:
      nextState = state.merge(AppNavigator.router.getStateForAction(action, state.toJS()));
      break;
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}

export default nav;