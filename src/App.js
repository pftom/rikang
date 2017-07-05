import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import AppWithNavigationState from './navigators/AppNavigator';
import Login from './components/LoginScreen';

class App extends Component {
  render() {
    const { isLoggedIn } = this.props;
    if (!isLoggedIn) {
      return <Login />
    }
    return <AppWithNavigationState />
  }
}

export default App;
