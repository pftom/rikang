import React, { PureComponent } from 'react';
import { TouchableWithoutFeedback, Text, View, } from 'react-native';

import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

//import selector for computing data
import { getHospitalSelector } from '../../../selectors/';

//import async action constants
import { GET_SINGLE_HOSPITAL, GET_SINGLE_HOSPITAL_DOCTORS } from '../../../constants/'

//import Hospital Doctor lists
import HospitalDoctors from './HospitalDoctors'


class HospitalDetail extends PureComponent {

  componentDidMount() {
    const { navigation, dispatch } = this.props;
    const { token, id } = navigation.state.params;
    console.log('single', token);
    dispatch({ type: GET_SINGLE_HOSPITAL, payload: { token, id }});
  }

  render() {
    const { hospital, navigation, dispatch } = this.props;
    const { token, id } = navigation.state.params;
    return (
      <View>
        <TouchableWithoutFeedback onPress={() => { dispatch({ type: GET_SINGLE_HOSPITAL_DOCTORS, payload: { id, token }}) }}>
        <View>
          <Text>{hospital && hospital.get('name')}</Text>
        </View>
      </TouchableWithoutFeedback>
      <HospitalDoctors payload={ {token, id, navigation} }/>
      </View>
    )
  }
}

export default connect(
  state => getHospitalSelector(state),
)(HospitalDetail);