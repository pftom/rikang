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

import { calculateTime } from './ServiceItem';

class WaitForAcceptListItem extends PureComponent {

  handleBtn = () => {

  }

  componentDidMount() {
    // const { item, dispatch } = this.props;

    // const { order_no, charge_id } = item;

    // const remainTime = calculateTime(item.orderCreatedTime, 2);

    // if (remainTime && remainTime <= 0) {
    //   dispatch({ type: REFUND, payload: { token, body: { charge_id, order_no } }});
    // }

  }

  render() {

    const { item } = this.props;

    // const remainTime = calculateTime(item.orderCreatedTime, 2);

    let remainTime = "1小时48分后退款";
    // item.avatar

    return (
      <View style={styles.container}>
        <View style={styles.box}>
          <View style={styles.idBox}>
            <View style={styles.doctorAvatarBox}>
              <Image source={{ uri: item.avatar }} style={styles.doctorAvatar} />
            </View>
            <View style={styles.nameBox}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.consult}>{remainTime}</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default WaitForAcceptListItem;