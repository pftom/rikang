import React, { PureComponent } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { connect } from 'react-redux';


import LinearGradient from 'react-native-linear-gradient';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import CustomTabBar from '../../TabOne/views/CustomTabBar';

//import action constants
import { GET_PATIENT_PROFILE, LOGOUT } from '../../../constants/'

//import selector from select data
import { getPatientSelector } from '../../../selectors/';

import TabThreeHeaderSection from './TabThreeHeaderSection';


class UserScreen extends PureComponent {

  componentDidMount() {
    const { dispatch, navigation, token } = this.props;
    dispatch({ type: GET_PATIENT_PROFILE, payload: { token } });
  }

  render() {
    const { dispatch, patientProfile } = this.props;
    return (
      <View>

      </View>
    )
  }
}

export default connect(
  state => getPatientSelector(state),
)(UserScreen);
