import React, { Component } from 'react';
import { TouchableOpacity, Text, View, } from 'react-native';

import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';


class Practice extends Component {

  render() {
    return (
      <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}onPress={() => this.props.dispatch({ type: 'LOGIN', payload: { username: '13786684444', password: 'huang1314' } })}>
        <Text>hhhh</Text>
      </TouchableOpacity>
    )
  }
}

export default connect()(Practice);