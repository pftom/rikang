import React from 'react';
import { StyleSheet, Dimensions, Platform } from 'react-native';


//import screen adapt util
import px2dp from '../../../utils/px2dp';

//get screen width and height
const { width, height } = Dimensions.get('window');

//single input style
export const QaMainScreenStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  putQuestionContainer: {
    position: 'absolute',
    width: width,
    alignItems: 'center',
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        bottom: px2dp(98),
      },
      android: {
        bottom: px2dp(70),
      }
    }),
  },
  putQuestionBox: {
    width: px2dp(149),
    height: px2dp(46),
    borderRadius: 100,
    shadowOffset: { x: 2, y: 20 },
    shadowColor: '#A5A5A5',
    shadowOpacity: 0.5,
  },
  putQuestionTouch: {
    width: px2dp(149),
    height: px2dp(46),
    borderRadius: 100,
  },
  putQuestionInlineBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: px2dp(149),
    height: px2dp(46),
    borderRadius: 100,
    backgroundColor: '#FFF',
  },
  putQuestionText: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: 16,
    color: '#000',
    letterSpacing: -0.32,
    marginLeft: px2dp(16),
  },

  inputContainer: {
    width: width,
    height: px2dp(81),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    position: 'absolute',
    top: px2dp(10),
    left: 0,
    right: 0,
  },

  selectStyle: {
    position: 'absolute',
    top: px2dp(81),
    left: 0,
    right: 0,
  },

  listStyle: {
    flex: 1,
    backgroundColor: '#F5F6F7',
    marginTop: px2dp(81 + 49),
  },

  inputBox: {
    width: px2dp(334),
    flexDirection: 'row',
    height: px2dp(40),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    shadowOffset: { x: 1, y: 10 },
    shadowColor: '#7F7F7F',
    shadowOpacity: 0.5,
    borderRadius: 8,
  },

  textInput: {
    ...Platform.select({
      ios: {
        height: px2dp(30),
      },
      android: {
        height: px2dp(60),
      }
    }),
    ...Platform.select({
      ios: {
        lineHeight: px2dp(34),
      }
    }),
    textAlignVertical: 'center',
    width: px2dp(286),
    marginLeft: px2dp(10),
    fontSize: 16,
    marginTop: px2dp(3),
  }
})