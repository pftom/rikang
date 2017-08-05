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

    let lastTime = "接受（剩余1小时48分）";
    // item.avatar

    return (
      <View style={styles.container}>
        <View style={styles.box}>
          <View style={styles.idBox}>
            <View style={styles.doctorAvatarBox}>
              <Image source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }} style={styles.doctorAvatar} />
            </View>
            <View style={styles.nameBox}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.consult}>向您发出咨询请求</Text>
            </View>
          </View>
          <View style={styles.btnBox}>
            <TouchableHighlight onPress={() => { this.handleBtn() }} style={styles.buttonContainer}>
              <View style={styles.buttonBox}>
                <Text style={[ styles.content, this.props.textStyle ]}>{lastTime}</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    )
  }
}

export default WaitForAcceptListItem;