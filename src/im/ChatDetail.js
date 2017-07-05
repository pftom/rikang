import React, { Component } from 'react';
import { 
  Text, 
  View, 
  TouchableOpacity, 
  TextInput, 
  StyleSheet, 
  Dimensions,
  FlatList,
} from 'react-native';
import { TextMessage, Message } from 'leancloud-realtime';

const { width, height } = Dimensions.get('window');

class ChatDetail extends Component {

  constructor(props) {
    super(props);

    this.handleChat = this.handleChat.bind(this);
    this.handleSendText = this.handleSendText.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      maxResultsAmount: 50,
      draft: '',
      messages: [],
      hasLoadAllMessages: false,
    };
  }

  handleChat(clientId) {

  }

  componentDidMount() {
    this.getCurrentConversation();
  }

  getCurrentConversation() {
    const { navigation } = this.props;
    const { imClient, conv } = navigation.state.params;
    const that = this;
    return imClient.getConversation(conv.id)
        .then(conversation => {
          console.log('conversation', conversation);
          this.messageIterator = conversation.createMessagesIterator({limit: 20});

          this.currentConversation = conversation;
          console.log('unreadMessagesCount', conversation);
          this.currentConversation.on('message', this.readMarker);
          this.currentConversation.on('message', this.messageUpdater);

          this.loadMoreMessages();
          conversation.read();
          return conversation;
        })
  }

  messageUpdater(msg) {
    if (msg.transient && msg.type === Message.TYPE) {
      return;
    }
    // 消息列表滚动
    let { messages } = this.state;
    messages.push(msg);
    this.setState({ messages });
  }

  readMarker(msg) {
    // 暂态消息不标记
    // 特殊情况：暂态对话的所有消息都是暂态的，因此暂态对话收到消息全部标记
    if (msg.transient && !conversation.transient) {
      return;
    }
    // 当前对话标记为已读
    conversation.read();
  }

  componentWillUnmount() {
    this.currentConversation.off('message', this.messageUpdater);
    this.currentConversation.off('message', this.readMarker);
  }

  send(message) {
    const that = this;
    let { messages } = that.state;
    return this.getCurrentConversation()
      .then(conversation => {
        const sendPromise = conversation.send(message, {
          receipt: conversation.members.length === 2
        });
        messages.push(message);
        console.log(messages);
        that.setState({
          messages,
        });
        return sendPromise;
      })
      .catch(console.error.bind(console));
  }

  sendText() {
    const { draft } = this.state;
    if (!draft) {
      return;
    }
    const message = new TextMessage(draft);
    this.setState({
      draft: '',
    });
    return this.send(message);
  }

  loadMoreMessages() {
    if (this.state.hasLoadAllMessages) {
      return;
    }
    const that = this;
    return this.messageIterator.next().then(result => {
      const { messages } = that.state
      const newState = {};

      if (result.done) {
        newState.hasLoadAllMessages = true;
      }
      newState.messages = result.value.concat(messages);
      this.setState(newState)
    })
  }

  handleChange(value) {
    this.setState({
      draft: value,
    });
  }

  handleSendText() {
    this.sendText();
  }


  render() {
    const { clientId, navigation } = this.props;
    const { imClient, conv } = navigation.state.params;
    const { messages } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.messageBody}>
          {
            messages.map((msg, key) => (
              <View key={key} style={imClient.id === msg.from ? styles.isMine : styles.isYou}>
                <Text>{msg.getText()}</Text>
              </View>
            ))
          }
        </View>
        <View style={styles.inputBody}>
          <View>
            <TextInput 
              style={styles.textInput}
              value={this.state.draft}
              onChangeText={value => this.handleChange(value)} />
            </View>
        </View>
        <TouchableOpacity onPress={this.handleSendText} style={styles.sendBtn}>
          <Text>发送</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  messageBody: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  inputBody: {
    height: 92,
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: '#000',
    marginBottom: 10,
  },
  sendBtn: {
    alignItems: 'center',
  },
  isMine: {
    height: 50,
    backgroundColor: '#23BCBB',
    alignItems: 'flex-end'
  },
  isYou: {
    height: 50,
    backgroundColor: '#23BCBB',
  }
})

export default ChatDetail;