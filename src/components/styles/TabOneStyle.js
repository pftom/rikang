import React from 'react';
import { StyleSheet, Platform, Dimensions } from 'react-native';

//import px2dp for adapt screen
import px2dp from '../../utils/px2dp';
const { width, height } = Dimensions.get('window');

//single input style
export const MainScreenStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6F7'
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


  loadingMore: {
    marginTop: 10,
     marginBottom: 90,
     flexDirection: 'row',
     justifyContent: 'center',
  },
  loadingTextBox: {
    marginLeft: 5,
    justifyContent: 'center',
  },
  loadingText: {
    color: 'gray',
  },

  headerBox: {
    flexDirection: 'row',
    paddingLeft: px2dp(38),
    paddingRight: px2dp(38),
    justifyContent: 'space-between',
    marginTop: px2dp(28),
    marginBottom: px2dp(15),
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
    backgroundColor: 'transparent'
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
    backgroundColor: '#F5F6F7',
    paddingTop: px2dp(15),
    alignItems: 'center',
    borderTopWidth: 0.5,
    borderTopColor: 'rgba(9, 199, 156, 0.5)',
  },
  sectionLeftBox: {
    width: px2dp(97),
    height: px2dp(25),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: px2dp(-10),
  },
  sectionGradient: {
    width: px2dp(8),
    height: px2dp(25),
    borderRadius: 7.5,
  },
  sectionTitle: {
    fontFamily: 'PingFangSC-Medium',
    fontSize: px2dp(18),
    color: '#09C79C',
  },
  sectionRightBox: {
    width: px2dp(82),
    height: px2dp(25),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: px2dp(-10),
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
    paddingLeft: px2dp(24),
    marginTop: px2dp(22),
  },
  nearbyDoctorItemBox: {
    marginRight: px2dp(27),
    width: px2dp(63),
    marginLeft: px2dp(-5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  doctorAvatarBox: {
    width: px2dp(60),
    height: px2dp(60),
    backgroundColor: '#50E3C2',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  doctorAvatar: {
    width: px2dp(57),
    height: px2dp(57),
    borderRadius: 28.5,
  },
  doctorName: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: px2dp(16),
    color: '#000',
    marginTop: 6,
    marginBottom: 3,
  },
  categoryImg: {
    marginBottom: 5,
  },
  ageBox: {
    width: px2dp(63),
    height: px2dp(21),
    backgroundColor: '#C4C4C4',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  doctorAgeBox: {
    width: px2dp(62),
    height: px2dp(20),
    backgroundColor: '#F5F6F7',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  doctorAge: {
    fontFamily: 'PingFangSC-Light',
    fontSize: 12,
    color: '#BABABA',
  },



  postBox: {
    width: width,
    height: px2dp(77),
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: px2dp(12),
    marginTop: px2dp(22),
  },
  postImgBox: {
    marginRight: 20,
  },
  postImg: {
    height: px2dp(77),
    width: px2dp(107),
    borderRadius: 10,
  },
  postContent: {
    width: px2dp(200),
    height: px2dp(77),
    justifyContent: 'space-between',
  },
  postTitle: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: px2dp(18),
    color: '#000',
    marginBottom: px2dp(5),
  },
  postTime: {
    fontFamily: 'PingFangSC-Light',
    fontSize: px2dp(14),
    color: '#9E9E9E'
  }
});