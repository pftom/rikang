import React, { PureComponent } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { connect } from 'react-redux';

//import action constants
import { GET_PATIENT_PROFILE, LOGOUT } from '../../../constants/'

//import selector from select data
import { getPatientSelector } from '../../../selectors/';

import Header from '../../common/Header';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    top: -10,
  },
});


class UserScreen extends PureComponent {

  componentDidMount() {
    const { dispatch, navigation, token } = this.props;
    dispatch({ type: GET_PATIENT_PROFILE, payload: { token } });
  }

  render() {
    const { dispatch } = this.props;
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text>用户页</Text>
        <TouchableOpacity onPress={() => { dispatch({ type: LOGOUT } )}}>
          <Text>登出</Text>
        </TouchableOpacity>
        <View style={{ 
          height: 30, width: 74, backgroundColor: '#09C79C',
          marginBottom: -300,
        }}>
        </View>
      </ScrollView>
    )
  }
}


UserScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: (
    <View style={styles.headerTitle}>
      <Header 
        headerText="个人信息"
        navigation={navigation}
      />
    </View>
  ),
})

export default connect(
  state => getPatientSelector(state),
)(UserScreen);
