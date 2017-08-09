import React from 'react';
import { StyleSheet, Dimensions, } from 'react-native';


//import screen adapt util
import px2dp from '../../../utils/px2dp';

//get screen width and height
const { width, height } = Dimensions.get('window');

//single input style
export const QuestionListStyle = StyleSheet.create({
  container: {
    width: width,
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#F5F6F7',
    borderBottomWidth: px2dp(0.5),
    borderBottomColor: '#09C79C',
  },
  touchBox: {
    width: width,
    flex: 1,
    
    alignItems: 'center',
  },

  QuestionBox: {
    width: px2dp(324),
    marginTop: px2dp(25),
  },
  title: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: 18,
    color: '#000000',
  },
  tagContainer: {
    width: px2dp(324),
  },
  tagBox: {
    marginTop: px2dp(16),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: px2dp(20),
  }, 
  commentBox: {
    justifyContent: 'flex-end',
  },
  helpLeft: {
    marginLeft: px2dp(100),
  },

  leftBox: {
    height: px2dp(25),
    flexDirection: 'row',
    alignItems: 'center',
  },
  upvote: {
    fontFamily: 'PingFangSC-Light',
    fontSize: px2dp(16),
    color: '#000',
    letterSpacing: px2dp(-0.32),
    marginLeft: px2dp(10),
  },
  starsAndAnswer: {
    fontFamily: 'PingFangSC-Light',
    fontSize: px2dp(18),
    color: '#C3C3C3',
  },
  dot: {
    height: px2dp(4),
    width: px2dp(4),
    borderRadius: px2dp(2),
    backgroundColor: '#C5C5C5',
    marginLeft: px2dp(11),
    marginRight: px2dp(11),
  },

  starBtn: {
    flexDirection: 'row',
    width: px2dp(74),
    height: px2dp(30),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#09C79C',
    borderRadius: px2dp(8),
  },

  starredBtn: {
    backgroundColor: '#CCC',
  },
  btnContainer: {
    width: px2dp(74),
    height: px2dp(30),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F6F7',
    borderRadius: px2dp(8),
  },
  starText: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: px2dp(14),
    color: '#FFFFFF',
    letterSpacing: px2dp(-0.28),
  },
  img: {
    marginRight: px2dp(9)
  }
})