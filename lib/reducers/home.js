Object.defineProperty(exports,"__esModule",{value:true});var _immutable=require('immutable');var _immutable2=_interopRequireDefault(_immutable);


var _constants=require('../constants/');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}























var initialHomeValue=_immutable2.default.Map({
doctors:null,
posts:null,
doctor:null,
post:null,
isLoadingData:false,
loadingError:false,
loadingSuccess:false});


var home=function home(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:initialHomeValue;var action=arguments[1];
switch(action.type){
case _constants.GET_DOCTORS:
case _constants.GET_POSTS:
case _constants.GET_SINGLE_POST:
case _constants.GET_SINGLE_DOCTOR:

return state.merge({
isLoadingData:true,
loadingError:false,
loadingSuccess:false});


case _constants.GET_DOCTORS_SUCCESS:var

doctors=action.doctors;
return state.merge({
isLoadingData:false,
loadingSuccess:true,
doctors:doctors});


case _constants.GET_POSTS_SUCCESS:var

posts=action.posts;
return state.merge({
isLoadingData:false,
loadingSuccess:true,
posts:posts});



case _constants.GET_SINGLE_DOCTOR_SUCCESS:var

doctor=action.doctor;
return state.merge({
isLoadingData:false,
loadingSuccess:true,
doctor:doctor});


case _constants.GET_SINGLE_POST_SUCCESS:var

post=action.post;
return state.merge({
isLoadingData:false,
loadingSuccess:true,
post:post});



case _constants.GET_DOCTORS_ERROR:
case _constants.GET_POSTS_ERROR:
case _constants.GET_SINGLE_DOCTOR_ERROR:
case _constants.GET_SINGLE_POST_ERROR:

return state.merge({
isLoadingData:false,
loadingError:true});


default:
return state;}

};exports.default=

home;