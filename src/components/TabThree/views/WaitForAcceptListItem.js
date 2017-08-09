import React, { PureComponent } from 'react';
import { 
  TouchableOpacity, 
  Text, 
  View, 
  ScrollView, 
  StatusBar,
  Animated,
  Image,
  TouchableWithoutFeedback,
  TouchableHighlight,
} from 'react-native';

import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';


//import post style
import { WaitForAcceptListItemStyle as styles } from '../styles/';

import { REFUND } from '../../../constants/';

import { calculateTime as refundTime} from './ServiceItem';

export function calculateTime (orderCreatedTime, totalTime) {
  console.log('orderCreatedTime', orderCreatedTime)
    const lastOrderTime = Date.parse(orderCreatedTime);
    const now = new Date();
    const nowOrderTime = now.getTime()
    console.log('lastOrderTime', lastOrderTime, nowOrderTime)
    const remainHour =  totalTime - ((nowOrderTime - lastOrderTime) / 1000 / 60 / 60) ;
    console.log('remainHour', remainHour);
    const remainMinute = Math.floor( (remainHour - Math.floor(remainHour)) * 60 );
    console.log('remainMinute', remainMinute)

    const remainTime = Math.floor(remainHour) + '小时' + remainMinute + '分钟后退款';

    return {
      remainTime,
      remainHour,
      remainMinute,
    }
}

class WaitForAcceptListItem extends PureComponent {

  handleBtn = () => {

  }

  componentDidMount() {
    const { item, dispatch, token } = this.props;

    const { order_no, charge_id } = item;

    const remainObject = calculateTime(item.created, 2);

    if (remainObject && remainObject.remainHour <= 0 && remainObject.remainMinute <= 0) {
      dispatch({ type: REFUND, payload: { token, body: { charge_id, order_no } }});
    }

  }

  render() {

    const { item } = this.props;

    const remainObject = calculateTime(item.created, 2);

    return (
      <View style={styles.container}>
        <View style={styles.box}>
          <View style={styles.idBox}>
            <View style={styles.doctorAvatarBox}>
              <Image source={{ uri: item.avatar }} style={styles.doctorAvatar} />
            </View>
            <View style={styles.nameBox}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.consult}>{remainObject.remainTime}</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default WaitForAcceptListItem;