import React from 'react';
import { StyleSheet, Dimensions, } from 'react-native';

//import common style
import { commonStyle } from './commonStyle';

//import screen adapt util
import px2dp from '../../utils/px2dp';

//get screen width and height
const { width, height } = Dimensions.get('window');

//single input style
export const PutQuestionStyle = StyleSheet.create({
  container: {
    width: width,
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5F6F7',
  },

  imgBox: {
    width: width - px2dp(31) * 2,
    height: px2dp(24),
    marginTop: px2dp(43),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  titleText: {
    fontFamily: 'PingFangSC-Medium',
    fontSize: 24,
    color: '#000',
    marginTop: px2dp(8),
  },

  inputBox: {
    width: width,
    alignItems: 'center',
    marginBottom: px2dp(-7),
    marginTop: px2dp(58),
  },
  itemBox: {
    width: px2dp(272),
    flexDirection: 'row',
    marginBottom: px2dp(47),
  },
  linearGradient: {
    width: px2dp(8),
    height: px2dp(64),
    borderRadius: 7.5,
    marginRight: px2dp(26),
  },
  rightBox: {
    height: px2dp(64),
    justifyContent: 'space-between',
  },
  topBox: {
    flexDirection: 'row',
  },
  title: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: 18,
    color: '#000',
    marginLeft: px2dp(10),
  },

  selectBox: {
    flexDirection: 'row',
    width: px2dp(101),
    justifyContent: 'space-between',
    height:px2dp(25),
    alignItems: 'center',
  },

  department: {
    fontFamily: 'PingFangSC-Light',
    fontSize: 18,
    color: '#C8C8C8',
  },
  textInput: {
    width: px2dp(238),
    height: px2dp(30),
    color: '#000',
  },

  nextBox: {
    width: width - 2 * px2dp(67),
    alignItems: 'flex-end',
  },
  detailInput: {
    height: px2dp(112),
    paddingBottom: 2,
    textAlignVertical: 'center',
    fontSize: 18,
    width: px2dp(303),
    marginTop: px2dp(40),
  },

  selectImgBox: {
    marginTop: px2dp(40),
    width: width - px2dp(30) * 2,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    
  },
  selectView: {
    backgroundColor: '#F5F6F7',
    height: px2dp(86),
    width: px2dp(86),
  },
  img: {
    height: px2dp(86),
    width: px2dp(86),
    marginRight: px2dp(23),
  }

});