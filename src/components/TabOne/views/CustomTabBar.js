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
      <View style={[styles.tab ]}>
        <Text style={styles.text}>
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
        style={[styles.tabs, {backgroundColor: this.props.backgroundColor, }, this.props.style, ]}>
        {this.props.tabs.map((name, page) => {
          const isTabActive = this.props.activeTab === page;
          const renderTab = this.props.renderTab || this.renderTab;
          return renderTab(name, page, isTabActive, this.props.goToPage);
        })}
        <Animated.View style={[tabUnderlineStyle, { left, }, this.props.underlineStyle, ]}>
          <View
            style={styles.tabbarUnderLine}
          />
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
  tabs: {
    height: 49,
    flexDirection: 'row',
    justifyContent: 'space-around',
    
  },
  tabbarUnderLine: {
    height: 5,
    width: 73,
    borderRadius: 5,
    backgroundColor: '#FFF',
    marginTop: -6,
  },
  text: {
    fontFamily: 'PingFangSC-Medium',
    fontSize: 20,
    color: '#FFFFFF',
    letterSpacing: -0.4,
    backgroundColor: 'transparent',
    marginBottom: 3,
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
