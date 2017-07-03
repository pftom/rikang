import React, { Component } from 'react';
import { Text, View, TouchableOpacity, TextInput, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

let normalConv = [];

class User extends Component {

  constructor(props) {
    super(props);

    this.handleChat = this.handleChat.bind(this);
  }

  getNormalConvs() {
    const { clientId, imClient, navigation, myId } = this.props;
    return imClient.getQuery().withLastMessagesRefreshed().containsMembers([clientId, myId]).find();
  }

  getConversations() {
    return this.getNormalConvs()
      .then(data => {
        normalConv = data;
        
        normalConv.map(conv => {
          console.log(conv, conv.unreadMessagesCount);
        })
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
      navigation.navigate('ChatDetail', { clientId: clientId, myId: myId, imClient: imClient, conv: conversation });
    }).catch(console.error.bind(console));
  }

  render() {
    const { myId } = this.props;
    return (
      <TouchableOpacity style={styles.container} onPress={() => this.handleChat()}>
        <Text style={styles.body}>{myId}</Text>
        <Text style={styles.body}>未读消息{normalConv.length && normalConv[0].unreadMessagesCount}</Text>
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