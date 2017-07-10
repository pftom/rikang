Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src/im/User.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var _Dimensions$get=

_reactNative.Dimensions.get('window'),width=_Dimensions$get.width,height=_Dimensions$get.height;

var normalConv=[];var

User=function(_Component){_inherits(User,_Component);

function User(props){_classCallCheck(this,User);var _this=_possibleConstructorReturn(this,(User.__proto__||Object.getPrototypeOf(User)).call(this,
props));

_this.state={
normalConv:[]};


_this.handleChat=_this.handleChat.bind(_this);return _this;
}_createClass(User,[{key:'getNormalConvs',value:function getNormalConvs()

{var _props=
this.props,clientId=_props.clientId,imClient=_props.imClient,navigation=_props.navigation,myId=_props.myId;
return imClient.getQuery().withLastMessagesRefreshed().containsMembers([clientId,myId]).find();
}},{key:'getConversations',value:function getConversations()

{
var that=this;
return this.getNormalConvs().
then(function(data){
that.setState({
normalConv:data});

});
}},{key:'componentDidMount',value:function componentDidMount()

{
this.getConversations();
}},{key:'handleChat',value:function handleChat()

{var _props2=
this.props,clientId=_props2.clientId,imClient=_props2.imClient,navigation=_props2.navigation,myId=_props2.myId;
return imClient.createConversation({
members:[myId],
name:clientId+' \u548C '+imClient.id+'\u7684\u5BF9\u8BDD',
transient:false,
unique:true}).
then(function(conversation){
console.log('hhhhh');
navigation.navigate('ChatDetail',{clientId:clientId,myId:myId,imClient:imClient,conv:conversation});
}).catch(console.error.bind(console));
}},{key:'render',value:function render()

{var _this2=this;var _props3=
this.props,myId=_props3.myId,imClient=_props3.imClient;var
normalConv=this.state.normalConv;
if(normalConv.length){
console.log('normal',normalConv[0]);
console.log('normalConv',imClient);
}
return(
_react2.default.createElement(_reactNative.TouchableOpacity,{style:styles.container,onPress:function onPress(){return _this2.handleChat();},__source:{fileName:_jsxFileName,lineNumber:60}},
_react2.default.createElement(_reactNative.Text,{style:styles.body,__source:{fileName:_jsxFileName,lineNumber:61}},myId),
_react2.default.createElement(_reactNative.Text,{style:styles.body,__source:{fileName:_jsxFileName,lineNumber:62}},normalConv.length&&normalConv[0].lastMessage._lctext)));


}}]);return User;}(_react.Component);


var styles=_reactNative.StyleSheet.create({
container:{
width:width,
height:40,
borderWidth:1,
borderColor:'#23BCBB',
marginBottom:2,
flexDirection:'row',
justifyContent:'space-between'},

body:{
fontSize:20,
color:'#000'}});exports.default=



User;