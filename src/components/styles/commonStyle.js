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
        top: px2dp(190),
      },
      android: {
        top: px2dp(190),
      }
    }),
    bottom: 0,
    left: 0,
    right: 0
  },

  listBox: {
    marginTop: px2dp(91),
    ...Platform.select({
      ios: {
        height: px2dp(height + 99),
      },
      android: {
        height: px2dp(height - px2dp(81)),
      }
    }),
    width,
    
  },
  listBox1: {
    ...Platform.select({
      ios: {
        height: height - px2dp(49) - px2dp(81),
      },
      android: {
        height: height + px2dp(180),
      }
    }),
    width,
    backgroundColor: '#F5F6F7'
  },
  listBox2: {
    ...Platform.select({
      ios: {
        height: height - px2dp(49) - px2dp(81),
      },
      android: {
        height: height + 80,
      }
    }),
    width,
    backgroundColor: '#F5F6F7',
  },
}
