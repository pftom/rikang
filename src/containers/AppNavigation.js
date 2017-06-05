import React from 'react';
import { Platform } from 'react-native';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';

import TabBarNavigation from '../components/TabBarNavigation';
import LoginScreen from './Login';
import TabOneScreenTwo from '../components/TabOne/views/TabOneScreenTwo';
import MessageBox from '../components/common/MessageBox';
import Learning from '../components/TabTwo/views/Learning';
import DetailThree from '../components/TabTwo/views/DetailThree';
import DetailFour from '../components/TabTwo/views/DetailFour';
import ActivityBox from '../components/common/ActivityBox';
import PersonData from '../components/TabThree/views/PersonData';
import Setting from '../components/TabThree/views/Setting';
import Feedback from '../components/common/Feedback';
import ModifyPassword from '../components/common/ModifyPassword';

export const AppNavigation = StackNavigator(
  {
    TabBarNavigation: { screen: TabBarNavigation },
    Login: { screen: LoginScreen },
    TabOneScreenTwo: { screen: TabOneScreenTwo },
    MessageBox: { screen: MessageBox },
    Learning: { screen: Learning },
    DetailThree: { screen: DetailThree },
    DetailFour: { screen: DetailFour },
    ActivityBox: { screen: ActivityBox },
    PersonData: { screen: PersonData },
    Setting: { screen: Setting },
    Feedback: { screen: Feedback },
    ModifyPassword: { screen: ModifyPassword },
  },
  {
    navigationOptions: {
      headerLeft: null,
      headerStyle: Platform.OS === 'ios' ? { height: 90 } : { height: 88 },
    },
    initialRouteName: 'TabBarNavigation'
  }
);


const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigation navigation={addNavigationHelpers({ dispatch, state: nav })} />
)

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);