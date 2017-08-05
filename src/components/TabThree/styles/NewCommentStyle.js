import React from 'react';
import { StyleSheet, Dimensions, Platform } from 'react-native';


//import screen adapt util
import px2dp from '../../../utils/px2dp';

//get screen width and height
const { width, height } = Dimensions.get('window');

//single input style
export const  NewCommentStyle = StyleSheet.create({
  container: {
    width: width,
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5F6F7',
  },
  ratingsBox: {
    width: px2dp(345),
    alignItems: 'center',
    backgroundColor: '#FFF',
    shadowOffset: {
      x: 0,
      y: 2,
    },
    shadowColor: '#D3D3D3',
    shadowOpacity: 0.5,
    shadowRadius: 4,
    marginTop: px2dp(18),
    marginBottom: px2dp(16),
  },
  ratings: {
    fontFamily: 'PingFangSC-Medium',
    fontSize: px2dp(20),
    color: '#000',
    marginTop: px2dp(15),
  },
  imgBox: {
    flexDirection: 'row',
    height: px2dp(41),
    alignItems: 'center',
    marginTop: px2dp(12),
    marginBottom: px2dp(13),
  },
  img: {
    marginRight: px2dp(13),
  },
  counterText: {
    fontFamily: 'PingFangSC-Light',
    fontSize: px2dp(18),
    color: '#000',
    marginBottom: px2dp(9),
  },
  anonymousBox: {
    width: px2dp(345),
    height: px2dp(50),
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: px2dp(16),
    paddingRight: px2dp(16),
    shadowOffset: {
      x: 0,
      y: 2,
    },
    shadowColor: '#D3D3D3',
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
  anonymous: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: px2dp(18),
    color: '#000',
  },
  commentBox: {
    width: px2dp(345),
    alignItems: 'center',
    backgroundColor: '#FFF',
    shadowOffset: {
      x: 0,
      y: 2,
    },
    shadowColor: '#D3D3D3',
    shadowOpacity: 0.5,
    shadowRadius: 4,
    marginTop: px2dp(16),
    height: px2dp(162),
  },
  extraCommentBox: {
    marginTop: 0,
  },
  textInput: {
    width: px2dp(313),
    fontSize: px2dp(18),
    height: px2dp(115),
    ...Platform.select({
      ios: {
        lineHeight: px2dp(25),
      }
    }),
  },
});