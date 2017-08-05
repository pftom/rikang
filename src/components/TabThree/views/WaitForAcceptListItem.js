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



class WaitForAcceptListItem extends PureComponent {

  handleBtn = () => {

  }

  render() {

    const { item } = this.props;

    let lastTime = "1小时48分后退款";
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
              <Text style={styles.consult}>{lastTime}</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default WaitForAcceptListItem;