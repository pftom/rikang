Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src/components/TabOne/views/DoctorDetail.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');

var _reactNavigation=require('react-navigation');
var _reactRedux=require('react-redux');


var _selectors=require('../../../selectors/');


var _constants=require('../../../constants/');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var








DoctorDetail=function(_PureComponent){_inherits(DoctorDetail,_PureComponent);function DoctorDetail(){_classCallCheck(this,DoctorDetail);return _possibleConstructorReturn(this,(DoctorDetail.__proto__||Object.getPrototypeOf(DoctorDetail)).apply(this,arguments));}_createClass(DoctorDetail,[{key:'componentDidMount',value:function componentDidMount()

{var _props=
this.props,navigation=_props.navigation,dispatch=_props.dispatch;var _navigation$state$par=
navigation.state.params,token=_navigation$state$par.token,id=_navigation$state$par.id;

dispatch({type:_constants.GET_SINGLE_DOCTOR,payload:{token:token,id:id}});
dispatch({type:_constants.GET_SINGLE_DOCTOR_ANSWERS,payload:{token:token,id:id}});
dispatch({type:_constants.GET_SINGLE_DOCTOR_COMMENTS,payload:{token:token,id:id}});
}},{key:'render',value:function render()

{var _props2=
this.props,navigation=_props2.navigation,comments=_props2.comments,answers=_props2.answers,doctor=_props2.doctor,dispatch=_props2.dispatch;var _navigation$state$par2=
navigation.state.params,token=_navigation$state$par2.token,id=_navigation$state$par2.id;


return(
_react2.default.createElement(_reactNative.View,{__source:{fileName:_jsxFileName,lineNumber:37}},
_react2.default.createElement(_reactNative.TouchableOpacity,{onPress:function onPress(){navigation.navigate('DoctorDetailInfo',{id:id,token:token});},__source:{fileName:_jsxFileName,lineNumber:38}},
_react2.default.createElement(_reactNative.Text,{__source:{fileName:_jsxFileName,lineNumber:39}},'\u67E5\u770B\u8BE6\u7EC6\u8D44\u6599')),

_react2.default.createElement(_reactNative.TouchableOpacity,{onPress:function onPress(){dispatch({type:_constants.ADD_SINGLE_DOCTOR_FAV,payload:{token:token,id:id,doctor:doctor}});},__source:{fileName:_jsxFileName,lineNumber:41}},
_react2.default.createElement(_reactNative.Text,{__source:{fileName:_jsxFileName,lineNumber:42}},'\u6DFB\u52A0\u6536\u85CF'))));



}}]);return DoctorDetail;}(_react.PureComponent);exports.default=




(0,_reactRedux.connect)(
function(state){return(0,_selectors.getDoctorSelector)(state);})(
DoctorDetail);