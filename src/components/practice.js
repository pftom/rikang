import React, { Component } from 'react';
import { TouchableOpacity, Text, View, } from 'react-native';

import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';


class Practice extends Component {


  handleSubmit() {
    this.props.dispatch(
      NavigationActions.navigate({
        routeName: 'Main',
      })
    )
  }

  render() {
    return (
      <TouchableOpacity onPress={this.handleSubmit.bind(this)}>
        <Text>hhhh</Text>
      </TouchableOpacity>
    )
  }
}

export default connect()(Practice);