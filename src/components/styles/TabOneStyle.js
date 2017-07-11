import React from 'react';
import { StyleSheet, Platform, Dimensions } from 'react-native';

//import px2dp for adapt screen
import px2dp from '../../utils/px2dp';
const { width, height } = Dimensions.get('window');

//single input style
export const MainScreenStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  linearGradient: {
    left: 0,
    top: 0,
    right: 0,
    height: px2dp(81),
    flexDirection: 'row',
    width: width,
    ...Platform.select({
      ios: {
        shadowColor: '#50E3C2',
        shadowOffset: { width: 0, height: 5},
        shadowRadius: 10,
        shadowOpacity: 0.5,
      },
      android: {
        marginTop: px2dp(20.5),
      }
    })
  },
  text: {
    marginBottom: 20,
    marginTop: 20,
  },


  headerBox: {
    flexDirection: 'row',
    paddingLeft: px2dp(38),
    paddingRight: px2dp(38),
    justifyContent: 'space-between',
    marginTop: px2dp(28),
    marginBottom: px2dp(14),
  },
  headerItemBox: {
    flex: 1,
    alignItems: 'center',
  },
  headerImg: {
    marginBottom: px2dp(12),
  },
  headerTitle: {
    fontFamily: 'PingFangSC-Light',
    fontSize: 14,
  },
  headerTitleQa: {
    color: '#4990E2',
  },
  headerTitleDoc: {
    color:'#7ED321',
  },
  headerTitleHosp: {
    color: '#D0011B'
  },


  sectionBox: {
    height: px2dp(40),
    width: width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: px2dp(23),
    paddingRight: px2dp(7),
  },
  sectionLeftBox: {
    width: px2dp(97),
    height: px2dp(40),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionGradient: {
    width: px2dp(8),
    height: px2dp(40),
    borderRadius: 7.5,
  },
  sectionTitle: {
    fontFamily: 'PingFangSC-Medium',
    fontSize: px2dp(18),
    color: '#09C79C',
  },
  sectionRightBox: {
    width: px2dp(82),
    height: px2dp(40),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  seeAll: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: px2dp(16),
    color: '#A8A8A8',
  },
  sectionImg: {
    height: px2dp(13.48),
    width: px2dp(8.01),
  },

  nearbyDoctorBox: {
    marginBottom: px2dp(14),
    marginTop: (14),
  }
});