import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';



//import screen adapt util
import px2dp from '../../../utils/px2dp';

//get screen width and height
const { width, height } = Dimensions.get('window');


export const WaitForAcceptListItemStyle = StyleSheet.create({
  container: {
    width: width,
    alignItems: 'center',
  },
  box: {
    width: px2dp(312),
    borderBottomWidth: px2dp(0.5),
    borderBottomColor: '#DCDCDC',
    marginTop: px2dp(6),
    paddingBottom: px2dp(6),
  },
  idBox: {
    width: px2dp(312),
    flexDirection: 'row',
    height: px2dp(32),
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  nameBox: {
    width: px2dp(255),
    flexDirection: 'row',
    height: px2dp(32),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  doctorAvatarBox: {
    width: px2dp(32),
    height: px2dp(32),
    backgroundColor: '#50E3C2',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: px2dp(15.5),
  },
  doctorAvatar: {
    width: px2dp(29),
    height: px2dp(29),
    borderRadius: px2dp(14.5),
  },

  name: {
    fontFamily: 'PingFangSC-Medium',
    fontSize: px2dp(18),
    color: '#000',
  },

  consult: {
    fontFamily: 'PingFangSC-Light',
    fontSize: px2dp(14),
    color: '#09C79C',
  },
  btnBox: {
    width: px2dp(312),
    alignItems: 'center',
  },

  buttonBox: {
    width: px2dp(279),
    height: px2dp(40),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#09C79C',
    borderRadius: px2dp(8),
  },
  buttonContainer: {
    width: px2dp(279),
    height: px2dp(40),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F6F7',
    borderRadius: px2dp(8),
  },
  content: {
    fontFamily: 'PingFangSC-Medium',
    fontSize: px2dp(20),
    color: '#FFF',
  },
});