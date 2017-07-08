import React, { PureComponent } from 'react';
import { TouchableOpacity, Text, View, } from 'react-native';

import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

//import selector for computing data
import { getDoctorSelector } from '../../../selectors/';

//import async action constants
import { GET_SINGLE_DOCTOR } from '../../../constants/'


class DoctorDetail extends PureComponent {

  componentDidMount() {
    const { navigation } = this.props;
    const { token, id, dispatch } = navigation.state.params;
    
    dispatch({ type: GET_SINGLE_DOCTOR, payload: { token, id }});
  }

  render() {
    const { doctor } = this.props;
    console.log('doctor', doctor);
    return (
      <Text>hhhh</Text>
    )
  }
}

export default connect(
  state => getDoctorSelector(state),
)(DoctorDetail);