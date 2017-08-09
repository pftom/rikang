import React from 'react';
import { StyleSheet, Dimensions, } from 'react-native';

//import common style
import { commonStyle } from './commonStyle';

//import screen adapt util
import px2dp from '../../utils/px2dp';

//get screen width and height
const { width, height } = Dimensions.get('window');

//single input style
export const DoctorListStyle = StyleSheet.create({
  headerTitle: {
    top: -10
  },

  hospitalContainer: {
    flex: 1,
    backgroundColor: '#F5F6F7',
  },

  container: {
    width: width,
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#09C79C',
    height: px2dp(151),
  },
  ItemBox: {
    width: px2dp(322),
    marginTop: px2dp(25),
    marginBottom: px2dp(15),
    flexDirection: 'row',
    
  },
  leftBox: {
    marginRight: px2dp(21),
    alignItems: 'center',
  },
  avatarBox: {
    width: px2dp(60),
    height: px2dp(60),
    backgroundColor: '#50E3C2',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: px2dp(30),
  },
  avatar: {
    width: px2dp(57),
    height: px2dp(57),
    borderRadius: px2dp(28.5),
  },
  doctorName: {
    marginTop: 8,
    fontFamily: 'PingFangSC-Medium',
    fontSize: 20,
    color: '#09C79C',
    letterSpacing: -0.4,
  },

  titleBox: {
    flexDirection: 'row',
  },
  department: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: 18,
    color: '#000',
    letterSpacing: -0.36,
    marginRight: px2dp(10),
  },
  title: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: 18,
    color: '#000',
    letterSpacing: -0.36,
  },

  propBox: {
    marginTop: px2dp(6),
    marginBottom: px2dp(14),
    flexDirection: 'row',
    height: px2dp(12),
    alignItems: 'center',
  },
  hospitalName: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: 14,
    color: '#9B9B9B',
    letterSpacing: -0.28,
  },
  yearsBox: {
    height: px2dp(12),
    paddingLeft: px2dp(10),
    marginLeft: px2dp(10),
    borderLeftWidth: 1,
    borderLeftColor: '#9B9B9B',
    justifyContent: 'center',
  },
  years: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: 14,
    color: '#9B9B9B',
    letterSpacing: -0.28,
  },

  consultBox: {
    flexDirection: 'row',
    width: px2dp(241),
    height: px2dp(22),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  consultLeftBox: {
    flexDirection: 'row',
    height: px2dp(22),
    alignItems: 'center',
  },
  onlineConsult: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: 14,
    color: '#000',
    letterSpacing: -0.28,
    marginLeft: px2dp(11),
    marginRight: px2dp(7),
  },
  consultFee: {
    fontFamily: 'PingFangSC-Medium',
    fontSize: 16,
    color: '#FF6234',
    letterSpacing: -0.32,
  },
  payedNum: {
    fontFamily: 'PingFangSC-Light',
    fontSize: 14,
    color: '#ADADAD',
    letterSpacing: -0.28,
  },

  patientNum: {
    marginTop: px2dp(11),
    fontFamily: 'PingFangSC-Regular',
    fontSize: 14,
    color: '#17B18F',
  },

  selectBox: {
    position: 'absolute',
    top: px2dp(81),
    left: 0,
    right: 0,
  },
  

  loadingMore: commonStyle.loadingMore,
  loadingTextBox: commonStyle.loadingTextBox,
  loadingText: commonStyle.loadingText,



}); 