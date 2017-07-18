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
    alignItems: 'center',
    backgroundColor: '#F5F6F7',
  },
  graySpace: {
    width: width,
    height: px2dp(9),
    backgroundColor: '#ECECEC',
  },  

  topBox: {
    marginTop: px2dp(25),
    width: px2dp(323),
    flexDirection: 'row',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'PingFangSC-Medium',
    fontSize: 20,
    color: '#000',
    letterSpacing: -0.4,
  },
  solved: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: 18,
    color: '#09C79C',
    letterSpacing: -0.36,
  },
  body: {
    width: px2dp(324),
    alignItems: 'center',
    marginTop: px2dp(15),
  },
  content: {
    fontFamily: 'PingFangSC-Light',
    fontSize: 16,
    color: '#000',
    letterSpacing: -0.32,
  },  
  tagContainer: {
    width: px2dp(324),
  },
})