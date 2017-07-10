Object.defineProperty(exports,"__esModule",{value:true});var _immutable=require('immutable');


var _constants=require('../constants/');












var initialPatientValue=(0,_immutable.Map)({
doctorFav:(0,_immutable.List)([]),
postFav:(0,_immutable.List)([]),
questionStar:(0,_immutable.List)([]),
isLoadingData:false,
loadingError:false,
loadingSuccess:false});


var fav=function fav(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:initialPatientValue;var action=arguments[1];
switch(action.type){
case _constants.ADD_SINGLE_DOCTOR_FAV:
case _constants.STAR_SINGLE_QUESTION:

return state.merge({
isLoadingData:true,
loadingError:false,
loadingSuccess:false});


case _constants.ADD_SINGLE_DOCTOR_FAV_SUCCESS:var

doctor=action.doctor;
return state.
update('doctorFav',function(list){return list.unshift(doctor);}).
merge({
isLoadingData:false,
loadingSuccess:true});


case _constants.STAR_SINGLE_QUESTION_SUCCESS:var

question=action.question;

return state.
update('questionStar',function(list){return list.unshift(question);}).
merge({
isLoadingData:false,
loadingSuccess:true});


case _constants.ADD_SINGLE_DOCTOR_FAV_ERROR:
case _constants.STAR_SINGLE_QUESTION_ERROR:

return state.merge({
isLoadingData:false,
loadingError:true});


default:
return state;}

};exports.default=

fav;