import React, { PureComponent } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';



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


class ProfileScreen extends PureComponent {
  render() {
    console.log('props', this.props);
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Profile Screen
        </Text>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
          <Text>跳转</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

ProfileScreen.navigationOptions = {
  title: 'Profile',
};

export default connect()(ProfileScreen);
