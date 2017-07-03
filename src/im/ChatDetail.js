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
import { TextMessage } from 'leancloud-realtime';

const { width, height } = Dimensions.get('window');

let messages = [];
let messageIterator = null;
let hasLoadAllMessages = false;

class ChatDetail extends Component {

  constructor(props) {
    super(props);

    this.handleChat = this.handleChat.bind(this);
    this.handleSendText = this.handleSendText.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      maxResultsAmount: 50,
      draft: '',
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
    console.log('imClient', imClient);
    return imClient.getConversation(conv.id)
        .then(conversation => {
          console.log('conversation', conversation);
          messageIterator = conversation.createMessagesIterator({limit: 20});
            const readMarker = msg => {
              // 暂态消息不标记
              // 特殊情况：暂态对话的所有消息都是暂态的，因此暂态对话收到消息全部标记
              if (msg.transient && !conversation.transient) {
                return;
              }
              // 当前 tab 未激活不标记
              if (document.hidden) {
                return;
              }
              // 当前对话标记为已读
              conversation.read();
            };

            const messageUpdater = msg => {
              // 如果收到未知类型的暂态消息，直接丢弃
              if (msg.transient && msg.type === Message.TYPE) {
                return;
              }
              // 消息列表滚动
              messages.push(msg);
            };

            const handleVisiblilityChange = () => {
              if (conversation.unreadMessagesCount) {
                conversation.read();
              }
            }

            conversation.on('message', readMarker);
            conversation.on('message', messageUpdater);

            this.loadMoreMessages();
            conversation.read();
            return conversation;
        })
  }

  handleVisiblilityChange() {
    const { conv } = this.props;
    if (conv.unreadMessagesCount) {
      conv.read();
    }
  }

  send(message) {
    return this.getCurrentConversation()
      .then(conversation => {
        const sendPromise = conversation.send(message, {
          receipt: conversation.members.length === 2
        });
        messages.push(message);
        console.log(messages);
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
    if (hasLoadAllMessages) {
      return;
    }
    
    return messageIterator.next().then(result => {
      if (result.done) {
        hasLoadAllMessages = true;
      }

      messages = result.value.concat(messages);
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
    const { clientId } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.messageBody}>
          <FlatList
            data={[
              {key: 'Devin'},
              {key: 'Jackson'},
              {key: 'James'},
              {key: 'Joel'},
              {key: 'John'},
              {key: 'Jillian'},
              {key: 'Jimmy'},
              {key: 'ule'},
              {key: 'ackson'},
              {key: 'ams'},
              {key: 'oel'},
              {key: 'ohn'},
              {key: 'illian'},
              {key: 'immy'},
              {key: 'ulie'},
              {key: 'akson'},
              {key: 'ames'},
              {key: 'el'},
              {key: 'hn'},
              {key: 'llian'},
              {key: 'mmy'},
              {key: 'lie'},
              {key: 'kson'},
              {key: 'es'},
              {key: 'l'},
              {key: 'n'},
              {key: 'lian'},
              {key: 'my'},
              {key: 'ie'},
            ]}
            renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
          />
        </View>
        <View style={styles.inputBody}>
          <View>
            <TextInput 
              style={styles.textInput}
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
  }
})

export default ChatDetail;