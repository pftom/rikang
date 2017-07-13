import React, { PureComponent } from 'react';
import { TouchableOpacity, Text, View, } from 'react-native';

import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

//import async action constants
import { GET_SINGLE_HOSPITAL_DOCTORS } from '../../../constants/'

//import selector for computing data
import { getHospitalDoctorsSelector } from '../../../selectors/'

//import header common component
import Header from '../../common/Header';
//import stylesheet
import { commonStyle as styles } from '../../styles/';


class DoctorList extends PureComponent {

  componentDidMount() {
    // const { payload, dispatch } = this.props;
    // const { token, id } = payload;
    // dispatch({ type: GET_SINGLE_HOSPITAL_DOCTORS, payload: { token, id }});
  }

  render() {
    // const { hospitalDoctors, payload } = this.props;
    // const { token, id, navigation } = payload;
    return (
      <View>
        <TouchableOpacity onPress={() => { navigation.navigate('DoctorDetail', { token, id }) }}>
          <Text>hhhh</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

DoctorList.navigationOptions = ({ navigation }) => ({
  headerTitle: (
    <View style={styles.headerTitle}>
      <Header 
        headerText="医生列表"
        navigation={navigation}
      />
    </View>
  ),
})

export default connect(
  state => getHospitalDoctorsSelector(state),
)(DoctorList);