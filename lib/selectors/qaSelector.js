Object.defineProperty(exports,"__esModule",{value:true});exports.getSingleQaSelector=exports.getQaSelector=undefined;var _reselect=require('reselect');


var _commonSelector=require('./commonSelector');

var getQuestions=function getQuestions(state){return state.getIn(['qa','questions']);};

var getQaSelector=exports.getQaSelector=(0,_reselect.createSelector)(
[_commonSelector.getToken,getQuestions],
function(token,questions){return{
token:token,
questions:questions};});



var getQuestion=function getQuestion(state){return state.getIn(['qa','question']);};
var getQuestionAllImg=function getQuestionAllImg(state){return state.getIn(['qa','AllImg']);};
var getAnswers=function getAnswers(state){return state.getIn(['answer','answers']);};

var getSingleQaSelector=exports.getSingleQaSelector=(0,_reselect.createSelector)(
[getQuestion,getQuestionAllImg,getAnswers],
function(question,AllImg,answers){return{
question:question,
AllImg:AllImg,
answers:answers};});