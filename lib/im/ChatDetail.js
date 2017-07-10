Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src/im/ChatDetail.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');








var _leancloudRealtime=require('leancloud-realtime');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var _Dimensions$get=

_reactNative.Dimensions.get('window'),width=_Dimensions$get.width,height=_Dimensions$get.height;var

ChatDetail=function(_Component){_inherits(ChatDetail,_Component);

function ChatDetail(props){_classCallCheck(this,ChatDetail);var _this=_possibleConstructorReturn(this,(ChatDetail.__proto__||Object.getPrototypeOf(ChatDetail)).call(this,
props));

_this.handleChat=_this.handleChat.bind(_this);
_this.handleSendText=_this.handleSendText.bind(_this);
_this.handleChange=_this.handleChange.bind(_this);

_this.state={
maxResultsAmount:50,
draft:'',
messages:[],
hasLoadAllMessages:false};return _this;

}_createClass(ChatDetail,[{key:'handleChat',value:function handleChat(

clientId){

}},{key:'componentDidMount',value:function componentDidMount()

{
this.getCurrentConversation();
}},{key:'getCurrentConversation',value:function getCurrentConversation()

{var _this2=this;var
navigation=this.props.navigation;var _navigation$state$par=
navigation.state.params,imClient=_navigation$state$par.imClient,conv=_navigation$state$par.conv;
var that=this;
return imClient.getConversation(conv.id).
then(function(conversation){
console.log('conversation',conversation);
_this2.messageIterator=conversation.createMessagesIterator({limit:20});

_this2.currentConversation=conversation;
console.log('unreadMessagesCount',conversation);
_this2.currentConversation.on('message',_this2.readMarker);
_this2.currentConversation.on('message',_this2.messageUpdater);

_this2.loadMoreMessages();
conversation.read();
return conversation;
});
}},{key:'messageUpdater',value:function messageUpdater(

msg){
if(msg.transient&&msg.type===_leancloudRealtime.Message.TYPE){
return;
}var

messages=this.state.messages;
messages.push(msg);
this.setState({messages:messages});
}},{key:'readMarker',value:function readMarker(

msg){


if(msg.transient&&!conversation.transient){
return;
}

conversation.read();
}},{key:'componentWillUnmount',value:function componentWillUnmount()

{
this.currentConversation.off('message',this.messageUpdater);
this.currentConversation.off('message',this.readMarker);
}},{key:'send',value:function send(

message){
var that=this;var
messages=that.state.messages;
return this.getCurrentConversation().
then(function(conversation){
var sendPromise=conversation.send(message,{
receipt:conversation.members.length===2});

messages.push(message);
console.log(messages);
that.setState({
messages:messages});

return sendPromise;
}).
catch(console.error.bind(console));
}},{key:'sendText',value:function sendText()

{var
draft=this.state.draft;
if(!draft){
return;
}
var message=new _leancloudRealtime.TextMessage(draft);
this.setState({
draft:''});

return this.send(message);
}},{key:'loadMoreMessages',value:function loadMoreMessages()

{var _this3=this;
if(this.state.hasLoadAllMessages){
return;
}
var that=this;
return this.messageIterator.next().then(function(result){var
messages=that.state.messages;
var newState={};

if(result.done){
newState.hasLoadAllMessages=true;
}
newState.messages=result.value.concat(messages);
_this3.setState(newState);
});
}},{key:'handleChange',value:function handleChange(

value){
this.setState({
draft:value});

}},{key:'handleSendText',value:function handleSendText()

{
this.sendText();
}},{key:'render',value:function render()


{var _this4=this;var _props=
this.props,clientId=_props.clientId,navigation=_props.navigation;var _navigation$state$par2=
navigation.state.params,imClient=_navigation$state$par2.imClient,conv=_navigation$state$par2.conv;var
messages=this.state.messages;
return(
_react2.default.createElement(_reactNative.View,{style:styles.container,__source:{fileName:_jsxFileName,lineNumber:148}},
_react2.default.createElement(_reactNative.View,{style:styles.messageBody,__source:{fileName:_jsxFileName,lineNumber:149}},

messages.map(function(msg,key){return(
_react2.default.createElement(_reactNative.View,{key:key,style:imClient.id===msg.from?styles.isMine:styles.isYou,__source:{fileName:_jsxFileName,lineNumber:152}},
_react2.default.createElement(_reactNative.Text,{__source:{fileName:_jsxFileName,lineNumber:153}},msg.getText())));})),




_react2.default.createElement(_reactNative.View,{style:styles.inputBody,__source:{fileName:_jsxFileName,lineNumber:158}},
_react2.default.createElement(_reactNative.View,{__source:{fileName:_jsxFileName,lineNumber:159}},
_react2.default.createElement(_reactNative.TextInput,{
style:styles.textInput,
value:this.state.draft,
onChangeText:function onChangeText(value){return _this4.handleChange(value);},__source:{fileName:_jsxFileName,lineNumber:160}}))),


_react2.default.createElement(_reactNative.TouchableOpacity,{onPress:this.handleSendText,style:styles.sendBtn,__source:{fileName:_jsxFileName,lineNumber:166}},
_react2.default.createElement(_reactNative.Text,{__source:{fileName:_jsxFileName,lineNumber:167}},'\u53D1\u9001'))));



}}]);return ChatDetail;}(_react.Component);


var styles=_reactNative.StyleSheet.create({
container:{
flex:1},

messageBody:{
flex:1,
borderBottomWidth:1,
borderBottomColor:'#000'},

item:{
padding:10,
fontSize:18,
height:44},

inputBody:{
height:92,
width:width,
alignItems:'center',
justifyContent:'center'},

textInput:{
width:200,
height:40,
borderWidth:1,
borderColor:'#000',
marginBottom:10},

sendBtn:{
alignItems:'center'},

isMine:{
height:50,
backgroundColor:'#23BCBB',
alignItems:'flex-end'},

isYou:{
height:50,
backgroundColor:'#23BCBB'}});exports.default=



ChatDetail;