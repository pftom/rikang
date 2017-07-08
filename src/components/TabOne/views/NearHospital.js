import React, { PureComponent } from 'react';
import { TouchableOpacity, Text, View, } from 'react-native';

import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

//import selector for computing data
import { getHospitalsSelector } from '../../../selectors/';

//import async action constants
import { GET_HOSPITALS } from '../../../constants/'


class NearHospital extends PureComponent {

  componentDidMount() {
    const { navigation, dispatch } = this.props;
    const { token } = navigation.state.params;

    dispatch({ type: GET_HOSPITALS, payload: { token }});
  }

  render() {
    const { hospitals, navigation } = this.props;
    const { token } = navigation.state.params;
    return (
      <TouchableOpacity onPress={() => { navigation.navigate('HospitalDetail', { id: hospitals.getIn(['results', '0', 'id']), token })}}>
        <Text>{hospitals && hospitals.getIn(['results', '0', 'name'])}</Text>
      </TouchableOpacity>
    )
  }
}

export default connect(
  state => getHospitalsSelector(state),
)(NearHospital);