import React, { PureComponent } from 'react';
import { TouchableOpacity, Text, View, } from 'react-native';

import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

//import selector for computing data
import { getHospitalSelector } from '../../../selectors/';

//import async action constants
import { GET_SINGLE_HOSPITAL } from '../../../constants/'


class HospitalDetail extends PureComponent {

  componentDidMount() {
    const { navigation, dispatch } = this.props;
    const { token, id } = navigation.state.params;
    console.log('single', token);
    dispatch({ type: GET_SINGLE_HOSPITAL, payload: { token, id }});
  }

  render() {
    const { hospital } = this.props;
    return (
      <Text>{hospital && hospital.get('name')}</Text>
    )
  }
}

export default connect(
  state => getHospitalSelector(state),
)(HospitalDetail);