import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { connect } from 'react-redux';

import AppNavigation from './containers/AppNavigation';
import Login from './containers/Login';
import { SET_TOKEN } from './constants';
import { fetchEvents, fetchNews, fetchEventHeadline } from './actions/home';
import { getStorageData } from './actions/user';

class App extends Component {

    constructor(props) {
      super(props);

      this.state = {
        isLogged: false,
      };
    }

    componentWillReceiveProps(nextProps) {
      if (nextProps !== this.props) {
        if (!nextProps.authenticated) {
          this.setState({
            isLogged: false,
          })
        } else {
          this.setState({
            isLogged: true,
          })
        }
      }
    }

    _handleLoginState() {
      let that = this;
      AsyncStorage.getItem('token')
                  .then(value => {
                    if (value && value.length) {
                      const { dispatch } = this.props;
                      dispatch({ type: SET_TOKEN, data: value });
                      dispatch(getStorageData());
                      dispatch(fetchEvents());
                      dispatch(fetchNews());
                      dispatch(fetchEventHeadline());
                      that.setState({
                        isLogged: true,
                      })
                    } else {
                      that.setState({
                        isLogged: false,
                      })
                    }
                    
                  })
                  .catch(err => {
                    that.setState({
                      isLogged: false,
                    })
                  })
    }

    componentWillMount() {
      this._handleLoginState()
    }

    render() {
        console.log('logged', this.state.isLogged);
        const { authenticated } = this.props;
        if (this.state.isLogged && authenticated) {
          return <AppNavigation />
        }
        return <Login />;
    }
}

export default connect(state => ({ authenticated: state.auth.authenticated }))(App);