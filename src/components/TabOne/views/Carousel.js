'use strict';

var React = require('react');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  Animated,
  TouchableHighlight,
} = require('react-native');

var ViewPager = require('./ViewPager');
var deviceWidth = Dimensions.get('window').width;
import px2dp from '../../../util';

var IMGS = [
  'https://images.unsplash.com/photo-1441742917377-57f78ee0e582?h=1024',
  'https://images.unsplash.com/photo-1441716844725-09cedc13a4e7?h=1024',
  'https://images.unsplash.com/photo-1441448770220-76743f9e6af6?h=1024',
  'https://images.unsplash.com/photo-1441260038675-7329ab4cc264?h=1024',
  'https://images.unsplash.com/photo-1441126270775-739547c8680c?h=1024',
];

var count = 0;

var SimpleScreen = React.createClass({
  getInitialState: function() {
    var dataSource = new ViewPager.DataSource({
      pageHasChanged: (p1, p2) => p1 !== p2,
    });

    return {
      dataSource: dataSource.cloneWithPages(IMGS),
      page: 0
    };
  },

  render: function() {
    return (
      <ViewPager
          ref={(viewpager) => {this.viewpager = viewpager}}
          style={this.props.style}
          dataSource={this.state.dataSource}
          renderPage={this._renderPage}
          isLoop={false}
          autoPlay={false}/>

    );
  },

  // renderHeight : function() {
  //   if (this.props.scrollY) {
  //   return(
  //     this.props.scrollY.interpolate({
  //       inputRange: [-200,0,200,200],
  //       outputRange: [this.props.height,this.props.height, 0, 0],
  //       extrapolate:'clamp'
  //     })
  //   )
  //   } else return this.props.height
  //   },

  _renderPage: function(
    data: Object,
    pageID: number | string,) {
    return (
      <Animated.Image
        source={{uri: data}}
        style={[styles.page, { height:  px2dp(184), opacity: this.props.imgOpacity }]} />
    );
  },
});

// this.renderHeight()

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  page: {
    width: deviceWidth,
  },
  button: {
    padding: 10,
  },
});

module.exports = SimpleScreen;