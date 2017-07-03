import React, { Component } from 'react';
import { Text, View, TouchableOpacity, TextInput, StyleSheet, AsyncStorage } from 'react-native';
import AV from 'leancloud-storage';
import { Realtime } from 'leancloud-realtime';
import { TypedMessagesPlugin } from 'leancloud-realtime-plugin-typed-messages';

AV.init({
  appId: 'QpmY5B86OewxLjxu2Yo6izF4-gzGzoHsz', 
  appKey:'gT9756x6BXMEAlAnNVyfS6q7',
});

const realtime = new Realtime({
  appId: 'QpmY5B86OewxLjxu2Yo6izF4-gzGzoHsz',
  plugins: [TypedMessagesPlugin], // 注册富媒体消息插件
  region: 'cn',
});

const LeanRT = {};
LeanRT.realtime = realtime;
LeanRT.imClient = null;
LeanRT.currentConversation = null;

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clientId: '',
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleLogin() {
    const { clientId } = this.state;
    LeanRT.realtime.createIMClient(clientId)
      .then(userClient => {
        LeanRT.imClient = userClient;
        this.props.navigation.navigate('Chat', { clientId: this.state.clientId, LeanRT: LeanRT  })
      })
      .catch(console.error.bind(console));
  }

  handleChange(value) {
    console.log(value);
    this.setState({
      clientId: value,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <TextInput 
            style={styles.textInput}
            value={this.state.id}
            onChangeText={value => this.handleChange(value)} />
        </View>
        <TouchableOpacity onPress={this.handleLogin}>
          <Text>登录</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: '#000',
    marginBottom: 30,
  }
})

export default Login;

