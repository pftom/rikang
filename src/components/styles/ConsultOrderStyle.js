import React from 'react';
import { StyleSheet, Dimensions, } from 'react-native';

//import common style
import { commonStyle } from './commonStyle';

//import screen adapt util
import px2dp from '../../utils/px2dp';

//get screen width and height
const { width, height } = Dimensions.get('window');


//single input style
export const ConsultOrderStyle = StyleSheet.create({
  container: {
    width: width,
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#F5F6F7'
  },

  consultContainer: {
    marginTop: px2dp(30),
    width: px2dp(337),
    alignItems: 'center',
    shadowOffset: { x: 0, y: 2 },
    shadowRadius: 4,
    shadowColor: '#DCDCDC',
    shadowOpacity: 1,
    paddingTop: px2dp(16),
    paddingBottom: px2dp(16),
  },

  priceDetail: {
    fontFamily: 'PingFangSC-Medium',
    fontSize: 20,
    color: '#000',
    letterSpacing: -0.4,
  },

  consultBox: {
    width: px2dp(280),
    height: px2dp(54),
    borderBottomWidth: 0.5,
    borderBottomColor: '#E9E9E9',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  consultTitle: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: 18,
    color: '#000',
    letterSpacing: -0.36,
  },

  noNow: {
    fontSize: 14,
    color: '#BCBCBC',
    letterSpacing: -0.28, 
  },

  totalBox: {
    width: px2dp(280),
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: px2dp(15),
  },
  total: {
    fontFamily: 'PingFangSC-Medium',
    fontSize: 18,
    color: '#000',
    letterSpacing: -0.36,
  },

  money: {
    fontSize: 20,
  },

  hintBox: {
    width: width - 26 * 2,
    marginTop: px2dp(10),
  },
  hintText: {
    fontFamily: 'Helvetica',
    fontSize: 14,
    color: '#6D6D6D',
    marginTop: px2dp(10),
  },

  payContainer: {
    width: width,
    alignItems: 'center',
    backgroundColor: '#F5F6F7'
  },
  headerBox: {
    width: width,
    height: px2dp(45),
    flexDirection: 'row',
  },
  titleBox: {
    height: px2dp(45),
    width: px2dp(251),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },  
  closeBox: {
    height: px2dp(45),
    width: width - px2dp(251) - 20,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },   
  headerTitle: {
    fontFamily: 'PingFangSC-Medium',
    fontSize: 20,
    color: '#000',
    letterSpacing: -0.4,
  },
  itemBox: {
    width: px2dp(351.5),
    height: px2dp(80),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: px2dp(14),
    paddingRight: px2dp(14),
  },
  itemExtra: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#D3D3D3',
  },
  textBox: {
    width: px2dp(200),
    height: px2dp(51),
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: 18,
    color: '#000',
    letterSpacing: -0.36,
  },
  desc: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: 14,
    color: '#9F9F9F',
    letterSpacing: -0.28,
  },
  selectBox: {
    height: px2dp(32),
    width: px2dp(32),
    borderRadius: px2dp(16),
  }
});