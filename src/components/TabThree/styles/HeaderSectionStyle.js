import React from 'react';
import { StyleSheet, Dimensions, } from 'react-native';


//import screen adapt util
import px2dp from '../../../utils/px2dp';

//get screen width and height
const { width, height } = Dimensions.get('window');

//single input style
export const  HeaderSectionStyle = StyleSheet.create({
  headerBox: {
    width: width,
    height: px2dp(197),
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
  },

  headerContainer: {
    flexDirection: 'row',
    marginTop: px2dp(32),
  },

  topBox: {
    width: width - 2 * px2dp(16),
    alignItems: 'flex-end',
    marginTop: px2dp(32),
  },
  bottomBox: {
    flexDirection: 'row',
    marginTop: px2dp(11),
    width: width - 2 * px2dp(25),
  },

  leftBox: {
    marginRight: px2dp(17),
    marginLeft: px2dp(9),
  },
  name: {
    fontFamily: 'PingFangSC-Medium',
    fontSize: 20,
    color: '#FFF',
  },
  rightBox: {
    backgroundColor: 'transparent',
  },
  infoContainer: {
    width: px2dp(228),
    height: px2dp(30),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: px2dp(10),
  },
  infoBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: px2dp(26),
    width: px2dp(110),
    alignItems: 'center',
    borderWidth: px2dp(1),
    borderColor: '#FFFFFF',
    backgroundColor: 'transparent',
  },
  info: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: px2dp(16),
    color: '#FFF',
    marginLeft: px2dp(6),
  },
})