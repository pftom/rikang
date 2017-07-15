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
      <View style={[styles.tab, this.props.custom && styles.customTab ]}>
        <Text style={this.props.custom ? styles.customText : styles.text}>
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
        width: 75,
        height: 4,
        bottom: 0,
        marginLeft: 60,
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
                style={styles.tabbarUnderLine}
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
    paddingBottom: 10,
    flexDirection: 'row',
    paddingTop: 3,
  },
  customTab: {
    backgroundColor: '#F5F6F7',
  },
  tabs: {
    height: 49,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  customTabs: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#E4E4E4',
    ...Platform.select({
      ios: {
      },
      android: {
        marginTop: 20.5,
      }
    })
  },
  tabbarUnderLine: {
    height: 5,
    width: 73,
    borderRadius: 5,
    backgroundColor: '#FFF',
    marginTop: -6,
  },
  tabbarCustom: {
    width: 60,
    height: 4,
    borderRadius: 2,
    marginTop: -4,
  },
  text: {
    fontFamily: 'PingFangSC-Medium',
    fontSize: 20,
    color: '#FFFFFF',
    letterSpacing: -0.4,
    backgroundColor: 'transparent',
    marginBottom: 3,
  },
  customText: {
    fontFamily: 'PingFangSC-Medium',
    fontSize: 18,
    color: '#09C79C',
  },
  gradient: {
    height: 5,
    width: 75,
    marginTop: -1,
  },
  img: {
    marginRight: 8,
    marginTop: -2,
  }
});

module.exports = DefaultTabBar;
