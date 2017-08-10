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
  membershipBox: {
    height: px2dp(35),
    alignItems: 'center',
    flexDirection: 'row',
  },
  name: {
    fontFamily: 'PingFangSC-Medium',
    fontSize: px2dp(20),
    color: '#FFF',
    marginRight: px2dp(9),
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
  infoSecondContainer: {
    width: px2dp(76),
    flexDirection: 'row',
    height: px2dp(26),
    alignItems: 'center',
  },
  infoBox: {
    height: px2dp(26),
    width: px2dp(110),
    alignItems: 'center',
    borderWidth: px2dp(1),
    borderColor: '#FFFFFF',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: px2dp(5),
  },
  info: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: px2dp(16),
    color: '#FFF',
    marginLeft: px2dp(6),
  },
})