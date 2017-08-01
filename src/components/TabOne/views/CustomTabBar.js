const React = require('react');
const { ViewPropTypes } = ReactNative = require('react-native');
const {
  StyleSheet,
  Text,
  View,
  Animated,
  Image,
  Platform,
  TouchableOpacity,
} = ReactNative;

const Button = require('../../common/Button');
import LinearGradient from 'react-native-linear-gradient';

import px2dp from '../../../utils/px2dp';


const DefaultTabBar = React.createClass({
  propTypes: {
    goToPage: React.PropTypes.func,
    activeTab: React.PropTypes.number,
    tabs: React.PropTypes.array,
    backgroundColor: React.PropTypes.string,
    activeTextColor: React.PropTypes.string,
    inactiveTextColor: React.PropTypes.string,
    textStyle: Text.propTypes.style,
    tabStyle: ViewPropTypes.style,
    renderTab: React.PropTypes.func,
    underlineStyle: ViewPropTypes.style,
  },

  getDefaultProps() {
    return {
      activeTextColor: 'navy',
      inactiveTextColor: 'black',
      backgroundColor: null,
    };
  },

  renderTabOption(name, page) {
  },


  renderTab(name, page, isTabActive, onPressHandler) {

    return <Button
      style={{flex: 1, }}
      key={name}
      accessible={true}
      accessibilityLabel={name}
      accessibilityTraits='button'
      onPress={() => onPressHandler(page)}
    >
      <View style={[styles.tab, this.props.custom && styles.customTab, this.props.multiCustom && styles.multiCustom ]}>
        <Text style={[ this.props.custom ? styles.customText : styles.text, this.props.tabTextStyle ]}>
          {name}
        </Text>
      </View>
    </Button>;
  },

  render() {
    const containerWidth = this.props.containerWidth;
    const numberOfTabs = this.props.tabs.length;
    let tabUnderlineStyle = null;

    if (Platform.OS === 'ios') {
      tabUnderlineStyle = {
        position: 'absolute',
        width: px2dp(75),
        height: px2dp(4),
        bottom: 0,
        marginLeft: px2dp(60),
      };
    } else {
      tabUnderlineStyle = {
        position: 'absolute',
        width: containerWidth / numberOfTabs,
        bottom: 0,
        justifyContent: "center",
        alignItems: "center"
      }
    }

    const left = this.props.scrollValue.interpolate({
      inputRange: [0, 1, ], outputRange: [0,  containerWidth / numberOfTabs, ],
    });
    return (
      <View 
        style={[styles.tabs, this.props.custom && styles.customTabs ]}>
        {this.props.tabs.map((name, page) => {
          const isTabActive = this.props.activeTab === page;
          const renderTab = this.props.renderTab || this.renderTab;
          return renderTab(name, page, isTabActive, this.props.goToPage);
        })}
        <Animated.View style={[tabUnderlineStyle, { left, }, this.props.underlineStyle, ]}>
          {
            this.props.custom 
            ? (
              <LinearGradient
                start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}
                colors={['#23BCBB', '#45E994']}
                style={styles.tabbarCustom}
              />
            )
            : (
              <View
                style={[ styles.tabbarUnderLine ]}
              />
            )
          }
        </Animated.View>
      </View>
    );
  },
});

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: px2dp(10),
    flexDirection: 'row',
    paddingTop: px2dp(3),
  },
  customTab: {
    backgroundColor: '#F5F6F7',
  },
  tabs: {
    height: px2dp(49),
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  customTabs: {
    borderBottomWidth: px2dp(0.5),
    borderBottomColor: '#E4E4E4',
    ...Platform.select({
      ios: {
      },
      android: {
        marginTop: px2dp(20.5),
      }
    })
  },
  tabbarUnderLine: {
    height: px2dp(5),
    width: px2dp(73),
    borderRadius: px2dp(5),
    backgroundColor: '#FFF',
    marginTop: px2dp(-6),
  },
  tabbarCustom: {
    width: px2dp(60),
    height: px2dp(4),
    borderRadius: px2dp(2),
    ...Platform.select({
      ios: {
         marginTop: px2dp(-4),
      },
      android: {
         marginTop: px2dp(-7),
      }
    }),
  },
  text: {
    fontFamily: 'PingFangSC-Medium',
    fontSize: px2dp(20),
    color: '#FFFFFF',
    letterSpacing: px2dp(-0.4),
    backgroundColor: 'transparent',
    marginBottom: px2dp(3),
  },
  customText: {
    fontFamily: 'PingFangSC-Medium',
    fontSize: px2dp(18),
    color: '#09C79C',
  },
  gradient: {
    height: px2dp(5),
    width: px2dp(75),
    marginTop: px2dp(-1),
  },
  img: {
    marginRight: px2dp(8),
    marginTop: px2dp(-2),
  }
});

module.exports = DefaultTabBar;
