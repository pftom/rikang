import React, { PureComponent } from 'react';
import { TouchableOpacity, Text, View, } from 'react-native';

import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

//import async action constants
import { GET_SINGLE_POST } from '../../../constants/'

//import selector for computing data
import { getPostSelector } from '../../../selectors/'


class PostDetail extends PureComponent {

  componentDidMount() {
    const { navigation } = this.props;
    const { token, id, dispatch } = navigation.state.params;

    dispatch({ type: GET_SINGLE_POST, payload: { token, id }});
  }

  render() {
    const { post } = this.props;
    console.log('post', post);
    return (
      <Text>hhhh</Text>
    )
  }
}

export default connect(
  state => getPostSelector(state),
)(PostDetail);