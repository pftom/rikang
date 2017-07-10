Object.defineProperty(exports,"__esModule",{value:true});var _immutable=require('immutable');var _immutable2=_interopRequireDefault(_immutable);


var _constants=require('../constants/');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
















var initialDoctorValue=_immutable2.default.Map({
doctorInfo:null,
answers:null,
comments:null,
isLoadingData:false,
loadingError:false,
loadingSuccess:false});


var doctor=function doctor(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:initialDoctorValue;var action=arguments[1];
switch(action.type){
case _constants.GET_SINGLE_DOCTOR_INFO:
case _constants.GET_SINGLE_DOCTOR_ANSWERS:
case _constants.GET_SINGLE_DOCTOR_COMMENTS:

return state.merge({
isLoadingData:true,
loadingError:false,
loadingSuccess:false});


case _constants.GET_SINGLE_DOCTOR_INFO_SUCCESS:var

doctorInfo=action.doctorInfo;
return state.merge({
isLoadingData:false,
loadingSuccess:true,
doctorInfo:doctorInfo});


case _constants.GET_SINGLE_DOCTOR_ANSWERS_SUCCESS:var

answers=action.answers;
return state.merge({
isLoadingData:false,
loadingSuccess:true,
answers:answers});



case _constants.GET_SINGLE_DOCTOR_COMMENTS_SUCCESS:var

comments=action.comments;
return state.merge({
isLoadingData:false,
loadingSuccess:true,
comments:comments});




case _constants.GET_SINGLE_DOCTOR_INFO_ERROR:
case _constants.GET_SINGLE_DOCTOR_ANSWERS_ERROR:
case _constants.GET_SINGLE_DOCTOR_COMMENTS_ERROR:

return state.merge({
isLoadingData:false,
loadingError:true});


default:
return state;}

};exports.default=

doctor;