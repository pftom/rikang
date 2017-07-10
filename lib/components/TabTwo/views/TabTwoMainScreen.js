Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src/components/TabTwo/views/TabTwoMainScreen.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
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



QaScreen=function(_PureComponent){_inherits(QaScreen,_PureComponent);function QaScreen(){_classCallCheck(this,QaScreen);return _possibleConstructorReturn(this,(QaScreen.__proto__||Object.getPrototypeOf(QaScreen)).apply(this,arguments));}_createClass(QaScreen,[{key:'componentDidMount',value:function componentDidMount()

{var _props=
this.props,navigation=_props.navigation,dispatch=_props.dispatch,token=_props.token;

dispatch({type:_constants.GET_QUESTIONS,payload:{token:token}});
}},{key:'render',value:function render()

{var _props2=
this.props,questions=_props2.questions,navigation=_props2.navigation,token=_props2.token;
return(
_react2.default.createElement(_reactNative.View,{style:styles.container,__source:{fileName:_jsxFileName,lineNumber:31}},
_react2.default.createElement(_reactNative.TouchableOpacity,{onPress:function onPress(){navigation.navigate('QuestionDetail',{id:questions.getIn(['results','0','id']),token:token});},__source:{fileName:_jsxFileName,lineNumber:32}},
_react2.default.createElement(_reactNative.Text,{__source:{fileName:_jsxFileName,lineNumber:33}},questions&&questions.getIn(['results','0','title'])))));



}}]);return QaScreen;}(_react.PureComponent);


QaScreen.navigationOptions={
title:'Qa Screen'};exports.default=


(0,_reactRedux.connect)(
function(state){return(0,_selectors.getQaSelector)(state);})(
QaScreen);