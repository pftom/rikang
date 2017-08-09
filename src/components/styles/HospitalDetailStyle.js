import React from 'react';
import { StyleSheet, Dimensions, } from 'react-native';

//import common style
import { commonStyle } from './commonStyle';

//import screen adapt util
import px2dp from '../../utils/px2dp';

//get screen width and height
const { width, height } = Dimensions.get('window');

//single input style
export const HospitalDetailStyle = StyleSheet.create({
  container: {
    backgroundColor: '#F5F6F7',
    flex: 1,
  },
  introSectionBox: {
    width: width,
    height: px2dp(400),
    backgroundColor: '#F5F6F7',
    alignItems: 'center',
  },

  introSectionContainer: {
    width: px2dp(315),
    backgroundColor: 'transparent',
    alignItems: 'center',
    marginTop: px2dp(73),
  },
  identicalBox: {
    flexDirection: 'row',
    width: px2dp(315),
    alignItems: 'center',
    justifyContent: 'center',
  },

  name: {
    fontFamily: 'PingFangSC-Medium',
    fontSize: 24,
    color: '#FFF',
    letterSpacing: -0.48,
  },
  rankBox: {
    width: 31,
    height: 19,
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginLeft: px2dp(22),
    justifyContent: 'center',
    alignItems: 'center',
  },
  rank: {
    fontFamily: 'PingFangSC-Medium',
    fontSize: 10,
    color: '#000',
    letterSpacing: -0.2,
  },

  location: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: 14,
    color: '#FFF',
    letterSpacing: -0.28,
    marginTop: px2dp(8),
    marginBottom: px2dp(22),
  },

  touchBox: {
    width: px2dp(315),
    flexDirection: 'row',
    justifyContent: 'center',
  },
  contentBox: {
    width: 132,
    height: 38,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  }, 
  content: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: 16,
    color: '#FFF',
    letterSpacing: -0.32,
    marginLeft: 10,
  },

  descriptionContainer: {
    width: width,
    alignItems: 'center',
    flex: 1,
  },
  descriptionBox: {
    width: px2dp(325),
    marginTop: px2dp(10),
  },
  description: {
    fontFamily: 'PingFangSC-Light',
    fontSize: 16,
    color: '#000',
    letterSpacing: -0.12,
    lineHeight: 25,
  },

  topView: commonStyle.topView,
  topView1: {
    top: px2dp(193),
  },

  listBox: commonStyle.listBox,
  listBoxx: {
    marginTop: 20,
  },
  listBox1: commonStyle.listBox1,
  listBox2: commonStyle.listBox2,

  listBox5: {
    height: px2dp(height - 81 - 49 - 90),
  },
  listBox6: {
    height: px2dp(height - 81 - 49 - 90),
  },

  loadingMore: commonStyle.loadingMore,
  loadingTextBox: commonStyle.loadingTextBox,
  loadingText: commonStyle.loadingText,
})