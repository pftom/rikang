import React from 'react';
import { StyleSheet, Dimensions, } from 'react-native';


//import screen adapt util
import px2dp from '../../../utils/px2dp';

//get screen width and height
const { width, height } = Dimensions.get('window');

//single input style
export const  ProblemStyle = StyleSheet.create({
  problemContainer: {
    width: width,
    height: px2dp(77),
    alignItems: 'center',
    justifyContent: 'center',
  },
  problemBox: {
    width: px2dp(325),
    flexDirection: 'row',
  },
  answerCountBox: {
    width: px2dp(83),
    height: px2dp(24),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#50E3C2',
    borderRadius: 5,
  },
  answerCount: {
    fontFamily: 'PingFangSC-Medium',
    fontSize: 14,
    color: '#FFF',
  },
  title: {
    fontFamily: 'PingFangSC-Medium',
    fontSize: 18,
    color: '#50E3C2',
  },
})