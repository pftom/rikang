import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux';;

import store from './src/store';
import AppWithNavigationState from './src/navigators/AppNavigator';


class DangJianApp extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('DangJian', () => DangJianApp);
