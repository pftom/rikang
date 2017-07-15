import React from 'react';
import { StyleSheet, Dimensions, } from 'react-native';

//import common style
import { commonStyle } from './commonStyle';

//import screen adapt util
import px2dp from '../../utils/px2dp';

//get screen width and height
const { width, height } = Dimensions.get('window');

//single input style
export const HospitalDetailStyle = StyleSheet.create({
  introSectionBox: {
    width: width,
    height: px2dp(226),
    backgroundColor: '#F5F6F7',
    alignItems: 'center',
    justifyContent: 'center',
  },

  topView: commonStyle.topView,
  topView1: {
    top: 200,
  },

  listBox: commonStyle.listBox,
  listBox1: commonStyle.listBox1,
  listBox2: commonStyle.listBox2,

  loadingMore: commonStyle.loadingMore,
  loadingTextBox: commonStyle.loadingTextBox,
  loadingText: commonStyle.loadingText,
})