import React from 'react';
import { Image, View, Text, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const MidTitle = () => (
  <View style={styles.container}>
    <Image source={require('../img/icon.png')} style={styles.icon} />
    <View style={styles.textBox}><Text style={styles.iconText}>时事新闻</Text></View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    top: 9,
    marginBottom: 22,
  },
  icon: {
    top: 3,
    height: 20,
    width: 20,
  },
  iconText: {
    fontFamily: 'PingFangSC-Medium',
    fontSize: 18,
    color: 'rgba(0,0,0,0.80)',
    letterSpacing: 6,
  },
  textBox: {
    left: 8,
    height: 25,
    width: 100,
  }
});

export default MidTitle;