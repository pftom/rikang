import React from 'react';
import { StyleSheet, Dimensions, Platform } from 'react-native';

//import common style
import { commonStyle } from './commonStyle';

//import screen adapt util
import px2dp from '../../utils/px2dp';

//get screen width and height
const { width, height } = Dimensions.get('window');

//single input style
export const PostDetailStyle = StyleSheet.create({
  container: {
    backgroundColor: '#F5F6F7',
    width: width,
    alignItems: 'center',
    top: 0,
    left: 0, 
    right: 0,
  },
  photo: {
    width: width,
    height: px2dp(210 + 25),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: px2dp(34),
  },
  titleBox: {
    width: px2dp(306),
    alignItems: 'center',
  },
  title: {
    fontFamily: 'PingFangSC-Medium',
    fontSize: px2dp(24),
    color: '#FFF',
    letterSpacing: -0.48,
    backgroundColor: 'transparent',
  },

  scrollBox: {
    height: height,
    top: px2dp(-25),
  },
  postBox: {
    marginBottom: px2dp(5),
    width: width,
    alignItems: 'center',
  },
  body: {
    width: px2dp(306),
  },
})