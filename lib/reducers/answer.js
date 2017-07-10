Object.defineProperty(exports,"__esModule",{value:true});var _immutable=require('immutable');


var _constants=require('../constants/');









var initialAnswerValue=(0,_immutable.Map)({
answers:null,
isLoadingData:false,
loadingError:false,
loadingSuccess:false});


var answer=function answer(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:initialAnswerValue;var action=arguments[1];
switch(action.type){
case _constants.GET_SINGLE_QUESTION_ALL_ANSWERS:

return state.merge({
isLoadingData:true,
loadingError:false,
loadingSuccess:false});


case _constants.GET_SINGLE_QUESTION_ALL_ANSWERS_SUCCESS:var

answers=action.answers;
return state.
merge({
isLoadingData:false,
loadingSuccess:true,
answers:answers});




case _constants.GET_SINGLE_QUESTION_ALL_ANSWERS_ERROR:

return state.merge({
isLoadingData:false,
loadingError:true});


default:
return state;}

};exports.default=

answer;