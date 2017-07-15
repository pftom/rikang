import React from 'react';
import { StyleSheet, Dimensions, } from 'react-native';

//import common style
import { commonStyle } from './commonStyle';

//import screen adapt util
import px2dp from '../../utils/px2dp';

//get screen width and height
const { width, height } = Dimensions.get('window');

//single input style
export const DoctorDetailStyle = StyleSheet.create({

  gradientBox: {
    width: width,
    height: height,
  },

  back: {
    marginTop: 40,
    marginLeft: 24,
  },

  introBox: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    marginTop: 81,
    width: width, 
    backgroundColor: 'transparent',
    height: 189,
    alignItems: 'center',
  },

  topView: {
    position: "absolute",
    top: 81,
    bottom: 0,
    left: 0,
    right: 0
  },

  listBox: {
    marginTop: 200,
    height: px2dp(height + 99),
    width,
    
  },
  listBox1: {
    height: px2dp(height - 90 - 39),
    width,
    backgroundColor: '#F5F6F7'
  },
  listBox2: {
    height: px2dp(height - 90 - 49),
    width,
    marginBottom: 90,
    backgroundColor: '#F5F6F7',
  },

  introContainer: {
    width: px2dp(303),
  },

  introTopBox: {
    flexDirection: 'row',
    width: px2dp(303),
    justifyContent: 'space-between',
  },

  introTopLeftBox: {
    width: px2dp(106),
    height: px2dp(106),
    borderRadius: px2dp(53),
  },
  avatar: {
    width: px2dp(106),
    height: px2dp(106),
    borderRadius: px2dp(53),
  },

  identicalBox: {
    flexDirection: 'row',
    height: px2dp(33),
    alignItems: 'center',
    marginTop: -5,
  },
  name: {
    fontFamily: 'PingFangSC-Medium',
    fontSize: 24,
    color: '#FFF',
    letterSpacing: -0.48,
    marginRight: 12,
    
  },
  identical: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: 14,
    color: '#FFF',
    letterSpacing: -0.28,
  },

  hospitalBox: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    paddingTop: 4,
    paddingBottom: 4,
    
    alignItems: 'center',
    marginTop: px2dp(10),
    marginBottom: px2dp(13),
  },

  hospitalName: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: 16,
    color: '#09C79C',
    letterSpacing: -0.32,
    backgroundColor: 'transparent',
  },

  goDetailBox: {
    marginLeft: 168,
    marginTop: px2dp(91),
    flexDirection: 'row',
    height: px2dp(25),
    alignItems: 'center',
  },
  goDetailText: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: 18,
    color: '#FFF',
    marginRight: px2dp(8),
    backgroundColor: 'transparent',
  },

  introBottomBox: {
    width: px2dp(303),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: px2dp(14),
    alignItems: 'center',
  },
  contentBox: {
    width: 70,
    alignItems: 'center',
    paddingTop: -20,
  },
  border: {
    width: 0.5,
    height: px2dp(58),
    backgroundColor: '#FFF',
  },
  content: {
    fontFamily: 'PingFangSC-Medium',
    fontSize: 36,
    color: '#FFF',
    marginBottom: px2dp(4),
  },
  title: {
    fontFamily: 'PingFangSC-Light',
    fontSize: 14,
    color: '#FFF',
  },

  detailInfoContainer: {
    width: width,
    alignItems: 'center',
  },

  detailInfoBox: {
    width: px2dp(315),
    marginTop: px2dp(24),
  },
  linearGradient: {
    width: px2dp(315),
    height: 1,
    marginBottom: px2dp(10),
    marginTop: px2dp(10),
  },
  titleText: {
    fontFamily: 'PingFangSC-Medium',
    fontSize: 18,
    color: '#000',
    letterSpacing: -0.36,
  },
  contentText: {
    fontFamily: 'PingFangSC-Light',
    fontSize: 16,
    color: '#000',
    letterSpacing: -0.32,
  },


  loadingMore: commonStyle.loadingMore,
  loadingTextBox: commonStyle.loadingTextBox,
  loadingText: commonStyle.loadingText,
})