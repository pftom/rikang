import React from 'react';
import { StyleSheet, Dimensions, } from 'react-native';

//import common style
import { commonStyle } from './commonStyle';

//import screen adapt util
import px2dp from '../../utils/px2dp';

//get screen width and height
const { width, height } = Dimensions.get('window');

//single input style
export const SelectBoxStyle = StyleSheet.create({
  container: {
    width: width,
    height: px2dp(49),
    backgroundColor: '#F5F6F7',
    shadowOffset: { x: 0, y: 2 },
    shadowRadius: 40,
    shadowColor: '#D6D6D6',
    shadowOpacity: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  box: {
    width: width / 2,
    height: px2dp(49),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'PingFangSC-Medium',
    fontSize: 18,
    color: '#006C54',
    marginRight: 8,
  },

})