'use strict'

import React from 'react';
import {
Text,
View,
TouchableOpacity,
Animated,
StyleSheet
} from 'react-native';

import Carousel from './Carousel'


export default class ScrollHeader extends React.Component {

renderHeight(){
if (this.props.scrollY) {
return(
  this.props.scrollY.interpolate({
    inputRange: [-100,0,200,200],
    outputRange: [this.props.height,this.props.height, 0, 0],
    extrapolate:'clamp'
  })
)
} else return this.props.height
};

renderHeader(){
return(
  <Animated.View
    style={{
      height: this.renderHeight(),
    }}>
    <View style={styles.carousel}><Carousel height={this.props.height} scrollY={this.props.scrollY} /></View>
  </Animated.View>
)
};


render(){
return(
<View>
  {this.renderHeader()}
  {this.props.children}
</View>
)
};
};

const styles = StyleSheet.create({
  carousel: {
    top: 0,
    zIndex: 10,
  },
})