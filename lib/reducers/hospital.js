Object.defineProperty(exports,"__esModule",{value:true});var _immutable=require('immutable');var _immutable2=_interopRequireDefault(_immutable);


var _constants=require('../constants/');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}















var initialHospitalValue=_immutable2.default.Map({
hospitals:null,
hospital:null,
hospitalDoctors:null,
isLoadingData:false,
loadingError:false,
loadingSuccess:false});


var hospitalValue=function hospitalValue(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:initialHospitalValue;var action=arguments[1];
switch(action.type){
case _constants.GET_HOSPITALS:
case _constants.GET_SINGLE_HOSPITAL:
case _constants.GET_SINGLE_HOSPITAL_DOCTORS:

return state.merge({
isLoadingData:true,
loadingError:false,
loadingSuccess:false});


case _constants.GET_HOSPITALS_SUCCESS:var

hospitals=action.hospitals;
console.log('hospitals',hospitals);
return state.merge({
isLoadingData:false,
loadingSuccess:true,
hospitals:hospitals});


case _constants.GET_SINGLE_HOSPITAL_SUCCESS:var

hospital=action.hospital;
return state.merge({
isLoadingData:false,
loadingSuccess:true,
hospital:hospital});


case _constants.GET_SINGLE_HOSPITAL_DOCTORS_SUCCESS:var

hospitalDoctors=action.hospitalDoctors;
return state.merge({
isLoadingData:false,
loadingSuccess:true,
hospitalDoctors:hospitalDoctors});



case _constants.GET_HOSPITALS_ERROR:
case _constants.GET_SINGLE_HOSPITAL_ERROR:
case _constants.GET_SINGLE_HOSPITAL_DOCTORS_ERROR:

return state.merge({
isLoadingData:false,
loadingError:true});


default:
return state;}

};exports.default=

hospitalValue;