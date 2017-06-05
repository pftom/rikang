import React from 'react';
import { View, StyleSheet } from 'react-native'; 

import NewsItem from './NewsItem';



export default class News extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {
          NEWS.map((item, key) => (
            <NewsItem {...item} key={key} />
          ))
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    top: 290,
  }
})