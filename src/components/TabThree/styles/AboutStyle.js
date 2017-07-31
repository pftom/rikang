import React from 'react';
import { StyleSheet, Dimensions, } from 'react-native';


//import screen adapt util
import px2dp from '../../../utils/px2dp';

//get screen width and height
const { width, height } = Dimensions.get('window');

//single input style
export const  AboutStyle = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    alignItems: 'center',
  },

  midBox: {
    marginTop: px2dp(49),
    width: width,
    alignItems: 'center',
  },
  company: {
    fontFamily: 'PingFangSC-Medium',
    fontSize: 20,
    color: '#000',
    marginTop: px2dp(24),
  },

  titleBox: {
    marginTop: px2dp(45),
  },
  title: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: 20,
    color: '#000',
    letterSpacing: -0.4,
    marginTop: px2dp(15),
  },

  bottomBox: {
    marginTop: px2dp(65),
  },
  copyRightBox: {
    marginBottom: px2dp(15),
    flexDirection: 'row',
    height: px2dp(30),
    alignItems: 'center',
  },
  copyRight: {
    marginLeft: px2dp(8),
    fontFamily: 'PingFangSC-Regular',
    fontSize: 20,
    color: '#000',
    letterSpacing: -0.4,
  }
});