Object.defineProperty(exports,"__esModule",{value:true});exports.default=


















































rootSaga;var _effects=require('redux-saga/effects');var _userSaga=require('./userSaga');var _postSaga=require('./postSaga');var _hospitalSaga=require('./hospitalSaga');var _doctorSaga=require('./doctorSaga');var _patientSaga=require('./patientSaga');var _questionSaga=require('./questionSaga');var _answerSaga=require('./answerSaga');var _marked=[rootSaga].map(regeneratorRuntime.mark);function rootSaga(){return regeneratorRuntime.wrap(function rootSaga$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return(
(0,_effects.all)([
(0,_userSaga.loginFlow)(),
(0,_userSaga.registerFlow)(),
(0,_userSaga.changePasswordFlow)(),
(0,_userSaga.clearFlow)(),

(0,_postSaga.watchGetPost)(),
(0,_postSaga.watchGetPosts)(),

(0,_hospitalSaga.watchGetHospital)(),
(0,_hospitalSaga.watchGetHospitals)(),
(0,_hospitalSaga.watchGetHospitalDoctors)(),

(0,_doctorSaga.watchGetDoctor)(),
(0,_doctorSaga.watchGetDoctors)(),
(0,_doctorSaga.watchDoctorInfo)(),
(0,_doctorSaga.watchDoctorComments)(),
(0,_doctorSaga.watchDoctorAnswers)(),
(0,_doctorSaga.watchAddDoctorFav)(),

(0,_patientSaga.watchGetPatientProfile)(),
(0,_patientSaga.watchUpdatePatientProfile)(),

(0,_questionSaga.watchGetQuestions)(),
(0,_questionSaga.watchCreateSingleQuestion)(),
(0,_questionSaga.watchAddSingleQuestionImg)(),
(0,_questionSaga.watchGetSingleQuestion)(),
(0,_questionSaga.watchUpdateSingleQuestion)(),
(0,_questionSaga.watchGetSingleQuestionAllImg)(),
(0,_questionSaga.watchStarSingleQuestion)(),


(0,_answerSaga.watchGetSingleQuestionAllAnswers)(),
(0,_answerSaga.watchCreateSingleQuestionAnswer)(),
(0,_answerSaga.watchGetSingleQuestionAnswer)(),
(0,_answerSaga.watchUpvoteSingleQuestionAnswer)(),
(0,_answerSaga.watchGetQuestionAllComments)(),
(0,_answerSaga.watchCreateSingleQuestionAnswerComment)()]));case 2:case'end':return _context.stop();}}},_marked[0],this);}