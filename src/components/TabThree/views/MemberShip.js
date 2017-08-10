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

import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

import { Toast } from 'antd-mobile';

import { getNewCommentSelector } from '../../../selectors/';

import { Header } from '../../common/';

import { BottomButton } from '../../common/';

//import post style
import { MemberShipStyle as styles } from '../styles/';

import { ADD_COMMENT_FOR_ORDER, CLEAR_COMMENT_ORDER_STATE } from '../../../constants/';

const COUNTERTEXT = [
  '很差',
  '还过得去',
  '有待提高',
  '一般满意',
  '比较满意',
  '非常满意',
];


class MemberShip extends PureComponent {


  handleMemberShip = () => {
    const { navigation } = this.props;

    const { dispatch, token } = navigation.state.params;

    navigation.navigate('MemberShipContent', { token, dispatch });
  }

  render() {

    const { headerText, navigation } = this.props;

    const { dispatch, token, phone } = navigation.state.params;

    const ITEMS = [
      {
        icon: require('../img/icon1.png'),
        title: phone,
      },
      {
        icon: require('../img/icon2.png'),
        title: '1 年',
      },
      {
        icon: require('../img/icon3.png'),
        title: '360',
      },
      {
        icon: require('../img/icon4.png'),
        title: 'scheme',
        content: [
          '1. 在线咨询享受9.5折优惠；',
          '2. 可以享有一年一次医院常规体检服务；',
          '3. 赠送一份保险。',
        ]
      },
    ];

    const renderContent = [];

    ITEMS.map((item, key) => {
      let renderExtraText = null;
      if (key === 2) {
        renderExtraText = <Text style={styles.money}>{item.title} <Text style={styles.moneyUnit}>元</Text></Text>
      } else if (key === 3) {
        renderExtraText = (
          <View style={styles.schemeBox}>
            {
              item.content.map((item, key) => (
                <Text style={styles.scheme} key={key}>{item}</Text>
              ))
            }
          </View>
        )
      } else {
        renderExtraText = (
          <Text style={styles.title}>{item.title}</Text>
        )
      }

      if (key === 3) {
        renderContent.push(
          <View style={[ styles.extraItemBox ]} key={key}>
            <Image source={item.icon} style={styles.icon} />
            {renderExtraText}
          </View>
        )
      } else {
        renderContent.push(
          <View style={[ styles.itemBox ]} key={key}>
            <Image source={item.icon} style={styles.icon} />
            {renderExtraText}
          </View>
        )
      }
        
    })


    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
        <Header
          headerText={'日康会员'}
          logoLeft={true}
          showGradient={true}
          navigation={navigation}
        />
        <View style={styles.secondContainer}>
          <View styke={styles.box}>
            <View style={styles.headerTitleBox}><Text style={styles.headerTitle}>开通会员</Text></View>
            {renderContent}
          </View>
        </View>
        <BottomButton content={'立即开通'} token={token} dispatch={dispatch} handleMemberShip={this.handleMemberShip}  navigation={navigation}  kind={'membership'} />
      </View>
      </TouchableWithoutFeedback>
    )
  }
}

export default connect(
  state => getNewCommentSelector(state),
)(MemberShip);