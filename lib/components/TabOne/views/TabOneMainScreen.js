Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src/components/TabOne/views/TabOneMainScreen.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');





var _reactRedux=require('react-redux');


var _selectors=require('../../../selectors/');
var _LoginStatusMessage=require('../../LoginStatusMessage');var _LoginStatusMessage2=_interopRequireDefault(_LoginStatusMessage);
var _AuthButton=require('../../AuthButton');var _AuthButton2=_interopRequireDefault(_AuthButton);


var _constants=require('../../../constants/');


var _styles=require('../../styles/');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

HomeMainScreen=function(_PureComponent){_inherits(HomeMainScreen,_PureComponent);
function HomeMainScreen(props){_classCallCheck(this,HomeMainScreen);return _possibleConstructorReturn(this,(HomeMainScreen.__proto__||Object.getPrototypeOf(HomeMainScreen)).call(this,
props));


}_createClass(HomeMainScreen,[{key:'componentDidMount',value:function componentDidMount()

{var _props=
this.props,token=_props.token,dispatch=_props.dispatch;
dispatch({type:_constants.GET_DOCTORS,payload:{token:token}});
dispatch({type:_constants.GET_POSTS,payload:{token:token}});
}},{key:'render',value:function render()

{var _props2=
this.props,loadingError=_props2.loadingError,doctors=_props2.doctors,posts=_props2.posts,navigation=_props2.navigation,token=_props2.token,dispatch=_props2.dispatch;

return(
_react2.default.createElement(_reactNative.View,{style:_styles.MainScreenStyle.container,__source:{fileName:_jsxFileName,lineNumber:38}},
_react2.default.createElement(_reactNative.Text,{__source:{fileName:_jsxFileName,lineNumber:39}},'loading data ....'),

doctors&&
_react2.default.createElement(_reactNative.TouchableWithoutFeedback,{onPress:function onPress(){navigation.navigate('DoctorDetail',{id:doctors.getIn(['results','0','id']),token:token});},__source:{fileName:_jsxFileName,lineNumber:42}},
_react2.default.createElement(_reactNative.View,{__source:{fileName:_jsxFileName,lineNumber:43}},
_react2.default.createElement(_reactNative.Text,{__source:{fileName:_jsxFileName,lineNumber:44}},'doctor: ',doctors.getIn(['results','0','name'])))),





posts&&
_react2.default.createElement(_reactNative.TouchableWithoutFeedback,{onPress:function onPress(){navigation.navigate('PostDetail',{id:posts.getIn(['results','0','id']),token:token});},__source:{fileName:_jsxFileName,lineNumber:51}},
_react2.default.createElement(_reactNative.View,{__source:{fileName:_jsxFileName,lineNumber:52}},
_react2.default.createElement(_reactNative.Text,{__source:{fileName:_jsxFileName,lineNumber:53}},'posts: ',posts.getIn(['results','0','title'])))),




_react2.default.createElement(_reactNative.TouchableWithoutFeedback,{onPress:function onPress(){navigation.navigate('NearHospital',{token:token});},__source:{fileName:_jsxFileName,lineNumber:58}},
_react2.default.createElement(_reactNative.View,{__source:{fileName:_jsxFileName,lineNumber:59}},
_react2.default.createElement(_reactNative.Text,{__source:{fileName:_jsxFileName,lineNumber:60}},'Go to nearby hospital')))));




}}]);return HomeMainScreen;}(_react.PureComponent);


HomeMainScreen.navigationOptions={
title:'Home Screen'};exports.default=


(0,_reactRedux.connect)(
function(state){return(0,_selectors.getHomeSelector)(state);})(
HomeMainScreen);