import React from 'react';
import { StyleSheet, Dimensions, } from 'react-native';

//import common style
import { commonStyle } from './commonStyle';

//import screen adapt util
import px2dp from '../../utils/px2dp';

//get screen width and height
const { width, height } = Dimensions.get('window');

//single input style
export const DoctorDetailStyle = StyleSheet.create({

  gradientBox: {
    width: width,
    height: height,
  },

  back: {
    marginTop: 40,
    marginLeft: 24,
  },

  introBox: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    marginTop: 81,
    width: width, 
    backgroundColor: 'gray',
    height: 189,
    justifyContent: 'center',
  },

  introTransferBox: {
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
  },


  loadingMore: commonStyle.loadingMore,
  loadingTextBox: commonStyle.loadingTextBox,
  loadingText: commonStyle.loadingText,
})