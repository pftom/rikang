import React, { PureComponent } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';

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
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
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
      <LinearGradient colors={['#4c669f', '#3b5998']} style={styles.linearGradient}>
        <Text style={styles.buttonText}>
          Sign in with Facebook
        </Text>
      </LinearGradient>
    )
  }
}


// UserScreen.navigationOptions = ({ navigation }) => ({
//   headerTitle: (
//     <View style={styles.headerTitle}>
//       <Header 
//         headerText="个人信息"
//         navigation={navigation}
//       />
//     </View>
//   ),
// })

export default connect(
  state => getPatientSelector(state),
)(UserScreen);
