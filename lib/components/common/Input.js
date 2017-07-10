Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='src/components/common/Input.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');

var _styles=require('../styles/');
var _HintMessage=require('./HintMessage');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

RenderInput=function(_Component){_inherits(RenderInput,_Component);function RenderInput(){_classCallCheck(this,RenderInput);return _possibleConstructorReturn(this,(RenderInput.__proto__||Object.getPrototypeOf(RenderInput)).apply(this,arguments));}_createClass(RenderInput,[{key:'render',value:function render()
{var _props=
this.props,label=_props.label,kind=_props.kind,returnKeyType=_props.returnKeyType,passwdRef=_props.passwdRef,onSubmit=_props.onSubmit,_props$input=_props.input,onChange=_props$input.onChange,value=_props$input.value,restInput=_objectWithoutProperties(_props$input,['onChange','value']),_props$meta=_props.meta,touched=_props$meta.touched,error=_props$meta.error,warning=_props$meta.warning,asyncValidating=_props$meta.asyncValidating;
return(
_react2.default.createElement(_reactNative.View,{__source:{fileName:_jsxFileName,lineNumber:11}},
_react2.default.createElement(_reactNative.TextInput,_extends({},
restInput,{
ref:passwdRef,
onSubmitEditing:onSubmit,
style:[_styles.InputStyle.input],
onChangeText:onChange,
keyboardType:kind==='password'?'default':'numbers-and-punctuation',
secureTextEntry:kind==='password'&&true,
returnKeyType:returnKeyType,
placeholder:label,
clearTextOnFocus:false,
placeholderTextColor:'#989898',__source:{fileName:_jsxFileName,lineNumber:12}})),

touched&&(error&&_react2.default.createElement(_HintMessage.HintMessage,{text:error,__source:{fileName:_jsxFileName,lineNumber:25}})||warning&&_react2.default.createElement(_HintMessage.HintMessage,{text:warning,__source:{fileName:_jsxFileName,lineNumber:25}}))));


}}]);return RenderInput;}(_react.Component);exports.default=


RenderInput;