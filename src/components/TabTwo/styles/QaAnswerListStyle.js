import React from 'react';
import { StyleSheet, Dimensions, Platform } from 'react-native';


//import screen adapt util
import px2dp from '../../../utils/px2dp';

//get screen width and height
const { width, height } = Dimensions.get('window');

//single input style
export const QaAnswerListStyle = StyleSheet.create({
  answerContainer: {
    width: width,
    alignItems: 'center',
    borderBottomWidth: px2dp(0.5),
    borderBottomColor: '#09C79C',
  },

  answerBox: {
    width: px2dp(328),
    marginTop: px2dp(23),
  },

  answerHead: {
    flexDirection: 'row',
    width: px2dp(328),
    justifyContent: 'space-between',
  },
  doctorAvatarBox: {
    width: px2dp(50),
    height: px2dp(50),
    backgroundColor: '#50E3C2',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: px2dp(25),
  },
  doctorAvatar: {
    width: px2dp(47),
    height: px2dp(47),
    borderRadius: px2dp(23.5),
  },
  idBox: {
    width: px2dp(220),
  },
  name: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: px2dp(20),
    color: '#000',
    letterSpacing: px2dp(-0.4),
  },
  location: {
    fontFamily: 'PingFangSC-Light',
    fontSize: px2dp(14),
    color: '#000',
    letterSpacing: px2dp(-0.28),
  },  
  spreadBox: {
    ...Platform.select({
      ios: {
        width: px2dp(24),
      },
      android: {
        width: px2dp(30),
      }
    }),
    alignItems: 'center',
    height: px2dp(50),
    justifyContent: 'center',
  },
  spread: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: px2dp(12),
    color: '#8A8A8A',
    letterSpacing: px2dp(-0.24),
    marginTop: px2dp(2),
  },

  answerMid: {
    marginTop: px2dp(15),
  },
  itemBox: {
    ...Platform.select({
      ios: {
        height: px2dp(51),
      },
      android: {
        height: px2dp(55),
      }
    }),
    borderBottomWidth: px2dp(0.5),
    borderBottomColor: '#DDDDDD',
    flexDirection: 'row',
    marginTop: px2dp(14),
    alignItems: 'center',
    paddingBottom: px2dp(9),
  },  
  leftBox: {
    ...Platform.select({
      ios: {
        width: px2dp(48),
      },
      android: {
        width: px2dp(55),
      }
    }),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: px2dp(40),
  },  
  rightBox: {
    width: px2dp(221),
  },
  title: {
    fontFamily: 'PingFangSC-Light',
    fontSize: px2dp(12),
    color: '#000',
    marginTop: px2dp(4),
  },
  content: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: px2dp(16),
    color: '#000',
    letterSpacing: px2dp(-0.32),
  },

  tagContainer: {
    width: px2dp(324),
    marginTop: px2dp(5),
  },
});