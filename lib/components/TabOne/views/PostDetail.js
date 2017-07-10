Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src/components/TabOne/views/PostDetail.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');

var _reactNavigation=require('react-navigation');
var _reactRedux=require('react-redux');


var _constants=require('../../../constants/');


var _selectors=require('../../../selectors/');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var


PostDetail=function(_PureComponent){_inherits(PostDetail,_PureComponent);function PostDetail(){_classCallCheck(this,PostDetail);return _possibleConstructorReturn(this,(PostDetail.__proto__||Object.getPrototypeOf(PostDetail)).apply(this,arguments));}_createClass(PostDetail,[{key:'componentDidMount',value:function componentDidMount()

{var _props=
this.props,navigation=_props.navigation,dispatch=_props.dispatch;var _navigation$state$par=
navigation.state.params,token=_navigation$state$par.token,id=_navigation$state$par.id;

dispatch({type:_constants.GET_SINGLE_POST,payload:{token:token,id:id}});
}},{key:'render',value:function render()

{var
post=this.props.post;
console.log('post',post);
return(
_react2.default.createElement(_reactNative.Text,{__source:{fileName:_jsxFileName,lineNumber:27}},'hhhh'));

}}]);return PostDetail;}(_react.PureComponent);exports.default=


(0,_reactRedux.connect)(
function(state){return(0,_selectors.getPostSelector)(state);})(
PostDetail);