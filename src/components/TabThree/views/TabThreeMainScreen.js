import React, { PureComponent } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';

//import action constants
import { GET_PATIENT_PROFILE } from '../../../constants/'

//import selector from select data
import { getPatientSelector } from '../../../selectors/';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});


class UserScreen extends PureComponent {

  componentDidMount() {
    const { dispatch, navigation, token } = this.props;
    dispatch({ type: GET_PATIENT_PROFILE, payload: { token } });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>用户页</Text>
      </View>
    )
  }
}


UserScreen.navigationOptions = {
  title: 'User Screen',
};

export default connect(
  state => getPatientSelector(state),
)(UserScreen);
