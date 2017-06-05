import React, { Component } from 'react';
import { ListView, View, Animated, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

import NewsItem from '../TabOne/views/NewsItem';
import px2dp from '../../util';
const { width, height } = Dimensions.get('window');

class RefreshListView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollY: new Animated.Value(0),
    }
  }
  render() {
    const { dataSource, navigation,  headerTitle, headHeight, getScrollY } = this.props;
    let scrollY = this.state.scrollY.interpolate({
      inputRange: [-90, -50, 0, 0],
      outputRange: [-90, -50, 0, 0],
    })

    let style = {
      transform: [
        { translateY: scrollY }
      ]
    }

    return (
      <Animated.View
        style={[ styles.listBox, style ]}
      >
        <View style={ styles.listBox}>
          <ListView
          dataSource={dataSource}
          enableEmptySections
          showsVerticalScrollIndicator={false}
          automaticallyAdjustContentInsets={false}
          onEndReachedThreshold={10}
          renderRow={(rowData) => {
            return (
              <TouchableOpacity onPress={() => navigation.navigate('TabOneScreenTwo', { data: rowData, title: headerTitle })}>
                <NewsItem {...rowData} key={rowData.id} />
              </TouchableOpacity>
            )
          }}
          onScroll={
          Animated.event(
            [{nativeEvent: {contentOffset: {y: this.state.scrollY }}}]
          )
        }
        scrollEventThrottle={16}
        />
        </View>
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  listBox: {
    height: px2dp(height - 90 - 49 - 70),
    width,
  }
})

export default RefreshListView;