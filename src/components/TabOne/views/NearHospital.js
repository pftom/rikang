import React, { PureComponent } from 'react';
import { TouchableOpacity, Text, View, } from 'react-native';

import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

//import selector for computing data
import { getDoctorSelector } from '../../../selectors/';

//import async action constants
import { GET_HOSPITALS } from '../../../constants/'


class NearHospital extends PureComponent {

  componentDidMount() {
    const { navigation } = this.props;
    const { token, dispatch } = navigation.state.params;

    dispatch({ type: GET_HOSPITALS, payload: { token }});
  }

  render() {
    return (
      <Text>near </Text>
    )
  }
}

export default connect(
  state => getDoctorSelector(state),
)(NearHospital);