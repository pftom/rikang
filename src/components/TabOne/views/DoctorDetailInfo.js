import React, { PureComponent } from 'react';
import { TouchableOpacity, Text, View, } from 'react-native';

import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

//import async action constants
import { GET_SINGLE_DOCTOR_INFO } from '../../../constants/'

//import selector for computing data
import { getDoctorInfoSelector } from '../../../selectors/'


class DoctorDetailInfo extends PureComponent {

  componentDidMount() {
    const { navigation, dispatch } = this.props;
    const { token, id } = navigation.state.params;
    dispatch({ type: GET_SINGLE_DOCTOR_INFO, payload: { token, id }});
  }

  render() {
    const { doctorInfo, payload } = this.props;
    return (
      <View>
        <Text>hhhh</Text>
      </View>
    )
  }
}

export default connect(
  state => getDoctorInfoSelector(state),
)(DoctorDetailInfo);