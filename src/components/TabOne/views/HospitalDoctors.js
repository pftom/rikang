import React, { PureComponent } from 'react';
import { TouchableOpacity, Text, View, } from 'react-native';

import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

//import async action constants
import { GET_SINGLE_HOSPITAL_DOCTORS } from '../../../constants/'

//import selector for computing data
import { getHospitalDoctorsSelector } from '../../../selectors/'


class HospitalDoctors extends PureComponent {

  componentDidMount() {
    const { payload, dispatch } = this.props;
    const { token, id } = payload;
    dispatch({ type: GET_SINGLE_HOSPITAL_DOCTORS, payload: { token, id }});
  }

  render() {
    const { hospitalDoctors, payload } = this.props;
    const { token, id, navigation } = payload;
    if(hospitalDoctors) {
      console.log('hospitalDoctors', hospitalDoctors);
    }
    return (
      <View>
        <TouchableOpacity onPress={() => { navigation.navigate('DoctorDetail', { token, id }) }}>
          <Text>{hospitalDoctors && hospitalDoctors.getIn(['results', '0', 'name'])}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default connect(
  state => getHospitalDoctorsSelector(state),
)(HospitalDoctors);