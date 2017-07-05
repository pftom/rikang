import React, { Component } from 'react';
import { Text, View, TouchableOpacity, TextInput, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

let normalConv = [];

class User extends Component {

  constructor(props) {
    super(props);

    this.state = {
      normalConv: [],
    }

    this.handleChat = this.handleChat.bind(this);
  }

  getNormalConvs() {
    const { clientId, imClient, navigation, myId } = this.props;
    return imClient.getQuery().withLastMessagesRefreshed().containsMembers([clientId, myId]).find();
  }

  getConversations() {
    const that = this;
    return this.getNormalConvs()
      .then(data => {
        that.setState({
          normalConv: data,
        });
      })
  }

  componentDidMount() {
    this.getConversations();
  }

  handleChat() {
    const { clientId, imClient, navigation, myId } = this.props;
    return imClient.createConversation({
      members: [myId],
      name: `${clientId} 和 ${imClient.id}的对话`,
      transient: false,
      unique: true,
    }).then(conversation => {
      console.log('hhhhh');
      navigation.navigate('ChatDetail', { clientId: clientId, myId: myId, imClient: imClient, conv: conversation });
    }).catch(console.error.bind(console));
  }

  render() {
    const { myId, imClient } = this.props;
    const { normalConv } = this.state;
    if(normalConv.length) {
      console.log('normal', normalConv[0]);
      console.log('normalConv', imClient);
    }
    return (
      <TouchableOpacity style={styles.container} onPress={() => this.handleChat()}>
        <Text style={styles.body}>{myId}</Text>
        <Text style={styles.body}>{normalConv.length && normalConv[0].lastMessage._lctext}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: width,
    height: 40,
    borderWidth: 1,
    borderColor: '#23BCBB',
    marginBottom: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  body: {
    fontSize: 20,
    color: '#000'
  }
})

export default User;