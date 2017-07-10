Object.defineProperty(exports,"__esModule",{value:true});exports.watchStarSingleQuestion=exports.watchGetSingleQuestionAllImg=exports.watchUpdateSingleQuestion=exports.watchGetSingleQuestion=exports.watchAddSingleQuestionImg=exports.watchCreateSingleQuestion=exports.watchGetQuestions=undefined;var _reduxSaga=require('redux-saga');
var _effects=require('redux-saga/effects');


var _constants=require('../constants/');






























var _request=require('../configs/request');var _request2=_interopRequireDefault(_request);

var _config=require('../configs/config');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var _marked=[





getQuestions,













createSingleQuestion,










addImgForQuestion,











getSingleQuestion,











updateSingleQuestion,











getSingleQuestionAllImg,











starSingleQuestion,













watchGetQuestions,







watchCreateSingleQuestion,







watchAddSingleQuestionImg,







watchGetSingleQuestion,







watchUpdateSingleQuestion,







watchGetSingleQuestionAllImg,







watchStarSingleQuestion].map(regeneratorRuntime.mark);function getQuestions(payload){var token,questions;return regeneratorRuntime.wrap(function getQuestions$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.prev=0;token=payload.token;_context.next=4;return(0,_effects.call)(_request2.default.get,_config.base+_config.qaApi.questions,null,token);case 4:questions=_context.sent;_context.next=7;return(0,_effects.put)({type:_constants.GET_QUESTIONS_SUCCESS,questions:questions});case 7:_context.next=13;break;case 9:_context.prev=9;_context.t0=_context['catch'](0);_context.next=13;return(0,_effects.put)({type:_constants.GET_QUESTIONS_ERROR});case 13:case'end':return _context.stop();}}},_marked[0],this,[[0,9]]);}function createSingleQuestion(payload){var token,body,question;return regeneratorRuntime.wrap(function createSingleQuestion$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.prev=0;token=payload.token,body=payload.body;_context2.next=4;return(0,_effects.call)(_request2.default.post,_config.base+_config.qaApi.addQuestion,body,token);case 4:question=_context2.sent;_context2.next=7;return(0,_effects.put)({type:_constants.CREATE_SINGLE_QUESTION_SUCCESS,question:question});case 7:_context2.next=13;break;case 9:_context2.prev=9;_context2.t0=_context2['catch'](0);_context2.next=13;return(0,_effects.put)({type:_constants.CREATE_SINGLE_QUESTION_ERROR});case 13:case'end':return _context2.stop();}}},_marked[1],this,[[0,9]]);}function addImgForQuestion(payload){var token,id,body,questionImg;return regeneratorRuntime.wrap(function addImgForQuestion$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:_context3.prev=0;token=payload.token,id=payload.id,body=payload.body;_context3.next=4;return(0,_effects.call)(_request2.default.post,_config.base+(0,_config.qaSingleApi)(id).addQuestionImg,body,token,true);case 4:questionImg=_context3.sent;_context3.next=7;return(0,_effects.put)({type:_constants.ADD_SINGLE_QUESTION_IMG_SUCCESS,questionImg:questionImg});case 7:_context3.next=13;break;case 9:_context3.prev=9;_context3.t0=_context3['catch'](0);_context3.next=13;return(0,_effects.put)({type:_constants.ADD_SINGLE_QUESTION_IMG_ERROR});case 13:case'end':return _context3.stop();}}},_marked[2],this,[[0,9]]);}function getSingleQuestion(payload){var token,id,question;return regeneratorRuntime.wrap(function getSingleQuestion$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:_context4.prev=0;token=payload.token,id=payload.id;_context4.next=4;return(0,_effects.call)(_request2.default.get,_config.base+(0,_config.qaSingleApi)(id).singleQuestion,null,token);case 4:question=_context4.sent;_context4.next=7;return(0,_effects.put)({type:_constants.GET_SINGLE_QUESTION_SUCCESS,question:question});case 7:_context4.next=13;break;case 9:_context4.prev=9;_context4.t0=_context4['catch'](0);_context4.next=13;return(0,_effects.put)({type:_constants.GET_SINGLE_QUESTION_ERROR});case 13:case'end':return _context4.stop();}}},_marked[3],this,[[0,9]]);}function updateSingleQuestion(payload){var token,id,body,question;return regeneratorRuntime.wrap(function updateSingleQuestion$(_context5){while(1){switch(_context5.prev=_context5.next){case 0:_context5.prev=0;token=payload.token,id=payload.id,body=payload.body;_context5.next=4;return(0,_effects.call)(_request2.default.put,_config.base+(0,_config.qaSingleApi)(id).updateSingleQuestion,token,body);case 4:question=_context5.sent;_context5.next=7;return(0,_effects.put)({type:_constants.UPDATE_SINGLE_QUESTION_SUCCESS,question:question});case 7:_context5.next=13;break;case 9:_context5.prev=9;_context5.t0=_context5['catch'](0);_context5.next=13;return(0,_effects.put)({type:_constants.UPDATE_SINGLE_QUESTION_ERROR});case 13:case'end':return _context5.stop();}}},_marked[4],this,[[0,9]]);}function getSingleQuestionAllImg(payload){var token,id,AllImg;return regeneratorRuntime.wrap(function getSingleQuestionAllImg$(_context6){while(1){switch(_context6.prev=_context6.next){case 0:_context6.prev=0;token=payload.token,id=payload.id;_context6.next=4;return(0,_effects.call)(_request2.default.get,_config.base+(0,_config.qaSingleApi)(id).singleQuestionAllImg,null,token);case 4:AllImg=_context6.sent;_context6.next=7;return(0,_effects.put)({type:_constants.GET_SINGLE_QUESTION_ALL_IMG_SUCCESS,AllImg:AllImg});case 7:_context6.next=13;break;case 9:_context6.prev=9;_context6.t0=_context6['catch'](0);_context6.next=13;return(0,_effects.put)({type:_constants.GET_SINGLE_QUESTION_ALL_IMG_ERROR});case 13:case'end':return _context6.stop();}}},_marked[5],this,[[0,9]]);}function starSingleQuestion(payload){var token,id,question;return regeneratorRuntime.wrap(function starSingleQuestion$(_context7){while(1){switch(_context7.prev=_context7.next){case 0:_context7.prev=0;token=payload.token,id=payload.id,question=payload.question;_context7.next=4;return(0,_effects.call)(_request2.default.get,_config.base+(0,_config.qaSingleApi)(id).singleQuestionStar,null,token);case 4:_context7.next=6;return(0,_effects.put)({type:_constants.STAR_SINGLE_QUESTION_SUCCESS,question:question});case 6:_context7.next=12;break;case 8:_context7.prev=8;_context7.t0=_context7['catch'](0);_context7.next=12;return(0,_effects.put)({type:_constants.STAR_SINGLE_QUESTION_ERROR});case 12:case'end':return _context7.stop();}}},_marked[6],this,[[0,8]]);}function watchGetQuestions(){var _ref,payload;return regeneratorRuntime.wrap(function watchGetQuestions$(_context8){while(1){switch(_context8.prev=_context8.next){case 0:if(!true){_context8.next=9;break;}_context8.next=3;return(0,_effects.take)(_constants.GET_QUESTIONS);case 3:_ref=_context8.sent;payload=_ref.payload;_context8.next=7;return(0,_effects.call)(getQuestions,payload);case 7:_context8.next=0;break;case 9:case'end':return _context8.stop();}}},_marked[7],this);}function watchCreateSingleQuestion(){var _ref2,payload;return regeneratorRuntime.wrap(function watchCreateSingleQuestion$(_context9){while(1){switch(_context9.prev=_context9.next){case 0:if(!true){_context9.next=9;break;}_context9.next=3;return(0,_effects.take)(_constants.CREATE_SINGLE_QUESTION);case 3:_ref2=_context9.sent;payload=_ref2.payload;_context9.next=7;return(0,_effects.call)(createSingleQuestion,payload);case 7:_context9.next=0;break;case 9:case'end':return _context9.stop();}}},_marked[8],this);}function watchAddSingleQuestionImg(){var _ref3,payload;return regeneratorRuntime.wrap(function watchAddSingleQuestionImg$(_context10){while(1){switch(_context10.prev=_context10.next){case 0:if(!true){_context10.next=9;break;}_context10.next=3;return(0,_effects.take)(_constants.ADD_SINGLE_QUESTION_IMG);case 3:_ref3=_context10.sent;payload=_ref3.payload;_context10.next=7;return(0,_effects.call)(addImgForQuestion,payload);case 7:_context10.next=0;break;case 9:case'end':return _context10.stop();}}},_marked[9],this);}function watchGetSingleQuestion(){var _ref4,payload;return regeneratorRuntime.wrap(function watchGetSingleQuestion$(_context11){while(1){switch(_context11.prev=_context11.next){case 0:if(!true){_context11.next=9;break;}_context11.next=3;return(0,_effects.take)(_constants.GET_SINGLE_QUESTION);case 3:_ref4=_context11.sent;payload=_ref4.payload;_context11.next=7;return(0,_effects.call)(getSingleQuestion,payload);case 7:_context11.next=0;break;case 9:case'end':return _context11.stop();}}},_marked[10],this);}function watchUpdateSingleQuestion(){var _ref5,payload;return regeneratorRuntime.wrap(function watchUpdateSingleQuestion$(_context12){while(1){switch(_context12.prev=_context12.next){case 0:if(!true){_context12.next=9;break;}_context12.next=3;return(0,_effects.take)(_constants.UPDATE_SINGLE_QUESTION);case 3:_ref5=_context12.sent;payload=_ref5.payload;_context12.next=7;return(0,_effects.call)(updateSingleQuestion,payload);case 7:_context12.next=0;break;case 9:case'end':return _context12.stop();}}},_marked[11],this);}function watchGetSingleQuestionAllImg(){var _ref6,payload;return regeneratorRuntime.wrap(function watchGetSingleQuestionAllImg$(_context13){while(1){switch(_context13.prev=_context13.next){case 0:if(!true){_context13.next=9;break;}_context13.next=3;return(0,_effects.take)(_constants.GET_SINGLE_QUESTION_ALL_IMG);case 3:_ref6=_context13.sent;payload=_ref6.payload;_context13.next=7;return(0,_effects.call)(getSingleQuestionAllImg,payload);case 7:_context13.next=0;break;case 9:case'end':return _context13.stop();}}},_marked[12],this);}function watchStarSingleQuestion(){var _ref7,payload;return regeneratorRuntime.wrap(function watchStarSingleQuestion$(_context14){while(1){switch(_context14.prev=_context14.next){case 0:if(!
true){_context14.next=9;break;}_context14.next=3;return(
(0,_effects.take)(_constants.STAR_SINGLE_QUESTION));case 3:_ref7=_context14.sent;payload=_ref7.payload;_context14.next=7;return(

(0,_effects.call)(starSingleQuestion,payload));case 7:_context14.next=0;break;case 9:case'end':return _context14.stop();}}},_marked[13],this);}exports.








watchGetQuestions=watchGetQuestions;exports.
watchCreateSingleQuestion=watchCreateSingleQuestion;exports.
watchAddSingleQuestionImg=watchAddSingleQuestionImg;exports.
watchGetSingleQuestion=watchGetSingleQuestion;exports.
watchUpdateSingleQuestion=watchUpdateSingleQuestion;exports.
watchGetSingleQuestionAllImg=watchGetSingleQuestionAllImg;exports.
watchStarSingleQuestion=watchStarSingleQuestion;