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

const QaScreen = () => (
  <View style={styles.container}>
    <LoginStatusMessage />
    <AuthButton />
  </View>
);

QaScreen.navigationOptions = {
  title: 'Qa Screen',
};

export default QaScreen;
