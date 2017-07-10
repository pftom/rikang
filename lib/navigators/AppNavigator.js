Object.defineProperty(exports,"__esModule",{value:true});exports.AppNavigator=exports.UserNavigator=undefined;var _jsxFileName='src/navigators/AppNavigator.js';var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactRedux=require('react-redux');
var _reactNative=require('react-native');
var _reactNavigation=require('react-navigation');


var _LoginScreen=require('../components/LoginScreen');var _LoginScreen2=_interopRequireDefault(_LoginScreen);
var _Register=require('../components/Register');var _Register2=_interopRequireDefault(_Register);






var _TabBarNavigation=require('./TabBarNavigation');var _TabBarNavigation2=_interopRequireDefault(_TabBarNavigation);
var _DoctorDetail=require('../components/TabOne/views/DoctorDetail');var _DoctorDetail2=_interopRequireDefault(_DoctorDetail);
var _PostDetail=require('../components/TabOne/views/PostDetail');var _PostDetail2=_interopRequireDefault(_PostDetail);

var _NearHospital=require('../components/TabOne/views/NearHospital');var _NearHospital2=_interopRequireDefault(_NearHospital);

var _HospitalDetail=require('../components/TabOne/views/HospitalDetail');var _HospitalDetail2=_interopRequireDefault(_HospitalDetail);

var _DoctorDetailInfo=require('../components/TabOne/views/DoctorDetailInfo');var _DoctorDetailInfo2=_interopRequireDefault(_DoctorDetailInfo);

var _ProfileScreen=require('../components/ProfileScreen');var _ProfileScreen2=_interopRequireDefault(_ProfileScreen);
var _practice=require('../components/practice');var _practice2=_interopRequireDefault(_practice);







var _QuestionDetail=require('../components/TabTwo/views/QuestionDetail');var _QuestionDetail2=_interopRequireDefault(_QuestionDetail);
var _AnswerDetail=require('../components/TabTwo/views/AnswerDetail');var _AnswerDetail2=_interopRequireDefault(_AnswerDetail);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}




var UserNavigator=exports.UserNavigator=(0,_reactNavigation.StackNavigator)({
Login:{screen:_LoginScreen2.default},
Register:{screen:_Register2.default}},

{
navigationOptions:{
gesturesEnabled:false,
header:null}});








var AppNavigator=exports.AppNavigator=(0,_reactNavigation.StackNavigator)({
TabBarNavigation:{screen:_TabBarNavigation2.default},
DoctorDetail:{screen:_DoctorDetail2.default},
PostDetail:{screen:_PostDetail2.default},
NearHospital:{screen:_NearHospital2.default},
HospitalDetail:{screen:_HospitalDetail2.default},
DoctorDetailInfo:{screen:_DoctorDetailInfo2.default},

UserNavigator:{screen:UserNavigator},

Profile:{screen:_ProfileScreen2.default},

QuestionDetail:{screen:_QuestionDetail2.default},
AnswerDetail:{screen:_AnswerDetail2.default}},

{
navigationOptions:{
headerLeft:null,
headerStyle:_reactNative.Platform.OS==='ios'?{height:90}:{height:88}},

initialRouteName:'TabBarNavigation'});



var AppWithNavigationState=function AppWithNavigationState(_ref){var dispatch=_ref.dispatch,nav=_ref.nav;return(
_react2.default.createElement(AppNavigator,{navigation:(0,_reactNavigation.addNavigationHelpers)({dispatch:dispatch,state:nav}),__source:{fileName:_jsxFileName,lineNumber:81}}));};


AppWithNavigationState.propTypes={
dispatch:_react.PropTypes.func.isRequired,
nav:_react.PropTypes.object.isRequired};


var mapStateToProps=function mapStateToProps(state){return{
nav:state.get('nav')};};exports.default=


(0,_reactRedux.connect)(mapStateToProps)(AppWithNavigationState);