'use strict';

import React from 'react';
import ReactNative from 'react-native';
import IMUI from 'aurora-imui-react-native';
import TimerMixin from 'react-timer-mixin';
var {
	View,
	Text,
	Image,
	TouchableHighlight,
	TextInput,
	Dimensions,
	NativeModules,
	StyleSheet,
	PermissionsAndroid,
	TouchableOpacity,
} = ReactNative;

var MessageList = IMUI.MessageList;
var ChatInput = IMUI.ChatInput;
const AuroraIMUIModule = NativeModules.AuroraIMUIModule;


//read the voice and image data
import RNFS from 'react-native-fs';

import RNFetchBlob from 'react-native-fetch-blob'


import px2dp from './src/utils/px2dp';

import { Header } from './src/components/common/';

var themsgid = 1


import { TextMessage, Message, Realtime } from 'leancloud-realtime';
import AV from 'leancloud-storage';
var ImageMessage = require('leancloud-realtime-plugin-typed-messages').ImageMessage;
var AudioMessage = require('leancloud-realtime-plugin-typed-messages').AudioMessage;

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
          avatarPath: "patient"
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
  
  if (isOutgoing) {
    message.fromUser.avatarPath = 'patient';
  } else {
    message.fromUser.avatarPath = 'doctor';
  }

  return message;
}

