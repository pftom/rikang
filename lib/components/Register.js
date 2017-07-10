Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='src/components/Register.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _immutable=require('redux-form/immutable');
var _reactRedux=require('react-redux');


var _common=require('./common/');


var _constants=require('../constants/');


var _styles=require('./styles/');


var _selectors=require('../selectors/');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var


Register=function(_PureComponent){_inherits(Register,_PureComponent);function Register(){_classCallCheck(this,Register);return _possibleConstructorReturn(this,(Register.__proto__||Object.getPrototypeOf(Register)).apply(this,arguments));}_createClass(Register,[{key:'render',value:function render()
{

return(
_react2.default.createElement(_reactNative.View,{style:_styles.ContainerStyle.container,__source:{fileName:_jsxFileName,lineNumber:25}},
_react2.default.createElement(_common.FormInput,_extends({},this.props,{kind:_constants.REGISTER,__source:{fileName:_jsxFileName,lineNumber:26}}))));


}}]);return Register;}(_react.PureComponent);



var RegisterForm=(0,_immutable.reduxForm)({
form:'Register',
asyncBlurFields:['username']})(
Register);

var mapStateToProps=function mapStateToProps(state){return{
toast:(0,_selectors.getInputInitial)(state)};};exports.default=


(0,_reactRedux.connect)(mapStateToProps)(RegisterForm);