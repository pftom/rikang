Object.defineProperty(exports,"__esModule",{value:true});var _button=require('antd-mobile/lib/button');var _button2=_interopRequireDefault(_button);var _toast=require('antd-mobile/lib/toast');var _toast2=_interopRequireDefault(_toast);var _jsxFileName='src/components/common/FormInput.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');






var _immutable=require('redux-form/immutable');


var _reactNavigation=require('react-navigation');


var _submit=require('../../utils/submit');var _submit2=_interopRequireDefault(_submit);


var _asyncValidate=require('../../utils/asyncValidate');var _asyncValidate2=_interopRequireDefault(_asyncValidate);


var _styles=require('../styles/');


var _Input=require('./Input');var _Input2=_interopRequireDefault(_Input);


var _constants=require('../../constants/');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var



FormInput=function(_Component){_inherits(FormInput,_Component);
function FormInput(props){_classCallCheck(this,FormInput);var _this=_possibleConstructorReturn(this,(FormInput.__proto__||Object.getPrototypeOf(FormInput)).call(this,
props));

_this.jump=_this.jump.bind(_this);
_this.selectSubmit=_this.selectSubmit.bind(_this);return _this;

}_createClass(FormInput,[{key:'jump',value:function jump()

{var _props=
this.props,navigation=_props.navigation,kind=_props.kind;
if(kind===_constants.REGISTER){
navigation.goBack();
}else{
navigation.navigate('Register');
}
}},{key:'selectSubmit',value:function selectSubmit(

values){var _props2=
this.props,kind=_props2.kind,dispatch=_props2.dispatch;
_reactNative.Keyboard.dismiss();
(0,_submit2.default)(values,kind,dispatch);
}},{key:'componentWillReceiveProps',value:function componentWillReceiveProps(

nextProps){var
toast=nextProps.toast;var
loginError=toast.loginError,loginSuccess=toast.loginSuccess,isLoadingData=toast.isLoadingData,registerError=toast.registerError;
if(loginError){
this.failToast('账号密码错误');
}

if(isLoadingData){
this.loadingToast();
}

if(loginSuccess){
this.successToast();
}

if(registerError){
this.failToast('注册失败');
}
}},{key:'successToast',value:function successToast()

{
_toast2.default.success('登录成功',1);
}},{key:'failToast',value:function failToast(

msg){
this.props.dispatch({type:_constants.CLEAR});
_toast2.default.fail(msg,1);
}},{key:'loadingToast',value:function loadingToast()

{
_toast2.default.loading('请稍后...',1);
}},{key:'render',value:function render()

{var _this2=this;var _props3=
this.props,handleSubmit=_props3.handleSubmit,toast=_props3.toast,initialValues=_props3.initialValues,pristine=_props3.pristine,load=_props3.load,submitting=_props3.submitting,error=_props3.error,kind=_props3.kind,reset=_props3.reset;
console.log('toast',toast);
return(
_react2.default.createElement(_reactNative.View,{style:_styles.InputStyle.container,__source:{fileName:_jsxFileName,lineNumber:94}},
_react2.default.createElement(_reactNative.TouchableOpacity,{onPress:this.jump,__source:{fileName:_jsxFileName,lineNumber:95}},
_react2.default.createElement(_reactNative.Text,{__source:{fileName:_jsxFileName,lineNumber:96}},kind===_constants.REGISTER?'返回':'新用户注册')),

_react2.default.createElement(_immutable.Field,{
name:'username',
component:_Input2.default,
kind:'username',
returnKeyType:'next',
onSubmit:function onSubmit(){return _this2.passwd.focus();},
label:'\u5728\u6B64\u8F93\u5165\u60A8\u7684\u624B\u673A\u53F7\u7801',__source:{fileName:_jsxFileName,lineNumber:98}}),
_react2.default.createElement(_immutable.Field,{
passwdRef:function passwdRef(pd){return _this2.passwd=pd;},
name:'password',
component:_Input2.default,
kind:'password',
onSubmit:handleSubmit(this.selectSubmit),
returnKeyType:'default',
label:'\u5728\u6B64\u8F93\u5165\u60A8\u7684\u5BC6\u7801',__source:{fileName:_jsxFileName,lineNumber:105}}),
error&&_react2.default.createElement(_reactNative.Text,{__source:{fileName:_jsxFileName,lineNumber:113}},error),
_react2.default.createElement(_button2.default,{type:'ghost',onClick:handleSubmit(this.selectSubmit),disabled:pristine||submitting,__source:{fileName:_jsxFileName,lineNumber:114}},'Submit')));




}}]);return FormInput;}(_react.Component);exports.default=


FormInput;