Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src/components/TabOne/views/HospitalDoctors.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');

var _reactNavigation=require('react-navigation');
var _reactRedux=require('react-redux');


var _constants=require('../../../constants/');


var _selectors=require('../../../selectors/');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var


HospitalDoctors=function(_PureComponent){_inherits(HospitalDoctors,_PureComponent);function HospitalDoctors(){_classCallCheck(this,HospitalDoctors);return _possibleConstructorReturn(this,(HospitalDoctors.__proto__||Object.getPrototypeOf(HospitalDoctors)).apply(this,arguments));}_createClass(HospitalDoctors,[{key:'componentDidMount',value:function componentDidMount()

{var _props=
this.props,payload=_props.payload,dispatch=_props.dispatch;var
token=payload.token,id=payload.id;
dispatch({type:_constants.GET_SINGLE_HOSPITAL_DOCTORS,payload:{token:token,id:id}});
}},{key:'render',value:function render()

{var _props2=
this.props,hospitalDoctors=_props2.hospitalDoctors,payload=_props2.payload;var
token=payload.token,id=payload.id,navigation=payload.navigation;
return(
_react2.default.createElement(_reactNative.View,{__source:{fileName:_jsxFileName,lineNumber:26}},
_react2.default.createElement(_reactNative.TouchableOpacity,{onPress:function onPress(){navigation.navigate('DoctorDetail',{token:token,id:id});},__source:{fileName:_jsxFileName,lineNumber:27}},
_react2.default.createElement(_reactNative.Text,{__source:{fileName:_jsxFileName,lineNumber:28}},hospitalDoctors&&hospitalDoctors.getIn(['results','0','name'])))));



}}]);return HospitalDoctors;}(_react.PureComponent);exports.default=


(0,_reactRedux.connect)(
function(state){return(0,_selectors.getHospitalDoctorsSelector)(state);})(
HospitalDoctors);