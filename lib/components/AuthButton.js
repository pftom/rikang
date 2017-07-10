Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src/components/AuthButton.js';var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactRedux=require('react-redux');
var _reactNative=require('react-native');
var _reactNavigation=require('react-navigation');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var AuthButton=function AuthButton(_ref){var logout=_ref.logout,login=_ref.login,isLoggedIn=_ref.isLoggedIn;return(
_react2.default.createElement(_reactNative.Button,{
title:isLoggedIn?'Log Out':'Log In',
onPress:isLoggedIn?logout:login,__source:{fileName:_jsxFileName,lineNumber:7}}));};



AuthButton.propTypes={
isLoggedIn:_react.PropTypes.bool.isRequired,
logout:_react.PropTypes.func.isRequired,
login:_react.PropTypes.func.isRequired};


var mapStateToProps=function mapStateToProps(state){return{
isLoggedIn:state.getIn(['auth','isLoggedIn'])};};


var mapDispatchToProps=function mapDispatchToProps(dispatch){return{
logout:function logout(){return dispatch({type:'LOGOUT'});},
login:function login(){return dispatch(_reactNavigation.NavigationActions.navigate({routeName:'Login'}));}};};exports.default=


(0,_reactRedux.connect)(mapStateToProps,mapDispatchToProps)(AuthButton);