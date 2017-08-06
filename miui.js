import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  NativeModules,
  requireNativeComponent,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';

var ReactNative = require('react-native');
const AuroraIController = NativeModules.AuroraIMUIModule;
import IMUI from 'aurora-imui-react-native'
var InputView = IMUI.ChatInput;
var MessageListView = IMUI.MessageList;
const window = Dimensions.get('window');

import { TextMessage, Message, Realtime } from 'leancloud-realtime';
import AV from 'leancloud-storage';
var ImageMessage = require('leancloud-realtime-plugin-typed-messages').ImageMessage;
var AudioMessage = require('leancloud-realtime-plugin-typed-messages').AudioMessage;


//read the voice and image data
import RNFS from 'react-native-fs';

import RNFetchBlob from 'react-native-fetch-blob'


import px2dp from './src/utils/px2dp';

import { Header } from './src/components/common/';

var themsgid = 1

function constructNormalMessage() {

    var message = {}
    message.msgId = themsgid.toString()
    themsgid += 1
    message.status = "send_going"
    message.isOutgoing = true
    message.timeString = "10: 00"
    var user = {
          userId: "1",
          displayName: "Tom",
          avatarPath: "https://facebook.github.io/react/img/logo_og.png"
    }
    message.fromUser = user

    return  message
}


function getNowTime(item) {
  const now = new Date(item.timestamp);

  //setting message time
  const year = now.getFullYear();
  const month = now.getMonth() >= 9 ? now.getMonth() + 1 : `0${now.getMonth() + 1}`;
  const day = now.getDate();
  const hour = now.getHours();
  const minute = now.getMinutes();

  const nowTime = `${year}-${month}-${day} ${hour}:${minute}`;

  return nowTime;
}

function constructMoreDetailMessage(item, clientId, isSucceed) {

  const message = constructNormalMessage();

  const nowTime = getNowTime(item);

  //sign message is me or other
  const isOutgoing = Number(item.from) === Number(clientId);

  message.msgType = "text"
  message.text = item.content._lctext;

  message.timeString = nowTime;
  message.isOutgoing = isOutgoing;
  message.status = isSucceed ? "send_succeed" : "send_going";

  return message;
}


export default class TestRNIMUI extends Component {
  constructor(props) {
    super(props);

    console.log('AuroraIController', MessageListView);
    this.updateLayout = this.updateLayout.bind(this);

    this.state = {
      maxResultsAmount: 50,
      messages: [],
      hasLoadAllMessages: false,
      inputViewLayout: {width:window.width, height:86,},
      nowMessage: null,
    }
  }



  updateLayout(layout) {
    this.setState({inputViewLayout: layout})
  }

  componentDidMount() {
    this.getCurrentConversation();
  }

  getCurrentConversation = () => {
    const { navigation } = this.props;
    const { imClient, conv } = navigation.state.params;
    const that = this;
    return imClient.getConversation(conv.id)
        .then(conversation => {
          console.log('conversation', conversation);
          this.messageIterator = conversation.createMessagesIterator({ limit: 20 });

          this.currentConversation = conversation;
          console.log('unreadMessagesCount', conversation);
          this.currentConversation.on('message', this.readMarker);
          this.currentConversation.on('message', this.messageUpdater);

          this.loadMoreMessages();
          conversation.read();
          return conversation;
        })
  }

  messageUpdater = (msg) => {
    if (msg.transient && msg.type === Message.TYPE) {
      return;
    }
    // 消息列表滚动
    let { messages } = this.state;
    messages.push(msg);
    this.setState({ messages });
  }

  readMarker = (msg) => {
    // 暂态消息不标记
    // 特殊情况：暂态对话的所有消息都是暂态的，因此暂态对话收到消息全部标记
    if (msg.transient && !conversation.transient) {
      return;
    }
    // 当前对话标记为已读
    conversation.read();
  }

  send = (message) => {
    const that = this;
    let { messages } = that.state;
    return this.getCurrentConversation()
      .then(conversation => {
        const sendPromise = conversation.send(message, {
          receipt: conversation.members.length === 2
        });

        messages.push(message);

        let { nowMessage } = this.state;

        console.log('message', message);

        nowMessage = {
          ...nowMessage,
          status: "send_success",
          timeString: getNowTime(message),
        };
        AuroraIController.updateMessage(nowMessage);


        console.log(messages);
        that.setState({
          messages,
        });

        return sendPromise;
      })
      .catch(console.error.bind(console));
  }

  sendText = (draft) => {
    if (!draft) {
      return;
    }
    const message = new TextMessage(draft);
    return this.send(message);
  }

