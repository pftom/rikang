import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';


//import common style
import { commonStyle } from './commonStyle';

//import screen adapt util
import px2dp from '../../utils/px2dp';

//get screen width and height
const { width, height } = Dimensions.get('window');


export const HospitalListStyle = StyleSheet.create({
  container: {
    width: width,
    alignItems: 'center',
    borderBottomWidth: px2dp(0.5),
    borderBottomColor: '#09C79C',
  },
  nearbyHopBox: {
    width: px2dp(333),
    marginTop: px2dp(23),
  },
  
  photoBox: {
    width: px2dp(333),
    height: px2dp(186),
    borderRadius: px2dp(8),
  },
  photo: {
    width: px2dp(333),
    height: px2dp(186),
    borderRadius: px2dp(8),
  },

  locationBox: {
    height: px2dp(28),
    flexDirection: 'row',
    width: px2dp(333),
    justifyContent: 'space-between',
    marginTop: px2dp(12),
    marginBottom: px2dp(12),
    alignItems: 'center',
  },
  hospital_name: {
    fontFamily: 'PingFangSC-Medium',
    fontSize: px2dp(20),
    color: '#09C79C',
  },
  location: {
    fontFamily: 'PingFangSC-Light',
    fontSize: px2dp(12),
    color: '#A8A8A8',
    letterSpacing: -0.24,
  },

  identicalBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: px2dp(17),
  },
  iconBox: {
    alignItems: 'center',
  },
  content: {
    fontFamily: 'PingFangSC-Light',
    fontSize: px2dp(14),
    color: '#000',
    marginTop: px2dp(6),
  },

  loadingMore: commonStyle.loadingMore,
  loadingTextBox: commonStyle.loadingTextBox,
  loadingText: commonStyle.loadingText,
})