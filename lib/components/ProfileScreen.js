Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src/components/ProfileScreen.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');






var _reactRedux=require('react-redux');
var _reactNavigation=require('react-navigation');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}



var styles=_reactNative.StyleSheet.create({
container:{
flex:1,
justifyContent:'center',
alignItems:'center',
backgroundColor:'#F5FCFF'},

welcome:{
fontSize:20,
textAlign:'center',
margin:10}});var




ProfileScreen=function(_PureComponent){_inherits(ProfileScreen,_PureComponent);function ProfileScreen(){_classCallCheck(this,ProfileScreen);return _possibleConstructorReturn(this,(ProfileScreen.__proto__||Object.getPrototypeOf(ProfileScreen)).apply(this,arguments));}_createClass(ProfileScreen,[{key:'render',value:function render()
{var _this2=this;
console.log('props',this.props);
return(
_react2.default.createElement(_reactNative.View,{style:styles.container,__source:{fileName:_jsxFileName,lineNumber:33}},
_react2.default.createElement(_reactNative.Text,{style:styles.welcome,__source:{fileName:_jsxFileName,lineNumber:34}},'Profile Screen'),


_react2.default.createElement(_reactNative.TouchableOpacity,{onPress:function onPress(){return _this2.props.navigation.navigate('Login');},__source:{fileName:_jsxFileName,lineNumber:37}},
_react2.default.createElement(_reactNative.Text,{__source:{fileName:_jsxFileName,lineNumber:38}},'\u8DF3\u8F6C'))));



}}]);return ProfileScreen;}(_react.PureComponent);


ProfileScreen.navigationOptions={
title:'Profile'};exports.default=


(0,_reactRedux.connect)()(ProfileScreen);