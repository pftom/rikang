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
} from 'react-native';

import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

//import post style
import { FinishedListItemStyle as styles } from '../styles/';



class FinishedListItem extends PureComponent {

  handleBtn = () => {

  }

  render() {
    const { item } = this.props;

    let lastMessage = "每次洗完澡后记得局部要用护肤品哈哈哈哈或或";

    if (lastMessage.length > 13) {
      lastMessage = lastMessage.slice(0, 13) + '...';
    }

    const lastTime = '2017年7月15日';

    let ITEM = [];
    if (item.comment) {
      const { ratings } = item.comment;
      if (ratings && !isNaN(parseInt(ratings))) {
        for (let i = 0; i < parseInt(ratings); i++) {
          ITEM.push(
            <Image source={require('../img/smallHeart.png')} style={styles.img} key={i} />
          )
        }

        for (let i = 0; i < 5 - parseInt(ratings); i++) {
          ITEM.push(
            <Image source={require('../img/smallSolidHeart.png')} style={styles.img} key={5 - i} />
          )
        }
      }
    }

    return (
      <View style={styles.container}>
        <View style={styles.box}>
          <View style={styles.doctorAvatarBox}>
            <Image source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }} style={styles.doctorAvatar} />
          </View>
          <View style={styles.rightBox}>
              <View style={styles.nameBox}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.lastTime}>{lastTime}</Text>
              </View>
              <View style={styles.appraiseBox}>
                {
                  !item.comment 
                  ? (
                    <TouchableHighlight onPress={() => { this.handleBtn() }} style={[ styles.buttonContainer, styles.extraButtonContainer ]}>
                        <View style={[ styles.buttonBox, styles.extraButtonBox ]}>
                          <Text style={[ styles.content, this.props.textStyle ]}>还未评价？去评价</Text>
                        </View>
                    </TouchableHighlight>
                  )
                  : (
                    <View style={styles.starBox}>
                      <View style={styles.heartBox}>
                        {
                          ITEM.map((item, key) => (
                            item
                          ))
                        }
                      </View>
                      <View style={styles.buttonBox}>
                        <Text style={[ styles.content, this.props.textStyle ]}>已评价</Text>
                      </View>
                    </View>
                  )
                }
              </View>
            </View>
        </View>
      </View>
    )
  }
}

export default FinishedListItem;