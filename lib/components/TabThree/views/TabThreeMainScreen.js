Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src/components/TabThree/views/TabThreeMainScreen.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _reactRedux=require('react-redux');


var _constants=require('../../../constants/');


var _selectors=require('../../../selectors/');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var styles=_reactNative.StyleSheet.create({
container:{
flex:1,
justifyContent:'center',
alignItems:'center',
backgroundColor:'#F5FCFF'}});var




UserScreen=function(_PureComponent){_inherits(UserScreen,_PureComponent);function UserScreen(){_classCallCheck(this,UserScreen);return _possibleConstructorReturn(this,(UserScreen.__proto__||Object.getPrototypeOf(UserScreen)).apply(this,arguments));}_createClass(UserScreen,[{key:'componentDidMount',value:function componentDidMount()

{var _props=
this.props,dispatch=_props.dispatch,navigation=_props.navigation,token=_props.token;
dispatch({type:_constants.GET_PATIENT_PROFILE,payload:{token:token}});
}},{key:'render',value:function render()

{
return(
_react2.default.createElement(_reactNative.View,{style:styles.container,__source:{fileName:_jsxFileName,lineNumber:30}},
_react2.default.createElement(_reactNative.Text,{__source:{fileName:_jsxFileName,lineNumber:31}},'\u7528\u6237\u9875')));


}}]);return UserScreen;}(_react.PureComponent);



UserScreen.navigationOptions={
title:'User Screen'};exports.default=


(0,_reactRedux.connect)(
function(state){return(0,_selectors.getPatientSelector)(state);})(
UserScreen);