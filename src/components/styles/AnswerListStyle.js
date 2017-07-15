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
    borderBottomWidth: 0.5,
    borderBottomColor: '#09C79C',
    marginTop: 5,
  },

  answerBox: {
    width: px2dp(325),
    marginTop: px2dp(21),
  },

  question_title: {
    fontFamily: 'PingFangSC-Medium',
    fontSize: 18,
    color: '#000',
  },
  name: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: 18,
    color: '#000',
    marginTop: px2dp(9),
    marginBottom: px2dp(15),
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
    marginBottom: px2dp(17),
  },
  iconText: {
    marginLeft: 10,
    fontFamily: 'PingFangSC-Light',
    fontSize: 16,
    color: '#000',
    letterSpacing: -0.32,
  },

  spreadBox: {
    marginTop: -30,
    width: px2dp(24),
    alignItems: 'center',
  },
  spread: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: 12,
    color: '#8A8A8A',
    letterSpacing: -0.24,
    marginTop: px2dp(2),
  },


});