import React from 'react';
import { StyleSheet, Dimensions, } from 'react-native';


//import screen adapt util
import px2dp from '../../../utils/px2dp';

//get screen width and height
const { width, height } = Dimensions.get('window');

//single input style
export const QaDetailStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECECEC',
  },  
  questionContainer: {
    width: width,
    backgroundColor: '#F5F6F7',
  },
  graySpace: {
    width: width,
    height: px2dp(9),
    backgroundColor: '#ECECEC',
  },  

  imgBox: {
    width: px2dp(323),
    marginLeft: px2dp(26),
    marginTop: px2dp(10),
  },
  photo: {
    width: px2dp(80),
    height: px2dp(66),
    marginRight: px2dp(5),
  },

  topBox: {
    marginTop: px2dp(25),
    width: px2dp(323),
    flexDirection: 'row',
    marginLeft: px2dp(26),
  },
  title: {
    fontFamily: 'PingFangSC-Medium',
    fontSize: px2dp(20),
    color: '#000',
    letterSpacing: px2dp(-0.4),
  },
  solved: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: px2dp(18),
    color: '#09C79C',
    letterSpacing: px2dp(-0.36),
  },
  body: {
    width: px2dp(324),
    marginTop: px2dp(15),
    marginLeft: px2dp(26),
  },
  content: {
    fontFamily: 'PingFangSC-Light',
    fontSize: px2dp(16),
    color: '#000',
    letterSpacing: px2dp(-0.32),
  },  
  tagContainer: {
    width: px2dp(324),
    marginLeft: px2dp(26),
  },
})