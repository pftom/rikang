Object.defineProperty(exports,"__esModule",{value:true});exports.watchCreateSingleQuestionAnswerComment=exports.watchGetQuestionAllComments=exports.watchUpvoteSingleQuestionAnswer=exports.watchGetSingleQuestionAnswer=exports.watchCreateSingleQuestionAnswer=exports.watchGetSingleQuestionAllAnswers=undefined;var _reduxSaga=require('redux-saga');
var _effects=require('redux-saga/effects');


var _constants=require('../constants/');


























var _request=require('../configs/request');var _request2=_interopRequireDefault(_request);

var _config=require('../configs/config');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var _marked=[




getSingleQuestionAllAnswer,












createAnswerForSingleQuestion,










getSingleAnswer,









upvoteSingleAnswer,









getSingleAnswerAllComments,









createSingleAnswerComment,












watchGetSingleQuestionAllAnswers,







watchCreateSingleQuestionAnswer,







watchGetSingleQuestionAnswer,







watchUpvoteSingleQuestionAnswer,







watchGetQuestionAllComments,







watchCreateSingleQuestionAnswerComment].map(regeneratorRuntime.mark);function getSingleQuestionAllAnswer(payload){var id,token,answers;return regeneratorRuntime.wrap(function getSingleQuestionAllAnswer$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.prev=0;id=payload.id,token=payload.token;_context.next=4;return(0,_effects.call)(_request2.default.get,_config.base+(0,_config.qaSingleApi)(id).singleQuestionAllImg,null,token);case 4:answers=_context.sent;_context.next=7;return(0,_effects.put)({type:_constants.GET_SINGLE_QUESTION_ALL_ANSWERS_SUCCESS,answers:answers});case 7:_context.next=13;break;case 9:_context.prev=9;_context.t0=_context['catch'](0);_context.next=13;return(0,_effects.put)({type:_constants.GET_SINGLE_QUESTION_ALL_ANSWERS_ERROR});case 13:case'end':return _context.stop();}}},_marked[0],this,[[0,9]]);}function createAnswerForSingleQuestion(payload){var id,token,body,createdAnswer;return regeneratorRuntime.wrap(function createAnswerForSingleQuestion$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.prev=0;id=payload.id,token=payload.token,body=payload.body;_context2.next=4;return(0,_effects.call)(_request2.default.post,_config.base+(0,_config.qaSingleApi)(id).addSingleQuestionAnswer,body,token);case 4:createdAnswer=_context2.sent;_context2.next=7;return(0,_effects.put)({type:_constants.CREATE_SINGLE_QUESTION_ANSWER_SUCCESS,createdAnswer:createdAnswer});case 7:_context2.next=13;break;case 9:_context2.prev=9;_context2.t0=_context2['catch'](0);_context2.next=13;return(0,_effects.put)({type:_constants.CREATE_SINGLE_QUESTION_ANSWER_ERROR});case 13:case'end':return _context2.stop();}}},_marked[1],this,[[0,9]]);}function getSingleAnswer(payload){var id,token,answer;return regeneratorRuntime.wrap(function getSingleAnswer$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:_context3.prev=0;id=payload.id,token=payload.token;_context3.next=4;return(0,_effects.call)(_request2.default.get,_config.base+(0,_config.qaSingleApi)(id).singleAnswer,null,token);case 4:answer=_context3.sent;_context3.next=7;return(0,_effects.put)({type:_constants.GET_SINGLE_QUESTION_ANSWER_SUCCESS,answer:answer});case 7:_context3.next=13;break;case 9:_context3.prev=9;_context3.t0=_context3['catch'](0);_context3.next=13;return(0,_effects.put)({type:_constants.GET_SINGLE_QUESTION_ANSWER_ERROR});case 13:case'end':return _context3.stop();}}},_marked[2],this,[[0,9]]);}function upvoteSingleAnswer(payload){var id,token,upvotedAnswer;return regeneratorRuntime.wrap(function upvoteSingleAnswer$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:_context4.prev=0;id=payload.id,token=payload.token;_context4.next=4;return(0,_effects.call)(_request2.default.get,_config.base+(0,_config.qaSingleApi)(id).singleAnswerUpvote,null,token);case 4:upvotedAnswer=_context4.sent;_context4.next=7;return(0,_effects.put)({type:_constants.UPVOTE_SINGLE_QUESTION_ANSWER_SUCCESS,upvotedAnswer:upvotedAnswer});case 7:_context4.next=13;break;case 9:_context4.prev=9;_context4.t0=_context4['catch'](0);_context4.next=13;return(0,_effects.put)({type:_constants.UPVOTE_SINGLE_QUESTION_ANSWER_ERROR});case 13:case'end':return _context4.stop();}}},_marked[3],this,[[0,9]]);}function getSingleAnswerAllComments(payload){var id,token,singleAnswerAllComments;return regeneratorRuntime.wrap(function getSingleAnswerAllComments$(_context5){while(1){switch(_context5.prev=_context5.next){case 0:_context5.prev=0;id=payload.id,token=payload.token;_context5.next=4;return(0,_effects.call)(_request2.default.get,_config.base+(0,_config.qaSingleApi)(id).singleAnswerAllComments,null,token);case 4:singleAnswerAllComments=_context5.sent;_context5.next=7;return(0,_effects.put)({type:_constants.GET_SINGLE_QUESTION_ALL_COMMENTS_SUCCESS,singleAnswerAllComments:singleAnswerAllComments});case 7:_context5.next=13;break;case 9:_context5.prev=9;_context5.t0=_context5['catch'](0);_context5.next=13;return(0,_effects.put)({type:_constants.GET_SINGLE_QUESTION_ALL_COMMENTS_ERROR});case 13:case'end':return _context5.stop();}}},_marked[4],this,[[0,9]]);}function createSingleAnswerComment(payload){var id,token,body;return regeneratorRuntime.wrap(function createSingleAnswerComment$(_context6){while(1){switch(_context6.prev=_context6.next){case 0:_context6.prev=0;id=payload.id,token=payload.token,body=payload.body;_context6.next=4;return(0,_effects.call)(_request2.default.post,_config.base+(0,_config.qaSingleApi)(id).createSingleAnswerComment,body,token);case 4:_context6.next=6;return(0,_effects.put)({type:_constants.CREATE_SINGLE_QUESTION_ANSWER_COMMENT_SUCCESS});case 6:_context6.next=12;break;case 8:_context6.prev=8;_context6.t0=_context6['catch'](0);_context6.next=12;return(0,_effects.put)({type:_constants.CREATE_SINGLE_QUESTION_ANSWER_COMMENT_ERROR});case 12:case'end':return _context6.stop();}}},_marked[5],this,[[0,8]]);}function watchGetSingleQuestionAllAnswers(){var _ref,payload;return regeneratorRuntime.wrap(function watchGetSingleQuestionAllAnswers$(_context7){while(1){switch(_context7.prev=_context7.next){case 0:if(!true){_context7.next=9;break;}_context7.next=3;return(0,_effects.take)(_constants.GET_SINGLE_QUESTION_ALL_ANSWERS);case 3:_ref=_context7.sent;payload=_ref.payload;_context7.next=7;return(0,_effects.call)(getSingleQuestionAllAnswer,payload);case 7:_context7.next=0;break;case 9:case'end':return _context7.stop();}}},_marked[6],this);}function watchCreateSingleQuestionAnswer(){var _ref2,payload;return regeneratorRuntime.wrap(function watchCreateSingleQuestionAnswer$(_context8){while(1){switch(_context8.prev=_context8.next){case 0:if(!true){_context8.next=9;break;}_context8.next=3;return(0,_effects.take)(_constants.CREATE_SINGLE_QUESTION_ANSWER);case 3:_ref2=_context8.sent;payload=_ref2.payload;_context8.next=7;return(0,_effects.call)(createAnswerForSingleQuestion,payload);case 7:_context8.next=0;break;case 9:case'end':return _context8.stop();}}},_marked[7],this);}function watchGetSingleQuestionAnswer(){var _ref3,payload;return regeneratorRuntime.wrap(function watchGetSingleQuestionAnswer$(_context9){while(1){switch(_context9.prev=_context9.next){case 0:if(!true){_context9.next=9;break;}_context9.next=3;return(0,_effects.take)(_constants.GET_SINGLE_QUESTION_ANSWER);case 3:_ref3=_context9.sent;payload=_ref3.payload;_context9.next=7;return(0,_effects.call)(getSingleAnswer,payload);case 7:_context9.next=0;break;case 9:case'end':return _context9.stop();}}},_marked[8],this);}function watchUpvoteSingleQuestionAnswer(){var _ref4,payload;return regeneratorRuntime.wrap(function watchUpvoteSingleQuestionAnswer$(_context10){while(1){switch(_context10.prev=_context10.next){case 0:if(!true){_context10.next=9;break;}_context10.next=3;return(0,_effects.take)(_constants.UPVOTE_SINGLE_QUESTION_ANSWER);case 3:_ref4=_context10.sent;payload=_ref4.payload;_context10.next=7;return(0,_effects.call)(upvoteSingleAnswer,payload);case 7:_context10.next=0;break;case 9:case'end':return _context10.stop();}}},_marked[9],this);}function watchGetQuestionAllComments(){var _ref5,payload;return regeneratorRuntime.wrap(function watchGetQuestionAllComments$(_context11){while(1){switch(_context11.prev=_context11.next){case 0:if(!true){_context11.next=9;break;}_context11.next=3;return(0,_effects.take)(_constants.GET_SINGLE_QUESTION_ALL_COMMENTS);case 3:_ref5=_context11.sent;payload=_ref5.payload;_context11.next=7;return(0,_effects.call)(getSingleAnswerAllComments,payload);case 7:_context11.next=0;break;case 9:case'end':return _context11.stop();}}},_marked[10],this);}function watchCreateSingleQuestionAnswerComment(){var _ref6,payload;return regeneratorRuntime.wrap(function watchCreateSingleQuestionAnswerComment$(_context12){while(1){switch(_context12.prev=_context12.next){case 0:if(!
true){_context12.next=9;break;}_context12.next=3;return(
(0,_effects.take)(_constants.CREATE_SINGLE_QUESTION_ANSWER_COMMENT));case 3:_ref6=_context12.sent;payload=_ref6.payload;_context12.next=7;return(

(0,_effects.call)(createSingleAnswerComment,payload));case 7:_context12.next=0;break;case 9:case'end':return _context12.stop();}}},_marked[11],this);}exports.







watchGetSingleQuestionAllAnswers=watchGetSingleQuestionAllAnswers;exports.
watchCreateSingleQuestionAnswer=watchCreateSingleQuestionAnswer;exports.
watchGetSingleQuestionAnswer=watchGetSingleQuestionAnswer;exports.
watchUpvoteSingleQuestionAnswer=watchUpvoteSingleQuestionAnswer;exports.
watchGetQuestionAllComments=watchGetQuestionAllComments;exports.
watchCreateSingleQuestionAnswerComment=watchCreateSingleQuestionAnswerComment;