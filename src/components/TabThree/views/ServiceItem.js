import React, { PureComponent } from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  ScrollView,
  StatusBar,
  Animated,
  Image,
  Platform,
} from 'react-native';

import RNFS from 'react-native-fs';

import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

//import post style
import { ServiceItemStyle as styles } from '../styles/';

import { REFUND, FINISH_ORDER } from '../../../constants/';

export function getNowTime(item) {
  const now = new Date(item._lastMessageAt);

  const hour = now.getHours();
  const minute = now.getMinutes();

  const nowTime = `${hour}:${minute}`;

  return nowTime;
}

export function calculateTime (orderCreatedTime, totalTime) {
    const lastOrderTime = Date.parse(orderCreatedTime);
    const now = new Date();
    const nowOrderTime = now.getTime()
    console.log('lastOrderTime', lastOrderTime, nowOrderTime)
    const remainTime = Math.floor( parseInt(totalTime) - ((nowOrderTime - lastOrderTime) / 1000 / 60 / 60) );

    return remainTime;
}



class ServiceItem extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      normalConv: [],
    }
  }

  handleBtn = () => {

  }

  componentDidMount() {

    this.getConversations();
  }

  getMessages = (converstion) => {
    const that = this;
    console.log('')

    const { item, token, dispatch } = that.props;
    const { order_no, charge_id } = item;

    return converstion.queryMessages({
      limit: 10,
    }).then(function(messages) {

      // judge whether the order has completed

      if (messages.length === 0 && calculateTime(item.service_object.start, 2) <= 0) {
        dispatch({ type: REFUND, payload: { token, body: { charge_id, order_no } }});
      }

      if (messages.length !== 0 && calculateTime(item.service_object.start, 24) <= 0) {
        dispatch({ type: FINISH_ORDER, payload: { token, body: { order_no } }});
      }
    }).catch(console.error.bind(console));
  }

  getNormalConvs = () => {
    const { userId, LeanRT, navigation, item } = this.props;

    const doctorId = item.service_object.doctor;
    const clientId = item.service_object.patient.id;
    const imClient = LeanRT.imClient;
    console.log('imClient', imClient);
    console.log('doctorId', doctorId, clientId)
    if (imClient && imClient.getQuery) {
      return imClient.getQuery().withLastMessagesRefreshed(true).containsMembers([String(clientId), String(doctorId)]).find();
    }
  }

  getConversations = () => {
    const that = this;

    const convs =  this.getNormalConvs()
    
    if (convs) {
      return convs.then((data) => {
        if (data && data.length > 0) {
          that.getMessages(data[0]);
        }
        that.setState({
          normalConv: data,
        });
      })
    }
  }

  handleChat(doctorId) {
    const { navigation, LeanRT, item  } = this.props;

    const clientId = item.service_object.patient.id;
    const imClient = LeanRT.imClient;
    return imClient.createConversation({
      members: [String(doctorId)],
      name: `${String(doctorId)} 和 ${imClient.id}的对话`,
      transient: false,
      unique: true,
    }).then(conversation => {
      const SELECT = {
        'ios': 'TestRNIMUI',
        'android': 'TestRNIMUIAndroid'
      };
      navigation.navigate(SELECT[Platform.OS], { clientId, doctorId, imClient: imClient, conv: conversation })
    }).catch(console.error.bind(console));
  }

  render() {
    const { item, navigation, dispatch, LeanRT, userId } = this.props;

    const doctorId = item.service_object.doctor;

    const { normalConv } = this.state;
    console.log('normalConv', normalConv);

    let lastMessage = '';
    let lastTime = '';

    /*
     * for  calculate time
     * really really really important!!!!!
     * because, We depend on it to make money. - -!  _______电脑玩家汤姆
    */

    const remainTime = calculateTime(item.service_object.start, 24);



    if (normalConv.length > 0 && normalConv[0].lastMessage) {
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

    if (lastMessage.length > 10) {
      lastMessage = lastMessage.slice(0, 10) + '...';
    } else if (lastMessage.length === 0) {
      lastMessage = '暂无消息';
    }

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
                    <Text style={styles.name}>{item.name}</Text>
                    <View style={styles.remainBox}><Text style={styles.remainTime}>剩余{remainTime}小时</Text></View>
                    <Image source={{ uri: '/data/user/0/com.rikang/files/RNFetchBlobTmp_nbiebxwcmsjk4g9hzz6gtq.png' }} style={{ width: 40, height: 40 }} />
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