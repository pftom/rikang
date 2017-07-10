Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src/navigators/TabBarNavigation.js';var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _reactNavigation=require('react-navigation');

var _TabOneMainScreen=require('../components/TabOne/views/TabOneMainScreen');var _TabOneMainScreen2=_interopRequireDefault(_TabOneMainScreen);
var _TabTwoMainScreen=require('../components/TabTwo/views/TabTwoMainScreen');var _TabTwoMainScreen2=_interopRequireDefault(_TabTwoMainScreen);
var _TabThreeMainScreen=require('../components/TabThree/views/TabThreeMainScreen');var _TabThreeMainScreen2=_interopRequireDefault(_TabThreeMainScreen);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}


var routeConfigs={
TabOneNavigation:{
screen:_TabOneMainScreen2.default,
navigationOptions:{
tabBarLabel:'日康之家',
tabBarIcon:function tabBarIcon(_ref){var tintColor=_ref.tintColor;return(
_react2.default.createElement(_reactNative.Image,{
source:require('./img/homeBar.png'),
style:[styles.icon1,{tintColor:tintColor}],__source:{fileName:_jsxFileName,lineNumber:16}}));}}},




TabTwoNavigation:{
screen:_TabTwoMainScreen2.default,
navigationOptions:{
tabBarLabel:'日康知道',
tabBarIcon:function tabBarIcon(_ref2){var tintColor=_ref2.tintColor;return _react2.default.createElement(_reactNative.Image,{
source:require('./img/qaBar.png'),
style:
[styles.icon2,{tintColor:tintColor}],__source:{fileName:_jsxFileName,lineNumber:27}});}}},





TabThreeNavigation:{
screen:_TabThreeMainScreen2.default,
navigationOptions:{
tabBarLabel:'我的账号',
tabBarIcon:function tabBarIcon(_ref3){var tintColor=_ref3.tintColor;return(
_react2.default.createElement(_reactNative.Image,{
source:require('./img/userBar.png'),
style:[styles.icon3,{tintColor:tintColor}],__source:{fileName:_jsxFileName,lineNumber:41}}));}}}};







var tabNavigatorConfig={
tabBarOptions:{
activeTintColor:'#D0011B',
inactiveTintColor:'black',
style:{
height:59.5,
borderColor:'#E0E0E0',
borderWidth:0.5,
backgroundColor:'#F5F6F7',
paddingTop:4.7,
paddingLeft:25.3,
paddingRight:24},

labelStyle:{
fontFamily:'PingFangSC-Light',
fontSize:12,
top:0.3}},


backBehavior:'none',
lazy:true,
tabBarComponent:_reactNavigation.TabBarBottom,
tabBarPosition:'bottom',
swipeEnabled:false,
animationEnabled:false};



var styles=_reactNative.StyleSheet.create({
icon1:{
width:28,
height:30.71},

icon2:{
width:30,
height:29},

icon3:{
width:26,
height:30}});



var TabBarNavigation=(0,_reactNavigation.TabNavigator)(routeConfigs,tabNavigatorConfig);exports.default=

TabBarNavigation;