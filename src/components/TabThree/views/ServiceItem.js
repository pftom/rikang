import React, { PureComponent } from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  ScrollView,
  StatusBar,
  Animated,
  Image,
} from 'react-native';

import RNFS from 'react-native-fs';

import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

//import post style
import { ServiceItemStyle as styles } from '../styles/';

function getNowTime(item) {
  const now = new Date(item._lastMessageAt);

  const hour = now.getHours();
  const minute = now.getMinutes();

  const nowTime = `${hour}:${minute}`;

  return nowTime;
}



class ServiceItem extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      normalConv: [],
      img: null,
    }
  }

  handleBtn = () => {

  }

  componentDidMount() {
    this.getConversations();

    const that = this;
  }

  getNormalConvs = () => {
    const { userId, LeanRT, navigation, item } = this.props;

    const doctorId = item.service_object.doctor;
    const clientId = userId;
    const imClient = LeanRT.imClient;
    console.log('imClient', imClient);
    if (imClient && imClient.getQuery) {
      return imClient.getQuery().withLastMessagesRefreshed(true).containsMembers([String(clientId), String(doctorId)]).find();
    }
  }

  getConversations = () => {
    const that = this;

    const convs =  this.getNormalConvs()
    
    if (convs) {
      return convs.then(data => {
        that.setState({
          normalConv: data,
        });
      })
    }
  }

  handleChat(doctorId) {
    const { navigation, myId, LeanRT, userId,  } = this.props;

    const clientId = userId;
    const imClient = LeanRT.imClient;
    
    return imClient.createConversation({
      members: [String(doctorId)],
      name: `${String(doctorId)} 和 ${imClient.id}的对话`,
      transient: false,
      unique: true,
    }).then(conversation => {

      navigation.navigate('TestRNIMUI', { clientId: userId, doctorId, imClient: imClient, conv: conversation })
    }).catch(console.error.bind(console));
  }

  render() {
    const { item, navigation, dispatch, LeanRT, userId } = this.props;

    const doctorId = item.service_object.doctor;

    const { normalConv } = this.state;
    console.log('normalConv', normalConv);

    let lastMessage = '';
    let lastTime = '';

    if (normalConv.length > 0) {
      const message = normalConv[0].lastMessage;

      if (!message._lcfile && message._lctext !== 'data:image/jpeg;base64,') {
        lastMessage = message._lctext;
      } else if (message._lcfile && message._lctext === 'data:image/jpeg;base64,') {
        lastMessage = '发来了一张图片...';
      } else if (message._lcfile && message._lctext === "data:audio/m4a;base64,") {
        lastMessage = '发来了一段语音...';
      }

      lastTime = getNowTime(normalConv[0]);
    }

    if (lastMessage.length > 13) {
      lastMessage = lastMessage.slice(0, 13) + '...';
    }

    const remainTime = '剩余3小时';

    return (
      <TouchableOpacity onPress={() => { this.handleChat(doctorId) }}>
        <View style={styles.container}>
          <View style={styles.box}>
            <View style={styles.doctorAvatarBox}>
              <Image source={{ uri: item.avatar }} style={styles.doctorAvatar} />
            </View>
            <View style={styles.rightBox}>
                <View style={styles.nameBox}>
                  <View style={styles.remainContainer}>
                  {
                    this.state.img && (
                      <Image source={{ uri: this.state.img }} style={{ height: 30, width: 30 }}/>
                    )
                  }
                    <Text style={styles.name}>{item.name}</Text>
                    <View style={styles.remainBox}><Text style={styles.remainTime}>{remainTime}</Text></View>
                  </View>
                  <Text style={styles.lastTime}>{lastTime}</Text>
                </View>
                <Text style={styles.lastMessage}>{lastMessage}</Text>
              </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

export default ServiceItem;