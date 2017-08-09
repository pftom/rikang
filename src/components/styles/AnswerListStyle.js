import React from 'react';
import { StyleSheet, Dimensions, } from 'react-native';

//import common style
import { commonStyle } from './commonStyle';

//import screen adapt util
import px2dp from '../../utils/px2dp';

//get screen width and height
const { width, height } = Dimensions.get('window');

//single input style
export const AnswerListStyle = StyleSheet.create({
  container: {
    width: width,
    alignItems: 'center',
    borderBottomWidth: px2dp(0.5),
    borderBottomColor: '#09C79C',
    marginTop: px2dp(5),
  },

  answerBox: {
    width: px2dp(325),
    marginTop: px2dp(7),
  },

  question_title: {
    fontFamily: 'PingFangSC-Medium',
    fontSize: px2dp(18),
    color: '#000',
  },
  name: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: px2dp(18),
    color: '#000',
    marginTop: px2dp(5),
    marginBottom: px2dp(10),
  },
  bottomBox: {
    width: px2dp(325),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconBox: {
    flexDirection: 'row',
    height: px2dp(24),
    alignItems: 'center',
    marginBottom: px2dp(7),
  },
  iconText: {
    marginLeft: px2dp(10),
    fontFamily: 'PingFangSC-Light',
    fontSize: px2dp(16),
    color: '#000',
    letterSpacing: px2dp(-0.32),
  },

  spreadBox: {
    marginTop: px2dp(-30),
    width: px2dp(24),
    alignItems: 'center',
  },
  spread: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: px2dp(12),
    color: '#8A8A8A',
    letterSpacing: -0.24,
    marginTop: px2dp(2),
  },


});