Object.defineProperty(exports,"__esModule",{value:true});exports.ContainerStyle=exports.InputStyle=undefined;var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}


var InputStyle=exports.InputStyle=_reactNative.StyleSheet.create({
input:{
borderColor:'black',
borderWidth:1,
height:37,
width:250,
marginTop:10},

asyncValidating:{
borderColor:'red'},

button:{
backgroundColor:'blue',
color:'white',
height:30,
lineHeight:30,
marginTop:10,
textAlign:'center',
width:250}});




var ContainerStyle=exports.ContainerStyle=_reactNative.StyleSheet.create({
container:{
flex:1,
justifyContent:'center',
alignItems:'center'}});