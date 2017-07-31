import React from 'react';
import { StyleSheet, Dimensions, } from 'react-native';


//import screen adapt util
import px2dp from '../../../utils/px2dp';

//get screen width and height
const { width, height } = Dimensions.get('window');

//single input style
export const CommentListStyle = StyleSheet.create({
  commentContainer: {
    flex: 1,
    backgroundColor: '#F5F6F7',
  },
  textContainer: {
    width: width,
    height: px2dp(55),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F6F7',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopWidth: 0.5,
    borderTopColor: '#CCCCCC',
  },
  textInput: {
    height: px2dp(35),
    ...Platform.select({
      ios: {
        lineHeight: px2dp(35),
      }
    }),
    paddingBottom: 2,
    textAlignVertical: 'center',
    fontSize: 18,
    width: px2dp(287),
    backgroundColor: '#EBEBEB',
    marginRight: px2dp(19),
    borderRadius: 8,
    paddingLeft: px2dp(17),
  },
  btnText: {
    fontFamily: 'PingFangSC-Medium',
    fontSize: 18,
    color: '#09C79C',
    letterSpacing: -0.36,
  },
  itemContainer: {
    width: width,
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgba(9, 199, 165, 0.5)',
  },
  itemBox: {
    width: px2dp(339),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: px2dp(20),
  },

  leftBox: {
    width: px2dp(40),
    height: px2dp(40),
    borderRadius: px2dp(20),
  },
  avatar: {
    width: px2dp(40),
    height: px2dp(40),
    borderRadius: px2dp(20),
  },
  rightBox: {
    width: px2dp(287),
  },
  topBox: {
    flexDirection: 'row',
    width: px2dp(287),
    justifyContent: 'space-between',
    height: px2dp(25),
    alignItems: 'center',
  },

  name: {
    fontFamily: 'PingFangSC-Medium',
    fontSize: 18,
    color: '#000',
    letterSpacing: -0.36,
  },
  time: {
    fontFamily: 'PingFangSC-Light',
    fontSize: 14,
    color: '#9E9E9E',
  },

  midBox: {
    width: px2dp(287),
    marginTop: px2dp(12),
  },
  body: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: 16,
    color: '#000',
    letterSpacing: -0.32,
  },
  atBody: {
    color: '#09C79C',
  },
  bottomBox: {
    width: px2dp(287),
  }

});