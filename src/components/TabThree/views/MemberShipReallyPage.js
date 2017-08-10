import React, { PureComponent } from 'react';
import { 
  TouchableOpacity, 
  Text, 
  View, 
  ScrollView, 
  StatusBar,
  Animated,
  Image,
  TouchableHighlight,
  Switch,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Platform,
} from 'react-native';

import { Map } from 'immutable';

import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

import { Toast, List, InputItem } from 'antd-mobile';

const Item = List.Item;

import { getNewCommentSelector } from '../../../selectors/';

import { Header } from '../../common/';

import { BottomButton } from '../../common/';

//import post style
import { MemberShipStyle as styles } from '../styles/';

import { ADD_COMMENT_FOR_ORDER, CLEAR_COMMENT_ORDER_STATE } from '../../../constants/';

function getNowTime(time) {
  const now = new Date(time);

  //setting message time
  const year = now.getFullYear();
  const month = now.getMonth() >= 9 ? now.getMonth() + 1 : `0${now.getMonth() + 1}`;
  const day = now.getDate();
  const hour = now.getHours();
  const minute = now.getMinutes();

  const nowTime = `${year}年${month}月${day}日`;

  return nowTime;
}


class MemberShipReallyPage extends PureComponent {


  render() {

    const { headerText, navigation } = this.props;

    const { dispatch, token, phone, membership } = navigation.state.params;

    const renderText = [
      '1. 在线咨询享受9.5折优惠；',
      '2. 可以享有一年一次医院常规体检服务；',
      '3. 赠送一份保险。',
    ];

    return (
        <View style={styles.container}>
        <Header
          headerText={'填写会员信息'}
          logoLeft={true}
          showGradient={true}
          navigation={navigation}
        />
        <List
          renderHeader={() => "真实姓名"}
        >
          <Item>{membership.get('name')}</Item>
        </List>

        <List
          renderHeader={() => "身份证号码"}
        >
          <Item>{membership.get('id_card')}</Item>
        </List>

        <List
          renderHeader={() => "有效期至"}
        >
          <Item>{getNowTime(membership.get('expire'))}</Item>
        </List>

        <View style={styles.textContainer}>
          <View style={styles.textBox}>
            {
            renderText.map((item, key) => (
              <Text key={key} style={styles.text}>{item}</Text>
            ))
          }
          </View>
        </View>
      </View>
    )
  }
}

export default MemberShipReallyPage;