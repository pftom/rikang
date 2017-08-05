import React from 'react';
import { StyleSheet, Dimensions, } from 'react-native';

//import common style
import { commonStyle } from './commonStyle';

//import screen adapt util
import px2dp from '../../utils/px2dp';

//get screen width and height
const { width, height } = Dimensions.get('window');

//single input style
export const PaySuccessStyle = StyleSheet.create({

  container: {
    width: width,
    flex: 1,
    backgroundColor: '#F5F6F7',
    alignItems: 'center',
  },
  box: {
    width: px2dp(276),
    alignItems: 'center',
    marginTop: px2dp(101),
  },
  title: {
    fontFamily: 'PingFangSC-Medium',
    fontSize: px2dp(24),
    color: '#000',
    letterSpacing: px2dp(-0.48),
    marginTop: px2dp(10),
    marginBottom: px2dp(31),
  },
  hintText: {
    fontFamily: 'PingFangSC-Light',
    fontSize: px2dp(20),
    color: '#000',
    letterSpacing: px2dp(-0.4),
    marginBottom: px2dp(49),
  },
  buttonBox: {
    width: px2dp(241),
    height: px2dp(44),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#09C79C',
    borderRadius: px2dp(8),
  },
  extraButtonBox: {
    backgroundColor: '#F5F6F7',
    borderWidth: px2dp(1),
    borderColor: '#09C79C',
  },
  buttonContainer: {
    width: px2dp(241),
    height: px2dp(44),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F6F7',
    borderRadius: px2dp(8),
  },
  extraButtonContainer: {
    marginTop: px2dp(34),
  },
  content: {
    fontFamily: 'PingFangSC-Medium',
    fontSize: px2dp(20),
    color: '#F5F6F7',
    letterSpacing: px2dp(-0.4),
  },
  extraContent: {
    color: '#09C79C',
  }
});