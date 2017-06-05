import React from 'react';
import { Text, View, StyleSheet, ScrollView, Image, Dimensions  } from 'react-native';

import Header from '../../common/Header';

const width = Dimensions.get('window').width;

const DetailThree = ({ navigation }) => {
  const { data } = navigation.state.params;
  return (
    <Image source={require('../img/background.png')} style={styles.backgroundImg}>
        <ScrollView
              showsVerticalScrollIndicator={false}
            >
              <View style={styles.container}>
                <Image source={require('../img/pic.png')} style={styles.pic} />
                <View style={styles.nameBox}><Text>{data.name}</Text></View>
                <View style={styles.timeBox}><Text style={styles.time}>{data.time}</Text></View>
                <View style={styles.contentBox}>
                  <Text style={styles.content}>{data.content}</Text>
                </View>
              </View>
          </ScrollView>
      </Image>
  )
}

DetailThree.navigationOptions = ({ navigation }) => ({
  headerTitle: (
      <View style={styles.headerTitle}>
        <Header 
          headerText={navigation.state.params.data.name}
          logoLeft={require('../../TabOne/img/back.png')}
          navigation={navigation}
        />
      </View>
    ),
})

const styles = StyleSheet.create({
  headerTitle: {
    top: -10
  },
  backgroundImg: {
    width: width,
  },
  container: {
    alignItems: 'center',
  },
  pic: {
    marginTop: 37,
    marginBottom: 22,
  },
  name: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: 20,
    color: '#000000',
  },
  nameBox: {
    paddingBottom: 10,
  },
  timeBox: {
    paddingTop: 14,
    borderTopWidth: 1,
    borderTopColor: '#979797',
  },
  time: {
    fontFamily: 'PingFangSC-Light',
    fontSize: 16,
    color: '#9B9B9B',
    marginBottom: 42,
  },
  contentBox: {
    width: 275,
    marginBottom: 100,
  },
  content: {
    fontFamily: 'PingFangSC-Light',
    fontSize: 16,
    color: '#000000',
    marginBottom: 20,
  }
})

export default DetailThree;