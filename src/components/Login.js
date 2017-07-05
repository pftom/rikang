import React, { PropTypes, PureComponent } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

class LoginScreen extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Screen A
        </Text>
        <Text style={styles.instructions}>
          This is great
        </Text>
        <Button
          onPress={this.handleLogin.bind(this)}
          title="Log in"
        />
      </View>
    )
  }
}

export default Login;
