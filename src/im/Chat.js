import React, { Component } from 'react';
import { Text, View, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import User from './User';

const userlists = ['6', '2'];

class Chat extends Component {
  render() {
    const { navigation } = this.props;
    const { clientId, LeanRT } = navigation.state.params;
    console.log('clinet', clientId);
    const imClient = LeanRT.imClient;
    return (
      <View>
        {
          userlists
            .filter(id => id !== clientId)
            .map((convTo, key) => (
              <User myId={convTo} key={key} clientId={clientId} imClient={imClient} navigation={navigation} />
            ))
        }
      </View>
    );
  }
}

export default Chat;