import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  Animated,
  TouchableWithoutFeedback
} from 'react-native';

import Swiper from 'react-native-swiper';
import px2dp from '../../../util/index';
import LinearGradient from 'react-native-linear-gradient';

const { width, height } = Dimensions.get('window');

const cutTitle = (text) => {
  if (String(text).length > 20) {
    return text.slice(0, 20) + '...';
  }
  return text;
}


class Carousel1 extends Component {

  render() {
    const { headline } = this.props;
    return (
      <Swiper 
        loop={true}
        autoplay={true}
        showsPagination={true}
        autoplayTimeout={3}
        activeDotStyle={{ backgroundColor: '#FFF' }}
        dot={<View 
        style={{
          backgroundColor:'transparent', 
          width: 8, height: 8,
          borderRadius: 4, marginLeft: 6, 
          marginRight: 6, marginTop: 3, 
          borderWidth: 1,
          borderColor: '#FFF',
          marginBottom: 3,}} />}
        dotStyle={{ backgroundColor: '#FFF'}}
        paginationStyle={{ top: -310 }}
        style={styles.container}>
        {
          headline.map((item, key) => (
            <TouchableWithoutFeedback key={key} onPress={() => this.props.navigation.navigate('TabOneScreenTwo', { title: '党建活动', data: { type: 0, id: 1 }})}>  
              <View style={styles.slide}>
                <Animated.Image source={{ uri: item.photo }} resizeMode={'stretch'} style={[ styles.img, { opacity: this.props.imgOpacity}]}>
                </Animated.Image>
                <LinearGradient
                  colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 1)']} 
                  style={styles.linearGradient}
                >
                  <View style={styles.textBox}><Text style={styles.text}>{cutTitle(item.title)}</Text></View>
                </LinearGradient>
              </View>
            </TouchableWithoutFeedback>
          ))
        }
      </Swiper>
    )
  }
}

const styles = StyleSheet.create({
  slide: {
    width: width,
    height: px2dp(184),
  },
  img: {
    width: width,
    height: px2dp(184),
  },
  textBox: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    width: width,
    top: 104,
  },
  text: {
    backgroundColor: 'transparent',
    fontFamily: 'PingFangSC-Medium',
    fontSize: 18,
    color: '#FFFFFF',
  },
  linearGradient: {
    width: width,
    height: 164,
    position: 'absolute',
    marginTop: 20,
  }
});

export default Carousel1;