Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='src/components/LoginScreen.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _immutable=require('redux-form/immutable');
var _reactRedux=require('react-redux');


var _common=require('./common/');


var _constants=require('../constants/');


var _styles=require('./styles/');


var _selectors=require('../selectors/');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var


LoginScreen=function(_PureComponent){_inherits(LoginScreen,_PureComponent);function LoginScreen(){_classCallCheck(this,LoginScreen);return _possibleConstructorReturn(this,(LoginScreen.__proto__||Object.getPrototypeOf(LoginScreen)).apply(this,arguments));}_createClass(LoginScreen,[{key:'render',value:function render()
{

return(
_react2.default.createElement(_reactNative.View,{style:_styles.ContainerStyle.container,__source:{fileName:_jsxFileName,lineNumber:25}},
_react2.default.createElement(_common.FormInput,_extends({},this.props,{kind:_constants.LOGIN,__source:{fileName:_jsxFileName,lineNumber:26}}))));


}}]);return LoginScreen;}(_react.PureComponent);



var LoginForm=(0,_immutable.reduxForm)({
form:'Login'})(
LoginScreen);



var mapStateToProps=function mapStateToProps(state){return{
toast:(0,_selectors.getInputInitial)(state)};};exports.default=


(0,_reactRedux.connect)(mapStateToProps)(LoginForm);