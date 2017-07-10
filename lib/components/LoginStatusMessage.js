Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src/components/LoginStatusMessage.js';var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactRedux=require('react-redux');
var _reactNative=require('react-native');





var _reactNavigation=require('react-navigation');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var styles=_reactNative.StyleSheet.create({
welcome:{
fontSize:20,
textAlign:'center',
margin:10}});



var LoginStatusMessage=function LoginStatusMessage(_ref){var isLoggedIn=_ref.isLoggedIn,dispatch=_ref.dispatch;
if(!isLoggedIn){
return _react2.default.createElement(_reactNative.Text,{__source:{fileName:_jsxFileName,lineNumber:21}},'Please log in');
}
return(
_react2.default.createElement(_reactNative.View,{__source:{fileName:_jsxFileName,lineNumber:24}},
_react2.default.createElement(_reactNative.Text,{style:styles.welcome,__source:{fileName:_jsxFileName,lineNumber:25}},
'You are "logged in" right now'),

_react2.default.createElement(_reactNative.Button,{
onPress:function onPress(){return dispatch(_reactNavigation.NavigationActions.navigate({routeName:'Profile'}));},
title:'Profile',__source:{fileName:_jsxFileName,lineNumber:28}})));



};

LoginStatusMessage.propTypes={
isLoggedIn:_react.PropTypes.bool.isRequired,
dispatch:_react.PropTypes.func.isRequired};


var mapStateToProps=function mapStateToProps(state){return{
isLoggedIn:state.getIn(['auth','isLoggedIn'])};};exports.default=


(0,_reactRedux.connect)(mapStateToProps)(LoginStatusMessage);