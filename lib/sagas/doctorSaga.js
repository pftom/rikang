Object.defineProperty(exports,"__esModule",{value:true});exports.watchAddDoctorFav=exports.watchDoctorAnswers=exports.watchDoctorComments=exports.watchDoctorInfo=exports.watchGetDoctors=exports.watchGetDoctor=undefined;var _reduxSaga=require('redux-saga');
var _effects=require('redux-saga/effects');


var _constants=require('../constants/');































var _request=require('../configs/request');var _request2=_interopRequireDefault(_request);

var _config=require('../configs/config');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var _marked=[




getSingleDoctor,













getSingleDoctorInfo,













getSingleDoctorAnswers,












addSingleDoctorFav,












getSingleDoctorComments,













createSingleDoctorComments,














getDoctors,













watchGetDoctor,









watchGetDoctors,












watchDoctorInfo,









watchDoctorComments,









watchAddDoctorFav,









watchDoctorAnswers,








watchCreateSingleDoctorComment].map(regeneratorRuntime.mark);function getSingleDoctor(payload){var id,token,doctor;return regeneratorRuntime.wrap(function getSingleDoctor$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.prev=0;id=payload.id,token=payload.token;_context.next=4;return(0,_effects.call)(_request2.default.get,_config.base+(0,_config.homeSingleApi)(id).singleDoctor,null,token);case 4:doctor=_context.sent;_context.next=7;return(0,_effects.put)({type:_constants.GET_SINGLE_DOCTOR_SUCCESS,doctor:doctor});case 7:_context.next=13;break;case 9:_context.prev=9;_context.t0=_context['catch'](0);_context.next=13;return(0,_effects.put)({type:_constants.GET_SINGLE_DOCTOR_ERROR});case 13:case'end':return _context.stop();}}},_marked[0],this,[[0,9]]);}function getSingleDoctorInfo(payload){var id,token,doctorInfo;return regeneratorRuntime.wrap(function getSingleDoctorInfo$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.prev=0;id=payload.id,token=payload.token;_context2.next=4;return(0,_effects.call)(_request2.default.get,_config.base+(0,_config.homeSingleApi)(id).singleDoctorInfo,null,token);case 4:doctorInfo=_context2.sent;_context2.next=7;return(0,_effects.put)({type:_constants.GET_SINGLE_DOCTOR_INFO_SUCCESS,doctorInfo:doctorInfo});case 7:_context2.next=13;break;case 9:_context2.prev=9;_context2.t0=_context2['catch'](0);_context2.next=13;return(0,_effects.put)({type:_constants.GET_SINGLE_DOCTOR_INFO_ERROR});case 13:case'end':return _context2.stop();}}},_marked[1],this,[[0,9]]);}function getSingleDoctorAnswers(payload){var id,token,answers;return regeneratorRuntime.wrap(function getSingleDoctorAnswers$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:_context3.prev=0;id=payload.id,token=payload.token;_context3.next=4;return(0,_effects.call)(_request2.default.get,_config.base+(0,_config.homeSingleApi)(id).singleDoctorAnswers,null,token);case 4:answers=_context3.sent;_context3.next=7;return(0,_effects.put)({type:_constants.GET_SINGLE_DOCTOR_ANSWERS_SUCCESS,answers:answers});case 7:_context3.next=13;break;case 9:_context3.prev=9;_context3.t0=_context3['catch'](0);_context3.next=13;return(0,_effects.put)({type:_constants.GET_SINGLE_DOCTOR_ANSWERS_ERROR});case 13:case'end':return _context3.stop();}}},_marked[2],this,[[0,9]]);}function addSingleDoctorFav(payload){var id,token,doctor;return regeneratorRuntime.wrap(function addSingleDoctorFav$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:_context4.prev=0;id=payload.id,token=payload.token,doctor=payload.doctor;_context4.next=4;return(0,_effects.call)(_request2.default.get,_config.base+(0,_config.homeSingleApi)(id).addSingleDoctorFav,null,token);case 4:_context4.next=6;return(0,_effects.put)({type:_constants.ADD_SINGLE_DOCTOR_FAV_SUCCESS,doctor:doctor});case 6:_context4.next=12;break;case 8:_context4.prev=8;_context4.t0=_context4['catch'](0);_context4.next=12;return(0,_effects.put)({type:_constants.ADD_SINGLE_DOCTOR_FAV_ERROR});case 12:case'end':return _context4.stop();}}},_marked[3],this,[[0,8]]);}function getSingleDoctorComments(payload){var id,token,comments;return regeneratorRuntime.wrap(function getSingleDoctorComments$(_context5){while(1){switch(_context5.prev=_context5.next){case 0:_context5.prev=0;id=payload.id,token=payload.token;_context5.next=4;return(0,_effects.call)(_request2.default.get,_config.base+(0,_config.homeSingleApi)(id).singleDoctorComments,null,token);case 4:comments=_context5.sent;_context5.next=7;return(0,_effects.put)({type:_constants.GET_SINGLE_DOCTOR_COMMENTS_SUCCESS,comments:comments});case 7:_context5.next=13;break;case 9:_context5.prev=9;_context5.t0=_context5['catch'](0);_context5.next=13;return(0,_effects.put)({type:_constants.GET_SINGLE_DOCTOR_COMMENTS_ERROR});case 13:case'end':return _context5.stop();}}},_marked[4],this,[[0,9]]);}function createSingleDoctorComments(payload){var id,token,content,comments;return regeneratorRuntime.wrap(function createSingleDoctorComments$(_context6){while(1){switch(_context6.prev=_context6.next){case 0:_context6.prev=0;id=payload.id,token=payload.token,content=payload.content;_context6.next=4;return(0,_effects.call)(_request2.default.post,_config.base+(0,_config.homeSingleApi)(id).addsingleDoctorComments,content,token);case 4:comments=_context6.sent;_context6.next=7;return(0,_effects.put)({type:_constants.CREATE_SINGLE_DOCTOR_COMMENTS_SUCCESS,comments:comments});case 7:_context6.next=13;break;case 9:_context6.prev=9;_context6.t0=_context6['catch'](0);_context6.next=13;return(0,_effects.put)({type:_constants.CREATE_SINGLE_DOCTOR_COMMENTS_ERROR});case 13:case'end':return _context6.stop();}}},_marked[5],this,[[0,9]]);}function getDoctors(payload){var token,doctors;return regeneratorRuntime.wrap(function getDoctors$(_context7){while(1){switch(_context7.prev=_context7.next){case 0:_context7.prev=0;token=payload.token;_context7.next=4;return(0,_effects.call)(_request2.default.get,_config.base+_config.homeApi.doctors,null,token);case 4:doctors=_context7.sent;_context7.next=7;return(0,_effects.put)({type:_constants.GET_DOCTORS_SUCCESS,doctors:doctors});case 7:_context7.next=13;break;case 9:_context7.prev=9;_context7.t0=_context7['catch'](0);_context7.next=13;return(0,_effects.put)({type:_constants.GET_DOCTORS_ERROR});case 13:case'end':return _context7.stop();}}},_marked[6],this,[[0,9]]);}function watchGetDoctor(){var _ref,payload;return regeneratorRuntime.wrap(function watchGetDoctor$(_context8){while(1){switch(_context8.prev=_context8.next){case 0:if(!true){_context8.next=9;break;}_context8.next=3;return(0,_effects.take)(_constants.GET_SINGLE_DOCTOR);case 3:_ref=_context8.sent;payload=_ref.payload;_context8.next=7;return(0,_effects.call)(getSingleDoctor,payload);case 7:_context8.next=0;break;case 9:case'end':return _context8.stop();}}},_marked[7],this);}function watchGetDoctors(){var _ref2,payload;return regeneratorRuntime.wrap(function watchGetDoctors$(_context9){while(1){switch(_context9.prev=_context9.next){case 0:if(!true){_context9.next=9;break;}_context9.next=3;return(0,_effects.take)(_constants.GET_DOCTORS);case 3:_ref2=_context9.sent;payload=_ref2.payload;_context9.next=7;return(0,_effects.call)(getDoctors,payload);case 7:_context9.next=0;break;case 9:case'end':return _context9.stop();}}},_marked[8],this);}function watchDoctorInfo(){var _ref3,payload;return regeneratorRuntime.wrap(function watchDoctorInfo$(_context10){while(1){switch(_context10.prev=_context10.next){case 0:if(!true){_context10.next=9;break;}_context10.next=3;return(0,_effects.take)(_constants.GET_SINGLE_DOCTOR_INFO);case 3:_ref3=_context10.sent;payload=_ref3.payload;_context10.next=7;return(0,_effects.call)(getSingleDoctorInfo,payload);case 7:_context10.next=0;break;case 9:case'end':return _context10.stop();}}},_marked[9],this);}function watchDoctorComments(){var _ref4,payload;return regeneratorRuntime.wrap(function watchDoctorComments$(_context11){while(1){switch(_context11.prev=_context11.next){case 0:if(!true){_context11.next=9;break;}_context11.next=3;return(0,_effects.take)(_constants.GET_SINGLE_DOCTOR_COMMENTS);case 3:_ref4=_context11.sent;payload=_ref4.payload;_context11.next=7;return(0,_effects.call)(getSingleDoctorComments,payload);case 7:_context11.next=0;break;case 9:case'end':return _context11.stop();}}},_marked[10],this);}function watchAddDoctorFav(){var _ref5,payload;return regeneratorRuntime.wrap(function watchAddDoctorFav$(_context12){while(1){switch(_context12.prev=_context12.next){case 0:if(!true){_context12.next=9;break;}_context12.next=3;return(0,_effects.take)(_constants.ADD_SINGLE_DOCTOR_FAV);case 3:_ref5=_context12.sent;payload=_ref5.payload;_context12.next=7;return(0,_effects.call)(addSingleDoctorFav,payload);case 7:_context12.next=0;break;case 9:case'end':return _context12.stop();}}},_marked[11],this);}function watchDoctorAnswers(){var _ref6,payload;return regeneratorRuntime.wrap(function watchDoctorAnswers$(_context13){while(1){switch(_context13.prev=_context13.next){case 0:if(!true){_context13.next=9;break;}_context13.next=3;return(0,_effects.take)(_constants.GET_SINGLE_DOCTOR_ANSWERS);case 3:_ref6=_context13.sent;payload=_ref6.payload;_context13.next=7;return(0,_effects.call)(getSingleDoctorAnswers,payload);case 7:_context13.next=0;break;case 9:case'end':return _context13.stop();}}},_marked[12],this);}function watchCreateSingleDoctorComment(){var _ref7,payload;return regeneratorRuntime.wrap(function watchCreateSingleDoctorComment$(_context14){while(1){switch(_context14.prev=_context14.next){case 0:if(!
true){_context14.next=9;break;}_context14.next=3;return(

(0,_effects.take)(_constants.CREATE_SINGLE_DOCTOR_COMMENTS));case 3:_ref7=_context14.sent;payload=_ref7.payload;_context14.next=7;return(


(0,_effects.call)(createSingleDoctorComments,payload));case 7:_context14.next=0;break;case 9:case'end':return _context14.stop();}}},_marked[13],this);}exports.







watchGetDoctor=watchGetDoctor;exports.
watchGetDoctors=watchGetDoctors;exports.

watchDoctorInfo=watchDoctorInfo;exports.
watchDoctorComments=watchDoctorComments;exports.
watchDoctorAnswers=watchDoctorAnswers;exports.
watchAddDoctorFav=watchAddDoctorFav;