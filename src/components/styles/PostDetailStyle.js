import React from 'react';
import { StyleSheet, Dimensions, } from 'react-native';

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
  },
  photo: {
    width: width,
    height: px2dp(210),
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
    fontSize: 24,
    color: '#FFF',
    letterSpacing: -0.48,
    backgroundColor: 'transparent',
  },

  scrollBox: {
    height: height
  },
  postBox: {
    marginBottom: 5,
  }
})