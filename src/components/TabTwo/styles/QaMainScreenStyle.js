import React from 'react';
import { StyleSheet, Dimensions, } from 'react-native';


//import screen adapt util
import px2dp from '../../../utils/px2dp';

//get screen width and height
const { width, height } = Dimensions.get('window');

//single input style
export const QaMainScreenStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  putQuestionContainer: {
    position: 'absolute',
    width: width,
    alignItems: 'center',
    left: 0,
    right: 0,
    bottom: px2dp(98),
  },
  putQuestionBox: {
    width: px2dp(149),
    height: px2dp(46),
    borderRadius: 100,
    shadowOffset: { x: 2, y: 20 },
    shadowColor: '#A5A5A5',
    shadowOpacity: 0.5,
  },
  putQuestionTouch: {
    width: px2dp(149),
    height: px2dp(46),
    borderRadius: 100,
  },
  putQuestionInlineBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: px2dp(149),
    height: px2dp(46),
    borderRadius: 100,
    backgroundColor: '#FFF',
  },
  putQuestionText: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: 16,
    color: '#000',
    letterSpacing: -0.32,
    marginLeft: px2dp(16),
  },
})