export default class ChatActivity extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			single: this.props.groupId === "",
			groupNum: '(1)',
			inputContent: '',
			recordText: '按住 说话',
			menuContainerHeight: 1000,
			chatInputStyle: {
				width: Dimensions.get('window').width,
				height: 100
			},
			isDismissMenuContainer: false,
			updateUI: false,
			maxResultsAmount: 50,
      messages: [],
      hasLoadAllMessages: false,
      inputViewLayout: {width:window.width, height:86,},
      nowMessage: null,

		};

		this.onMsgClick = this.onMsgClick.bind(this);
		this.onAvatarClick = this.onAvatarClick.bind(this);
		this.onMsgLongClick = this.onMsgLongClick.bind(this);
		this.onStatusViewClick = this.onStatusViewClick.bind(this);
		this.onTouchMsgList = this.onTouchMsgList.bind(this);
		this.onSendText = this.onSendText.bind(this);
		this.onSendGalleryFiles = this.onSendGalleryFiles.bind(this);
		this.onStartRecordVideo = this.onStartRecordVideo.bind(this);
		this.onFinishRecordVideo = this.onFinishRecordVideo.bind(this);
		this.onCancelRecordVideo = this.onCancelRecordVideo.bind(this);
		this.onStartRecordVoice = this.onStartRecordVoice.bind(this);
		this.onFinishRecordVoice = this.onFinishRecordVoice.bind(this);
		this.onTakePicture = this.onTakePicture.bind(this);
		this.onCancelRecordVoice = this.onCancelRecordVoice.bind(this);
		this.onSwitchToMicrophoneMode = this.onSwitchToMicrophoneMode.bind(this);
		this.onSwitchToGalleryMode = this.onSwitchToGalleryMode.bind(this);
		this.onSwitchToCameraMode = this.onSwitchToCameraMode.bind(this);
		this.onTouchEditText = this.onTouchEditText.bind(this);
		this.onPullToRefresh = this.onPullToRefresh.bind(this);
	}

	componentWillMount() {}

	onMsgClick(message) {
		console.log('message', message);
		message = JSON.parse(message);
		if (message.msgType === 'image') {
			const { navigation } = this.props;
			console.log('messagemessage', navigation)
			navigation.navigate('ImageView', { media: [{ photo: message.mediaPath }] })
		}
		
	}

	onMsgLongClick(message) {
		console.log("message long click " + message);
	}

	onAvatarClick(fromUser) {
		console.log("Avatar click! " + fromUser);
	}

	onStatusViewClick(message) {
		console.log("on message resend! " + message);
	}

	onTouchMsgList() {
		console.log("Touch msg list, hidding soft input and dismiss menu");
		this.setState({
			isDismissMenuContainer: true,
			chatInputStyle: {
				width: Dimensions.get('window').width,
				height: 100
			},
		});
	}

	onPullToRefresh() {
		console.log("pull to refresh! Will load history messages insert to top of MessageList");
		var messages = [{
			msgId: "1",
			status: "send_succeed",
			msgType: "text",
			text: "history1",
			isOutgoing: false,
			fromUser: {
				userId: "1",
				displayName: "Ken",
				avatarPath: "patient"
			},
			timeString: "9:00",
		}, {
			msgId: "2",
			status: "send_succeed",
			msgType: "text",
			text: "history2",
			isOutgoing: true,
			fromUser: {
				userId: "1",
				displayName: "Ken",
				avatarPath: "patient"
			},
			timeString: "9:20",
		}, {
			msgId: "3",
			status: "send_succeed",
			msgType: "text",
			text: "history3",
			isOutgoing: false,
			fromUser: {
				userId: "1",
				displayName: "Ken",
				avatarPath: "doctor"
			},
			timeString: "9:30",
		}];
		AuroraIMUIModule.insertMessagesToTop(messages);
	}

	onSendText(text) {
		console.log("will send text: " + text);
		var messages = [{
			msgId: "100",
			status: "send_going",
			msgType: "text",
			text: text,
			isOutgoing: true,
			fromUser: {
				userId: "1",
				displayName: "Ken",
				avatarPath: "doctor"
			},
			timeString: "10:00",
		}];
		AuroraIMUIModule.appendMessages(messages);
		this.setState({
			updateUI: true
		});
	}

	onSendGalleryFiles(mediaFiles) {
		console.log("will send media files: " + mediaFiles);
		AuroraIMUIModule.scrollToBottom();
		for (var i = 0; i < mediaFiles.length; i++) {
			var mediaFile = mediaFiles[i];
			console.log("mediaFile: " + mediaFile);
			var messages;
			if (mediaFile.mediaType == "image") {
				messages = [{
					msgId: "1",
					status: "send_going",
					msgType: "image",
					isOutgoing: true,
					mediaPath: mediaFile.mediaPath,
					fromUser: {
						userId: "1",
						displayName: "ken",
						avatarPath: "doctor"
					},
					timeString: "10:00"
				}];
			} else {
				messages = [{
					msgId: "1",
					status: "send_going",
					msgType: "video",
					isOutgoing: true,
					mediaPath: mediaFile.mediaPath,
					duration: mediaFile.duration,
					fromUser: {
						userId: "1",
						displayName: "ken",
						avatarPath: "doctor"
					},
					timeString: "10:00"
				}];
			}
			AuroraIMUIModule.appendMessages(messages);
		}
	}

	onStartRecordVideo() {
		console.log("start record video");
		AuroraIMUIModule.scrollToBottom();
	}

	onFinishRecordVideo(mediaPath) {
		console.log("finish record video, Path: " + mediaPath);
		var messages = [{
			msgId: "1",
			status: "send_going",
			msgType: "video",
			isOutgoing: true,
			mediaPath: mediaPath,
			fromUser: {
				userId: "1",
				displayName: "ken",
				avatarPath: "doctor"
			},
			timeString: "10:00"
		}];
		AuroraIMUIModule.appendMessages(messages);
	}

	onCancelRecordVideo() {
		console.log("cancel record video");
	}

	onStartRecordVoice() {
		console.log("start record voice");

	}

	onFinishRecordVoice(mediaPath, duration) {
		console.log("finish record voice, mediaPath: " + mediaPath + " duration: " + duration);
		var messages = [{
			msgId: "1",
			status: "send_going",
			msgType: "voice",
			isOutgoing: true,
			mediaPath: mediaPath,
			duration: duration,
			fromUser: {
				userId: "1",
				displayName: "ken",
				avatarPath: "doctor"
			},
			timeString: "10:00"
		}];
		AuroraIMUIModule.appendMessages(messages);
	}

	onCancelRecordVoice() {
		console.log("cancel record voice");
	}

	onTakePicture(mediaPath) {
		console.log("finish take picture, mediaPath: " + mediaPath);
		var messages = [{
			msgId: "1",
			status: "send_going",
			msgType: "image",
			isOutgoing: true,
			mediaPath: mediaPath,
			fromUser: {
				userId: "1",
				displayName: "ken",
				avatarPath: "doctor"
			},
			timeString: "10:00"
		}];
		AuroraIMUIModule.appendMessages(messages);
	}

	async onSwitchToMicrophoneMode() {
		console.log("switch to microphone mode, set menuContainerHeight : " + this.state.menuContainerHeight);
		AuroraIMUIModule.scrollToBottom();
		try {
			const granted = await PermissionsAndroid.request(
				PermissionsAndroid.PERMISSIONS.RECORD_AUDIO, {
					'title': 'IMUI needs Record Audio Permission',
					'message': 'IMUI needs record audio ' +
						'so you can send voice message.'
				});
			if (granted === PermissionsAndroid.RESULTS.GRANTED) {
				console.log("You can record audio");
			} else {
				console.log("Record Audio permission denied");
			}
		} catch (err) {
			console.warn(err)
		}
		this.setState({
			chatInputStyle: {
				width: Dimensions.get('window').width,
				height: 420
			},
			menuContainerHeight: 1000,
		});
	}

	async onSwitchToGalleryMode() {
		console.log("switch to gallery mode");
		AuroraIMUIModule.scrollToBottom();
		try {
			const granted = await PermissionsAndroid.request(
				PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE, {
					'title': 'IMUI needs Read External Storage Permission',
					'message': 'IMUI needs access to your external storage ' +
						'so you select pictures.'
				}
			)
			if (granted === PermissionsAndroid.RESULTS.GRANTED) {
				console.log("You can select pictures");
			} else {
				console.log("Read External Storage permission denied");
			}
		} catch (err) {
			console.warn(err)
		}
		this.setState({
			chatInputStyle: {
				width: Dimensions.get('window').width,
				height: 420
			},
			menuContainerHeight: 1000,
		});
	}

	async onSwitchToCameraMode() {
		console.log("switch to camera mode");
		AuroraIMUIModule.scrollToBottom();
		try {
			const granted = await PermissionsAndroid.request(
				PermissionsAndroid.PERMISSIONS.CAMERA, {
					'title': 'IMUI needs Camera Permission',
					'message': 'IMUI needs access to your camera ' +
						'so you can take awesome pictures.'
				}
			)
			if (granted === PermissionsAndroid.RESULTS.GRANTED) {
				console.log("You can use the camera")
			} else {
				console.log("Camera permission denied")
			}
		} catch (err) {
			console.warn(err)
		}
		this.setState({
			chatInputStyle: {
				width: Dimensions.get('window').width,
				height: 420
			},
			menuContainerHeight: 850,
		});
	}

	onTouchEditText() {
		console.log("will scroll to bottom");
		AuroraIMUIModule.scrollToBottom();
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

    let MESSAGES = [];

    //add to messagelist
      const { navigation } = this.props;
      const { clientId } = navigation.state.params;

    if (msg) {
      let item = msg;
          if (!item._lcfile && item._lctext !== 'data:image/jpeg;base64,') {
            MESSAGES.push(constructMoreDetailMessage(item, clientId, true));
          } 
          else if (item._lcfile && item._lctext === 'data:image/jpeg;base64,') {
            this.constructMoreDetailMessageImg(item, clientId, true)
          } else if (item._lcfile && item._lctext === "data:audio/m4a;base64,") {
            this.constructMoreDetailMessageAudio(item, clientId, true)
          }


        AuroraIMUIModule.insertMessagesToTop(MESSAGES);
        AuroraIMUIModule.scrollToBottom();

        console.log('MESSAGE', MESSAGES)
      }
    console.log('messageUpdater', messages);
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

          AuroraIMUIModule.insertMessagesToTop([message]);
          AuroraIMUIModule.scrollToBottom();
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

          AuroraIMUIModule.insertMessagesToTop([message]);
          AuroraIMUIModule.scrollToBottom();
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
            // this.constructMoreDetailMessageAudio(item, clientId, true)
          }
        })


        AuroraIMUIModule.insertMessagesToTop(MESSAGES);
        AuroraIMUIModule.scrollToBottom();

        console.log('MESSAGE', MESSAGES)
      }

      newState.messages = result.value.concat(messages);
      

      this.setState(newState)
    })
  }

	componentWillUnmount() {
		
	}

	render() {
		return (
			<View style = { styles.container }>
				<MessageList
					style = {{flex: 1}}
					{...this.props}
					ref = {com => this.view = com}
					updateUI = {this.state.updateUI}
					onMsgClick = {this.onMsgClick}
					onMsgLongClick = {this.onMsgLongClick}
					onAvatarClick = {this.onAvatarClick} 
					onStatusViewClick = {this.onStatusViewClick}
					onTouchMsgList = {this.onTouchMsgList}
					onPullToRefresh = {this.onPullToRefresh}
					sendBubble = {{imageName:"send_msg", padding: 10}}
					receiveBubbleTextColor = {'#ffffff'}
					sendBubbleTextSize = {18}
					receiveBubbleTextSize = {14}
					sendBubblePressedColor = {'#dddddd'}
					eventMsgTxtColor = {'#ffffff'}
					eventMsgTxtSize = {16}
				/>
					<ChatInput
						style = {this.state.chatInputStyle}
						menuContainerHeight = {this.state.menuContainerHeight}
						isDismissMenuContainer = {this.state.isDismissMenuContainer}
						onSendText = {this.onSendText}
						onSendGalleryFiles = {this.onSendGalleryFiles}
						onTakePicture = {this.onTakePicture}
						onStartRecordVideo = {this.onStartRecordVideo}
						onFinishRecordVideo = {this.onFinishRecordVideo}
						onCancelRecordVideo = {this.onCancelRecordVideo}
						onStartRecordVoice = {this.onStartRecordVoice}
						onFinishRecordVoice = {this.onFinishRecordVoice}
						onCancelRecordVoice = {this.onCancelRecordVoice}
						onSwitchToMicrophoneMode = {this.onSwitchToMicrophoneMode}
						onSwitchToGalleryMode = {this.onSwitchToGalleryMode}
						onSwitchToCameraMode = {this.onSwitchToCameraMode}
						onTouchEditText = {this.onTouchEditText}
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

var styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F5FCFF',
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
    marginLeft: px2dp(23),
    marginTop: px2dp(40),
    tintColor: '#000',
  }
});