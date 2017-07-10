Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src/components/MainScreen.js';var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');

var _LoginStatusMessage=require('./LoginStatusMessage');var _LoginStatusMessage2=_interopRequireDefault(_LoginStatusMessage);
var _AuthButton=require('./AuthButton');var _AuthButton2=_interopRequireDefault(_AuthButton);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var styles=_reactNative.StyleSheet.create({
container:{
flex:1,
justifyContent:'center',
alignItems:'center',
backgroundColor:'#F5FCFF'}});



var MainScreen=function MainScreen(){return(
_react2.default.createElement(_reactNative.View,{style:styles.container,__source:{fileName:_jsxFileName,lineNumber:17}},
_react2.default.createElement(_LoginStatusMessage2.default,{__source:{fileName:_jsxFileName,lineNumber:18}}),
_react2.default.createElement(_AuthButton2.default,{__source:{fileName:_jsxFileName,lineNumber:19}})));};



MainScreen.navigationOptions={
title:'Home Screen'};exports.default=


MainScreen;