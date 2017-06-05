import React from 'react';
import { Image, Text, StyleSheet, Platform, View, Dimensions, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import px2dp from '../../util/index';

const width = Dimensions.get('window').width;

const Header = (props) => {
  let style = null;
  if (Platform.OS === 'ios') {
    style = {
      shadowColor: '#D0011B',
      shadowOffset: { width: 0, height: 3},
      shadowRadius: 40,
      shadowOpacity: 0.5,
    };
  }
  if (Platform.OS == "android") {
    style = {
      marginTop: 20.5,
    }
  }
  return (
      <LinearGradient
        start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}
        colors={['#FF0467', '#FC7437']}
        style={[ styles.linearGradient, style]}>
        {<TouchableOpacity 
                              onPress={() => props.navigation.goBack()} 
                              style={styles.leftLogoBox}>
                              <Image source={!!props.logoLeft && props.logoLeft} style={styles.logoLeft} />
                            </TouchableOpacity>}
        <Text style={styles.headerText}>{props.headerText}</Text>
        <TouchableOpacity style={styles.logoBox} onPress={() => props.navigation.navigate('MessageBox')}>
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
    height: 90,
    flexDirection: 'row',
    width: width,
  },
  headerText: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: 24,
    color: '#FFF',
    top: 39,
    width: 96,
    left: 140,
    height: 33,
    backgroundColor: 'transparent',
  },
  logoBox: {
    left: 231,
    top: 31,
  },
  logoText: {
    fontFamily: 'PingFangSC-Light',
    fontSize: 12,
    color: '#FFFFFF',
    backgroundColor: 'transparent',
    left: -10,
    top: 6,
    height: 25,
  },
  logoLeft: {
    position: 'absolute',
    left: 23,
    top: 41,
  },
  logoShareBox: {
    left: 222,
    top: 41,
  },
})

export default Header;