import React from 'react';
import { Image, Alert, Text, Animated, StyleSheet, Platform, View, Dimensions, TouchableOpacity } from 'react-native';
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
      <View style={styles.container}>
        {
          props.showGradient && (
            <LinearGradient
        start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}
        colors={['#23BCBB', '#45E994']}
        style={styles.linearGradient}>
        {props.logoLeft && <TouchableOpacity 
                              onPress={() => props.navigation.goBack()} 
                              style={styles.leftLogoBox}>
                              <Image source={props.logoLeft && require('./img/back.png')} style={styles.logoLeft} />
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

        
      <View style={styles.leftBox}>
        {props.logoLeft && <TouchableOpacity 
                              onPress={() => props.navigation.goBack()} 
                              >
                              <Image source={props.logoLeft && require('./img/back.png')} style={styles.logoLeft} />
                            </TouchableOpacity>}
        {
          props.leftImg && (
            <View style={styles.smallAvatarBox}>
              <Animated.Image source={{ uri: props.leftImg.get('avatar') }} style={ [ styles.smallAvatar, { opacity: props.imgOpacity }] }/>
            </View>
          )
        }
      </View>

      <View style={styles.rightBox}>
        {props.shareHeart && <TouchableOpacity 
                              onPress={() => { console.log('fav')} } 
                              >
                              <Image source={props.shareHeart && require('./img/shareHeart.png')} style={styles.shareHeart} />
                            </TouchableOpacity>}
      
        {props.share && <TouchableOpacity 
                              onPress={() => { console.log('share')} } 
                              >
                              <Image source={props.share && require('./img/share.png')} style={styles.share} />
                            </TouchableOpacity>}
      </View>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: width,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
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
        top: 34,
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
        top: 40,
      },
      android: {
        marginLeft: 23,
        marginTop: 41,
      }
    })
  },
  leftBox: {
    flexDirection: 'row',
  },
  rightBox: {
    flexDirection: 'row',
  },
  share: {
    marginLeft: px2dp(24),
    marginRight: px2dp(24),
    top: 42,
  },
  shareHeart: {
    top: 42,
  },

  smallAvatarBox: {
    height: px2dp(42),
    width: px2dp(42),
    borderRadius: px2dp(21),
    marginLeft: 65,
    marginTop: 30,
  },
  smallAvatar: {
    height: px2dp(42),
    width: px2dp(42),
    borderRadius: px2dp(21),
  },
  logoShareBox: {
    left: 222,
    top: 41,
  },
})

export default Header;