import React from 'react';
import { Text, View, StyleSheet, ScrollView, } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Header from './Header';

const MESSAGE = [
  {
    id: 1,
    title: '恭喜雷涛同学🎉🎉',
    time: '2017-05-20',
    content: '恭喜雷涛同学在新一轮党建答辩中以卓越的表现、无可挑剔的口才和难以匹敌的风度荣获第一名！',
  },
  {
    id: 2,
    title: '党校停课一次',
    time: '2017-04-20',
    content: '由于下周二我校应届本科生全体需出席人大代表评选。原定于下周二13:00的党校课程停课一周。',
  },
  {
    id: 3,
    title: '新学期加油',
    time: '2017-02-28',
    content: '党校课程如期展开，在这里祝愿所有参与学员能够在这一学期的党课中认真学习，不断提高思想觉悟！',
  }
];

const MessageItem = ({ navigation, title, time, content, }) => (
  <View style={styles.container}>
    <View style={styles.rightSide}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.timeBox}><Text style={styles.time}>{time}</Text></View>
      <Text style={styles.content}>{content}</Text>
    </View>
    <View style={styles.leftSide}>
      <LinearGradient start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}
                      colors={['#FF0467', '#FC7437']}
                      style={styles.linearGradient} />
    </View>
  </View>
);

const MessageBox = ({ navigation }) => {
  return (
    <ScrollView style={styles.scrollView}
                showsVerticalScrollIndicator={false}>
      <View style={styles.outerBox}>
        {
          MESSAGE.map(item => <MessageItem                                                          navigation={navigation}                                            {...item} key={item.id} />)
        }
      </View>
    </ScrollView>
  )
}

MessageBox.navigationOptions = ({ navigation }) => ({
  headerTitle: (
    <View style={styles.headerTitle}>
      <Header 
        headerText="消息盒子"
        logoLeft={require('../TabOne/img/back.png')}
        navigation={navigation}
      />
    </View>
  ),
})

const styles = StyleSheet.create({
  outerBox: {
    flexDirection: 'column',
    marginTop: 28,
    marginBottom: 20,
  },
  scrollView: {
    backgroundColor: '#FFF',
  },
  container: {
    flexDirection: 'row',
  },
  rightSide: {
    width: 293,
    left: 53,
    paddingLeft: 45,
    borderLeftWidth: 2,
    borderLeftColor: '#FF3B30',
    paddingBottom: 23,
  },
  leftSide: {
    position: 'absolute',
    left: 32,
    backgroundColor: 'transparent'
  },
  headerTitle: {
    top: -10,
  },
  linearGradient: {
    height: 44,
    width: 44,
    borderRadius: 50,
  },
  title: {
    fontFamily: 'PingFangSC-Medium',
    fontSize: 20,
    color: '#000000',
  },
  time: {
    fontFamily: 'PingFangSC-Medium',
    fontSize: 14,
    color: 'rgba(255,255,255,0.80)',
  },
  timeBox: {
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 8,
    paddingRight: 8,
    backgroundColor: '#D3D3D3',
    borderRadius: 5,
    width: 97,
    marginTop: 6,
    marginBottom: 12,
  },
  content: {
    fontFamily: 'PingFangSC-Light',
    fontSize: 18,
    color: '#000000',
  }
});

export default MessageBox;