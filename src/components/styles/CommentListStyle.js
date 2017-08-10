import React from 'react';
import { StyleSheet, Dimensions, } from 'react-native';

//import common style
import { commonStyle } from './commonStyle';

//import screen adapt util
import px2dp from '../../utils/px2dp';

//get screen width and height
const { width, height } = Dimensions.get('window');

//single input style
export const CommentListStyle = StyleSheet.create({
  container: {
    width: width,
    borderBottomWidth: 0.5,
    borderBottomColor: '#09C79C',
    alignItems: 'center',
  },
  commentBox: {
    width: px2dp(328),
    flexDirection: 'row',
    marginTop: 7,
  },
  leftBox: {
    height: px2dp(52),
    width: px2dp(52),
    borderRadius: px2dp(26),
    marginRight: px2dp(20),
  },
  avatar: {
    height: px2dp(52),
    width: px2dp(52),
    borderRadius: px2dp(26),
  },
  rightBox: {
    width: px2dp(256),
  },

  nameBox: {
    flexDirection: 'row',
    height: px2dp(25),
    alignItems: 'center',
  },
  name: {
    fontFamily: 'PingFangSC-Medium',
    fontSize: 18,
    color: '#000',
    letterSpacing: -0.36,
    marginRight: px2dp(16),
  },
  time: {
    fontFamily: 'PingFangSC-Light',
    fontSize: 14,
    color: '#9E9E9E',
  },

  starBox: {
    flexDirection: 'row',
    width: px2dp(150),
    justifyContent: 'space-between',
    marginTop: px2dp(7),
    marginBottom: px2dp(7),
  },

  contentBox: {
    width: px2dp(256),
    marginBottom: px2dp(5),
  },
  content: {
    fontFamily: 'PingFangSC-Light',
    fontSize: 16,
    color: '#000',
    letterSpacing: -0.32,
  },

  shareBox: {
    marginTop: px2dp(6),
    height: px2dp(30),
    marginBottom: px2dp(7),
    width: px2dp(250),
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#09C79C',
    justifyContent: 'center',
    alignItems: 'center',
  },
  shareText: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: 14,
    color: '#17B18F',
  },
});