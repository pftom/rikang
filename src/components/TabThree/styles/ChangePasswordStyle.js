import React from 'react';
import { StyleSheet, Dimensions, } from 'react-native';


//import screen adapt util
import px2dp from '../../../utils/px2dp';

//get screen width and height
const { width, height } = Dimensions.get('window');

//single input style
export const  ChangePasswordStyle = StyleSheet.create({
  container: {
    flex: 1,
  },

  btnBox: {
    width: width,
    alignItems: 'center',
    marginTop: px2dp(10),
  },
  buttonBox: {
    width: px2dp(337),
    height: px2dp(43),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#09C79C',
    borderRadius: 8,
  },
  buttonContainer: {
    width: px2dp(337),
    height: px2dp(43),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F6F7',
    borderRadius: 8,
  },
  content: {
    fontFamily: 'PingFangSC-Medium',
    fontSize: 20,
    color: '#FFF',
    letterSpacing: 5,

  },
});