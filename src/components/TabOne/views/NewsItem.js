import React from 'react';
import { Image, StyleSheet, View, Text, Dimensions } from 'react-native';
import { handleTime } from '../../../util/index';

const width = Dimensions.get('window').width;

const NewsItem = (props) => {
  let title = props.title;
  let time = handleTime(props.created);

  if (title.length >= 30) {
    title = title.slice(0, 30);
    title += '...';
  }
  
  return (
    <View style={styles.container}>
      <Image source={{ uri: props.photo }} style={styles.pic} />
      <View style={styles.textBox}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.time}>{time}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: width,
    flexDirection: 'row',
    borderBottomColor: '#D0021B',
    borderBottomWidth: 0.5,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#fff',
  },
  pic: {
    width: 124,
    height: 78,
    borderRadius: 5,
    left: 17,
  },
  textBox: {
    width: 177,
    height: 78,
    marginLeft: 45,
    justifyContent: 'space-around',
  },
  title: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: 16,
    color: 'rgba(0,0,0,0.80)',
  },
  time: {
    fontFamily: 'PingFangSC-Light',
    fontSize: 14,
    color: 'rgba(152,152,152,0.80)',
    marginTop: 5
  }
})

export default NewsItem;