  constructMoreDetailMessageImg = (item, clientId, isSucceed) => {
    //for mediaPath
    // let mediaPath = '/Users/tom/Library/Developer/CoreSimulator/Devices/0E969615-494B-4EA4-AC1B-595EC84CD751/data/Containers/Data/Application/CE841824-7F9F-4DBE-B4A1-1FBABEF10A1E/Documents/';

    RNFetchBlob
      .config({
        fileCache : true,
        // by adding this option, the temp files will have a file extension
        appendExt : 'png'
      })
      .fetch('GET', item._lcfile.url)
      .then((res) => {
        console.log('res', res)
          const message = constructNormalMessage();

          const nowTime = getNowTime(item);

          //sign message is me or other
          const isOutgoing = Number(item.from) === Number(clientId);

          message.msgType = "image"
          message.mediaPath = res.path();
          message.progress = "加载中...";

          message.timeString = nowTime;
          message.isOutgoing = isOutgoing;
          message.status = isSucceed ? "send_succeed" : "send_going";

          AuroraIController.insertMessagesToTop([message]);
          AuroraIController.scrollToBottom(true);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  constructMoreDetailMessageAudio = (item, clientId, isSucceed) => {
    //for mediaPath
    // let mediaPath = '/Users/tom/Library/Developer/CoreSimulator/Devices/0E969615-494B-4EA4-AC1B-595EC84CD751/data/Containers/Data/Application/CE841824-7F9F-4DBE-B4A1-1FBABEF10A1E/Documents/';

    RNFetchBlob
      .config({
        fileCache : true,
        // by adding this option, the temp files will have a file extension
        appendExt : 'm4a'
      })
      .fetch('GET', item._lcfile.url)
      .then((res) => {
        console.log('res', res)
          const message = constructNormalMessage();

          const nowTime = getNowTime(item);

          //sign message is me or other
          const isOutgoing = Number(item.from) === Number(clientId);

          message.msgType = "voice"
          message.mediaPath = res.path();
          message.progress = "加载中...";

          message.timeString = nowTime;
          message.isOutgoing = isOutgoing;
          message.status = isSucceed ? "send_succeed" : "send_going";

          AuroraIController.insertMessagesToTop([message]);
          AuroraIController.scrollToBottom(true);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  loadMoreMessages = () => {
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

      //add to messagelist
      const { navigation } = this.props;
      const { clientId } = navigation.state.params;
      let MESSAGES = [];
      console.log('clientId', clientId);

      if (result.value) {
        result.value.map(item => {
          if (!item._lcfile && item._lctext !== 'data:image/jpeg;base64,') {
            MESSAGES.push(constructMoreDetailMessage(item, clientId, true));
          } 
          else if (item._lcfile && item._lctext === 'data:image/jpeg;base64,') {
            this.constructMoreDetailMessageImg(item, clientId, true)
          } else if (item._lcfile && item._lctext === "data:audio/m4a;base64,") {
            this.constructMoreDetailMessageAudio(item, clientId, true)
          }
        })


        AuroraIController.insertMessagesToTop(MESSAGES);
        AuroraIController.scrollToBottom(true);

        console.log('MESSAGE', MESSAGES)
      }

      newState.messages = result.value.concat(messages);
      

      this.setState(newState)
    })
  }

  handleSendText = () => {
    this.sendText();
  }

  componentWillUnmount() {
    this.currentConversation.off('message', this.messageUpdater);
    this.currentConversation.off('message', this.readMarker);
  }

  onAvatarClick = (message) => {
      console.log(message)
    }

  onMsgClick = (message) => {
      console.log(message)
    }

  onStatusViewClick = (message) => {
      console.log(message)
    }

  onBeginDragMessageList = () => {
      this.updateLayout({width:window.width, height:86,})
      AuroraIController.hidenFeatureView(true)
    }

  onPullToRefresh = () => {
      console.log("on pull to refresh")
    }

  onSendText = (text, needSendToCloud) => {

    var message = constructNormalMessage()

    this.setState({
      nowMessage: message,
    });

    message.msgType = "text"
    message.text = text

    this.sendText(text);

    AuroraIController.appendMessages([message])
    AuroraIController.scrollToBottom(true)
  }

  onTakePicture = (mediaPath) => {

    const that = this;

    var message = constructNormalMessage()
    message.msgType = "image"
    message.mediaPath = mediaPath

      //add image 
      this.setState({
        nowMessage: message,
      });

      RNFS.readFile(message.mediaPath, 'base64')
        .then((contents) => {
              console.log(contents);
              const img = 'data:image/jpeg;base64,' + contents;

              const file = new AV.File('image', {
                blob: {
                  uri: img
                }
              });
              file.save().then(function () {
              const msg = new ImageMessage(file);
              msg.setText('data:image/jpeg;base64,');
              console.log('msg', msg);

              return that.send(msg);
              
            }).catch(console.error.bind(console));
          })
        .catch(err => {
          console.log(err.message, err.code);
        })

    AuroraIController.appendMessages([message])
    AuroraIController.scrollToBottom(true)
  }

  onStartRecordVoice = (e) => {
    console.log("on start record voice")
  }

  onFinishRecordVoice = (mediaPath, duration) => {
    const that = this;
    var message = constructNormalMessage()
    message.msgType = "voice"
    message.mediaPath = mediaPath

    console.log('message.mediaPath', message.mediaPath)

    //add image 
      this.setState({
        nowMessage: message,
      });

      RNFS.readFile(message.mediaPath, 'base64')
        .then((contents) => {
              console.log(contents);
              const audio = 'data:audio/m4a;base64,' + contents;

              const file = new AV.File('audio', {
                blob: {
                  uri: audio
                }
              });
              file.save().then(function () {
              const msg = new AudioMessage(file);
              msg.setText('data:audio/m4a;base64,');
              console.log('msg', msg);

              return that.send(msg);
              
            }).catch(console.error.bind(console));
          })
        .catch(err => {
          console.log(err.message, err.code);
        })

    AuroraIController.appendMessages([message])
  }

  onCancelRecordVoice = () => {
    console.log("on cancel record voice")
  }

  onStartRecordVideo = () => {
    console.log("on start record video")
  }

  onFinishRecordVideo = (mediaPath) => {
    // var message = constructNormalMessage()

    // message.msgType = "video"
    // message.mediaPath = mediaPath

    // AuroraIController.appendMessages([message])
  }

  onSendGalleryFiles = (mediaFiles) => {
    const that = this;
    console.log(mediaFiles)
    for(index in mediaFiles) {
      var message = constructNormalMessage()
      message.msgType = "image"
      message.mediaPath = mediaFiles[index].mediaPath

      this.setState({
        nowMessage: message,
      });

      RNFS.readFile(message.mediaPath, 'base64')
        .then((contents) => {
              console.log(contents);
              const img = 'data:image/jpeg;base64,' + contents;

              const file = new AV.File('image', {
                blob: {
                  uri: img
                }
              });
              file.save().then(function () {
              const msg = new ImageMessage(file);
              msg.setText('data:image/jpeg;base64,');
              console.log('msg', msg);

              return that.send(msg);
              
            }).catch(console.error.bind(console));
          })
        .catch(err => {
          console.log(err.message, err.code);
        })
      

      AuroraIController.appendMessages([message])
      AuroraIController.scrollToBottom(true)
    }
  }

  onSwitchToMicrophoneMode = () => {
    this.updateLayout({width:window.width, height:320,})
  }

  onSwitchToGalleryMode = () => {
    this.updateLayout({width:window.width, height:320,})
  }

  onSwitchToCameraMode = () => {
    this.updateLayout({width:window.width, height:320,})
  }

  onShowKeyboard = (keyboard_height) => {
    var inputViewHeight = keyboard_height + 86
    this.updateLayout({width:window.width, height:inputViewHeight,})
  }

  h


  onInitPress() {
      console.log('on click init push ');
      this.updateAction();
  }

  render() {

    const { messages } = this.state;

    console.log('messages', messages);

    return (
      <View style={styles.container}>
        <MessageListView style={styles.messageList}
          onAvatarClick={this.onAvatarClick}
          onMsgClick={this.onMsgClick}
          onStatusViewClick={this.onStatusViewClick}
          onTapMessageCell={this.onTapMessageCell}
          onBeginDragMessageList={this.onBeginDragMessageList}
          onPullToRefresh={this.onPullToRefresh}
          avatarSize={{width:40,height:40}}
          sendBubbleTextSize={18}
          sendBubbleTextColor={"000000"}
          sendBubblePadding={{left:10,top:10,right:10,bottom:10}}
        />
        <InputView style={this.state.inputViewLayout}
          onSendText={this.onSendText}
          onTakePicture={this.onTakePicture}
          onStartRecordVoice={this.onStartRecordVoice}
          onFinishRecordVoice={this.onFinishRecordVoice}
          onCancelRecordVoice={this.onCancelRecordVoice}
          onStartRecordVideo={this.onStartRecordVideo}
          onFinishRecordVideo={this.onFinishRecordVideo}
          onSendGalleryFiles={this.onSendGalleryFiles}
          onSwitchToMicrophoneMode={this.onSwitchToMicrophoneMode}
          onSwitchToGalleryMode={this.onSwitchToGalleryMode}
          onSwitchToCameraMode={this.onSwitchToCameraMode}
          onShowKeyboard={this.onShowKeyboard}
        />
          <View style={styles.back}>
            <TouchableOpacity onPress={() => { this.props.navigation.goBack() }}>
              <Image style={styles.backImg} source={require('./src/components/common/img/back.png')} />
            </TouchableOpacity>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  messageList: {
    backgroundColor: 'red',
    flex: 1,
    marginTop: 0,
    width: window.width,
    margin:0,
  },
  inputView: {
    backgroundColor: 'green',
    width: window.width,
    height:100,

  },
  btnStyle: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#3e83d7',
    borderRadius: 8,
    backgroundColor: '#3e83d7'
  },
  back: {
    width: window.width,
    height: px2dp(81),
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
  },
  backImg: {
    left: px2dp(23),
    top: px2dp(40),
    tintColor: '#000',
  }
});