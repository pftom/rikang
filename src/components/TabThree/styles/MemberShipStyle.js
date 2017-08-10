import React from 'react';
import { StyleSheet, Dimensions, Platform } from 'react-native';


//import screen adapt util
import px2dp from '../../../utils/px2dp';

//get screen width and height
const { width, height } = Dimensions.get('window');

//single input style
export const  MemberShipStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  secondContainer: {
    width: width,
    alignItems: 'center',
    marginTop: px2dp(28),
  },
  box: {
    width: px2dp(289),
    alignItems: 'center',
  },
  headerTitle: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: px2dp(24),
    color: '#000',
    letterSpacing: px2dp(-0.48),
  },
  headerTitleBox: {
    width: px2dp(289),
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: px2dp(14),
  },
  itemBox: {
    width: px2dp(289),
    flexDirection: 'row',
    borderTopWidth: px2dp(0.5),
    borderTopColor: '#DADADA',
    height: px2dp(64),
    alignItems: 'center',
  },
  extraItemBox: {
    width: px2dp(289),
    flexDirection: 'row',
    borderTopWidth: px2dp(0.5),
    borderTopColor: '#DADADA',
    height: px2dp(151),
    paddingTop: px2dp(20),
  },
  icon: {
    marginLeft: px2dp(14),
    marginRight: px2dp(24),
  },
  title: {
    fontFamily: 'PingFangSC-Light',
    fontSize: px2dp(20),
    color: '#545454',
    letterSpacing: px2dp(-0.4),
  },
  money: {
    fontFamily: 'PingFangSC-Medium',
    fontSize: px2dp(24),
    color: '#D0021B',
    letterSpacing: px2dp(-0.48),
  },
  moneyUnit: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: px2dp(20),
    color: '#000000',
    letterSpacing: px2dp(-0.4),
  },
  schemeBox: {
    width: px2dp(241),
  },
  scheme: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: px2dp(18),
    color: '#545454',
    letterSpacing: px2dp(-0.36),
    marginBottom: px2dp(21)
  },
  textContainer: {
    width: width,
    alignItems: 'center',
  },
  textBox: {
    width: px2dp(270),
    marginTop: px2dp(53),
  },
  text: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: px2dp(14),
    color: '#545454',
    letterSpacing: px2dp(-0.28),
  },
});