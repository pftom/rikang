Object.defineProperty(exports,"__esModule",{value:true});var _immutable=require('immutable');


var _constants=require('../constants/');

















var initialQaValue=(0,_immutable.Map)({
questions:null,
question:null,
AllImg:null,
isLoadingData:false,
loadingError:false,
loadingSuccess:false});


var qa=function qa(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:initialQaValue;var action=arguments[1];
switch(action.type){
case _constants.GET_QUESTIONS:
case _constants.GET_SINGLE_QUESTION:
case _constants.GET_SINGLE_QUESTION_ALL_IMG:

return state.merge({
isLoadingData:true,
loadingError:false,
loadingSuccess:false});


case _constants.GET_QUESTIONS_SUCCESS:var

questions=action.questions;

if(!state.get('questions')){
return state.merge({
questions:questions});

}

var oldQuestions=state.getIn(['questions','results']);
return state.
merge({
isLoadingData:false,
loadingSuccess:true,
questions:questions}).

updateIn(['questions','results'],function(list){return list.concat(oldQuestions);});


case _constants.GET_SINGLE_QUESTION_SUCCESS:var

question=action.question;

return state.merge({
isLoadingData:false,
loadingSuccess:true,
question:question});



case _constants.GET_SINGLE_QUESTION_ALL_IMG_SUCCESS:var

AllImg=action.AllImg;

return state.merge({
isLoadingData:false,
loadingSuccess:true,
AllImg:AllImg});


case _constants.GET_QUESTIONS_ERROR:
case _constants.GET_SINGLE_QUESTION_ERROR:
case _constants.GET_SINGLE_QUESTION_ALL_IMG_ERROR:

return state.merge({
isLoadingData:false,
loadingError:true});


default:
return state;}

};exports.default=

qa;