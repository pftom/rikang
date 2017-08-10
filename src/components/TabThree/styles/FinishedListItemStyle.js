import React from 'react';
import { StyleSheet, Dimensions, Platform } from 'react-native';


//import screen adapt util
import px2dp from '../../../utils/px2dp';

//get screen width and height
const { width, height } = Dimensions.get('window');

//single input style
export const FinishedListItemStyle = StyleSheet.create({
  container: {
    width: width,
    alignItems: 'center',
  },
  box: {
    width: px2dp(320),
    borderBottomWidth: px2dp(1),
    borderBottomColor: '#DCDCDC',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: px2dp(19),
    paddingBottom: px2dp(12),
  },
  doctorAvatarBox: {
    width: px2dp(60),
    height: px2dp(60),
    backgroundColor: '#50E3C2',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: px2dp(30),
  },
  doctorAvatar: {
    width: px2dp(57),
    height: px2dp(57),
    borderRadius: px2dp(28.5),
  },
  rightBox: {
    width: px2dp(248),
    height: px2dp(63),
    justifyContent: 'space-between',
  },
  nameBox: {
    width: px2dp(248),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: px2dp(20),
    color: '#000',
  },
  lastTime: {
    fontFamily: 'PingFangSC-Light',
    fontSize: px2dp(14),
    color: '#BEBEBE',
  },
  appraiseBox: {
    width: px2dp(248),
    height: px2dp(25),
    justifyContent: 'center',
  },
  starBox: {
    width: px2dp(248),
    height: px2dp(25),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  heartBox: {
    flexDirection: 'row',
    height: px2dp(25),
    alignItems: 'center',
  },
  img: {
    marginRight: px2dp(7),
  },
  buttonBox: {
    ...Platform.select({
      ios: {
        width: px2dp(98),
      },
      android: {
        width: px2dp(60),
      }
    }),
    height: px2dp(25),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#50E3C2',
    borderRadius: px2dp(8),
  },
  extraButtonBox: {
    width: px2dp(120),
  },
  buttonContainer: {
    width: px2dp(98),
    height: px2dp(25),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F6F7',
    borderRadius: px2dp(8),
  },
  extraButtonContainer: {
    width: px2dp(120),
    marginLeft: px2dp(10),
  },
  content: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: px2dp(14),
    color: '#FFF',
  },
  unApparise: {
    fontFamily: 'PingFangSC-Medium',
    fontSize: px2dp(18),
    color: '#09C79C',
  },
});