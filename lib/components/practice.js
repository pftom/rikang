Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src/components/practice.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');

var _reactNavigation=require('react-navigation');
var _reactRedux=require('react-redux');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var


Practice=function(_Component){_inherits(Practice,_Component);function Practice(){_classCallCheck(this,Practice);return _possibleConstructorReturn(this,(Practice.__proto__||Object.getPrototypeOf(Practice)).apply(this,arguments));}_createClass(Practice,[{key:'render',value:function render()

{var _this2=this;
return(
_react2.default.createElement(_reactNative.TouchableOpacity,{style:{flex:1,alignItems:'center',justifyContent:'center'},onPress:function onPress(){return _this2.props.dispatch({type:'LOGIN',payload:{username:'13786684444',password:'huang1314'}});},__source:{fileName:_jsxFileName,lineNumber:12}},
_react2.default.createElement(_reactNative.Text,{__source:{fileName:_jsxFileName,lineNumber:13}},'hhhh')));


}}]);return Practice;}(_react.Component);exports.default=


(0,_reactRedux.connect)()(Practice);