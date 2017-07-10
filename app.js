/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';

import Login from './src/im/index';
import Chat from './src/im/Chat';
import ChatDetail from './src/im/ChatDetail';

const RiKang = StackNavigator({
  Login: { screen: Login },
  Chat: { screen: Chat },
  ChatDetail: { screen: ChatDetail },
})

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
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('RiKang', () => RiKang);
