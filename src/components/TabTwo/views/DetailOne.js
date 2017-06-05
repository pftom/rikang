import React from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;

const DetailOne = (props) => {
  console.log('props', props);
  return (
    <View>
      {
        !!props.avatar
        ? (
          <View style={styles.container}>
            <View style={styles.leftSide}>
            <Image source={props.avatar} style={styles.avatar} />
          </View>
            <View style={styles.rightSide}>
              <View style={styles.nameBox}><Text style={styles.name}>{props.name}</Text></View>
              <Text style={styles.title}>{props.title}</Text>
            </View>
          </View>
        )
        : (
          <View style={styles.containerBox}>
            <Text style={styles.titleBox}>{props.title}</Text>
          </View>
        )
      }
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 14,
    marginTop: 15,
  },
  titleBox: {
    fontFamily: 'PingFangSC-Light',
    fontSize: 24,
    color: 'rgba(0,0,0,0.80)',
    left: 40,
  },
  containerBox: {
    paddingTop: 9.5,
    paddingBottom: 9.5,
    borderBottomWidth: 1,
    borderBottomColor: '#979797',
    width: width,
  },
  leftSide: {
    marginRight: 41,
  },
  name: {
    fontFamily: 'PingFangSC-Light',
    fontSize: 18,
    color: '#000000',
  },
  nameBox: {
    paddingBottom: 7,
    borderBottomWidth: 1,
    borderBottomColor: '#979797',
    marginBottom: 10.5
  },
  title: {
    fontFamily: 'PingFangSC-Light',
    fontSize: 14,
    color: '#000000',
  },
  rightSide: {
    marginTop: 8
  }
})

export default DetailOne;