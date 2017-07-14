import React from 'react';
import { Image, Alert, Text, StyleSheet, Platform, View, Dimensions, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import px2dp from '../../utils/px2dp';

const width = Dimensions.get('window').width;

const Header = (props) => {
  let style = null;
  if (Platform.OS === 'android' && !!props.logoLeft)  {
    style = {
      marginLeft: -34,
    }
  }
  return (
      <LinearGradient
        start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}
        colors={['#23BCBB', '#45E994']}
        style={styles.linearGradient}>
        {props.logoLeft && <TouchableOpacity 
                              onPress={() => props.navigation.goBack()} 
                              style={styles.leftLogoBox}>
                              <Image source={props.logoLeft && require('./img/back.png')} style={styles.logoLeft}>
                                <Text style={styles.logoLeftText}></Text>
                              </Image>
                            </TouchableOpacity>}
        <Text style={[styles.headerText, style]}>{props.headerText}</Text>
        <TouchableOpacity style={styles.logoBox} onPress={() => Alert.alert('功能即将上线')}>
          {
            !!props.logoRight && <Image source={props.logoRight} />
          }
          {
            !!props.logoText &&  <Text style={styles.logoText}>{props.logoText}</Text>
          }
        </TouchableOpacity>
        <View style={styles.logoShareBox}>
          {
            !!props.logoShare && <Image source={props.logoShare} /> 
          }
        </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  linearGradient: {
    height: 81,
    flexDirection: 'row',
    width: width,
    ...Platform.select({
      ios: {
        shadowColor: '#50E3C2',
        shadowOffset: { width: 0, height: 5},
        shadowRadius: 10,
        shadowOpacity: 0.5,

      },
      android: {
        marginTop: 20.5,
      }
    })
  },
  headerText: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: 24,
    color: '#FFF',
    width: 96,
    ...Platform.select({
      ios: {
        left: 140,
        top: 39,
      },
      android: {
        left: px2dp(width / 2 - 63),
        fontSize: 24,
        top: 34
      }
    }),
    height: 33,
    backgroundColor: 'transparent',
  },
  logoBox: {
    ...Platform.select({
      ios: {
        left: 231,
        top: 31,
      },
      android: {
        left: width - px2dp(145),
        top: 24,
        alignItems: 'center',
      }
    }),
  },
  logoText: {
    fontFamily: 'PingFangSC-Light',
    fontSize: 12,
    color: '#FFFFFF',
    backgroundColor: 'transparent',
    ...Platform.select({
      ios: {
        left: -10,
      },
    }),
    top: 6,
    height: 25,
  },
  logoLeft: {
    ...Platform.select({
      ios: {
        position: 'absolute',
        left: 23,
        top: 41,
      },
      android: {
        marginLeft: 23,
        marginTop: 41,
      }
    })
  },
  logoShareBox: {
    left: 222,
    top: 41,
  },
})

export default Header;