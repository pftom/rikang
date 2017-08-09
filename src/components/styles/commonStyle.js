import React from 'react';
import { StyleSheet, Dimensions, Platform } from 'react-native';

//import screen adapt util
import px2dp from '../../utils/px2dp';

//get screen width and height
const { width, height } = Dimensions.get('window');

//single input style
export const commonStyle = {
  loadingMore: {
    marginTop: 10,
     marginBottom: 90,
     flexDirection: 'row',
     justifyContent: 'center',
  },
  loadingTextBox: {
    marginLeft: 5,
    justifyContent: 'center',
  },
  loadingText: {
    color: 'gray',
  },

  topView: {
    position: "absolute",
    ...Platform.select({
      ios: {
        top: 190,
      },
      android: {
        top: 220,
      }
    }),
    bottom: 0,
    left: 0,
    right: 0
  },

  listBox: {
    marginTop: 91,
    height: px2dp(height + 99),
    width,
    
  },
  listBox1: {
    height: px2dp(height - 90 - 39),
    width,
    backgroundColor: '#F5F6F7'
  },
  listBox2: {
    height: px2dp(height - 90 - 49),
    width,
    marginBottom: 90,
    backgroundColor: '#F5F6F7',
  },
}
