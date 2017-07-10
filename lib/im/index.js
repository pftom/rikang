Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src/im/index.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _leancloudStorage=require('leancloud-storage');var _leancloudStorage2=_interopRequireDefault(_leancloudStorage);
var _leancloudRealtime=require('leancloud-realtime');
var _leancloudRealtimePluginTypedMessages=require('leancloud-realtime-plugin-typed-messages');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

_leancloudStorage2.default.init({
appId:'QpmY5B86OewxLjxu2Yo6izF4-gzGzoHsz',
appKey:'gT9756x6BXMEAlAnNVyfS6q7'});


var realtime=new _leancloudRealtime.Realtime({
appId:'QpmY5B86OewxLjxu2Yo6izF4-gzGzoHsz',
plugins:[_leancloudRealtimePluginTypedMessages.TypedMessagesPlugin],
region:'cn'});


var LeanRT={};
LeanRT.realtime=realtime;
LeanRT.imClient=null;
LeanRT.currentConversation=null;var

Login=function(_Component){_inherits(Login,_Component);
function Login(props){_classCallCheck(this,Login);var _this=_possibleConstructorReturn(this,(Login.__proto__||Object.getPrototypeOf(Login)).call(this,
props));

_this.state={
clientId:'',
hhh:12,
messages:[]};


_this.handleLogin=_this.handleLogin.bind(_this);
_this.handleChange=_this.handleChange.bind(_this);return _this;
}_createClass(Login,[{key:'handleLogin',value:function handleLogin()



{var _this2=this;var
clientId=this.state.clientId;
LeanRT.realtime.createIMClient(clientId).
then(function(userClient){
LeanRT.imClient=userClient;
_this2.props.navigation.navigate('Chat',{clientId:_this2.state.clientId,LeanRT:LeanRT});
}).
catch(console.error.bind(console));
}},{key:'handleChange',value:function handleChange(

value){
var newState={};
newState.clientId=value,
this.setState(newState);
}},{key:'render',value:function render()

{var _this3=this;
console.log('state',this.state);
return(
_react2.default.createElement(_reactNative.View,{style:styles.container,__source:{fileName:_jsxFileName,lineNumber:58}},
_react2.default.createElement(_reactNative.View,{__source:{fileName:_jsxFileName,lineNumber:59}},
_react2.default.createElement(_reactNative.TextInput,{
style:styles.textInput,
value:this.state.clientId,
onChangeText:function onChangeText(value){return _this3.handleChange(value);},__source:{fileName:_jsxFileName,lineNumber:60}})),

_react2.default.createElement(_reactNative.TouchableOpacity,{onPress:this.handleLogin,__source:{fileName:_jsxFileName,lineNumber:65}},
_react2.default.createElement(_reactNative.Text,{__source:{fileName:_jsxFileName,lineNumber:66}},'\u767B\u5F55'))));



}}]);return Login;}(_react.Component);


var styles=_reactNative.StyleSheet.create({
container:{
flex:1,
alignItems:'center',
justifyContent:'center'},

textInput:{
width:200,
height:40,
borderWidth:1,
borderColor:'#000',
marginBottom:30}});exports.default=



Login;