Object.defineProperty(exports,"__esModule",{value:true});var _immutable=require('redux-form/immutable');
var _reactNative=require('react-native');
var _reactNavigation=require('react-navigation');

var sleep=function sleep(ms){return new Promise(function(resolve){return setTimeout(resolve,ms);});};

var submit=function submit(values,kind,dispatch){
var username=values.get('username');
var password=values.get('password');

console.log('username',username);
console.log('password',password);


if(!username||!password){
throw new _immutable.SubmissionError({
_error:'账号密码不能为空'});

}

if(!!username&&username.length!==11){
throw new _immutable.SubmissionError({
_error:'账号或密码错误，请重新输入'});

}

if(!!password&&password.length<=6){
throw new _immutable.SubmissionError({
_error:'密码至少大于6位'});

}

if(!!password&&password.length>=20){
throw new _immutable.SubmissionError({
_error:'密码至少不能大于20位'});

}


var payload={
username:username,
password:password};




dispatch({type:kind,payload:payload});



};exports.default=

submit;