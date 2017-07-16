import React from 'react';
import { StyleSheet, Dimensions, } from 'react-native';

//import common style
import { commonStyle } from './commonStyle';

//import screen adapt util
import px2dp from '../../utils/px2dp';

//get screen width and height
const { width, height } = Dimensions.get('window');

//single input style
export const SelectPhotoStyle = StyleSheet.create({
  avatarBox: {
    width: px2dp(60),
    height: px2dp(60),
    borderRadius: px2dp(30),
  },
  avatar: {
    width: px2dp(60),
    height: px2dp(60),
    borderRadius: px2dp(30),
  },
})