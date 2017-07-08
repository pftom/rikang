import React from 'react';
import { StyleSheet, View } from 'react-native';

import LoginStatusMessage from '../../LoginStatusMessage';
import AuthButton from '../../AuthButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

const UserScreen = () => (
  <View style={styles.container}>
    <LoginStatusMessage />
    <AuthButton />
  </View>
);

UserScreen.navigationOptions = {
  title: 'User Screen',
};

export default UserScreen;
