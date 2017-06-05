import React from 'react';
import { Text, Image, View, StyleSheet, } from 'react-native';

const SettingItem = (props) => (
  <View style={styles.container}>
    <View style={styles.upSide}>
      <Image source={props.leftIcon} style={styles.leftIcon} />
      {
        !!props.messageNum && <View style={styles.messageBox}><Text style={styles.message}>{props.messageNum}</Text></View>
      }
    </View>
    <Text style={styles.category}>{props.category}</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: 128,
    height: 128,
    shadowRadius: 40,
    shadowColor: '#C7C7C7',
    shadowOpacity: 0.32,
    marginRight: 32,
  },
  upSide: {
    flexDirection: 'row',
  },
  leftIcon: {
    margin: 20,
    height: 40,
    width: 40,
  },
  category: {
    marginLeft: 20,
    fontFamily: 'PingFangSC-Light',
    fontSize: 18,
    color: 'rgba(0,0,0,0.80)',
    marginTop: 12.5
  },
  messageBox: {
    height: 24,
    width: 24,
    marginTop: 12,
    borderRadius: 12,
    backgroundColor: '#FF3B30',
    shadowRadius: 10,
    shadowOffset: { width: 2, height: 2 },
    shadowColor: '#FF3B30',
    shadowOpacity: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 12,
  },
  message: {
    backgroundColor: 'transparent',
    fontFamily: '.AppleSystemUIFont',
    fontSize: 14,
    color: '#FFFFFF',
  }
})

export default SettingItem;