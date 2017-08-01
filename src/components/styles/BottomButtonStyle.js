import React from 'react';
import { StyleSheet, Dimensions, } from 'react-native';

//import common style
import { commonStyle } from './commonStyle';

//import screen adapt util
import px2dp from '../../utils/px2dp';

//get screen width and height
const { width, height } = Dimensions.get('window');

//single input style
export const BottomButtonStyle = StyleSheet.create({
  BottomBox: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: px2dp(67),
    width: width,
    backgroundColor: '#F5F6F7',
    borderTopWidth: 1,
    borderTopColor: '#D0D0D0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonBox: {
    width: px2dp(337),
    height: px2dp(43),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#09C79C',
    borderRadius: px2dp(8),
  },
  buttonContainer: {
    width: px2dp(337),
    height: px2dp(43),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F6F7',
    borderRadius: px2dp(8),
  },
  content: {
    fontFamily: 'PingFangSC-Medium',
    fontSize: px2dp(20),
    color: '#FFF',
    letterSpacing: px2dp(5),

  },
});