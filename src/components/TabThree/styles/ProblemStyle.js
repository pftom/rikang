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
    alignItems: 'center',
  },
  problemBox: {
    width: px2dp(325),
    flexDirection: 'row',
    marginTop: px2dp(10),
    paddingBottom: px2dp(12),
    borderBottomWidth: 0.5,
    borderBottomColor: '#DCDCDC',
  },
  answerCountBox: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#50E3C2',
    borderRadius: 5,
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 6,
    paddingRight: 6,
    position: 'absolute',

  },
  answerCount: {
    fontFamily: 'PingFangSC-Medium',
    fontSize: 14,
    color: '#FFF',
  },
  title: {
    fontFamily: 'PingFangSC-Light',
    fontSize: 18,
    color: '#000000',
    backgroundColor: 'transparent',
  },
})