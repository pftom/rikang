import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import LoginScreen from '../components/LoginScreen';
import Register from '../components/Register';
import MainScreen from '../components/MainScreen';
import ProfileScreen from '../components/ProfileScreen';
import Practice from '../components/practice';

export const UserNavigator = StackNavigator({
    Login: { screen: LoginScreen },
    Register: { screen: Register },
  },
  {
    navigationOptions: {
      gesturesEnabled: false,
      header: null,
    }
  }
);

export const AppNavigator = StackNavigator({
  UserNavigator: { screen: UserNavigator },
  Main: { screen: MainScreen },
  Profile: { screen: ProfileScreen },
});

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state.get('nav').toJS()
});

export default connect(mapStateToProps)(AppWithNavigationState);
