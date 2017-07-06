import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import AppWithNavigationState from './navigators/AppNavigator';
import { UserNavigator } from './navigators/AppNavigator';
import { addNavigationHelpers } from 'react-navigation';

class App extends Component {
  render() {
    const { isLoggedIn } = this.props;
    if (!isLoggedIn) {
      return <UserNavigator />
    }
    return <AppWithNavigationState navigation={addNavigationHelpers()}/>
  }
}

export default App;
