import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import LinearGradient from 'react-native-linear-gradient';

import Header from '../../common/Header'
import SettingItem from './SettingItem';
import SelectPhoto from './SelectPhoto';

const ITEMS = [
  {
    id: 1,
    leftIcon: require('../img/message.png'),
    category: '消息通知',
    messageNum: 2,
  },
  {
    id: 2,
    leftIcon: require('../img/attend.png'),
    category: '活动签到',
    messageNum: 1,
  },
  {
    id: 3,
    leftIcon: require('../img/record.png'),
    category: '党课记录',
  },
  {
    id: 4,
    leftIcon: require('../img/settings.png'),
    category: '设置',
  },
]

const SCREEN = [ "MessageBox", "ActivityBox", "PersonData", "Setting" ];

class TabThreeScreenOne extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.upSide}>
          <SelectPhoto num={1} />
          <View style={styles.rightSide}>
            <Text style={styles.name}>周思达</Text>
            <View style={styles.identityBox}>
              <Image source={require('../img/female.png')} style={styles.sex} />
              <Text style={styles.identity}>共青团员</Text>
            </View>
          </View>
        </View>
        <View style={styles.downSide}>
          <View style={styles.gradientBox}>
            <LinearGradient 
              style={styles.gradient} 
              start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 0.0}}
              colors={['rgba(255,116,116,0)', 'rgba(255,94,94,100)']}  
            />
          </View>
          <View style={styles.itemBox}>
            {
              ITEMS.map(item => <TouchableOpacity key={item.id} onPress={() => this.props.navigation.navigate(SCREEN[item.id - 1])}><SettingItem {...item} /></TouchableOpacity>)
            }
          </View>
        </View>
      </View>
    )
  }
}

TabThreeScreenOne.navigationOptions = ({ navigation }) => ({
  headerTitle: (
    <View style={styles.headerTitle}>
      <Header 
        headerText="我的账号"
        navigation={navigation}
      />
    </View>
  ),
})

const styles = StyleSheet.create({
  headerTitle: {
    top: -10,
  },
   container: {
    flex: 1,
    alignItems: 'flex-end',
    backgroundColor: '#FFF',
  },
  upSide: {
    flexDirection: 'row',
    marginRight: 70,
    marginTop: 51,
  },
  rightSide: {
    marginTop: -1
  },
  name: {
    fontFamily: 'PingFangSC-Medium',
    fontSize: 24,
    color: 'rgba(0,0,0,0.80)',
  },
  identityBox: {
    flexDirection: 'row',
    marginTop: 12,
    alignItems: 'center',
    marginLeft: 1,
  },
  identity: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: 18,
    color: 'rgba(100,100,100,0.80)',
  },
  sex: {
    marginTop: -1.5,
    marginRight: 4,
  },
  gradient: {
    width: 312,
    height: 1,
    marginTop: 29
  },
  gradientBox: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: -20,
  },
  itemBox: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    flexWrap: 'wrap',
    marginRight: -7,
    marginTop: 21,
  }
})




export default TabThreeScreenOne;